goog.provide('shadow.animate');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.object');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('goog.dom.vendor');
goog.require('goog.style');
goog.require('shadow.util');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_from$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (shadow.animate._animate_from[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto__.call(null,this$));
} else {
var m__4798__auto____$1 = (shadow.animate._animate_from["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_to$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (shadow.animate._animate_to[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto__.call(null,this$));
} else {
var m__4798__auto____$1 = (shadow.animate._animate_to["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto__.call(null,this$));
} else {
var m__4798__auto____$1 = (shadow.animate._animate_toggles["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
}
});

/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto__.call(null,this$));
} else {
var m__4798__auto____$1 = (shadow.animate._animate_timings["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
}
});

/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto__.call(null,this$));
} else {
var m__4798__auto____$1 = (shadow.animate._animate_delays["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (timings,delays){
return (function (p__13769){
var vec__13770 = p__13769;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13770,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13770,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__4442__auto__ = delay;
if(cljs.core.truth_(and__4442__auto__)){
return (delay > (0));
} else {
return and__4442__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})())].join('');
});})(timings,delays))
,timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
var x__4797__auto__ = (((animator == null))?null:animator);
var m__4798__auto__ = (shadow.animate.get_duration[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4798__auto__.call(null,animator));
} else {
var m__4798__auto____$1 = (shadow.animate.get_duration["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4798__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
}
});

/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
var x__4797__auto__ = (((animator == null))?null:animator);
var m__4798__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4798__auto__.call(null,animator));
} else {
var m__4798__auto____$1 = (shadow.animate.init_BANG_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4798__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
}
});

/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
var x__4797__auto__ = (((animator == null))?null:animator);
var m__4798__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4798__auto__.call(null,animator));
} else {
var m__4798__auto____$1 = (shadow.animate.start_BANG_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4798__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
}
});

