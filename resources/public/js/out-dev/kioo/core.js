// Compiled by ClojureScript 0.0-2496
goog.provide('kioo.core');
goog.require('cljs.core');
goog.require('kioo.common');
goog.require('sablono.core');
goog.require('hickory.core');
goog.require('kioo.util');
kioo.core.value_component = (function value_component(renderer){
var react_component = React.createClass({"render": (function (){
var this$ = this;
var _STAR_component_STAR_27444 = kioo.util._STAR_component_STAR_;
try{kioo.util._STAR_component_STAR_ = this$;

return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_27444;
}}), "shouldComponentUpdate": (function (next_props,_){
var this$ = this;
return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});
return ((function (react_component){
return (function() { 
var G__27445__delegate = function (value,static_args){
return react_component.call(null,{"statics": static_args, "value": value});
};
var G__27445 = function (value,var_args){
var static_args = null;
if (arguments.length > 1) {
  static_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__27445__delegate.call(this,value,static_args);};
G__27445.cljs$lang$maxFixedArity = 1;
G__27445.cljs$lang$applyTo = (function (arglist__27446){
var value = cljs.core.first(arglist__27446);
var static_args = cljs.core.rest(arglist__27446);
return G__27445__delegate(value,static_args);
});
G__27445.cljs$core$IFn$_invoke$arity$variadic = G__27445__delegate;
return G__27445;
})()
;
;})(react_component))
});
kioo.core.make_dom = (function make_dom(node){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(node),cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node)),kioo.util.flatten_nodes.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node)));
} else {
return node;
}
});
kioo.core.to_list = (function to_list(vals){
if(cljs.core.seq_QMARK_.call(null,vals)){
return vals;
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,vals);
}
});
kioo.core.handle_wrapper = (function handle_wrapper(dom_fn){
return (function() { 
var hw__delegate = function (node,body){
var rnode = ((cljs.core.seq_QMARK_.call(null,node))?cljs.core.apply.call(null,hw,node):(((cljs.core.map_QMARK_.call(null,node)) && (!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(node)))))?(function (){var revents = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(node);
return kioo.util.WrapComponent.call(null,cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,revents,new cljs.core.Keyword(null,"wrappee","wrappee",876822573),dom_fn.call(null,node))));
})():dom_fn.call(null,node)
));
if(cljs.core.empty_QMARK_.call(null,body)){
return rnode;
} else {
return cljs.core.cons.call(null,rnode,kioo.core.to_list.call(null,cljs.core.apply.call(null,hw,body)));
}
};
var hw = function (node,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hw__delegate.call(this,node,body);};
hw.cljs$lang$maxFixedArity = 1;
hw.cljs$lang$applyTo = (function (arglist__27447){
var node = cljs.core.first(arglist__27447);
var body = cljs.core.rest(arglist__27447);
return hw__delegate(node,body);
});
hw.cljs$core$IFn$_invoke$arity$variadic = hw__delegate;
return hw;
})()
;
});
kioo.core.content = kioo.common.content;
kioo.core.append = kioo.common.append;
kioo.core.prepend = kioo.common.prepend;
/**
* @param {...*} var_args
*/
kioo.core.after = (function() { 
var after__delegate = function (body){
return (function (node){
return cljs.core.cons.call(null,kioo.core.make_dom.call(null,node),body);
});
};
var after = function (var_args){
var body = null;
if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return after__delegate.call(this,body);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__27448){
var body = cljs.core.seq(arglist__27448);
return after__delegate(body);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
/**
* @param {...*} var_args
*/
kioo.core.before = (function() { 
var before__delegate = function (body){
return (function (node){
return kioo.util.flatten_nodes.call(null,cljs.core.concat.call(null,body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.make_dom.call(null,node)], null)));
});
};
var before = function (var_args){
var body = null;
if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return before__delegate.call(this,body);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__27449){
var body = cljs.core.seq(arglist__27449);
return before__delegate(body);
});
before.cljs$core$IFn$_invoke$arity$variadic = before__delegate;
return before;
})()
;
kioo.core.substitute = kioo.common.substitute;
kioo.core.set_attr = kioo.common.set_attr;
kioo.core.remove_attr = kioo.common.remove_attr;
kioo.core.do__GT_ = kioo.common.do__GT_;
kioo.core.set_style = kioo.common.set_style;
kioo.core.remove_style = kioo.common.remove_style;
kioo.core.set_class = kioo.common.set_class;
kioo.core.add_class = kioo.common.add_class;
kioo.core.remove_class = kioo.common.remove_class;
kioo.core.wrap = (function wrap(tag,attrs){
return (function (node){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"sym","sym",-1444860305),(React.DOM[cljs.core.name.call(null,tag)]),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),kioo.util.convert_attrs.call(null,attrs),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.make_dom.call(null,node)], null)], null);
});
});
kioo.core.unwrap = kioo.common.unwrap;
kioo.core.html = (function html(content){
return sablono.interpreter.interpret.call(null,content);
});
kioo.core.html_content = (function html_content(content){
return (function (node){
var children = cljs.core.map.call(null,(function (p1__27450_SHARP_){
return sablono.interpreter.interpret.call(null,hickory.core.as_hiccup.call(null,p1__27450_SHARP_));
}),hickory.core.parse_fragment.call(null,content));
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),children);
});
});
kioo.core.react_events = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["onRender",null,"onUpdate",null,"onMount",null], null), null);
/**
* @param {...*} var_args
*/
kioo.core.listen = (function() { 
var listen__delegate = function (events_PLUS_fns){
var pairs = cljs.core.map.call(null,(function (p__27459){
var vec__27460 = p__27459;
var k = cljs.core.nth.call(null,vec__27460,(0),null);
var v = cljs.core.nth.call(null,vec__27460,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.util.camel_case.call(null,k),v], null);
}),cljs.core.partition.call(null,(2),events_PLUS_fns));
var vec__27458 = cljs.core.reduce.call(null,((function (pairs){
return (function (p__27461,p__27462){
var vec__27463 = p__27461;
var r = cljs.core.nth.call(null,vec__27463,(0),null);
var s = cljs.core.nth.call(null,vec__27463,(1),null);
var vec__27464 = p__27462;
var k = cljs.core.nth.call(null,vec__27464,(0),null);
var v = cljs.core.nth.call(null,vec__27464,(1),null);
if(cljs.core.truth_(kioo.core.react_events.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,r,k,v),s], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.call(null,s,k,v)], null);
}
});})(pairs))
,cljs.core.PersistentVector.EMPTY,pairs);
var rev = cljs.core.nth.call(null,vec__27458,(0),null);
var sev = cljs.core.nth.call(null,vec__27458,(1),null);
return ((function (pairs,vec__27458,rev,sev){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),sev),new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.merge.call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(node),rev));
});
;})(pairs,vec__27458,rev,sev))
};
var listen = function (var_args){
var events_PLUS_fns = null;
if (arguments.length > 0) {
  events_PLUS_fns = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return listen__delegate.call(this,events_PLUS_fns);};
listen.cljs$lang$maxFixedArity = 0;
listen.cljs$lang$applyTo = (function (arglist__27465){
var events_PLUS_fns = cljs.core.seq(arglist__27465);
return listen__delegate(events_PLUS_fns);
});
listen.cljs$core$IFn$_invoke$arity$variadic = listen__delegate;
return listen;
})()
;
kioo.core.render = (function render(component,node){
return React.renderComponent(component,node);
});
