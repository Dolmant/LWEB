goog.provide('cljs.tools.reader.impl.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
cljs.tools.reader.impl.utils.char$ = (function cljs$tools$reader$impl$utils$char(x){
if((x == null)){
return null;
} else {
return cljs.core.char$(x);
}
});
cljs.tools.reader.impl.utils.ex_info_QMARK_ = (function cljs$tools$reader$impl$utils$ex_info_QMARK_(ex){
return (ex instanceof cljs.core.ExceptionInfo);
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
cljs.tools.reader.impl.utils.ReaderConditional = (function (splicing_QMARK_,form,__meta,__extmap,__hash){
this.splicing_QMARK_ = splicing_QMARK_;
this.form = form;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4755__auto__,k__4756__auto__){
var self__ = this;
var this__4755__auto____$1 = this;
return this__4755__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4756__auto__,null);
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4757__auto__,k5802,else__4758__auto__){
var self__ = this;
var this__4757__auto____$1 = this;
var G__5806 = k5802;
var G__5806__$1 = (((G__5806 instanceof cljs.core.Keyword))?G__5806.fqn:null);
switch (G__5806__$1) {
case "splicing?":
return self__.splicing_QMARK_;

break;
case "form":
return self__.form;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5802,else__4758__auto__);

}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4769__auto__,writer__4770__auto__,opts__4771__auto__){
var self__ = this;
var this__4769__auto____$1 = this;
var pr_pair__4772__auto__ = ((function (this__4769__auto____$1){
return (function (keyval__4773__auto__){
return cljs.core.pr_sequential_writer(writer__4770__auto__,cljs.core.pr_writer,""," ","",opts__4771__auto__,keyval__4773__auto__);
});})(this__4769__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4770__auto__,pr_pair__4772__auto__,"#cljs.tools.reader.impl.utils.ReaderConditional{",", ","}",opts__4771__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5801){
var self__ = this;
var G__5801__$1 = this;
return (new cljs.core.RecordIter((0),G__5801__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),new cljs.core.Keyword(null,"form","form",-1624062471)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4753__auto__){
var self__ = this;
var this__4753__auto____$1 = this;
return self__.__meta;
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4759__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4751__auto__){
var self__ = this;
var this__4751__auto____$1 = this;
var h__4567__auto__ = self__.__hash;
if(!((h__4567__auto__ == null))){
return h__4567__auto__;
} else {
var h__4567__auto____$1 = (function (){var fexpr__5807 = ((function (h__4567__auto__,this__4751__auto____$1){
return (function (coll__4752__auto__){
return (-209062840 ^ cljs.core.hash_unordered_coll(coll__4752__auto__));
});})(h__4567__auto__,this__4751__auto____$1))
;
return fexpr__5807(this__4751__auto____$1);
})();
self__.__hash = h__4567__auto____$1;

return h__4567__auto____$1;
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5803,other5804){
var self__ = this;
var this5803__$1 = this;
return ((!((other5804 == null))) && ((this5803__$1.constructor === other5804.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5803__$1.splicing_QMARK_,other5804.splicing_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5803__$1.form,other5804.form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5803__$1.__extmap,other5804.__extmap)));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4764__auto__,k__4765__auto__){
var self__ = this;
var this__4764__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),null,new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__4765__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4764__auto____$1),self__.__meta),k__4765__auto__);
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4765__auto__)),null));
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4762__auto__,k__4763__auto__,G__5801){
var self__ = this;
var this__4762__auto____$1 = this;
var pred__5808 = cljs.core.keyword_identical_QMARK_;
var expr__5809 = k__4763__auto__;
if(cljs.core.truth_((function (){var G__5811 = new cljs.core.Keyword(null,"splicing?","splicing?",-428596366);
var G__5812 = expr__5809;
return (pred__5808.cljs$core$IFn$_invoke$arity$2 ? pred__5808.cljs$core$IFn$_invoke$arity$2(G__5811,G__5812) : pred__5808.call(null,G__5811,G__5812));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(G__5801,self__.form,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5813 = new cljs.core.Keyword(null,"form","form",-1624062471);
var G__5814 = expr__5809;
return (pred__5808.cljs$core$IFn$_invoke$arity$2 ? pred__5808.cljs$core$IFn$_invoke$arity$2(G__5813,G__5814) : pred__5808.call(null,G__5813,G__5814));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,G__5801,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4763__auto__,G__5801),null));
}
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4767__auto__){
var self__ = this;
var this__4767__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"form","form",-1624062471),self__.form,null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4754__auto__,G__5801){
var self__ = this;
var this__4754__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,G__5801,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4760__auto__,entry__4761__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4761__auto__)){
return this__4760__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4761__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4761__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4760__auto____$1,entry__4761__auto__);
}
});

