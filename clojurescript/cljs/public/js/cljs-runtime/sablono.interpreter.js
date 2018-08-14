goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('sablono.normalize');
goog.require('sablono.util');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if(((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null))))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto__.call(null,this$));
} else {
var m__4798__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
}
});

/**
 * Updates the state of the wrapped input element.
 */
sablono.interpreter.update_state = (function sablono$interpreter$update_state(component,next_props,property,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
var G__3841_3844 = next_state;
var G__3842_3845 = next_props;
var G__3843_3846 = ({"onChange": on_change});
goog.object.extend(G__3841_3844,G__3842_3845,G__3843_3846);

goog.object.set(next_state,property,value);

return component.setState(next_state);
});
sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(element,property){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({});
var G__3850_3858 = state;
var G__3851_3859 = props;
var G__3852_3860 = ({"onChange": (function (){var G__3853 = goog.object.get(this$,"onChange");
var G__3854 = this$;
return goog.bind(G__3853,G__3854);
})()});
goog.object.extend(G__3850_3858,G__3851_3859,G__3852_3860);

return state;
})();

return React.Component.call(this$,props);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x3855_3861 = ctor.prototype;
x3855_3861.onChange = ((function (x3855_3861,ctor){
return (function (event){
var this$ = this;
var temp__5457__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5457__auto__)){
var handler = temp__5457__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return sablono.interpreter.update_state(this$,this$.props,property,goog.object.getValueByKeys(event,"target",property));
} else {
return null;
}
});})(x3855_3861,ctor))
;

x3855_3861.componentWillReceiveProps = ((function (x3855_3861,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state",property);
var element_value = (function (){var G__3856 = ReactDOM.findDOMNode(this$);
var G__3857 = property;
return goog.object.get(G__3856,G__3857);
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(state_value)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_value)].join(''))){
return sablono.interpreter.update_state(this$,new_props,property,element_value);
} else {
return sablono.interpreter.update_state(this$,new_props,property,goog.object.get(new_props,property));
}
});})(x3855_3861,ctor))
;

x3855_3861.render = ((function (x3855_3861,ctor){
return (function (){
var this$ = this;
return React.createElement(element,this$.state);
});})(x3855_3861,ctor))
;


return ctor;
});
sablono.interpreter.lazy_load_wrappers = (function sablono$interpreter$lazy_load_wrappers(){
if(cljs.core.truth_(sablono.interpreter.wrapped_textarea)){
return null;
} else {
sablono.interpreter.wrapped_input = sablono.interpreter.wrap_form_element("input","value");

sablono.interpreter.wrapped_checked = sablono.interpreter.wrap_form_element("input","checked");

sablono.interpreter.wrapped_select = sablono.interpreter.wrap_form_element("select","value");

return sablono.interpreter.wrapped_textarea = sablono.interpreter.wrap_form_element("textarea","value");
}
});
/**
 * Returns true if `type` and `props` are used a controlled input,
 *   otherwise false.
 */
sablono.interpreter.controlled_input_QMARK_ = (function sablono$interpreter$controlled_input_QMARK_(type,props){
var and__4442__auto__ = cljs.core.object_QMARK_(props);
if(and__4442__auto__){
var G__3863 = type;
switch (G__3863) {
case "input":
return ((!((props.checked == null))) || (!((props.value == null))));

break;
case "select":
return !((props.value == null));

break;
case "textarea":
return !((props.value == null));

break;
default:
return false;

}
} else {
return and__4442__auto__;
}
});
/**
 * Returns either `type` or a wrapped element for controlled
 *   inputs.
 */
sablono.interpreter.element_class = (function sablono$interpreter$element_class(type,props){
if(sablono.interpreter.controlled_input_QMARK_(type,props)){
sablono.interpreter.lazy_load_wrappers();

var G__3867 = type;
switch (G__3867) {
case "input":
var G__3875 = (function (){var and__4442__auto__ = cljs.core.object_QMARK_(props);
if(and__4442__auto__){
return props.type;
} else {
return and__4442__auto__;
}
})();
switch (G__3875) {
case "radio":
return sablono.interpreter.wrapped_checked;

break;
case "checkbox":
return sablono.interpreter.wrapped_checked;

break;
default:
return sablono.interpreter.wrapped_input;

}

break;
case "select":
return sablono.interpreter.wrapped_select;

break;
case "textarea":
return sablono.interpreter.wrapped_textarea;

break;
default:
return type;

}
} else {
return type;
}
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__5146__auto__ = [];
var len__5143__auto___3893 = arguments.length;
var i__5144__auto___3894 = (0);
while(true){
if((i__5144__auto___3894 < len__5143__auto___3893)){
args__5146__auto__.push((arguments[i__5144__auto___3894]));

var G__3895 = (i__5144__auto___3894 + (1));
i__5144__auto___3894 = G__3895;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((2) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5147__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,sablono.interpreter.element_class(type,props),props,children);
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq3889){
var G__3890 = cljs.core.first(seq3889);
var seq3889__$1 = cljs.core.next(seq3889);
var G__3891 = cljs.core.first(seq3889__$1);
var seq3889__$2 = cljs.core.next(seq3889__$1);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3890,G__3891,seq3889__$2);
});

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var temp__5457__auto__ = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5457__auto__)){
var js_attrs = temp__5457__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
js_attrs.className = class$__$1;
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(sablono.interpreter.interpret),x);
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element){
var vec__3901 = sablono.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3901,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3901,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3901,(2),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.interpreter.create_element,type,sablono.interpreter.attributes(attrs),sablono.interpreter.interpret_seq(content));
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
sablono.interpreter.interpret_vec = (function sablono$interpreter$interpret_vec(x){
if(cljs.core.truth_(sablono.util.element_QMARK_(x))){
return sablono.interpreter.element(x);
} else {
return sablono.interpreter.interpret_seq(x);
}
});
goog.object.set(sablono.interpreter.IInterpreter,"null",true);

var G__3906_3921 = sablono.interpreter.interpret;
var G__3907_3922 = "null";
var G__3908_3923 = ((function (G__3906_3921,G__3907_3922){
return (function (this$){
return null;
});})(G__3906_3921,G__3907_3922))
;
goog.object.set(G__3906_3921,G__3907_3922,G__3908_3923);

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

goog.object.set(sablono.interpreter.IInterpreter,"_",true);

var G__3909_3926 = sablono.interpreter.interpret;
var G__3910_3927 = "_";
var G__3911_3928 = ((function (G__3909_3926,G__3910_3927){
return (function (this$){
return this$;
});})(G__3909_3926,G__3910_3927))
;
goog.object.set(G__3909_3926,G__3910_3927,G__3911_3928);

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

//# sourceMappingURL=sablono.interpreter.js.map
