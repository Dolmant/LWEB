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
(defonce loadPerc (atom false))
(defonce selectedModel (atom (:model_src (nth (consts/projectList :MODELS) 0))))

(rum/defc ModelViewer
  < rum/reactive
  {:did-mount (fn [state]
                ; (three-obj-loader THREE)
                (def scene (THREE/Scene.))
                (def camera (THREE/PerspectiveCamera. 75, 1, 0.1, 1000))
                (def renderer (THREE/WebGLRenderer.))
                (defn resizeCanvasToDisplaySize [force]
                  (def cwidth (.. renderer -domElement -clientWidth))
                  (def width (.. renderer -domElement -width))
                  (def cheight (.. renderer -domElement -clientHeight))
                  (def height (.. renderer -domElement -height))
                  (if (or force (not= width cwidth) (not= height cheight))
                    (do
                      (.setSize renderer cwidth cheight false)
                      (set! (.-aspect camera) (/ cwidth cheight))
                      (.updateProjectionMatrix camera))))
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
                (resizeCanvasToDisplaySize true)
                (defn loadCurrentModel [] (.load loader @selectedModel
                                                 (fn [GLTFFile]
                                                   (set! (.. GLTFFile -scene -name) @selectedModel)
                        ;  (.traverse (.-scene GLTFFile) (fn [node] (if (.instanceOf node THREE/Mesh) node)))
                                                   (.add scene (.-scene GLTFFile))
                                                   (reset! animator @selectedModel)
                                                   
                                                   (defn animate []
                                                     (if (not (= false @animator)) (do (.requestAnimationFrame js/window animate)
                                                                                       (resizeCanvasToDisplaySize false)
                                                                                       (.update controls)
                        ;      (set! (.-x (.-rotation cube)) (+ (.-x (.-rotation cube)) 0.01))
                                                                                       (.render renderer scene camera))))

                                                   (animate)
                                                   (reset! loadPerc true)
                                                   )
                                                 (fn [xhr] ;(reset! loadPerc (* (/ (.-loaded xhr) (.-total xhr)) 100)) 
                                                   (js/console.log (str/join "" [(* (/ (.-loaded xhr) (.-total xhr)) 100) "% loaded"])))
                                                 (fn [err] (js/console.log err))))
                (loadCurrentModel)
                state)
   :will-unmount (fn [state]
                   (if (not (= false @animator))
                     (do
                       (.remove scene (aget (.getObjectByName scene @animator) "children" 0))
                       (reset! animator false)))
                   (.dispose controls)
                   state)
   :did-update (fn [state]
                 (.reset controls)
                 (.update controls)
                 (if (and (not (= false @animator)) (not= @animator @selectedModel))
                   (do
                     (.remove scene (.getObjectByName scene @animator))
                     (reset! animator false)
                     (.render renderer scene camera)
                     (loadCurrentModel)))
                 state)}
  []
  [:div
   (if (not (rum/react loadPerc)) (ui/linear-progress))
   "Select the model to view "
   (ui/select {:value (rum/react selectedModel) :onChange (fn [e] (reset! loadPerc false)(reset! selectedModel (.. e -target -value)))}
              (map (fn [item] (ui/menu-item {:value (item :model_src)} (item :img_txt))) (consts/projectList :MODELS)))
   [:div#model-viewer {:style {:height "80vh" :width "80vw"}}]])
