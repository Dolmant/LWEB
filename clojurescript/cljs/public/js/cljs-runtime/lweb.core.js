goog.provide('lweb.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('secretary.core');
goog.require('accountant.core');
goog.require('lweb.App');
goog.require('cljs_react_material_ui.core');
cljs.core.enable_console_print_BANG_();
lweb.core.onClick = (function lweb$core$onClick(){
return console.log("hello");
});
lweb.core.waitForImages = (function lweb$core$waitForImages(hydrated_QMARK_){
lweb.core.blockerImages = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/assets/webImages/CRISPR.jpg"], null);

var loadCount = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
lweb.core.onLoad = ((function (loadCount){
return (function lweb$core$waitForImages_$_onLoad(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loadCount,cljs.core.inc);

if((cljs.core.deref(loadCount) >= cljs.core.count(lweb.core.blockerImages))){
document.getElementById("html").className = "";

if(cljs.core.truth_(hydrated_QMARK_)){
return particlesJS("introImage","./assets/particlesBusted.json",lweb.core.onClick);
} else {
return null;
}
} else {
return null;
}
});})(loadCount))
;

lweb.core.attachLoader = ((function (loadCount){
return (function lweb$core$waitForImages_$_attachLoader(src){
lweb.core.img = (new Image());

lweb.core.img.onload = lweb.core.onLoad;

lweb.core.img.src = src;

if(cljs.core.truth_(lweb.core.img.complete)){
return lweb.core.onLoad();
} else {
return null;
}
});})(loadCount))
;

var seq__7192 = cljs.core.seq(lweb.core.blockerImages);
var chunk__7193 = null;
var count__7194 = (0);
var i__7195 = (0);
while(true){
if((i__7195 < count__7194)){
var src = chunk__7193.cljs$core$IIndexed$_nth$arity$2(null,i__7195);
lweb.core.attachLoader(src);


var G__7196 = seq__7192;
var G__7197 = chunk__7193;
var G__7198 = count__7194;
var G__7199 = (i__7195 + (1));
seq__7192 = G__7196;
chunk__7193 = G__7197;
count__7194 = G__7198;
i__7195 = G__7199;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7192);
if(temp__5457__auto__){
var seq__7192__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7192__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__7192__$1);
var G__7200 = cljs.core.chunk_rest(seq__7192__$1);
var G__7201 = c__4947__auto__;
var G__7202 = cljs.core.count(c__4947__auto__);
var G__7203 = (0);
seq__7192 = G__7200;
chunk__7193 = G__7201;
count__7194 = G__7202;
i__7195 = G__7203;
continue;
} else {
var src = cljs.core.first(seq__7192__$1);
lweb.core.attachLoader(src);


var G__7204 = cljs.core.next(seq__7192__$1);
var G__7205 = null;
var G__7206 = (0);
var G__7207 = (0);
seq__7192 = G__7204;
chunk__7193 = G__7205;
count__7194 = G__7206;
i__7195 = G__7207;
continue;
}
} else {
return null;
}
}
break;
}
});
lweb.core.home_page = rum.core.build_defc((function (){
lweb.core.onClick();

return React.createElement("div",null,React.createElement("h2",null,"Welcome to lweb"),React.createElement("div",null,sablono.interpreter.interpret(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lweb.App.App.cljs$core$IFn$_invoke$arity$0 ? lweb.App.App.cljs$core$IFn$_invoke$arity$0() : lweb.App.App.call(null))], null))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"home-page");
if((typeof lweb !== 'undefined') && (typeof lweb.core !== 'undefined') && (typeof lweb.core.page !== 'undefined')){
} else {
lweb.core.page = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Var(function(){return lweb.core.home_page;},new cljs.core.Symbol("lweb.core","home-page","lweb.core/home-page",1781523662,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lweb.core","lweb.core",2058329327,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"lweb/core.cljs",20,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(lweb.core.home_page)?lweb.core.home_page.cljs$lang$test:null)])));
}
lweb.core.current_page = rum.core.build_defc((function (){
return sablono.interpreter.interpret(cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__7210 = cljs.core.deref(lweb.core.page);
return (fexpr__7210.cljs$core$IFn$_invoke$arity$0 ? fexpr__7210.cljs$core$IFn$_invoke$arity$0() : fexpr__7210.call(null));
})()], null)], 0)));
}),null,"current-page");
var action__2481__auto___7216 = (function (params__2482__auto__){
if(cljs.core.map_QMARK_(params__2482__auto__)){
var map__7211 = params__2482__auto__;
var map__7211__$1 = ((((!((map__7211 == null)))?(((((map__7211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7211):map__7211);
return cljs.core.reset_BANG_(lweb.core.page,new cljs.core.Var(function(){return lweb.core.home_page;},new cljs.core.Symbol("lweb.core","home-page","lweb.core/home-page",1781523662,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lweb.core","lweb.core",2058329327,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"lweb/core.cljs",20,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(lweb.core.home_page)?lweb.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_(params__2482__auto__)){
var vec__7213 = params__2482__auto__;
return cljs.core.reset_BANG_(lweb.core.page,new cljs.core.Var(function(){return lweb.core.home_page;},new cljs.core.Symbol("lweb.core","home-page","lweb.core/home-page",1781523662,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lweb.core","lweb.core",2058329327,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"lweb/core.cljs",20,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(lweb.core.home_page)?lweb.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/*",action__2481__auto___7216);

lweb.core.mountRoot = (function lweb$core$mountRoot(){
lweb.core.targetElement = document.getElementById("app");

if(cljs.core.truth_(lweb.core.targetElement.hasChildNodes())){
console.log("hydrated");

rum.core.hydrate((lweb.core.current_page.cljs$core$IFn$_invoke$arity$0 ? lweb.core.current_page.cljs$core$IFn$_invoke$arity$0() : lweb.core.current_page.call(null)),lweb.core.targetElement);

return lweb.core.waitForImages(true);
} else {
console.log("rendered");

rum.core.mount((lweb.core.current_page.cljs$core$IFn$_invoke$arity$0 ? lweb.core.current_page.cljs$core$IFn$_invoke$arity$0() : lweb.core.current_page.call(null)),lweb.core.targetElement);

return lweb.core.waitForImages(false);
}
});
lweb.core.init_BANG_ = (function lweb$core$init_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_(path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route(path);
})], null));

accountant.core.dispatch_current_BANG_();

return lweb.core.mountRoot();
});

//# sourceMappingURL=lweb.core.js.map
