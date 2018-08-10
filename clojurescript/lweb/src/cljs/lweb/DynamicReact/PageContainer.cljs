(ns lweb.DynamicReact.NavMenu
    (:require [rum.core :as rum]
    [lweb.DynamicReact.Actions as :Actions]
    [lweb.consts as :consts]
    [lweb.Shop.Checkout.Checkout as :Checkout]
    [lweb.consts as :consts]
    [cljs-react-material-ui.core :as ui]))


(rum/defc LeftNavButton []
    [:button [:div.slick-next-div]]
)

(rum/defc RightNavButton []
    [:button [:div.slick-prev-div]]
)

(rum/defc PageContainer [list onImageClick category page]
    (def smallScreen (> window.innerWidth 900))
    (def settings {})
    (def listItems [:ul.projects
        (doseq [item list]
            [:li {:key (get item key) :on-click (fn [] onImageClick((get item :item_number)))}
                [:div.img-wrap
                    [:img {:alt "It's not loading!" :src item.thumbs_src}]]]
        )
    ])
    (def listCaruosel (doseq [item list]
         [:div.carousel-img-wrap {:key (get item :item_number)}
            [:div
                {:style {:backgroundImage url(item.thumbs_src.toString()) :backgroundPosition "center" :backgroundRepeat "no-repeat" :backgroundSize "cover" :height "50vh" :width (if smallScreen "20vw" "40vw")}}]
         ]
    ))
    (if (= props.category "CHECKOUT")
        [Checkout/Checkout]
        (if (= props.page "home")
            [:div
                [:div.sidescroller
                    [Slider {:settings settings :nextArrow [LeftNavButton] :prevArrow [RightNavButton] listCarousel]]
                [:div.desc_holder
                    [:div.desc_text
                        [:div [:img {:alt "Not found" :src "./assets/images/LeotideIcon-min.png"}]]
                        [:h2 "Hello!"
                            [:div "I am Leonie (Leo) Herson, a multi-discliplinary, multi-talented and multi-limbed masters student from the University of Technology Sydney engaging in both"
                            ][:br][:br]
                            [:span.pink [:b "Science"]]
                            [:div "and"]
                            [:span.blue [:b "Design"]]
                            [:span.pink "(Research)"]
                            [:span.pink "(Animation/illustration)"][:br]
                            [:div "Whilst following my passion as a freelance scientific illustrator!"]
                        ]
                    ]
                    [:div.desc_txt
                        [:h2 "News!"]
                        [:div.news
                            [:div
                                Beautiful and dangerous: animating deadly viruses at Vivid Sydney <strong><a rel="noopener noreferrer" target="_blank" href="https://blog.csiro.au/beautiful-and-dangerous-animating-deadly-viruses-at-vivid-sydney/">here!</a></strong>
                                <br />
                                Mastering biomedical science by design <strong><a rel="noopener noreferrer" target="_blank" href="http://newsroom.uts.edu.au/news/2017/10/mastering-biomedical-science-design">here!</a></strong>
                            ]
                        ]
                    ]
                    [:div.demoreel
                        [:h2 "Check out the demo reel below!"]
                        [:video {:preload "none" :autoPlay "" :loop "" :controls "1"}
                            [:source {:src "./assets/images/LHDemoReel18.mp4" :type "video/mp4"}]
                            "Your browser does not support the video tag"
                        ]
                    ]
                    [:div {:class "desc_text last-element"}
                        [:h2 "Interested in a commission or purchasing a print?"]
                        "Please use the \"CONTACT ME!\" button on the bottom left of the screen to make an enquiry:" [:br]
                        [:div.left
                            [:span.underline "For a commission:"] [:br]
                            " - What type of comission? 2D/3D animation, illustration, 3D model or sketch?" [:br]
                            "- Subject matter, size, black/white or colour, etc" [:br]
                        ]
                    ]
                ]
            ]
            [:div
                [:div.desc
                    [:div.text (get consts/category category)]
                ]
                [listItems]
            ]
    ))
)
    ; const settings = {
    ;     dots: true,
    ;     infinite: true,
    ;     speed: 500,
    ;     slidesToShow: smallScreen ? 4 : 2,
    ;     slidesToScroll: 1,
    ;     arrows: true,
    ;     lazyLoad: false,
    ;     autoplay: true,
    ;     autoplaySpeed: 10000,
    ; }
;import Slider from "react-slick"
    ; onImageClick: (index) => {
    ;     dispatch(actionCreators.updateOverlayImage(index))
    ;     dispatch(actionCreators.toggleOverlay(true, true))
    ; },