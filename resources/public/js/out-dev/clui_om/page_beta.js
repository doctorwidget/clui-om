// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.page_beta');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clui_om.misc.cards');
goog.require('clojure.browser.repl');
goog.require('cljs.core.async');
clui_om.page_beta.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deck","deck",1145325705),clui_om.misc.cards.shuffled_deck.call(null),new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.PersistentVector.EMPTY], null));
clui_om.page_beta.ALPHA_ROOT = document.getElementById("alpha-div");
clui_om.page_beta.draw_BANG_ = (function draw_BANG_(app){
var hand = cljs.core.deref.call(null,app).call(null,new cljs.core.Keyword(null,"hand","hand",791601933));
var deck = cljs.core.deref.call(null,app).call(null,new cljs.core.Keyword(null,"deck","deck",1145325705));
var temp__4124__auto__ = cljs.core.peek.call(null,deck);
if(cljs.core.truth_(temp__4124__auto__)){
var top_card = temp__4124__auto__;
om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"hand","hand",791601933),((function (top_card,temp__4124__auto__,hand,deck){
return (function (p1__17530_SHARP_){
return cljs.core.conj.call(null,p1__17530_SHARP_,top_card);
});})(top_card,temp__4124__auto__,hand,deck))
);

console.log([cljs.core.str("Hand is now: "),cljs.core.str(cljs.core.deref.call(null,app).call(null,new cljs.core.Keyword(null,"hand","hand",791601933)))].join(''));

om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"deck","deck",1145325705),cljs.core.pop.call(null,deck));

return console.log([cljs.core.str("Deck count: "),cljs.core.str(cljs.core.count.call(null,cljs.core.deref.call(null,app).call(null,new cljs.core.Keyword(null,"deck","deck",1145325705))))].join(''));
} else {
return console.log("You cannot draw from an empty deck... duh.");
}
});
clui_om.page_beta.shuffle_BANG_ = (function shuffle_BANG_(app){
om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.PersistentVector.EMPTY);

return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"deck","deck",1145325705),clui_om.misc.cards.shuffled_deck.call(null));
});
clui_om.page_beta.main_widget = (function main_widget(app,owner,opts){
if(typeof clui_om.page_beta.t17580 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_beta.t17580 = (function (opts,owner,app,main_widget,meta17581){
this.opts = opts;
this.owner = owner;
this.app = app;
this.main_widget = main_widget;
this.meta17581 = meta17581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_beta.t17580.prototype.om$core$IRenderState$ = true;

clui_om.page_beta.t17580.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__17583){
var self__ = this;
var map__17584 = p__17583;
var map__17584__$1 = ((cljs.core.seq_QMARK_.call(null,map__17584))?cljs.core.apply.call(null,cljs.core.hash_map,map__17584):map__17584);
var shuffle = cljs.core.get.call(null,map__17584__$1,new cljs.core.Keyword(null,"shuffle","shuffle",1261412160));
var draw = cljs.core.get.call(null,map__17584__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
var ___$1 = this;
var top_card = cljs.core.peek.call(null,new cljs.core.Keyword(null,"deck","deck",1145325705).cljs$core$IFn$_invoke$arity$1(self__.app));
return React.DOM.div({"className": "mainControls"},om.core.build.call(null,clui_om.misc.cards.deck_display,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"draw","draw",1358331674),draw,new cljs.core.Keyword(null,"shuffle","shuffle",1261412160),shuffle], null)], null)),React.DOM.hr(null),(cljs.core.truth_(top_card)?React.DOM.div({"className": "topCard"},React.DOM.span(null,"Sneak Peek At Top Card: "),om.core.build.call(null,clui_om.misc.cards.card_display_txt,top_card)):null),React.DOM.hr(null),om.core.build.call(null,clui_om.misc.cards.hand_display,self__.app));
});

clui_om.page_beta.t17580.prototype.om$core$IWillMount$ = true;

