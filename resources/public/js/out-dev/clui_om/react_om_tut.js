// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.react_om_tut');
goog.require('cljs.core');
goog.require('markdown.core');
goog.require('clui_om.utils');
goog.require('om.dom');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('om.core');
clui_om.react_om_tut.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY], null));
clui_om.react_om_tut.APP_ROOT = document.getElementById("app-main-div");
/**
* Get the current set of comments from the server.
* Demonstrates how to tease apart a standard Ring HTTP response.
*/
clui_om.react_om_tut.fetch_comments = (function fetch_comments(cursor,p__20363){
var map__20426 = p__20363;
var map__20426__$1 = ((cljs.core.seq_QMARK_.call(null,map__20426))?cljs.core.apply.call(null,cljs.core.hash_map,map__20426):map__20426);
var url = cljs.core.get.call(null,map__20426__$1,new cljs.core.Keyword(null,"url","url",276297046));
var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,map__20426,map__20426__$1,url){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,map__20426,map__20426__$1,url){
return (function (state_20467){
var state_val_20468 = (state_20467[(1)]);
if((state_val_20468 === (8))){
var inst_20438 = (state_20467[(7)]);
var inst_20436 = (state_20467[(8)]);
var inst_20440 = (state_20467[(9)]);
var inst_20439 = (state_20467[(10)]);
var inst_20437 = (state_20467[(11)]);
var inst_20441 = (state_20467[(12)]);
var inst_20442 = (state_20467[(13)]);
var inst_20463 = (state_20467[(2)]);
var inst_20464 = (function (){var numbered_comments = inst_20442;
var cts = inst_20441;
var msg = inst_20440;
var status = inst_20439;
var body = inst_20438;
var headers = inst_20437;
var all = inst_20436;
var map__20427 = inst_20436;
return ((function (numbered_comments,cts,msg,status,body,headers,all,map__20427,inst_20438,inst_20436,inst_20440,inst_20439,inst_20437,inst_20441,inst_20442,inst_20463,state_val_20468,c__6508__auto__,map__20426,map__20426__$1,url){
return (function (p1__20362_SHARP_){
return cljs.core.assoc.call(null,p1__20362_SHARP_,new cljs.core.Keyword(null,"comments","comments",-293346423),numbered_comments);
});
;})(numbered_comments,cts,msg,status,body,headers,all,map__20427,inst_20438,inst_20436,inst_20440,inst_20439,inst_20437,inst_20441,inst_20442,inst_20463,state_val_20468,c__6508__auto__,map__20426,map__20426__$1,url))
})();
var inst_20465 = om.core.transact_BANG_.call(null,cursor,inst_20464);
var state_20467__$1 = (function (){var statearr_20469 = state_20467;
(statearr_20469[(14)] = inst_20463);

return statearr_20469;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20467__$1,inst_20465);
} else {
if((state_val_20468 === (7))){
var inst_20438 = (state_20467[(7)]);
var inst_20440 = (state_20467[(9)]);
var inst_20439 = (state_20467[(10)]);
var inst_20437 = (state_20467[(11)]);
var inst_20442 = (state_20467[(13)]);
var inst_20452 = [cljs.core.str("Message: "),cljs.core.str(inst_20440)].join('');
var inst_20453 = console.log(inst_20452);
var inst_20454 = [cljs.core.str("Status: "),cljs.core.str(inst_20439)].join('');
var inst_20455 = console.log(inst_20454);
var inst_20456 = [cljs.core.str("Body: "),cljs.core.str(inst_20438)].join('');
var inst_20457 = console.log(inst_20456);
var inst_20458 = [cljs.core.str("Headers: "),cljs.core.str(inst_20437)].join('');
var inst_20459 = console.log(inst_20458);
var inst_20460 = [cljs.core.str("Comments: "),cljs.core.str(inst_20442)].join('');
var inst_20461 = console.log(inst_20460);
var state_20467__$1 = (function (){var statearr_20470 = state_20467;
(statearr_20470[(15)] = inst_20453);

(statearr_20470[(16)] = inst_20459);

(statearr_20470[(17)] = inst_20455);

(statearr_20470[(18)] = inst_20457);

return statearr_20470;
})();
var statearr_20471_20488 = state_20467__$1;
(statearr_20471_20488[(2)] = inst_20461);

(statearr_20471_20488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20468 === (6))){
var inst_20449 = [cljs.core.str("No change in comments.")].join('');
var inst_20450 = console.log(inst_20449);
var state_20467__$1 = state_20467;
var statearr_20472_20489 = state_20467__$1;
(statearr_20472_20489[(2)] = inst_20450);

(statearr_20472_20489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20468 === (5))){
var inst_20438 = (state_20467[(7)]);
var inst_20436 = (state_20467[(8)]);
var inst_20441 = (state_20467[(12)]);
var inst_20442 = (state_20467[(13)]);
var inst_20436__$1 = (state_20467[(2)]);
var inst_20437 = cljs.core.get.call(null,inst_20436__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var inst_20438__$1 = cljs.core.get.call(null,inst_20436__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_20439 = cljs.core.get.call(null,inst_20436__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_20440 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_20438__$1);
var inst_20441__$1 = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(inst_20438__$1);
var inst_20442__$1 = cljs.core.mapv.call(null,clui_om.utils.with_id,inst_20441__$1);
var inst_20443 = cljs.core.deref.call(null,clui_om.react_om_tut.app_state);
var inst_20444 = inst_20443.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423));
var inst_20445 = cljs.core.count.call(null,inst_20444);
var inst_20446 = cljs.core.count.call(null,inst_20442__$1);
var inst_20447 = cljs.core._EQ_.call(null,inst_20445,inst_20446);
var state_20467__$1 = (function (){var statearr_20473 = state_20467;
(statearr_20473[(7)] = inst_20438__$1);

(statearr_20473[(8)] = inst_20436__$1);

(statearr_20473[(9)] = inst_20440);

(statearr_20473[(10)] = inst_20439);

(statearr_20473[(11)] = inst_20437);

(statearr_20473[(12)] = inst_20441__$1);

(statearr_20473[(13)] = inst_20442__$1);

return statearr_20473;
})();
if(inst_20447){
var statearr_20474_20490 = state_20467__$1;
(statearr_20474_20490[(1)] = (6));

} else {
var statearr_20475_20491 = state_20467__$1;
(statearr_20475_20491[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20468 === (4))){
var inst_20430 = (state_20467[(19)]);
var state_20467__$1 = state_20467;
var statearr_20476_20492 = state_20467__$1;
(statearr_20476_20492[(2)] = inst_20430);

(statearr_20476_20492[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20468 === (3))){
var inst_20430 = (state_20467[(19)]);
var inst_20433 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20430);
var state_20467__$1 = state_20467;
var statearr_20477_20493 = state_20467__$1;
(statearr_20477_20493[(2)] = inst_20433);

(statearr_20477_20493[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20468 === (2))){
var inst_20430 = (state_20467[(19)]);
var inst_20430__$1 = (state_20467[(2)]);
var inst_20431 = cljs.core.seq_QMARK_.call(null,inst_20430__$1);
var state_20467__$1 = (function (){var statearr_20478 = state_20467;
(statearr_20478[(19)] = inst_20430__$1);

return statearr_20478;
})();
if(inst_20431){
var statearr_20479_20494 = state_20467__$1;
(statearr_20479_20494[(1)] = (3));

} else {
var statearr_20480_20495 = state_20467__$1;
(statearr_20480_20495[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20468 === (1))){
var inst_20428 = cljs_http.client.get.call(null,url);
var state_20467__$1 = state_20467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20467__$1,(2),inst_20428);
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
});})(c__6508__auto__,map__20426,map__20426__$1,url))
;
return ((function (switch__6493__auto__,c__6508__auto__,map__20426,map__20426__$1,url){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_20484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20484[(0)] = state_machine__6494__auto__);

(statearr_20484[(1)] = (1));

return statearr_20484;
});
var state_machine__6494__auto____1 = (function (state_20467){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_20467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e20485){if((e20485 instanceof Object)){
var ex__6497__auto__ = e20485;
var statearr_20486_20496 = state_20467;
(statearr_20486_20496[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20497 = state_20467;
state_20467 = G__20497;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_20467){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_20467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,map__20426,map__20426__$1,url))
})();
var state__6510__auto__ = (function (){var statearr_20487 = f__6509__auto__.call(null);
(statearr_20487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_20487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,map__20426,map__20426__$1,url))
);

return c__6508__auto__;
});
/**
* Submit a new comment from the client to the server.
*/
clui_om.react_om_tut.save_comment_BANG_ = (function save_comment_BANG_(comment,cursor,p__20498){
var map__20518 = p__20498;
var map__20518__$1 = ((cljs.core.seq_QMARK_.call(null,map__20518))?cljs.core.apply.call(null,cljs.core.hash_map,map__20518):map__20518);
var url = cljs.core.get.call(null,map__20518__$1,new cljs.core.Keyword(null,"url","url",276297046));
om.core.transact_BANG_.call(null,cursor,new cljs.core.Keyword(null,"comments","comments",-293346423),((function (map__20518,map__20518__$1,url){
return (function (original_comments){
console.log([cljs.core.str("Original comments: "),cljs.core.str(original_comments)].join(''));

console.log([cljs.core.str("New comment: "),cljs.core.str(comment)].join(''));

return cljs.core.conj.call(null,original_comments,comment);
});})(map__20518,map__20518__$1,url))
);

var c__6508__auto___20537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___20537,map__20518,map__20518__$1,url){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___20537,map__20518,map__20518__$1,url){
return (function (state_20528){
var state_val_20529 = (state_20528[(1)]);
if((state_val_20529 === (2))){
var inst_20524 = (state_20528[(2)]);
var inst_20525 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_20524);
var inst_20526 = console.log(inst_20525);
var state_20528__$1 = state_20528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20528__$1,inst_20526);
} else {
if((state_val_20529 === (1))){
var inst_20519 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_20520 = [comment];
var inst_20521 = cljs.core.PersistentHashMap.fromArrays(inst_20519,inst_20520);
var inst_20522 = cljs_http.client.post.call(null,url,inst_20521);
var state_20528__$1 = state_20528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20528__$1,(2),inst_20522);
} else {
return null;
}
}
});})(c__6508__auto___20537,map__20518,map__20518__$1,url))
;
return ((function (switch__6493__auto__,c__6508__auto___20537,map__20518,map__20518__$1,url){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_20533 = [null,null,null,null,null,null,null];
(statearr_20533[(0)] = state_machine__6494__auto__);

(statearr_20533[(1)] = (1));

return statearr_20533;
});
var state_machine__6494__auto____1 = (function (state_20528){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_20528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e20534){if((e20534 instanceof Object)){
var ex__6497__auto__ = e20534;
var statearr_20535_20538 = state_20528;
(statearr_20535_20538[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20539 = state_20528;
state_20528 = G__20539;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_20528){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_20528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___20537,map__20518,map__20518__$1,url))
})();
var state__6510__auto__ = (function (){var statearr_20536 = f__6509__auto__.call(null);
(statearr_20536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___20537);

return statearr_20536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___20537,map__20518,map__20518__$1,url))
);


return console.log([cljs.core.str("Optimistic comments: "),cljs.core.str(new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clui_om.react_om_tut.app_state)))].join(''));
});
/**
* Event handler for user clicks on the comment form button.
*/
clui_om.react_om_tut.handle_submit = (function handle_submit(e,cursor,owner,opts){
var vec__20542 = clui_om.utils.value_from_node.call(null,owner,"author");
var author = cljs.core.nth.call(null,vec__20542,(0),null);
var author_node = cljs.core.nth.call(null,vec__20542,(1),null);
var vec__20543 = clui_om.utils.value_from_node.call(null,owner,"text");
var text = cljs.core.nth.call(null,vec__20543,(0),null);
var text_node = cljs.core.nth.call(null,vec__20543,(1),null);
if(cljs.core.truth_((function (){var and__3616__auto__ = author;
if(cljs.core.truth_(and__3616__auto__)){
return text;
} else {
return and__3616__auto__;
}
})())){
clui_om.react_om_tut.save_comment_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),author,new cljs.core.Keyword(null,"text","text",-1790561697),text], null),cursor,opts);

