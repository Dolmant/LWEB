goog.provide('shadow.cljs.devtools.client.console');
goog.require('cljs.core');
goog.require('clojure.string');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__3709 = cljs.core.seq(item);
var chunk__3710 = null;
var count__3711 = (0);
var i__3712 = (0);
while(true){
if((i__3712 < count__3711)){
var it = chunk__3710.cljs$core$IIndexed$_nth$arity$2(null,i__3712);
arr.push(it);


var G__3713 = seq__3709;
var G__3714 = chunk__3710;
var G__3715 = count__3711;
var G__3716 = (i__3712 + (1));
seq__3709 = G__3713;
chunk__3710 = G__3714;
count__3711 = G__3715;
i__3712 = G__3716;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__3709);
if(temp__5457__auto__){
var seq__3709__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__3709__$1)){
var c__4947__auto__ = cljs.core.chunk_first(seq__3709__$1);
var G__3717 = cljs.core.chunk_rest(seq__3709__$1);
var G__3718 = c__4947__auto__;
var G__3719 = cljs.core.count(c__4947__auto__);
var G__3720 = (0);
seq__3709 = G__3717;
chunk__3710 = G__3718;
count__3711 = G__3719;
i__3712 = G__3720;
continue;
} else {
var it = cljs.core.first(seq__3709__$1);
arr.push(it);


var G__3721 = cljs.core.next(seq__3709__$1);
var G__3722 = null;
var G__3723 = (0);
var G__3724 = (0);
seq__3709 = G__3721;
chunk__3710 = G__3722;
count__3711 = G__3723;
i__3712 = G__3724;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return arr.push(item);
}
});
shadow.cljs.devtools.client.console.object_ref = (function shadow$cljs$devtools$client$console$object_ref(obj){
if(cljs.core.truth_(obj)){
return ["object",({"object": obj})];
} else {
return null;
}
});
shadow.cljs.devtools.client.console.map__GT_style = (function shadow$cljs$devtools$client$console$map__GT_style(m){
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__3725){
var vec__3726 = p__3725;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3726,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3726,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}),m))});
});
shadow.cljs.devtools.client.console.clj__GT_jsonml = (function shadow$cljs$devtools$client$console$clj__GT_jsonml(struct){
if((struct == null)){
return null;
} else {
if(cljs.core.array_QMARK_(struct)){
return struct;
} else {
if(cljs.core.vector_QMARK_(struct)){
var vec__3729 = struct;
var seq__3730 = cljs.core.seq(vec__3729);
var first__3731 = cljs.core.first(seq__3730);
var seq__3730__$1 = cljs.core.next(seq__3730);
var tag = first__3731;
var first__3731__$1 = cljs.core.first(seq__3730__$1);
var seq__3730__$2 = cljs.core.next(seq__3730__$1);
var attrs = first__3731__$1;
var children = seq__3730__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__3732_3737 = cljs.core.seq(children);
var chunk__3733_3738 = null;
var count__3734_3739 = (0);
var i__3735_3740 = (0);
while(true){
if((i__3735_3740 < count__3734_3739)){
var child_3741 = chunk__3733_3738.cljs$core$IIndexed$_nth$arity$2(null,i__3735_3740);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_3741) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_3741)));


var G__3742 = seq__3732_3737;
var G__3743 = chunk__3733_3738;
var G__3744 = count__3734_3739;
var G__3745 = (i__3735_3740 + (1));
seq__3732_3737 = G__3742;
chunk__3733_3738 = G__3743;
count__3734_3739 = G__3744;
i__3735_3740 = G__3745;
continue;
} else {
var temp__5457__auto___3746 = cljs.core.seq(seq__3732_3737);
if(temp__5457__auto___3746){
var seq__3732_3747__$1 = temp__5457__auto___3746;
if(cljs.core.chunked_seq_QMARK_(seq__3732_3747__$1)){
var c__4947__auto___3748 = cljs.core.chunk_first(seq__3732_3747__$1);
var G__3749 = cljs.core.chunk_rest(seq__3732_3747__$1);
var G__3750 = c__4947__auto___3748;
var G__3751 = cljs.core.count(c__4947__auto___3748);
var G__3752 = (0);
seq__3732_3737 = G__3749;
chunk__3733_3738 = G__3750;
count__3734_3739 = G__3751;
i__3735_3740 = G__3752;
continue;
} else {
var child_3753 = cljs.core.first(seq__3732_3747__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_3753) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_3753)));


var G__3754 = cljs.core.next(seq__3732_3747__$1);
var G__3755 = null;
var G__3756 = (0);
var G__3757 = (0);
seq__3732_3737 = G__3754;
chunk__3733_3738 = G__3755;
count__3734_3739 = G__3756;
i__3735_3740 = G__3757;
continue;
}
} else {
}
}
break;
}

