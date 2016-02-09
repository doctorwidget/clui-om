// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.page_svg_alt');
goog.require('cljs.core');
goog.require('hickory.render');
goog.require('om.dom');
goog.require('hickory.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('hickory.select');
goog.require('om.core');
goog.require('clojure.string');
clui_om.page_svg_alt.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
clui_om.page_svg_alt.loaded = cljs.core.async.chan.call(null);
/**
* Load SVG data asynchronously, given a URI to that data.
* Returns a core.async channel from which the frag will appear someday.
*/
clui_om.page_svg_alt.get_async_frag = (function get_async_frag(uri){
var result_chan = cljs.core.async.chan.call(null);
var handler = ((function (result_chan){
return (function (frag){
return cljs.core.async.put_BANG_.call(null,result_chan,frag);
});})(result_chan))
;
Snap.load(uri,handler);

return result_chan;
});
/**
* Get an SVG canvas (aka paper) with the specified dimensions
*/
clui_om.page_svg_alt.get_icon_paper = (function get_icon_paper(real_width,real_height,virt_width,virt_height){
return clui_om.page_svg_alt.paper.svg((0),(0),real_width,real_height,(0),(0),virt_width,virt_height);
});
/**
* Load the heart.svg graphic
*/
clui_om.page_svg_alt.get_heart = (function get_heart(){
console.log("Loading the heart SVG");

var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__){
return (function (state_19305){
var state_val_19306 = (state_19305[(1)]);
if((state_val_19306 === (2))){
var inst_19296 = (state_19305[(2)]);
var inst_19297 = inst_19296.select("#heart-icon");
var inst_19298 = clui_om.page_svg_alt.paper.svg((0),(0),(100),(100),(0),(0),(32),(32));
var inst_19299 = inst_19298.append(inst_19297);
var inst_19300 = inst_19297.attr({"class": "original"});
var inst_19301 = console.log("Heart loaded and added to main SVG");
var inst_19302 = cljs.core.swap_BANG_.call(null,clui_om.page_svg_alt.state,cljs.core.assoc,new cljs.core.Keyword(null,"original","original",-445386197),inst_19297);
var inst_19303 = cljs.core.async.put_BANG_.call(null,clui_om.page_svg_alt.loaded,inst_19297);
var state_19305__$1 = (function (){var statearr_19307 = state_19305;
(statearr_19307[(7)] = inst_19301);

(statearr_19307[(8)] = inst_19300);

(statearr_19307[(9)] = inst_19299);

(statearr_19307[(10)] = inst_19302);

return statearr_19307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19305__$1,inst_19303);
} else {
if((state_val_19306 === (1))){
var inst_19294 = clui_om.page_svg_alt.get_async_frag.call(null,"images/heart.svg");
var state_19305__$1 = state_19305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19305__$1,(2),inst_19294);
} else {
return null;
}
}
});})(c__6508__auto__))
;
return ((function (switch__6493__auto__,c__6508__auto__){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_19311 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19311[(0)] = state_machine__6494__auto__);

(statearr_19311[(1)] = (1));

return statearr_19311;
});
var state_machine__6494__auto____1 = (function (state_19305){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_19305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e19312){if((e19312 instanceof Object)){
var ex__6497__auto__ = e19312;
var statearr_19313_19315 = state_19305;
(statearr_19313_19315[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19316 = state_19305;
state_19305 = G__19316;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_19305){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_19305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__))
})();
var state__6510__auto__ = (function (){var statearr_19314 = f__6509__auto__.call(null);
(statearr_19314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_19314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__))
);

return c__6508__auto__;
});
/**
* Make a bunch of copies of the heart SVG
*/
clui_om.page_svg_alt.commence_cloning = (function commence_cloning(){
var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__){
return (function (state_19389){
var state_val_19390 = (state_19389[(1)]);
if((state_val_19390 === (2))){
var inst_19359 = (state_19389[(2)]);
var inst_19361 = inst_19359.clone();
var inst_19362 = inst_19361.attr({"class": "bluish"});
var inst_19363 = clui_om.page_svg_alt.paper.svg((100),(0),(66),(66),(0),(0),(32),(32));
var inst_19365 = inst_19359.clone();
var inst_19366 = inst_19365.attr({"class": "greeny"});
var inst_19367 = clui_om.page_svg_alt.paper.svg((200),(0),(32),(32),(0),(0),(32),(32));
var inst_19368 = Snap.filter;
var inst_19369 = inst_19368.blur((2),(2));
var inst_19370 = clui_om.page_svg_alt.paper.filter(inst_19369);
var inst_19372 = inst_19359.clone();
var inst_19373 = [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"filter","filter",-948537934)];
var inst_19374 = ["blurred",inst_19370];
var inst_19375 = cljs.core.PersistentHashMap.fromArrays(inst_19373,inst_19374);
var inst_19376 = cljs.core.clj__GT_js.call(null,inst_19375);
var inst_19377 = inst_19372.attr(inst_19376);
var inst_19378 = clui_om.page_svg_alt.paper.svg((0),(110),(80),(80),(0),(0),(35),(35));
var inst_19380 = inst_19359.clone();
var inst_19381 = inst_19380.attr({"class": "golden"});
var inst_19382 = clui_om.page_svg_alt.paper.svg((250),(50),(100),(100),(0),(0),(35),(35));
var inst_19383 = inst_19382.attr({"class": "goldsvg"});
var inst_19384 = inst_19363.append(inst_19361);
var inst_19385 = inst_19367.append(inst_19365);
var inst_19386 = inst_19378.append(inst_19372);
var inst_19387 = inst_19382.append(inst_19380);
var state_19389__$1 = (function (){var statearr_19391 = state_19389;
(statearr_19391[(7)] = inst_19386);

(statearr_19391[(8)] = inst_19377);

(statearr_19391[(9)] = inst_19381);

(statearr_19391[(10)] = inst_19366);

(statearr_19391[(11)] = inst_19383);

(statearr_19391[(12)] = inst_19385);

(statearr_19391[(13)] = inst_19384);

(statearr_19391[(14)] = inst_19362);

return statearr_19391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19389__$1,inst_19387);
} else {
if((state_val_19390 === (1))){
var state_19389__$1 = state_19389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19389__$1,(2),clui_om.page_svg_alt.loaded);
} else {
return null;
}
}
});})(c__6508__auto__))
;
return ((function (switch__6493__auto__,c__6508__auto__){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_19395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19395[(0)] = state_machine__6494__auto__);

(statearr_19395[(1)] = (1));

return statearr_19395;
});
var state_machine__6494__auto____1 = (function (state_19389){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_19389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e19396){if((e19396 instanceof Object)){
var ex__6497__auto__ = e19396;
var statearr_19397_19399 = state_19389;
(statearr_19397_19399[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19400 = state_19389;
state_19389 = G__19400;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_19389){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_19389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__))
})();
var state__6510__auto__ = (function (){var statearr_19398 = f__6509__auto__.call(null);
(statearr_19398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_19398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__))
);

return c__6508__auto__;
});
/**
* Demonstration of using the hickory library to parse out the relevant
* pieces from an external SVG file. From there, the strategy would be to
* (1) Create a brand new om.dom/svg element
* (2) Supply the `viewbox` attribute with 0 0 width height
* (3) (Supply an explicit width and height if desired)
* (4) Supply a marker class, sensitive to the current app state
* (5) !! use __dangerouslySetInnerHTML to set the inner HTML
* (6) Use the outer marker class + knowledge of the inner SVG, to
* create whatever context-specific changes are needed.
*/
clui_om.page_svg_alt.load_svg = (function load_svg(){
var result = cljs.core.async.chan.call(null);
var c__6508__auto___19505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___19505,result){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___19505,result){
return (function (state_19490){
var state_val_19491 = (state_19490[(1)]);
if((state_val_19491 === (5))){
var inst_19462 = (state_19490[(2)]);
var inst_19463 = cljs.core.get.call(null,inst_19462,new cljs.core.Keyword(null,"headers","headers",-835030129));
var inst_19464 = cljs.core.get.call(null,inst_19462,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_19465 = cljs.core.get.call(null,inst_19462,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_19466 = hickory.core.parse.call(null,inst_19464);
var inst_19467 = hickory.core.as_hickory.call(null,inst_19466);
var inst_19468 = hickory.select.tag.call(null,new cljs.core.Keyword(null,"svg","svg",856789142));
var inst_19469 = hickory.select.select.call(null,inst_19468,inst_19467);
var inst_19470 = cljs.core.first.call(null,inst_19469);
var inst_19471 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19472 = [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"width","width",-384071477)];
var inst_19473 = (new cljs.core.PersistentVector(null,2,(5),inst_19471,inst_19472,null));
var inst_19474 = cljs.core.get_in.call(null,inst_19470,inst_19473,new cljs.core.Keyword(null,"wtf","wtf",-1581114577));
var inst_19475 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19476 = [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_19477 = (new cljs.core.PersistentVector(null,2,(5),inst_19475,inst_19476,null));
var inst_19478 = cljs.core.get_in.call(null,inst_19470,inst_19477,new cljs.core.Keyword(null,"wtf","wtf",-1581114577));
var inst_19479 = cljs.core.get.call(null,inst_19470,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"wtf","wtf",-1581114577));
var inst_19480 = cljs.core.filter.call(null,cljs.core.map_QMARK_,inst_19479);
var inst_19481 = cljs.core.mapv.call(null,hickory.render.hickory_to_html,inst_19480);
var inst_19482 = cljs.core.apply.call(null,cljs.core.str,inst_19481);
var inst_19483 = [cljs.core.str("Found SVG Root: "),cljs.core.str(inst_19470)].join('');
var inst_19484 = console.log(inst_19483);
var inst_19485 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"inner-html","inner-html",1794096354)];
var inst_19486 = [inst_19474,inst_19478,inst_19482];
var inst_19487 = cljs.core.PersistentHashMap.fromArrays(inst_19485,inst_19486);
var inst_19488 = cljs.core.async.put_BANG_.call(null,result,inst_19487);
var state_19490__$1 = (function (){var statearr_19492 = state_19490;
(statearr_19492[(7)] = inst_19465);

(statearr_19492[(8)] = inst_19463);

(statearr_19492[(9)] = inst_19484);

return statearr_19492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19490__$1,inst_19488);
} else {
if((state_val_19491 === (4))){
var inst_19456 = (state_19490[(10)]);
var state_19490__$1 = state_19490;
var statearr_19493_19506 = state_19490__$1;
(statearr_19493_19506[(2)] = inst_19456);

(statearr_19493_19506[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (3))){
var inst_19456 = (state_19490[(10)]);
var inst_19459 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19456);
var state_19490__$1 = state_19490;
var statearr_19494_19507 = state_19490__$1;
(statearr_19494_19507[(2)] = inst_19459);

(statearr_19494_19507[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (2))){
var inst_19456 = (state_19490[(10)]);
var inst_19456__$1 = (state_19490[(2)]);
var inst_19457 = cljs.core.seq_QMARK_.call(null,inst_19456__$1);
var state_19490__$1 = (function (){var statearr_19495 = state_19490;
(statearr_19495[(10)] = inst_19456__$1);

return statearr_19495;
})();
if(inst_19457){
var statearr_19496_19508 = state_19490__$1;
(statearr_19496_19508[(1)] = (3));

} else {
var statearr_19497_19509 = state_19490__$1;
(statearr_19497_19509[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19491 === (1))){
var inst_19454 = cljs_http.client.get.call(null,"images/gears3.svg");
var state_19490__$1 = state_19490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19490__$1,(2),inst_19454);
} else {
return null;
}
}
}
}
}
});})(c__6508__auto___19505,result))
;
return ((function (switch__6493__auto__,c__6508__auto___19505,result){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_19501 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19501[(0)] = state_machine__6494__auto__);

(statearr_19501[(1)] = (1));

return statearr_19501;
});
var state_machine__6494__auto____1 = (function (state_19490){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_19490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e19502){if((e19502 instanceof Object)){
var ex__6497__auto__ = e19502;
var statearr_19503_19510 = state_19490;
(statearr_19503_19510[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19511 = state_19490;
state_19490 = G__19511;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_19490){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_19490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___19505,result))
})();
var state__6510__auto__ = (function (){var statearr_19504 = f__6509__auto__.call(null);
(statearr_19504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___19505);

return statearr_19504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___19505,result))
);


