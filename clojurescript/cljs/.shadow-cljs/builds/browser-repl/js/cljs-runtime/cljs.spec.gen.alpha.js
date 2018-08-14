goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('goog.Uri');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')))){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5480 = arguments.length;
var i__5144__auto___5481 = (0);
while(true){
if((i__5144__auto___5481 < len__5143__auto___5480)){
args__5146__auto__.push((arguments[i__5144__auto___5481]));

var G__5483 = (i__5144__auto___5481 + (1));
i__5144__auto___5481 = G__5483;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq5478){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5478));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')))){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5492 = arguments.length;
var i__5144__auto___5493 = (0);
while(true){
if((i__5144__auto___5493 < len__5143__auto___5492)){
args__5146__auto__.push((arguments[i__5144__auto___5493]));

var G__5494 = (i__5144__auto___5493 + (1));
i__5144__auto___5493 = G__5494;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq5488){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5488));
});

var g_QMARK__5504 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')))){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_5505 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__5504){
return (function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')))){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__5504))
,null));
var mkg_5506 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__5504,g_5505){
return (function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')))){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__5504,g_5505))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__5504,g_5505,mkg_5506){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__5497 = cljs.core.deref(g_QMARK__5504);
return (fexpr__5497.cljs$core$IFn$_invoke$arity$1 ? fexpr__5497.cljs$core$IFn$_invoke$arity$1(x) : fexpr__5497.call(null,x));
});})(g_QMARK__5504,g_5505,mkg_5506))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__5504,g_5505,mkg_5506){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__5502 = cljs.core.deref(mkg_5506);
return (fexpr__5502.cljs$core$IFn$_invoke$arity$1 ? fexpr__5502.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__5502.call(null,gfn));
});})(g_QMARK__5504,g_5505,mkg_5506))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__5504,g_5505,mkg_5506){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__5503 = cljs.core.deref(g_5505);
return (fexpr__5503.cljs$core$IFn$_invoke$arity$1 ? fexpr__5503.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__5503.call(null,generator));
});})(g_QMARK__5504,g_5505,mkg_5506))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__5512 = new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__5512.cljs$core$IFn$_invoke$arity$2 ? fexpr__5512.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__5512.call(null,rnd,size));
}));
});
var g__17503__auto___5602 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')))){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__17503__auto___5602){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5603 = arguments.length;
var i__5144__auto___5604 = (0);
while(true){
if((i__5144__auto___5604 < len__5143__auto___5603)){
args__5146__auto__.push((arguments[i__5144__auto___5604]));

var G__5605 = (i__5144__auto___5604 + (1));
i__5144__auto___5604 = G__5605;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5602))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5602){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5602),args);
});})(g__17503__auto___5602))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__17503__auto___5602){
return (function (seq5514){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5514));
});})(g__17503__auto___5602))
;


var g__17503__auto___5606 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')))){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__17503__auto___5606){
return (function cljs$spec$gen$alpha$list(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5608 = arguments.length;
var i__5144__auto___5609 = (0);
while(true){
if((i__5144__auto___5609 < len__5143__auto___5608)){
args__5146__auto__.push((arguments[i__5144__auto___5609]));

var G__5610 = (i__5144__auto___5609 + (1));
i__5144__auto___5609 = G__5610;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5606))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5606){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5606),args);
});})(g__17503__auto___5606))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__17503__auto___5606){
return (function (seq5515){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5515));
});})(g__17503__auto___5606))
;


var g__17503__auto___5611 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')))){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__17503__auto___5611){
return (function cljs$spec$gen$alpha$map(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5612 = arguments.length;
var i__5144__auto___5613 = (0);
while(true){
if((i__5144__auto___5613 < len__5143__auto___5612)){
args__5146__auto__.push((arguments[i__5144__auto___5613]));

var G__5618 = (i__5144__auto___5613 + (1));
i__5144__auto___5613 = G__5618;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5611))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5611){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5611),args);
});})(g__17503__auto___5611))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__17503__auto___5611){
return (function (seq5519){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5519));
});})(g__17503__auto___5611))
;


