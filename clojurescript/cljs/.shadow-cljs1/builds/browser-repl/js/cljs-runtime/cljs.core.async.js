goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__10111 = arguments.length;
switch (G__10111) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10112 = (function (f,blockable,meta10113){
this.f = f;
this.blockable = blockable;
this.meta10113 = meta10113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10114,meta10113__$1){
var self__ = this;
var _10114__$1 = this;
return (new cljs.core.async.t_cljs$core$async10112(self__.f,self__.blockable,meta10113__$1));
});

cljs.core.async.t_cljs$core$async10112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10114){
var self__ = this;
var _10114__$1 = this;
return self__.meta10113;
});

cljs.core.async.t_cljs$core$async10112.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10112.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10112.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10112.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10113","meta10113",2112092133,null)], null);
});

cljs.core.async.t_cljs$core$async10112.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10112";

cljs.core.async.t_cljs$core$async10112.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t_cljs$core$async10112");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10112.
 */
cljs.core.async.__GT_t_cljs$core$async10112 = (function cljs$core$async$__GT_t_cljs$core$async10112(f__$1,blockable__$1,meta10113){
return (new cljs.core.async.t_cljs$core$async10112(f__$1,blockable__$1,meta10113));
});

}

return (new cljs.core.async.t_cljs$core$async10112(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__10122 = arguments.length;
switch (G__10122) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__10129 = arguments.length;
switch (G__10129) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__10136 = arguments.length;
switch (G__10136) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_10138 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10138) : fn1.call(null,val_10138));
} else {
cljs.core.async.impl.dispatch.run(((function (val_10138,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10138) : fn1.call(null,val_10138));
});})(val_10138,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__10140 = arguments.length;
switch (G__10140) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5010__auto___10163 = n;
var x_10164 = (0);
while(true){
if((x_10164 < n__5010__auto___10163)){
(a[x_10164] = (0));

var G__10165 = (x_10164 + (1));
x_10164 = G__10165;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__10166 = (i + (1));
i = G__10166;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10167 = (function (flag,meta10168){
this.flag = flag;
this.meta10168 = meta10168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10169,meta10168__$1){
var self__ = this;
var _10169__$1 = this;
return (new cljs.core.async.t_cljs$core$async10167(self__.flag,meta10168__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10169){
var self__ = this;
var _10169__$1 = this;
return self__.meta10168;
});})(flag))
;

cljs.core.async.t_cljs$core$async10167.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10167.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10167.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10168","meta10168",1582489036,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10167";

cljs.core.async.t_cljs$core$async10167.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t_cljs$core$async10167");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10167.
 */
cljs.core.async.__GT_t_cljs$core$async10167 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10167(flag__$1,meta10168){
return (new cljs.core.async.t_cljs$core$async10167(flag__$1,meta10168));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10167(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10170 = (function (flag,cb,meta10171){
this.flag = flag;
this.cb = cb;
this.meta10171 = meta10171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10172,meta10171__$1){
var self__ = this;
var _10172__$1 = this;
return (new cljs.core.async.t_cljs$core$async10170(self__.flag,self__.cb,meta10171__$1));
});

cljs.core.async.t_cljs$core$async10170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10172){
var self__ = this;
var _10172__$1 = this;
return self__.meta10171;
});

cljs.core.async.t_cljs$core$async10170.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async10170.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10171","meta10171",293671218,null)], null);
});

cljs.core.async.t_cljs$core$async10170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10170";

cljs.core.async.t_cljs$core$async10170.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t_cljs$core$async10170");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10170.
 */
cljs.core.async.__GT_t_cljs$core$async10170 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10170(flag__$1,cb__$1,meta10171){
return (new cljs.core.async.t_cljs$core$async10170(flag__$1,cb__$1,meta10171));
});

}