/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
var x__4797__auto__ = (((animator == null))?null:animator);
var m__4798__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4798__auto__.call(null,animator));
} else {
var m__4798__auto____$1 = (shadow.animate.finish_BANG_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4798__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5010__auto__ = self__.items.length;
var i__12626__auto__ = (0);
while(true){
if((i__12626__auto__ < n__5010__auto__)){
var map__13776_13785 = (self__.items[i__12626__auto__]);
var map__13776_13786__$1 = ((((!((map__13776_13785 == null)))?(((((map__13776_13785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13776_13785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13776_13785):map__13776_13785);
var el_13787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13776_13786__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_13788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13776_13786__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_13787,from_13788);

var G__13789 = (i__12626__auto__ + (1));
i__12626__auto__ = G__13789;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5010__auto__ = self__.items.length;
var i__12626__auto__ = (0);
while(true){
if((i__12626__auto__ < n__5010__auto__)){
var map__13781_13790 = (self__.items[i__12626__auto__]);
var map__13781_13791__$1 = ((((!((map__13781_13790 == null)))?(((((map__13781_13790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13781_13790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13781_13790):map__13781_13790);
var el_13792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13781_13791__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_13793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13781_13791__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_13794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13781_13791__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_13793["transition"] = transition_13794);

goog.style.setStyle(el_13792,to_13793);

var G__13795 = (i__12626__auto__ + (1));
i__12626__auto__ = G__13795;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5010__auto__ = self__.items.length;
var i__12626__auto__ = (0);
while(true){
if((i__12626__auto__ < n__5010__auto__)){
var map__13783_13796 = (self__.items[i__12626__auto__]);
var map__13783_13797__$1 = ((((!((map__13783_13796 == null)))?(((((map__13783_13796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13783_13796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13783_13796):map__13783_13796);
var el_13798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13783_13797__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_13799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13783_13797__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_13799["transition"] = null);

goog.style.setStyle(el_13798,toggles_13799);

var G__13800 = (i__12626__auto__ + (1));
i__12626__auto__ = G__13800;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
});

shadow.animate.Animator.cljs$lang$type = true;

shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator";

shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"shadow.animate/Animator");
});

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
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
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4755__auto__,k__4756__auto__){
var self__ = this;
var this__4755__auto____$1 = this;
return this__4755__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4756__auto__,null);
});

shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4757__auto__,k13802,else__4758__auto__){
var self__ = this;
var this__4757__auto____$1 = this;
var G__13806 = k13802;
var G__13806__$1 = (((G__13806 instanceof cljs.core.Keyword))?G__13806.fqn:null);
switch (G__13806__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13802,else__4758__auto__);

}
});

shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4769__auto__,writer__4770__auto__,opts__4771__auto__){
var self__ = this;
var this__4769__auto____$1 = this;
var pr_pair__4772__auto__ = ((function (this__4769__auto____$1){
return (function (keyval__4773__auto__){
return cljs.core.pr_sequential_writer(writer__4770__auto__,cljs.core.pr_writer,""," ","",opts__4771__auto__,keyval__4773__auto__);
});})(this__4769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4770__auto__,pr_pair__4772__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__4771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13801){
var self__ = this;
var G__13801__$1 = this;
return (new cljs.core.RecordIter((0),G__13801__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4753__auto__){
var self__ = this;
var this__4753__auto____$1 = this;
return self__.__meta;
});

shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4759__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4751__auto__){
var self__ = this;
var this__4751__auto____$1 = this;
var h__4567__auto__ = self__.__hash;
if(!((h__4567__auto__ == null))){
return h__4567__auto__;
} else {
var h__4567__auto____$1 = (function (){var fexpr__13809 = ((function (h__4567__auto__,this__4751__auto____$1){
return (function (coll__4752__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__4752__auto__));
});})(h__4567__auto__,this__4751__auto____$1))
;
return fexpr__13809(this__4751__auto____$1);
})();
self__.__hash = h__4567__auto____$1;

return h__4567__auto____$1;
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this13803,other13804){
var self__ = this;
var this13803__$1 = this;
return ((!((other13804 == null))) && ((this13803__$1.constructor === other13804.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13803__$1.el,other13804.el)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13803__$1.from,other13804.from)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13803__$1.to,other13804.to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13803__$1.toggles,other13804.toggles)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13803__$1.transition,other13804.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this13803__$1.__extmap,other13804.__extmap)));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4764__auto__,k__4765__auto__){
var self__ = this;
var this__4764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__4765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4764__auto____$1),self__.__meta),k__4765__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4765__auto__)),null));
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4762__auto__,k__4763__auto__,G__13801){
var self__ = this;
var this__4762__auto____$1 = this;
var pred__13816 = cljs.core.keyword_identical_QMARK_;
var expr__13817 = k__4763__auto__;
if(cljs.core.truth_((function (){var G__13819 = new cljs.core.Keyword(null,"el","el",-1618201118);
var G__13820 = expr__13817;
return (pred__13816.cljs$core$IFn$_invoke$arity$2 ? pred__13816.cljs$core$IFn$_invoke$arity$2(G__13819,G__13820) : pred__13816.call(null,G__13819,G__13820));
})())){
return (new shadow.animate.AnimationStep(G__13801,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13821 = new cljs.core.Keyword(null,"from","from",1815293044);
var G__13822 = expr__13817;
return (pred__13816.cljs$core$IFn$_invoke$arity$2 ? pred__13816.cljs$core$IFn$_invoke$arity$2(G__13821,G__13822) : pred__13816.call(null,G__13821,G__13822));
})())){
return (new shadow.animate.AnimationStep(self__.el,G__13801,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13823 = new cljs.core.Keyword(null,"to","to",192099007);
var G__13824 = expr__13817;
return (pred__13816.cljs$core$IFn$_invoke$arity$2 ? pred__13816.cljs$core$IFn$_invoke$arity$2(G__13823,G__13824) : pred__13816.call(null,G__13823,G__13824));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__13801,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13825 = new cljs.core.Keyword(null,"toggles","toggles",1077909479);
var G__13826 = expr__13817;
return (pred__13816.cljs$core$IFn$_invoke$arity$2 ? pred__13816.cljs$core$IFn$_invoke$arity$2(G__13825,G__13826) : pred__13816.call(null,G__13825,G__13826));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__13801,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__13827 = new cljs.core.Keyword(null,"transition","transition",765692007);
var G__13828 = expr__13817;
return (pred__13816.cljs$core$IFn$_invoke$arity$2 ? pred__13816.cljs$core$IFn$_invoke$arity$2(G__13827,G__13828) : pred__13816.call(null,G__13827,G__13828));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__13801,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4763__auto__,G__13801),null));
}
}
}
}
}
});

shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4767__auto__){
var self__ = this;
var this__4767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4754__auto__,G__13801){
var self__ = this;
var this__4754__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__13801,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4760__auto__,entry__4761__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4761__auto__)){
return this__4760__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4760__auto____$1,entry__4761__auto__);
}
});

shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
});

shadow.animate.AnimationStep.cljs$lang$type = true;

shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__4794__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
});

shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__4794__auto__,writer__4795__auto__){
return cljs.core._write(writer__4795__auto__,"shadow.animate/AnimationStep");
});

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__13805){
var extmap__4790__auto__ = (function (){var G__13829 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13805,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__13805)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13829);
} else {
return G__13829;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__13805),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__13805),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__13805),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__13805),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__13805),null,cljs.core.not_empty(extmap__4790__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4902__auto__ = (function shadow$animate$setup_$_iter__13835(s__13836){
return (new cljs.core.LazySeq(null,(function (){
var s__13836__$1 = s__13836;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__13836__$1);
if(temp__5457__auto__){
var s__13836__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13836__$2)){
var c__4900__auto__ = cljs.core.chunk_first(s__13836__$2);
var size__4901__auto__ = cljs.core.count(c__4900__auto__);
var b__13838 = cljs.core.chunk_buffer(size__4901__auto__);
if((function (){var i__13837 = (0);
while(true){
if((i__13837 < size__4901__auto__)){
var vec__13839 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4900__auto__,i__13837);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13839,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13839,(1),null);
cljs.core.chunk_append(b__13838,(function (){
if(((!((adef == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__13849 = (i__13837 + (1));
i__13837 = G__13849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13838),shadow$animate$setup_$_iter__13835(cljs.core.chunk_rest(s__13836__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13838),null);
}
} else {
var vec__13843 = cljs.core.first(s__13836__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13843,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13843,(1),null);
return cljs.core.cons((function (){
if(((!((adef == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__13835(cljs.core.rest(s__13836__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4902__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__10053__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto__){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto__){
return (function (state_13863){
var state_val_13865 = (state_13863[(1)]);
if((state_val_13865 === (1))){
var inst_13857 = shadow.animate.get_duration(animator);
var inst_13858 = cljs.core.async.timeout(inst_13857);
var state_13863__$1 = state_13863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13863__$1,(2),inst_13858);
} else {
if((state_val_13865 === (2))){
var inst_13860 = (state_13863[(2)]);
var inst_13861 = shadow.animate.finish_BANG_(animator);
var state_13863__$1 = (function (){var statearr_13866 = state_13863;
(statearr_13866[(7)] = inst_13860);

(statearr_13866[(8)] = inst_13861);

return statearr_13866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13863__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});})(c__10053__auto__))
;
return ((function (switch__9905__auto__,c__10053__auto__){
return (function() {
var shadow$animate$continue_BANG__$_state_machine__9906__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__9906__auto____0 = (function (){
var statearr_13867 = [null,null,null,null,null,null,null,null,null];
(statearr_13867[(0)] = shadow$animate$continue_BANG__$_state_machine__9906__auto__);

(statearr_13867[(1)] = (1));

return statearr_13867;
});
var shadow$animate$continue_BANG__$_state_machine__9906__auto____1 = (function (state_13863){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_13863);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e13868){if((e13868 instanceof Object)){
var ex__9909__auto__ = e13868;
var statearr_13869_13871 = state_13863;
(statearr_13869_13871[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13872 = state_13863;
state_13863 = G__13872;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__9906__auto__ = function(state_13863){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__9906__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__9906__auto____1.call(this,state_13863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__9906__auto____0;
shadow$animate$continue_BANG__$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__9906__auto____1;
return shadow$animate$continue_BANG__$_state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto__))
})();
var state__10055__auto__ = (function (){var statearr_13870 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_13870[(6)] = c__10053__auto__);

return statearr_13870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto__))
);

return c__10053__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
shadow.animate.init_BANG_(animator);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__13877 = arguments.length;
switch (G__13877) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate13878 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate13878 = (function (attr,from,to,timing,delay,meta13879){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta13879 = meta13879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate13878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13880,meta13879__$1){
var self__ = this;
var _13880__$1 = this;
return (new shadow.animate.t_shadow$animate13878(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta13879__$1));
});

shadow.animate.t_shadow$animate13878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13880){
var self__ = this;
var _13880__$1 = this;
return self__.meta13879;
});

shadow.animate.t_shadow$animate13878.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate13878.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate13878.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate13878.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate13878.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
});

shadow.animate.t_shadow$animate13878.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
});

shadow.animate.t_shadow$animate13878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta13879","meta13879",-2044210474,null)], null);
});

shadow.animate.t_shadow$animate13878.cljs$lang$type = true;

shadow.animate.t_shadow$animate13878.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate13878";

shadow.animate.t_shadow$animate13878.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"shadow.animate/t_shadow$animate13878");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate13878.
 */
shadow.animate.__GT_t_shadow$animate13878 = (function shadow$animate$__GT_t_shadow$animate13878(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta13879){
return (new shadow.animate.t_shadow$animate13878(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta13879));
});

}

return (new shadow.animate.t_shadow$animate13878(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.transition.cljs$lang$maxFixedArity = 5;

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate13898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate13898 = (function (attr,from,to,meta13899){
this.attr = attr;
this.from = from;
this.to = to;
this.meta13899 = meta13899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate13898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13900,meta13899__$1){
var self__ = this;
var _13900__$1 = this;
return (new shadow.animate.t_shadow$animate13898(self__.attr,self__.from,self__.to,meta13899__$1));
});

shadow.animate.t_shadow$animate13898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13900){
var self__ = this;
var _13900__$1 = this;
return self__.meta13899;
});

shadow.animate.t_shadow$animate13898.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate13898.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate13898.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate13898.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate13898.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate13898.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate13898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta13899","meta13899",-828030563,null)], null);
});

shadow.animate.t_shadow$animate13898.cljs$lang$type = true;

shadow.animate.t_shadow$animate13898.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate13898";

shadow.animate.t_shadow$animate13898.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"shadow.animate/t_shadow$animate13898");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate13898.
 */
shadow.animate.__GT_t_shadow$animate13898 = (function shadow$animate$toggle_$___GT_t_shadow$animate13898(attr__$1,from__$1,to__$1,meta13899){
return (new shadow.animate.t_shadow$animate13898(attr__$1,from__$1,to__$1,meta13899));
});

}

return (new shadow.animate.t_shadow$animate13898(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__13929 = arguments.length;
switch (G__13929) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate13930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate13930 = (function (attrs,meta13931){
this.attrs = attrs;
this.meta13931 = meta13931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate13930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13932,meta13931__$1){
var self__ = this;
var _13932__$1 = this;
return (new shadow.animate.t_shadow$animate13930(self__.attrs,meta13931__$1));
});

shadow.animate.t_shadow$animate13930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13932){
var self__ = this;
var _13932__$1 = this;
return self__.meta13931;
});

shadow.animate.t_shadow$animate13930.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate13930.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate13930.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
});

shadow.animate.t_shadow$animate13930.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate13930.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate13930.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate13930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13931","meta13931",959739206,null)], null);
});

shadow.animate.t_shadow$animate13930.cljs$lang$type = true;

shadow.animate.t_shadow$animate13930.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate13930";

shadow.animate.t_shadow$animate13930.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"shadow.animate/t_shadow$animate13930");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate13930.
 */
shadow.animate.__GT_t_shadow$animate13930 = (function shadow$animate$__GT_t_shadow$animate13930(attrs__$1,meta13931){
return (new shadow.animate.t_shadow$animate13930(attrs__$1,meta13931));
});

}

return (new shadow.animate.t_shadow$animate13930(attrs,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
});

shadow.animate.set_attr.cljs$lang$maxFixedArity = 2;

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate13934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate13934 = (function (attr,meta13935){
this.attr = attr;
this.meta13935 = meta13935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate13934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13936,meta13935__$1){
var self__ = this;
var _13936__$1 = this;
return (new shadow.animate.t_shadow$animate13934(self__.attr,meta13935__$1));
});

shadow.animate.t_shadow$animate13934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13936){
var self__ = this;
var _13936__$1 = this;
return self__.meta13935;
});

shadow.animate.t_shadow$animate13934.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate13934.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate13934.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate13934.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
});

shadow.animate.t_shadow$animate13934.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate13934.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate13934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta13935","meta13935",-1652552686,null)], null);
});

shadow.animate.t_shadow$animate13934.cljs$lang$type = true;

shadow.animate.t_shadow$animate13934.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate13934";

shadow.animate.t_shadow$animate13934.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"shadow.animate/t_shadow$animate13934");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate13934.
 */
shadow.animate.__GT_t_shadow$animate13934 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate13934(attr__$1,meta13935){
return (new shadow.animate.t_shadow$animate13934(attr__$1,meta13935));
});

}

return (new shadow.animate.t_shadow$animate13934(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__5146__auto__ = [];
var len__5143__auto___13942 = arguments.length;
var i__5144__auto___13943 = (0);
while(true){
if((i__5144__auto___13943 < len__5143__auto___13942)){
args__5146__auto__.push((arguments[i__5144__auto___13943]));

var G__13944 = (i__5144__auto___13943 + (1));
i__5144__auto___13943 = G__13944;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5455__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var adef = temp__5455__auto__;
var G__13945 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__13946 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__13947 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__13948 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__13949 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__13950 = cljs.core.rest(transitions__$1);
to = G__13945;
from = G__13946;
toggles = G__13947;
timings = G__13948;
delays = G__13949;
transitions__$1 = G__13950;
continue;
} else {
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate13939 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate13939 = (function (transitions,to,from,toggles,timings,delays,temp__5455__auto__,meta13940){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5455__auto__ = temp__5455__auto__;
this.meta13940 = meta13940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate13939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_13941,meta13940__$1){
var self__ = this;
var _13941__$1 = this;
return (new shadow.animate.t_shadow$animate13939(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5455__auto__,meta13940__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate13939.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_13941){
var self__ = this;
var _13941__$1 = this;
return self__.meta13940;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate13939.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate13939.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate13939.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate13939.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate13939.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate13939.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate13939.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"meta13940","meta13940",951408655,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate13939.cljs$lang$type = true;

shadow.animate.t_shadow$animate13939.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate13939";

shadow.animate.t_shadow$animate13939.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"shadow.animate/t_shadow$animate13939");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

/**
 * Positional factory function for shadow.animate/t_shadow$animate13939.
 */
shadow.animate.__GT_t_shadow$animate13939 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function shadow$animate$__GT_t_shadow$animate13939(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5455__auto____$1,meta13940){
return (new shadow.animate.t_shadow$animate13939(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5455__auto____$1,meta13940));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

}

return (new shadow.animate.t_shadow$animate13939(transitions__$1,to,from,toggles,timings,delays,temp__5455__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
});

shadow.animate.combine.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.animate.combine.cljs$lang$applyTo = (function (seq13938){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13938));
});

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__13952 = arguments.length;
switch (G__13952) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
});

shadow.animate.fade_in.cljs$lang$maxFixedArity = 1;

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__13955 = arguments.length;
switch (G__13955) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
});

shadow.animate.fade_out.cljs$lang$maxFixedArity = 1;

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__13958 = arguments.length;
switch (G__13958) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate13959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate13959 = (function (from,to,timing,delay,meta13960){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta13960 = meta13960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate13959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13961,meta13960__$1){
var self__ = this;
var _13961__$1 = this;
return (new shadow.animate.t_shadow$animate13959(self__.from,self__.to,self__.timing,self__.delay,meta13960__$1));
});

shadow.animate.t_shadow$animate13959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13961){
var self__ = this;
var _13961__$1 = this;
return self__.meta13960;
});

