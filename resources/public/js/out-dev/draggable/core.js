// Compiled by ClojureScript 0.0-2496
goog.provide('draggable.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('cljs.core.async');

draggable.core.IDragStart = (function (){var obj21057 = {};
return obj21057;
})();

draggable.core.drag_start = (function drag_start(this$,event){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.draggable$core$IDragStart$drag_start$arity$2;
} else {
return and__3616__auto__;
}
})()){
return this$.draggable$core$IDragStart$drag_start$arity$2(this$,event);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (draggable.core.drag_start[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (draggable.core.drag_start["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDragStart.drag-start",this$);
}
}
})().call(null,this$,event);
}
});


draggable.core.IDragMove = (function (){var obj21059 = {};
return obj21059;
})();

draggable.core.drag_move = (function drag_move(this$,event){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.draggable$core$IDragMove$drag_move$arity$2;
} else {
return and__3616__auto__;
}
})()){
return this$.draggable$core$IDragMove$drag_move$arity$2(this$,event);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (draggable.core.drag_move[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (draggable.core.drag_move["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDragMove.drag-move",this$);
}
}
})().call(null,this$,event);
}
});


draggable.core.IDragEnd = (function (){var obj21061 = {};
return obj21061;
})();

draggable.core.drag_end = (function drag_end(this$,event){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.draggable$core$IDragEnd$drag_end$arity$2;
} else {
return and__3616__auto__;
}
})()){
return this$.draggable$core$IDragEnd$drag_end$arity$2(this$,event);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (draggable.core.drag_end[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (draggable.core.drag_end["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDragEnd.drag-end",this$);
}
}
})().call(null,this$,event);
}
});

draggable.core._drag_start = (function _drag_start(owner,event){
var node = om.core.get_node.call(null,owner);
var rel_x = (event.pageX - node.offsetLeft);
var rel_y = (event.pageY - node.offsetTop);
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true);

om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"rel-x","rel-x",118889928),rel_x);

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"rel-y","rel-y",-1271884299),rel_y);
});
draggable.core.free_drag = (function free_drag(owner){
if(typeof draggable.core.t21065 !== 'undefined'){
} else {

/**
* @constructor
*/
draggable.core.t21065 = (function (owner,free_drag,meta21066){
this.owner = owner;
this.free_drag = free_drag;
this.meta21066 = meta21066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
draggable.core.t21065.prototype.draggable$core$IDragEnd$ = true;

draggable.core.t21065.prototype.draggable$core$IDragEnd$drag_end$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",1185097613)))){
var rel_y = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"rel-y","rel-y",-1271884299));
var rel_x = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"rel-x","rel-x",118889928));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",1185097613),false);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"ver-value","ver-value",-492891737),(event.pageY - rel_y));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hor-value","hor-value",-471107216),(event.pageX - rel_x));
} else {
return null;
}
});

draggable.core.t21065.prototype.draggable$core$IDragMove$ = true;

draggable.core.t21065.prototype.draggable$core$IDragMove$drag_move$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",1185097613)))){
var rel_y = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"rel-y","rel-y",-1271884299));
var rel_x = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"rel-x","rel-x",118889928));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"ver-value","ver-value",-492891737),(event.pageY - rel_y));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hor-value","hor-value",-471107216),(event.pageX - rel_x));
} else {
return null;
}
});

draggable.core.t21065.prototype.draggable$core$IDragStart$ = true;

draggable.core.t21065.prototype.draggable$core$IDragStart$drag_start$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return draggable.core._drag_start.call(null,self__.owner,event);
});

draggable.core.t21065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21067){
var self__ = this;
var _21067__$1 = this;
return self__.meta21066;
});

draggable.core.t21065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21067,meta21066__$1){
var self__ = this;
var _21067__$1 = this;
return (new draggable.core.t21065(self__.owner,self__.free_drag,meta21066__$1));
});

draggable.core.t21065.cljs$lang$type = true;

draggable.core.t21065.cljs$lang$ctorStr = "draggable.core/t21065";

draggable.core.t21065.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"draggable.core/t21065");
});

