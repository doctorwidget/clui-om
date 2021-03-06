// Compiled by ClojureScript 0.0-2496
goog.provide('hickory.hiccup_utils');
goog.require('cljs.core');
goog.require('clojure.string');
/**
* Given two possible indexes, returns the lesser that is not -1. If both
* are -1, then -1 is returned. Useful for searching strings for multiple
* markers, as many routines will return -1 for not found.
* 
* Examples: (first-idx -1 -1) => -1
* (first-idx -1 2) => 2
* (first-idx 5 -1) => 5
* (first-idx 5 3) => 3
*/
hickory.hiccup_utils.first_idx = (function first_idx(a,b){
if((a === (-1))){
return b;
} else {
if((b === (-1))){
return a;
} else {
var x__3952__auto__ = a;
var y__3953__auto__ = b;
return ((x__3952__auto__ < y__3953__auto__) ? x__3952__auto__ : y__3953__auto__);
}
}
});
hickory.hiccup_utils.index_of = (function() {
var index_of = null;
var index_of__2 = (function (s,c){
return s.indexOf(c);
});
var index_of__3 = (function (s,c,idx){
return s.indexOf(c,idx);
});
index_of = function(s,c,idx){
switch(arguments.length){
case 2:
return index_of__2.call(this,s,c);
case 3:
return index_of__3.call(this,s,c,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
index_of.cljs$core$IFn$_invoke$arity$2 = index_of__2;
index_of.cljs$core$IFn$_invoke$arity$3 = index_of__3;
return index_of;
})()
;
/**
* clojure.string/split is a wrapper on java.lang.String/split with the limit
* parameter equal to 0, which keeps leading empty strings, but discards
* trailing empty strings. This makes no sense, so we have to write our own
* to keep the trailing empty strings.
*/
hickory.hiccup_utils.split_keep_trailing_empty = (function split_keep_trailing_empty(s,re){
return clojure.string.split.call(null,s,re,(-1));
});
/**
* Given a hiccup tag element, returns true iff the tag is in 'valid' hiccup
* format. Which in this function means:
* 1. Tag name is non-empty.
* 2. If there is an id, there is only one.
* 3. If there is an id, it is nonempty.
* 4. If there is an id, it comes before any classes.
* 5. Any class name is nonempty.
*/
hickory.hiccup_utils.tag_well_formed_QMARK_ = (function tag_well_formed_QMARK_(tag_elem){
var tag_elem__$1 = cljs.core.name.call(null,tag_elem);
var hash_idx = (hickory.hiccup_utils.index_of.call(null,tag_elem__$1,"#") | (0));
var dot_idx = (hickory.hiccup_utils.index_of.call(null,tag_elem__$1,".") | (0));
var tag_cutoff = hickory.hiccup_utils.first_idx.call(null,hash_idx,dot_idx);
var and__3616__auto__ = ((0) < cljs.core.count.call(null,tag_elem__$1));
if(and__3616__auto__){
var and__3616__auto____$1 = (((tag_cutoff === (-1)))?true:(tag_cutoff > (0)));
if(and__3616__auto____$1){
var and__3616__auto____$2 = (((hash_idx === (-1)))?true:(((-1) === hickory.hiccup_utils.index_of.call(null,tag_elem__$1,"#",(hash_idx + (1))))) && (((hash_idx + (1)) < hickory.hiccup_utils.first_idx.call(null,hickory.hiccup_utils.index_of.call(null,tag_elem__$1,".",(hash_idx + (1))),cljs.core.count.call(null,tag_elem__$1)))));
if(and__3616__auto____$2){
var and__3616__auto____$3 = (((cljs.core.not_EQ_.call(null,hash_idx,(-1))) && (cljs.core.not_EQ_.call(null,dot_idx,(-1))))?(hash_idx < dot_idx):true);
if(and__3616__auto____$3){
if((dot_idx === (-1))){
return true;
} else {
var classes = tag_elem__$1.substring((dot_idx + (1)));
return cljs.core.every_QMARK_.call(null,((function (classes,and__3616__auto____$3,and__3616__auto____$2,and__3616__auto____$1,and__3616__auto__,tag_elem__$1,hash_idx,dot_idx,tag_cutoff){
return (function (p1__28095_SHARP_){
return ((0) < cljs.core.count.call(null,p1__28095_SHARP_));
});})(classes,and__3616__auto____$3,and__3616__auto____$2,and__3616__auto____$1,and__3616__auto__,tag_elem__$1,hash_idx,dot_idx,tag_cutoff))
,hickory.hiccup_utils.split_keep_trailing_empty.call(null,classes,/\./));
}
} else {
return and__3616__auto____$3;
}
} else {
return and__3616__auto____$2;
}
} else {
return and__3616__auto____$1;
}
} else {
return and__3616__auto__;
}
});
/**
* Given a well-formed hiccup tag element, return just the tag name as
* a string.
*/
hickory.hiccup_utils.tag_name = (function tag_name(tag_elem){
var tag_elem__$1 = cljs.core.name.call(null,tag_elem);
var hash_idx = (hickory.hiccup_utils.index_of.call(null,tag_elem__$1,"#") | (0));
var dot_idx = (hickory.hiccup_utils.index_of.call(null,tag_elem__$1,".") | (0));
var cutoff = hickory.hiccup_utils.first_idx.call(null,hash_idx,dot_idx);
if((cutoff === (-1))){
return tag_elem__$1;
} else {
return tag_elem__$1.substring((0),cutoff);
}
});
/**
* Given a well-formed hiccup tag element, return a vector containing
* any class names included in the tag, as strings. Ignores the hiccup
* requirement that any id on the tag must come
* first. Example: :div.foo.bar => ["foo" "bar"].
*/
hickory.hiccup_utils.class_names = (function class_names(tag_elem){
var tag_elem__$1 = cljs.core.name.call(null,tag_elem);
var curr_dot = hickory.hiccup_utils.index_of.call(null,tag_elem__$1,".");
var classes = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if((curr_dot === (-1))){
return cljs.core.persistent_BANG_.call(null,classes);
} else {
var next_dot = hickory.hiccup_utils.index_of.call(null,tag_elem__$1,".",(curr_dot + (1)));
var next_hash = hickory.hiccup_utils.index_of.call(null,tag_elem__$1,"#",(curr_dot + (1)));
var cutoff = hickory.hiccup_utils.first_idx.call(null,next_dot,next_hash);
if((cutoff === (-1))){
var G__28096 = next_dot;
var G__28097 = cljs.core.conj_BANG_.call(null,classes,tag_elem__$1.substring((curr_dot + (1))));
curr_dot = G__28096;
classes = G__28097;
continue;
} else {
var G__28098 = next_dot;
var G__28099 = cljs.core.conj_BANG_.call(null,classes,tag_elem__$1.substring((curr_dot + (1)),cutoff));
curr_dot = G__28098;
classes = G__28099;
continue;
}
}
break;
}
});
/**
* Given a well-formed hiccup tag element, return a string containing
* the id, or nil if there isn't one.
*/
hickory.hiccup_utils.id = (function id(tag_elem){
var tag_elem__$1 = cljs.core.name.call(null,tag_elem);
var hash_idx = (hickory.hiccup_utils.index_of.call(null,tag_elem__$1,"#") | (0));
var next_dot_idx = (hickory.hiccup_utils.index_of.call(null,tag_elem__$1,".",hash_idx) | (0));
if((hash_idx === (-1))){
return null;
} else {
if((next_dot_idx === (-1))){
return tag_elem__$1.substring((hash_idx + (1)));
} else {
return tag_elem__$1.substring((hash_idx + (1)),next_dot_idx);
}
}
});
/**
* Given a sequence of hiccup forms, presumably the content forms of another
* hiccup element, return a new sequence with any sequence elements expanded
* into the main sequence. This logic does not apply recursively, so sequences
* inside sequences won't be expanded out. Also note that this really only
* applies to sequences; things that seq? returns true on. So this excludes
* vectors.
* (expand-content-seqs [1 '(2 3) (for [x [1 2 3]] (* x 2)) [5]])
* ==> (1 2 3 2 4 6 [5])
*/
hickory.hiccup_utils.expand_content_seqs = (function expand_content_seqs(content){
var remaining_content = content;
var result = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if((remaining_content == null)){
return cljs.core.persistent_BANG_.call(null,result);
} else {
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,remaining_content))){
var G__28100 = cljs.core.next.call(null,remaining_content);
var G__28101 = (function (){var remaining_seq = cljs.core.first.call(null,remaining_content);
var result__$1 = result;
while(true){
if((remaining_seq == null)){
return result__$1;
} else {
var G__28102 = cljs.core.next.call(null,remaining_seq);
var G__28103 = cljs.core.conj_BANG_.call(null,result__$1,cljs.core.first.call(null,remaining_seq));
remaining_seq = G__28102;
result__$1 = G__28103;
continue;
}
break;
}
})();
remaining_content = G__28100;
result = G__28101;
continue;
} else {
var G__28104 = cljs.core.next.call(null,remaining_content);
var G__28105 = cljs.core.conj_BANG_.call(null,result,cljs.core.first.call(null,remaining_content));
remaining_content = G__28104;
result = G__28105;
continue;
}
}
break;
}
});
/**
* Given a well-formed hiccup form, ensure that it is in the form
* [tag attributes content1 ... contentN].
* That is, an unadorned tag name (keyword, lowercase), all attributes in the
* attribute map in the second element, and then any children. Note that this
* does not happen recursively; content is not modified.
*/
hickory.hiccup_utils.normalize_element = (function normalize_element(hiccup_form){
var vec__28108 = hiccup_form;
var tag_elem = cljs.core.nth.call(null,vec__28108,(0),null);
var content = cljs.core.nthnext.call(null,vec__28108,(1));
if(!(hickory.hiccup_utils.tag_well_formed_QMARK_.call(null,tag_elem))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid input: Tag element"),cljs.core.str(tag_elem),cljs.core.str("is not well-formed.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var tag_name = cljs.core.keyword.call(null,clojure.string.lower_case.call(null,hickory.hiccup_utils.tag_name.call(null,tag_elem)));
var tag_classes = hickory.hiccup_utils.class_names.call(null,tag_elem);
var tag_id = hickory.hiccup_utils.id.call(null,tag_elem);
var tag_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),tag_id,new cljs.core.Keyword(null,"class","class",-2030961996),((!(cljs.core.empty_QMARK_.call(null,tag_classes)))?clojure.string.join.call(null," ",tag_classes):null)], null);
var vec__28109 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,content)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,content),cljs.core.rest.call(null,content)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,content], null));
var map_attrs = cljs.core.nth.call(null,vec__28109,(0),null);
var content__$1 = cljs.core.nth.call(null,vec__28109,(1),null);
var attrs = cljs.core.merge.call(null,tag_attrs,map_attrs);
return cljs.core.apply.call(null,cljs.core.vector,tag_name,attrs,content__$1);
});
/**
* Given a well-formed hiccup form, recursively normalizes it, so that it and
* all children elements will also be normalized. A normalized form is in the
* form
* [tag attributes content1 ... contentN].
* That is, an unadorned tag name (keyword, lowercase), all attributes in the
* attribute map in the second element, and then any children. Any content
* that is a sequence is also expanded out into the main sequence of content
* items.
*/
hickory.hiccup_utils.normalize_form = (function normalize_form(form){
if(typeof form === 'string'){
return form;
} else {
var vec__28112 = hickory.hiccup_utils.normalize_element.call(null,form);
var tag = cljs.core.nth.call(null,vec__28112,(0),null);
var attrs = cljs.core.nth.call(null,vec__28112,(1),null);
var contents = cljs.core.nthnext.call(null,vec__28112,(2));
return cljs.core.apply.call(null,cljs.core.vector,tag,attrs,cljs.core.map.call(null,((function (vec__28112,tag,attrs,contents){
return (function (p1__28110_SHARP_){
if(cljs.core.vector_QMARK_.call(null,p1__28110_SHARP_)){
return normalize_form.call(null,p1__28110_SHARP_);
} else {
return p1__28110_SHARP_;
}
});})(vec__28112,tag,attrs,contents))
,hickory.hiccup_utils.expand_content_seqs.call(null,contents)));
}
});
