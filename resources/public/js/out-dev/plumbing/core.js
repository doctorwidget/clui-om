// Compiled by ClojureScript 0.0-2496
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__26925__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__26925 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__26925__delegate.call(this,m,k,f,x1,x2,xs);};
G__26925.cljs$lang$maxFixedArity = 5;
G__26925.cljs$lang$applyTo = (function (arglist__26926){
var m = cljs.core.first(arglist__26926);
arglist__26926 = cljs.core.next(arglist__26926);
var k = cljs.core.first(arglist__26926);
arglist__26926 = cljs.core.next(arglist__26926);
var f = cljs.core.first(arglist__26926);
arglist__26926 = cljs.core.next(arglist__26926);
var x1 = cljs.core.first(arglist__26926);
arglist__26926 = cljs.core.next(arglist__26926);
var x2 = cljs.core.first(arglist__26926);
var xs = cljs.core.rest(arglist__26926);
return G__26925__delegate(m,k,f,x1,x2,xs);
});
G__26925.cljs$core$IFn$_invoke$arity$variadic = G__26925__delegate;
return G__26925;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__12768__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__26935_26941 = cljs.core.seq.call(null,m);
var chunk__26936_26942 = null;
var count__26937_26943 = (0);
var i__26938_26944 = (0);
while(true){
if((i__26938_26944 < count__26937_26943)){
var vec__26939_26945 = cljs.core._nth.call(null,chunk__26936_26942,i__26938_26944);
var k_26946 = cljs.core.nth.call(null,vec__26939_26945,(0),null);
var v_26947 = cljs.core.nth.call(null,vec__26939_26945,(1),null);
var m26934_26948 = cljs.core.deref.call(null,m_atom__12768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__12768__auto__,cljs.core.assoc_BANG_.call(null,m26934_26948,k_26946,f.call(null,v_26947)));

var G__26949 = seq__26935_26941;
var G__26950 = chunk__26936_26942;
var G__26951 = count__26937_26943;
var G__26952 = (i__26938_26944 + (1));
seq__26935_26941 = G__26949;
chunk__26936_26942 = G__26950;
count__26937_26943 = G__26951;
i__26938_26944 = G__26952;
continue;
} else {
var temp__4126__auto___26953 = cljs.core.seq.call(null,seq__26935_26941);
if(temp__4126__auto___26953){
var seq__26935_26954__$1 = temp__4126__auto___26953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26935_26954__$1)){
var c__4415__auto___26955 = cljs.core.chunk_first.call(null,seq__26935_26954__$1);
var G__26956 = cljs.core.chunk_rest.call(null,seq__26935_26954__$1);
var G__26957 = c__4415__auto___26955;
var G__26958 = cljs.core.count.call(null,c__4415__auto___26955);
var G__26959 = (0);
seq__26935_26941 = G__26956;
chunk__26936_26942 = G__26957;
count__26937_26943 = G__26958;
i__26938_26944 = G__26959;
continue;
} else {
var vec__26940_26960 = cljs.core.first.call(null,seq__26935_26954__$1);
var k_26961 = cljs.core.nth.call(null,vec__26940_26960,(0),null);
var v_26962 = cljs.core.nth.call(null,vec__26940_26960,(1),null);
var m26934_26963 = cljs.core.deref.call(null,m_atom__12768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__12768__auto__,cljs.core.assoc_BANG_.call(null,m26934_26963,k_26961,f.call(null,v_26962)));

var G__26964 = cljs.core.next.call(null,seq__26935_26954__$1);
var G__26965 = null;
var G__26966 = (0);
var G__26967 = (0);
seq__26935_26941 = G__26964;
chunk__26936_26942 = G__26965;
count__26937_26943 = G__26966;
i__26938_26944 = G__26967;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__12768__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__12768__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__26976_26982 = cljs.core.seq.call(null,m);
var chunk__26977_26983 = null;
var count__26978_26984 = (0);
var i__26979_26985 = (0);
while(true){
if((i__26979_26985 < count__26978_26984)){
var vec__26980_26986 = cljs.core._nth.call(null,chunk__26977_26983,i__26979_26985);
var k_26987 = cljs.core.nth.call(null,vec__26980_26986,(0),null);
var v_26988 = cljs.core.nth.call(null,vec__26980_26986,(1),null);
var m26975_26989 = cljs.core.deref.call(null,m_atom__12768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__12768__auto__,cljs.core.assoc_BANG_.call(null,m26975_26989,f.call(null,k_26987),v_26988));

var G__26990 = seq__26976_26982;
var G__26991 = chunk__26977_26983;
var G__26992 = count__26978_26984;
var G__26993 = (i__26979_26985 + (1));
seq__26976_26982 = G__26990;
chunk__26977_26983 = G__26991;
count__26978_26984 = G__26992;
i__26979_26985 = G__26993;
continue;
} else {
var temp__4126__auto___26994 = cljs.core.seq.call(null,seq__26976_26982);
if(temp__4126__auto___26994){
var seq__26976_26995__$1 = temp__4126__auto___26994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26976_26995__$1)){
var c__4415__auto___26996 = cljs.core.chunk_first.call(null,seq__26976_26995__$1);
var G__26997 = cljs.core.chunk_rest.call(null,seq__26976_26995__$1);
var G__26998 = c__4415__auto___26996;
var G__26999 = cljs.core.count.call(null,c__4415__auto___26996);
var G__27000 = (0);
seq__26976_26982 = G__26997;
chunk__26977_26983 = G__26998;
count__26978_26984 = G__26999;
i__26979_26985 = G__27000;
continue;
} else {
var vec__26981_27001 = cljs.core.first.call(null,seq__26976_26995__$1);
var k_27002 = cljs.core.nth.call(null,vec__26981_27001,(0),null);
var v_27003 = cljs.core.nth.call(null,vec__26981_27001,(1),null);
var m26975_27004 = cljs.core.deref.call(null,m_atom__12768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__12768__auto__,cljs.core.assoc_BANG_.call(null,m26975_27004,f.call(null,k_27002),v_27003));

var G__27005 = cljs.core.next.call(null,seq__26976_26995__$1);
var G__27006 = null;
var G__27007 = (0);
var G__27008 = (0);
seq__26976_26982 = G__27005;
chunk__26977_26983 = G__27006;
count__26978_26984 = G__27007;
i__26979_26985 = G__27008;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__12768__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__12768__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__27015_27019 = cljs.core.seq.call(null,ks);
var chunk__27016_27020 = null;
var count__27017_27021 = (0);
var i__27018_27022 = (0);
while(true){
if((i__27018_27022 < count__27017_27021)){
var k_27023 = cljs.core._nth.call(null,chunk__27016_27020,i__27018_27022);
var m27014_27024 = cljs.core.deref.call(null,m_atom__12768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__12768__auto__,cljs.core.assoc_BANG_.call(null,m27014_27024,k_27023,f.call(null,k_27023)));

var G__27025 = seq__27015_27019;
var G__27026 = chunk__27016_27020;
var G__27027 = count__27017_27021;
var G__27028 = (i__27018_27022 + (1));
seq__27015_27019 = G__27025;
chunk__27016_27020 = G__27026;
count__27017_27021 = G__27027;
i__27018_27022 = G__27028;
continue;
} else {
var temp__4126__auto___27029 = cljs.core.seq.call(null,seq__27015_27019);
if(temp__4126__auto___27029){
var seq__27015_27030__$1 = temp__4126__auto___27029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27015_27030__$1)){
var c__4415__auto___27031 = cljs.core.chunk_first.call(null,seq__27015_27030__$1);
var G__27032 = cljs.core.chunk_rest.call(null,seq__27015_27030__$1);
var G__27033 = c__4415__auto___27031;
var G__27034 = cljs.core.count.call(null,c__4415__auto___27031);
var G__27035 = (0);
seq__27015_27019 = G__27032;
chunk__27016_27020 = G__27033;
count__27017_27021 = G__27034;
i__27018_27022 = G__27035;
continue;
} else {
var k_27036 = cljs.core.first.call(null,seq__27015_27030__$1);
var m27014_27037 = cljs.core.deref.call(null,m_atom__12768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__12768__auto__,cljs.core.assoc_BANG_.call(null,m27014_27037,k_27036,f.call(null,k_27036)));

var G__27038 = cljs.core.next.call(null,seq__27015_27030__$1);
var G__27039 = null;
var G__27040 = (0);
var G__27041 = (0);
seq__27015_27019 = G__27038;
chunk__27016_27020 = G__27039;
count__27017_27021 = G__27040;
i__27018_27022 = G__27041;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__12768__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__12768__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__27048_27052 = cljs.core.seq.call(null,vs);
var chunk__27049_27053 = null;
var count__27050_27054 = (0);
var i__27051_27055 = (0);
while(true){
if((i__27051_27055 < count__27050_27054)){
var v_27056 = cljs.core._nth.call(null,chunk__27049_27053,i__27051_27055);
var m27047_27057 = cljs.core.deref.call(null,m_atom__12768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__12768__auto__,cljs.core.assoc_BANG_.call(null,m27047_27057,f.call(null,v_27056),v_27056));

var G__27058 = seq__27048_27052;
var G__27059 = chunk__27049_27053;
var G__27060 = count__27050_27054;
var G__27061 = (i__27051_27055 + (1));
seq__27048_27052 = G__27058;
chunk__27049_27053 = G__27059;
count__27050_27054 = G__27060;
i__27051_27055 = G__27061;
continue;
} else {
var temp__4126__auto___27062 = cljs.core.seq.call(null,seq__27048_27052);
if(temp__4126__auto___27062){
var seq__27048_27063__$1 = temp__4126__auto___27062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27048_27063__$1)){
var c__4415__auto___27064 = cljs.core.chunk_first.call(null,seq__27048_27063__$1);
var G__27065 = cljs.core.chunk_rest.call(null,seq__27048_27063__$1);
var G__27066 = c__4415__auto___27064;
var G__27067 = cljs.core.count.call(null,c__4415__auto___27064);
var G__27068 = (0);
seq__27048_27052 = G__27065;
chunk__27049_27053 = G__27066;
count__27050_27054 = G__27067;
i__27051_27055 = G__27068;
continue;
} else {
var v_27069 = cljs.core.first.call(null,seq__27048_27063__$1);
var m27047_27070 = cljs.core.deref.call(null,m_atom__12768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__12768__auto__,cljs.core.assoc_BANG_.call(null,m27047_27070,f.call(null,v_27069),v_27069));

var G__27071 = cljs.core.next.call(null,seq__27048_27063__$1);
var G__27072 = null;
var G__27073 = (0);
var G__27074 = (0);
seq__27048_27052 = G__27071;
chunk__27049_27053 = G__27072;
count__27050_27054 = G__27073;
i__27051_27055 = G__27074;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__12768__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__27075){
var vec__27077 = p__27075;
var k = cljs.core.nth.call(null,vec__27077,(0),null);
var ks = cljs.core.nthnext.call(null,vec__27077,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__3616__auto__ = ks;
if(and__3616__auto__){
return dissoc_in.call(null,m.call(null,k),ks);
} else {
return and__3616__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var res = temp__4124__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__12768__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__27086_27092 = cljs.core.seq.call(null,x);
var chunk__27087_27093 = null;
var count__27088_27094 = (0);
var i__27089_27095 = (0);
while(true){
if((i__27089_27095 < count__27088_27094)){
var vec__27090_27096 = cljs.core._nth.call(null,chunk__27087_27093,i__27089_27095);
var k_27097 = cljs.core.nth.call(null,vec__27090_27096,(0),null);
var v_27098 = cljs.core.nth.call(null,vec__27090_27096,(1),null);
var m27085_27099 = cljs.core.deref.call(null,m_atom__12768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__12768__auto__,cljs.core.assoc_BANG_.call(null,m27085_27099,((typeof k_27097 === 'string')?cljs.core.keyword.call(null,k_27097):k_27097),keywordize_map.call(null,v_27098)));

var G__27100 = seq__27086_27092;
var G__27101 = chunk__27087_27093;
var G__27102 = count__27088_27094;
var G__27103 = (i__27089_27095 + (1));
seq__27086_27092 = G__27100;
chunk__27087_27093 = G__27101;
count__27088_27094 = G__27102;
i__27089_27095 = G__27103;
continue;
} else {
var temp__4126__auto___27104 = cljs.core.seq.call(null,seq__27086_27092);
if(temp__4126__auto___27104){
var seq__27086_27105__$1 = temp__4126__auto___27104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27086_27105__$1)){
var c__4415__auto___27106 = cljs.core.chunk_first.call(null,seq__27086_27105__$1);
var G__27107 = cljs.core.chunk_rest.call(null,seq__27086_27105__$1);
var G__27108 = c__4415__auto___27106;
var G__27109 = cljs.core.count.call(null,c__4415__auto___27106);
var G__27110 = (0);
seq__27086_27092 = G__27107;
chunk__27087_27093 = G__27108;
count__27088_27094 = G__27109;
i__27089_27095 = G__27110;
continue;
} else {
var vec__27091_27111 = cljs.core.first.call(null,seq__27086_27105__$1);
var k_27112 = cljs.core.nth.call(null,vec__27091_27111,(0),null);
var v_27113 = cljs.core.nth.call(null,vec__27091_27111,(1),null);
var m27085_27114 = cljs.core.deref.call(null,m_atom__12768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__12768__auto__,cljs.core.assoc_BANG_.call(null,m27085_27114,((typeof k_27112 === 'string')?cljs.core.keyword.call(null,k_27112):k_27112),keywordize_map.call(null,v_27113)));

var G__27115 = cljs.core.next.call(null,seq__27086_27105__$1);
var G__27116 = null;
var G__27117 = (0);
var G__27118 = (0);
seq__27086_27092 = G__27115;
chunk__27087_27093 = G__27116;
count__27088_27094 = G__27117;
i__27089_27095 = G__27118;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__12768__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,keywordize_map,x);
} else {
return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){
var temp__4124__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__12837__auto__ = temp__4124__auto__;
return cljs.core.val.call(null,pair__12837__auto__);
} else {
var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));
throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__27119 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__27120 = cljs.core.next.call(null,ks);
m = G__27119;
ks = G__27120;
continue;
} else {
return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__3628__auto__ = m;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4384__auto__ = (function iter__27129(s__27130){
return (new cljs.core.LazySeq(null,(function (){
var s__27130__$1 = s__27130;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27130__$1);
if(temp__4126__auto__){
var s__27130__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27130__$2)){
var c__4382__auto__ = cljs.core.chunk_first.call(null,s__27130__$2);
var size__4383__auto__ = cljs.core.count.call(null,c__4382__auto__);
var b__27132 = cljs.core.chunk_buffer.call(null,size__4383__auto__);
if((function (){var i__27131 = (0);
while(true){
if((i__27131 < size__4383__auto__)){
var vec__27135 = cljs.core._nth.call(null,c__4382__auto__,i__27131);
var k = cljs.core.nth.call(null,vec__27135,(0),null);
var v = cljs.core.nth.call(null,vec__27135,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__27132,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__27137 = (i__27131 + (1));
i__27131 = G__27137;
continue;
} else {
var G__27138 = (i__27131 + (1));
i__27131 = G__27138;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27132),iter__27129.call(null,cljs.core.chunk_rest.call(null,s__27130__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27132),null);
}
} else {
var vec__27136 = cljs.core.first.call(null,s__27130__$2);
var k = cljs.core.nth.call(null,vec__27136,(0),null);
var v = cljs.core.nth.call(null,vec__27136,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__27129.call(null,cljs.core.rest.call(null,s__27130__$2)));
} else {
var G__27139 = cljs.core.rest.call(null,s__27130__$2);
s__27130__$1 = G__27139;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__27140){
var m = cljs.core.first(arglist__27140);
var kvs = cljs.core.rest(arglist__27140);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__27141){
var m = cljs.core.first(arglist__27141);
arglist__27141 = cljs.core.next(arglist__27141);
var key_seq = cljs.core.first(arglist__27141);
arglist__27141 = cljs.core.next(arglist__27141);
var f = cljs.core.first(arglist__27141);
var args = cljs.core.rest(arglist__27141);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.next.call(null,s);
if(temp__4126__auto__){
var n = temp__4126__auto__;
return aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){
var temp__4126__auto__ = cljs.core.seq.call(null,xs);
if(temp__4126__auto__){
var xs__$1 = temp__4126__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__4384__auto__ = ((function (s){
return (function iter__27146(s__27147){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__27147__$1 = s__27147;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27147__$1);
if(temp__4126__auto__){
var s__27147__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27147__$2)){
var c__4382__auto__ = cljs.core.chunk_first.call(null,s__27147__$2);
var size__4383__auto__ = cljs.core.count.call(null,c__4382__auto__);
var b__27149 = cljs.core.chunk_buffer.call(null,size__4383__auto__);
if((function (){var i__27148 = (0);
while(true){
if((i__27148 < size__4383__auto__)){
var x = cljs.core._nth.call(null,c__4382__auto__,i__27148);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__27149,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__27150 = (i__27148 + (1));
i__27148 = G__27150;
continue;
} else {
var G__27151 = (i__27148 + (1));
i__27148 = G__27151;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27149),iter__27146.call(null,cljs.core.chunk_rest.call(null,s__27147__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27149),null);
}
} else {
var x = cljs.core.first.call(null,s__27147__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,iter__27146.call(null,cljs.core.rest.call(null,s__27147__$2)));
} else {
var G__27152 = cljs.core.rest.call(null,s__27147__$2);
s__27147__$1 = G__27152;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__4384__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__27153){
var colls = cljs.core.seq(arglist__27153);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});
var conj_when__3 = (function() { 
var G__27154__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__27155 = conj_when.call(null,coll,x);
var G__27156 = cljs.core.first.call(null,xs);
var G__27157 = cljs.core.next.call(null,xs);
coll = G__27155;
x = G__27156;
xs = G__27157;
continue;
} else {
return conj_when.call(null,coll,x);
}
break;
}
};
var G__27154 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__27154__delegate.call(this,coll,x,xs);};
G__27154.cljs$lang$maxFixedArity = 2;
G__27154.cljs$lang$applyTo = (function (arglist__27158){
var coll = cljs.core.first(arglist__27158);
arglist__27158 = cljs.core.next(arglist__27158);
var x = cljs.core.first(arglist__27158);
var xs = cljs.core.rest(arglist__27158);
return G__27154__delegate(coll,x,xs);
});
G__27154.cljs$core$IFn$_invoke$arity$variadic = G__27154__delegate;
return G__27154;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__27160__delegate = function (a,f,args){
return swap_pair_BANG_.call(null,a,(function (p1__27159_SHARP_){
return cljs.core.apply.call(null,f,p1__27159_SHARP_,args);
}));
};
var G__27160 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__27160__delegate.call(this,a,f,args);};
G__27160.cljs$lang$maxFixedArity = 2;
G__27160.cljs$lang$applyTo = (function (arglist__27161){
var a = cljs.core.first(arglist__27161);
arglist__27161 = cljs.core.next(arglist__27161);
var f = cljs.core.first(arglist__27161);
var args = cljs.core.rest(arglist__27161);
return G__27160__delegate(a,f,args);
});
G__27160.cljs$core$IFn$_invoke$arity$variadic = G__27160__delegate;
return G__27160;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){
return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__27162__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__27162 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__27162__delegate.call(this,f,arg,args);};
G__27162.cljs$lang$maxFixedArity = 2;
G__27162.cljs$lang$applyTo = (function (arglist__27163){
var f = cljs.core.first(arglist__27163);
arglist__27163 = cljs.core.next(arglist__27163);
var arg = cljs.core.first(arglist__27163);
var args = cljs.core.rest(arglist__27163);
return G__27162__delegate(f,arg,args);
});
G__27162.cljs$core$IFn$_invoke$arity$variadic = G__27162__delegate;
return G__27162;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;
