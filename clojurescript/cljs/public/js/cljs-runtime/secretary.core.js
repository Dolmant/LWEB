goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');

/**
 * @interface
 */
secretary.core.IRouteMatches = function(){};

secretary.core.route_matches = (function secretary$core$route_matches(this$,route){
if(((!((this$ == null))) && (!((this$.secretary$core$IRouteMatches$route_matches$arity$2 == null))))){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (secretary.core.route_matches[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$2(this$,route) : m__4798__auto__.call(null,this$,route));
} else {
var m__4798__auto____$1 = (secretary.core.route_matches["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,route) : m__4798__auto____$1.call(null,this$,route));
} else {
throw cljs.core.missing_protocol("IRouteMatches.route-matches",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRouteValue = function(){};

secretary.core.route_value = (function secretary$core$route_value(this$){
if(((!((this$ == null))) && (!((this$.secretary$core$IRouteValue$route_value$arity$1 == null))))){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (secretary.core.route_value[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto__.call(null,this$));
} else {
var m__4798__auto____$1 = (secretary.core.route_value["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRouteValue.route-value",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRenderRoute = function(){};

secretary.core.render_route = (function secretary$core$render_route(var_args){
var G__5793 = arguments.length;
switch (G__5793) {
case 1:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if(((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$1 == null))))){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (secretary.core.render_route[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto__.call(null,this$));
} else {
var m__4798__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4798__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,params){
if(((!((this$ == null))) && (!((this$.secretary$core$IRenderRoute$render_route$arity$2 == null))))){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__4797__auto__ = (((this$ == null))?null:this$);
var m__4798__auto__ = (secretary.core.render_route[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$2(this$,params) : m__4798__auto__.call(null,this$,params));
} else {
var m__4798__auto____$1 = (secretary.core.render_route["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,params) : m__4798__auto____$1.call(null,this$,params));
} else {
throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
}
}
}
});

secretary.core.render_route.cljs$lang$maxFixedArity = 2;


secretary.core._STAR_config_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null));
/**
 * Gets a value for *config* at path.
 */
secretary.core.get_config = (function secretary$core$get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(secretary.core._STAR_config_STAR_),path__$1);
});
/**
 * Associates a value val for *config* at path.
 */
secretary.core.set_config_BANG_ = (function secretary$core$set_config_BANG_(path,val){
var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
if((typeof secretary !== 'undefined') && (typeof secretary.core !== 'undefined') && (typeof secretary.core.encode_pair !== 'undefined')){
} else {
/**
 * Given a key and a value return and encoded key-value pair.
 */
secretary.core.encode_pair = (function (){var method_table__5016__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5017__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5018__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5019__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5020__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("secretary.core","encode-pair"),((function (method_table__5016__auto__,prefer_table__5017__auto__,method_cache__5018__auto__,cached_hierarchy__5019__auto__,hierarchy__5020__auto__){
return (function (p__5810){
var vec__5811 = p__5810;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5811,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5811,(1),null);
if(((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v)))){
return new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207);
} else {
if((function (){var or__4453__auto__ = cljs.core.map_QMARK_(v);
if(or__4453__auto__){
return or__4453__auto__;
} else {
if(!((v == null))){
if((((v.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IRecord$)))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,v);
}
}
})()){
return new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646);
} else {
return null;
}
}
});})(method_table__5016__auto__,prefer_table__5017__auto__,method_cache__5018__auto__,cached_hierarchy__5019__auto__,hierarchy__5020__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5020__auto__,method_table__5016__auto__,prefer_table__5017__auto__,method_cache__5018__auto__,cached_hierarchy__5019__auto__));
})();
}
secretary.core.key_index = (function secretary$core$key_index(var_args){
var G__5834 = arguments.length;
switch (G__5834) {
case 1:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$1 = (function (k){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"[]"].join('');
});

secretary.core.key_index.cljs$core$IFn$_invoke$arity$2 = (function (k,index){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),"]"].join('');
});

secretary.core.key_index.cljs$lang$maxFixedArity = 2;

secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207),(function (p__5845){
var vec__5846 = p__5845;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5846,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5846,(1),null);
var encoded = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__5846,k,v){
return (function (i,x){
var pair = ((cljs.core.coll_QMARK_(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$1(k),x], null));
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(pair) : secretary.core.encode_pair.call(null,pair));
});})(vec__5846,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646),(function (p__5853){
var vec__5854 = p__5853;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5854,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5854,(1),null);
var encoded = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__5854,k,v){
return (function (p__5858){
var vec__5859 = p__5858;
var ik = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5859,(0),null);
var iv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5859,(1),null);
var G__5867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.cljs$core$IFn$_invoke$arity$2(k,cljs.core.name(ik)),iv], null);
return (secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode_pair.cljs$core$IFn$_invoke$arity$1(G__5867) : secretary.core.encode_pair.call(null,G__5867));
});})(vec__5854,k,v))
,v);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",encoded);
}));
secretary.core.encode_pair.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__5869){
var vec__5870 = p__5869;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5870,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5870,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__5873 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
return (secretary.core.encode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode.cljs$core$IFn$_invoke$arity$1(G__5873) : secretary.core.encode.call(null,G__5873));
})())].join('');
}));
/**
 * Convert a map of query parameters into url encoded string.
 */
