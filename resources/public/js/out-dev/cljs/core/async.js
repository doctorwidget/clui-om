// Compiled by ClojureScript 0.0-2496
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t22693 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22693 = (function (f,fn_handler,meta22694){
this.f = f;
this.fn_handler = fn_handler;
this.meta22694 = meta22694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22693.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22693.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t22693.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t22693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22695){
var self__ = this;
var _22695__$1 = this;
return self__.meta22694;
});

cljs.core.async.t22693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22695,meta22694__$1){
var self__ = this;
var _22695__$1 = this;
return (new cljs.core.async.t22693(self__.f,self__.fn_handler,meta22694__$1));
});

cljs.core.async.t22693.cljs$lang$type = true;

cljs.core.async.t22693.cljs$lang$ctorStr = "cljs.core.async/t22693";

cljs.core.async.t22693.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t22693");
});

cljs.core.async.__GT_t22693 = (function __GT_t22693(f__$1,fn_handler__$1,meta22694){
return (new cljs.core.async.t22693(f__$1,fn_handler__$1,meta22694));
});

}

return (new cljs.core.async.t22693(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/resources/public/js/out-dev/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__22697 = buff;
if(G__22697){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__22697.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__22697.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22697);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22697);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22698 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22698);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22698,ret){
return (function (){
return fn1.call(null,val_22698);
});})(val_22698,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4515__auto___22699 = n;
var x_22700 = (0);
while(true){
if((x_22700 < n__4515__auto___22699)){
(a[x_22700] = (0));

var G__22701 = (x_22700 + (1));
x_22700 = G__22701;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22702 = (i + (1));
i = G__22702;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t22706 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22706 = (function (flag,alt_flag,meta22707){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22707 = meta22707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22706.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22706.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t22706.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t22706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22708){
var self__ = this;
var _22708__$1 = this;
return self__.meta22707;
});})(flag))
;

cljs.core.async.t22706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22708,meta22707__$1){
var self__ = this;
var _22708__$1 = this;
return (new cljs.core.async.t22706(self__.flag,self__.alt_flag,meta22707__$1));
});})(flag))
;

cljs.core.async.t22706.cljs$lang$type = true;

cljs.core.async.t22706.cljs$lang$ctorStr = "cljs.core.async/t22706";

cljs.core.async.t22706.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t22706");
});})(flag))
;

cljs.core.async.__GT_t22706 = ((function (flag){
return (function __GT_t22706(flag__$1,alt_flag__$1,meta22707){
return (new cljs.core.async.t22706(flag__$1,alt_flag__$1,meta22707));
});})(flag))
;

}

return (new cljs.core.async.t22706(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/resources/public/js/out-dev/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t22712 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22712 = (function (cb,flag,alt_handler,meta22713){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22713 = meta22713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22712.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t22712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t22712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22714){
var self__ = this;
var _22714__$1 = this;
return self__.meta22713;
});

cljs.core.async.t22712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22714,meta22713__$1){
var self__ = this;
var _22714__$1 = this;
return (new cljs.core.async.t22712(self__.cb,self__.flag,self__.alt_handler,meta22713__$1));
});

cljs.core.async.t22712.cljs$lang$type = true;

cljs.core.async.t22712.cljs$lang$ctorStr = "cljs.core.async/t22712";

cljs.core.async.t22712.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t22712");
});

cljs.core.async.__GT_t22712 = (function __GT_t22712(cb__$1,flag__$1,alt_handler__$1,meta22713){
return (new cljs.core.async.t22712(cb__$1,flag__$1,alt_handler__$1,meta22713));
});

}

