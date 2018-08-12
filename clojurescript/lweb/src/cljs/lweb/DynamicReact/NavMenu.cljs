(ns lweb.DynamicReact
    (:require [rum.core :as rum]
    [lweb.DynamicReact as DynamicReact]
    [lweb.consts as :consts]
    [cljs-react-material-ui.core :as ui]))


(defonce open (atom false))

(defonce anchorEl (atom false))

(defn oncatClick [id]
    (DynamicReact/UpdateCategory id)
    (DynamicReact/SetAttr :touchmenu_active false)
)
(rum/defc NavMenu < rum/reactive []
    (def category ((rum/react DynamicReact/state) :category))
    (defn handleRequestClose [] (reset! open false))
    (defn handleOpenMenu [e] (if (not open) (do
        (e/preventDefault)
        (e/stopPropagation)
        (reset! open false)
        (reset! anchorEl (e :currentTarget))
    )))
    (defn handleSelectMenu [e, id] 
        (handleRequestClose)
        (oncatClick id)
    )
    (def bundled ["NATURE", "SCIENCE", "ANATOMY", "TYPOGRAPHY", "FACTS", "MISC"])
    (defn filterfn [item] (not (contains? bundled item)))
    (defn mapper [item]
        (if (= item "ALL")
            [:li {:key item :on-click (fn [e] (handleOpenMenu e)) :id "HEADER"}
                [:a.cursor
                    [:strong "ILLUSTRATIONS"
                    [:i {:class "fa fa-chevron-down"}]]
                ]
                [ui/Menu {:on-close handleRequestClose :class "hi" :open (rum/react open) :anchorEl (rum/react anchorEl)}
                    [ui/MenuItem {:id "ALL" :on-click (fn [e] (handleSelectMenu e "ALL"))} "ALL"]
                    [ui/MenuItem {:id "NATURE" :on-click (fn [e] (handleSelectMenu e "NATURE"))} "NATURE"]
                    [ui/MenuItem {:id "SCIENCE" :on-click (fn [e] (handleSelectMenu e "SCIENCE"))} "SCIENCE"]
                    [ui/MenuItem {:id "ANATOMY" :on-click (fn [e] (handleSelectMenu e "ANATOMY"))} "ANATOMY"]
                    [ui/MenuItem {:id "FACTS" :on-click (fn [e] (handleSelectMenu e "FACTS"))} "FACTS"]
                    [ui/MenuItem {:id "TYPOGRAPHY" :on-click (fn [e] (handleSelectMenu e "TYPOGRAPHY"))} "TYPOGRAPHY"]
                    [ui/MenuItem {:id "MISC" :on-click (fn [e] (handleSelectMenu e "MISC"))} "MISC"]
                ]
            ]
            [:li.cursor {:key item :on-click (fn [] (oncatClick item)) :id item}
                [:a.cursor [:strong item]]]
    ))
    (defn sorter (fn [cat1 cat2]
        (if (= cat1 "CHECKOUT") 1
        (if (= cat2 "CHECKOUT") -1
        (if (= cat1 "MODELS") 1
        (if (= cat2 "MODELS") -1
        (if (> cat1 cat2) 1
        (if (> cat1 cat2) -1
        0
        ))))))
    ))
    (map mapper (sort-by (filter filterfn (keys category)) sorter))
)
