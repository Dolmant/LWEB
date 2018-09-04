(ns lweb.DynamicReact.PageContainer
  (:require-macros [lweb.rum-adaptor-macro :as m])
  (:require [rum.core :as rum]
            [lweb.DynamicReact.NavMenu :as NavMenu]
            [lweb.DynamicReact.State :as DynamicReactState]
            [lweb.consts :as consts]
            ["react-slick" :as Slick]
            [clojure.string :as str]))

(def Slider (m/adapt-rum-class Slick/default))

(rum/defc LeftNavButton []
  [:button [:div.slick-next-div]])

(rum/defc RightNavButton []
  [:button [:div.slick-prev-div]])

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
                           [:div {:style {:height "90%" :width "90%" :backgroundImage (str/join "" ["url(" (item :thumbs_src) ")"]) :backgroundPosition "center" :backgroundRepeat "no-repeat" :backgroundSize "cover"}}]]])
                       itemList)])
  (def listCarousel
    (map (fn [item]
           [:div.carousel-img-wrap {:key (item :item_number)}
            [:div
             {:style {:backgroundImage (str/join "" ["url(" (item :thumbs_src) ")"]) :backgroundPosition "center" :backgroundRepeat "no-repeat" :backgroundSize "cover" :height "50vh" :width (if consts/isTouch "40vw" "20vw")}}]])
         (consts/projectList :HomeInitial)))
  [:div
   [:div.desc_holder#about
    [:div.desc_text.divider
                ; [:h2 "About" ]
     [:div "I am Leonie (Leo) Herson, a multi-discliplinary, multi-talented and multi-limbed masters student from the University of Technology Sydney engaging in science and biomedical research whilst following my passion as an illustrator!"]]
    [:div.desc_text.divider
                ; [:h2 "News"]
     [:div.news
      [:div
       "Beautiful and dangerous: animating deadly viruses at Vivid Sydney, link " [:strong [:a {:rel "noopener noreferrer" :target "_blank" :href "https://blog.csiro.au/beautiful-and-dangerous-animating-deadly-viruses-at-vivid-sydney/"} "here!"]]
       [:br]
       "Mastering biomedical science by design, link " [:strong [:a {:rel "noopener noreferrer" :target "_blank" :href "http://newsroom.uts.edu.au/news/2017/10/mastering-biomedical-science-design"} "here!"]]]]]
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
    [:h2 "My Work"]
    (NavMenu/TabMenu)
            ; [:div.text (consts/projectListLabels category)]
]
   [:div#content
    [listItems]]])
