goog.provide('lweb.DynamicReact.Footer');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('lweb.DynamicReact.State');
lweb.DynamicReact.Footer.Footer = rum.core.build_defc((function (){
lweb.DynamicReact.Footer.introOn_QMARK_ = false;

if(lweb.DynamicReact.Footer.introOn_QMARK_){
return React.createElement("footer",null,React.createElement("div",({"className": "footer-container container"}),React.createElement("div",({"className": "contact"}),React.createElement("ul",null,React.createElement("li",null,React.createElement("a",null,"Member of the Australian Institute of Medical and Biological Illustration")))),React.createElement("div",({"className": "contact_me"}),React.createElement("a",({"id": "contact_overlay", "onClick": (function (e){
return lweb.DynamicReact.State.ToggleOverlay(true,false);
})}),"Contact Me!")),React.createElement("div",({"className": "social"}),React.createElement("ul",null,React.createElement("li",null,React.createElement("a",({"target": "_blank", "rel": "noopener noreferrer", "href": "http://leotide.tumblr.com/"}),React.createElement("img",({"alt": "It's not loading!", "src": "./assets/icons/tumblricon.png"})))),React.createElement("li",null,React.createElement("a",({"target": "_blank", "rel": "noopener noreferrer", "href": "https://twitter.com/leotidelh?lang=en"}),React.createElement("img",({"alt": "It's not loading!", "src": "./assets/icons/twittericon.png"})))),React.createElement("li",null,React.createElement("a",({"target": "_blank", "rel": "noopener noreferrer", "href": "https://www.instagram.com/leo_tide/"}),React.createElement("img",({"alt": "It's not loading!", "src": "./assets/icons/instagramicon.png"}))))))));
} else {
return React.createElement("div",null);
}
}),null,"Footer");

//# sourceMappingURL=lweb.DynamicReact.Footer.js.map
