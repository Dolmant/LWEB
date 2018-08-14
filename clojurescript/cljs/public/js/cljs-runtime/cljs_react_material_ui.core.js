goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
var module$node_modules$$material_ui$core$index=shadow.js.require("module$node_modules$$material_ui$core$index", {});
var module$node_modules$$material_ui$core$styles$index=shadow.js.require("module$node_modules$$material_ui$core$styles$index", {});
var module$node_modules$$material_ui$core$styles$createMuiTheme=shadow.js.require("module$node_modules$$material_ui$core$styles$createMuiTheme", {});
goog.require('clojure.walk');
goog.require('sablono.util');
cljs_react_material_ui.core.transform_keys = (function cljs_react_material_ui$core$transform_keys(t,coll){

var transform = (function cljs_react_material_ui$core$transform_keys_$_transform(p__2523){
var vec__2526 = p__2523;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2526,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2526,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(k) : t.call(null,k)),v], null);
});
return clojure.walk.postwalk((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(transform,x));
} else {
return x;
}
}),coll);
});
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,sablono.util.camel_case_keys);
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(var_args){
var G__2559 = arguments.length;
switch (G__2559) {
case 2:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2 = (function (react_class,args){
var first_arg = cljs.core.first(args);
var args__$1 = ((((cljs.core.map_QMARK_(first_arg)) || ((first_arg == null))))?args:cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,react_class,(function (){var G__2591 = cljs.core.first(args__$1);
return (cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.cljs$core$IFn$_invoke$arity$1(G__2591) : cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,G__2591));
})(),cljs.core.rest(args__$1));
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3 = (function (root_obj,type,args){
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((root_obj[type]),args);
});

cljs_react_material_ui.core.create_mui_cmp.cljs$lang$maxFixedArity = 3;

cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var G__2601 = arguments.length;
switch (G__2601) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((function (){var G__2605 = {};
return module$node_modules$$material_ui$core$styles$createMuiTheme(G__2605);
})());
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
var G__2609 = cljs.core.clj__GT_js(cljs_react_material_ui.core.transform_keys(sablono.util.camel_case,raw_theme));
return module$node_modules$$material_ui$core$styles$createMuiTheme(G__2609);
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (module$node_modules$$material_ui$core$styles$index["colors"][cljs.core.name(sablono.util.camel_case(color_key))]);
});
cljs_react_material_ui.core.make_selectable = (module$node_modules$$material_ui$core$index["makeSelectable"]);
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_react_material_ui.core.create_mui_cmp,module$node_modules$$material_ui$core$index);
cljs_react_material_ui.core.selectable_list = (function cljs_react_material_ui$core$selectable_list(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2668 = arguments.length;
var i__5144__auto___2669 = (0);
while(true){
if((i__5144__auto___2669 < len__5143__auto___2668)){
args__5146__auto__.push((arguments[i__5144__auto___2669]));

var G__2673 = (i__5144__auto___2669 + (1));
i__5144__auto___2669 = G__2673;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((function (){var G__2665 = (module$node_modules$$material_ui$core$index["List"]);
return (cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$1 ? cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$1(G__2665) : cljs_react_material_ui.core.make_selectable.call(null,G__2665));
})(),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq2643){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2643));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2722 = arguments.length;
var i__5144__auto___2723 = (0);
while(true){
if((i__5144__auto___2723 < len__5143__auto___2722)){
args__5146__auto__.push((arguments[i__5144__auto___2723]));

var G__2727 = (i__5144__auto___2723 + (1));
i__5144__auto___2723 = G__2727;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("AppBar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args));
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq2703){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2703));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2766 = arguments.length;
var i__5144__auto___2770 = (0);
while(true){
if((i__5144__auto___2770 < len__5143__auto___2766)){
args__5146__auto__.push((arguments[i__5144__auto___2770]));

var G__2772 = (i__5144__auto___2770 + (1));
i__5144__auto___2770 = G__2772;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Avatar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args));
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq2748){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2748));
});

cljs_react_material_ui.core.backdrop = (function cljs_react_material_ui$core$backdrop(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2795 = arguments.length;
var i__5144__auto___2796 = (0);
while(true){
if((i__5144__auto___2796 < len__5143__auto___2795)){
args__5146__auto__.push((arguments[i__5144__auto___2796]));

var G__2809 = (i__5144__auto___2796 + (1));
i__5144__auto___2796 = G__2809;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.backdrop.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.backdrop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Backdrop",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Backdrop",args));
});

cljs_react_material_ui.core.backdrop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.backdrop.cljs$lang$applyTo = (function (seq2781){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2781));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2834 = arguments.length;
var i__5144__auto___2835 = (0);
while(true){
if((i__5144__auto___2835 < len__5143__auto___2834)){
args__5146__auto__.push((arguments[i__5144__auto___2835]));

var G__2836 = (i__5144__auto___2835 + (1));
i__5144__auto___2835 = G__2836;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Badge",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args));
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq2826){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2826));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2838 = arguments.length;
var i__5144__auto___2841 = (0);
while(true){
if((i__5144__auto___2841 < len__5143__auto___2838)){
args__5146__auto__.push((arguments[i__5144__auto___2841]));

var G__2842 = (i__5144__auto___2841 + (1));
i__5144__auto___2841 = G__2842;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("BottomNavigation",args) : cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args));
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq2837){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2837));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2852 = arguments.length;
var i__5144__auto___2853 = (0);
while(true){
if((i__5144__auto___2853 < len__5143__auto___2852)){
args__5146__auto__.push((arguments[i__5144__auto___2853]));

var G__2856 = (i__5144__auto___2853 + (1));
i__5144__auto___2853 = G__2856;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("BottomNavigationItem",args) : cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args));
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq2845){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2845));
});

cljs_react_material_ui.core.button = (function cljs_react_material_ui$core$button(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2880 = arguments.length;
var i__5144__auto___2881 = (0);
while(true){
if((i__5144__auto___2881 < len__5143__auto___2880)){
args__5146__auto__.push((arguments[i__5144__auto___2881]));

var G__2884 = (i__5144__auto___2881 + (1));
i__5144__auto___2881 = G__2884;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Button",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Button",args));
});

cljs_react_material_ui.core.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.button.cljs$lang$applyTo = (function (seq2865){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2865));
});

cljs_react_material_ui.core.button_base = (function cljs_react_material_ui$core$button_base(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2892 = arguments.length;
var i__5144__auto___2893 = (0);
while(true){
if((i__5144__auto___2893 < len__5143__auto___2892)){
args__5146__auto__.push((arguments[i__5144__auto___2893]));

var G__2894 = (i__5144__auto___2893 + (1));
i__5144__auto___2893 = G__2894;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.button_base.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.button_base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ButtonBase",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ButtonBase",args));
});

