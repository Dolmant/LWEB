(ns lweb.DynamicReact.Footer
    (:require [rum.core :as rum]))

(rum/defc Footer [introOn? onContactClick]
        (if introOn?
            [:footer
                [:div.footer-container.container
                    [:div.contact
                        [:ul
                            [:li [:a "Member of the Australian Institute of Medical and Biological Illustration"]]
                        ]
                    ]
                    [:div.contact_me
                        [:a#contact_overlay {:on-click (fn [e] (onContactClick))} "Contact Me!"]
                    ]
                    [:div.social
                        [:ul
                            [:li
                                [:a {:target "_blank" :rel "noopener noreferrer" :href "http://leotide.tumblr.com/"}
                                    [:img {:alt "It's not loading!" :src "./assets/icons/tumblricon.png"}]
                                ]
                            ]
                            [:li
                                [:a {:target "_blank" :rel "noopener noreferrer" :href "https://twitter.com/leotidelh?lang=en"}
                                    [:img {:alt "It's not loading!" :src "./assets/icons/twittericon.png"}]
                                ]
                            ]
                            [:li
                                [:a {:target "_blank" :rel "noopener noreferrer" :href "https://www.instagram.com/leo_tide/"}
                                    [:img {:alt "It's not loading!" :src "./assets/icons/instagramicon.png"}]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        [:div])
)
;; todo - this should toggle the overlay
;;const mapDispatchToProps = dispatch => ({
;;    onContactClick: () => {
;;        dispatch(actionCreators.toggleOverlay(true, false))
;;    },
;;})

