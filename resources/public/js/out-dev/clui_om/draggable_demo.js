// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.draggable_demo');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('draggable.core');
goog.require('cljs.core.async');
clui_om.draggable_demo.mouse_move_ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
clui_om.draggable_demo.mouse_down_ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
clui_om.draggable_demo.mouse_up_ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
clui_om.draggable_demo.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rows","rows",850049680),(20),new cljs.core.Keyword(null,"columns","columns",1998437288),(20),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),(250)], null),new cljs.core.Keyword(null,"snap-threshold","snap-threshold",-846190465),(25),new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.take.call(null,(40),cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green","blue","purple","red","yellow","black"], null))),new cljs.core.Keyword(null,"block-sizes","block-sizes",1354908873),cljs.core.repeatedly.call(null,(40),(function (){
return ((25) + cljs.core.rand_int.call(null,(75)));
})),new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),clui_om.draggable_demo.mouse_move_ch,new cljs.core.Keyword(null,"mult","mult",1466794774),cljs.core.async.mult.call(null,clui_om.draggable_demo.mouse_move_ch)], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),clui_om.draggable_demo.mouse_up_ch,new cljs.core.Keyword(null,"mult","mult",1466794774),cljs.core.async.mult.call(null,clui_om.draggable_demo.mouse_up_ch)], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),clui_om.draggable_demo.mouse_down_ch,new cljs.core.Keyword(null,"mult","mult",1466794774),cljs.core.async.mult.call(null,clui_om.draggable_demo.mouse_down_ch)], null)], null)], null));
clui_om.draggable_demo.ALPHA_ROOT = document.getElementById("alpha-div");
clui_om.draggable_demo.grid = (function grid(data,owner,opts){
if(typeof clui_om.draggable_demo.t15490 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.draggable_demo.t15490 = (function (opts,owner,data,grid,meta15491){
this.opts = opts;
this.owner = owner;
this.data = data;
this.grid = grid;
this.meta15491 = meta15491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.draggable_demo.t15490.prototype.om$core$IRender$ = true;

clui_om.draggable_demo.t15490.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "grid"},cljs.core.doall.call(null,cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__15486_SHARP_){
return cljs.core.map.call(null,((function (___$1){
return (function (x){
return React.DOM.div({"style": {"border-style": "solid", "border-left-width": (1), "top": p1__15486_SHARP_, "width": new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287).cljs$core$IFn$_invoke$arity$1(self__.data), "border-right-width": (0), "border-bottom-width": (1), "border-top-width": (0), "border-color": "#ccc", "position": "fixed", "height": new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287).cljs$core$IFn$_invoke$arity$1(self__.data), "left": x}});
});})(___$1))
,cljs.core.range.call(null,(0),(new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(self__.data) * new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287).cljs$core$IFn$_invoke$arity$1(self__.data)));
});})(___$1))
,cljs.core.range.call(null,(0),(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(self__.data) * new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});

clui_om.draggable_demo.t15490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15492){
var self__ = this;
var _15492__$1 = this;
return self__.meta15491;
});

clui_om.draggable_demo.t15490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15492,meta15491__$1){
var self__ = this;
var _15492__$1 = this;
return (new clui_om.draggable_demo.t15490(self__.opts,self__.owner,self__.data,self__.grid,meta15491__$1));
});

clui_om.draggable_demo.t15490.cljs$lang$type = true;

clui_om.draggable_demo.t15490.cljs$lang$ctorStr = "clui-om.draggable-demo/t15490";

clui_om.draggable_demo.t15490.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.draggable-demo/t15490");
});

clui_om.draggable_demo.__GT_t15490 = (function __GT_t15490(opts__$1,owner__$1,data__$1,grid__$1,meta15491){
return (new clui_om.draggable_demo.t15490(opts__$1,owner__$1,data__$1,grid__$1,meta15491));
});

}

return (new clui_om.draggable_demo.t15490(opts,owner,data,grid,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),89,new cljs.core.Keyword(null,"end-line","end-line",1837326455),101,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),81,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/draggable_demo.cljs"], null)));
});
clui_om.draggable_demo.block = (function block(data,owner,opts){
if(typeof clui_om.draggable_demo.t15496 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.draggable_demo.t15496 = (function (opts,owner,data,block,meta15497){
this.opts = opts;
this.owner = owner;
this.data = data;
this.block = block;
this.meta15497 = meta15497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.draggable_demo.t15496.prototype.om$core$IRender$ = true;

clui_om.draggable_demo.t15496.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"style": {"opacity": 0.5, "borderRadius": (200), "background-color": new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.data), "height": new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(self__.data), "width": new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(self__.data)}},new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(self__.data));
});

