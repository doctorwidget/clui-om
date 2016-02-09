// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.page_gamma');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('cljs.core.async');
clui_om.page_gamma.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1))),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"w","w",354169001),(60),new cljs.core.Keyword(null,"h","h",1109658740),(30),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"morph-sprite","morph-sprite",987011540)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"w","w",354169001),(120),new cljs.core.Keyword(null,"h","h",1109658740),(160),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"draggable-sprite","draggable-sprite",-832290002),new cljs.core.Keyword(null,"title","title",636505583),"Click to drag me",new cljs.core.Keyword(null,"message","message",-406056002),"Hello world!",new cljs.core.Keyword(null,"prior-drag-loc","prior-drag-loc",-1780948410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)], null)], null)], null)], null));
clui_om.page_gamma.ALPHA_ROOT = document.getElementById("alpha-div");
clui_om.page_gamma.evt__GT_clj = (function evt__GT_clj(e){

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-y","client-y",1123764704),new cljs.core.Keyword(null,"client-x","client-x",37622273),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"page-x","page-x",-1810692119),new cljs.core.Keyword(null,"evt-type","evt-type",-1983250550),new cljs.core.Keyword(null,"page-y","page-y",609181360),new cljs.core.Keyword(null,"screen-x","screen-x",-438778187),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"screen-y","screen-y",-773698245),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"current-target","current-target",34322910)],[e.clientY,e.clientX,e,e.pageX,e.type,e.pageY,e.screenX,e.target,e.screenY,e.timestamp,e.currentTarget]);
});
clui_om.page_gamma.echo_evt = (function() {
var echo_evt = null;
var echo_evt__1 = (function (e){
return echo_evt.call(null,e,"...",false);
});
var echo_evt__2 = (function (e,msg){
return echo_evt.call(null,e,msg,false);
});
var echo_evt__3 = (function (e,msg,all){
var r = new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(e);
console.log([cljs.core.str(msg),cljs.core.str(": ")].join(''));

if(cljs.core.truth_(all)){
console.log([cljs.core.str("Raw React JS event: "),cljs.core.str(r)].join(''));
} else {
}

if(cljs.core.truth_(all)){
console.log([cljs.core.str("Wrapped Cljs event: "),cljs.core.str(e)].join(''));
} else {
}

if(cljs.core.truth_(all)){
console.log([cljs.core.str("Event Type (js) "),cljs.core.str(r.type)].join(''));
} else {
}

console.log([cljs.core.str("Event Type (clj) "),cljs.core.str(new cljs.core.Keyword(null,"evt-type","evt-type",-1983250550).cljs$core$IFn$_invoke$arity$1(e))].join(''));

if(cljs.core.truth_(all)){
console.log([cljs.core.str("ClientXY (js) "),cljs.core.str(r.clientX),cljs.core.str(", "),cljs.core.str(r.clientY)].join(''));
} else {
}

console.log([cljs.core.str("ClientXY (clj) "),cljs.core.str(new cljs.core.Keyword(null,"client-x","client-x",37622273).cljs$core$IFn$_invoke$arity$1(e)),cljs.core.str(", "),cljs.core.str(new cljs.core.Keyword(null,"client-y","client-y",1123764704).cljs$core$IFn$_invoke$arity$1(e))].join(''));

if(cljs.core.truth_(all)){
console.log([cljs.core.str("PageXY (js) "),cljs.core.str(r.pageX),cljs.core.str(", "),cljs.core.str(r.pageY)].join(''));
} else {
}

console.log([cljs.core.str("PageXY (clj) "),cljs.core.str(new cljs.core.Keyword(null,"page-x","page-x",-1810692119).cljs$core$IFn$_invoke$arity$1(e)),cljs.core.str(", "),cljs.core.str(new cljs.core.Keyword(null,"page-y","page-y",609181360).cljs$core$IFn$_invoke$arity$1(e))].join(''));

if(cljs.core.truth_(all)){
console.log([cljs.core.str("ScreenXY (js) "),cljs.core.str(r.screenX),cljs.core.str(", "),cljs.core.str(r.screenY)].join(''));
} else {
}

if(cljs.core.truth_(all)){
return console.log([cljs.core.str("ScreenXY (clj "),cljs.core.str(new cljs.core.Keyword(null,"screen-x","screen-x",-438778187).cljs$core$IFn$_invoke$arity$1(e)),cljs.core.str(", "),cljs.core.str(new cljs.core.Keyword(null,"screen-y","screen-y",-773698245).cljs$core$IFn$_invoke$arity$1(e))].join(''));
} else {
return null;
}
});
echo_evt = function(e,msg,all){
switch(arguments.length){
case 1:
return echo_evt__1.call(this,e);
case 2:
return echo_evt__2.call(this,e,msg);
case 3:
return echo_evt__3.call(this,e,msg,all);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
echo_evt.cljs$core$IFn$_invoke$arity$1 = echo_evt__1;
echo_evt.cljs$core$IFn$_invoke$arity$2 = echo_evt__2;
echo_evt.cljs$core$IFn$_invoke$arity$3 = echo_evt__3;
return echo_evt;
})()
;
/**
* Generate a map with the appropriate CSS for an object of the given
* x and y coordinates, with the given width (w) and height (h)
*/
clui_om.page_gamma.sprite_dims = (function sprite_dims(x,y,w,h){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),h,new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null);
});
/**
* Generate one of two CSS maps, depending on the value of a final
* boolean argument ('morphed')
*/
clui_om.page_gamma.morph_dims = (function morph_dims(x,y,w,h,morphed){
var grow = (2);
var bigw = (grow * w);
var bigh = (grow * h);
var basemap = clui_om.page_gamma.sprite_dims.call(null,x,y,w,h);
if(cljs.core.truth_(morphed)){
return cljs.core.merge.call(null,basemap,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),bigw,new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),bigw,new cljs.core.Keyword(null,"height","height",1025178622),bigh,new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),bigh,new cljs.core.Keyword(null,"left","left",-399115937),(x - ((bigh - h) / (2))),new cljs.core.Keyword(null,"top","top",-1856271961),(y - ((bigw - w) / (2)))], null));
} else {
return basemap;
}
});
clui_om.page_gamma.sprite = (function (){var method_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4528__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4529__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"clui-om.page-gamma","sprite"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4529__auto__,method_table__4525__auto__,prefer_table__4526__auto__,method_cache__4527__auto__,cached_hierarchy__4528__auto__));
})();
cljs.core._add_method.call(null,clui_om.page_gamma.sprite,new cljs.core.Keyword(null,"morph-sprite","morph-sprite",987011540),(function (cursor,owner,opts){

if(typeof clui_om.page_gamma.t18966 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_gamma.t18966 = (function (opts,owner,cursor,meta18967){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta18967 = meta18967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_gamma.t18966.prototype.om$core$IRenderState$ = true;

clui_om.page_gamma.t18966.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18969){
var self__ = this;
var map__18970 = p__18969;
var map__18970__$1 = ((cljs.core.seq_QMARK_.call(null,map__18970))?cljs.core.apply.call(null,cljs.core.hash_map,map__18970):map__18970);
var pinned = cljs.core.get.call(null,map__18970__$1,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
var hovering = cljs.core.get.call(null,map__18970__$1,new cljs.core.Keyword(null,"hovering","hovering",-571536091));
var dragging = cljs.core.get.call(null,map__18970__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var ___$1 = this;
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(self__.cursor);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(self__.cursor);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(self__.cursor);
var h = new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(self__.cursor);
return React.DOM.div({"onClick": ((function (x,y,w,h,___$1,map__18970,map__18970__$1,pinned,hovering,dragging){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"pinned","pinned",-1216085339),cljs.core.not.call(null,pinned));
});})(x,y,w,h,___$1,map__18970,map__18970__$1,pinned,hovering,dragging))
, "onMouseOut": ((function (x,y,w,h,___$1,map__18970,map__18970__$1,pinned,hovering,dragging){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hovering","hovering",-571536091),false);
});})(x,y,w,h,___$1,map__18970,map__18970__$1,pinned,hovering,dragging))
, "onMouseOver": ((function (x,y,w,h,___$1,map__18970,map__18970__$1,pinned,hovering,dragging){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hovering","hovering",-571536091),true);
});})(x,y,w,h,___$1,map__18970,map__18970__$1,pinned,hovering,dragging))
, "style": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center"], null),clui_om.page_gamma.morph_dims.call(null,x,y,w,h,(function (){var or__3628__auto__ = hovering;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return pinned;
}
})()))), "className": [cljs.core.str("morphSprite"),cljs.core.str((cljs.core.truth_(hovering)?" hovering":""))].join('')},React.DOM.span({"style": {"minWidth": "100%", "width": "100%"}, "className": "spriteLabel"},"I morph."));
});

