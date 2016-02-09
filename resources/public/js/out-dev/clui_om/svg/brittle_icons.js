// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.svg.brittle_icons');
goog.require('cljs.core');
goog.require('clui_om.svg.icons');
goog.require('clui_om.svg.utils');
goog.require('om.dom');
goog.require('om.core');
goog.require('cljs.core.async');
/**
* A hard-coded Om component, with each sub-element instantiated and placed
* manually. This is obviously NOT the best to handle this! Instead, there
* should be intelligent recursion through all of the children, instantiating
* each one in turn as a separate Om component based on its :tag. Also, even
* making one component per source SVG seems much too brittle; don't we want to
* be able to say ``Please make a button from any SVG``, and then get back a
* component that will reliably have all of the proper subcomponents? That's
* obviously the long-term goal. Until then, we'll leave this function lying
* around as a model for a more generic tools in the future.
* 
* Note that we do not provide any styling aspects at all with any of the SVG
* elements. Anything hard-coded at the element level cannot be overridden
* via CSS. It's not just a matter of giving it higher priority with tricks
* like ``!important``: you simply cannot override element attributes with
* CSS, period. So it's better to leave *everything* unspecified in the markup
* and do it all in CSS: colors, stroke-widths, overall width and height, etc.
* 
*/
clui_om.svg.brittle_icons.brittle_gear_icon = (function brittle_gear_icon(app,owner){
if(typeof clui_om.svg.brittle_icons.t20666 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.svg.brittle_icons.t20666 = (function (owner,app,brittle_gear_icon,meta20667){
this.owner = owner;
this.app = app;
this.brittle_gear_icon = brittle_gear_icon;
this.meta20667 = meta20667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.svg.brittle_icons.t20666.prototype.om$core$IRenderState$ = true;

clui_om.svg.brittle_icons.t20666.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__20669){
var self__ = this;
var map__20670 = p__20669;
var map__20670__$1 = ((cljs.core.seq_QMARK_.call(null,map__20670))?cljs.core.apply.call(null,cljs.core.hash_map,map__20670):map__20670);
var state = map__20670__$1;
var svg_data = cljs.core.get.call(null,map__20670__$1,new cljs.core.Keyword(null,"svg-data","svg-data",2142513348));
var ___$1 = this;
var w = cljs.core.get.call(null,svg_data,new cljs.core.Keyword(null,"width","width",-384071477));
var h = cljs.core.get.call(null,svg_data,new cljs.core.Keyword(null,"height","height",1025178622));
var preserve = cljs.core.get.call(null,svg_data,new cljs.core.Keyword(null,"preserve-aspect-ratio","preserve-aspect-ratio",-1746347963));
var e = cljs.core.get.call(null,svg_data,new cljs.core.Keyword(null,"elements","elements",657646735));
var g = cljs.core.first.call(null,e);
var subs = cljs.core.filter.call(null,cljs.core.map_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(g));
var c1 = cljs.core.first.call(null,subs);
var c2 = cljs.core.second.call(null,subs);
var p = cljs.core.last.call(null,subs);
return React.DOM.div({"className": "iconOuter"},(cljs.core.truth_(svg_data)?React.DOM.svg({"xmlns": "http://www.w3.org/2000/svg", "viewBox": [cljs.core.str("0 0 "),cljs.core.str(w),cljs.core.str(" "),cljs.core.str(h)].join(''), "className": "iconGears"},React.DOM.rect(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null))),React.DOM.circle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),cljs.core.get_in.call(null,c1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"cx","cx",1272694324)], null)),new cljs.core.Keyword(null,"cy","cy",755331060),cljs.core.get_in.call(null,c1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"cy","cy",755331060)], null)),new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.get_in.call(null,c1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"r","r",-471384190)], null))], null))),React.DOM.circle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),cljs.core.get_in.call(null,c2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"cx","cx",1272694324)], null)),new cljs.core.Keyword(null,"cy","cy",755331060),cljs.core.get_in.call(null,c2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"cy","cy",755331060)], null)),new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.get_in.call(null,c2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"r","r",-471384190)], null))], null))),React.DOM.path(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"d","d",1972142424)], null))], null)))):React.DOM.p(null,"No SVG data loaded yet")));
});

clui_om.svg.brittle_icons.t20666.prototype.om$core$IWillMount$ = true;

clui_om.svg.brittle_icons.t20666.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));
var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,load_chan,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,load_chan,___$1){
return (function (state_20675){
var state_val_20676 = (state_20675[(1)]);
if((state_val_20676 === (2))){
var inst_20672 = (state_20675[(2)]);
var inst_20673 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"svg-data","svg-data",2142513348),inst_20672);
var state_20675__$1 = state_20675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20675__$1,inst_20673);
} else {
if((state_val_20676 === (1))){
var state_20675__$1 = state_20675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20675__$1,(2),load_chan);
} else {
return null;
}
}
});})(c__6508__auto__,load_chan,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto__,load_chan,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_20680 = [null,null,null,null,null,null,null];
(statearr_20680[(0)] = state_machine__6494__auto__);

(statearr_20680[(1)] = (1));

return statearr_20680;
});
var state_machine__6494__auto____1 = (function (state_20675){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_20675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e20681){if((e20681 instanceof Object)){
var ex__6497__auto__ = e20681;
var statearr_20682_20684 = state_20675;
(statearr_20682_20684[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20685 = state_20675;
state_20675 = G__20685;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_20675){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_20675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,load_chan,___$1))
})();
var state__6510__auto__ = (function (){var statearr_20683 = f__6509__auto__.call(null);
(statearr_20683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_20683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,load_chan,___$1))
);

return c__6508__auto__;
});

clui_om.svg.brittle_icons.t20666.prototype.om$core$IInitState$ = true;

clui_om.svg.brittle_icons.t20666.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"svg-data","svg-data",2142513348),null,new cljs.core.Keyword(null,"load-chan","load-chan",342107614),clui_om.svg.utils.get_svg.call(null,"images/gears3.svg")], null);
});

clui_om.svg.brittle_icons.t20666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20668){
var self__ = this;
var _20668__$1 = this;
return self__.meta20667;
});

clui_om.svg.brittle_icons.t20666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20668,meta20667__$1){
var self__ = this;
var _20668__$1 = this;
return (new clui_om.svg.brittle_icons.t20666(self__.owner,self__.app,self__.brittle_gear_icon,meta20667__$1));
});

clui_om.svg.brittle_icons.t20666.cljs$lang$type = true;

clui_om.svg.brittle_icons.t20666.cljs$lang$ctorStr = "clui-om.svg.brittle-icons/t20666";

clui_om.svg.brittle_icons.t20666.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.svg.brittle-icons/t20666");
});

clui_om.svg.brittle_icons.__GT_t20666 = (function __GT_t20666(owner__$1,app__$1,brittle_gear_icon__$1,meta20667){
return (new clui_om.svg.brittle_icons.t20666(owner__$1,app__$1,brittle_gear_icon__$1,meta20667));
});

}

return (new clui_om.svg.brittle_icons.t20666(owner,app,brittle_gear_icon,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),61,new cljs.core.Keyword(null,"end-line","end-line",1837326455),72,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),33,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/svg/brittle_icons.cljs"], null)));
});
/**
* Another hard-coded component, this time with the intent of showing
* CSS-based animations.
*/
clui_om.svg.brittle_icons.brittle_disc_icon = (function brittle_disc_icon(app,owner){
if(typeof clui_om.svg.brittle_icons.t20706 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.svg.brittle_icons.t20706 = (function (owner,app,brittle_disc_icon,meta20707){
this.owner = owner;
this.app = app;
this.brittle_disc_icon = brittle_disc_icon;
this.meta20707 = meta20707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.svg.brittle_icons.t20706.prototype.om$core$IRenderState$ = true;

clui_om.svg.brittle_icons.t20706.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__20709){
var self__ = this;
var map__20710 = p__20709;
var map__20710__$1 = ((cljs.core.seq_QMARK_.call(null,map__20710))?cljs.core.apply.call(null,cljs.core.hash_map,map__20710):map__20710);
var state = map__20710__$1;
var svg_data = cljs.core.get.call(null,map__20710__$1,new cljs.core.Keyword(null,"svg-data","svg-data",2142513348));
var ___$1 = this;
var w = cljs.core.get.call(null,svg_data,new cljs.core.Keyword(null,"width","width",-384071477));
var ___$2 = console.log([cljs.core.str("Using w: "),cljs.core.str(w)].join(''));
var h = cljs.core.get.call(null,svg_data,new cljs.core.Keyword(null,"height","height",1025178622));
var ___$3 = console.log([cljs.core.str("Using h: "),cljs.core.str(h)].join(''));
var g = cljs.core.first.call(null,cljs.core.get.call(null,svg_data,new cljs.core.Keyword(null,"elements","elements",657646735)));
var subs = cljs.core.filter.call(null,cljs.core.map_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(g));
var c = cljs.core.first.call(null,cljs.core.filter.call(null,((function (w,___$2,h,___$3,g,subs,___$1,map__20710,map__20710__$1,state,svg_data){
return (function (p1__20686_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__20686_SHARP_));
});})(w,___$2,h,___$3,g,subs,___$1,map__20710,map__20710__$1,state,svg_data))
,subs));
var p = cljs.core.first.call(null,cljs.core.filter.call(null,((function (w,___$2,h,___$3,g,subs,c,___$1,map__20710,map__20710__$1,state,svg_data){
return (function (p1__20687_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__20687_SHARP_));
});})(w,___$2,h,___$3,g,subs,c,___$1,map__20710,map__20710__$1,state,svg_data))
,subs));
var pad = (10);
var gaph = (6);
var gapv = (5);
var padw = (parseFloat(w) + pad);
var ___$4 = console.log([cljs.core.str("Using padw "),cljs.core.str(padw)].join(''));
var padh = (parseFloat(h) + pad);
var ___$5 = console.log([cljs.core.str("Using padh "),cljs.core.str(padh)].join(''));
var transtring = [cljs.core.str("translate("),cljs.core.str(gaph),cljs.core.str(" "),cljs.core.str(gapv),cljs.core.str(")")].join('');
return React.DOM.div({"className": "iconOuter"},(cljs.core.truth_(svg_data)?React.DOM.svg({"xmlns": "http://www.w3.org/2000/svg", "viewBox": [cljs.core.str("0 0 "),cljs.core.str(padw),cljs.core.str(" "),cljs.core.str(padh)].join(''), "className": "iconDisc"},React.DOM.circle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(padw / (2)),new cljs.core.Keyword(null,"cy","cy",755331060),(padh / (2)),new cljs.core.Keyword(null,"r","r",-471384190),((function (){var x__3952__auto__ = padw;
var y__3953__auto__ = padh;
return ((x__3952__auto__ < y__3953__auto__) ? x__3952__auto__ : y__3953__auto__);
})() / (2)),new cljs.core.Keyword(null,"className","className",-1983287057),"discBg"], null))),React.DOM.g(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),transtring], null)),React.DOM.path(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"d","d",1972142424)], null))], null))),React.DOM.circle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),cljs.core.get_in.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"cx","cx",1272694324)], null)),new cljs.core.Keyword(null,"cy","cy",755331060),cljs.core.get_in.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"cy","cy",755331060)], null)),new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.get_in.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"r","r",-471384190)], null)),new cljs.core.Keyword(null,"className","className",-1983287057),"discInner"], null))))):React.DOM.p(null,"No SVG data available for circular115.svg")));
});

