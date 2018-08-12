(ns lweb.Shop.CartManagementState
    (:require [rum.core :as rum]
    [lweb.Shop.CheckoutState :as CheckoutState]
    [lweb.consts :as consts]
    [cljs-react-material-ui.core :as ui]))

(defn vec-remove
  "remove elem in coll"
  [coll pos]
  (vec (concat (subvec coll 0 pos) (subvec coll (inc pos)))))

(defonce State
    (atom {:shoppingCart [] :total 0}))


(defn AddToCart [id type]
    (CheckoutState/SetPaid false)
    (def index (first
        (keep-indexed #(when (and (= (:item_number %2) id) (= (get-in % [:type :id]) (:id type))) %1) (:shoppingCart @state))
    ))
    (reset! state
        (if (!= index -1)
            (update-in @state [:shoppingCart index :count] inc)
            (update-in @state [:shoppingCart] (conj (:shoppingCart @state) [(merge (consts/getImageById id) {:count 1 :type type})]))
    ))
(defn RemoveFromCart [id type]
    ; find the matching id and type in current state
    (def index (first
        (keep-indexed #(when (and (= (:item_number %2) id) (= (get-in % [:type :id]) (:id type))) %1) (:shoppingCart @state))
    ))
    (reset! state
        (if (!= index -1)
            (if (> 1 (get-in @state [:shoppingCart index :count]))
                (update-in @state [:shoppingCart index :count] dec)
                {:shoppingCart (vec-remove (@state :shoppingCart), index) :total 0}
            )
            @state
        ))
(defn EmptyCart [action] 
    (reset! state {:shoppingCart [] :total 0})
)

(add-watch state :watcher
    (fn [key atom old-state new-state]
        (reduce (fn [item, count] (+ count (* (get-in item [:type :cost]) (item :count)))) [0] (new-state :shoppingCart))
    ))