clui_om.utils.clear_nodes_BANG_.call(null,author_node,text_node);
} else {
}

return false;
});
clui_om.react_om_tut.comment = (function comment(p__20544,owner,opts){
var map__20549 = p__20544;
var map__20549__$1 = ((cljs.core.seq_QMARK_.call(null,map__20549))?cljs.core.apply.call(null,cljs.core.hash_map,map__20549):map__20549);
var cursor = map__20549__$1;
var text = cljs.core.get.call(null,map__20549__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var author = cljs.core.get.call(null,map__20549__$1,new cljs.core.Keyword(null,"author","author",2111686192));
console.log([cljs.core.str("generating single comment from "),cljs.core.str(author)].join(''));

if(typeof clui_om.react_om_tut.t20550 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.react_om_tut.t20550 = (function (author,text,cursor,map__20549,opts,owner,p__20544,comment,meta20551){
this.author = author;
this.text = text;
this.cursor = cursor;
this.map__20549 = map__20549;
this.opts = opts;
this.owner = owner;
this.p__20544 = p__20544;
this.comment = comment;
this.meta20551 = meta20551;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.react_om_tut.t20550.prototype.om$core$IRender$ = true;

clui_om.react_om_tut.t20550.prototype.om$core$IRender$render$arity$1 = ((function (map__20549,map__20549__$1,cursor,text,author){
return (function (this__5270__auto__){
var self__ = this;
var this__5270__auto____$1 = this;
var raw_markup = markdown.core.mdToHtml.call(null,(function (){var or__3628__auto__ = self__.text;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return "blank comment!";
}
})());
var color = "red";
return React.DOM.div({"className": "comment"},React.DOM.h3({"className": "commentAuthor"},self__.author),React.DOM.span({"dangerouslySetInnerHTML": {"__html": raw_markup}}));
});})(map__20549,map__20549__$1,cursor,text,author))
;

clui_om.react_om_tut.t20550.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20549,map__20549__$1,cursor,text,author){
return (function (_20552){
var self__ = this;
var _20552__$1 = this;
return self__.meta20551;
});})(map__20549,map__20549__$1,cursor,text,author))
;

clui_om.react_om_tut.t20550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20549,map__20549__$1,cursor,text,author){
return (function (_20552,meta20551__$1){
var self__ = this;
var _20552__$1 = this;
return (new clui_om.react_om_tut.t20550(self__.author,self__.text,self__.cursor,self__.map__20549,self__.opts,self__.owner,self__.p__20544,self__.comment,meta20551__$1));
});})(map__20549,map__20549__$1,cursor,text,author))
;