clui_om.draggable_demo.t15496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15498){
var self__ = this;
var _15498__$1 = this;
return self__.meta15497;
});

clui_om.draggable_demo.t15496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15498,meta15497__$1){
var self__ = this;
var _15498__$1 = this;
return (new clui_om.draggable_demo.t15496(self__.opts,self__.owner,self__.data,self__.block,meta15497__$1));
});

clui_om.draggable_demo.t15496.cljs$lang$type = true;

clui_om.draggable_demo.t15496.cljs$lang$ctorStr = "clui-om.draggable-demo/t15496";

clui_om.draggable_demo.t15496.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.draggable-demo/t15496");
});

clui_om.draggable_demo.__GT_t15496 = (function __GT_t15496(opts__$1,owner__$1,data__$1,block__$1,meta15497){
return (new clui_om.draggable_demo.t15496(opts__$1,owner__$1,data__$1,block__$1,meta15497));
});

}

return (new clui_om.draggable_demo.t15496(opts,owner,data,block,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),112,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),104,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/draggable_demo.cljs"], null)));
});
/**
* @param {...*} var_args
*/
clui_om.draggable_demo.make_guideline = (function() { 
var make_guideline__delegate = function (p__15499){
var vec__15502 = p__15499;
var x = cljs.core.nth.call(null,vec__15502,(0),null);
var y = cljs.core.nth.call(null,vec__15502,(1),null);
var ow = cljs.core.nth.call(null,vec__15502,(2),null);
var oh = cljs.core.nth.call(null,vec__15502,(3),null);
var longer = ((300) + cljs.core.rand_int.call(null,(600)));
var shorter = (2);
var left = cljs.core.rand_int.call(null,(600));
var top = cljs.core.rand_int.call(null,(600));
var vec__15503 = (((cljs.core.rand_int.call(null,(2)) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [longer,shorter], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shorter,longer], null));
var w = cljs.core.nth.call(null,vec__15503,(0),null);
var h = cljs.core.nth.call(null,vec__15503,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__3628__auto__ = ow;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return w;
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var or__3628__auto__ = oh;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return h;
}
})(),new cljs.core.Keyword(null,"top","top",-1856271961),(function (){var or__3628__auto__ = y;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return top;
}
})(),new cljs.core.Keyword(null,"left","left",-399115937),(function (){var or__3628__auto__ = x;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return left;
}
})()], null);
};
var make_guideline = function (var_args){
var p__15499 = null;
if (arguments.length > 0) {
  p__15499 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return make_guideline__delegate.call(this,p__15499);};
make_guideline.cljs$lang$maxFixedArity = 0;
make_guideline.cljs$lang$applyTo = (function (arglist__15504){
var p__15499 = cljs.core.seq(arglist__15504);
return make_guideline__delegate(p__15499);
});
make_guideline.cljs$core$IFn$_invoke$arity$variadic = make_guideline__delegate;
return make_guideline;
})()
;
clui_om.draggable_demo.guidelines = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clui_om.draggable_demo.make_guideline.call(null,(50),(50),(2),(500))], null);
clui_om.draggable_demo.guideline = (function guideline(data,owner,opts){
if(typeof clui_om.draggable_demo.t15508 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.draggable_demo.t15508 = (function (opts,owner,data,guideline,meta15509){
this.opts = opts;
this.owner = owner;
this.data = data;
this.guideline = guideline;
this.meta15509 = meta15509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.draggable_demo.t15508.prototype.om$core$IRender$ = true;

clui_om.draggable_demo.t15508.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var guideline__$1 = new cljs.core.Keyword(null,"guideline","guideline",-1368974099).cljs$core$IFn$_invoke$arity$1(self__.data);
return React.DOM.div({"style": {"opacity": 0.8, "background-color": "black", "position": "absolute", "left": new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(guideline__$1), "top": new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(guideline__$1), "height": new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(guideline__$1), "width": new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(guideline__$1)}});
});

clui_om.draggable_demo.t15508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15510){
var self__ = this;
var _15510__$1 = this;
return self__.meta15509;
});

clui_om.draggable_demo.t15508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15510,meta15509__$1){
var self__ = this;
var _15510__$1 = this;
return (new clui_om.draggable_demo.t15508(self__.opts,self__.owner,self__.data,self__.guideline,meta15509__$1));
});

