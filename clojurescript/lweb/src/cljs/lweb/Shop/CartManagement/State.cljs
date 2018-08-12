(ns lweb.Shop.CartManagement.State
    (:require [rum.core :as rum]
    [lweb.consts :as consts]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn vec-remove
  "remove elem in coll"
  [coll pos]
  (vec (concat (subvec coll 0 pos) (subvec coll (inc pos)))))

(defonce State
    (atom {:paid false :shoppingCart [] :total 0 :checkoutResult "0" :loading false}))


(defn AddToCart [id type]
    (SetPaid false)
    (def index (first
        (keep-indexed #(when (and (= (:item_number %2) id) (= (get-in % [:type :id]) (:id type))) %1) (:shoppingCart @State))
    ))
    (reset! State
        (if (!= index -1)
            (update-in @State [:shoppingCart index :count] inc)
            (update-in @State [:shoppingCart] (conj (:shoppingCart @State) [(merge (consts/getImageById id) {:count 1 :type type})]))
    )))
(defn RemoveFromCart [id type]
    ; find the matching id and type in current state
    (def index (first
        (keep-indexed #(when (and (= (:item_number %2) id) (= (get-in % [:type :id]) (:id type))) %1) (:shoppingCart @State))
    ))
    (reset! State
        (if (!= index -1)
            (if (> 1 (get-in @State [:shoppingCart index :count]))
                (update-in @State [:shoppingCart index :count] dec)
                (update-in @State [:shoppingCart] (fn [_] vec-remove (@State :shoppingCart), index)))
            )
            @State
        ))
(defn EmptyCart [action]
    (reset! State
        (update-in @State [:shoppingCart ] [])
    )
)

(add-watch State :watcher
    (fn [key atom old-state new-state]
        (reduce (fn [item, count] (+ count (* (get-in item [:type :cost]) (item :count)))) [0] (new-state :shoppingCart))
    ))

(defn SetLoading [loading]
    (reset! State
        (update-in @State [:loading ] loading)
    )
)

(defn SetPaid [paid]
    (reset! State
        (update-in @State [:paid ] paid)
    )
)

(defn PayNow [token]
    (SetLoading true)
    (go (let [response (<! (http/post "https://us-central1-lweb-176107.cloudfunctions.net/try_payment"
                                    {:with-credentials? false
                                    :json-params (merge token {:amount (* 100 store.total) :currency "AUD" :description "Leotide Art" :shoppingCart store.shoppingCart})}))]
        (CartManagementState/EmptyCart)
        (SetPaid true)
        ;(toastr)
        (SetLoading false)
        (reset! state (update-in @State [:checkoutResult] response))
    ))
)