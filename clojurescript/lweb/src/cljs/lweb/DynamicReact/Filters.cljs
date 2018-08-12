(ns lweb.DynamicReact.Filters
    (:require [rum.core :as rum]
    [lweb.DynamicReact.NavMenu :as NavMenu]
                [cljs-react-material-ui.rum :as ui]))

(rum/defc Filters []
    (def introOn? true)
    (if introOn?
        (ui/hidden {:xsDown true}
         [:div
          [:div.background-ele]
          [:div {
                 :class "filter-container container"
          }
           [:ul
            (NavMenu/NavMenu)]]]
        )
        [:div])
)