draggable.core.__GT_t21065 = (function __GT_t21065(owner__$1,free_drag__$1,meta21066){
return (new draggable.core.t21065(owner__$1,free_drag__$1,meta21066));
});

}

return (new draggable.core.t21065(owner,free_drag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),75,new cljs.core.Keyword(null,"end-line","end-line",1837326455),55,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),37,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/draggable/core.cljs"], null)));
});
draggable.core.nearest_corner = (function nearest_corner(cell_size,x,y,w,h){
var mod_x = cljs.core.mod.call(null,x,cell_size);
var mod_y = cljs.core.mod.call(null,y,cell_size);
var mod_w = (cell_size - cljs.core.mod.call(null,(x + w),cell_size));
var mod_h = (cell_size - cljs.core.mod.call(null,(y + h),cell_size));
var off_x = Math.floor((x / cell_size));
var off_y = Math.floor((y / cell_size));
var px = (off_x * cell_size);
var py = (off_y * cell_size);
var dx = (((off_x + (1)) * cell_size) - w);
var dy = (((off_y + (1)) * cell_size) - h);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mod_x,mod_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mod_w,mod_h], null)], null);
});
draggable.core.grid_snap_coords = (function grid_snap_coords(owner,cell_size,snap_threshold,ev){
var rel_x = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"rel-x","rel-x",118889928));
var rel_y = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"rel-y","rel-y",-1271884299));
var node = om.core.get_node.call(null,owner);
var ev_x = ev.pageX;
var ev_y = ev.pageY;
var w = node.clientWidth;
var h = node.clientHeight;
var vec__21073 = draggable.core.nearest_corner.call(null,cell_size,(ev_x - rel_x),(ev_y - rel_y),w,h);
var vec__21074 = cljs.core.nth.call(null,vec__21073,(0),null);
var px = cljs.core.nth.call(null,vec__21074,(0),null);
var py = cljs.core.nth.call(null,vec__21074,(1),null);
var vec__21075 = cljs.core.nth.call(null,vec__21073,(1),null);
var mod_x = cljs.core.nth.call(null,vec__21075,(0),null);
var mod_y = cljs.core.nth.call(null,vec__21075,(1),null);
var vec__21076 = cljs.core.nth.call(null,vec__21073,(2),null);
var dx = cljs.core.nth.call(null,vec__21076,(0),null);
var dy = cljs.core.nth.call(null,vec__21076,(1),null);
var vec__21077 = cljs.core.nth.call(null,vec__21073,(3),null);
var mod_w = cljs.core.nth.call(null,vec__21077,(0),null);
var mod_h = cljs.core.nth.call(null,vec__21077,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((mod_x < snap_threshold))?px:(((mod_w < snap_threshold))?dx:(ev_x - rel_x)
)),(((mod_y < snap_threshold))?py:(((mod_h < snap_threshold))?dy:(ev_y - rel_y)
))], null);
});
draggable.core.grid_snap_drag = (function grid_snap_drag(owner,cell_size,snap_threshold){
if(typeof draggable.core.t21083 !== 'undefined'){
} else {

/**
* @constructor
*/
draggable.core.t21083 = (function (snap_threshold,cell_size,owner,grid_snap_drag,meta21084){
this.snap_threshold = snap_threshold;
this.cell_size = cell_size;
this.owner = owner;
this.grid_snap_drag = grid_snap_drag;
this.meta21084 = meta21084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
draggable.core.t21083.prototype.draggable$core$IDragEnd$ = true;

draggable.core.t21083.prototype.draggable$core$IDragEnd$drag_end$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",1185097613)))){
var vec__21086 = draggable.core.grid_snap_coords.call(null,self__.owner,self__.cell_size,self__.snap_threshold,event);
var nx = cljs.core.nth.call(null,vec__21086,(0),null);
var ny = cljs.core.nth.call(null,vec__21086,(1),null);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",1185097613),false);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hor-value","hor-value",-471107216),nx);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"ver-value","ver-value",-492891737),ny);
} else {
return null;
}
});

draggable.core.t21083.prototype.draggable$core$IDragMove$ = true;

