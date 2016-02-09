// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.page_alpha');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clui_om.widgets.palettes');
goog.require('clui_om.widgets.tiles');
goog.require('cljs.core.async');
clui_om.page_alpha.get_tiles = (function get_tiles(palette){
var colors = cljs.core.vals.call(null,palette);
return cljs.core.vec.call(null,cljs.core.take.call(null,(360),cljs.core.repeatedly.call(null,((function (colors){
return (function (){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"color","color",1011675173)],[clui_om.widgets.tiles.DEFAULTS,cljs.core.nth.call(null,colors,cljs.core.rand_int.call(null,cljs.core.count.call(null,colors)))]);
});})(colors))
)));
});
clui_om.page_alpha.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"most-recent-activity","most-recent-activity",355781334),[cljs.core.str("Using palette "),cljs.core.str(clui_om.widgets.palettes.DEFAULT_PALETTE)].join(''),new cljs.core.Keyword(null,"tiles","tiles",178505240),clui_om.page_alpha.get_tiles.call(null,clui_om.widgets.palettes.DEFAULT_PALETTE),new cljs.core.Keyword(null,"palette","palette",-456203511),clui_om.widgets.palettes.DEFAULT_PALETTE,new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570),(500)], null));
clui_om.page_alpha.ALPHA_ROOT = document.getElementById("alpha-div");
clui_om.page_alpha.BETA_ROOT = document.getElementById("beta-div");
clui_om.page_alpha.report = (function report(e,cursor){
return console.log(new cljs.core.Keyword(null,"most-recent-activity","most-recent-activity",355781334).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cursor)));
});
clui_om.page_alpha.color_choice = (function color_choice(palette,cursor){
var msg = [cljs.core.str("Using palette: "),cljs.core.str(palette)].join('');
om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"palette","palette",-456203511)], null),palette);

om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"most-recent-activity","most-recent-activity",355781334)], null),msg);

return om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240)], null),clui_om.page_alpha.get_tiles.call(null,palette));
});
clui_om.page_alpha.shuffle_colors = (function shuffle_colors(cursor){
return om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240)], null),clui_om.page_alpha.get_tiles.call(null,new cljs.core.Keyword(null,"palette","palette",-456203511).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cursor))));
});
clui_om.page_alpha.top_level_widget = (function top_level_widget(app,owner,opts){
var echo = (function (p1__17427_SHARP_){
return clui_om.page_alpha.report.call(null,p1__17427_SHARP_,app);
});
if(typeof clui_om.page_alpha.t17462 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_alpha.t17462 = (function (echo,opts,owner,app,top_level_widget,meta17463){
this.echo = echo;
this.opts = opts;
this.owner = owner;
this.app = app;
this.top_level_widget = top_level_widget;
this.meta17463 = meta17463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_alpha.t17462.prototype.om$core$IRender$ = true;

clui_om.page_alpha.t17462.prototype.om$core$IRender$render$arity$1 = ((function (echo){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "outerbox"},React.DOM.p({"className": "alert alert-info"},new cljs.core.Keyword(null,"most-recent-activity","most-recent-activity",355781334).cljs$core$IFn$_invoke$arity$1(self__.app)),om.core.build.call(null,clui_om.widgets.palettes.palette_chooser,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback","callback",-705136228),((function (___$1,echo){
return (function (p1__17428_SHARP_){
return clui_om.page_alpha.color_choice.call(null,p1__17428_SHARP_,self__.app);
});})(___$1,echo))
], null)], null)),cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,clui_om.widgets.tiles.color_tile,new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(self__.app))));
});})(echo))
;

clui_om.page_alpha.t17462.prototype.om$core$IWillMount$ = true;

