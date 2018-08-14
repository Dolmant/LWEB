goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__5774__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__5769 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__5770 = cljs.core.seq(vec__5769);
var first__5771 = cljs.core.first(seq__5770);
var seq__5770__$1 = cljs.core.next(seq__5770);
var tag = first__5771;
var body = seq__5770__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__5774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5775__i = 0, G__5775__a = new Array(arguments.length -  0);
while (G__5775__i < G__5775__a.length) {G__5775__a[G__5775__i] = arguments[G__5775__i + 0]; ++G__5775__i;}
  args = new cljs.core.IndexedSeq(G__5775__a,0,null);
} 
return G__5774__delegate.call(this,args);};
G__5774.cljs$lang$maxFixedArity = 0;
G__5774.cljs$lang$applyTo = (function (arglist__5776){
var args = cljs.core.seq(arglist__5776);
return G__5774__delegate(args);
});
G__5774.cljs$core$IFn$_invoke$arity$variadic = G__5774__delegate;
return G__5774;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4902__auto__ = (function sablono$core$update_arglists_$_iter__5777(s__5778){
return (new cljs.core.LazySeq(null,(function (){
var s__5778__$1 = s__5778;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5778__$1);
if(temp__5457__auto__){
var s__5778__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5778__$2)){
var c__4900__auto__ = cljs.core.chunk_first(s__5778__$2);
var size__4901__auto__ = cljs.core.count(c__4900__auto__);
var b__5780 = cljs.core.chunk_buffer(size__4901__auto__);
if((function (){var i__5779 = (0);
while(true){
if((i__5779 < size__4901__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4900__auto__,i__5779);
cljs.core.chunk_append(b__5780,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__5785 = (i__5779 + (1));
i__5779 = G__5785;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5780),sablono$core$update_arglists_$_iter__5777(cljs.core.chunk_rest(s__5778__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5780),null);
}
} else {
var args = cljs.core.first(s__5778__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__5777(cljs.core.rest(s__5778__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4902__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5802 = arguments.length;
var i__5144__auto___5803 = (0);
while(true){
if((i__5144__auto___5803 < len__5143__auto___5802)){
args__5146__auto__.push((arguments[i__5144__auto___5803]));

var G__5804 = (i__5144__auto___5803 + (1));
i__5144__auto___5803 = G__5804;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((0) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5147__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4902__auto__ = (function sablono$core$iter__5795(s__5797){
return (new cljs.core.LazySeq(null,(function (){
var s__5797__$1 = s__5797;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5797__$1);
if(temp__5457__auto__){
var s__5797__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5797__$2)){
var c__4900__auto__ = cljs.core.chunk_first(s__5797__$2);
var size__4901__auto__ = cljs.core.count(c__4900__auto__);
var b__5800 = cljs.core.chunk_buffer(size__4901__auto__);
if((function (){var i__5798 = (0);
while(true){
if((i__5798 < size__4901__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4900__auto__,i__5798);
cljs.core.chunk_append(b__5800,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__5805 = (i__5798 + (1));
i__5798 = G__5805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5800),sablono$core$iter__5795(cljs.core.chunk_rest(s__5797__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5800),null);
}
} else {
var style = cljs.core.first(s__5797__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__5795(cljs.core.rest(s__5797__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4902__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq5786){
var self__5129__auto__ = this;
return self__5129__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5786));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__5806 = goog.dom.getDocument().body;
var G__5807 = (function (){var G__5808 = "script";
var G__5809 = ({"src": src});
return goog.dom.createDom(G__5808,G__5809);
})();
return goog.dom.appendChild(G__5806,G__5807);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to5815 = (function sablono$core$link_to5815(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5821 = arguments.length;
var i__5144__auto___5822 = (0);
while(true){
if((i__5144__auto___5822 < len__5143__auto___5821)){
args__5146__auto__.push((arguments[i__5144__auto___5822]));

var G__5823 = (i__5144__auto___5822 + (1));
i__5144__auto___5822 = G__5823;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((1) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to5815.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5147__auto__);
});

sablono.core.link_to5815.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
});

sablono.core.link_to5815.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to5815.cljs$lang$applyTo = (function (seq5817){
var G__5818 = cljs.core.first(seq5817);
var seq5817__$1 = cljs.core.next(seq5817);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5818,seq5817__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to5815);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to5826 = (function sablono$core$mail_to5826(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5839 = arguments.length;
var i__5144__auto___5840 = (0);
while(true){
if((i__5144__auto___5840 < len__5143__auto___5839)){
args__5146__auto__.push((arguments[i__5144__auto___5840]));

var G__5841 = (i__5144__auto___5840 + (1));
i__5144__auto___5840 = G__5841;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((1) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to5826.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5147__auto__);
});

sablono.core.mail_to5826.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__5832){
var vec__5835 = p__5832;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5835,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4453__auto__ = content;
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to5826.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to5826.cljs$lang$applyTo = (function (seq5827){
var G__5828 = cljs.core.first(seq5827);
var seq5827__$1 = cljs.core.next(seq5827);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5828,seq5827__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to5826);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list5844 = (function sablono$core$unordered_list5844(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4902__auto__ = (function sablono$core$unordered_list5844_$_iter__5849(s__5850){
return (new cljs.core.LazySeq(null,(function (){
var s__5850__$1 = s__5850;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5850__$1);
if(temp__5457__auto__){
var s__5850__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5850__$2)){
var c__4900__auto__ = cljs.core.chunk_first(s__5850__$2);
var size__4901__auto__ = cljs.core.count(c__4900__auto__);
var b__5852 = cljs.core.chunk_buffer(size__4901__auto__);
if((function (){var i__5851 = (0);
while(true){
if((i__5851 < size__4901__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4900__auto__,i__5851);
cljs.core.chunk_append(b__5852,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5857 = (i__5851 + (1));
i__5851 = G__5857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5852),sablono$core$unordered_list5844_$_iter__5849(cljs.core.chunk_rest(s__5850__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5852),null);
}
} else {
var x = cljs.core.first(s__5850__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list5844_$_iter__5849(cljs.core.rest(s__5850__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4902__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list5844);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list5862 = (function sablono$core$ordered_list5862(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4902__auto__ = (function sablono$core$ordered_list5862_$_iter__5863(s__5864){
return (new cljs.core.LazySeq(null,(function (){
var s__5864__$1 = s__5864;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5864__$1);
if(temp__5457__auto__){
var s__5864__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5864__$2)){
var c__4900__auto__ = cljs.core.chunk_first(s__5864__$2);
var size__4901__auto__ = cljs.core.count(c__4900__auto__);
var b__5866 = cljs.core.chunk_buffer(size__4901__auto__);
if((function (){var i__5865 = (0);
while(true){
if((i__5865 < size__4901__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4900__auto__,i__5865);
cljs.core.chunk_append(b__5866,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__5868 = (i__5865 + (1));
i__5865 = G__5868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5866),sablono$core$ordered_list5862_$_iter__5863(cljs.core.chunk_rest(s__5864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5866),null);
}
} else {
var x = cljs.core.first(s__5864__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list5862_$_iter__5863(cljs.core.rest(s__5864__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4902__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list5862);
/**
 * Create an image element.
 */
sablono.core.image5874 = (function sablono$core$image5874(var_args){
var G__5876 = arguments.length;
switch (G__5876) {
case 1:
return sablono.core.image5874.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image5874.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image5874.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
});

sablono.core.image5874.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image5874.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image5874);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__5882_SHARP_,p2__5883_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5882_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5883_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__5884_SHARP_,p2__5885_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5884_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__5885_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__5887 = arguments.length;
switch (G__5887) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4453__auto__ = value;
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field5892 = (function sablono$core$color_field5892(var_args){
var G__5894 = arguments.length;
switch (G__5894) {
case 1:
return sablono.core.color_field5892.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field5892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field5892.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5742__auto__);
});

sablono.core.color_field5892.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.color_field5892.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field5892);

/**
 * Creates a date input field.
 */
sablono.core.date_field5898 = (function sablono$core$date_field5898(var_args){
var G__5900 = arguments.length;
switch (G__5900) {
case 1:
return sablono.core.date_field5898.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field5898.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field5898.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5742__auto__);
});

sablono.core.date_field5898.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.date_field5898.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field5898);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field5901 = (function sablono$core$datetime_field5901(var_args){
var G__5903 = arguments.length;
switch (G__5903) {
case 1:
return sablono.core.datetime_field5901.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field5901.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field5901.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5742__auto__);
});

sablono.core.datetime_field5901.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.datetime_field5901.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field5901);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field5904 = (function sablono$core$datetime_local_field5904(var_args){
var G__5906 = arguments.length;
switch (G__5906) {
case 1:
return sablono.core.datetime_local_field5904.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field5904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field5904.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5742__auto__);
});

sablono.core.datetime_local_field5904.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.datetime_local_field5904.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field5904);

/**
 * Creates a email input field.
 */
sablono.core.email_field5911 = (function sablono$core$email_field5911(var_args){
var G__5916 = arguments.length;
switch (G__5916) {
case 1:
return sablono.core.email_field5911.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field5911.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field5911.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5742__auto__);
});

sablono.core.email_field5911.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.email_field5911.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field5911);

/**
 * Creates a file input field.
 */
sablono.core.file_field5917 = (function sablono$core$file_field5917(var_args){
var G__5919 = arguments.length;
switch (G__5919) {
case 1:
return sablono.core.file_field5917.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field5917.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field5917.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5742__auto__);
});

sablono.core.file_field5917.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.file_field5917.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field5917);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field5926 = (function sablono$core$hidden_field5926(var_args){
var G__5928 = arguments.length;
switch (G__5928) {
case 1:
return sablono.core.hidden_field5926.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field5926.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field5926.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5742__auto__);
});

sablono.core.hidden_field5926.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.hidden_field5926.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field5926);

/**
 * Creates a month input field.
 */
sablono.core.month_field5935 = (function sablono$core$month_field5935(var_args){
var G__5937 = arguments.length;
switch (G__5937) {
case 1:
return sablono.core.month_field5935.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field5935.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field5935.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5742__auto__);
});

sablono.core.month_field5935.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.month_field5935.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field5935);

/**
 * Creates a number input field.
 */
sablono.core.number_field5941 = (function sablono$core$number_field5941(var_args){
var G__5943 = arguments.length;
switch (G__5943) {
case 1:
return sablono.core.number_field5941.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field5941.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field5941.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5742__auto__);
});

sablono.core.number_field5941.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.number_field5941.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field5941);

/**
 * Creates a password input field.
 */
sablono.core.password_field5944 = (function sablono$core$password_field5944(var_args){
var G__5946 = arguments.length;
switch (G__5946) {
case 1:
return sablono.core.password_field5944.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field5944.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field5944.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5742__auto__);
});

sablono.core.password_field5944.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.password_field5944.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field5944);

/**
 * Creates a range input field.
 */
sablono.core.range_field5950 = (function sablono$core$range_field5950(var_args){
var G__5952 = arguments.length;
switch (G__5952) {
case 1:
return sablono.core.range_field5950.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field5950.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field5950.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5742__auto__);
});

sablono.core.range_field5950.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.range_field5950.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field5950);

/**
 * Creates a search input field.
 */
sablono.core.search_field5953 = (function sablono$core$search_field5953(var_args){
var G__5955 = arguments.length;
switch (G__5955) {
case 1:
return sablono.core.search_field5953.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field5953.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field5953.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5742__auto__);
});

sablono.core.search_field5953.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.search_field5953.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field5953);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field5956 = (function sablono$core$tel_field5956(var_args){
var G__5958 = arguments.length;
switch (G__5958) {
case 1:
return sablono.core.tel_field5956.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field5956.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field5956.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5742__auto__);
});

sablono.core.tel_field5956.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.tel_field5956.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field5956);

/**
 * Creates a text input field.
 */
sablono.core.text_field5965 = (function sablono$core$text_field5965(var_args){
var G__5967 = arguments.length;
switch (G__5967) {
case 1:
return sablono.core.text_field5965.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field5965.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field5965.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5742__auto__);
});

sablono.core.text_field5965.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.text_field5965.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field5965);

/**
 * Creates a time input field.
 */
sablono.core.time_field5968 = (function sablono$core$time_field5968(var_args){
var G__5970 = arguments.length;
switch (G__5970) {
case 1:
return sablono.core.time_field5968.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field5968.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field5968.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5742__auto__);
});

sablono.core.time_field5968.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.time_field5968.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field5968);

/**
 * Creates a url input field.
 */
sablono.core.url_field5971 = (function sablono$core$url_field5971(var_args){
var G__5973 = arguments.length;
switch (G__5973) {
case 1:
return sablono.core.url_field5971.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field5971.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field5971.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5742__auto__);
});

sablono.core.url_field5971.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.url_field5971.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field5971);

/**
 * Creates a week input field.
 */
sablono.core.week_field5974 = (function sablono$core$week_field5974(var_args){
var G__5976 = arguments.length;
switch (G__5976) {
case 1:
return sablono.core.week_field5974.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field5974.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field5974.cljs$core$IFn$_invoke$arity$1 = (function (name__5742__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5742__auto__);
});

sablono.core.week_field5974.cljs$core$IFn$_invoke$arity$2 = (function (name__5742__auto__,value__5743__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5742__auto__,value__5743__auto__);
});

sablono.core.week_field5974.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field5974);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box6011 = (function sablono$core$check_box6011(var_args){
var G__6013 = arguments.length;
switch (G__6013) {
case 1:
return sablono.core.check_box6011.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box6011.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box6011.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box6011.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
});

sablono.core.check_box6011.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box6011.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box6011.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box6011);
/**
 * Creates a radio button.
 */
sablono.core.radio_button6031 = (function sablono$core$radio_button6031(var_args){
var G__6033 = arguments.length;
switch (G__6033) {
case 1:
return sablono.core.radio_button6031.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button6031.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button6031.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button6031.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
});

sablono.core.radio_button6031.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button6031.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button6031.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button6031);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__6045 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__6045);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options6046 = (function sablono$core$select_options6046(coll){
var iter__4902__auto__ = (function sablono$core$select_options6046_$_iter__6050(s__6051){
return (new cljs.core.LazySeq(null,(function (){
var s__6051__$1 = s__6051;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__6051__$1);
if(temp__5457__auto__){
var s__6051__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6051__$2)){
var c__4900__auto__ = cljs.core.chunk_first(s__6051__$2);
var size__4901__auto__ = cljs.core.count(c__4900__auto__);
var b__6053 = cljs.core.chunk_buffer(size__4901__auto__);
if((function (){var i__6052 = (0);
while(true){
if((i__6052 < size__4901__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4900__auto__,i__6052);
cljs.core.chunk_append(b__6053,((cljs.core.sequential_QMARK_(x))?(function (){var vec__6059 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6059,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6059,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6059,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options6046.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options6046.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options6046.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__6076 = (i__6052 + (1));
i__6052 = G__6076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6053),sablono$core$select_options6046_$_iter__6050(cljs.core.chunk_rest(s__6051__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6053),null);
}
} else {
var x = cljs.core.first(s__6051__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__6073 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6073,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6073,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6073,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options6046.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options6046.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options6046.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options6046_$_iter__6050(cljs.core.rest(s__6051__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4902__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options6046);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down6077 = (function sablono$core$drop_down6077(var_args){
var G__6079 = arguments.length;
switch (G__6079) {
case 2:
return sablono.core.drop_down6077.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down6077.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down6077.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down6077.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down6077.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down6077.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down6077);
/**
 * Creates a text area element.
 */
sablono.core.text_area6081 = (function sablono$core$text_area6081(var_args){
var G__6083 = arguments.length;
switch (G__6083) {
case 1:
return sablono.core.text_area6081.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area6081.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area6081.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
});

sablono.core.text_area6081.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4453__auto__ = value;
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area6081.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area6081);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label6085 = (function sablono$core$label6085(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label6085);
/**
 * Creates a submit button.
 */
sablono.core.submit_button6086 = (function sablono$core$submit_button6086(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button6086);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button6087 = (function sablono$core$reset_button6087(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button6087);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to6088 = (function sablono$core$form_to6088(var_args){
var args__5146__auto__ = [];
var len__5143__auto___6098 = arguments.length;
var i__5144__auto___6099 = (0);
while(true){
if((i__5144__auto___6099 < len__5143__auto___6098)){
args__5146__auto__.push((arguments[i__5144__auto___6099]));

var G__6100 = (i__5144__auto___6099 + (1));
i__5144__auto___6099 = G__6100;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((1) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to6088.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5147__auto__);
});

sablono.core.form_to6088.cljs$core$IFn$_invoke$arity$variadic = (function (p__6091,body){
var vec__6092 = p__6091;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6092,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6092,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__6095 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__6096 = "_method";
var G__6097 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__6095,G__6096,G__6097) : sablono.core.hidden_field.call(null,G__6095,G__6096,G__6097));
})()], null)),body));
});

sablono.core.form_to6088.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to6088.cljs$lang$applyTo = (function (seq6089){
var G__6090 = cljs.core.first(seq6089);
var seq6089__$1 = cljs.core.next(seq6089);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6090,seq6089__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to6088);

//# sourceMappingURL=sablono.core.js.map
