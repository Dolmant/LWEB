(ns lweb.wrappers.ic
  (:require
   [lweb.rum-adaptor :as m]
   ["@material-ui/icons/ArrowDropDownCircle" :as ArrowDropDownCircle]
   ["@material-ui/icons/Add" :as Add]
   ["@material-ui/icons/Remove" :as Remove]
   ))

(defn arrow-drop-down-circle [& args] (m/create-mui-cmp ArrowDropDownCircle args))
(defn addIcon [& args] (m/create-mui-cmp Add args))
(defn removeIcon [& args] (m/create-mui-cmp Remove args))
