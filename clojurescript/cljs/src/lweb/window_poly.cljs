(ns lweb.window-poly
  (:require
   [cljs-react-material-ui.rum :as ui]
   ["toastr"]
   ["react-spinners"]
    ;Above libs expect window to be null, so must be imported first
    ["node-window-polyfill" :as poly]))

(poly/register)
(set! (.-document js/window) (js-obj))
(set! (.-document js/global) (js-obj))
(set! (.-navigator js/global) (js-obj))