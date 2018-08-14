goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (m){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
}),keys);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mixins], 0)));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3847 = arguments.length;
var i__5144__auto___3848 = (0);
while(true){
if((i__5144__auto___3848 < len__5143__auto___3847)){
args__5146__auto__.push((arguments[i__5144__auto___3848]));

var G__3849 = (i__5144__auto___3848 + (1));
i__5144__auto___3848 = G__3849;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((2) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5147__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.util.call_all.cljs$lang$applyTo = (function (seq3838){
var G__3839 = cljs.core.first(seq3838);
var seq3838__$1 = cljs.core.next(seq3838);
var G__3840 = cljs.core.first(seq3838__$1);
var seq3838__$2 = cljs.core.next(seq3838__$1);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3839,G__3840,seq3838__$2);
});


//# sourceMappingURL=rum.util.js.map
