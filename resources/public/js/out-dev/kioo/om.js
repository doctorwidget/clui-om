// Compiled by ClojureScript 0.0-2496
goog.provide('kioo.om');
goog.require('cljs.core');
goog.require('kioo.util');
goog.require('kioo.core');
goog.require('om.dom');
/**
* @param {...*} var_args
*/
kioo.om.make_dom = (function() { 
var make_dom__delegate = function (node,body){
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(node),cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node)),kioo.util.flatten_nodes.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node)));
} else {
return node;
}
};
var make_dom = function (node,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return make_dom__delegate.call(this,node,body);};
make_dom.cljs$lang$maxFixedArity = 1;
make_dom.cljs$lang$applyTo = (function (arglist__27431){
var node = cljs.core.first(arglist__27431);
var body = cljs.core.rest(arglist__27431);
return make_dom__delegate(node,body);
});
make_dom.cljs$core$IFn$_invoke$arity$variadic = make_dom__delegate;
return make_dom;
})()
;
kioo.om.content = kioo.core.content;
kioo.om.append = kioo.core.append;
kioo.om.prepend = kioo.core.prepend;
/**
* @param {...*} var_args
*/
kioo.om.after = (function() { 
var after__delegate = function (body){
return (function (node){
return cljs.core.cons.call(null,kioo.om.make_dom.call(null,node),body);
});
};
var after = function (var_args){
var body = null;
if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return after__delegate.call(this,body);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__27432){
var body = cljs.core.seq(arglist__27432);
return after__delegate(body);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
/**
* @param {...*} var_args
*/
kioo.om.before = (function() { 
var before__delegate = function (body){
return (function (node){
return kioo.util.flatten_nodes.call(null,cljs.core.concat.call(null,body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.om.make_dom.call(null,node)], null)));
});
};
var before = function (var_args){
var body = null;
if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return before__delegate.call(this,body);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__27433){
var body = cljs.core.seq(arglist__27433);
return before__delegate(body);
});
before.cljs$core$IFn$_invoke$arity$variadic = before__delegate;
return before;
})()
;
kioo.om.substitute = kioo.core.substitute;
kioo.om.set_attr = kioo.core.set_attr;
kioo.om.remove_attr = kioo.core.remove_attr;
kioo.om.do__GT_ = kioo.core.do__GT_;
kioo.om.set_style = kioo.core.set_style;
kioo.om.remove_style = kioo.core.remove_style;
kioo.om.set_class = kioo.core.set_class;
kioo.om.add_class = kioo.core.add_class;
kioo.om.remove_class = kioo.core.remove_class;
kioo.om.wrap = (function wrap(tag,attrs){
return (function (node){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"sym","sym",-1444860305),(React.DOM[cljs.core.name.call(null,tag)]),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),kioo.util.convert_attrs.call(null,attrs),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.om.make_dom.call(null,node)], null)], null);
});
});
kioo.om.unwrap = kioo.core.unwrap;
kioo.om.html = kioo.core.html;
kioo.om.html_content = kioo.core.html_content;
kioo.om.listen = kioo.core.listen;
