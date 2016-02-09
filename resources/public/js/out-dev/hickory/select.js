// Compiled by ClojureScript 0.0-2496
goog.provide('hickory.select');
goog.require('cljs.core');
goog.require('hickory.zip');
goog.require('clojure.string');
goog.require('clojure.zip');
/**
* Calls f on val until pred called on the result is true. If not, it
* repeats by calling f on the result, etc. The value that made pred
* return true is returned.
*/
hickory.select.until = (function until(f,val,pred){
while(true){
var next_val = f.call(null,val);
if(cljs.core.truth_(pred.call(null,next_val))){
return next_val;
} else {
var G__28171 = f;
var G__28172 = next_val;
var G__28173 = pred;
f = G__28171;
val = G__28172;
pred = G__28173;
continue;
}
break;
}
});
/**
* Calls f on val until pred called on the result is true. If not, it
* repeats by calling f on the result, etc. The count of times this
* process was repeated until pred returned true is returned.
*/
hickory.select.count_until = (function count_until(f,val,pred){
var next_val = val;
var cnt = (0);
while(true){
if(cljs.core.truth_(pred.call(null,next_val))){
return cnt;
} else {
var G__28174 = f.call(null,next_val);
var G__28175 = (cnt + (1));
next_val = G__28174;
cnt = G__28175;
continue;
}
break;
}
});
/**
* Like clojure.zip/next, but moves until it reaches a node that returns
* true when the function in the pred argument is called on them, or reaches
* the end.
*/
hickory.select.next_pred = (function next_pred(hzip_loc,pred){
return hickory.select.until.call(null,clojure.zip.next,hzip_loc,(function (p1__28176_SHARP_){
var or__3628__auto__ = clojure.zip.end_QMARK_.call(null,p1__28176_SHARP_);
if(or__3628__auto__){
return or__3628__auto__;
} else {
return pred.call(null,p1__28176_SHARP_);
}
}));
});
/**
* Like clojure.zip/prev, but moves until it reaches a node that returns
* true when the function in the pred argument is called on them, or reaches
* the beginning.
*/
hickory.select.prev_pred = (function prev_pred(hzip_loc,pred){
return hickory.select.until.call(null,clojure.zip.prev,hzip_loc,(function (p1__28177_SHARP_){
var or__3628__auto__ = (p1__28177_SHARP_ == null);
if(or__3628__auto__){
return or__3628__auto__;
} else {
return pred.call(null,p1__28177_SHARP_);
}
}));
});
/**
* Like clojure.zip/left, but moves until it reaches a node that returns
* true when the function in the pred argument is called on them, or reaches
* the left boundary of the current group of siblings.
*/
hickory.select.left_pred = (function left_pred(hzip_loc,pred){
return hickory.select.until.call(null,clojure.zip.left,hzip_loc,(function (p1__28178_SHARP_){
var or__3628__auto__ = (p1__28178_SHARP_ == null);
if(or__3628__auto__){
return or__3628__auto__;
} else {
return pred.call(null,p1__28178_SHARP_);
}
}));
});
/**
* Like clojure.zip/right, but moves until it reaches a node that returns
* true when the function in the pred argument is called on them, or reaches
* the right boundary of the current group of siblings.
*/
hickory.select.right_pred = (function right_pred(hzip_loc,pred){
return hickory.select.until.call(null,clojure.zip.right,hzip_loc,(function (p1__28179_SHARP_){
var or__3628__auto__ = (p1__28179_SHARP_ == null);
if(or__3628__auto__){
return or__3628__auto__;
} else {
return pred.call(null,p1__28179_SHARP_);
}
}));
});
/**
* Like clojure.zip/next, but only counts moves to nodes that have
* the given type.
*/
hickory.select.next_of_node_type = (function next_of_node_type(hzip_loc,node_type){
return hickory.select.next_pred.call(null,hzip_loc,(function (p1__28180_SHARP_){
return cljs.core._EQ_.call(null,node_type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,p1__28180_SHARP_)));
}));
});
/**
* Like clojure.zip/prev, but only counts moves to nodes that have
* the given type.
*/
hickory.select.prev_of_node_type = (function prev_of_node_type(hzip_loc,node_type){
return hickory.select.prev_pred.call(null,hzip_loc,(function (p1__28181_SHARP_){
return cljs.core._EQ_.call(null,node_type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,p1__28181_SHARP_)));
}));
});
/**
* Like clojure.zip/left, but only counts moves to nodes that have
* the given type.
*/
hickory.select.left_of_node_type = (function left_of_node_type(hzip_loc,node_type){
return hickory.select.left_pred.call(null,hzip_loc,(function (p1__28182_SHARP_){
return cljs.core._EQ_.call(null,node_type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,p1__28182_SHARP_)));
}));
});
/**
* Like clojure.zip/right, but only counts moves to nodes that have
* the given type.
*/
hickory.select.right_of_node_type = (function right_of_node_type(hzip_loc,node_type){
return hickory.select.right_pred.call(null,hzip_loc,(function (p1__28183_SHARP_){
return cljs.core._EQ_.call(null,node_type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,p1__28183_SHARP_)));
}));
});
/**
* Given a zipper loc, returns the zipper loc that is the first one after
* the arg's subtree, if there is a subtree. If there is no loc after this
* loc's subtree, returns the end node.
*/
hickory.select.after_subtree = (function after_subtree(zip_loc){
if(clojure.zip.end_QMARK_.call(null,zip_loc)){
return zip_loc;
} else {
var or__3628__auto__ = clojure.zip.right.call(null,zip_loc);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var curr_loc = zip_loc;
while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,curr_loc))){
var or__3628__auto____$1 = clojure.zip.right.call(null,clojure.zip.up.call(null,curr_loc));
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
var G__28184 = clojure.zip.up.call(null,curr_loc);
curr_loc = G__28184;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,curr_loc),new cljs.core.Keyword(null,"end","end",-268185958)], null);
}
break;
}
}
}
});
/**
* Given a selector function and a loc inside a hickory zip data structure,
* returns the next zipper loc that satisfies the selection function. This can
* be the loc that is passed in, so be sure to move to the next loc if you
* want to use this function to exhaustively search through a tree manually.
* Note that if there is no next node that satisfies the selection function, nil
* is returned.
* 
* The third argument, if present, must be a function of one argument that is
* called on a zipper loc to return the next loc to consider in the search. By
* default, this argument is zip/next. The fourth argument, if present, must be
* a function of one argument that is called on a zipper loc to determine if
* the end of the search has been reached (true return value). When the fourth
* argument returns true on a loc, that loc is not considered in the search and
* the search finishes with a nil return. By default, the fourth argument is
* zip/end?.
*/
hickory.select.select_next_loc = (function() {
var select_next_loc = null;
var select_next_loc__2 = (function (selector_fn,hzip_loc){
return select_next_loc.call(null,selector_fn,hzip_loc,clojure.zip.next);
});
var select_next_loc__3 = (function (selector_fn,hzip_loc,next_fn){
return select_next_loc.call(null,selector_fn,hzip_loc,next_fn,clojure.zip.end_QMARK_);
});
var select_next_loc__4 = (function (selector_fn,hzip_loc,next_fn,end_QMARK__fn){
var loc = hzip_loc;
while(true){
if(cljs.core.truth_(end_QMARK__fn.call(null,loc))){
return null;
} else {
if(cljs.core.truth_(selector_fn.call(null,loc))){
return loc;
} else {
var G__28185 = next_fn.call(null,loc);
loc = G__28185;
continue;
}
}
break;
}
});
select_next_loc = function(selector_fn,hzip_loc,next_fn,end_QMARK__fn){
switch(arguments.length){
case 2:
return select_next_loc__2.call(this,selector_fn,hzip_loc);
case 3:
return select_next_loc__3.call(this,selector_fn,hzip_loc,next_fn);
case 4:
return select_next_loc__4.call(this,selector_fn,hzip_loc,next_fn,end_QMARK__fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_next_loc.cljs$core$IFn$_invoke$arity$2 = select_next_loc__2;
select_next_loc.cljs$core$IFn$_invoke$arity$3 = select_next_loc__3;
select_next_loc.cljs$core$IFn$_invoke$arity$4 = select_next_loc__4;
return select_next_loc;
})()
;
/**
* Given a selector function and a hickory data structure, returns a vector
* containing all of the zipper locs selected by the selector function.
*/
hickory.select.select_locs = (function select_locs(selector_fn,hickory_tree){
var loc = hickory.select.select_next_loc.call(null,selector_fn,hickory.zip.hickory_zip.call(null,hickory_tree));
var selected_nodes = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if((loc == null)){
return cljs.core.persistent_BANG_.call(null,selected_nodes);
} else {
var G__28186 = hickory.select.select_next_loc.call(null,selector_fn,clojure.zip.next.call(null,loc));
var G__28187 = cljs.core.conj_BANG_.call(null,selected_nodes,loc);
loc = G__28186;
selected_nodes = G__28187;
continue;
}
break;
}
});
/**
* Given a selector function and a hickory data structure, returns a vector
* containing all of the hickory nodes selected by the selector function.
*/
hickory.select.select = (function select(selector_fn,hickory_tree){
return cljs.core.mapv.call(null,clojure.zip.node,hickory.select.select_locs.call(null,selector_fn,hickory_tree));
});
/**
* Return a function that takes a zip-loc argument and returns the
* zip-loc passed in iff it has the given node type. The type
* argument can be a String or Named (keyword, symbol). The node type
* comparison is done case-insensitively.
*/
hickory.select.node_type = (function node_type(type){
return (function (hzip_loc){
var node = clojure.zip.node.call(null,hzip_loc);
var node_type__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_((function (){var and__3616__auto__ = node_type__$1;
if(cljs.core.truth_(and__3616__auto__)){
return cljs.core._EQ_.call(null,clojure.string.lower_case.call(null,cljs.core.name.call(null,node_type__$1)),clojure.string.lower_case.call(null,cljs.core.name.call(null,type)));
} else {
return and__3616__auto__;
}
})())){
return hzip_loc;
} else {
return null;
}
});
});
/**
* Return a function that takes a zip-loc argument and returns the
* zip-loc passed in iff it has the given tag. The tag argument can be
* a String or Named (keyword, symbol). The tag name comparison
* is done case-insensitively.
*/
hickory.select.tag = (function tag(tag__$1){
return (function (hzip_loc){
var node = clojure.zip.node.call(null,hzip_loc);
var node_tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_((function (){var and__3616__auto__ = node_tag;
if(cljs.core.truth_(and__3616__auto__)){
return cljs.core._EQ_.call(null,clojure.string.lower_case.call(null,cljs.core.name.call(null,node_tag)),clojure.string.lower_case.call(null,cljs.core.name.call(null,tag__$1)));
} else {
return and__3616__auto__;
}
})())){
return hzip_loc;
} else {
return null;
}
});
});
/**
* Returns a function that takes a zip-loc argument and returns the
* zip-loc passed in iff it has the given attribute, and that attribute
* optionally satisfies a predicate given as an additional argument. With
* a single argument, the attribute name (a string, keyword, or symbol),
* the function returned will return the zip-loc if that attribute is
* present (and has any value) on the zip-loc's node. The attribute name
* will be compared case-insensitively, but the attribute value (if present),
* will be passed as-is to the predicate.
* 
* If the predicate argument is given, it will only return the zip-loc if
* that predicate is satisfied when given the attribute's value as its only
* argument. Note that the predicate only gets called when the attribute is
* present, so it can assume its argument is not nil.
*/
hickory.select.attr = (function() {
var attr = null;
var attr__1 = (function (attr_name){
return attr.call(null,attr_name,(function (_){
return true;
}));
});
var attr__2 = (function (attr_name,predicate){
return (function (hzip_loc){
var node = clojure.zip.node.call(null,hzip_loc);
var attr_key = cljs.core.keyword.call(null,clojure.string.lower_case.call(null,cljs.core.name.call(null,attr_name)));
if(cljs.core.truth_((function (){var and__3616__auto__ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),attr_key);
if(and__3616__auto__){
return predicate.call(null,cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attr_key], null)));
} else {
return and__3616__auto__;
}
})())){
return hzip_loc;
} else {
return null;
}
});
});
attr = function(attr_name,predicate){
switch(arguments.length){
case 1:
return attr__1.call(this,attr_name);
case 2:
return attr__2.call(this,attr_name,predicate);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
attr.cljs$core$IFn$_invoke$arity$1 = attr__1;
attr.cljs$core$IFn$_invoke$arity$2 = attr__2;
return attr;
})()
;
/**
* Returns a function that takes a zip-loc argument and returns the
* zip-loc passed in iff it has the given id. The id argument can be
* a String or Named (keyword, symbol). The id name comparison
* is done case-insensitively.
*/
hickory.select.id = (function id(id__$1){
return hickory.select.attr.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__28188_SHARP_){
return cljs.core._EQ_.call(null,clojure.string.lower_case.call(null,p1__28188_SHARP_),clojure.string.lower_case.call(null,cljs.core.name.call(null,id__$1)));
}));
});
/**
* Returns a function that takes a zip-loc argument and returns the
* zip-loc passed in iff it has the given class. The class argument can
* be a String or Named (keyword, symbol). The class name comparison
* is done case-insensitively.
*/
hickory.select.class$ = (function class$(class_name){
var parse_classes = (function parse_classes(class_str){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapv.call(null,clojure.string.lower_case,clojure.string.split.call(null,class_str,/ /)));
});
return hickory.select.attr.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__28189_SHARP_){
return cljs.core.contains_QMARK_.call(null,parse_classes.call(null,p1__28189_SHARP_),clojure.string.lower_case.call(null,cljs.core.name.call(null,class_name)));
}));
});
/**
* This selector takes no args, it simply is the selector function. It returns
* true on any element it is called on; corresponds to the CSS '*' selector.
*/
hickory.select.any = (function any(hzip_loc){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,hzip_loc)))){
return hzip_loc;
} else {
return null;
}
});
/**
* Another name for the any selector, to express that it can be used to only
* select elements.
*/
hickory.select.element = hickory.select.any;
/**
* This selector takes no args, it simply is the selector function. It returns
* the zip-loc passed in iff that loc is an element, and it has a parent
* that is also an element.
*/
hickory.select.element_child = (function element_child(hzip_loc){
var possible_parent = clojure.zip.up.call(null,hzip_loc);
var and__3616__auto__ = hickory.select.element.call(null,hzip_loc);
if(cljs.core.truth_(and__3616__auto__)){
var and__3616__auto____$1 = possible_parent;
if(cljs.core.truth_(and__3616__auto____$1)){
return hickory.select.element.call(null,possible_parent);
} else {
return and__3616__auto____$1;
}
} else {
return and__3616__auto__;
}
});
/**
* This selector takes no args, it simply is the selector function. It returns
* the zip-loc of the root node (the HTML element).
*/
hickory.select.root = (function root(hzip_loc){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,hzip_loc)))){
return hzip_loc;
} else {
return null;
}
});
/**
* Returns a function that takes a zip-loc argument and returns the zip-loc
* passed in iff it has some text node in its contents that matches the regular
* expression. Note that this only applies to the direct text content of a node;
* nodes which have the given text in one of their child nodes will not be
* selected.
*/
hickory.select.find_in_text = (function find_in_text(re){
return (function (hzip_loc){
return cljs.core.some.call(null,(function (p1__28190_SHARP_){
return cljs.core.re_find.call(null,re,p1__28190_SHARP_);
}),cljs.core.filter.call(null,cljs.core.string_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,hzip_loc))));
});
});
/**
* This selector returns a selector function that selects its argument if
* that argument is some "distance" from a "boundary." This is an abstract
* way of phrasing it, but it captures the full generality.
* 
* The selector this function returns will apply the move argument to its own
* output, beginning with its zipper loc argument, until the term-pred argument
* called on its output returns true. At that point, the number of times the
* move function was called successfully is compared to kn+c; if there exists
* some value of k such that the two quantities are equal, then the selector
* will return the argument zipper loc successfully.
* 
* For example, (n-moves-until 2 1 clojure.zip/left nil?) will return a selector
* that calls zip/left on its own output, beginning with the argument zipper
* loc, until its return value is nil (nil? returns true). Suppose it called
* left 5 times before zip/left returned nil. Then the selector will return
* with success, since 2k+1 = 5 for k = 2.
* 
* Most nth-child-* selectors in this package use n-moves-until in their
* implementation.
*/
hickory.select.n_moves_until = (function n_moves_until(n,c,move,term_pred){
return (function (hzip_loc){
var distance = hickory.select.count_until.call(null,move,hzip_loc,term_pred);
if(((0) === n)){
if((distance === c)){
return hzip_loc;
} else {
return null;
}
} else {
if(((0) === cljs.core.rem.call(null,(distance - c),n))){
return hzip_loc;
} else {
return null;
}
}
});
});
/**
* Returns a function that returns true if the node is the nth child of
* its parent (and it has a parent) of the given tag type. First element is 1,
* last is n.
*/
hickory.select.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__2 = (function (c,typ){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"odd","odd",-1213409872),c)){
return nth_of_type.call(null,(2),(1),typ);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"even","even",-275845692),c)){
return nth_of_type.call(null,(2),(0),typ);
} else {
return nth_of_type.call(null,(0),c,typ);

}
}
});
var nth_of_type__3 = (function (n,c,typ){
return (function (hzip_loc){
if(cljs.core.truth_((function (){var and__3616__auto__ = hickory.select.element_child.call(null,hzip_loc);
if(cljs.core.truth_(and__3616__auto__)){
return cljs.core._EQ_.call(null,typ,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,hzip_loc)));
} else {
return and__3616__auto__;
}
})())){
var sel = hickory.select.n_moves_until.call(null,n,c,(function (p1__28191_SHARP_){
return hickory.select.left_pred.call(null,p1__28191_SHARP_,(function (x){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,x)),typ);
}));
}),cljs.core.nil_QMARK_);
return sel.call(null,hzip_loc);
} else {
return null;
}
});
});
nth_of_type = function(n,c,typ){
switch(arguments.length){
case 2:
return nth_of_type__2.call(this,n,c);
case 3:
return nth_of_type__3.call(this,n,c,typ);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_of_type.cljs$core$IFn$_invoke$arity$2 = nth_of_type__2;
nth_of_type.cljs$core$IFn$_invoke$arity$3 = nth_of_type__3;
return nth_of_type;
})()
;
/**
* Returns a function that returns true if the node is the nth last child of
* its parent (and it has a parent) of the given tag type. First element is 1,
* last is n.
*/
hickory.select.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__2 = (function (c,typ){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"odd","odd",-1213409872),c)){
return nth_last_of_type.call(null,(2),(1),typ);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"even","even",-275845692),c)){
return nth_last_of_type.call(null,(2),(0),typ);
} else {
return nth_last_of_type.call(null,(0),c,typ);

}
}
});
var nth_last_of_type__3 = (function (n,c,typ){
return (function (hzip_loc){
if(cljs.core.truth_((function (){var and__3616__auto__ = hickory.select.element_child.call(null,hzip_loc);
if(cljs.core.truth_(and__3616__auto__)){
return cljs.core._EQ_.call(null,typ,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,hzip_loc)));
} else {
return and__3616__auto__;
}
})())){
var sel = hickory.select.n_moves_until.call(null,n,c,(function (p1__28192_SHARP_){
return hickory.select.right_pred.call(null,p1__28192_SHARP_,(function (x){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,x)),typ);
}));
}),cljs.core.nil_QMARK_);
return sel.call(null,hzip_loc);
} else {
return null;
}
});
});
nth_last_of_type = function(n,c,typ){
switch(arguments.length){
case 2:
return nth_last_of_type__2.call(this,n,c);
case 3:
return nth_last_of_type__3.call(this,n,c,typ);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_last_of_type.cljs$core$IFn$_invoke$arity$2 = nth_last_of_type__2;
nth_last_of_type.cljs$core$IFn$_invoke$arity$3 = nth_last_of_type__3;
return nth_last_of_type;
})()
;
/**
* Returns a function that returns true if the node is the nth child of
* its parent (and it has a parent). First element is 1, last is n.
*/
hickory.select.nth_child = (function() {
var nth_child = null;
var nth_child__1 = (function (c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"odd","odd",-1213409872),c)){
return nth_child.call(null,(2),(1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"even","even",-275845692),c)){
return nth_child.call(null,(2),(0));
} else {
return nth_child.call(null,(0),c);

}
}
});
var nth_child__2 = (function (n,c){
return (function (hzip_loc){
if(cljs.core.truth_(hickory.select.element_child.call(null,hzip_loc))){
var sel = hickory.select.n_moves_until.call(null,n,c,(function (p1__28193_SHARP_){
return hickory.select.left_of_node_type.call(null,p1__28193_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),cljs.core.nil_QMARK_);
return sel.call(null,hzip_loc);
} else {
return null;
}
});
});
nth_child = function(n,c){
switch(arguments.length){
case 1:
return nth_child__1.call(this,n);
case 2:
return nth_child__2.call(this,n,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_child.cljs$core$IFn$_invoke$arity$1 = nth_child__1;
nth_child.cljs$core$IFn$_invoke$arity$2 = nth_child__2;
return nth_child;
})()
;
/**
* Returns a function that returns true if the node has n siblings after it,
* and has a parent.
*/
hickory.select.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__1 = (function (c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"odd","odd",-1213409872),c)){
return nth_last_child.call(null,(2),(1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"even","even",-275845692),c)){
return nth_last_child.call(null,(2),(0));
} else {
return nth_last_child.call(null,(0),c);

}
}
});
var nth_last_child__2 = (function (n,c){
return (function (hzip_loc){
if(cljs.core.truth_(hickory.select.element_child.call(null,hzip_loc))){
var sel = hickory.select.n_moves_until.call(null,n,c,(function (p1__28194_SHARP_){
return hickory.select.right_of_node_type.call(null,p1__28194_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),cljs.core.nil_QMARK_);
return sel.call(null,hzip_loc);
} else {
return null;
}
});
});
nth_last_child = function(n,c){
switch(arguments.length){
case 1:
return nth_last_child__1.call(this,n);
case 2:
return nth_last_child__2.call(this,n,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_last_child.cljs$core$IFn$_invoke$arity$1 = nth_last_child__1;
nth_last_child.cljs$core$IFn$_invoke$arity$2 = nth_last_child__2;
return nth_last_child;
})()
;
/**
* This selector takes no args, it is simply the selector. Returns
* true if the node is the first child of its parent (and it has a
* parent).
*/
hickory.select.first_child = (function first_child(hzip_loc){
var and__3616__auto__ = hickory.select.element_child.call(null,hzip_loc);
if(cljs.core.truth_(and__3616__auto__)){
return hickory.select.nth_child.call(null,(1)).call(null,hzip_loc);
} else {
return and__3616__auto__;
}
});
/**
* This selector takes no args, it is simply the selector. Returns
* true if the node is the last child of its parent (and it has a
* parent.
*/
hickory.select.last_child = (function last_child(hzip_loc){
var and__3616__auto__ = hickory.select.element_child.call(null,hzip_loc);
if(cljs.core.truth_(and__3616__auto__)){
return hickory.select.nth_last_child.call(null,(1)).call(null,hzip_loc);
} else {
return and__3616__auto__;
}
});
/**
* Takes any number of selectors and returns a selector that is true if
* all of the argument selectors are true.
* @param {...*} var_args
*/
hickory.select.and = (function() { 
var and__delegate = function (selectors){
return (function (zip_loc){
if(cljs.core.every_QMARK_.call(null,(function (p1__28195_SHARP_){
return p1__28195_SHARP_.call(null,zip_loc);
}),selectors)){
return zip_loc;
} else {
return null;
}
});
};
var and = function (var_args){
var selectors = null;
if (arguments.length > 0) {
  selectors = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return and__delegate.call(this,selectors);};
and.cljs$lang$maxFixedArity = 0;
and.cljs$lang$applyTo = (function (arglist__28196){
var selectors = cljs.core.seq(arglist__28196);
return and__delegate(selectors);
});
and.cljs$core$IFn$_invoke$arity$variadic = and__delegate;
return and;
})()
;
/**
* Takes any number of selectors and returns a selector that is true if
* any of the argument selectors are true.
* @param {...*} var_args
*/
hickory.select.or = (function() { 
var or__delegate = function (selectors){
return (function (zip_loc){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__28197_SHARP_){
return p1__28197_SHARP_.call(null,zip_loc);
}),selectors))){
return zip_loc;
} else {
return null;
}
});
};
var or = function (var_args){
var selectors = null;
if (arguments.length > 0) {
  selectors = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return or__delegate.call(this,selectors);};
or.cljs$lang$maxFixedArity = 0;
or.cljs$lang$applyTo = (function (arglist__28198){
var selectors = cljs.core.seq(arglist__28198);
return or__delegate(selectors);
});
or.cljs$core$IFn$_invoke$arity$variadic = or__delegate;
return or;
})()
;
/**
* Takes a selector argument and returns a selector that is true if
* the underlying selector is false on its argument, and vice versa.
*/
hickory.select.not = (function not(selector){
return (function (hzip_loc){
if(cljs.core.not.call(null,selector.call(null,hzip_loc))){
return hzip_loc;
} else {
return null;
}
});
});
/**
* Takes a selector argument and returns a selector that is true if
* the underlying selector is false on its argument and vice versa, and
* additionally that argument is an element node. Compared to the 'not'
* selector, this corresponds more closely to the CSS equivalent, which
* will only ever select elements.
*/
hickory.select.el_not = (function el_not(selector){
return hickory.select.and.call(null,hickory.select.node_type.call(null,new cljs.core.Keyword(null,"element","element",1974019749)),hickory.select.not.call(null,selector));
});
/**
* Takes a zipper movement function and any number of selectors as arguments
* and returns a selector that returns true when the zip-loc given as the
* argument is satisfied by the first selector, and the zip-loc arrived at by
* applying the move-fn argument is satisfied by the second selector, and so
* on for all the selectors given as arguments. If the move-fn
* moves to nil before the full selector list is satisfied, the entire
* selector fails, but note that success is checked before a move to nil is
* checked, so satisfying the last selector with the last node you can move
* to succeeds.
* @param {...*} var_args
*/
hickory.select.ordered_adjacent = (function() { 
var ordered_adjacent__delegate = function (move_fn,selectors){
var selectors__$1 = cljs.core.into_array.call(null,cljs.core.IFn,selectors);
return ((function (selectors__$1){
return (function (hzip_loc){
var curr_loc = hzip_loc;
var idx = (0);
while(true){
if((idx >= cljs.core.count.call(null,selectors__$1))){
return hzip_loc;
} else {
if((curr_loc == null)){
return null;
} else {
var temp__4124__auto__ = cljs.core.nth.call(null,selectors__$1,idx).call(null,curr_loc);
if(cljs.core.truth_(temp__4124__auto__)){
var next_loc = temp__4124__auto__;
var G__28199 = move_fn.call(null,next_loc);
var G__28200 = (idx + (1));
curr_loc = G__28199;
idx = G__28200;
continue;
} else {
return null;
}

}
}
break;
}
});
;})(selectors__$1))
};
var ordered_adjacent = function (move_fn,var_args){
var selectors = null;
if (arguments.length > 1) {
  selectors = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return ordered_adjacent__delegate.call(this,move_fn,selectors);};
ordered_adjacent.cljs$lang$maxFixedArity = 1;
ordered_adjacent.cljs$lang$applyTo = (function (arglist__28201){
var move_fn = cljs.core.first(arglist__28201);
var selectors = cljs.core.rest(arglist__28201);
return ordered_adjacent__delegate(move_fn,selectors);
});
ordered_adjacent.cljs$core$IFn$_invoke$arity$variadic = ordered_adjacent__delegate;
return ordered_adjacent;
})()
;
/**
* Takes any number of selectors as arguments and returns a selector that
* returns true when the zip-loc given as the argument is at the end of
* a chain of direct child relationships specified by the selectors given as
* arguments.
* 
* Example: (child (tag :div) (class :foo) (attr :disabled))
* will select the input in
* <div><span class="foo"><input disabled></input></span></div>
* but not in
* <div><span class="foo"><b><input disabled></input></b></span></div>
* @param {...*} var_args
*/
hickory.select.child = (function() { 
var child__delegate = function (selectors){
return cljs.core.apply.call(null,hickory.select.ordered_adjacent,clojure.zip.up,cljs.core.reverse.call(null,selectors));
};
var child = function (var_args){
var selectors = null;
if (arguments.length > 0) {
  selectors = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return child__delegate.call(this,selectors);};
child.cljs$lang$maxFixedArity = 0;
child.cljs$lang$applyTo = (function (arglist__28202){
var selectors = cljs.core.seq(arglist__28202);
return child__delegate(selectors);
});
child.cljs$core$IFn$_invoke$arity$variadic = child__delegate;
return child;
})()
;
/**
* Takes any number of selectors as arguments and returns a selector that
* returns true when the zip-loc given as the argument is at the end of
* a chain of direct element sibling relationships specified by the selectors
* given as arguments.
* 
* Example: (follow-adjacent (tag :div) (class :foo))
* will select the span in
* <div>...</div><span class="foo">...</span>
* but not in
* <div>...</div><b>...</b><span class="foo">...</span>
* @param {...*} var_args
*/
hickory.select.follow_adjacent = (function() { 
var follow_adjacent__delegate = function (selectors){
return cljs.core.apply.call(null,hickory.select.ordered_adjacent,(function (p1__28203_SHARP_){
return hickory.select.left_of_node_type.call(null,p1__28203_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),cljs.core.reverse.call(null,selectors));
};
var follow_adjacent = function (var_args){
var selectors = null;
if (arguments.length > 0) {
  selectors = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return follow_adjacent__delegate.call(this,selectors);};
follow_adjacent.cljs$lang$maxFixedArity = 0;
follow_adjacent.cljs$lang$applyTo = (function (arglist__28204){
var selectors = cljs.core.seq(arglist__28204);
return follow_adjacent__delegate(selectors);
});
follow_adjacent.cljs$core$IFn$_invoke$arity$variadic = follow_adjacent__delegate;
return follow_adjacent;
})()
;
/**
* Takes any number of selectors as arguments and returns a selector that
* returns true when the zip-loc given as the argument is at the beginning of
* a chain of direct element sibling relationships specified by the selectors
* given as arguments.
* 
* Example: (precede-adjacent (tag :div) (class :foo))
* will select the div in
* <div>...</div><span class="foo">...</span>
* but not in
* <div>...</div><b>...</b><span class="foo">...</span>
* @param {...*} var_args
*/
hickory.select.precede_adjacent = (function() { 
var precede_adjacent__delegate = function (selectors){
return cljs.core.apply.call(null,hickory.select.ordered_adjacent,(function (p1__28205_SHARP_){
return hickory.select.right_of_node_type.call(null,p1__28205_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),selectors);
};
var precede_adjacent = function (var_args){
var selectors = null;
if (arguments.length > 0) {
  selectors = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return precede_adjacent__delegate.call(this,selectors);};
precede_adjacent.cljs$lang$maxFixedArity = 0;
precede_adjacent.cljs$lang$applyTo = (function (arglist__28206){
var selectors = cljs.core.seq(arglist__28206);
return precede_adjacent__delegate(selectors);
});
precede_adjacent.cljs$core$IFn$_invoke$arity$variadic = precede_adjacent__delegate;
return precede_adjacent;
})()
;
/**
* Takes a zipper movement function and any number of selectors as arguments
* and returns a selector that returns true when the zip-loc given as the
* argument is satisfied by the first selector, and some zip-loc arrived at by
* applying the move-fn argument *one or more times* is satisfied by the second
* selector, and so on for all the selectors given as arguments. If the move-fn
* moves to nil before a the full selector list is satisfied, the entire
* selector fails, but note that success is checked before a move to nil is
* checked, so satisfying the last selector with the last node you can move
* to succeeds.
* @param {...*} var_args
*/
hickory.select.ordered = (function() { 
var ordered__delegate = function (move_fn,selectors){
var selectors__$1 = cljs.core.into_array.call(null,cljs.core.IFn,selectors);
return ((function (selectors__$1){
return (function (hzip_loc){
var fst_selector = cljs.core.nth.call(null,selectors__$1,(0));
if(cljs.core.truth_(fst_selector.call(null,hzip_loc))){
var curr_loc = move_fn.call(null,hzip_loc);
var idx = (1);
while(true){
if((idx >= cljs.core.count.call(null,selectors__$1))){
return hzip_loc;
} else {
if((curr_loc == null)){
return null;
} else {
if(cljs.core.truth_(cljs.core.nth.call(null,selectors__$1,idx).call(null,curr_loc))){
var G__28207 = move_fn.call(null,curr_loc);
var G__28208 = (idx + (1));
curr_loc = G__28207;
idx = G__28208;
continue;
} else {
var G__28209 = move_fn.call(null,curr_loc);
var G__28210 = idx;
curr_loc = G__28209;
idx = G__28210;
continue;
}

}
}
break;
}
} else {
return null;
}
});
;})(selectors__$1))
};
var ordered = function (move_fn,var_args){
var selectors = null;
if (arguments.length > 1) {
  selectors = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return ordered__delegate.call(this,move_fn,selectors);};
ordered.cljs$lang$maxFixedArity = 1;
ordered.cljs$lang$applyTo = (function (arglist__28211){
var move_fn = cljs.core.first(arglist__28211);
var selectors = cljs.core.rest(arglist__28211);
return ordered__delegate(move_fn,selectors);
});
ordered.cljs$core$IFn$_invoke$arity$variadic = ordered__delegate;
return ordered;
})()
;
/**
* Takes any number of selectors as arguments and returns a selector that
* returns true when the zip-loc given as the argument is at the end of
* a chain of descendant relationships specified by the
* selectors given as arguments. To be clear, the node selected matches
* the final selector, but the previous selectors can match anywhere in
* the node's ancestry, provided they match in the order they are given
* as arguments, from top to bottom.
* 
* Example: (descendant (tag :div) (class :foo) (attr :disabled))
* will select the input in both
* <div><span class="foo"><input disabled></input></span></div>
* and
* <div><span class="foo"><b><input disabled></input></b></span></div>
* @param {...*} var_args
*/
hickory.select.descendant = (function() { 
var descendant__delegate = function (selectors){
return cljs.core.apply.call(null,hickory.select.ordered,clojure.zip.up,cljs.core.reverse.call(null,selectors));
};
var descendant = function (var_args){
var selectors = null;
if (arguments.length > 0) {
  selectors = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return descendant__delegate.call(this,selectors);};
descendant.cljs$lang$maxFixedArity = 0;
descendant.cljs$lang$applyTo = (function (arglist__28212){
var selectors = cljs.core.seq(arglist__28212);
return descendant__delegate(selectors);
});
descendant.cljs$core$IFn$_invoke$arity$variadic = descendant__delegate;
return descendant;
})()
;
/**
* Takes any number of selectors as arguments and returns a selector that
* returns true when the zip-loc given as the argument is at the end of
* a chain of element sibling relationships specified by the selectors
* given as arguments; intervening elements that do not satisfy a selector
* are simply ignored and do not prevent a match.
* 
* Example: (follow (tag :div) (class :foo))
* will select the span in both
* <div>...</div><span class="foo">...</span>
* and
* <div>...</div><b>...</b><span class="foo">...</span>
* @param {...*} var_args
*/
hickory.select.follow = (function() { 
var follow__delegate = function (selectors){
return cljs.core.apply.call(null,hickory.select.ordered,(function (p1__28213_SHARP_){
return hickory.select.left_of_node_type.call(null,p1__28213_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),cljs.core.reverse.call(null,selectors));
};
var follow = function (var_args){
var selectors = null;
if (arguments.length > 0) {
  selectors = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return follow__delegate.call(this,selectors);};
follow.cljs$lang$maxFixedArity = 0;
follow.cljs$lang$applyTo = (function (arglist__28214){
var selectors = cljs.core.seq(arglist__28214);
return follow__delegate(selectors);
});
follow.cljs$core$IFn$_invoke$arity$variadic = follow__delegate;
return follow;
})()
;
/**
* Takes any number of selectors as arguments and returns a selector that
* returns true when the zip-loc given as the argument is at the beginning of
* a chain of element sibling relationships specified by the selectors
* given as arguments; intervening elements that do not satisfy a selector
* are simply ignored and do not prevent a match.
* 
* Example: (precede (tag :div) (class :foo))
* will select the div in both
* <div>...</div><span class="foo">...</span>
* and
* <div>...</div><b>...</b><span class="foo">...</span>
* @param {...*} var_args
*/
hickory.select.precede = (function() { 
var precede__delegate = function (selectors){
return cljs.core.apply.call(null,hickory.select.ordered,(function (p1__28215_SHARP_){
return hickory.select.right_of_node_type.call(null,p1__28215_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),selectors);
};
var precede = function (var_args){
var selectors = null;
if (arguments.length > 0) {
  selectors = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return precede__delegate.call(this,selectors);};
precede.cljs$lang$maxFixedArity = 0;
precede.cljs$lang$applyTo = (function (arglist__28216){
var selectors = cljs.core.seq(arglist__28216);
return precede__delegate(selectors);
});
precede.cljs$core$IFn$_invoke$arity$variadic = precede__delegate;
return precede;
})()
;
/**
* Takes a selector as argument and returns a selector that returns true
* when some descendant node of the zip-loc given as the argument satisfies
* the selector.
* 
* Be aware that because this selector must do a full sub-tree search on
* each node examined, it can have terrible performance. It's helpful if this is
* a late clause in an `and`, to prevent it from even attempting to match
* unless other criteria have been met first.
* 
* Example: (has-descendant (tag :div))
* will select the span and the outer div, but not the inner div, in
* <span><div><div></div></div></span>
*/
hickory.select.has_descendant = (function has_descendant(selector){
return (function (hzip_loc){
var subtree_start_loc = clojure.zip.down.call(null,hzip_loc);
var has_children_QMARK_ = cljs.core.not_EQ_.call(null,null,subtree_start_loc);
if(has_children_QMARK_){
var subtree_end_loc = hickory.select.after_subtree.call(null,hzip_loc);
if(cljs.core.truth_(hickory.select.select_next_loc.call(null,selector,subtree_start_loc,clojure.zip.next,((function (subtree_end_loc,subtree_start_loc,has_children_QMARK_){
return (function (p1__28217_SHARP_){
return cljs.core._EQ_.call(null,p1__28217_SHARP_,subtree_end_loc);
});})(subtree_end_loc,subtree_start_loc,has_children_QMARK_))
))){
return hzip_loc;
} else {
return null;
}
} else {
return null;
}
});
});
/**
* Takes a selector as argument and returns a selector that returns true
* when some direct child node of the zip-loc given as the argument satisfies
* the selector.
* 
* Example: (has-child (tag :div))
* will select only the inner span in
* <div><span><div></div></span></div>
*/
hickory.select.has_child = (function has_child(selector){
return (function (hzip_loc){
var subtree_start_loc = clojure.zip.down.call(null,hzip_loc);
var has_children_QMARK_ = cljs.core.not_EQ_.call(null,null,subtree_start_loc);
if(has_children_QMARK_){
if(cljs.core.truth_(hickory.select.select_next_loc.call(null,selector,subtree_start_loc,clojure.zip.right,((function (subtree_start_loc,has_children_QMARK_){
return (function (p1__28218_SHARP_){
return (p1__28218_SHARP_ == null);
});})(subtree_start_loc,has_children_QMARK_))
))){
return hzip_loc;
} else {
return null;
}
} else {
return null;
}
});
});
