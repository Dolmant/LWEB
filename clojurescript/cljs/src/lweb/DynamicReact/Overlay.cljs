(ns lweb.DynamicReact.Overlay
    (:require [rum.core :as rum]
    [lweb.DynamicReact.State :as DynamicReactState]
    [lweb.Shop.CartManagement.AddToCart :as AddToCart]
    [goog.dom.forms :as gforms]
    [cljs-http.client :as http]
    ["/gen/lazySizes/index" :default Lazy]
    [clojure.string :as str]
    [cljs.core.async :refer [<!]])
    (:require-macros [cljs.core.async.macros :refer [go]]))

(def LazySizes (cljs-react-material-ui.core-macros/adapt-rum-class Lazy))

(defn oncatClick [id]
    (DynamicReactState/SetCategory id)
    (DynamicReactState/SetAttr :touchmenu_active false)
)
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
            (set! (.-innerHTML (.getElementById js/document "error_message")) "Please add your contact details!")
            (do
                (DynamicReactState/ToggleOverlay false false)
                (go (let [response (<! (http/post "https://us-central1-lweb-176107.cloudfunctions.net/sendLWEBMail"
                                                {
                                                    :with-credentials? false
                                                    :form-params convertedData
                                                }
                                            ))]
                ))
            )
        )
    )
    (defn backgroundOverlayClick [e]
        (cond
            (str/includes? (.-className (.-target e)) "overlay_container") (println "Overlay not closing, not outside target")
            (str/includes? (.-className (.-target e)) "downnav_overlay") (println "Overlay not closing, not outside target")
            (str/includes? (.-className (.-target e)) "upnav_overlay") (println "Overlay not closing, not outside target")
            (str/includes? (.-className (.-target e)) "rightnav_overlay") (println "Overlay not closing, not outside target")
            (str/includes? (.-className (.-target e)) "leftnav_overlay") (println "Overlay not closing, not outside target")
            :else (DynamicReactState/ToggleOverlay false, false)
        )
    )
    (defn CloseButtonClick [e]
        (.preventDefault e)
        (DynamicReactState/ToggleOverlay false, false)
    )
    [:div.overlay_top
        [:div#backgroundOverlay.backgroundOverlay {:on-click (fn [e] (backgroundOverlayClick e))}]
        [:div.overlay_container
            [:a {:class "closebutton strokeme" :on-click (fn [e] (CloseButtonClick e))}]
            (if (overlay :image)
                [:div.overlayimagecontrol
                    [:div
                        (if (get-in overlay [:arrows :left]) [:div.img-wrap-left-overlay [:img.leftnav_overlay {:alt "It's not loading!" :src "./assets/icons/LeftIcon.png" :on-click #(DynamicReactState/NavOverlayImage "left")}]])
                        (if (get-in overlay [:arrows :right]) [:div.img-wrap-right-overlay [:img.rightnav_overlay {:alt "It's not loading!" :src "./assets/icons/RightIcon.png" :on-click #(DynamicReactState/NavOverlayImage "right")}]])
                        (if (get-in overlay [:arrows :up]) [:div.img-wrap-up-overlay [:img.upnav_overlay {:alt "It's not loading!" :src "./assets/icons/UpIcon.png" :on-click #(DynamicReactState/NavOverlayImage "up")}]])
                        (if (get-in overlay [:arrows :down]) [:div.img-wrap-down-overlay [:img.downnav_overlay {:alt "It's not loading!" :src "./assets/icons/DownIcon.png" :on-click #(DynamicReactState/NavOverlayImage "down")}]])
                    ]
                    [:h2 overlay_txt]
                    (if (overlay :is_video)
                        [:video.overlay-video {:autoPlay "1" :loop "1" :controls "1"}
                            [:source {:src overlay_image_src :type "video/mp4"}]
                            "Your browser does not support the video tag."
                        ]
                        [:div.img-wrap-overlay
                            (LazySizes {:dataSizes "auto" :alt "It's not loading!" :className "scale-img blur-up overlayimage" :src overlay_thumb_src :dataSrc overlay_image_src})
                        ]
                    )
                    (if (overlay :is_video)
                        [:div]
                        [:div.overlaytext "This image is large and will remain obfuscated until downloaded"]
                    )
                    (AddToCart/AddToCart false overlay_image_num overlay_types)
                ]
                [:div.overlayform
                    [:form#contact-form {:on-submit formOverride :target "self" :class "topLabel"}
                        [:form-head
                            [:h7 "The Leo Signal"]
                            [:h8 "Fill out the form below to get in contact with Me!"]
                        ]
                        [:ul
                            [:li#li-0.data_container
                                [:label {:htmlFor "element_0"} "Name"]
                                [:div.form-field
                                    [:span
                                        [:input#element_2 {:name "Firstname" :type "text"}]
                                        [:label.form-bottom-label {:htmlFor "element_2"} "First"]
                                    ]
                                    [:span
                                        [:input#element_3 {:name "Lastname" :type "text"}]
                                        [:label.form-bottom-label {:htmlFor "element_3"} "Last"]
                                    ]
                                ]
                            ]
                            [:li
                                [:label {:htmlFor "element_7"} "Contact Details" [:span "*"]]
                                [:div.form-field
                                    [:input#element_7 {:name "Contact Details" :type "text"}]
                                    [:label#error_message {:htmlFor "element_7"}]
                                ]
                            ]
                            [:li.textarea
                                [:label {:htmlFor "element_8"} "Message"]
                                [:div.form-field
                                    [:textarea#element_8 {:name "Message" :cols "45" :rows "10"}]
                                ]
                            ]
                            [:li.submit
                                [:input {:value "Submit" :type "submit"}]
                            ]
                        ]
                        [:input {:name "embed" :value "form" :type "hidden"}]
                        [:input {:name "http_referer" :value "http://www.leotide.com/" :type "hidden"}]
                    ]
                ]
            )
        ]]
)
