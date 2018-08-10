(ns lweb.DynamicReact.App
    (:require [rum.core :as rum]
    [lweb.DynamicReact.Intro :as Intro]
    [lweb.DynamicReact.IntroHeader :as IntroHeader]
    [lweb.DynamicReact.Filters :as Filters]
    [lweb.DynamicReact.PageContainer :as PageContainer]
    [lweb.DynamicReact.Footer :as Footer]))

(rum/defc App [overlay]
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