cljs_react_material_ui.core.button_base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.button_base.cljs$lang$applyTo = (function (seq2885){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2885));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2925 = arguments.length;
var i__5144__auto___2926 = (0);
while(true){
if((i__5144__auto___2926 < len__5143__auto___2925)){
args__5146__auto__.push((arguments[i__5144__auto___2926]));

var G__2928 = (i__5144__auto___2926 + (1));
i__5144__auto___2926 = G__2928;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Card",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Card",args));
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq2903){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2903));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2945 = arguments.length;
var i__5144__auto___2946 = (0);
while(true){
if((i__5144__auto___2946 < len__5143__auto___2945)){
args__5146__auto__.push((arguments[i__5144__auto___2946]));

var G__2947 = (i__5144__auto___2946 + (1));
i__5144__auto___2946 = G__2947;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardActions",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args));
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq2930){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2930));
});

cljs_react_material_ui.core.card_content = (function cljs_react_material_ui$core$card_content(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2949 = arguments.length;
var i__5144__auto___2950 = (0);
while(true){
if((i__5144__auto___2950 < len__5143__auto___2949)){
args__5146__auto__.push((arguments[i__5144__auto___2950]));

var G__2951 = (i__5144__auto___2950 + (1));
i__5144__auto___2950 = G__2951;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_content.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.card_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardContent",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardContent",args));
});

cljs_react_material_ui.core.card_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_content.cljs$lang$applyTo = (function (seq2948){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2948));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2953 = arguments.length;
var i__5144__auto___2954 = (0);
while(true){
if((i__5144__auto___2954 < len__5143__auto___2953)){
args__5146__auto__.push((arguments[i__5144__auto___2954]));

var G__2955 = (i__5144__auto___2954 + (1));
i__5144__auto___2954 = G__2955;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardHeader",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args));
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq2952){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2952));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2957 = arguments.length;
var i__5144__auto___2958 = (0);
while(true){
if((i__5144__auto___2958 < len__5143__auto___2957)){
args__5146__auto__.push((arguments[i__5144__auto___2958]));

var G__2959 = (i__5144__auto___2958 + (1));
i__5144__auto___2958 = G__2959;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardMedia",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args));
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq2956){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2956));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2961 = arguments.length;
var i__5144__auto___2962 = (0);
while(true){
if((i__5144__auto___2962 < len__5143__auto___2961)){
args__5146__auto__.push((arguments[i__5144__auto___2962]));

var G__2963 = (i__5144__auto___2962 + (1));
i__5144__auto___2962 = G__2963;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Checkbox",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args));
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq2960){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2960));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2965 = arguments.length;
var i__5144__auto___2966 = (0);
while(true){
if((i__5144__auto___2966 < len__5143__auto___2965)){
args__5146__auto__.push((arguments[i__5144__auto___2966]));

var G__2967 = (i__5144__auto___2966 + (1));
i__5144__auto___2966 = G__2967;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Chip",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args));
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq2964){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2964));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2969 = arguments.length;
var i__5144__auto___2970 = (0);
while(true){
if((i__5144__auto___2970 < len__5143__auto___2969)){
args__5146__auto__.push((arguments[i__5144__auto___2970]));

var G__2971 = (i__5144__auto___2970 + (1));
i__5144__auto___2970 = G__2971;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CircularProgress",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args));
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq2968){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2968));
});

cljs_react_material_ui.core.click_away_listener = (function cljs_react_material_ui$core$click_away_listener(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2973 = arguments.length;
var i__5144__auto___2974 = (0);
while(true){
if((i__5144__auto___2974 < len__5143__auto___2973)){
args__5146__auto__.push((arguments[i__5144__auto___2974]));

var G__2975 = (i__5144__auto___2974 + (1));
i__5144__auto___2974 = G__2975;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.click_away_listener.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.click_away_listener.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ClickAwayListener",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ClickAwayListener",args));
});

cljs_react_material_ui.core.click_away_listener.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.click_away_listener.cljs$lang$applyTo = (function (seq2972){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2972));
});

cljs_react_material_ui.core.collapse = (function cljs_react_material_ui$core$collapse(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2977 = arguments.length;
var i__5144__auto___2978 = (0);
while(true){
if((i__5144__auto___2978 < len__5143__auto___2977)){
args__5146__auto__.push((arguments[i__5144__auto___2978]));

var G__2979 = (i__5144__auto___2978 + (1));
i__5144__auto___2978 = G__2979;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.collapse.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.collapse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Collapse",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Collapse",args));
});

cljs_react_material_ui.core.collapse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.collapse.cljs$lang$applyTo = (function (seq2976){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2976));
});

cljs_react_material_ui.core.css_baseline = (function cljs_react_material_ui$core$css_baseline(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2981 = arguments.length;
var i__5144__auto___2982 = (0);
while(true){
if((i__5144__auto___2982 < len__5143__auto___2981)){
args__5146__auto__.push((arguments[i__5144__auto___2982]));

var G__2983 = (i__5144__auto___2982 + (1));
i__5144__auto___2982 = G__2983;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.css_baseline.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.css_baseline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CssBaseline",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CssBaseline",args));
});

cljs_react_material_ui.core.css_baseline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.css_baseline.cljs$lang$applyTo = (function (seq2980){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2980));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2985 = arguments.length;
var i__5144__auto___2986 = (0);
while(true){
if((i__5144__auto___2986 < len__5143__auto___2985)){
args__5146__auto__.push((arguments[i__5144__auto___2986]));

var G__2987 = (i__5144__auto___2986 + (1));
i__5144__auto___2986 = G__2987;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Dialog",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args));
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq2984){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2984));
});

cljs_react_material_ui.core.dialog_actions = (function cljs_react_material_ui$core$dialog_actions(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2989 = arguments.length;
var i__5144__auto___2990 = (0);
while(true){
if((i__5144__auto___2990 < len__5143__auto___2989)){
args__5146__auto__.push((arguments[i__5144__auto___2990]));

var G__2991 = (i__5144__auto___2990 + (1));
i__5144__auto___2990 = G__2991;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.dialog_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("DialogActions",args) : cljs_react_material_ui.core.create_mui_el.call(null,"DialogActions",args));
});

cljs_react_material_ui.core.dialog_actions.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.dialog_actions.cljs$lang$applyTo = (function (seq2988){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2988));
});

cljs_react_material_ui.core.dialog_content = (function cljs_react_material_ui$core$dialog_content(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2993 = arguments.length;
var i__5144__auto___2994 = (0);
while(true){
if((i__5144__auto___2994 < len__5143__auto___2993)){
args__5146__auto__.push((arguments[i__5144__auto___2994]));

var G__2995 = (i__5144__auto___2994 + (1));
i__5144__auto___2994 = G__2995;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog_content.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.dialog_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("DialogContent",args) : cljs_react_material_ui.core.create_mui_el.call(null,"DialogContent",args));
});

cljs_react_material_ui.core.dialog_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.dialog_content.cljs$lang$applyTo = (function (seq2992){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2992));
});