secretary.core.encode_query_params = (function secretary$core$encode_query_params(query_params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode_pair,query_params));
});
/**
 * Like js/encodeURIComponent excepts ignore slashes.
 */
secretary.core.encode_uri = (function secretary$core$encode_uri(uri){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.encode,clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
 * Parse a value from a serialized query-string key index. If the
 *   index value is empty 0 is returned, if it's a digit it returns the
 *   js/parseInt value, otherwise it returns the extracted index.
 */
secretary.core.parse_path = (function secretary$core$parse_path(path){
var index_re = /\[([^\]]*)\]*/;
var parts = cljs.core.re_seq(index_re,path);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (index_re,parts){
return (function (p__5878){
var vec__5879 = p__5878;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5879,(0),null);
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5879,(1),null);
if(cljs.core.empty_QMARK_(part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,part))){
return parseInt(part);
} else {
return part;

}
}
});})(index_re,parts))
,parts);
});
/**
 * Return a key path for a serialized query-string entry.
 * 
 *   Ex.
 * 
 *  (key-parse "foo[][a][][b]")
 *  ;; => ("foo" 0 "a" 0 "b")
 *   
 */
secretary.core.key_parse = (function secretary$core$key_parse(k){
var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;
var vec__5888 = cljs.core.re_matches(re,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5888,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5888,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5888,(2),null);
var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path(path):null);
return cljs.core.cons(key,parsed_path);
});
/**
 * Like assoc-in but numbers in path create vectors instead of maps.
 * 
 *   Ex.
 * 
 *  (assoc-in-query-params {} ["foo" 0] 1)
 *  ;; => {"foo" [1]}
 * 
 *  (assoc-in-query-params {} ["foo" 0 "a"] 1)
 *  ;; => {"foo" [{"a" 1}]}
 *   
 */
secretary.core.assoc_in_query_params = (function secretary$core$assoc_in_query_params(m,path,v){
var heads = (function (xs){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((i + (1)),xs);
}),xs);
});
var hs = heads(path);
var m__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (heads,hs){
return (function (m__$1,h){
if(((typeof cljs.core.last(h) === 'number') && (!(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.butlast(h))))))){
return cljs.core.assoc_in(m__$1,cljs.core.butlast(h),cljs.core.PersistentVector.EMPTY);
} else {
return m__$1;
}
});})(heads,hs))
,m,hs);
if((cljs.core.last(path) === (0))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,cljs.core.butlast(path),cljs.core.conj,v);
} else {
return cljs.core.assoc_in(m__$1,path,v);
}
});
/**
 * Extract a map of query parameters from a query string.
 */
