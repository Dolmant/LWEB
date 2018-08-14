goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__7950){
var map__7951 = p__7950;
var map__7951__$1 = ((((!((map__7951 == null)))?(((((map__7951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7951):map__7951);
var m = map__7951__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7951__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7951__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7953_7988 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7954_7989 = null;
var count__7955_7990 = (0);
var i__7956_7991 = (0);
while(true){
if((i__7956_7991 < count__7955_7990)){
var f_7993 = chunk__7954_7989.cljs$core$IIndexed$_nth$arity$2(null,i__7956_7991);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_7993], 0));


var G__7994 = seq__7953_7988;
var G__7995 = chunk__7954_7989;
var G__7996 = count__7955_7990;
var G__7997 = (i__7956_7991 + (1));
seq__7953_7988 = G__7994;
chunk__7954_7989 = G__7995;
count__7955_7990 = G__7996;
i__7956_7991 = G__7997;
continue;
} else {
var temp__5457__auto___7998 = cljs.core.seq(seq__7953_7988);
if(temp__5457__auto___7998){
var seq__7953_7999__$1 = temp__5457__auto___7998;
if(cljs.core.chunked_seq_QMARK_(seq__7953_7999__$1)){
var c__4947__auto___8000 = cljs.core.chunk_first(seq__7953_7999__$1);
var G__8001 = cljs.core.chunk_rest(seq__7953_7999__$1);
var G__8002 = c__4947__auto___8000;
var G__8003 = cljs.core.count(c__4947__auto___8000);
var G__8004 = (0);
seq__7953_7988 = G__8001;
chunk__7954_7989 = G__8002;
count__7955_7990 = G__8003;
i__7956_7991 = G__8004;
continue;
} else {
var f_8005 = cljs.core.first(seq__7953_7999__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_8005], 0));


var G__8006 = cljs.core.next(seq__7953_7999__$1);
var G__8007 = null;
var G__8008 = (0);
var G__8009 = (0);
seq__7953_7988 = G__8006;
chunk__7954_7989 = G__8007;
count__7955_7990 = G__8008;
i__7956_7991 = G__8009;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8010 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4453__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_8010], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_8010)))?cljs.core.second(arglists_8010):arglists_8010)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7958_8011 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7959_8012 = null;
var count__7960_8013 = (0);
var i__7961_8014 = (0);
while(true){
if((i__7961_8014 < count__7960_8013)){
var vec__7962_8015 = chunk__7959_8012.cljs$core$IIndexed$_nth$arity$2(null,i__7961_8014);
var name_8016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7962_8015,(0),null);
var map__7965_8017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7962_8015,(1),null);
var map__7965_8018__$1 = ((((!((map__7965_8017 == null)))?(((((map__7965_8017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7965_8017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7965_8017):map__7965_8017);
var doc_8019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7965_8018__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_8020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7965_8018__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_8016], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_8020], 0));

if(cljs.core.truth_(doc_8019)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_8019], 0));
} else {
}


var G__8021 = seq__7958_8011;
var G__8022 = chunk__7959_8012;
var G__8023 = count__7960_8013;
var G__8024 = (i__7961_8014 + (1));
seq__7958_8011 = G__8021;
chunk__7959_8012 = G__8022;
count__7960_8013 = G__8023;
i__7961_8014 = G__8024;
continue;
} else {
var temp__5457__auto___8025 = cljs.core.seq(seq__7958_8011);
if(temp__5457__auto___8025){
var seq__7958_8026__$1 = temp__5457__auto___8025;
if(cljs.core.chunked_seq_QMARK_(seq__7958_8026__$1)){
var c__4947__auto___8027 = cljs.core.chunk_first(seq__7958_8026__$1);
var G__8028 = cljs.core.chunk_rest(seq__7958_8026__$1);
var G__8029 = c__4947__auto___8027;
var G__8030 = cljs.core.count(c__4947__auto___8027);
var G__8031 = (0);
seq__7958_8011 = G__8028;
chunk__7959_8012 = G__8029;
count__7960_8013 = G__8030;
i__7961_8014 = G__8031;
continue;
} else {
var vec__7976_8032 = cljs.core.first(seq__7958_8026__$1);
var name_8033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7976_8032,(0),null);
var map__7979_8034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7976_8032,(1),null);
var map__7979_8035__$1 = ((((!((map__7979_8034 == null)))?(((((map__7979_8034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7979_8034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7979_8034):map__7979_8034);
var doc_8036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7979_8035__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_8037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7979_8035__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_8033], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_8037], 0));

if(cljs.core.truth_(doc_8036)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_8036], 0));
} else {
}


var G__8038 = cljs.core.next(seq__7958_8026__$1);
var G__8039 = null;
var G__8040 = (0);
var G__8041 = (0);
seq__7958_8011 = G__8038;
chunk__7959_8012 = G__8039;
count__7960_8013 = G__8040;
i__7961_8014 = G__8041;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__7983 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__7984 = null;
var count__7985 = (0);
var i__7986 = (0);
while(true){
if((i__7986 < count__7985)){
var role = chunk__7984.cljs$core$IIndexed$_nth$arity$2(null,i__7986);
var temp__5457__auto___8042__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___8042__$1)){
var spec_8043 = temp__5457__auto___8042__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_8043)], 0));
} else {
}


var G__8044 = seq__7983;
var G__8045 = chunk__7984;
var G__8046 = count__7985;
var G__8047 = (i__7986 + (1));
seq__7983 = G__8044;
chunk__7984 = G__8045;
count__7985 = G__8046;
i__7986 = G__8047;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__7983);
if(temp__5457__auto____$1){
var seq__7983__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__7983__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__7983__$1);
var G__8048 = cljs.core.chunk_rest(seq__7983__$1);
var G__8049 = c__4947__auto__;
var G__8050 = cljs.core.count(c__4947__auto__);
var G__8051 = (0);
seq__7983 = G__8048;
chunk__7984 = G__8049;
count__7985 = G__8050;
i__7986 = G__8051;
continue;
} else {
var role = cljs.core.first(seq__7983__$1);
var temp__5457__auto___8052__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___8052__$2)){
var spec_8053 = temp__5457__auto___8052__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_8053)], 0));
} else {
}


var G__8054 = cljs.core.next(seq__7983__$1);
var G__8055 = null;
var G__8056 = (0);
var G__8057 = (0);
seq__7983 = G__8054;
chunk__7984 = G__8055;
count__7985 = G__8056;
i__7986 = G__8057;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
