(ns lweb.core
  (:require   [rum.core :as rum]
              [lweb.wrappers.ui :as ui]
              [lweb.wrappers.ic :as ic]
              ["toastr" :as toastr]
              ["react-spinners"]
              ["/gen/progressShim/progressShim"]
              [lweb.App :as App]
              ["/gen/particles/particles" :as particlesJS]))

(enable-console-print!)

(defn waitForImages [hydrated?]
  (def blockerImages ["/assets/webImages/CRISPR.jpg"])
  (let [loadCount (atom 0)]
    (defn onLoad []
      (swap! loadCount inc)
      (if (>= @loadCount (count blockerImages))
        (do
          (set! (.-className (.getElementById js/document "html")) "")
          (if hydrated?
            (particlesJS/default "introImage" "./assets/particlesBusted.json" #(println "Particles loaded"))))))
    (defn attachLoader [src]
      (def img (js/Image.))
      (set! (.-onload img) onLoad)
      (set! (.-src img) src)
      (if (.-complete img) (onLoad)))
    (doseq [src blockerImages]
      (attachLoader src))))

(rum/defc home-page < rum/reactive []
  [:div (App/App)])
(defonce sheetsManager (js/Map.))

(rum/defc current-page []
  (ui/get-jss (ui/mui-theme-provider
               {:theme (ui/get-mui-theme) :sheetsManager sheetsManager}
               (home-page))))

(defn mountRoot []
  (def toasterOptions (aget toastr "options"))
  (aset toasterOptions "preventDuplicates" true)
  (aset toasterOptions "newestOnTop" false)
  (aset toasterOptions "timeOut" 4000)
  (aset toasterOptions "position" "top-left")
  (aset toasterOptions "transitionIn" "fadeIn")
  (aset toasterOptions "transitionOut" "fadeOut")
  (aset toasterOptions "progressBar" "true")

  (def targetElement (.getElementById js/document "app"))
  (if (.hasChildNodes targetElement)
    (do (js/console.log "hydrated") (rum/hydrate (current-page) targetElement) (waitForImages true))
    (do (js/console.log "rendered") (rum/mount (current-page) targetElement) (waitForImages false))))

(defn reload! []
  (mountRoot))

(mountRoot)
