(ns lweb.rum-adaptor-macro
  (:require
   [clojure.string :as str]))

(defmacro adapt-rum-class [react-class]
  `(fn [& args#]
     (let [[opts# children#] (if (map? (first args#))
                               [(first args#) (rest args#)]
                               [{} args#])
           type# (first children#)]
       (let [new-children# (if (vector? type#)
                             [(sablono.interpreter/interpret (last children#))]
                             children#)]
         (lweb.rum-adaptor/create-mui-cmp ~react-class (cons opts# new-children#))))))