clui_om.react_om_tut.t20550.cljs$lang$type = true;

clui_om.react_om_tut.t20550.cljs$lang$ctorStr = "clui-om.react-om-tut/t20550";

clui_om.react_om_tut.t20550.cljs$lang$ctorPrWriter = ((function (map__20549,map__20549__$1,cursor,text,author){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.react-om-tut/t20550");
});})(map__20549,map__20549__$1,cursor,text,author))
;

clui_om.react_om_tut.__GT_t20550 = ((function (map__20549,map__20549__$1,cursor,text,author){
return (function __GT_t20550(author__$1,text__$1,cursor__$1,map__20549__$2,opts__$1,owner__$1,p__20544__$1,comment__$1,meta20551){
return (new clui_om.react_om_tut.t20550(author__$1,text__$1,cursor__$1,map__20549__$2,opts__$1,owner__$1,p__20544__$1,comment__$1,meta20551));
});})(map__20549,map__20549__$1,cursor,text,author))
;

}

return (new clui_om.react_om_tut.t20550(author,text,cursor,map__20549__$1,opts,owner,p__20544,comment,null));
});
clui_om.react_om_tut.comment_list = (function comment_list(cursor,owner,opts){
var cts = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(cursor);
console.log([cljs.core.str("generating comments list from cursor: "),cljs.core.str(cursor)].join(''));

console.log([cljs.core.str("comments are: "),cljs.core.str(cts)].join(''));

if(typeof clui_om.react_om_tut.t20556 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.react_om_tut.t20556 = (function (cts,opts,owner,cursor,comment_list,meta20557){
this.cts = cts;
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.comment_list = comment_list;
this.meta20557 = meta20557;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.react_om_tut.t20556.prototype.om$core$IRender$ = true;

clui_om.react_om_tut.t20556.prototype.om$core$IRender$render$arity$1 = ((function (cts){
return (function (this__5270__auto__){
var self__ = this;
var this__5270__auto____$1 = this;
return React.DOM.div({"className": "commentList"},cljs.core.into_array.call(null,om.core.build_all.call(null,clui_om.react_om_tut.comment,self__.cts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.identity,new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null))));
});})(cts))
;

clui_om.react_om_tut.t20556.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cts){
return (function (_20558){
var self__ = this;
var _20558__$1 = this;
return self__.meta20557;
});})(cts))
;

clui_om.react_om_tut.t20556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cts){
return (function (_20558,meta20557__$1){
var self__ = this;
var _20558__$1 = this;
return (new clui_om.react_om_tut.t20556(self__.cts,self__.opts,self__.owner,self__.cursor,self__.comment_list,meta20557__$1));
});})(cts))
;