clui_om.svg.brittle_icons.t20706.prototype.om$core$IWillMount$ = true;

clui_om.svg.brittle_icons.t20706.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));
var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,load_chan,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,load_chan,___$1){
return (function (state_20715){
var state_val_20716 = (state_20715[(1)]);
if((state_val_20716 === (2))){
var inst_20712 = (state_20715[(2)]);
var inst_20713 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"svg-data","svg-data",2142513348),inst_20712);
var state_20715__$1 = state_20715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20715__$1,inst_20713);
} else {
if((state_val_20716 === (1))){
var state_20715__$1 = state_20715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20715__$1,(2),load_chan);
} else {
return null;
}
}
});})(c__6508__auto__,load_chan,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto__,load_chan,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_20720 = [null,null,null,null,null,null,null];
(statearr_20720[(0)] = state_machine__6494__auto__);

(statearr_20720[(1)] = (1));

return statearr_20720;
});
var state_machine__6494__auto____1 = (function (state_20715){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_20715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e20721){if((e20721 instanceof Object)){
var ex__6497__auto__ = e20721;
var statearr_20722_20724 = state_20715;
(statearr_20722_20724[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20725 = state_20715;
state_20715 = G__20725;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_20715){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_20715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,load_chan,___$1))
})();
var state__6510__auto__ = (function (){var statearr_20723 = f__6509__auto__.call(null);
(statearr_20723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_20723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,load_chan,___$1))
);

return c__6508__auto__;
});

clui_om.svg.brittle_icons.t20706.prototype.om$core$IInitState$ = true;

clui_om.svg.brittle_icons.t20706.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"svg-data","svg-data",2142513348),null,new cljs.core.Keyword(null,"load-chan","load-chan",342107614),clui_om.svg.utils.get_svg.call(null,"images/circular115.svg")], null);
});

clui_om.svg.brittle_icons.t20706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20708){
var self__ = this;
var _20708__$1 = this;
return self__.meta20707;
});

clui_om.svg.brittle_icons.t20706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20708,meta20707__$1){
var self__ = this;
var _20708__$1 = this;
return (new clui_om.svg.brittle_icons.t20706(self__.owner,self__.app,self__.brittle_disc_icon,meta20707__$1));
});

clui_om.svg.brittle_icons.t20706.cljs$lang$type = true;

clui_om.svg.brittle_icons.t20706.cljs$lang$ctorStr = "clui-om.svg.brittle-icons/t20706";

clui_om.svg.brittle_icons.t20706.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.svg.brittle-icons/t20706");
});

clui_om.svg.brittle_icons.__GT_t20706 = (function __GT_t20706(owner__$1,app__$1,brittle_disc_icon__$1,meta20707){
return (new clui_om.svg.brittle_icons.t20706(owner__$1,app__$1,brittle_disc_icon__$1,meta20707));
});

}

return (new clui_om.svg.brittle_icons.t20706(owner,app,brittle_disc_icon,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),80,new cljs.core.Keyword(null,"end-line","end-line",1837326455),122,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),79,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/svg/brittle_icons.cljs"], null)));
});
/**
* Yet another hard-coded example. This time we will do an animation entirely
* inside the ClojureScript component code, rather than relying on CSS.
*/
clui_om.svg.brittle_icons.brittle_medal_icon = (function brittle_medal_icon(app,owner){
if(typeof clui_om.svg.brittle_icons.t20803 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.svg.brittle_icons.t20803 = (function (owner,app,brittle_medal_icon,meta20804){
this.owner = owner;
this.app = app;
this.brittle_medal_icon = brittle_medal_icon;
this.meta20804 = meta20804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.svg.brittle_icons.t20803.prototype.om$core$IRenderState$ = true;

clui_om.svg.brittle_icons.t20803.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__20806){
var self__ = this;
var map__20807 = p__20806;
var map__20807__$1 = ((cljs.core.seq_QMARK_.call(null,map__20807))?cljs.core.apply.call(null,cljs.core.hash_map,map__20807):map__20807);
var state = map__20807__$1;
var rotation = cljs.core.get.call(null,map__20807__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var hovering = cljs.core.get.call(null,map__20807__$1,new cljs.core.Keyword(null,"hovering","hovering",-571536091));
var pinned = cljs.core.get.call(null,map__20807__$1,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
var svg_data = cljs.core.get.call(null,map__20807__$1,new cljs.core.Keyword(null,"svg-data","svg-data",2142513348));
var ___$1 = this;
var w = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(svg_data);
var h = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(svg_data);
var g = cljs.core.first.call(null,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(svg_data));
var els = cljs.core.filter.call(null,cljs.core.map_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(g));
var pg1 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (w,h,g,els,___$1,map__20807,map__20807__$1,state,rotation,hovering,pinned,svg_data){
return (function (p1__20726_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__20726_SHARP_));
});})(w,h,g,els,___$1,map__20807,map__20807__$1,state,rotation,hovering,pinned,svg_data))
,els));
var pg2 = cljs.core.second.call(null,cljs.core.filter.call(null,((function (w,h,g,els,pg1,___$1,map__20807,map__20807__$1,state,rotation,hovering,pinned,svg_data){
return (function (p1__20727_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__20727_SHARP_));
});})(w,h,g,els,pg1,___$1,map__20807,map__20807__$1,state,rotation,hovering,pinned,svg_data))
,els));
var pa1 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (w,h,g,els,pg1,pg2,___$1,map__20807,map__20807__$1,state,rotation,hovering,pinned,svg_data){
return (function (p1__20728_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__20728_SHARP_));
});})(w,h,g,els,pg1,pg2,___$1,map__20807,map__20807__$1,state,rotation,hovering,pinned,svg_data))
,els));
var pa2 = cljs.core.second.call(null,cljs.core.filter.call(null,((function (w,h,g,els,pg1,pg2,pa1,___$1,map__20807,map__20807__$1,state,rotation,hovering,pinned,svg_data){
return (function (p1__20729_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__20729_SHARP_));
});})(w,h,g,els,pg1,pg2,pa1,___$1,map__20807,map__20807__$1,state,rotation,hovering,pinned,svg_data))
,els));
var divattr = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("iconOuter medal"),cljs.core.str((cljs.core.truth_(pinned)?" pinned":null)),cljs.core.str((cljs.core.truth_(hovering)?" hovering":null))].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (w,h,g,els,pg1,pg2,pa1,pa2,___$1,map__20807,map__20807__$1,state,rotation,hovering,pinned,svg_data){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"pinned","pinned",-1216085339),cljs.core.not.call(null,pinned));
});})(w,h,g,els,pg1,pg2,pa1,pa2,___$1,map__20807,map__20807__$1,state,rotation,hovering,pinned,svg_data))
,new cljs.core.Keyword(null,"onMouseOver","onMouseOver",1787360977),((function (w,h,g,els,pg1,pg2,pa1,pa2,___$1,map__20807,map__20807__$1,state,rotation,hovering,pinned,svg_data){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hovering","hovering",-571536091),true);
});})(w,h,g,els,pg1,pg2,pa1,pa2,___$1,map__20807,map__20807__$1,state,rotation,hovering,pinned,svg_data))
,new cljs.core.Keyword(null,"onMouseOut","onMouseOut",1953812864),((function (w,h,g,els,pg1,pg2,pa1,pa2,___$1,map__20807,map__20807__$1,state,rotation,hovering,pinned,svg_data){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hovering","hovering",-571536091),false);
});})(w,h,g,els,pg1,pg2,pa1,pa2,___$1,map__20807,map__20807__$1,state,rotation,hovering,pinned,svg_data))
], null);
var svgattr = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"iconMedal",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[cljs.core.str("0 0 "),cljs.core.str(w),cljs.core.str(" "),cljs.core.str(h)].join('')], null);
var transattr = (cljs.core.truth_(pinned)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("rotate("),cljs.core.str(rotation),cljs.core.str(" 16.5 6.25)")].join('')], null):null);
return React.DOM.div(cljs.core.clj__GT_js.call(null,divattr),(cljs.core.truth_(svg_data)?React.DOM.svg(cljs.core.clj__GT_js.call(null,svgattr),React.DOM.g(null,React.DOM.polygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.get_in.call(null,pg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"points","points",-1486596883)], null))], null))),React.DOM.polygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.get_in.call(null,pg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"points","points",-1486596883)], null))], null))),React.DOM.g(cljs.core.clj__GT_js.call(null,transattr),React.DOM.path(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.get_in.call(null,pa1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"d","d",1972142424)], null))], null))),React.DOM.path(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.get_in.call(null,pa2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"d","d",1972142424)], null))], null)))))):React.DOM.p(null,"No SVG data available for medal43.svg")));
});

clui_om.svg.brittle_icons.t20803.prototype.om$core$IWillMount$ = true;

clui_om.svg.brittle_icons.t20803.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var load_chan_20876 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));
var c__6508__auto___20877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___20877,load_chan_20876,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___20877,load_chan_20876,___$1){
return (function (state_20812){
var state_val_20813 = (state_20812[(1)]);
if((state_val_20813 === (2))){
var inst_20809 = (state_20812[(2)]);
var inst_20810 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"svg-data","svg-data",2142513348),inst_20809);
var state_20812__$1 = state_20812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20812__$1,inst_20810);
} else {
if((state_val_20813 === (1))){
var state_20812__$1 = state_20812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20812__$1,(2),load_chan_20876);
} else {
return null;
}
}
});})(c__6508__auto___20877,load_chan_20876,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto___20877,load_chan_20876,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_20817 = [null,null,null,null,null,null,null];
(statearr_20817[(0)] = state_machine__6494__auto__);

(statearr_20817[(1)] = (1));

return statearr_20817;
});
var state_machine__6494__auto____1 = (function (state_20812){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_20812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e20818){if((e20818 instanceof Object)){
var ex__6497__auto__ = e20818;
var statearr_20819_20878 = state_20812;
(statearr_20819_20878[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20879 = state_20812;
state_20812 = G__20879;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_20812){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_20812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___20877,load_chan_20876,___$1))
})();
var state__6510__auto__ = (function (){var statearr_20820 = f__6509__auto__.call(null);
(statearr_20820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___20877);

return statearr_20820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___20877,load_chan_20876,___$1))
);


