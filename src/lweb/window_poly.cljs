(ns lweb.window-poly
  (:require
   [lweb.wrappers.ui :as ui]
   [lweb.wrappers.ic :as ic]
   ["toastr"]
   ["react-spinners"]
    ;Above libs expect window to be null, so must be imported first
   ["node-window-polyfill" :as poly]))

(poly/register)
(set! (.-document js/window) (js-obj "getElementsByTagName" (fn [] [0]) "head" (js-obj "appendChild" (fn [])) "createElement" (fn [] (js-obj "setAttribute" (fn [])))))
(set! (.-document js/global) (js-obj "getElementsByTagName" (fn [] [0]) "head" (js-obj "appendChild" (fn [])) "createElement" (fn [] (js-obj "setAttribute" (fn [])))))
(set! (.-navigator js/global) (js-obj))
(set! (.-matchMedia js/window) (fn [] (js-obj "matches" false "addListener" (fn []) "removeListener" (fn []))))