var g__17503__auto___5619 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')))){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__17503__auto___5619){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5620 = arguments.length;
var i__5144__auto___5621 = (0);
while(true){
if((i__5144__auto___5621 < len__5143__auto___5620)){
args__5146__auto__.push((arguments[i__5144__auto___5621]));

var G__5622 = (i__5144__auto___5621 + (1));
i__5144__auto___5621 = G__5622;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5619))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5619){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5619),args);
});})(g__17503__auto___5619))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__17503__auto___5619){
return (function (seq5522){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5522));
});})(g__17503__auto___5619))
;


var g__17503__auto___5624 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')))){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__17503__auto___5624){
return (function cljs$spec$gen$alpha$set(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5625 = arguments.length;
var i__5144__auto___5626 = (0);
while(true){
if((i__5144__auto___5626 < len__5143__auto___5625)){
args__5146__auto__.push((arguments[i__5144__auto___5626]));

var G__5627 = (i__5144__auto___5626 + (1));
i__5144__auto___5626 = G__5627;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5624))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5624){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5624),args);
});})(g__17503__auto___5624))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__17503__auto___5624){
return (function (seq5523){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5523));
});})(g__17503__auto___5624))
;


var g__17503__auto___5628 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')))){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__17503__auto___5628){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5629 = arguments.length;
var i__5144__auto___5630 = (0);
while(true){
if((i__5144__auto___5630 < len__5143__auto___5629)){
args__5146__auto__.push((arguments[i__5144__auto___5630]));

var G__5631 = (i__5144__auto___5630 + (1));
i__5144__auto___5630 = G__5631;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5628))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5628){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5628),args);
});})(g__17503__auto___5628))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__17503__auto___5628){
return (function (seq5528){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5528));
});})(g__17503__auto___5628))
;


var g__17503__auto___5633 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')))){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__17503__auto___5633){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5634 = arguments.length;
var i__5144__auto___5635 = (0);
while(true){
if((i__5144__auto___5635 < len__5143__auto___5634)){
args__5146__auto__.push((arguments[i__5144__auto___5635]));

var G__5636 = (i__5144__auto___5635 + (1));
i__5144__auto___5635 = G__5636;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5633))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5633){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5633),args);
});})(g__17503__auto___5633))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__17503__auto___5633){
return (function (seq5530){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5530));
});})(g__17503__auto___5633))
;


var g__17503__auto___5637 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')))){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__17503__auto___5637){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5638 = arguments.length;
var i__5144__auto___5639 = (0);
while(true){
if((i__5144__auto___5639 < len__5143__auto___5638)){
args__5146__auto__.push((arguments[i__5144__auto___5639]));

var G__5640 = (i__5144__auto___5639 + (1));
i__5144__auto___5639 = G__5640;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5637))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5637){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5637),args);
});})(g__17503__auto___5637))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__17503__auto___5637){
return (function (seq5532){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5532));
});})(g__17503__auto___5637))
;


var g__17503__auto___5641 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')))){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__17503__auto___5641){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5642 = arguments.length;
var i__5144__auto___5643 = (0);
while(true){
if((i__5144__auto___5643 < len__5143__auto___5642)){
args__5146__auto__.push((arguments[i__5144__auto___5643]));

var G__5644 = (i__5144__auto___5643 + (1));
i__5144__auto___5643 = G__5644;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5641))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5641){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5641),args);
});})(g__17503__auto___5641))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__17503__auto___5641){
return (function (seq5536){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5536));
});})(g__17503__auto___5641))
;


var g__17503__auto___5645 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')))){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__17503__auto___5645){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5646 = arguments.length;
var i__5144__auto___5647 = (0);
while(true){
if((i__5144__auto___5647 < len__5143__auto___5646)){
args__5146__auto__.push((arguments[i__5144__auto___5647]));

var G__5648 = (i__5144__auto___5647 + (1));
i__5144__auto___5647 = G__5648;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5645))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5645){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5645),args);
});})(g__17503__auto___5645))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__17503__auto___5645){
return (function (seq5539){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5539));
});})(g__17503__auto___5645))
;


