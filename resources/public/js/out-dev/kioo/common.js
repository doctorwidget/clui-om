// Compiled by ClojureScript 0.0-2496
goog.provide('kioo.common');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('kioo.util');
/**
* @param {...*} var_args
*/
kioo.common.content = (function() { 
var content__delegate = function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),body);
});
};
var content = function (var_args){
var body = null;
if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return content__delegate.call(this,body);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__27466){
var body = cljs.core.seq(arglist__27466);
return content__delegate(body);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.append = (function() { 
var append__delegate = function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.concat.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node),body));
});
};
var append = function (var_args){
var body = null;
if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return append__delegate.call(this,body);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__27467){
var body = cljs.core.seq(arglist__27467);
return append__delegate(body);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.prepend = (function() { 
var prepend__delegate = function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.concat.call(null,body,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node)));
});
};
var prepend = function (var_args){
var body = null;
if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prepend__delegate.call(this,body);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__27468){
var body = cljs.core.seq(arglist__27468);
return prepend__delegate(body);
});
prepend.cljs$core$IFn$_invoke$arity$variadic = prepend__delegate;
return prepend;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.substitute = (function() { 
var substitute__delegate = function (body){
return (function (node){
return body;
});
};
var substitute = function (var_args){
var body = null;
if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return substitute__delegate.call(this,body);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__27469){
var body = cljs.core.seq(arglist__27469);
return substitute__delegate(body);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.set_attr = (function() { 
var set_attr__delegate = function (body){
var els = cljs.core.partition.call(null,(2),body);
return ((function (els){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.reduce.call(null,((function (els){
return (function (n,p__27472){
var vec__27473 = p__27472;
var k = cljs.core.nth.call(null,vec__27473,(0),null);
var v = cljs.core.nth.call(null,vec__27473,(1),null);
return cljs.core.assoc.call(null,n,k,v);
});})(els))
,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),els));
});
;})(els))
};
var set_attr = function (var_args){
var body = null;
if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_attr__delegate.call(this,body);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__27474){
var body = cljs.core.seq(arglist__27474);
return set_attr__delegate(body);
});
set_attr.cljs$core$IFn$_invoke$arity$variadic = set_attr__delegate;
return set_attr;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.remove_attr = (function() { 
var remove_attr__delegate = function (body){
return (function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.reduce.call(null,(function (n,k){
return cljs.core.dissoc.call(null,n,k);
}),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),body));
});
};
var remove_attr = function (var_args){
var body = null;
if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return remove_attr__delegate.call(this,body);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__27475){
var body = cljs.core.seq(arglist__27475);
return remove_attr__delegate(body);
});
remove_attr.cljs$core$IFn$_invoke$arity$variadic = remove_attr__delegate;
return remove_attr;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.do__GT_ = (function() { 
var do__GT___delegate = function (body){
return (function (node){
return cljs.core.reduce.call(null,(function (p1__27477_SHARP_,p2__27476_SHARP_){
return p2__27476_SHARP_.call(null,p1__27477_SHARP_);
}),node,body);
});
};
var do__GT_ = function (var_args){
var body = null;
if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return do__GT___delegate.call(this,body);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__27478){
var body = cljs.core.seq(arglist__27478);
return do__GT___delegate(body);
});
do__GT_.cljs$core$IFn$_invoke$arity$variadic = do__GT___delegate;
return do__GT_;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.set_style = (function() { 
var set_style__delegate = function (body){
var els = cljs.core.partition.call(null,(2),body);
var mp = cljs.core.reduce.call(null,((function (els){
return (function (m,p__27482){
var vec__27483 = p__27482;
var k = cljs.core.nth.call(null,vec__27483,(0),null);
var v = cljs.core.nth.call(null,vec__27483,(1),null);
return cljs.core.assoc.call(null,m,k,v);
});})(els))
,cljs.core.PersistentArrayMap.EMPTY,els);
return ((function (els,mp){
return (function (node){
return cljs.core.update_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),((function (els,mp){
return (function (p1__27479_SHARP_){
return cljs.core.merge.call(null,p1__27479_SHARP_,mp);
});})(els,mp))
);
});
;})(els,mp))
};
var set_style = function (var_args){
var body = null;
if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_style__delegate.call(this,body);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__27484){
var body = cljs.core.seq(arglist__27484);
return set_style__delegate(body);
});
set_style.cljs$core$IFn$_invoke$arity$variadic = set_style__delegate;
return set_style;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.remove_style = (function() { 
var remove_style__delegate = function (body){
return (function (node){
var style = cljs.core.reduce.call(null,(function (p1__27485_SHARP_,p2__27486_SHARP_){
return cljs.core.dissoc.call(null,p1__27485_SHARP_,cljs.core.name.call(null,p2__27486_SHARP_),p2__27486_SHARP_);
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null)),body);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),style);
});
};
var remove_style = function (var_args){
var body = null;
if (arguments.length > 0) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return remove_style__delegate.call(this,body);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__27487){
var body = cljs.core.seq(arglist__27487);
return remove_style__delegate(body);
});
remove_style.cljs$core$IFn$_invoke$arity$variadic = remove_style__delegate;
return remove_style;
})()
;
kioo.common.get_class_regex = (function get_class_regex(cls){
return (new RegExp([cljs.core.str("(\\s|^)"),cljs.core.str(cls),cljs.core.str("(\\s|$)")].join('')));
});
kioo.common.has_class_QMARK_ = (function has_class_QMARK_(cur_cls,cls){
return cljs.core.re_find.call(null,kioo.common.get_class_regex.call(null,cls),cur_cls);
});
/**
* @param {...*} var_args
*/
kioo.common.set_class = (function() { 
var set_class__delegate = function (values){
return (function (node){
var new_class = cljs.core.reduce.call(null,(function (p1__27488_SHARP_,p2__27489_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__27488_SHARP_,p2__27489_SHARP_))){
return p1__27488_SHARP_;
} else {
return [cljs.core.str(p1__27488_SHARP_),cljs.core.str(" "),cljs.core.str(p2__27489_SHARP_)].join('');
}
}),"",values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__27490){
var values = cljs.core.seq(arglist__27490);
return set_class__delegate(values);
});
set_class.cljs$core$IFn$_invoke$arity$variadic = set_class__delegate;
return set_class;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.add_class = (function() { 
var add_class__delegate = function (values){
return (function (node){
var new_class = cljs.core.reduce.call(null,(function (p1__27491_SHARP_,p2__27492_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__27491_SHARP_,p2__27492_SHARP_))){
return p1__27491_SHARP_;
} else {
return [cljs.core.str(p1__27491_SHARP_),cljs.core.str(" "),cljs.core.str(p2__27492_SHARP_)].join('');
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
};
var add_class = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__27493){
var values = cljs.core.seq(arglist__27493);
return add_class__delegate(values);
});
add_class.cljs$core$IFn$_invoke$arity$variadic = add_class__delegate;
return add_class;
})()
;
/**
* @param {...*} var_args
*/
kioo.common.remove_class = (function() { 
var remove_class__delegate = function (values){
return (function (node){
var new_class = cljs.core.reduce.call(null,(function (p1__27494_SHARP_,p2__27495_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_.call(null,p1__27494_SHARP_,p2__27495_SHARP_))){
return clojure.string.replace.call(null,p1__27494_SHARP_,kioo.common.get_class_regex.call(null,p2__27495_SHARP_)," ");
} else {
return p1__27494_SHARP_;
}
}),cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null)),values);
return cljs.core.assoc_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"className","className",-1983287057)], null),new_class);
});
};
var remove_class = function (var_args){
var values = null;
if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__27496){
var values = cljs.core.seq(arglist__27496);
return remove_class__delegate(values);
});
remove_class.cljs$core$IFn$_invoke$arity$variadic = remove_class__delegate;
return remove_class;
})()
;
kioo.common.unwrap = (function unwrap(node){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node);
});
