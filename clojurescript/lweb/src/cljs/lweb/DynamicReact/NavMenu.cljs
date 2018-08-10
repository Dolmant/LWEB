(ns lweb.DynamicReact.NavMenu
    (:require [rum.core :as rum]
    [lweb.DynamicReact.Actions as :Actions]
    [lweb.consts as :consts]
    [cljs-react-material-ui.core :as ui]))

; todo
;    oncatClick: (id) => {
    ;     dispatch(actionCreators.updateCategory(id))
    ;     dispatch(actionCreators.toggleTouchmenu())
    ; },
(rum/defc NavMenu [oncatClick, onmenuClick, category, open, anchorEl]
    (defn handleRequestClose [] (this.setstate(open = false)))
    (defn handleOpenMenu [e] (if (not open) (do
        (e/preventDefault)
        (e/stopPropagation)
        (setstate open = true anchorel = e.currenttarget)
    )))
    (defn handleSelectMenu [e, id] 
        (handleRequestClose)
        (oncatClick id)
    )
    (def bundled ["NATURE", "SCIENCE", "ANATOMY", "TYPOGRAPHY", "FACTS", "MISC"])
    (defn filter [item] (not (includes bundled item)))
    (defn mapper [item]
        (if (= item "ALL")
            [:li {:key item :on-click (fn [e] (handleOpenMenu e)) :id "HEADER"}
                [:a.cursor
                    [:strong "ILLUSTRATIONS"
                    [:i {:class "fa fa-chevron-down"}]]
                ]
                [ui/Menu {:on-close handleRequestClose :class "hi" :open open :anchorEl anchorEl}
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
    (Object.keys(category).filter(filter).sort(sorter).map(mapper))
)
