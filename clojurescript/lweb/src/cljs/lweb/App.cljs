(ns lweb.App
    (:require [rum.core :as rum]
    [lweb.DynamicReact.State :as DynamicReactState]
    [lweb.DynamicReact.Intro :as Intro]
    [lweb.DynamicReact.IntroHeader :as IntroHeader]
    [lweb.DynamicReact.Filters :as Filters]
    [lweb.DynamicReact.Overlay :as Overlay]
    [lweb.DynamicReact.PageContainer :as PageContainer]
    [lweb.DynamicReact.Footer :as Footer]))

(rum/defc App < rum/reactive []
    (def overlay ((rum/react DynamicReactState/State) :overlay))
    [:div
        [:div.intro#intro (Intro/Intro)]
        [:div.introHeader#introHeader (IntroHeader/IntroHeader)]
        [:div.filters#filters (Filters/Filters)]
        (if overlay.state
            (Overlay/Overlay)
            [:div]
        )
        [:div.page-container {:id "page container"} (PageContainer/PageContainer)]
        [:div.footer#footer (Footer/Footer)]
    ]
)