cljs_react_material_ui.core.dialog_content_text = (function cljs_react_material_ui$core$dialog_content_text(var_args){
var args__5146__auto__ = [];
var len__5143__auto___2997 = arguments.length;
var i__5144__auto___2998 = (0);
while(true){
if((i__5144__auto___2998 < len__5143__auto___2997)){
args__5146__auto__.push((arguments[i__5144__auto___2998]));

var G__2999 = (i__5144__auto___2998 + (1));
i__5144__auto___2998 = G__2999;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog_content_text.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.dialog_content_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("DialogContentText",args) : cljs_react_material_ui.core.create_mui_el.call(null,"DialogContentText",args));
});

cljs_react_material_ui.core.dialog_content_text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.dialog_content_text.cljs$lang$applyTo = (function (seq2996){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2996));
});

cljs_react_material_ui.core.dialog_title = (function cljs_react_material_ui$core$dialog_title(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3001 = arguments.length;
var i__5144__auto___3002 = (0);
while(true){
if((i__5144__auto___3002 < len__5143__auto___3001)){
args__5146__auto__.push((arguments[i__5144__auto___3002]));

var G__3003 = (i__5144__auto___3002 + (1));
i__5144__auto___3002 = G__3003;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog_title.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.dialog_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("DialogTitle",args) : cljs_react_material_ui.core.create_mui_el.call(null,"DialogTitle",args));
});

cljs_react_material_ui.core.dialog_title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.dialog_title.cljs$lang$applyTo = (function (seq3000){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3000));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3005 = arguments.length;
var i__5144__auto___3006 = (0);
while(true){
if((i__5144__auto___3006 < len__5143__auto___3005)){
args__5146__auto__.push((arguments[i__5144__auto___3006]));

var G__3007 = (i__5144__auto___3006 + (1));
i__5144__auto___3006 = G__3007;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Divider",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args));
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq3004){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3004));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3009 = arguments.length;
var i__5144__auto___3010 = (0);
while(true){
if((i__5144__auto___3010 < len__5143__auto___3009)){
args__5146__auto__.push((arguments[i__5144__auto___3010]));

var G__3011 = (i__5144__auto___3010 + (1));
i__5144__auto___3010 = G__3011;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Drawer",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args));
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq3008){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3008));
});

cljs_react_material_ui.core.expansion_panel = (function cljs_react_material_ui$core$expansion_panel(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3013 = arguments.length;
var i__5144__auto___3014 = (0);
while(true){
if((i__5144__auto___3014 < len__5143__auto___3013)){
args__5146__auto__.push((arguments[i__5144__auto___3014]));

var G__3015 = (i__5144__auto___3014 + (1));
i__5144__auto___3014 = G__3015;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.expansion_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.expansion_panel.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ExpansionPanel",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ExpansionPanel",args));
});

cljs_react_material_ui.core.expansion_panel.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.expansion_panel.cljs$lang$applyTo = (function (seq3012){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3012));
});

cljs_react_material_ui.core.expansion_panel_actions = (function cljs_react_material_ui$core$expansion_panel_actions(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3017 = arguments.length;
var i__5144__auto___3018 = (0);
while(true){
if((i__5144__auto___3018 < len__5143__auto___3017)){
args__5146__auto__.push((arguments[i__5144__auto___3018]));

var G__3019 = (i__5144__auto___3018 + (1));
i__5144__auto___3018 = G__3019;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.expansion_panel_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.expansion_panel_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ExpansionPanelActions",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ExpansionPanelActions",args));
});

cljs_react_material_ui.core.expansion_panel_actions.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.expansion_panel_actions.cljs$lang$applyTo = (function (seq3016){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3016));
});

cljs_react_material_ui.core.expansion_panel_details = (function cljs_react_material_ui$core$expansion_panel_details(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3021 = arguments.length;
var i__5144__auto___3022 = (0);
while(true){
if((i__5144__auto___3022 < len__5143__auto___3021)){
args__5146__auto__.push((arguments[i__5144__auto___3022]));

var G__3023 = (i__5144__auto___3022 + (1));
i__5144__auto___3022 = G__3023;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.expansion_panel_details.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.expansion_panel_details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ExpansionPanelDetails",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ExpansionPanelDetails",args));
});

cljs_react_material_ui.core.expansion_panel_details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.expansion_panel_details.cljs$lang$applyTo = (function (seq3020){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3020));
});

cljs_react_material_ui.core.expansion_panel_summary = (function cljs_react_material_ui$core$expansion_panel_summary(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3025 = arguments.length;
var i__5144__auto___3026 = (0);
while(true){
if((i__5144__auto___3026 < len__5143__auto___3025)){
args__5146__auto__.push((arguments[i__5144__auto___3026]));

var G__3027 = (i__5144__auto___3026 + (1));
i__5144__auto___3026 = G__3027;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.expansion_panel_summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.expansion_panel_summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ExpansionPanelSummary",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ExpansionPanelSummary",args));
});

cljs_react_material_ui.core.expansion_panel_summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.expansion_panel_summary.cljs$lang$applyTo = (function (seq3024){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3024));
});

cljs_react_material_ui.core.fade = (function cljs_react_material_ui$core$fade(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3029 = arguments.length;
var i__5144__auto___3030 = (0);
while(true){
if((i__5144__auto___3030 < len__5143__auto___3029)){
args__5146__auto__.push((arguments[i__5144__auto___3030]));

var G__3031 = (i__5144__auto___3030 + (1));
i__5144__auto___3030 = G__3031;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.fade.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.fade.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Fade",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Fade",args));
});

cljs_react_material_ui.core.fade.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.fade.cljs$lang$applyTo = (function (seq3028){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3028));
});

cljs_react_material_ui.core.form_control = (function cljs_react_material_ui$core$form_control(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3033 = arguments.length;
var i__5144__auto___3034 = (0);
while(true){
if((i__5144__auto___3034 < len__5143__auto___3033)){
args__5146__auto__.push((arguments[i__5144__auto___3034]));

var G__3035 = (i__5144__auto___3034 + (1));
i__5144__auto___3034 = G__3035;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.form_control.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.form_control.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FormControl",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FormControl",args));
});

cljs_react_material_ui.core.form_control.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.form_control.cljs$lang$applyTo = (function (seq3032){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3032));
});

cljs_react_material_ui.core.form_control_label = (function cljs_react_material_ui$core$form_control_label(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3037 = arguments.length;
var i__5144__auto___3038 = (0);
while(true){
if((i__5144__auto___3038 < len__5143__auto___3037)){
args__5146__auto__.push((arguments[i__5144__auto___3038]));

var G__3039 = (i__5144__auto___3038 + (1));
i__5144__auto___3038 = G__3039;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.form_control_label.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.form_control_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FormControlLabel",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FormControlLabel",args));
});