var g__17503__auto___5649 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')))){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__17503__auto___5649){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5650 = arguments.length;
var i__5144__auto___5651 = (0);
while(true){
if((i__5144__auto___5651 < len__5143__auto___5650)){
args__5146__auto__.push((arguments[i__5144__auto___5651]));

var G__5652 = (i__5144__auto___5651 + (1));
i__5144__auto___5651 = G__5652;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5649))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5649){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5649),args);
});})(g__17503__auto___5649))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__17503__auto___5649){
return (function (seq5541){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5541));
});})(g__17503__auto___5649))
;


var g__17503__auto___5653 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')))){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__17503__auto___5653){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5654 = arguments.length;
var i__5144__auto___5655 = (0);
while(true){
if((i__5144__auto___5655 < len__5143__auto___5654)){
args__5146__auto__.push((arguments[i__5144__auto___5655]));

var G__5656 = (i__5144__auto___5655 + (1));
i__5144__auto___5655 = G__5656;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5653))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5653){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5653),args);
});})(g__17503__auto___5653))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__17503__auto___5653){
return (function (seq5542){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5542));
});})(g__17503__auto___5653))
;


var g__17503__auto___5657 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')))){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__17503__auto___5657){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5658 = arguments.length;
var i__5144__auto___5659 = (0);
while(true){
if((i__5144__auto___5659 < len__5143__auto___5658)){
args__5146__auto__.push((arguments[i__5144__auto___5659]));

var G__5660 = (i__5144__auto___5659 + (1));
i__5144__auto___5659 = G__5660;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5657))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5657){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5657),args);
});})(g__17503__auto___5657))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__17503__auto___5657){
return (function (seq5543){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5543));
});})(g__17503__auto___5657))
;


var g__17503__auto___5661 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')))){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__17503__auto___5661){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5662 = arguments.length;
var i__5144__auto___5663 = (0);
while(true){
if((i__5144__auto___5663 < len__5143__auto___5662)){
args__5146__auto__.push((arguments[i__5144__auto___5663]));

var G__5664 = (i__5144__auto___5663 + (1));
i__5144__auto___5663 = G__5664;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5661))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5661){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5661),args);
});})(g__17503__auto___5661))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__17503__auto___5661){
return (function (seq5548){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5548));
});})(g__17503__auto___5661))
;


var g__17503__auto___5665 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')))){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__17503__auto___5665){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5666 = arguments.length;
var i__5144__auto___5667 = (0);
while(true){
if((i__5144__auto___5667 < len__5143__auto___5666)){
args__5146__auto__.push((arguments[i__5144__auto___5667]));

var G__5668 = (i__5144__auto___5667 + (1));
i__5144__auto___5667 = G__5668;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5665))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5665){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5665),args);
});})(g__17503__auto___5665))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__17503__auto___5665){
return (function (seq5561){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5561));
});})(g__17503__auto___5665))
;


var g__17503__auto___5670 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')))){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__17503__auto___5670){
return (function cljs$spec$gen$alpha$return(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5672 = arguments.length;
var i__5144__auto___5673 = (0);
while(true){
if((i__5144__auto___5673 < len__5143__auto___5672)){
args__5146__auto__.push((arguments[i__5144__auto___5673]));

var G__5674 = (i__5144__auto___5673 + (1));
i__5144__auto___5673 = G__5674;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5670))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5670){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5670),args);
});})(g__17503__auto___5670))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__17503__auto___5670){
return (function (seq5569){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5569));
});})(g__17503__auto___5670))
;


