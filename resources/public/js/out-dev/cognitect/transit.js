// Compiled by ClojureScript 0.0-2496
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.enable_console_print_BANG_.call(null);
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__27870_27874 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__27871_27875 = null;
var count__27872_27876 = (0);
var i__27873_27877 = (0);
while(true){
if((i__27873_27877 < count__27872_27876)){
var k_27878 = cljs.core._nth.call(null,chunk__27871_27875,i__27873_27877);
var v_27879 = (b[k_27878]);
(a[k_27878] = v_27879);

var G__27880 = seq__27870_27874;
var G__27881 = chunk__27871_27875;
var G__27882 = count__27872_27876;
var G__27883 = (i__27873_27877 + (1));
seq__27870_27874 = G__27880;
chunk__27871_27875 = G__27881;
count__27872_27876 = G__27882;
i__27873_27877 = G__27883;
continue;
} else {
var temp__4126__auto___27884 = cljs.core.seq.call(null,seq__27870_27874);
if(temp__4126__auto___27884){
var seq__27870_27885__$1 = temp__4126__auto___27884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27870_27885__$1)){
var c__4415__auto___27886 = cljs.core.chunk_first.call(null,seq__27870_27885__$1);
var G__27887 = cljs.core.chunk_rest.call(null,seq__27870_27885__$1);
var G__27888 = c__4415__auto___27886;
var G__27889 = cljs.core.count.call(null,c__4415__auto___27886);
var G__27890 = (0);
seq__27870_27874 = G__27887;
chunk__27871_27875 = G__27888;
count__27872_27876 = G__27889;
i__27873_27877 = G__27890;
continue;
} else {
var k_27891 = cljs.core.first.call(null,seq__27870_27885__$1);
var v_27892 = (b[k_27891]);
(a[k_27891] = v_27892);

var G__27893 = cljs.core.next.call(null,seq__27870_27885__$1);
var G__27894 = null;
var G__27895 = (0);
var G__27896 = (0);
seq__27870_27874 = G__27893;
chunk__27871_27875 = G__27894;
count__27872_27876 = G__27895;
i__27873_27877 = G__27896;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": {"cmap": (function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__27897 = (i + (2));
var G__27898 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__27897;
ret = G__27898;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
}), "list": (function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}), "set": (function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}), ":": (function (v){
return cljs.core.keyword.call(null,v);
}), "$": (function (v){
return cljs.core.symbol.call(null,v);
})}},cljs.core.clj__GT_js.call(null,opts)));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27899_27903 = cljs.core.seq.call(null,v);
var chunk__27900_27904 = null;
var count__27901_27905 = (0);
var i__27902_27906 = (0);
while(true){
if((i__27902_27906 < count__27901_27905)){
var x_27907 = cljs.core._nth.call(null,chunk__27900_27904,i__27902_27906);
ret.push(x_27907);

var G__27908 = seq__27899_27903;
var G__27909 = chunk__27900_27904;
var G__27910 = count__27901_27905;
var G__27911 = (i__27902_27906 + (1));
seq__27899_27903 = G__27908;
chunk__27900_27904 = G__27909;
count__27901_27905 = G__27910;
i__27902_27906 = G__27911;
continue;
} else {
var temp__4126__auto___27912 = cljs.core.seq.call(null,seq__27899_27903);
if(temp__4126__auto___27912){
var seq__27899_27913__$1 = temp__4126__auto___27912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27899_27913__$1)){
var c__4415__auto___27914 = cljs.core.chunk_first.call(null,seq__27899_27913__$1);
var G__27915 = cljs.core.chunk_rest.call(null,seq__27899_27913__$1);
var G__27916 = c__4415__auto___27914;
var G__27917 = cljs.core.count.call(null,c__4415__auto___27914);
var G__27918 = (0);
seq__27899_27903 = G__27915;
chunk__27900_27904 = G__27916;
count__27901_27905 = G__27917;
i__27902_27906 = G__27918;
continue;
} else {
var x_27919 = cljs.core.first.call(null,seq__27899_27913__$1);
ret.push(x_27919);

var G__27920 = cljs.core.next.call(null,seq__27899_27913__$1);
var G__27921 = null;
var G__27922 = (0);
var G__27923 = (0);
seq__27899_27903 = G__27920;
chunk__27900_27904 = G__27921;
count__27901_27905 = G__27922;
i__27902_27906 = G__27923;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27924_27928 = cljs.core.seq.call(null,v);
var chunk__27925_27929 = null;
var count__27926_27930 = (0);
var i__27927_27931 = (0);
while(true){
if((i__27927_27931 < count__27926_27930)){
var x_27932 = cljs.core._nth.call(null,chunk__27925_27929,i__27927_27931);
ret.push(x_27932);

var G__27933 = seq__27924_27928;
var G__27934 = chunk__27925_27929;
var G__27935 = count__27926_27930;
var G__27936 = (i__27927_27931 + (1));
seq__27924_27928 = G__27933;
chunk__27925_27929 = G__27934;
count__27926_27930 = G__27935;
i__27927_27931 = G__27936;
continue;
} else {
var temp__4126__auto___27937 = cljs.core.seq.call(null,seq__27924_27928);
if(temp__4126__auto___27937){
var seq__27924_27938__$1 = temp__4126__auto___27937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27924_27938__$1)){
var c__4415__auto___27939 = cljs.core.chunk_first.call(null,seq__27924_27938__$1);
var G__27940 = cljs.core.chunk_rest.call(null,seq__27924_27938__$1);
var G__27941 = c__4415__auto___27939;
var G__27942 = cljs.core.count.call(null,c__4415__auto___27939);
var G__27943 = (0);
seq__27924_27928 = G__27940;
chunk__27925_27929 = G__27941;
count__27926_27930 = G__27942;
i__27927_27931 = G__27943;
continue;
} else {
var x_27944 = cljs.core.first.call(null,seq__27924_27938__$1);
ret.push(x_27944);

var G__27945 = cljs.core.next.call(null,seq__27924_27938__$1);
var G__27946 = null;
var G__27947 = (0);
var G__27948 = (0);
seq__27924_27928 = G__27945;
chunk__27925_27929 = G__27946;
count__27926_27930 = G__27947;
i__27927_27931 = G__27948;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27949_27953 = cljs.core.seq.call(null,v);
var chunk__27950_27954 = null;
var count__27951_27955 = (0);
var i__27952_27956 = (0);
while(true){
if((i__27952_27956 < count__27951_27955)){
var x_27957 = cljs.core._nth.call(null,chunk__27950_27954,i__27952_27956);
ret.push(x_27957);

var G__27958 = seq__27949_27953;
var G__27959 = chunk__27950_27954;
var G__27960 = count__27951_27955;
var G__27961 = (i__27952_27956 + (1));
seq__27949_27953 = G__27958;
chunk__27950_27954 = G__27959;
count__27951_27955 = G__27960;
i__27952_27956 = G__27961;
continue;
} else {
var temp__4126__auto___27962 = cljs.core.seq.call(null,seq__27949_27953);
if(temp__4126__auto___27962){
var seq__27949_27963__$1 = temp__4126__auto___27962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27949_27963__$1)){
var c__4415__auto___27964 = cljs.core.chunk_first.call(null,seq__27949_27963__$1);
var G__27965 = cljs.core.chunk_rest.call(null,seq__27949_27963__$1);
var G__27966 = c__4415__auto___27964;
var G__27967 = cljs.core.count.call(null,c__4415__auto___27964);
var G__27968 = (0);
seq__27949_27953 = G__27965;
chunk__27950_27954 = G__27966;
count__27951_27955 = G__27967;
i__27952_27956 = G__27968;
continue;
} else {
var x_27969 = cljs.core.first.call(null,seq__27949_27963__$1);
ret.push(x_27969);

var G__27970 = cljs.core.next.call(null,seq__27949_27963__$1);
var G__27971 = null;
var G__27972 = (0);
var G__27973 = (0);
seq__27949_27953 = G__27970;
chunk__27950_27954 = G__27971;
count__27951_27955 = G__27972;
i__27952_27956 = G__27973;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x27983 = cljs.core.clone.call(null,handlers);
x27983.forEach = ((function (x27983,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){
var coll = this;
var seq__27984 = cljs.core.seq.call(null,coll);
var chunk__27985 = null;
var count__27986 = (0);
var i__27987 = (0);
while(true){
if((i__27987 < count__27986)){
var vec__27988 = cljs.core._nth.call(null,chunk__27985,i__27987);
var k = cljs.core.nth.call(null,vec__27988,(0),null);
var v = cljs.core.nth.call(null,vec__27988,(1),null);
f.call(null,v,k);

var G__27990 = seq__27984;
var G__27991 = chunk__27985;
var G__27992 = count__27986;
var G__27993 = (i__27987 + (1));
seq__27984 = G__27990;
chunk__27985 = G__27991;
count__27986 = G__27992;
i__27987 = G__27993;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__27984);
if(temp__4126__auto__){
var seq__27984__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27984__$1)){
var c__4415__auto__ = cljs.core.chunk_first.call(null,seq__27984__$1);
var G__27994 = cljs.core.chunk_rest.call(null,seq__27984__$1);
var G__27995 = c__4415__auto__;
var G__27996 = cljs.core.count.call(null,c__4415__auto__);
var G__27997 = (0);
seq__27984 = G__27994;
chunk__27985 = G__27995;
count__27986 = G__27996;
i__27987 = G__27997;
continue;
} else {
var vec__27989 = cljs.core.first.call(null,seq__27984__$1);
var k = cljs.core.nth.call(null,vec__27989,(0),null);
var v = cljs.core.nth.call(null,vec__27989,(1),null);
f.call(null,v,k);

var G__27998 = cljs.core.next.call(null,seq__27984__$1);
var G__27999 = null;
var G__28000 = (0);
var G__28001 = (0);
seq__27984 = G__27998;
chunk__27985 = G__27999;
count__27986 = G__28000;
i__27987 = G__28001;
continue;
}
} else {
return null;
}
}
break;
}
});})(x27983,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;

return x27983;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){
var G__27982 = obj;
G__27982.push(kfn.call(null,k),vfn.call(null,v));

return G__27982;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t28005 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t28005 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta28006){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta28006 = meta28006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t28005.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t28005.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t28005.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t28005.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t28005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28007){
var self__ = this;
var _28007__$1 = this;
return self__.meta28006;
});

cognitect.transit.t28005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28007,meta28006__$1){
var self__ = this;
var _28007__$1 = this;
return (new cognitect.transit.t28005(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta28006__$1));
});

cognitect.transit.t28005.cljs$lang$type = true;

cognitect.transit.t28005.cljs$lang$ctorStr = "cognitect.transit/t28005";

cognitect.transit.t28005.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"cognitect.transit/t28005");
});

cognitect.transit.__GT_t28005 = (function __GT_t28005(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta28006){
return (new cognitect.transit.t28005(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta28006));
});

}

return (new cognitect.transit.t28005(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),79,new cljs.core.Keyword(null,"end-line","end-line",1837326455),233,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"line","line",212345235),229,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/resources/public/js/out-dev/cognitect/transit.cljs"], null)));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});