clui_om.page_gamma.t18966.prototype.om$core$IInitState$ = true;

clui_om.page_gamma.t18966.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pinned","pinned",-1216085339),false,new cljs.core.Keyword(null,"hovering","hovering",-571536091),false], null);
});

clui_om.page_gamma.t18966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18968){
var self__ = this;
var _18968__$1 = this;
return self__.meta18967;
});

clui_om.page_gamma.t18966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18968,meta18967__$1){
var self__ = this;
var _18968__$1 = this;
return (new clui_om.page_gamma.t18966(self__.opts,self__.owner,self__.cursor,meta18967__$1));
});

clui_om.page_gamma.t18966.cljs$lang$type = true;

clui_om.page_gamma.t18966.cljs$lang$ctorStr = "clui-om.page-gamma/t18966";

clui_om.page_gamma.t18966.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-gamma/t18966");
});

clui_om.page_gamma.__GT_t18966 = (function __GT_t18966(opts__$1,owner__$1,cursor__$1,meta18967){
return (new clui_om.page_gamma.t18966(opts__$1,owner__$1,cursor__$1,meta18967));
});

}

return (new clui_om.page_gamma.t18966(opts,owner,cursor,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),43,new cljs.core.Keyword(null,"end-line","end-line",1837326455),151,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),133,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_gamma.cljs"], null)));
}));
cljs.core._add_method.call(null,clui_om.page_gamma.sprite,new cljs.core.Keyword(null,"draggable-sprite","draggable-sprite",-832290002),(function (cursor,owner,opts){

if(typeof clui_om.page_gamma.t18974 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_gamma.t18974 = (function (opts,owner,cursor,meta18975){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta18975 = meta18975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_gamma.t18974.prototype.om$core$IRenderState$ = true;

clui_om.page_gamma.t18974.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18977){
var self__ = this;
var map__18978 = p__18977;
var map__18978__$1 = ((cljs.core.seq_QMARK_.call(null,map__18978))?cljs.core.apply.call(null,cljs.core.hash_map,map__18978):map__18978);
var mouse_move = cljs.core.get.call(null,map__18978__$1,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223));
var drag_off = cljs.core.get.call(null,map__18978__$1,new cljs.core.Keyword(null,"drag-off","drag-off",1138965572));
var drag_on = cljs.core.get.call(null,map__18978__$1,new cljs.core.Keyword(null,"drag-on","drag-on",179819806));
var dragging = cljs.core.get.call(null,map__18978__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var ___$1 = this;
return React.DOM.div({"onMouseMove": ((function (___$1,map__18978,map__18978__$1,mouse_move,drag_off,drag_on,dragging){
return (function (p1__18973_SHARP_){
return cljs.core.async.put_BANG_.call(null,mouse_move,clui_om.page_gamma.evt__GT_clj.call(null,p1__18973_SHARP_));
});})(___$1,map__18978,map__18978__$1,mouse_move,drag_off,drag_on,dragging))
, "onMouseUp": ((function (___$1,map__18978,map__18978__$1,mouse_move,drag_off,drag_on,dragging){
return (function (p1__18972_SHARP_){
return cljs.core.async.put_BANG_.call(null,drag_off,clui_om.page_gamma.evt__GT_clj.call(null,p1__18972_SHARP_));
});})(___$1,map__18978,map__18978__$1,mouse_move,drag_off,drag_on,dragging))
, "onMouseDown": ((function (___$1,map__18978,map__18978__$1,mouse_move,drag_off,drag_on,dragging){
return (function (p1__18971_SHARP_){
return cljs.core.async.put_BANG_.call(null,drag_on,clui_om.page_gamma.evt__GT_clj.call(null,p1__18971_SHARP_));
});})(___$1,map__18978,map__18978__$1,mouse_move,drag_off,drag_on,dragging))
, "style": cljs.core.clj__GT_js.call(null,clui_om.page_gamma.sprite_dims.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(self__.cursor))), "className": "dragSprite"},React.DOM.div({"className": "dragSpriteTitle"},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.cursor)),React.DOM.div({"className": "dragSpriteMessage"},new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(self__.cursor)));
});

clui_om.page_gamma.t18974.prototype.om$core$IWillMount$ = true;

clui_om.page_gamma.t18974.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;

var dragging = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var drag_on = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"drag-on","drag-on",179819806));
var drag_off = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"drag-off","drag-off",1138965572));
var mouse_move = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223));
var c__6508__auto___19128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___19128,dragging,drag_on,drag_off,mouse_move,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___19128,dragging,drag_on,drag_off,mouse_move,___$1){
return (function (state_19002){
var state_val_19003 = (state_19002[(1)]);
if((state_val_19003 === (7))){
var inst_18988 = (state_19002[(2)]);
var inst_18989 = cljs.core.get.call(null,inst_18988,new cljs.core.Keyword(null,"evt-type","evt-type",-1983250550));
var inst_18990 = cljs.core.get.call(null,inst_18988,new cljs.core.Keyword(null,"page-y","page-y",609181360));
var inst_18991 = cljs.core.get.call(null,inst_18988,new cljs.core.Keyword(null,"page-x","page-x",-1810692119));
var inst_18992 = console.log("Dragging is now on (",inst_18989,")");
var inst_18993 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true);
var inst_18994 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18995 = [inst_18991,inst_18990];
var inst_18996 = (new cljs.core.PersistentVector(null,2,(5),inst_18994,inst_18995,null));
var inst_18997 = om.core.update_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"prior-drag-loc","prior-drag-loc",-1780948410),inst_18996);
var state_19002__$1 = (function (){var statearr_19004 = state_19002;
(statearr_19004[(7)] = inst_18997);

(statearr_19004[(8)] = inst_18993);

(statearr_19004[(9)] = inst_18992);

return statearr_19004;
})();
var statearr_19005_19129 = state_19002__$1;
(statearr_19005_19129[(2)] = null);

(statearr_19005_19129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (6))){
var inst_18982 = (state_19002[(10)]);
var state_19002__$1 = state_19002;
var statearr_19006_19130 = state_19002__$1;
(statearr_19006_19130[(2)] = inst_18982);

(statearr_19006_19130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (5))){
var inst_18982 = (state_19002[(10)]);
var inst_18985 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18982);
var state_19002__$1 = state_19002;
var statearr_19007_19131 = state_19002__$1;
(statearr_19007_19131[(2)] = inst_18985);

