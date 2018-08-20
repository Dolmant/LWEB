(ns lweb.Shop.Postage.State
  (:require [rum.core :as rum]
  [lweb.Shop.CartManagement.State :as CartManagementState]))

(def postagePrice {"0" 0 "1" 20 "2" 40})

(defn mini []
    (= 0 (count (filter (fn [item]
        (and (= "sticker" (get-in item [:type :id])) (= "pin" (get-in item [:type :id])) (= (get-in item [:type :id]) "patch")))
    (@CartManagementState/State :shoppingCart)))))

(defonce State
    (atom {:type 0 :cost "0" :loading false}))

(defn SetLoading []
    (reset! State
        (update-in @State [:loading] (fn [_] (not (@State :loading))))
    )
)

(defn SetType [type]
    (reset! State
        (update-in @State [:type] (fn [_] type))
    )
)

(defn PostageReducer []
    (if (mini)
        (reset! State
            (update-in @State [:cost] (fn [_] (/ (get postagePrice (@State :type)) 2)))
        )
        (reset! State
            (update-in @State [:cost] (fn [_] (get postagePrice (@State :type))))
        )
    )
)

(add-watch CartManagementState/State :watcher
    (fn [key atom old-state new-state]
        (PostageReducer)
    ))
