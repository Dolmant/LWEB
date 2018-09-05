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
                ; (.appendChild (.getElementById js/document "model-viewer") (.-domElement renderer))
                (reset! animator @selectedModel)

                (def controller (viewer. (.getElementById js/document "model-viewer") (js-obj "model" @selectedModel) THREE dat stats (fn [xhr] (reset! loadPerc true))))
                ; (def scene (THREE/Scene.))
                ; (def camera (THREE/PerspectiveCamera. 75, 1, 0.1, 1000))
                ; (def renderer (THREE/WebGLRenderer.))
                ; (defn resizeCanvasToDisplaySize [force]
                ;   (def cwidth (.. renderer -domElement -clientWidth))
                ;   (def width (.. renderer -domElement -width))
                ;   (def cheight (.. renderer -domElement -clientHeight))
                ;   (def height (.. renderer -domElement -height))
                ;   (if (or force (not= width cwidth) (not= height cheight))
                ;     (do
                ;       (.setSize renderer cwidth cheight false)
                ;       (set! (.-aspect camera) (/ cwidth cheight))
                ;       (.updateProjectionMatrix camera))))
                ; (def geometry (THREE/BoxGeometry. 1 1 1))
                ; (def material (THREE/MeshPhongMaterial. (js-obj "color" 0x00ff00)))
                ; (def cube (THREE/Mesh. geometry material))
                ; (def light (THREE/AmbientLight. 0xffffff 1))
                ; (def light2 (THREE/PointLight. 0xffffff 1 100))
                ; (def light3 (THREE/SpotLight. 0xffffff 1 100))
                ; (set! (.. renderer -shadowMap -type) THREE/PCFShadowMap)
                ; (set! (.. renderer -shadowMap -enabled) true)
                ; (set! (.-shadowMapSoft renderer) true)
                ; (set! (.-gammaOutput renderer) true)
                ; (def controls (three-orbitcontrols. camera (.-domElement renderer)))
                ; (.add scene light)
                ; (.set (.-position light2) 0 -5 5)
                ; (.set (.-position light3) 0 5 0)
                ; (.add scene light2)
                ; (.add scene light3)
                ; (set! (.-z (.-position camera)) 2)
                ; (.update controls)
                ; (.saveState controls)
                ; ; (.add scene cube)
                ; (def loader (three-gltf-loader.))
                ; (js/console.log "draco")
                ; (js/console.log dracoLoader)
                ; (.setDRACOLoader loader dracoLoader)
                ; (.appendChild (.getElementById js/document "model-viewer") (.-domElement renderer))
                ; (resizeCanvasToDisplaySize true)
                ; ; (defn addGUI )
                ; (defn loadCurrentModel [] (.load loader @selectedModel
                ;                                  (fn [GLTFFile]
                ;                                    (js/console.log GLTFFile)
                ;                                    (def helper (THREE/BoxHelper. (.-scene GLTFFile) 0xff0000))
                ;                                    (.update helper)
                ;                                    (def size (/ 1 (.. helper -geometry -boundingSphere -radius)))
                ;                                    (.set (.. GLTFFile -scene -scale) size size size)
                ;                                    (js/console.log helper)
                ;                                    (set! (.. GLTFFile -scene -name) @selectedModel)
                ;         ;  (.traverse (.-scene GLTFFile) (fn [node] (if (.instanceOf node THREE/Mesh) node)))
                ;                                    (.add scene (.-scene GLTFFile))
                ;                                    (reset! animator @selectedModel)

                ;                                    (defn animate []
                ;                                      (if (not (= false @animator)) (do (.requestAnimationFrame js/window animate)
                ;                                                                        (resizeCanvasToDisplaySize false)
                ;                                                                        (.update controls)
                ;         ;      (set! (.-x (.-rotation cube)) (+ (.-x (.-rotation cube)) 0.01))
                ;                                                                        (.render renderer scene camera))))

                ;                                    (animate)
                ;                                    (reset! loadPerc true))
                ;                                  (fn [xhr] ;(reset! loadPerc (* (/ (.-loaded xhr) (.-total xhr)) 100)) 
                ;                                    (js/console.log (str/join "" [(* (/ (.-loaded xhr) (.-total xhr)) 100) "% loaded"])))
                ;                                  (fn [err] (js/console.log err))))
                ; (loadCurrentModel)
                state)
   :will-unmount (fn [state]
                   (if (not (= false @animator))
                     (do
                       (.clear controller)
                       (reset! animator false)))
                   state)
   :did-update (fn [state]
                ; (def controller (viewer. (.getElementById js/document "model-viewer") (js-obj "model" @selectedModel) THREE dat stats (fn [xhr] (reset! loadPerc true))))
                ;  (.reset controls)
                ;  (.update controls)
                 (if (and (not (= false @animator)) (not= @animator @selectedModel))
                   (do
                     (js/console.log "test")
                ;      (.remove scene (.getObjectByName scene @animator))
                     (reset! animator @selectedModel)
                ;      (.render renderer scene camera)
                ;      (loadCurrentModel)))
                     (.view controller @selectedModel "" (js/Map.))))
                 state)}
  []
  [:div
   (if (not (rum/react loadPerc)) (ui/linear-progress))
   [:div.modelInstructions "Select the model to view: "
    (ui/select {:value (rum/react selectedModel) :onChange (fn [e] (reset! loadPerc false) (reset! selectedModel (.. e -target -value)))}
               (map (fn [item] (ui/menu-item {:value (item :model_src)} (item :img_txt))) (consts/projectList :MODELS)))]
   [:div#model-viewer {:style {:height "80vh" :width "80vw"}} [:div.spinner] [:div.dropzone] [:div#file-input]]])
