(ns lweb.DynamicReact.ModelViewer
  (:require [rum.core :as rum]
            [three :as THREE]
            [three-obj-loader :as three-obj-loader]
            [three-orbit-controls :as three-orbit-controls]
            [clojure.string :as str]
            [lweb.consts :as consts]))

(rum/defc ModelViewer < {:did-mount (fn []
                                    ;   (def THREE js/THREE)
                                      (three-obj-loader THREE)
                                      (def controller (three-orbit-controls THREE))
                                      (def scene (THREE/Scene.))
                                      (def camera (THREE/PerspectiveCamera. 75, (/ (.-innerWidth js/window) (.-innerHeight js/window)), 0.1, 1000))
                                      (def renderer (THREE/WebGLRenderer.))
                                      (.appendChild (.getElementById js/document "model-viewer") (.-domElement renderer))
                                      (def geometry (THREE/BoxGeometry. 1 1 1))
                                      (def material (THREE/MeshBasicMaterial. (js-obj "color" 0x00ff00)))
                                      (def cube (THREE/Mesh. geometry material))
                                      (def light (THREE/AmbientLight. 0x404040))
                                      (def controls (controller. camera))
                                      (.add scene light)
                                      (set! (.-z (.-position camera)) 5)
                                      (.update controls)
                                      (.add scene cube)
                                      (def loader (THREE/OBJLoader.))
                                      (.load loader "/assets/models/Low-Poly_Models.obj"
                                             (fn [OBJFile]
                                               (.add scene OBJFile)
                                               (defn animate [] (.requestAnimationFrame js/window animate)
                                                    controls.update()
                                            ;      (set! (.-x (.-rotation cube)) (+ (.-x (.-rotation cube)) 0.01))
                                            ;      (set! (.-y (.-rotation cube)) (+ (.-y (.-rotation cube)) 0.01))
                                                 (.render renderer scene camera)
                                               )(animate)
                                               )
                                             (fn [xhr] (js/console.log (str/join "" [(* (/ (.-loaded xhr) (.-total xhr)) 100) "% loaded"])))
                                             (fn [err] (js/console.log err))))}
  [] [:div#model-viewer])