clui_om.react_om_tut.t20556.cljs$lang$type = true;

clui_om.react_om_tut.t20556.cljs$lang$ctorStr = "clui-om.react-om-tut/t20556";

clui_om.react_om_tut.t20556.cljs$lang$ctorPrWriter = ((function (cts){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.react-om-tut/t20556");
});})(cts))
;

clui_om.react_om_tut.__GT_t20556 = ((function (cts){
return (function __GT_t20556(cts__$1,opts__$1,owner__$1,cursor__$1,comment_list__$1,meta20557){
return (new clui_om.react_om_tut.t20556(cts__$1,opts__$1,owner__$1,cursor__$1,comment_list__$1,meta20557));
});})(cts))
;

}

return (new clui_om.react_om_tut.t20556(cts,opts,owner,cursor,comment_list,null));
});
clui_om.react_om_tut.comment_form = (function comment_form(app,owner,opts){
if(typeof clui_om.react_om_tut.t20563 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.react_om_tut.t20563 = (function (opts,owner,app,comment_form,meta20564){
this.opts = opts;
this.owner = owner;
this.app = app;
this.comment_form = comment_form;
this.meta20564 = meta20564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.react_om_tut.t20563.prototype.om$core$IRender$ = true;

clui_om.react_om_tut.t20563.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.form({"onSubmit": ((function (this$__$1){
return (function (p1__20559_SHARP_){
return clui_om.react_om_tut.handle_submit.call(null,p1__20559_SHARP_,self__.app,self__.owner,self__.opts);
});})(this$__$1))
, "className": "commentForm"},React.DOM.h3(null,"Add Comment"),om.dom.input.call(null,{"ref": "author", "placeholder": "Your Name", "type": "text"}),om.dom.input.call(null,{"ref": "text", "placeholder": "Say something...", "type": "text"}),om.dom.input.call(null,{"value": "Post", "type": "submit"}));
});

clui_om.react_om_tut.t20563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20565){
var self__ = this;
var _20565__$1 = this;
return self__.meta20564;
});

clui_om.react_om_tut.t20563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20565,meta20564__$1){
var self__ = this;
var _20565__$1 = this;
return (new clui_om.react_om_tut.t20563(self__.opts,self__.owner,self__.app,self__.comment_form,meta20564__$1));
});