shadow.animate.t_shadow$animate13959.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate13959.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate13959.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate13959.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate13959.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate13959.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate13959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta13960","meta13960",-2034685618,null)], null);
});

shadow.animate.t_shadow$animate13959.cljs$lang$type = true;

shadow.animate.t_shadow$animate13959.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate13959";

shadow.animate.t_shadow$animate13959.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"shadow.animate/t_shadow$animate13959");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate13959.
 */
shadow.animate.__GT_t_shadow$animate13959 = (function shadow$animate$__GT_t_shadow$animate13959(from__$1,to__$1,timing__$1,delay__$1,meta13960){
return (new shadow.animate.t_shadow$animate13959(from__$1,to__$1,timing__$1,delay__$1,meta13960));
});

}

return (new shadow.animate.t_shadow$animate13959(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_y.cljs$lang$maxFixedArity = 4;

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__13964 = arguments.length;
switch (G__13964) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate13965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate13965 = (function (from,to,timing,delay,meta13966){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta13966 = meta13966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate13965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13967,meta13966__$1){
var self__ = this;
var _13967__$1 = this;
return (new shadow.animate.t_shadow$animate13965(self__.from,self__.to,self__.timing,self__.delay,meta13966__$1));
});

shadow.animate.t_shadow$animate13965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13967){
var self__ = this;
var _13967__$1 = this;
return self__.meta13966;
});

shadow.animate.t_shadow$animate13965.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate13965.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate13965.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate13965.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate13965.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate13965.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate13965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta13966","meta13966",1102914402,null)], null);
});

shadow.animate.t_shadow$animate13965.cljs$lang$type = true;

shadow.animate.t_shadow$animate13965.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate13965";

shadow.animate.t_shadow$animate13965.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"shadow.animate/t_shadow$animate13965");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate13965.
 */
shadow.animate.__GT_t_shadow$animate13965 = (function shadow$animate$__GT_t_shadow$animate13965(from__$1,to__$1,timing__$1,delay__$1,meta13966){
return (new shadow.animate.t_shadow$animate13965(from__$1,to__$1,timing__$1,delay__$1,meta13966));
});

}

return (new shadow.animate.t_shadow$animate13965(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_x.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.animate.js.map