(statearr_19007_19131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (4))){
var inst_18982 = (state_19002[(10)]);
var inst_18982__$1 = (state_19002[(2)]);
var inst_18983 = cljs.core.seq_QMARK_.call(null,inst_18982__$1);
var state_19002__$1 = (function (){var statearr_19008 = state_19002;
(statearr_19008[(10)] = inst_18982__$1);

return statearr_19008;
})();
if(inst_18983){
var statearr_19009_19132 = state_19002__$1;
(statearr_19009_19132[(1)] = (5));

} else {
var statearr_19010_19133 = state_19002__$1;
(statearr_19010_19133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19003 === (3))){
var inst_19000 = (state_19002[(2)]);
var state_19002__$1 = state_19002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19002__$1,inst_19000);
} else {
if((state_val_19003 === (2))){
var state_19002__$1 = state_19002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19002__$1,(4),drag_on);
} else {
if((state_val_19003 === (1))){
var state_19002__$1 = state_19002;
var statearr_19011_19134 = state_19002__$1;
(statearr_19011_19134[(2)] = null);

(statearr_19011_19134[(1)] = (2));


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
});})(c__6508__auto___19128,dragging,drag_on,drag_off,mouse_move,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto___19128,dragging,drag_on,drag_off,mouse_move,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_19015 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19015[(0)] = state_machine__6494__auto__);