clui_om.react_om_tut.t20563.cljs$lang$type = true;

clui_om.react_om_tut.t20563.cljs$lang$ctorStr = "clui-om.react-om-tut/t20563";

clui_om.react_om_tut.t20563.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.react-om-tut/t20563");
});

clui_om.react_om_tut.__GT_t20563 = (function __GT_t20563(opts__$1,owner__$1,app__$1,comment_form__$1,meta20564){
return (new clui_om.react_om_tut.t20563(opts__$1,owner__$1,app__$1,comment_form__$1,meta20564));
});

}

return (new clui_om.react_om_tut.t20563(opts,owner,app,comment_form,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),58,new cljs.core.Keyword(null,"end-line","end-line",1837326455),114,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),106,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/react_om_tut.cljs"], null)));
});
clui_om.react_om_tut.comment_box = (function comment_box(cursor,owner,p__20566){
var map__20601 = p__20566;
var map__20601__$1 = ((cljs.core.seq_QMARK_.call(null,map__20601))?cljs.core.apply.call(null,cljs.core.hash_map,map__20601):map__20601);
var opts = map__20601__$1;
var poll_interval = cljs.core.get.call(null,map__20601__$1,new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570));
if(typeof clui_om.react_om_tut.t20602 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.react_om_tut.t20602 = (function (poll_interval,opts,map__20601,p__20566,owner,cursor,comment_box,meta20603){
this.poll_interval = poll_interval;
this.opts = opts;
this.map__20601 = map__20601;
this.p__20566 = p__20566;
this.owner = owner;
this.cursor = cursor;
this.comment_box = comment_box;
this.meta20603 = meta20603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.react_om_tut.t20602.prototype.om$core$IRender$ = true;

clui_om.react_om_tut.t20602.prototype.om$core$IRender$render$arity$1 = ((function (map__20601,map__20601__$1,opts,poll_interval){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"className": "commentBox"},React.DOM.h2(null,"Comments"),om.core.build.call(null,clui_om.react_om_tut.comment_list,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null)),React.DOM.hr(null),om.core.build.call(null,clui_om.react_om_tut.comment_form,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null)));
});})(map__20601,map__20601__$1,opts,poll_interval))
;

