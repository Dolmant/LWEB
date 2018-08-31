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
    (scroll-into-view "content")
    (DynamicReactState/SetCategory id)
    (DynamicReactState/SetAttr :touchmenu_active false)
)
(rum/defc NavMenu < rum/reactive []
    (def before [
        (ui/button {:key 1 :on-click (fn [] (scroll-into-view "about")) :id 1} "ABOUT")
        (ui/button {:key 2 :on-click (fn [] (scroll-into-view "footer")) :id 2} "CONTACT")
    ])
    (def after [
        (ui/button {:key 3 :on-click (fn [] (scroll-into-view "content")) :id 3} "CHECKOUT")
    ])
    (def bundled [:NATURE, :SCIENCE, :ANATOMY, :TYPOGRAPHY, :FACTS, :MISC, :CHECKOUT])
    (defn filterfn [item] (not (some #(= item %) bundled)))
    (defn mapper [item]
        (if (= item :ALL)
            (ui/button {:key item :on-click (fn [] (oncatClick item)) :id item} "ILLUSTRATIONS")
            (ui/button {:key item :on-click (fn [] (oncatClick item)) :id item} (name item))
    ))
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
    (concat before (map mapper (sort sorter (filter filterfn (keys consts/projectListLabels)))) after)
)