return result;
});
clui_om.page_svg_alt.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
clui_om.page_svg_alt.ALPHA_ROOT = document.getElementById("alphaRoot");
clui_om.page_svg_alt.main_widget = (function main_widget(app,owner,opts){
if(typeof clui_om.page_svg_alt.t19530 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_svg_alt.t19530 = (function (opts,owner,app,main_widget,meta19531){
this.opts = opts;
this.owner = owner;
this.app = app;
this.main_widget = main_widget;
this.meta19531 = meta19531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_svg_alt.t19530.prototype.om$core$IRenderState$ = true;

clui_om.page_svg_alt.t19530.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__19533){
var self__ = this;
var map__19534 = p__19533;
var map__19534__$1 = ((cljs.core.seq_QMARK_.call(null,map__19534))?cljs.core.apply.call(null,cljs.core.hash_map,map__19534):map__19534);
var state = map__19534__$1;
var svg_data = cljs.core.get.call(null,map__19534__$1,new cljs.core.Keyword(null,"svg-data","svg-data",2142513348));
var ___$1 = this;
var w = clojure.string.replace.call(null,cljs.core.get.call(null,svg_data,new cljs.core.Keyword(null,"width","width",-384071477),"0"),/px/,"");
var h = clojure.string.replace.call(null,cljs.core.get.call(null,svg_data,new cljs.core.Keyword(null,"height","height",1025178622),"0"),/px/,"");
var raw = cljs.core.get.call(null,svg_data,new cljs.core.Keyword(null,"inner-html","inner-html",1794096354),"wtf");
return React.DOM.div({"className": "mainWidget"},React.DOM.div({"className": "mainInner"},React.DOM.p(null,"Om Component Begins here:"),React.DOM.p(null,[cljs.core.str("Width: "),cljs.core.str(w)].join('')),React.DOM.p(null,[cljs.core.str("Height: "),cljs.core.str(h)].join('')),React.DOM.svg(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"className","className",-1983287057),"foobar",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[cljs.core.str("0 0 "),cljs.core.str(w),cljs.core.str(" "),cljs.core.str(h)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"111",new cljs.core.Keyword(null,"height","height",1025178622),"111",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),{"__html": raw},new cljs.core.Keyword(null,"onMouseOver","onMouseOver",1787360977),((function (w,h,raw,___$1,map__19534,map__19534__$1,state,svg_data){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hovering","hovering",-571536091),true);
});})(w,h,raw,___$1,map__19534,map__19534__$1,state,svg_data))
,new cljs.core.Keyword(null,"onMouseOut","onMouseOut",1953812864),((function (w,h,raw,___$1,map__19534,map__19534__$1,state,svg_data){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hovering","hovering",-571536091),false);
});})(w,h,raw,___$1,map__19534,map__19534__$1,state,svg_data))
], null)))));
});

