goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5146__auto__ = [];
var len__5143__auto___14132 = arguments.length;
var i__5144__auto___14133 = (0);
while(true){
if((i__5144__auto___14133 < len__5143__auto___14132)){
args__5146__auto__.push((arguments[i__5144__auto___14133]));

var G__14134 = (i__5144__auto___14133 + (1));
i__5144__auto___14133 = G__14134;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((1) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5147__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq14130){
var G__14131 = cljs.core.first(seq14130);
var seq14130__$1 = cljs.core.next(seq14130);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14131,seq14130__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__14135){
var map__14136 = p__14135;
var map__14136__$1 = ((((!((map__14136 == null)))?(((((map__14136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14136):map__14136);
var src = map__14136__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14136__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14136__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4453__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4453__auto__){
return or__4453__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__14138 = cljs.core.seq(sources);
var chunk__14139 = null;
var count__14140 = (0);
var i__14141 = (0);
while(true){
if((i__14141 < count__14140)){
var map__14142 = chunk__14139.cljs$core$IIndexed$_nth$arity$2(null,i__14141);
var map__14142__$1 = ((((!((map__14142 == null)))?(((((map__14142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14142):map__14142);
var src = map__14142__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14142__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14142__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14142__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14142__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__14146 = seq__14138;
var G__14147 = chunk__14139;
var G__14148 = count__14140;
var G__14149 = (i__14141 + (1));
seq__14138 = G__14146;
chunk__14139 = G__14147;
count__14140 = G__14148;
i__14141 = G__14149;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14138);
if(temp__5457__auto__){
var seq__14138__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14138__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__14138__$1);
var G__14150 = cljs.core.chunk_rest(seq__14138__$1);
var G__14151 = c__4947__auto__;
var G__14152 = cljs.core.count(c__4947__auto__);
var G__14153 = (0);
seq__14138 = G__14150;
chunk__14139 = G__14151;
count__14140 = G__14152;
i__14141 = G__14153;
continue;
} else {
var map__14144 = cljs.core.first(seq__14138__$1);
var map__14144__$1 = ((((!((map__14144 == null)))?(((((map__14144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14144):map__14144);
var src = map__14144__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14144__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14144__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14144__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14144__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__14154 = cljs.core.next(seq__14138__$1);
var G__14155 = null;
var G__14156 = (0);
var G__14157 = (0);
seq__14138 = G__14154;
chunk__14139 = G__14155;
count__14140 = G__14156;
i__14141 = G__14157;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__14158 = cljs.core.seq(js_requires);
var chunk__14159 = null;
var count__14160 = (0);
var i__14161 = (0);
while(true){
if((i__14161 < count__14160)){
var js_ns = chunk__14159.cljs$core$IIndexed$_nth$arity$2(null,i__14161);
var require_str_14162 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_14162);


var G__14163 = seq__14158;
var G__14164 = chunk__14159;
var G__14165 = count__14160;
var G__14166 = (i__14161 + (1));
seq__14158 = G__14163;
chunk__14159 = G__14164;
count__14160 = G__14165;
i__14161 = G__14166;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14158);
if(temp__5457__auto__){
var seq__14158__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14158__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__14158__$1);
var G__14167 = cljs.core.chunk_rest(seq__14158__$1);
var G__14168 = c__4947__auto__;
var G__14169 = cljs.core.count(c__4947__auto__);
var G__14170 = (0);
seq__14158 = G__14167;
chunk__14159 = G__14168;
count__14160 = G__14169;
i__14161 = G__14170;
continue;
} else {
var js_ns = cljs.core.first(seq__14158__$1);
var require_str_14171 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_14171);


var G__14172 = cljs.core.next(seq__14158__$1);
var G__14173 = null;
var G__14174 = (0);
var G__14175 = (0);
seq__14158 = G__14172;
chunk__14159 = G__14173;
count__14160 = G__14174;
i__14161 = G__14175;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__14176 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__14176) : callback.call(null,G__14176));
} else {
var G__14177 = shadow.cljs.devtools.client.env.files_url();
var G__14178 = ((function (G__14177){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__14177))
;
var G__14179 = "POST";
var G__14180 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__14181 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__14177,G__14178,G__14179,G__14180,G__14181);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__14183){
var map__14184 = p__14183;
var map__14184__$1 = ((((!((map__14184 == null)))?(((((map__14184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14184):map__14184);
var msg = map__14184__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14184__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14184__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__14186 = info;
var map__14186__$1 = ((((!((map__14186 == null)))?(((((map__14186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14186):map__14186);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14186__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14186__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4902__auto__ = ((function (map__14186,map__14186__$1,sources,compiled,map__14184,map__14184__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__14188(s__14189){
return (new cljs.core.LazySeq(null,((function (map__14186,map__14186__$1,sources,compiled,map__14184,map__14184__$1,msg,info,reload_info){
return (function (){
var s__14189__$1 = s__14189;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14189__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__14194 = cljs.core.first(xs__6012__auto__);
var map__14194__$1 = ((((!((map__14194 == null)))?(((((map__14194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14194):map__14194);
var src = map__14194__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14194__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14194__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4898__auto__ = ((function (s__14189__$1,map__14194,map__14194__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__14186,map__14186__$1,sources,compiled,map__14184,map__14184__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__14188_$_iter__14190(s__14191){
return (new cljs.core.LazySeq(null,((function (s__14189__$1,map__14194,map__14194__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__14186,map__14186__$1,sources,compiled,map__14184,map__14184__$1,msg,info,reload_info){
return (function (){
var s__14191__$1 = s__14191;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__14191__$1);
if(temp__5457__auto____$1){
var s__14191__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__14191__$2)){
var c__4900__auto__ = cljs.core.chunk_first(s__14191__$2);
var size__4901__auto__ = cljs.core.count(c__4900__auto__);
var b__14193 = cljs.core.chunk_buffer(size__4901__auto__);
if((function (){var i__14192 = (0);
while(true){
if((i__14192 < size__4901__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4900__auto__,i__14192);
cljs.core.chunk_append(b__14193,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__14213 = (i__14192 + (1));
i__14192 = G__14213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14193),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__14188_$_iter__14190(cljs.core.chunk_rest(s__14191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14193),null);
}
} else {
var warning = cljs.core.first(s__14191__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__14188_$_iter__14190(cljs.core.rest(s__14191__$2)));
}
} else {
return null;
}
break;
}
});})(s__14189__$1,map__14194,map__14194__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__14186,map__14186__$1,sources,compiled,map__14184,map__14184__$1,msg,info,reload_info))
,null,null));
});})(s__14189__$1,map__14194,map__14194__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__14186,map__14186__$1,sources,compiled,map__14184,map__14184__$1,msg,info,reload_info))
;
var fs__4899__auto__ = cljs.core.seq(iterys__4898__auto__(warnings));
if(fs__4899__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4899__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__14188(cljs.core.rest(s__14189__$1)));
} else {
var G__14214 = cljs.core.rest(s__14189__$1);
s__14189__$1 = G__14214;
continue;
}
} else {
var G__14215 = cljs.core.rest(s__14189__$1);
s__14189__$1 = G__14215;
continue;
}
} else {
return null;
}
break;
}
});})(map__14186,map__14186__$1,sources,compiled,map__14184,map__14184__$1,msg,info,reload_info))
,null,null));
});})(map__14186,map__14186__$1,sources,compiled,map__14184,map__14184__$1,msg,info,reload_info))
;
return iter__4902__auto__(sources);
})()));
var seq__14196_14216 = cljs.core.seq(warnings);
var chunk__14197_14217 = null;
var count__14198_14218 = (0);
var i__14199_14219 = (0);
while(true){
if((i__14199_14219 < count__14198_14218)){
var map__14200_14220 = chunk__14197_14217.cljs$core$IIndexed$_nth$arity$2(null,i__14199_14219);
var map__14200_14221__$1 = ((((!((map__14200_14220 == null)))?(((((map__14200_14220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14200_14220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14200_14220):map__14200_14220);
var w_14222 = map__14200_14221__$1;
var msg_14223__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14200_14221__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_14224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14200_14221__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_14225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14200_14221__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_14226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14200_14221__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_14226)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14224),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_14225),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_14223__$1)].join(''));


var G__14227 = seq__14196_14216;
var G__14228 = chunk__14197_14217;
var G__14229 = count__14198_14218;
var G__14230 = (i__14199_14219 + (1));
seq__14196_14216 = G__14227;
chunk__14197_14217 = G__14228;
count__14198_14218 = G__14229;
i__14199_14219 = G__14230;
continue;
} else {
var temp__5457__auto___14231 = cljs.core.seq(seq__14196_14216);
if(temp__5457__auto___14231){
var seq__14196_14232__$1 = temp__5457__auto___14231;
if(cljs.core.chunked_seq_QMARK_(seq__14196_14232__$1)){
var c__4947__auto___14233 = cljs.core.chunk_first(seq__14196_14232__$1);
var G__14234 = cljs.core.chunk_rest(seq__14196_14232__$1);
var G__14235 = c__4947__auto___14233;
var G__14236 = cljs.core.count(c__4947__auto___14233);
var G__14237 = (0);
seq__14196_14216 = G__14234;
chunk__14197_14217 = G__14235;
count__14198_14218 = G__14236;
i__14199_14219 = G__14237;
continue;
} else {
var map__14202_14238 = cljs.core.first(seq__14196_14232__$1);
var map__14202_14239__$1 = ((((!((map__14202_14238 == null)))?(((((map__14202_14238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14202_14238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14202_14238):map__14202_14238);
var w_14240 = map__14202_14239__$1;
var msg_14241__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14202_14239__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_14242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14202_14239__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_14243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14202_14239__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_14244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14202_14239__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_14244)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14242),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_14243),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_14241__$1)].join(''));


var G__14245 = cljs.core.next(seq__14196_14232__$1);
var G__14246 = null;
var G__14247 = (0);
var G__14248 = (0);
seq__14196_14216 = G__14245;
chunk__14197_14217 = G__14246;
count__14198_14218 = G__14247;
i__14199_14219 = G__14248;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__14186,map__14186__$1,sources,compiled,warnings,map__14184,map__14184__$1,msg,info,reload_info){
return (function (p__14204){
var map__14205 = p__14204;
var map__14205__$1 = ((((!((map__14205 == null)))?(((((map__14205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14205):map__14205);
var src = map__14205__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14205__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14205__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__14186,map__14186__$1,sources,compiled,warnings,map__14184,map__14184__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__14186,map__14186__$1,sources,compiled,warnings,map__14184,map__14184__$1,msg,info,reload_info){
return (function (p__14207){
var map__14208 = p__14207;
var map__14208__$1 = ((((!((map__14208 == null)))?(((((map__14208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14208):map__14208);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14208__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__14186,map__14186__$1,sources,compiled,warnings,map__14184,map__14184__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__14186,map__14186__$1,sources,compiled,warnings,map__14184,map__14184__$1,msg,info,reload_info){
return (function (p__14210){
var map__14211 = p__14210;
var map__14211__$1 = ((((!((map__14211 == null)))?(((((map__14211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14211):map__14211);
var rc = map__14211__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14211__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__4453__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__4453__auto__){
return or__4453__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__14186,map__14186__$1,sources,compiled,warnings,map__14184,map__14184__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__14186,map__14186__$1,sources,compiled,warnings,map__14184,map__14184__$1,msg,info,reload_info){
return (function (p1__14182_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__14182_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__14186,map__14186__$1,sources,compiled,warnings,map__14184,map__14184__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__14249){
var map__14250 = p__14249;
var map__14250__$1 = ((((!((map__14250 == null)))?(((((map__14250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14250):map__14250);
var msg = map__14250__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14250__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__14252 = cljs.core.seq(updates);
var chunk__14254 = null;
var count__14255 = (0);
var i__14256 = (0);
while(true){
if((i__14256 < count__14255)){
var path = chunk__14254.cljs$core$IIndexed$_nth$arity$2(null,i__14256);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__14258_14282 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__14261_14283 = null;
var count__14262_14284 = (0);
var i__14263_14285 = (0);
while(true){
if((i__14263_14285 < count__14262_14284)){
var node_14286 = chunk__14261_14283.cljs$core$IIndexed$_nth$arity$2(null,i__14263_14285);
var node_uri_14287 = (function (){var G__14266 = node_14286.getAttribute("href");
return goog.Uri.parse(G__14266);
})();
var node_uri_resolved_14288 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_14287);
var node_abs_14289 = node_uri_resolved_14288.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_14287))) || (cljs.core.not(node_uri_14287.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_14289,path)))){
var new_link_14290 = (function (){var G__14267 = node_14286.cloneNode(true);
G__14267.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__14267;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_14290,node_14286);

goog.dom.removeNode(node_14286);


var G__14291 = seq__14258_14282;
var G__14292 = chunk__14261_14283;
var G__14293 = count__14262_14284;
var G__14294 = (i__14263_14285 + (1));
seq__14258_14282 = G__14291;
chunk__14261_14283 = G__14292;
count__14262_14284 = G__14293;
i__14263_14285 = G__14294;
continue;
} else {
var G__14295 = seq__14258_14282;
var G__14296 = chunk__14261_14283;
var G__14297 = count__14262_14284;
var G__14298 = (i__14263_14285 + (1));
seq__14258_14282 = G__14295;
chunk__14261_14283 = G__14296;
count__14262_14284 = G__14297;
i__14263_14285 = G__14298;
continue;
}
} else {
var temp__5457__auto___14299 = cljs.core.seq(seq__14258_14282);
if(temp__5457__auto___14299){
var seq__14258_14300__$1 = temp__5457__auto___14299;
if(cljs.core.chunked_seq_QMARK_(seq__14258_14300__$1)){
var c__4947__auto___14301 = cljs.core.chunk_first(seq__14258_14300__$1);
var G__14302 = cljs.core.chunk_rest(seq__14258_14300__$1);
var G__14303 = c__4947__auto___14301;
var G__14304 = cljs.core.count(c__4947__auto___14301);
var G__14305 = (0);
seq__14258_14282 = G__14302;
chunk__14261_14283 = G__14303;
count__14262_14284 = G__14304;
i__14263_14285 = G__14305;
continue;
} else {
var node_14306 = cljs.core.first(seq__14258_14300__$1);
var node_uri_14307 = (function (){var G__14268 = node_14306.getAttribute("href");
return goog.Uri.parse(G__14268);
})();
var node_uri_resolved_14308 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_14307);
var node_abs_14309 = node_uri_resolved_14308.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_14307))) || (cljs.core.not(node_uri_14307.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_14309,path)))){
var new_link_14310 = (function (){var G__14269 = node_14306.cloneNode(true);
G__14269.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__14269;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_14310,node_14306);

goog.dom.removeNode(node_14306);


var G__14311 = cljs.core.next(seq__14258_14300__$1);
var G__14312 = null;
var G__14313 = (0);
var G__14314 = (0);
seq__14258_14282 = G__14311;
chunk__14261_14283 = G__14312;
count__14262_14284 = G__14313;
i__14263_14285 = G__14314;
continue;
} else {
var G__14315 = cljs.core.next(seq__14258_14300__$1);
var G__14316 = null;
var G__14317 = (0);
var G__14318 = (0);
seq__14258_14282 = G__14315;
chunk__14261_14283 = G__14316;
count__14262_14284 = G__14317;
i__14263_14285 = G__14318;
continue;
}
}
} else {
}
}
break;
}


var G__14319 = seq__14252;
var G__14320 = chunk__14254;
var G__14321 = count__14255;
var G__14322 = (i__14256 + (1));
seq__14252 = G__14319;
chunk__14254 = G__14320;
count__14255 = G__14321;
i__14256 = G__14322;
continue;
} else {
var G__14323 = seq__14252;
var G__14324 = chunk__14254;
var G__14325 = count__14255;
var G__14326 = (i__14256 + (1));
seq__14252 = G__14323;
chunk__14254 = G__14324;
count__14255 = G__14325;
i__14256 = G__14326;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14252);
if(temp__5457__auto__){
var seq__14252__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14252__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__14252__$1);
var G__14327 = cljs.core.chunk_rest(seq__14252__$1);
var G__14328 = c__4947__auto__;
var G__14329 = cljs.core.count(c__4947__auto__);
var G__14330 = (0);
seq__14252 = G__14327;
chunk__14254 = G__14328;
count__14255 = G__14329;
i__14256 = G__14330;
continue;
} else {
var path = cljs.core.first(seq__14252__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__14270_14331 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__14273_14332 = null;
var count__14274_14333 = (0);
var i__14275_14334 = (0);
while(true){
if((i__14275_14334 < count__14274_14333)){
var node_14335 = chunk__14273_14332.cljs$core$IIndexed$_nth$arity$2(null,i__14275_14334);
var node_uri_14336 = (function (){var G__14278 = node_14335.getAttribute("href");
return goog.Uri.parse(G__14278);
})();
var node_uri_resolved_14337 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_14336);
var node_abs_14338 = node_uri_resolved_14337.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_14336))) || (cljs.core.not(node_uri_14336.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_14338,path)))){
var new_link_14339 = (function (){var G__14279 = node_14335.cloneNode(true);
G__14279.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__14279;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_14339,node_14335);

goog.dom.removeNode(node_14335);


var G__14340 = seq__14270_14331;
var G__14341 = chunk__14273_14332;
var G__14342 = count__14274_14333;
var G__14343 = (i__14275_14334 + (1));
seq__14270_14331 = G__14340;
chunk__14273_14332 = G__14341;
count__14274_14333 = G__14342;
i__14275_14334 = G__14343;
continue;
} else {
var G__14344 = seq__14270_14331;
var G__14345 = chunk__14273_14332;
var G__14346 = count__14274_14333;
var G__14347 = (i__14275_14334 + (1));
seq__14270_14331 = G__14344;
chunk__14273_14332 = G__14345;
count__14274_14333 = G__14346;
i__14275_14334 = G__14347;
continue;
}
} else {
var temp__5457__auto___14348__$1 = cljs.core.seq(seq__14270_14331);
if(temp__5457__auto___14348__$1){
var seq__14270_14349__$1 = temp__5457__auto___14348__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14270_14349__$1)){
var c__4947__auto___14350 = cljs.core.chunk_first(seq__14270_14349__$1);
var G__14351 = cljs.core.chunk_rest(seq__14270_14349__$1);
var G__14352 = c__4947__auto___14350;
var G__14353 = cljs.core.count(c__4947__auto___14350);
var G__14354 = (0);
seq__14270_14331 = G__14351;
chunk__14273_14332 = G__14352;
count__14274_14333 = G__14353;
i__14275_14334 = G__14354;
continue;
} else {
var node_14355 = cljs.core.first(seq__14270_14349__$1);
var node_uri_14356 = (function (){var G__14280 = node_14355.getAttribute("href");
return goog.Uri.parse(G__14280);
})();
var node_uri_resolved_14357 = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri_14356);
var node_abs_14358 = node_uri_resolved_14357.getPath();
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri_14356))) || (cljs.core.not(node_uri_14356.hasDomain())))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs_14358,path)))){
var new_link_14359 = (function (){var G__14281 = node_14355.cloneNode(true);
G__14281.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__14281;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_14359,node_14355);

goog.dom.removeNode(node_14355);


var G__14360 = cljs.core.next(seq__14270_14349__$1);
var G__14361 = null;
var G__14362 = (0);
var G__14363 = (0);
seq__14270_14331 = G__14360;
chunk__14273_14332 = G__14361;
count__14274_14333 = G__14362;
i__14275_14334 = G__14363;
continue;
} else {
var G__14364 = cljs.core.next(seq__14270_14349__$1);
var G__14365 = null;
var G__14366 = (0);
var G__14367 = (0);
seq__14270_14331 = G__14364;
chunk__14273_14332 = G__14365;
count__14274_14333 = G__14366;
i__14275_14334 = G__14367;
continue;
}
}
} else {
}
}
break;
}


var G__14368 = cljs.core.next(seq__14252__$1);
var G__14369 = null;
var G__14370 = (0);
var G__14371 = (0);
seq__14252 = G__14368;
chunk__14254 = G__14369;
count__14255 = G__14370;
i__14256 = G__14371;
continue;
} else {
var G__14372 = cljs.core.next(seq__14252__$1);
var G__14373 = null;
var G__14374 = (0);
var G__14375 = (0);
seq__14252 = G__14372;
chunk__14254 = G__14373;
count__14255 = G__14374;
i__14256 = G__14375;
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
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__14376){
var map__14377 = p__14376;
var map__14377__$1 = ((((!((map__14377 == null)))?(((((map__14377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14377):map__14377);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14377__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14377__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__14377,map__14377__$1,id,js){
return (function (){
return eval(js);
});})(map__14377,map__14377__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__14379){
var map__14380 = p__14379;
var map__14380__$1 = ((((!((map__14380 == null)))?(((((map__14380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14380):map__14380);
var msg = map__14380__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14380__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14380__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14380__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14380__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__14380,map__14380__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__14382){
var map__14383 = p__14382;
var map__14383__$1 = ((((!((map__14383 == null)))?(((((map__14383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14383):map__14383);
var src = map__14383__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14383__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4442__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4442__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4442__auto__;
}
});})(map__14380,map__14380__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__14380,map__14380__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__14380,map__14380__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__14385){
var map__14386 = p__14385;
var map__14386__$1 = ((((!((map__14386 == null)))?(((((map__14386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14386):map__14386);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14386__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14386__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__14386,map__14386__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__14386,map__14386__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__14388){
var map__14389 = p__14388;
var map__14389__$1 = ((((!((map__14389 == null)))?(((((map__14389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14389):map__14389);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14389__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14389__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__14391){
var map__14392 = p__14391;
var map__14392__$1 = ((((!((map__14392 == null)))?(((((map__14392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14392):map__14392);
var msg = map__14392__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14392__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__14394 = type;
var G__14394__$1 = (((G__14394 instanceof cljs.core.Keyword))?G__14394.fqn:null);
switch (G__14394__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__14396 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__14397 = ((function (G__14396){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__14396))
;
var G__14398 = "POST";
var G__14399 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__14400 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__14396,G__14397,G__14398,G__14399,G__14400);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4453__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e14401){var e = e14401;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___14402 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___14402)){
var s_14403 = temp__5457__auto___14402;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_14403.onclose = ((function (s_14403,temp__5457__auto___14402){
return (function (e){
return null;
});})(s_14403,temp__5457__auto___14402))
;

s_14403.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
