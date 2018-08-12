(ns lweb.Shop.CartManagement
    (:require [rum.core :as rum]
    [lweb.Shop.CartManagement.CartManagementActions :as Actions]
    [lweb.Shop.Checkout :as Checkout]
    [lweb.consts :as consts]
    [cljs-react-material-ui.core :as ui]))

(defn vec-remove
  "remove elem in coll"
  [coll pos]
  (vec (concat (subvec coll 0 pos) (subvec coll (inc pos)))))

(defonce State
    (atom {:shoppingCart []}))


(defn AddToCart [id type]
    (Checkout/SetPaid false)
    (def index (first
        (keep-indexed #(when (and (= (:item_number %2) id) (= (get-in % [:type :id]) (:id type))) %1) (:shoppingCart @state))
    ))
    (reset! state
        (if (!= index -1)
            (update-in @state [:shoppingCart index :count] inc)
            (update-in @state [:shoppingCart ] (conj (:shoppingCart @state) [(merge (consts/getImageById id) {:count 1 :type type})]))
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
                (vec-remove @state, index)
            )
            @state
        ))
(defn EmptyCart [action] 
    (reset! state {:shoppingCart []})
)