clui_om.draggable_demo.t15508.cljs$lang$type = true;

clui_om.draggable_demo.t15508.cljs$lang$ctorStr = "clui-om.draggable-demo/t15508";

clui_om.draggable_demo.t15508.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.draggable-demo/t15508");
});

clui_om.draggable_demo.__GT_t15508 = (function __GT_t15508(opts__$1,owner__$1,data__$1,guideline__$1,meta15509){
return (new clui_om.draggable_demo.t15508(opts__$1,owner__$1,data__$1,guideline__$1,meta15509));
});

}

return (new clui_om.draggable_demo.t15508(opts,owner,data,guideline,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),53,new cljs.core.Keyword(null,"end-line","end-line",1837326455),142,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),132,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/draggable_demo.cljs"], null)));
});
clui_om.draggable_demo.drag_app = (function drag_app(app,owner,opts){
if(typeof clui_om.draggable_demo.t15521 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.draggable_demo.t15521 = (function (opts,owner,app,drag_app,meta15522){
this.opts = opts;
this.owner = owner;
this.app = app;
this.drag_app = drag_app;
this.meta15522 = meta15522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.draggable_demo.t15521.prototype.om$core$IRender$ = true;

clui_om.draggable_demo.t15521.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,clui_om.draggable_demo.grid,new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(self__.app),self__.opts),cljs.core.apply.call(null,om.dom.div,{"className": "guidelines"},cljs.core.map.call(null,((function (___$1){
return (function (p1__15511_SHARP_){
return om.core.build.call(null,clui_om.draggable_demo.guideline,cljs.core.assoc.call(null,self__.app,new cljs.core.Keyword(null,"guideline","guideline",-1368974099),p1__15511_SHARP_));
});})(___$1))
,clui_om.draggable_demo.guidelines)),cljs.core.apply.call(null,om.dom.div,{"id": "free-drag"},cljs.core.map.call(null,((function (___$1){
return (function (p1__15512_SHARP_,p2__15513_SHARP_){
return om.core.build.call(null,draggable.core.draggable,cljs.core.assoc.call(null,self__.app,new cljs.core.Keyword(null,"top","top",-1856271961),(cljs.core.rand_int.call(null,(20)) + (50)),new cljs.core.Keyword(null,"left","left",-399115937),(cljs.core.rand_int.call(null,(20)) + (70)),new cljs.core.Keyword(null,"color","color",1011675173),p1__15512_SHARP_,new cljs.core.Keyword(null,"sub-com","sub-com",-129419304),clui_om.draggable_demo.block,new cljs.core.Keyword(null,"sub-com-data","sub-com-data",468328296),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),p1__15512_SHARP_,new cljs.core.Keyword(null,"size","size",1098693007),p2__15513_SHARP_], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dragger-fn","dragger-fn",456240575),((function (___$1){
return (function (owner__$1){
return draggable.core.free_drag.call(null,owner__$1);
});})(___$1))
], null)], null));
});})(___$1))
,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"block-sizes","block-sizes",1354908873).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.apply.call(null,om.dom.div,{"id": "grid-snap-drag"},cljs.core.map.call(null,((function (___$1){
return (function (p1__15514_SHARP_,p2__15515_SHARP_){
return om.core.build.call(null,draggable.core.draggable,cljs.core.assoc.call(null,self__.app,new cljs.core.Keyword(null,"top","top",-1856271961),(cljs.core.rand_int.call(null,(20)) + (50)),new cljs.core.Keyword(null,"left","left",-399115937),(cljs.core.rand_int.call(null,(20)) + (700)),new cljs.core.Keyword(null,"color","color",1011675173),p1__15514_SHARP_,new cljs.core.Keyword(null,"sub-com","sub-com",-129419304),clui_om.draggable_demo.block,new cljs.core.Keyword(null,"sub-com-data","sub-com-data",468328296),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),p1__15514_SHARP_,new cljs.core.Keyword(null,"size","size",1098693007),p2__15515_SHARP_], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dragger-fn","dragger-fn",456240575),((function (___$1){
return (function (owner__$1,___$2){
return draggable.core.grid_snap_drag.call(null,owner__$1,cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287)], null)),new cljs.core.Keyword(null,"snap-threshold","snap-threshold",-846190465).cljs$core$IFn$_invoke$arity$1(self__.app));
});})(___$1))
], null)], null));
});})(___$1))
,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"block-sizes","block-sizes",1354908873).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.apply.call(null,om.dom.div,{"id": "grid-snap-container"},cljs.core.map.call(null,((function (___$1){
return (function (p1__15516_SHARP_,p2__15517_SHARP_){
return om.core.build.call(null,draggable.core.draggable,cljs.core.assoc.call(null,self__.app,new cljs.core.Keyword(null,"top","top",-1856271961),(cljs.core.rand_int.call(null,(20)) + (500)),new cljs.core.Keyword(null,"left","left",-399115937),(cljs.core.rand_int.call(null,(20)) + (700)),new cljs.core.Keyword(null,"color","color",1011675173),p1__15516_SHARP_,new cljs.core.Keyword(null,"sub-com","sub-com",-129419304),clui_om.draggable_demo.block,new cljs.core.Keyword(null,"sub-com-data","sub-com-data",468328296),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),p1__15516_SHARP_,new cljs.core.Keyword(null,"size","size",1098693007),p2__15517_SHARP_], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dragger-fn","dragger-fn",456240575),((function (___$1){
return (function (owner__$1,___$2){
return draggable.core.guideline_snap_drag.call(null,owner__$1,new cljs.core.Keyword(null,"snap-threshold","snap-threshold",-846190465).cljs$core$IFn$_invoke$arity$1(self__.app));
});})(___$1))
], null)], null));
});})(___$1))
,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"block-sizes","block-sizes",1354908873).cljs$core$IFn$_invoke$arity$1(self__.app))));
});

