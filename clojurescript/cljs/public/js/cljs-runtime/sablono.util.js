goog.provide('sablono.util');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('clojure.string');
sablono.util._STAR_base_url_STAR_ = null;

/**
 * @interface
 */
sablono.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
sablono.util.to_str = (function sablono$util$to_str(x){
if(((!((x == null))) && (!((x.sablono$util$ToString$to_str$arity$1 == null))))){
return x.sablono$util$ToString$to_str$arity$1(x);
} else {
var x__4797__auto__ = (((x == null))?null:x);
var m__4798__auto__ = (sablono.util.to_str[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4798__auto__.call(null,x));
} else {
var m__4798__auto____$1 = (sablono.util.to_str["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4798__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("ToString.to-str",x);
}
}
}
});


/**
 * @interface
 */
sablono.util.ToURI = function(){};

/**
 * Convert a value into a URI.
 */
sablono.util.to_uri = (function sablono$util$to_uri(x){
if(((!((x == null))) && (!((x.sablono$util$ToURI$to_uri$arity$1 == null))))){
return x.sablono$util$ToURI$to_uri$arity$1(x);
} else {
var x__4797__auto__ = (((x == null))?null:x);
var m__4798__auto__ = (sablono.util.to_uri[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4798__auto__.call(null,x));
} else {
var m__4798__auto____$1 = (sablono.util.to_uri["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4798__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("ToURI.to-uri",x);
}
}
}
});

/**
 * Converts its arguments into a string using to-str.
 */
sablono.util.as_str = (function sablono$util$as_str(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3758 = arguments.length;
var i__5144__auto___3759 = (0);
while(true){
if((i__5144__auto___3759 < len__5143__auto___3758)){
args__5146__auto__.push((arguments[i__5144__auto___3759]));

var G__3760 = (i__5144__auto___3759 + (1));
i__5144__auto___3759 = G__3760;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.to_str,xs));
});

sablono.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.util.as_str.cljs$lang$applyTo = (function (seq3736){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3736));
});

/**
 * Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
 */
sablono.util.camel_case = (function sablono$util$camel_case(k){
if((((k instanceof cljs.core.Keyword)) || (typeof k === 'string') || ((k instanceof cljs.core.Symbol)))){
var vec__3761 = cljs.core.name(k).split("-");
var seq__3762 = cljs.core.seq(vec__3761);
var first__3763 = cljs.core.first(seq__3762);
var seq__3762__$1 = cljs.core.next(seq__3762);
var first_word = first__3763;
var words = seq__3762__$1;
if(((cljs.core.empty_QMARK_(words)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word)))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word)));
}
} else {
return k;
}
});
/**
 * Recursively transforms all map keys into camel case.
 */
sablono.util.camel_case_keys = (function sablono$util$camel_case_keys(m){
if(cljs.core.map_QMARK_(m)){
var m__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__3768){
var vec__3769 = p__3768;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3769,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3769,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.util.camel_case(k),v], null);
})),m);
var G__3772 = m__$1;
if(cljs.core.map_QMARK_(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(m__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__3772,new cljs.core.Keyword(null,"style","style",-496642736),sablono.util.camel_case_keys);
} else {
return G__3772;
}
} else {
return m;
}
});
/**
 * Return true if `x` is an HTML element. True when `x` is a vector
 *   and the first element is a keyword, e.g. `[:div]` or `[:div [:span "x"]`.
 */
sablono.util.element_QMARK_ = (function sablono$util$element_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)));
});
/**
 * Converts all HTML attributes to their DOM equivalents.
 */
sablono.util.html_to_dom_attrs = (function sablono$util$html_to_dom_attrs(attrs){
return clojure.set.rename_keys(sablono.util.camel_case_keys(attrs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720)], null));
});
/**
 * Join the `classes` with a whitespace.
 */
sablono.util.join_classes = (function sablono$util$join_classes(classes){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (x){
if(typeof x === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return cljs.core.seq(x);
}
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_)),classes));
});
cljs.core.Keyword.prototype.sablono$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.name(x__$1);
});

goog.Uri.prototype.sablono$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
if(cljs.core.truth_((function (){var or__4453__auto__ = x__$1.hasDomain();
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
return (((x__$1.getPath() == null)) || (cljs.core.not(cljs.core.re_matches(/^\/.*/,x__$1.getPath()))));
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
} else {
var base = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util._STAR_base_url_STAR_)].join('');
if(cljs.core.truth_(cljs.core.re_matches(/.*\/$/,base))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(base,(0),(cljs.core.count(base) - (1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join('');
}
}
});

goog.object.set(sablono.util.ToString,"null",true);

var G__3773_3783 = sablono.util.to_str;
var G__3774_3784 = "null";
var G__3775_3785 = ((function (G__3773_3783,G__3774_3784){
return (function (_){
return "";
});})(G__3773_3783,G__3774_3784))
;
goog.object.set(G__3773_3783,G__3774_3784,G__3775_3785);

goog.object.set(sablono.util.ToString,"number",true);

var G__3776_3786 = sablono.util.to_str;
var G__3777_3787 = "number";
var G__3778_3788 = ((function (G__3776_3786,G__3777_3787){
return (function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
});})(G__3776_3786,G__3777_3787))
;
goog.object.set(G__3776_3786,G__3777_3787,G__3778_3788);

goog.object.set(sablono.util.ToString,"_",true);

var G__3779_3789 = sablono.util.to_str;
var G__3780_3790 = "_";
var G__3781_3791 = ((function (G__3779_3789,G__3780_3790){
return (function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
});})(G__3779_3789,G__3780_3790))
;
goog.object.set(G__3779_3789,G__3780_3790,G__3781_3791);
goog.Uri.prototype.sablono$util$ToURI$ = cljs.core.PROTOCOL_SENTINEL;

goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
});

goog.object.set(sablono.util.ToURI,"_",true);

var G__3792_3795 = sablono.util.to_uri;
var G__3793_3796 = "_";
var G__3794_3797 = ((function (G__3792_3795,G__3793_3796){
return (function (x){
return (new goog.Uri([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')));
});})(G__3792_3795,G__3793_3796))
;
goog.object.set(G__3792_3795,G__3793_3796,G__3794_3797);

//# sourceMappingURL=sablono.util.js.map