clui_om.page_svg_alt.t19530.prototype.om$core$IWillMount$ = true;

clui_om.page_svg_alt.t19530.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var arrivals = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));
var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,arrivals,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,arrivals,___$1){
return (function (state_19539){
var state_val_19540 = (state_19539[(1)]);
if((state_val_19540 === (2))){
var inst_19536 = (state_19539[(2)]);
var inst_19537 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"svg-data","svg-data",2142513348),inst_19536);
var state_19539__$1 = state_19539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19539__$1,inst_19537);
} else {
if((state_val_19540 === (1))){
var state_19539__$1 = state_19539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19539__$1,(2),arrivals);
} else {
return null;
}
}
});})(c__6508__auto__,arrivals,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto__,arrivals,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_19544 = [null,null,null,null,null,null,null];
(statearr_19544[(0)] = state_machine__6494__auto__);

(statearr_19544[(1)] = (1));

return statearr_19544;
});
var state_machine__6494__auto____1 = (function (state_19539){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_19539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e19545){if((e19545 instanceof Object)){
var ex__6497__auto__ = e19545;
var statearr_19546_19548 = state_19539;
(statearr_19546_19548[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19549 = state_19539;
state_19539 = G__19549;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_19539){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_19539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,arrivals,___$1))
})();
var state__6510__auto__ = (function (){var statearr_19547 = f__6509__auto__.call(null);
(statearr_19547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_19547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,arrivals,___$1))
);

return c__6508__auto__;
});

