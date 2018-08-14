goog.provide('lweb.App');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('lweb.DynamicReact.State');
goog.require('lweb.DynamicReact.Intro');
goog.require('lweb.DynamicReact.Footer');
lweb.App.App = rum.core.build_defc((function (){
lweb.App.overlay = (function (){var G__7189 = new cljs.core.Keyword(null,"overlay","overlay",-139131598);
var fexpr__7188 = rum.core.react(lweb.DynamicReact.State.State);
return (fexpr__7188.cljs$core$IFn$_invoke$arity$1 ? fexpr__7188.cljs$core$IFn$_invoke$arity$1(G__7189) : fexpr__7188.call(null,G__7189));
})();

return React.createElement("div",null,(function (){var attrs7190 = (lweb.DynamicReact.Intro.Intro.cljs$core$IFn$_invoke$arity$0 ? lweb.DynamicReact.Intro.Intro.cljs$core$IFn$_invoke$arity$0() : lweb.DynamicReact.Intro.Intro.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs7190))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"intro",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["intro"], null)], null),attrs7190], 0))):({"id": "intro", "className": "intro"})),((cljs.core.map_QMARK_(attrs7190))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs7190)], null)));
})(),(function (){var attrs7191 = (lweb.DynamicReact.Footer.Footer.cljs$core$IFn$_invoke$arity$0 ? lweb.DynamicReact.Footer.Footer.cljs$core$IFn$_invoke$arity$0() : lweb.DynamicReact.Footer.Footer.call(null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs7191))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"footer",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["footer"], null)], null),attrs7191], 0))):({"id": "footer", "className": "footer"})),((cljs.core.map_QMARK_(attrs7191))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs7191)], null)));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"App");

//# sourceMappingURL=lweb.App.js.map
