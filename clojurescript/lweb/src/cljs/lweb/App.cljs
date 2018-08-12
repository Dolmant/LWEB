(ns lweb.DynamicReact
    (:require [rum.core :as rum]
    [lweb.DynamicReactState :as DynamicReactState]
    [lweb.DynamicReact.Intro :as Intro]
    [lweb.DynamicReact.IntroHeader :as IntroHeader]
    [lweb.DynamicReact.Filters :as Filters]
    [lweb.DynamicReact.PageContainer :as PageContainer]
    [lweb.DynamicReact.Footer :as Footer]))

(rum/defc App []
    (def overlay ((rum/react DynamicReactState/state) :overlay))
    [:div
        [:div.intro#intro Intro]
        [:div.introHeader#introHeader IntroHeader]
        [:div.filters#filters Filters]
        (if overlay.state
            Overlay
            [:div]
        )
        [:div.page-container {:id "page container"} PageContainer]
        [:div.footer#footer Footer]
    ]
)
