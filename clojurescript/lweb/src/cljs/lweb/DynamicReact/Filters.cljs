(ns lweb.DynamicReact.Intro
    (:require [rum.core :as rum]
                [cljs-react-material-ui.core :as ui]))

(rum/defc Filters [introOn?]
    (if (introOn?)
        [ui/Hidden {:xsDown "xsDown"}
         [:div
          [:div.background-ele]
          [:div {
                 :class "filter-container container"
          }
           [:ul
            [lweb.DynamicReact.NavMenu]]]]
         ]
        [:div])
)