draggable.core.t21083.prototype.draggable$core$IDragMove$drag_move$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",1185097613)))){
var vec__21087 = draggable.core.grid_snap_coords.call(null,self__.owner,self__.cell_size,self__.snap_threshold,event);
var nx = cljs.core.nth.call(null,vec__21087,(0),null);
var ny = cljs.core.nth.call(null,vec__21087,(1),null);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hor-value","hor-value",-471107216),nx);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"ver-value","ver-value",-492891737),ny);
} else {
return null;
}
});

draggable.core.t21083.prototype.draggable$core$IDragStart$ = true;

draggable.core.t21083.prototype.draggable$core$IDragStart$drag_start$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return draggable.core._drag_start.call(null,self__.owner,event);
});

draggable.core.t21083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21085){
var self__ = this;
var _21085__$1 = this;
return self__.meta21084;
});

draggable.core.t21083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21085,meta21084__$1){
var self__ = this;
var _21085__$1 = this;
return (new draggable.core.t21083(self__.snap_threshold,self__.cell_size,self__.owner,self__.grid_snap_drag,meta21084__$1));
});

draggable.core.t21083.cljs$lang$type = true;

draggable.core.t21083.cljs$lang$ctorStr = "draggable.core/t21083";

draggable.core.t21083.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"draggable.core/t21083");
});

draggable.core.__GT_t21083 = (function __GT_t21083(snap_threshold__$1,cell_size__$1,owner__$1,grid_snap_drag__$1,meta21084){
return (new draggable.core.t21083(snap_threshold__$1,cell_size__$1,owner__$1,grid_snap_drag__$1,meta21084));
});

}

