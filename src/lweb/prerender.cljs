(ns lweb.prerender
  (:require   [rum.core :as rum]
              [lweb.window-poly] ;import poly before window is required
              [lweb.App :as App]
                [clojure.string :as str]
                [cljs-node-io.core :as io :refer [slurp spit]]
              [cljs-node-io.fs :as fs]
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

;prerender and hash the appropriate files
(defn prerender []
    (fs/writeFile "dist/manifest.webmanifest" (fs/readFile "manifest.webmanifest" "") {})
    (def css (remove nil? (map
        #(if (str/includes? %1 "styles.css")
            (do
                (def content (.toString (fs/readFile (str/join "" ["dist/" %1]) "")))
                (def newName (str/join "" [(first (str/split %1 #".css")) "." (hash content) ".css"]))
                (fs/writeFile (str/join "" ["dist/" newName]) content {})
                newName)
        )
        (fs/readdir "dist")
    )))
    (def jsmap (remove nil? (map
              #(if (str/includes? %1 "main.js")
                 (do
                   (def content (.toString (fs/readFile (str/join "" ["dist/" %1]) "")))
                   (def newName (str/join "" [(first (str/split %1 #".js")) "." (hash content) ".js"]))
                   (fs/writeFile (str/join "" ["dist/" newName]) content {})
                   newName))
              (fs/readdir "dist"))))
    (def data (str/join "" ["<!DOCTYPE html>" (reactDOM/renderToString [(htmlTemplate/Template @page css jsmap)])]))
    (go
    (let [[err] (<! (io/aspit "dist/index.html" data))]
        (if-not err
        (println "you've successfully written to 'dist/index.html'")
        (println "there was an error writing: " err))))
)
(prerender)