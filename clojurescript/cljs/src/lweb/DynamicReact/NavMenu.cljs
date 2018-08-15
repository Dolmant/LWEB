(ns lweb.DynamicReact.NavMenu
    (:require [rum.core :as rum]
    [lweb.DynamicReact.State :as DynamicReactState]
    [lweb.consts :as consts]
    [cljs-react-material-ui.rum :as ui]))


(defonce open (atom false))

(defonce anchorEl (atom false))

(defn oncatClick [id]
    (DynamicReactState/SetCategory id)
    (DynamicReactState/SetAttr :touchmenu_active false)
)
(rum/defc NavMenu < rum/reactive []
    (defn handleRequestClose [] (reset! open false))
    (defn handleOpenMenu [e] (if (not open) (do
        (.preventDefault e)
        (.stopPropagation e)
        (reset! open false)
        (reset! anchorEl (.-currentTarget e))
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
                (ui/menu {:on-close handleRequestClose :class "hi" :open (rum/react open) :anchorEl (rum/react anchorEl)}
                    (ui/menu-item {:id "ALL" :on-click (fn [e] (handleSelectMenu e "ALL"))} "ALL")
                    (ui/menu-item {:id "NATURE" :on-click (fn [e] (handleSelectMenu e "NATURE"))} "NATURE")
                    (ui/menu-item {:id "SCIENCE" :on-click (fn [e] (handleSelectMenu e "SCIENCE"))} "SCIENCE")
                    (ui/menu-item {:id "ANATOMY" :on-click (fn [e] (handleSelectMenu e "ANATOMY"))} "ANATOMY")
                    (ui/menu-item {:id "FACTS" :on-click (fn [e] (handleSelectMenu e "FACTS"))} "FACTS")
                    (ui/menu-item {:id "TYPOGRAPHY" :on-click (fn [e] (handleSelectMenu e "TYPOGRAPHY"))} "TYPOGRAPHY")
                    (ui/menu-item {:id "MISC" :on-click (fn [e] (handleSelectMenu e "MISC"))} "MISC")
                )
            ]
            [:li.cursor {:key item :on-click (fn [] (oncatClick item)) :id item}
                [:a.cursor [:strong (name item)]]]
    ))
    (defn sorter [cat1 cat2]
        (if (= cat1 "CHECKOUT") 1
        (if (= cat2 "CHECKOUT") -1
        (if (= cat1 "MODELS") 1
        (if (= cat2 "MODELS") -1
        (if (> cat1 cat2) 1
        (if (> cat1 cat2) -1
        0
        ))))))
    )
    (map mapper (sort-by sorter (filter filterfn (keys consts/projectListLabels))))
)
