goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
var G__2884 = comp.state;
var G__2885 = ":rum/state";
return goog.object.get(G__2884,G__2885);
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__2886 = cljs.core.seq(props);
var chunk__2888 = null;
var count__2889 = (0);
var i__2890 = (0);
while(true){
if((i__2890 < count__2889)){
var vec__2892 = chunk__2888.cljs$core$IIndexed$_nth$arity$2(null,i__2890);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2892,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2892,(1),null);
if(!((v == null))){
var G__2895_2904 = obj;
var G__2896_2905 = cljs.core.name(k);
var G__2897_2906 = cljs.core.clj__GT_js(v);
goog.object.set(G__2895_2904,G__2896_2905,G__2897_2906);


var G__2907 = seq__2886;
var G__2908 = chunk__2888;
var G__2909 = count__2889;
var G__2910 = (i__2890 + (1));
seq__2886 = G__2907;
chunk__2888 = G__2908;
count__2889 = G__2909;
i__2890 = G__2910;
continue;
} else {
var G__2911 = seq__2886;
var G__2912 = chunk__2888;
var G__2913 = count__2889;
var G__2914 = (i__2890 + (1));
seq__2886 = G__2911;
chunk__2888 = G__2912;
count__2889 = G__2913;
i__2890 = G__2914;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__2886);
if(temp__5457__auto__){
var seq__2886__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2886__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__2886__$1);
var G__2915 = cljs.core.chunk_rest(seq__2886__$1);
var G__2916 = c__4947__auto__;
var G__2917 = cljs.core.count(c__4947__auto__);
var G__2918 = (0);
seq__2886 = G__2915;
chunk__2888 = G__2916;
count__2889 = G__2917;
i__2890 = G__2918;
continue;
} else {
var vec__2898 = cljs.core.first(seq__2886__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2898,(1),null);
if(!((v == null))){
var G__2901_2919 = obj;
var G__2902_2920 = cljs.core.name(k);
var G__2903_2921 = cljs.core.clj__GT_js(v);
goog.object.set(G__2901_2919,G__2902_2920,G__2903_2921);


var G__2922 = cljs.core.next(seq__2886__$1);
var G__2923 = null;
var G__2924 = (0);
var G__2925 = (0);
seq__2886 = G__2922;
chunk__2888 = G__2923;
count__2889 = G__2924;
i__2890 = G__2925;
continue;
} else {
var G__2926 = cljs.core.next(seq__2886__$1);
var G__2927 = null;
var G__2928 = (0);
var G__2929 = (0);
seq__2886 = G__2926;
chunk__2888 = G__2927;
count__2889 = G__2928;
i__2890 = G__2929;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect(new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,render__$1,wrap_render){
return (function (p1__2931_SHARP_,p2__2930_SHARP_){
return (p2__2930_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__2930_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__2931_SHARP_) : p2__2930_SHARP_.call(null,p1__2931_SHARP_));
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect(new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect(new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect(new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect(new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect(new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
var G__2936_2973 = this$;
var G__2937_2974 = "state";
var G__2938_2975 = ({":rum/state": cljs.core.volatile_BANG_(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))});
goog.object.set(G__2936_2973,G__2937_2974,G__2938_2975);

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_(will_mount)){
} else {
var G__2939_2976 = prototype;
var G__2940_2977 = "componentWillMount";
var G__2941_2978 = ((function (G__2939_2976,G__2940_2977,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
});})(G__2939_2976,G__2940_2977,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__2939_2976,G__2940_2977,G__2941_2978);
}

if(cljs.core.empty_QMARK_(did_mount)){
} else {
var G__2942_2979 = prototype;
var G__2943_2980 = "componentDidMount";
var G__2944_2981 = ((function (G__2942_2979,G__2943_2980,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
});})(G__2942_2979,G__2943_2980,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__2942_2979,G__2943_2980,G__2944_2981);
}

var G__2945_2982 = prototype;
var G__2946_2983 = "componentWillReceiveProps";
var G__2947_2984 = ((function (G__2945_2982,G__2946_2983,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state,goog.object.get(next_props,":rum/initial-state")], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,state,this$,G__2945_2982,G__2946_2983,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__2933_SHARP_,p2__2932_SHARP_){
return (p2__2932_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__2932_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__2933_SHARP_) : p2__2932_SHARP_.call(null,old_state,p1__2933_SHARP_));
});})(old_state,state,this$,G__2945_2982,G__2946_2983,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
});})(G__2945_2982,G__2946_2983,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__2945_2982,G__2946_2983,G__2947_2984);