clui_om.page_alpha.t17462.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (echo){
return (function (_){
var self__ = this;
var ___$1 = this;
var poll_interval = cljs.core.deref.call(null,clui_om.page_alpha.app_state).call(null,new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570));
var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,poll_interval,___$1,echo){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,poll_interval,___$1,echo){
return (function (state_17478){
var state_val_17479 = (state_17478[(1)]);
if((state_val_17479 === (7))){
var inst_17470 = (state_17478[(2)]);
var state_17478__$1 = (function (){var statearr_17480 = state_17478;
(statearr_17480[(7)] = inst_17470);

return statearr_17480;
})();
var statearr_17481_17495 = state_17478__$1;
(statearr_17481_17495[(2)] = null);

(statearr_17481_17495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (6))){
var inst_17474 = (state_17478[(2)]);
var state_17478__$1 = state_17478;
var statearr_17482_17496 = state_17478__$1;
(statearr_17482_17496[(2)] = inst_17474);

(statearr_17482_17496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (5))){
var state_17478__$1 = state_17478;
var statearr_17483_17497 = state_17478__$1;
(statearr_17483_17497[(2)] = null);

(statearr_17483_17497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (4))){
var inst_17467 = clui_om.page_alpha.shuffle_colors.call(null,self__.app);
var inst_17468 = cljs.core.async.timeout.call(null,poll_interval);
var state_17478__$1 = (function (){var statearr_17484 = state_17478;
(statearr_17484[(8)] = inst_17467);

return statearr_17484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17478__$1,(7),inst_17468);
} else {
if((state_val_17479 === (3))){
var inst_17476 = (state_17478[(2)]);
var state_17478__$1 = state_17478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17478__$1,inst_17476);
} else {
if((state_val_17479 === (2))){
var state_17478__$1 = state_17478;
var statearr_17485_17498 = state_17478__$1;
(statearr_17485_17498[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17479 === (1))){
var state_17478__$1 = state_17478;
var statearr_17487_17499 = state_17478__$1;
(statearr_17487_17499[(2)] = null);

(statearr_17487_17499[(1)] = (2));


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
});})(c__6508__auto__,poll_interval,___$1,echo))
;
return ((function (switch__6493__auto__,c__6508__auto__,poll_interval,___$1,echo){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_17491 = [null,null,null,null,null,null,null,null,null];
(statearr_17491[(0)] = state_machine__6494__auto__);

(statearr_17491[(1)] = (1));

return statearr_17491;
});
var state_machine__6494__auto____1 = (function (state_17478){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_17478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e17492){if((e17492 instanceof Object)){
var ex__6497__auto__ = e17492;
var statearr_17493_17500 = state_17478;
(statearr_17493_17500[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17501 = state_17478;
state_17478 = G__17501;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_17478){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_17478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,poll_interval,___$1,echo))
})();
var state__6510__auto__ = (function (){var statearr_17494 = f__6509__auto__.call(null);
(statearr_17494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_17494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,poll_interval,___$1,echo))
);

return c__6508__auto__;
});})(echo))
;

clui_om.page_alpha.t17462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (echo){
return (function (_17464){
var self__ = this;
var _17464__$1 = this;
return self__.meta17463;
});})(echo))
;

clui_om.page_alpha.t17462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (echo){
return (function (_17464,meta17463__$1){
var self__ = this;
var _17464__$1 = this;
return (new clui_om.page_alpha.t17462(self__.echo,self__.opts,self__.owner,self__.app,self__.top_level_widget,meta17463__$1));
});})(echo))
;

clui_om.page_alpha.t17462.cljs$lang$type = true;

clui_om.page_alpha.t17462.cljs$lang$ctorStr = "clui-om.page-alpha/t17462";

clui_om.page_alpha.t17462.cljs$lang$ctorPrWriter = ((function (echo){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-alpha/t17462");
});})(echo))
;

clui_om.page_alpha.__GT_t17462 = ((function (echo){
return (function __GT_t17462(echo__$1,opts__$1,owner__$1,app__$1,top_level_widget__$1,meta17463){
return (new clui_om.page_alpha.t17462(echo__$1,opts__$1,owner__$1,app__$1,top_level_widget__$1,meta17463));
});})(echo))
;

}

return (new clui_om.page_alpha.t17462(echo,opts,owner,app,top_level_widget,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),70,new cljs.core.Keyword(null,"end-line","end-line",1837326455),57,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),43,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_alpha.cljs"], null)));
});
/**
* Initialize the bootstrap demo page
*/
clui_om.page_alpha.main = (function main(){
var msg = "main():: initializing page-alpha.cljs";
console.log(msg);

return om.core.root.call(null,clui_om.page_alpha.top_level_widget,clui_om.page_alpha.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),clui_om.page_alpha.ALPHA_ROOT], null));
});
goog.exportSymbol('clui_om.page_alpha.main', clui_om.page_alpha.main);
