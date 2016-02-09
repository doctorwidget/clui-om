// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.svg.utils');
goog.require('cljs.core');
goog.require('hickory.render');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('hickory.select');
goog.require('clojure.string');
goog.require('hickory.core');
/**
* Load an SVG via a remote call. Returns a core.async channel that will
* eventually hold the response. There's nothing SVG-specific about this
* process; it's just a convenient wrapper for using cljs-http.
*/
clui_om.svg.utils.load_svg = (function load_svg(uri){
var out = cljs.core.async.chan.call(null);
var c__6508__auto___20975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___20975,out){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___20975,out){
return (function (state_20960){
var state_val_20961 = (state_20960[(1)]);
if((state_val_20961 === (5))){
var inst_20954 = (state_20960[(2)]);
var inst_20955 = cljs.core.get.call(null,inst_20954,new cljs.core.Keyword(null,"headers","headers",-835030129));
var inst_20956 = cljs.core.get.call(null,inst_20954,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_20957 = cljs.core.get.call(null,inst_20954,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_20958 = cljs.core.async.put_BANG_.call(null,out,inst_20956);
var state_20960__$1 = (function (){var statearr_20962 = state_20960;
(statearr_20962[(7)] = inst_20957);

(statearr_20962[(8)] = inst_20955);

return statearr_20962;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20960__$1,inst_20958);
} else {
if((state_val_20961 === (4))){
var inst_20948 = (state_20960[(9)]);
var state_20960__$1 = state_20960;
var statearr_20963_20976 = state_20960__$1;
(statearr_20963_20976[(2)] = inst_20948);

(statearr_20963_20976[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (3))){
var inst_20948 = (state_20960[(9)]);
var inst_20951 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20948);
var state_20960__$1 = state_20960;
var statearr_20964_20977 = state_20960__$1;
(statearr_20964_20977[(2)] = inst_20951);

(statearr_20964_20977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (2))){
var inst_20948 = (state_20960[(9)]);
var inst_20948__$1 = (state_20960[(2)]);
var inst_20949 = cljs.core.seq_QMARK_.call(null,inst_20948__$1);
var state_20960__$1 = (function (){var statearr_20965 = state_20960;
(statearr_20965[(9)] = inst_20948__$1);

return statearr_20965;
})();
if(inst_20949){
var statearr_20966_20978 = state_20960__$1;
(statearr_20966_20978[(1)] = (3));

} else {
var statearr_20967_20979 = state_20960__$1;
(statearr_20967_20979[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (1))){
var inst_20946 = cljs_http.client.get.call(null,uri);
var state_20960__$1 = state_20960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20960__$1,(2),inst_20946);
} else {
return null;
}
}
}
}
}
});})(c__6508__auto___20975,out))
;
return ((function (switch__6493__auto__,c__6508__auto___20975,out){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_20971 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20971[(0)] = state_machine__6494__auto__);

(statearr_20971[(1)] = (1));

return statearr_20971;
});
var state_machine__6494__auto____1 = (function (state_20960){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_20960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e20972){if((e20972 instanceof Object)){
var ex__6497__auto__ = e20972;
var statearr_20973_20980 = state_20960;
(statearr_20973_20980[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20981 = state_20960;
state_20960 = G__20981;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_20960){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_20960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___20975,out))
})();
var state__6510__auto__ = (function (){var statearr_20974 = f__6509__auto__.call(null);
(statearr_20974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___20975);

return statearr_20974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___20975,out))
);


