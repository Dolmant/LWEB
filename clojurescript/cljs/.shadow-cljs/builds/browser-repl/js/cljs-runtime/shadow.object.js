goog.provide('shadow.object');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('cljs.core.async.impl.protocols');
goog.require('shadow.util');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

shadow.object._id = (function shadow$object$_id(this$){
if(((!((this$ == null))) && (!((this$.shadow$object$IObject$_id$arity$1 == null))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (shadow.object._id[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto__.call(null,this$));
} else {
var m__4798__auto____$1 = (shadow.object._id["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
}
});

shadow.object._type = (function shadow$object$_type(this$){
if(((!((this$ == null))) && (!((this$.shadow$object$IObject$_type$arity$1 == null))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (shadow.object._type[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto__.call(null,this$));
} else {
var m__4798__auto____$1 = (shadow.object._type["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
}
});

shadow.object._data = (function shadow$object$_data(this$){
if(((!((this$ == null))) && (!((this$.shadow$object$IObject$_data$arity$1 == null))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (shadow.object._data[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto__.call(null,this$));
} else {
var m__4798__auto____$1 = (shadow.object._data["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
}
});

/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if(((!((this$ == null))) && (!((this$.shadow$object$IObject$_update$arity$2 == null))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (shadow.object._update[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4798__auto__.call(null,this$,update_fn));
} else {
var m__4798__auto____$1 = (shadow.object._update["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4798__auto____$1.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
}
});

shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if(((!((this$ == null))) && (!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4798__auto__.call(null,this$,cause));
} else {
var m__4798__auto____$1 = (shadow.object._destroy_BANG_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4798__auto____$1.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__13316 = arguments.length;
switch (G__13316) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
});

shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
});

shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3;

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4453__auto__ = ((!((obj_or_dom == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4453__auto__){
return or__4453__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if(((!((obj == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if(((!((obj_or_dom == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5457__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5457__auto__)){
var oid = temp__5457__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5457__auto__)){
var parent_id = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__13322 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__13322;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parent_id,child_ids,instances){
return (function (p1__13323_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__13323_SHARP_);
});})(parent_id,child_ids,instances))
,child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__13325 = arguments.length;
switch (G__13325) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
});

shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
});

shadow.object.tree_seq.cljs$lang$maxFixedArity = 2;

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (type_kw){
return (function (p1__13327_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__13327_SHARP_));
});})(type_kw))
,shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__13328){
var map__13329 = p__13328;
var map__13329__$1 = ((((!((map__13329 == null)))?(((((map__13329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13329):map__13329);
var oref = map__13329__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13329__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__13333 = arguments.length;
switch (G__13333) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
});

shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (type_kw){
return (function (p1__13331_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__13331_SHARP_));
});})(type_kw))
,shadow.object.get_siblings(oref));
});

shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2;

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5455__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5455__auto__)){
var obj = temp__5455__auto__;
return obj;
} else {
var temp__5457__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5457__auto__)){
var parent = temp__5457__auto__;
var G__13335 = parent;
dom = G__13335;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__5146__auto__ = [];
var len__5143__auto___13343 = arguments.length;
var i__5144__auto___13344 = (0);
while(true){
if((i__5144__auto___13344 < len__5143__auto___13343)){
args__5146__auto__.push((arguments[i__5144__auto___13344]));

var G__13345 = (i__5144__auto___13344 + (1));
i__5144__auto___13344 = G__13345;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((2) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5147__auto__);
});

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5457__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5457__auto__)){
var reactions_to_trigger = temp__5457__auto__;
var seq__13339 = cljs.core.seq(reactions_to_trigger);
var chunk__13340 = null;
var count__13341 = (0);
var i__13342 = (0);
while(true){
if((i__13342 < count__13341)){
var rfn = chunk__13340.cljs$core$IIndexed$_nth$arity$2(null,i__13342);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__13346 = seq__13339;
var G__13347 = chunk__13340;
var G__13348 = count__13341;
var G__13349 = (i__13342 + (1));
seq__13339 = G__13346;
chunk__13340 = G__13347;
count__13341 = G__13348;
i__13342 = G__13349;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__13339);
if(temp__5457__auto____$1){
var seq__13339__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__13339__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__13339__$1);
var G__13350 = cljs.core.chunk_rest(seq__13339__$1);
var G__13351 = c__4947__auto__;
var G__13352 = cljs.core.count(c__4947__auto__);
var G__13353 = (0);
seq__13339 = G__13350;
chunk__13340 = G__13351;
count__13341 = G__13352;
i__13342 = G__13353;
continue;
} else {
var rfn = cljs.core.first(seq__13339__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__13354 = cljs.core.next(seq__13339__$1);
var G__13355 = null;
var G__13356 = (0);
var G__13357 = (0);
seq__13339 = G__13354;
chunk__13340 = G__13355;
count__13341 = G__13356;
i__13342 = G__13357;
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
});

shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq13336){
var G__13337 = cljs.core.first(seq13336);
var seq13336__$1 = cljs.core.next(seq13336);
var G__13338 = cljs.core.first(seq13336__$1);
var seq13336__$2 = cljs.core.next(seq13336__$1);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13337,G__13338,seq13336__$2);
});

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__13358_13362 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__13359_13363 = null;
var count__13360_13364 = (0);
var i__13361_13365 = (0);
while(true){
if((i__13361_13365 < count__13360_13364)){
var child_13366 = chunk__13359_13363.cljs$core$IIndexed$_nth$arity$2(null,i__13361_13365);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_13366,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_13366,ev,notify_fn));


var G__13367 = seq__13358_13362;
var G__13368 = chunk__13359_13363;
var G__13369 = count__13360_13364;
var G__13370 = (i__13361_13365 + (1));
seq__13358_13362 = G__13367;
chunk__13359_13363 = G__13368;
count__13360_13364 = G__13369;
i__13361_13365 = G__13370;
continue;
} else {
var temp__5457__auto___13371 = cljs.core.seq(seq__13358_13362);
if(temp__5457__auto___13371){
var seq__13358_13372__$1 = temp__5457__auto___13371;
if(cljs.core.chunked_seq_QMARK_(seq__13358_13372__$1)){
var c__4947__auto___13373 = cljs.core.chunk_first(seq__13358_13372__$1);
var G__13374 = cljs.core.chunk_rest(seq__13358_13372__$1);
var G__13375 = c__4947__auto___13373;
var G__13376 = cljs.core.count(c__4947__auto___13373);
var G__13377 = (0);
seq__13358_13362 = G__13374;
chunk__13359_13363 = G__13375;
count__13360_13364 = G__13376;
i__13361_13365 = G__13377;
continue;
} else {
var child_13378 = cljs.core.first(seq__13358_13372__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_13378,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_13378,ev,notify_fn));


var G__13379 = cljs.core.next(seq__13358_13372__$1);
var G__13380 = null;
var G__13381 = (0);
var G__13382 = (0);
seq__13358_13362 = G__13379;
chunk__13359_13363 = G__13380;
count__13360_13364 = G__13381;
i__13361_13365 = G__13382;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__5146__auto__ = [];
var len__5143__auto___13386 = arguments.length;
var i__5144__auto___13387 = (0);
while(true){
if((i__5144__auto___13387 < len__5143__auto___13386)){
args__5146__auto__.push((arguments[i__5144__auto___13387]));

var G__13388 = (i__5144__auto___13387 + (1));
i__5144__auto___13387 = G__13388;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((2) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5147__auto__);
});

shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
});

shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq13383){
var G__13384 = cljs.core.first(seq13383);
var seq13383__$1 = cljs.core.next(seq13383);
var G__13385 = cljs.core.first(seq13383__$1);
var seq13383__$2 = cljs.core.next(seq13383__$1);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13384,G__13385,seq13383__$2);
});

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__5146__auto__ = [];
var len__5143__auto___13392 = arguments.length;
var i__5144__auto___13393 = (0);
while(true){
if((i__5144__auto___13393 < len__5143__auto___13392)){
args__5146__auto__.push((arguments[i__5144__auto___13393]));

var G__13394 = (i__5144__auto___13393 + (1));
i__5144__auto___13393 = G__13394;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((2) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5147__auto__);
});

shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__13395 = shadow.object.get_parent(current);
current = G__13395;
continue;
} else {
return null;
}
break;
}
});

shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq13389){
var G__13390 = cljs.core.first(seq13389);
var seq13389__$1 = cljs.core.next(seq13389);
var G__13391 = cljs.core.first(seq13389__$1);
var seq13389__$2 = cljs.core.next(seq13389__$1);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13390,G__13391,seq13389__$2);
});

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__5146__auto__ = [];
var len__5143__auto___13399 = arguments.length;
var i__5144__auto___13400 = (0);
while(true){
if((i__5144__auto___13400 < len__5143__auto___13399)){
args__5146__auto__.push((arguments[i__5144__auto___13400]));

var G__13401 = (i__5144__auto___13400 + (1));
i__5144__auto___13400 = G__13401;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((2) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5147__auto__);
});

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0)))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = ((function (id,data){
return (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});})(id,data))
;
return shadow.object._update(oref,work_fn);
});

shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq13396){
var G__13397 = cljs.core.first(seq13396);
var seq13396__$1 = cljs.core.next(seq13396);
var G__13398 = cljs.core.first(seq13396__$1);
var seq13396__$2 = cljs.core.next(seq13396__$1);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13397,G__13398,seq13396__$2);
});

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,((function (child_id,parent_id){
return (function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
});})(child_id,parent_id))
);

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5455__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5455__auto__)){
var custom_remove = temp__5455__auto__;
var G__13402 = this$;
var G__13403 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__13402,G__13403) : custom_remove.call(null,G__13402,G__13403));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__13405 = arguments.length;
switch (G__13405) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
});

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
});

shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2;

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__13407 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__13408 = null;
var count__13409 = (0);
var i__13410 = (0);
while(true){
if((i__13410 < count__13409)){
var vec__13411 = chunk__13408.cljs$core$IIndexed$_nth$arity$2(null,i__13410);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13411,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13411,(1),null);
var ev_def = vec__13411;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0)))].join('');
} else {
}

var handler_13417__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__13407,chunk__13408,count__13409,i__13410,vec__13411,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__13407,chunk__13408,count__13409,i__13410,vec__13411,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__13407,chunk__13408,count__13409,i__13410,handler_13417__$1,vec__13411,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_13417__$1.cljs$core$IFn$_invoke$arity$3 ? handler_13417__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_13417__$1.call(null,oref,e,el));
});})(seq__13407,chunk__13408,count__13409,i__13410,handler_13417__$1,vec__13411,ev,handler,ev_def))
);


var G__13418 = seq__13407;
var G__13419 = chunk__13408;
var G__13420 = count__13409;
var G__13421 = (i__13410 + (1));
seq__13407 = G__13418;
chunk__13408 = G__13419;
count__13409 = G__13420;
i__13410 = G__13421;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13407);
if(temp__5457__auto__){
var seq__13407__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13407__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__13407__$1);
var G__13422 = cljs.core.chunk_rest(seq__13407__$1);
var G__13423 = c__4947__auto__;
var G__13424 = cljs.core.count(c__4947__auto__);
var G__13425 = (0);
seq__13407 = G__13422;
chunk__13408 = G__13423;
count__13409 = G__13424;
i__13410 = G__13425;
continue;
} else {
var vec__13414 = cljs.core.first(seq__13407__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13414,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13414,(1),null);
var ev_def = vec__13414;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0)))].join('');
} else {
}

var handler_13426__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__13407,chunk__13408,count__13409,i__13410,vec__13414,ev,handler,ev_def,seq__13407__$1,temp__5457__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__13407,chunk__13408,count__13409,i__13410,vec__13414,ev,handler,ev_def,seq__13407__$1,temp__5457__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__13407,chunk__13408,count__13409,i__13410,handler_13426__$1,vec__13414,ev,handler,ev_def,seq__13407__$1,temp__5457__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_13426__$1.cljs$core$IFn$_invoke$arity$3 ? handler_13426__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_13426__$1.call(null,oref,e,el));
});})(seq__13407,chunk__13408,count__13409,i__13410,handler_13426__$1,vec__13414,ev,handler,ev_def,seq__13407__$1,temp__5457__auto__))
);


var G__13427 = cljs.core.next(seq__13407__$1);
var G__13428 = null;
var G__13429 = (0);
var G__13430 = (0);
seq__13407 = G__13427;
chunk__13408 = G__13428;
count__13409 = G__13429;
i__13410 = G__13430;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__13431){
var vec__13432 = p__13431;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13432,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13432,(1),null);
if(cljs.core.truth_((function (){var and__4442__auto__ = event;
if(cljs.core.truth_(and__4442__auto__)){
return handler;
} else {
return and__4442__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__5146__auto__ = [];
var len__5143__auto___13438 = arguments.length;
var i__5144__auto___13439 = (0);
while(true){
if((i__5144__auto___13439 < len__5143__auto___13438)){
args__5146__auto__.push((arguments[i__5144__auto___13439]));

var G__13440 = (i__5144__auto___13439 + (1));
i__5144__auto___13439 = G__13440;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((1) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5147__auto__);
});

shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''))," args: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e13437){if((e13437 instanceof Object)){
var e = e13437;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e13437;

}
}});

shadow.object.define.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.object.define.cljs$lang$applyTo = (function (seq13435){
var G__13436 = cljs.core.first(seq13435);
var seq13435__$1 = cljs.core.next(seq13435);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13436,seq13435__$1);
});

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__13442 = arguments.length;
switch (G__13442) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
});

shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__13443 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__13443) : shadow.dom.build.call(null,G__13443));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
});

shadow.object.make_dom.cljs$lang$maxFixedArity = 4;

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4755__auto__,k__4756__auto__){
var self__ = this;
var this__4755__auto____$1 = this;
return this__4755__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4756__auto__,null);
});

shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4757__auto__,k13446,else__4758__auto__){
var self__ = this;
var this__4757__auto____$1 = this;
var G__13450 = k13446;
var G__13450__$1 = (((G__13450 instanceof cljs.core.Keyword))?G__13450.fqn:null);
switch (G__13450__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13446,else__4758__auto__);

}
});

shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4769__auto__,writer__4770__auto__,opts__4771__auto__){
var self__ = this;
var this__4769__auto____$1 = this;
var pr_pair__4772__auto__ = ((function (this__4769__auto____$1){
return (function (keyval__4773__auto__){
return cljs.core.pr_sequential_writer(writer__4770__auto__,cljs.core.pr_writer,""," ","",opts__4771__auto__,keyval__4773__auto__);
});})(this__4769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4770__auto__,pr_pair__4772__auto__,"#shadow.object.Watch{",", ","}",opts__4771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13445){
var self__ = this;
var G__13445__$1 = this;
return (new cljs.core.RecordIter((0),G__13445__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4753__auto__){
var self__ = this;
var this__4753__auto____$1 = this;
return self__.__meta;
});

shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4759__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4751__auto__){
var self__ = this;
var this__4751__auto____$1 = this;
var h__4567__auto__ = self__.__hash;
if(!((h__4567__auto__ == null))){
return h__4567__auto__;
} else {
var h__4567__auto____$1 = (function (){var fexpr__13451 = ((function (h__4567__auto__,this__4751__auto____$1){
return (function (coll__4752__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4752__auto__));
});})(h__4567__auto__,this__4751__auto____$1))
;
return fexpr__13451(this__4751__auto____$1);
})();
self__.__hash = h__4567__auto____$1;

return h__4567__auto____$1;
}
});

shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13447,other13448){
var self__ = this;
var this13447__$1 = this;
return ((!((other13448 == null))) && ((this13447__$1.constructor === other13448.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13447__$1.key,other13448.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13447__$1.handler,other13448.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13447__$1.__extmap,other13448.__extmap)));
});

shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4764__auto__,k__4765__auto__){
var self__ = this;
var this__4764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4764__auto____$1),self__.__meta),k__4765__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4765__auto__)),null));
}
});

shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4762__auto__,k__4763__auto__,G__13445){
var self__ = this;
var this__4762__auto____$1 = this;
var pred__13452 = cljs.core.keyword_identical_QMARK_;
var expr__13453 = k__4763__auto__;
if(cljs.core.truth_((function (){var G__13455 = new cljs.core.Keyword(null,"key","key",-1516042587);
var G__13456 = expr__13453;
return (pred__13452.cljs$core$IFn$_invoke$arity$2 ? pred__13452.cljs$core$IFn$_invoke$arity$2(G__13455,G__13456) : pred__13452.call(null,G__13455,G__13456));
})())){
return (new shadow.object.Watch(G__13445,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13457 = new cljs.core.Keyword(null,"handler","handler",-195596612);
var G__13458 = expr__13453;
return (pred__13452.cljs$core$IFn$_invoke$arity$2 ? pred__13452.cljs$core$IFn$_invoke$arity$2(G__13457,G__13458) : pred__13452.call(null,G__13457,G__13458));
})())){
return (new shadow.object.Watch(self__.key,G__13445,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4763__auto__,G__13445),null));
}
}
});

shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4767__auto__){
var self__ = this;
var this__4767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4754__auto__,G__13445){
var self__ = this;
var this__4754__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__13445,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4760__auto__,entry__4761__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4761__auto__)){
return this__4760__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4760__auto____$1,entry__4761__auto__);
}
});

shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
});

shadow.object.Watch.cljs$lang$type = true;

shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4794__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
});

shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4794__auto__,writer__4795__auto__){
return cljs.core._write(writer__4795__auto__,"shadow.object/Watch");
});

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__13449){
var extmap__4790__auto__ = (function (){var G__13459 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13449,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__13449)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13459);
} else {
return G__13459;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__13449),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__13449),null,cljs.core.not_empty(extmap__4790__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
});

shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
});

shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
});

shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
});

shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
});

shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
});

shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
});

shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null)));
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__13461_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__13461_SHARP_));
});})(this$__$1))
,self__.watches);
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
self__.data = new$;

