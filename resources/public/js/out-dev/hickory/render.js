// Compiled by ClojureScript 0.0-2496
goog.provide('hickory.render');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hickory.utils');
goog.require('hickory.hiccup_utils');
/**
* Given a map entry m, representing the attribute name and value, returns a
* string representing that key/value pair as it would be rendered into HTML.
*/
hickory.render.render_hickory_attribute = (function render_hickory_attribute(m){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,cljs.core.key.call(null,m))),cljs.core.str("=\""),cljs.core.str(hickory.utils.html_escape.call(null,cljs.core.val.call(null,m))),cljs.core.str("\"")].join('');
});
/**
* Given a hickory HTML DOM map structure (as returned by as-hickory), returns a
* string containing HTML it represents. Keep in mind this function is not super
* fast or heavy-duty.
* 
* Note that it will NOT in general be the case that
* 
* (= my-html-src (hickory-to-html (as-hickory (parse my-html-src))))
* 
* as we do not keep any letter case or whitespace information, any
* "tag-soupy" elements, attribute quote characters used, etc.
*/
hickory.render.hickory_to_html = (function hickory_to_html(dom){
if(typeof dom === 'string'){
return hickory.utils.html_escape.call(null,dom);
} else {
try{var G__28072 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(dom) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(dom).fqn:null);
switch (G__28072) {
case "comment":
return [cljs.core.str("<!--"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(dom))),cljs.core.str("-->")].join('');

break;
case "element":
if(cljs.core.truth_(hickory.utils.void_element.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom)))){
return [cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom))),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hickory.render.render_hickory_attribute,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(dom)))),cljs.core.str(">")].join('');
} else {
if(cljs.core.truth_(hickory.utils.unescapable_content.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom)))){
return [cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom))),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hickory.render.render_hickory_attribute,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(dom)))),cljs.core.str(">"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(dom))),cljs.core.str("</"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom))),cljs.core.str(">")].join('');
} else {
return [cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom))),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hickory.render.render_hickory_attribute,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(dom)))),cljs.core.str(">"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hickory_to_html,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(dom)))),cljs.core.str("</"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom))),cljs.core.str(">")].join('');

}
}

break;
case "document-type":
return hickory.utils.render_doctype.call(null,cljs.core.get_in.call(null,dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"name","name",1843675177)], null)),cljs.core.get_in.call(null,dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"publicid","publicid",1557995850)], null)),cljs.core.get_in.call(null,dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"systemid","systemid",-2052878192)], null)));

