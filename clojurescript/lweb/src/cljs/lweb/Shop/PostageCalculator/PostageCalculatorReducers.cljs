(ns lweb.Shop.PostageCalculatorState
  (:require [rum.core :as rum]
  [lweb.Shop.CartManagementState :as CartManagementState]
  [cljs-react-material-ui.core :as ui]))

(def postagePrice {"0" 0 "1" 20 "2" 40})

(defn mini [] (= 0 (count (filter (fn [item]
    (and (= "sticker" (get-in item [:type :id])) (= "pin" (get-in item [:type :id])) (= (get-in item [:type :id]) "patch")))
    CartManagementState/state))))

(defonce state
    (atom {:type 0 :cost "0" :loading false}))

(defn SetLoading [state]
    (swap! state @state [:loading] (fn [_] (not (@state :loading))))
)

(defn SetType [type]
    (swap! state @state [:type] (fn [_] type))
)

(defn PostageReducer []
    (if (mini)
        (reset! state {:type (@state :type) :cost (get-in postagePrice [@state.type]) / 2 :loading (@state :loading)})
        (reset! state {:type (@state :type) :cost (get-in postagePrice [@state.type])} :loading (@state :loading))
    )
)

(add-watch CartManagementState/state :watcher
    (fn [key atom old-state new-state]
        (PostageReducer)
    ))