cljs_react_material_ui.core.form_control_label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.form_control_label.cljs$lang$applyTo = (function (seq3036){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3036));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3041 = arguments.length;
var i__5144__auto___3042 = (0);
while(true){
if((i__5144__auto___3042 < len__5143__auto___3041)){
args__5146__auto__.push((arguments[i__5144__auto___3042]));

var G__3043 = (i__5144__auto___3042 + (1));
i__5144__auto___3042 = G__3043;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("GridList",args) : cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args));
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq3040){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3040));
});

cljs_react_material_ui.core.form_group = (function cljs_react_material_ui$core$form_group(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3045 = arguments.length;
var i__5144__auto___3046 = (0);
while(true){
if((i__5144__auto___3046 < len__5143__auto___3045)){
args__5146__auto__.push((arguments[i__5144__auto___3046]));

var G__3047 = (i__5144__auto___3046 + (1));
i__5144__auto___3046 = G__3047;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.form_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.form_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FormGroup",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FormGroup",args));
});

cljs_react_material_ui.core.form_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.form_group.cljs$lang$applyTo = (function (seq3044){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3044));
});

cljs_react_material_ui.core.form_helper_text = (function cljs_react_material_ui$core$form_helper_text(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3049 = arguments.length;
var i__5144__auto___3050 = (0);
while(true){
if((i__5144__auto___3050 < len__5143__auto___3049)){
args__5146__auto__.push((arguments[i__5144__auto___3050]));

var G__3051 = (i__5144__auto___3050 + (1));
i__5144__auto___3050 = G__3051;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.form_helper_text.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.form_helper_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FormHelperText",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FormHelperText",args));
});

cljs_react_material_ui.core.form_helper_text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.form_helper_text.cljs$lang$applyTo = (function (seq3048){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3048));
});

cljs_react_material_ui.core.form_label = (function cljs_react_material_ui$core$form_label(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3053 = arguments.length;
var i__5144__auto___3054 = (0);
while(true){
if((i__5144__auto___3054 < len__5143__auto___3053)){
args__5146__auto__.push((arguments[i__5144__auto___3054]));

var G__3055 = (i__5144__auto___3054 + (1));
i__5144__auto___3054 = G__3055;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.form_label.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.form_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FormLabel",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FormLabel",args));
});

cljs_react_material_ui.core.form_label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.form_label.cljs$lang$applyTo = (function (seq3052){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3052));
});

cljs_react_material_ui.core.grid = (function cljs_react_material_ui$core$grid(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3057 = arguments.length;
var i__5144__auto___3058 = (0);
while(true){
if((i__5144__auto___3058 < len__5143__auto___3057)){
args__5146__auto__.push((arguments[i__5144__auto___3058]));

var G__3059 = (i__5144__auto___3058 + (1));
i__5144__auto___3058 = G__3059;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.grid.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Grid",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Grid",args));
});

cljs_react_material_ui.core.grid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grid.cljs$lang$applyTo = (function (seq3056){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3056));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3061 = arguments.length;
var i__5144__auto___3062 = (0);
while(true){
if((i__5144__auto___3062 < len__5143__auto___3061)){
args__5146__auto__.push((arguments[i__5144__auto___3062]));

var G__3063 = (i__5144__auto___3062 + (1));
i__5144__auto___3062 = G__3063;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("GridList",args) : cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args));
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq3060){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3060));
});

cljs_react_material_ui.core.grid_list_tile = (function cljs_react_material_ui$core$grid_list_tile(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3065 = arguments.length;
var i__5144__auto___3066 = (0);
while(true){
if((i__5144__auto___3066 < len__5143__auto___3065)){
args__5146__auto__.push((arguments[i__5144__auto___3066]));

var G__3067 = (i__5144__auto___3066 + (1));
i__5144__auto___3066 = G__3067;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.grid_list_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("GridListTile",args) : cljs_react_material_ui.core.create_mui_el.call(null,"GridListTile",args));
});

cljs_react_material_ui.core.grid_list_tile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grid_list_tile.cljs$lang$applyTo = (function (seq3064){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3064));
});

cljs_react_material_ui.core.grid_list_tile_bar = (function cljs_react_material_ui$core$grid_list_tile_bar(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3069 = arguments.length;
var i__5144__auto___3070 = (0);
while(true){
if((i__5144__auto___3070 < len__5143__auto___3069)){
args__5146__auto__.push((arguments[i__5144__auto___3070]));

var G__3071 = (i__5144__auto___3070 + (1));
i__5144__auto___3070 = G__3071;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list_tile_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.grid_list_tile_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("GridListTileBar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"GridListTileBar",args));
});

cljs_react_material_ui.core.grid_list_tile_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grid_list_tile_bar.cljs$lang$applyTo = (function (seq3068){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3068));
});

cljs_react_material_ui.core.grow = (function cljs_react_material_ui$core$grow(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3073 = arguments.length;
var i__5144__auto___3074 = (0);
while(true){
if((i__5144__auto___3074 < len__5143__auto___3073)){
args__5146__auto__.push((arguments[i__5144__auto___3074]));

var G__3075 = (i__5144__auto___3074 + (1));
i__5144__auto___3074 = G__3075;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grow.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.grow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Grow",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Grow",args));
});

cljs_react_material_ui.core.grow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grow.cljs$lang$applyTo = (function (seq3072){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3072));
});

cljs_react_material_ui.core.hidden = (function cljs_react_material_ui$core$hidden(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3077 = arguments.length;
var i__5144__auto___3078 = (0);
while(true){
if((i__5144__auto___3078 < len__5143__auto___3077)){
args__5146__auto__.push((arguments[i__5144__auto___3078]));

var G__3079 = (i__5144__auto___3078 + (1));
i__5144__auto___3078 = G__3079;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.hidden.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.hidden.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Hidden",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Hidden",args));
});

cljs_react_material_ui.core.hidden.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.hidden.cljs$lang$applyTo = (function (seq3076){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3076));
});

cljs_react_material_ui.core.icon = (function cljs_react_material_ui$core$icon(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3081 = arguments.length;
var i__5144__auto___3082 = (0);
while(true){
if((i__5144__auto___3082 < len__5143__auto___3081)){
args__5146__auto__.push((arguments[i__5144__auto___3082]));

var G__3083 = (i__5144__auto___3082 + (1));
i__5144__auto___3082 = G__3083;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Icon",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Icon",args));
});

cljs_react_material_ui.core.icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.icon.cljs$lang$applyTo = (function (seq3080){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3080));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3085 = arguments.length;
var i__5144__auto___3086 = (0);
while(true){
if((i__5144__auto___3086 < len__5143__auto___3085)){
args__5146__auto__.push((arguments[i__5144__auto___3086]));

var G__3087 = (i__5144__auto___3086 + (1));
i__5144__auto___3086 = G__3087;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("IconButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args));
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq3084){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3084));
});