if(cljs.core.empty_QMARK_(should_update)){
} else {
var G__2948_2985 = prototype;
var G__2949_2986 = "shouldComponentUpdate";
var G__2950_2987 = ((function (G__2948_2985,G__2949_2986,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__4453__auto__ = cljs.core.some(((function (old_state,new_state,this$,G__2948_2985,G__2949_2986,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__2934_SHARP_){
return (p1__2934_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__2934_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__2934_SHARP_.call(null,old_state,new_state));
});})(old_state,new_state,this$,G__2948_2985,G__2949_2986,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
return false;
}
});})(G__2948_2985,G__2949_2986,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__2948_2985,G__2949_2986,G__2950_2987);
}

if(cljs.core.empty_QMARK_(will_update)){
} else {
var G__2951_2988 = prototype;
var G__2952_2989 = "componentWillUpdate";
var G__2953_2990 = ((function (G__2951_2988,G__2952_2989,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
});})(G__2951_2988,G__2952_2989,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__2951_2988,G__2952_2989,G__2953_2990);
}

var G__2954_2991 = prototype;
var G__2955_2992 = "render";
var G__2956_2993 = ((function (G__2954_2991,G__2955_2992,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__2957 = (function (){var G__2960 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__2960) : wrapped_render.call(null,G__2960));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2957,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2957,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(G__2954_2991,G__2955_2992,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__2954_2991,G__2955_2992,G__2956_2993);

if(cljs.core.empty_QMARK_(did_update)){
} else {
var G__2961_2994 = prototype;
var G__2962_2995 = "componentDidUpdate";
var G__2963_2996 = ((function (G__2961_2994,G__2962_2995,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
});})(G__2961_2994,G__2962_2995,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__2961_2994,G__2962_2995,G__2963_2996);
}

if(cljs.core.empty_QMARK_(did_catch)){
} else {
var G__2964_2997 = prototype;
var G__2965_2998 = "componentDidCatch";
var G__2966_2999 = ((function (G__2964_2997,G__2965_2998,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(rum.core.state(this$)),did_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)], 0)));

return this$.forceUpdate();
});})(G__2964_2997,G__2965_2998,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__2964_2997,G__2965_2998,G__2966_2999);
}