var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,___$1){
return (function (state_20849){
var state_val_20850 = (state_20849[(1)]);
if((state_val_20850 === (7))){
var inst_20823 = (state_20849[(7)]);
var inst_20827 = ((10) + inst_20823);
var inst_20828 = cljs.core.mod.call(null,inst_20827,(360));
var state_20849__$1 = state_20849;
var statearr_20851_20880 = state_20849__$1;
(statearr_20851_20880[(2)] = inst_20828);

(statearr_20851_20880[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20850 === (1))){
var state_20849__$1 = state_20849;
var statearr_20852_20881 = state_20849__$1;
(statearr_20852_20881[(2)] = null);

(statearr_20852_20881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20850 === (4))){
var inst_20823 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var inst_20824 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
var inst_20825 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"hovering","hovering",-571536091));
var state_20849__$1 = (function (){var statearr_20853 = state_20849;
(statearr_20853[(8)] = inst_20825);

(statearr_20853[(7)] = inst_20823);

return statearr_20853;
})();
if(cljs.core.truth_(inst_20824)){
var statearr_20854_20882 = state_20849__$1;
(statearr_20854_20882[(1)] = (7));

} else {
var statearr_20855_20883 = state_20849__$1;
(statearr_20855_20883[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20850 === (13))){
var inst_20841 = (state_20849[(2)]);
var state_20849__$1 = (function (){var statearr_20856 = state_20849;
(statearr_20856[(9)] = inst_20841);

return statearr_20856;
})();
var statearr_20857_20884 = state_20849__$1;
(statearr_20857_20884[(2)] = null);

(statearr_20857_20884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20850 === (6))){
var inst_20845 = (state_20849[(2)]);
var state_20849__$1 = state_20849;
var statearr_20858_20885 = state_20849__$1;
(statearr_20858_20885[(2)] = inst_20845);

(statearr_20858_20885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20850 === (3))){
var inst_20847 = (state_20849[(2)]);
var state_20849__$1 = state_20849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20849__$1,inst_20847);
} else {
if((state_val_20850 === (12))){
var inst_20836 = (state_20849[(2)]);
var inst_20837 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"interval","interval",1708495417),inst_20836);
var inst_20838 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"interval","interval",1708495417));
var inst_20839 = cljs.core.async.timeout.call(null,inst_20838);
var state_20849__$1 = (function (){var statearr_20859 = state_20849;
(statearr_20859[(10)] = inst_20837);

return statearr_20859;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20849__$1,(13),inst_20839);
} else {
if((state_val_20850 === (2))){
var state_20849__$1 = state_20849;
var statearr_20860_20886 = state_20849__$1;
(statearr_20860_20886[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20850 === (11))){
var state_20849__$1 = state_20849;
var statearr_20862_20887 = state_20849__$1;
(statearr_20862_20887[(2)] = (33));

(statearr_20862_20887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20850 === (9))){
var inst_20825 = (state_20849[(8)]);
var inst_20831 = (state_20849[(2)]);
var inst_20832 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),inst_20831);
var state_20849__$1 = (function (){var statearr_20863 = state_20849;
(statearr_20863[(11)] = inst_20832);

return statearr_20863;
})();
if(cljs.core.truth_(inst_20825)){
var statearr_20864_20888 = state_20849__$1;
(statearr_20864_20888[(1)] = (10));

} else {
var statearr_20865_20889 = state_20849__$1;
(statearr_20865_20889[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20850 === (5))){
var state_20849__$1 = state_20849;
var statearr_20866_20890 = state_20849__$1;
(statearr_20866_20890[(2)] = null);

(statearr_20866_20890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20850 === (10))){
var state_20849__$1 = state_20849;
var statearr_20867_20891 = state_20849__$1;
(statearr_20867_20891[(2)] = (66));

(statearr_20867_20891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20850 === (8))){
var inst_20823 = (state_20849[(7)]);
var state_20849__$1 = state_20849;
var statearr_20868_20892 = state_20849__$1;
(statearr_20868_20892[(2)] = inst_20823);

(statearr_20868_20892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6508__auto__,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto__,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_20872 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20872[(0)] = state_machine__6494__auto__);

(statearr_20872[(1)] = (1));

return statearr_20872;
});
var state_machine__6494__auto____1 = (function (state_20849){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_20849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e20873){if((e20873 instanceof Object)){
var ex__6497__auto__ = e20873;
var statearr_20874_20893 = state_20849;
(statearr_20874_20893[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20894 = state_20849;
state_20849 = G__20894;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_20849){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_20849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,___$1))
})();
var state__6510__auto__ = (function (){var statearr_20875 = f__6509__auto__.call(null);
(statearr_20875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_20875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,___$1))
);

return c__6508__auto__;
});

clui_om.svg.brittle_icons.t20803.prototype.om$core$IInitState$ = true;

clui_om.svg.brittle_icons.t20803.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"svg-data","svg-data",2142513348),null,new cljs.core.Keyword(null,"load-chan","load-chan",342107614),clui_om.svg.utils.get_svg.call(null,"images/medal43.svg"),new cljs.core.Keyword(null,"pinned","pinned",-1216085339),false,new cljs.core.Keyword(null,"hovering","hovering",-571536091),false,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0),new cljs.core.Keyword(null,"interval","interval",1708495417),(66)], null);
});

clui_om.svg.brittle_icons.t20803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20805){
var self__ = this;
var _20805__$1 = this;
return self__.meta20804;
});

clui_om.svg.brittle_icons.t20803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20805,meta20804__$1){
var self__ = this;
var _20805__$1 = this;
return (new clui_om.svg.brittle_icons.t20803(self__.owner,self__.app,self__.brittle_medal_icon,meta20804__$1));
});

clui_om.svg.brittle_icons.t20803.cljs$lang$type = true;

clui_om.svg.brittle_icons.t20803.cljs$lang$ctorStr = "clui-om.svg.brittle-icons/t20803";

clui_om.svg.brittle_icons.t20803.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.svg.brittle-icons/t20803");
});

clui_om.svg.brittle_icons.__GT_t20803 = (function __GT_t20803(owner__$1,app__$1,brittle_medal_icon__$1,meta20804){
return (new clui_om.svg.brittle_icons.t20803(owner__$1,app__$1,brittle_medal_icon__$1,meta20804));
});

}

return (new clui_om.svg.brittle_icons.t20803(owner,app,brittle_medal_icon,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),75,new cljs.core.Keyword(null,"end-line","end-line",1837326455),182,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),129,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/svg/brittle_icons.cljs"], null)));
});
clui_om.svg.brittle_icons.heart_svg = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 31 30",new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"width","width",-384071477),"31",new cljs.core.Keyword(null,"height","height",1025178622),"30",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"heart-icon",new cljs.core.Keyword(null,"d","d",1972142424),"M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454 C30,20.335,16,28.261,16,28.261z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null)], null)], null);
/**
* Use the defsvg map to build a custom icon piece-by-piece
*/
clui_om.svg.brittle_icons.robust_heart_icon = (function robust_heart_icon(app,owner){
if(typeof clui_om.svg.brittle_icons.t20899 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.svg.brittle_icons.t20899 = (function (owner,app,robust_heart_icon,meta20900){
this.owner = owner;
this.app = app;
this.robust_heart_icon = robust_heart_icon;
this.meta20900 = meta20900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.svg.brittle_icons.t20899.prototype.om$core$IRender$ = true;

clui_om.svg.brittle_icons.t20899.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var elts = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(clui_om.svg.brittle_icons.heart_svg);
var path1 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (elts,___$1){
return (function (p1__20895_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__20895_SHARP_));
});})(elts,___$1))
,elts));
var divattr = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"iconOuter heart"], null);
var svgattr = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),cljs.core.get_in.call(null,clui_om.svg.brittle_icons.heart_svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477)], null)),new cljs.core.Keyword(null,"id","id",-1388402092),"lonelyHeart",new cljs.core.Keyword(null,"className","className",-1983287057),"iconHeart"], null);
var pathattr = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.get_in.call(null,path1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"d","d",1972142424)], null)),new cljs.core.Keyword(null,"className","className",-1983287057),"lonelyPath"], null);
return React.DOM.div(cljs.core.clj__GT_js.call(null,divattr),React.DOM.svg(cljs.core.clj__GT_js.call(null,svgattr),React.DOM.path(cljs.core.clj__GT_js.call(null,pathattr))));
});

clui_om.svg.brittle_icons.t20899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20901){
var self__ = this;
var _20901__$1 = this;
return self__.meta20900;
});

clui_om.svg.brittle_icons.t20899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20901,meta20900__$1){
var self__ = this;
var _20901__$1 = this;
return (new clui_om.svg.brittle_icons.t20899(self__.owner,self__.app,self__.robust_heart_icon,meta20900__$1));
});

clui_om.svg.brittle_icons.t20899.cljs$lang$type = true;

clui_om.svg.brittle_icons.t20899.cljs$lang$ctorStr = "clui-om.svg.brittle-icons/t20899";

clui_om.svg.brittle_icons.t20899.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.svg.brittle-icons/t20899");
});

clui_om.svg.brittle_icons.__GT_t20899 = (function __GT_t20899(owner__$1,app__$1,robust_heart_icon__$1,meta20900){
return (new clui_om.svg.brittle_icons.t20899(owner__$1,app__$1,robust_heart_icon__$1,meta20900));
});

}