cljs.tools.reader.impl.utils.ReaderConditional.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"splicing?","splicing?",1211935161,null),new cljs.core.Symbol(null,"form","form",16469056,null)], null);
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$type = true;

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrSeq = (function (this__4794__auto__){
return (new cljs.core.List(null,"cljs.tools.reader.impl.utils/ReaderConditional",null,(1),null));
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrWriter = (function (this__4794__auto__,writer__4795__auto__){
return cljs.core._write(writer__4795__auto__,"cljs.tools.reader.impl.utils/ReaderConditional");
});

/**
 * Positional factory function for cljs.tools.reader.impl.utils/ReaderConditional.
 */
cljs.tools.reader.impl.utils.__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$__GT_ReaderConditional(splicing_QMARK_,form){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});

/**
 * Factory function for cljs.tools.reader.impl.utils/ReaderConditional, taking a map of keywords to field values.
 */
cljs.tools.reader.impl.utils.map__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$map__GT_ReaderConditional(G__5805){
var extmap__4790__auto__ = (function (){var G__5815 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5805,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form","form",-1624062471)], 0));
if(cljs.core.record_QMARK_(G__5805)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5815);
} else {
return G__5815;
}
})();
return (new cljs.tools.reader.impl.utils.ReaderConditional(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(G__5805),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__5805),null,cljs.core.not_empty(extmap__4790__auto__),null));
});

/**
 * Return true if the value is the data representation of a reader conditional
 */
cljs.tools.reader.impl.utils.reader_conditional_QMARK_ = (function cljs$tools$reader$impl$utils$reader_conditional_QMARK_(value){
return (value instanceof cljs.tools.reader.impl.utils.ReaderConditional);
});
/**
 * Construct a data representation of a reader conditional.
 *   If true, splicing? indicates read-cond-splicing.
 */
