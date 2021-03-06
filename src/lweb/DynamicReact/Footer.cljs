(ns lweb.DynamicReact.Footer
  (:require
   [rum.core :as rum]
   [lweb.DynamicReact.State :as DynamicReactState]))

(rum/defc Footer []
  [:footer
   [:div.footer-container.container
    [:div.contact_me
     [:a#contact_overlay {:on-click (fn [e] (DynamicReactState/SetOverlay :contact))} "Contact Me!"]]
    [:div.contact
     [:ul
      [:li [:a "Member of the Australian Institute of Medical and Biological Illustration"]]]]
    [:div.social
     [:ul
      [:li
       [:a {:target "_blank" :rel "noopener noreferrer" :href "http://leotide.tumblr.com/"}
        [:img {:alt "It's not loading!" :src "./assets/icons/tumblricon.png"}]]]
      [:li
       [:a {:target "_blank" :rel "noopener noreferrer" :href "https://twitter.com/leotidelh?lang=en"}
        [:img {:alt "It's not loading!" :src "./assets/icons/twittericon.png"}]]]
      [:li
       [:a {:target "_blank" :rel "noopener noreferrer" :href "https://www.instagram.com/leo_tide/"}
        [:img {:alt "It's not loading!" :src "./assets/icons/instagramicon.png"}]]]]]]])