var seq__13462 = cljs.core.seq(self__.watches);
var chunk__13463 = null;
var count__13464 = (0);
var i__13465 = (0);
while(true){
if((i__13465 < count__13464)){
var map__13466 = chunk__13463.cljs$core$IIndexed$_nth$arity$2(null,i__13465);
var map__13466__$1 = ((((!((map__13466 == null)))?(((((map__13466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13466):map__13466);
var watch = map__13466__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13466__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13466__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(shadow.object.alive_QMARK_(this$__$1))){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__13474 = seq__13462;
var G__13475 = chunk__13463;
var G__13476 = count__13464;
var G__13477 = (i__13465 + (1));
seq__13462 = G__13474;
chunk__13463 = G__13475;
count__13464 = G__13476;
i__13465 = G__13477;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__13462);
if(temp__5457__auto__){
var seq__13462__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13462__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__13462__$1);
var G__13478 = cljs.core.chunk_rest(seq__13462__$1);
var G__13479 = c__4947__auto__;
var G__13480 = cljs.core.count(c__4947__auto__);
var G__13481 = (0);
seq__13462 = G__13478;
chunk__13463 = G__13479;
count__13464 = G__13480;
i__13465 = G__13481;
continue;
} else {
var map__13468 = cljs.core.first(seq__13462__$1);
var map__13468__$1 = ((((!((map__13468 == null)))?(((((map__13468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13468):map__13468);
var watch = map__13468__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13468__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13468__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(shadow.object.alive_QMARK_(this$__$1))){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__13482 = cljs.core.next(seq__13462__$1);
var G__13483 = null;
var G__13484 = (0);
var G__13485 = (0);
seq__13462 = G__13482;
chunk__13463 = G__13483;
count__13464 = G__13484;
i__13465 = G__13485;
continue;
}
} else {
return null;
}
}
break;
}
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__13470_13486 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__13471_13487 = null;
var count__13472_13488 = (0);
var i__13473_13489 = (0);
while(true){
if((i__13473_13489 < count__13472_13488)){
var child_13490 = chunk__13471_13487.cljs$core$IIndexed$_nth$arity$2(null,i__13473_13489);
shadow.object._destroy_BANG_(child_13490,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__13491 = seq__13470_13486;
var G__13492 = chunk__13471_13487;
var G__13493 = count__13472_13488;
var G__13494 = (i__13473_13489 + (1));
seq__13470_13486 = G__13491;
chunk__13471_13487 = G__13492;
count__13472_13488 = G__13493;
i__13473_13489 = G__13494;
continue;
} else {
var temp__5457__auto___13495 = cljs.core.seq(seq__13470_13486);
if(temp__5457__auto___13495){
var seq__13470_13496__$1 = temp__5457__auto___13495;
if(cljs.core.chunked_seq_QMARK_(seq__13470_13496__$1)){
var c__4947__auto___13497 = cljs.core.chunk_first(seq__13470_13496__$1);
var G__13498 = cljs.core.chunk_rest(seq__13470_13496__$1);
var G__13499 = c__4947__auto___13497;
var G__13500 = cljs.core.count(c__4947__auto___13497);
var G__13501 = (0);
seq__13470_13486 = G__13498;
chunk__13471_13487 = G__13499;
count__13472_13488 = G__13500;
i__13473_13489 = G__13501;
continue;
} else {
var child_13502 = cljs.core.first(seq__13470_13496__$1);
shadow.object._destroy_BANG_(child_13502,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__13503 = cljs.core.next(seq__13470_13496__$1);
var G__13504 = null;
var G__13505 = (0);
var G__13506 = (0);
seq__13470_13486 = G__13503;
chunk__13471_13487 = G__13504;
count__13472_13488 = G__13505;
i__13473_13489 = G__13506;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_13507 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_13507 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_13507);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
});

shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
});

shadow.object.ObjectRef.cljs$lang$type = true;

shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef";

shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"shadow.object/ObjectRef");
});

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__13509 = arguments.length;
switch (G__13509) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
});

shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
});

shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3;

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__13512 = arguments.length;
switch (G__13512) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
});

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if(((!((oref == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,((function (attr__$1){
return (function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
});})(attr__$1))
);
});

shadow.object.bind_change.cljs$lang$maxFixedArity = 4;

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__5146__auto__ = [];
var len__5143__auto___13529 = arguments.length;
var i__5144__auto___13530 = (0);
while(true){
if((i__5144__auto___13530 < len__5143__auto___13529)){
args__5146__auto__.push((arguments[i__5144__auto___13530]));

var G__13531 = (i__5144__auto___13530 + (1));
i__5144__auto___13530 = G__13531;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((2) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5147__auto__);
});

shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_13532 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5455__auto___13533 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5455__auto___13533)){
var dom_13534 = temp__5455__auto___13533;
shadow.dom.set_data(dom_13534,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_13534,dom_events_13532);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_13534], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_13534], 0));
} else {
var temp__5457__auto___13535 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5457__auto___13535)){
var dom_fn_13536 = temp__5457__auto___13535;
var dom_13537 = (function (){var G__13518 = (dom_fn_13536.cljs$core$IFn$_invoke$arity$2 ? dom_fn_13536.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_13536.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__13518) : shadow.dom.build.call(null,G__13518));
})();
shadow.dom.set_data(dom_13537,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_13537], 0));

shadow.object.bind_dom_events(oref,dom_13537,dom_events_13532);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_13537], 0));
} else {
}
}

var temp__5457__auto___13538 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5457__auto___13538)){
var watches_13539 = temp__5457__auto___13538;
var seq__13519_13540 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_13539));
var chunk__13520_13541 = null;
var count__13521_13542 = (0);
var i__13522_13543 = (0);
while(true){
if((i__13522_13543 < count__13521_13542)){
var vec__13523_13544 = chunk__13520_13541.cljs$core$IIndexed$_nth$arity$2(null,i__13522_13543);
var attr_13545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13523_13544,(0),null);
var handler_13546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13523_13544,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_13545,((function (seq__13519_13540,chunk__13520_13541,count__13521_13542,i__13522_13543,vec__13523_13544,attr_13545,handler_13546,watches_13539,temp__5457__auto___13538,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_13546.cljs$core$IFn$_invoke$arity$3 ? handler_13546.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_13546.call(null,oref,old,new$));
});})(seq__13519_13540,chunk__13520_13541,count__13521_13542,i__13522_13543,vec__13523_13544,attr_13545,handler_13546,watches_13539,temp__5457__auto___13538,oid,parent,result_chan,odef,obj,oref))
);


