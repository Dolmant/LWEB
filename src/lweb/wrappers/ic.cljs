(ns lweb.wrappers.ic
  (:require
   [lweb.rum-adaptor :as m]
   ["@material-ui/icons/ArrowDropDownCircle" :as ArrowDropDownCircle]
   ["@material-ui/icons/Add" :as Add]
   ["@material-ui/icons/Remove" :as Remove]
   ["@material-ui/icons/ShoppingCart" :as ShoppingCart]
   ["@material-ui/icons/ExpandMore" :as ExpandMore]))

(defn arrowDropDownCircle [& args] (m/create-mui-cmp ArrowDropDownCircle/default args))
(defn addIcon [& args] (m/create-mui-cmp Add/default args))
(defn removeIcon [& args] (m/create-mui-cmp Remove/default args))
(defn expandMoreIcon [& args] (m/create-mui-cmp ExpandMore/default args))
(defn shoppingCartIcon [& args] (m/create-mui-cmp ShoppingCart/default args))
