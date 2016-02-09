// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.utils');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs.reader');
/**
* Wraps Google Clojure Library to tersely get a guid. These
* are not UUIDs! They are just an increasing series of integers
* only guaranteed to be unique within one instantiation of these
* utils. Starts over at 1000 for every new instance.
*/
clui_om.utils.guid = (function guid(){
return ((1000) + goog.ui.IdGenerator.getInstance().getNextUniqueId());
});
/**
* Takes a map and returns a map with an extra parameter
* called :id, containing a guid.
*/
clui_om.utils.with_id = (function with_id(m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"id","id",-1388402092),clui_om.utils.guid.call(null));
});
/**
* Get the text value from a node, trimmed of whitespace.
* Returns a 2-tuple of text and the node itself (in case
* you want to alter the node based on its contents)
*/
clui_om.utils.value_from_node = (function value_from_node(owner,field){
var n = om.core.get_node.call(null,owner,field);
var v = clojure.string.trim.call(null,n.value);
if(cljs.core.empty_QMARK_.call(null,v)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,n], null);
}
});
/**
* Sets all values in a sequence of nodes to the empty string.
* @param {...*} var_args
*/
clui_om.utils.clear_nodes_BANG_ = (function() { 
var clear_nodes_BANG___delegate = function (nodes){
var seq__21021 = cljs.core.seq.call(null,nodes);
var chunk__21022 = null;
var count__21023 = (0);
var i__21024 = (0);
while(true){
if((i__21024 < count__21023)){
var n = cljs.core._nth.call(null,chunk__21022,i__21024);
n.value = "";

var G__21025 = seq__21021;
var G__21026 = chunk__21022;
var G__21027 = count__21023;
var G__21028 = (i__21024 + (1));
seq__21021 = G__21025;
chunk__21022 = G__21026;
count__21023 = G__21027;
i__21024 = G__21028;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21021);
if(temp__4126__auto__){
var seq__21021__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21021__$1)){
var c__4415__auto__ = cljs.core.chunk_first.call(null,seq__21021__$1);
var G__21029 = cljs.core.chunk_rest.call(null,seq__21021__$1);
var G__21030 = c__4415__auto__;
var G__21031 = cljs.core.count.call(null,c__4415__auto__);
var G__21032 = (0);
seq__21021 = G__21029;
chunk__21022 = G__21030;
count__21023 = G__21031;
i__21024 = G__21032;
continue;
} else {
var n = cljs.core.first.call(null,seq__21021__$1);
n.value = "";

var G__21033 = cljs.core.next.call(null,seq__21021__$1);
var G__21034 = null;
var G__21035 = (0);
var G__21036 = (0);
seq__21021 = G__21033;
chunk__21022 = G__21034;
count__21023 = G__21035;
i__21024 = G__21036;
continue;
}
} else {
return null;
}
}
break;
}
};
var clear_nodes_BANG_ = function (var_args){
var nodes = null;
if (arguments.length > 0) {
  nodes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return clear_nodes_BANG___delegate.call(this,nodes);};
clear_nodes_BANG_.cljs$lang$maxFixedArity = 0;
clear_nodes_BANG_.cljs$lang$applyTo = (function (arglist__21037){
var nodes = cljs.core.seq(arglist__21037);
return clear_nodes_BANG___delegate(nodes);
});
clear_nodes_BANG_.cljs$core$IFn$_invoke$arity$variadic = clear_nodes_BANG___delegate;
return clear_nodes_BANG_;
})()
;