clui_om.page_beta.t17580.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var draw = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"draw","draw",1358331674));
var shuffle = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"shuffle","shuffle",1261412160));
var c__6508__auto___17629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___17629,draw,shuffle,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___17629,draw,shuffle,___$1){
return (function (state_17595){
var state_val_17596 = (state_17595[(1)]);
if((state_val_17596 === (4))){
var inst_17587 = (state_17595[(2)]);
var inst_17588 = [cljs.core.str("(main-widget):: Draw request: "),cljs.core.str(inst_17587)].join('');
var inst_17589 = console.log(inst_17588);
var inst_17590 = clui_om.page_beta.draw_BANG_.call(null,self__.app);
var state_17595__$1 = (function (){var statearr_17597 = state_17595;
(statearr_17597[(7)] = inst_17589);

(statearr_17597[(8)] = inst_17590);

return statearr_17597;
})();
var statearr_17598_17630 = state_17595__$1;
(statearr_17598_17630[(2)] = null);

(statearr_17598_17630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17596 === (3))){
var inst_17593 = (state_17595[(2)]);
var state_17595__$1 = state_17595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17595__$1,inst_17593);
} else {
if((state_val_17596 === (2))){
var state_17595__$1 = state_17595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17595__$1,(4),draw);
} else {
if((state_val_17596 === (1))){
var state_17595__$1 = state_17595;
var statearr_17599_17631 = state_17595__$1;
(statearr_17599_17631[(2)] = null);

(statearr_17599_17631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6508__auto___17629,draw,shuffle,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto___17629,draw,shuffle,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_17603 = [null,null,null,null,null,null,null,null,null];
(statearr_17603[(0)] = state_machine__6494__auto__);

(statearr_17603[(1)] = (1));

return statearr_17603;
});
var state_machine__6494__auto____1 = (function (state_17595){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_17595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e17604){if((e17604 instanceof Object)){
var ex__6497__auto__ = e17604;
var statearr_17605_17632 = state_17595;
(statearr_17605_17632[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17633 = state_17595;
state_17595 = G__17633;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_17595){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_17595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___17629,draw,shuffle,___$1))
})();
var state__6510__auto__ = (function (){var statearr_17606 = f__6509__auto__.call(null);
(statearr_17606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___17629);

return statearr_17606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___17629,draw,shuffle,___$1))
);


var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,draw,shuffle,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,draw,shuffle,___$1){
return (function (state_17617){
var state_val_17618 = (state_17617[(1)]);
if((state_val_17618 === (4))){
var inst_17609 = (state_17617[(2)]);
var inst_17610 = [cljs.core.str("(main-widget):: Shuffle request: "),cljs.core.str(inst_17609)].join('');
var inst_17611 = console.log(inst_17610);
var inst_17612 = clui_om.page_beta.shuffle_BANG_.call(null,self__.app);
var state_17617__$1 = (function (){var statearr_17619 = state_17617;
(statearr_17619[(7)] = inst_17612);

(statearr_17619[(8)] = inst_17611);

return statearr_17619;
})();
var statearr_17620_17634 = state_17617__$1;
(statearr_17620_17634[(2)] = null);

(statearr_17620_17634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17618 === (3))){
var inst_17615 = (state_17617[(2)]);
var state_17617__$1 = state_17617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17617__$1,inst_17615);
} else {
if((state_val_17618 === (2))){
var state_17617__$1 = state_17617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17617__$1,(4),shuffle);
} else {
if((state_val_17618 === (1))){
var state_17617__$1 = state_17617;
var statearr_17621_17635 = state_17617__$1;
(statearr_17621_17635[(2)] = null);

(statearr_17621_17635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6508__auto__,draw,shuffle,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto__,draw,shuffle,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_17625 = [null,null,null,null,null,null,null,null,null];
(statearr_17625[(0)] = state_machine__6494__auto__);

(statearr_17625[(1)] = (1));

return statearr_17625;
});
var state_machine__6494__auto____1 = (function (state_17617){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_17617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e17626){if((e17626 instanceof Object)){
var ex__6497__auto__ = e17626;
var statearr_17627_17636 = state_17617;
(statearr_17627_17636[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17637 = state_17617;
state_17617 = G__17637;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_17617){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_17617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,draw,shuffle,___$1))
})();
var state__6510__auto__ = (function (){var statearr_17628 = f__6509__auto__.call(null);
(statearr_17628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_17628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,draw,shuffle,___$1))
);

return c__6508__auto__;
});

clui_om.page_beta.t17580.prototype.om$core$IInitState$ = true;

clui_om.page_beta.t17580.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"draw","draw",1358331674),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"shuffle","shuffle",1261412160),cljs.core.async.chan.call(null)], null);
});

clui_om.page_beta.t17580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17582){
var self__ = this;
var _17582__$1 = this;
return self__.meta17581;
});

clui_om.page_beta.t17580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17582,meta17581__$1){
var self__ = this;
var _17582__$1 = this;
return (new clui_om.page_beta.t17580(self__.opts,self__.owner,self__.app,self__.main_widget,meta17581__$1));
});

clui_om.page_beta.t17580.cljs$lang$type = true;

clui_om.page_beta.t17580.cljs$lang$ctorStr = "clui-om.page-beta/t17580";

clui_om.page_beta.t17580.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-beta/t17580");
});

clui_om.page_beta.__GT_t17580 = (function __GT_t17580(opts__$1,owner__$1,app__$1,main_widget__$1,meta17581){
return (new clui_om.page_beta.t17580(opts__$1,owner__$1,app__$1,main_widget__$1,meta17581));
});

}

return (new clui_om.page_beta.t17580(opts,owner,app,main_widget,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),51,new cljs.core.Keyword(null,"end-line","end-line",1837326455),71,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),36,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_beta.cljs"], null)));
});
/**
* Initialize page beta
*/
clui_om.page_beta.main = (function main(){
var msg = "main():: initializing page-beta.cljs";
console.log(msg);

return om.core.root.call(null,clui_om.page_beta.main_widget,clui_om.page_beta.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),clui_om.page_beta.ALPHA_ROOT], null));
});
goog.exportSymbol('clui_om.page_beta.main', clui_om.page_beta.main);