var G__2967_3000 = prototype;
var G__2968_3001 = "componentWillUnmount";
var G__2969_3002 = ((function (G__2967_3000,G__2968_3001,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_(will_unmount)){
} else {
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(G__2967_3000,G__2968_3001,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__2967_3000,G__2968_3001,G__2969_3002);

if(cljs.core.empty_QMARK_(child_context)){
} else {
var G__2970_3003 = prototype;
var G__2971_3004 = "getChildContext";
var G__2972_3005 = ((function (G__2970_3003,G__2971_3004,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref(rum.core.state(this$));
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,G__2970_3003,G__2971_3004,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__2935_SHARP_){
return (p1__2935_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__2935_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__2935_SHARP_.call(null,state));
});})(state,this$,G__2970_3003,G__2971_3004,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(G__2970_3003,G__2971_3004,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__2970_3003,G__2971_3004,G__2972_3005);
}

rum.core.extend_BANG_(prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_(ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__3006__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__3006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3007__i = 0, G__3007__a = new Array(arguments.length -  0);
while (G__3007__i < G__3007__a.length) {G__3007__a[G__3007__i] = arguments[G__3007__i + 0]; ++G__3007__i;}
  args = new cljs.core.IndexedSeq(G__3007__a,0,null);
} 
return G__3006__delegate.call(this,args);};
G__3006.cljs$lang$maxFixedArity = 0;
G__3006.cljs$lang$applyTo = (function (arglist__3008){
var args = cljs.core.seq(arglist__3008);
return G__3006__delegate(args);
});
G__3006.cljs$core$IFn$_invoke$arity$variadic = G__3006__delegate;
return G__3006;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__3009__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__3009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3010__i = 0, G__3010__a = new Array(arguments.length -  0);
while (G__3010__i < G__3010__a.length) {G__3010__a[G__3010__i] = arguments[G__3010__i + 0]; ++G__3010__i;}
  args = new cljs.core.IndexedSeq(G__3010__a,0,null);
} 
return G__3009__delegate.call(this,args);};
G__3009.cljs$lang$maxFixedArity = 0;
G__3009.cljs$lang$applyTo = (function (arglist__3011){
var args = cljs.core.seq(arglist__3011);
return G__3009__delegate(args);
});
G__3009.cljs$core$IFn$_invoke$arity$variadic = G__3009__delegate;
return G__3009;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__3012__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__3012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3013__i = 0, G__3013__a = new Array(arguments.length -  0);
while (G__3013__i < G__3013__a.length) {G__3013__a[G__3013__i] = arguments[G__3013__i + 0]; ++G__3013__i;}
  args = new cljs.core.IndexedSeq(G__3013__a,0,null);
} 
return G__3012__delegate.call(this,args);};
G__3012.cljs$lang$maxFixedArity = 0;
G__3012.cljs$lang$applyTo = (function (arglist__3014){
var args = cljs.core.seq(arglist__3014);
return G__3012__delegate(args);
});
G__3012.cljs$core$IFn$_invoke$arity$variadic = G__3012__delegate;
return G__3012;
})()
;})(class$,_))
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__4453__auto__ = (function (){var and__4442__auto__ = (typeof window !== 'undefined');
if(and__4442__auto__){
var or__4453__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
var or__4453__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4453__auto____$1)){
return or__4453__auto____$1;
} else {
var or__4453__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4453__auto____$2)){
return or__4453__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__4442__auto__;
}
})();
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
return ((function (or__4453__auto__){
return (function (p1__3015_SHARP_){
return setTimeout(p1__3015_SHARP_,(16));
});
;})(or__4453__auto__))
}
})();
rum.core.batch = (function (){var or__4453__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
var or__4453__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4453__auto____$1)){
return or__4453__auto____$1;
} else {
return ((function (or__4453__auto____$1,or__4453__auto__){
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
;})(or__4453__auto____$1,or__4453__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__3016 = cljs.core.seq(queue);
var chunk__3018 = null;
var count__3019 = (0);
var i__3020 = (0);
while(true){
if((i__3020 < count__3019)){
var comp = chunk__3018.cljs$core$IIndexed$_nth$arity$2(null,i__3020);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__3022 = seq__3016;
var G__3023 = chunk__3018;
var G__3024 = count__3019;
var G__3025 = (i__3020 + (1));
seq__3016 = G__3022;
chunk__3018 = G__3023;
count__3019 = G__3024;
i__3020 = G__3025;
continue;
} else {
var G__3026 = seq__3016;
var G__3027 = chunk__3018;
var G__3028 = count__3019;
var G__3029 = (i__3020 + (1));
seq__3016 = G__3026;
chunk__3018 = G__3027;
count__3019 = G__3028;
i__3020 = G__3029;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__3016);
if(temp__5457__auto__){
var seq__3016__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__3016__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__3016__$1);
var G__3030 = cljs.core.chunk_rest(seq__3016__$1);
var G__3031 = c__4947__auto__;
var G__3032 = cljs.core.count(c__4947__auto__);
var G__3033 = (0);
seq__3016 = G__3030;
chunk__3018 = G__3031;
count__3019 = G__3032;
i__3020 = G__3033;
continue;
} else {
var comp = cljs.core.first(seq__3016__$1);
if(cljs.core.not(goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__3034 = cljs.core.next(seq__3016__$1);
var G__3035 = null;
var G__3036 = (0);
var G__3037 = (0);
seq__3016 = G__3034;
chunk__3018 = G__3035;
count__3019 = G__3036;
i__3020 = G__3037;
continue;
} else {
var G__3038 = cljs.core.next(seq__3016__$1);
var G__3039 = null;
var G__3040 = (0);
var G__3041 = (0);
seq__3016 = G__3038;
chunk__3018 = G__3039;
count__3019 = G__3040;
i__3020 = G__3041;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref(rum.core.render_queue);
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_(cljs.core.deref(rum.core.render_queue))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return cljs.core._vreset_BANG_(rum.core.render_queue,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Hydrates server rendered DOM tree with provided component.
 */
rum.core.hydrate = (function rum$core$hydrate(component,node){
return ReactDOM.hydrate(component,node);
});
/**
 * Render `component` in a DOM `node` that might be ouside of current DOM hierarchy
 */
rum.core.portal = (function rum$core$portal(component,node){
return ReactDOM.createPortal(component,node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref(state,cljs.core.name(key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__3043 = arguments.length;
switch (G__3043) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
});})(local_state,component))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid());
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_3045 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__3046 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3046,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3046,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__3049_3061 = cljs.core.seq(old_reactions);
var chunk__3050_3062 = null;
var count__3051_3063 = (0);
var i__3052_3064 = (0);
while(true){
if((i__3052_3064 < count__3051_3063)){
var ref_3065 = chunk__3050_3062.cljs$core$IIndexed$_nth$arity$2(null,i__3052_3064);
if(cljs.core.contains_QMARK_(new_reactions,ref_3065)){
} else {
cljs.core.remove_watch(ref_3065,key);
}


var G__3066 = seq__3049_3061;
var G__3067 = chunk__3050_3062;
var G__3068 = count__3051_3063;
var G__3069 = (i__3052_3064 + (1));
seq__3049_3061 = G__3066;
chunk__3050_3062 = G__3067;
count__3051_3063 = G__3068;
i__3052_3064 = G__3069;
continue;
} else {
var temp__5457__auto___3070 = cljs.core.seq(seq__3049_3061);
if(temp__5457__auto___3070){
var seq__3049_3071__$1 = temp__5457__auto___3070;
if(cljs.core.chunked_seq_QMARK_(seq__3049_3071__$1)){
var c__4947__auto___3072 = cljs.core.chunk_first(seq__3049_3071__$1);
var G__3073 = cljs.core.chunk_rest(seq__3049_3071__$1);
var G__3074 = c__4947__auto___3072;
var G__3075 = cljs.core.count(c__4947__auto___3072);
var G__3076 = (0);
seq__3049_3061 = G__3073;
chunk__3050_3062 = G__3074;
count__3051_3063 = G__3075;
i__3052_3064 = G__3076;
continue;
} else {
var ref_3077 = cljs.core.first(seq__3049_3071__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_3077)){
} else {
cljs.core.remove_watch(ref_3077,key);
}


var G__3078 = cljs.core.next(seq__3049_3071__$1);
var G__3079 = null;
var G__3080 = (0);
var G__3081 = (0);
seq__3049_3061 = G__3078;
chunk__3050_3062 = G__3079;
count__3051_3063 = G__3080;
i__3052_3064 = G__3081;
continue;
}
} else {
}
}
break;
}

var seq__3053_3082 = cljs.core.seq(new_reactions);
var chunk__3054_3083 = null;
var count__3055_3084 = (0);
var i__3056_3085 = (0);
while(true){
if((i__3056_3085 < count__3055_3084)){
var ref_3086 = chunk__3054_3083.cljs$core$IIndexed$_nth$arity$2(null,i__3056_3085);
if(cljs.core.contains_QMARK_(old_reactions,ref_3086)){
} else {
cljs.core.add_watch(ref_3086,key,((function (seq__3053_3082,chunk__3054_3083,count__3055_3084,i__3056_3085,ref_3086,comp,old_reactions,vec__3046,dom,next_state,new_reactions,key,_STAR_reactions_STAR_3045){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__3053_3082,chunk__3054_3083,count__3055_3084,i__3056_3085,ref_3086,comp,old_reactions,vec__3046,dom,next_state,new_reactions,key,_STAR_reactions_STAR_3045))
);
}


var G__3087 = seq__3053_3082;
var G__3088 = chunk__3054_3083;
var G__3089 = count__3055_3084;
var G__3090 = (i__3056_3085 + (1));
seq__3053_3082 = G__3087;
chunk__3054_3083 = G__3088;
count__3055_3084 = G__3089;
i__3056_3085 = G__3090;
continue;
} else {
var temp__5457__auto___3091 = cljs.core.seq(seq__3053_3082);
if(temp__5457__auto___3091){
var seq__3053_3092__$1 = temp__5457__auto___3091;
if(cljs.core.chunked_seq_QMARK_(seq__3053_3092__$1)){
var c__4947__auto___3093 = cljs.core.chunk_first(seq__3053_3092__$1);
var G__3094 = cljs.core.chunk_rest(seq__3053_3092__$1);
var G__3095 = c__4947__auto___3093;
var G__3096 = cljs.core.count(c__4947__auto___3093);
var G__3097 = (0);
seq__3053_3082 = G__3094;
chunk__3054_3083 = G__3095;
count__3055_3084 = G__3096;
i__3056_3085 = G__3097;
continue;
} else {
var ref_3098 = cljs.core.first(seq__3053_3092__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_3098)){
} else {
cljs.core.add_watch(ref_3098,key,((function (seq__3053_3082,chunk__3054_3083,count__3055_3084,i__3056_3085,ref_3098,seq__3053_3092__$1,temp__5457__auto___3091,comp,old_reactions,vec__3046,dom,next_state,new_reactions,key,_STAR_reactions_STAR_3045){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__3053_3082,chunk__3054_3083,count__3055_3084,i__3056_3085,ref_3098,seq__3053_3092__$1,temp__5457__auto___3091,comp,old_reactions,vec__3046,dom,next_state,new_reactions,key,_STAR_reactions_STAR_3045))
);
}


var G__3099 = cljs.core.next(seq__3053_3092__$1);
var G__3100 = null;
var G__3101 = (0);
var G__3102 = (0);
seq__3053_3082 = G__3099;
chunk__3054_3083 = G__3100;
count__3055_3084 = G__3101;
i__3056_3085 = G__3102;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_3045;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_3103 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__3057_3104 = cljs.core.seq(new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__3058_3105 = null;
var count__3059_3106 = (0);
var i__3060_3107 = (0);
while(true){
if((i__3060_3107 < count__3059_3106)){
var ref_3108 = chunk__3058_3105.cljs$core$IIndexed$_nth$arity$2(null,i__3060_3107);
cljs.core.remove_watch(ref_3108,key_3103);


var G__3109 = seq__3057_3104;
var G__3110 = chunk__3058_3105;
var G__3111 = count__3059_3106;
var G__3112 = (i__3060_3107 + (1));
seq__3057_3104 = G__3109;
chunk__3058_3105 = G__3110;
count__3059_3106 = G__3111;
i__3060_3107 = G__3112;
continue;
} else {
var temp__5457__auto___3113 = cljs.core.seq(seq__3057_3104);
if(temp__5457__auto___3113){
var seq__3057_3114__$1 = temp__5457__auto___3113;
if(cljs.core.chunked_seq_QMARK_(seq__3057_3114__$1)){
var c__4947__auto___3115 = cljs.core.chunk_first(seq__3057_3114__$1);
var G__3116 = cljs.core.chunk_rest(seq__3057_3114__$1);
var G__3117 = c__4947__auto___3115;
var G__3118 = cljs.core.count(c__4947__auto___3115);
var G__3119 = (0);
seq__3057_3104 = G__3116;
chunk__3058_3105 = G__3117;
count__3059_3106 = G__3118;
i__3060_3107 = G__3119;
continue;
} else {
var ref_3120 = cljs.core.first(seq__3057_3114__$1);
cljs.core.remove_watch(ref_3120,key_3103);


var G__3121 = cljs.core.next(seq__3057_3114__$1);
var G__3122 = null;
var G__3123 = (0);
var G__3124 = (0);
seq__3057_3104 = G__3121;
chunk__3058_3105 = G__3122;
count__3059_3106 = G__3123;
i__3060_3107 = G__3124;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142)], 0));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref(ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3131 = arguments.length;
var i__5144__auto___3132 = (0);
while(true){
if((i__5144__auto___3132 < len__5143__auto___3131)){
args__5146__auto__.push((arguments[i__5144__auto___3132]));

var G__3133 = (i__5144__auto___3132 + (1));
i__5144__auto___3132 = G__3133;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((2) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5147__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__3128){
var map__3129 = p__3128;
var map__3129__$1 = ((((!((map__3129 == null)))?(((((map__3129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__3129):map__3129);
var options = map__3129__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq3125){
var G__3126 = cljs.core.first(seq3125);
var seq3125__$1 = cljs.core.next(seq3125);
var G__3127 = cljs.core.first(seq3125__$1);
var seq3125__$2 = cljs.core.next(seq3125__$1);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3126,G__3127,seq3125__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
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

var argseq__5147__auto__ = ((((2) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5147__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq3134){
var G__3135 = cljs.core.first(seq3134);
var seq3134__$1 = cljs.core.next(seq3134);
var G__3136 = cljs.core.first(seq3134__$1);
var seq3134__$2 = cljs.core.next(seq3134__$1);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3135,G__3136,seq3134__$2);
});


//# sourceMappingURL=rum.core.js.map