secretary.core.decode_query_params = (function secretary$core$decode_query_params(query_string){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/);
var params = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parts){
return (function (m,part){
var vec__5895 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(part,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5895,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5895,(1),null);
return secretary.core.assoc_in_query_params(m,secretary.core.key_parse(k),(secretary.core.decode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.decode.cljs$core$IFn$_invoke$arity$1(v) : secretary.core.decode.call(null,v)));
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);
var params__$1 = clojure.walk.keywordize_keys(params);
return params__$1;
});
/**
 * Like re-matches but result is a always vector. If re does not
 *   capture matches then it will return a vector of [m m] as if it had a
 *   single capture. Other wise it maintains consistent behavior with
 *   re-matches. 
 */
secretary.core.re_matches_STAR_ = (function secretary$core$re_matches_STAR_(re,s){
var ms = cljs.core.re_matches(re,s);
if(cljs.core.truth_(ms)){
if(cljs.core.sequential_QMARK_(ms)){
return ms;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else {
return null;
}
});
secretary.core.re_escape_chars = cljs.core.set("\\.*+|?()[]{}$^");
secretary.core.re_escape = (function secretary$core$re_escape(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,c){
if(cljs.core.truth_((secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1 ? secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1(c) : secretary.core.re_escape_chars.call(null,c)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}),"",s);
});
/**
 * Attempt to lex a single token from s with clauses. Each clause is a
 *   pair of [regexp action] where action is a function. regexp is
 *   expected to begin with ^ and contain a single capture. If the
 *   attempt is successful a vector of [s-without-token (action capture)]
 *   is returned. Otherwise the result is nil.
 */
secretary.core.lex_STAR_ = (function secretary$core$lex_STAR_(s,clauses){
return cljs.core.some((function (p__5907){
var vec__5908 = p__5907;
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5908,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5908,(1),null);
var temp__5457__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__5912 = temp__5457__auto__;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5912,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5912,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(m)),(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(c) : action.call(null,c))], null);
} else {
return null;
}
}),clauses);
});
/**
 * Return a pair of [regex params]. regex is a compiled regular
 *   expression for matching routes. params is a list of route param
 *   names (:*, :id, etc.). 
 */
secretary.core.lex_route = (function secretary$core$lex_route(s,clauses){
var s__$1 = s;
var pattern = "";
var params = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(s__$1)){
var vec__5920 = secretary.core.lex_STAR_(s__$1,clauses);
var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5920,(0),null);
var vec__5923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5920,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5923,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5923,(1),null);
var G__5929 = s__$2;
var G__5930 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
var G__5931 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,p);
s__$1 = G__5929;
pattern = G__5930;
params = G__5931;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join('')),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
 * Given a route return an instance of IRouteMatches.
 */
secretary.core.compile_route = (function secretary$core$compile_route(orig_route){
var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){
var r = "(.*?)";
var p = ((cljs.core.seq(v))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v):new cljs.core.Keyword(null,"*","*",-1294732318));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){
var r = "([^,;?/]+)";
var p = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){
var r = secretary.core.re_escape(v);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);
var vec__5932 = secretary.core.lex_route(orig_route,clauses);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5932,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5932,(1),null);
if((typeof secretary !== 'undefined') && (typeof secretary.core !== 'undefined') && (typeof secretary.core.t_secretary$core5938 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {secretary.core.IRouteValue}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {secretary.core.IRouteMatches}
*/
secretary.core.t_secretary$core5938 = (function (orig_route,clauses,vec__5932,re,params,meta5939){
this.orig_route = orig_route;
this.clauses = clauses;
this.vec__5932 = vec__5932;
this.re = re;
this.params = params;
this.meta5939 = meta5939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
secretary.core.t_secretary$core5938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__5932,re,params){
return (function (_5940,meta5939__$1){
var self__ = this;
var _5940__$1 = this;
return (new secretary.core.t_secretary$core5938(self__.orig_route,self__.clauses,self__.vec__5932,self__.re,self__.params,meta5939__$1));
});})(clauses,vec__5932,re,params))
;

secretary.core.t_secretary$core5938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__5932,re,params){
return (function (_5940){
var self__ = this;
var _5940__$1 = this;
return self__.meta5939;
});})(clauses,vec__5932,re,params))
;