clui_om.page_svg_alt.t19530.prototype.om$core$IInitState$ = true;

clui_om.page_svg_alt.t19530.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"svg-data","svg-data",2142513348),null,new cljs.core.Keyword(null,"load-chan","load-chan",342107614),clui_om.page_svg_alt.load_svg.call(null),new cljs.core.Keyword(null,"hovering","hovering",-571536091),false], null);
});

clui_om.page_svg_alt.t19530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19532){
var self__ = this;
var _19532__$1 = this;
return self__.meta19531;
});

clui_om.page_svg_alt.t19530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19532,meta19531__$1){
var self__ = this;
var _19532__$1 = this;
return (new clui_om.page_svg_alt.t19530(self__.opts,self__.owner,self__.app,self__.main_widget,meta19531__$1));
});

clui_om.page_svg_alt.t19530.cljs$lang$type = true;

clui_om.page_svg_alt.t19530.cljs$lang$ctorStr = "clui-om.page-svg-alt/t19530";

clui_om.page_svg_alt.t19530.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-svg-alt/t19530");
});

clui_om.page_svg_alt.__GT_t19530 = (function __GT_t19530(opts__$1,owner__$1,app__$1,main_widget__$1,meta19531){
return (new clui_om.page_svg_alt.t19530(opts__$1,owner__$1,app__$1,main_widget__$1,meta19531));
});

}

return (new clui_om.page_svg_alt.t19530(opts,owner,app,main_widget,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),54,new cljs.core.Keyword(null,"end-line","end-line",1837326455),151,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),122,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_svg_alt.cljs"], null)));
});
/**
* Main entry point for page svg (alt)
*/
clui_om.page_svg_alt.main = (function main(){
var msg = "(main):: page_svg_alt (main) function...";
clui_om.page_svg_alt.paper = Snap("#bigOlCanvas");

console.log(msg);

clui_om.page_svg_alt.get_heart.call(null);

clui_om.page_svg_alt.commence_cloning.call(null);

return om.core.root.call(null,clui_om.page_svg_alt.main_widget,clui_om.page_svg_alt.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),clui_om.page_svg_alt.ALPHA_ROOT], null));
});
goog.exportSymbol('clui_om.page_svg_alt.main', clui_om.page_svg_alt.main);