clui_om.react_om_tut.t20602.prototype.om$core$IWillMount$ = true;

clui_om.react_om_tut.t20602.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__20601,map__20601__$1,opts,poll_interval){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,this$__$1,map__20601,map__20601__$1,opts,poll_interval){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,this$__$1,map__20601,map__20601__$1,opts,poll_interval){
return (function (state_20618){
var state_val_20619 = (state_20618[(1)]);
if((state_val_20619 === (7))){
var inst_20610 = (state_20618[(2)]);
var state_20618__$1 = (function (){var statearr_20620 = state_20618;
(statearr_20620[(7)] = inst_20610);

return statearr_20620;
})();
var statearr_20621_20635 = state_20618__$1;
(statearr_20621_20635[(2)] = null);

(statearr_20621_20635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20619 === (6))){
var inst_20614 = (state_20618[(2)]);
var state_20618__$1 = state_20618;
var statearr_20622_20636 = state_20618__$1;
(statearr_20622_20636[(2)] = inst_20614);

(statearr_20622_20636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20619 === (5))){
var state_20618__$1 = state_20618;
var statearr_20623_20637 = state_20618__$1;
(statearr_20623_20637[(2)] = null);

(statearr_20623_20637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20619 === (4))){
var inst_20607 = clui_om.react_om_tut.fetch_comments.call(null,self__.cursor,self__.opts);
var inst_20608 = cljs.core.async.timeout.call(null,self__.poll_interval);
var state_20618__$1 = (function (){var statearr_20624 = state_20618;
(statearr_20624[(8)] = inst_20607);

return statearr_20624;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20618__$1,(7),inst_20608);
} else {
if((state_val_20619 === (3))){
var inst_20616 = (state_20618[(2)]);
var state_20618__$1 = state_20618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20618__$1,inst_20616);
} else {
if((state_val_20619 === (2))){
var state_20618__$1 = state_20618;
var statearr_20625_20638 = state_20618__$1;
(statearr_20625_20638[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20619 === (1))){
var state_20618__$1 = state_20618;
var statearr_20627_20639 = state_20618__$1;
(statearr_20627_20639[(2)] = null);

(statearr_20627_20639[(1)] = (2));


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
});})(c__6508__auto__,this$__$1,map__20601,map__20601__$1,opts,poll_interval))
;
return ((function (switch__6493__auto__,c__6508__auto__,this$__$1,map__20601,map__20601__$1,opts,poll_interval){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_20631 = [null,null,null,null,null,null,null,null,null];
(statearr_20631[(0)] = state_machine__6494__auto__);

(statearr_20631[(1)] = (1));

return statearr_20631;
});
var state_machine__6494__auto____1 = (function (state_20618){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_20618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e20632){if((e20632 instanceof Object)){
var ex__6497__auto__ = e20632;
var statearr_20633_20640 = state_20618;
(statearr_20633_20640[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20641 = state_20618;
state_20618 = G__20641;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_20618){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_20618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,this$__$1,map__20601,map__20601__$1,opts,poll_interval))
})();
var state__6510__auto__ = (function (){var statearr_20634 = f__6509__auto__.call(null);
(statearr_20634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_20634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,this$__$1,map__20601,map__20601__$1,opts,poll_interval))
);

return c__6508__auto__;
});})(map__20601,map__20601__$1,opts,poll_interval))
;

clui_om.react_om_tut.t20602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20601,map__20601__$1,opts,poll_interval){
return (function (_20604){
var self__ = this;
var _20604__$1 = this;
return self__.meta20603;
});})(map__20601,map__20601__$1,opts,poll_interval))
;