secretary.core.t_secretary$core5938.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL;

secretary.core.t_secretary$core5938.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__5932,re,params){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
});})(clauses,vec__5932,re,params))
;

secretary.core.t_secretary$core5938.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL;

secretary.core.t_secretary$core5938.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__5932,re,params){
return (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__5457__auto__ = secretary.core.re_matches_STAR_(self__.re,route);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__5947 = temp__5457__auto__;
var seq__5948 = cljs.core.seq(vec__5947);
var first__5949 = cljs.core.first(seq__5948);
var seq__5948__$1 = cljs.core.next(seq__5948);
var ___$2 = first__5949;
var ms = seq__5948__$1;
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(self__.params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(secretary.core.decode,ms)))], 0));
} else {
return null;
}
});})(clauses,vec__5932,re,params))
;

secretary.core.t_secretary$core5938.getBasis = ((function (clauses,vec__5932,re,params){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orig-route","orig-route",899103121,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null),new cljs.core.Symbol(null,"vec__5932","vec__5932",15097324,null),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"meta5939","meta5939",1812829178,null)], null);
});})(clauses,vec__5932,re,params))
;

secretary.core.t_secretary$core5938.cljs$lang$type = true;

secretary.core.t_secretary$core5938.cljs$lang$ctorStr = "secretary.core/t_secretary$core5938";

secretary.core.t_secretary$core5938.cljs$lang$ctorPrWriter = ((function (clauses,vec__5932,re,params){
return (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"secretary.core/t_secretary$core5938");
});})(clauses,vec__5932,re,params))
;

/**
 * Positional factory function for secretary.core/t_secretary$core5938.
 */
secretary.core.__GT_t_secretary$core5938 = ((function (clauses,vec__5932,re,params){
return (function secretary$core$compile_route_$___GT_t_secretary$core5938(orig_route__$1,clauses__$1,vec__5932__$1,re__$1,params__$1,meta5939){
return (new secretary.core.t_secretary$core5938(orig_route__$1,clauses__$1,vec__5932__$1,re__$1,params__$1,meta5939));
});})(clauses,vec__5932,re,params))
;

}

return (new secretary.core.t_secretary$core5938(orig_route,clauses,vec__5932,re,params,cljs.core.PersistentArrayMap.EMPTY));
});
secretary.core.render_route_STAR_ = (function secretary$core$render_route_STAR_(var_args){
var args__5146__auto__ = [];
var len__5143__auto___5962 = arguments.length;
var i__5144__auto___5963 = (0);
while(true){
if((i__5144__auto___5963 < len__5143__auto___5962)){
args__5146__auto__.push((arguments[i__5144__auto___5963]));

var G__5964 = (i__5144__auto___5963 + (1));
i__5144__auto___5963 = G__5964;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((1) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((1)),(0),null)):null);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5147__auto__);
});

secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,args){
if(((!((obj == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.secretary$core$IRenderRoute$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,obj):false)):cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,obj))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route,obj,args);
} else {
return null;
}
});

secretary.core.render_route_STAR_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
secretary.core.render_route_STAR_.cljs$lang$applyTo = (function (seq5959){
var G__5960 = cljs.core.first(seq5959);
var seq5959__$1 = cljs.core.next(seq5959);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5960,seq5959__$1);
});

secretary.core._STAR_routes_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
secretary.core.add_route_BANG_ = (function secretary$core$add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route(obj):obj);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function secretary$core$remove_route_BANG_(obj){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv((function (p__5977){
var vec__5978 = p__5977;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5978,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5978,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function secretary$core$reset_routes_BANG_(){
return cljs.core.reset_BANG_(secretary.core._STAR_routes_STAR_,cljs.core.PersistentVector.EMPTY);
});
secretary.core.locate_route = (function secretary$core$locate_route(route){
return cljs.core.some((function (p__5984){
var vec__5985 = p__5984;
var compiled_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5985,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5985,(1),null);
var temp__5457__auto__ = secretary.core.route_matches(compiled_route,route);
if(cljs.core.truth_(temp__5457__auto__)){
var params = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"route","route",329891309),compiled_route], null);
} else {
return null;
}
}),cljs.core.deref(secretary.core._STAR_routes_STAR_));
});
/**
 * Returns original route value as set in defroute when passed a URI path.
 */