return js;
} else {
if(typeof struct === 'string'){
return struct;
} else {
if(typeof struct === 'number'){
return struct;
} else {
if(cljs.core.seq_QMARK_(struct)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.console.clj__GT_jsonml),struct);
} else {
return shadow.cljs.devtools.client.console.object_ref(struct);

}
}
}
}
}
}
});

/**
* @constructor
*/
shadow.cljs.devtools.client.console.SeqFormatter = (function (){
});
shadow.cljs.devtools.client.console.SeqFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.SeqFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((cljs.core.sequential_QMARK_(obj)) || (cljs.core.set_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.SeqFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
});

shadow.cljs.devtools.client.console.SeqFormatter.prototype.body = (function (s){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),(function (){var iter__4902__auto__ = ((function (this$){
return (function shadow$cljs$devtools$client$console$iter__3764(s__3765){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__3765__$1 = s__3765;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__3765__$1);
if(temp__5457__auto__){
var s__3765__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__3765__$2)){
var c__4900__auto__ = cljs.core.chunk_first(s__3765__$2);
var size__4901__auto__ = cljs.core.count(c__4900__auto__);
var b__3767 = cljs.core.chunk_buffer(size__4901__auto__);
if((function (){var i__3766 = (0);
while(true){
if((i__3766 < size__4901__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4900__auto__,i__3766);
cljs.core.chunk_append(b__3767,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__3782 = (i__3766 + (1));
i__3766 = G__3782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__3767),shadow$cljs$devtools$client$console$iter__3764(cljs.core.chunk_rest(s__3765__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__3767),null);
}
} else {
var value = cljs.core.first(s__3765__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__3764(cljs.core.rest(s__3765__$2)));
}
} else {
return null;
}
break;
}
});})(this$))
,null,null));
});})(this$))
;
return iter__4902__auto__(s);
})()], null));
});

shadow.cljs.devtools.client.console.SeqFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SeqFormatter";

shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"shadow.cljs.devtools.client.console/SeqFormatter");
});

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SeqFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SeqFormatter = (function shadow$cljs$devtools$client$console$__GT_SeqFormatter(){
return (new shadow.cljs.devtools.client.console.SeqFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.MapFormatter = (function (){
});
shadow.cljs.devtools.client.console.MapFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.MapFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.PersistentHashMap)) || ((obj instanceof cljs.core.PersistentArrayMap)) || (cljs.core.record_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.MapFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
});

shadow.cljs.devtools.client.console.MapFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),(function (){var iter__4902__auto__ = ((function (this$){
return (function shadow$cljs$devtools$client$console$iter__3798(s__3799){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__3799__$1 = s__3799;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__3799__$1);
if(temp__5457__auto__){
var s__3799__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__3799__$2)){
var c__4900__auto__ = cljs.core.chunk_first(s__3799__$2);
var size__4901__auto__ = cljs.core.count(c__4900__auto__);
var b__3801 = cljs.core.chunk_buffer(size__4901__auto__);
if((function (){var i__3800 = (0);
while(true){
if((i__3800 < size__4901__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4900__auto__,i__3800);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__3801,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__3808 = (i__3800 + (1));
i__3800 = G__3808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__3801),shadow$cljs$devtools$client$console$iter__3798(cljs.core.chunk_rest(s__3799__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__3801),null);
}
} else {
var key = cljs.core.first(s__3799__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__3798(cljs.core.rest(s__3799__$2)));
}
} else {
return null;
}
break;
}
});})(this$))
,null,null));
});})(this$))
;
return iter__4902__auto__((function (){var k = cljs.core.keys(m);
try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(k);
}catch (e3806){var e = e3806;
return k;
}})());
})()], null));
});