return out;
});
/**
* Attempts to parse a blob of text into an SVG data structure.
* The key attributes of the main SVG element are available as
* top-level keys, such as :width, :height, :view-box, etcetera.
* Adobe Illustrator and Inkscape often include spurious 'px' chars
* in those values, and we strip them out via #'[^0-9.]'
* 
* The :inner-html key holds the contents of the original SVG as a single
* string, suitable for use as an argument to React's dangerouslySetInnerHTML,
* for those who like to live on the edge.
* 
* Alternatively, if you prefer to handle each child element separately,
* the :elements key contains a vector of maps, one map per sub-element
* in the original SVG. All of these maps will contain [:tag :foo], where
* :foo is the keywordized name of the SVG element; for example, :ellipse for the
* <ellipse> element, and :rect for the <rect> element. Any nested sub-elements
* are included under the :content key, which defaults to nil. All of the
* element-specific attributes of interest (e.g. :cx and :cy for :ellipse
* elements, or :d and :pathLength for :path elements) can be found in the
* :attrs sub-map, under their own keywordized names.
* 
*/
clui_om.svg.utils.parse_body = (function parse_body(blob){
var parsed = hickory.core.parse.call(null,blob);
var h_data = hickory.core.as_hickory.call(null,parsed);
var root = cljs.core.first.call(null,hickory.select.select.call(null,hickory.select.tag.call(null,new cljs.core.Keyword(null,"svg","svg",856789142)),h_data));
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(root);
var elements = cljs.core.filter.call(null,cljs.core.map_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(root));
var inner_html = cljs.core.apply.call(null,cljs.core.str,cljs.core.mapv.call(null,hickory.render.hickory_to_html,elements));
var non_digits = /[^0-9.]/;
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),clojure.string.replace.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(attrs),non_digits,""),new cljs.core.Keyword(null,"height","height",1025178622),clojure.string.replace.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(attrs),non_digits,""),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.Keyword(null,"preserve-aspect-ratio","preserve-aspect-ratio",-1746347963),new cljs.core.Keyword(null,"preserveaspectratio","preserveaspectratio",1684370871).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),new cljs.core.Keyword(null,"viewbox","viewbox",-1545612500).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.Keyword(null,"elements","elements",657646735),elements,new cljs.core.Keyword(null,"inner-html","inner-html",1794096354),inner_html], null);
});
/**
* Takes a URI for a target SVG resource and tries to load it.
* Returns a core.async channel that will eventually pop out a map
* of the deconstructed SVG file. Any SVG elements beyond the first
* one in the file are ignored.
* 
* The following attributes from the original SVG element will be
* available in the map via the corresponding clojure keywords:
* 
* :x
* :y
* :width
* :height
* :preserve-aspect-ratio
* :view-box
* 
* In addition, the map will hold the following additional attributes:
* 
* :uri -- holds the URI of the original file
* :inner-html -- holds the complete contents of the SVG element as text.
* Useful for use with  ``dangerouslySetInnerHtml``.
* :elements -- holds a vector of maps, one for each sub-element of the
* main SVG. The data is in hickory format, which is a very
* straightforward conversion of XML data into nested
* Clojure maps. See the (parse-svg) function for more details.
*/
clui_om.svg.utils.get_svg = (function get_svg(uri){
var out = cljs.core.async.chan.call(null);
var c__6508__auto___21014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___21014,out){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___21014,out){
return (function (state_21005){
var state_val_21006 = (state_21005[(1)]);
if((state_val_21006 === (2))){
var inst_21000 = (state_21005[(2)]);
var inst_21001 = clui_om.svg.utils.parse_body.call(null,inst_21000);
var inst_21002 = cljs.core.assoc.call(null,inst_21001,new cljs.core.Keyword(null,"uri","uri",-774711847),uri);
var inst_21003 = cljs.core.async.put_BANG_.call(null,out,inst_21002);
var state_21005__$1 = state_21005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21005__$1,inst_21003);
} else {
if((state_val_21006 === (1))){
var inst_20998 = clui_om.svg.utils.load_svg.call(null,uri);
var state_21005__$1 = state_21005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21005__$1,(2),inst_20998);
} else {
return null;
}
}
});})(c__6508__auto___21014,out))
;
return ((function (switch__6493__auto__,c__6508__auto___21014,out){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_21010 = [null,null,null,null,null,null,null];
(statearr_21010[(0)] = state_machine__6494__auto__);

(statearr_21010[(1)] = (1));

return statearr_21010;
});
var state_machine__6494__auto____1 = (function (state_21005){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_21005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e21011){if((e21011 instanceof Object)){
var ex__6497__auto__ = e21011;
var statearr_21012_21015 = state_21005;
(statearr_21012_21015[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21016 = state_21005;
state_21005 = G__21016;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_21005){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_21005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___21014,out))
})();
var state__6510__auto__ = (function (){var statearr_21013 = f__6509__auto__.call(null);
(statearr_21013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___21014);

return statearr_21013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___21014,out))
);


return out;
});
