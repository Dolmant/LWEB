goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__3865 = arguments.length;
switch (G__3865) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__3868 = opts;
var map__3868__$1 = ((((!((map__3868 == null)))?(((((map__3868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3868):map__3868);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__3868__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__3868__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__3870 = cljs.core.count(refs);
switch (G__3870) {
case (1):
var vec__3871 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3871,(0),null);
return ((function (vec__3871,a,G__3870,map__3868,map__3868__$1,ref,check_equals_QMARK_){
return (function (){
var G__3874 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__3874) : f.call(null,G__3874));
});
;})(vec__3871,a,G__3870,map__3868,map__3868__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__3876 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3876,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3876,(1),null);
return ((function (vec__3876,a,b,G__3870,map__3868,map__3868__$1,ref,check_equals_QMARK_){
return (function (){
var G__3879 = cljs.core.deref(a);
var G__3880 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__3879,G__3880) : f.call(null,G__3879,G__3880));
});
;})(vec__3876,a,b,G__3870,map__3868,map__3868__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__3881 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3881,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3881,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3881,(2),null);
return ((function (vec__3881,a,b,c,G__3870,map__3868,map__3868__$1,ref,check_equals_QMARK_){
return (function (){
var G__3884 = cljs.core.deref(a);
var G__3885 = cljs.core.deref(b);
var G__3886 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__3884,G__3885,G__3886) : f.call(null,G__3884,G__3885,G__3886));
});
;})(vec__3881,a,b,c,G__3870,map__3868,map__3868__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__3870,map__3868,map__3868__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});
;})(G__3870,map__3868,map__3868__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__3892 = ref;
cljs.core.reset_BANG_(G__3892,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__3892;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__3868,map__3868__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
});})(map__3868,map__3868__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__3868,map__3868__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
});})(map__3868,map__3868__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__3897_3912 = cljs.core.seq(refs);
var chunk__3898_3913 = null;
var count__3899_3914 = (0);
var i__3900_3915 = (0);
while(true){
if((i__3900_3915 < count__3899_3914)){
var ref_3916__$1 = chunk__3898_3913.cljs$core$IIndexed$_nth$arity$2(null,i__3900_3915);
cljs.core.add_watch(ref_3916__$1,key,watch);


var G__3917 = seq__3897_3912;
var G__3918 = chunk__3898_3913;
var G__3919 = count__3899_3914;
var G__3920 = (i__3900_3915 + (1));
seq__3897_3912 = G__3917;
chunk__3898_3913 = G__3918;
count__3899_3914 = G__3919;
i__3900_3915 = G__3920;
continue;
} else {
var temp__5457__auto___3924 = cljs.core.seq(seq__3897_3912);
if(temp__5457__auto___3924){
var seq__3897_3925__$1 = temp__5457__auto___3924;
if(cljs.core.chunked_seq_QMARK_(seq__3897_3925__$1)){
var c__4947__auto___3929 = cljs.core.chunk_first(seq__3897_3925__$1);
var G__3930 = cljs.core.chunk_rest(seq__3897_3925__$1);
var G__3931 = c__4947__auto___3929;
var G__3932 = cljs.core.count(c__4947__auto___3929);
var G__3933 = (0);
seq__3897_3912 = G__3930;
chunk__3898_3913 = G__3931;
count__3899_3914 = G__3932;
i__3900_3915 = G__3933;
continue;
} else {
var ref_3934__$1 = cljs.core.first(seq__3897_3925__$1);
cljs.core.add_watch(ref_3934__$1,key,watch);


var G__3935 = cljs.core.next(seq__3897_3925__$1);
var G__3936 = null;
var G__3937 = (0);
var G__3938 = (0);
seq__3897_3912 = G__3935;
chunk__3898_3913 = G__3936;
count__3899_3914 = G__3937;
i__3900_3915 = G__3938;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=rum.derived_atom.js.map