return (new cljs.core.async.t_cljs$core$async10170(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10174_SHARP_){
var G__10176 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10174_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10176) : fret.call(null,G__10176));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10175_SHARP_){
var G__10177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10175_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__10177) : fret.call(null,G__10177));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4453__auto__ = wport;
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10190 = (i + (1));
i = G__10190;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4453__auto__ = ret;
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4442__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4442__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4442__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5146__auto__ = [];
var len__5143__auto___10196 = arguments.length;
var i__5144__auto___10197 = (0);
while(true){
if((i__5144__auto___10197 < len__5143__auto___10196)){
args__5146__auto__.push((arguments[i__5144__auto___10197]));

var G__10198 = (i__5144__auto___10197 + (1));
i__5144__auto___10197 = G__10198;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((1) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5147__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10193){
var map__10194 = p__10193;
var map__10194__$1 = ((((!((map__10194 == null)))?(((((map__10194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10194):map__10194);
var opts = map__10194__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10191){
var G__10192 = cljs.core.first(seq10191);
var seq10191__$1 = cljs.core.next(seq10191);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10192,seq10191__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__10201 = arguments.length;
switch (G__10201) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10053__auto___10247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto___10247){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto___10247){
return (function (state_10225){
var state_val_10226 = (state_10225[(1)]);
if((state_val_10226 === (7))){
var inst_10221 = (state_10225[(2)]);
var state_10225__$1 = state_10225;
var statearr_10227_10248 = state_10225__$1;
(statearr_10227_10248[(2)] = inst_10221);

(statearr_10227_10248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10226 === (1))){
var state_10225__$1 = state_10225;
var statearr_10228_10249 = state_10225__$1;
(statearr_10228_10249[(2)] = null);

(statearr_10228_10249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10226 === (4))){
var inst_10204 = (state_10225[(7)]);
var inst_10204__$1 = (state_10225[(2)]);
var inst_10205 = (inst_10204__$1 == null);
var state_10225__$1 = (function (){var statearr_10229 = state_10225;
(statearr_10229[(7)] = inst_10204__$1);

return statearr_10229;
})();
if(cljs.core.truth_(inst_10205)){
var statearr_10230_10250 = state_10225__$1;
(statearr_10230_10250[(1)] = (5));

} else {
var statearr_10231_10251 = state_10225__$1;
(statearr_10231_10251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10226 === (13))){
var state_10225__$1 = state_10225;
var statearr_10232_10252 = state_10225__$1;
(statearr_10232_10252[(2)] = null);

(statearr_10232_10252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10226 === (6))){
var inst_10204 = (state_10225[(7)]);
var state_10225__$1 = state_10225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10225__$1,(11),to,inst_10204);
} else {
if((state_val_10226 === (3))){
var inst_10223 = (state_10225[(2)]);
var state_10225__$1 = state_10225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10225__$1,inst_10223);
} else {
if((state_val_10226 === (12))){
var state_10225__$1 = state_10225;
var statearr_10233_10253 = state_10225__$1;
(statearr_10233_10253[(2)] = null);

(statearr_10233_10253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10226 === (2))){
var state_10225__$1 = state_10225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10225__$1,(4),from);
} else {
if((state_val_10226 === (11))){
var inst_10214 = (state_10225[(2)]);
var state_10225__$1 = state_10225;
if(cljs.core.truth_(inst_10214)){
var statearr_10234_10254 = state_10225__$1;
(statearr_10234_10254[(1)] = (12));

} else {
var statearr_10235_10255 = state_10225__$1;
(statearr_10235_10255[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10226 === (9))){
var state_10225__$1 = state_10225;
var statearr_10236_10256 = state_10225__$1;
(statearr_10236_10256[(2)] = null);

(statearr_10236_10256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10226 === (5))){
var state_10225__$1 = state_10225;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10237_10257 = state_10225__$1;
(statearr_10237_10257[(1)] = (8));

} else {
var statearr_10238_10258 = state_10225__$1;
(statearr_10238_10258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10226 === (14))){
var inst_10219 = (state_10225[(2)]);
var state_10225__$1 = state_10225;
var statearr_10239_10259 = state_10225__$1;
(statearr_10239_10259[(2)] = inst_10219);

(statearr_10239_10259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10226 === (10))){
var inst_10211 = (state_10225[(2)]);
var state_10225__$1 = state_10225;
var statearr_10240_10260 = state_10225__$1;
(statearr_10240_10260[(2)] = inst_10211);

(statearr_10240_10260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10226 === (8))){
var inst_10208 = cljs.core.async.close_BANG_(to);
var state_10225__$1 = state_10225;
var statearr_10241_10261 = state_10225__$1;
(statearr_10241_10261[(2)] = inst_10208);

(statearr_10241_10261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto___10247))
;
return ((function (switch__9905__auto__,c__10053__auto___10247){
return (function() {
var cljs$core$async$state_machine__9906__auto__ = null;
var cljs$core$async$state_machine__9906__auto____0 = (function (){
var statearr_10242 = [null,null,null,null,null,null,null,null];
(statearr_10242[(0)] = cljs$core$async$state_machine__9906__auto__);

(statearr_10242[(1)] = (1));

return statearr_10242;
});
var cljs$core$async$state_machine__9906__auto____1 = (function (state_10225){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_10225);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e10243){if((e10243 instanceof Object)){
var ex__9909__auto__ = e10243;
var statearr_10244_10262 = state_10225;
(statearr_10244_10262[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10263 = state_10225;
state_10225 = G__10263;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$state_machine__9906__auto__ = function(state_10225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9906__auto____1.call(this,state_10225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9906__auto____0;
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9906__auto____1;
return cljs$core$async$state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto___10247))
})();
var state__10055__auto__ = (function (){var statearr_10245 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_10245[(6)] = c__10053__auto___10247);

return statearr_10245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto___10247))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__10264){
var vec__10265 = p__10264;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10265,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10265,(1),null);
var job = vec__10265;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__10053__auto___10465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto___10465,res,vec__10265,v,p,job,jobs,results){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto___10465,res,vec__10265,v,p,job,jobs,results){
return (function (state_10272){
var state_val_10273 = (state_10272[(1)]);
if((state_val_10273 === (1))){
var state_10272__$1 = state_10272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10272__$1,(2),res,v);
} else {
if((state_val_10273 === (2))){
var inst_10269 = (state_10272[(2)]);
var inst_10270 = cljs.core.async.close_BANG_(res);
var state_10272__$1 = (function (){var statearr_10274 = state_10272;
(statearr_10274[(7)] = inst_10269);

return statearr_10274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10272__$1,inst_10270);
} else {
return null;
}
}
});})(c__10053__auto___10465,res,vec__10265,v,p,job,jobs,results))
;
return ((function (switch__9905__auto__,c__10053__auto___10465,res,vec__10265,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____0 = (function (){
var statearr_10275 = [null,null,null,null,null,null,null,null];
(statearr_10275[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__);

(statearr_10275[(1)] = (1));

return statearr_10275;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____1 = (function (state_10272){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_10272);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e10276){if((e10276 instanceof Object)){
var ex__9909__auto__ = e10276;
var statearr_10277_10467 = state_10272;
(statearr_10277_10467[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10276;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10470 = state_10272;
state_10272 = G__10470;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__ = function(state_10272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____1.call(this,state_10272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto___10465,res,vec__10265,v,p,job,jobs,results))
})();
var state__10055__auto__ = (function (){var statearr_10278 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_10278[(6)] = c__10053__auto___10465);

return statearr_10278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto___10465,res,vec__10265,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10279){
var vec__10280 = p__10279;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10280,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10280,(1),null);
var job = vec__10280;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5010__auto___10474 = n;
var __10477 = (0);
while(true){
if((__10477 < n__5010__auto___10474)){
var G__10283_10478 = type;
var G__10283_10479__$1 = (((G__10283_10478 instanceof cljs.core.Keyword))?G__10283_10478.fqn:null);
switch (G__10283_10479__$1) {
case "compute":
var c__10053__auto___10481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__10477,c__10053__auto___10481,G__10283_10478,G__10283_10479__$1,n__5010__auto___10474,jobs,results,process,async){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (__10477,c__10053__auto___10481,G__10283_10478,G__10283_10479__$1,n__5010__auto___10474,jobs,results,process,async){
return (function (state_10296){
var state_val_10297 = (state_10296[(1)]);
if((state_val_10297 === (1))){
var state_10296__$1 = state_10296;
var statearr_10298_10484 = state_10296__$1;
(statearr_10298_10484[(2)] = null);

(statearr_10298_10484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (2))){
var state_10296__$1 = state_10296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10296__$1,(4),jobs);
} else {
if((state_val_10297 === (3))){
var inst_10294 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10296__$1,inst_10294);
} else {
if((state_val_10297 === (4))){
var inst_10286 = (state_10296[(2)]);
var inst_10287 = process(inst_10286);
var state_10296__$1 = state_10296;
if(cljs.core.truth_(inst_10287)){
var statearr_10299_10485 = state_10296__$1;
(statearr_10299_10485[(1)] = (5));

} else {
var statearr_10300_10486 = state_10296__$1;
(statearr_10300_10486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (5))){
var state_10296__$1 = state_10296;
var statearr_10301_10487 = state_10296__$1;
(statearr_10301_10487[(2)] = null);

(statearr_10301_10487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (6))){
var state_10296__$1 = state_10296;
var statearr_10302_10490 = state_10296__$1;
(statearr_10302_10490[(2)] = null);

(statearr_10302_10490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10297 === (7))){
var inst_10292 = (state_10296[(2)]);
var state_10296__$1 = state_10296;
var statearr_10303_10492 = state_10296__$1;
(statearr_10303_10492[(2)] = inst_10292);

(statearr_10303_10492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__10477,c__10053__auto___10481,G__10283_10478,G__10283_10479__$1,n__5010__auto___10474,jobs,results,process,async))
;
return ((function (__10477,switch__9905__auto__,c__10053__auto___10481,G__10283_10478,G__10283_10479__$1,n__5010__auto___10474,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____0 = (function (){
var statearr_10304 = [null,null,null,null,null,null,null];
(statearr_10304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__);

(statearr_10304[(1)] = (1));

return statearr_10304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____1 = (function (state_10296){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_10296);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e10308){if((e10308 instanceof Object)){
var ex__9909__auto__ = e10308;
var statearr_10309_10497 = state_10296;
(statearr_10309_10497[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10308;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10500 = state_10296;
state_10296 = G__10500;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__ = function(state_10296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____1.call(this,state_10296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__;
})()
;})(__10477,switch__9905__auto__,c__10053__auto___10481,G__10283_10478,G__10283_10479__$1,n__5010__auto___10474,jobs,results,process,async))
})();
var state__10055__auto__ = (function (){var statearr_10310 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_10310[(6)] = c__10053__auto___10481);

return statearr_10310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(__10477,c__10053__auto___10481,G__10283_10478,G__10283_10479__$1,n__5010__auto___10474,jobs,results,process,async))
);


break;
case "async":
var c__10053__auto___10501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__10477,c__10053__auto___10501,G__10283_10478,G__10283_10479__$1,n__5010__auto___10474,jobs,results,process,async){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (__10477,c__10053__auto___10501,G__10283_10478,G__10283_10479__$1,n__5010__auto___10474,jobs,results,process,async){
return (function (state_10323){
var state_val_10324 = (state_10323[(1)]);
if((state_val_10324 === (1))){
var state_10323__$1 = state_10323;
var statearr_10325_10502 = state_10323__$1;
(statearr_10325_10502[(2)] = null);

(statearr_10325_10502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10324 === (2))){
var state_10323__$1 = state_10323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10323__$1,(4),jobs);
} else {
if((state_val_10324 === (3))){
var inst_10321 = (state_10323[(2)]);
var state_10323__$1 = state_10323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10323__$1,inst_10321);
} else {
if((state_val_10324 === (4))){
var inst_10313 = (state_10323[(2)]);
var inst_10314 = async(inst_10313);
var state_10323__$1 = state_10323;
if(cljs.core.truth_(inst_10314)){
var statearr_10336_10506 = state_10323__$1;
(statearr_10336_10506[(1)] = (5));

} else {
var statearr_10337_10507 = state_10323__$1;
(statearr_10337_10507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10324 === (5))){
var state_10323__$1 = state_10323;
var statearr_10338_10508 = state_10323__$1;
(statearr_10338_10508[(2)] = null);

(statearr_10338_10508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10324 === (6))){
var state_10323__$1 = state_10323;
var statearr_10339_10509 = state_10323__$1;
(statearr_10339_10509[(2)] = null);

(statearr_10339_10509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10324 === (7))){
var inst_10319 = (state_10323[(2)]);
var state_10323__$1 = state_10323;
var statearr_10340_10513 = state_10323__$1;
(statearr_10340_10513[(2)] = inst_10319);

(statearr_10340_10513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__10477,c__10053__auto___10501,G__10283_10478,G__10283_10479__$1,n__5010__auto___10474,jobs,results,process,async))
;
return ((function (__10477,switch__9905__auto__,c__10053__auto___10501,G__10283_10478,G__10283_10479__$1,n__5010__auto___10474,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____0 = (function (){
var statearr_10341 = [null,null,null,null,null,null,null];
(statearr_10341[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__);

(statearr_10341[(1)] = (1));

return statearr_10341;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____1 = (function (state_10323){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_10323);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e10342){if((e10342 instanceof Object)){
var ex__9909__auto__ = e10342;
var statearr_10343_10515 = state_10323;
(statearr_10343_10515[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10342;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10516 = state_10323;
state_10323 = G__10516;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__ = function(state_10323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____1.call(this,state_10323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__;
})()
;})(__10477,switch__9905__auto__,c__10053__auto___10501,G__10283_10478,G__10283_10479__$1,n__5010__auto___10474,jobs,results,process,async))
})();
var state__10055__auto__ = (function (){var statearr_10344 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_10344[(6)] = c__10053__auto___10501);

return statearr_10344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(__10477,c__10053__auto___10501,G__10283_10478,G__10283_10479__$1,n__5010__auto___10474,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10283_10479__$1)].join('')));

}

var G__10533 = (__10477 + (1));
__10477 = G__10533;
continue;
} else {
}
break;
}

var c__10053__auto___10534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto___10534,jobs,results,process,async){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto___10534,jobs,results,process,async){
return (function (state_10366){
var state_val_10367 = (state_10366[(1)]);
if((state_val_10367 === (1))){
var state_10366__$1 = state_10366;
var statearr_10368_10535 = state_10366__$1;
(statearr_10368_10535[(2)] = null);

(statearr_10368_10535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10367 === (2))){
var state_10366__$1 = state_10366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10366__$1,(4),from);
} else {
if((state_val_10367 === (3))){
var inst_10364 = (state_10366[(2)]);
var state_10366__$1 = state_10366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10366__$1,inst_10364);
} else {
if((state_val_10367 === (4))){
var inst_10347 = (state_10366[(7)]);
var inst_10347__$1 = (state_10366[(2)]);
var inst_10348 = (inst_10347__$1 == null);
var state_10366__$1 = (function (){var statearr_10369 = state_10366;
(statearr_10369[(7)] = inst_10347__$1);

return statearr_10369;
})();
if(cljs.core.truth_(inst_10348)){
var statearr_10370_10536 = state_10366__$1;
(statearr_10370_10536[(1)] = (5));

} else {
var statearr_10371_10537 = state_10366__$1;
(statearr_10371_10537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10367 === (5))){
var inst_10350 = cljs.core.async.close_BANG_(jobs);
var state_10366__$1 = state_10366;
var statearr_10372_10538 = state_10366__$1;
(statearr_10372_10538[(2)] = inst_10350);

(statearr_10372_10538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10367 === (6))){
var inst_10352 = (state_10366[(8)]);
var inst_10347 = (state_10366[(7)]);
var inst_10352__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_10353 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10354 = [inst_10347,inst_10352__$1];
var inst_10355 = (new cljs.core.PersistentVector(null,2,(5),inst_10353,inst_10354,null));
var state_10366__$1 = (function (){var statearr_10373 = state_10366;
(statearr_10373[(8)] = inst_10352__$1);

return statearr_10373;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10366__$1,(8),jobs,inst_10355);
} else {
if((state_val_10367 === (7))){
var inst_10362 = (state_10366[(2)]);
var state_10366__$1 = state_10366;
var statearr_10374_10542 = state_10366__$1;
(statearr_10374_10542[(2)] = inst_10362);

(statearr_10374_10542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10367 === (8))){
var inst_10352 = (state_10366[(8)]);
var inst_10357 = (state_10366[(2)]);
var state_10366__$1 = (function (){var statearr_10375 = state_10366;
(statearr_10375[(9)] = inst_10357);

return statearr_10375;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10366__$1,(9),results,inst_10352);
} else {
if((state_val_10367 === (9))){
var inst_10359 = (state_10366[(2)]);
var state_10366__$1 = (function (){var statearr_10376 = state_10366;
(statearr_10376[(10)] = inst_10359);

return statearr_10376;
})();
var statearr_10377_10544 = state_10366__$1;
(statearr_10377_10544[(2)] = null);

(statearr_10377_10544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__10053__auto___10534,jobs,results,process,async))
;
return ((function (switch__9905__auto__,c__10053__auto___10534,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____0 = (function (){
var statearr_10378 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10378[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__);

(statearr_10378[(1)] = (1));

return statearr_10378;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____1 = (function (state_10366){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_10366);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e10380){if((e10380 instanceof Object)){
var ex__9909__auto__ = e10380;
var statearr_10381_10547 = state_10366;
(statearr_10381_10547[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10380;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10548 = state_10366;
state_10366 = G__10548;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__ = function(state_10366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____1.call(this,state_10366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto___10534,jobs,results,process,async))
})();
var state__10055__auto__ = (function (){var statearr_10386 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_10386[(6)] = c__10053__auto___10534);

return statearr_10386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto___10534,jobs,results,process,async))
);


var c__10053__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto__,jobs,results,process,async){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto__,jobs,results,process,async){
return (function (state_10424){
var state_val_10425 = (state_10424[(1)]);
if((state_val_10425 === (7))){
var inst_10420 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
var statearr_10426_10549 = state_10424__$1;
(statearr_10426_10549[(2)] = inst_10420);

(statearr_10426_10549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10425 === (20))){
var state_10424__$1 = state_10424;
var statearr_10427_10550 = state_10424__$1;
(statearr_10427_10550[(2)] = null);

(statearr_10427_10550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10425 === (1))){
var state_10424__$1 = state_10424;
var statearr_10428_10551 = state_10424__$1;
(statearr_10428_10551[(2)] = null);

(statearr_10428_10551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10425 === (4))){
var inst_10389 = (state_10424[(7)]);
var inst_10389__$1 = (state_10424[(2)]);
var inst_10390 = (inst_10389__$1 == null);
var state_10424__$1 = (function (){var statearr_10429 = state_10424;
(statearr_10429[(7)] = inst_10389__$1);

return statearr_10429;
})();
if(cljs.core.truth_(inst_10390)){
var statearr_10430_10555 = state_10424__$1;
(statearr_10430_10555[(1)] = (5));

} else {
var statearr_10431_10556 = state_10424__$1;
(statearr_10431_10556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10425 === (15))){
var inst_10402 = (state_10424[(8)]);
var state_10424__$1 = state_10424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10424__$1,(18),to,inst_10402);
} else {
if((state_val_10425 === (21))){
var inst_10415 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
var statearr_10433_10557 = state_10424__$1;
(statearr_10433_10557[(2)] = inst_10415);

(statearr_10433_10557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10425 === (13))){
var inst_10417 = (state_10424[(2)]);
var state_10424__$1 = (function (){var statearr_10434 = state_10424;
(statearr_10434[(9)] = inst_10417);

return statearr_10434;
})();
var statearr_10436_10559 = state_10424__$1;
(statearr_10436_10559[(2)] = null);

(statearr_10436_10559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10425 === (6))){
var inst_10389 = (state_10424[(7)]);
var state_10424__$1 = state_10424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10424__$1,(11),inst_10389);
} else {
if((state_val_10425 === (17))){
var inst_10410 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
if(cljs.core.truth_(inst_10410)){
var statearr_10438_10560 = state_10424__$1;
(statearr_10438_10560[(1)] = (19));

} else {
var statearr_10439_10561 = state_10424__$1;
(statearr_10439_10561[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10425 === (3))){
var inst_10422 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10424__$1,inst_10422);
} else {
if((state_val_10425 === (12))){
var inst_10399 = (state_10424[(10)]);
var state_10424__$1 = state_10424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10424__$1,(14),inst_10399);
} else {
if((state_val_10425 === (2))){
var state_10424__$1 = state_10424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10424__$1,(4),results);
} else {
if((state_val_10425 === (19))){
var state_10424__$1 = state_10424;
var statearr_10441_10562 = state_10424__$1;
(statearr_10441_10562[(2)] = null);

(statearr_10441_10562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10425 === (11))){
var inst_10399 = (state_10424[(2)]);
var state_10424__$1 = (function (){var statearr_10448 = state_10424;
(statearr_10448[(10)] = inst_10399);

return statearr_10448;
})();
var statearr_10449_10563 = state_10424__$1;
(statearr_10449_10563[(2)] = null);

(statearr_10449_10563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10425 === (9))){
var state_10424__$1 = state_10424;
var statearr_10451_10564 = state_10424__$1;
(statearr_10451_10564[(2)] = null);

(statearr_10451_10564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10425 === (5))){
var state_10424__$1 = state_10424;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10452_10565 = state_10424__$1;
(statearr_10452_10565[(1)] = (8));

} else {
var statearr_10453_10566 = state_10424__$1;
(statearr_10453_10566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10425 === (14))){
var inst_10402 = (state_10424[(8)]);
var inst_10404 = (state_10424[(11)]);
var inst_10402__$1 = (state_10424[(2)]);
var inst_10403 = (inst_10402__$1 == null);
var inst_10404__$1 = cljs.core.not(inst_10403);
var state_10424__$1 = (function (){var statearr_10454 = state_10424;
(statearr_10454[(8)] = inst_10402__$1);

(statearr_10454[(11)] = inst_10404__$1);

return statearr_10454;
})();
if(inst_10404__$1){
var statearr_10455_10567 = state_10424__$1;
(statearr_10455_10567[(1)] = (15));

} else {
var statearr_10456_10568 = state_10424__$1;
(statearr_10456_10568[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10425 === (16))){
var inst_10404 = (state_10424[(11)]);
var state_10424__$1 = state_10424;
var statearr_10457_10569 = state_10424__$1;
(statearr_10457_10569[(2)] = inst_10404);

(statearr_10457_10569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10425 === (10))){
var inst_10396 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
var statearr_10458_10570 = state_10424__$1;
(statearr_10458_10570[(2)] = inst_10396);

(statearr_10458_10570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10425 === (18))){
var inst_10407 = (state_10424[(2)]);
var state_10424__$1 = state_10424;
var statearr_10459_10571 = state_10424__$1;
(statearr_10459_10571[(2)] = inst_10407);

(statearr_10459_10571[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10425 === (8))){
var inst_10393 = cljs.core.async.close_BANG_(to);
var state_10424__$1 = state_10424;
var statearr_10460_10572 = state_10424__$1;
(statearr_10460_10572[(2)] = inst_10393);

(statearr_10460_10572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto__,jobs,results,process,async))
;
return ((function (switch__9905__auto__,c__10053__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____0 = (function (){
var statearr_10461 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__);

(statearr_10461[(1)] = (1));

return statearr_10461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____1 = (function (state_10424){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_10424);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e10462){if((e10462 instanceof Object)){
var ex__9909__auto__ = e10462;
var statearr_10463_10573 = state_10424;
(statearr_10463_10573[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10462;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10574 = state_10424;
state_10424 = G__10574;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__ = function(state_10424){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____1.call(this,state_10424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9906__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto__,jobs,results,process,async))
})();
var state__10055__auto__ = (function (){var statearr_10464 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_10464[(6)] = c__10053__auto__);

return statearr_10464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto__,jobs,results,process,async))
);

return c__10053__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__10576 = arguments.length;
switch (G__10576) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__10589 = arguments.length;
switch (G__10589) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__10602 = arguments.length;
switch (G__10602) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__10053__auto___10683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto___10683,tc,fc){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto___10683,tc,fc){
return (function (state_10630){
var state_val_10631 = (state_10630[(1)]);
if((state_val_10631 === (7))){
var inst_10626 = (state_10630[(2)]);
var state_10630__$1 = state_10630;
var statearr_10632_10686 = state_10630__$1;
(statearr_10632_10686[(2)] = inst_10626);

(statearr_10632_10686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10631 === (1))){
var state_10630__$1 = state_10630;
var statearr_10635_10688 = state_10630__$1;
(statearr_10635_10688[(2)] = null);

(statearr_10635_10688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10631 === (4))){
var inst_10607 = (state_10630[(7)]);
var inst_10607__$1 = (state_10630[(2)]);
var inst_10608 = (inst_10607__$1 == null);
var state_10630__$1 = (function (){var statearr_10637 = state_10630;
(statearr_10637[(7)] = inst_10607__$1);

return statearr_10637;
})();
if(cljs.core.truth_(inst_10608)){
var statearr_10638_10690 = state_10630__$1;
(statearr_10638_10690[(1)] = (5));

} else {
var statearr_10640_10693 = state_10630__$1;
(statearr_10640_10693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10631 === (13))){
var state_10630__$1 = state_10630;
var statearr_10642_10694 = state_10630__$1;
(statearr_10642_10694[(2)] = null);

(statearr_10642_10694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10631 === (6))){
var inst_10607 = (state_10630[(7)]);
var inst_10613 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10607) : p.call(null,inst_10607));
var state_10630__$1 = state_10630;
if(cljs.core.truth_(inst_10613)){
var statearr_10645_10696 = state_10630__$1;
(statearr_10645_10696[(1)] = (9));

} else {
var statearr_10647_10697 = state_10630__$1;
(statearr_10647_10697[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10631 === (3))){
var inst_10628 = (state_10630[(2)]);
var state_10630__$1 = state_10630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10630__$1,inst_10628);
} else {
if((state_val_10631 === (12))){
var state_10630__$1 = state_10630;
var statearr_10649_10701 = state_10630__$1;
(statearr_10649_10701[(2)] = null);

(statearr_10649_10701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10631 === (2))){
var state_10630__$1 = state_10630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10630__$1,(4),ch);
} else {
if((state_val_10631 === (11))){
var inst_10607 = (state_10630[(7)]);
var inst_10617 = (state_10630[(2)]);
var state_10630__$1 = state_10630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10630__$1,(8),inst_10617,inst_10607);
} else {
if((state_val_10631 === (9))){
var state_10630__$1 = state_10630;
var statearr_10656_10703 = state_10630__$1;
(statearr_10656_10703[(2)] = tc);

(statearr_10656_10703[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10631 === (5))){
var inst_10610 = cljs.core.async.close_BANG_(tc);
var inst_10611 = cljs.core.async.close_BANG_(fc);
var state_10630__$1 = (function (){var statearr_10659 = state_10630;
(statearr_10659[(8)] = inst_10610);

return statearr_10659;
})();
var statearr_10660_10704 = state_10630__$1;
(statearr_10660_10704[(2)] = inst_10611);

(statearr_10660_10704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10631 === (14))){
var inst_10624 = (state_10630[(2)]);
var state_10630__$1 = state_10630;
var statearr_10665_10705 = state_10630__$1;
(statearr_10665_10705[(2)] = inst_10624);

(statearr_10665_10705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10631 === (10))){
var state_10630__$1 = state_10630;
var statearr_10667_10715 = state_10630__$1;
(statearr_10667_10715[(2)] = fc);

(statearr_10667_10715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10631 === (8))){
var inst_10619 = (state_10630[(2)]);
var state_10630__$1 = state_10630;
if(cljs.core.truth_(inst_10619)){
var statearr_10668_10716 = state_10630__$1;
(statearr_10668_10716[(1)] = (12));

} else {
var statearr_10669_10717 = state_10630__$1;
(statearr_10669_10717[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto___10683,tc,fc))
;
return ((function (switch__9905__auto__,c__10053__auto___10683,tc,fc){
return (function() {
var cljs$core$async$state_machine__9906__auto__ = null;
var cljs$core$async$state_machine__9906__auto____0 = (function (){
var statearr_10673 = [null,null,null,null,null,null,null,null,null];
(statearr_10673[(0)] = cljs$core$async$state_machine__9906__auto__);

(statearr_10673[(1)] = (1));

return statearr_10673;
});
var cljs$core$async$state_machine__9906__auto____1 = (function (state_10630){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_10630);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e10674){if((e10674 instanceof Object)){
var ex__9909__auto__ = e10674;
var statearr_10676_10720 = state_10630;
(statearr_10676_10720[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10674;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10722 = state_10630;
state_10630 = G__10722;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$state_machine__9906__auto__ = function(state_10630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9906__auto____1.call(this,state_10630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9906__auto____0;
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9906__auto____1;
return cljs$core$async$state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto___10683,tc,fc))
})();
var state__10055__auto__ = (function (){var statearr_10677 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_10677[(6)] = c__10053__auto___10683);

return statearr_10677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto___10683,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10053__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto__){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto__){
return (function (state_10747){
var state_val_10748 = (state_10747[(1)]);
if((state_val_10748 === (7))){
var inst_10743 = (state_10747[(2)]);
var state_10747__$1 = state_10747;
var statearr_10749_10787 = state_10747__$1;
(statearr_10749_10787[(2)] = inst_10743);

(statearr_10749_10787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10748 === (1))){
var inst_10724 = init;
var state_10747__$1 = (function (){var statearr_10750 = state_10747;
(statearr_10750[(7)] = inst_10724);

return statearr_10750;
})();
var statearr_10751_10788 = state_10747__$1;
(statearr_10751_10788[(2)] = null);

(statearr_10751_10788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10748 === (4))){
var inst_10727 = (state_10747[(8)]);
var inst_10727__$1 = (state_10747[(2)]);
var inst_10728 = (inst_10727__$1 == null);
var state_10747__$1 = (function (){var statearr_10752 = state_10747;
(statearr_10752[(8)] = inst_10727__$1);

return statearr_10752;
})();
if(cljs.core.truth_(inst_10728)){
var statearr_10753_10790 = state_10747__$1;
(statearr_10753_10790[(1)] = (5));

} else {
var statearr_10754_10792 = state_10747__$1;
(statearr_10754_10792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10748 === (6))){
var inst_10724 = (state_10747[(7)]);
var inst_10727 = (state_10747[(8)]);
var inst_10731 = (state_10747[(9)]);
var inst_10731__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_10724,inst_10727) : f.call(null,inst_10724,inst_10727));
var inst_10732 = cljs.core.reduced_QMARK_(inst_10731__$1);
var state_10747__$1 = (function (){var statearr_10755 = state_10747;
(statearr_10755[(9)] = inst_10731__$1);

return statearr_10755;
})();
if(inst_10732){
var statearr_10756_10794 = state_10747__$1;
(statearr_10756_10794[(1)] = (8));

} else {
var statearr_10759_10795 = state_10747__$1;
(statearr_10759_10795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10748 === (3))){
var inst_10745 = (state_10747[(2)]);
var state_10747__$1 = state_10747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10747__$1,inst_10745);
} else {
if((state_val_10748 === (2))){
var state_10747__$1 = state_10747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10747__$1,(4),ch);
} else {
if((state_val_10748 === (9))){
var inst_10731 = (state_10747[(9)]);
var inst_10724 = inst_10731;
var state_10747__$1 = (function (){var statearr_10764 = state_10747;
(statearr_10764[(7)] = inst_10724);

return statearr_10764;
})();
var statearr_10765_10797 = state_10747__$1;
(statearr_10765_10797[(2)] = null);

(statearr_10765_10797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10748 === (5))){
var inst_10724 = (state_10747[(7)]);
var state_10747__$1 = state_10747;
var statearr_10767_10798 = state_10747__$1;
(statearr_10767_10798[(2)] = inst_10724);

(statearr_10767_10798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10748 === (10))){
var inst_10741 = (state_10747[(2)]);
var state_10747__$1 = state_10747;
var statearr_10768_10799 = state_10747__$1;
(statearr_10768_10799[(2)] = inst_10741);

(statearr_10768_10799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10748 === (8))){
var inst_10731 = (state_10747[(9)]);
var inst_10737 = cljs.core.deref(inst_10731);
var state_10747__$1 = state_10747;
var statearr_10770_10801 = state_10747__$1;
(statearr_10770_10801[(2)] = inst_10737);

(statearr_10770_10801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto__))
;
return ((function (switch__9905__auto__,c__10053__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9906__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9906__auto____0 = (function (){
var statearr_10773 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10773[(0)] = cljs$core$async$reduce_$_state_machine__9906__auto__);

(statearr_10773[(1)] = (1));

return statearr_10773;
});
var cljs$core$async$reduce_$_state_machine__9906__auto____1 = (function (state_10747){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_10747);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e10775){if((e10775 instanceof Object)){
var ex__9909__auto__ = e10775;
var statearr_10778_10803 = state_10747;
(statearr_10778_10803[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10804 = state_10747;
state_10747 = G__10804;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9906__auto__ = function(state_10747){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9906__auto____1.call(this,state_10747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9906__auto____0;
cljs$core$async$reduce_$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9906__auto____1;
return cljs$core$async$reduce_$_state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto__))
})();
var state__10055__auto__ = (function (){var statearr_10780 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_10780[(6)] = c__10053__auto__);

return statearr_10780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto__))
);

return c__10053__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__10053__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto__,f__$1){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto__,f__$1){
return (function (state_10816){
var state_val_10818 = (state_10816[(1)]);
if((state_val_10818 === (1))){
var inst_10811 = cljs.core.async.reduce(f__$1,init,ch);
var state_10816__$1 = state_10816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10816__$1,(2),inst_10811);
} else {
if((state_val_10818 === (2))){
var inst_10813 = (state_10816[(2)]);
var inst_10814 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_10813) : f__$1.call(null,inst_10813));
var state_10816__$1 = state_10816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10816__$1,inst_10814);
} else {
return null;
}
}
});})(c__10053__auto__,f__$1))
;
return ((function (switch__9905__auto__,c__10053__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__9906__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9906__auto____0 = (function (){
var statearr_10823 = [null,null,null,null,null,null,null];
(statearr_10823[(0)] = cljs$core$async$transduce_$_state_machine__9906__auto__);

(statearr_10823[(1)] = (1));

return statearr_10823;
});
var cljs$core$async$transduce_$_state_machine__9906__auto____1 = (function (state_10816){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_10816);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e10824){if((e10824 instanceof Object)){
var ex__9909__auto__ = e10824;
var statearr_10825_10843 = state_10816;
(statearr_10825_10843[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10844 = state_10816;
state_10816 = G__10844;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9906__auto__ = function(state_10816){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9906__auto____1.call(this,state_10816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9906__auto____0;
cljs$core$async$transduce_$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9906__auto____1;
return cljs$core$async$transduce_$_state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto__,f__$1))
})();
var state__10055__auto__ = (function (){var statearr_10827 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_10827[(6)] = c__10053__auto__);

return statearr_10827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto__,f__$1))
);

return c__10053__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__10847 = arguments.length;
switch (G__10847) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10053__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto__){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto__){
return (function (state_10875){
var state_val_10876 = (state_10875[(1)]);
if((state_val_10876 === (7))){
var inst_10855 = (state_10875[(2)]);
var state_10875__$1 = state_10875;
var statearr_10880_10923 = state_10875__$1;
(statearr_10880_10923[(2)] = inst_10855);

(statearr_10880_10923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10876 === (1))){
var inst_10849 = cljs.core.seq(coll);
var inst_10850 = inst_10849;
var state_10875__$1 = (function (){var statearr_10882 = state_10875;
(statearr_10882[(7)] = inst_10850);

return statearr_10882;
})();
var statearr_10884_10924 = state_10875__$1;
(statearr_10884_10924[(2)] = null);

(statearr_10884_10924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10876 === (4))){
var inst_10850 = (state_10875[(7)]);
var inst_10853 = cljs.core.first(inst_10850);
var state_10875__$1 = state_10875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10875__$1,(7),ch,inst_10853);
} else {
if((state_val_10876 === (13))){
var inst_10867 = (state_10875[(2)]);
var state_10875__$1 = state_10875;
var statearr_10888_10925 = state_10875__$1;
(statearr_10888_10925[(2)] = inst_10867);

(statearr_10888_10925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10876 === (6))){
var inst_10858 = (state_10875[(2)]);
var state_10875__$1 = state_10875;
if(cljs.core.truth_(inst_10858)){
var statearr_10890_10928 = state_10875__$1;
(statearr_10890_10928[(1)] = (8));

} else {
var statearr_10891_10929 = state_10875__$1;
(statearr_10891_10929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10876 === (3))){
var inst_10871 = (state_10875[(2)]);
var state_10875__$1 = state_10875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10875__$1,inst_10871);
} else {
if((state_val_10876 === (12))){
var state_10875__$1 = state_10875;
var statearr_10894_10930 = state_10875__$1;
(statearr_10894_10930[(2)] = null);

(statearr_10894_10930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10876 === (2))){
var inst_10850 = (state_10875[(7)]);
var state_10875__$1 = state_10875;
if(cljs.core.truth_(inst_10850)){
var statearr_10896_10932 = state_10875__$1;
(statearr_10896_10932[(1)] = (4));

} else {
var statearr_10897_10933 = state_10875__$1;
(statearr_10897_10933[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10876 === (11))){
var inst_10864 = cljs.core.async.close_BANG_(ch);
var state_10875__$1 = state_10875;
var statearr_10898_10934 = state_10875__$1;
(statearr_10898_10934[(2)] = inst_10864);

(statearr_10898_10934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10876 === (9))){
var state_10875__$1 = state_10875;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10899_10935 = state_10875__$1;
(statearr_10899_10935[(1)] = (11));

} else {
var statearr_10900_10936 = state_10875__$1;
(statearr_10900_10936[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10876 === (5))){
var inst_10850 = (state_10875[(7)]);
var state_10875__$1 = state_10875;
var statearr_10901_10939 = state_10875__$1;
(statearr_10901_10939[(2)] = inst_10850);

(statearr_10901_10939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10876 === (10))){
var inst_10869 = (state_10875[(2)]);
var state_10875__$1 = state_10875;
var statearr_10902_10940 = state_10875__$1;
(statearr_10902_10940[(2)] = inst_10869);

(statearr_10902_10940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10876 === (8))){
var inst_10850 = (state_10875[(7)]);
var inst_10860 = cljs.core.next(inst_10850);
var inst_10850__$1 = inst_10860;
var state_10875__$1 = (function (){var statearr_10905 = state_10875;
(statearr_10905[(7)] = inst_10850__$1);

return statearr_10905;
})();
var statearr_10907_10941 = state_10875__$1;
(statearr_10907_10941[(2)] = null);

(statearr_10907_10941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto__))
;
return ((function (switch__9905__auto__,c__10053__auto__){
return (function() {
var cljs$core$async$state_machine__9906__auto__ = null;
var cljs$core$async$state_machine__9906__auto____0 = (function (){
var statearr_10910 = [null,null,null,null,null,null,null,null];
(statearr_10910[(0)] = cljs$core$async$state_machine__9906__auto__);

(statearr_10910[(1)] = (1));

return statearr_10910;
});
var cljs$core$async$state_machine__9906__auto____1 = (function (state_10875){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_10875);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e10911){if((e10911 instanceof Object)){
var ex__9909__auto__ = e10911;
var statearr_10912_10946 = state_10875;
(statearr_10912_10946[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10911;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10949 = state_10875;
state_10875 = G__10949;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$state_machine__9906__auto__ = function(state_10875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9906__auto____1.call(this,state_10875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9906__auto____0;
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9906__auto____1;
return cljs$core$async$state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto__))
})();
var state__10055__auto__ = (function (){var statearr_10915 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_10915[(6)] = c__10053__auto__);

return statearr_10915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto__))
);

return c__10053__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4797__auto__ = (((_ == null))?null:_);
var m__4798__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4798__auto__.call(null,_));
} else {
var m__4798__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4798__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4797__auto__ = (((m == null))?null:m);
var m__4798__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4798__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4798__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4798__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4797__auto__ = (((m == null))?null:m);
var m__4798__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4798__auto__.call(null,m,ch));
} else {
var m__4798__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4798__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4797__auto__ = (((m == null))?null:m);
var m__4798__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4798__auto__.call(null,m));
} else {
var m__4798__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4798__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10978 = (function (ch,cs,meta10979){
this.ch = ch;
this.cs = cs;
this.meta10979 = meta10979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10980,meta10979__$1){
var self__ = this;
var _10980__$1 = this;
return (new cljs.core.async.t_cljs$core$async10978(self__.ch,self__.cs,meta10979__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10980){
var self__ = this;
var _10980__$1 = this;
return self__.meta10979;
});})(cs))
;

cljs.core.async.t_cljs$core$async10978.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10978.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10978.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10978.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10978.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10978.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10978.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10979","meta10979",-547943673,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10978";

cljs.core.async.t_cljs$core$async10978.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t_cljs$core$async10978");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10978.
 */
cljs.core.async.__GT_t_cljs$core$async10978 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10978(ch__$1,cs__$1,meta10979){
return (new cljs.core.async.t_cljs$core$async10978(ch__$1,cs__$1,meta10979));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10978(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10053__auto___11289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto___11289,cs,m,dchan,dctr,done){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto___11289,cs,m,dchan,dctr,done){
return (function (state_11144){
var state_val_11145 = (state_11144[(1)]);
if((state_val_11145 === (7))){
var inst_11140 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
var statearr_11146_11292 = state_11144__$1;
(statearr_11146_11292[(2)] = inst_11140);

(statearr_11146_11292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (20))){
var inst_11027 = (state_11144[(7)]);
var inst_11040 = cljs.core.first(inst_11027);
var inst_11041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11040,(0),null);
var inst_11042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11040,(1),null);
var state_11144__$1 = (function (){var statearr_11148 = state_11144;
(statearr_11148[(8)] = inst_11041);

return statearr_11148;
})();
if(cljs.core.truth_(inst_11042)){
var statearr_11149_11293 = state_11144__$1;
(statearr_11149_11293[(1)] = (22));

} else {
var statearr_11150_11294 = state_11144__$1;
(statearr_11150_11294[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (27))){
var inst_10994 = (state_11144[(9)]);
var inst_11074 = (state_11144[(10)]);
var inst_11081 = (state_11144[(11)]);
var inst_11072 = (state_11144[(12)]);
var inst_11081__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11072,inst_11074);
var inst_11082 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11081__$1,inst_10994,done);
var state_11144__$1 = (function (){var statearr_11151 = state_11144;
(statearr_11151[(11)] = inst_11081__$1);

return statearr_11151;
})();
if(cljs.core.truth_(inst_11082)){
var statearr_11153_11299 = state_11144__$1;
(statearr_11153_11299[(1)] = (30));

} else {
var statearr_11154_11300 = state_11144__$1;
(statearr_11154_11300[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (1))){
var state_11144__$1 = state_11144;
var statearr_11158_11302 = state_11144__$1;
(statearr_11158_11302[(2)] = null);

(statearr_11158_11302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (24))){
var inst_11027 = (state_11144[(7)]);
var inst_11049 = (state_11144[(2)]);
var inst_11050 = cljs.core.next(inst_11027);
var inst_11004 = inst_11050;
var inst_11005 = null;
var inst_11006 = (0);
var inst_11007 = (0);
var state_11144__$1 = (function (){var statearr_11159 = state_11144;
(statearr_11159[(13)] = inst_11004);

(statearr_11159[(14)] = inst_11049);

(statearr_11159[(15)] = inst_11005);

(statearr_11159[(16)] = inst_11007);

(statearr_11159[(17)] = inst_11006);

return statearr_11159;
})();
var statearr_11160_11303 = state_11144__$1;
(statearr_11160_11303[(2)] = null);

(statearr_11160_11303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (39))){
var state_11144__$1 = state_11144;
var statearr_11164_11304 = state_11144__$1;
(statearr_11164_11304[(2)] = null);

(statearr_11164_11304[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (4))){
var inst_10994 = (state_11144[(9)]);
var inst_10994__$1 = (state_11144[(2)]);
var inst_10996 = (inst_10994__$1 == null);
var state_11144__$1 = (function (){var statearr_11165 = state_11144;
(statearr_11165[(9)] = inst_10994__$1);

return statearr_11165;
})();
if(cljs.core.truth_(inst_10996)){
var statearr_11166_11323 = state_11144__$1;
(statearr_11166_11323[(1)] = (5));

} else {
var statearr_11167_11324 = state_11144__$1;
(statearr_11167_11324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (15))){
var inst_11004 = (state_11144[(13)]);
var inst_11005 = (state_11144[(15)]);
var inst_11007 = (state_11144[(16)]);
var inst_11006 = (state_11144[(17)]);
var inst_11023 = (state_11144[(2)]);
var inst_11024 = (inst_11007 + (1));
var tmp11161 = inst_11004;
var tmp11162 = inst_11005;
var tmp11163 = inst_11006;
var inst_11004__$1 = tmp11161;
var inst_11005__$1 = tmp11162;
var inst_11006__$1 = tmp11163;
var inst_11007__$1 = inst_11024;
var state_11144__$1 = (function (){var statearr_11168 = state_11144;
(statearr_11168[(18)] = inst_11023);

(statearr_11168[(13)] = inst_11004__$1);

(statearr_11168[(15)] = inst_11005__$1);

(statearr_11168[(16)] = inst_11007__$1);

(statearr_11168[(17)] = inst_11006__$1);

return statearr_11168;
})();
var statearr_11169_11326 = state_11144__$1;
(statearr_11169_11326[(2)] = null);

(statearr_11169_11326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (21))){
var inst_11053 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
var statearr_11173_11327 = state_11144__$1;
(statearr_11173_11327[(2)] = inst_11053);

(statearr_11173_11327[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (31))){
var inst_11081 = (state_11144[(11)]);
var inst_11086 = done(null);
var inst_11089 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11081);
var state_11144__$1 = (function (){var statearr_11174 = state_11144;
(statearr_11174[(19)] = inst_11086);

return statearr_11174;
})();
var statearr_11175_11328 = state_11144__$1;
(statearr_11175_11328[(2)] = inst_11089);

(statearr_11175_11328[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (32))){
var inst_11071 = (state_11144[(20)]);
var inst_11074 = (state_11144[(10)]);
var inst_11072 = (state_11144[(12)]);
var inst_11073 = (state_11144[(21)]);
var inst_11091 = (state_11144[(2)]);
var inst_11094 = (inst_11074 + (1));
var tmp11170 = inst_11071;
var tmp11171 = inst_11072;
var tmp11172 = inst_11073;
var inst_11071__$1 = tmp11170;
var inst_11072__$1 = tmp11171;
var inst_11073__$1 = tmp11172;
var inst_11074__$1 = inst_11094;
var state_11144__$1 = (function (){var statearr_11177 = state_11144;
(statearr_11177[(20)] = inst_11071__$1);

(statearr_11177[(22)] = inst_11091);

(statearr_11177[(10)] = inst_11074__$1);

(statearr_11177[(12)] = inst_11072__$1);

(statearr_11177[(21)] = inst_11073__$1);

return statearr_11177;
})();
var statearr_11178_11329 = state_11144__$1;
(statearr_11178_11329[(2)] = null);

(statearr_11178_11329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (40))){
var inst_11108 = (state_11144[(23)]);
var inst_11112 = done(null);
var inst_11113 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11108);
var state_11144__$1 = (function (){var statearr_11179 = state_11144;
(statearr_11179[(24)] = inst_11112);

return statearr_11179;
})();
var statearr_11180_11330 = state_11144__$1;
(statearr_11180_11330[(2)] = inst_11113);

(statearr_11180_11330[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (33))){
var inst_11097 = (state_11144[(25)]);
var inst_11099 = cljs.core.chunked_seq_QMARK_(inst_11097);
var state_11144__$1 = state_11144;
if(inst_11099){
var statearr_11181_11335 = state_11144__$1;
(statearr_11181_11335[(1)] = (36));

} else {
var statearr_11182_11336 = state_11144__$1;
(statearr_11182_11336[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (13))){
var inst_11017 = (state_11144[(26)]);
var inst_11020 = cljs.core.async.close_BANG_(inst_11017);
var state_11144__$1 = state_11144;
var statearr_11183_11337 = state_11144__$1;
(statearr_11183_11337[(2)] = inst_11020);

(statearr_11183_11337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (22))){
var inst_11041 = (state_11144[(8)]);
var inst_11046 = cljs.core.async.close_BANG_(inst_11041);
var state_11144__$1 = state_11144;
var statearr_11184_11338 = state_11144__$1;
(statearr_11184_11338[(2)] = inst_11046);

(statearr_11184_11338[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (36))){
var inst_11097 = (state_11144[(25)]);
var inst_11103 = cljs.core.chunk_first(inst_11097);
var inst_11104 = cljs.core.chunk_rest(inst_11097);
var inst_11105 = cljs.core.count(inst_11103);
var inst_11071 = inst_11104;
var inst_11072 = inst_11103;
var inst_11073 = inst_11105;
var inst_11074 = (0);
var state_11144__$1 = (function (){var statearr_11185 = state_11144;
(statearr_11185[(20)] = inst_11071);

(statearr_11185[(10)] = inst_11074);

(statearr_11185[(12)] = inst_11072);

(statearr_11185[(21)] = inst_11073);

return statearr_11185;
})();
var statearr_11186_11343 = state_11144__$1;
(statearr_11186_11343[(2)] = null);

(statearr_11186_11343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (41))){
var inst_11097 = (state_11144[(25)]);
var inst_11115 = (state_11144[(2)]);
var inst_11116 = cljs.core.next(inst_11097);
var inst_11071 = inst_11116;
var inst_11072 = null;
var inst_11073 = (0);
var inst_11074 = (0);
var state_11144__$1 = (function (){var statearr_11187 = state_11144;
(statearr_11187[(20)] = inst_11071);

(statearr_11187[(10)] = inst_11074);

(statearr_11187[(12)] = inst_11072);

(statearr_11187[(27)] = inst_11115);

(statearr_11187[(21)] = inst_11073);

return statearr_11187;
})();
var statearr_11188_11346 = state_11144__$1;
(statearr_11188_11346[(2)] = null);

(statearr_11188_11346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (43))){
var state_11144__$1 = state_11144;
var statearr_11189_11347 = state_11144__$1;
(statearr_11189_11347[(2)] = null);

(statearr_11189_11347[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (29))){
var inst_11128 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
var statearr_11190_11363 = state_11144__$1;
(statearr_11190_11363[(2)] = inst_11128);

(statearr_11190_11363[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (44))){
var inst_11137 = (state_11144[(2)]);
var state_11144__$1 = (function (){var statearr_11196 = state_11144;
(statearr_11196[(28)] = inst_11137);

return statearr_11196;
})();
var statearr_11197_11364 = state_11144__$1;
(statearr_11197_11364[(2)] = null);

(statearr_11197_11364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (6))){
var inst_11063 = (state_11144[(29)]);
var inst_11062 = cljs.core.deref(cs);
var inst_11063__$1 = cljs.core.keys(inst_11062);
var inst_11064 = cljs.core.count(inst_11063__$1);
var inst_11065 = cljs.core.reset_BANG_(dctr,inst_11064);
var inst_11070 = cljs.core.seq(inst_11063__$1);
var inst_11071 = inst_11070;
var inst_11072 = null;
var inst_11073 = (0);
var inst_11074 = (0);
var state_11144__$1 = (function (){var statearr_11199 = state_11144;
(statearr_11199[(20)] = inst_11071);

(statearr_11199[(10)] = inst_11074);

(statearr_11199[(30)] = inst_11065);

(statearr_11199[(12)] = inst_11072);

(statearr_11199[(21)] = inst_11073);

(statearr_11199[(29)] = inst_11063__$1);

return statearr_11199;
})();
var statearr_11200_11365 = state_11144__$1;
(statearr_11200_11365[(2)] = null);

(statearr_11200_11365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (28))){
var inst_11071 = (state_11144[(20)]);
var inst_11097 = (state_11144[(25)]);
var inst_11097__$1 = cljs.core.seq(inst_11071);
var state_11144__$1 = (function (){var statearr_11201 = state_11144;
(statearr_11201[(25)] = inst_11097__$1);

return statearr_11201;
})();
if(inst_11097__$1){
var statearr_11206_11366 = state_11144__$1;
(statearr_11206_11366[(1)] = (33));

} else {
var statearr_11207_11367 = state_11144__$1;
(statearr_11207_11367[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (25))){
var inst_11074 = (state_11144[(10)]);
var inst_11073 = (state_11144[(21)]);
var inst_11078 = (inst_11074 < inst_11073);
var inst_11079 = inst_11078;
var state_11144__$1 = state_11144;
if(cljs.core.truth_(inst_11079)){
var statearr_11208_11368 = state_11144__$1;
(statearr_11208_11368[(1)] = (27));

} else {
var statearr_11209_11369 = state_11144__$1;
(statearr_11209_11369[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (34))){
var state_11144__$1 = state_11144;
var statearr_11213_11370 = state_11144__$1;
(statearr_11213_11370[(2)] = null);

(statearr_11213_11370[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (17))){
var state_11144__$1 = state_11144;
var statearr_11214_11372 = state_11144__$1;
(statearr_11214_11372[(2)] = null);

(statearr_11214_11372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (3))){
var inst_11142 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11144__$1,inst_11142);
} else {
if((state_val_11145 === (12))){
var inst_11058 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
var statearr_11218_11374 = state_11144__$1;
(statearr_11218_11374[(2)] = inst_11058);

(statearr_11218_11374[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (2))){
var state_11144__$1 = state_11144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11144__$1,(4),ch);
} else {
if((state_val_11145 === (23))){
var state_11144__$1 = state_11144;
var statearr_11223_11376 = state_11144__$1;
(statearr_11223_11376[(2)] = null);

(statearr_11223_11376[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (35))){
var inst_11126 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
var statearr_11224_11378 = state_11144__$1;
(statearr_11224_11378[(2)] = inst_11126);

(statearr_11224_11378[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (19))){
var inst_11027 = (state_11144[(7)]);
var inst_11031 = cljs.core.chunk_first(inst_11027);
var inst_11032 = cljs.core.chunk_rest(inst_11027);
var inst_11033 = cljs.core.count(inst_11031);
var inst_11004 = inst_11032;
var inst_11005 = inst_11031;
var inst_11006 = inst_11033;
var inst_11007 = (0);
var state_11144__$1 = (function (){var statearr_11225 = state_11144;
(statearr_11225[(13)] = inst_11004);

(statearr_11225[(15)] = inst_11005);

(statearr_11225[(16)] = inst_11007);

(statearr_11225[(17)] = inst_11006);

return statearr_11225;
})();
var statearr_11226_11379 = state_11144__$1;
(statearr_11226_11379[(2)] = null);

(statearr_11226_11379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (11))){
var inst_11004 = (state_11144[(13)]);
var inst_11027 = (state_11144[(7)]);
var inst_11027__$1 = cljs.core.seq(inst_11004);
var state_11144__$1 = (function (){var statearr_11228 = state_11144;
(statearr_11228[(7)] = inst_11027__$1);

return statearr_11228;
})();
if(inst_11027__$1){
var statearr_11229_11380 = state_11144__$1;
(statearr_11229_11380[(1)] = (16));

} else {
var statearr_11230_11381 = state_11144__$1;
(statearr_11230_11381[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (9))){
var inst_11060 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
var statearr_11231_11382 = state_11144__$1;
(statearr_11231_11382[(2)] = inst_11060);

(statearr_11231_11382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (5))){
var inst_11002 = cljs.core.deref(cs);
var inst_11003 = cljs.core.seq(inst_11002);
var inst_11004 = inst_11003;
var inst_11005 = null;
var inst_11006 = (0);
var inst_11007 = (0);
var state_11144__$1 = (function (){var statearr_11233 = state_11144;
(statearr_11233[(13)] = inst_11004);

(statearr_11233[(15)] = inst_11005);

(statearr_11233[(16)] = inst_11007);

(statearr_11233[(17)] = inst_11006);

return statearr_11233;
})();
var statearr_11234_11383 = state_11144__$1;
(statearr_11234_11383[(2)] = null);

(statearr_11234_11383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (14))){
var state_11144__$1 = state_11144;
var statearr_11235_11384 = state_11144__$1;
(statearr_11235_11384[(2)] = null);

(statearr_11235_11384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (45))){
var inst_11134 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
var statearr_11236_11385 = state_11144__$1;
(statearr_11236_11385[(2)] = inst_11134);

(statearr_11236_11385[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (26))){
var inst_11063 = (state_11144[(29)]);
var inst_11130 = (state_11144[(2)]);
var inst_11131 = cljs.core.seq(inst_11063);
var state_11144__$1 = (function (){var statearr_11237 = state_11144;
(statearr_11237[(31)] = inst_11130);

return statearr_11237;
})();
if(inst_11131){
var statearr_11238_11386 = state_11144__$1;
(statearr_11238_11386[(1)] = (42));

} else {
var statearr_11239_11387 = state_11144__$1;
(statearr_11239_11387[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (16))){
var inst_11027 = (state_11144[(7)]);
var inst_11029 = cljs.core.chunked_seq_QMARK_(inst_11027);
var state_11144__$1 = state_11144;
if(inst_11029){
var statearr_11244_11388 = state_11144__$1;
(statearr_11244_11388[(1)] = (19));

} else {
var statearr_11245_11389 = state_11144__$1;
(statearr_11245_11389[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (38))){
var inst_11123 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
var statearr_11250_11390 = state_11144__$1;
(statearr_11250_11390[(2)] = inst_11123);

(statearr_11250_11390[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (30))){
var state_11144__$1 = state_11144;
var statearr_11255_11391 = state_11144__$1;
(statearr_11255_11391[(2)] = null);

(statearr_11255_11391[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (10))){
var inst_11005 = (state_11144[(15)]);
var inst_11007 = (state_11144[(16)]);
var inst_11016 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11005,inst_11007);
var inst_11017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11016,(0),null);
var inst_11018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11016,(1),null);
var state_11144__$1 = (function (){var statearr_11256 = state_11144;
(statearr_11256[(26)] = inst_11017);

return statearr_11256;
})();
if(cljs.core.truth_(inst_11018)){
var statearr_11257_11392 = state_11144__$1;
(statearr_11257_11392[(1)] = (13));

} else {
var statearr_11258_11393 = state_11144__$1;
(statearr_11258_11393[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (18))){
var inst_11056 = (state_11144[(2)]);
var state_11144__$1 = state_11144;
var statearr_11259_11396 = state_11144__$1;
(statearr_11259_11396[(2)] = inst_11056);

(statearr_11259_11396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (42))){
var state_11144__$1 = state_11144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11144__$1,(45),dchan);
} else {
if((state_val_11145 === (37))){
var inst_10994 = (state_11144[(9)]);
var inst_11097 = (state_11144[(25)]);
var inst_11108 = (state_11144[(23)]);
var inst_11108__$1 = cljs.core.first(inst_11097);
var inst_11109 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11108__$1,inst_10994,done);
var state_11144__$1 = (function (){var statearr_11260 = state_11144;
(statearr_11260[(23)] = inst_11108__$1);

return statearr_11260;
})();
if(cljs.core.truth_(inst_11109)){
var statearr_11261_11405 = state_11144__$1;
(statearr_11261_11405[(1)] = (39));

} else {
var statearr_11262_11406 = state_11144__$1;
(statearr_11262_11406[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11145 === (8))){
var inst_11007 = (state_11144[(16)]);
var inst_11006 = (state_11144[(17)]);
var inst_11009 = (inst_11007 < inst_11006);
var inst_11010 = inst_11009;
var state_11144__$1 = state_11144;
if(cljs.core.truth_(inst_11010)){
var statearr_11263_11408 = state_11144__$1;
(statearr_11263_11408[(1)] = (10));

} else {
var statearr_11264_11409 = state_11144__$1;
(statearr_11264_11409[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto___11289,cs,m,dchan,dctr,done))
;
return ((function (switch__9905__auto__,c__10053__auto___11289,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9906__auto__ = null;
var cljs$core$async$mult_$_state_machine__9906__auto____0 = (function (){
var statearr_11266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11266[(0)] = cljs$core$async$mult_$_state_machine__9906__auto__);

(statearr_11266[(1)] = (1));

return statearr_11266;
});
var cljs$core$async$mult_$_state_machine__9906__auto____1 = (function (state_11144){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_11144);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e11267){if((e11267 instanceof Object)){
var ex__9909__auto__ = e11267;
var statearr_11268_11410 = state_11144;
(statearr_11268_11410[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11414 = state_11144;
state_11144 = G__11414;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9906__auto__ = function(state_11144){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9906__auto____1.call(this,state_11144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9906__auto____0;
cljs$core$async$mult_$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9906__auto____1;
return cljs$core$async$mult_$_state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto___11289,cs,m,dchan,dctr,done))
})();
var state__10055__auto__ = (function (){var statearr_11269 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_11269[(6)] = c__10053__auto___11289);

return statearr_11269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto___11289,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__11416 = arguments.length;
switch (G__11416) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4797__auto__ = (((m == null))?null:m);
var m__4798__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4798__auto__.call(null,m,ch));
} else {
var m__4798__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4798__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4797__auto__ = (((m == null))?null:m);
var m__4798__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4798__auto__.call(null,m,ch));
} else {
var m__4798__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4798__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4797__auto__ = (((m == null))?null:m);
var m__4798__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4798__auto__.call(null,m));
} else {
var m__4798__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4798__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4797__auto__ = (((m == null))?null:m);
var m__4798__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4798__auto__.call(null,m,state_map));
} else {
var m__4798__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4798__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4797__auto__ = (((m == null))?null:m);
var m__4798__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4798__auto__.call(null,m,mode));
} else {
var m__4798__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4798__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5146__auto__ = [];
var len__5143__auto___11554 = arguments.length;
var i__5144__auto___11555 = (0);
while(true){
if((i__5144__auto___11555 < len__5143__auto___11554)){
args__5146__auto__.push((arguments[i__5144__auto___11555]));

var G__11557 = (i__5144__auto___11555 + (1));
i__5144__auto___11555 = G__11557;
continue;
} else {
}
break;
}

var argseq__5147__auto__ = ((((3) < args__5146__auto__.length))?(new cljs.core.IndexedSeq(args__5146__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5147__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11530){
var map__11531 = p__11530;
var map__11531__$1 = ((((!((map__11531 == null)))?(((((map__11531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11531):map__11531);
var opts = map__11531__$1;
var statearr_11536_11558 = state;
(statearr_11536_11558[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__11531,map__11531__$1,opts){
return (function (val){
var statearr_11543_11559 = state;
(statearr_11543_11559[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__11531,map__11531__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_11544_11560 = state;
(statearr_11544_11560[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11521){
var G__11522 = cljs.core.first(seq11521);
var seq11521__$1 = cljs.core.next(seq11521);
var G__11523 = cljs.core.first(seq11521__$1);
var seq11521__$2 = cljs.core.next(seq11521__$1);
var G__11524 = cljs.core.first(seq11521__$2);
var seq11521__$3 = cljs.core.next(seq11521__$2);
var self__5128__auto__ = this;
return self__5128__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11522,G__11523,G__11524,seq11521__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11561 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta11562){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta11562 = meta11562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11563,meta11562__$1){
var self__ = this;
var _11563__$1 = this;
return (new cljs.core.async.t_cljs$core$async11561(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta11562__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11563){
var self__ = this;
var _11563__$1 = this;
return self__.meta11562;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11561.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11561.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11561.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11561.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11561.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11561.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11561.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11561.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11561.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta11562","meta11562",-84755633,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11561";

cljs.core.async.t_cljs$core$async11561.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t_cljs$core$async11561");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11561.
 */
cljs.core.async.__GT_t_cljs$core$async11561 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11561(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11562){
return (new cljs.core.async.t_cljs$core$async11561(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11562));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11561(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10053__auto___11725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto___11725,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto___11725,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11665){
var state_val_11666 = (state_11665[(1)]);
if((state_val_11666 === (7))){
var inst_11580 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11667_11726 = state_11665__$1;
(statearr_11667_11726[(2)] = inst_11580);

(statearr_11667_11726[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (20))){
var inst_11592 = (state_11665[(7)]);
var state_11665__$1 = state_11665;
var statearr_11668_11727 = state_11665__$1;
(statearr_11668_11727[(2)] = inst_11592);

(statearr_11668_11727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (27))){
var state_11665__$1 = state_11665;
var statearr_11669_11728 = state_11665__$1;
(statearr_11669_11728[(2)] = null);

(statearr_11669_11728[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (1))){
var inst_11567 = (state_11665[(8)]);
var inst_11567__$1 = calc_state();
var inst_11569 = (inst_11567__$1 == null);
var inst_11570 = cljs.core.not(inst_11569);
var state_11665__$1 = (function (){var statearr_11670 = state_11665;
(statearr_11670[(8)] = inst_11567__$1);

return statearr_11670;
})();
if(inst_11570){
var statearr_11671_11729 = state_11665__$1;
(statearr_11671_11729[(1)] = (2));

} else {
var statearr_11672_11730 = state_11665__$1;
(statearr_11672_11730[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (24))){
var inst_11616 = (state_11665[(9)]);
var inst_11625 = (state_11665[(10)]);
var inst_11639 = (state_11665[(11)]);
var inst_11639__$1 = (inst_11616.cljs$core$IFn$_invoke$arity$1 ? inst_11616.cljs$core$IFn$_invoke$arity$1(inst_11625) : inst_11616.call(null,inst_11625));
var state_11665__$1 = (function (){var statearr_11673 = state_11665;
(statearr_11673[(11)] = inst_11639__$1);

return statearr_11673;
})();
if(cljs.core.truth_(inst_11639__$1)){
var statearr_11674_11731 = state_11665__$1;
(statearr_11674_11731[(1)] = (29));

} else {
var statearr_11675_11732 = state_11665__$1;
(statearr_11675_11732[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (4))){
var inst_11583 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
if(cljs.core.truth_(inst_11583)){
var statearr_11676_11733 = state_11665__$1;
(statearr_11676_11733[(1)] = (8));

} else {
var statearr_11677_11734 = state_11665__$1;
(statearr_11677_11734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (15))){
var inst_11610 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
if(cljs.core.truth_(inst_11610)){
var statearr_11678_11735 = state_11665__$1;
(statearr_11678_11735[(1)] = (19));

} else {
var statearr_11679_11736 = state_11665__$1;
(statearr_11679_11736[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (21))){
var inst_11615 = (state_11665[(12)]);
var inst_11615__$1 = (state_11665[(2)]);
var inst_11616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11615__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11615__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11615__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11665__$1 = (function (){var statearr_11680 = state_11665;
(statearr_11680[(13)] = inst_11617);

(statearr_11680[(9)] = inst_11616);

(statearr_11680[(12)] = inst_11615__$1);

return statearr_11680;
})();
return cljs.core.async.ioc_alts_BANG_(state_11665__$1,(22),inst_11618);
} else {
if((state_val_11666 === (31))){
var inst_11647 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
if(cljs.core.truth_(inst_11647)){
var statearr_11681_11737 = state_11665__$1;
(statearr_11681_11737[(1)] = (32));

} else {
var statearr_11682_11738 = state_11665__$1;
(statearr_11682_11738[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (32))){
var inst_11624 = (state_11665[(14)]);
var state_11665__$1 = state_11665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11665__$1,(35),out,inst_11624);
} else {
if((state_val_11666 === (33))){
var inst_11615 = (state_11665[(12)]);
var inst_11592 = inst_11615;
var state_11665__$1 = (function (){var statearr_11683 = state_11665;
(statearr_11683[(7)] = inst_11592);

return statearr_11683;
})();
var statearr_11684_11739 = state_11665__$1;
(statearr_11684_11739[(2)] = null);

(statearr_11684_11739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (13))){
var inst_11592 = (state_11665[(7)]);
var inst_11599 = inst_11592.cljs$lang$protocol_mask$partition0$;
var inst_11600 = (inst_11599 & (64));
var inst_11601 = inst_11592.cljs$core$ISeq$;
var inst_11602 = (cljs.core.PROTOCOL_SENTINEL === inst_11601);
var inst_11603 = ((inst_11600) || (inst_11602));
var state_11665__$1 = state_11665;
if(cljs.core.truth_(inst_11603)){
var statearr_11685_11740 = state_11665__$1;
(statearr_11685_11740[(1)] = (16));

} else {
var statearr_11686_11741 = state_11665__$1;
(statearr_11686_11741[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (22))){
var inst_11624 = (state_11665[(14)]);
var inst_11625 = (state_11665[(10)]);
var inst_11623 = (state_11665[(2)]);
var inst_11624__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11623,(0),null);
var inst_11625__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11623,(1),null);
var inst_11626 = (inst_11624__$1 == null);
var inst_11627 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11625__$1,change);
var inst_11628 = ((inst_11626) || (inst_11627));
var state_11665__$1 = (function (){var statearr_11687 = state_11665;
(statearr_11687[(14)] = inst_11624__$1);

(statearr_11687[(10)] = inst_11625__$1);

return statearr_11687;
})();
if(cljs.core.truth_(inst_11628)){
var statearr_11688_11742 = state_11665__$1;
(statearr_11688_11742[(1)] = (23));

} else {
var statearr_11689_11743 = state_11665__$1;
(statearr_11689_11743[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (36))){
var inst_11615 = (state_11665[(12)]);
var inst_11592 = inst_11615;
var state_11665__$1 = (function (){var statearr_11690 = state_11665;
(statearr_11690[(7)] = inst_11592);

return statearr_11690;
})();
var statearr_11691_11744 = state_11665__$1;
(statearr_11691_11744[(2)] = null);

(statearr_11691_11744[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (29))){
var inst_11639 = (state_11665[(11)]);
var state_11665__$1 = state_11665;
var statearr_11692_11745 = state_11665__$1;
(statearr_11692_11745[(2)] = inst_11639);

(statearr_11692_11745[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (6))){
var state_11665__$1 = state_11665;
var statearr_11693_11746 = state_11665__$1;
(statearr_11693_11746[(2)] = false);

(statearr_11693_11746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (28))){
var inst_11635 = (state_11665[(2)]);
var inst_11636 = calc_state();
var inst_11592 = inst_11636;
var state_11665__$1 = (function (){var statearr_11694 = state_11665;
(statearr_11694[(7)] = inst_11592);

(statearr_11694[(15)] = inst_11635);

return statearr_11694;
})();
var statearr_11695_11747 = state_11665__$1;
(statearr_11695_11747[(2)] = null);

(statearr_11695_11747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (25))){
var inst_11661 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11696_11748 = state_11665__$1;
(statearr_11696_11748[(2)] = inst_11661);

(statearr_11696_11748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (34))){
var inst_11659 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11697_11749 = state_11665__$1;
(statearr_11697_11749[(2)] = inst_11659);

(statearr_11697_11749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (17))){
var state_11665__$1 = state_11665;
var statearr_11698_11750 = state_11665__$1;
(statearr_11698_11750[(2)] = false);

(statearr_11698_11750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (3))){
var state_11665__$1 = state_11665;
var statearr_11699_11751 = state_11665__$1;
(statearr_11699_11751[(2)] = false);

(statearr_11699_11751[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (12))){
var inst_11663 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11665__$1,inst_11663);
} else {
if((state_val_11666 === (2))){
var inst_11567 = (state_11665[(8)]);
var inst_11572 = inst_11567.cljs$lang$protocol_mask$partition0$;
var inst_11573 = (inst_11572 & (64));
var inst_11574 = inst_11567.cljs$core$ISeq$;
var inst_11575 = (cljs.core.PROTOCOL_SENTINEL === inst_11574);
var inst_11576 = ((inst_11573) || (inst_11575));
var state_11665__$1 = state_11665;
if(cljs.core.truth_(inst_11576)){
var statearr_11700_11752 = state_11665__$1;
(statearr_11700_11752[(1)] = (5));

} else {
var statearr_11701_11753 = state_11665__$1;
(statearr_11701_11753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (23))){
var inst_11624 = (state_11665[(14)]);
var inst_11630 = (inst_11624 == null);
var state_11665__$1 = state_11665;
if(cljs.core.truth_(inst_11630)){
var statearr_11702_11754 = state_11665__$1;
(statearr_11702_11754[(1)] = (26));

} else {
var statearr_11703_11755 = state_11665__$1;
(statearr_11703_11755[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (35))){
var inst_11650 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
if(cljs.core.truth_(inst_11650)){
var statearr_11704_11756 = state_11665__$1;
(statearr_11704_11756[(1)] = (36));

} else {
var statearr_11705_11757 = state_11665__$1;
(statearr_11705_11757[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (19))){
var inst_11592 = (state_11665[(7)]);
var inst_11612 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11592);
var state_11665__$1 = state_11665;
var statearr_11706_11758 = state_11665__$1;
(statearr_11706_11758[(2)] = inst_11612);

(statearr_11706_11758[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (11))){
var inst_11592 = (state_11665[(7)]);
var inst_11596 = (inst_11592 == null);
var inst_11597 = cljs.core.not(inst_11596);
var state_11665__$1 = state_11665;
if(inst_11597){
var statearr_11707_11759 = state_11665__$1;
(statearr_11707_11759[(1)] = (13));

} else {
var statearr_11708_11760 = state_11665__$1;
(statearr_11708_11760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (9))){
var inst_11567 = (state_11665[(8)]);
var state_11665__$1 = state_11665;
var statearr_11709_11761 = state_11665__$1;
(statearr_11709_11761[(2)] = inst_11567);

(statearr_11709_11761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (5))){
var state_11665__$1 = state_11665;
var statearr_11710_11762 = state_11665__$1;
(statearr_11710_11762[(2)] = true);

(statearr_11710_11762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (14))){
var state_11665__$1 = state_11665;
var statearr_11711_11763 = state_11665__$1;
(statearr_11711_11763[(2)] = false);

(statearr_11711_11763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (26))){
var inst_11625 = (state_11665[(10)]);
var inst_11632 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11625);
var state_11665__$1 = state_11665;
var statearr_11712_11764 = state_11665__$1;
(statearr_11712_11764[(2)] = inst_11632);

(statearr_11712_11764[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (16))){
var state_11665__$1 = state_11665;
var statearr_11713_11765 = state_11665__$1;
(statearr_11713_11765[(2)] = true);

(statearr_11713_11765[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (38))){
var inst_11655 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11714_11766 = state_11665__$1;
(statearr_11714_11766[(2)] = inst_11655);

(statearr_11714_11766[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (30))){
var inst_11617 = (state_11665[(13)]);
var inst_11616 = (state_11665[(9)]);
var inst_11625 = (state_11665[(10)]);
var inst_11642 = cljs.core.empty_QMARK_(inst_11616);
var inst_11643 = (inst_11617.cljs$core$IFn$_invoke$arity$1 ? inst_11617.cljs$core$IFn$_invoke$arity$1(inst_11625) : inst_11617.call(null,inst_11625));
var inst_11644 = cljs.core.not(inst_11643);
var inst_11645 = ((inst_11642) && (inst_11644));
var state_11665__$1 = state_11665;
var statearr_11715_11767 = state_11665__$1;
(statearr_11715_11767[(2)] = inst_11645);

(statearr_11715_11767[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (10))){
var inst_11567 = (state_11665[(8)]);
var inst_11588 = (state_11665[(2)]);
var inst_11589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11588,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11588,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11588,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11592 = inst_11567;
var state_11665__$1 = (function (){var statearr_11716 = state_11665;
(statearr_11716[(16)] = inst_11590);

(statearr_11716[(17)] = inst_11589);

(statearr_11716[(18)] = inst_11591);

(statearr_11716[(7)] = inst_11592);

return statearr_11716;
})();
var statearr_11717_11768 = state_11665__$1;
(statearr_11717_11768[(2)] = null);

(statearr_11717_11768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (18))){
var inst_11607 = (state_11665[(2)]);
var state_11665__$1 = state_11665;
var statearr_11718_11769 = state_11665__$1;
(statearr_11718_11769[(2)] = inst_11607);

(statearr_11718_11769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (37))){
var state_11665__$1 = state_11665;
var statearr_11719_11770 = state_11665__$1;
(statearr_11719_11770[(2)] = null);

(statearr_11719_11770[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11666 === (8))){
var inst_11567 = (state_11665[(8)]);
var inst_11585 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11567);
var state_11665__$1 = state_11665;
var statearr_11720_11771 = state_11665__$1;
(statearr_11720_11771[(2)] = inst_11585);

(statearr_11720_11771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto___11725,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9905__auto__,c__10053__auto___11725,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9906__auto__ = null;
var cljs$core$async$mix_$_state_machine__9906__auto____0 = (function (){
var statearr_11721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11721[(0)] = cljs$core$async$mix_$_state_machine__9906__auto__);

(statearr_11721[(1)] = (1));

return statearr_11721;
});
var cljs$core$async$mix_$_state_machine__9906__auto____1 = (function (state_11665){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_11665);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e11722){if((e11722 instanceof Object)){
var ex__9909__auto__ = e11722;
var statearr_11723_11772 = state_11665;
(statearr_11723_11772[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11773 = state_11665;
state_11665 = G__11773;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9906__auto__ = function(state_11665){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9906__auto____1.call(this,state_11665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9906__auto____0;
cljs$core$async$mix_$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9906__auto____1;
return cljs$core$async$mix_$_state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto___11725,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10055__auto__ = (function (){var statearr_11724 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_11724[(6)] = c__10053__auto___11725);

return statearr_11724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto___11725,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4797__auto__ = (((p == null))?null:p);
var m__4798__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4798__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4798__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4798__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4797__auto__ = (((p == null))?null:p);
var m__4798__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4798__auto__.call(null,p,v,ch));
} else {
var m__4798__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4798__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__11775 = arguments.length;
switch (G__11775) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4797__auto__ = (((p == null))?null:p);
var m__4798__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4798__auto__.call(null,p));
} else {
var m__4798__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4798__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4797__auto__ = (((p == null))?null:p);
var m__4798__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4798__auto__.call(null,p,v));
} else {
var m__4798__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4798__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__11779 = arguments.length;
switch (G__11779) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4453__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4453__auto__)){
return or__4453__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4453__auto__,mults){
return (function (p1__11777_SHARP_){
if(cljs.core.truth_((p1__11777_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11777_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11777_SHARP_.call(null,topic)))){
return p1__11777_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11777_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4453__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11780 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11780 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11781){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11781 = meta11781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11782,meta11781__$1){
var self__ = this;
var _11782__$1 = this;
return (new cljs.core.async.t_cljs$core$async11780(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11781__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11782){
var self__ = this;
var _11782__$1 = this;
return self__.meta11781;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11780.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11780.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11780.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11780.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11780.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11780.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11780.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11780.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11781","meta11781",450316867,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11780";

cljs.core.async.t_cljs$core$async11780.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t_cljs$core$async11780");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11780.
 */
cljs.core.async.__GT_t_cljs$core$async11780 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11780(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11781){
return (new cljs.core.async.t_cljs$core$async11780(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11781));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11780(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10053__auto___11900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto___11900,mults,ensure_mult,p){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto___11900,mults,ensure_mult,p){
return (function (state_11854){
var state_val_11855 = (state_11854[(1)]);
if((state_val_11855 === (7))){
var inst_11850 = (state_11854[(2)]);
var state_11854__$1 = state_11854;
var statearr_11856_11901 = state_11854__$1;
(statearr_11856_11901[(2)] = inst_11850);

(statearr_11856_11901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (20))){
var state_11854__$1 = state_11854;
var statearr_11857_11902 = state_11854__$1;
(statearr_11857_11902[(2)] = null);

(statearr_11857_11902[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (1))){
var state_11854__$1 = state_11854;
var statearr_11858_11903 = state_11854__$1;
(statearr_11858_11903[(2)] = null);

(statearr_11858_11903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (24))){
var inst_11833 = (state_11854[(7)]);
var inst_11842 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11833);
var state_11854__$1 = state_11854;
var statearr_11859_11904 = state_11854__$1;
(statearr_11859_11904[(2)] = inst_11842);

(statearr_11859_11904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (4))){
var inst_11785 = (state_11854[(8)]);
var inst_11785__$1 = (state_11854[(2)]);
var inst_11786 = (inst_11785__$1 == null);
var state_11854__$1 = (function (){var statearr_11860 = state_11854;
(statearr_11860[(8)] = inst_11785__$1);

return statearr_11860;
})();
if(cljs.core.truth_(inst_11786)){
var statearr_11861_11905 = state_11854__$1;
(statearr_11861_11905[(1)] = (5));

} else {
var statearr_11862_11906 = state_11854__$1;
(statearr_11862_11906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (15))){
var inst_11827 = (state_11854[(2)]);
var state_11854__$1 = state_11854;
var statearr_11863_11907 = state_11854__$1;
(statearr_11863_11907[(2)] = inst_11827);

(statearr_11863_11907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (21))){
var inst_11847 = (state_11854[(2)]);
var state_11854__$1 = (function (){var statearr_11864 = state_11854;
(statearr_11864[(9)] = inst_11847);

return statearr_11864;
})();
var statearr_11865_11908 = state_11854__$1;
(statearr_11865_11908[(2)] = null);

(statearr_11865_11908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (13))){
var inst_11809 = (state_11854[(10)]);
var inst_11811 = cljs.core.chunked_seq_QMARK_(inst_11809);
var state_11854__$1 = state_11854;
if(inst_11811){
var statearr_11866_11909 = state_11854__$1;
(statearr_11866_11909[(1)] = (16));

} else {
var statearr_11867_11910 = state_11854__$1;
(statearr_11867_11910[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (22))){
var inst_11839 = (state_11854[(2)]);
var state_11854__$1 = state_11854;
if(cljs.core.truth_(inst_11839)){
var statearr_11868_11911 = state_11854__$1;
(statearr_11868_11911[(1)] = (23));

} else {
var statearr_11869_11912 = state_11854__$1;
(statearr_11869_11912[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (6))){
var inst_11785 = (state_11854[(8)]);
var inst_11833 = (state_11854[(7)]);
var inst_11835 = (state_11854[(11)]);
var inst_11833__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11785) : topic_fn.call(null,inst_11785));
var inst_11834 = cljs.core.deref(mults);
var inst_11835__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11834,inst_11833__$1);
var state_11854__$1 = (function (){var statearr_11870 = state_11854;
(statearr_11870[(7)] = inst_11833__$1);

(statearr_11870[(11)] = inst_11835__$1);

return statearr_11870;
})();
if(cljs.core.truth_(inst_11835__$1)){
var statearr_11871_11913 = state_11854__$1;
(statearr_11871_11913[(1)] = (19));

} else {
var statearr_11872_11914 = state_11854__$1;
(statearr_11872_11914[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (25))){
var inst_11844 = (state_11854[(2)]);
var state_11854__$1 = state_11854;
var statearr_11873_11915 = state_11854__$1;
(statearr_11873_11915[(2)] = inst_11844);

(statearr_11873_11915[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (17))){
var inst_11809 = (state_11854[(10)]);
var inst_11818 = cljs.core.first(inst_11809);
var inst_11819 = cljs.core.async.muxch_STAR_(inst_11818);
var inst_11820 = cljs.core.async.close_BANG_(inst_11819);
var inst_11821 = cljs.core.next(inst_11809);
var inst_11795 = inst_11821;
var inst_11796 = null;
var inst_11797 = (0);
var inst_11798 = (0);
var state_11854__$1 = (function (){var statearr_11874 = state_11854;
(statearr_11874[(12)] = inst_11795);

(statearr_11874[(13)] = inst_11797);

(statearr_11874[(14)] = inst_11796);

(statearr_11874[(15)] = inst_11820);

(statearr_11874[(16)] = inst_11798);

return statearr_11874;
})();
var statearr_11875_11916 = state_11854__$1;
(statearr_11875_11916[(2)] = null);

(statearr_11875_11916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (3))){
var inst_11852 = (state_11854[(2)]);
var state_11854__$1 = state_11854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11854__$1,inst_11852);
} else {
if((state_val_11855 === (12))){
var inst_11829 = (state_11854[(2)]);
var state_11854__$1 = state_11854;
var statearr_11876_11917 = state_11854__$1;
(statearr_11876_11917[(2)] = inst_11829);

(statearr_11876_11917[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (2))){
var state_11854__$1 = state_11854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11854__$1,(4),ch);
} else {
if((state_val_11855 === (23))){
var state_11854__$1 = state_11854;
var statearr_11877_11918 = state_11854__$1;
(statearr_11877_11918[(2)] = null);

(statearr_11877_11918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (19))){
var inst_11785 = (state_11854[(8)]);
var inst_11835 = (state_11854[(11)]);
var inst_11837 = cljs.core.async.muxch_STAR_(inst_11835);
var state_11854__$1 = state_11854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11854__$1,(22),inst_11837,inst_11785);
} else {
if((state_val_11855 === (11))){
var inst_11795 = (state_11854[(12)]);
var inst_11809 = (state_11854[(10)]);
var inst_11809__$1 = cljs.core.seq(inst_11795);
var state_11854__$1 = (function (){var statearr_11878 = state_11854;
(statearr_11878[(10)] = inst_11809__$1);

return statearr_11878;
})();
if(inst_11809__$1){
var statearr_11879_11919 = state_11854__$1;
(statearr_11879_11919[(1)] = (13));

} else {
var statearr_11880_11920 = state_11854__$1;
(statearr_11880_11920[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (9))){
var inst_11831 = (state_11854[(2)]);
var state_11854__$1 = state_11854;
var statearr_11881_11921 = state_11854__$1;
(statearr_11881_11921[(2)] = inst_11831);

(statearr_11881_11921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (5))){
var inst_11792 = cljs.core.deref(mults);
var inst_11793 = cljs.core.vals(inst_11792);
var inst_11794 = cljs.core.seq(inst_11793);
var inst_11795 = inst_11794;
var inst_11796 = null;
var inst_11797 = (0);
var inst_11798 = (0);
var state_11854__$1 = (function (){var statearr_11882 = state_11854;
(statearr_11882[(12)] = inst_11795);

(statearr_11882[(13)] = inst_11797);

(statearr_11882[(14)] = inst_11796);

(statearr_11882[(16)] = inst_11798);

return statearr_11882;
})();
var statearr_11883_11922 = state_11854__$1;
(statearr_11883_11922[(2)] = null);

(statearr_11883_11922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (14))){
var state_11854__$1 = state_11854;
var statearr_11887_11923 = state_11854__$1;
(statearr_11887_11923[(2)] = null);

(statearr_11887_11923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (16))){
var inst_11809 = (state_11854[(10)]);
var inst_11813 = cljs.core.chunk_first(inst_11809);
var inst_11814 = cljs.core.chunk_rest(inst_11809);
var inst_11815 = cljs.core.count(inst_11813);
var inst_11795 = inst_11814;
var inst_11796 = inst_11813;
var inst_11797 = inst_11815;
var inst_11798 = (0);
var state_11854__$1 = (function (){var statearr_11888 = state_11854;
(statearr_11888[(12)] = inst_11795);

(statearr_11888[(13)] = inst_11797);

(statearr_11888[(14)] = inst_11796);

(statearr_11888[(16)] = inst_11798);

return statearr_11888;
})();
var statearr_11889_11924 = state_11854__$1;
(statearr_11889_11924[(2)] = null);

(statearr_11889_11924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (10))){
var inst_11795 = (state_11854[(12)]);
var inst_11797 = (state_11854[(13)]);
var inst_11796 = (state_11854[(14)]);
var inst_11798 = (state_11854[(16)]);
var inst_11803 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11796,inst_11798);
var inst_11804 = cljs.core.async.muxch_STAR_(inst_11803);
var inst_11805 = cljs.core.async.close_BANG_(inst_11804);
var inst_11806 = (inst_11798 + (1));
var tmp11884 = inst_11795;
var tmp11885 = inst_11797;
var tmp11886 = inst_11796;
var inst_11795__$1 = tmp11884;
var inst_11796__$1 = tmp11886;
var inst_11797__$1 = tmp11885;
var inst_11798__$1 = inst_11806;
var state_11854__$1 = (function (){var statearr_11890 = state_11854;
(statearr_11890[(12)] = inst_11795__$1);

(statearr_11890[(13)] = inst_11797__$1);

(statearr_11890[(14)] = inst_11796__$1);

(statearr_11890[(17)] = inst_11805);

(statearr_11890[(16)] = inst_11798__$1);

return statearr_11890;
})();
var statearr_11891_11925 = state_11854__$1;
(statearr_11891_11925[(2)] = null);

(statearr_11891_11925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (18))){
var inst_11824 = (state_11854[(2)]);
var state_11854__$1 = state_11854;
var statearr_11892_11926 = state_11854__$1;
(statearr_11892_11926[(2)] = inst_11824);

(statearr_11892_11926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11855 === (8))){
var inst_11797 = (state_11854[(13)]);
var inst_11798 = (state_11854[(16)]);
var inst_11800 = (inst_11798 < inst_11797);
var inst_11801 = inst_11800;
var state_11854__$1 = state_11854;
if(cljs.core.truth_(inst_11801)){
var statearr_11893_11927 = state_11854__$1;
(statearr_11893_11927[(1)] = (10));

} else {
var statearr_11894_11928 = state_11854__$1;
(statearr_11894_11928[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto___11900,mults,ensure_mult,p))
;
return ((function (switch__9905__auto__,c__10053__auto___11900,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9906__auto__ = null;
var cljs$core$async$state_machine__9906__auto____0 = (function (){
var statearr_11895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11895[(0)] = cljs$core$async$state_machine__9906__auto__);

(statearr_11895[(1)] = (1));

return statearr_11895;
});
var cljs$core$async$state_machine__9906__auto____1 = (function (state_11854){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_11854);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e11896){if((e11896 instanceof Object)){
var ex__9909__auto__ = e11896;
var statearr_11897_11929 = state_11854;
(statearr_11897_11929[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11896;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11930 = state_11854;
state_11854 = G__11930;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$state_machine__9906__auto__ = function(state_11854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9906__auto____1.call(this,state_11854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9906__auto____0;
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9906__auto____1;
return cljs$core$async$state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto___11900,mults,ensure_mult,p))
})();
var state__10055__auto__ = (function (){var statearr_11898 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_11898[(6)] = c__10053__auto___11900);

return statearr_11898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto___11900,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__11932 = arguments.length;
switch (G__11932) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__11935 = arguments.length;
switch (G__11935) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__11938 = arguments.length;
switch (G__11938) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__10053__auto___12005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto___12005,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto___12005,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11977){
var state_val_11978 = (state_11977[(1)]);
if((state_val_11978 === (7))){
var state_11977__$1 = state_11977;
var statearr_11979_12006 = state_11977__$1;
(statearr_11979_12006[(2)] = null);

(statearr_11979_12006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (1))){
var state_11977__$1 = state_11977;
var statearr_11980_12007 = state_11977__$1;
(statearr_11980_12007[(2)] = null);

(statearr_11980_12007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (4))){
var inst_11941 = (state_11977[(7)]);
var inst_11943 = (inst_11941 < cnt);
var state_11977__$1 = state_11977;
if(cljs.core.truth_(inst_11943)){
var statearr_11981_12008 = state_11977__$1;
(statearr_11981_12008[(1)] = (6));

} else {
var statearr_11982_12009 = state_11977__$1;
(statearr_11982_12009[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (15))){
var inst_11973 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
var statearr_11983_12010 = state_11977__$1;
(statearr_11983_12010[(2)] = inst_11973);

(statearr_11983_12010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (13))){
var inst_11966 = cljs.core.async.close_BANG_(out);
var state_11977__$1 = state_11977;
var statearr_11984_12011 = state_11977__$1;
(statearr_11984_12011[(2)] = inst_11966);

(statearr_11984_12011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (6))){
var state_11977__$1 = state_11977;
var statearr_11985_12012 = state_11977__$1;
(statearr_11985_12012[(2)] = null);

(statearr_11985_12012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (3))){
var inst_11975 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11977__$1,inst_11975);
} else {
if((state_val_11978 === (12))){
var inst_11963 = (state_11977[(8)]);
var inst_11963__$1 = (state_11977[(2)]);
var inst_11964 = cljs.core.some(cljs.core.nil_QMARK_,inst_11963__$1);
var state_11977__$1 = (function (){var statearr_11986 = state_11977;
(statearr_11986[(8)] = inst_11963__$1);

return statearr_11986;
})();
if(cljs.core.truth_(inst_11964)){
var statearr_11987_12013 = state_11977__$1;
(statearr_11987_12013[(1)] = (13));

} else {
var statearr_11988_12014 = state_11977__$1;
(statearr_11988_12014[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (2))){
var inst_11940 = cljs.core.reset_BANG_(dctr,cnt);
var inst_11941 = (0);
var state_11977__$1 = (function (){var statearr_11989 = state_11977;
(statearr_11989[(9)] = inst_11940);

(statearr_11989[(7)] = inst_11941);

return statearr_11989;
})();
var statearr_11990_12015 = state_11977__$1;
(statearr_11990_12015[(2)] = null);

(statearr_11990_12015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (11))){
var inst_11941 = (state_11977[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_11977,(10),Object,null,(9));
var inst_11950 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_11941) : chs__$1.call(null,inst_11941));
var inst_11951 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_11941) : done.call(null,inst_11941));
var inst_11952 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_11950,inst_11951);
var state_11977__$1 = state_11977;
var statearr_11991_12016 = state_11977__$1;
(statearr_11991_12016[(2)] = inst_11952);


cljs.core.async.impl.ioc_helpers.process_exception(state_11977__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (9))){
var inst_11941 = (state_11977[(7)]);
var inst_11954 = (state_11977[(2)]);
var inst_11955 = (inst_11941 + (1));
var inst_11941__$1 = inst_11955;
var state_11977__$1 = (function (){var statearr_11992 = state_11977;
(statearr_11992[(7)] = inst_11941__$1);

(statearr_11992[(10)] = inst_11954);

return statearr_11992;
})();
var statearr_11993_12017 = state_11977__$1;
(statearr_11993_12017[(2)] = null);

(statearr_11993_12017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (5))){
var inst_11961 = (state_11977[(2)]);
var state_11977__$1 = (function (){var statearr_11994 = state_11977;
(statearr_11994[(11)] = inst_11961);

return statearr_11994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11977__$1,(12),dchan);
} else {
if((state_val_11978 === (14))){
var inst_11963 = (state_11977[(8)]);
var inst_11968 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_11963);
var state_11977__$1 = state_11977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11977__$1,(16),out,inst_11968);
} else {
if((state_val_11978 === (16))){
var inst_11970 = (state_11977[(2)]);
var state_11977__$1 = (function (){var statearr_11995 = state_11977;
(statearr_11995[(12)] = inst_11970);

return statearr_11995;
})();
var statearr_11996_12018 = state_11977__$1;
(statearr_11996_12018[(2)] = null);

(statearr_11996_12018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (10))){
var inst_11945 = (state_11977[(2)]);
var inst_11946 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_11977__$1 = (function (){var statearr_11997 = state_11977;
(statearr_11997[(13)] = inst_11945);

return statearr_11997;
})();
var statearr_11998_12019 = state_11977__$1;
(statearr_11998_12019[(2)] = inst_11946);


cljs.core.async.impl.ioc_helpers.process_exception(state_11977__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11978 === (8))){
var inst_11959 = (state_11977[(2)]);
var state_11977__$1 = state_11977;
var statearr_11999_12020 = state_11977__$1;
(statearr_11999_12020[(2)] = inst_11959);

(statearr_11999_12020[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto___12005,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9905__auto__,c__10053__auto___12005,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9906__auto__ = null;
var cljs$core$async$state_machine__9906__auto____0 = (function (){
var statearr_12000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12000[(0)] = cljs$core$async$state_machine__9906__auto__);

(statearr_12000[(1)] = (1));

return statearr_12000;
});
var cljs$core$async$state_machine__9906__auto____1 = (function (state_11977){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_11977);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e12001){if((e12001 instanceof Object)){
var ex__9909__auto__ = e12001;
var statearr_12002_12021 = state_11977;
(statearr_12002_12021[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12001;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12022 = state_11977;
state_11977 = G__12022;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$state_machine__9906__auto__ = function(state_11977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9906__auto____1.call(this,state_11977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9906__auto____0;
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9906__auto____1;
return cljs$core$async$state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto___12005,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10055__auto__ = (function (){var statearr_12003 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_12003[(6)] = c__10053__auto___12005);

return statearr_12003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto___12005,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__12025 = arguments.length;
switch (G__12025) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10053__auto___12079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto___12079,out){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto___12079,out){
return (function (state_12057){
var state_val_12058 = (state_12057[(1)]);
if((state_val_12058 === (7))){
var inst_12036 = (state_12057[(7)]);
var inst_12037 = (state_12057[(8)]);
var inst_12036__$1 = (state_12057[(2)]);
var inst_12037__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12036__$1,(0),null);
var inst_12038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12036__$1,(1),null);
var inst_12039 = (inst_12037__$1 == null);
var state_12057__$1 = (function (){var statearr_12059 = state_12057;
(statearr_12059[(7)] = inst_12036__$1);

(statearr_12059[(9)] = inst_12038);

(statearr_12059[(8)] = inst_12037__$1);

return statearr_12059;
})();
if(cljs.core.truth_(inst_12039)){
var statearr_12060_12080 = state_12057__$1;
(statearr_12060_12080[(1)] = (8));

} else {
var statearr_12061_12081 = state_12057__$1;
(statearr_12061_12081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (1))){
var inst_12026 = cljs.core.vec(chs);
var inst_12027 = inst_12026;
var state_12057__$1 = (function (){var statearr_12062 = state_12057;
(statearr_12062[(10)] = inst_12027);

return statearr_12062;
})();
var statearr_12063_12082 = state_12057__$1;
(statearr_12063_12082[(2)] = null);

(statearr_12063_12082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (4))){
var inst_12027 = (state_12057[(10)]);
var state_12057__$1 = state_12057;
return cljs.core.async.ioc_alts_BANG_(state_12057__$1,(7),inst_12027);
} else {
if((state_val_12058 === (6))){
var inst_12053 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12064_12083 = state_12057__$1;
(statearr_12064_12083[(2)] = inst_12053);

(statearr_12064_12083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (3))){
var inst_12055 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12057__$1,inst_12055);
} else {
if((state_val_12058 === (2))){
var inst_12027 = (state_12057[(10)]);
var inst_12029 = cljs.core.count(inst_12027);
var inst_12030 = (inst_12029 > (0));
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_12030)){
var statearr_12066_12084 = state_12057__$1;
(statearr_12066_12084[(1)] = (4));

} else {
var statearr_12067_12085 = state_12057__$1;
(statearr_12067_12085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (11))){
var inst_12027 = (state_12057[(10)]);
var inst_12046 = (state_12057[(2)]);
var tmp12065 = inst_12027;
var inst_12027__$1 = tmp12065;
var state_12057__$1 = (function (){var statearr_12068 = state_12057;
(statearr_12068[(11)] = inst_12046);

(statearr_12068[(10)] = inst_12027__$1);

return statearr_12068;
})();
var statearr_12069_12086 = state_12057__$1;
(statearr_12069_12086[(2)] = null);

(statearr_12069_12086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (9))){
var inst_12037 = (state_12057[(8)]);
var state_12057__$1 = state_12057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12057__$1,(11),out,inst_12037);
} else {
if((state_val_12058 === (5))){
var inst_12051 = cljs.core.async.close_BANG_(out);
var state_12057__$1 = state_12057;
var statearr_12070_12087 = state_12057__$1;
(statearr_12070_12087[(2)] = inst_12051);

(statearr_12070_12087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (10))){
var inst_12049 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12071_12088 = state_12057__$1;
(statearr_12071_12088[(2)] = inst_12049);

(statearr_12071_12088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (8))){
var inst_12036 = (state_12057[(7)]);
var inst_12038 = (state_12057[(9)]);
var inst_12027 = (state_12057[(10)]);
var inst_12037 = (state_12057[(8)]);
var inst_12041 = (function (){var cs = inst_12027;
var vec__12032 = inst_12036;
var v = inst_12037;
var c = inst_12038;
return ((function (cs,vec__12032,v,c,inst_12036,inst_12038,inst_12027,inst_12037,state_val_12058,c__10053__auto___12079,out){
return (function (p1__12023_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12023_SHARP_);
});
;})(cs,vec__12032,v,c,inst_12036,inst_12038,inst_12027,inst_12037,state_val_12058,c__10053__auto___12079,out))
})();
var inst_12042 = cljs.core.filterv(inst_12041,inst_12027);
var inst_12027__$1 = inst_12042;
var state_12057__$1 = (function (){var statearr_12072 = state_12057;
(statearr_12072[(10)] = inst_12027__$1);

return statearr_12072;
})();
var statearr_12073_12089 = state_12057__$1;
(statearr_12073_12089[(2)] = null);

(statearr_12073_12089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto___12079,out))
;
return ((function (switch__9905__auto__,c__10053__auto___12079,out){
return (function() {
var cljs$core$async$state_machine__9906__auto__ = null;
var cljs$core$async$state_machine__9906__auto____0 = (function (){
var statearr_12074 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12074[(0)] = cljs$core$async$state_machine__9906__auto__);

(statearr_12074[(1)] = (1));

return statearr_12074;
});
var cljs$core$async$state_machine__9906__auto____1 = (function (state_12057){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_12057);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e12075){if((e12075 instanceof Object)){
var ex__9909__auto__ = e12075;
var statearr_12076_12090 = state_12057;
(statearr_12076_12090[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12075;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12091 = state_12057;
state_12057 = G__12091;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$state_machine__9906__auto__ = function(state_12057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9906__auto____1.call(this,state_12057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9906__auto____0;
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9906__auto____1;
return cljs$core$async$state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto___12079,out))
})();
var state__10055__auto__ = (function (){var statearr_12077 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_12077[(6)] = c__10053__auto___12079);

return statearr_12077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto___12079,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__12093 = arguments.length;
switch (G__12093) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10053__auto___12138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto___12138,out){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto___12138,out){
return (function (state_12117){
var state_val_12118 = (state_12117[(1)]);
if((state_val_12118 === (7))){
var inst_12099 = (state_12117[(7)]);
var inst_12099__$1 = (state_12117[(2)]);
var inst_12100 = (inst_12099__$1 == null);
var inst_12101 = cljs.core.not(inst_12100);
var state_12117__$1 = (function (){var statearr_12119 = state_12117;
(statearr_12119[(7)] = inst_12099__$1);

return statearr_12119;
})();
if(inst_12101){
var statearr_12120_12139 = state_12117__$1;
(statearr_12120_12139[(1)] = (8));

} else {
var statearr_12121_12140 = state_12117__$1;
(statearr_12121_12140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12118 === (1))){
var inst_12094 = (0);
var state_12117__$1 = (function (){var statearr_12122 = state_12117;
(statearr_12122[(8)] = inst_12094);

return statearr_12122;
})();
var statearr_12123_12141 = state_12117__$1;
(statearr_12123_12141[(2)] = null);

(statearr_12123_12141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12118 === (4))){
var state_12117__$1 = state_12117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12117__$1,(7),ch);
} else {
if((state_val_12118 === (6))){
var inst_12112 = (state_12117[(2)]);
var state_12117__$1 = state_12117;
var statearr_12124_12142 = state_12117__$1;
(statearr_12124_12142[(2)] = inst_12112);

(statearr_12124_12142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12118 === (3))){
var inst_12114 = (state_12117[(2)]);
var inst_12115 = cljs.core.async.close_BANG_(out);
var state_12117__$1 = (function (){var statearr_12125 = state_12117;
(statearr_12125[(9)] = inst_12114);

return statearr_12125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12117__$1,inst_12115);
} else {
if((state_val_12118 === (2))){
var inst_12094 = (state_12117[(8)]);
var inst_12096 = (inst_12094 < n);
var state_12117__$1 = state_12117;
if(cljs.core.truth_(inst_12096)){
var statearr_12126_12143 = state_12117__$1;
(statearr_12126_12143[(1)] = (4));

} else {
var statearr_12127_12144 = state_12117__$1;
(statearr_12127_12144[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12118 === (11))){
var inst_12094 = (state_12117[(8)]);
var inst_12104 = (state_12117[(2)]);
var inst_12105 = (inst_12094 + (1));
var inst_12094__$1 = inst_12105;
var state_12117__$1 = (function (){var statearr_12128 = state_12117;
(statearr_12128[(8)] = inst_12094__$1);

(statearr_12128[(10)] = inst_12104);

return statearr_12128;
})();
var statearr_12129_12145 = state_12117__$1;
(statearr_12129_12145[(2)] = null);

(statearr_12129_12145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12118 === (9))){
var state_12117__$1 = state_12117;
var statearr_12130_12146 = state_12117__$1;
(statearr_12130_12146[(2)] = null);

(statearr_12130_12146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12118 === (5))){
var state_12117__$1 = state_12117;
var statearr_12131_12147 = state_12117__$1;
(statearr_12131_12147[(2)] = null);

(statearr_12131_12147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12118 === (10))){
var inst_12109 = (state_12117[(2)]);
var state_12117__$1 = state_12117;
var statearr_12132_12148 = state_12117__$1;
(statearr_12132_12148[(2)] = inst_12109);

(statearr_12132_12148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12118 === (8))){
var inst_12099 = (state_12117[(7)]);
var state_12117__$1 = state_12117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12117__$1,(11),out,inst_12099);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto___12138,out))
;
return ((function (switch__9905__auto__,c__10053__auto___12138,out){
return (function() {
var cljs$core$async$state_machine__9906__auto__ = null;
var cljs$core$async$state_machine__9906__auto____0 = (function (){
var statearr_12133 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12133[(0)] = cljs$core$async$state_machine__9906__auto__);

(statearr_12133[(1)] = (1));

return statearr_12133;
});
var cljs$core$async$state_machine__9906__auto____1 = (function (state_12117){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_12117);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e12134){if((e12134 instanceof Object)){
var ex__9909__auto__ = e12134;
var statearr_12135_12149 = state_12117;
(statearr_12135_12149[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12134;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12150 = state_12117;
state_12117 = G__12150;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$state_machine__9906__auto__ = function(state_12117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9906__auto____1.call(this,state_12117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9906__auto____0;
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9906__auto____1;
return cljs$core$async$state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto___12138,out))
})();
var state__10055__auto__ = (function (){var statearr_12136 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_12136[(6)] = c__10053__auto___12138);

return statearr_12136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto___12138,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12152 = (function (f,ch,meta12153){
this.f = f;
this.ch = ch;
this.meta12153 = meta12153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12154,meta12153__$1){
var self__ = this;
var _12154__$1 = this;
return (new cljs.core.async.t_cljs$core$async12152(self__.f,self__.ch,meta12153__$1));
});

cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12154){
var self__ = this;
var _12154__$1 = this;
return self__.meta12153;
});

cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12155 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12155 = (function (f,ch,meta12153,_,fn1,meta12156){
this.f = f;
this.ch = ch;
this.meta12153 = meta12153;
this._ = _;
this.fn1 = fn1;
this.meta12156 = meta12156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12157,meta12156__$1){
var self__ = this;
var _12157__$1 = this;
return (new cljs.core.async.t_cljs$core$async12155(self__.f,self__.ch,self__.meta12153,self__._,self__.fn1,meta12156__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12157){
var self__ = this;
var _12157__$1 = this;
return self__.meta12156;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12155.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12155.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12151_SHARP_){
var G__12158 = (((p1__12151_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12151_SHARP_) : self__.f.call(null,p1__12151_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__12158) : f1.call(null,G__12158));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12155.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12153","meta12153",-1799651090,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12152","cljs.core.async/t_cljs$core$async12152",1035426518,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12156","meta12156",22135307,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12155.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12155.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12155";

cljs.core.async.t_cljs$core$async12155.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t_cljs$core$async12155");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12155.
 */
cljs.core.async.__GT_t_cljs$core$async12155 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12155(f__$1,ch__$1,meta12153__$1,___$2,fn1__$1,meta12156){
return (new cljs.core.async.t_cljs$core$async12155(f__$1,ch__$1,meta12153__$1,___$2,fn1__$1,meta12156));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12155(self__.f,self__.ch,self__.meta12153,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4442__auto__ = ret;
if(cljs.core.truth_(and__4442__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__4442__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__12159 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__12159) : self__.f.call(null,G__12159));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12153","meta12153",-1799651090,null)], null);
});

cljs.core.async.t_cljs$core$async12152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12152";

cljs.core.async.t_cljs$core$async12152.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t_cljs$core$async12152");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12152.
 */
cljs.core.async.__GT_t_cljs$core$async12152 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12152(f__$1,ch__$1,meta12153){
return (new cljs.core.async.t_cljs$core$async12152(f__$1,ch__$1,meta12153));
});

}

return (new cljs.core.async.t_cljs$core$async12152(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12160 = (function (f,ch,meta12161){
this.f = f;
this.ch = ch;
this.meta12161 = meta12161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12162,meta12161__$1){
var self__ = this;
var _12162__$1 = this;
return (new cljs.core.async.t_cljs$core$async12160(self__.f,self__.ch,meta12161__$1));
});

cljs.core.async.t_cljs$core$async12160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12162){
var self__ = this;
var _12162__$1 = this;
return self__.meta12161;
});

cljs.core.async.t_cljs$core$async12160.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12160.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async12160.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12160.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12160.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12160.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async12160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12161","meta12161",-1809775197,null)], null);
});

cljs.core.async.t_cljs$core$async12160.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12160";

cljs.core.async.t_cljs$core$async12160.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t_cljs$core$async12160");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12160.
 */
cljs.core.async.__GT_t_cljs$core$async12160 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12160(f__$1,ch__$1,meta12161){
return (new cljs.core.async.t_cljs$core$async12160(f__$1,ch__$1,meta12161));
});

}

return (new cljs.core.async.t_cljs$core$async12160(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12163 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12163 = (function (p,ch,meta12164){
this.p = p;
this.ch = ch;
this.meta12164 = meta12164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12165,meta12164__$1){
var self__ = this;
var _12165__$1 = this;
return (new cljs.core.async.t_cljs$core$async12163(self__.p,self__.ch,meta12164__$1));
});

cljs.core.async.t_cljs$core$async12163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12165){
var self__ = this;
var _12165__$1 = this;
return self__.meta12164;
});

cljs.core.async.t_cljs$core$async12163.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12163.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async12163.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async12163.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12163.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12163.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12163.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12164","meta12164",1069289599,null)], null);
});

cljs.core.async.t_cljs$core$async12163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12163";

cljs.core.async.t_cljs$core$async12163.cljs$lang$ctorPrWriter = (function (this__4742__auto__,writer__4743__auto__,opt__4744__auto__){
return cljs.core._write(writer__4743__auto__,"cljs.core.async/t_cljs$core$async12163");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12163.
 */
cljs.core.async.__GT_t_cljs$core$async12163 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12163(p__$1,ch__$1,meta12164){
return (new cljs.core.async.t_cljs$core$async12163(p__$1,ch__$1,meta12164));
});

}

return (new cljs.core.async.t_cljs$core$async12163(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__12167 = arguments.length;
switch (G__12167) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10053__auto___12207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto___12207,out){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto___12207,out){
return (function (state_12188){
var state_val_12189 = (state_12188[(1)]);
if((state_val_12189 === (7))){
var inst_12184 = (state_12188[(2)]);
var state_12188__$1 = state_12188;
var statearr_12190_12208 = state_12188__$1;
(statearr_12190_12208[(2)] = inst_12184);

(statearr_12190_12208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12189 === (1))){
var state_12188__$1 = state_12188;
var statearr_12191_12209 = state_12188__$1;
(statearr_12191_12209[(2)] = null);

(statearr_12191_12209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12189 === (4))){
var inst_12170 = (state_12188[(7)]);
var inst_12170__$1 = (state_12188[(2)]);
var inst_12171 = (inst_12170__$1 == null);
var state_12188__$1 = (function (){var statearr_12192 = state_12188;
(statearr_12192[(7)] = inst_12170__$1);

return statearr_12192;
})();
if(cljs.core.truth_(inst_12171)){
var statearr_12193_12210 = state_12188__$1;
(statearr_12193_12210[(1)] = (5));

} else {
var statearr_12194_12211 = state_12188__$1;
(statearr_12194_12211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12189 === (6))){
var inst_12170 = (state_12188[(7)]);
var inst_12175 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12170) : p.call(null,inst_12170));
var state_12188__$1 = state_12188;
if(cljs.core.truth_(inst_12175)){
var statearr_12195_12212 = state_12188__$1;
(statearr_12195_12212[(1)] = (8));

} else {
var statearr_12196_12213 = state_12188__$1;
(statearr_12196_12213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12189 === (3))){
var inst_12186 = (state_12188[(2)]);
var state_12188__$1 = state_12188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12188__$1,inst_12186);
} else {
if((state_val_12189 === (2))){
var state_12188__$1 = state_12188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12188__$1,(4),ch);
} else {
if((state_val_12189 === (11))){
var inst_12178 = (state_12188[(2)]);
var state_12188__$1 = state_12188;
var statearr_12197_12214 = state_12188__$1;
(statearr_12197_12214[(2)] = inst_12178);

(statearr_12197_12214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12189 === (9))){
var state_12188__$1 = state_12188;
var statearr_12198_12215 = state_12188__$1;
(statearr_12198_12215[(2)] = null);

(statearr_12198_12215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12189 === (5))){
var inst_12173 = cljs.core.async.close_BANG_(out);
var state_12188__$1 = state_12188;
var statearr_12199_12216 = state_12188__$1;
(statearr_12199_12216[(2)] = inst_12173);

(statearr_12199_12216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12189 === (10))){
var inst_12181 = (state_12188[(2)]);
var state_12188__$1 = (function (){var statearr_12200 = state_12188;
(statearr_12200[(8)] = inst_12181);

return statearr_12200;
})();
var statearr_12201_12217 = state_12188__$1;
(statearr_12201_12217[(2)] = null);

(statearr_12201_12217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12189 === (8))){
var inst_12170 = (state_12188[(7)]);
var state_12188__$1 = state_12188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12188__$1,(11),out,inst_12170);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto___12207,out))
;
return ((function (switch__9905__auto__,c__10053__auto___12207,out){
return (function() {
var cljs$core$async$state_machine__9906__auto__ = null;
var cljs$core$async$state_machine__9906__auto____0 = (function (){
var statearr_12202 = [null,null,null,null,null,null,null,null,null];
(statearr_12202[(0)] = cljs$core$async$state_machine__9906__auto__);

(statearr_12202[(1)] = (1));

return statearr_12202;
});
var cljs$core$async$state_machine__9906__auto____1 = (function (state_12188){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_12188);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e12203){if((e12203 instanceof Object)){
var ex__9909__auto__ = e12203;
var statearr_12204_12218 = state_12188;
(statearr_12204_12218[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12203;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12219 = state_12188;
state_12188 = G__12219;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$state_machine__9906__auto__ = function(state_12188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9906__auto____1.call(this,state_12188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9906__auto____0;
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9906__auto____1;
return cljs$core$async$state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto___12207,out))
})();
var state__10055__auto__ = (function (){var statearr_12205 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_12205[(6)] = c__10053__auto___12207);

return statearr_12205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto___12207,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12221 = arguments.length;
switch (G__12221) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10053__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto__){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto__){
return (function (state_12284){
var state_val_12285 = (state_12284[(1)]);
if((state_val_12285 === (7))){
var inst_12280 = (state_12284[(2)]);
var state_12284__$1 = state_12284;
var statearr_12286_12324 = state_12284__$1;
(statearr_12286_12324[(2)] = inst_12280);

(statearr_12286_12324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (20))){
var inst_12250 = (state_12284[(7)]);
var inst_12261 = (state_12284[(2)]);
var inst_12262 = cljs.core.next(inst_12250);
var inst_12236 = inst_12262;
var inst_12237 = null;
var inst_12238 = (0);
var inst_12239 = (0);
var state_12284__$1 = (function (){var statearr_12287 = state_12284;
(statearr_12287[(8)] = inst_12261);

(statearr_12287[(9)] = inst_12236);

(statearr_12287[(10)] = inst_12239);

(statearr_12287[(11)] = inst_12238);

(statearr_12287[(12)] = inst_12237);

return statearr_12287;
})();
var statearr_12288_12325 = state_12284__$1;
(statearr_12288_12325[(2)] = null);

(statearr_12288_12325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (1))){
var state_12284__$1 = state_12284;
var statearr_12289_12326 = state_12284__$1;
(statearr_12289_12326[(2)] = null);

(statearr_12289_12326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (4))){
var inst_12225 = (state_12284[(13)]);
var inst_12225__$1 = (state_12284[(2)]);
var inst_12226 = (inst_12225__$1 == null);
var state_12284__$1 = (function (){var statearr_12290 = state_12284;
(statearr_12290[(13)] = inst_12225__$1);

return statearr_12290;
})();
if(cljs.core.truth_(inst_12226)){
var statearr_12291_12327 = state_12284__$1;
(statearr_12291_12327[(1)] = (5));

} else {
var statearr_12292_12328 = state_12284__$1;
(statearr_12292_12328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (15))){
var state_12284__$1 = state_12284;
var statearr_12296_12329 = state_12284__$1;
(statearr_12296_12329[(2)] = null);

(statearr_12296_12329[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (21))){
var state_12284__$1 = state_12284;
var statearr_12297_12330 = state_12284__$1;
(statearr_12297_12330[(2)] = null);

(statearr_12297_12330[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (13))){
var inst_12236 = (state_12284[(9)]);
var inst_12239 = (state_12284[(10)]);
var inst_12238 = (state_12284[(11)]);
var inst_12237 = (state_12284[(12)]);
var inst_12246 = (state_12284[(2)]);
var inst_12247 = (inst_12239 + (1));
var tmp12293 = inst_12236;
var tmp12294 = inst_12238;
var tmp12295 = inst_12237;
var inst_12236__$1 = tmp12293;
var inst_12237__$1 = tmp12295;
var inst_12238__$1 = tmp12294;
var inst_12239__$1 = inst_12247;
var state_12284__$1 = (function (){var statearr_12298 = state_12284;
(statearr_12298[(14)] = inst_12246);

(statearr_12298[(9)] = inst_12236__$1);

(statearr_12298[(10)] = inst_12239__$1);

(statearr_12298[(11)] = inst_12238__$1);

(statearr_12298[(12)] = inst_12237__$1);

return statearr_12298;
})();
var statearr_12299_12331 = state_12284__$1;
(statearr_12299_12331[(2)] = null);

(statearr_12299_12331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (22))){
var state_12284__$1 = state_12284;
var statearr_12300_12332 = state_12284__$1;
(statearr_12300_12332[(2)] = null);

(statearr_12300_12332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (6))){
var inst_12225 = (state_12284[(13)]);
var inst_12234 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12225) : f.call(null,inst_12225));
var inst_12235 = cljs.core.seq(inst_12234);
var inst_12236 = inst_12235;
var inst_12237 = null;
var inst_12238 = (0);
var inst_12239 = (0);
var state_12284__$1 = (function (){var statearr_12301 = state_12284;
(statearr_12301[(9)] = inst_12236);

(statearr_12301[(10)] = inst_12239);

(statearr_12301[(11)] = inst_12238);

(statearr_12301[(12)] = inst_12237);

return statearr_12301;
})();
var statearr_12302_12333 = state_12284__$1;
(statearr_12302_12333[(2)] = null);

(statearr_12302_12333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (17))){
var inst_12250 = (state_12284[(7)]);
var inst_12254 = cljs.core.chunk_first(inst_12250);
var inst_12255 = cljs.core.chunk_rest(inst_12250);
var inst_12256 = cljs.core.count(inst_12254);
var inst_12236 = inst_12255;
var inst_12237 = inst_12254;
var inst_12238 = inst_12256;
var inst_12239 = (0);
var state_12284__$1 = (function (){var statearr_12303 = state_12284;
(statearr_12303[(9)] = inst_12236);

(statearr_12303[(10)] = inst_12239);

(statearr_12303[(11)] = inst_12238);

(statearr_12303[(12)] = inst_12237);

return statearr_12303;
})();
var statearr_12304_12334 = state_12284__$1;
(statearr_12304_12334[(2)] = null);

(statearr_12304_12334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (3))){
var inst_12282 = (state_12284[(2)]);
var state_12284__$1 = state_12284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12284__$1,inst_12282);
} else {
if((state_val_12285 === (12))){
var inst_12270 = (state_12284[(2)]);
var state_12284__$1 = state_12284;
var statearr_12305_12335 = state_12284__$1;
(statearr_12305_12335[(2)] = inst_12270);

(statearr_12305_12335[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (2))){
var state_12284__$1 = state_12284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12284__$1,(4),in$);
} else {
if((state_val_12285 === (23))){
var inst_12278 = (state_12284[(2)]);
var state_12284__$1 = state_12284;
var statearr_12306_12336 = state_12284__$1;
(statearr_12306_12336[(2)] = inst_12278);

(statearr_12306_12336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (19))){
var inst_12265 = (state_12284[(2)]);
var state_12284__$1 = state_12284;
var statearr_12307_12337 = state_12284__$1;
(statearr_12307_12337[(2)] = inst_12265);

(statearr_12307_12337[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (11))){
var inst_12236 = (state_12284[(9)]);
var inst_12250 = (state_12284[(7)]);
var inst_12250__$1 = cljs.core.seq(inst_12236);
var state_12284__$1 = (function (){var statearr_12308 = state_12284;
(statearr_12308[(7)] = inst_12250__$1);

return statearr_12308;
})();
if(inst_12250__$1){
var statearr_12309_12338 = state_12284__$1;
(statearr_12309_12338[(1)] = (14));

} else {
var statearr_12310_12339 = state_12284__$1;
(statearr_12310_12339[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (9))){
var inst_12272 = (state_12284[(2)]);
var inst_12273 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_12284__$1 = (function (){var statearr_12311 = state_12284;
(statearr_12311[(15)] = inst_12272);

return statearr_12311;
})();
if(cljs.core.truth_(inst_12273)){
var statearr_12312_12340 = state_12284__$1;
(statearr_12312_12340[(1)] = (21));

} else {
var statearr_12313_12341 = state_12284__$1;
(statearr_12313_12341[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (5))){
var inst_12228 = cljs.core.async.close_BANG_(out);
var state_12284__$1 = state_12284;
var statearr_12314_12342 = state_12284__$1;
(statearr_12314_12342[(2)] = inst_12228);

(statearr_12314_12342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (14))){
var inst_12250 = (state_12284[(7)]);
var inst_12252 = cljs.core.chunked_seq_QMARK_(inst_12250);
var state_12284__$1 = state_12284;
if(inst_12252){
var statearr_12315_12343 = state_12284__$1;
(statearr_12315_12343[(1)] = (17));

} else {
var statearr_12316_12344 = state_12284__$1;
(statearr_12316_12344[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (16))){
var inst_12268 = (state_12284[(2)]);
var state_12284__$1 = state_12284;
var statearr_12317_12345 = state_12284__$1;
(statearr_12317_12345[(2)] = inst_12268);

(statearr_12317_12345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12285 === (10))){
var inst_12239 = (state_12284[(10)]);
var inst_12237 = (state_12284[(12)]);
var inst_12244 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12237,inst_12239);
var state_12284__$1 = state_12284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12284__$1,(13),out,inst_12244);
} else {
if((state_val_12285 === (18))){
var inst_12250 = (state_12284[(7)]);
var inst_12259 = cljs.core.first(inst_12250);
var state_12284__$1 = state_12284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12284__$1,(20),out,inst_12259);
} else {
if((state_val_12285 === (8))){
var inst_12239 = (state_12284[(10)]);
var inst_12238 = (state_12284[(11)]);
var inst_12241 = (inst_12239 < inst_12238);
var inst_12242 = inst_12241;
var state_12284__$1 = state_12284;
if(cljs.core.truth_(inst_12242)){
var statearr_12318_12346 = state_12284__$1;
(statearr_12318_12346[(1)] = (10));

} else {
var statearr_12319_12347 = state_12284__$1;
(statearr_12319_12347[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto__))
;
return ((function (switch__9905__auto__,c__10053__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9906__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9906__auto____0 = (function (){
var statearr_12320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12320[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9906__auto__);

(statearr_12320[(1)] = (1));

return statearr_12320;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9906__auto____1 = (function (state_12284){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_12284);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e12321){if((e12321 instanceof Object)){
var ex__9909__auto__ = e12321;
var statearr_12322_12348 = state_12284;
(statearr_12322_12348[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12321;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12349 = state_12284;
state_12284 = G__12349;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9906__auto__ = function(state_12284){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9906__auto____1.call(this,state_12284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9906__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9906__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto__))
})();
var state__10055__auto__ = (function (){var statearr_12323 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_12323[(6)] = c__10053__auto__);

return statearr_12323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto__))
);

return c__10053__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12351 = arguments.length;
switch (G__12351) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__12354 = arguments.length;
switch (G__12354) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__12357 = arguments.length;
switch (G__12357) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10053__auto___12404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto___12404,out){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto___12404,out){
return (function (state_12381){
var state_val_12382 = (state_12381[(1)]);
if((state_val_12382 === (7))){
var inst_12376 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12383_12405 = state_12381__$1;
(statearr_12383_12405[(2)] = inst_12376);

(statearr_12383_12405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (1))){
var inst_12358 = null;
var state_12381__$1 = (function (){var statearr_12384 = state_12381;
(statearr_12384[(7)] = inst_12358);

return statearr_12384;
})();
var statearr_12385_12406 = state_12381__$1;
(statearr_12385_12406[(2)] = null);

(statearr_12385_12406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (4))){
var inst_12361 = (state_12381[(8)]);
var inst_12361__$1 = (state_12381[(2)]);
var inst_12362 = (inst_12361__$1 == null);
var inst_12363 = cljs.core.not(inst_12362);
var state_12381__$1 = (function (){var statearr_12386 = state_12381;
(statearr_12386[(8)] = inst_12361__$1);

return statearr_12386;
})();
if(inst_12363){
var statearr_12387_12407 = state_12381__$1;
(statearr_12387_12407[(1)] = (5));

} else {
var statearr_12388_12408 = state_12381__$1;
(statearr_12388_12408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (6))){
var state_12381__$1 = state_12381;
var statearr_12389_12409 = state_12381__$1;
(statearr_12389_12409[(2)] = null);

(statearr_12389_12409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (3))){
var inst_12378 = (state_12381[(2)]);
var inst_12379 = cljs.core.async.close_BANG_(out);
var state_12381__$1 = (function (){var statearr_12390 = state_12381;
(statearr_12390[(9)] = inst_12378);

return statearr_12390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12381__$1,inst_12379);
} else {
if((state_val_12382 === (2))){
var state_12381__$1 = state_12381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12381__$1,(4),ch);
} else {
if((state_val_12382 === (11))){
var inst_12361 = (state_12381[(8)]);
var inst_12370 = (state_12381[(2)]);
var inst_12358 = inst_12361;
var state_12381__$1 = (function (){var statearr_12391 = state_12381;
(statearr_12391[(7)] = inst_12358);

(statearr_12391[(10)] = inst_12370);

return statearr_12391;
})();
var statearr_12392_12410 = state_12381__$1;
(statearr_12392_12410[(2)] = null);

(statearr_12392_12410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (9))){
var inst_12361 = (state_12381[(8)]);
var state_12381__$1 = state_12381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12381__$1,(11),out,inst_12361);
} else {
if((state_val_12382 === (5))){
var inst_12361 = (state_12381[(8)]);
var inst_12358 = (state_12381[(7)]);
var inst_12365 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12361,inst_12358);
var state_12381__$1 = state_12381;
if(inst_12365){
var statearr_12394_12411 = state_12381__$1;
(statearr_12394_12411[(1)] = (8));

} else {
var statearr_12395_12412 = state_12381__$1;
(statearr_12395_12412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (10))){
var inst_12373 = (state_12381[(2)]);
var state_12381__$1 = state_12381;
var statearr_12396_12413 = state_12381__$1;
(statearr_12396_12413[(2)] = inst_12373);

(statearr_12396_12413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12382 === (8))){
var inst_12358 = (state_12381[(7)]);
var tmp12393 = inst_12358;
var inst_12358__$1 = tmp12393;
var state_12381__$1 = (function (){var statearr_12397 = state_12381;
(statearr_12397[(7)] = inst_12358__$1);

return statearr_12397;
})();
var statearr_12398_12414 = state_12381__$1;
(statearr_12398_12414[(2)] = null);

(statearr_12398_12414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto___12404,out))
;
return ((function (switch__9905__auto__,c__10053__auto___12404,out){
return (function() {
var cljs$core$async$state_machine__9906__auto__ = null;
var cljs$core$async$state_machine__9906__auto____0 = (function (){
var statearr_12399 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12399[(0)] = cljs$core$async$state_machine__9906__auto__);

(statearr_12399[(1)] = (1));

return statearr_12399;
});
var cljs$core$async$state_machine__9906__auto____1 = (function (state_12381){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_12381);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e12400){if((e12400 instanceof Object)){
var ex__9909__auto__ = e12400;
var statearr_12401_12415 = state_12381;
(statearr_12401_12415[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12400;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12416 = state_12381;
state_12381 = G__12416;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$state_machine__9906__auto__ = function(state_12381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9906__auto____1.call(this,state_12381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9906__auto____0;
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9906__auto____1;
return cljs$core$async$state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto___12404,out))
})();
var state__10055__auto__ = (function (){var statearr_12402 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_12402[(6)] = c__10053__auto___12404);

return statearr_12402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto___12404,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12418 = arguments.length;
switch (G__12418) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10053__auto___12484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto___12484,out){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto___12484,out){
return (function (state_12456){
var state_val_12457 = (state_12456[(1)]);
if((state_val_12457 === (7))){
var inst_12452 = (state_12456[(2)]);
var state_12456__$1 = state_12456;
var statearr_12458_12485 = state_12456__$1;
(statearr_12458_12485[(2)] = inst_12452);

(statearr_12458_12485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (1))){
var inst_12419 = (new Array(n));
var inst_12420 = inst_12419;
var inst_12421 = (0);
var state_12456__$1 = (function (){var statearr_12459 = state_12456;
(statearr_12459[(7)] = inst_12421);

(statearr_12459[(8)] = inst_12420);

return statearr_12459;
})();
var statearr_12460_12486 = state_12456__$1;
(statearr_12460_12486[(2)] = null);

(statearr_12460_12486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (4))){
var inst_12424 = (state_12456[(9)]);
var inst_12424__$1 = (state_12456[(2)]);
var inst_12425 = (inst_12424__$1 == null);
var inst_12426 = cljs.core.not(inst_12425);
var state_12456__$1 = (function (){var statearr_12461 = state_12456;
(statearr_12461[(9)] = inst_12424__$1);

return statearr_12461;
})();
if(inst_12426){
var statearr_12462_12487 = state_12456__$1;
(statearr_12462_12487[(1)] = (5));

} else {
var statearr_12463_12488 = state_12456__$1;
(statearr_12463_12488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (15))){
var inst_12446 = (state_12456[(2)]);
var state_12456__$1 = state_12456;
var statearr_12464_12489 = state_12456__$1;
(statearr_12464_12489[(2)] = inst_12446);

(statearr_12464_12489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (13))){
var state_12456__$1 = state_12456;
var statearr_12465_12490 = state_12456__$1;
(statearr_12465_12490[(2)] = null);

(statearr_12465_12490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (6))){
var inst_12421 = (state_12456[(7)]);
var inst_12442 = (inst_12421 > (0));
var state_12456__$1 = state_12456;
if(cljs.core.truth_(inst_12442)){
var statearr_12466_12491 = state_12456__$1;
(statearr_12466_12491[(1)] = (12));

} else {
var statearr_12467_12492 = state_12456__$1;
(statearr_12467_12492[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (3))){
var inst_12454 = (state_12456[(2)]);
var state_12456__$1 = state_12456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12456__$1,inst_12454);
} else {
if((state_val_12457 === (12))){
var inst_12420 = (state_12456[(8)]);
var inst_12444 = cljs.core.vec(inst_12420);
var state_12456__$1 = state_12456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12456__$1,(15),out,inst_12444);
} else {
if((state_val_12457 === (2))){
var state_12456__$1 = state_12456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12456__$1,(4),ch);
} else {
if((state_val_12457 === (11))){
var inst_12436 = (state_12456[(2)]);
var inst_12437 = (new Array(n));
var inst_12420 = inst_12437;
var inst_12421 = (0);
var state_12456__$1 = (function (){var statearr_12468 = state_12456;
(statearr_12468[(7)] = inst_12421);

(statearr_12468[(10)] = inst_12436);

(statearr_12468[(8)] = inst_12420);

return statearr_12468;
})();
var statearr_12469_12493 = state_12456__$1;
(statearr_12469_12493[(2)] = null);

(statearr_12469_12493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (9))){
var inst_12420 = (state_12456[(8)]);
var inst_12434 = cljs.core.vec(inst_12420);
var state_12456__$1 = state_12456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12456__$1,(11),out,inst_12434);
} else {
if((state_val_12457 === (5))){
var inst_12421 = (state_12456[(7)]);
var inst_12424 = (state_12456[(9)]);
var inst_12420 = (state_12456[(8)]);
var inst_12429 = (state_12456[(11)]);
var inst_12428 = (inst_12420[inst_12421] = inst_12424);
var inst_12429__$1 = (inst_12421 + (1));
var inst_12430 = (inst_12429__$1 < n);
var state_12456__$1 = (function (){var statearr_12470 = state_12456;
(statearr_12470[(12)] = inst_12428);

(statearr_12470[(11)] = inst_12429__$1);

return statearr_12470;
})();
if(cljs.core.truth_(inst_12430)){
var statearr_12471_12494 = state_12456__$1;
(statearr_12471_12494[(1)] = (8));

} else {
var statearr_12472_12495 = state_12456__$1;
(statearr_12472_12495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (14))){
var inst_12449 = (state_12456[(2)]);
var inst_12450 = cljs.core.async.close_BANG_(out);
var state_12456__$1 = (function (){var statearr_12474 = state_12456;
(statearr_12474[(13)] = inst_12449);

return statearr_12474;
})();
var statearr_12475_12496 = state_12456__$1;
(statearr_12475_12496[(2)] = inst_12450);

(statearr_12475_12496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (10))){
var inst_12440 = (state_12456[(2)]);
var state_12456__$1 = state_12456;
var statearr_12476_12497 = state_12456__$1;
(statearr_12476_12497[(2)] = inst_12440);

(statearr_12476_12497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12457 === (8))){
var inst_12420 = (state_12456[(8)]);
var inst_12429 = (state_12456[(11)]);
var tmp12473 = inst_12420;
var inst_12420__$1 = tmp12473;
var inst_12421 = inst_12429;
var state_12456__$1 = (function (){var statearr_12477 = state_12456;
(statearr_12477[(7)] = inst_12421);

(statearr_12477[(8)] = inst_12420__$1);

return statearr_12477;
})();
var statearr_12478_12498 = state_12456__$1;
(statearr_12478_12498[(2)] = null);

(statearr_12478_12498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto___12484,out))
;
return ((function (switch__9905__auto__,c__10053__auto___12484,out){
return (function() {
var cljs$core$async$state_machine__9906__auto__ = null;
var cljs$core$async$state_machine__9906__auto____0 = (function (){
var statearr_12479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12479[(0)] = cljs$core$async$state_machine__9906__auto__);

(statearr_12479[(1)] = (1));

return statearr_12479;
});
var cljs$core$async$state_machine__9906__auto____1 = (function (state_12456){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_12456);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e12480){if((e12480 instanceof Object)){
var ex__9909__auto__ = e12480;
var statearr_12481_12499 = state_12456;
(statearr_12481_12499[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12480;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12500 = state_12456;
state_12456 = G__12500;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$state_machine__9906__auto__ = function(state_12456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9906__auto____1.call(this,state_12456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9906__auto____0;
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9906__auto____1;
return cljs$core$async$state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto___12484,out))
})();
var state__10055__auto__ = (function (){var statearr_12482 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_12482[(6)] = c__10053__auto___12484);

return statearr_12482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto___12484,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12502 = arguments.length;
switch (G__12502) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__10053__auto___12572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10053__auto___12572,out){
return (function (){
var f__10054__auto__ = (function (){var switch__9905__auto__ = ((function (c__10053__auto___12572,out){
return (function (state_12544){
var state_val_12545 = (state_12544[(1)]);
if((state_val_12545 === (7))){
var inst_12540 = (state_12544[(2)]);
var state_12544__$1 = state_12544;
var statearr_12546_12573 = state_12544__$1;
(statearr_12546_12573[(2)] = inst_12540);

(statearr_12546_12573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (1))){
var inst_12503 = [];
var inst_12504 = inst_12503;
var inst_12505 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12544__$1 = (function (){var statearr_12547 = state_12544;
(statearr_12547[(7)] = inst_12505);

(statearr_12547[(8)] = inst_12504);

return statearr_12547;
})();
var statearr_12548_12574 = state_12544__$1;
(statearr_12548_12574[(2)] = null);

(statearr_12548_12574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (4))){
var inst_12508 = (state_12544[(9)]);
var inst_12508__$1 = (state_12544[(2)]);
var inst_12509 = (inst_12508__$1 == null);
var inst_12510 = cljs.core.not(inst_12509);
var state_12544__$1 = (function (){var statearr_12549 = state_12544;
(statearr_12549[(9)] = inst_12508__$1);

return statearr_12549;
})();
if(inst_12510){
var statearr_12550_12575 = state_12544__$1;
(statearr_12550_12575[(1)] = (5));

} else {
var statearr_12551_12576 = state_12544__$1;
(statearr_12551_12576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (15))){
var inst_12534 = (state_12544[(2)]);
var state_12544__$1 = state_12544;
var statearr_12552_12577 = state_12544__$1;
(statearr_12552_12577[(2)] = inst_12534);

(statearr_12552_12577[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (13))){
var state_12544__$1 = state_12544;
var statearr_12553_12578 = state_12544__$1;
(statearr_12553_12578[(2)] = null);

(statearr_12553_12578[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (6))){
var inst_12504 = (state_12544[(8)]);
var inst_12529 = inst_12504.length;
var inst_12530 = (inst_12529 > (0));
var state_12544__$1 = state_12544;
if(cljs.core.truth_(inst_12530)){
var statearr_12554_12579 = state_12544__$1;
(statearr_12554_12579[(1)] = (12));

} else {
var statearr_12555_12580 = state_12544__$1;
(statearr_12555_12580[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (3))){
var inst_12542 = (state_12544[(2)]);
var state_12544__$1 = state_12544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12544__$1,inst_12542);
} else {
if((state_val_12545 === (12))){
var inst_12504 = (state_12544[(8)]);
var inst_12532 = cljs.core.vec(inst_12504);
var state_12544__$1 = state_12544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12544__$1,(15),out,inst_12532);
} else {
if((state_val_12545 === (2))){
var state_12544__$1 = state_12544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12544__$1,(4),ch);
} else {
if((state_val_12545 === (11))){
var inst_12512 = (state_12544[(10)]);
var inst_12508 = (state_12544[(9)]);
var inst_12522 = (state_12544[(2)]);
var inst_12523 = [];
var inst_12524 = inst_12523.push(inst_12508);
var inst_12504 = inst_12523;
var inst_12505 = inst_12512;
var state_12544__$1 = (function (){var statearr_12556 = state_12544;
(statearr_12556[(11)] = inst_12524);

(statearr_12556[(7)] = inst_12505);

(statearr_12556[(12)] = inst_12522);

(statearr_12556[(8)] = inst_12504);

return statearr_12556;
})();
var statearr_12557_12581 = state_12544__$1;
(statearr_12557_12581[(2)] = null);

(statearr_12557_12581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (9))){
var inst_12504 = (state_12544[(8)]);
var inst_12520 = cljs.core.vec(inst_12504);
var state_12544__$1 = state_12544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12544__$1,(11),out,inst_12520);
} else {
if((state_val_12545 === (5))){
var inst_12505 = (state_12544[(7)]);
var inst_12512 = (state_12544[(10)]);
var inst_12508 = (state_12544[(9)]);
var inst_12512__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12508) : f.call(null,inst_12508));
var inst_12513 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12512__$1,inst_12505);
var inst_12514 = cljs.core.keyword_identical_QMARK_(inst_12505,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12515 = ((inst_12513) || (inst_12514));
var state_12544__$1 = (function (){var statearr_12558 = state_12544;
(statearr_12558[(10)] = inst_12512__$1);

return statearr_12558;
})();
if(cljs.core.truth_(inst_12515)){
var statearr_12559_12582 = state_12544__$1;
(statearr_12559_12582[(1)] = (8));

} else {
var statearr_12560_12583 = state_12544__$1;
(statearr_12560_12583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (14))){
var inst_12537 = (state_12544[(2)]);
var inst_12538 = cljs.core.async.close_BANG_(out);
var state_12544__$1 = (function (){var statearr_12562 = state_12544;
(statearr_12562[(13)] = inst_12537);

return statearr_12562;
})();
var statearr_12563_12584 = state_12544__$1;
(statearr_12563_12584[(2)] = inst_12538);

(statearr_12563_12584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (10))){
var inst_12527 = (state_12544[(2)]);
var state_12544__$1 = state_12544;
var statearr_12564_12585 = state_12544__$1;
(statearr_12564_12585[(2)] = inst_12527);

(statearr_12564_12585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12545 === (8))){
var inst_12512 = (state_12544[(10)]);
var inst_12504 = (state_12544[(8)]);
var inst_12508 = (state_12544[(9)]);
var inst_12517 = inst_12504.push(inst_12508);
var tmp12561 = inst_12504;
var inst_12504__$1 = tmp12561;
var inst_12505 = inst_12512;
var state_12544__$1 = (function (){var statearr_12565 = state_12544;
(statearr_12565[(7)] = inst_12505);

(statearr_12565[(8)] = inst_12504__$1);

(statearr_12565[(14)] = inst_12517);

return statearr_12565;
})();
var statearr_12566_12586 = state_12544__$1;
(statearr_12566_12586[(2)] = null);

(statearr_12566_12586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10053__auto___12572,out))
;
return ((function (switch__9905__auto__,c__10053__auto___12572,out){
return (function() {
var cljs$core$async$state_machine__9906__auto__ = null;
var cljs$core$async$state_machine__9906__auto____0 = (function (){
var statearr_12567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12567[(0)] = cljs$core$async$state_machine__9906__auto__);

(statearr_12567[(1)] = (1));

return statearr_12567;
});
var cljs$core$async$state_machine__9906__auto____1 = (function (state_12544){
while(true){
var ret_value__9907__auto__ = (function (){try{while(true){
var result__9908__auto__ = switch__9905__auto__(state_12544);
if(cljs.core.keyword_identical_QMARK_(result__9908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9908__auto__;
}
break;
}
}catch (e12568){if((e12568 instanceof Object)){
var ex__9909__auto__ = e12568;
var statearr_12569_12587 = state_12544;
(statearr_12569_12587[(5)] = ex__9909__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12568;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12588 = state_12544;
state_12544 = G__12588;
continue;
} else {
return ret_value__9907__auto__;
}
break;
}
});
cljs$core$async$state_machine__9906__auto__ = function(state_12544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9906__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9906__auto____1.call(this,state_12544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9906__auto____0;
cljs$core$async$state_machine__9906__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9906__auto____1;
return cljs$core$async$state_machine__9906__auto__;
})()
;})(switch__9905__auto__,c__10053__auto___12572,out))
})();
var state__10055__auto__ = (function (){var statearr_12570 = (f__10054__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10054__auto__.cljs$core$IFn$_invoke$arity$0() : f__10054__auto__.call(null));
(statearr_12570[(6)] = c__10053__auto___12572);

return statearr_12570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10055__auto__);
});})(c__10053__auto___12572,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