(statearr_19015[(1)] = (1));

return statearr_19015;
});
var state_machine__6494__auto____1 = (function (state_19002){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_19002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e19016){if((e19016 instanceof Object)){
var ex__6497__auto__ = e19016;
var statearr_19017_19135 = state_19002;
(statearr_19017_19135[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19136 = state_19002;
state_19002 = G__19136;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_19002){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_19002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___19128,dragging,drag_on,drag_off,mouse_move,___$1))
})();
var state__6510__auto__ = (function (){var statearr_19018 = f__6509__auto__.call(null);
(statearr_19018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___19128);

return statearr_19018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___19128,dragging,drag_on,drag_off,mouse_move,___$1))
);


var c__6508__auto___19137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___19137,dragging,drag_on,drag_off,mouse_move,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___19137,dragging,drag_on,drag_off,mouse_move,___$1){
return (function (state_19042){
var state_val_19043 = (state_19042[(1)]);
if((state_val_19043 === (7))){
var inst_19029 = (state_19042[(2)]);
var inst_19030 = cljs.core.get.call(null,inst_19029,new cljs.core.Keyword(null,"evt-type","evt-type",-1983250550));
var inst_19031 = cljs.core.deref.call(null,self__.cursor);
var inst_19032 = new cljs.core.Keyword(null,"prior-drag-loc","prior-drag-loc",-1780948410).cljs$core$IFn$_invoke$arity$1(inst_19031);
var inst_19033 = cljs.core.nth.call(null,inst_19032,(0),null);
var inst_19034 = cljs.core.nth.call(null,inst_19032,(1),null);
var inst_19035 = console.log("Dragging is now off (",inst_19030,")");
var inst_19036 = console.log("prior-drag-loc: [",inst_19033,", ",inst_19034,"]");
var inst_19037 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",1185097613),false);
var state_19042__$1 = (function (){var statearr_19044 = state_19042;
(statearr_19044[(7)] = inst_19036);

(statearr_19044[(8)] = inst_19037);

(statearr_19044[(9)] = inst_19035);

return statearr_19044;
})();
var statearr_19045_19138 = state_19042__$1;
(statearr_19045_19138[(2)] = null);

(statearr_19045_19138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19043 === (6))){
var inst_19023 = (state_19042[(10)]);
var state_19042__$1 = state_19042;
var statearr_19046_19139 = state_19042__$1;
(statearr_19046_19139[(2)] = inst_19023);

(statearr_19046_19139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19043 === (5))){
var inst_19023 = (state_19042[(10)]);
var inst_19026 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19023);
var state_19042__$1 = state_19042;
var statearr_19047_19140 = state_19042__$1;
(statearr_19047_19140[(2)] = inst_19026);

(statearr_19047_19140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19043 === (4))){
var inst_19023 = (state_19042[(10)]);
var inst_19023__$1 = (state_19042[(2)]);
var inst_19024 = cljs.core.seq_QMARK_.call(null,inst_19023__$1);
var state_19042__$1 = (function (){var statearr_19048 = state_19042;
(statearr_19048[(10)] = inst_19023__$1);

return statearr_19048;
})();
if(inst_19024){
var statearr_19049_19141 = state_19042__$1;
(statearr_19049_19141[(1)] = (5));

} else {
var statearr_19050_19142 = state_19042__$1;
(statearr_19050_19142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19043 === (3))){
var inst_19040 = (state_19042[(2)]);
var state_19042__$1 = state_19042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19042__$1,inst_19040);
} else {
if((state_val_19043 === (2))){
var state_19042__$1 = state_19042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19042__$1,(4),drag_off);
} else {
if((state_val_19043 === (1))){
var state_19042__$1 = state_19042;
var statearr_19051_19143 = state_19042__$1;
(statearr_19051_19143[(2)] = null);

(statearr_19051_19143[(1)] = (2));


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
});})(c__6508__auto___19137,dragging,drag_on,drag_off,mouse_move,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto___19137,dragging,drag_on,drag_off,mouse_move,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_19055 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19055[(0)] = state_machine__6494__auto__);