clui_om.draggable_demo.t15521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15523){
var self__ = this;
var _15523__$1 = this;
return self__.meta15522;
});

clui_om.draggable_demo.t15521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15523,meta15522__$1){
var self__ = this;
var _15523__$1 = this;
return (new clui_om.draggable_demo.t15521(self__.opts,self__.owner,self__.app,self__.drag_app,meta15522__$1));
});

clui_om.draggable_demo.t15521.cljs$lang$type = true;

clui_om.draggable_demo.t15521.cljs$lang$ctorStr = "clui-om.draggable-demo/t15521";

clui_om.draggable_demo.t15521.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.draggable-demo/t15521");
});

clui_om.draggable_demo.__GT_t15521 = (function __GT_t15521(opts__$1,owner__$1,app__$1,drag_app__$1,meta15522){
return (new clui_om.draggable_demo.t15521(opts__$1,owner__$1,app__$1,drag_app__$1,meta15522));
});

}

return (new clui_om.draggable_demo.t15521(opts,owner,app,drag_app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),47,new cljs.core.Keyword(null,"end-line","end-line",1837326455),195,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/draggable_demo.cljs"], null)));
});
/**
* Initialize draggable-demo page, now with more om-draggable code
*/
clui_om.draggable_demo.main = (function main(){
var msg = "main():: initializing draggable-demo.cljs";
console.log(msg);

window.addEventListener("mousedown",((function (msg){
return (function (p1__15524_SHARP_){
return cljs.core.async.put_BANG_.call(null,clui_om.draggable_demo.mouse_down_ch,p1__15524_SHARP_);
});})(msg))
);

window.addEventListener("mouseup",((function (msg){
return (function (p1__15525_SHARP_){
return cljs.core.async.put_BANG_.call(null,clui_om.draggable_demo.mouse_up_ch,p1__15525_SHARP_);
});})(msg))
);

window.addEventListener("mousemove",((function (msg){
return (function (p1__15526_SHARP_){
return cljs.core.async.put_BANG_.call(null,clui_om.draggable_demo.mouse_move_ch,p1__15526_SHARP_);
});})(msg))
);

return om.core.root.call(null,clui_om.draggable_demo.drag_app,clui_om.draggable_demo.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),clui_om.draggable_demo.ALPHA_ROOT,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"guidelines","guidelines",91215231),clui_om.draggable_demo.guidelines], null)], null));
});
goog.exportSymbol('clui_om.draggable_demo.main', clui_om.draggable_demo.main);
