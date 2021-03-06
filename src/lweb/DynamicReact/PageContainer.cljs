(ns lweb.DynamicReact.PageContainer
  (:require [rum.core :as rum]
            [lweb.DynamicReact.NavMenu :as NavMenu]
            [lweb.DynamicReact.State :as DynamicReactState]
            [lweb.consts :as consts]
            ; ["react-slick" :as Slick]
            [clojure.string :as str]))

; (def Slider (adapt-rum-class Slick/default))

; (rum/defc LeftNavButton []
;   [:button [:div.slick-next-div]])

; (rum/defc RightNavButton []
;   [:button [:div.slick-prev-div]])

(defn onImageClick [index]
  (DynamicReactState/UpdateOverlayImage index)
  (DynamicReactState/SetOverlay :image))

(rum/defc PageContainer < rum/reactive []
  (def itemList ((rum/react DynamicReactState/State) :list))
  (def category ((rum/react DynamicReactState/State) :category))
  (def page ((rum/react DynamicReactState/State) :page))
  (def listItems [:ul.projects {:key "ul"}
                  (map (fn [item]
                         [:li {:key (item :item_number) :on-click (fn [] (onImageClick (get item :item_number)))}
                          [:div.img-wrap
                           [:div {:style {:height "100%" :width "100%" :backgroundImage (str/join "" ["url(" (item :thumbs_src) ")"]) :backgroundPosition "center" :backgroundRepeat "no-repeat" :backgroundSize "contain"}}]]])
                       itemList)])
  ; (def listCarousel
  ;   (map (fn [item]
  ;          [:div.carousel-img-wrap {:key (item :item_number)}
  ;           [:div
  ;            {:style {:backgroundImage (str/join "" ["url(" (item :thumbs_src) ")"]) :backgroundPosition "center" :backgroundRepeat "no-repeat" :backgroundSize "cover" :height "50vh" :width (if consts/isTouch "40vw" "20vw")}}]])
  ;        (consts/projectList :Highlights)))
  [:div
   [:div.desc_holder#about
    ; [:img {:src "/assets/webImages/headshot.jpg"}]
    [:div
     [:div.desc_text.divider
      [:div "Leonie (Leo) Herson is a multi-disciplinary, multi-talented and multi-limbed biomedical animator and illustrator/graphic designer from Sydney. She has collaborated to create award-winning works with companies, research institutions, engineers (even banks!) from across the world."]]
     [:div.desc_text.divider
      [:div.news
       [:div
        "Animation on CAR T Cells featured on SBS World News, link " [:strong [:a {:rel "noopener noreferrer" :target "_blank" :href "https://www.sbs.com.au/news/revolutionary-cancer-treatment-approved"} "here"]] "/full animation " [:strong [:a {:rel "noopener noreferrer" :target "_blank" :href "https://www.petermac.org/services/treatment/haematological-treatments/cellular-therapies-program/car-t-cell-therapy"} "here!"]]
        [:br]
        "Beautiful and dangerous: animating deadly viruses at Vivid Sydney, link " [:strong [:a {:rel "noopener noreferrer" :target "_blank" :href "https://blog.csiro.au/beautiful-and-dangerous-animating-deadly-viruses-at-vivid-sydney/"} "here!"]]
        [:br]
        "Mastering biomedical science by design, link " [:strong [:a {:rel "noopener noreferrer" :target "_blank" :href "http://newsroom.uts.edu.au/news/2017/10/mastering-biomedical-science-design"} "here!"]]
        ]]]]
            ; [:div.sidescroller
            ;     (Slider {:nextArrow (LeftNavButton)
            ;             :prevArrow (RightNavButton)
            ;             :dots true
            ;             :infinite true
            ;             :speed 500
            ;             :slidesToShow (if consts/isTouch 2 4)
            ;             :slidesToScroll 1
            ;             :arrows true
            ;             :lazyLoad false
            ;             :autoplay true
            ;             :autoplaySpeed 10000}
            ;             [listCarousel])]
            ; [:div.demoreel
            ;     [:h2 "Check out the demo reel below!"]
            ;     [:video {:preload "none" :autoPlay "" :loop "" :controls "1"}
            ;         [:source {:src "./assets/images/LHDemoReel18.mp4" :type "video/mp4"}]
            ;         "Your browser does not support the video tag"
            ;     ]
            ; ]
    ]
   [:div.desc
    ; [:h2 "My Work"]
    (NavMenu/TabMenu)]
   [:div#content
    [listItems]]])