(statearr_19055[(1)] = (1));

return statearr_19055;
});
var state_machine__6494__auto____1 = (function (state_19042){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_19042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e19056){if((e19056 instanceof Object)){
var ex__6497__auto__ = e19056;
var statearr_19057_19144 = state_19042;
(statearr_19057_19144[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19145 = state_19042;
state_19042 = G__19145;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_19042){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_19042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___19137,dragging,drag_on,drag_off,mouse_move,___$1))
})();
var state__6510__auto__ = (function (){var statearr_19058 = f__6509__auto__.call(null);
(statearr_19058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___19137);

return statearr_19058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___19137,dragging,drag_on,drag_off,mouse_move,___$1))
);


var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,dragging,drag_on,drag_off,mouse_move,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,dragging,drag_on,drag_off,mouse_move,___$1){
return (function (state_19105){
var state_val_19106 = (state_19105[(1)]);
if((state_val_19106 === (7))){
var inst_19068 = (state_19105[(2)]);
var inst_19069 = cljs.core.get.call(null,inst_19068,new cljs.core.Keyword(null,"evt-type","evt-type",-1983250550));
var inst_19070 = cljs.core.get.call(null,inst_19068,new cljs.core.Keyword(null,"page-y","page-y",609181360));
var inst_19071 = cljs.core.get.call(null,inst_19068,new cljs.core.Keyword(null,"page-x","page-x",-1810692119));
var inst_19072 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var state_19105__$1 = (function (){var statearr_19107 = state_19105;
(statearr_19107[(7)] = inst_19071);

(statearr_19107[(8)] = inst_19069);

(statearr_19107[(9)] = inst_19070);

return statearr_19107;
})();
if(cljs.core.truth_(inst_19072)){
var statearr_19108_19146 = state_19105__$1;
(statearr_19108_19146[(1)] = (8));

} else {
var statearr_19109_19147 = state_19105__$1;
(statearr_19109_19147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19106 === (1))){
var state_19105__$1 = state_19105;
var statearr_19110_19148 = state_19105__$1;
(statearr_19110_19148[(2)] = null);

(statearr_19110_19148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19106 === (4))){
var inst_19062 = (state_19105[(10)]);
var inst_19062__$1 = (state_19105[(2)]);
var inst_19063 = cljs.core.seq_QMARK_.call(null,inst_19062__$1);
var state_19105__$1 = (function (){var statearr_19111 = state_19105;
(statearr_19111[(10)] = inst_19062__$1);

return statearr_19111;
})();
if(inst_19063){
var statearr_19112_19149 = state_19105__$1;
(statearr_19112_19149[(1)] = (5));

} else {
var statearr_19113_19150 = state_19105__$1;
(statearr_19113_19150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19106 === (6))){
var inst_19062 = (state_19105[(10)]);
var state_19105__$1 = state_19105;
var statearr_19114_19151 = state_19105__$1;
(statearr_19114_19151[(2)] = inst_19062);

(statearr_19114_19151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19106 === (3))){
var inst_19103 = (state_19105[(2)]);
var state_19105__$1 = state_19105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19105__$1,inst_19103);
} else {
if((state_val_19106 === (2))){
var state_19105__$1 = state_19105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19105__$1,(4),mouse_move);
} else {
if((state_val_19106 === (9))){
var state_19105__$1 = state_19105;
var statearr_19115_19152 = state_19105__$1;
(statearr_19115_19152[(2)] = null);

(statearr_19115_19152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19106 === (5))){
var inst_19062 = (state_19105[(10)]);
var inst_19065 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19062);
var state_19105__$1 = state_19105;
var statearr_19116_19153 = state_19105__$1;
(statearr_19116_19153[(2)] = inst_19065);

(statearr_19116_19153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19106 === (10))){
var inst_19100 = (state_19105[(2)]);
var state_19105__$1 = (function (){var statearr_19117 = state_19105;
(statearr_19117[(11)] = inst_19100);

return statearr_19117;
})();
var statearr_19118_19154 = state_19105__$1;
(statearr_19118_19154[(2)] = null);

(statearr_19118_19154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19106 === (8))){
var inst_19071 = (state_19105[(7)]);
var inst_19069 = (state_19105[(8)]);
var inst_19070 = (state_19105[(9)]);
var inst_19075 = cljs.core.deref.call(null,self__.cursor);
var inst_19076 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(inst_19075);
var inst_19077 = cljs.core.deref.call(null,self__.cursor);
var inst_19078 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(inst_19077);
var inst_19079 = cljs.core.deref.call(null,self__.cursor);
var inst_19080 = new cljs.core.Keyword(null,"prior-drag-loc","prior-drag-loc",-1780948410).cljs$core$IFn$_invoke$arity$1(inst_19079);
var inst_19081 = cljs.core.nth.call(null,inst_19080,(0),null);
var inst_19082 = cljs.core.nth.call(null,inst_19080,(1),null);
var inst_19083 = (inst_19071 - inst_19081);
var inst_19084 = (inst_19070 - inst_19082);
var inst_19085 = (inst_19076 + inst_19083);
var inst_19086 = (inst_19078 + inst_19084);
var inst_19087 = console.log("Mouse event (",inst_19069,")");
var inst_19088 = console.log("Dragging from ",inst_19076,", ",inst_19078," to ",inst_19085,", ",inst_19086);
var inst_19089 = cljs.core.deref.call(null,self__.cursor);
var inst_19090 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"prior-drag-loc","prior-drag-loc",-1780948410)];
var inst_19091 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19092 = [inst_19071,inst_19070];
var inst_19093 = (new cljs.core.PersistentVector(null,2,(5),inst_19091,inst_19092,null));
var inst_19094 = [inst_19085,inst_19086,inst_19093];
var inst_19095 = cljs.core.PersistentHashMap.fromArrays(inst_19090,inst_19094);
var inst_19096 = cljs.core.merge.call(null,inst_19089,inst_19095);
var inst_19097 = om.core.update_BANG_.call(null,self__.cursor,inst_19096);
var state_19105__$1 = (function (){var statearr_19119 = state_19105;
(statearr_19119[(12)] = inst_19087);

(statearr_19119[(13)] = inst_19088);

return statearr_19119;
})();
var statearr_19120_19155 = state_19105__$1;
(statearr_19120_19155[(2)] = inst_19097);

(statearr_19120_19155[(1)] = (10));


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
});})(c__6508__auto__,dragging,drag_on,drag_off,mouse_move,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto__,dragging,drag_on,drag_off,mouse_move,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_19124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19124[(0)] = state_machine__6494__auto__);

