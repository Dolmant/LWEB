(ns lweb.core
  (:require-macros [lweb.rum-adaptor-macro])
  (:require   [rum.core :as rum]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [lweb.App :as App]
              ["toastr" :as toastr]
              ["/gen/particles/particles" :as particlesJS]
              [lweb.wrappers.ui :as ui]))

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

(defonce page (atom #'home-page))

(rum/defc current-page []
  (ui/get-jss (ui/mui-theme-provider
               {:theme (ui/get-mui-theme) :sheetsManager (js/Map.)}
               (@page))))

(secretary/defroute "/*" []
  (reset! page #'home-page))

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
    (do (js/console.log "hydrated") (rum/mount (current-page) targetElement) (waitForImages true));(do (js/console.log "hydrated") (rum/hydrate (current-page) targetElement) (waitForImages true))
    (do (js/console.log "rendered") (rum/mount (current-page) targetElement) (waitForImages false))))

(defn init! []
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (secretary/dispatch! path))
    :path-exists?
    (fn [path]
      (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mountRoot))

(defn reload! []
  (init!))

(init!)