cljs_react_material_ui.core.input = (function cljs_react_material_ui$core$input(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3089 = arguments.length;
var i__5144__auto___3090 = (0);
while(true){
if((i__5144__auto___3090 < len__5143__auto___3089)){
args__5146__auto__.push((arguments[i__5144__auto___3090]));

var G__3091 = (i__5144__auto___3090 + (1));
i__5144__auto___3090 = G__3091;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Input",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Input",args));
});

cljs_react_material_ui.core.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.input.cljs$lang$applyTo = (function (seq3088){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3088));
});

cljs_react_material_ui.core.input_adornment = (function cljs_react_material_ui$core$input_adornment(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3093 = arguments.length;
var i__5144__auto___3094 = (0);
while(true){
if((i__5144__auto___3094 < len__5143__auto___3093)){
args__5146__auto__.push((arguments[i__5144__auto___3094]));

var G__3095 = (i__5144__auto___3094 + (1));
i__5144__auto___3094 = G__3095;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.input_adornment.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.input_adornment.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("InputAdornment",args) : cljs_react_material_ui.core.create_mui_el.call(null,"InputAdornment",args));
});

cljs_react_material_ui.core.input_adornment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.input_adornment.cljs$lang$applyTo = (function (seq3092){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3092));
});

cljs_react_material_ui.core.input_label = (function cljs_react_material_ui$core$input_label(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3097 = arguments.length;
var i__5144__auto___3098 = (0);
while(true){
if((i__5144__auto___3098 < len__5143__auto___3097)){
args__5146__auto__.push((arguments[i__5144__auto___3098]));

var G__3099 = (i__5144__auto___3098 + (1));
i__5144__auto___3098 = G__3099;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.input_label.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.input_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("InputLabel",args) : cljs_react_material_ui.core.create_mui_el.call(null,"InputLabel",args));
});

cljs_react_material_ui.core.input_label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.input_label.cljs$lang$applyTo = (function (seq3096){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3096));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3101 = arguments.length;
var i__5144__auto___3102 = (0);
while(true){
if((i__5144__auto___3102 < len__5143__auto___3101)){
args__5146__auto__.push((arguments[i__5144__auto___3102]));

var G__3103 = (i__5144__auto___3102 + (1));
i__5144__auto___3102 = G__3103;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("LinearProgress",args) : cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args));
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq3100){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3100));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3105 = arguments.length;
var i__5144__auto___3106 = (0);
while(true){
if((i__5144__auto___3106 < len__5143__auto___3105)){
args__5146__auto__.push((arguments[i__5144__auto___3106]));

var G__3107 = (i__5144__auto___3106 + (1));
i__5144__auto___3106 = G__3107;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("List",args) : cljs_react_material_ui.core.create_mui_el.call(null,"List",args));
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq3104){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3104));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3109 = arguments.length;
var i__5144__auto___3110 = (0);
while(true){
if((i__5144__auto___3110 < len__5143__auto___3109)){
args__5146__auto__.push((arguments[i__5144__auto___3110]));

var G__3111 = (i__5144__auto___3110 + (1));
i__5144__auto___3110 = G__3111;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ListItem",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args));
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq3108){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3108));
});

cljs_react_material_ui.core.list_item_avatar = (function cljs_react_material_ui$core$list_item_avatar(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3113 = arguments.length;
var i__5144__auto___3114 = (0);
while(true){
if((i__5144__auto___3114 < len__5143__auto___3113)){
args__5146__auto__.push((arguments[i__5144__auto___3114]));

var G__3115 = (i__5144__auto___3114 + (1));
i__5144__auto___3114 = G__3115;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item_avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.list_item_avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ListItemAvatar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ListItemAvatar",args));
});

cljs_react_material_ui.core.list_item_avatar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list_item_avatar.cljs$lang$applyTo = (function (seq3112){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3112));
});

cljs_react_material_ui.core.list_item_icon = (function cljs_react_material_ui$core$list_item_icon(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3117 = arguments.length;
var i__5144__auto___3118 = (0);
while(true){
if((i__5144__auto___3118 < len__5143__auto___3117)){
args__5146__auto__.push((arguments[i__5144__auto___3118]));

var G__3119 = (i__5144__auto___3118 + (1));
i__5144__auto___3118 = G__3119;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.list_item_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ListItemIcon",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ListItemIcon",args));
});

cljs_react_material_ui.core.list_item_icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list_item_icon.cljs$lang$applyTo = (function (seq3116){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3116));
});

cljs_react_material_ui.core.list_item_secondary_action = (function cljs_react_material_ui$core$list_item_secondary_action(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3121 = arguments.length;
var i__5144__auto___3122 = (0);
while(true){
if((i__5144__auto___3122 < len__5143__auto___3121)){
args__5146__auto__.push((arguments[i__5144__auto___3122]));

var G__3123 = (i__5144__auto___3122 + (1));
i__5144__auto___3122 = G__3123;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item_secondary_action.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.list_item_secondary_action.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ListItemSecondaryAction",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ListItemSecondaryAction",args));
});

cljs_react_material_ui.core.list_item_secondary_action.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list_item_secondary_action.cljs$lang$applyTo = (function (seq3120){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3120));
});

cljs_react_material_ui.core.list_item_text = (function cljs_react_material_ui$core$list_item_text(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3125 = arguments.length;
var i__5144__auto___3126 = (0);
while(true){
if((i__5144__auto___3126 < len__5143__auto___3125)){
args__5146__auto__.push((arguments[i__5144__auto___3126]));

var G__3127 = (i__5144__auto___3126 + (1));
i__5144__auto___3126 = G__3127;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item_text.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.list_item_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ListItemText",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ListItemText",args));
});

cljs_react_material_ui.core.list_item_text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list_item_text.cljs$lang$applyTo = (function (seq3124){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3124));
});

cljs_react_material_ui.core.list_subheader = (function cljs_react_material_ui$core$list_subheader(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3129 = arguments.length;
var i__5144__auto___3130 = (0);
while(true){
if((i__5144__auto___3130 < len__5143__auto___3129)){
args__5146__auto__.push((arguments[i__5144__auto___3130]));

var G__3131 = (i__5144__auto___3130 + (1));
i__5144__auto___3130 = G__3131;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.list_subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ListSubheader",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ListSubheader",args));
});

cljs_react_material_ui.core.list_subheader.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list_subheader.cljs$lang$applyTo = (function (seq3128){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3128));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3133 = arguments.length;
var i__5144__auto___3134 = (0);
while(true){
if((i__5144__auto___3134 < len__5143__auto___3133)){
args__5146__auto__.push((arguments[i__5144__auto___3134]));

var G__3135 = (i__5144__auto___3134 + (1));
i__5144__auto___3134 = G__3135;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Menu",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args));
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq3132){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3132));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3137 = arguments.length;
var i__5144__auto___3138 = (0);
while(true){
if((i__5144__auto___3138 < len__5143__auto___3137)){
args__5146__auto__.push((arguments[i__5144__auto___3138]));

var G__3139 = (i__5144__auto___3138 + (1));
i__5144__auto___3138 = G__3139;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("MenuItem",args) : cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args));
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq3136){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3136));
});