var g__17503__auto___5675 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')))){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__17503__auto___5675){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5676 = arguments.length;
var i__5144__auto___5677 = (0);
while(true){
if((i__5144__auto___5677 < len__5143__auto___5676)){
args__5146__auto__.push((arguments[i__5144__auto___5677]));

var G__5678 = (i__5144__auto___5677 + (1));
i__5144__auto___5677 = G__5678;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5675))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5675){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5675),args);
});})(g__17503__auto___5675))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__17503__auto___5675){
return (function (seq5574){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5574));
});})(g__17503__auto___5675))
;


var g__17503__auto___5679 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')))){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__17503__auto___5679){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5680 = arguments.length;
var i__5144__auto___5681 = (0);
while(true){
if((i__5144__auto___5681 < len__5143__auto___5680)){
args__5146__auto__.push((arguments[i__5144__auto___5681]));

var G__5682 = (i__5144__auto___5681 + (1));
i__5144__auto___5681 = G__5682;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5679))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5679){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5679),args);
});})(g__17503__auto___5679))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__17503__auto___5679){
return (function (seq5596){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5596));
});})(g__17503__auto___5679))
;


var g__17503__auto___5683 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')))){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__17503__auto___5683){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5684 = arguments.length;
var i__5144__auto___5685 = (0);
while(true){
if((i__5144__auto___5685 < len__5143__auto___5684)){
args__5146__auto__.push((arguments[i__5144__auto___5685]));

var G__5686 = (i__5144__auto___5685 + (1));
i__5144__auto___5685 = G__5686;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17503__auto___5683))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17503__auto___5683){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17503__auto___5683),args);
});})(g__17503__auto___5683))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__17503__auto___5683){
return (function (seq5601){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5601));
});})(g__17503__auto___5683))
;

var g__17508__auto___5708 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')))){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__17508__auto___5708){
return (function cljs$spec$gen$alpha$any(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5709 = arguments.length;
var i__5144__auto___5710 = (0);
while(true){
if((i__5144__auto___5710 < len__5143__auto___5709)){
args__5146__auto__.push((arguments[i__5144__auto___5710]));

var G__5711 = (i__5144__auto___5710 + (1));
i__5144__auto___5710 = G__5711;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5708))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5708){
return (function (args){
return cljs.core.deref(g__17508__auto___5708);
});})(g__17508__auto___5708))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__17508__auto___5708){
return (function (seq5687){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5687));
});})(g__17508__auto___5708))
;


var g__17508__auto___5712 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')))){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__17508__auto___5712){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5713 = arguments.length;
var i__5144__auto___5714 = (0);
while(true){
if((i__5144__auto___5714 < len__5143__auto___5713)){
args__5146__auto__.push((arguments[i__5144__auto___5714]));

var G__5715 = (i__5144__auto___5714 + (1));
i__5144__auto___5714 = G__5715;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5712))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5712){
return (function (args){
return cljs.core.deref(g__17508__auto___5712);
});})(g__17508__auto___5712))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__17508__auto___5712){
return (function (seq5688){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5688));
});})(g__17508__auto___5712))
;


var g__17508__auto___5716 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')))){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__17508__auto___5716){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5717 = arguments.length;
var i__5144__auto___5718 = (0);
while(true){
if((i__5144__auto___5718 < len__5143__auto___5717)){
args__5146__auto__.push((arguments[i__5144__auto___5718]));

var G__5719 = (i__5144__auto___5718 + (1));
i__5144__auto___5718 = G__5719;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5716))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5716){
return (function (args){
return cljs.core.deref(g__17508__auto___5716);
});})(g__17508__auto___5716))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__17508__auto___5716){
return (function (seq5689){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5689));
});})(g__17508__auto___5716))
;


var g__17508__auto___5720 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')))){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__17508__auto___5720){
return (function cljs$spec$gen$alpha$char(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5721 = arguments.length;
var i__5144__auto___5722 = (0);
while(true){
if((i__5144__auto___5722 < len__5143__auto___5721)){
args__5146__auto__.push((arguments[i__5144__auto___5722]));

var G__5723 = (i__5144__auto___5722 + (1));
i__5144__auto___5722 = G__5723;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5720))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5720){
return (function (args){
return cljs.core.deref(g__17508__auto___5720);
});})(g__17508__auto___5720))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__17508__auto___5720){
return (function (seq5690){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5690));
});})(g__17508__auto___5720))
;


