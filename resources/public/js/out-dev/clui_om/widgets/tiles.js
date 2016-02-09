// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.widgets.tiles');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clui_om.widgets.palettes');
clui_om.widgets.tiles.DEFAULTS = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),(40),new cljs.core.Keyword(null,"tile-size","tile-size",441420757),(24)], null);
clui_om.widgets.tiles.square_div = (function square_div(size){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"min-width","min-width",1926193728),size,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),size,new cljs.core.Keyword(null,"min-height","min-height",398480837),size,new cljs.core.Keyword(null,"max-height","max-height",-612563804),size], null);
});
clui_om.widgets.tiles.toggle_pause = (function toggle_pause(_,cursor,owner,state){
var new_pause = cljs.core.not.call(null,new cljs.core.Keyword(null,"paused","paused",-1710376127).cljs$core$IFn$_invoke$arity$1(state));
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cursor));
console.log("Toggle pause to ",new_pause,". Saved color: ",color);

om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"paused","paused",-1710376127),new_pause);

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"saved-color","saved-color",-1428013318),color);
});
clui_om.widgets.tiles.color_tile = (function color_tile(cursor,owner,opts){
if(typeof clui_om.widgets.tiles.t21053 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.widgets.tiles.t21053 = (function (opts,owner,cursor,color_tile,meta21054){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.color_tile = color_tile;
this.meta21054 = meta21054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.widgets.tiles.t21053.prototype.om$core$IRenderState$ = true;

clui_om.widgets.tiles.t21053.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var settings = new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(self__.cursor);
var paused = new cljs.core.Keyword(null,"paused","paused",-1710376127).cljs$core$IFn$_invoke$arity$1(state);
var border_width = (cljs.core.truth_(paused)?(4):(1));
var cell_size = new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287).cljs$core$IFn$_invoke$arity$1(settings);
var tile_size = new cljs.core.Keyword(null,"tile-size","tile-size",441420757).cljs$core$IFn$_invoke$arity$1(settings);
var gap = (cljs.core.truth_(paused)?((cell_size - tile_size) - ((2) * border_width)):(cell_size - tile_size));
var color = (cljs.core.truth_(paused)?new cljs.core.Keyword(null,"saved-color","saved-color",-1428013318).cljs$core$IFn$_invoke$arity$1(state):new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.cursor));
return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,clui_om.widgets.tiles.square_div.call(null,cell_size),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),[cljs.core.str(border_width),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(cljs.core.truth_(paused)?"#000000":"#EEEEEE"),new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)))], null)),React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (settings,paused,border_width,cell_size,tile_size,gap,color,___$1){
return (function (p1__21049_SHARP_){
return clui_om.widgets.tiles.toggle_pause.call(null,p1__21049_SHARP_,self__.cursor,self__.owner,state);
});})(settings,paused,border_width,cell_size,tile_size,gap,color,___$1))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,clui_om.widgets.tiles.square_div.call(null,tile_size),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color,new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(gap / (2)),new cljs.core.Keyword(null,"top","top",-1856271961),(gap / (2))], null)))], null))));
});

clui_om.widgets.tiles.t21053.prototype.om$core$IInitState$ = true;

clui_om.widgets.tiles.t21053.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paused","paused",-1710376127),false,new cljs.core.Keyword(null,"saved-color","saved-color",-1428013318),cljs.core.first.call(null,cljs.core.vals.call(null,clui_om.widgets.palettes.DEFAULT_PALETTE))], null);
});

clui_om.widgets.tiles.t21053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21055){
var self__ = this;
var _21055__$1 = this;
return self__.meta21054;
});

clui_om.widgets.tiles.t21053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21055,meta21054__$1){
var self__ = this;
var _21055__$1 = this;
return (new clui_om.widgets.tiles.t21053(self__.opts,self__.owner,self__.cursor,self__.color_tile,meta21054__$1));
});

clui_om.widgets.tiles.t21053.cljs$lang$type = true;

clui_om.widgets.tiles.t21053.cljs$lang$ctorStr = "clui-om.widgets.tiles/t21053";

clui_om.widgets.tiles.t21053.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.widgets.tiles/t21053");
});

clui_om.widgets.tiles.__GT_t21053 = (function __GT_t21053(opts__$1,owner__$1,cursor__$1,color_tile__$1,meta21054){
return (new clui_om.widgets.tiles.t21053(opts__$1,owner__$1,cursor__$1,color_tile__$1,meta21054));
});

}

return (new clui_om.widgets.tiles.t21053(opts,owner,cursor,color_tile,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),66,new cljs.core.Keyword(null,"end-line","end-line",1837326455),57,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),24,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/widgets/tiles.cljs"], null)));
});