shadow.cljs.devtools.client.console.MapFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/MapFormatter";

shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"shadow.cljs.devtools.client.console/MapFormatter");
});

/**
 * Positional factory function for shadow.cljs.devtools.client.console/MapFormatter.
 */
shadow.cljs.devtools.client.console.__GT_MapFormatter = (function shadow$cljs$devtools$client$console$__GT_MapFormatter(){
return (new shadow.cljs.devtools.client.console.MapFormatter());
});

shadow.cljs.devtools.client.console.keyword_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(136, 19, 145)"], null);

/**
* @constructor
*/
shadow.cljs.devtools.client.console.KeywordFormatter = (function (){
});
shadow.cljs.devtools.client.console.KeywordFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.KeywordFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Keyword)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.KeywordFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
});

shadow.cljs.devtools.client.console.KeywordFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
});

shadow.cljs.devtools.client.console.KeywordFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/KeywordFormatter";

shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"shadow.cljs.devtools.client.console/KeywordFormatter");
});

/**
 * Positional factory function for shadow.cljs.devtools.client.console/KeywordFormatter.
 */
shadow.cljs.devtools.client.console.__GT_KeywordFormatter = (function shadow$cljs$devtools$client$console$__GT_KeywordFormatter(){
return (new shadow.cljs.devtools.client.console.KeywordFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.SymbolFormatter = (function (){
});
shadow.cljs.devtools.client.console.SymbolFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.SymbolFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Symbol)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.SymbolFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
});

shadow.cljs.devtools.client.console.SymbolFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
});

shadow.cljs.devtools.client.console.SymbolFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SymbolFormatter";

shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"shadow.cljs.devtools.client.console/SymbolFormatter");
});

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SymbolFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SymbolFormatter = (function shadow$cljs$devtools$client$console$__GT_SymbolFormatter(){
return (new shadow.cljs.devtools.client.console.SymbolFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.DerefFormatter = (function (){
});
shadow.cljs.devtools.client.console.DerefFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.DerefFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.Atom)) || ((obj instanceof cljs.core.Volatile)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,["@DEREF ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))].join('')], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.DerefFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.DerefFormatter.prototype.body = (function (v){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),shadow.cljs.devtools.client.console.object_ref(cljs.core.deref(v))], null));
});

shadow.cljs.devtools.client.console.DerefFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/DerefFormatter";

shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"shadow.cljs.devtools.client.console/DerefFormatter");
});

/**
 * Positional factory function for shadow.cljs.devtools.client.console/DerefFormatter.
 */
shadow.cljs.devtools.client.console.__GT_DerefFormatter = (function shadow$cljs$devtools$client$console$__GT_DerefFormatter(){
return (new shadow.cljs.devtools.client.console.DerefFormatter());
});

shadow.cljs.devtools.client.console.install_all_BANG_ = (function shadow$cljs$devtools$client$console$install_all_BANG_(){
var temp__5457__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
var G__3830 = f;
G__3830.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__3830.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__3830.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__3830.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__3830.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__3830;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__3831_SHARP_){
return goog.object.get(p1__3831_SHARP_,"shadow$formatter");
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((function (){var or__4453__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
return [];
}
})())));
return goog.object.set(goog.global,"devtoolsFormatters",all);
});
shadow.cljs.devtools.client.console.remove_all_BANG_();
shadow.cljs.devtools.client.console.install_all_BANG_();

//# sourceMappingURL=shadow.cljs.devtools.client.console.js.map
