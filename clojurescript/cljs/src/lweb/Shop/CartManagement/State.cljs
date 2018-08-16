(ns lweb.Shop.CartManagement.State
    (:require [rum.core :as rum]
    [lweb.consts :as consts]
    [cljs-http.client :as http]
    ["toastr" :as toastr]
    [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn vec-remove
  "remove elem in coll"
  [coll pos]
  (vec (concat (subvec coll 0 pos) (subvec coll (inc pos)))))

(defonce State
    (atom {:paid false :shoppingCart [] :total 0 :checkoutResult "0" :loading false}))


(defn SetPaid [paid]
    (reset! State
        (update-in @State [:paid] (fn [_] paid))
    )
)

(defn SetLoading [loading]
    (reset! State
        (update-in @State [:loading] (fn [_] loading))
    )
)

(defn AddToCart [id type]
    (SetPaid false)
    (def index1 (first
        (keep-indexed #(when (and (= (:item_number %2) id) (= (get-in %2 [:type :id]) (:id type))) %1) (:shoppingCart @State))
    ))
    (reset! State
        (if (not= nil index1)
            (update-in @State [:shoppingCart index1 :count] inc)
            (update-in @State [:shoppingCart] (fn [_] (conj (:shoppingCart @State) (merge (consts/getImageById id) {:count 1 :type type}))))
    ))
)
(defn RemoveFromCart [id type]
    ; find the matching id and type in current state
    (def index2 (first
        (keep-indexed #(when (and (= (:item_number %2) id) (= (get-in % [:type :id]) (:id type))) %1) (:shoppingCart @State))
    ))
    (reset! State
        (if (not= index1 -1)
            (if (< 1 (get-in @State [:shoppingCart index2 :count]))
                (update-in @State [:shoppingCart index2 :count] dec)
                (update-in @State [:shoppingCart] (fn [_] (vec-remove (@State :shoppingCart) index2))))
        @State
        )))
(defn EmptyCart []
    (reset! State
        (update-in @State [:shoppingCart ] (fn [_] []))
    )
)

(add-watch State :watcher
    (fn [key atom old-state new-state]
        (reduce (fn [item, count] (+ count (* (get-in item [:type :cost]) (item :count)))) [0] (new-state :shoppingCart))
    ))

(defn PayNow [token]
    (SetLoading true)
    (go (let [response (<! (http/post "https://us-central1-lweb-176107.cloudfunctions.net/try_payment"
                                    {:with-credentials? false
                                    :json-params (merge token {:amount (* 100 store.total) :currency "AUD" :description "Leotide Art" :shoppingCart store.shoppingCart})}))]
        (EmptyCart)
        (SetPaid true)
        (toastr/success "Success!" "Thanks for your order!")
        (SetLoading false)
        (reset! State (update-in @State [:checkoutResult] response))
    ))
)