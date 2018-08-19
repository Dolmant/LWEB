(ns lweb.prerender
  (:require   [rum.core :as rum]
              [lweb.window-poly] ;import poly before window is required
              [lweb.App :as App]
                [clojure.string :as str]
                [cljs-node-io.core :as io :refer [slurp spit]]
              [lweb.template.index :as htmlTemplate]
              [cljs.core.async :refer [<!]]
              ["react-dom/server" :as reactDOM]
              [cljs-react-material-ui.core :as ui])
    (:require-macros [cljs.core.async.macros :refer [go]]))


(rum/defc home-page []
  [:div (App/App)])

(defonce page (atom #'home-page))

(rum/defc current-page []
  (ui/mui-theme-provider
   {:theme (ui/get-mui-theme)}
   (home-page)))


(defn prerender []
  (def data (str/join "" ["<!DOCTYPE html>" (reactDOM/renderToString [(htmlTemplate/Template @page)])]))
    (go
    (let [[err] (<! (io/aspit "dist/index.html" data))]
        (if-not err
        (println "you've successfully written to 'dist/index.html'")
        (println "there was an error writing: " err))))
)
(prerender)