var G__13547 = seq__13519_13540;
var G__13548 = chunk__13520_13541;
var G__13549 = count__13521_13542;
var G__13550 = (i__13522_13543 + (1));
seq__13519_13540 = G__13547;
chunk__13520_13541 = G__13548;
count__13521_13542 = G__13549;
i__13522_13543 = G__13550;
continue;
} else {
var temp__5457__auto___13551__$1 = cljs.core.seq(seq__13519_13540);
if(temp__5457__auto___13551__$1){
var seq__13519_13552__$1 = temp__5457__auto___13551__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13519_13552__$1)){
var c__4947__auto___13553 = cljs.core.chunk_first(seq__13519_13552__$1);
var G__13554 = cljs.core.chunk_rest(seq__13519_13552__$1);
var G__13555 = c__4947__auto___13553;
var G__13556 = cljs.core.count(c__4947__auto___13553);
var G__13557 = (0);
seq__13519_13540 = G__13554;
chunk__13520_13541 = G__13555;
count__13521_13542 = G__13556;
i__13522_13543 = G__13557;
continue;
} else {
var vec__13526_13558 = cljs.core.first(seq__13519_13552__$1);
var attr_13559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13526_13558,(0),null);
var handler_13560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13526_13558,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_13559,((function (seq__13519_13540,chunk__13520_13541,count__13521_13542,i__13522_13543,vec__13526_13558,attr_13559,handler_13560,seq__13519_13552__$1,temp__5457__auto___13551__$1,watches_13539,temp__5457__auto___13538,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_13560.cljs$core$IFn$_invoke$arity$3 ? handler_13560.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_13560.call(null,oref,old,new$));
});})(seq__13519_13540,chunk__13520_13541,count__13521_13542,i__13522_13543,vec__13526_13558,attr_13559,handler_13560,seq__13519_13552__$1,temp__5457__auto___13551__$1,watches_13539,temp__5457__auto___13538,oid,parent,result_chan,odef,obj,oref))
);


var G__13561 = cljs.core.next(seq__13519_13552__$1);
var G__13562 = null;
var G__13563 = (0);
var G__13564 = (0);
seq__13519_13540 = G__13561;
chunk__13520_13541 = G__13562;
count__13521_13542 = G__13563;
i__13522_13543 = G__13564;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
});

shadow.object.create.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.create.cljs$lang$applyTo = (function (seq13515){
var G__13516 = cljs.core.first(seq13515);
var seq13515__$1 = cljs.core.next(seq13515);
var G__13517 = cljs.core.first(seq13515__$1);
var seq13515__$2 = cljs.core.next(seq13515__$1);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13516,G__13517,seq13515__$2);
});

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__13567 = arguments.length;
switch (G__13567) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
});

shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = ((function (attr__$1){
return (function (p1__13565_SHARP_){
var G__13568 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__13565_SHARP_) : node_gen.call(null,p1__13565_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__13568) : shadow.dom.build.call(null,G__13568));
});})(attr__$1))
;
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,((function (attr__$1,node_get,node,bind_key){
return (function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
});})(attr__$1,node_get,node,bind_key))
);

return cljs.core.deref(node);
});