return (new draggable.core.t21083(snap_threshold,cell_size,owner,grid_snap_drag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),50,new cljs.core.Keyword(null,"end-line","end-line",1837326455),118,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),102,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/draggable/core.cljs"], null)));
});
draggable.core.bbox__GT_guideline = (function bbox__GT_guideline(guideline){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hor","hor",2133892),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(guideline),((new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(guideline) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(guideline)) / (2)),(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(guideline) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(guideline))], null),new cljs.core.Keyword(null,"ver","ver",1683769565),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(guideline),((new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(guideline) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(guideline)) / (2)),(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(guideline) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(guideline))], null)], null);
});
draggable.core.guidelines__GT_stops = (function guidelines__GT_stops(guidelines){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hor","hor",2133892),cljs.core.vec.call(null,cljs.core.sort.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"hor","hor",2133892),cljs.core.map.call(null,draggable.core.bbox__GT_guideline,guidelines)))),new cljs.core.Keyword(null,"ver","ver",1683769565),cljs.core.vec.call(null,cljs.core.sort.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"ver","ver",1683769565),cljs.core.map.call(null,draggable.core.bbox__GT_guideline,guidelines))))], null);
});
/**
* @param {...*} var_args
*/
draggable.core.closest_stop = (function() { 
var closest_stop__delegate = function (series,axis_position,p__21088){
var vec__21090 = p__21088;
var pos = cljs.core.nth.call(null,vec__21090,(0),null);
var last_value = cljs.core.nth.call(null,vec__21090,(1),null);
var last_diff = cljs.core.nth.call(null,vec__21090,(2),null);

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,series),pos)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_value,last_diff], null);
} else {
var pos__$1 = (function (){var or__3628__auto__ = pos;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return (0);
}
})();
var cur_val = cljs.core.nth.call(null,series,pos__$1);
var cur_diff = Math.abs.call(null,(axis_position - cur_val));
if(cljs.core.truth_((function (){var and__3616__auto__ = last_value;
if(cljs.core.truth_(and__3616__auto__)){
return (cur_diff > last_diff);
} else {
return and__3616__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_value,last_diff], null);
} else {
return closest_stop.call(null,series,axis_position,(pos__$1 + (1)),cur_val,cur_diff);
}
}
};
var closest_stop = function (series,axis_position,var_args){
var p__21088 = null;
if (arguments.length > 2) {
  p__21088 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return closest_stop__delegate.call(this,series,axis_position,p__21088);};
closest_stop.cljs$lang$maxFixedArity = 2;
closest_stop.cljs$lang$applyTo = (function (arglist__21091){
var series = cljs.core.first(arglist__21091);
arglist__21091 = cljs.core.next(arglist__21091);
var axis_position = cljs.core.first(arglist__21091);
var p__21088 = cljs.core.rest(arglist__21091);
return closest_stop__delegate(series,axis_position,p__21088);
});
closest_stop.cljs$core$IFn$_invoke$arity$variadic = closest_stop__delegate;
return closest_stop;
})()
;
draggable.core.nearest_stops = (function nearest_stops(guidelines,position,magnitude){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [draggable.core.closest_stop.call(null,guidelines,position),draggable.core.closest_stop.call(null,guidelines,(position + (magnitude / (2)))),draggable.core.closest_stop.call(null,guidelines,(position + magnitude))], null);
});
draggable.core.guideline_snap_coords = (function guideline_snap_coords(owner,guidelines,snap_threshold,ev){
var rel_x = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"rel-x","rel-x",118889928));
var rel_y = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"rel-y","rel-y",-1271884299));
var node = om.core.get_node.call(null,owner);
var ev_x = ev.pageX;
var ev_y = ev.pageY;
var w = node.clientWidth;
var h = node.clientHeight;
var stops = draggable.core.guidelines__GT_stops.call(null,guidelines);
var vec__21100 = draggable.core.nearest_stops.call(null,new cljs.core.Keyword(null,"ver","ver",1683769565).cljs$core$IFn$_invoke$arity$1(stops),(ev_x - rel_x),w);
var vec__21101 = cljs.core.nth.call(null,vec__21100,(0),null);
var origin_cx = cljs.core.nth.call(null,vec__21101,(0),null);
var origin_diff_cx = cljs.core.nth.call(null,vec__21101,(1),null);
var vec__21102 = cljs.core.nth.call(null,vec__21100,(1),null);
var center_cx = cljs.core.nth.call(null,vec__21102,(0),null);
var center_diff_cx = cljs.core.nth.call(null,vec__21102,(1),null);
var vec__21103 = cljs.core.nth.call(null,vec__21100,(2),null);
var dest_cx = cljs.core.nth.call(null,vec__21103,(0),null);
var dest_diff_cx = cljs.core.nth.call(null,vec__21103,(1),null);
var vec__21104 = draggable.core.nearest_stops.call(null,new cljs.core.Keyword(null,"hor","hor",2133892).cljs$core$IFn$_invoke$arity$1(stops),(ev_y - rel_y),h);
var vec__21105 = cljs.core.nth.call(null,vec__21104,(0),null);
var origin_cy = cljs.core.nth.call(null,vec__21105,(0),null);
var origin_diff_cy = cljs.core.nth.call(null,vec__21105,(1),null);
var vec__21106 = cljs.core.nth.call(null,vec__21104,(1),null);
var center_cy = cljs.core.nth.call(null,vec__21106,(0),null);
var center_diff_cy = cljs.core.nth.call(null,vec__21106,(1),null);
var vec__21107 = cljs.core.nth.call(null,vec__21104,(2),null);
var dest_cy = cljs.core.nth.call(null,vec__21107,(0),null);
var dest_diff_cy = cljs.core.nth.call(null,vec__21107,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((origin_diff_cx < snap_threshold))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),origin_cx], null):(((center_diff_cx < snap_threshold))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),(center_cx - (w / (2)))], null):(((dest_diff_cx < snap_threshold))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),(dest_cx - w)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),(ev_x - rel_x)], null)
))),(((origin_diff_cy < snap_threshold))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),origin_cy], null):(((center_diff_cy < snap_threshold))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),(center_cy - (h / (2)))], null):(((dest_diff_cy < snap_threshold))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),(dest_cy - h)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),(ev_y - rel_y)], null)
)))], null);
});
draggable.core.guideline_snap_drag = (function guideline_snap_drag(owner,snap_threshold){
if(typeof draggable.core.t21117 !== 'undefined'){
} else {

/**
* @constructor
*/
draggable.core.t21117 = (function (snap_threshold,owner,guideline_snap_drag,meta21118){
this.snap_threshold = snap_threshold;
this.owner = owner;
this.guideline_snap_drag = guideline_snap_drag;
this.meta21118 = meta21118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
draggable.core.t21117.prototype.draggable$core$IDragEnd$ = true;

draggable.core.t21117.prototype.draggable$core$IDragEnd$drag_end$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",1185097613)))){
var vec__21120 = draggable.core.guideline_snap_coords.call(null,self__.owner,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"guidelines","guidelines",91215231)),self__.snap_threshold,event);
var vec__21121 = cljs.core.nth.call(null,vec__21120,(0),null);
var hor_side = cljs.core.nth.call(null,vec__21121,(0),null);
var cx = cljs.core.nth.call(null,vec__21121,(1),null);
var vec__21122 = cljs.core.nth.call(null,vec__21120,(1),null);
var ver_side = cljs.core.nth.call(null,vec__21122,(0),null);
var cy = cljs.core.nth.call(null,vec__21122,(1),null);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",1185097613),false);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hor-value","hor-value",-471107216),cx);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"ver-value","ver-value",-492891737),cy);
} else {
return null;
}
});

