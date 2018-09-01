(ns lweb.wrappers.ui
  (:refer-clojure :exclude [list stepper])
  (:require-macros [lweb.rum-adaptor-macro])
  (:require
   [rum.core]
   ["@material-ui/core/AppBar" :as AppBar]
   ["@material-ui/core/Toolbar" :as Toolbar]
   ["@material-ui/core/Checkbox" :as Checkbox]
   ["@material-ui/core/Button" :as Button]
   ["@material-ui/core/Hidden" :as Hidden]
   ["@material-ui/core/FormHelperText" :as FormHelperText]
   ["@material-ui/core/Grid" :as Grid]
   ["@material-ui/core/IconButton" :as IconButton]
   ["@material-ui/core/FormControl" :as FormControl]
   ["@material-ui/core/Drawer" :as Drawer]
   ["@material-ui/core/Divider" :as Divider]
   ["@material-ui/core/InputLabel" :as InputLabel]
   ["@material-ui/core/Tab" :as Tab]
   ["@material-ui/core/Tabs" :as Tabs]
   ["@material-ui/core/Paper" :as Paper]
   ["@material-ui/core/Menu" :as Menu]
   ["@material-ui/core/Menu" :as Menu]
   ["@material-ui/core/MenuItem" :as MenuItem]
   ["@material-ui/core/styles/MuiThemeProvider" :as MuiThemeProvider]
   ["@material-ui/core/styles/createMuiTheme" :as createMuiTheme]
   ["@material-ui/core/Select" :as Select]
   ["@material-ui/core/SvgIcon" :as SvgIcon]
   ["@material-ui/core/TextField" :as TextField]
   [clojure.walk :refer [postwalk]]
   [sablono.util :refer [camel-case]]
   ))

(defn transform-keys [t coll]
  "Recursively transforms all map keys in coll with t."
  (letfn [(transform [[k v]] [(t k) v])]
    (postwalk (fn [x] (if (map? x) (into {} (map transform x)) x)) coll)))

(defn get-mui-theme
  ([]  (get-mui-theme (createMuiTheme/default (js-obj))))
  ([raw-theme] (->> raw-theme
                    (transform-keys camel-case)
                    clj->js
                    createMuiTheme/default)))

(def toolbar (lweb.rum-adaptor-macro/adapt-rum-class Toolbar/default))
(def appBar (lweb.rum-adaptor-macro/adapt-rum-class AppBar/default))
(def button (lweb.rum-adaptor-macro/adapt-rum-class Button/default))
(def checkbox (lweb.rum-adaptor-macro/adapt-rum-class Checkbox/default))
(def divider (lweb.rum-adaptor-macro/adapt-rum-class Divider/default))
(def drawer (lweb.rum-adaptor-macro/adapt-rum-class Drawer/default))
(def form-control (lweb.rum-adaptor-macro/adapt-rum-class FormControl/default))
(def hidden (lweb.rum-adaptor-macro/adapt-rum-class Hidden/default))
(def form-helper-text (lweb.rum-adaptor-macro/adapt-rum-class FormHelperText/default))
(def grid (lweb.rum-adaptor-macro/adapt-rum-class Grid/default))
(def icon-button (lweb.rum-adaptor-macro/adapt-rum-class IconButton/default))
(def input-label (lweb.rum-adaptor-macro/adapt-rum-class InputLabel/default))
(def tabs (lweb.rum-adaptor-macro/adapt-rum-class Tabs/default))
(def tab (lweb.rum-adaptor-macro/adapt-rum-class Tab/default))
(def paper (lweb.rum-adaptor-macro/adapt-rum-class Paper/default))
(def menu (lweb.rum-adaptor-macro/adapt-rum-class Menu/default))
(def menu-item (lweb.rum-adaptor-macro/adapt-rum-class MenuItem/default))
(def mui-theme-provider (lweb.rum-adaptor-macro/adapt-rum-class MuiThemeProvider/default))
(def select (lweb.rum-adaptor-macro/adapt-rum-class Select/default))
(def svg-icon (lweb.rum-adaptor-macro/adapt-rum-class SvgIcon/default))
(def text-field (lweb.rum-adaptor-macro/adapt-rum-class TextField/default))
