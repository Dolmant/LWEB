(ns ^:figwheel-no-load lweb.dev
  (:require
    [lweb.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
