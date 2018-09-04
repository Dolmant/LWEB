(ns lweb.DynamicReact.ModelViewer
  (:require [rum.core :as rum]
            [three :as THREE]
            [three-obj-loader :as three-obj-loader]
            [three-gltf-loader :as three-gltf-loader]
            [three-orbitcontrols :as three-orbit-controls]
            [clojure.string :as str]
            [lweb.consts :as consts]
            [lweb.wrappers.ui :as ui]
            [lweb.consts :as consts]))
(defonce animator (atom false))
(defonce selectedModel (atom (:model_src (nth (consts/projectList :MODELS) 0))))
(rum/defc ModelViewer
  < rum/reactive
  {:did-mount (fn [state]
                ; (three-obj-loader THREE)
                (def scene (THREE/Scene.))
                (def camera (THREE/PerspectiveCamera. 75, (/ (.-innerWidth js/window) (.-innerHeight js/window)), 0.1, 1000))
                (def renderer (THREE/WebGLRenderer.))
                (def geometry (THREE/BoxGeometry. 1 1 1))
                (def material (THREE/MeshPhongMaterial. (js-obj "color" 0x00ff00)))
                (def cube (THREE/Mesh. geometry material))
                (def light (THREE/AmbientLight. 0xffffff 10))
                (def light2 (THREE/PointLight. 0xffffff 10 100))
                (def light3 (THREE/SpotLight. 0xffffff 10 100))
                (set! (.. renderer -shadowMap -type) THREE/PCFShadowMap)
                (set! (.. renderer -shadowMap -enabled) true)
                (set! (.-shadowMapSoft renderer) true)
                (set! (.-gammaOutput renderer) true)
                (def controls (three-orbitcontrols. camera (.-domElement renderer)))
                (.add scene light)
                (.set (.-position light2) 0 -200 30)
                (.set (.-position light3) 0 50 0)
                (.add scene light2)
                (.add scene light3)
                (set! (.-z (.-position camera)) -100)
                (.update controls)
                (.saveState controls)
                (.add scene cube)
                (def loader (three-gltf-loader.))
                (.appendChild (.getElementById js/document "model-viewer") (.-domElement renderer))
                (.load loader @selectedModel
                       (fn [GLTFFile]
                         (set! (.. GLTFFile -scene -name) @selectedModel)
                        ;  (.traverse (.-scene GLTFFile) (fn [node] (if (.instanceOf node THREE/Mesh) node)))
                         (.add scene (.-scene GLTFFile))
                         (reset! animator @selectedModel)
                         (defn animate []
                           (if (not (= false @animator)) (do (.requestAnimationFrame js/window animate)
                                                             (.update controls)
                        ;      (set! (.-x (.-rotation cube)) (+ (.-x (.-rotation cube)) 0.01))
                                                             (.render renderer scene camera))))

                         (animate))
                       (fn [xhr] (js/console.log (str/join "" [(* (/ (.-loaded xhr) (.-total xhr)) 100) "% loaded"])))
                       (fn [err] (js/console.log err)))
                state)
   :will-unmount (fn [state]
                   (if (not (= false @animator))
                     (do (println @animator)
                         (.remove scene (aget (.getObjectByName scene @animator) "children" 0))
                         (reset! animator false)))
                   (.dispose controls)
                   state)
   :did-update (fn [state]
                 (.reset controls)
                 (.update controls)
                 (if (not (= false @animator))
                   (do (println @animator)
                       (js/console.log "removed:")
                       (js/console.log (.getObjectByName scene @animator))
                       (.remove scene (.getObjectByName scene @animator))
                       (reset! animator false)
                       (.render renderer scene camera)

                       (.load loader @selectedModel
                              (fn [GLTFFile]
                                (set! (.. GLTFFile -scene -name) @selectedModel)
                                (.add scene (.-scene GLTFFile))
                                (reset! animator @selectedModel)
                                (animate))
                              (fn [xhr] (js/console.log (str/join "" [(* (/ (.-loaded xhr) (.-total xhr)) 100) "% loaded"])))
                              (fn [err] (reset! animator false) (js/console.log err)))))
                 state)}
  []
  [:div
   "Select the model to view"
   (ui/select {:value (rum/react selectedModel) :onChange (fn [e] (reset! selectedModel (.. e -target -value)))}
              (map (fn [item] (ui/menu-item {:value (item :model_src)} (item :img_txt))) (consts/projectList :MODELS)))
   [:div#model-viewer]])