draggable.core.t21117.prototype.draggable$core$IDragMove$ = true;

draggable.core.t21117.prototype.draggable$core$IDragMove$drag_move$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"dragging","dragging",1185097613)))){
var vec__21123 = draggable.core.guideline_snap_coords.call(null,self__.owner,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"guidelines","guidelines",91215231)),self__.snap_threshold,event);
var vec__21124 = cljs.core.nth.call(null,vec__21123,(0),null);
var hor_side = cljs.core.nth.call(null,vec__21124,(0),null);
var cx = cljs.core.nth.call(null,vec__21124,(1),null);
var vec__21125 = cljs.core.nth.call(null,vec__21123,(1),null);
var ver_side = cljs.core.nth.call(null,vec__21125,(0),null);
var cy = cljs.core.nth.call(null,vec__21125,(1),null);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hor-value","hor-value",-471107216),cx);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"ver-value","ver-value",-492891737),cy);
} else {
return null;
}
});

draggable.core.t21117.prototype.draggable$core$IDragStart$ = true;

draggable.core.t21117.prototype.draggable$core$IDragStart$drag_start$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return draggable.core._drag_start.call(null,self__.owner,event);
});

draggable.core.t21117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21119){
var self__ = this;
var _21119__$1 = this;
return self__.meta21118;
});

draggable.core.t21117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21119,meta21118__$1){
var self__ = this;
var _21119__$1 = this;
return (new draggable.core.t21117(self__.snap_threshold,self__.owner,self__.guideline_snap_drag,meta21118__$1));
});

draggable.core.t21117.cljs$lang$type = true;

draggable.core.t21117.cljs$lang$ctorStr = "draggable.core/t21117";

draggable.core.t21117.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"draggable.core/t21117");
});

draggable.core.__GT_t21117 = (function __GT_t21117(snap_threshold__$1,owner__$1,guideline_snap_drag__$1,meta21118){
return (new draggable.core.t21117(snap_threshold__$1,owner__$1,guideline_snap_drag__$1,meta21118));
});

}

return (new draggable.core.t21117(snap_threshold,owner,guideline_snap_drag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),50,new cljs.core.Keyword(null,"end-line","end-line",1837326455),199,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),181,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/draggable/core.cljs"], null)));
});
draggable.core.draggable = (function draggable__$1(data,owner,opts){
if(typeof draggable.core.t21201 !== 'undefined'){
} else {

/**
* @constructor
*/
draggable.core.t21201 = (function (opts,owner,data,draggable,meta21202){
this.opts = opts;
this.owner = owner;
this.data = data;
this.draggable = draggable;
this.meta21202 = meta21202;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
draggable.core.t21201.prototype.om$core$IRender$ = true;

draggable.core.t21201.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dragger = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"dragger","dragger",2062265815));
return React.DOM.div({"onMouseUp": ((function (dragger,___$1){
return (function (p1__21126_SHARP_){
return draggable.core.drag_end.call(null,dragger,p1__21126_SHARP_);
});})(dragger,___$1))
, "onMouseDown": ((function (dragger,___$1){
return (function (ev){
ev.preventDefault();

return draggable.core.drag_start.call(null,dragger,ev);
});})(dragger,___$1))
, "style": cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"hor-value","hor-value",-471107216)),new cljs.core.Keyword(null,"top","top",-1856271961),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"ver-value","ver-value",-492891737)),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null)), "className": "draggable"},om.core.build.call(null,new cljs.core.Keyword(null,"sub-com","sub-com",-129419304).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"sub-com-data","sub-com-data",468328296).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null)));
});