shadow.object.bind_simple.cljs$lang$maxFixedArity = 3;

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = ((function (attr__$1,curval){
return (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});})(attr__$1,curval))
;
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,((function (attr__$1,curval,make_child_fn,child){
return (function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

var G__13570 = new_child;
var G__13571 = new cljs.core.Keyword("dom","entered","dom/entered",506699596);
return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(G__13570,G__13571) : shadow.object.notify_down_BANG_.call(null,G__13570,G__13571));
});})(attr__$1,curval,make_child_fn,child))
);

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__13572_13576 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__13573_13577 = null;
var count__13574_13578 = (0);
var i__13575_13579 = (0);
while(true){
if((i__13575_13579 < count__13574_13578)){
var obj_13580 = chunk__13573_13577.cljs$core$IIndexed$_nth$arity$2(null,i__13575_13579);
var obj_13581__$1 = shadow.object.get_from_dom(obj_13580);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_13581__$1);


var G__13582 = seq__13572_13576;
var G__13583 = chunk__13573_13577;
var G__13584 = count__13574_13578;
var G__13585 = (i__13575_13579 + (1));
seq__13572_13576 = G__13582;
chunk__13573_13577 = G__13583;
count__13574_13578 = G__13584;
i__13575_13579 = G__13585;
continue;
} else {
var temp__5457__auto___13586 = cljs.core.seq(seq__13572_13576);
if(temp__5457__auto___13586){
var seq__13572_13587__$1 = temp__5457__auto___13586;
if(cljs.core.chunked_seq_QMARK_(seq__13572_13587__$1)){
var c__4947__auto___13588 = cljs.core.chunk_first(seq__13572_13587__$1);
var G__13589 = cljs.core.chunk_rest(seq__13572_13587__$1);
var G__13590 = c__4947__auto___13588;
var G__13591 = cljs.core.count(c__4947__auto___13588);
var G__13592 = (0);
seq__13572_13576 = G__13589;
chunk__13573_13577 = G__13590;
count__13574_13578 = G__13591;
i__13575_13579 = G__13592;
continue;
} else {
var obj_13593 = cljs.core.first(seq__13572_13587__$1);
var obj_13594__$1 = shadow.object.get_from_dom(obj_13593);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_13594__$1);


var G__13595 = cljs.core.next(seq__13572_13587__$1);
var G__13596 = null;
var G__13597 = (0);
var G__13598 = (0);
seq__13572_13576 = G__13595;
chunk__13573_13577 = G__13596;
count__13574_13578 = G__13597;
i__13575_13579 = G__13598;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__13601 = arguments.length;
switch (G__13601) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__13599_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__13599_SHARP_);
}));
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = ((function (attr__$1,update_children,coll_dom){
return (function (p__13602){
var vec__13603 = p__13602;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13603,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13603,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,((function (obj,vec__13603,key,val,attr__$1,update_children,coll_dom){
return (function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
});})(obj,vec__13603,key,val,attr__$1,update_children,coll_dom))
);

return obj;
});})(attr__$1,update_children,coll_dom))
;
var seq__13606_13619 = cljs.core.seq((function (){var G__13610 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__13610) : coll_transform.call(null,G__13610));
})());
var chunk__13607_13620 = null;
var count__13608_13621 = (0);
var i__13609_13622 = (0);
while(true){
if((i__13609_13622 < count__13608_13621)){
var item_13623 = chunk__13607_13620.cljs$core$IIndexed$_nth$arity$2(null,i__13609_13622);
shadow.object.dom_enter(coll_dom,make_item_fn(item_13623));


var G__13624 = seq__13606_13619;
var G__13625 = chunk__13607_13620;
var G__13626 = count__13608_13621;
var G__13627 = (i__13609_13622 + (1));
seq__13606_13619 = G__13624;
chunk__13607_13620 = G__13625;
count__13608_13621 = G__13626;
i__13609_13622 = G__13627;
continue;
} else {
var temp__5457__auto___13628 = cljs.core.seq(seq__13606_13619);
if(temp__5457__auto___13628){
var seq__13606_13629__$1 = temp__5457__auto___13628;
if(cljs.core.chunked_seq_QMARK_(seq__13606_13629__$1)){
var c__4947__auto___13630 = cljs.core.chunk_first(seq__13606_13629__$1);
var G__13631 = cljs.core.chunk_rest(seq__13606_13629__$1);
var G__13632 = c__4947__auto___13630;
var G__13633 = cljs.core.count(c__4947__auto___13630);
var G__13634 = (0);
seq__13606_13619 = G__13631;
chunk__13607_13620 = G__13632;
count__13608_13621 = G__13633;
i__13609_13622 = G__13634;
continue;
} else {
var item_13635 = cljs.core.first(seq__13606_13629__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_13635));


var G__13636 = cljs.core.next(seq__13606_13629__$1);
var G__13637 = null;
var G__13638 = (0);
var G__13639 = (0);
seq__13606_13619 = G__13636;
chunk__13607_13620 = G__13637;
count__13608_13621 = G__13638;
i__13609_13622 = G__13639;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,((function (attr__$1,update_children,coll_dom,make_item_fn){
return (function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4546__auto__ = count_new;
var y__4547__auto__ = count_children;
return ((x__4546__auto__ < y__4547__auto__) ? x__4546__auto__ : y__4547__auto__);
})();
var n__5010__auto___13640 = count_children__$1;
var idx_13641 = (0);
while(true){
if((idx_13641 < n__5010__auto___13640)){
var cn_13642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_13641);
var cc_13643 = shadow.object.get_from_dom(cn_13642);
var ckey_13644 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_13643);
var cval_13645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_13643,item_key);
var vec__13611_13646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_13641);
var nkey_13647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13611_13646,(0),null);
var nval_13648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13611_13646,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_13644,nkey_13647)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_13645,nval_13648)))){
} else {
var new_obj_13649 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_13647,nval_13648], null));
shadow.dom.replace_node(cn_13642,new_obj_13649);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_13643);

