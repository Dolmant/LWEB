(ns cljs-react-material-ui.icons-macros
  (:require [cljs-react-material-ui.core-macros :as m]))

(def tags
  '[
    ArrowDropDownCircle
    Add
    Remove
])

(defmacro generate-mui-icon-fns [fname]
  `(m/generate-mui-dom-fns ~fname ~tags))

(comment
  (macroexpand `(generate-mui-icon-fns "create-mui-icon")))

