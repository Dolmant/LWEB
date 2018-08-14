(ns lweb.core
    (:require   [rum.core :as rum]
                [secretary.core :as secretary :include-macros true]
                [accountant.core :as accountant]
                [lweb.App :as App]
                 [cljs-react-material-ui.core :as ui]
                ;["@material-ui/core" :as ui]
                ))

;; dummy function for actions
(enable-console-print!)
(defn onClick []
    (js/console.log "hello"))

(defn waitForImages [hydrated?]
    (def blockerImages ["/assets/webImages/CRISPR.jpg"])
    (let [loadCount (atom 0)]
        (defn onLoad []
            (swap! loadCount inc)
            (if (>= @loadCount (count blockerImages))
                (do     
                (set! (.-className (.getElementById js/document "html")) "")
                (if hydrated?
                    (js/particlesJS "introImage" "./assets/particlesBusted.json" onClick)))))
        (defn attachLoader [src]
            (def img (js/Image.))
            (set! (.-onload img) onLoad)
            (set! (.-src img) src)
            (if (.-complete img) (onLoad))
        )
        (doseq [src blockerImages]
            (attachLoader src))
    )
)
    

(rum/defc home-page < rum/reactive []
    (onClick)
    [:div [:h2 "Welcome to lweb"]
        [:div [(App/App)]]
     ;(ui/Button)
     ])

(defonce page (atom #'home-page))

(rum/defc current-page []
    (ui/mui-theme-provider
        {:theme (ui/get-mui-theme)}
        [(@page)])
  )

(secretary/defroute "/*" []
    (reset! page #'home-page))
; todo put in a toaster
; {/* <ReduxToastr
;     timeOut={4000}
;     newestOnTop={false}
;     preventDuplicates
;     position="top-left"
;     transitionIn="fadeIn"
;     transitionOut="fadeOut"
;     progressBar
; /> */}
;; -------------------------
;; Initialize app

(defn mountRoot []
    (def targetElement (.getElementById js/document "app"))
    (if (.hasChildNodes targetElement)
        (do (js/console.log "hydrated") (rum/hydrate (current-page) targetElement) (waitForImages true))
        (do (js/console.log "rendered") (rum/mount (current-page) targetElement) (waitForImages false))  ;; RenderSnapShot or just output a string to save
    )
)

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