shadow.object.notify_tree_BANG_(new_obj_13649,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__13650 = (idx_13641 + (1));
idx_13641 = G__13650;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__13614_13651 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__13615_13652 = null;
var count__13616_13653 = (0);
var i__13617_13654 = (0);
while(true){
if((i__13617_13654 < count__13616_13653)){
var item_13655 = chunk__13615_13652.cljs$core$IIndexed$_nth$arity$2(null,i__13617_13654);
shadow.object.dom_enter(coll_dom,make_item_fn(item_13655));


var G__13656 = seq__13614_13651;
var G__13657 = chunk__13615_13652;
var G__13658 = count__13616_13653;
var G__13659 = (i__13617_13654 + (1));
seq__13614_13651 = G__13656;
chunk__13615_13652 = G__13657;
count__13616_13653 = G__13658;
i__13617_13654 = G__13659;
continue;
} else {
var temp__5457__auto___13660 = cljs.core.seq(seq__13614_13651);
if(temp__5457__auto___13660){
var seq__13614_13661__$1 = temp__5457__auto___13660;
if(cljs.core.chunked_seq_QMARK_(seq__13614_13661__$1)){
var c__4947__auto___13662 = cljs.core.chunk_first(seq__13614_13661__$1);
var G__13663 = cljs.core.chunk_rest(seq__13614_13661__$1);
var G__13664 = c__4947__auto___13662;
var G__13665 = cljs.core.count(c__4947__auto___13662);
var G__13666 = (0);
seq__13614_13651 = G__13663;
chunk__13615_13652 = G__13664;
count__13616_13653 = G__13665;
i__13617_13654 = G__13666;
continue;
} else {
var item_13667 = cljs.core.first(seq__13614_13661__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_13667));


var G__13668 = cljs.core.next(seq__13614_13661__$1);
var G__13669 = null;
var G__13670 = (0);
var G__13671 = (0);
seq__13614_13651 = G__13668;
chunk__13615_13652 = G__13669;
count__13616_13653 = G__13670;
i__13617_13654 = G__13671;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
});})(attr__$1,update_children,coll_dom,make_item_fn))
);

return coll_dom;
});

shadow.object.bind_children.cljs$lang$maxFixedArity = 6;

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4442__auto__ = key;
if(cljs.core.truth_(and__4442__auto__)){
return path;
} else {
return and__4442__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__13672 = "inspect!";
var G__13673 = shadow.object._id(oref);
var G__13674 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref))].join('');
var G__13675 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__13672,G__13673,G__13674,G__13675) : shadow.object.info.call(null,G__13672,G__13673,G__13674,G__13675));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__13676_13694 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__13677_13695 = null;
var count__13678_13696 = (0);
var i__13679_13697 = (0);
while(true){
if((i__13679_13697 < count__13678_13696)){
var vec__13680_13698 = chunk__13677_13695.cljs$core$IIndexed$_nth$arity$2(null,i__13679_13697);
var id_13699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13680_13698,(0),null);
var oref_13700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13680_13698,(1),null);
var G__13683_13701 = "dump";
var G__13684_13702 = id_13699;
var G__13685_13703 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_13700)], 0));
var G__13686_13704 = cljs.core.deref(shadow.object._data(oref_13700));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__13683_13701,G__13684_13702,G__13685_13703,G__13686_13704) : shadow.object.info.call(null,G__13683_13701,G__13684_13702,G__13685_13703,G__13686_13704));


var G__13705 = seq__13676_13694;
var G__13706 = chunk__13677_13695;
var G__13707 = count__13678_13696;
var G__13708 = (i__13679_13697 + (1));
seq__13676_13694 = G__13705;
chunk__13677_13695 = G__13706;
count__13678_13696 = G__13707;
i__13679_13697 = G__13708;
continue;
} else {
var temp__5457__auto___13709 = cljs.core.seq(seq__13676_13694);
if(temp__5457__auto___13709){
var seq__13676_13710__$1 = temp__5457__auto___13709;
if(cljs.core.chunked_seq_QMARK_(seq__13676_13710__$1)){
var c__4947__auto___13711 = cljs.core.chunk_first(seq__13676_13710__$1);
var G__13712 = cljs.core.chunk_rest(seq__13676_13710__$1);
var G__13713 = c__4947__auto___13711;
var G__13714 = cljs.core.count(c__4947__auto___13711);
var G__13715 = (0);
seq__13676_13694 = G__13712;
chunk__13677_13695 = G__13713;
count__13678_13696 = G__13714;
i__13679_13697 = G__13715;
continue;
} else {
var vec__13687_13716 = cljs.core.first(seq__13676_13710__$1);
var id_13717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13687_13716,(0),null);
var oref_13718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13687_13716,(1),null);
var G__13690_13719 = "dump";
var G__13691_13720 = id_13717;
var G__13692_13721 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_13718)], 0));
var G__13693_13722 = cljs.core.deref(shadow.object._data(oref_13718));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__13690_13719,G__13691_13720,G__13692_13721,G__13693_13722) : shadow.object.info.call(null,G__13690_13719,G__13691_13720,G__13692_13721,G__13693_13722));


var G__13723 = cljs.core.next(seq__13676_13710__$1);
var G__13724 = null;
var G__13725 = (0);
var G__13726 = (0);
seq__13676_13694 = G__13723;
chunk__13677_13695 = G__13724;
count__13678_13696 = G__13725;
i__13679_13697 = G__13726;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
