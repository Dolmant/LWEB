(ns lweb.DynamicReact.NavMenu
  (:require [rum.core :as rum]
            [lweb.DynamicReact.State :as DynamicReactState]
            [lweb.consts :as consts]
            [lweb.wrappers.ui :as ui]
            [lweb.wrappers.ic :as ic]))

(defn scroll-into-view [element]
  (def bodyOffset (.-top (.getBoundingClientRect (.-body js/document))))
  (def offset (- (.-top (.getBoundingClientRect (.getElementById js/document element))) 50))
  (.scrollTo js/window (js-obj "behavior" "smooth" "top" (- offset bodyOffset))))

(defn oncatClick [id]
  (DynamicReactState/SetCategory id)
  (DynamicReactState/SetAttr :touchmenu_active false))

(defn sorter [cat1 cat2]
  (cond
    (= cat1 :HIGHLIGHTS) -1
    (= cat2 :HIGHLIGHTS) 1
    (= cat1 :CHECKOUT) 1
    (= cat2 :CHECKOUT) -1
    (= cat1 :MODELS) 1
    (= cat2 :MODELS) -1
    (and (= cat1 :PUBLISHINGS) (= cat2 :ALL)) 1
    (and (= cat1 :ALL) (= cat2 :PUBLISHINGS)) -1
    (> cat1 cat2) 1
    (< cat1 cat2) -1
    true 0))

(def before [(ui/button {:key "before1" :on-click (fn [] (scroll-into-view "about")) :id 1} "ABOUT")
             (ui/button {:key "before2" :on-click (fn [e] (DynamicReactState/SetOverlay :contact)) :id 2} "CONTACT")])
(def after [(if (not consts/isTouch) (ui/button {:key "after1" :on-click (fn [e] (DynamicReactState/SetOverlay :models)) :id 3} "MODELS"))
            (ui/button {:key "after2" :on-click (fn [e] (DynamicReactState/SetOverlay :checkout)) :id 4} "CHECKOUT")])
(def bundled [:NATURE, :SCIENCE, :ANATOMY, :TYPOGRAPHY, :FACTS, :MISC, :CHECKOUT])
(defn filterfn [item] (not (some #(= item %) bundled)))

(rum/defc NavMenuNoKey < rum/reactive []
  (defn navMapper [item]
    (if (= item :ALL)
      (ui/button {:key item :on-click (fn [] (scroll-into-view "content") (oncatClick item)) :id item} "2D")
      (ui/button {:key item :on-click (fn [] (scroll-into-view "content") (oncatClick item)) :id item} (name item))))
  (if consts/isTouch
    (concat before after)
    (concat before (map navMapper (sort sorter (filter filterfn (keys consts/projectListLabels)))) after)))

(defn NavMenu [] (rum/with-key (NavMenuNoKey) "navmenu"))

(rum/defc TabMenu < rum/reactive []
  (defn tabMapper [item]
    (if (= item :ALL)
      (ui/tab {:key (name item) :value :ALL :label "2D" :id item})
      (ui/tab {:key (name item) :value (name item) :label (name item) :id item})))
  (ui/tabs {:key "navmenu" :centered true :value ((rum/react DynamicReactState/State) :category) :indicatorColor "primary" :textColor "primary" :onChange (fn [event value] (oncatClick (keyword value)))}
           (map tabMapper (sort sorter (filter filterfn (keys consts/projectListLabels))))))