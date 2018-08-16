(ns lweb.DynamicReact.Intro
    (:require [rum.core :as rum]
                [cljs-react-material-ui.icons :as ic]))

(rum/defc Intro []
    [:div.intro-container
        [:div.intro-logo
            [:img {
                :alt "its not loading"
                :src "./assets/images/LEOTIDE.png"
                :style {:max-height "40vh"}
            }]]
        [:div.into-scroll-prompt
            [:div.blink-container
                (ic/arrow-drop-down-circle)
                [:div.blink]
            ]
            [:div "scroll down"]]
        [:div.introImage#introImage]
    ]
)