var g__17508__auto___5724 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')))){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__17508__auto___5724){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5725 = arguments.length;
var i__5144__auto___5726 = (0);
while(true){
if((i__5144__auto___5726 < len__5143__auto___5725)){
args__5146__auto__.push((arguments[i__5144__auto___5726]));

var G__5727 = (i__5144__auto___5726 + (1));
i__5144__auto___5726 = G__5727;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5724))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5724){
return (function (args){
return cljs.core.deref(g__17508__auto___5724);
});})(g__17508__auto___5724))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__17508__auto___5724){
return (function (seq5691){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5691));
});})(g__17508__auto___5724))
;


var g__17508__auto___5728 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')))){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__17508__auto___5728){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5729 = arguments.length;
var i__5144__auto___5730 = (0);
while(true){
if((i__5144__auto___5730 < len__5143__auto___5729)){
args__5146__auto__.push((arguments[i__5144__auto___5730]));

var G__5731 = (i__5144__auto___5730 + (1));
i__5144__auto___5730 = G__5731;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5728))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5728){
return (function (args){
return cljs.core.deref(g__17508__auto___5728);
});})(g__17508__auto___5728))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__17508__auto___5728){
return (function (seq5692){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5692));
});})(g__17508__auto___5728))
;


var g__17508__auto___5732 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')))){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__17508__auto___5732){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5733 = arguments.length;
var i__5144__auto___5734 = (0);
while(true){
if((i__5144__auto___5734 < len__5143__auto___5733)){
args__5146__auto__.push((arguments[i__5144__auto___5734]));

var G__5735 = (i__5144__auto___5734 + (1));
i__5144__auto___5734 = G__5735;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5732))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5732){
return (function (args){
return cljs.core.deref(g__17508__auto___5732);
});})(g__17508__auto___5732))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__17508__auto___5732){
return (function (seq5693){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5693));
});})(g__17508__auto___5732))
;


var g__17508__auto___5736 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')))){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__17508__auto___5736){
return (function cljs$spec$gen$alpha$double(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5737 = arguments.length;
var i__5144__auto___5738 = (0);
while(true){
if((i__5144__auto___5738 < len__5143__auto___5737)){
args__5146__auto__.push((arguments[i__5144__auto___5738]));

var G__5739 = (i__5144__auto___5738 + (1));
i__5144__auto___5738 = G__5739;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5736))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5736){
return (function (args){
return cljs.core.deref(g__17508__auto___5736);
});})(g__17508__auto___5736))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__17508__auto___5736){
return (function (seq5694){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5694));
});})(g__17508__auto___5736))
;


var g__17508__auto___5740 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')))){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__17508__auto___5740){
return (function cljs$spec$gen$alpha$int(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5741 = arguments.length;
var i__5144__auto___5742 = (0);
while(true){
if((i__5144__auto___5742 < len__5143__auto___5741)){
args__5146__auto__.push((arguments[i__5144__auto___5742]));

var G__5743 = (i__5144__auto___5742 + (1));
i__5144__auto___5742 = G__5743;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5740))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5740){
return (function (args){
return cljs.core.deref(g__17508__auto___5740);
});})(g__17508__auto___5740))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__17508__auto___5740){
return (function (seq5695){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5695));
});})(g__17508__auto___5740))
;


var g__17508__auto___5744 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')))){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__17508__auto___5744){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5745 = arguments.length;
var i__5144__auto___5746 = (0);
while(true){
if((i__5144__auto___5746 < len__5143__auto___5745)){
args__5146__auto__.push((arguments[i__5144__auto___5746]));

var G__5747 = (i__5144__auto___5746 + (1));
i__5144__auto___5746 = G__5747;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5744))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5744){
return (function (args){
return cljs.core.deref(g__17508__auto___5744);
});})(g__17508__auto___5744))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__17508__auto___5744){
return (function (seq5696){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5696));
});})(g__17508__auto___5744))
;


