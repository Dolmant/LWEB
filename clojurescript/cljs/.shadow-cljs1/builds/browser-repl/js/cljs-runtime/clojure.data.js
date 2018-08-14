goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__11400){
var vec__11401 = p__11400;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11401,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11401,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__11411 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11411,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11411,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11411,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__11426 = arguments.length;
switch (G__11426) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4543__auto__ = cljs.core.count(a);
var y__4544__auto__ = cljs.core.count(b);
return ((x__4543__auto__ > y__4544__auto__) ? x__4543__auto__ : y__4544__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4797__auto__ = (((x == null))?null:x);
var m__4798__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4798__auto__.call(null,x));
} else {
var m__4798__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4798__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4797__auto__ = (((a == null))?null:a);
var m__4798__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4798__auto__.call(null,a,b));
} else {
var m__4798__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4798__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__11442_11478 = clojure.data.equality_partition;
var G__11443_11479 = "null";
var G__11444_11480 = ((function (G__11442_11478,G__11443_11479){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__11442_11478,G__11443_11479))
;
goog.object.set(G__11442_11478,G__11443_11479,G__11444_11480);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__11445_11481 = clojure.data.equality_partition;
var G__11446_11482 = "string";
var G__11447_11483 = ((function (G__11445_11481,G__11446_11482){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__11445_11481,G__11446_11482))
;
goog.object.set(G__11445_11481,G__11446_11482,G__11447_11483);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__11452_11484 = clojure.data.equality_partition;
var G__11453_11485 = "number";
var G__11454_11486 = ((function (G__11452_11484,G__11453_11485){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__11452_11484,G__11453_11485))
;
goog.object.set(G__11452_11484,G__11453_11485,G__11454_11486);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__11459_11487 = clojure.data.equality_partition;
var G__11460_11488 = "array";
var G__11461_11489 = ((function (G__11459_11487,G__11460_11488){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__11459_11487,G__11460_11488))
;
goog.object.set(G__11459_11487,G__11460_11488,G__11461_11489);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__11466_11490 = clojure.data.equality_partition;
var G__11467_11491 = "function";
var G__11468_11492 = ((function (G__11466_11490,G__11467_11491){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__11466_11490,G__11467_11491))
;
goog.object.set(G__11466_11490,G__11467_11491,G__11468_11492);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__11469_11493 = clojure.data.equality_partition;
var G__11470_11494 = "boolean";
var G__11471_11495 = ((function (G__11469_11493,G__11470_11494){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__11469_11493,G__11470_11494))
;
goog.object.set(G__11469_11493,G__11470_11494,G__11471_11495);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__11472_11496 = clojure.data.equality_partition;
var G__11473_11497 = "_";
var G__11474_11498 = ((function (G__11472_11496,G__11473_11497){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__11472_11496,G__11473_11497))
;
goog.object.set(G__11472_11496,G__11473_11497,G__11474_11498);
goog.object.set(clojure.data.Diff,"null",true);

var G__11499_11527 = clojure.data.diff_similar;
var G__11500_11528 = "null";
var G__11501_11529 = ((function (G__11499_11527,G__11500_11528){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11499_11527,G__11500_11528))
;
goog.object.set(G__11499_11527,G__11500_11528,G__11501_11529);

goog.object.set(clojure.data.Diff,"string",true);

var G__11502_11533 = clojure.data.diff_similar;
var G__11503_11534 = "string";
var G__11504_11535 = ((function (G__11502_11533,G__11503_11534){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11502_11533,G__11503_11534))
;
goog.object.set(G__11502_11533,G__11503_11534,G__11504_11535);

goog.object.set(clojure.data.Diff,"number",true);

var G__11505_11537 = clojure.data.diff_similar;
var G__11506_11538 = "number";
var G__11507_11539 = ((function (G__11505_11537,G__11506_11538){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11505_11537,G__11506_11538))
;
goog.object.set(G__11505_11537,G__11506_11538,G__11507_11539);

goog.object.set(clojure.data.Diff,"array",true);

var G__11508_11540 = clojure.data.diff_similar;
var G__11509_11541 = "array";
var G__11510_11542 = ((function (G__11508_11540,G__11509_11541){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__11508_11540,G__11509_11541))
;
goog.object.set(G__11508_11540,G__11509_11541,G__11510_11542);

goog.object.set(clojure.data.Diff,"function",true);

var G__11511_11545 = clojure.data.diff_similar;
var G__11512_11546 = "function";
var G__11513_11547 = ((function (G__11511_11545,G__11512_11546){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11511_11545,G__11512_11546))
;
goog.object.set(G__11511_11545,G__11512_11546,G__11513_11547);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__11514_11548 = clojure.data.diff_similar;
var G__11515_11549 = "boolean";
var G__11516_11550 = ((function (G__11514_11548,G__11515_11549){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__11514_11548,G__11515_11549))
;
goog.object.set(G__11514_11548,G__11515_11549,G__11516_11550);

goog.object.set(clojure.data.Diff,"_",true);

var G__11517_11551 = clojure.data.diff_similar;
var G__11518_11552 = "_";
var G__11519_11553 = ((function (G__11517_11551,G__11518_11552){
return (function (a,b){
var fexpr__11525 = (function (){var G__11526 = clojure.data.equality_partition(a);
var G__11526__$1 = (((G__11526 instanceof cljs.core.Keyword))?G__11526.fqn:null);
switch (G__11526__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11526__$1)].join('')));

}
})();
return (fexpr__11525.cljs$core$IFn$_invoke$arity$2 ? fexpr__11525.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__11525.call(null,a,b));
});})(G__11517_11551,G__11518_11552))
;
goog.object.set(G__11517_11551,G__11518_11552,G__11519_11553);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