secretary.core.locate_route_value = (function secretary$core$locate_route_value(uri){
return secretary.core.route_value(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route(uri)));
});
secretary.core.prefix = (function secretary$core$prefix(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null)))].join('');
});
secretary.core.uri_without_prefix = (function secretary$core$uri_without_prefix(uri){
return clojure.string.replace(uri,cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.prefix())].join('')),"");
});
/**
 * Ensures that the uri has a leading slash
 */
secretary.core.uri_with_leading_slash = (function secretary$core$uri_with_leading_slash(uri){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(uri))){
return uri;
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('');
}
});
/**
 * Dispatch an action for a given route if it matches the URI path.
 */
secretary.core.dispatch_BANG_ = (function secretary$core$dispatch_BANG_(uri){
var vec__5995 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(secretary.core.uri_without_prefix(uri),/\?/);
var uri_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5995,(0),null);
var query_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5995,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash(uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),secretary.core.decode_query_params(query_string)], null):null);
var map__5998 = secretary.core.locate_route(uri_path__$1);
var map__5998__$1 = ((((!((map__5998 == null)))?(((((map__5998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5998):map__5998);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5998__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5998__$1,new cljs.core.Keyword(null,"params","params",710516235));
var action__$1 = (function (){var or__4453__auto__ = action;
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,query_params], 0));
return (action__$1.cljs$core$IFn$_invoke$arity$1 ? action__$1.cljs$core$IFn$_invoke$arity$1(params__$1) : action__$1.call(null,params__$1));
});
secretary.core.invalid_params = (function secretary$core$invalid_params(params,validations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__6003){
var vec__6004 = p__6003;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6004,(0),null);
var validation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6004,(1),null);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,key);
if(cljs.core.truth_(cljs.core.re_matches(validation,value))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),validations));
});
secretary.core.params_valid_QMARK_ = (function secretary$core$params_valid_QMARK_(params,validations){
return cljs.core.empty_QMARK_(secretary.core.invalid_params(params,validations));
});
goog.object.set(secretary.core.IRouteMatches,"string",true);

var G__6014_6028 = secretary.core.route_matches;
var G__6015_6029 = "string";
var G__6016_6030 = ((function (G__6014_6028,G__6015_6029){
return (function (this$,route){
return secretary.core.route_matches(secretary.core.compile_route(this$),route);
});})(G__6014_6028,G__6015_6029))
;
goog.object.set(G__6014_6028,G__6015_6029,G__6016_6030);

RegExp.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){
var this$__$1 = this;
var temp__5457__auto__ = secretary.core.re_matches_STAR_(this$__$1,route);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__6017 = temp__5457__auto__;
var seq__6018 = cljs.core.seq(vec__6017);
var first__6019 = cljs.core.first(seq__6018);
var seq__6018__$1 = cljs.core.next(seq__6018);
var _ = first__6019;
var ms = seq__6018__$1;
return cljs.core.vec(ms);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__6020,route){
var vec__6022 = p__6020;
var seq__6023 = cljs.core.seq(vec__6022);
var first__6024 = cljs.core.first(seq__6023);
var seq__6023__$1 = cljs.core.next(seq__6023);
var route_string = first__6024;
var validations = seq__6023__$1;
var vec__6025 = this;
var seq__6026 = cljs.core.seq(vec__6025);
var first__6027 = cljs.core.first(seq__6026);
var seq__6026__$1 = cljs.core.next(seq__6026);
var route_string__$1 = first__6027;
var validations__$1 = seq__6026__$1;
var params = secretary.core.route_matches(secretary.core.compile_route(route_string__$1),route);
if(cljs.core.truth_(secretary.core.params_valid_QMARK_(params,validations__$1))){
return params;
} else {
return null;
}
});
goog.object.set(secretary.core.IRouteValue,"string",true);

