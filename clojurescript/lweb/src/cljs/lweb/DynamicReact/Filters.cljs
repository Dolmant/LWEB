(ns lweb.DynamicReact
    (:require [rum.core :as rum]
    [lweb.DynamicReact :as DynamicReact]
                [cljs-react-material-ui.core :as ui]))

(rum/defc Filters []
    (def introOn? true)
    (if (introOn?)
        [ui/Hidden {:xsDown "xsDown"}
         [:div
          [:div.background-ele]
          [:div {
                 :class "filter-container container"
          }
           [:ul
            [DynamicReact/NavMenu]]]]
         ]
        [:div])
)