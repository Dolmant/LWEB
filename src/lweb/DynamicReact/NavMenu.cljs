(ns lweb.DynamicReact.NavMenu
    (:require [rum.core :as rum]
    [lweb.DynamicReact.State :as DynamicReactState]
    [lweb.consts :as consts]
    [lweb.wrappers.ui :as ui]
    [lweb.wrappers.ic :as ic]
))

(defn scroll-into-view [element]
  (def bodyOffset (.-top (.getBoundingClientRect (.-body js/document))))
  (def offset (- (.-top (.getBoundingClientRect (.getElementById js/document element))) 50))
  (.scrollTo js/window (js-obj "behavior" "smooth" "top" (- offset bodyOffset)))
)

(defn oncatClick [id]
    (DynamicReactState/SetCategory id)
    (DynamicReactState/SetAttr :touchmenu_active false)
)

(defn sorter [cat1 cat2]
    (if (= cat1 :CHECKOUT) 1
    (if (= cat2 :CHECKOUT) -1
    (if (= cat1 :MODELS) 1
    (if (= cat2 :MODELS) -1
    (if (and (= cat1 :ADVERTISING) (= cat2 :ALL)) 1
    (if (and (= cat1 :ALL) (= cat2 :ADVERTISING)) -1
    (if (> cat1 cat2) 1
    (if (< cat1 cat2) -1
    0
    ))))))))
)

(def before [
    (ui/button {:key 1 :on-click (fn [] (scroll-into-view "about")) :id 1} "ABOUT")
    (ui/button {:key 2 :on-click (fn [] (scroll-into-view "footer")) :id 2} "CONTACT")
])
(def after [
    (ui/button {:key 3 :on-click (fn [] (scroll-into-view "content")) :id 3} "CHECKOUT")
])
(def bundled [:NATURE, :SCIENCE, :ANATOMY, :TYPOGRAPHY, :FACTS, :MISC, :CHECKOUT])
(defn filterfn [item] (not (some #(= item %) bundled)))

(rum/defc NavMenu < rum/reactive []
    (defn navMapper [item]
        (if (= item :ALL)
            (ui/button {:key item :variant :className :on-click (fn [] (scroll-into-view "content")(oncatClick item)) :id item} "ILLUSTRATIONS")
            (ui/button {:key item :variant :className :on-click (fn [] (scroll-into-view "content")(oncatClick item)) :id item} (name item)))
    )
    (concat before (map navMapper (sort sorter (filter filterfn (keys consts/projectListLabels)))) after)
)
(rum/defc TabMenu < rum/reactive []
    (defn tabMapper [item]
        (if (= item :ALL)
            (ui/tab {:key item :value :ALL :label "ILLUSTRATIONS" :id item})
            (ui/tab {:key item :value (name item) :label (name item) :id item}))
    )
    ; (ui/paper {:square true}
    (ui/tabs {:centered true :value ((rum/react DynamicReactState/State) :category) :indicatorColor "primary" :textColor "primary" :onChange (fn [event value] (oncatClick (keyword value)))}
        (map tabMapper (sort sorter (filter filterfn (keys consts/projectListLabels))))
    )
    ; )
)