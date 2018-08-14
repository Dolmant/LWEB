goog.provide('sablono.normalize');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('sablono.util');
/**
 * Removes all map entries where the value of the entry is empty.
 */
sablono.normalize.compact_map = (function sablono$normalize$compact_map(m){
if(cljs.core.truth_(m)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__3802){
var vec__3803 = p__3802;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3803,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3803,(1),null);
return cljs.core.empty_QMARK_(v);
})),m);
} else {
return null;
}
});
sablono.normalize.class_name = (function sablono$normalize$class_name(x){
if(typeof x === 'string'){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
return x;

}
}
});
/**
 * Returns true if `x` is a map lookup form, otherwise false.
 */
sablono.normalize.map_lookup_QMARK_ = (function sablono$normalize$map_lookup_QMARK_(x){
return ((cljs.core.list_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)));
});
/**
 * Normalize `class` into a vector of classes.
 */
sablono.normalize.class$ = (function sablono$normalize$class(class$){
if((class$ == null)){
return null;
} else {
if(cljs.core.truth_(sablono.normalize.map_lookup_QMARK_(class$))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if(cljs.core.list_QMARK_(class$)){
if((cljs.core.first(class$) instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.normalize.class_name,class$);
}
} else {
if((class$ instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if(typeof class$ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if((class$ instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.normalize.class_name(class$)], null);
} else {
if(((((cljs.core.set_QMARK_(class$)) || (cljs.core.sequential_QMARK_(class$)))) && (cljs.core.every_QMARK_((function (p1__3807_SHARP_){
return (((p1__3807_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__3807_SHARP_ === 'string'));
}),class$)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sablono.normalize.class_name,class$);
} else {
if(((cljs.core.set_QMARK_(class$)) || (cljs.core.sequential_QMARK_(class$)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(sablono.normalize.class_name,class$);
} else {
return class$;

}
}
}
}
}
}
}
}
});
/**
 * Normalize the `attrs` of an element.
 */
sablono.normalize.attributes = (function sablono$normalize$attributes(attrs){
var G__3809 = attrs;
if(cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__3809,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),sablono.normalize.class$);
} else {
return G__3809;
}
});
/**
 * Like clojure.core/merge but concatenate :class entries.
 */
sablono.normalize.merge_with_class = (function sablono$normalize$merge_with_class(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3812 = arguments.length;
var i__5144__auto___3813 = (0);
while(true){
if((i__5144__auto___3813 < len__5143__auto___3812)){
args__5146__auto__.push((arguments[i__5144__auto___3813]));

var G__3814 = (i__5144__auto___3813 + (1));
i__5144__auto___3813 = G__3814;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.normalize.attributes,maps);
var classes = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([maps__$1], 0));
if(cljs.core.seq(maps__$1)){
var G__3811 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,maps__$1);
if(!(cljs.core.empty_QMARK_(classes))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__3811,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.vec(classes));
} else {
return G__3811;
}
} else {
return null;
}
});

sablono.normalize.merge_with_class.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.normalize.merge_with_class.cljs$lang$applyTo = (function (seq3810){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3810));
});

/**
 * Strip the # and . characters from the beginning of `s`.
 */
sablono.normalize.strip_css = (function sablono$normalize$strip_css(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(s,/^[.#]/,"");
} else {
return null;
}
});
/**
 * Match `s` as a CSS tag and return a vector of tag name, CSS id and
 *   CSS classes.
 */
sablono.normalize.match_tag = (function sablono$normalize$match_tag(s){
var matches = cljs.core.re_seq(/[#.]?[^#.]+/,cljs.core.name(s));
var vec__3817 = ((cljs.core.empty_QMARK_(matches))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't match CSS tag: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),s], null))})():(cljs.core.truth_((function (){var G__3821 = cljs.core.ffirst(matches);
var fexpr__3820 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null);
return (fexpr__3820.cljs$core$IFn$_invoke$arity$1 ? fexpr__3820.cljs$core$IFn$_invoke$arity$1(G__3821) : fexpr__3820.call(null,G__3821));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(matches),cljs.core.rest(matches)], null)
));
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3817,(0),null);
var names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3817,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,sablono.normalize.strip_css(cljs.core.some(((function (matches,vec__3817,tag_name,names){
return (function (p1__3815_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(p1__3815_SHARP_))){
return p1__3815_SHARP_;
} else {
return null;
}
});})(matches,vec__3817,tag_name,names))
,names)),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (matches,vec__3817,tag_name,names){
return (function (p1__3816_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.first(p1__3816_SHARP_));
});})(matches,vec__3817,tag_name,names))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(sablono.normalize.strip_css)),names)], null);
});
/**
 * Normalize the children of a HTML element.
 */
sablono.normalize.children = (function sablono$normalize$children(x){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(((x == null))?cljs.core.List.EMPTY:((typeof x === 'string')?(new cljs.core.List(null,x,null,(1),null)):(cljs.core.truth_(sablono.util.element_QMARK_(x))?(new cljs.core.List(null,x,null,(1),null)):((((cljs.core.list_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Symbol))))?(new cljs.core.List(null,x,null,(1),null)):((cljs.core.list_QMARK_(x))?x:((((cljs.core.sequential_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(1))) && (cljs.core.sequential_QMARK_(cljs.core.first(x))) && (!(typeof cljs.core.first(x) === 'string')) && (cljs.core.not(sablono.util.element_QMARK_(cljs.core.first(x))))))?(function (){var G__3822 = cljs.core.first(x);
return (sablono.normalize.children.cljs$core$IFn$_invoke$arity$1 ? sablono.normalize.children.cljs$core$IFn$_invoke$arity$1(G__3822) : sablono.normalize.children.call(null,G__3822));
})():((cljs.core.sequential_QMARK_(x))?x:(new cljs.core.List(null,x,null,(1),null))
))))))));
});
/**
 * Returns true if `x` are the attributes of an HTML element,
 *   otherwise false.
 */
sablono.normalize.attrs_QMARK_ = (function sablono$normalize$attrs_QMARK_(x){
return cljs.core.map_QMARK_(x);
});
/**
 * Ensure an element vector is of the form [tag-name attrs content].
 */
sablono.normalize.element = (function sablono$normalize$element(p__3823){
var vec__3824 = p__3823;
var seq__3825 = cljs.core.seq(vec__3824);
var first__3826 = cljs.core.first(seq__3825);
var seq__3825__$1 = cljs.core.next(seq__3825);
var tag = first__3826;
var content = seq__3825__$1;
if((((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," is not a valid element name."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"content","content",15833224),content], null));
}

var vec__3827 = sablono.normalize.match_tag(tag);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3827,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3827,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3827,(2),null);
var tag_attrs = sablono.normalize.compact_map(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null));
var map_attrs = cljs.core.first(content);
if(cljs.core.truth_(sablono.normalize.attrs_QMARK_(map_attrs))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_attrs,map_attrs], 0)),sablono.normalize.children(cljs.core.next(content))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.attributes(tag_attrs),sablono.normalize.children(content)], null);
}
});

//# sourceMappingURL=sablono.normalize.js.map
