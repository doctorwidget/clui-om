(ns joy.externs-for-cljs
  (:require [cljs.compiler :as comp]
            [cljs.analyzer :as ana]
            [clojure.walk :refer [prewalk]]
            [clojure.pprint :refer [pprint]]
            [clojure.java.io :as io])
  (:import (clojure.lang LineNumberingPushbackReader)))

(defn read-file
  "Read the contents of filename as a sequence of Clojure values"
  [filename]
  (let [eof (Object.)]
    (with-open [reader (LineNumberingPushbackReader. (io/reader filename))]
      (doall
       (take-while #(not= % eof)
                   (repeatedly #(read reader false eof)))))))

(defn file-ast
  "Return the ClojureScript Abstract Syntax Tree for the contents of
  filename. Tends to be large and contain cycles -- be careful when
  printing at the REPL."
  [filename]
  (binding [ana/*cljs-ns* 'cljs-user
            ana/*cljs-file* filename]
    (mapv #(ana/analyze (ana/empty-env) %)
          (read-file filename))))


(defn flatten-ast
  "Turn the entire AST into a single flat sequence of nodes"
  [ast]
  (mapcat #(tree-seq :children :children %) ast))

(def flat-ast (flatten-ast (file-ast "src/cljs/joy/music.cljs")))

(count flat-ast)

(defn get-interop-used
  "Returns a set of symbols representing the method and field names
   used in interop forms in the given sequence of AST nodes."
  [flat-ast]
  (set (keep #(some % [:method :field]) flat-ast)))

;; at repl try (get-interop-used flat-ast

(defn externs-for-interop
  "Print out an externs file for the Google Closure Compiler.
   Use at thet REPL:
     (spit 'my-externs.js' (externs-for-interop (get-interop-used flat-ast)))"
  [syms]
  (apply str
         "var DummyClass={};\n"
         (map #(str "DummyClass." % "=function() {};\n")
              syms)))
