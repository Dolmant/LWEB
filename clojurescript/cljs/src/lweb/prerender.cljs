(set! (.-window js/global) (js-obj))
(ns lweb.prerender
  (:require   [rum.core :as rum]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [lweb.App :as App]
              ["react-dom/server" :as reactDOM]
              [cljs-react-material-ui.core :as ui]))

(rum/defc home-page < rum/reactive []
  [:div (App/App)])

(defonce page (atom #'home-page))

(rum/defc current-page []
  (ui/mui-theme-provider
   {:theme (ui/get-mui-theme)}
   (@page)))


(defn prerender []
  (println (reactDOM/renderToString
            (current-page))))
(prerender)