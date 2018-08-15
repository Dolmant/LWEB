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
                ;(ic/navigation-arrow-drop-down-circle) ;;:class "fas fa-arrow-alt-circle-down" todo check this is the same
                [:div.blink]
            ]
            [:div "scroll down"]]
        [:div.introImage#introImage]
    ]
)