cljs_react_material_ui.core.menu_list = (function cljs_react_material_ui$core$menu_list(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3141 = arguments.length;
var i__5144__auto___3142 = (0);
while(true){
if((i__5144__auto___3142 < len__5143__auto___3141)){
args__5146__auto__.push((arguments[i__5144__auto___3142]));

var G__3143 = (i__5144__auto___3142 + (1));
i__5144__auto___3142 = G__3143;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_list.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.menu_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("MenuList",args) : cljs_react_material_ui.core.create_mui_el.call(null,"MenuList",args));
});

cljs_react_material_ui.core.menu_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.menu_list.cljs$lang$applyTo = (function (seq3140){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3140));
});

cljs_react_material_ui.core.mobile_stepper = (function cljs_react_material_ui$core$mobile_stepper(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3145 = arguments.length;
var i__5144__auto___3146 = (0);
while(true){
if((i__5144__auto___3146 < len__5143__auto___3145)){
args__5146__auto__.push((arguments[i__5144__auto___3146]));

var G__3147 = (i__5144__auto___3146 + (1));
i__5144__auto___3146 = G__3147;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mobile_stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.mobile_stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("MobileStepper",args) : cljs_react_material_ui.core.create_mui_el.call(null,"MobileStepper",args));
});

cljs_react_material_ui.core.mobile_stepper.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.mobile_stepper.cljs$lang$applyTo = (function (seq3144){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3144));
});

cljs_react_material_ui.core.modal = (function cljs_react_material_ui$core$modal(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3149 = arguments.length;
var i__5144__auto___3150 = (0);
while(true){
if((i__5144__auto___3150 < len__5143__auto___3149)){
args__5146__auto__.push((arguments[i__5144__auto___3150]));

var G__3151 = (i__5144__auto___3150 + (1));
i__5144__auto___3150 = G__3151;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.modal.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.modal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Modal",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Modal",args));
});

cljs_react_material_ui.core.modal.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.modal.cljs$lang$applyTo = (function (seq3148){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3148));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3153 = arguments.length;
var i__5144__auto___3154 = (0);
while(true){
if((i__5144__auto___3154 < len__5143__auto___3153)){
args__5146__auto__.push((arguments[i__5144__auto___3154]));

var G__3155 = (i__5144__auto___3154 + (1));
i__5144__auto___3154 = G__3155;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("MuiThemeProvider",args) : cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args));
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq3152){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3152));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3157 = arguments.length;
var i__5144__auto___3158 = (0);
while(true){
if((i__5144__auto___3158 < len__5143__auto___3157)){
args__5146__auto__.push((arguments[i__5144__auto___3158]));

var G__3159 = (i__5144__auto___3158 + (1));
i__5144__auto___3158 = G__3159;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Paper",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args));
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq3156){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3156));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3161 = arguments.length;
var i__5144__auto___3162 = (0);
while(true){
if((i__5144__auto___3162 < len__5143__auto___3161)){
args__5146__auto__.push((arguments[i__5144__auto___3162]));

var G__3163 = (i__5144__auto___3162 + (1));
i__5144__auto___3162 = G__3163;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Popover",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args));
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq3160){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3160));
});

cljs_react_material_ui.core.portal = (function cljs_react_material_ui$core$portal(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3165 = arguments.length;
var i__5144__auto___3166 = (0);
while(true){
if((i__5144__auto___3166 < len__5143__auto___3165)){
args__5146__auto__.push((arguments[i__5144__auto___3166]));

var G__3167 = (i__5144__auto___3166 + (1));
i__5144__auto___3166 = G__3167;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.portal.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.portal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Portal",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Portal",args));
});

cljs_react_material_ui.core.portal.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.portal.cljs$lang$applyTo = (function (seq3164){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3164));
});

cljs_react_material_ui.core.radio = (function cljs_react_material_ui$core$radio(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3169 = arguments.length;
var i__5144__auto___3170 = (0);
while(true){
if((i__5144__auto___3170 < len__5143__auto___3169)){
args__5146__auto__.push((arguments[i__5144__auto___3170]));

var G__3171 = (i__5144__auto___3170 + (1));
i__5144__auto___3170 = G__3171;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.radio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Radio",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Radio",args));
});

cljs_react_material_ui.core.radio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.radio.cljs$lang$applyTo = (function (seq3168){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3168));
});

cljs_react_material_ui.core.radio_group = (function cljs_react_material_ui$core$radio_group(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3173 = arguments.length;
var i__5144__auto___3174 = (0);
while(true){
if((i__5144__auto___3174 < len__5143__auto___3173)){
args__5146__auto__.push((arguments[i__5144__auto___3174]));

var G__3175 = (i__5144__auto___3174 + (1));
i__5144__auto___3174 = G__3175;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.radio_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RadioGroup",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RadioGroup",args));
});

cljs_react_material_ui.core.radio_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.radio_group.cljs$lang$applyTo = (function (seq3172){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3172));
});

cljs_react_material_ui.core.root_ref = (function cljs_react_material_ui$core$root_ref(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3177 = arguments.length;
var i__5144__auto___3178 = (0);
while(true){
if((i__5144__auto___3178 < len__5143__auto___3177)){
args__5146__auto__.push((arguments[i__5144__auto___3178]));

var G__3179 = (i__5144__auto___3178 + (1));
i__5144__auto___3178 = G__3179;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.root_ref.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.root_ref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RootRef",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RootRef",args));
});

cljs_react_material_ui.core.root_ref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.root_ref.cljs$lang$applyTo = (function (seq3176){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3176));
});

cljs_react_material_ui.core.select = (function cljs_react_material_ui$core$select(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3181 = arguments.length;
var i__5144__auto___3182 = (0);
while(true){
if((i__5144__auto___3182 < len__5143__auto___3181)){
args__5146__auto__.push((arguments[i__5144__auto___3182]));

var G__3183 = (i__5144__auto___3182 + (1));
i__5144__auto___3182 = G__3183;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Select",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Select",args));
});

cljs_react_material_ui.core.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.select.cljs$lang$applyTo = (function (seq3180){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3180));
});

cljs_react_material_ui.core.slide = (function cljs_react_material_ui$core$slide(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3185 = arguments.length;
var i__5144__auto___3186 = (0);
while(true){
if((i__5144__auto___3186 < len__5143__auto___3185)){
args__5146__auto__.push((arguments[i__5144__auto___3186]));

var G__3187 = (i__5144__auto___3186 + (1));
i__5144__auto___3186 = G__3187;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slide.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.slide.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Slide",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Slide",args));
});

cljs_react_material_ui.core.slide.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.slide.cljs$lang$applyTo = (function (seq3184){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3184));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3189 = arguments.length;
var i__5144__auto___3190 = (0);
while(true){
if((i__5144__auto___3190 < len__5143__auto___3189)){
args__5146__auto__.push((arguments[i__5144__auto___3190]));

var G__3191 = (i__5144__auto___3190 + (1));
i__5144__auto___3190 = G__3191;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Snackbar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args));
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq3188){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3188));
});