cljs.tools.reader.impl.utils.reader_conditional = (function cljs$tools$reader$impl$utils$reader_conditional(form,splicing_QMARK_){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
cljs.core._write(writer,["#?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(coll__$1))?"@":null))].join(''));

return cljs.core.pr_writer(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(coll__$1),writer,opts);
});
cljs.tools.reader.impl.utils.ws_rx = /[\s]/;
/**
 * Checks whether a given character is whitespace
 */
cljs.tools.reader.impl.utils.whitespace_QMARK_ = (function cljs$tools$reader$impl$utils$whitespace_QMARK_(ch){
if((ch == null)){
return null;
} else {
if((ch === ",")){
return true;
} else {
return cljs.tools.reader.impl.utils.ws_rx.test(ch);
}
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.tools.reader.impl.utils.numeric_QMARK_ = (function cljs$tools$reader$impl$utils$numeric_QMARK_(ch){
if((ch == null)){
return null;
} else {
return goog.string.isNumeric(ch);
}
});
/**
 * Checks whether the character is a newline
 */
cljs.tools.reader.impl.utils.newline_QMARK_ = (function cljs$tools$reader$impl$utils$newline_QMARK_(c){
return ((("\n" === c)) || (("\n" === c)) || ((c == null)));
});
/**
 * Resolves syntactical sugar in metadata
 */
cljs.tools.reader.impl.utils.desugar_meta = (function cljs$tools$reader$impl$utils$desugar_meta(f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([f,true]);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
return f;

}
}
}
});
cljs.tools.reader.impl.utils.last_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
cljs.tools.reader.impl.utils.next_id = (function cljs$tools$reader$impl$utils$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.impl.utils.last_id,cljs.core.inc);
});
cljs.tools.reader.impl.utils.namespace_keys = (function cljs$tools$reader$impl$utils$namespace_keys(ns,keys){
var iter__4902__auto__ = (function cljs$tools$reader$impl$utils$namespace_keys_$_iter__5823(s__5824){
return (new cljs.core.LazySeq(null,(function (){
var s__5824__$1 = s__5824;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5824__$1);
if(temp__5457__auto__){
var s__5824__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5824__$2)){
var c__4900__auto__ = cljs.core.chunk_first(s__5824__$2);
var size__4901__auto__ = cljs.core.count(c__4900__auto__);
var b__5826 = cljs.core.chunk_buffer(size__4901__auto__);
if((function (){var i__5825 = (0);
while(true){
if((i__5825 < size__4901__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4900__auto__,i__5825);
cljs.core.chunk_append(b__5826,(((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword))))?(function (){var vec__5827 = (function (){var fexpr__5830 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name);
return (fexpr__5830.cljs$core$IFn$_invoke$arity$1 ? fexpr__5830.cljs$core$IFn$_invoke$arity$1(key) : fexpr__5830.call(null,key));
})();
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5827,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5827,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return (__GT_key.cljs$core$IFn$_invoke$arity$2 ? __GT_key.cljs$core$IFn$_invoke$arity$2(ns,key_name) : __GT_key.call(null,ns,key_name));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",key_ns)){
return (__GT_key.cljs$core$IFn$_invoke$arity$1 ? __GT_key.cljs$core$IFn$_invoke$arity$1(key_name) : __GT_key.call(null,key_name));
} else {
return key;

}
}
})():key));

var G__5836 = (i__5825 + (1));
i__5825 = G__5836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5826),cljs$tools$reader$impl$utils$namespace_keys_$_iter__5823(cljs.core.chunk_rest(s__5824__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5826),null);
}
} else {
var key = cljs.core.first(s__5824__$2);
return cljs.core.cons((((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword))))?(function (){var vec__5832 = (function (){var fexpr__5835 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name);
return (fexpr__5835.cljs$core$IFn$_invoke$arity$1 ? fexpr__5835.cljs$core$IFn$_invoke$arity$1(key) : fexpr__5835.call(null,key));
})();
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5832,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5832,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return (__GT_key.cljs$core$IFn$_invoke$arity$2 ? __GT_key.cljs$core$IFn$_invoke$arity$2(ns,key_name) : __GT_key.call(null,ns,key_name));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",key_ns)){
return (__GT_key.cljs$core$IFn$_invoke$arity$1 ? __GT_key.cljs$core$IFn$_invoke$arity$1(key_name) : __GT_key.call(null,key_name));
} else {
return key;

}
}
})():key),cljs$tools$reader$impl$utils$namespace_keys_$_iter__5823(cljs.core.rest(s__5824__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4902__auto__(keys);
});
cljs.tools.reader.impl.utils.second_SINGLEQUOTE_ = (function cljs$tools$reader$impl$utils$second_SINGLEQUOTE_(p__5840){
var vec__5841 = p__5840;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5841,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5841,(1),null);
if(cljs.core.truth_(a)){
return null;
} else {
return b;
}
});
cljs.tools.reader.impl.utils.char_code = (function cljs$tools$reader$impl$utils$char_code(ch,base){
var code = parseInt(ch,base);
if(cljs.core.truth_(isNaN(code))){
return (-1);
} else {
return code;
}
});

//# sourceMappingURL=cljs.tools.reader.impl.utils.js.map
