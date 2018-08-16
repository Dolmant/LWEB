(ns cljs-react-material-ui.icons
  (:require-macros [cljs-react-material-ui.icons-macros :as mi])
  (:require
    [cljs-react-material-ui.core :as m]
    ["@material-ui/icons" :as MaterialUISvgIcons]
    ))

(def ^:private create-mui-icon (partial m/create-mui-cmp MaterialUISvgIcons))


(defn arrow-drop-down-circle [& args] (create-mui-icon "ArrowDropDownCircle" args))
(defn addIcon [& args] (create-mui-icon "Add" args))
(defn removeIcon [& args] (create-mui-icon "Remove" args))