(statearr_19124[(1)] = (1));

return statearr_19124;
});
var state_machine__6494__auto____1 = (function (state_19105){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_19105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e19125){if((e19125 instanceof Object)){
var ex__6497__auto__ = e19125;
var statearr_19126_19156 = state_19105;
(statearr_19126_19156[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19157 = state_19105;
state_19105 = G__19157;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_19105){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_19105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,dragging,drag_on,drag_off,mouse_move,___$1))
})();
var state__6510__auto__ = (function (){var statearr_19127 = f__6509__auto__.call(null);
(statearr_19127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_19127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,dragging,drag_on,drag_off,mouse_move,___$1))
);

return c__6508__auto__;
});

clui_om.page_gamma.t18974.prototype.om$core$IInitState$ = true;

clui_om.page_gamma.t18974.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dragging","dragging",1185097613),false,new cljs.core.Keyword(null,"drag-on","drag-on",179819806),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"drag-off","drag-off",1138965572),cljs.core.async.chan.call(null)], null);
});

clui_om.page_gamma.t18974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18976){
var self__ = this;
var _18976__$1 = this;
return self__.meta18975;
});

clui_om.page_gamma.t18974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18976,meta18975__$1){
var self__ = this;
var _18976__$1 = this;
return (new clui_om.page_gamma.t18974(self__.opts,self__.owner,self__.cursor,meta18975__$1));
});

