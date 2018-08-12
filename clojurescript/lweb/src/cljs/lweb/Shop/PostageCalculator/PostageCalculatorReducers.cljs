(ns lweb.Shop.Checkout.CheckoutReducers
  (:require [rum.core :as rum]
  [lweb.Shop.CartManagement :as CartManagement]
  [cljs-react-material-ui.core :as ui]))

(def postagePrice {"0" 0 "1" 20 "2" 40})

(defn mini [] (= 0 (count (filter (fn [item]
    (and (= "sticker" (get-in item [:type :id])) (= "pin" (get-in item [:type :id])) (= (get-in item [:type :id]) "patch")))
    CartManagement/state))))

(defonce state
    (atom {:type 0 :cost "0" :loading false}))

(defn SetLoading [state]
    (swap! state @state [:loading] (not (@state :loading)))
)

(defn PostageReducer []
    (if (mini)
        (reset! state {:type (@state :type) :cost (get-in postagePrice [@state.type]) / 2 :loading (@state :loading)})
        (reset! state {:type (@state :type) :cost (get-in postagePrice [@state.type])} :loading (@state :loading))
    )
)

(add-watch CartManagement/state :watcher
    (fn [key atom old-state new-state]
        (PostageReducer)
    ))
