(ns lweb.DynamicReact.ModelViewer
  (:require [rum.core :as rum]
            [three :as THREE]
            [three-gltf-loader :as three-gltf-loader]
            ["/gen/dracoloader/dracoloader" :as dracoloader]
            ["/gen/modelviewer/modelviewer" :as viewer]
            ["/gen/modelviewer/stats.min" :as stats]
            ; [three-vignette-background :as createVignetteBackground]
            [three-orbitcontrols :as three-orbit-controls]
            [dat.gui :as dat]
            [clojure.string :as str]
            [lweb.consts :as consts]
            [lweb.wrappers.ui :as ui]
            [lweb.consts :as consts]))
(defonce animator (atom false))
(defonce loadPerc (atom false))
(defonce selectedModel (atom (:model_src (nth (consts/projectList :MODELS) 0))))

(rum/defc ModelViewer
  < rum/reactive
  {:did-mount (fn [state]
                (set! THREE/GLTFLoader three-gltf-loader)
                (.setDecoderPath (.-DRACOLoader THREE) "/assets/draco/")
                (def dracoLoader (THREE/DRACOLoader.))
                (reset! animator @selectedModel)

                (def controller (viewer. (.getElementById js/document "model-viewer") (js-obj "model" @selectedModel) THREE dat stats (fn [xhr] (reset! loadPerc true))))
                state)
   :will-unmount (fn [state]
                   (if (not (= false @animator))
                     (do
                       (.clear controller)
                       (reset! animator false)))
                   state)
   :did-update (fn [state]
                 (if (and (not (= false @animator)) (not= @animator @selectedModel))
                   (do
                     (reset! animator @selectedModel)
                     (.view controller @selectedModel "" (js/Map.))))
                 state)}
  []
  [:div
   (if (not (rum/react loadPerc)) (ui/linear-progress))
   [:div.modelInstructions "Select the model to view: "
    (ui/select {:value (rum/react selectedModel) :onChange (fn [e] (reset! loadPerc false) (reset! selectedModel (.. e -target -value)))}
               (map (fn [item] (ui/menu-item {:value (item :model_src)} (item :img_txt))) (consts/projectList :MODELS)))]
   [:div#model-viewer {:style {:height "80vh" :width "80vw"}} [:div.spinner] [:div.dropzone] [:div#file-input]]])