clui_om.page_gamma.t18974.cljs$lang$type = true;

clui_om.page_gamma.t18974.cljs$lang$ctorStr = "clui-om.page-gamma/t18974";

clui_om.page_gamma.t18974.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-gamma/t18974");
});

clui_om.page_gamma.__GT_t18974 = (function __GT_t18974(opts__$1,owner__$1,cursor__$1,meta18975){
return (new clui_om.page_gamma.t18974(opts__$1,owner__$1,cursor__$1,meta18975));
});

}

return (new clui_om.page_gamma.t18974(opts,owner,cursor,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),83,new cljs.core.Keyword(null,"end-line","end-line",1837326455),214,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),155,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_gamma.cljs"], null)));
}));
clui_om.page_gamma.canvas = (function canvas(cursor,owner,opts){

if(typeof clui_om.page_gamma.t19163 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_gamma.t19163 = (function (opts,owner,cursor,canvas,meta19164){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.canvas = canvas;
this.meta19164 = meta19164;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_gamma.t19163.prototype.om$core$IRenderState$ = true;

clui_om.page_gamma.t19163.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__19166){
var self__ = this;
var map__19167 = p__19166;
var map__19167__$1 = ((cljs.core.seq_QMARK_.call(null,map__19167))?cljs.core.apply.call(null,cljs.core.hash_map,map__19167):map__19167);
var position = cljs.core.get.call(null,map__19167__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var img = cljs.core.get.call(null,map__19167__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var ___$1 = this;
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.cursor);
var height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.cursor);
var sprites = new cljs.core.Keyword(null,"sprites","sprites",-1835833922).cljs$core$IFn$_invoke$arity$1(self__.cursor);
return cljs.core.apply.call(null,om.dom.div,{"style": {"position": position, "minHeight": height, "height": height, "minWidth": width, "width": width}, "className": "canvasDiv"},om.core.build_all.call(null,clui_om.page_gamma.sprite,sprites,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223).cljs$core$IFn$_invoke$arity$1(self__.cursor)], null)], null)));
});

clui_om.page_gamma.t19163.prototype.om$core$IInitState$ = true;

clui_om.page_gamma.t19163.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1442687358),null,new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null);
});

clui_om.page_gamma.t19163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19165){
var self__ = this;
var _19165__$1 = this;
return self__.meta19164;
});

clui_om.page_gamma.t19163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19165,meta19164__$1){
var self__ = this;
var _19165__$1 = this;
return (new clui_om.page_gamma.t19163(self__.opts,self__.owner,self__.cursor,self__.canvas,meta19164__$1));
});

clui_om.page_gamma.t19163.cljs$lang$type = true;

clui_om.page_gamma.t19163.cljs$lang$ctorStr = "clui-om.page-gamma/t19163";

clui_om.page_gamma.t19163.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-gamma/t19163");
});

clui_om.page_gamma.__GT_t19163 = (function __GT_t19163(opts__$1,owner__$1,cursor__$1,canvas__$1,meta19164){
return (new clui_om.page_gamma.t19163(opts__$1,owner__$1,cursor__$1,canvas__$1,meta19164));
});

}

