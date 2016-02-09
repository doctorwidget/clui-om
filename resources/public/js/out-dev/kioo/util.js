// Compiled by ClojureScript 0.0-2496
goog.provide('kioo.util');
goog.require('cljs.core');
goog.require('clojure.string');
kioo.util._STAR_component_STAR_ = null;
/**
* Wrapper component used to mix-in lifecycle methods
* This was pulled from quiescent
*/
kioo.util.WrapComponent = React.createClass({"componentDidMount": (function (node){
var this$ = this;
var temp__4126__auto__ = (function (){var or__3628__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return (this$.props["onRender"]);
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return f.call(null,node);
} else {
return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state,node){
var this$ = this;
var temp__4126__auto__ = (function (){var or__3628__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return (this$.props["onRender"]);
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_27434 = kioo.util._STAR_component_STAR_;
try{kioo.util._STAR_component_STAR_ = this$;

return f.call(null,node);
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_27434;
}} else {
return null;
}
}), "render": (function (){
var this$ = this;
return (this$.props["wrappee"]);
})});
kioo.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
kioo.util.camel_case = (function camel_case(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__27436 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__27436,(0),null);
var parts = cljs.core.nthnext.call(null,vec__27436,(1));
if(cljs.core.truth_(kioo.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,clojure.string.capitalize,parts));
}
}
});
kioo.util.convert_attrs = (function convert_attrs(attrs){
var style = (cljs.core.truth_(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs))?(function (){var vals = cljs.core.re_seq.call(null,/\s*([^:;]*)[:][\s]*([^;]+)/,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs));
return cljs.core.reduce.call(null,((function (vals){
return (function (m,p__27439){
var vec__27440 = p__27439;
var _ = cljs.core.nth.call(null,vec__27440,(0),null);
var k = cljs.core.nth.call(null,vec__27440,(1),null);
var v = cljs.core.nth.call(null,vec__27440,(2),null);
return cljs.core.assoc.call(null,m,k,v.trim());
});})(vals))
,cljs.core.PersistentArrayMap.EMPTY,vals);
})():null);
var class_name = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs);
return cljs.core.merge.call(null,cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"className","className",-1983287057),class_name], null));
});
kioo.util.flatten_nodes = (function flatten_nodes(nodes){
return cljs.core.reduce.call(null,(function (p1__27442_SHARP_,p2__27441_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p2__27441_SHARP_)){
return cljs.core.concat.call(null,p2__27441_SHARP_,p1__27442_SHARP_);
} else {
return cljs.core.conj.call(null,p1__27442_SHARP_,p2__27441_SHARP_);
}
}),cljs.core.List.EMPTY,cljs.core.reverse.call(null,nodes));
});
/**
* Returns a regular expression that matches the HTML attribute `attr`
* and it's value.
*/
kioo.util.attr_pattern = (function attr_pattern(attr){
return cljs.core.re_pattern.call(null,[cljs.core.str("\\s+"),cljs.core.str(cljs.core.name.call(null,attr)),cljs.core.str("\\s*=\\s*['\"][^\"']+['\"]")].join(''));
});
/**
* Strip the HTML attribute `attr` and it's value from the string `s`.
*/
kioo.util.strip_attr = (function strip_attr(s,attr){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,s,kioo.util.attr_pattern.call(null,attr),"");
} else {
return null;
}
});
