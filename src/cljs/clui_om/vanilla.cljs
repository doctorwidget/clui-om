(ns clui-om.vanilla
  (:require [clojure.browser.repl :as repl]
            [goog.dom :as gdom]
            [goog.dom.classes :as gcls]
            [goog.dom.forms :as gforms]
            [goog.events :as geve]
            [goog.events.EventType :as getype]))

;; goog.dom.getElement only works on #ids, and always returns one (1) node
(def $form (gdom/getElement "spamForm"))
(def $output (gdom/getElement "spamOutput"))
(def $trigger (gdom/getElement "spamBtn"))
(def $agent (gdom/getElement "agentBtn"))

(defn report-agent
  "Report the current user agent"
  []
  (js/alert (str "User Agent is: " goog.userAgent.PLATFORM)))

(defn echo
  "Spam the contents of the input field into the output field."
  ([]
     (let [stuff (gforms/getFormDataMap $form)
           input (.get stuff "spamInput")]
       (.log js/console input)
       (.log js/console (str "echoing..." input input input))
       (gdom/setTextContent $output (str input input input))))
  ([evt]
     (.preventDefault evt)
     (echo)))

(defn yo
  "Put an arbitrary argument into the output field.
   Suitable for calling via the bREPL"
  [msg]
  (gdom/setTextContent $output msg))

(defn ^:export initialize
  "Initialize the main vanilla page"
  []
  (repl/connect "http://localhost:9000/repl")
  (.log js/console "initializing vanilla...")
  (gcls/add $output "vanilla-border")
  (gdom/setTextContent $output (str "Dynamically created by the Google Closure at: " (js/Date.)))
  (geve/listen $output getype/CLICK (fn [evt] (gcls/toggle $output "vanilla-border")))
  (geve/listen $trigger getype/CLICK (fn [evt] (echo evt)))
  (geve/listen $agent getype/CLICK (fn [evt] (report-agent))))
