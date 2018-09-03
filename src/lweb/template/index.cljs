(ns lweb.template.index
  (:require [rum.core :as rum]
            [clojure.string :as str]))

(rum/defc Template [appInstance css jsmap]
  (rum/defc cssSheet [href] [:link {:rel "stylesheet" :href href}])
  (rum/defc jsImport [src] [:script {:defer true :src src}])
  (def cssTemplate (map cssSheet css))
  (def jsTemplate (map jsImport jsmap))
  [:html.loading#html
   [:head
    [:meta {:http-equiv "Content-Type" :content "text/html; charset=UTF-8"}]
    [:meta {:name "viewport" :content "width=device-width"}]
    [:meta {:name "author" :content "NoFavorite"}]
    [:meta {:name "theme-color" :content "#000000"}]
    [:meta {:name "description" :content "Leo Science Illustration"}]
    [:meta {:name "keywords" :content "science,Illustration,fun,art"}]
    jsTemplate
    cssTemplate
    [:style
     {:dangerouslySetInnerHTML {:__html "html.loading #loading {background-image:url('/assets/images/MV_AniBlack.gif');background-size:10rem 10rem;background-position:center;background-repeat:no-repeat;height:100vh;width:100vw;}html {min-height:100%;overflow-y:scroll}html.loading {height:100vh}"}}]
    [:script {:dangerouslySetInnerHTML {:__html "window.matchMedia = window.matchMedia || (() => ({matches: false,addListener: () => {},removeListener: () => {},}))"}}]
    [:link {:rel "shortcut icon" :href "/assets/images/leotideicon.ico"}]
    [:link {:rel "stylesheet" :type "text/css" :href "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"}]
    [:link {:rel "stylesheet" :type "text/css" :href "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}]
    [:link {:rel "stylesheet" :type "text/css" :href "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"}]
    [:link {:rel "stylesheet" :href "https://fonts.googleapis.com/css?family=Raleway:400,700,800"}]
    [:script {:defer true :src "https://use.fontawesome.com/releases/v5.0.8/js/all.js"}] ;todo do I need these fonts? I think I use it once somewhere only
    [:title "LeoTide - Portfolio"]]
   [:body {:style {:padding-right "0px !important"}}
    [:div#loading]
    [:div#app (appInstance)]
    [:script {:dangerouslySetInnerHTML {:__html "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-99207931-1', 'auto');ga('send', 'pageview');"}}]]])

