(ns clui-om.react-om-tut
  (:require [cheshire.core :as ches]
            [clojure.java.io :as io]))

(def comments
  (atom [{:author "S. Nathaniel Fitz" :text "Baseline server-side comment."}
         {:author "C. Bonacich" :text "Another always-on starter message"}]))

(defn json-response
  "Return any arbitrary blob of data as a JSON response.
  Uses a 200 status code default, which can be overridden."
  [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/json"}
   :body (ches/generate-string data)
   })

(defn save-comment!
  [{:keys [body]}]
  (let [comment (-> body io/reader slurp (ches/parse-string true))]
    (swap! comments conj comment)
    (json-response
     {:message "Saved comment!"})))

(defn all-comments []
  (json-response {:message "Here are the comments. Enjoy!"
                  :comments @comments}))