break;
case "document":
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hickory_to_html,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(dom)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(dom))].join('')));

}
}catch (e28071){if((e28071 instanceof Error)){
var e = e28071;
throw (cljs.core.truth_(hickory.utils.starts_with.call(null,(e["message"]),"No matching clause: "))?cljs.core.ex_info.call(null,[cljs.core.str("Not a valid node: "),cljs.core.str(cljs.core.pr_str.call(null,dom))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dom","dom",-1236537922),dom], null)):e);
} else {
throw e28071;

}
}}
});
/**
* Given a hiccup attribute map, returns a string containing the attributes
* rendered as they should appear in an HTML tag, right after the tag (including
* a leading space to separate from the tag, if any attributes present).
*/
hickory.render.render_hiccup_attrs = (function render_hiccup_attrs(attrs){
var attrs_str = clojure.string.join.call(null," ",cljs.core.sort.call(null,cljs.core.filter.call(null,(function (p1__28074_SHARP_){
return !(cljs.core.empty_QMARK_.call(null,p1__28074_SHARP_));
}),(function (){var iter__4384__auto__ = (function iter__28083(s__28084){
return (new cljs.core.LazySeq(null,(function (){
var s__28084__$1 = s__28084;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28084__$1);
if(temp__4126__auto__){
var s__28084__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28084__$2)){
var c__4382__auto__ = cljs.core.chunk_first.call(null,s__28084__$2);
var size__4383__auto__ = cljs.core.count.call(null,c__4382__auto__);
var b__28086 = cljs.core.chunk_buffer.call(null,size__4383__auto__);
if((function (){var i__28085 = (0);
while(true){
if((i__28085 < size__4383__auto__)){
var vec__28089 = cljs.core._nth.call(null,c__4382__auto__,i__28085);
var k = cljs.core.nth.call(null,vec__28089,(0),null);
var v = cljs.core.nth.call(null,vec__28089,(1),null);
cljs.core.chunk_append.call(null,b__28086,((v === true)?[cljs.core.str(cljs.core.name.call(null,k))].join(''):(((v == null))?"":[cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str("\""),cljs.core.str(hickory.utils.html_escape.call(null,v)),cljs.core.str("\"")].join('')
)));

var G__28091 = (i__28085 + (1));
i__28085 = G__28091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28086),iter__28083.call(null,cljs.core.chunk_rest.call(null,s__28084__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28086),null);
}
} else {
var vec__28090 = cljs.core.first.call(null,s__28084__$2);
var k = cljs.core.nth.call(null,vec__28090,(0),null);
var v = cljs.core.nth.call(null,vec__28090,(1),null);
return cljs.core.cons.call(null,((v === true)?[cljs.core.str(cljs.core.name.call(null,k))].join(''):(((v == null))?"":[cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str("\""),cljs.core.str(hickory.utils.html_escape.call(null,v)),cljs.core.str("\"")].join('')
)),iter__28083.call(null,cljs.core.rest.call(null,s__28084__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__.call(null,attrs);
})())));
if(!(cljs.core.empty_QMARK_.call(null,attrs_str))){
return [cljs.core.str(" "),cljs.core.str(attrs_str)].join('');
} else {
return attrs_str;
}
});
/**
* Given a normalized hiccup element (such as the output of
* hickory.hiccup-utils/normalize-form; see this function's docstring
* for more detailed definition of a normalized hiccup element), renders
* it to HTML and returns it as a string.
*/
hickory.render.render_hiccup_element = (function render_hiccup_element(n_element){
var vec__28093 = n_element;
var tag = cljs.core.nth.call(null,vec__28093,(0),null);
var attrs = cljs.core.nth.call(null,vec__28093,(1),null);
var content = cljs.core.nthnext.call(null,vec__28093,(2));
if(cljs.core.truth_(hickory.utils.void_element.call(null,tag))){
return [cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,tag)),cljs.core.str(hickory.render.render_hiccup_attrs.call(null,attrs)),cljs.core.str(">")].join('');
} else {
return [cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,tag)),cljs.core.str(hickory.render.render_hiccup_attrs.call(null,attrs)),cljs.core.str(">"),cljs.core.str(hickory.render.hiccup_to_html.call(null,content)),cljs.core.str("</"),cljs.core.str(cljs.core.name.call(null,tag)),cljs.core.str(">")].join('');
}
});
/**
* Given a normalized hiccup form (such as the output of
* hickory.hiccup-utils/normalize-form; see this function's docstring
* for more detailed definition of a normalized hiccup form), renders
* it to HTML and returns it as a string.
*/
hickory.render.render_hiccup_form = (function render_hiccup_form(n_form){
if(cljs.core.vector_QMARK_.call(null,n_form)){
return hickory.render.render_hiccup_element.call(null,n_form);
} else {
return n_form;
}
});
/**
* Given a sequence of hiccup forms (as returned by as-hiccup), returns a
* string containing HTML it represents. Keep in mind this function is not super
* fast or heavy-duty, and definitely not a replacement for dedicated hiccup
* renderers, like hiccup itself, which *is* fast and heavy-duty.
* 
* Note that it will NOT in general be the case that
* 
* (= my-html-src (hiccup-to-html (as-hiccup (parse my-html-src))))
* 
* as we do not keep any letter case or whitespace information, any
* "tag-soupy" elements, attribute quote characters used, etc. It will also
* not generally be the case that this function's output will exactly match
* hiccup's.
*/
hickory.render.hiccup_to_html = (function hiccup_to_html(hiccup_forms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__28094_SHARP_){
return hickory.render.render_hiccup_form.call(null,hickory.hiccup_utils.normalize_form.call(null,p1__28094_SHARP_));
}),hiccup_forms));
});
