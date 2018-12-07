(ns lweb.DynamicReact.Overlay
  (:require [rum.core :as rum]
            [lweb.DynamicReact.State :as DynamicReactState]
            [lweb.Shop.CartManagement.AddToCart :as AddToCart]
            [goog.dom.forms :as gforms]
            [cljs-http.client :as http]
            [lweb.rum-adaptor :refer (adapt-rum-class)]
            [lweb.consts :as consts]
            [lweb.DynamicReact.ModelViewer :as ModelViewer]
            [lweb.Shop.CartManagement.Checkout :as Checkout]
            [lweb.wrappers.ui :as ui]
            [lweb.wrappers.ic :as ic]
            ["/gen/lazySizes/index" :default Lazy]
            [clojure.string :as str]
            [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def LazySizes (adapt-rum-class Lazy))

(defn oncatClick [id]
  (DynamicReactState/SetCategory id)
  (DynamicReactState/SetAttr :touchmenu_active false))

(defonce formError (atom false))

(rum/defc Overlay < rum/reactive []
  (def overlay ((rum/react DynamicReactState/State) :overlay))
  (def overlay_image_num ((rum/react DynamicReactState/State) :overlay_image_num))
  (def overlay_image_src ((rum/react DynamicReactState/State) :overlay_image_src))
  (def overlay_thumb_src ((rum/react DynamicReactState/State) :overlay_thumb_src))
  (def overlay_types ((rum/react DynamicReactState/State) :overlay_types))
  (def overlay_txt ((rum/react DynamicReactState/State) :overlay_txt))
  (defn formOverride [e]
    (.preventDefault e)
    (def formData (js->clj (.-map_ (gforms/getFormDataMap (.getElementById js/document "contact-form")))))
    (def convertedData (reduce #(update-in %1 [(first %2)] (fn [_] (first (last %2)))) formData formData))
    (if (= "" (convertedData "Contact Details"))
      (reset! formError true)
      (do
        (reset! formError false)
        (DynamicReactState/CloseOverlay)
        (go (let [response (<! (http/post "https://us-central1-lweb-176107.cloudfunctions.net/sendLWEBMail"
                                          {:with-credentials? false
                                           :form-params convertedData}))])))))
  (defn backgroundOverlayClick [e]
    (cond
      (str/includes? (.-className (.-target e)) "overlay_container") (println "Overlay not closing, not outside target")
      (str/includes? (.-className (.-target e)) "downnav_overlay") (println "Overlay not closing, not outside target")
      (str/includes? (.-className (.-target e)) "upnav_overlay") (println "Overlay not closing, not outside target")
      (str/includes? (.-className (.-target e)) "rightnav_overlay") (println "Overlay not closing, not outside target")
      (str/includes? (.-className (.-target e)) "leftnav_overlay") (println "Overlay not closing, not outside target")
      :else (DynamicReactState/CloseOverlay)))
  (defn CloseButtonClick [e]
    (.preventDefault e)
    (DynamicReactState/CloseOverlay))
  (cond
    (= (overlay :name) :image)
    [:div.overlay_top
     [:div#backgroundOverlay.backgroundOverlay {:on-click (fn [e] (backgroundOverlayClick e))}]
     [:div.overlay_container
      [:a {:class "closebutton strokeme" :on-click (fn [e] (CloseButtonClick e))} "✖"]
      [:div.overlayimagecontrol
       [:div
        (if consts/isTouch [:div.img-wrap-up-overlay
                            (if (get-in overlay [:arrows :left]) (ic/chevronLeft {:on-click #(DynamicReactState/NavOverlayImage "left")}))
                            (if (get-in overlay [:arrows :up]) (ic/keyboardArrowUp {:on-click #(DynamicReactState/NavOverlayImage "up")}))
                            (if (get-in overlay [:arrows :down]) (ic/keyboardArrowDown {:on-click #(DynamicReactState/NavOverlayImage "down")}))
                            (if (get-in overlay [:arrows :right]) (ic/chevronRight {:on-click #(DynamicReactState/NavOverlayImage "right")}))]
            [(if (get-in overlay [:arrows :left]) [:div.img-wrap-left-overlay
                                                   (ic/chevronLeft {:on-click #(DynamicReactState/NavOverlayImage "left")})])
             (if (get-in overlay [:arrows :right]) [:div.img-wrap-right-overlay
                                                    (ic/chevronRight {:on-click #(DynamicReactState/NavOverlayImage "right")})])
             (if (get-in overlay [:arrows :up]) [:div.img-wrap-up-overlay
                                                 (ic/keyboardArrowUp {:on-click #(DynamicReactState/NavOverlayImage "up")})
                                                 (if (get-in overlay [:arrows :down])
                                                   (ic/keyboardArrowDown {:className "marginLeft" :on-click #(DynamicReactState/NavOverlayImage "down")}))])
             (if (and (not (get-in overlay [:arrows :up])) (get-in overlay [:arrows :down])) [:div.img-wrap-down-overlay
                                                                                              (ic/keyboardArrowDown {:on-click #(DynamicReactState/NavOverlayImage "down")})])])]
       [:h2 overlay_txt]
       (if (overlay :is_video)
         [:video.overlay-video {:autoPlay "1" :loop "1" :controls "1"}
          [:source {:src overlay_image_src :type "video/mp4"}]
          "Your browser does not support the video tag."]
         [:div.img-wrap-overlay
          (LazySizes {:dataSizes "auto" :alt "It's not loading!" :className "scale-img blur-up overlayimage" :src overlay_thumb_src :dataSrc overlay_image_src})])
       (if (overlay :is_video)
         [:div]
         [:div.overlaytext "This image is large and will remain obfuscated until downloaded"])
       (AddToCart/AddToCart false overlay_image_num overlay_types)]]]
    (= (overlay :name) :contact)
    (ui/dialog {:PaperProps {:className "overlayform"} :open true :onClose (fn [] (reset! formError false) (DynamicReactState/CloseOverlay))}
               (ui/dialog-title "The Leo Signal")
               (ui/dialog-content
                [:div
                 [:form#contact-form {:on-submit formOverride :target "self" :class "topLabel"}
                  [:form-head.form-spaced
                   [:h6 "Fill out the form below to get in contact with me!"]]
                  [:div.form-spaced
                   [:div
                    [:span
                     (ui/text-field {:id "element_2" :name "Firstname" :label "First Name"})]
                    [:span
                     (ui/text-field {:id "element_3" :name "Lastname" :label "Last Name"})]]]
                  [:div.form-spaced
                   (ui/text-field {:onChange (fn [e] (if (= "" (.-value (.-target e))) (reset! formError true) (reset! formError false))) :error (rum/react formError) :id "element_7" :name "Contact Details" :label "Contact Details*" :helperText (if (rum/react formError) "Please enter your contact details!" "")})]
                  [:div.form-spaced
                   (ui/text-field {:id "element_8" :name "Message" :multiline true :rows "10" :label "Message*"})]
                  [:div.submit
                   [:input {:value "Submit" :type "submit"}]]]
                 [:input {:name "embed" :value "form" :type "hidden"}]
                 [:input {:name "http_referer" :value "http://www.leotide.com/" :type "hidden"}]]))
    (= (overlay :name) :checkout)
    (ui/dialog {:PaperProps {:className "checkoutoverlay"} :open true :onClose (fn [] (reset! formError false) (DynamicReactState/CloseOverlay))}
               (ui/dialog-content (Checkout/Checkout)))
    (= (overlay :name) :models)
    (ui/dialog {:PaperProps {:className "modeloverlay"} :open true :onClose (fn [] (reset! formError false) (DynamicReactState/CloseOverlay))}
               (ui/dialog-title "Model Viewer")
               (ui/dialog-content (ModelViewer/ModelViewer)))))