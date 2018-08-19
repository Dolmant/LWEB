(ns lweb.prerender
  (:require   [rum.core :as rum]
              [lweb.window-poly] ;import poly before window is required
              [lweb.App :as App]
              ["react-dom/server" :as reactDOM]
              [cljs-react-material-ui.core :as ui]))


(rum/defc home-page []
  [:div (App/App)])

(defonce page (atom #'home-page))

(rum/defc current-page []
  (ui/mui-theme-provider
   {:theme (ui/get-mui-theme)}
   (home-page)))


(defn prerender []
  (println (reactDOM/renderToString (current-page))))
(prerender)