cljs_react_material_ui.core.snackbar_content = (function cljs_react_material_ui$core$snackbar_content(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3193 = arguments.length;
var i__5144__auto___3194 = (0);
while(true){
if((i__5144__auto___3194 < len__5143__auto___3193)){
args__5146__auto__.push((arguments[i__5144__auto___3194]));

var G__3195 = (i__5144__auto___3194 + (1));
i__5144__auto___3194 = G__3195;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar_content.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.snackbar_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("SnackbarContent",args) : cljs_react_material_ui.core.create_mui_el.call(null,"SnackbarContent",args));
});

cljs_react_material_ui.core.snackbar_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.snackbar_content.cljs$lang$applyTo = (function (seq3192){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3192));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3197 = arguments.length;
var i__5144__auto___3198 = (0);
while(true){
if((i__5144__auto___3198 < len__5143__auto___3197)){
args__5146__auto__.push((arguments[i__5144__auto___3198]));

var G__3199 = (i__5144__auto___3198 + (1));
i__5144__auto___3198 = G__3199;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Step",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Step",args));
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq3196){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3196));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3201 = arguments.length;
var i__5144__auto___3202 = (0);
while(true){
if((i__5144__auto___3202 < len__5143__auto___3201)){
args__5146__auto__.push((arguments[i__5144__auto___3202]));

var G__3203 = (i__5144__auto___3202 + (1));
i__5144__auto___3202 = G__3203;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args));
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq3200){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3200));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3205 = arguments.length;
var i__5144__auto___3206 = (0);
while(true){
if((i__5144__auto___3206 < len__5143__auto___3205)){
args__5146__auto__.push((arguments[i__5144__auto___3206]));

var G__3207 = (i__5144__auto___3206 + (1));
i__5144__auto___3206 = G__3207;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepContent",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args));
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq3204){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3204));
});

cljs_react_material_ui.core.step_icon = (function cljs_react_material_ui$core$step_icon(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3209 = arguments.length;
var i__5144__auto___3210 = (0);
while(true){
if((i__5144__auto___3210 < len__5143__auto___3209)){
args__5146__auto__.push((arguments[i__5144__auto___3210]));

var G__3211 = (i__5144__auto___3210 + (1));
i__5144__auto___3210 = G__3211;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.step_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepIcon",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepIcon",args));
});

cljs_react_material_ui.core.step_icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_icon.cljs$lang$applyTo = (function (seq3208){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3208));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3213 = arguments.length;
var i__5144__auto___3214 = (0);
while(true){
if((i__5144__auto___3214 < len__5143__auto___3213)){
args__5146__auto__.push((arguments[i__5144__auto___3214]));

var G__3215 = (i__5144__auto___3214 + (1));
i__5144__auto___3214 = G__3215;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepLabel",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args));
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq3212){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3212));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3217 = arguments.length;
var i__5144__auto___3218 = (0);
while(true){
if((i__5144__auto___3218 < len__5143__auto___3217)){
args__5146__auto__.push((arguments[i__5144__auto___3218]));

var G__3219 = (i__5144__auto___3218 + (1));
i__5144__auto___3218 = G__3219;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Stepper",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args));
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq3216){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3216));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3221 = arguments.length;
var i__5144__auto___3222 = (0);
while(true){
if((i__5144__auto___3222 < len__5143__auto___3221)){
args__5146__auto__.push((arguments[i__5144__auto___3222]));

var G__3223 = (i__5144__auto___3222 + (1));
i__5144__auto___3222 = G__3223;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("SvgIcon",args) : cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args));
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq3220){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3220));
});

cljs_react_material_ui.core.swipeable_drawer = (function cljs_react_material_ui$core$swipeable_drawer(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3225 = arguments.length;
var i__5144__auto___3226 = (0);
while(true){
if((i__5144__auto___3226 < len__5143__auto___3225)){
args__5146__auto__.push((arguments[i__5144__auto___3226]));

var G__3227 = (i__5144__auto___3226 + (1));
i__5144__auto___3226 = G__3227;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.swipeable_drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.swipeable_drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("SwipeableDrawer",args) : cljs_react_material_ui.core.create_mui_el.call(null,"SwipeableDrawer",args));
});

cljs_react_material_ui.core.swipeable_drawer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.swipeable_drawer.cljs$lang$applyTo = (function (seq3224){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3224));
});

cljs_react_material_ui.core.switch$ = (function cljs_react_material_ui$core$switch(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3229 = arguments.length;
var i__5144__auto___3230 = (0);
while(true){
if((i__5144__auto___3230 < len__5143__auto___3229)){
args__5146__auto__.push((arguments[i__5144__auto___3230]));

var G__3231 = (i__5144__auto___3230 + (1));
i__5144__auto___3230 = G__3231;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Switch",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Switch",args));
});

cljs_react_material_ui.core.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.switch$.cljs$lang$applyTo = (function (seq3228){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3228));
});

cljs_react_material_ui.core.switch_base = (function cljs_react_material_ui$core$switch_base(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3233 = arguments.length;
var i__5144__auto___3234 = (0);
while(true){
if((i__5144__auto___3234 < len__5143__auto___3233)){
args__5146__auto__.push((arguments[i__5144__auto___3234]));

var G__3235 = (i__5144__auto___3234 + (1));
i__5144__auto___3234 = G__3235;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.switch_base.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.switch_base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("SwitchBase",args) : cljs_react_material_ui.core.create_mui_el.call(null,"SwitchBase",args));
});

cljs_react_material_ui.core.switch_base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.switch_base.cljs$lang$applyTo = (function (seq3232){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3232));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3237 = arguments.length;
var i__5144__auto___3238 = (0);
while(true){
if((i__5144__auto___3238 < len__5143__auto___3237)){
args__5146__auto__.push((arguments[i__5144__auto___3238]));

var G__3239 = (i__5144__auto___3238 + (1));
i__5144__auto___3238 = G__3239;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Tab",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args));
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq3236){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3236));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3241 = arguments.length;
var i__5144__auto___3242 = (0);
while(true){
if((i__5144__auto___3242 < len__5143__auto___3241)){
args__5146__auto__.push((arguments[i__5144__auto___3242]));

var G__3243 = (i__5144__auto___3242 + (1));
i__5144__auto___3242 = G__3243;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Table",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Table",args));
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq3240){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3240));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3245 = arguments.length;
var i__5144__auto___3246 = (0);
while(true){
if((i__5144__auto___3246 < len__5143__auto___3245)){
args__5146__auto__.push((arguments[i__5144__auto___3246]));

var G__3247 = (i__5144__auto___3246 + (1));
i__5144__auto___3246 = G__3247;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableBody",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args));
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq3244){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3244));
});

