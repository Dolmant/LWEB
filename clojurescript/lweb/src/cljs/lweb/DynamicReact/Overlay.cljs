(ns lweb.DynamicReact.NavMenu
    (:require [rum.core :as rum]
    [lweb.DynamicReact.Actions as :Actions]
    [lweb.Shop.AddToCart as :AddToCart]
    [lweb.LazySizes as :LazySizes]
    [lweb.consts as :consts]
    [cljs-react-material-ui.core :as ui]))

; todo
;    oncatClick: (id) => {
    ;     dispatch(actionCreators.updateCategory(id))
    ;     dispatch(actionCreators.toggleTouchmenu())
    ; },
(rum/defc Overlay [overlay, navOverlayImage, toggleOverlay, overlay_image_num, overlay_image_src overlay_thumb_src overlay_types overlay_txt]
    (defn formOverride [e]
        (e/preventDefault)
        (if (not $("#element_7")[0].value)
            $(".error_message")[0].innerText = "Please add your contact details!"
            (do
                (toggleOverlay false false)
                $.ajax({
                    url: "https://us-central1-lweb-176107.cloudfunctions.net/sendLWEBMail",
                    type: "POST",
                    data: $("#contact-form").serialize(),
                    beforeSend: () => {
                        const num = 0
                    },
                    success: (data) => {
                        const num = 0
                    },
                })
            )
        )
    )
    (defn backgroundOverlayClick [e]
        if (!($(event.target).is(".overlay_container") ||
        $(event.target).is(".downnav_overlay") ||
        $(event.target).is(".upnav_overlay") ||
        $(event.target).is(".rightnav_overlay") ||
        $(event.target).is(".leftnav_overlay"))) {
            this.props.toggleOverlay(false, false)
        }
    )
    (defn CloseButtonClick [e]
        event.preventDefault()
        this.props.toggleOverlay(false, false)
    )
    [:div.overlay_top
        [:div#backgroundOverlay.backgroundOverlay {:on-click (fn [e] backgroundOverlayClick(e))}]
        [:div.overlay_container
            [:a {:class "closebutton strokeme" :on-click (fn [e] (CloseButtonClick e))}]
            (if overlay.image
                [:div.overlayimagecontrol
                    [:div
                        (if overlay.arrows.left [:div.img-wrap-left-overlay [:img.leftnav_overlay {:alt "It's not loading!" :src "./assets/icons/LeftIcon.png" :on-click (fn [] navOverlayImage("left"))}]])
                        (if overlay.arrows.right [:div.img-wrap-right-overlay [:img.rightnav_overlay {:alt "It's not loading!" :src "./assets/icons/RightIcon.png" :on-click (fn [] navOverlayImage("right"))}]])
                        (if overlay.arrows.up [:div.img-wrap-up-overlay [:img.upnav_overlay {:alt "It's not loading!" :src "./assets/icons/UpIcon.png" :on-click (fn [] navOverlayImage("up"))}]])
                        (if overlay.arrows.down [:div.img-wrap-down-overlay [:img.downnav_overlay {:alt "It's not loading!" :src "./assets/icons/DownIcon.png" :on-click (fn [] navOverlayImage("down"))}]])
                    ]
                    [:h2 overlay_txt]
                    (if overlay.is_video
                        [:video.overlay-video {:autoPlay "1" :loop "1" :controls "1"}
                            [:source {:src overlay_image_src :type "video/mp4"}]
                            "Your browser does not support the video tag."
                        ]
                        [:div.img-wrap-overlay
                            [LazySizes {:dataSizes "auto" :alt "It's not loading!" :class "scale-img blur-up overlayimage" :src overlay_thumb_src :dataSrc overlay_image_src}]
                        ]
                    )
                    (if overlay.is_video
                        [:div]
                        [:div.overlaytext "This image is large and will remain obfuscated until downloaded"]
                    )
                    [AddToCart/AddToCart {:id overlay_image_num types overlay_types}]
                ]
                [:div.overlayform
                    [:form#contact-form {:on-submit (fn [e] (formOverride e)) :target "self" :class "topLabel"}
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
                                    [:label.error_message {:htmlFor "element_7"}]
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