return (new clui_om.page_gamma.t19163(opts,owner,cursor,canvas,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),96,new cljs.core.Keyword(null,"end-line","end-line",1837326455),238,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),222,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_gamma.cljs"], null)));
});
clui_om.page_gamma.main_widget = (function main_widget(app,owner,opts){
if(typeof clui_om.page_gamma.t19171 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_gamma.t19171 = (function (opts,owner,app,main_widget,meta19172){
this.opts = opts;
this.owner = owner;
this.app = app;
this.main_widget = main_widget;
this.meta19172 = meta19172;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_gamma.t19171.prototype.om$core$IRender$ = true;

clui_om.page_gamma.t19171.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,clui_om.page_gamma.canvas,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.app));
});

clui_om.page_gamma.t19171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19173){
var self__ = this;
var _19173__$1 = this;
return self__.meta19172;
});

clui_om.page_gamma.t19171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19173,meta19172__$1){
var self__ = this;
var _19173__$1 = this;
return (new clui_om.page_gamma.t19171(self__.opts,self__.owner,self__.app,self__.main_widget,meta19172__$1));
});

clui_om.page_gamma.t19171.cljs$lang$type = true;

clui_om.page_gamma.t19171.cljs$lang$ctorStr = "clui-om.page-gamma/t19171";

clui_om.page_gamma.t19171.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-gamma/t19171");
});

clui_om.page_gamma.__GT_t19171 = (function __GT_t19171(opts__$1,owner__$1,app__$1,main_widget__$1,meta19172){
return (new clui_om.page_gamma.t19171(opts__$1,owner__$1,app__$1,main_widget__$1,meta19172));
});

}

return (new clui_om.page_gamma.t19171(opts,owner,app,main_widget,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),39,new cljs.core.Keyword(null,"end-line","end-line",1837326455),245,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),242,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_gamma.cljs"], null)));
});
/**
* Initialize page gamma
*/
clui_om.page_gamma.main = (function main(){
var msg = "main():: initializing page-gamma.cljs";
var page_chan = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
console.log(msg);

om.core.root.call(null,clui_om.page_gamma.main_widget,clui_om.page_gamma.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),clui_om.page_gamma.ALPHA_ROOT], null));

window.addEventListener("click",((function (msg,page_chan){
return (function (e){
var c = clui_om.page_gamma.evt__GT_clj.call(null,e);
return cljs.core.async.put_BANG_.call(null,page_chan,c);
});})(msg,page_chan))
);

var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,msg,page_chan){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,msg,page_chan){
return (function (state_19202){
var state_val_19203 = (state_19202[(1)]);
if((state_val_19203 === (4))){
var inst_19196 = (state_19202[(2)]);
var inst_19197 = clui_om.page_gamma.echo_evt.call(null,inst_19196,"Page Event (Post-Channel)");
var state_19202__$1 = (function (){var statearr_19204 = state_19202;
(statearr_19204[(7)] = inst_19197);

return statearr_19204;
})();
var statearr_19205_19214 = state_19202__$1;
(statearr_19205_19214[(2)] = null);

(statearr_19205_19214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19203 === (3))){
var inst_19200 = (state_19202[(2)]);
var state_19202__$1 = state_19202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19202__$1,inst_19200);
} else {
if((state_val_19203 === (2))){
var state_19202__$1 = state_19202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19202__$1,(4),page_chan);
} else {
if((state_val_19203 === (1))){
var state_19202__$1 = state_19202;
var statearr_19206_19215 = state_19202__$1;
(statearr_19206_19215[(2)] = null);

(statearr_19206_19215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6508__auto__,msg,page_chan))
;
return ((function (switch__6493__auto__,c__6508__auto__,msg,page_chan){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_19210 = [null,null,null,null,null,null,null,null];
(statearr_19210[(0)] = state_machine__6494__auto__);

(statearr_19210[(1)] = (1));

return statearr_19210;
});
var state_machine__6494__auto____1 = (function (state_19202){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_19202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e19211){if((e19211 instanceof Object)){
var ex__6497__auto__ = e19211;
var statearr_19212_19216 = state_19202;
(statearr_19212_19216[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19217 = state_19202;
state_19202 = G__19217;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_19202){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_19202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,msg,page_chan))
})();
var state__6510__auto__ = (function (){var statearr_19213 = f__6509__auto__.call(null);
(statearr_19213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_19213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,msg,page_chan))
);

return c__6508__auto__;
});
goog.exportSymbol('clui_om.page_gamma.main', clui_om.page_gamma.main);