cljs_react_material_ui.core.table_cell = (function cljs_react_material_ui$core$table_cell(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3249 = arguments.length;
var i__5144__auto___3250 = (0);
while(true){
if((i__5144__auto___3250 < len__5143__auto___3249)){
args__5146__auto__.push((arguments[i__5144__auto___3250]));

var G__3251 = (i__5144__auto___3250 + (1));
i__5144__auto___3250 = G__3251;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.table_cell.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableCell",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableCell",args));
});

cljs_react_material_ui.core.table_cell.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_cell.cljs$lang$applyTo = (function (seq3248){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3248));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3253 = arguments.length;
var i__5144__auto___3254 = (0);
while(true){
if((i__5144__auto___3254 < len__5143__auto___3253)){
args__5146__auto__.push((arguments[i__5144__auto___3254]));

var G__3255 = (i__5144__auto___3254 + (1));
i__5144__auto___3254 = G__3255;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableFooter",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args));
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq3252){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3252));
});

cljs_react_material_ui.core.table_head = (function cljs_react_material_ui$core$table_head(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3257 = arguments.length;
var i__5144__auto___3258 = (0);
while(true){
if((i__5144__auto___3258 < len__5143__auto___3257)){
args__5146__auto__.push((arguments[i__5144__auto___3258]));

var G__3259 = (i__5144__auto___3258 + (1));
i__5144__auto___3258 = G__3259;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_head.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.table_head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableHead",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableHead",args));
});

cljs_react_material_ui.core.table_head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_head.cljs$lang$applyTo = (function (seq3256){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3256));
});

cljs_react_material_ui.core.table_pagination = (function cljs_react_material_ui$core$table_pagination(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3261 = arguments.length;
var i__5144__auto___3262 = (0);
while(true){
if((i__5144__auto___3262 < len__5143__auto___3261)){
args__5146__auto__.push((arguments[i__5144__auto___3262]));

var G__3263 = (i__5144__auto___3262 + (1));
i__5144__auto___3262 = G__3263;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_pagination.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.table_pagination.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TablePagination",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TablePagination",args));
});

cljs_react_material_ui.core.table_pagination.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_pagination.cljs$lang$applyTo = (function (seq3260){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3260));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3265 = arguments.length;
var i__5144__auto___3266 = (0);
while(true){
if((i__5144__auto___3266 < len__5143__auto___3265)){
args__5146__auto__.push((arguments[i__5144__auto___3266]));

var G__3267 = (i__5144__auto___3266 + (1));
i__5144__auto___3266 = G__3267;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableRow",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args));
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq3264){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3264));
});

cljs_react_material_ui.core.table_sort_label = (function cljs_react_material_ui$core$table_sort_label(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3269 = arguments.length;
var i__5144__auto___3270 = (0);
while(true){
if((i__5144__auto___3270 < len__5143__auto___3269)){
args__5146__auto__.push((arguments[i__5144__auto___3270]));

var G__3271 = (i__5144__auto___3270 + (1));
i__5144__auto___3270 = G__3271;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_sort_label.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.table_sort_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableSortLabel",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableSortLabel",args));
});

cljs_react_material_ui.core.table_sort_label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_sort_label.cljs$lang$applyTo = (function (seq3268){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3268));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3273 = arguments.length;
var i__5144__auto___3274 = (0);
while(true){
if((i__5144__auto___3274 < len__5143__auto___3273)){
args__5146__auto__.push((arguments[i__5144__auto___3274]));

var G__3275 = (i__5144__auto___3274 + (1));
i__5144__auto___3274 = G__3275;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Tabs",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args));
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq3272){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3272));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3277 = arguments.length;
var i__5144__auto___3278 = (0);
while(true){
if((i__5144__auto___3278 < len__5143__auto___3277)){
args__5146__auto__.push((arguments[i__5144__auto___3278]));

var G__3279 = (i__5144__auto___3278 + (1));
i__5144__auto___3278 = G__3279;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TextField",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args));
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq3276){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3276));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3281 = arguments.length;
var i__5144__auto___3282 = (0);
while(true){
if((i__5144__auto___3282 < len__5143__auto___3281)){
args__5146__auto__.push((arguments[i__5144__auto___3282]));

var G__3283 = (i__5144__auto___3282 + (1));
i__5144__auto___3282 = G__3283;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Toolbar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args));
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq3280){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3280));
});

cljs_react_material_ui.core.tooltip = (function cljs_react_material_ui$core$tooltip(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3285 = arguments.length;
var i__5144__auto___3286 = (0);
while(true){
if((i__5144__auto___3286 < len__5143__auto___3285)){
args__5146__auto__.push((arguments[i__5144__auto___3286]));

var G__3287 = (i__5144__auto___3286 + (1));
i__5144__auto___3286 = G__3287;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tooltip.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.tooltip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Tooltip",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Tooltip",args));
});

cljs_react_material_ui.core.tooltip.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.tooltip.cljs$lang$applyTo = (function (seq3284){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3284));
});

cljs_react_material_ui.core.touch_rippler = (function cljs_react_material_ui$core$touch_rippler(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3289 = arguments.length;
var i__5144__auto___3290 = (0);
while(true){
if((i__5144__auto___3290 < len__5143__auto___3289)){
args__5146__auto__.push((arguments[i__5144__auto___3290]));

var G__3291 = (i__5144__auto___3290 + (1));
i__5144__auto___3290 = G__3291;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.touch_rippler.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.touch_rippler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TouchRippler",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TouchRippler",args));
});

cljs_react_material_ui.core.touch_rippler.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.touch_rippler.cljs$lang$applyTo = (function (seq3288){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3288));
});

cljs_react_material_ui.core.typography = (function cljs_react_material_ui$core$typography(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3293 = arguments.length;
var i__5144__auto___3294 = (0);
while(true){
if((i__5144__auto___3294 < len__5143__auto___3293)){
args__5146__auto__.push((arguments[i__5144__auto___3294]));

var G__3295 = (i__5144__auto___3294 + (1));
i__5144__auto___3294 = G__3295;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.typography.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.typography.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Typography",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Typography",args));
});

cljs_react_material_ui.core.typography.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.typography.cljs$lang$applyTo = (function (seq3292){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3292));
});

cljs_react_material_ui.core.zoom = (function cljs_react_material_ui$core$zoom(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3297 = arguments.length;
var i__5144__auto___3298 = (0);
while(true){
if((i__5144__auto___3298 < len__5143__auto___3297)){
args__5146__auto__.push((arguments[i__5144__auto___3298]));

var G__3299 = (i__5144__auto___3298 + (1));
i__5144__auto___3298 = G__3299;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.zoom.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs_react_material_ui.core.zoom.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Zoom",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Zoom",args));
});

cljs_react_material_ui.core.zoom.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.zoom.cljs$lang$applyTo = (function (seq3296){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3296));
});


//# sourceMappingURL=cljs_react_material_ui.core.js.map