var g__17508__auto___5748 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')))){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__17508__auto___5748){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5749 = arguments.length;
var i__5144__auto___5750 = (0);
while(true){
if((i__5144__auto___5750 < len__5143__auto___5749)){
args__5146__auto__.push((arguments[i__5144__auto___5750]));

var G__5751 = (i__5144__auto___5750 + (1));
i__5144__auto___5750 = G__5751;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5748))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5748){
return (function (args){
return cljs.core.deref(g__17508__auto___5748);
});})(g__17508__auto___5748))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__17508__auto___5748){
return (function (seq5697){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5697));
});})(g__17508__auto___5748))
;


var g__17508__auto___5752 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')))){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__17508__auto___5752){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5753 = arguments.length;
var i__5144__auto___5754 = (0);
while(true){
if((i__5144__auto___5754 < len__5143__auto___5753)){
args__5146__auto__.push((arguments[i__5144__auto___5754]));

var G__5755 = (i__5144__auto___5754 + (1));
i__5144__auto___5754 = G__5755;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5752))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5752){
return (function (args){
return cljs.core.deref(g__17508__auto___5752);
});})(g__17508__auto___5752))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__17508__auto___5752){
return (function (seq5698){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5698));
});})(g__17508__auto___5752))
;


var g__17508__auto___5756 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')))){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__17508__auto___5756){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5757 = arguments.length;
var i__5144__auto___5758 = (0);
while(true){
if((i__5144__auto___5758 < len__5143__auto___5757)){
args__5146__auto__.push((arguments[i__5144__auto___5758]));

var G__5759 = (i__5144__auto___5758 + (1));
i__5144__auto___5758 = G__5759;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5756))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5756){
return (function (args){
return cljs.core.deref(g__17508__auto___5756);
});})(g__17508__auto___5756))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__17508__auto___5756){
return (function (seq5699){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5699));
});})(g__17508__auto___5756))
;


var g__17508__auto___5760 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')))){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__17508__auto___5760){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5761 = arguments.length;
var i__5144__auto___5762 = (0);
while(true){
if((i__5144__auto___5762 < len__5143__auto___5761)){
args__5146__auto__.push((arguments[i__5144__auto___5762]));

var G__5763 = (i__5144__auto___5762 + (1));
i__5144__auto___5762 = G__5763;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5760))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5760){
return (function (args){
return cljs.core.deref(g__17508__auto___5760);
});})(g__17508__auto___5760))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__17508__auto___5760){
return (function (seq5700){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5700));
});})(g__17508__auto___5760))
;


var g__17508__auto___5764 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')))){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__17508__auto___5764){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5765 = arguments.length;
var i__5144__auto___5766 = (0);
while(true){
if((i__5144__auto___5766 < len__5143__auto___5765)){
args__5146__auto__.push((arguments[i__5144__auto___5766]));

var G__5767 = (i__5144__auto___5766 + (1));
i__5144__auto___5766 = G__5767;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5764))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5764){
return (function (args){
return cljs.core.deref(g__17508__auto___5764);
});})(g__17508__auto___5764))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__17508__auto___5764){
return (function (seq5701){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5701));
});})(g__17508__auto___5764))
;


var g__17508__auto___5768 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')))){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__17508__auto___5768){
return (function cljs$spec$gen$alpha$string(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5769 = arguments.length;
var i__5144__auto___5770 = (0);
while(true){
if((i__5144__auto___5770 < len__5143__auto___5769)){
args__5146__auto__.push((arguments[i__5144__auto___5770]));

var G__5771 = (i__5144__auto___5770 + (1));
i__5144__auto___5770 = G__5771;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5768))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5768){
return (function (args){
return cljs.core.deref(g__17508__auto___5768);
});})(g__17508__auto___5768))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__17508__auto___5768){
return (function (seq5702){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5702));
});})(g__17508__auto___5768))
;


