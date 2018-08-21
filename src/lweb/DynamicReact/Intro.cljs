(ns lweb.DynamicReact.Intro
    (:require [rum.core :as rum]
                [lweb.wrappers.ic :as ic]))

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
                (ic/arrowDropDownCircle)
                [:div.blink]
            ]
            [:div "scroll down"]]
        [:div.introImage#introImage]
    ]
)