return (new cljs.core.async.t22712(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/resources/public/js/out-dev/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22715_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22715_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22716_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22716_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3628__auto__ = wport;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22717 = (i + (1));
i = G__22717;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3628__auto__ = ret;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3616__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3616__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3616__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__22718){
var map__22720 = p__22718;
var map__22720__$1 = ((cljs.core.seq_QMARK_.call(null,map__22720))?cljs.core.apply.call(null,cljs.core.hash_map,map__22720):map__22720);
var opts = map__22720__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22718 = null;
if (arguments.length > 1) {
  p__22718 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__22718);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22721){
var ports = cljs.core.first(arglist__22721);
var p__22718 = cljs.core.rest(arglist__22721);
return alts_BANG___delegate(ports,p__22718);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6508__auto___22816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___22816){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___22816){
return (function (state_22792){
var state_val_22793 = (state_22792[(1)]);
if((state_val_22793 === (7))){
var inst_22788 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
var statearr_22794_22817 = state_22792__$1;
(statearr_22794_22817[(2)] = inst_22788);

(statearr_22794_22817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (1))){
var state_22792__$1 = state_22792;
var statearr_22795_22818 = state_22792__$1;
(statearr_22795_22818[(2)] = null);

(statearr_22795_22818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (4))){
var inst_22771 = (state_22792[(7)]);
var inst_22771__$1 = (state_22792[(2)]);
var inst_22772 = (inst_22771__$1 == null);
var state_22792__$1 = (function (){var statearr_22796 = state_22792;
(statearr_22796[(7)] = inst_22771__$1);

return statearr_22796;
})();
if(cljs.core.truth_(inst_22772)){
var statearr_22797_22819 = state_22792__$1;
(statearr_22797_22819[(1)] = (5));

} else {
var statearr_22798_22820 = state_22792__$1;
(statearr_22798_22820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (13))){
var state_22792__$1 = state_22792;
var statearr_22799_22821 = state_22792__$1;
(statearr_22799_22821[(2)] = null);

(statearr_22799_22821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (6))){
var inst_22771 = (state_22792[(7)]);
var state_22792__$1 = state_22792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22792__$1,(11),to,inst_22771);
} else {
if((state_val_22793 === (3))){
var inst_22790 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22792__$1,inst_22790);
} else {
if((state_val_22793 === (12))){
var state_22792__$1 = state_22792;
var statearr_22800_22822 = state_22792__$1;
(statearr_22800_22822[(2)] = null);

(statearr_22800_22822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (2))){
var state_22792__$1 = state_22792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22792__$1,(4),from);
} else {
if((state_val_22793 === (11))){
var inst_22781 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
if(cljs.core.truth_(inst_22781)){
var statearr_22801_22823 = state_22792__$1;
(statearr_22801_22823[(1)] = (12));

} else {
var statearr_22802_22824 = state_22792__$1;
(statearr_22802_22824[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (9))){
var state_22792__$1 = state_22792;
var statearr_22803_22825 = state_22792__$1;
(statearr_22803_22825[(2)] = null);

(statearr_22803_22825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (5))){
var state_22792__$1 = state_22792;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22804_22826 = state_22792__$1;
(statearr_22804_22826[(1)] = (8));

} else {
var statearr_22805_22827 = state_22792__$1;
(statearr_22805_22827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (14))){
var inst_22786 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
var statearr_22806_22828 = state_22792__$1;
(statearr_22806_22828[(2)] = inst_22786);

(statearr_22806_22828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (10))){
var inst_22778 = (state_22792[(2)]);
var state_22792__$1 = state_22792;
var statearr_22807_22829 = state_22792__$1;
(statearr_22807_22829[(2)] = inst_22778);

(statearr_22807_22829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22793 === (8))){
var inst_22775 = cljs.core.async.close_BANG_.call(null,to);
var state_22792__$1 = state_22792;
var statearr_22808_22830 = state_22792__$1;
(statearr_22808_22830[(2)] = inst_22775);

(statearr_22808_22830[(1)] = (10));


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
});})(c__6508__auto___22816))
;
return ((function (switch__6493__auto__,c__6508__auto___22816){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_22812 = [null,null,null,null,null,null,null,null];
(statearr_22812[(0)] = state_machine__6494__auto__);

(statearr_22812[(1)] = (1));

return statearr_22812;
});
var state_machine__6494__auto____1 = (function (state_22792){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_22792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e22813){if((e22813 instanceof Object)){
var ex__6497__auto__ = e22813;
var statearr_22814_22831 = state_22792;
(statearr_22814_22831[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22832 = state_22792;
state_22792 = G__22832;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_22792){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_22792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___22816))
})();
var state__6510__auto__ = (function (){var statearr_22815 = f__6509__auto__.call(null);
(statearr_22815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___22816);

return statearr_22815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___22816))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23016){
var vec__23017 = p__23016;
var v = cljs.core.nth.call(null,vec__23017,(0),null);
var p = cljs.core.nth.call(null,vec__23017,(1),null);
var job = vec__23017;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6508__auto___23199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___23199,res,vec__23017,v,p,job,jobs,results){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___23199,res,vec__23017,v,p,job,jobs,results){
return (function (state_23022){
var state_val_23023 = (state_23022[(1)]);
if((state_val_23023 === (2))){
var inst_23019 = (state_23022[(2)]);
var inst_23020 = cljs.core.async.close_BANG_.call(null,res);
var state_23022__$1 = (function (){var statearr_23024 = state_23022;
(statearr_23024[(7)] = inst_23019);

return statearr_23024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23022__$1,inst_23020);
} else {
if((state_val_23023 === (1))){
var state_23022__$1 = state_23022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23022__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6508__auto___23199,res,vec__23017,v,p,job,jobs,results))
;
return ((function (switch__6493__auto__,c__6508__auto___23199,res,vec__23017,v,p,job,jobs,results){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_23028 = [null,null,null,null,null,null,null,null];
(statearr_23028[(0)] = state_machine__6494__auto__);

(statearr_23028[(1)] = (1));

return statearr_23028;
});
var state_machine__6494__auto____1 = (function (state_23022){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_23022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e23029){if((e23029 instanceof Object)){
var ex__6497__auto__ = e23029;
var statearr_23030_23200 = state_23022;
(statearr_23030_23200[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23201 = state_23022;
state_23022 = G__23201;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_23022){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_23022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___23199,res,vec__23017,v,p,job,jobs,results))
})();
var state__6510__auto__ = (function (){var statearr_23031 = f__6509__auto__.call(null);
(statearr_23031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___23199);

return statearr_23031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___23199,res,vec__23017,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23032){
var vec__23033 = p__23032;
var v = cljs.core.nth.call(null,vec__23033,(0),null);
var p = cljs.core.nth.call(null,vec__23033,(1),null);
var job = vec__23033;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4515__auto___23202 = n;
var __23203 = (0);
while(true){
if((__23203 < n__4515__auto___23202)){
var G__23034_23204 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23034_23204) {
case "async":
var c__6508__auto___23206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23203,c__6508__auto___23206,G__23034_23204,n__4515__auto___23202,jobs,results,process,async){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (__23203,c__6508__auto___23206,G__23034_23204,n__4515__auto___23202,jobs,results,process,async){
return (function (state_23047){
var state_val_23048 = (state_23047[(1)]);
if((state_val_23048 === (7))){
var inst_23043 = (state_23047[(2)]);
var state_23047__$1 = state_23047;
var statearr_23049_23207 = state_23047__$1;
(statearr_23049_23207[(2)] = inst_23043);

(statearr_23049_23207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23048 === (6))){
var state_23047__$1 = state_23047;
var statearr_23050_23208 = state_23047__$1;
(statearr_23050_23208[(2)] = null);

(statearr_23050_23208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23048 === (5))){
var state_23047__$1 = state_23047;
var statearr_23051_23209 = state_23047__$1;
(statearr_23051_23209[(2)] = null);

(statearr_23051_23209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23048 === (4))){
var inst_23037 = (state_23047[(2)]);
var inst_23038 = async.call(null,inst_23037);
var state_23047__$1 = state_23047;
if(cljs.core.truth_(inst_23038)){
var statearr_23052_23210 = state_23047__$1;
(statearr_23052_23210[(1)] = (5));

} else {
var statearr_23053_23211 = state_23047__$1;
(statearr_23053_23211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23048 === (3))){
var inst_23045 = (state_23047[(2)]);
var state_23047__$1 = state_23047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23047__$1,inst_23045);
} else {
if((state_val_23048 === (2))){
var state_23047__$1 = state_23047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23047__$1,(4),jobs);
} else {
if((state_val_23048 === (1))){
var state_23047__$1 = state_23047;
var statearr_23054_23212 = state_23047__$1;
(statearr_23054_23212[(2)] = null);

(statearr_23054_23212[(1)] = (2));


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
});})(__23203,c__6508__auto___23206,G__23034_23204,n__4515__auto___23202,jobs,results,process,async))
;
return ((function (__23203,switch__6493__auto__,c__6508__auto___23206,G__23034_23204,n__4515__auto___23202,jobs,results,process,async){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_23058 = [null,null,null,null,null,null,null];
(statearr_23058[(0)] = state_machine__6494__auto__);

(statearr_23058[(1)] = (1));

return statearr_23058;
});
var state_machine__6494__auto____1 = (function (state_23047){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_23047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e23059){if((e23059 instanceof Object)){
var ex__6497__auto__ = e23059;
var statearr_23060_23213 = state_23047;
(statearr_23060_23213[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23214 = state_23047;
state_23047 = G__23214;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_23047){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_23047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(__23203,switch__6493__auto__,c__6508__auto___23206,G__23034_23204,n__4515__auto___23202,jobs,results,process,async))
})();
var state__6510__auto__ = (function (){var statearr_23061 = f__6509__auto__.call(null);
(statearr_23061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___23206);

return statearr_23061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(__23203,c__6508__auto___23206,G__23034_23204,n__4515__auto___23202,jobs,results,process,async))
);


break;
case "compute":
var c__6508__auto___23215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23203,c__6508__auto___23215,G__23034_23204,n__4515__auto___23202,jobs,results,process,async){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (__23203,c__6508__auto___23215,G__23034_23204,n__4515__auto___23202,jobs,results,process,async){
return (function (state_23074){
var state_val_23075 = (state_23074[(1)]);
if((state_val_23075 === (7))){
var inst_23070 = (state_23074[(2)]);
var state_23074__$1 = state_23074;
var statearr_23076_23216 = state_23074__$1;
(statearr_23076_23216[(2)] = inst_23070);

(statearr_23076_23216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (6))){
var state_23074__$1 = state_23074;
var statearr_23077_23217 = state_23074__$1;
(statearr_23077_23217[(2)] = null);

(statearr_23077_23217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (5))){
var state_23074__$1 = state_23074;
var statearr_23078_23218 = state_23074__$1;
(statearr_23078_23218[(2)] = null);

(statearr_23078_23218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (4))){
var inst_23064 = (state_23074[(2)]);
var inst_23065 = process.call(null,inst_23064);
var state_23074__$1 = state_23074;
if(cljs.core.truth_(inst_23065)){
var statearr_23079_23219 = state_23074__$1;
(statearr_23079_23219[(1)] = (5));

} else {
var statearr_23080_23220 = state_23074__$1;
(statearr_23080_23220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23075 === (3))){
var inst_23072 = (state_23074[(2)]);
var state_23074__$1 = state_23074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23074__$1,inst_23072);
} else {
if((state_val_23075 === (2))){
var state_23074__$1 = state_23074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23074__$1,(4),jobs);
} else {
if((state_val_23075 === (1))){
var state_23074__$1 = state_23074;
var statearr_23081_23221 = state_23074__$1;
(statearr_23081_23221[(2)] = null);

(statearr_23081_23221[(1)] = (2));


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
});})(__23203,c__6508__auto___23215,G__23034_23204,n__4515__auto___23202,jobs,results,process,async))
;
return ((function (__23203,switch__6493__auto__,c__6508__auto___23215,G__23034_23204,n__4515__auto___23202,jobs,results,process,async){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_23085 = [null,null,null,null,null,null,null];
(statearr_23085[(0)] = state_machine__6494__auto__);

(statearr_23085[(1)] = (1));

return statearr_23085;
});
var state_machine__6494__auto____1 = (function (state_23074){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_23074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e23086){if((e23086 instanceof Object)){
var ex__6497__auto__ = e23086;
var statearr_23087_23222 = state_23074;
(statearr_23087_23222[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23223 = state_23074;
state_23074 = G__23223;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_23074){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_23074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(__23203,switch__6493__auto__,c__6508__auto___23215,G__23034_23204,n__4515__auto___23202,jobs,results,process,async))
})();
var state__6510__auto__ = (function (){var statearr_23088 = f__6509__auto__.call(null);
(statearr_23088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___23215);

return statearr_23088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(__23203,c__6508__auto___23215,G__23034_23204,n__4515__auto___23202,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23224 = (__23203 + (1));
__23203 = G__23224;
continue;
} else {
}
break;
}

var c__6508__auto___23225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___23225,jobs,results,process,async){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___23225,jobs,results,process,async){
return (function (state_23110){
var state_val_23111 = (state_23110[(1)]);
if((state_val_23111 === (9))){
var inst_23103 = (state_23110[(2)]);
var state_23110__$1 = (function (){var statearr_23112 = state_23110;
(statearr_23112[(7)] = inst_23103);

return statearr_23112;
})();
var statearr_23113_23226 = state_23110__$1;
(statearr_23113_23226[(2)] = null);

(statearr_23113_23226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23111 === (8))){
var inst_23096 = (state_23110[(8)]);
var inst_23101 = (state_23110[(2)]);
var state_23110__$1 = (function (){var statearr_23114 = state_23110;
(statearr_23114[(9)] = inst_23101);

return statearr_23114;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23110__$1,(9),results,inst_23096);
} else {
if((state_val_23111 === (7))){
var inst_23106 = (state_23110[(2)]);
var state_23110__$1 = state_23110;
var statearr_23115_23227 = state_23110__$1;
(statearr_23115_23227[(2)] = inst_23106);

(statearr_23115_23227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23111 === (6))){
var inst_23096 = (state_23110[(8)]);
var inst_23091 = (state_23110[(10)]);
var inst_23096__$1 = cljs.core.async.chan.call(null,(1));
var inst_23097 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23098 = [inst_23091,inst_23096__$1];
var inst_23099 = (new cljs.core.PersistentVector(null,2,(5),inst_23097,inst_23098,null));
var state_23110__$1 = (function (){var statearr_23116 = state_23110;
(statearr_23116[(8)] = inst_23096__$1);

return statearr_23116;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23110__$1,(8),jobs,inst_23099);
} else {
if((state_val_23111 === (5))){
var inst_23094 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23110__$1 = state_23110;
var statearr_23117_23228 = state_23110__$1;
(statearr_23117_23228[(2)] = inst_23094);

(statearr_23117_23228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23111 === (4))){
var inst_23091 = (state_23110[(10)]);
var inst_23091__$1 = (state_23110[(2)]);
var inst_23092 = (inst_23091__$1 == null);
var state_23110__$1 = (function (){var statearr_23118 = state_23110;
(statearr_23118[(10)] = inst_23091__$1);

return statearr_23118;
})();
if(cljs.core.truth_(inst_23092)){
var statearr_23119_23229 = state_23110__$1;
(statearr_23119_23229[(1)] = (5));

} else {
var statearr_23120_23230 = state_23110__$1;
(statearr_23120_23230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23111 === (3))){
var inst_23108 = (state_23110[(2)]);
var state_23110__$1 = state_23110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23110__$1,inst_23108);
} else {
if((state_val_23111 === (2))){
var state_23110__$1 = state_23110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23110__$1,(4),from);
} else {
if((state_val_23111 === (1))){
var state_23110__$1 = state_23110;
var statearr_23121_23231 = state_23110__$1;
(statearr_23121_23231[(2)] = null);

(statearr_23121_23231[(1)] = (2));


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
});})(c__6508__auto___23225,jobs,results,process,async))
;
return ((function (switch__6493__auto__,c__6508__auto___23225,jobs,results,process,async){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_23125 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23125[(0)] = state_machine__6494__auto__);

(statearr_23125[(1)] = (1));

return statearr_23125;
});
var state_machine__6494__auto____1 = (function (state_23110){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_23110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e23126){if((e23126 instanceof Object)){
var ex__6497__auto__ = e23126;
var statearr_23127_23232 = state_23110;
(statearr_23127_23232[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23233 = state_23110;
state_23110 = G__23233;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_23110){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_23110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___23225,jobs,results,process,async))
})();
var state__6510__auto__ = (function (){var statearr_23128 = f__6509__auto__.call(null);
(statearr_23128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___23225);

return statearr_23128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___23225,jobs,results,process,async))
);


var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,jobs,results,process,async){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,jobs,results,process,async){
return (function (state_23166){
var state_val_23167 = (state_23166[(1)]);
if((state_val_23167 === (7))){
var inst_23162 = (state_23166[(2)]);
var state_23166__$1 = state_23166;
var statearr_23168_23234 = state_23166__$1;
(statearr_23168_23234[(2)] = inst_23162);

(statearr_23168_23234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23167 === (20))){
var state_23166__$1 = state_23166;
var statearr_23169_23235 = state_23166__$1;
(statearr_23169_23235[(2)] = null);

(statearr_23169_23235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23167 === (1))){
var state_23166__$1 = state_23166;
var statearr_23170_23236 = state_23166__$1;
(statearr_23170_23236[(2)] = null);

(statearr_23170_23236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23167 === (4))){
var inst_23131 = (state_23166[(7)]);
var inst_23131__$1 = (state_23166[(2)]);
var inst_23132 = (inst_23131__$1 == null);
var state_23166__$1 = (function (){var statearr_23171 = state_23166;
(statearr_23171[(7)] = inst_23131__$1);

return statearr_23171;
})();
if(cljs.core.truth_(inst_23132)){
var statearr_23172_23237 = state_23166__$1;
(statearr_23172_23237[(1)] = (5));

} else {
var statearr_23173_23238 = state_23166__$1;
(statearr_23173_23238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23167 === (15))){
var inst_23144 = (state_23166[(8)]);
var state_23166__$1 = state_23166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23166__$1,(18),to,inst_23144);
} else {
if((state_val_23167 === (21))){
var inst_23157 = (state_23166[(2)]);
var state_23166__$1 = state_23166;
var statearr_23174_23239 = state_23166__$1;
(statearr_23174_23239[(2)] = inst_23157);

(statearr_23174_23239[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23167 === (13))){
var inst_23159 = (state_23166[(2)]);
var state_23166__$1 = (function (){var statearr_23175 = state_23166;
(statearr_23175[(9)] = inst_23159);

return statearr_23175;
})();
var statearr_23176_23240 = state_23166__$1;
(statearr_23176_23240[(2)] = null);

(statearr_23176_23240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23167 === (6))){
var inst_23131 = (state_23166[(7)]);
var state_23166__$1 = state_23166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23166__$1,(11),inst_23131);
} else {
if((state_val_23167 === (17))){
var inst_23152 = (state_23166[(2)]);
var state_23166__$1 = state_23166;
if(cljs.core.truth_(inst_23152)){
var statearr_23177_23241 = state_23166__$1;
(statearr_23177_23241[(1)] = (19));

} else {
var statearr_23178_23242 = state_23166__$1;
(statearr_23178_23242[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23167 === (3))){
var inst_23164 = (state_23166[(2)]);
var state_23166__$1 = state_23166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23166__$1,inst_23164);
} else {
if((state_val_23167 === (12))){
var inst_23141 = (state_23166[(10)]);
var state_23166__$1 = state_23166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23166__$1,(14),inst_23141);
} else {
if((state_val_23167 === (2))){
var state_23166__$1 = state_23166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23166__$1,(4),results);
} else {
if((state_val_23167 === (19))){
var state_23166__$1 = state_23166;
var statearr_23179_23243 = state_23166__$1;
(statearr_23179_23243[(2)] = null);

(statearr_23179_23243[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23167 === (11))){
var inst_23141 = (state_23166[(2)]);
var state_23166__$1 = (function (){var statearr_23180 = state_23166;
(statearr_23180[(10)] = inst_23141);

return statearr_23180;
})();
var statearr_23181_23244 = state_23166__$1;
(statearr_23181_23244[(2)] = null);

(statearr_23181_23244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23167 === (9))){
var state_23166__$1 = state_23166;
var statearr_23182_23245 = state_23166__$1;
(statearr_23182_23245[(2)] = null);

(statearr_23182_23245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23167 === (5))){
var state_23166__$1 = state_23166;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23183_23246 = state_23166__$1;
(statearr_23183_23246[(1)] = (8));

} else {
var statearr_23184_23247 = state_23166__$1;
(statearr_23184_23247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23167 === (14))){
var inst_23144 = (state_23166[(8)]);
var inst_23146 = (state_23166[(11)]);
var inst_23144__$1 = (state_23166[(2)]);
var inst_23145 = (inst_23144__$1 == null);
var inst_23146__$1 = cljs.core.not.call(null,inst_23145);
var state_23166__$1 = (function (){var statearr_23185 = state_23166;
(statearr_23185[(8)] = inst_23144__$1);

(statearr_23185[(11)] = inst_23146__$1);

return statearr_23185;
})();
if(inst_23146__$1){
var statearr_23186_23248 = state_23166__$1;
(statearr_23186_23248[(1)] = (15));

} else {
var statearr_23187_23249 = state_23166__$1;
(statearr_23187_23249[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23167 === (16))){
var inst_23146 = (state_23166[(11)]);
var state_23166__$1 = state_23166;
var statearr_23188_23250 = state_23166__$1;
(statearr_23188_23250[(2)] = inst_23146);

(statearr_23188_23250[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23167 === (10))){
var inst_23138 = (state_23166[(2)]);
var state_23166__$1 = state_23166;
var statearr_23189_23251 = state_23166__$1;
(statearr_23189_23251[(2)] = inst_23138);

(statearr_23189_23251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23167 === (18))){
var inst_23149 = (state_23166[(2)]);
var state_23166__$1 = state_23166;
var statearr_23190_23252 = state_23166__$1;
(statearr_23190_23252[(2)] = inst_23149);

(statearr_23190_23252[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23167 === (8))){
var inst_23135 = cljs.core.async.close_BANG_.call(null,to);
var state_23166__$1 = state_23166;
var statearr_23191_23253 = state_23166__$1;
(statearr_23191_23253[(2)] = inst_23135);

(statearr_23191_23253[(1)] = (10));


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
});})(c__6508__auto__,jobs,results,process,async))
;
return ((function (switch__6493__auto__,c__6508__auto__,jobs,results,process,async){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_23195 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23195[(0)] = state_machine__6494__auto__);

(statearr_23195[(1)] = (1));

return statearr_23195;
});
var state_machine__6494__auto____1 = (function (state_23166){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_23166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e23196){if((e23196 instanceof Object)){
var ex__6497__auto__ = e23196;
var statearr_23197_23254 = state_23166;
(statearr_23197_23254[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23255 = state_23166;
state_23166 = G__23255;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_23166){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_23166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,jobs,results,process,async))
})();
var state__6510__auto__ = (function (){var statearr_23198 = f__6509__auto__.call(null);
(statearr_23198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_23198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,jobs,results,process,async))
);

return c__6508__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6508__auto___23356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___23356,tc,fc){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___23356,tc,fc){
return (function (state_23331){
var state_val_23332 = (state_23331[(1)]);
if((state_val_23332 === (7))){
var inst_23327 = (state_23331[(2)]);
var state_23331__$1 = state_23331;
var statearr_23333_23357 = state_23331__$1;
(statearr_23333_23357[(2)] = inst_23327);

(statearr_23333_23357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23332 === (1))){
var state_23331__$1 = state_23331;
var statearr_23334_23358 = state_23331__$1;
(statearr_23334_23358[(2)] = null);

(statearr_23334_23358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23332 === (4))){
var inst_23308 = (state_23331[(7)]);
var inst_23308__$1 = (state_23331[(2)]);
var inst_23309 = (inst_23308__$1 == null);
var state_23331__$1 = (function (){var statearr_23335 = state_23331;
(statearr_23335[(7)] = inst_23308__$1);

return statearr_23335;
})();
if(cljs.core.truth_(inst_23309)){
var statearr_23336_23359 = state_23331__$1;
(statearr_23336_23359[(1)] = (5));

} else {
var statearr_23337_23360 = state_23331__$1;
(statearr_23337_23360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23332 === (13))){
var state_23331__$1 = state_23331;
var statearr_23338_23361 = state_23331__$1;
(statearr_23338_23361[(2)] = null);

(statearr_23338_23361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23332 === (6))){
var inst_23308 = (state_23331[(7)]);
var inst_23314 = p.call(null,inst_23308);
var state_23331__$1 = state_23331;
if(cljs.core.truth_(inst_23314)){
var statearr_23339_23362 = state_23331__$1;
(statearr_23339_23362[(1)] = (9));

} else {
var statearr_23340_23363 = state_23331__$1;
(statearr_23340_23363[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23332 === (3))){
var inst_23329 = (state_23331[(2)]);
var state_23331__$1 = state_23331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23331__$1,inst_23329);
} else {
if((state_val_23332 === (12))){
var state_23331__$1 = state_23331;
var statearr_23341_23364 = state_23331__$1;
(statearr_23341_23364[(2)] = null);

(statearr_23341_23364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23332 === (2))){
var state_23331__$1 = state_23331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23331__$1,(4),ch);
} else {
if((state_val_23332 === (11))){
var inst_23308 = (state_23331[(7)]);
var inst_23318 = (state_23331[(2)]);
var state_23331__$1 = state_23331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23331__$1,(8),inst_23318,inst_23308);
} else {
if((state_val_23332 === (9))){
var state_23331__$1 = state_23331;
var statearr_23342_23365 = state_23331__$1;
(statearr_23342_23365[(2)] = tc);

(statearr_23342_23365[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23332 === (5))){
var inst_23311 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23312 = cljs.core.async.close_BANG_.call(null,fc);
var state_23331__$1 = (function (){var statearr_23343 = state_23331;
(statearr_23343[(8)] = inst_23311);

return statearr_23343;
})();
var statearr_23344_23366 = state_23331__$1;
(statearr_23344_23366[(2)] = inst_23312);

(statearr_23344_23366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23332 === (14))){
var inst_23325 = (state_23331[(2)]);
var state_23331__$1 = state_23331;
var statearr_23345_23367 = state_23331__$1;
(statearr_23345_23367[(2)] = inst_23325);

(statearr_23345_23367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23332 === (10))){
var state_23331__$1 = state_23331;
var statearr_23346_23368 = state_23331__$1;
(statearr_23346_23368[(2)] = fc);

(statearr_23346_23368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23332 === (8))){
var inst_23320 = (state_23331[(2)]);
var state_23331__$1 = state_23331;
if(cljs.core.truth_(inst_23320)){
var statearr_23347_23369 = state_23331__$1;
(statearr_23347_23369[(1)] = (12));

} else {
var statearr_23348_23370 = state_23331__$1;
(statearr_23348_23370[(1)] = (13));

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
});})(c__6508__auto___23356,tc,fc))
;
return ((function (switch__6493__auto__,c__6508__auto___23356,tc,fc){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_23352 = [null,null,null,null,null,null,null,null,null];
(statearr_23352[(0)] = state_machine__6494__auto__);

(statearr_23352[(1)] = (1));

return statearr_23352;
});
var state_machine__6494__auto____1 = (function (state_23331){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_23331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e23353){if((e23353 instanceof Object)){
var ex__6497__auto__ = e23353;
var statearr_23354_23371 = state_23331;
(statearr_23354_23371[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23372 = state_23331;
state_23331 = G__23372;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_23331){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_23331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___23356,tc,fc))
})();
var state__6510__auto__ = (function (){var statearr_23355 = f__6509__auto__.call(null);
(statearr_23355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___23356);

return statearr_23355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___23356,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__){
return (function (state_23419){
var state_val_23420 = (state_23419[(1)]);
if((state_val_23420 === (7))){
var inst_23415 = (state_23419[(2)]);
var state_23419__$1 = state_23419;
var statearr_23421_23437 = state_23419__$1;
(statearr_23421_23437[(2)] = inst_23415);

(statearr_23421_23437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23420 === (6))){
var inst_23408 = (state_23419[(7)]);
var inst_23405 = (state_23419[(8)]);
var inst_23412 = f.call(null,inst_23405,inst_23408);
var inst_23405__$1 = inst_23412;
var state_23419__$1 = (function (){var statearr_23422 = state_23419;
(statearr_23422[(8)] = inst_23405__$1);

return statearr_23422;
})();
var statearr_23423_23438 = state_23419__$1;
(statearr_23423_23438[(2)] = null);

(statearr_23423_23438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23420 === (5))){
var inst_23405 = (state_23419[(8)]);
var state_23419__$1 = state_23419;
var statearr_23424_23439 = state_23419__$1;
(statearr_23424_23439[(2)] = inst_23405);

(statearr_23424_23439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23420 === (4))){
var inst_23408 = (state_23419[(7)]);
var inst_23408__$1 = (state_23419[(2)]);
var inst_23409 = (inst_23408__$1 == null);
var state_23419__$1 = (function (){var statearr_23425 = state_23419;
(statearr_23425[(7)] = inst_23408__$1);

return statearr_23425;
})();
if(cljs.core.truth_(inst_23409)){
var statearr_23426_23440 = state_23419__$1;
(statearr_23426_23440[(1)] = (5));

} else {
var statearr_23427_23441 = state_23419__$1;
(statearr_23427_23441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23420 === (3))){
var inst_23417 = (state_23419[(2)]);
var state_23419__$1 = state_23419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23419__$1,inst_23417);
} else {
if((state_val_23420 === (2))){
var state_23419__$1 = state_23419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23419__$1,(4),ch);
} else {
if((state_val_23420 === (1))){
var inst_23405 = init;
var state_23419__$1 = (function (){var statearr_23428 = state_23419;
(statearr_23428[(8)] = inst_23405);

return statearr_23428;
})();
var statearr_23429_23442 = state_23419__$1;
(statearr_23429_23442[(2)] = null);

(statearr_23429_23442[(1)] = (2));


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
});})(c__6508__auto__))
;
return ((function (switch__6493__auto__,c__6508__auto__){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_23433 = [null,null,null,null,null,null,null,null,null];
(statearr_23433[(0)] = state_machine__6494__auto__);

(statearr_23433[(1)] = (1));

return statearr_23433;
});
var state_machine__6494__auto____1 = (function (state_23419){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_23419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e23434){if((e23434 instanceof Object)){
var ex__6497__auto__ = e23434;
var statearr_23435_23443 = state_23419;
(statearr_23435_23443[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23444 = state_23419;
state_23419 = G__23444;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_23419){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_23419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__))
})();
var state__6510__auto__ = (function (){var statearr_23436 = f__6509__auto__.call(null);
(statearr_23436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_23436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__))
);

return c__6508__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__){
return (function (state_23518){
var state_val_23519 = (state_23518[(1)]);
if((state_val_23519 === (7))){
var inst_23500 = (state_23518[(2)]);
var state_23518__$1 = state_23518;
var statearr_23520_23543 = state_23518__$1;
(statearr_23520_23543[(2)] = inst_23500);

(statearr_23520_23543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (1))){
var inst_23494 = cljs.core.seq.call(null,coll);
var inst_23495 = inst_23494;
var state_23518__$1 = (function (){var statearr_23521 = state_23518;
(statearr_23521[(7)] = inst_23495);

return statearr_23521;
})();
var statearr_23522_23544 = state_23518__$1;
(statearr_23522_23544[(2)] = null);

(statearr_23522_23544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (4))){
var inst_23495 = (state_23518[(7)]);
var inst_23498 = cljs.core.first.call(null,inst_23495);
var state_23518__$1 = state_23518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23518__$1,(7),ch,inst_23498);
} else {
if((state_val_23519 === (13))){
var inst_23512 = (state_23518[(2)]);
var state_23518__$1 = state_23518;
var statearr_23523_23545 = state_23518__$1;
(statearr_23523_23545[(2)] = inst_23512);

(statearr_23523_23545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (6))){
var inst_23503 = (state_23518[(2)]);
var state_23518__$1 = state_23518;
if(cljs.core.truth_(inst_23503)){
var statearr_23524_23546 = state_23518__$1;
(statearr_23524_23546[(1)] = (8));

} else {
var statearr_23525_23547 = state_23518__$1;
(statearr_23525_23547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (3))){
var inst_23516 = (state_23518[(2)]);
var state_23518__$1 = state_23518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23518__$1,inst_23516);
} else {
if((state_val_23519 === (12))){
var state_23518__$1 = state_23518;
var statearr_23526_23548 = state_23518__$1;
(statearr_23526_23548[(2)] = null);

(statearr_23526_23548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (2))){
var inst_23495 = (state_23518[(7)]);
var state_23518__$1 = state_23518;
if(cljs.core.truth_(inst_23495)){
var statearr_23527_23549 = state_23518__$1;
(statearr_23527_23549[(1)] = (4));

} else {
var statearr_23528_23550 = state_23518__$1;
(statearr_23528_23550[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (11))){
var inst_23509 = cljs.core.async.close_BANG_.call(null,ch);
var state_23518__$1 = state_23518;
var statearr_23529_23551 = state_23518__$1;
(statearr_23529_23551[(2)] = inst_23509);

(statearr_23529_23551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (9))){
var state_23518__$1 = state_23518;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23530_23552 = state_23518__$1;
(statearr_23530_23552[(1)] = (11));

} else {
var statearr_23531_23553 = state_23518__$1;
(statearr_23531_23553[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (5))){
var inst_23495 = (state_23518[(7)]);
var state_23518__$1 = state_23518;
var statearr_23532_23554 = state_23518__$1;
(statearr_23532_23554[(2)] = inst_23495);

(statearr_23532_23554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (10))){
var inst_23514 = (state_23518[(2)]);
var state_23518__$1 = state_23518;
var statearr_23533_23555 = state_23518__$1;
(statearr_23533_23555[(2)] = inst_23514);

(statearr_23533_23555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (8))){
var inst_23495 = (state_23518[(7)]);
var inst_23505 = cljs.core.next.call(null,inst_23495);
var inst_23495__$1 = inst_23505;
var state_23518__$1 = (function (){var statearr_23534 = state_23518;
(statearr_23534[(7)] = inst_23495__$1);

return statearr_23534;
})();
var statearr_23535_23556 = state_23518__$1;
(statearr_23535_23556[(2)] = null);

(statearr_23535_23556[(1)] = (2));


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
});})(c__6508__auto__))
;
return ((function (switch__6493__auto__,c__6508__auto__){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_23539 = [null,null,null,null,null,null,null,null];
(statearr_23539[(0)] = state_machine__6494__auto__);

(statearr_23539[(1)] = (1));

return statearr_23539;
});
var state_machine__6494__auto____1 = (function (state_23518){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_23518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e23540){if((e23540 instanceof Object)){
var ex__6497__auto__ = e23540;
var statearr_23541_23557 = state_23518;
(statearr_23541_23557[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23558 = state_23518;
state_23518 = G__23558;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_23518){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_23518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__))
})();
var state__6510__auto__ = (function (){var statearr_23542 = f__6509__auto__.call(null);
(statearr_23542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_23542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__))
);

return c__6508__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj23560 = {};
return obj23560;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3616__auto__ = _;
if(and__3616__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4272__auto__ = (((_ == null))?null:_);
return (function (){var or__3628__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj23562 = {};
return obj23562;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t23784 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23784 = (function (cs,ch,mult,meta23785){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23785 = meta23785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23784.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t23784.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t23784.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t23784.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t23784.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23784.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t23784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23786){
var self__ = this;
var _23786__$1 = this;
return self__.meta23785;
});})(cs))
;

cljs.core.async.t23784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23786,meta23785__$1){
var self__ = this;
var _23786__$1 = this;
return (new cljs.core.async.t23784(self__.cs,self__.ch,self__.mult,meta23785__$1));
});})(cs))
;

cljs.core.async.t23784.cljs$lang$type = true;

cljs.core.async.t23784.cljs$lang$ctorStr = "cljs.core.async/t23784";

cljs.core.async.t23784.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23784");
});})(cs))
;

cljs.core.async.__GT_t23784 = ((function (cs){
return (function __GT_t23784(cs__$1,ch__$1,mult__$1,meta23785){
return (new cljs.core.async.t23784(cs__$1,ch__$1,mult__$1,meta23785));
});})(cs))
;

}

return (new cljs.core.async.t23784(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/resources/public/js/out-dev/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6508__auto___24005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___24005,cs,m,dchan,dctr,done){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___24005,cs,m,dchan,dctr,done){
return (function (state_23917){
var state_val_23918 = (state_23917[(1)]);
if((state_val_23918 === (7))){
var inst_23913 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23919_24006 = state_23917__$1;
(statearr_23919_24006[(2)] = inst_23913);

(statearr_23919_24006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (20))){
var inst_23818 = (state_23917[(7)]);
var inst_23828 = cljs.core.first.call(null,inst_23818);
var inst_23829 = cljs.core.nth.call(null,inst_23828,(0),null);
var inst_23830 = cljs.core.nth.call(null,inst_23828,(1),null);
var state_23917__$1 = (function (){var statearr_23920 = state_23917;
(statearr_23920[(8)] = inst_23829);

return statearr_23920;
})();
if(cljs.core.truth_(inst_23830)){
var statearr_23921_24007 = state_23917__$1;
(statearr_23921_24007[(1)] = (22));

} else {
var statearr_23922_24008 = state_23917__$1;
(statearr_23922_24008[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (27))){
var inst_23789 = (state_23917[(9)]);
var inst_23858 = (state_23917[(10)]);
var inst_23865 = (state_23917[(11)]);
var inst_23860 = (state_23917[(12)]);
var inst_23865__$1 = cljs.core._nth.call(null,inst_23858,inst_23860);
var inst_23866 = cljs.core.async.put_BANG_.call(null,inst_23865__$1,inst_23789,done);
var state_23917__$1 = (function (){var statearr_23923 = state_23917;
(statearr_23923[(11)] = inst_23865__$1);

return statearr_23923;
})();
if(cljs.core.truth_(inst_23866)){
var statearr_23924_24009 = state_23917__$1;
(statearr_23924_24009[(1)] = (30));

} else {
var statearr_23925_24010 = state_23917__$1;
(statearr_23925_24010[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (1))){
var state_23917__$1 = state_23917;
var statearr_23926_24011 = state_23917__$1;
(statearr_23926_24011[(2)] = null);

(statearr_23926_24011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (24))){
var inst_23818 = (state_23917[(7)]);
var inst_23835 = (state_23917[(2)]);
var inst_23836 = cljs.core.next.call(null,inst_23818);
var inst_23798 = inst_23836;
var inst_23799 = null;
var inst_23800 = (0);
var inst_23801 = (0);
var state_23917__$1 = (function (){var statearr_23927 = state_23917;
(statearr_23927[(13)] = inst_23801);

(statearr_23927[(14)] = inst_23799);

(statearr_23927[(15)] = inst_23798);

(statearr_23927[(16)] = inst_23800);

(statearr_23927[(17)] = inst_23835);

return statearr_23927;
})();
var statearr_23928_24012 = state_23917__$1;
(statearr_23928_24012[(2)] = null);

(statearr_23928_24012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (39))){
var state_23917__$1 = state_23917;
var statearr_23932_24013 = state_23917__$1;
(statearr_23932_24013[(2)] = null);

(statearr_23932_24013[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (4))){
var inst_23789 = (state_23917[(9)]);
var inst_23789__$1 = (state_23917[(2)]);
var inst_23790 = (inst_23789__$1 == null);
var state_23917__$1 = (function (){var statearr_23933 = state_23917;
(statearr_23933[(9)] = inst_23789__$1);

return statearr_23933;
})();
if(cljs.core.truth_(inst_23790)){
var statearr_23934_24014 = state_23917__$1;
(statearr_23934_24014[(1)] = (5));

} else {
var statearr_23935_24015 = state_23917__$1;
(statearr_23935_24015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (15))){
var inst_23801 = (state_23917[(13)]);
var inst_23799 = (state_23917[(14)]);
var inst_23798 = (state_23917[(15)]);
var inst_23800 = (state_23917[(16)]);
var inst_23814 = (state_23917[(2)]);
var inst_23815 = (inst_23801 + (1));
var tmp23929 = inst_23799;
var tmp23930 = inst_23798;
var tmp23931 = inst_23800;
var inst_23798__$1 = tmp23930;
var inst_23799__$1 = tmp23929;
var inst_23800__$1 = tmp23931;
var inst_23801__$1 = inst_23815;
var state_23917__$1 = (function (){var statearr_23936 = state_23917;
(statearr_23936[(13)] = inst_23801__$1);

(statearr_23936[(14)] = inst_23799__$1);

(statearr_23936[(18)] = inst_23814);

(statearr_23936[(15)] = inst_23798__$1);

(statearr_23936[(16)] = inst_23800__$1);

return statearr_23936;
})();
var statearr_23937_24016 = state_23917__$1;
(statearr_23937_24016[(2)] = null);

(statearr_23937_24016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (21))){
var inst_23839 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23941_24017 = state_23917__$1;
(statearr_23941_24017[(2)] = inst_23839);

(statearr_23941_24017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (31))){
var inst_23865 = (state_23917[(11)]);
var inst_23869 = done.call(null,null);
var inst_23870 = cljs.core.async.untap_STAR_.call(null,m,inst_23865);
var state_23917__$1 = (function (){var statearr_23942 = state_23917;
(statearr_23942[(19)] = inst_23869);

return statearr_23942;
})();
var statearr_23943_24018 = state_23917__$1;
(statearr_23943_24018[(2)] = inst_23870);

(statearr_23943_24018[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (32))){
var inst_23858 = (state_23917[(10)]);
var inst_23860 = (state_23917[(12)]);
var inst_23857 = (state_23917[(20)]);
var inst_23859 = (state_23917[(21)]);
var inst_23872 = (state_23917[(2)]);
var inst_23873 = (inst_23860 + (1));
var tmp23938 = inst_23858;
var tmp23939 = inst_23857;
var tmp23940 = inst_23859;
var inst_23857__$1 = tmp23939;
var inst_23858__$1 = tmp23938;
var inst_23859__$1 = tmp23940;
var inst_23860__$1 = inst_23873;
var state_23917__$1 = (function (){var statearr_23944 = state_23917;
(statearr_23944[(10)] = inst_23858__$1);

(statearr_23944[(12)] = inst_23860__$1);

(statearr_23944[(22)] = inst_23872);

(statearr_23944[(20)] = inst_23857__$1);

(statearr_23944[(21)] = inst_23859__$1);

return statearr_23944;
})();
var statearr_23945_24019 = state_23917__$1;
(statearr_23945_24019[(2)] = null);

(statearr_23945_24019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (40))){
var inst_23885 = (state_23917[(23)]);
var inst_23889 = done.call(null,null);
var inst_23890 = cljs.core.async.untap_STAR_.call(null,m,inst_23885);
var state_23917__$1 = (function (){var statearr_23946 = state_23917;
(statearr_23946[(24)] = inst_23889);

return statearr_23946;
})();
var statearr_23947_24020 = state_23917__$1;
(statearr_23947_24020[(2)] = inst_23890);

(statearr_23947_24020[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (33))){
var inst_23876 = (state_23917[(25)]);
var inst_23878 = cljs.core.chunked_seq_QMARK_.call(null,inst_23876);
var state_23917__$1 = state_23917;
if(inst_23878){
var statearr_23948_24021 = state_23917__$1;
(statearr_23948_24021[(1)] = (36));

} else {
var statearr_23949_24022 = state_23917__$1;
(statearr_23949_24022[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (13))){
var inst_23808 = (state_23917[(26)]);
var inst_23811 = cljs.core.async.close_BANG_.call(null,inst_23808);
var state_23917__$1 = state_23917;
var statearr_23950_24023 = state_23917__$1;
(statearr_23950_24023[(2)] = inst_23811);

(statearr_23950_24023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (22))){
var inst_23829 = (state_23917[(8)]);
var inst_23832 = cljs.core.async.close_BANG_.call(null,inst_23829);
var state_23917__$1 = state_23917;
var statearr_23951_24024 = state_23917__$1;
(statearr_23951_24024[(2)] = inst_23832);

(statearr_23951_24024[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (36))){
var inst_23876 = (state_23917[(25)]);
var inst_23880 = cljs.core.chunk_first.call(null,inst_23876);
var inst_23881 = cljs.core.chunk_rest.call(null,inst_23876);
var inst_23882 = cljs.core.count.call(null,inst_23880);
var inst_23857 = inst_23881;
var inst_23858 = inst_23880;
var inst_23859 = inst_23882;
var inst_23860 = (0);
var state_23917__$1 = (function (){var statearr_23952 = state_23917;
(statearr_23952[(10)] = inst_23858);

(statearr_23952[(12)] = inst_23860);

(statearr_23952[(20)] = inst_23857);

(statearr_23952[(21)] = inst_23859);

return statearr_23952;
})();
var statearr_23953_24025 = state_23917__$1;
(statearr_23953_24025[(2)] = null);

(statearr_23953_24025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (41))){
var inst_23876 = (state_23917[(25)]);
var inst_23892 = (state_23917[(2)]);
var inst_23893 = cljs.core.next.call(null,inst_23876);
var inst_23857 = inst_23893;
var inst_23858 = null;
var inst_23859 = (0);
var inst_23860 = (0);
var state_23917__$1 = (function (){var statearr_23954 = state_23917;
(statearr_23954[(10)] = inst_23858);

(statearr_23954[(12)] = inst_23860);

(statearr_23954[(27)] = inst_23892);

(statearr_23954[(20)] = inst_23857);

(statearr_23954[(21)] = inst_23859);

return statearr_23954;
})();
var statearr_23955_24026 = state_23917__$1;
(statearr_23955_24026[(2)] = null);

(statearr_23955_24026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (43))){
var state_23917__$1 = state_23917;
var statearr_23956_24027 = state_23917__$1;
(statearr_23956_24027[(2)] = null);

(statearr_23956_24027[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (29))){
var inst_23901 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23957_24028 = state_23917__$1;
(statearr_23957_24028[(2)] = inst_23901);

(statearr_23957_24028[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (44))){
var inst_23910 = (state_23917[(2)]);
var state_23917__$1 = (function (){var statearr_23958 = state_23917;
(statearr_23958[(28)] = inst_23910);

return statearr_23958;
})();
var statearr_23959_24029 = state_23917__$1;
(statearr_23959_24029[(2)] = null);

(statearr_23959_24029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (6))){
var inst_23849 = (state_23917[(29)]);
var inst_23848 = cljs.core.deref.call(null,cs);
var inst_23849__$1 = cljs.core.keys.call(null,inst_23848);
var inst_23850 = cljs.core.count.call(null,inst_23849__$1);
var inst_23851 = cljs.core.reset_BANG_.call(null,dctr,inst_23850);
var inst_23856 = cljs.core.seq.call(null,inst_23849__$1);
var inst_23857 = inst_23856;
var inst_23858 = null;
var inst_23859 = (0);
var inst_23860 = (0);
var state_23917__$1 = (function (){var statearr_23960 = state_23917;
(statearr_23960[(30)] = inst_23851);

(statearr_23960[(10)] = inst_23858);

(statearr_23960[(29)] = inst_23849__$1);

(statearr_23960[(12)] = inst_23860);

(statearr_23960[(20)] = inst_23857);

(statearr_23960[(21)] = inst_23859);

return statearr_23960;
})();
var statearr_23961_24030 = state_23917__$1;
(statearr_23961_24030[(2)] = null);

(statearr_23961_24030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (28))){
var inst_23876 = (state_23917[(25)]);
var inst_23857 = (state_23917[(20)]);
var inst_23876__$1 = cljs.core.seq.call(null,inst_23857);
var state_23917__$1 = (function (){var statearr_23962 = state_23917;
(statearr_23962[(25)] = inst_23876__$1);

return statearr_23962;
})();
if(inst_23876__$1){
var statearr_23963_24031 = state_23917__$1;
(statearr_23963_24031[(1)] = (33));

} else {
var statearr_23964_24032 = state_23917__$1;
(statearr_23964_24032[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (25))){
var inst_23860 = (state_23917[(12)]);
var inst_23859 = (state_23917[(21)]);
var inst_23862 = (inst_23860 < inst_23859);
var inst_23863 = inst_23862;
var state_23917__$1 = state_23917;
if(cljs.core.truth_(inst_23863)){
var statearr_23965_24033 = state_23917__$1;
(statearr_23965_24033[(1)] = (27));

} else {
var statearr_23966_24034 = state_23917__$1;
(statearr_23966_24034[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (34))){
var state_23917__$1 = state_23917;
var statearr_23967_24035 = state_23917__$1;
(statearr_23967_24035[(2)] = null);

(statearr_23967_24035[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (17))){
var state_23917__$1 = state_23917;
var statearr_23968_24036 = state_23917__$1;
(statearr_23968_24036[(2)] = null);

(statearr_23968_24036[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (3))){
var inst_23915 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23917__$1,inst_23915);
} else {
if((state_val_23918 === (12))){
var inst_23844 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23969_24037 = state_23917__$1;
(statearr_23969_24037[(2)] = inst_23844);

(statearr_23969_24037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (2))){
var state_23917__$1 = state_23917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23917__$1,(4),ch);
} else {
if((state_val_23918 === (23))){
var state_23917__$1 = state_23917;
var statearr_23970_24038 = state_23917__$1;
(statearr_23970_24038[(2)] = null);

(statearr_23970_24038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (35))){
var inst_23899 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23971_24039 = state_23917__$1;
(statearr_23971_24039[(2)] = inst_23899);

(statearr_23971_24039[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (19))){
var inst_23818 = (state_23917[(7)]);
var inst_23822 = cljs.core.chunk_first.call(null,inst_23818);
var inst_23823 = cljs.core.chunk_rest.call(null,inst_23818);
var inst_23824 = cljs.core.count.call(null,inst_23822);
var inst_23798 = inst_23823;
var inst_23799 = inst_23822;
var inst_23800 = inst_23824;
var inst_23801 = (0);
var state_23917__$1 = (function (){var statearr_23972 = state_23917;
(statearr_23972[(13)] = inst_23801);

(statearr_23972[(14)] = inst_23799);

(statearr_23972[(15)] = inst_23798);

(statearr_23972[(16)] = inst_23800);

return statearr_23972;
})();
var statearr_23973_24040 = state_23917__$1;
(statearr_23973_24040[(2)] = null);

(statearr_23973_24040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (11))){
var inst_23798 = (state_23917[(15)]);
var inst_23818 = (state_23917[(7)]);
var inst_23818__$1 = cljs.core.seq.call(null,inst_23798);
var state_23917__$1 = (function (){var statearr_23974 = state_23917;
(statearr_23974[(7)] = inst_23818__$1);

return statearr_23974;
})();
if(inst_23818__$1){
var statearr_23975_24041 = state_23917__$1;
(statearr_23975_24041[(1)] = (16));

} else {
var statearr_23976_24042 = state_23917__$1;
(statearr_23976_24042[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (9))){
var inst_23846 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23977_24043 = state_23917__$1;
(statearr_23977_24043[(2)] = inst_23846);

(statearr_23977_24043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (5))){
var inst_23796 = cljs.core.deref.call(null,cs);
var inst_23797 = cljs.core.seq.call(null,inst_23796);
var inst_23798 = inst_23797;
var inst_23799 = null;
var inst_23800 = (0);
var inst_23801 = (0);
var state_23917__$1 = (function (){var statearr_23978 = state_23917;
(statearr_23978[(13)] = inst_23801);

(statearr_23978[(14)] = inst_23799);

(statearr_23978[(15)] = inst_23798);

(statearr_23978[(16)] = inst_23800);

return statearr_23978;
})();
var statearr_23979_24044 = state_23917__$1;
(statearr_23979_24044[(2)] = null);

(statearr_23979_24044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (14))){
var state_23917__$1 = state_23917;
var statearr_23980_24045 = state_23917__$1;
(statearr_23980_24045[(2)] = null);

(statearr_23980_24045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (45))){
var inst_23907 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23981_24046 = state_23917__$1;
(statearr_23981_24046[(2)] = inst_23907);

(statearr_23981_24046[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (26))){
var inst_23849 = (state_23917[(29)]);
var inst_23903 = (state_23917[(2)]);
var inst_23904 = cljs.core.seq.call(null,inst_23849);
var state_23917__$1 = (function (){var statearr_23982 = state_23917;
(statearr_23982[(31)] = inst_23903);

return statearr_23982;
})();
if(inst_23904){
var statearr_23983_24047 = state_23917__$1;
(statearr_23983_24047[(1)] = (42));

} else {
var statearr_23984_24048 = state_23917__$1;
(statearr_23984_24048[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (16))){
var inst_23818 = (state_23917[(7)]);
var inst_23820 = cljs.core.chunked_seq_QMARK_.call(null,inst_23818);
var state_23917__$1 = state_23917;
if(inst_23820){
var statearr_23985_24049 = state_23917__$1;
(statearr_23985_24049[(1)] = (19));

} else {
var statearr_23986_24050 = state_23917__$1;
(statearr_23986_24050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (38))){
var inst_23896 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23987_24051 = state_23917__$1;
(statearr_23987_24051[(2)] = inst_23896);

(statearr_23987_24051[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (30))){
var state_23917__$1 = state_23917;
var statearr_23988_24052 = state_23917__$1;
(statearr_23988_24052[(2)] = null);

(statearr_23988_24052[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (10))){
var inst_23801 = (state_23917[(13)]);
var inst_23799 = (state_23917[(14)]);
var inst_23807 = cljs.core._nth.call(null,inst_23799,inst_23801);
var inst_23808 = cljs.core.nth.call(null,inst_23807,(0),null);
var inst_23809 = cljs.core.nth.call(null,inst_23807,(1),null);
var state_23917__$1 = (function (){var statearr_23989 = state_23917;
(statearr_23989[(26)] = inst_23808);

return statearr_23989;
})();
if(cljs.core.truth_(inst_23809)){
var statearr_23990_24053 = state_23917__$1;
(statearr_23990_24053[(1)] = (13));

} else {
var statearr_23991_24054 = state_23917__$1;
(statearr_23991_24054[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (18))){
var inst_23842 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23992_24055 = state_23917__$1;
(statearr_23992_24055[(2)] = inst_23842);

(statearr_23992_24055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (42))){
var state_23917__$1 = state_23917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23917__$1,(45),dchan);
} else {
if((state_val_23918 === (37))){
var inst_23885 = (state_23917[(23)]);
var inst_23789 = (state_23917[(9)]);
var inst_23876 = (state_23917[(25)]);
var inst_23885__$1 = cljs.core.first.call(null,inst_23876);
var inst_23886 = cljs.core.async.put_BANG_.call(null,inst_23885__$1,inst_23789,done);
var state_23917__$1 = (function (){var statearr_23993 = state_23917;
(statearr_23993[(23)] = inst_23885__$1);

return statearr_23993;
})();
if(cljs.core.truth_(inst_23886)){
var statearr_23994_24056 = state_23917__$1;
(statearr_23994_24056[(1)] = (39));

} else {
var statearr_23995_24057 = state_23917__$1;
(statearr_23995_24057[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (8))){
var inst_23801 = (state_23917[(13)]);
var inst_23800 = (state_23917[(16)]);
var inst_23803 = (inst_23801 < inst_23800);
var inst_23804 = inst_23803;
var state_23917__$1 = state_23917;
if(cljs.core.truth_(inst_23804)){
var statearr_23996_24058 = state_23917__$1;
(statearr_23996_24058[(1)] = (10));

} else {
var statearr_23997_24059 = state_23917__$1;
(statearr_23997_24059[(1)] = (11));

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
});})(c__6508__auto___24005,cs,m,dchan,dctr,done))
;
return ((function (switch__6493__auto__,c__6508__auto___24005,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_24001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24001[(0)] = state_machine__6494__auto__);

(statearr_24001[(1)] = (1));

return statearr_24001;
});
var state_machine__6494__auto____1 = (function (state_23917){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_23917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e24002){if((e24002 instanceof Object)){
var ex__6497__auto__ = e24002;
var statearr_24003_24060 = state_23917;
(statearr_24003_24060[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24061 = state_23917;
state_23917 = G__24061;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_23917){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_23917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___24005,cs,m,dchan,dctr,done))
})();
var state__6510__auto__ = (function (){var statearr_24004 = f__6509__auto__.call(null);
(statearr_24004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___24005);

return statearr_24004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___24005,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj24063 = {};
return obj24063;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4272__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24064){
var map__24069 = p__24064;
var map__24069__$1 = ((cljs.core.seq_QMARK_.call(null,map__24069))?cljs.core.apply.call(null,cljs.core.hash_map,map__24069):map__24069);
var opts = map__24069__$1;
var statearr_24070_24073 = state;
(statearr_24070_24073[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24069,map__24069__$1,opts){
return (function (val){
var statearr_24071_24074 = state;
(statearr_24071_24074[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24069,map__24069__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_24072_24075 = state;
(statearr_24072_24075[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24064 = null;
if (arguments.length > 3) {
  p__24064 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24064);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24076){
var state = cljs.core.first(arglist__24076);
arglist__24076 = cljs.core.next(arglist__24076);
var cont_block = cljs.core.first(arglist__24076);
arglist__24076 = cljs.core.next(arglist__24076);
var ports = cljs.core.first(arglist__24076);
var p__24064 = cljs.core.rest(arglist__24076);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24064);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t24196 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24196 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24197){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24197 = meta24197;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24196.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t24196.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24196.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24196.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24196.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24196.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24196.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24198){
var self__ = this;
var _24198__$1 = this;
return self__.meta24197;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24198,meta24197__$1){
var self__ = this;
var _24198__$1 = this;
return (new cljs.core.async.t24196(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24197__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t24196.cljs$lang$type = true;

cljs.core.async.t24196.cljs$lang$ctorStr = "cljs.core.async/t24196";

cljs.core.async.t24196.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24196");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t24196 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24196(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24197){
return (new cljs.core.async.t24196(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24197));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t24196(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/resources/public/js/out-dev/cljs/core/async.cljs"], null)));
})()
;
var c__6508__auto___24315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___24315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___24315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24268){
var state_val_24269 = (state_24268[(1)]);
if((state_val_24269 === (7))){
var inst_24212 = (state_24268[(7)]);
var inst_24217 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24212);
var state_24268__$1 = state_24268;
var statearr_24270_24316 = state_24268__$1;
(statearr_24270_24316[(2)] = inst_24217);

(statearr_24270_24316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (20))){
var inst_24227 = (state_24268[(8)]);
var state_24268__$1 = state_24268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24268__$1,(23),out,inst_24227);
} else {
if((state_val_24269 === (1))){
var inst_24202 = (state_24268[(9)]);
var inst_24202__$1 = calc_state.call(null);
var inst_24203 = cljs.core.seq_QMARK_.call(null,inst_24202__$1);
var state_24268__$1 = (function (){var statearr_24271 = state_24268;
(statearr_24271[(9)] = inst_24202__$1);

return statearr_24271;
})();
if(inst_24203){
var statearr_24272_24317 = state_24268__$1;
(statearr_24272_24317[(1)] = (2));

} else {
var statearr_24273_24318 = state_24268__$1;
(statearr_24273_24318[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (24))){
var inst_24220 = (state_24268[(10)]);
var inst_24212 = inst_24220;
var state_24268__$1 = (function (){var statearr_24274 = state_24268;
(statearr_24274[(7)] = inst_24212);

return statearr_24274;
})();
var statearr_24275_24319 = state_24268__$1;
(statearr_24275_24319[(2)] = null);

(statearr_24275_24319[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (4))){
var inst_24202 = (state_24268[(9)]);
var inst_24208 = (state_24268[(2)]);
var inst_24209 = cljs.core.get.call(null,inst_24208,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24210 = cljs.core.get.call(null,inst_24208,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24211 = cljs.core.get.call(null,inst_24208,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24212 = inst_24202;
var state_24268__$1 = (function (){var statearr_24276 = state_24268;
(statearr_24276[(11)] = inst_24211);

(statearr_24276[(7)] = inst_24212);

(statearr_24276[(12)] = inst_24209);

(statearr_24276[(13)] = inst_24210);

return statearr_24276;
})();
var statearr_24277_24320 = state_24268__$1;
(statearr_24277_24320[(2)] = null);

(statearr_24277_24320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (15))){
var state_24268__$1 = state_24268;
var statearr_24278_24321 = state_24268__$1;
(statearr_24278_24321[(2)] = null);

(statearr_24278_24321[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (21))){
var inst_24220 = (state_24268[(10)]);
var inst_24212 = inst_24220;
var state_24268__$1 = (function (){var statearr_24279 = state_24268;
(statearr_24279[(7)] = inst_24212);

return statearr_24279;
})();
var statearr_24280_24322 = state_24268__$1;
(statearr_24280_24322[(2)] = null);

(statearr_24280_24322[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (13))){
var inst_24264 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
var statearr_24281_24323 = state_24268__$1;
(statearr_24281_24323[(2)] = inst_24264);

(statearr_24281_24323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (22))){
var inst_24262 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
var statearr_24282_24324 = state_24268__$1;
(statearr_24282_24324[(2)] = inst_24262);

(statearr_24282_24324[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (6))){
var inst_24266 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24268__$1,inst_24266);
} else {
if((state_val_24269 === (25))){
var state_24268__$1 = state_24268;
var statearr_24283_24325 = state_24268__$1;
(statearr_24283_24325[(2)] = null);

(statearr_24283_24325[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (17))){
var inst_24242 = (state_24268[(14)]);
var state_24268__$1 = state_24268;
var statearr_24284_24326 = state_24268__$1;
(statearr_24284_24326[(2)] = inst_24242);

(statearr_24284_24326[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (3))){
var inst_24202 = (state_24268[(9)]);
var state_24268__$1 = state_24268;
var statearr_24285_24327 = state_24268__$1;
(statearr_24285_24327[(2)] = inst_24202);

(statearr_24285_24327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (12))){
var inst_24228 = (state_24268[(15)]);
var inst_24223 = (state_24268[(16)]);
var inst_24242 = (state_24268[(14)]);
var inst_24242__$1 = inst_24223.call(null,inst_24228);
var state_24268__$1 = (function (){var statearr_24286 = state_24268;
(statearr_24286[(14)] = inst_24242__$1);

return statearr_24286;
})();
if(cljs.core.truth_(inst_24242__$1)){
var statearr_24287_24328 = state_24268__$1;
(statearr_24287_24328[(1)] = (17));

} else {
var statearr_24288_24329 = state_24268__$1;
(statearr_24288_24329[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (2))){
var inst_24202 = (state_24268[(9)]);
var inst_24205 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24202);
var state_24268__$1 = state_24268;
var statearr_24289_24330 = state_24268__$1;
(statearr_24289_24330[(2)] = inst_24205);

(statearr_24289_24330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (23))){
var inst_24253 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
if(cljs.core.truth_(inst_24253)){
var statearr_24290_24331 = state_24268__$1;
(statearr_24290_24331[(1)] = (24));

} else {
var statearr_24291_24332 = state_24268__$1;
(statearr_24291_24332[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (19))){
var inst_24250 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
if(cljs.core.truth_(inst_24250)){
var statearr_24292_24333 = state_24268__$1;
(statearr_24292_24333[(1)] = (20));

} else {
var statearr_24293_24334 = state_24268__$1;
(statearr_24293_24334[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (11))){
var inst_24227 = (state_24268[(8)]);
var inst_24233 = (inst_24227 == null);
var state_24268__$1 = state_24268;
if(cljs.core.truth_(inst_24233)){
var statearr_24294_24335 = state_24268__$1;
(statearr_24294_24335[(1)] = (14));

} else {
var statearr_24295_24336 = state_24268__$1;
(statearr_24295_24336[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (9))){
var inst_24220 = (state_24268[(10)]);
var inst_24220__$1 = (state_24268[(2)]);
var inst_24221 = cljs.core.get.call(null,inst_24220__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24222 = cljs.core.get.call(null,inst_24220__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24223 = cljs.core.get.call(null,inst_24220__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_24268__$1 = (function (){var statearr_24296 = state_24268;
(statearr_24296[(10)] = inst_24220__$1);

(statearr_24296[(16)] = inst_24223);

(statearr_24296[(17)] = inst_24222);

return statearr_24296;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24268__$1,(10),inst_24221);
} else {
if((state_val_24269 === (5))){
var inst_24212 = (state_24268[(7)]);
var inst_24215 = cljs.core.seq_QMARK_.call(null,inst_24212);
var state_24268__$1 = state_24268;
if(inst_24215){
var statearr_24297_24337 = state_24268__$1;
(statearr_24297_24337[(1)] = (7));

} else {
var statearr_24298_24338 = state_24268__$1;
(statearr_24298_24338[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (14))){
var inst_24228 = (state_24268[(15)]);
var inst_24235 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24228);
var state_24268__$1 = state_24268;
var statearr_24299_24339 = state_24268__$1;
(statearr_24299_24339[(2)] = inst_24235);

(statearr_24299_24339[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (26))){
var inst_24258 = (state_24268[(2)]);
var state_24268__$1 = state_24268;
var statearr_24300_24340 = state_24268__$1;
(statearr_24300_24340[(2)] = inst_24258);

(statearr_24300_24340[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (16))){
var inst_24238 = (state_24268[(2)]);
var inst_24239 = calc_state.call(null);
var inst_24212 = inst_24239;
var state_24268__$1 = (function (){var statearr_24301 = state_24268;
(statearr_24301[(18)] = inst_24238);

(statearr_24301[(7)] = inst_24212);

return statearr_24301;
})();
var statearr_24302_24341 = state_24268__$1;
(statearr_24302_24341[(2)] = null);

(statearr_24302_24341[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (10))){
var inst_24227 = (state_24268[(8)]);
var inst_24228 = (state_24268[(15)]);
var inst_24226 = (state_24268[(2)]);
var inst_24227__$1 = cljs.core.nth.call(null,inst_24226,(0),null);
var inst_24228__$1 = cljs.core.nth.call(null,inst_24226,(1),null);
var inst_24229 = (inst_24227__$1 == null);
var inst_24230 = cljs.core._EQ_.call(null,inst_24228__$1,change);
var inst_24231 = (inst_24229) || (inst_24230);
var state_24268__$1 = (function (){var statearr_24303 = state_24268;
(statearr_24303[(8)] = inst_24227__$1);

(statearr_24303[(15)] = inst_24228__$1);

return statearr_24303;
})();
if(cljs.core.truth_(inst_24231)){
var statearr_24304_24342 = state_24268__$1;
(statearr_24304_24342[(1)] = (11));

} else {
var statearr_24305_24343 = state_24268__$1;
(statearr_24305_24343[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (18))){
var inst_24228 = (state_24268[(15)]);
var inst_24223 = (state_24268[(16)]);
var inst_24222 = (state_24268[(17)]);
var inst_24245 = cljs.core.empty_QMARK_.call(null,inst_24223);
var inst_24246 = inst_24222.call(null,inst_24228);
var inst_24247 = cljs.core.not.call(null,inst_24246);
var inst_24248 = (inst_24245) && (inst_24247);
var state_24268__$1 = state_24268;
var statearr_24306_24344 = state_24268__$1;
(statearr_24306_24344[(2)] = inst_24248);

(statearr_24306_24344[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24269 === (8))){
var inst_24212 = (state_24268[(7)]);
var state_24268__$1 = state_24268;
var statearr_24307_24345 = state_24268__$1;
(statearr_24307_24345[(2)] = inst_24212);

(statearr_24307_24345[(1)] = (9));


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
});})(c__6508__auto___24315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6493__auto__,c__6508__auto___24315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_24311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24311[(0)] = state_machine__6494__auto__);

(statearr_24311[(1)] = (1));

return statearr_24311;
});
var state_machine__6494__auto____1 = (function (state_24268){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_24268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e24312){if((e24312 instanceof Object)){
var ex__6497__auto__ = e24312;
var statearr_24313_24346 = state_24268;
(statearr_24313_24346[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24347 = state_24268;
state_24268 = G__24347;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_24268){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_24268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___24315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6510__auto__ = (function (){var statearr_24314 = f__6509__auto__.call(null);
(statearr_24314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___24315);

return statearr_24314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___24315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj24349 = {};
return obj24349;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3616__auto__ = p;
if(and__3616__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3616__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4272__auto__ = (((p == null))?null:p);
return (function (){var or__3628__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3616__auto__ = p;
if(and__3616__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3616__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4272__auto__ = (((p == null))?null:p);
return (function (){var or__3628__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3616__auto__ = p;
if(and__3616__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4272__auto__ = (((p == null))?null:p);
return (function (){var or__3628__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3616__auto__ = p;
if(and__3616__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4272__auto__ = (((p == null))?null:p);
return (function (){var or__3628__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3628__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3628__auto__,mults){
return (function (p1__24350_SHARP_){
if(cljs.core.truth_(p1__24350_SHARP_.call(null,topic))){
return p1__24350_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24350_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3628__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t24473 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24473 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24474){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24474 = meta24474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24473.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t24473.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t24473.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t24473.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t24473.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t24473.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t24473.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t24473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24475){
var self__ = this;
var _24475__$1 = this;
return self__.meta24474;
});})(mults,ensure_mult))
;

cljs.core.async.t24473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24475,meta24474__$1){
var self__ = this;
var _24475__$1 = this;
return (new cljs.core.async.t24473(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24474__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t24473.cljs$lang$type = true;

cljs.core.async.t24473.cljs$lang$ctorStr = "cljs.core.async/t24473";

cljs.core.async.t24473.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24473");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t24473 = ((function (mults,ensure_mult){
return (function __GT_t24473(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24474){
return (new cljs.core.async.t24473(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24474));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t24473(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/resources/public/js/out-dev/cljs/core/async.cljs"], null)));
})()
;
var c__6508__auto___24595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___24595,mults,ensure_mult,p){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___24595,mults,ensure_mult,p){
return (function (state_24547){
var state_val_24548 = (state_24547[(1)]);
if((state_val_24548 === (7))){
var inst_24543 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24549_24596 = state_24547__$1;
(statearr_24549_24596[(2)] = inst_24543);

(statearr_24549_24596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (20))){
var state_24547__$1 = state_24547;
var statearr_24550_24597 = state_24547__$1;
(statearr_24550_24597[(2)] = null);

(statearr_24550_24597[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (1))){
var state_24547__$1 = state_24547;
var statearr_24551_24598 = state_24547__$1;
(statearr_24551_24598[(2)] = null);

(statearr_24551_24598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (24))){
var inst_24526 = (state_24547[(7)]);
var inst_24535 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24526);
var state_24547__$1 = state_24547;
var statearr_24552_24599 = state_24547__$1;
(statearr_24552_24599[(2)] = inst_24535);

(statearr_24552_24599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (4))){
var inst_24478 = (state_24547[(8)]);
var inst_24478__$1 = (state_24547[(2)]);
var inst_24479 = (inst_24478__$1 == null);
var state_24547__$1 = (function (){var statearr_24553 = state_24547;
(statearr_24553[(8)] = inst_24478__$1);

return statearr_24553;
})();
if(cljs.core.truth_(inst_24479)){
var statearr_24554_24600 = state_24547__$1;
(statearr_24554_24600[(1)] = (5));

} else {
var statearr_24555_24601 = state_24547__$1;
(statearr_24555_24601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (15))){
var inst_24520 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24556_24602 = state_24547__$1;
(statearr_24556_24602[(2)] = inst_24520);

(statearr_24556_24602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (21))){
var inst_24540 = (state_24547[(2)]);
var state_24547__$1 = (function (){var statearr_24557 = state_24547;
(statearr_24557[(9)] = inst_24540);

return statearr_24557;
})();
var statearr_24558_24603 = state_24547__$1;
(statearr_24558_24603[(2)] = null);

(statearr_24558_24603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (13))){
var inst_24502 = (state_24547[(10)]);
var inst_24504 = cljs.core.chunked_seq_QMARK_.call(null,inst_24502);
var state_24547__$1 = state_24547;
if(inst_24504){
var statearr_24559_24604 = state_24547__$1;
(statearr_24559_24604[(1)] = (16));

} else {
var statearr_24560_24605 = state_24547__$1;
(statearr_24560_24605[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (22))){
var inst_24532 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
if(cljs.core.truth_(inst_24532)){
var statearr_24561_24606 = state_24547__$1;
(statearr_24561_24606[(1)] = (23));

} else {
var statearr_24562_24607 = state_24547__$1;
(statearr_24562_24607[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (6))){
var inst_24528 = (state_24547[(11)]);
var inst_24478 = (state_24547[(8)]);
var inst_24526 = (state_24547[(7)]);
var inst_24526__$1 = topic_fn.call(null,inst_24478);
var inst_24527 = cljs.core.deref.call(null,mults);
var inst_24528__$1 = cljs.core.get.call(null,inst_24527,inst_24526__$1);
var state_24547__$1 = (function (){var statearr_24563 = state_24547;
(statearr_24563[(11)] = inst_24528__$1);

(statearr_24563[(7)] = inst_24526__$1);

return statearr_24563;
})();
if(cljs.core.truth_(inst_24528__$1)){
var statearr_24564_24608 = state_24547__$1;
(statearr_24564_24608[(1)] = (19));

} else {
var statearr_24565_24609 = state_24547__$1;
(statearr_24565_24609[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (25))){
var inst_24537 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24566_24610 = state_24547__$1;
(statearr_24566_24610[(2)] = inst_24537);

(statearr_24566_24610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (17))){
var inst_24502 = (state_24547[(10)]);
var inst_24511 = cljs.core.first.call(null,inst_24502);
var inst_24512 = cljs.core.async.muxch_STAR_.call(null,inst_24511);
var inst_24513 = cljs.core.async.close_BANG_.call(null,inst_24512);
var inst_24514 = cljs.core.next.call(null,inst_24502);
var inst_24488 = inst_24514;
var inst_24489 = null;
var inst_24490 = (0);
var inst_24491 = (0);
var state_24547__$1 = (function (){var statearr_24567 = state_24547;
(statearr_24567[(12)] = inst_24491);

(statearr_24567[(13)] = inst_24490);

(statearr_24567[(14)] = inst_24489);

(statearr_24567[(15)] = inst_24488);

(statearr_24567[(16)] = inst_24513);

return statearr_24567;
})();
var statearr_24568_24611 = state_24547__$1;
(statearr_24568_24611[(2)] = null);

(statearr_24568_24611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (3))){
var inst_24545 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24547__$1,inst_24545);
} else {
if((state_val_24548 === (12))){
var inst_24522 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24569_24612 = state_24547__$1;
(statearr_24569_24612[(2)] = inst_24522);

(statearr_24569_24612[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (2))){
var state_24547__$1 = state_24547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24547__$1,(4),ch);
} else {
if((state_val_24548 === (23))){
var state_24547__$1 = state_24547;
var statearr_24570_24613 = state_24547__$1;
(statearr_24570_24613[(2)] = null);

(statearr_24570_24613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (19))){
var inst_24528 = (state_24547[(11)]);
var inst_24478 = (state_24547[(8)]);
var inst_24530 = cljs.core.async.muxch_STAR_.call(null,inst_24528);
var state_24547__$1 = state_24547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24547__$1,(22),inst_24530,inst_24478);
} else {
if((state_val_24548 === (11))){
var inst_24502 = (state_24547[(10)]);
var inst_24488 = (state_24547[(15)]);
var inst_24502__$1 = cljs.core.seq.call(null,inst_24488);
var state_24547__$1 = (function (){var statearr_24571 = state_24547;
(statearr_24571[(10)] = inst_24502__$1);

return statearr_24571;
})();
if(inst_24502__$1){
var statearr_24572_24614 = state_24547__$1;
(statearr_24572_24614[(1)] = (13));

} else {
var statearr_24573_24615 = state_24547__$1;
(statearr_24573_24615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (9))){
var inst_24524 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24574_24616 = state_24547__$1;
(statearr_24574_24616[(2)] = inst_24524);

(statearr_24574_24616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (5))){
var inst_24485 = cljs.core.deref.call(null,mults);
var inst_24486 = cljs.core.vals.call(null,inst_24485);
var inst_24487 = cljs.core.seq.call(null,inst_24486);
var inst_24488 = inst_24487;
var inst_24489 = null;
var inst_24490 = (0);
var inst_24491 = (0);
var state_24547__$1 = (function (){var statearr_24575 = state_24547;
(statearr_24575[(12)] = inst_24491);

(statearr_24575[(13)] = inst_24490);

(statearr_24575[(14)] = inst_24489);

(statearr_24575[(15)] = inst_24488);

return statearr_24575;
})();
var statearr_24576_24617 = state_24547__$1;
(statearr_24576_24617[(2)] = null);

(statearr_24576_24617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (14))){
var state_24547__$1 = state_24547;
var statearr_24580_24618 = state_24547__$1;
(statearr_24580_24618[(2)] = null);

(statearr_24580_24618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (16))){
var inst_24502 = (state_24547[(10)]);
var inst_24506 = cljs.core.chunk_first.call(null,inst_24502);
var inst_24507 = cljs.core.chunk_rest.call(null,inst_24502);
var inst_24508 = cljs.core.count.call(null,inst_24506);
var inst_24488 = inst_24507;
var inst_24489 = inst_24506;
var inst_24490 = inst_24508;
var inst_24491 = (0);
var state_24547__$1 = (function (){var statearr_24581 = state_24547;
(statearr_24581[(12)] = inst_24491);

(statearr_24581[(13)] = inst_24490);

(statearr_24581[(14)] = inst_24489);

(statearr_24581[(15)] = inst_24488);

return statearr_24581;
})();
var statearr_24582_24619 = state_24547__$1;
(statearr_24582_24619[(2)] = null);

(statearr_24582_24619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (10))){
var inst_24491 = (state_24547[(12)]);
var inst_24490 = (state_24547[(13)]);
var inst_24489 = (state_24547[(14)]);
var inst_24488 = (state_24547[(15)]);
var inst_24496 = cljs.core._nth.call(null,inst_24489,inst_24491);
var inst_24497 = cljs.core.async.muxch_STAR_.call(null,inst_24496);
var inst_24498 = cljs.core.async.close_BANG_.call(null,inst_24497);
var inst_24499 = (inst_24491 + (1));
var tmp24577 = inst_24490;
var tmp24578 = inst_24489;
var tmp24579 = inst_24488;
var inst_24488__$1 = tmp24579;
var inst_24489__$1 = tmp24578;
var inst_24490__$1 = tmp24577;
var inst_24491__$1 = inst_24499;
var state_24547__$1 = (function (){var statearr_24583 = state_24547;
(statearr_24583[(17)] = inst_24498);

(statearr_24583[(12)] = inst_24491__$1);

(statearr_24583[(13)] = inst_24490__$1);

(statearr_24583[(14)] = inst_24489__$1);

(statearr_24583[(15)] = inst_24488__$1);

return statearr_24583;
})();
var statearr_24584_24620 = state_24547__$1;
(statearr_24584_24620[(2)] = null);

(statearr_24584_24620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (18))){
var inst_24517 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24585_24621 = state_24547__$1;
(statearr_24585_24621[(2)] = inst_24517);

(statearr_24585_24621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (8))){
var inst_24491 = (state_24547[(12)]);
var inst_24490 = (state_24547[(13)]);
var inst_24493 = (inst_24491 < inst_24490);
var inst_24494 = inst_24493;
var state_24547__$1 = state_24547;
if(cljs.core.truth_(inst_24494)){
var statearr_24586_24622 = state_24547__$1;
(statearr_24586_24622[(1)] = (10));

} else {
var statearr_24587_24623 = state_24547__$1;
(statearr_24587_24623[(1)] = (11));

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
});})(c__6508__auto___24595,mults,ensure_mult,p))
;
return ((function (switch__6493__auto__,c__6508__auto___24595,mults,ensure_mult,p){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_24591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24591[(0)] = state_machine__6494__auto__);

(statearr_24591[(1)] = (1));

return statearr_24591;
});
var state_machine__6494__auto____1 = (function (state_24547){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_24547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e24592){if((e24592 instanceof Object)){
var ex__6497__auto__ = e24592;
var statearr_24593_24624 = state_24547;
(statearr_24593_24624[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24625 = state_24547;
state_24547 = G__24625;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_24547){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_24547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___24595,mults,ensure_mult,p))
})();
var state__6510__auto__ = (function (){var statearr_24594 = f__6509__auto__.call(null);
(statearr_24594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___24595);

return statearr_24594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___24595,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6508__auto___24762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___24762,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___24762,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24732){
var state_val_24733 = (state_24732[(1)]);
if((state_val_24733 === (7))){
var state_24732__$1 = state_24732;
var statearr_24734_24763 = state_24732__$1;
(statearr_24734_24763[(2)] = null);

(statearr_24734_24763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (1))){
var state_24732__$1 = state_24732;
var statearr_24735_24764 = state_24732__$1;
(statearr_24735_24764[(2)] = null);

(statearr_24735_24764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (4))){
var inst_24696 = (state_24732[(7)]);
var inst_24698 = (inst_24696 < cnt);
var state_24732__$1 = state_24732;
if(cljs.core.truth_(inst_24698)){
var statearr_24736_24765 = state_24732__$1;
(statearr_24736_24765[(1)] = (6));

} else {
var statearr_24737_24766 = state_24732__$1;
(statearr_24737_24766[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (15))){
var inst_24728 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
var statearr_24738_24767 = state_24732__$1;
(statearr_24738_24767[(2)] = inst_24728);

(statearr_24738_24767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (13))){
var inst_24721 = cljs.core.async.close_BANG_.call(null,out);
var state_24732__$1 = state_24732;
var statearr_24739_24768 = state_24732__$1;
(statearr_24739_24768[(2)] = inst_24721);

(statearr_24739_24768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (6))){
var state_24732__$1 = state_24732;
var statearr_24740_24769 = state_24732__$1;
(statearr_24740_24769[(2)] = null);

(statearr_24740_24769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (3))){
var inst_24730 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24732__$1,inst_24730);
} else {
if((state_val_24733 === (12))){
var inst_24718 = (state_24732[(8)]);
var inst_24718__$1 = (state_24732[(2)]);
var inst_24719 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24718__$1);
var state_24732__$1 = (function (){var statearr_24741 = state_24732;
(statearr_24741[(8)] = inst_24718__$1);

return statearr_24741;
})();
if(cljs.core.truth_(inst_24719)){
var statearr_24742_24770 = state_24732__$1;
(statearr_24742_24770[(1)] = (13));

} else {
var statearr_24743_24771 = state_24732__$1;
(statearr_24743_24771[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (2))){
var inst_24695 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24696 = (0);
var state_24732__$1 = (function (){var statearr_24744 = state_24732;
(statearr_24744[(7)] = inst_24696);

(statearr_24744[(9)] = inst_24695);

return statearr_24744;
})();
var statearr_24745_24772 = state_24732__$1;
(statearr_24745_24772[(2)] = null);

(statearr_24745_24772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (11))){
var inst_24696 = (state_24732[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24732,(10),Object,null,(9));
var inst_24705 = chs__$1.call(null,inst_24696);
var inst_24706 = done.call(null,inst_24696);
var inst_24707 = cljs.core.async.take_BANG_.call(null,inst_24705,inst_24706);
var state_24732__$1 = state_24732;
var statearr_24746_24773 = state_24732__$1;
(statearr_24746_24773[(2)] = inst_24707);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24732__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (9))){
var inst_24696 = (state_24732[(7)]);
var inst_24709 = (state_24732[(2)]);
var inst_24710 = (inst_24696 + (1));
var inst_24696__$1 = inst_24710;
var state_24732__$1 = (function (){var statearr_24747 = state_24732;
(statearr_24747[(7)] = inst_24696__$1);

(statearr_24747[(10)] = inst_24709);

return statearr_24747;
})();
var statearr_24748_24774 = state_24732__$1;
(statearr_24748_24774[(2)] = null);

(statearr_24748_24774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (5))){
var inst_24716 = (state_24732[(2)]);
var state_24732__$1 = (function (){var statearr_24749 = state_24732;
(statearr_24749[(11)] = inst_24716);

return statearr_24749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24732__$1,(12),dchan);
} else {
if((state_val_24733 === (14))){
var inst_24718 = (state_24732[(8)]);
var inst_24723 = cljs.core.apply.call(null,f,inst_24718);
var state_24732__$1 = state_24732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24732__$1,(16),out,inst_24723);
} else {
if((state_val_24733 === (16))){
var inst_24725 = (state_24732[(2)]);
var state_24732__$1 = (function (){var statearr_24750 = state_24732;
(statearr_24750[(12)] = inst_24725);

return statearr_24750;
})();
var statearr_24751_24775 = state_24732__$1;
(statearr_24751_24775[(2)] = null);

(statearr_24751_24775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (10))){
var inst_24700 = (state_24732[(2)]);
var inst_24701 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24732__$1 = (function (){var statearr_24752 = state_24732;
(statearr_24752[(13)] = inst_24700);

return statearr_24752;
})();
var statearr_24753_24776 = state_24732__$1;
(statearr_24753_24776[(2)] = inst_24701);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24732__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24733 === (8))){
var inst_24714 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
var statearr_24754_24777 = state_24732__$1;
(statearr_24754_24777[(2)] = inst_24714);

(statearr_24754_24777[(1)] = (5));


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
});})(c__6508__auto___24762,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6493__auto__,c__6508__auto___24762,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_24758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24758[(0)] = state_machine__6494__auto__);

(statearr_24758[(1)] = (1));

return statearr_24758;
});
var state_machine__6494__auto____1 = (function (state_24732){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_24732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e24759){if((e24759 instanceof Object)){
var ex__6497__auto__ = e24759;
var statearr_24760_24778 = state_24732;
(statearr_24760_24778[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24779 = state_24732;
state_24732 = G__24779;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_24732){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_24732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___24762,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6510__auto__ = (function (){var statearr_24761 = f__6509__auto__.call(null);
(statearr_24761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___24762);

return statearr_24761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___24762,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6508__auto___24887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___24887,out){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___24887,out){
return (function (state_24863){
var state_val_24864 = (state_24863[(1)]);
if((state_val_24864 === (7))){
var inst_24842 = (state_24863[(7)]);
var inst_24843 = (state_24863[(8)]);
var inst_24842__$1 = (state_24863[(2)]);
var inst_24843__$1 = cljs.core.nth.call(null,inst_24842__$1,(0),null);
var inst_24844 = cljs.core.nth.call(null,inst_24842__$1,(1),null);
var inst_24845 = (inst_24843__$1 == null);
var state_24863__$1 = (function (){var statearr_24865 = state_24863;
(statearr_24865[(7)] = inst_24842__$1);

(statearr_24865[(9)] = inst_24844);

(statearr_24865[(8)] = inst_24843__$1);

return statearr_24865;
})();
if(cljs.core.truth_(inst_24845)){
var statearr_24866_24888 = state_24863__$1;
(statearr_24866_24888[(1)] = (8));

} else {
var statearr_24867_24889 = state_24863__$1;
(statearr_24867_24889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (1))){
var inst_24834 = cljs.core.vec.call(null,chs);
var inst_24835 = inst_24834;
var state_24863__$1 = (function (){var statearr_24868 = state_24863;
(statearr_24868[(10)] = inst_24835);

return statearr_24868;
})();
var statearr_24869_24890 = state_24863__$1;
(statearr_24869_24890[(2)] = null);

(statearr_24869_24890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (4))){
var inst_24835 = (state_24863[(10)]);
var state_24863__$1 = state_24863;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24863__$1,(7),inst_24835);
} else {
if((state_val_24864 === (6))){
var inst_24859 = (state_24863[(2)]);
var state_24863__$1 = state_24863;
var statearr_24870_24891 = state_24863__$1;
(statearr_24870_24891[(2)] = inst_24859);

(statearr_24870_24891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (3))){
var inst_24861 = (state_24863[(2)]);
var state_24863__$1 = state_24863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24863__$1,inst_24861);
} else {
if((state_val_24864 === (2))){
var inst_24835 = (state_24863[(10)]);
var inst_24837 = cljs.core.count.call(null,inst_24835);
var inst_24838 = (inst_24837 > (0));
var state_24863__$1 = state_24863;
if(cljs.core.truth_(inst_24838)){
var statearr_24872_24892 = state_24863__$1;
(statearr_24872_24892[(1)] = (4));

} else {
var statearr_24873_24893 = state_24863__$1;
(statearr_24873_24893[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (11))){
var inst_24835 = (state_24863[(10)]);
var inst_24852 = (state_24863[(2)]);
var tmp24871 = inst_24835;
var inst_24835__$1 = tmp24871;
var state_24863__$1 = (function (){var statearr_24874 = state_24863;
(statearr_24874[(10)] = inst_24835__$1);

(statearr_24874[(11)] = inst_24852);

return statearr_24874;
})();
var statearr_24875_24894 = state_24863__$1;
(statearr_24875_24894[(2)] = null);

(statearr_24875_24894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (9))){
var inst_24843 = (state_24863[(8)]);
var state_24863__$1 = state_24863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24863__$1,(11),out,inst_24843);
} else {
if((state_val_24864 === (5))){
var inst_24857 = cljs.core.async.close_BANG_.call(null,out);
var state_24863__$1 = state_24863;
var statearr_24876_24895 = state_24863__$1;
(statearr_24876_24895[(2)] = inst_24857);

(statearr_24876_24895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (10))){
var inst_24855 = (state_24863[(2)]);
var state_24863__$1 = state_24863;
var statearr_24877_24896 = state_24863__$1;
(statearr_24877_24896[(2)] = inst_24855);

(statearr_24877_24896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (8))){
var inst_24842 = (state_24863[(7)]);
var inst_24835 = (state_24863[(10)]);
var inst_24844 = (state_24863[(9)]);
var inst_24843 = (state_24863[(8)]);
var inst_24847 = (function (){var c = inst_24844;
var v = inst_24843;
var vec__24840 = inst_24842;
var cs = inst_24835;
return ((function (c,v,vec__24840,cs,inst_24842,inst_24835,inst_24844,inst_24843,state_val_24864,c__6508__auto___24887,out){
return (function (p1__24780_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24780_SHARP_);
});
;})(c,v,vec__24840,cs,inst_24842,inst_24835,inst_24844,inst_24843,state_val_24864,c__6508__auto___24887,out))
})();
var inst_24848 = cljs.core.filterv.call(null,inst_24847,inst_24835);
var inst_24835__$1 = inst_24848;
var state_24863__$1 = (function (){var statearr_24878 = state_24863;
(statearr_24878[(10)] = inst_24835__$1);

return statearr_24878;
})();
var statearr_24879_24897 = state_24863__$1;
(statearr_24879_24897[(2)] = null);

(statearr_24879_24897[(1)] = (2));


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
});})(c__6508__auto___24887,out))
;
return ((function (switch__6493__auto__,c__6508__auto___24887,out){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_24883 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24883[(0)] = state_machine__6494__auto__);

(statearr_24883[(1)] = (1));

return statearr_24883;
});
var state_machine__6494__auto____1 = (function (state_24863){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_24863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e24884){if((e24884 instanceof Object)){
var ex__6497__auto__ = e24884;
var statearr_24885_24898 = state_24863;
(statearr_24885_24898[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24899 = state_24863;
state_24863 = G__24899;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_24863){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_24863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___24887,out))
})();
var state__6510__auto__ = (function (){var statearr_24886 = f__6509__auto__.call(null);
(statearr_24886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___24887);

return statearr_24886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___24887,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6508__auto___24992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___24992,out){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___24992,out){
return (function (state_24969){
var state_val_24970 = (state_24969[(1)]);
if((state_val_24970 === (7))){
var inst_24951 = (state_24969[(7)]);
var inst_24951__$1 = (state_24969[(2)]);
var inst_24952 = (inst_24951__$1 == null);
var inst_24953 = cljs.core.not.call(null,inst_24952);
var state_24969__$1 = (function (){var statearr_24971 = state_24969;
(statearr_24971[(7)] = inst_24951__$1);

return statearr_24971;
})();
if(inst_24953){
var statearr_24972_24993 = state_24969__$1;
(statearr_24972_24993[(1)] = (8));

} else {
var statearr_24973_24994 = state_24969__$1;
(statearr_24973_24994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24970 === (1))){
var inst_24946 = (0);
var state_24969__$1 = (function (){var statearr_24974 = state_24969;
(statearr_24974[(8)] = inst_24946);

return statearr_24974;
})();
var statearr_24975_24995 = state_24969__$1;
(statearr_24975_24995[(2)] = null);

(statearr_24975_24995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24970 === (4))){
var state_24969__$1 = state_24969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24969__$1,(7),ch);
} else {
if((state_val_24970 === (6))){
var inst_24964 = (state_24969[(2)]);
var state_24969__$1 = state_24969;
var statearr_24976_24996 = state_24969__$1;
(statearr_24976_24996[(2)] = inst_24964);

(statearr_24976_24996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24970 === (3))){
var inst_24966 = (state_24969[(2)]);
var inst_24967 = cljs.core.async.close_BANG_.call(null,out);
var state_24969__$1 = (function (){var statearr_24977 = state_24969;
(statearr_24977[(9)] = inst_24966);

return statearr_24977;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24969__$1,inst_24967);
} else {
if((state_val_24970 === (2))){
var inst_24946 = (state_24969[(8)]);
var inst_24948 = (inst_24946 < n);
var state_24969__$1 = state_24969;
if(cljs.core.truth_(inst_24948)){
var statearr_24978_24997 = state_24969__$1;
(statearr_24978_24997[(1)] = (4));

} else {
var statearr_24979_24998 = state_24969__$1;
(statearr_24979_24998[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24970 === (11))){
var inst_24946 = (state_24969[(8)]);
var inst_24956 = (state_24969[(2)]);
var inst_24957 = (inst_24946 + (1));
var inst_24946__$1 = inst_24957;
var state_24969__$1 = (function (){var statearr_24980 = state_24969;
(statearr_24980[(8)] = inst_24946__$1);

(statearr_24980[(10)] = inst_24956);

return statearr_24980;
})();
var statearr_24981_24999 = state_24969__$1;
(statearr_24981_24999[(2)] = null);

(statearr_24981_24999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24970 === (9))){
var state_24969__$1 = state_24969;
var statearr_24982_25000 = state_24969__$1;
(statearr_24982_25000[(2)] = null);

(statearr_24982_25000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24970 === (5))){
var state_24969__$1 = state_24969;
var statearr_24983_25001 = state_24969__$1;
(statearr_24983_25001[(2)] = null);

(statearr_24983_25001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24970 === (10))){
var inst_24961 = (state_24969[(2)]);
var state_24969__$1 = state_24969;
var statearr_24984_25002 = state_24969__$1;
(statearr_24984_25002[(2)] = inst_24961);

(statearr_24984_25002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24970 === (8))){
var inst_24951 = (state_24969[(7)]);
var state_24969__$1 = state_24969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24969__$1,(11),out,inst_24951);
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
});})(c__6508__auto___24992,out))
;
return ((function (switch__6493__auto__,c__6508__auto___24992,out){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_24988 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24988[(0)] = state_machine__6494__auto__);

(statearr_24988[(1)] = (1));

return statearr_24988;
});
var state_machine__6494__auto____1 = (function (state_24969){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_24969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e24989){if((e24989 instanceof Object)){
var ex__6497__auto__ = e24989;
var statearr_24990_25003 = state_24969;
(statearr_24990_25003[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25004 = state_24969;
state_24969 = G__25004;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_24969){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_24969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___24992,out))
})();
var state__6510__auto__ = (function (){var statearr_24991 = f__6509__auto__.call(null);
(statearr_24991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___24992);

return statearr_24991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___24992,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t25012 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25012 = (function (ch,f,map_LT_,meta25013){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25013 = meta25013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25012.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25012.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t25012.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25012.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t25015 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25015 = (function (fn1,_,meta25013,map_LT_,f,ch,meta25016){
this.fn1 = fn1;
this._ = _;
this.meta25013 = meta25013;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25016 = meta25016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25015.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t25015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25005_SHARP_){
return f1.call(null,(((p1__25005_SHARP_ == null))?null:self__.f.call(null,p1__25005_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t25015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25017){
var self__ = this;
var _25017__$1 = this;
return self__.meta25016;
});})(___$1))
;

cljs.core.async.t25015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25017,meta25016__$1){
var self__ = this;
var _25017__$1 = this;
return (new cljs.core.async.t25015(self__.fn1,self__._,self__.meta25013,self__.map_LT_,self__.f,self__.ch,meta25016__$1));
});})(___$1))
;

cljs.core.async.t25015.cljs$lang$type = true;

cljs.core.async.t25015.cljs$lang$ctorStr = "cljs.core.async/t25015";

cljs.core.async.t25015.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25015");
});})(___$1))
;

cljs.core.async.__GT_t25015 = ((function (___$1){
return (function __GT_t25015(fn1__$1,___$2,meta25013__$1,map_LT___$1,f__$1,ch__$1,meta25016){
return (new cljs.core.async.t25015(fn1__$1,___$2,meta25013__$1,map_LT___$1,f__$1,ch__$1,meta25016));
});})(___$1))
;

}

return (new cljs.core.async.t25015(fn1,___$1,self__.meta25013,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/resources/public/js/out-dev/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3616__auto__ = ret;
if(cljs.core.truth_(and__3616__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3616__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t25012.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25012.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25012.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25014){
var self__ = this;
var _25014__$1 = this;
return self__.meta25013;
});

cljs.core.async.t25012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25014,meta25013__$1){
var self__ = this;
var _25014__$1 = this;
return (new cljs.core.async.t25012(self__.ch,self__.f,self__.map_LT_,meta25013__$1));
});

cljs.core.async.t25012.cljs$lang$type = true;

cljs.core.async.t25012.cljs$lang$ctorStr = "cljs.core.async/t25012";

cljs.core.async.t25012.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25012");
});

cljs.core.async.__GT_t25012 = (function __GT_t25012(ch__$1,f__$1,map_LT___$1,meta25013){
return (new cljs.core.async.t25012(ch__$1,f__$1,map_LT___$1,meta25013));
});

}

return (new cljs.core.async.t25012(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/resources/public/js/out-dev/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t25021 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25021 = (function (ch,f,map_GT_,meta25022){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25022 = meta25022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25021.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25021.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t25021.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25021.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t25021.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25021.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25023){
var self__ = this;
var _25023__$1 = this;
return self__.meta25022;
});

cljs.core.async.t25021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25023,meta25022__$1){
var self__ = this;
var _25023__$1 = this;
return (new cljs.core.async.t25021(self__.ch,self__.f,self__.map_GT_,meta25022__$1));
});

cljs.core.async.t25021.cljs$lang$type = true;

cljs.core.async.t25021.cljs$lang$ctorStr = "cljs.core.async/t25021";

cljs.core.async.t25021.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25021");
});

cljs.core.async.__GT_t25021 = (function __GT_t25021(ch__$1,f__$1,map_GT___$1,meta25022){
return (new cljs.core.async.t25021(ch__$1,f__$1,map_GT___$1,meta25022));
});

}

return (new cljs.core.async.t25021(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/resources/public/js/out-dev/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t25027 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25027 = (function (ch,p,filter_GT_,meta25028){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25028 = meta25028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25027.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t25027.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t25027.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t25027.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t25027.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t25027.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t25027.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t25027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25029){
var self__ = this;
var _25029__$1 = this;
return self__.meta25028;
});

cljs.core.async.t25027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25029,meta25028__$1){
var self__ = this;
var _25029__$1 = this;
return (new cljs.core.async.t25027(self__.ch,self__.p,self__.filter_GT_,meta25028__$1));
});

cljs.core.async.t25027.cljs$lang$type = true;

cljs.core.async.t25027.cljs$lang$ctorStr = "cljs.core.async/t25027";

cljs.core.async.t25027.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25027");
});

cljs.core.async.__GT_t25027 = (function __GT_t25027(ch__$1,p__$1,filter_GT___$1,meta25028){
return (new cljs.core.async.t25027(ch__$1,p__$1,filter_GT___$1,meta25028));
});

}

return (new cljs.core.async.t25027(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/resources/public/js/out-dev/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6508__auto___25112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___25112,out){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___25112,out){
return (function (state_25091){
var state_val_25092 = (state_25091[(1)]);
if((state_val_25092 === (7))){
var inst_25087 = (state_25091[(2)]);
var state_25091__$1 = state_25091;
var statearr_25093_25113 = state_25091__$1;
(statearr_25093_25113[(2)] = inst_25087);

(statearr_25093_25113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25092 === (1))){
var state_25091__$1 = state_25091;
var statearr_25094_25114 = state_25091__$1;
(statearr_25094_25114[(2)] = null);

(statearr_25094_25114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25092 === (4))){
var inst_25073 = (state_25091[(7)]);
var inst_25073__$1 = (state_25091[(2)]);
var inst_25074 = (inst_25073__$1 == null);
var state_25091__$1 = (function (){var statearr_25095 = state_25091;
(statearr_25095[(7)] = inst_25073__$1);

return statearr_25095;
})();
if(cljs.core.truth_(inst_25074)){
var statearr_25096_25115 = state_25091__$1;
(statearr_25096_25115[(1)] = (5));

} else {
var statearr_25097_25116 = state_25091__$1;
(statearr_25097_25116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25092 === (6))){
var inst_25073 = (state_25091[(7)]);
var inst_25078 = p.call(null,inst_25073);
var state_25091__$1 = state_25091;
if(cljs.core.truth_(inst_25078)){
var statearr_25098_25117 = state_25091__$1;
(statearr_25098_25117[(1)] = (8));

} else {
var statearr_25099_25118 = state_25091__$1;
(statearr_25099_25118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25092 === (3))){
var inst_25089 = (state_25091[(2)]);
var state_25091__$1 = state_25091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25091__$1,inst_25089);
} else {
if((state_val_25092 === (2))){
var state_25091__$1 = state_25091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25091__$1,(4),ch);
} else {
if((state_val_25092 === (11))){
var inst_25081 = (state_25091[(2)]);
var state_25091__$1 = state_25091;
var statearr_25100_25119 = state_25091__$1;
(statearr_25100_25119[(2)] = inst_25081);

(statearr_25100_25119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25092 === (9))){
var state_25091__$1 = state_25091;
var statearr_25101_25120 = state_25091__$1;
(statearr_25101_25120[(2)] = null);

(statearr_25101_25120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25092 === (5))){
var inst_25076 = cljs.core.async.close_BANG_.call(null,out);
var state_25091__$1 = state_25091;
var statearr_25102_25121 = state_25091__$1;
(statearr_25102_25121[(2)] = inst_25076);

(statearr_25102_25121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25092 === (10))){
var inst_25084 = (state_25091[(2)]);
var state_25091__$1 = (function (){var statearr_25103 = state_25091;
(statearr_25103[(8)] = inst_25084);

return statearr_25103;
})();
var statearr_25104_25122 = state_25091__$1;
(statearr_25104_25122[(2)] = null);

(statearr_25104_25122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25092 === (8))){
var inst_25073 = (state_25091[(7)]);
var state_25091__$1 = state_25091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25091__$1,(11),out,inst_25073);
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
});})(c__6508__auto___25112,out))
;
return ((function (switch__6493__auto__,c__6508__auto___25112,out){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_25108 = [null,null,null,null,null,null,null,null,null];
(statearr_25108[(0)] = state_machine__6494__auto__);

(statearr_25108[(1)] = (1));

return statearr_25108;
});
var state_machine__6494__auto____1 = (function (state_25091){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_25091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e25109){if((e25109 instanceof Object)){
var ex__6497__auto__ = e25109;
var statearr_25110_25123 = state_25091;
(statearr_25110_25123[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25124 = state_25091;
state_25091 = G__25124;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_25091){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_25091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___25112,out))
})();
var state__6510__auto__ = (function (){var statearr_25111 = f__6509__auto__.call(null);
(statearr_25111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___25112);

return statearr_25111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___25112,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__){
return (function (state_25290){
var state_val_25291 = (state_25290[(1)]);
if((state_val_25291 === (7))){
var inst_25286 = (state_25290[(2)]);
var state_25290__$1 = state_25290;
var statearr_25292_25333 = state_25290__$1;
(statearr_25292_25333[(2)] = inst_25286);

(statearr_25292_25333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (20))){
var inst_25256 = (state_25290[(7)]);
var inst_25267 = (state_25290[(2)]);
var inst_25268 = cljs.core.next.call(null,inst_25256);
var inst_25242 = inst_25268;
var inst_25243 = null;
var inst_25244 = (0);
var inst_25245 = (0);
var state_25290__$1 = (function (){var statearr_25293 = state_25290;
(statearr_25293[(8)] = inst_25242);

(statearr_25293[(9)] = inst_25243);

(statearr_25293[(10)] = inst_25244);

(statearr_25293[(11)] = inst_25245);

(statearr_25293[(12)] = inst_25267);

return statearr_25293;
})();
var statearr_25294_25334 = state_25290__$1;
(statearr_25294_25334[(2)] = null);

(statearr_25294_25334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (1))){
var state_25290__$1 = state_25290;
var statearr_25295_25335 = state_25290__$1;
(statearr_25295_25335[(2)] = null);

(statearr_25295_25335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (4))){
var inst_25231 = (state_25290[(13)]);
var inst_25231__$1 = (state_25290[(2)]);
var inst_25232 = (inst_25231__$1 == null);
var state_25290__$1 = (function (){var statearr_25296 = state_25290;
(statearr_25296[(13)] = inst_25231__$1);

return statearr_25296;
})();
if(cljs.core.truth_(inst_25232)){
var statearr_25297_25336 = state_25290__$1;
(statearr_25297_25336[(1)] = (5));

} else {
var statearr_25298_25337 = state_25290__$1;
(statearr_25298_25337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (15))){
var state_25290__$1 = state_25290;
var statearr_25302_25338 = state_25290__$1;
(statearr_25302_25338[(2)] = null);

(statearr_25302_25338[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (21))){
var state_25290__$1 = state_25290;
var statearr_25303_25339 = state_25290__$1;
(statearr_25303_25339[(2)] = null);

(statearr_25303_25339[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (13))){
var inst_25242 = (state_25290[(8)]);
var inst_25243 = (state_25290[(9)]);
var inst_25244 = (state_25290[(10)]);
var inst_25245 = (state_25290[(11)]);
var inst_25252 = (state_25290[(2)]);
var inst_25253 = (inst_25245 + (1));
var tmp25299 = inst_25242;
var tmp25300 = inst_25243;
var tmp25301 = inst_25244;
var inst_25242__$1 = tmp25299;
var inst_25243__$1 = tmp25300;
var inst_25244__$1 = tmp25301;
var inst_25245__$1 = inst_25253;
var state_25290__$1 = (function (){var statearr_25304 = state_25290;
(statearr_25304[(8)] = inst_25242__$1);

(statearr_25304[(9)] = inst_25243__$1);

(statearr_25304[(10)] = inst_25244__$1);

(statearr_25304[(11)] = inst_25245__$1);

(statearr_25304[(14)] = inst_25252);

return statearr_25304;
})();
var statearr_25305_25340 = state_25290__$1;
(statearr_25305_25340[(2)] = null);

(statearr_25305_25340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (22))){
var state_25290__$1 = state_25290;
var statearr_25306_25341 = state_25290__$1;
(statearr_25306_25341[(2)] = null);

(statearr_25306_25341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (6))){
var inst_25231 = (state_25290[(13)]);
var inst_25240 = f.call(null,inst_25231);
var inst_25241 = cljs.core.seq.call(null,inst_25240);
var inst_25242 = inst_25241;
var inst_25243 = null;
var inst_25244 = (0);
var inst_25245 = (0);
var state_25290__$1 = (function (){var statearr_25307 = state_25290;
(statearr_25307[(8)] = inst_25242);

(statearr_25307[(9)] = inst_25243);

(statearr_25307[(10)] = inst_25244);

(statearr_25307[(11)] = inst_25245);

return statearr_25307;
})();
var statearr_25308_25342 = state_25290__$1;
(statearr_25308_25342[(2)] = null);

(statearr_25308_25342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (17))){
var inst_25256 = (state_25290[(7)]);
var inst_25260 = cljs.core.chunk_first.call(null,inst_25256);
var inst_25261 = cljs.core.chunk_rest.call(null,inst_25256);
var inst_25262 = cljs.core.count.call(null,inst_25260);
var inst_25242 = inst_25261;
var inst_25243 = inst_25260;
var inst_25244 = inst_25262;
var inst_25245 = (0);
var state_25290__$1 = (function (){var statearr_25309 = state_25290;
(statearr_25309[(8)] = inst_25242);

(statearr_25309[(9)] = inst_25243);

(statearr_25309[(10)] = inst_25244);

(statearr_25309[(11)] = inst_25245);

return statearr_25309;
})();
var statearr_25310_25343 = state_25290__$1;
(statearr_25310_25343[(2)] = null);

(statearr_25310_25343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (3))){
var inst_25288 = (state_25290[(2)]);
var state_25290__$1 = state_25290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25290__$1,inst_25288);
} else {
if((state_val_25291 === (12))){
var inst_25276 = (state_25290[(2)]);
var state_25290__$1 = state_25290;
var statearr_25311_25344 = state_25290__$1;
(statearr_25311_25344[(2)] = inst_25276);

(statearr_25311_25344[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (2))){
var state_25290__$1 = state_25290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25290__$1,(4),in$);
} else {
if((state_val_25291 === (23))){
var inst_25284 = (state_25290[(2)]);
var state_25290__$1 = state_25290;
var statearr_25312_25345 = state_25290__$1;
(statearr_25312_25345[(2)] = inst_25284);

(statearr_25312_25345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (19))){
var inst_25271 = (state_25290[(2)]);
var state_25290__$1 = state_25290;
var statearr_25313_25346 = state_25290__$1;
(statearr_25313_25346[(2)] = inst_25271);

(statearr_25313_25346[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (11))){
var inst_25242 = (state_25290[(8)]);
var inst_25256 = (state_25290[(7)]);
var inst_25256__$1 = cljs.core.seq.call(null,inst_25242);
var state_25290__$1 = (function (){var statearr_25314 = state_25290;
(statearr_25314[(7)] = inst_25256__$1);

return statearr_25314;
})();
if(inst_25256__$1){
var statearr_25315_25347 = state_25290__$1;
(statearr_25315_25347[(1)] = (14));

} else {
var statearr_25316_25348 = state_25290__$1;
(statearr_25316_25348[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (9))){
var inst_25278 = (state_25290[(2)]);
var inst_25279 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25290__$1 = (function (){var statearr_25317 = state_25290;
(statearr_25317[(15)] = inst_25278);

return statearr_25317;
})();
if(cljs.core.truth_(inst_25279)){
var statearr_25318_25349 = state_25290__$1;
(statearr_25318_25349[(1)] = (21));

} else {
var statearr_25319_25350 = state_25290__$1;
(statearr_25319_25350[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (5))){
var inst_25234 = cljs.core.async.close_BANG_.call(null,out);
var state_25290__$1 = state_25290;
var statearr_25320_25351 = state_25290__$1;
(statearr_25320_25351[(2)] = inst_25234);

(statearr_25320_25351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (14))){
var inst_25256 = (state_25290[(7)]);
var inst_25258 = cljs.core.chunked_seq_QMARK_.call(null,inst_25256);
var state_25290__$1 = state_25290;
if(inst_25258){
var statearr_25321_25352 = state_25290__$1;
(statearr_25321_25352[(1)] = (17));

} else {
var statearr_25322_25353 = state_25290__$1;
(statearr_25322_25353[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (16))){
var inst_25274 = (state_25290[(2)]);
var state_25290__$1 = state_25290;
var statearr_25323_25354 = state_25290__$1;
(statearr_25323_25354[(2)] = inst_25274);

(statearr_25323_25354[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25291 === (10))){
var inst_25243 = (state_25290[(9)]);
var inst_25245 = (state_25290[(11)]);
var inst_25250 = cljs.core._nth.call(null,inst_25243,inst_25245);
var state_25290__$1 = state_25290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25290__$1,(13),out,inst_25250);
} else {
if((state_val_25291 === (18))){
var inst_25256 = (state_25290[(7)]);
var inst_25265 = cljs.core.first.call(null,inst_25256);
var state_25290__$1 = state_25290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25290__$1,(20),out,inst_25265);
} else {
if((state_val_25291 === (8))){
var inst_25244 = (state_25290[(10)]);
var inst_25245 = (state_25290[(11)]);
var inst_25247 = (inst_25245 < inst_25244);
var inst_25248 = inst_25247;
var state_25290__$1 = state_25290;
if(cljs.core.truth_(inst_25248)){
var statearr_25324_25355 = state_25290__$1;
(statearr_25324_25355[(1)] = (10));

} else {
var statearr_25325_25356 = state_25290__$1;
(statearr_25325_25356[(1)] = (11));

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
});})(c__6508__auto__))
;
return ((function (switch__6493__auto__,c__6508__auto__){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_25329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25329[(0)] = state_machine__6494__auto__);

(statearr_25329[(1)] = (1));

return statearr_25329;
});
var state_machine__6494__auto____1 = (function (state_25290){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_25290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e25330){if((e25330 instanceof Object)){
var ex__6497__auto__ = e25330;
var statearr_25331_25357 = state_25290;
(statearr_25331_25357[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25358 = state_25290;
state_25290 = G__25358;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_25290){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_25290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__))
})();
var state__6510__auto__ = (function (){var statearr_25332 = f__6509__auto__.call(null);
(statearr_25332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_25332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__))
);

return c__6508__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6508__auto___25455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___25455,out){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___25455,out){
return (function (state_25430){
var state_val_25431 = (state_25430[(1)]);
if((state_val_25431 === (7))){
var inst_25425 = (state_25430[(2)]);
var state_25430__$1 = state_25430;
var statearr_25432_25456 = state_25430__$1;
(statearr_25432_25456[(2)] = inst_25425);

(statearr_25432_25456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (1))){
var inst_25407 = null;
var state_25430__$1 = (function (){var statearr_25433 = state_25430;
(statearr_25433[(7)] = inst_25407);

return statearr_25433;
})();
var statearr_25434_25457 = state_25430__$1;
(statearr_25434_25457[(2)] = null);

(statearr_25434_25457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (4))){
var inst_25410 = (state_25430[(8)]);
var inst_25410__$1 = (state_25430[(2)]);
var inst_25411 = (inst_25410__$1 == null);
var inst_25412 = cljs.core.not.call(null,inst_25411);
var state_25430__$1 = (function (){var statearr_25435 = state_25430;
(statearr_25435[(8)] = inst_25410__$1);

return statearr_25435;
})();
if(inst_25412){
var statearr_25436_25458 = state_25430__$1;
(statearr_25436_25458[(1)] = (5));

} else {
var statearr_25437_25459 = state_25430__$1;
(statearr_25437_25459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (6))){
var state_25430__$1 = state_25430;
var statearr_25438_25460 = state_25430__$1;
(statearr_25438_25460[(2)] = null);

(statearr_25438_25460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (3))){
var inst_25427 = (state_25430[(2)]);
var inst_25428 = cljs.core.async.close_BANG_.call(null,out);
var state_25430__$1 = (function (){var statearr_25439 = state_25430;
(statearr_25439[(9)] = inst_25427);

return statearr_25439;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25430__$1,inst_25428);
} else {
if((state_val_25431 === (2))){
var state_25430__$1 = state_25430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25430__$1,(4),ch);
} else {
if((state_val_25431 === (11))){
var inst_25410 = (state_25430[(8)]);
var inst_25419 = (state_25430[(2)]);
var inst_25407 = inst_25410;
var state_25430__$1 = (function (){var statearr_25440 = state_25430;
(statearr_25440[(10)] = inst_25419);

(statearr_25440[(7)] = inst_25407);

return statearr_25440;
})();
var statearr_25441_25461 = state_25430__$1;
(statearr_25441_25461[(2)] = null);

(statearr_25441_25461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (9))){
var inst_25410 = (state_25430[(8)]);
var state_25430__$1 = state_25430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25430__$1,(11),out,inst_25410);
} else {
if((state_val_25431 === (5))){
var inst_25410 = (state_25430[(8)]);
var inst_25407 = (state_25430[(7)]);
var inst_25414 = cljs.core._EQ_.call(null,inst_25410,inst_25407);
var state_25430__$1 = state_25430;
if(inst_25414){
var statearr_25443_25462 = state_25430__$1;
(statearr_25443_25462[(1)] = (8));

} else {
var statearr_25444_25463 = state_25430__$1;
(statearr_25444_25463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (10))){
var inst_25422 = (state_25430[(2)]);
var state_25430__$1 = state_25430;
var statearr_25445_25464 = state_25430__$1;
(statearr_25445_25464[(2)] = inst_25422);

(statearr_25445_25464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (8))){
var inst_25407 = (state_25430[(7)]);
var tmp25442 = inst_25407;
var inst_25407__$1 = tmp25442;
var state_25430__$1 = (function (){var statearr_25446 = state_25430;
(statearr_25446[(7)] = inst_25407__$1);

return statearr_25446;
})();
var statearr_25447_25465 = state_25430__$1;
(statearr_25447_25465[(2)] = null);

(statearr_25447_25465[(1)] = (2));


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
});})(c__6508__auto___25455,out))
;
return ((function (switch__6493__auto__,c__6508__auto___25455,out){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_25451 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25451[(0)] = state_machine__6494__auto__);

(statearr_25451[(1)] = (1));

return statearr_25451;
});
var state_machine__6494__auto____1 = (function (state_25430){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_25430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e25452){if((e25452 instanceof Object)){
var ex__6497__auto__ = e25452;
var statearr_25453_25466 = state_25430;
(statearr_25453_25466[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25467 = state_25430;
state_25430 = G__25467;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_25430){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_25430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___25455,out))
})();
var state__6510__auto__ = (function (){var statearr_25454 = f__6509__auto__.call(null);
(statearr_25454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___25455);

return statearr_25454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___25455,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6508__auto___25602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___25602,out){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___25602,out){
return (function (state_25572){
var state_val_25573 = (state_25572[(1)]);
if((state_val_25573 === (7))){
var inst_25568 = (state_25572[(2)]);
var state_25572__$1 = state_25572;
var statearr_25574_25603 = state_25572__$1;
(statearr_25574_25603[(2)] = inst_25568);

(statearr_25574_25603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (1))){
var inst_25535 = (new Array(n));
var inst_25536 = inst_25535;
var inst_25537 = (0);
var state_25572__$1 = (function (){var statearr_25575 = state_25572;
(statearr_25575[(7)] = inst_25537);

(statearr_25575[(8)] = inst_25536);

return statearr_25575;
})();
var statearr_25576_25604 = state_25572__$1;
(statearr_25576_25604[(2)] = null);

(statearr_25576_25604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (4))){
var inst_25540 = (state_25572[(9)]);
var inst_25540__$1 = (state_25572[(2)]);
var inst_25541 = (inst_25540__$1 == null);
var inst_25542 = cljs.core.not.call(null,inst_25541);
var state_25572__$1 = (function (){var statearr_25577 = state_25572;
(statearr_25577[(9)] = inst_25540__$1);

return statearr_25577;
})();
if(inst_25542){
var statearr_25578_25605 = state_25572__$1;
(statearr_25578_25605[(1)] = (5));

} else {
var statearr_25579_25606 = state_25572__$1;
(statearr_25579_25606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (15))){
var inst_25562 = (state_25572[(2)]);
var state_25572__$1 = state_25572;
var statearr_25580_25607 = state_25572__$1;
(statearr_25580_25607[(2)] = inst_25562);

(statearr_25580_25607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (13))){
var state_25572__$1 = state_25572;
var statearr_25581_25608 = state_25572__$1;
(statearr_25581_25608[(2)] = null);

(statearr_25581_25608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (6))){
var inst_25537 = (state_25572[(7)]);
var inst_25558 = (inst_25537 > (0));
var state_25572__$1 = state_25572;
if(cljs.core.truth_(inst_25558)){
var statearr_25582_25609 = state_25572__$1;
(statearr_25582_25609[(1)] = (12));

} else {
var statearr_25583_25610 = state_25572__$1;
(statearr_25583_25610[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (3))){
var inst_25570 = (state_25572[(2)]);
var state_25572__$1 = state_25572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25572__$1,inst_25570);
} else {
if((state_val_25573 === (12))){
var inst_25536 = (state_25572[(8)]);
var inst_25560 = cljs.core.vec.call(null,inst_25536);
var state_25572__$1 = state_25572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25572__$1,(15),out,inst_25560);
} else {
if((state_val_25573 === (2))){
var state_25572__$1 = state_25572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25572__$1,(4),ch);
} else {
if((state_val_25573 === (11))){
var inst_25552 = (state_25572[(2)]);
var inst_25553 = (new Array(n));
var inst_25536 = inst_25553;
var inst_25537 = (0);
var state_25572__$1 = (function (){var statearr_25584 = state_25572;
(statearr_25584[(7)] = inst_25537);

(statearr_25584[(8)] = inst_25536);

(statearr_25584[(10)] = inst_25552);

return statearr_25584;
})();
var statearr_25585_25611 = state_25572__$1;
(statearr_25585_25611[(2)] = null);

(statearr_25585_25611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (9))){
var inst_25536 = (state_25572[(8)]);
var inst_25550 = cljs.core.vec.call(null,inst_25536);
var state_25572__$1 = state_25572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25572__$1,(11),out,inst_25550);
} else {
if((state_val_25573 === (5))){
var inst_25537 = (state_25572[(7)]);
var inst_25545 = (state_25572[(11)]);
var inst_25540 = (state_25572[(9)]);
var inst_25536 = (state_25572[(8)]);
var inst_25544 = (inst_25536[inst_25537] = inst_25540);
var inst_25545__$1 = (inst_25537 + (1));
var inst_25546 = (inst_25545__$1 < n);
var state_25572__$1 = (function (){var statearr_25586 = state_25572;
(statearr_25586[(12)] = inst_25544);

(statearr_25586[(11)] = inst_25545__$1);

return statearr_25586;
})();
if(cljs.core.truth_(inst_25546)){
var statearr_25587_25612 = state_25572__$1;
(statearr_25587_25612[(1)] = (8));

} else {
var statearr_25588_25613 = state_25572__$1;
(statearr_25588_25613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (14))){
var inst_25565 = (state_25572[(2)]);
var inst_25566 = cljs.core.async.close_BANG_.call(null,out);
var state_25572__$1 = (function (){var statearr_25590 = state_25572;
(statearr_25590[(13)] = inst_25565);

return statearr_25590;
})();
var statearr_25591_25614 = state_25572__$1;
(statearr_25591_25614[(2)] = inst_25566);

(statearr_25591_25614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (10))){
var inst_25556 = (state_25572[(2)]);
var state_25572__$1 = state_25572;
var statearr_25592_25615 = state_25572__$1;
(statearr_25592_25615[(2)] = inst_25556);

(statearr_25592_25615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25573 === (8))){
var inst_25545 = (state_25572[(11)]);
var inst_25536 = (state_25572[(8)]);
var tmp25589 = inst_25536;
var inst_25536__$1 = tmp25589;
var inst_25537 = inst_25545;
var state_25572__$1 = (function (){var statearr_25593 = state_25572;
(statearr_25593[(7)] = inst_25537);

(statearr_25593[(8)] = inst_25536__$1);

return statearr_25593;
})();
var statearr_25594_25616 = state_25572__$1;
(statearr_25594_25616[(2)] = null);

(statearr_25594_25616[(1)] = (2));


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
});})(c__6508__auto___25602,out))
;
return ((function (switch__6493__auto__,c__6508__auto___25602,out){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_25598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25598[(0)] = state_machine__6494__auto__);

(statearr_25598[(1)] = (1));

return statearr_25598;
});
var state_machine__6494__auto____1 = (function (state_25572){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_25572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e25599){if((e25599 instanceof Object)){
var ex__6497__auto__ = e25599;
var statearr_25600_25617 = state_25572;
(statearr_25600_25617[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25618 = state_25572;
state_25572 = G__25618;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_25572){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_25572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___25602,out))
})();
var state__6510__auto__ = (function (){var statearr_25601 = f__6509__auto__.call(null);
(statearr_25601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___25602);

return statearr_25601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___25602,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6508__auto___25761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___25761,out){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___25761,out){
return (function (state_25731){
var state_val_25732 = (state_25731[(1)]);
if((state_val_25732 === (7))){
var inst_25727 = (state_25731[(2)]);
var state_25731__$1 = state_25731;
var statearr_25733_25762 = state_25731__$1;
(statearr_25733_25762[(2)] = inst_25727);

(statearr_25733_25762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25732 === (1))){
var inst_25690 = [];
var inst_25691 = inst_25690;
var inst_25692 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25731__$1 = (function (){var statearr_25734 = state_25731;
(statearr_25734[(7)] = inst_25692);

(statearr_25734[(8)] = inst_25691);

return statearr_25734;
})();
var statearr_25735_25763 = state_25731__$1;
(statearr_25735_25763[(2)] = null);

(statearr_25735_25763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25732 === (4))){
var inst_25695 = (state_25731[(9)]);
var inst_25695__$1 = (state_25731[(2)]);
var inst_25696 = (inst_25695__$1 == null);
var inst_25697 = cljs.core.not.call(null,inst_25696);
var state_25731__$1 = (function (){var statearr_25736 = state_25731;
(statearr_25736[(9)] = inst_25695__$1);

return statearr_25736;
})();
if(inst_25697){
var statearr_25737_25764 = state_25731__$1;
(statearr_25737_25764[(1)] = (5));

} else {
var statearr_25738_25765 = state_25731__$1;
(statearr_25738_25765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25732 === (15))){
var inst_25721 = (state_25731[(2)]);
var state_25731__$1 = state_25731;
var statearr_25739_25766 = state_25731__$1;
(statearr_25739_25766[(2)] = inst_25721);

(statearr_25739_25766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25732 === (13))){
var state_25731__$1 = state_25731;
var statearr_25740_25767 = state_25731__$1;
(statearr_25740_25767[(2)] = null);

(statearr_25740_25767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25732 === (6))){
var inst_25691 = (state_25731[(8)]);
var inst_25716 = inst_25691.length;
var inst_25717 = (inst_25716 > (0));
var state_25731__$1 = state_25731;
if(cljs.core.truth_(inst_25717)){
var statearr_25741_25768 = state_25731__$1;
(statearr_25741_25768[(1)] = (12));

} else {
var statearr_25742_25769 = state_25731__$1;
(statearr_25742_25769[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25732 === (3))){
var inst_25729 = (state_25731[(2)]);
var state_25731__$1 = state_25731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25731__$1,inst_25729);
} else {
if((state_val_25732 === (12))){
var inst_25691 = (state_25731[(8)]);
var inst_25719 = cljs.core.vec.call(null,inst_25691);
var state_25731__$1 = state_25731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25731__$1,(15),out,inst_25719);
} else {
if((state_val_25732 === (2))){
var state_25731__$1 = state_25731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25731__$1,(4),ch);
} else {
if((state_val_25732 === (11))){
var inst_25699 = (state_25731[(10)]);
var inst_25695 = (state_25731[(9)]);
var inst_25709 = (state_25731[(2)]);
var inst_25710 = [];
var inst_25711 = inst_25710.push(inst_25695);
var inst_25691 = inst_25710;
var inst_25692 = inst_25699;
var state_25731__$1 = (function (){var statearr_25743 = state_25731;
(statearr_25743[(7)] = inst_25692);

(statearr_25743[(8)] = inst_25691);

(statearr_25743[(11)] = inst_25711);

(statearr_25743[(12)] = inst_25709);

return statearr_25743;
})();
var statearr_25744_25770 = state_25731__$1;
(statearr_25744_25770[(2)] = null);

(statearr_25744_25770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25732 === (9))){
var inst_25691 = (state_25731[(8)]);
var inst_25707 = cljs.core.vec.call(null,inst_25691);
var state_25731__$1 = state_25731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25731__$1,(11),out,inst_25707);
} else {
if((state_val_25732 === (5))){
var inst_25692 = (state_25731[(7)]);
var inst_25699 = (state_25731[(10)]);
var inst_25695 = (state_25731[(9)]);
var inst_25699__$1 = f.call(null,inst_25695);
var inst_25700 = cljs.core._EQ_.call(null,inst_25699__$1,inst_25692);
var inst_25701 = cljs.core.keyword_identical_QMARK_.call(null,inst_25692,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25702 = (inst_25700) || (inst_25701);
var state_25731__$1 = (function (){var statearr_25745 = state_25731;
(statearr_25745[(10)] = inst_25699__$1);

return statearr_25745;
})();
if(cljs.core.truth_(inst_25702)){
var statearr_25746_25771 = state_25731__$1;
(statearr_25746_25771[(1)] = (8));

} else {
var statearr_25747_25772 = state_25731__$1;
(statearr_25747_25772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25732 === (14))){
var inst_25724 = (state_25731[(2)]);
var inst_25725 = cljs.core.async.close_BANG_.call(null,out);
var state_25731__$1 = (function (){var statearr_25749 = state_25731;
(statearr_25749[(13)] = inst_25724);

return statearr_25749;
})();
var statearr_25750_25773 = state_25731__$1;
(statearr_25750_25773[(2)] = inst_25725);

(statearr_25750_25773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25732 === (10))){
var inst_25714 = (state_25731[(2)]);
var state_25731__$1 = state_25731;
var statearr_25751_25774 = state_25731__$1;
(statearr_25751_25774[(2)] = inst_25714);

(statearr_25751_25774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25732 === (8))){
var inst_25691 = (state_25731[(8)]);
var inst_25699 = (state_25731[(10)]);
var inst_25695 = (state_25731[(9)]);
var inst_25704 = inst_25691.push(inst_25695);
var tmp25748 = inst_25691;
var inst_25691__$1 = tmp25748;
var inst_25692 = inst_25699;
var state_25731__$1 = (function (){var statearr_25752 = state_25731;
(statearr_25752[(7)] = inst_25692);

(statearr_25752[(8)] = inst_25691__$1);

(statearr_25752[(14)] = inst_25704);

return statearr_25752;
})();
var statearr_25753_25775 = state_25731__$1;
(statearr_25753_25775[(2)] = null);

(statearr_25753_25775[(1)] = (2));


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
});})(c__6508__auto___25761,out))
;
return ((function (switch__6493__auto__,c__6508__auto___25761,out){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_25757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25757[(0)] = state_machine__6494__auto__);

(statearr_25757[(1)] = (1));

return statearr_25757;
});
var state_machine__6494__auto____1 = (function (state_25731){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_25731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e25758){if((e25758 instanceof Object)){
var ex__6497__auto__ = e25758;
var statearr_25759_25776 = state_25731;
(statearr_25759_25776[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25777 = state_25731;
state_25731 = G__25777;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_25731){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_25731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___25761,out))
})();
var state__6510__auto__ = (function (){var statearr_25760 = f__6509__auto__.call(null);
(statearr_25760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___25761);

return statearr_25760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___25761,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