return (new clui_om.svg.brittle_icons.t20899(owner,app,robust_heart_icon,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),61,new cljs.core.Keyword(null,"end-line","end-line",1837326455),220,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),207,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/svg/brittle_icons.cljs"], null)));
});
clui_om.svg.brittle_icons.bear_svg = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xml:space","xml:space",-1976466326),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"viewbox","viewbox",-1545612500),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),new cljs.core.Keyword(null,"xmlns:xlink","xmlns:xlink",-316591054),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),new cljs.core.Keyword(null,"enable-background","enable-background",-858721379),new cljs.core.Keyword(null,"height","height",1025178622)],["0","preserve","200","0 0 200 200","http://www.w3.org/2000/svg","http://www.w3.org/1999/xlink","Capa_1","0","1.1","0 0 200 200","new 0 0 200 200","200"]),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\r\n\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#1D1D1B",new cljs.core.Keyword(null,"d","d",1972142424),"M134.374,46.481c-3.109-2.588-6.522-0.404-9.679,1.049c-0.038-0.071-0.079-0.141-0.117-0.213\r\n\t\tc-0.03-0.056-0.155-0.328-0.254-0.54c0.227-0.62,0.168-1.328-0.408-1.817c-0.484-0.412-1.007-0.745-1.514-1.124\r\n\t\tc-1.613-1.207-3.829,0.121-4.363,1.775c-0.506,1.57-0.008,3.238,0.643,4.782c-1.069,0.528-2.132,1.066-3.196,1.603\r\n\t\tc-1.216,0.133-2.466,0.788-3.664,2.06c-3.204,3.405,0.813,8.284,4.849,6.285c1.93-0.955,3.876-1.878,5.814-2.816\r\n\t\tc0.384,0.593,0.748,1.201,1.155,1.775c1.492,2.105,3.263,4.744,6.171,4.628c3.388-0.135,4.934-3.786,2.734-6.304\r\n\t\tc-0.08-0.091-0.192-0.123-0.282-0.198c-0.098-0.119-0.172-0.257-0.279-0.37c-1.857-1.965,0.352,0.396-0.789-0.661\r\n\t\tc-0.661-0.613-1.268-1.299-1.821-1.97c2.552-0.948,5.367-2.113,5.878-4.615C135.486,48.68,135.333,47.279,134.374,46.481z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null),"\r\n\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#1D1D1B",new cljs.core.Keyword(null,"d","d",1972142424),"M80.829,47.341c-0.131-0.046-0.28-0.097-0.48-0.166c-0.798-0.273-1.723-0.229-2.516,0.039\r\n\t\tc-0.976,0.329-2.039,0.49-3.081,0.651c0.142-0.436,0.257-0.88,0.407-1.313c0.159-0.456,0.327-0.906,0.542-1.335\r\n\t\tc0.088-0.174,0.845-1.05,0.237-0.428c3.609-3.692-2.661-8.722-5.65-4.36c-1.489,2.173-1.971,5.429-2.525,7.938\r\n\t\tc-0.022,0.098-0.041,0.199-0.062,0.297c-0.19,0.042-0.401,0.063-0.579,0.116c-0.36-0.098-0.766-0.089-1.179,0.086\r\n\t\tc-1.527,0.648-1.797,2.133-0.984,3.264c0.351,0.798,1.014,1.303,1.826,1.636c-0.187,1.485-0.292,2.975-0.209,4.449\r\n\t\tc0.205,3.693,5.282,3.581,5.651,0c0.137-1.335,0.41-2.673,0.727-4.002c0.446-0.03,0.864-0.059,1.221-0.073\r\n\t\tc2.639-0.108,7.069,0.425,8.477-2.418C83.44,50.135,82.701,47.667,80.829,47.341z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null),"\r\n\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#1D1D1B",new cljs.core.Keyword(null,"d","d",1972142424),"M187.661,48.587c2.945-10.688-4.179-22.13-10.809-29.851c-6.691-7.792-16.966-15.582-27.737-15.385\r\n\t\tc-12.158,0.222-17.597,12.291-17.923,22.961c-7.262-3.502-15.222-5.748-23.33-6.628c-0.852-0.869-2.049-1.422-3.556-1.14\r\n\t\tc-1.16,0.217-2.326,0.45-3.495,0.697c-0.266-0.004-0.532-0.028-0.797-0.028c-0.753-0.001-1.314,0.254-1.779,0.598\r\n\t\tc-4.86,1.113-9.752,2.499-14.523,4.167C80.076,12.971,67.543,3.422,55.997,4.235c-10.958,0.772-19.73,9.194-25.483,17.888\r\n\t\tc-5.478,8.279-9.379,19.436-6.661,29.338c2.314,8.431,10.552,11.855,18.422,10.675c-1.442,7.563-0.675,16.215,3.085,26.092\r\n\t\tc2.376,6.241,5.989,11.546,10.481,15.973c-0.455-0.267-1.019-0.405-1.689-0.289c-8.513,1.48-14.391,6.118-19.199,13.313\r\n\t\tc-2.376,3.556-3.807,8.115-3.133,12.254c-3.372-0.167-6.709,0.209-9.912,1.281c-1.388,0.465-2.083,1.421-2.312,2.459\r\n\t\tc-12.416,2.599-11.075,18.233-6.062,29.086c7.103,15.375,22.979,33.893,41.97,31.09c9.422-1.391,15.712-6.056,18.833-12.257\r\n\t\tc0.137,0.14,0.239,0.294,0.418,0.417c12.697,8.706,31.47,8.212,45.073,1.089c1.141,1.559,2.49,3.075,4.178,4.508\r\n\t\tc20.976,17.808,72.727-22.951,61.644-42.831c1.215-0.424,2.172-2.019,1.495-3.402c-4.589-9.378-12.732-13.046-21.906-12.879\r\n\t\tc-0.555-2.089-2.061-4.098-3.187-5.778c-1.99-2.973-4.313-5.79-6.848-8.311c-1.831-1.821-4.386-4.311-7.029-5.032\r\n\t\tc12.555-10.991,17.333-28.275,13.568-45.346c5.628,0.373,12.42-1.694,16.853-3.898C183.064,57.456,186.344,53.365,187.661,48.587z\r\n\t\t M43.394,57.759c-6.157-0.841-11.759-2.288-13.201-9.561c-1.502-7.577,2.625-16.261,6.563-22.427\r\n\t\tc4.21-6.592,11.109-13.355,19.241-14.309c10.79-1.265,15.514,7.955,21.45,14.908c-1.106,0.461-2.169,0.981-3.25,1.477\r\n\t\tc-2.978-6.156-10.772-9.914-17.341-9.445c-6.868,0.491-13.035,4.794-17.315,9.964c-3.865,4.669-6.868,10.979-5.568,17.151\r\n\t\tc1.15,5.458,6.107,7.765,11.116,8.112C44.467,54.974,43.856,56.328,43.394,57.759z M51.756,33.623\r\n\t\tc-1.77-0.916-3.456-1.992-5.087-3.145c1.611-1.56,3.484-2.911,5.503-3.904c1.516,1.35,3.061,2.666,4.561,4.037\r\n\t\tc1.472,1.346,3.145,3.014,4.943,4.407c-0.986,0.698-1.988,1.381-2.922,2.12c-0.038-0.043-0.032-0.096-0.076-0.138\r\n\t\tC56.894,35.324,53.928,34.747,51.756,33.623z M55.638,39.751c-1.275,1.163-2.488,2.371-3.621,3.632\r\n\t\tc-0.027-0.042-0.052-0.11-0.079-0.138c-0.372-0.392-0.807-0.715-1.283-0.968c-1.048-0.558-2.094-1.118-3.139-1.683\r\n\t\tc-2.006-1.085-4.033-2.131-6.067-3.162c0.904-1.83,2.112-3.513,3.361-4.996c1.429,1.26,2.91,2.46,4.467,3.575\r\n\t\tC50.96,37.215,53.344,39.094,55.638,39.751z M58.971,27.712c-1.062-0.775-2.1-1.58-3.142-2.381\r\n\t\tc0.345-0.068,0.677-0.195,1.027-0.235c5.435-0.621,8.009,2.657,11.366,5.76c-0.785,0.433-1.512,0.92-2.272,1.378\r\n\t\tC63.766,30.572,61.073,29.244,58.971,27.712z M47.41,49.387c-3.751-0.554-7.465-1.977-7.462-6.297\r\n\t\tc0.001-0.68,0.167-1.347,0.297-2.017c0.483,0.294,0.96,0.598,1.436,0.9c1.825,1.159,3.653,2.313,5.489,3.455\r\n\t\tc0.73,0.453,1.491,0.95,2.287,1.205C48.773,47.55,48.014,48.421,47.41,49.387z M55.451,186.248\r\n\t\tc-22.044,5.263-49.506-41.639-34.866-49.805c0.745,0.728,1.802,1.183,3.151,0.951c5.109-0.88,10.104-0.317,14.859,1.177\r\n\t\tc-1.293-0.063-2.58,0.971-2.884,2.206c-0.542,2.206,1.355,5.909,2.351,7.814c1.352,2.586,4.748,0.65,4.363-1.839\r\n\t\tc-0.031-0.203-0.09-0.402-0.129-0.604c0.152-0.229,0.323-0.451,0.365-0.723c0.312-2.005-0.409-4.905-2.228-6.191\r\n\t\tc7.663,2.842,14.636,8.046,20.26,13.81C71.955,164.584,74.41,181.722,55.451,186.248z M116.698,176.545\r\n\t\tc-12.189,6.028-27.107,6.967-39.338,0.555c-0.493-0.258-0.954-0.316-1.393-0.297c1.438-5.796,0.543-12.439-2.768-18.89\r\n\t\tc5.929-8.899,16.804-12.567,27.148-13.235c5.04-0.326,10.215,0.488,14.712,2.816c3.605,1.866,4.26,4.944,5.5,8.058\r\n\t\tC116.432,162.437,114.606,169.773,116.698,176.545z M179.037,139.339c-1.479,0.57-2.442,2.55-1.61,4.151\r\n\t\tc10.539,20.285-28.322,44.565-45.699,39.817c-3.611-0.987-5.877-2.685-7.172-4.811c0.123-1.112-0.318-2.238-1.11-3.002\r\n\t\tc-1.831-9.163,8.213-22.835,13.629-27.528C147.883,138.601,166.59,130.557,179.037,139.339z M152.546,119.369\r\n\t\tc1.7,2.192,3.256,4.462,4.657,6.857c0.489,0.837,0.87,1.722,1.264,2.59c-7.819,1.582-15.929,5.438-22.957,10.653\r\n\t\tc0.406-1.831-0.696-3.744-1.453-5.574c-1.177-2.842-2.417-6.188-4.782-8.275c-2.589-2.283-6.982,0.664-4.963,3.829\r\n\t\tc1.903,2.982,3.855,5.824,5.526,8.963c0.597,1.12,1.665,2.991,3.163,3c-2.632,2.154-5.026,4.514-7.192,6.975\r\n\t\tc-3.909-6.473-14.859-9.966-21.41-10.346c-12.224-0.708-27.407,4.558-33.763,15.655c-6.991-10.221-20.021-20.561-33.295-23.442\r\n\t\tc-0.62-9.582,9.665-18.971,18.035-21.908c1.802-0.632,1.979-2.461,1.123-3.576c19.576,18.608,54.962,21.195,78.361,12.171\r\n\t\tc3.942-1.52,7.462-3.497,10.594-5.812c0.012,0.059,0.044,0.193,0.21,0.585c0.27,0.636,1.207,1.227,1.697,1.688\r\n\t\tC149.269,115.203,150.942,117.3,152.546,119.369z M78.127,80.249c-7.594,7.245-4.461,20.349,6.422,21.791\r\n\t\tc4.574,0.606,8.921-1.845,11.448-5.554c0.407-0.597,0.739-1.232,1.05-1.875c1.747,3.227,4.356,5.952,7.716,7.492\r\n\t\tc3.827,1.753,8.115,1.57,11.686-0.688c3.894-2.462,7.622-8.717,6.135-13.306c-0.591-1.823-3.097-2.788-4.517-1.193\r\n\t\tc-3.56,3.999-3.445,12.045-10.915,9.522c-4.482-1.513-6.481-5.527-7.395-9.83c0.728-0.24,1.419-0.63,1.919-1.356\r\n\t\tc2.43-3.529,5.409-8.186,6.334-12.548c0.149-0.367,0.244-0.735,0.27-1.101c0.008-0.062,0.04-0.128,0.046-0.19\r\n\t\tc-0.017,0.041-0.034,0.081-0.05,0.121c0.014-0.29,0.017-0.579-0.047-0.854c14.334,3.583,27.875,18.233,28.625,31.455\r\n\t\tc0.096,1.687,1.353,2.778,2.732,2.983c-0.585,0.426-1.152,0.868-1.768,1.267c-22.533,14.588-56.256,8.215-75.675-8.694\r\n\t\tc1.132-11.856,13.681-20.083,25.492-24.526c0.104,0.29,0.242,0.569,0.397,0.85c0.721,1.313,1.55,2.557,2.386,3.798\r\n\t\tc1.114,1.656,2.315,3.266,3.488,4.89c-0.327,3.292-1.06,6.525-2.912,9.305c-1.63,2.446-3.489,3.079-5.785,2.864\r\n\t\tc-1.23-0.116-3.28-1.574-3.811-2.927c-1.01-2.572,0.036-5.893,1.278-9.05C83.727,80.219,79.95,78.51,78.127,80.249z\r\n\t\t M143.607,101.819c8.774-19.423-29.809-40.049-44.79-39.203c-14.77,0.834-39.286,13.893-41.437,30.308\r\n\t\tc-13.392-16.316-7.34-41.612,8.845-53.709c11.137-8.324,26.922-10.333,40.143-13.191l0.001,0\r\n\t\tc18.697,2.573,34.831,11.981,44.149,29.213C159.127,71.157,156.097,89.927,143.607,101.819z M154.682,46.342\r\n\t\tc-0.067,0.06-0.093,0.128-0.147,0.19c-1.01-1.538-2.027-3.071-3.182-4.481c3.092-3.445,6.87-6.283,9.742-9.867\r\n\t\tc0.075-0.094,0.099-0.191,0.159-0.286c0.562,0.586,1.074,1.219,1.503,1.916c0.797,1.294,1.212,2.835,1.358,4.407\r\n\t\tC160.965,40.917,157.757,43.586,154.682,46.342z M152.934,34.656c-1.336,1.626-2.577,3.321-3.73,5.076\r\n\t\tc-1.064-1.152-2.089-2.342-3.244-3.402c1.016-1.398,2.432-2.725,3.403-3.744c1.116-1.172,2.336-2.268,3.635-3.233\r\n\t\tc0.588-0.436,1.136-0.864,1.522-1.387c1.124,0.33,2.193,0.809,3.221,1.357C155.948,30.841,154.411,32.858,152.934,34.656z\r\n\t\t M146.27,30.2c-0.953,1.253-1.891,2.698-2.53,4.234c-0.801-0.663-1.583-1.349-2.419-1.969c1.128-2.987,3.412-4.71,7.085-5.092\r\n\t\tC147.535,28.426,146.79,29.516,146.27,30.2z M159.43,55.803c-0.24-0.62-0.537-1.199-0.798-1.804\r\n\t\tc3.844,0.746,7.784-1.951,10.049-5.387c3.546-5.379,2.945-12.818-0.022-18.249c-6.559-12.005-27.864-12.835-31.623-0.802\r\n\t\tc-0.609-0.376-1.201-0.777-1.823-1.133c0.036-0.091,0.094-0.156,0.119-0.257c1.952-7.783,4.489-18.144,14.414-17.586\r\n\t\tc8.261,0.465,15.882,7.127,21.153,12.918c4.962,5.449,10.727,14.013,9.625,21.834C179.034,55.925,167.175,54.004,159.43,55.803z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null),"\r\n\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#1D1D1B",new cljs.core.Keyword(null,"d","d",1972142424),"M147.701,153.667c-3.531-1.343-5.782,0.581-7.215,3.412c-0.123,0.134-0.271,0.23-0.37,0.396\r\n\t\tc-0.507-0.065-1.052,0.061-1.54,0.525c-2.606,2.477-5.232,5.972-4.379,9.814c1.028,4.632,6.035,6.207,10.188,6.676\r\n\t\tc5.876,0.664,10.394-3.068,10.305-9.059C154.623,160.947,152.124,155.349,147.701,153.667z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null),"\r\n\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#1D1D1B",new cljs.core.Keyword(null,"d","d",1972142424),"M161.22,142.647c-1.089-2.193-3.85-2.012-5.478-0.706c-0.946,0.759-1.232,2.22-1.388,3.584\r\n\t\tc-0.225,0.738-0.486,1.467-0.768,2.185c-1.762,4.492,6.1,6.831,7.311,2.015C161.457,147.498,162.305,144.833,161.22,142.647z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null),"\r\n\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#1D1D1B",new cljs.core.Keyword(null,"d","d",1972142424),"M167.413,151.021c-0.492-0.604-0.991-1.075-1.642-1.521c-1.213-0.832-3.259-0.567-4.222,0.545\r\n\t\tc-1.596,1.843-1.104,3.49-0.002,5.37c0.287,0.489,0.704,0.811,1.166,1.028C165.887,158.75,170.414,154.705,167.413,151.021z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null),"\r\n\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#1D1D1B",new cljs.core.Keyword(null,"d","d",1972142424),"M166.374,158.513c-1.464-0.167-2.96-0.055-4.432-0.036c-2.309-0.03-3.445,1.759-3.425,3.549\r\n\t\tc-0.01,0.863,0.261,1.714,0.792,2.373c-0.22,1.438,1.516,2.851,2.899,1.955c0.341-0.221,0.697-0.489,1.061-0.748\r\n\t\tc1.038,0.029,2.079,0.05,3.105-0.067C170.893,165.024,170.893,159.028,166.374,158.513z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null),"\r\n\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#1D1D1B",new cljs.core.Keyword(null,"d","d",1972142424),"M55.074,155.223c-3.291-2.385-7.819-3.27-11.911-2.47c-9.105-0.405-16.687,7.542-11.358,16.509\r\n\t\tc0.725,1.221,1.655,2.388,2.664,3.517c0.294,0.575,0.588,1.151,0.961,1.674c1.474,2.063,3.48,3.232,5.645,3.748\r\n\t\tc4.333,2.571,9.31,4.004,13.913,3.259c4.506-0.729,7.057-4.958,7.437-9.187C63.028,165.556,60.56,159.199,55.074,155.223z\r\n\t\t M56.008,172.499c-0.032-0.363-0.13-0.733-0.394-1.102c-0.16-0.224-0.391-0.38-0.59-0.57c1.595-4.561-1.557-8.646-5.816-11.223\r\n\t\tc1.22,0.408,2.334,0.99,3.171,1.67C55.144,163.515,56.966,168.706,56.008,172.499z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null),"\r\n\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\r\n\t\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#1D1D1B",new cljs.core.Keyword(null,"d","d",1972142424),"M25.616,149.432c-1.543-0.223-3.192-0.377-4.401,0.832c-1.219,1.219-1.281,3.437,0.027,4.632\r\n\t\t\tc0.482,0.44,0.949,0.766,1.596,0.916c0.516,0.139,1.031,0.139,1.547,0c0.183-0.079,0.314-0.135,0.425-0.183l0.002,0\r\n\t\t\tc0.004-0.001,0.006-0.004,0.009-0.005c0.322-0.137,0.313-0.129,0.016,0.007C28.149,155.641,29.253,149.959,25.616,149.432z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null),"\r\n\t\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#1D1D1B",new cljs.core.Keyword(null,"d","d",1972142424),"M24.633,155.723c0.094-0.043,0.138-0.063,0.203-0.092c-0.008,0-0.016-0.002-0.025-0.002\r\n\t\t\tC24.746,155.653,24.702,155.703,24.633,155.723z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null),"\r\n\t"], null)], null),"\r\n\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#1D1D1B",new cljs.core.Keyword(null,"d","d",1972142424),"M33.663,144.122c-1.243-0.702-3.367-1.015-4.233-2.257c-2.209-3.167-7.418-0.218-5.231,3.058\r\n\t\tc0.424,0.844,1.048,1.578,1.739,2.261c0.963,1.163,1.986,2.274,3.119,3.283c1.099,0.979,2.355,0.796,3.206,0.111\r\n\t\tC35.169,150.448,36.586,145.77,33.663,144.122z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null),"\r\n\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#1D1D1B",new cljs.core.Keyword(null,"d","d",1972142424),"M69.585,122.247c-3.301,0.478-4.747,5.417-5.617,8.077c-1.425,4.35-1.655,9.196-0.622,13.64\r\n\t\tc0.547,2.353,4.3,1.845,4.206-0.569c-0.144-3.672,0.411-7.081,1.593-10.554c0.893-2.623,3.205-4.54,3.958-7.075\r\n\t\tC73.787,123.465,71.623,121.952,69.585,122.247z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null),"\r\n"], null)], null)], null)], null);
clui_om.svg.brittle_icons.auto_bear_icon = clui_om.svg.icons.auto_icon.call(null,clui_om.svg.brittle_icons.bear_svg);
clui_om.svg.brittle_icons.ant_svg = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xml:space","xml:space",-1976466326),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"viewbox","viewbox",-1545612500),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"xmlns:xlink","xmlns:xlink",-316591054),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),new cljs.core.Keyword(null,"height","height",1025178622)],["0","preserve","150","0 0 150 150","http://www.w3.org/2000/svg","enable-background:new 0 0 150 150;","http://www.w3.org/1999/xlink","Capa_1","0","1.1","0 0 150 150","150"]),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\r\n\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M110.833,100.667c0.525,1.274,0.675,1.589,1.325,1.936c0.204,0.111,0.359,0.141,0.473,0.163\r\n\t\tc0.178,0.035,0.275,0.054,0.613,0.75c0.568,1.158,0.642,1.307,1.401,1.686c0.121,0.061,0.234,0.113,0.337,0.16\r\n\t\tc0.478,0.22,0.59,0.284,0.598,0.611c0.029,1.114,1.056,2.403,1.703,2.403c0.188,0,0.389-0.105,0.467-0.383\r\n\t\tc0.164,0.115,0.35,0.207,0.542,0.303c0.596,0.297,1.212,0.605,1.534,1.662c0.037,0.122,0.153,0.494,0.458,0.494\r\n\t\tc0.091,0,0.224-0.036,0.335-0.207c0.222-0.338,0.312-1.162,0.104-1.641c-0.811-1.885-2.081-3.289-2.796-3.509\r\n\t\tc-0.618-0.185-0.946-0.301-1.06-0.723c-0.188-0.685-0.49-1.507-1.152-1.788c-0.708-0.296-1.119-0.748-1.221-1.34\r\n\t\tc-0.082-0.487-0.699-1.166-1.415-1.952c-0.64-0.703-1.364-1.499-1.632-2.1c-1.313-3.705-2.467-8.051-3.583-12.255\r\n\t\tc-1.675-6.312-3.257-12.275-5.206-15.465c-0.062-0.1-0.112-0.268-0.162-0.43c-0.05-0.162-0.102-0.329-0.171-0.462\r\n\t\tc-0.093-0.178-0.242-0.333-0.445-0.462c-0.247-0.155-0.659-0.23-1.259-0.23c-2.944,0-10.611,2.009-14.308,5.293\r\n\t\tc-0.175,0.155-0.314,0.264-0.385,0.31c-0.045-0.015-0.134-0.053-0.306-0.142c-0.113-0.058-0.233-0.238-0.232-0.427\r\n\t\tc0.011-1.254-0.166-1.913-0.434-2.518c-0.005-0.011-0.009-0.021-0.013-0.029c0.021-0.001,0.039-0.002,0.039-0.002\r\n\t\tc1.291,0.112,2.032-0.321,2.418-0.679c0.285-0.265,0.545-0.467,0.713-0.554c5.104-2.645,14.249-17.816,15.328-21.733\r\n\t\tc0.054-0.195,0.237-0.4,0.41-0.458c0.891-0.295,2.279-0.948,3.832-2.387c0.058-0.052,0.114-0.179,0.107-0.256\r\n\t\tc-0.006-0.078-0.039-0.136-0.084-0.185c0.268-0.209,0.695-0.505,1.113-0.793c0.65-0.449,1.265-0.873,1.523-1.132\r\n\t\tc0.061-0.063,0.103-0.201,0.08-0.286c-0.041-0.153-0.179-0.218-0.33-0.266c0.559-0.538,1.16-1.058,1.654-1.485\r\n\t\tc0.969-0.837,1.091-0.952,1.057-1.161c-0.002-0.012-0.005-0.024-0.01-0.037c0.27-0.213,0.334-0.286,0.354-0.451\r\n\t\tc0.017-0.138,0.304-0.537,0.831-1.157c0.207-0.249,0.4-0.458,0.584-0.629c0.249-0.233,0.373-0.351,0.303-0.541\r\n\t\tc-0.016-0.043-0.05-0.083-0.092-0.114c0.008-0.037,0.026-0.088,0.066-0.145c0.498-0.698,1.667-0.859,2.521-0.977\r\n\t\tc0.686-0.095,1.1-0.152,1.174-0.48c0.065-0.283-0.215-0.514-0.528-0.722c-0.63-0.416-1.367-0.645-2.077-0.645\r\n\t\tc-1.224,0-2.223,0.643-2.755,1.767c-0.07-0.058-0.154-0.088-0.242-0.088c-0.249,0-0.46,0.222-0.707,0.742\r\n\t\tc-0.093,0.198-0.568,1.23-0.787,2.137c-0.026,0.109-0.045,0.132-0.096,0.194c-0.045,0.055-0.097,0.119-0.159,0.23\r\n\t\tc-0.042,0.076-0.092,0.17-0.147,0.276c-0.225,0.427-0.551,1.045-0.961,1.538c-0.085-0.195-0.185-0.404-0.405-0.404\r\n\t\tc-0.063,0-0.167,0.044-0.214,0.088c-0.345,0.33-0.692,0.847-1.061,1.394c-0.255,0.381-0.517,0.77-0.783,1.104\r\n\t\tc-0.012-0.039-0.03-0.075-0.059-0.107c-0.086-0.099-0.298-0.103-0.398-0.021c-0.374,0.306-0.795,0.685-1.229,1.075\r\n\t\tc-0.642,0.578-1.304,1.175-1.873,1.584c-0.211,0.151-0.603,0.349-0.837,0.467c-1.866,0.939-2.547,2.191-4.8,6.34\r\n\t\tc-0.616,1.135-1.353,2.49-2.265,4.119c-5.396,9.633-8.025,11.072-9.112,11.072c-0.124,0-0.243-0.019-0.354-0.056\r\n\t\tc-0.268-0.088-0.527-0.133-0.775-0.133c-0.903,0-1.475,0.57-1.934,1.028L83.79,67.62c-0.007-0.002-0.036-0.023-0.057-0.089\r\n\t\tc-1.045-3.338-4.063-6.265-5.822-7.748c3.553-0.436,5.1-2.008,7.044-4.349c3.181-3.848,0.264-11.722-1.158-14.972l-0.07-0.134\r\n\t\tc0-0.021,0.012-0.117,0.177-0.427c0.135-0.252,0.203-0.509,0.203-0.762l0.001-0.554c0.001-0.237,0.087-0.628,0.188-0.854\r\n\t\tc0.431-0.962,0.844-1.924,1.251-2.873c1.67-3.891,3.247-7.566,5.585-10.08c0.11-0.118,0.239-0.331,0.394-0.65\r\n\t\tc0.131-0.271,0.276-0.718,0.342-0.995c0.65-2.759,2.595-12.139,0.342-16.982c-0.579-1.248-1.323-1.434-1.716-1.434\r\n\t\tc-0.457,0-0.915,0.242-1.257,0.664c-0.447,0.55-0.634,1.322-0.488,2.014c1.539,7.441,2.069,12.515,1.578,15.078\r\n\t\tc-0.047,0.244-0.212,0.628-0.336,0.835c-0.269,0.446-0.658,1.067-0.987,1.497c-2.187,2.878-3.736,6.874-5.696,11.933\r\n\t\tc-0.059,0.149-0.268,0.282-0.467,0.295c-0.162,0.011-0.313,0.037-0.452,0.075c-0.191,0.054-0.355,0.021-0.43-0.09\r\n\t\tc-0.537-0.82-1.09-1.478-1.691-2.01c-0.155-0.137-0.276-0.418-0.265-0.613c0.035-0.585,0.014-1.018-0.063-1.286\r\n\t\tc-0.036-0.127-0.145-0.516-1.403-1.354c-0.245-0.163-0.459-0.147-0.583,0.005c-0.086,0.104-0.108,0.254-0.068,0.457\r\n\t\tc0.051,0.263,0.072,0.677-0.111,1.152c-0.049,0.123-0.257,0.217-0.44,0.188c-0.375-0.062-0.769-0.095-1.15-0.062\r\n\t\tc-0.1,0.009-0.262,0.009-0.361,0c-0.383-0.032-0.776,0.001-1.15,0.062c-0.178,0.027-0.392-0.063-0.438-0.187\r\n\t\tc-0.186-0.476-0.164-0.89-0.113-1.152c0.04-0.204,0.018-0.354-0.068-0.458c-0.125-0.151-0.339-0.167-0.583-0.004\r\n\t\tc-1.259,0.838-1.367,1.227-1.402,1.353c-0.078,0.27-0.1,0.703-0.064,1.287c0.012,0.197-0.109,0.478-0.264,0.614\r\n\t\tc-0.6,0.53-1.153,1.188-1.692,2.009c-0.074,0.113-0.239,0.146-0.431,0.091c-0.138-0.039-0.29-0.064-0.453-0.075\r\n\t\tc-0.197-0.013-0.406-0.146-0.464-0.294c-1.961-5.059-3.511-9.055-5.698-11.934c-0.328-0.429-0.718-1.051-0.986-1.497\r\n\t\tc-0.124-0.207-0.289-0.591-0.336-0.835c-0.491-2.563,0.039-7.636,1.578-15.077c0.146-0.692-0.041-1.464-0.488-2.015\r\n\t\tc-0.342-0.422-0.8-0.664-1.257-0.664c-0.393,0-1.137,0.186-1.716,1.434c-2.253,4.843-0.309,14.223,0.342,16.982\r\n\t\tc0.065,0.276,0.211,0.724,0.342,0.994c0.154,0.319,0.283,0.532,0.394,0.65c2.338,2.514,3.915,6.189,5.585,10.08\r\n\t\tc0.407,0.948,0.82,1.91,1.251,2.872c0.101,0.226,0.187,0.617,0.188,0.854l0.001,0.553c0,0.253,0.068,0.51,0.203,0.762\r\n\t\tc0.156,0.293,0.175,0.395,0.185,0.395c0,0,0.001,0,0.002-0.001l-0.101,0.21c-1.401,3.207-4.318,11.081-1.138,14.93\r\n\t\tc1.944,2.341,3.491,3.913,7.043,4.349c-1.758,1.484-4.776,4.411-5.821,7.749c-0.019,0.061-0.048,0.087-0.104,0.056l-0.141-0.139\r\n\t\tc-0.46-0.458-1.031-1.028-1.935-1.028c-0.248,0-0.508,0.045-0.776,0.134c-0.109,0.037-0.229,0.055-0.353,0.055\r\n\t\tc-1.087,0-3.716-1.438-9.112-11.072c-0.912-1.629-1.648-2.984-2.265-4.119c-2.253-4.149-2.934-5.401-4.8-6.34\r\n\t\tc-0.234-0.118-0.626-0.316-0.837-0.467c-0.569-0.41-1.231-1.007-1.873-1.584c-0.434-0.39-0.854-0.77-1.231-1.077\r\n\t\tc-0.1-0.08-0.311-0.075-0.396,0.023c-0.028,0.033-0.047,0.068-0.059,0.107c-0.267-0.335-0.528-0.724-0.783-1.104\r\n\t\tc-0.368-0.547-0.716-1.064-1.063-1.396c-0.046-0.043-0.148-0.086-0.211-0.086c-0.221,0-0.32,0.208-0.405,0.404\r\n\t\tc-0.41-0.493-0.736-1.111-0.961-1.538c-0.056-0.106-0.105-0.2-0.148-0.276c-0.062-0.111-0.113-0.175-0.158-0.23\r\n\t\tc-0.051-0.062-0.069-0.085-0.096-0.194c-0.219-0.907-0.694-1.939-0.788-2.138c-0.246-0.52-0.457-0.741-0.706-0.741\r\n\t\tc-0.088,0-0.172,0.03-0.242,0.088c-0.532-1.125-1.531-1.767-2.755-1.767c-0.71,0-1.447,0.229-2.077,0.645\r\n\t\tc-0.313,0.208-0.594,0.438-0.528,0.722c0.074,0.328,0.488,0.385,1.174,0.48c0.854,0.118,2.022,0.279,2.521,0.977\r\n\t\tc0.04,0.057,0.059,0.109,0.066,0.146c-0.042,0.031-0.076,0.071-0.092,0.114c-0.07,0.19,0.054,0.308,0.312,0.55\r\n\t\tc0.174,0.162,0.367,0.371,0.576,0.622c0.525,0.618,0.812,1.018,0.829,1.155c0.021,0.165,0.084,0.238,0.354,0.451\r\n\t\tc-0.005,0.012-0.008,0.024-0.01,0.037c-0.034,0.208,0.088,0.323,1.057,1.161c0.495,0.428,1.096,0.948,1.654,1.485\r\n\t\tc-0.151,0.048-0.289,0.113-0.33,0.266c-0.022,0.086,0.02,0.225,0.083,0.288c0.256,0.257,0.87,0.681,1.521,1.13\r\n\t\tc0.417,0.288,0.846,0.583,1.112,0.793c-0.042,0.046-0.077,0.105-0.083,0.186c-0.007,0.077,0.049,0.203,0.105,0.255\r\n\t\tc1.555,1.439,2.943,2.093,3.834,2.388c0.172,0.057,0.356,0.263,0.41,0.459c1.081,3.918,10.227,19.089,15.328,21.731\r\n\t\tc0.168,0.086,0.428,0.289,0.714,0.555c0.385,0.358,1.125,0.794,2.417,0.679l0.032-0.245c0,0,0.001,0,0.001,0l0.014,0.202\r\n\t\tc0,0,0.001,0.022-0.021,0.073c-0.268,0.605-0.444,1.265-0.434,2.518c0.001,0.189-0.119,0.369-0.232,0.427\r\n\t\tc-0.176,0.091-0.265,0.128-0.305,0.143c-0.069-0.046-0.21-0.155-0.386-0.312c-3.696-3.283-11.363-5.292-14.308-5.292\r\n\t\tc-0.6,0-1.012,0.075-1.26,0.231c-0.202,0.128-0.352,0.283-0.444,0.461c-0.069,0.133-0.121,0.3-0.171,0.462\r\n\t\tc-0.05,0.163-0.101,0.331-0.161,0.43c-1.95,3.19-3.532,9.153-5.207,15.465c-1.116,4.204-2.27,8.55-3.576,12.237\r\n\t\tc-0.274,0.618-0.999,1.415-1.639,2.117c-0.716,0.786-1.333,1.464-1.415,1.951c-0.102,0.593-0.513,1.044-1.222,1.341\r\n\t\tc-0.661,0.28-0.963,1.103-1.151,1.789c-0.113,0.421-0.441,0.537-1.062,0.723c-0.712,0.22-1.982,1.624-2.793,3.507\r\n\t\tc-0.209,0.48-0.118,1.304,0.104,1.642c0.111,0.171,0.244,0.207,0.335,0.207c0.305,0,0.42-0.372,0.459-0.495\r\n\t\tc0.321-1.056,0.938-1.363,1.533-1.661c0.19-0.095,0.373-0.186,0.542-0.305c0.077,0.279,0.278,0.385,0.467,0.385\r\n\t\tc0.647,0,1.674-1.289,1.703-2.404c0.008-0.326,0.12-0.39,0.598-0.61c0.103-0.047,0.216-0.099,0.337-0.16\r\n\t\tc0.76-0.379,0.833-0.528,1.401-1.687c0.338-0.695,0.436-0.714,0.613-0.749c0.113-0.022,0.269-0.052,0.472-0.162\r\n\t\tc0.651-0.348,0.801-0.663,1.326-1.937c0.291-0.706,0.183-1.108,0.111-1.374c-0.058-0.212-0.061-0.225,0.188-0.383\r\n\t\tc0.15-0.095,0.266-0.102,0.399-0.109c0.649-0.037,0.926-0.297,1.478-3.078c0.6-3.047,2.252-7.42,3.851-11.648\r\n\t\tc1.853-4.903,3.769-9.974,4.088-13.091c0.01-0.102,0.048-0.102,0.066-0.102c0.016,0,0.042,0.003,0.081,0.019\r\n\t\tc0.068,0.029,0.14,0.056,0.214,0.083c0.311,0.113,0.797,0.186,1.034,0.21c2.148,0.226,2.825,0.709,3.762,1.378\r\n\t\tc1.048,0.749,2.352,1.681,6.092,2.712c0.969,0.186,1.722,0.627,2.41,1.063c0.169,0.107,0.386,0.365,0.545,0.553l0.078,0.091\r\n\t\tc0.239,0.279,0.686,0.625,1.457,0.69c0.181,0.016,0.352,0.146,0.388,0.298c0.121,0.507,0.25,0.939,0.354,1.286\r\n\t\tc0.046,0.155-0.038,0.375-0.184,0.479c-0.51,0.367-0.978,0.808-1.252,1.178c-0.076,0.103-0.142,0.205-0.195,0.289\r\n\t\tc-0.023,0.037-0.043,0.07-0.061,0.095c-0.014,0.004-0.028,0.009-0.042,0.014c-6.985,2.724-13.228,8.825-13.25,11.725\r\n\t\tc0,0.228,0.007,0.426,0.027,0.588c0.015,0.115,0.047,0.25,0.08,0.391c0.043,0.181,0.092,0.385,0.088,0.522\r\n\t\tc-0.051,2.246,0.192,4.977,0.473,8.138c0.467,5.252,1.048,11.788,0.592,19.492c-0.011,0.197-0.163,0.499-0.331,0.66\r\n\t\tc-1.068,1.013-1.96,2.572-1.986,3.477c-0.016,0.675-0.394,1.238-1.122,1.674c-0.675,0.398-0.872,1.336-0.969,2.109\r\n\t\tc-0.062,0.491-0.423,0.683-1.058,0.979c-0.734,0.341-1.894,2.058-2.483,4.237c-0.144,0.53,0.06,1.352,0.33,1.706\r\n\t\tc0.107,0.14,0.229,0.211,0.36,0.211c0.235,0,0.386-0.199,0.447-0.592c0.188-1.211,0.846-1.666,1.425-2.066\r\n\t\tc0.204-0.142,0.401-0.278,0.569-0.441c0.126,0.327,0.367,0.369,0.48,0.369c0.221,0,0.455-0.139,0.698-0.412\r\n\t\tc0.492-0.555,0.937-1.575,0.832-2.449c-0.042-0.372,0.073-0.462,0.568-0.782c0.104-0.067,0.218-0.141,0.342-0.227\r\n\t\tc0.763-0.534,0.817-0.705,1.249-2.042c0.267-0.828,0.375-0.865,0.57-0.934c0.118-0.042,0.279-0.098,0.48-0.247\r\n\t\tc0.654-0.487,0.767-0.85,1.137-2.308c0.136-0.537,0.15-0.924,0.16-1.206c0.019-0.492,0.023-0.624,0.637-0.963\r\n\t\tc0.251-0.139,0.403-0.162,0.495-0.175c0.081-0.012,0.204-0.03,0.278-0.15c0.078-0.128,0.039-0.244-0.026-0.435\r\n\t\tc-0.099-0.291-0.33-0.972-0.584-2.558c-0.46-2.849-0.348-6.972-0.229-11.336c0.158-5.819,0.322-11.836-0.971-14.82\r\n\t\tc-0.078-0.181-0.053-0.452,0.055-0.581c1.484-1.774,3.342-2.684,5.309-3.646c2.129-1.042,4.543-2.224,6.878-4.706\r\n\t\tc0.13-0.141,0.238-0.277,0.328-0.407c0.118-0.172,0.376-0.339,0.574-0.373c0.121-0.021,0.246-0.048,0.371-0.084\r\n\t\tc0.033-0.01,0.066-0.015,0.099-0.015c0.063,0,0.176,0.019,0.219,0.145c0.674,1.979,1.244,3.303,1.694,3.935\r\n\t\tc0.109,0.154,0.202,0.377,0.136,0.543c-0.184,0.459-0.46,1.24-0.734,2.355c-0.216,0.841-0.159,1.625,0.179,2.466\r\n\t\tc0.056,0.139,0.004,0.292-0.122,0.354c-6.32,3.14-9.804,8.339-10.354,15.454c-0.547,7.08,2.009,14.063,3.581,17.595\r\n\t\tc0.255,0.574,0.496,1.172,0.736,1.769c0.709,1.759,1.442,3.577,2.513,4.669c0.13,0.134,0.329,0.429,0.547,0.809\r\n\t\tc0.098,0.17,0.193,0.384,0.312,0.648c0.249,0.551,0.589,1.305,1.219,2.323c0.104,0.175,0.376,0.508,0.663,0.861\r\n\t\tc0.236,0.291,0.481,0.591,0.557,0.713c0.265,0.437,0.4,0.756,0.531,1.064c0.126,0.295,0.244,0.574,0.458,0.919\r\n\t\tc0.145,0.233,0.436,0.488,0.717,0.735c0.189,0.166,0.385,0.337,0.463,0.443c0.874,1.208,1.336,1.754,1.87,2.387\r\n\t\tc0.159,0.188,0.325,0.385,0.512,0.609c0.175,0.212,0.462,0.364,0.807,0.427c0.146,0.026,0.339,0.041,0.544,0.041\r\n\t\ts0.398-0.015,0.544-0.041c0.345-0.062,0.632-0.214,0.807-0.426c0.187-0.225,0.353-0.422,0.512-0.61\r\n\t\tc0.534-0.633,0.996-1.18,1.869-2.386c0.079-0.107,0.274-0.279,0.464-0.445c0.281-0.247,0.572-0.502,0.718-0.736\r\n\t\tc0.213-0.344,0.331-0.623,0.457-0.918c0.131-0.309,0.267-0.628,0.53-1.063c0.076-0.124,0.321-0.424,0.558-0.715\r\n\t\tc0.287-0.353,0.559-0.686,0.661-0.857c0.632-1.021,0.972-1.775,1.221-2.326c0.119-0.265,0.215-0.479,0.312-0.649\r\n\t\tc0.218-0.38,0.417-0.674,0.547-0.808c1.07-1.093,1.804-2.911,2.513-4.67c0.24-0.596,0.481-1.194,0.736-1.769\r\n\t\tc1.572-3.532,4.128-10.516,3.581-17.595c-0.551-7.115-4.034-12.314-10.354-15.454c-0.126-0.062-0.178-0.214-0.121-0.354\r\n\t\tc0.337-0.841,0.394-1.624,0.179-2.463c-0.275-1.118-0.552-1.899-0.735-2.357c-0.066-0.167,0.027-0.391,0.137-0.544\r\n\t\tc0.449-0.632,1.02-1.956,1.693-3.934c0.044-0.127,0.155-0.146,0.219-0.146c0.032,0,0.065,0.005,0.101,0.015\r\n\t\tc0.125,0.036,0.248,0.063,0.369,0.084c0.198,0.034,0.456,0.201,0.574,0.372c0.09,0.131,0.198,0.267,0.33,0.41\r\n\t\tc2.333,2.48,4.747,3.662,6.876,4.704c1.967,0.962,3.824,1.872,5.309,3.646c0.107,0.129,0.133,0.4,0.055,0.581\r\n\t\tc-1.293,2.984-1.129,9.001-0.971,14.82c0.119,4.365,0.231,8.487-0.229,11.337c-0.254,1.585-0.485,2.267-0.584,2.558\r\n\t\tc-0.065,0.191-0.104,0.307-0.026,0.435c0.074,0.121,0.197,0.139,0.278,0.15c0.092,0.013,0.244,0.036,0.495,0.175\r\n\t\tc0.613,0.339,0.618,0.471,0.637,0.963c0.01,0.282,0.024,0.669,0.16,1.207c0.37,1.458,0.482,1.82,1.138,2.307\r\n\t\tc0.2,0.148,0.361,0.205,0.479,0.247c0.195,0.068,0.304,0.106,0.57,0.934c0.432,1.336,0.486,1.508,1.25,2.042\r\n\t\tc0.123,0.085,0.237,0.159,0.341,0.226c0.495,0.32,0.61,0.41,0.568,0.781c-0.104,0.875,0.34,1.896,0.832,2.45\r\n\t\tc0.243,0.273,0.478,0.412,0.698,0.412c0.113,0,0.354-0.041,0.479-0.368c0.167,0.162,0.365,0.298,0.57,0.441\r\n\t\tc0.579,0.4,1.236,0.854,1.425,2.066c0.062,0.393,0.212,0.592,0.447,0.592c0.132,0,0.253-0.071,0.36-0.211\r\n\t\tc0.271-0.354,0.474-1.176,0.33-1.706c-0.59-2.179-1.749-3.896-2.483-4.237c-0.635-0.296-0.996-0.488-1.058-0.98\r\n\t\tc-0.097-0.772-0.294-1.71-0.968-2.107c-0.729-0.437-1.107-1-1.123-1.677c-0.026-0.903-0.918-2.462-1.986-3.475\r\n\t\tc-0.168-0.16-0.319-0.462-0.331-0.66c-0.456-7.704,0.125-14.24,0.592-19.492c0.28-3.162,0.523-5.892,0.473-8.139\r\n\t\tc-0.004-0.135,0.045-0.34,0.088-0.521c0.033-0.14,0.065-0.276,0.08-0.391c0.021-0.163,0.027-0.36,0.027-0.59\r\n\t\tc-0.022-2.898-6.265-8.999-13.256-11.726c-0.012-0.004-0.023-0.008-0.036-0.012c-0.018-0.025-0.037-0.058-0.061-0.095\r\n\t\tc-0.054-0.084-0.119-0.187-0.194-0.289c-0.274-0.37-0.743-0.811-1.254-1.178c-0.146-0.105-0.229-0.324-0.183-0.479\r\n\t\tc0.104-0.348,0.233-0.779,0.354-1.286c0.036-0.152,0.206-0.282,0.388-0.298c0.771-0.066,1.218-0.412,1.457-0.69l0.078-0.091\r\n\t\tc0.159-0.188,0.376-0.445,0.545-0.553c0.688-0.436,1.441-0.877,2.43-1.068c3.721-1.027,5.024-1.959,6.072-2.708\r\n\t\tc0.937-0.669,1.613-1.153,3.762-1.378c0.237-0.025,0.722-0.097,1.033-0.211c0.074-0.027,0.147-0.055,0.215-0.083\r\n\t\tc0.039-0.016,0.065-0.019,0.081-0.019c0.019,0,0.057,0,0.066,0.102c0.319,3.118,2.235,8.188,4.088,13.091\r\n\t\tc1.599,4.229,3.251,8.601,3.851,11.649c0.552,2.78,0.828,3.041,1.478,3.077c0.134,0.007,0.249,0.014,0.399,0.109\r\n\t\tc0.249,0.158,0.246,0.171,0.188,0.383C110.65,99.559,110.542,99.96,110.833,100.667z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null),"\r\n"], null)], null)], null)], null);
clui_om.svg.brittle_icons.auto_ant_icon = clui_om.svg.icons.auto_icon.call(null,clui_om.svg.brittle_icons.ant_svg);
clui_om.svg.brittle_icons.seahorsicon = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xml:space","xml:space",-1976466326),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"viewbox","viewbox",-1545612500),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"xmlns:xlink","xmlns:xlink",-316591054),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),new cljs.core.Keyword(null,"height","height",1025178622)],["0","preserve",null,"0 0 150 150","http://www.w3.org/2000/svg","enable-background:new 0 0 150 150;","http://www.w3.org/1999/xlink","Capa_1","0","1.1","0 0 150 150",null]),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\r\n\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M110.607,36.512c-3.133-0.782-6.467-1.218-9.293-2.64c-2.64-1.329-5.051-3.48-6.981-5.762\r\n\t\tc-2.643-3.123-4.304-6.965-8.253-9.087c-1.379-0.741-2.18-3.16-2.575-4.959c-0.414-1.882-1.069-2.621-2.958-2.368\r\n\t\tc-1.139,0.153-2.307,0.168-3.459,0.142c-5.707-0.13-7.319-1.01-9.241-6.077c-0.272-0.717-0.901-0.856-1.442-0.312\r\n\t\tc-0.531,0.534-1.057,1.053-1.563,1.573c-0.535,0.55-1.575,1.174-2.173,1.655c-0.912,0.734-1.398,1.917-0.881,3.4\r\n\t\tc0.032,0.093,0.061,0.185,0.089,0.276c0.047,0.153-0.387,0.682-0.922,1.232c-0.248,0.254-0.486,0.515-0.714,0.781\r\n\t\tc-0.499,0.582-1.285,1.543-1.84,2.073c-0.728,0.695-1.478,1.287-2.328,1.508c-2.704,0.703-2.89,2.03-2.338,3.729\r\n\t\tc0.237,0.729-0.08,1.507-0.805,1.756c-0.546,0.188-1.031,0.378-1.42,0.687c-0.472,0.374-0.863,0.849-1.24,1.342\r\n\t\tc-0.466,0.609-0.236,1.21,0.52,1.345c0.608,0.108,1.217,0.212,1.829,0.294c0.169,0.023,0.387-0.37,0.564-0.355\r\n\t\tc0.388,0.034,0.775,0.088,1.161,0.148c0.639,0.099,0.863,0.638,0.498,1.192c-0.232,0.351-0.482,0.674-0.806,0.879\r\n\t\tc-1.948,1.236-3.961,2.369-6.01,3.544c-0.665,0.382-0.812,1.177-0.337,1.779c2.422,3.07,2.519,3.694,0.893,6.842\r\n\t\tc-0.352,0.681-0.043,1.392,0.654,1.712c2.983,1.371,2.932,3.611,1.265,6.091c-0.428,0.636-0.277,1.381,0.398,1.745\r\n\t\tc2.361,1.274,2.572,1.962,2.614,6.385c0.007,0.767,0.633,1.386,1.392,1.496c3.031,0.441,4.044,2.223,2.333,5.784\r\n\t\tc-0.182,0.378,0.727,1.847,1.204,1.885c3.935,0.32,3.944,2.394,2.617,5.258c-0.083,0.178-0.106,0.384-0.11,0.582\r\n\t\tc-0.007,0.329,0.531,0.928,1.214,1.277c1.306,0.668,2.664,1.263,2.894,2.15c0.098,0.376,0.195,0.753,0.292,1.131\r\n\t\tc0.161,0.625-0.323,1.02-1.077,0.881c-0.628-0.116-1.255-0.232-1.883-0.347c-2.21-0.608-4.5-1.052-7.057-1.593\r\n\t\tc-0.75-0.159-1.231,0.316-1.065,1.065c1.469,6.607,3.563,12.682,8.242,18.365c0.487,0.592,1.058,1.658,1.287,2.39\r\n\t\tc0.057,0.182,0.116,0.364,0.177,0.546c0.243,0.727,0.059,1.706-0.518,2.102c-0.577,0.396-0.838,1.223-0.792,1.988\r\n\t\tc0.171,2.845-2.568,5.029-2.401,7.877c0.047,0.798,0.362,1.913-0.034,2.351c-3.083,3.406-0.449,7.068-0.305,10.473\r\n\t\tc0.15,3.546,1.434,7.267,3.06,10.489c5.375,10.654,20.68,14.855,30.211,8.405c0.635-0.43,1.108-0.831,1.098-0.836\r\n\t\tc-0.009-0.006,0.077-0.05,0.187-0.111c0.067-0.037,0.131-0.077,0.191-0.122c0.308-0.231,0.617-0.463,0.926-0.694\r\n\t\tc0.117-0.09,0.234-0.181,0.351-0.271c0.194-0.15,0.425-0.345,0.51-0.442c0.084-0.097,0.567-0.449,0.938-0.925\r\n\t\tc0.21-0.271,0.41-0.579,0.615-0.901c5.494-8.637,2.014-20.056-7.047-23.006c-3.851-1.254-7.521-0.513-10.411,2.067\r\n\t\tc-2.647,2.364-4.028,5.563-3.138,9.377c0.74,3.173,3.075,4.592,5.859,5.197c3.026,0.658,5.936-0.238,7.64-2.874\r\n\t\tc0.72-1.113,0.672-3.218,0.114-4.498c-0.398-0.913-2.205-1.563-3.428-1.645c-0.559-0.037-1.151,0.413-1.642,1.072\r\n\t\tc-0.458,0.615-0.066,1.262,0.698,1.333c0.302,0.028,0.605,0.057,0.908,0.085c0.764,0.071,1.448,0.413,1.529,0.763\r\n\t\tc0.081,0.35-0.434,0.859-1.135,1.169c-0.877,0.389-1.754,0.761-2.616,0.731c-0.855-0.029-2.431-1.43-2.347-2.029\r\n\t\tc0.2-1.428,0.862-3.382,1.949-3.948c1.406-0.732,4.09-1.07,5.005-0.238c1.698,1.544,3.367,3.997,3.525,6.182\r\n\t\tc0.365,5.057-3.341,8.173-8.745,8.905c-8.402,1.138-14.099-5.545-13.014-14.469c0.613-5.043,3.26-9.062,6.756-12.171\r\n\t\tc0.345-0.307,0.669-0.619,0.975-0.935c0.518-0.537,1.242-0.956,1.659-1.005c0.238-0.028,0.485-0.082,0.742-0.165\r\n\t\tc0.364-0.118,0.724-0.24,1.081-0.366c0.595-0.21,1.674-0.549,2.423-0.713c1.964-0.432,3.835-0.794,5.252-1.796\r\n\t\tc0.579-0.409,0.662-1.519,0.673-2.731c0.007-0.767,0.256-1.963,0.424-2.711c0.195-0.869,0.254-1.757,0.254-2.652\r\n\t\tc0-0.767,0.33-1.892,0.743-2.537c2.033-3.173,3.342-6.718,3.618-10.749c0.278-4.051-0.86-8.2-1.364-12.304\r\n\t\tc-0.181-1.474-0.319-2.957-0.587-4.416c-0.152-0.826-0.497-1.622-0.807-2.412c-0.571-1.455-1.108-2.931-1.795-4.331\r\n\t\tc-0.576-1.175-1.114-2.899-2.078-3.248c-2.244-0.813-3.343-1.906-2.843-4.31c0.477-2.291-0.809-2.895-2.738-2.815\r\n\t\tc-2.417,0.101-3.603-0.907-3.739-3.438c-0.015-0.282-0.191-0.626-0.444-0.949c-0.362-0.462-0.588-1.332-0.713-2.065\r\n\t\tc-0.073-0.426-0.224-0.842-0.418-1.277c-0.065-0.146-0.142-0.28-0.227-0.406c-0.144-0.213,0.111-0.505,0.582-0.71\r\n\t\tc0.292-0.127,0.574-0.262,0.839-0.401c2.26-1.182,4.14-1.191,6.543-0.347c3.958,1.392,8.176,2.034,12.172,3.335\r\n\t\tc2.101,0.684,4.083,1.73,5.698,2.549c0.684,0.347,1.724,0.216,2.324-0.262c1.9-1.515,3.772-2.904,5.37-4.558\r\n\t\tC113.94,38.679,113.234,37.167,110.607,36.512z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null),"\r\n"], null)], null)], null)], null);
clui_om.svg.brittle_icons.seahorse = clui_om.svg.icons.auto_icon.call(null,clui_om.svg.brittle_icons.seahorsicon);
clui_om.svg.brittle_icons.kitty_svg = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xml:space","xml:space",-1976466326),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"viewbox","viewbox",-1545612500),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"xmlns:xlink","xmlns:xlink",-316591054),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),new cljs.core.Keyword(null,"height","height",1025178622)],["0","preserve","150","0 0 150 150","http://www.w3.org/2000/svg","enable-background:new 0 0 150 150;","http://www.w3.org/1999/xlink","Capa_1","0","1.1","0 0 150 150","150"]),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\r\n\t",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M44.647,84.748c-1.147,4.723-0.337,8.298,2.024,11.334c2.361,3.036-0.27,4.79-2.226,5.735s-2.699,1.552-2.834,2.901\r\n\t\ts1.687,6.612,2.564,7.489c0.877,0.877,2.834,2.766,4.115,4.723c1.282,1.956,2.968,0.675,2.968,0.675c1.214,0.945,2.429,0,2.429,0\r\n\t\tc2.159,1.012,3.441-0.405,3.441-0.405c1.079-1.282-1.214-2.631-1.214-2.631c-1.417-2.496-2.496-0.472-2.901-1.012\r\n\t\tc-0.405-0.54-0.742-0.607-2.901-3.103c-2.159-2.496,3.441-1.687,5.397-2.159c1.956-0.472,5.667-2.968,5.667-2.968\r\n\t\tc0,2.968,1.012,2.496,2.496,4.048s2.159,2.564,4.115,3.373c1.956,0.81,2.901,0.675,4.655,1.822s5.397,0.945,5.397,0.945\r\n\t\tc1.619,0.54,3.171,0,3.171,0c3.913,0,2.294-1.349,0.877-3.171c-1.417-1.822-4.25-0.27-5.532-1.147\r\n\t\tc-1.282-0.877-4.453-2.226-6.072-3.171s0-2.631,0-4.183s1.214-2.766,1.214-2.766h6.274c0,0,4.857-0.337,6.139,2.294\r\n\t\tc1.282,2.631,3.238,3.171,3.306,4.588c0.068,1.417-1.147,1.552-1.147,1.552c-2.699-0.742-2.766,3.576-2.766,3.576\r\n\t\tc3.306,4.385,9.715-1.822,9.715-1.822c7.421-0.675,6.881-11.604,6.881-11.604c1.484-1.079,3.846-3.913,5.397-6.477\r\n\t\tc1.552-2.564,5.937-4.52,9.85-2.631c3.913,1.889,4.588-1.282,4.588-1.282c1.349,0.202,1.754-1.552,1.754-1.552\r\n\t\tc1.754-1.956-1.349-2.429-1.417-7.286s-4.115-5.735-3.913-7.151c0.202-1.417,4.318-5.937,3.306-5.532\r\n\t\tc-0.883,0.353-4.593,2.197-5.522,2.66c-0.031-0.122-0.092-0.296-0.213-0.568c-0.54-1.214-6.477,2.631-6.477,2.631\r\n\t\ts-9.411,5.566-11.233,5.971c-1.822,0.405-1.619-0.81-3.845-0.607c-2.226,0.202-3.34,0.405-13.358-3.846\r\n\t\tc-10.019-4.25-28.266,2.585-28.266,2.585S35.98,53.349,48.123,43.331c12.143-10.018-4.098-18.366-8.045,3.491\r\n\t\tS45.794,80.026,44.647,84.748z"], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224),null], null),"\r\n"], null)], null)], null)], null);
clui_om.svg.brittle_icons.kitty_icon = clui_om.svg.icons.auto_icon.call(null,clui_om.svg.brittle_icons.kitty_svg);
