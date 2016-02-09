// Compiled by ClojureScript 0.0-2496
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__27499__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__27498 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__27498,(0),null);
var body = cljs.core.nthnext.call(null,vec__27498,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__27499 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__27499__delegate.call(this,args);};
G__27499.cljs$lang$maxFixedArity = 0;
G__27499.cljs$lang$applyTo = (function (arglist__27500){
var args = cljs.core.seq(arglist__27500);
return G__27499__delegate(args);
});
G__27499.cljs$core$IFn$_invoke$arity$variadic = G__27499__delegate;
return G__27499;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4384__auto__ = (function iter__27505(s__27506){
return (new cljs.core.LazySeq(null,(function (){
var s__27506__$1 = s__27506;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27506__$1);
if(temp__4126__auto__){
var s__27506__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27506__$2)){
var c__4382__auto__ = cljs.core.chunk_first.call(null,s__27506__$2);
var size__4383__auto__ = cljs.core.count.call(null,c__4382__auto__);
var b__27508 = cljs.core.chunk_buffer.call(null,size__4383__auto__);
if((function (){var i__27507 = (0);
while(true){
if((i__27507 < size__4383__auto__)){
var args = cljs.core._nth.call(null,c__4382__auto__,i__27507);
cljs.core.chunk_append.call(null,b__27508,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__27509 = (i__27507 + (1));
i__27507 = G__27509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27508),iter__27505.call(null,cljs.core.chunk_rest.call(null,s__27506__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27508),null);
}
} else {
var args = cljs.core.first.call(null,s__27506__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__27505.call(null,cljs.core.rest.call(null,s__27506__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){
var html = cljs.core.atom.call(null,null);
React.renderComponentToString(component,((function (html){
return (function (p1__27510_SHARP_){
return cljs.core.reset_BANG_.call(null,html,p1__27510_SHARP_);
});})(html))
);

return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__4384__auto__ = (function iter__27515(s__27516){
return (new cljs.core.LazySeq(null,(function (){
var s__27516__$1 = s__27516;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27516__$1);
if(temp__4126__auto__){
var s__27516__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27516__$2)){
var c__4382__auto__ = cljs.core.chunk_first.call(null,s__27516__$2);
var size__4383__auto__ = cljs.core.count.call(null,c__4382__auto__);
var b__27518 = cljs.core.chunk_buffer.call(null,size__4383__auto__);
if((function (){var i__27517 = (0);
while(true){
if((i__27517 < size__4383__auto__)){
var style = cljs.core._nth.call(null,c__4382__auto__,i__27517);
cljs.core.chunk_append.call(null,b__27518,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__27519 = (i__27517 + (1));
i__27517 = G__27519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27518),iter__27515.call(null,cljs.core.chunk_rest.call(null,s__27516__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27518),null);
}
} else {
var style = cljs.core.first.call(null,s__27516__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__27515.call(null,cljs.core.rest.call(null,s__27516__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__27520){
var styles = cljs.core.seq(arglist__27520);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to27521 = (function() { 
var link_to27521__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to27521 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to27521__delegate.call(this,url,content);};
link_to27521.cljs$lang$maxFixedArity = 1;
link_to27521.cljs$lang$applyTo = (function (arglist__27522){
var url = cljs.core.first(arglist__27522);
var content = cljs.core.rest(arglist__27522);
return link_to27521__delegate(url,content);
});
link_to27521.cljs$core$IFn$_invoke$arity$variadic = link_to27521__delegate;
return link_to27521;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to27521);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to27523 = (function() { 
var mail_to27523__delegate = function (e_mail,p__27524){
var vec__27526 = p__27524;
var content = cljs.core.nth.call(null,vec__27526,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3628__auto__ = content;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to27523 = function (e_mail,var_args){
var p__27524 = null;
if (arguments.length > 1) {
  p__27524 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to27523__delegate.call(this,e_mail,p__27524);};
mail_to27523.cljs$lang$maxFixedArity = 1;
mail_to27523.cljs$lang$applyTo = (function (arglist__27527){
var e_mail = cljs.core.first(arglist__27527);
var p__27524 = cljs.core.rest(arglist__27527);
return mail_to27523__delegate(e_mail,p__27524);
});
mail_to27523.cljs$core$IFn$_invoke$arity$variadic = mail_to27523__delegate;
return mail_to27523;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to27523);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list27528 = (function unordered_list27528(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4384__auto__ = (function iter__27533(s__27534){
return (new cljs.core.LazySeq(null,(function (){
var s__27534__$1 = s__27534;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27534__$1);
if(temp__4126__auto__){
var s__27534__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27534__$2)){
var c__4382__auto__ = cljs.core.chunk_first.call(null,s__27534__$2);
var size__4383__auto__ = cljs.core.count.call(null,c__4382__auto__);
var b__27536 = cljs.core.chunk_buffer.call(null,size__4383__auto__);
if((function (){var i__27535 = (0);
while(true){
if((i__27535 < size__4383__auto__)){
var x = cljs.core._nth.call(null,c__4382__auto__,i__27535);
cljs.core.chunk_append.call(null,b__27536,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27537 = (i__27535 + (1));
i__27535 = G__27537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27536),iter__27533.call(null,cljs.core.chunk_rest.call(null,s__27534__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27536),null);
}
} else {
var x = cljs.core.first.call(null,s__27534__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__27533.call(null,cljs.core.rest.call(null,s__27534__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list27528);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list27538 = (function ordered_list27538(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4384__auto__ = (function iter__27543(s__27544){
return (new cljs.core.LazySeq(null,(function (){
var s__27544__$1 = s__27544;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27544__$1);
if(temp__4126__auto__){
var s__27544__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27544__$2)){
var c__4382__auto__ = cljs.core.chunk_first.call(null,s__27544__$2);
var size__4383__auto__ = cljs.core.count.call(null,c__4382__auto__);
var b__27546 = cljs.core.chunk_buffer.call(null,size__4383__auto__);
if((function (){var i__27545 = (0);
while(true){
if((i__27545 < size__4383__auto__)){
var x = cljs.core._nth.call(null,c__4382__auto__,i__27545);
cljs.core.chunk_append.call(null,b__27546,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27547 = (i__27545 + (1));
i__27545 = G__27547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27546),iter__27543.call(null,cljs.core.chunk_rest.call(null,s__27544__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27546),null);
}
} else {
var x = cljs.core.first.call(null,s__27544__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__27543.call(null,cljs.core.rest.call(null,s__27544__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list27538);
/**
* Create an image element.
*/
sablono.core.image27548 = (function() {
var image27548 = null;
var image27548__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image27548__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image27548 = function(src,alt){
switch(arguments.length){
case 1:
return image27548__1.call(this,src);
case 2:
return image27548__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image27548.cljs$core$IFn$_invoke$arity$1 = image27548__1;
image27548.cljs$core$IFn$_invoke$arity$2 = image27548__2;
return image27548;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image27548);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__27549_SHARP_,p2__27550_SHARP_){
return [cljs.core.str(p1__27549_SHARP_),cljs.core.str("["),cljs.core.str(p2__27550_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__27551_SHARP_,p2__27552_SHARP_){
return [cljs.core.str(p1__27551_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27552_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field27553 = (function() {
var hidden_field27553 = null;
var hidden_field27553__1 = (function (name){
return hidden_field27553.call(null,name,null);
});
var hidden_field27553__2 = (function (name,value){
return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field27553 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field27553__1.call(this,name);
case 2:
return hidden_field27553__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field27553.cljs$core$IFn$_invoke$arity$1 = hidden_field27553__1;
hidden_field27553.cljs$core$IFn$_invoke$arity$2 = hidden_field27553__2;
return hidden_field27553;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field27553);
/**
* Creates a new text input field.
*/
sablono.core.text_field27554 = (function() {
var text_field27554 = null;
var text_field27554__1 = (function (name){
return text_field27554.call(null,name,null);
});
var text_field27554__2 = (function (name,value){
return sablono.core.input_field.call(null,"text",name,value);
});
text_field27554 = function(name,value){
switch(arguments.length){
case 1:
return text_field27554__1.call(this,name);
case 2:
return text_field27554__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field27554.cljs$core$IFn$_invoke$arity$1 = text_field27554__1;
text_field27554.cljs$core$IFn$_invoke$arity$2 = text_field27554__2;
return text_field27554;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field27554);
/**
* Creates a new password field.
*/
sablono.core.password_field27555 = (function() {
var password_field27555 = null;
var password_field27555__1 = (function (name){
return password_field27555.call(null,name,null);
});
var password_field27555__2 = (function (name,value){
return sablono.core.input_field.call(null,"password",name,value);
});
password_field27555 = function(name,value){
switch(arguments.length){
case 1:
return password_field27555__1.call(this,name);
case 2:
return password_field27555__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field27555.cljs$core$IFn$_invoke$arity$1 = password_field27555__1;
password_field27555.cljs$core$IFn$_invoke$arity$2 = password_field27555__2;
return password_field27555;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field27555);
/**
* Creates a new email input field.
*/
sablono.core.email_field27556 = (function() {
var email_field27556 = null;
var email_field27556__1 = (function (name){
return email_field27556.call(null,name,null);
});
var email_field27556__2 = (function (name,value){
return sablono.core.input_field.call(null,"email",name,value);
});
email_field27556 = function(name,value){
switch(arguments.length){
case 1:
return email_field27556__1.call(this,name);
case 2:
return email_field27556__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field27556.cljs$core$IFn$_invoke$arity$1 = email_field27556__1;
email_field27556.cljs$core$IFn$_invoke$arity$2 = email_field27556__2;
return email_field27556;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field27556);
/**
* Creates a check box.
*/
sablono.core.check_box27557 = (function() {
var check_box27557 = null;
var check_box27557__1 = (function (name){
return check_box27557.call(null,name,null);
});
var check_box27557__2 = (function (name,checked_QMARK_){
return check_box27557.call(null,name,checked_QMARK_,"true");
});
var check_box27557__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box27557 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box27557__1.call(this,name);
case 2:
return check_box27557__2.call(this,name,checked_QMARK_);
case 3:
return check_box27557__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box27557.cljs$core$IFn$_invoke$arity$1 = check_box27557__1;
check_box27557.cljs$core$IFn$_invoke$arity$2 = check_box27557__2;
check_box27557.cljs$core$IFn$_invoke$arity$3 = check_box27557__3;
return check_box27557;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box27557);
/**
* Creates a radio button.
*/
sablono.core.radio_button27558 = (function() {
var radio_button27558 = null;
var radio_button27558__1 = (function (group){
return radio_button27558.call(null,group,null);
});
var radio_button27558__2 = (function (group,checked_QMARK_){
return radio_button27558.call(null,group,checked_QMARK_,"true");
});
var radio_button27558__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button27558 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button27558__1.call(this,group);
case 2:
return radio_button27558__2.call(this,group,checked_QMARK_);
case 3:
return radio_button27558__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button27558.cljs$core$IFn$_invoke$arity$1 = radio_button27558__1;
radio_button27558.cljs$core$IFn$_invoke$arity$2 = radio_button27558__2;
radio_button27558.cljs$core$IFn$_invoke$arity$3 = radio_button27558__3;
return radio_button27558;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button27558);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options27559 = (function() {
var select_options27559 = null;
var select_options27559__1 = (function (coll){
return select_options27559.call(null,coll,null);
});
var select_options27559__2 = (function (coll,selected){
var iter__4384__auto__ = (function iter__27568(s__27569){
return (new cljs.core.LazySeq(null,(function (){
var s__27569__$1 = s__27569;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27569__$1);
if(temp__4126__auto__){
var s__27569__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27569__$2)){
var c__4382__auto__ = cljs.core.chunk_first.call(null,s__27569__$2);
var size__4383__auto__ = cljs.core.count.call(null,c__4382__auto__);
var b__27571 = cljs.core.chunk_buffer.call(null,size__4383__auto__);
if((function (){var i__27570 = (0);
while(true){
if((i__27570 < size__4383__auto__)){
var x = cljs.core._nth.call(null,c__4382__auto__,i__27570);
cljs.core.chunk_append.call(null,b__27571,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27574 = x;
var text = cljs.core.nth.call(null,vec__27574,(0),null);
var val = cljs.core.nth.call(null,vec__27574,(1),null);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options27559.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__27576 = (i__27570 + (1));
i__27570 = G__27576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27571),iter__27568.call(null,cljs.core.chunk_rest.call(null,s__27569__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27571),null);
}
} else {
var x = cljs.core.first.call(null,s__27569__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27575 = x;
var text = cljs.core.nth.call(null,vec__27575,(0),null);
var val = cljs.core.nth.call(null,vec__27575,(1),null);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options27559.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__27568.call(null,cljs.core.rest.call(null,s__27569__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__.call(null,coll);
});
select_options27559 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options27559__1.call(this,coll);
case 2:
return select_options27559__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options27559.cljs$core$IFn$_invoke$arity$1 = select_options27559__1;
select_options27559.cljs$core$IFn$_invoke$arity$2 = select_options27559__2;
return select_options27559;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options27559);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down27577 = (function() {
var drop_down27577 = null;
var drop_down27577__2 = (function (name,options){
return drop_down27577.call(null,name,options,null);
});
var drop_down27577__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down27577 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down27577__2.call(this,name,options);
case 3:
return drop_down27577__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down27577.cljs$core$IFn$_invoke$arity$2 = drop_down27577__2;
drop_down27577.cljs$core$IFn$_invoke$arity$3 = drop_down27577__3;
return drop_down27577;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down27577);
/**
* Creates a text area element.
*/
sablono.core.text_area27578 = (function() {
var text_area27578 = null;
var text_area27578__1 = (function (name){
return text_area27578.call(null,name,null);
});
var text_area27578__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area27578 = function(name,value){
switch(arguments.length){
case 1:
return text_area27578__1.call(this,name);
case 2:
return text_area27578__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area27578.cljs$core$IFn$_invoke$arity$1 = text_area27578__1;
text_area27578.cljs$core$IFn$_invoke$arity$2 = text_area27578__2;
return text_area27578;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area27578);
/**
* Creates a file upload input.
*/
sablono.core.file_upload27579 = (function file_upload27579(name){
return sablono.core.input_field.call(null,"file",name,null);
});

sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload27579);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label27580 = (function label27580(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label27580);
/**
* Creates a submit button.
*/
sablono.core.submit_button27581 = (function submit_button27581(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button27581);
/**
* Creates a form reset button.
*/
sablono.core.reset_button27582 = (function reset_button27582(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button27582);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to27583 = (function() { 
var form_to27583__delegate = function (p__27584,body){
var vec__27586 = p__27584;
var method = cljs.core.nth.call(null,vec__27586,(0),null);
var action = cljs.core.nth.call(null,vec__27586,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to27583 = function (p__27584,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to27583__delegate.call(this,p__27584,body);};
form_to27583.cljs$lang$maxFixedArity = 1;
form_to27583.cljs$lang$applyTo = (function (arglist__27587){
var p__27584 = cljs.core.first(arglist__27587);
var body = cljs.core.rest(arglist__27587);
return form_to27583__delegate(p__27584,body);
});
form_to27583.cljs$core$IFn$_invoke$arity$variadic = form_to27583__delegate;
return form_to27583;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to27583);