var G__6034_6047 = secretary.core.route_value;
var G__6035_6048 = "string";
var G__6036_6049 = ((function (G__6034_6047,G__6035_6048){
return (function (this$){
return secretary.core.route_value(secretary.core.compile_route(this$));
});})(G__6034_6047,G__6035_6048))
;
goog.object.set(G__6034_6047,G__6035_6048,G__6036_6049);

RegExp.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__6037){
var vec__6038 = p__6037;
var seq__6039 = cljs.core.seq(vec__6038);
var first__6040 = cljs.core.first(seq__6039);
var seq__6039__$1 = cljs.core.next(seq__6039);
var route_string = first__6040;
var validations = seq__6039__$1;
var vec__6042 = this;
var seq__6043 = cljs.core.seq(vec__6042);
var first__6044 = cljs.core.first(seq__6043);
var seq__6043__$1 = cljs.core.next(seq__6043);
var route_string__$1 = first__6044;
var validations__$1 = seq__6043__$1;
return cljs.core.vec(cljs.core.cons(secretary.core.route_value(route_string__$1),validations__$1));
});
goog.object.set(secretary.core.IRenderRoute,"string",true);

var G__6054_6069 = secretary.core.render_route;
var G__6055_6070 = "string";
var G__6056_6071 = ((function (G__6054_6069,G__6055_6070){
return (function() {
var G__6072 = null;
var G__6072__1 = (function (this$){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.EMPTY);
});
var G__6072__2 = (function (this$,params){
var map__6057 = params;
var map__6057__$1 = ((((!((map__6057 == null)))?(((((map__6057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6057):map__6057);
var m = map__6057__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6057__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(m);
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__6057,map__6057__$1,m,query_params,a,G__6054_6069,G__6055_6070){
return (function ($1){
var lookup = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2($1,"*"))?$1:cljs.core.subs.cljs$core$IFn$_invoke$arity$2($1,(1))));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(a),lookup);
var replacement = ((cljs.core.sequential_QMARK_(v))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,lookup,cljs.core.next(v));

return secretary.core.encode_uri(cljs.core.first(v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri(v):$1));
return replacement;
});})(map__6057,map__6057__$1,m,query_params,a,G__6054_6069,G__6055_6070))
);
var path__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var temp__5455__auto__ = (function (){var and__4442__auto__ = query_params;
if(cljs.core.truth_(and__4442__auto__)){
return secretary.core.encode_query_params(query_params);
} else {
return and__4442__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var query_string = temp__5455__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_string)].join('');
} else {
return path__$1;
}
});
G__6072 = function(this$,params){
switch(arguments.length){
case 1:
return G__6072__1.call(this,this$);
case 2:
return G__6072__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__6072.cljs$core$IFn$_invoke$arity$1 = G__6072__1;
G__6072.cljs$core$IFn$_invoke$arity$2 = G__6072__2;
return G__6072;
})()
;})(G__6054_6069,G__6055_6070))
;
goog.object.set(G__6054_6069,G__6055_6070,G__6056_6071);

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__6062,params){
var vec__6063 = p__6062;
var seq__6064 = cljs.core.seq(vec__6063);
var first__6065 = cljs.core.first(seq__6064);
var seq__6064__$1 = cljs.core.next(seq__6064);
var route_string = first__6065;
var validations = seq__6064__$1;
var vec__6066 = this;
var seq__6067 = cljs.core.seq(vec__6066);
var first__6068 = cljs.core.first(seq__6067);
var seq__6067__$1 = cljs.core.next(seq__6067);
var route_string__$1 = first__6068;
var validations__$1 = seq__6067__$1;
var invalid = secretary.core.invalid_params(params,validations__$1);
if(cljs.core.empty_QMARK_(invalid)){
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(route_string__$1,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not build route: invalid params",invalid);
}
});

//# sourceMappingURL=secretary.core.js.map