draggable.core.t21201.prototype.om$core$IWillMount$ = true;

draggable.core.t21201.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hor-side","hor-side",1175214021),new cljs.core.Keyword(null,"left","left",-399115937));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hor-value","hor-value",-471107216),(function (){var or__3628__auto__ = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(self__.data);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return (0);
}
})());

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"ver-side","ver-side",-1863520549),new cljs.core.Keyword(null,"top","top",-1856271961));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"ver-value","ver-value",-492891737),(function (){var or__3628__auto__ = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(self__.data);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return (0);
}
})());

var move = cljs.core.async.tap.call(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"mult","mult",1466794774)], null)),cljs.core.async.chan.call(null));
var up = cljs.core.async.tap.call(null,cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"mult","mult",1466794774)], null)),cljs.core.async.chan.call(null));
var dragger_fn = new cljs.core.Keyword(null,"dragger-fn","dragger-fn",456240575).cljs$core$IFn$_invoke$arity$1(self__.opts);
var dragger = dragger_fn.call(null,self__.owner,self__.data);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dragger","dragger",2062265815),dragger);

var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,move,up,dragger_fn,dragger,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,move,up,dragger_fn,dragger,___$1){
return (function (state_21246){
var state_val_21247 = (state_21246[(1)]);
if((state_val_21247 === (7))){
var inst_21215 = (state_21246[(7)]);
var inst_21217 = (state_21246[(8)]);
var inst_21215__$1 = (state_21246[(2)]);
var inst_21216 = cljs.core.nth.call(null,inst_21215__$1,(0),null);
var inst_21217__$1 = cljs.core.nth.call(null,inst_21215__$1,(1),null);
var inst_21218 = cljs.core._EQ_.call(null,inst_21217__$1,move);
var state_21246__$1 = (function (){var statearr_21248 = state_21246;
(statearr_21248[(9)] = inst_21216);

(statearr_21248[(7)] = inst_21215__$1);

(statearr_21248[(8)] = inst_21217__$1);

return statearr_21248;
})();
if(inst_21218){
var statearr_21249_21275 = state_21246__$1;
(statearr_21249_21275[(1)] = (8));

} else {
var statearr_21250_21276 = state_21246__$1;
(statearr_21250_21276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (1))){
var state_21246__$1 = state_21246;
var statearr_21251_21277 = state_21246__$1;
(statearr_21251_21277[(2)] = null);

(statearr_21251_21277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (4))){
var inst_21211 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21212 = [move,up];
var inst_21213 = (new cljs.core.PersistentVector(null,2,(5),inst_21211,inst_21212,null));
var state_21246__$1 = state_21246;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21246__$1,(7),inst_21213);
} else {
if((state_val_21247 === (15))){
var state_21246__$1 = state_21246;
var statearr_21252_21278 = state_21246__$1;
(statearr_21252_21278[(2)] = null);

(statearr_21252_21278[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (13))){
var inst_21236 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
var statearr_21253_21279 = state_21246__$1;
(statearr_21253_21279[(2)] = inst_21236);

(statearr_21253_21279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (6))){
var inst_21242 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
var statearr_21254_21280 = state_21246__$1;
(statearr_21254_21280[(2)] = inst_21242);

(statearr_21254_21280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (3))){
var inst_21244 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21246__$1,inst_21244);
} else {
if((state_val_21247 === (12))){
var inst_21217 = (state_21246[(8)]);
var inst_21230 = cljs.core._EQ_.call(null,inst_21217,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_21246__$1 = state_21246;
if(inst_21230){
var statearr_21255_21281 = state_21246__$1;
(statearr_21255_21281[(1)] = (14));

} else {
var statearr_21256_21282 = state_21246__$1;
(statearr_21256_21282[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (2))){
var state_21246__$1 = state_21246;
var statearr_21257_21283 = state_21246__$1;
(statearr_21257_21283[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (11))){
var inst_21215 = (state_21246[(7)]);
var inst_21227 = cljs.core.nth.call(null,inst_21215,(0),null);
var inst_21228 = draggable.core.drag_end.call(null,dragger,inst_21227);
var state_21246__$1 = state_21246;
var statearr_21259_21284 = state_21246__$1;
(statearr_21259_21284[(2)] = inst_21228);

(statearr_21259_21284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (9))){
var inst_21217 = (state_21246[(8)]);
var inst_21224 = cljs.core._EQ_.call(null,inst_21217,up);
var state_21246__$1 = state_21246;
if(inst_21224){
var statearr_21260_21285 = state_21246__$1;
(statearr_21260_21285[(1)] = (11));

} else {
var statearr_21261_21286 = state_21246__$1;
(statearr_21261_21286[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (5))){
var state_21246__$1 = state_21246;
var statearr_21262_21287 = state_21246__$1;
(statearr_21262_21287[(2)] = null);

(statearr_21262_21287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (14))){
var inst_21216 = (state_21246[(9)]);
var state_21246__$1 = state_21246;
var statearr_21263_21288 = state_21246__$1;
(statearr_21263_21288[(2)] = inst_21216);

(statearr_21263_21288[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (16))){
var inst_21234 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
var statearr_21264_21289 = state_21246__$1;
(statearr_21264_21289[(2)] = inst_21234);

(statearr_21264_21289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (10))){
var inst_21238 = (state_21246[(2)]);
var state_21246__$1 = (function (){var statearr_21265 = state_21246;
(statearr_21265[(10)] = inst_21238);

return statearr_21265;
})();
var statearr_21266_21290 = state_21246__$1;
(statearr_21266_21290[(2)] = null);

(statearr_21266_21290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (8))){
var inst_21215 = (state_21246[(7)]);
var inst_21221 = cljs.core.nth.call(null,inst_21215,(0),null);
var inst_21222 = draggable.core.drag_move.call(null,dragger,inst_21221);
var state_21246__$1 = state_21246;
var statearr_21267_21291 = state_21246__$1;
(statearr_21267_21291[(2)] = inst_21222);

(statearr_21267_21291[(1)] = (10));


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
}
}
}
});})(c__6508__auto__,move,up,dragger_fn,dragger,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto__,move,up,dragger_fn,dragger,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_21271 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21271[(0)] = state_machine__6494__auto__);

(statearr_21271[(1)] = (1));

return statearr_21271;
});
var state_machine__6494__auto____1 = (function (state_21246){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_21246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e21272){if((e21272 instanceof Object)){
var ex__6497__auto__ = e21272;
var statearr_21273_21292 = state_21246;
(statearr_21273_21292[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21293 = state_21246;
state_21246 = G__21293;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_21246){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_21246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,move,up,dragger_fn,dragger,___$1))
})();
var state__6510__auto__ = (function (){var statearr_21274 = f__6509__auto__.call(null);
(statearr_21274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_21274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,move,up,dragger_fn,dragger,___$1))
);

return c__6508__auto__;
});

draggable.core.t21201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21203){
var self__ = this;
var _21203__$1 = this;
return self__.meta21202;
});

draggable.core.t21201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21203,meta21202__$1){
var self__ = this;
var _21203__$1 = this;
return (new draggable.core.t21201(self__.opts,self__.owner,self__.data,self__.draggable,meta21202__$1));
});

draggable.core.t21201.cljs$lang$type = true;

draggable.core.t21201.cljs$lang$ctorStr = "draggable.core/t21201";

draggable.core.t21201.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"draggable.core/t21201");
});

draggable.core.__GT_t21201 = (function __GT_t21201(opts__$1,owner__$1,data__$1,draggable__$2,meta21202){
return (new draggable.core.t21201(opts__$1,owner__$1,data__$1,draggable__$2,meta21202));
});

}

return (new draggable.core.t21201(opts,owner,data,draggable__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),82,new cljs.core.Keyword(null,"end-line","end-line",1837326455),235,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),206,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/draggable/core.cljs"], null)));
});
