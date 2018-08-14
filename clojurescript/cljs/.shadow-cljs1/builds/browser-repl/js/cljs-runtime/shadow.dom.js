goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto__.call(null,this$));
} else {
var m__4798__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto__.call(null,this$));
} else {
var m__4798__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__12678 = coll;
var G__12679 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__12678,G__12679) : shadow.dom.lazy_native_coll_seq.call(null,G__12678,G__12679));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4453__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__12692 = arguments.length;
switch (G__12692) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__12695 = arguments.length;
switch (G__12695) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__12698 = arguments.length;
switch (G__12698) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__12701 = arguments.length;
switch (G__12701) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__12704 = arguments.length;
switch (G__12704) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__12705 = document;
var G__12706 = shadow.dom.dom_node(el);
return goog.dom.contains(G__12705,G__12706);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__12707 = shadow.dom.dom_node(parent);
var G__12708 = shadow.dom.dom_node(el);
return goog.dom.contains(G__12707,G__12708);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__12710 = shadow.dom.dom_node(el);
var G__12711 = cls;
return goog.dom.classlist.add(G__12710,G__12711);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__12712 = shadow.dom.dom_node(el);
var G__12713 = cls;
return goog.dom.classlist.remove(G__12712,G__12713);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__12715 = arguments.length;
switch (G__12715) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__12716 = shadow.dom.dom_node(el);
var G__12717 = cls;
return goog.dom.classlist.toggle(G__12716,G__12717);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4453__auto__ = !((typeof document !== 'undefined'));
if(or__4453__auto__){
return or__4453__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e12719){if((e12719 instanceof Object)){
var e = e12719;
return console.log("didnt support attachEvent",el,e);
} else {
throw e12719;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4453__auto__ = !((typeof document !== 'undefined'));
if(or__4453__auto__){
return or__4453__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__12720 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__12721 = null;
var count__12722 = (0);
var i__12723 = (0);
while(true){
if((i__12723 < count__12722)){
var el = chunk__12721.cljs$core$IIndexed$_nth$arity$2(null,i__12723);
var handler_12730__$1 = ((function (seq__12720,chunk__12721,count__12722,i__12723,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__12720,chunk__12721,count__12722,i__12723,el))
;
var G__12724_12731 = el;
var G__12725_12732 = cljs.core.name(ev);
var G__12726_12733 = handler_12730__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__12724_12731,G__12725_12732,G__12726_12733) : shadow.dom.dom_listen.call(null,G__12724_12731,G__12725_12732,G__12726_12733));


var G__12734 = seq__12720;
var G__12735 = chunk__12721;
var G__12736 = count__12722;
var G__12737 = (i__12723 + (1));
seq__12720 = G__12734;
chunk__12721 = G__12735;
count__12722 = G__12736;
i__12723 = G__12737;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12720);
if(temp__5457__auto__){
var seq__12720__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12720__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__12720__$1);
var G__12738 = cljs.core.chunk_rest(seq__12720__$1);
var G__12739 = c__4947__auto__;
var G__12740 = cljs.core.count(c__4947__auto__);
var G__12741 = (0);
seq__12720 = G__12738;
chunk__12721 = G__12739;
count__12722 = G__12740;
i__12723 = G__12741;
continue;
} else {
var el = cljs.core.first(seq__12720__$1);
var handler_12742__$1 = ((function (seq__12720,chunk__12721,count__12722,i__12723,el,seq__12720__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__12720,chunk__12721,count__12722,i__12723,el,seq__12720__$1,temp__5457__auto__))
;
var G__12727_12743 = el;
var G__12728_12744 = cljs.core.name(ev);
var G__12729_12745 = handler_12742__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__12727_12743,G__12728_12744,G__12729_12745) : shadow.dom.dom_listen.call(null,G__12727_12743,G__12728_12744,G__12729_12745));


var G__12746 = cljs.core.next(seq__12720__$1);
var G__12747 = null;
var G__12748 = (0);
var G__12749 = (0);
seq__12720 = G__12746;
chunk__12721 = G__12747;
count__12722 = G__12748;
i__12723 = G__12749;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__12751 = arguments.length;
switch (G__12751) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__12752 = shadow.dom.dom_node(el);
var G__12753 = cljs.core.name(ev);
var G__12754 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__12752,G__12753,G__12754) : shadow.dom.dom_listen.call(null,G__12752,G__12753,G__12754));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__12756 = shadow.dom.dom_node(el);
var G__12757 = cljs.core.name(ev);
var G__12758 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__12756,G__12757,G__12758) : shadow.dom.dom_listen_remove.call(null,G__12756,G__12757,G__12758));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__12759 = cljs.core.seq(events);
var chunk__12760 = null;
var count__12761 = (0);
var i__12762 = (0);
while(true){
if((i__12762 < count__12761)){
var vec__12763 = chunk__12760.cljs$core$IIndexed$_nth$arity$2(null,i__12762);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12763,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12763,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12769 = seq__12759;
var G__12770 = chunk__12760;
var G__12771 = count__12761;
var G__12772 = (i__12762 + (1));
seq__12759 = G__12769;
chunk__12760 = G__12770;
count__12761 = G__12771;
i__12762 = G__12772;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12759);
if(temp__5457__auto__){
var seq__12759__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12759__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__12759__$1);
var G__12773 = cljs.core.chunk_rest(seq__12759__$1);
var G__12774 = c__4947__auto__;
var G__12775 = cljs.core.count(c__4947__auto__);
var G__12776 = (0);
seq__12759 = G__12773;
chunk__12760 = G__12774;
count__12761 = G__12775;
i__12762 = G__12776;
continue;
} else {
var vec__12766 = cljs.core.first(seq__12759__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12766,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12766,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12777 = cljs.core.next(seq__12759__$1);
var G__12778 = null;
var G__12779 = (0);
var G__12780 = (0);
seq__12759 = G__12777;
chunk__12760 = G__12778;
count__12761 = G__12779;
i__12762 = G__12780;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__12781 = cljs.core.seq(styles);
var chunk__12782 = null;
var count__12783 = (0);
var i__12784 = (0);
while(true){
if((i__12784 < count__12783)){
var vec__12785 = chunk__12782.cljs$core$IIndexed$_nth$arity$2(null,i__12784);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12785,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12785,(1),null);
var G__12788_12797 = dom;
var G__12789_12798 = cljs.core.name(k);
var G__12790_12799 = (((v == null))?"":v);
goog.style.setStyle(G__12788_12797,G__12789_12798,G__12790_12799);


var G__12800 = seq__12781;
var G__12801 = chunk__12782;
var G__12802 = count__12783;
var G__12803 = (i__12784 + (1));
seq__12781 = G__12800;
chunk__12782 = G__12801;
count__12783 = G__12802;
i__12784 = G__12803;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12781);
if(temp__5457__auto__){
var seq__12781__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12781__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__12781__$1);
var G__12804 = cljs.core.chunk_rest(seq__12781__$1);
var G__12805 = c__4947__auto__;
var G__12806 = cljs.core.count(c__4947__auto__);
var G__12807 = (0);
seq__12781 = G__12804;
chunk__12782 = G__12805;
count__12783 = G__12806;
i__12784 = G__12807;
continue;
} else {
var vec__12791 = cljs.core.first(seq__12781__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12791,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12791,(1),null);
var G__12794_12808 = dom;
var G__12795_12809 = cljs.core.name(k);
var G__12796_12810 = (((v == null))?"":v);
goog.style.setStyle(G__12794_12808,G__12795_12809,G__12796_12810);


var G__12811 = cljs.core.next(seq__12781__$1);
var G__12812 = null;
var G__12813 = (0);
var G__12814 = (0);
seq__12781 = G__12811;
chunk__12782 = G__12812;
count__12783 = G__12813;
i__12784 = G__12814;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__12815_12816 = key;
var G__12815_12817__$1 = (((G__12815_12816 instanceof cljs.core.Keyword))?G__12815_12816.fqn:null);
switch (G__12815_12817__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12819 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4453__auto__ = goog.string.startsWith(ks_12819,"data-");
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
return goog.string.startsWith(ks_12819,"aria-");
}
})())){
el.setAttribute(ks_12819,value);
} else {
(el[ks_12819] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__12820 = shadow.dom.dom_node(el);
var G__12821 = cls;
return goog.dom.classlist.contains(G__12820,G__12821);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12822){
var map__12823 = p__12822;
var map__12823__$1 = ((((!((map__12823 == null)))?(((((map__12823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12823):map__12823);
var props = map__12823__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12823__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12825 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12825,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12825,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12825,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12828 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12828,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12828;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12830 = arguments.length;
switch (G__12830) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12832){
var vec__12833 = p__12832;
var seq__12834 = cljs.core.seq(vec__12833);
var first__12835 = cljs.core.first(seq__12834);
var seq__12834__$1 = cljs.core.next(seq__12834);
var nn = first__12835;
var first__12835__$1 = cljs.core.first(seq__12834__$1);
var seq__12834__$2 = cljs.core.next(seq__12834__$1);
var np = first__12835__$1;
var nc = seq__12834__$2;
var node = vec__12833;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12836 = nn;
var G__12837 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12836,G__12837) : create_fn.call(null,G__12836,G__12837));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12838 = nn;
var G__12839 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12838,G__12839) : create_fn.call(null,G__12838,G__12839));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12840 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12840,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12840,(1),null);
var seq__12843_12859 = cljs.core.seq(node_children);
var chunk__12844_12860 = null;
var count__12845_12861 = (0);
var i__12846_12862 = (0);
while(true){
if((i__12846_12862 < count__12845_12861)){
var child_struct_12863 = chunk__12844_12860.cljs$core$IIndexed$_nth$arity$2(null,i__12846_12862);
var children_12864 = shadow.dom.dom_node(child_struct_12863);
if(cljs.core.seq_QMARK_(children_12864)){
var seq__12847_12865 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12864));
var chunk__12849_12866 = null;
var count__12850_12867 = (0);
var i__12851_12868 = (0);
while(true){
if((i__12851_12868 < count__12850_12867)){
var child_12869 = chunk__12849_12866.cljs$core$IIndexed$_nth$arity$2(null,i__12851_12868);
if(cljs.core.truth_(child_12869)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12869);


var G__12870 = seq__12847_12865;
var G__12871 = chunk__12849_12866;
var G__12872 = count__12850_12867;
var G__12873 = (i__12851_12868 + (1));
seq__12847_12865 = G__12870;
chunk__12849_12866 = G__12871;
count__12850_12867 = G__12872;
i__12851_12868 = G__12873;
continue;
} else {
var G__12874 = seq__12847_12865;
var G__12875 = chunk__12849_12866;
var G__12876 = count__12850_12867;
var G__12877 = (i__12851_12868 + (1));
seq__12847_12865 = G__12874;
chunk__12849_12866 = G__12875;
count__12850_12867 = G__12876;
i__12851_12868 = G__12877;
continue;
}
} else {
var temp__5457__auto___12878 = cljs.core.seq(seq__12847_12865);
if(temp__5457__auto___12878){
var seq__12847_12879__$1 = temp__5457__auto___12878;
if(cljs.core.chunked_seq_QMARK_(seq__12847_12879__$1)){
var c__4947__auto___12880 = cljs.core.chunk_first(seq__12847_12879__$1);
var G__12881 = cljs.core.chunk_rest(seq__12847_12879__$1);
var G__12882 = c__4947__auto___12880;
var G__12883 = cljs.core.count(c__4947__auto___12880);
var G__12884 = (0);
seq__12847_12865 = G__12881;
chunk__12849_12866 = G__12882;
count__12850_12867 = G__12883;
i__12851_12868 = G__12884;
continue;
} else {
var child_12885 = cljs.core.first(seq__12847_12879__$1);
if(cljs.core.truth_(child_12885)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12885);


var G__12886 = cljs.core.next(seq__12847_12879__$1);
var G__12887 = null;
var G__12888 = (0);
var G__12889 = (0);
seq__12847_12865 = G__12886;
chunk__12849_12866 = G__12887;
count__12850_12867 = G__12888;
i__12851_12868 = G__12889;
continue;
} else {
var G__12890 = cljs.core.next(seq__12847_12879__$1);
var G__12891 = null;
var G__12892 = (0);
var G__12893 = (0);
seq__12847_12865 = G__12890;
chunk__12849_12866 = G__12891;
count__12850_12867 = G__12892;
i__12851_12868 = G__12893;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12864);
}


var G__12894 = seq__12843_12859;
var G__12895 = chunk__12844_12860;
var G__12896 = count__12845_12861;
var G__12897 = (i__12846_12862 + (1));
seq__12843_12859 = G__12894;
chunk__12844_12860 = G__12895;
count__12845_12861 = G__12896;
i__12846_12862 = G__12897;
continue;
} else {
var temp__5457__auto___12898 = cljs.core.seq(seq__12843_12859);
if(temp__5457__auto___12898){
var seq__12843_12899__$1 = temp__5457__auto___12898;
if(cljs.core.chunked_seq_QMARK_(seq__12843_12899__$1)){
var c__4947__auto___12900 = cljs.core.chunk_first(seq__12843_12899__$1);
var G__12901 = cljs.core.chunk_rest(seq__12843_12899__$1);
var G__12902 = c__4947__auto___12900;
var G__12903 = cljs.core.count(c__4947__auto___12900);
var G__12904 = (0);
seq__12843_12859 = G__12901;
chunk__12844_12860 = G__12902;
count__12845_12861 = G__12903;
i__12846_12862 = G__12904;
continue;
} else {
var child_struct_12905 = cljs.core.first(seq__12843_12899__$1);
var children_12906 = shadow.dom.dom_node(child_struct_12905);
if(cljs.core.seq_QMARK_(children_12906)){
var seq__12853_12907 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12906));
var chunk__12855_12908 = null;
var count__12856_12909 = (0);
var i__12857_12910 = (0);
while(true){
if((i__12857_12910 < count__12856_12909)){
var child_12911 = chunk__12855_12908.cljs$core$IIndexed$_nth$arity$2(null,i__12857_12910);
if(cljs.core.truth_(child_12911)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12911);


var G__12912 = seq__12853_12907;
var G__12913 = chunk__12855_12908;
var G__12914 = count__12856_12909;
var G__12915 = (i__12857_12910 + (1));
seq__12853_12907 = G__12912;
chunk__12855_12908 = G__12913;
count__12856_12909 = G__12914;
i__12857_12910 = G__12915;
continue;
} else {
var G__12916 = seq__12853_12907;
var G__12917 = chunk__12855_12908;
var G__12918 = count__12856_12909;
var G__12919 = (i__12857_12910 + (1));
seq__12853_12907 = G__12916;
chunk__12855_12908 = G__12917;
count__12856_12909 = G__12918;
i__12857_12910 = G__12919;
continue;
}
} else {
var temp__5457__auto___12920__$1 = cljs.core.seq(seq__12853_12907);
if(temp__5457__auto___12920__$1){
var seq__12853_12921__$1 = temp__5457__auto___12920__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12853_12921__$1)){
var c__4947__auto___12922 = cljs.core.chunk_first(seq__12853_12921__$1);
var G__12923 = cljs.core.chunk_rest(seq__12853_12921__$1);
var G__12924 = c__4947__auto___12922;
var G__12925 = cljs.core.count(c__4947__auto___12922);
var G__12926 = (0);
seq__12853_12907 = G__12923;
chunk__12855_12908 = G__12924;
count__12856_12909 = G__12925;
i__12857_12910 = G__12926;
continue;
} else {
var child_12927 = cljs.core.first(seq__12853_12921__$1);
if(cljs.core.truth_(child_12927)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12927);


var G__12928 = cljs.core.next(seq__12853_12921__$1);
var G__12929 = null;
var G__12930 = (0);
var G__12931 = (0);
seq__12853_12907 = G__12928;
chunk__12855_12908 = G__12929;
count__12856_12909 = G__12930;
i__12857_12910 = G__12931;
continue;
} else {
var G__12932 = cljs.core.next(seq__12853_12921__$1);
var G__12933 = null;
var G__12934 = (0);
var G__12935 = (0);
seq__12853_12907 = G__12932;
chunk__12855_12908 = G__12933;
count__12856_12909 = G__12934;
i__12857_12910 = G__12935;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12906);
}


var G__12936 = cljs.core.next(seq__12843_12899__$1);
var G__12937 = null;
var G__12938 = (0);
var G__12939 = (0);
seq__12843_12859 = G__12936;
chunk__12844_12860 = G__12937;
count__12845_12861 = G__12938;
i__12846_12862 = G__12939;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__12940 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__12940);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12942 = cljs.core.seq(node);
var chunk__12943 = null;
var count__12944 = (0);
var i__12945 = (0);
while(true){
if((i__12945 < count__12944)){
var n = chunk__12943.cljs$core$IIndexed$_nth$arity$2(null,i__12945);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12946 = seq__12942;
var G__12947 = chunk__12943;
var G__12948 = count__12944;
var G__12949 = (i__12945 + (1));
seq__12942 = G__12946;
chunk__12943 = G__12947;
count__12944 = G__12948;
i__12945 = G__12949;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12942);
if(temp__5457__auto__){
var seq__12942__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12942__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__12942__$1);
var G__12950 = cljs.core.chunk_rest(seq__12942__$1);
var G__12951 = c__4947__auto__;
var G__12952 = cljs.core.count(c__4947__auto__);
var G__12953 = (0);
seq__12942 = G__12950;
chunk__12943 = G__12951;
count__12944 = G__12952;
i__12945 = G__12953;
continue;
} else {
var n = cljs.core.first(seq__12942__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12954 = cljs.core.next(seq__12942__$1);
var G__12955 = null;
var G__12956 = (0);
var G__12957 = (0);
seq__12942 = G__12954;
chunk__12943 = G__12955;
count__12944 = G__12956;
i__12945 = G__12957;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__12958 = shadow.dom.dom_node(new$);
var G__12959 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__12958,G__12959);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12961 = arguments.length;
switch (G__12961) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12964 = arguments.length;
switch (G__12964) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12967 = arguments.length;
switch (G__12967) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4453__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5146__auto__ = [];
var len__5143__auto___12974 = arguments.length;
var i__5144__auto___12975 = (0);
while(true){
if((i__5144__auto___12975 < len__5143__auto___12974)){
args__5146__auto__.push((arguments[i__5144__auto___12975]));

var G__12976 = (i__5144__auto___12975 + (1));
i__5144__auto___12975 = G__12976;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12970_12977 = cljs.core.seq(nodes);
var chunk__12971_12978 = null;
var count__12972_12979 = (0);
var i__12973_12980 = (0);
while(true){
if((i__12973_12980 < count__12972_12979)){
var node_12981 = chunk__12971_12978.cljs$core$IIndexed$_nth$arity$2(null,i__12973_12980);
fragment.appendChild(shadow.dom._to_dom(node_12981));


var G__12982 = seq__12970_12977;
var G__12983 = chunk__12971_12978;
var G__12984 = count__12972_12979;
var G__12985 = (i__12973_12980 + (1));
seq__12970_12977 = G__12982;
chunk__12971_12978 = G__12983;
count__12972_12979 = G__12984;
i__12973_12980 = G__12985;
continue;
} else {
var temp__5457__auto___12986 = cljs.core.seq(seq__12970_12977);
if(temp__5457__auto___12986){
var seq__12970_12987__$1 = temp__5457__auto___12986;
if(cljs.core.chunked_seq_QMARK_(seq__12970_12987__$1)){
var c__4947__auto___12988 = cljs.core.chunk_first(seq__12970_12987__$1);
var G__12989 = cljs.core.chunk_rest(seq__12970_12987__$1);
var G__12990 = c__4947__auto___12988;
var G__12991 = cljs.core.count(c__4947__auto___12988);
var G__12992 = (0);
seq__12970_12977 = G__12989;
chunk__12971_12978 = G__12990;
count__12972_12979 = G__12991;
i__12973_12980 = G__12992;
continue;
} else {
var node_12993 = cljs.core.first(seq__12970_12987__$1);
fragment.appendChild(shadow.dom._to_dom(node_12993));


var G__12994 = cljs.core.next(seq__12970_12987__$1);
var G__12995 = null;
var G__12996 = (0);
var G__12997 = (0);
seq__12970_12977 = G__12994;
chunk__12971_12978 = G__12995;
count__12972_12979 = G__12996;
i__12973_12980 = G__12997;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq12969){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12969));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12998_13012 = cljs.core.seq(scripts);
var chunk__12999_13013 = null;
var count__13000_13014 = (0);
var i__13001_13015 = (0);
while(true){
if((i__13001_13015 < count__13000_13014)){
var vec__13002_13016 = chunk__12999_13013.cljs$core$IIndexed$_nth$arity$2(null,i__13001_13015);
var script_tag_13017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13002_13016,(0),null);
var script_body_13018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13002_13016,(1),null);
eval(script_body_13018);


var G__13019 = seq__12998_13012;
var G__13020 = chunk__12999_13013;
var G__13021 = count__13000_13014;
var G__13022 = (i__13001_13015 + (1));
seq__12998_13012 = G__13019;
chunk__12999_13013 = G__13020;
count__13000_13014 = G__13021;
i__13001_13015 = G__13022;
continue;
} else {
var temp__5457__auto___13023 = cljs.core.seq(seq__12998_13012);
if(temp__5457__auto___13023){
var seq__12998_13024__$1 = temp__5457__auto___13023;
if(cljs.core.chunked_seq_QMARK_(seq__12998_13024__$1)){
var c__4947__auto___13025 = cljs.core.chunk_first(seq__12998_13024__$1);
var G__13026 = cljs.core.chunk_rest(seq__12998_13024__$1);
var G__13027 = c__4947__auto___13025;
var G__13028 = cljs.core.count(c__4947__auto___13025);
var G__13029 = (0);
seq__12998_13012 = G__13026;
chunk__12999_13013 = G__13027;
count__13000_13014 = G__13028;
i__13001_13015 = G__13029;
continue;
} else {
var vec__13005_13030 = cljs.core.first(seq__12998_13024__$1);
var script_tag_13031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13005_13030,(0),null);
var script_body_13032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13005_13030,(1),null);
eval(script_body_13032);


var G__13033 = cljs.core.next(seq__12998_13024__$1);
var G__13034 = null;
var G__13035 = (0);
var G__13036 = (0);
seq__12998_13012 = G__13033;
chunk__12999_13013 = G__13034;
count__13000_13014 = G__13035;
i__13001_13015 = G__13036;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__13008){
var vec__13009 = p__13008;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13009,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13009,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__13037 = shadow.dom.dom_node(el);
var G__13038 = cls;
return goog.dom.getAncestorByClass(G__13037,G__13038);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__13040 = arguments.length;
switch (G__13040) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__13041 = shadow.dom.dom_node(el);
var G__13042 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__13041,G__13042);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__13043 = shadow.dom.dom_node(el);
var G__13044 = cljs.core.name(tag);
var G__13045 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__13043,G__13044,G__13045);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__13047 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__13047);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__13048 = shadow.dom.dom_node(dom);
var G__13049 = value;
return goog.dom.forms.setValue(G__13048,G__13049);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__13050 = cljs.core.seq(style_keys);
var chunk__13051 = null;
var count__13052 = (0);
var i__13053 = (0);
while(true){
if((i__13053 < count__13052)){
var it = chunk__13051.cljs$core$IIndexed$_nth$arity$2(null,i__13053);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13054 = seq__13050;
var G__13055 = chunk__13051;
var G__13056 = count__13052;
var G__13057 = (i__13053 + (1));
seq__13050 = G__13054;
chunk__13051 = G__13055;
count__13052 = G__13056;
i__13053 = G__13057;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13050);
if(temp__5457__auto__){
var seq__13050__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13050__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__13050__$1);
var G__13058 = cljs.core.chunk_rest(seq__13050__$1);
var G__13059 = c__4947__auto__;
var G__13060 = cljs.core.count(c__4947__auto__);
var G__13061 = (0);
seq__13050 = G__13058;
chunk__13051 = G__13059;
count__13052 = G__13060;
i__13053 = G__13061;
continue;
} else {
var it = cljs.core.first(seq__13050__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13062 = cljs.core.next(seq__13050__$1);
var G__13063 = null;
var G__13064 = (0);
var G__13065 = (0);
seq__13050 = G__13062;
chunk__13051 = G__13063;
count__13052 = G__13064;
i__13053 = G__13065;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4755__auto__,k__4756__auto__){
var self__ = this;
var this__4755__auto____$1 = this;
return this__4755__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4756__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4757__auto__,k13067,else__4758__auto__){
var self__ = this;
var this__4757__auto____$1 = this;
var G__13071 = k13067;
var G__13071__$1 = (((G__13071 instanceof cljs.core.Keyword))?G__13071.fqn:null);
switch (G__13071__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13067,else__4758__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4769__auto__,writer__4770__auto__,opts__4771__auto__){
var self__ = this;
var this__4769__auto____$1 = this;
var pr_pair__4772__auto__ = ((function (this__4769__auto____$1){
return (function (keyval__4773__auto__){
return cljs.core.pr_sequential_writer(writer__4770__auto__,cljs.core.pr_writer,""," ","",opts__4771__auto__,keyval__4773__auto__);
});})(this__4769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4770__auto__,pr_pair__4772__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13066){
var self__ = this;
var G__13066__$1 = this;
return (new cljs.core.RecordIter((0),G__13066__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4753__auto__){
var self__ = this;
var this__4753__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4759__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4751__auto__){
var self__ = this;
var this__4751__auto____$1 = this;
var h__4567__auto__ = self__.__hash;
if(!((h__4567__auto__ == null))){
return h__4567__auto__;
} else {
var h__4567__auto____$1 = (function (){var fexpr__13072 = ((function (h__4567__auto__,this__4751__auto____$1){
return (function (coll__4752__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4752__auto__));
});})(h__4567__auto__,this__4751__auto____$1))
;
return fexpr__13072(this__4751__auto____$1);
})();
self__.__hash = h__4567__auto____$1;

return h__4567__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13068,other13069){
var self__ = this;
var this13068__$1 = this;
return ((!((other13069 == null))) && ((this13068__$1.constructor === other13069.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13068__$1.x,other13069.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13068__$1.y,other13069.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13068__$1.__extmap,other13069.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4764__auto__,k__4765__auto__){
var self__ = this;
var this__4764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4764__auto____$1),self__.__meta),k__4765__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4765__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4762__auto__,k__4763__auto__,G__13066){
var self__ = this;
var this__4762__auto____$1 = this;
var pred__13073 = cljs.core.keyword_identical_QMARK_;
var expr__13074 = k__4763__auto__;
if(cljs.core.truth_((function (){var G__13076 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__13077 = expr__13074;
return (pred__13073.cljs$core$IFn$_invoke$arity$2 ? pred__13073.cljs$core$IFn$_invoke$arity$2(G__13076,G__13077) : pred__13073.call(null,G__13076,G__13077));
})())){
return (new shadow.dom.Coordinate(G__13066,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13078 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__13079 = expr__13074;
return (pred__13073.cljs$core$IFn$_invoke$arity$2 ? pred__13073.cljs$core$IFn$_invoke$arity$2(G__13078,G__13079) : pred__13073.call(null,G__13078,G__13079));
})())){
return (new shadow.dom.Coordinate(self__.x,G__13066,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4763__auto__,G__13066),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4767__auto__){
var self__ = this;
var this__4767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4754__auto__,G__13066){
var self__ = this;
var this__4754__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__13066,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4760__auto__,entry__4761__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4761__auto__)){
return this__4760__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4760__auto____$1,entry__4761__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4794__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4794__auto__,writer__4795__auto__){
return cljs.core._write(writer__4795__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__13070){
var extmap__4790__auto__ = (function (){var G__13080 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13070,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__13070)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13080);
} else {
return G__13080;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__13070),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__13070),null,cljs.core.not_empty(extmap__4790__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__13082 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__13082);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__13083 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__13083);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__13084 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__13084);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4755__auto__,k__4756__auto__){
var self__ = this;
var this__4755__auto____$1 = this;
return this__4755__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4756__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4757__auto__,k13086,else__4758__auto__){
var self__ = this;
var this__4757__auto____$1 = this;
var G__13090 = k13086;
var G__13090__$1 = (((G__13090 instanceof cljs.core.Keyword))?G__13090.fqn:null);
switch (G__13090__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13086,else__4758__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4769__auto__,writer__4770__auto__,opts__4771__auto__){
var self__ = this;
var this__4769__auto____$1 = this;
var pr_pair__4772__auto__ = ((function (this__4769__auto____$1){
return (function (keyval__4773__auto__){
return cljs.core.pr_sequential_writer(writer__4770__auto__,cljs.core.pr_writer,""," ","",opts__4771__auto__,keyval__4773__auto__);
});})(this__4769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4770__auto__,pr_pair__4772__auto__,"#shadow.dom.Size{",", ","}",opts__4771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13085){
var self__ = this;
var G__13085__$1 = this;
return (new cljs.core.RecordIter((0),G__13085__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4753__auto__){
var self__ = this;
var this__4753__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4759__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4751__auto__){
var self__ = this;
var this__4751__auto____$1 = this;
var h__4567__auto__ = self__.__hash;
if(!((h__4567__auto__ == null))){
return h__4567__auto__;
} else {
var h__4567__auto____$1 = (function (){var fexpr__13091 = ((function (h__4567__auto__,this__4751__auto____$1){
return (function (coll__4752__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4752__auto__));
});})(h__4567__auto__,this__4751__auto____$1))
;
return fexpr__13091(this__4751__auto____$1);
})();
self__.__hash = h__4567__auto____$1;

return h__4567__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13087,other13088){
var self__ = this;
var this13087__$1 = this;
return ((!((other13088 == null))) && ((this13087__$1.constructor === other13088.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13087__$1.w,other13088.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13087__$1.h,other13088.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13087__$1.__extmap,other13088.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4764__auto__,k__4765__auto__){
var self__ = this;
var this__4764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4764__auto____$1),self__.__meta),k__4765__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4765__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4762__auto__,k__4763__auto__,G__13085){
var self__ = this;
var this__4762__auto____$1 = this;
var pred__13092 = cljs.core.keyword_identical_QMARK_;
var expr__13093 = k__4763__auto__;
if(cljs.core.truth_((function (){var G__13095 = new cljs.core.Keyword(null,"w","w",354169001);
var G__13096 = expr__13093;
return (pred__13092.cljs$core$IFn$_invoke$arity$2 ? pred__13092.cljs$core$IFn$_invoke$arity$2(G__13095,G__13096) : pred__13092.call(null,G__13095,G__13096));
})())){
return (new shadow.dom.Size(G__13085,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13097 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__13098 = expr__13093;
return (pred__13092.cljs$core$IFn$_invoke$arity$2 ? pred__13092.cljs$core$IFn$_invoke$arity$2(G__13097,G__13098) : pred__13092.call(null,G__13097,G__13098));
})())){
return (new shadow.dom.Size(self__.w,G__13085,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4763__auto__,G__13085),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4767__auto__){
var self__ = this;
var this__4767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4754__auto__,G__13085){
var self__ = this;
var this__4754__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__13085,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4760__auto__,entry__4761__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4761__auto__)){
return this__4760__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4760__auto____$1,entry__4761__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4794__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4794__auto__,writer__4795__auto__){
return cljs.core._write(writer__4795__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__13089){
var extmap__4790__auto__ = (function (){var G__13099 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13089,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__13089)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13099);
} else {
return G__13099;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__13089),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__13089),null,cljs.core.not_empty(extmap__4790__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__13101 = shadow.dom.dom_node(el);
return goog.style.getSize(G__13101);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5007__auto__ = opts;
var l__5008__auto__ = a__5007__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5008__auto__)){
var G__13102 = (i + (1));
var G__13103 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13102;
ret = G__13103;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13104){
var vec__13105 = p__13104;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13105,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13105,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__13109 = arguments.length;
switch (G__13109) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__13111_13113 = new_node;
var G__13112_13114 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__13111_13113,G__13112_13114);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__13115_13117 = new_node;
var G__13116_13118 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__13115_13117,G__13116_13118);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13119 = ps;
var G__13120 = (i + (1));
el__$1 = G__13119;
i = G__13120;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__13121 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__13121);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__13122 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__13122);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__13123 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__13123);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__13124 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13124,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13124,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13124,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__13127_13137 = cljs.core.seq(props);
var chunk__13128_13138 = null;
var count__13129_13139 = (0);
var i__13130_13140 = (0);
while(true){
if((i__13130_13140 < count__13129_13139)){
var vec__13131_13141 = chunk__13128_13138.cljs$core$IIndexed$_nth$arity$2(null,i__13130_13140);
var k_13142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13131_13141,(0),null);
var v_13143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13131_13141,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_13142);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13142),v_13143);


var G__13144 = seq__13127_13137;
var G__13145 = chunk__13128_13138;
var G__13146 = count__13129_13139;
var G__13147 = (i__13130_13140 + (1));
seq__13127_13137 = G__13144;
chunk__13128_13138 = G__13145;
count__13129_13139 = G__13146;
i__13130_13140 = G__13147;
continue;
} else {
var temp__5457__auto___13148 = cljs.core.seq(seq__13127_13137);
if(temp__5457__auto___13148){
var seq__13127_13149__$1 = temp__5457__auto___13148;
if(cljs.core.chunked_seq_QMARK_(seq__13127_13149__$1)){
var c__4947__auto___13150 = cljs.core.chunk_first(seq__13127_13149__$1);
var G__13151 = cljs.core.chunk_rest(seq__13127_13149__$1);
var G__13152 = c__4947__auto___13150;
var G__13153 = cljs.core.count(c__4947__auto___13150);
var G__13154 = (0);
seq__13127_13137 = G__13151;
chunk__13128_13138 = G__13152;
count__13129_13139 = G__13153;
i__13130_13140 = G__13154;
continue;
} else {
var vec__13134_13155 = cljs.core.first(seq__13127_13149__$1);
var k_13156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13134_13155,(0),null);
var v_13157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13134_13155,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_13156);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13156),v_13157);


var G__13158 = cljs.core.next(seq__13127_13149__$1);
var G__13159 = null;
var G__13160 = (0);
var G__13161 = (0);
seq__13127_13137 = G__13158;
chunk__13128_13138 = G__13159;
count__13129_13139 = G__13160;
i__13130_13140 = G__13161;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__13163 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13163,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13163,(1),null);
var seq__13166_13184 = cljs.core.seq(node_children);
var chunk__13168_13185 = null;
var count__13169_13186 = (0);
var i__13170_13187 = (0);
while(true){
if((i__13170_13187 < count__13169_13186)){
var child_struct_13188 = chunk__13168_13185.cljs$core$IIndexed$_nth$arity$2(null,i__13170_13187);
if(!((child_struct_13188 == null))){
if(typeof child_struct_13188 === 'string'){
var text_13189 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13189),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13188)].join(''));
} else {
var children_13190 = shadow.dom.svg_node(child_struct_13188);
if(cljs.core.seq_QMARK_(children_13190)){
var seq__13172_13191 = cljs.core.seq(children_13190);
var chunk__13174_13192 = null;
var count__13175_13193 = (0);
var i__13176_13194 = (0);
while(true){
if((i__13176_13194 < count__13175_13193)){
var child_13195 = chunk__13174_13192.cljs$core$IIndexed$_nth$arity$2(null,i__13176_13194);
if(cljs.core.truth_(child_13195)){
node.appendChild(child_13195);


var G__13196 = seq__13172_13191;
var G__13197 = chunk__13174_13192;
var G__13198 = count__13175_13193;
var G__13199 = (i__13176_13194 + (1));
seq__13172_13191 = G__13196;
chunk__13174_13192 = G__13197;
count__13175_13193 = G__13198;
i__13176_13194 = G__13199;
continue;
} else {
var G__13200 = seq__13172_13191;
var G__13201 = chunk__13174_13192;
var G__13202 = count__13175_13193;
var G__13203 = (i__13176_13194 + (1));
seq__13172_13191 = G__13200;
chunk__13174_13192 = G__13201;
count__13175_13193 = G__13202;
i__13176_13194 = G__13203;
continue;
}
} else {
var temp__5457__auto___13204 = cljs.core.seq(seq__13172_13191);
if(temp__5457__auto___13204){
var seq__13172_13205__$1 = temp__5457__auto___13204;
if(cljs.core.chunked_seq_QMARK_(seq__13172_13205__$1)){
var c__4947__auto___13206 = cljs.core.chunk_first(seq__13172_13205__$1);
var G__13207 = cljs.core.chunk_rest(seq__13172_13205__$1);
var G__13208 = c__4947__auto___13206;
var G__13209 = cljs.core.count(c__4947__auto___13206);
var G__13210 = (0);
seq__13172_13191 = G__13207;
chunk__13174_13192 = G__13208;
count__13175_13193 = G__13209;
i__13176_13194 = G__13210;
continue;
} else {
var child_13211 = cljs.core.first(seq__13172_13205__$1);
if(cljs.core.truth_(child_13211)){
node.appendChild(child_13211);


var G__13212 = cljs.core.next(seq__13172_13205__$1);
var G__13213 = null;
var G__13214 = (0);
var G__13215 = (0);
seq__13172_13191 = G__13212;
chunk__13174_13192 = G__13213;
count__13175_13193 = G__13214;
i__13176_13194 = G__13215;
continue;
} else {
var G__13216 = cljs.core.next(seq__13172_13205__$1);
var G__13217 = null;
var G__13218 = (0);
var G__13219 = (0);
seq__13172_13191 = G__13216;
chunk__13174_13192 = G__13217;
count__13175_13193 = G__13218;
i__13176_13194 = G__13219;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13190);
}
}


var G__13220 = seq__13166_13184;
var G__13221 = chunk__13168_13185;
var G__13222 = count__13169_13186;
var G__13223 = (i__13170_13187 + (1));
seq__13166_13184 = G__13220;
chunk__13168_13185 = G__13221;
count__13169_13186 = G__13222;
i__13170_13187 = G__13223;
continue;
} else {
var G__13224 = seq__13166_13184;
var G__13225 = chunk__13168_13185;
var G__13226 = count__13169_13186;
var G__13227 = (i__13170_13187 + (1));
seq__13166_13184 = G__13224;
chunk__13168_13185 = G__13225;
count__13169_13186 = G__13226;
i__13170_13187 = G__13227;
continue;
}
} else {
var temp__5457__auto___13228 = cljs.core.seq(seq__13166_13184);
if(temp__5457__auto___13228){
var seq__13166_13229__$1 = temp__5457__auto___13228;
if(cljs.core.chunked_seq_QMARK_(seq__13166_13229__$1)){
var c__4947__auto___13230 = cljs.core.chunk_first(seq__13166_13229__$1);
var G__13231 = cljs.core.chunk_rest(seq__13166_13229__$1);
var G__13232 = c__4947__auto___13230;
var G__13233 = cljs.core.count(c__4947__auto___13230);
var G__13234 = (0);
seq__13166_13184 = G__13231;
chunk__13168_13185 = G__13232;
count__13169_13186 = G__13233;
i__13170_13187 = G__13234;
continue;
} else {
var child_struct_13235 = cljs.core.first(seq__13166_13229__$1);
if(!((child_struct_13235 == null))){
if(typeof child_struct_13235 === 'string'){
var text_13236 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13236),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13235)].join(''));
} else {
var children_13237 = shadow.dom.svg_node(child_struct_13235);
if(cljs.core.seq_QMARK_(children_13237)){
var seq__13178_13238 = cljs.core.seq(children_13237);
var chunk__13180_13239 = null;
var count__13181_13240 = (0);
var i__13182_13241 = (0);
while(true){
if((i__13182_13241 < count__13181_13240)){
var child_13242 = chunk__13180_13239.cljs$core$IIndexed$_nth$arity$2(null,i__13182_13241);
if(cljs.core.truth_(child_13242)){
node.appendChild(child_13242);


var G__13243 = seq__13178_13238;
var G__13244 = chunk__13180_13239;
var G__13245 = count__13181_13240;
var G__13246 = (i__13182_13241 + (1));
seq__13178_13238 = G__13243;
chunk__13180_13239 = G__13244;
count__13181_13240 = G__13245;
i__13182_13241 = G__13246;
continue;
} else {
var G__13247 = seq__13178_13238;
var G__13248 = chunk__13180_13239;
var G__13249 = count__13181_13240;
var G__13250 = (i__13182_13241 + (1));
seq__13178_13238 = G__13247;
chunk__13180_13239 = G__13248;
count__13181_13240 = G__13249;
i__13182_13241 = G__13250;
continue;
}
} else {
var temp__5457__auto___13251__$1 = cljs.core.seq(seq__13178_13238);
if(temp__5457__auto___13251__$1){
var seq__13178_13252__$1 = temp__5457__auto___13251__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13178_13252__$1)){
var c__4947__auto___13253 = cljs.core.chunk_first(seq__13178_13252__$1);
var G__13254 = cljs.core.chunk_rest(seq__13178_13252__$1);
var G__13255 = c__4947__auto___13253;
var G__13256 = cljs.core.count(c__4947__auto___13253);
var G__13257 = (0);
seq__13178_13238 = G__13254;
chunk__13180_13239 = G__13255;
count__13181_13240 = G__13256;
i__13182_13241 = G__13257;
continue;
} else {
var child_13258 = cljs.core.first(seq__13178_13252__$1);
if(cljs.core.truth_(child_13258)){
node.appendChild(child_13258);


var G__13259 = cljs.core.next(seq__13178_13252__$1);
var G__13260 = null;
var G__13261 = (0);
var G__13262 = (0);
seq__13178_13238 = G__13259;
chunk__13180_13239 = G__13260;
count__13181_13240 = G__13261;
i__13182_13241 = G__13262;
continue;
} else {
var G__13263 = cljs.core.next(seq__13178_13252__$1);
var G__13264 = null;
var G__13265 = (0);
var G__13266 = (0);
seq__13178_13238 = G__13263;
chunk__13180_13239 = G__13264;
count__13181_13240 = G__13265;
i__13182_13241 = G__13266;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13237);
}
}


var G__13267 = cljs.core.next(seq__13166_13229__$1);
var G__13268 = null;
var G__13269 = (0);
var G__13270 = (0);
seq__13166_13184 = G__13267;
chunk__13168_13185 = G__13268;
count__13169_13186 = G__13269;
i__13170_13187 = G__13270;
continue;
} else {
var G__13271 = cljs.core.next(seq__13166_13229__$1);
var G__13272 = null;
var G__13273 = (0);
var G__13274 = (0);
seq__13166_13184 = G__13271;
chunk__13168_13185 = G__13272;
count__13169_13186 = G__13273;
i__13170_13187 = G__13274;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__13275_13281 = shadow.dom._to_svg;
var G__13276_13282 = "string";
var G__13277_13283 = ((function (G__13275_13281,G__13276_13282){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__13275_13281,G__13276_13282))
;
goog.object.set(G__13275_13281,G__13276_13282,G__13277_13283);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__13278_13284 = shadow.dom._to_svg;
var G__13279_13285 = "null";
var G__13280_13286 = ((function (G__13278_13284,G__13279_13285){
return (function (_){
return null;
});})(G__13278_13284,G__13279_13285))
;
goog.object.set(G__13278_13284,G__13279_13285,G__13280_13286);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5146__auto__ = [];
var len__5143__auto___13289 = arguments.length;
var i__5144__auto___13290 = (0);
while(true){
if((i__5144__auto___13290 < len__5143__auto___13289)){
args__5146__auto__.push((arguments[i__5144__auto___13290]));

var G__13291 = (i__5144__auto___13290 + (1));
i__5144__auto___13290 = G__13291;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((1) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5147__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq13287){
var G__13288 = cljs.core.first(seq13287);
var seq13287__$1 = cljs.core.next(seq13287);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13288,seq13287__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__13293 = arguments.length;
switch (G__13293) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__13294_13309 = shadow.dom.dom_node(el);
var G__13295_13310 = cljs.core.name(event);
var G__13296_13311 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__13294_13309,G__13295_13310,G__13296_13311) : shadow.dom.dom_listen.call(null,G__13294_13309,G__13295_13310,G__13296_13311));

if(cljs.core.truth_((function (){var and__4442__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4442__auto__)){
return !(once_or_cleanup === true);
} else {
return and__4442__auto__;
}
})())){
var c__10053__auto___13312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto___13312,buf,chan,event_fn){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto___13312,buf,chan,event_fn){
return (function (state_13301){
var state_val_13302 = (state_13301[(1)]);
if((state_val_13302 === (1))){
var state_13301__$1 = state_13301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13301__$1,(2),once_or_cleanup);
} else {
if((state_val_13302 === (2))){
var inst_13298 = (state_13301[(2)]);
var inst_13299 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_13301__$1 = (function (){var statearr_13303 = state_13301;
(statearr_13303[(7)] = inst_13298);

return statearr_13303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13301__$1,inst_13299);
} else {
return null;
}
}
});})(c__10053__auto___13312,buf,chan,event_fn))
;
return ((function (switch__9905__auto__,c__10053__auto___13312,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__9906__auto__ = null;
var shadow$dom$state_machine__9906__auto____0 = (function (){
var statearr_13304 = [null,null,null,null,null,null,null,null];
(statearr_13304[(0)] = shadow$dom$state_machine__9906__auto__);

(statearr_13304[(1)] = (1));

return statearr_13304;
});
var shadow$dom$state_machine__9906__auto____1 = (function (state_13301){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_13301);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e13305){if((e13305 instanceof Object)){
var ex__9909__auto__ = e13305;
var statearr_13306_13313 = state_13301;
(statearr_13306_13313[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13314 = state_13301;
state_13301 = G__13314;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
shadow$dom$state_machine__9906__auto__ = function(state_13301){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__9906__auto____0.call(this);
case 1:
return shadow$dom$state_machine__9906__auto____1.call(this,state_13301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__9906__auto____0;
shadow$dom$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__9906__auto____1;
return shadow$dom$state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto___13312,buf,chan,event_fn))
})();
var state__10055__auto__ = (function (){var statearr_13307 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_13307[(6)] = c__10053__auto___13312);

return statearr_13307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto___13312,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