var g__17508__auto___5772 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')))){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__17508__auto___5772){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5773 = arguments.length;
var i__5144__auto___5774 = (0);
while(true){
if((i__5144__auto___5774 < len__5143__auto___5773)){
args__5146__auto__.push((arguments[i__5144__auto___5774]));

var G__5775 = (i__5144__auto___5774 + (1));
i__5144__auto___5774 = G__5775;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5772))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5772){
return (function (args){
return cljs.core.deref(g__17508__auto___5772);
});})(g__17508__auto___5772))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__17508__auto___5772){
return (function (seq5703){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5703));
});})(g__17508__auto___5772))
;


var g__17508__auto___5776 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')))){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__17508__auto___5776){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5777 = arguments.length;
var i__5144__auto___5778 = (0);
while(true){
if((i__5144__auto___5778 < len__5143__auto___5777)){
args__5146__auto__.push((arguments[i__5144__auto___5778]));

var G__5779 = (i__5144__auto___5778 + (1));
i__5144__auto___5778 = G__5779;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5776))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5776){
return (function (args){
return cljs.core.deref(g__17508__auto___5776);
});})(g__17508__auto___5776))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__17508__auto___5776){
return (function (seq5704){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5704));
});})(g__17508__auto___5776))
;


var g__17508__auto___5780 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')))){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__17508__auto___5780){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5781 = arguments.length;
var i__5144__auto___5782 = (0);
while(true){
if((i__5144__auto___5782 < len__5143__auto___5781)){
args__5146__auto__.push((arguments[i__5144__auto___5782]));

var G__5783 = (i__5144__auto___5782 + (1));
i__5144__auto___5782 = G__5783;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5780))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5780){
return (function (args){
return cljs.core.deref(g__17508__auto___5780);
});})(g__17508__auto___5780))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__17508__auto___5780){
return (function (seq5705){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5705));
});})(g__17508__auto___5780))
;


var g__17508__auto___5784 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')))){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__17508__auto___5784){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5785 = arguments.length;
var i__5144__auto___5786 = (0);
while(true){
if((i__5144__auto___5786 < len__5143__auto___5785)){
args__5146__auto__.push((arguments[i__5144__auto___5786]));

var G__5787 = (i__5144__auto___5786 + (1));
i__5144__auto___5786 = G__5787;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5784))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5784){
return (function (args){
return cljs.core.deref(g__17508__auto___5784);
});})(g__17508__auto___5784))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__17508__auto___5784){
return (function (seq5706){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5706));
});})(g__17508__auto___5784))
;


var g__17508__auto___5788 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined')) && ((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')))){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__17508__auto___5788){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5789 = arguments.length;
var i__5144__auto___5790 = (0);
while(true){
if((i__5144__auto___5790 < len__5143__auto___5789)){
args__5146__auto__.push((arguments[i__5144__auto___5790]));

var G__5791 = (i__5144__auto___5790 + (1));
i__5144__auto___5790 = G__5791;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});})(g__17508__auto___5788))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17508__auto___5788){
return (function (args){
return cljs.core.deref(g__17508__auto___5788);
});})(g__17508__auto___5788))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__17508__auto___5788){
return (function (seq5707){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5707));
});})(g__17508__auto___5788))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5794 = arguments.length;
var i__5144__auto___5795 = (0);
while(true){
if((i__5144__auto___5795 < len__5143__auto___5794)){
args__5146__auto__.push((arguments[i__5144__auto___5795]));

var G__5796 = (i__5144__auto___5795 + (1));
i__5144__auto___5795 = G__5796;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__5792_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__5792_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq5793){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5793));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__5798_SHARP_){
return (new Date(p1__5798_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__5797_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5797_SHARP_),".com"].join('')));
});})(simple))
,cljs.spec.gen.alpha.uuid()], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=cljs.spec.gen.alpha.js.map