clui_om.react_om_tut.t20602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20601,map__20601__$1,opts,poll_interval){
return (function (_20604,meta20603__$1){
var self__ = this;
var _20604__$1 = this;
return (new clui_om.react_om_tut.t20602(self__.poll_interval,self__.opts,self__.map__20601,self__.p__20566,self__.owner,self__.cursor,self__.comment_box,meta20603__$1));
});})(map__20601,map__20601__$1,opts,poll_interval))
;

clui_om.react_om_tut.t20602.cljs$lang$type = true;

clui_om.react_om_tut.t20602.cljs$lang$ctorStr = "clui-om.react-om-tut/t20602";

clui_om.react_om_tut.t20602.cljs$lang$ctorPrWriter = ((function (map__20601,map__20601__$1,opts,poll_interval){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.react-om-tut/t20602");
});})(map__20601,map__20601__$1,opts,poll_interval))
;

clui_om.react_om_tut.__GT_t20602 = ((function (map__20601,map__20601__$1,opts,poll_interval){
return (function __GT_t20602(poll_interval__$1,opts__$1,map__20601__$2,p__20566__$1,owner__$1,cursor__$1,comment_box__$1,meta20603){
return (new clui_om.react_om_tut.t20602(poll_interval__$1,opts__$1,map__20601__$2,p__20566__$1,owner__$1,cursor__$1,comment_box__$1,meta20603));
});})(map__20601,map__20601__$1,opts,poll_interval))
;

}

return (new clui_om.react_om_tut.t20602(poll_interval,opts,map__20601__$1,p__20566,owner,cursor,comment_box,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),54,new cljs.core.Keyword(null,"end-line","end-line",1837326455),136,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),123,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/react_om_tut.cljs"], null)));
});
clui_om.react_om_tut.tutorial_app = (function tutorial_app(cursor,owner){
if(typeof clui_om.react_om_tut.t20645 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.react_om_tut.t20645 = (function (owner,cursor,tutorial_app,meta20646){
this.owner = owner;
this.cursor = cursor;
this.tutorial_app = tutorial_app;
this.meta20646 = meta20646;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.react_om_tut.t20645.prototype.om$core$IRender$ = true;

clui_om.react_om_tut.t20645.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.core.build.call(null,clui_om.react_om_tut.comment_box,self__.cursor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570),(10000),new cljs.core.Keyword(null,"url","url",276297046),"/react-om-tut/comments"], null)], null)));
});

clui_om.react_om_tut.t20645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20647){
var self__ = this;
var _20647__$1 = this;
return self__.meta20646;
});

clui_om.react_om_tut.t20645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20647,meta20646__$1){
var self__ = this;
var _20647__$1 = this;
return (new clui_om.react_om_tut.t20645(self__.owner,self__.cursor,self__.tutorial_app,meta20646__$1));
});

clui_om.react_om_tut.t20645.cljs$lang$type = true;

clui_om.react_om_tut.t20645.cljs$lang$ctorStr = "clui-om.react-om-tut/t20645";

clui_om.react_om_tut.t20645.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.react-om-tut/t20645");
});

clui_om.react_om_tut.__GT_t20645 = (function __GT_t20645(owner__$1,cursor__$1,tutorial_app__$1,meta20646){
return (new clui_om.react_om_tut.t20645(owner__$1,cursor__$1,tutorial_app__$1,meta20646));
});

}

return (new clui_om.react_om_tut.t20645(owner,cursor,tutorial_app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),69,new cljs.core.Keyword(null,"end-line","end-line",1837326455),147,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/react_om_tut.cljs"], null)));
});
/**
* Initialize the react-om-tut page
*/
clui_om.react_om_tut.main = (function main(){
var uid = clui_om.utils.guid.call(null);
var basemsg = "main():: initializing react-om-tut.cljs with initial guid:  <";
var msg = cljs.core.apply.call(null,cljs.core.str,basemsg,uid,">");
console.log(msg);

return om.core.root.call(null,clui_om.react_om_tut.tutorial_app,clui_om.react_om_tut.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),clui_om.react_om_tut.APP_ROOT], null));
});
goog.exportSymbol('clui_om.react_om_tut.main', clui_om.react_om_tut.main);
