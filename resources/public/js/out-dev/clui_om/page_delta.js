// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.page_delta');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
clui_om.page_delta.colors = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"red","red",-969428204),"#FF0000",new cljs.core.Keyword(null,"green","green",-945526839),"#00FF00",new cljs.core.Keyword(null,"blue","blue",-622100620),"#0000FF",new cljs.core.Keyword(null,"orange","orange",73816386),"#CC6600",new cljs.core.Keyword(null,"yellow","yellow",-881035449),"#CCCC00",new cljs.core.Keyword(null,"purple","purple",-876021126),"#CC00CC"], null);
clui_om.page_delta.glyphs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.Keyword(null,"bars","bars",-586907130),new cljs.core.Keyword(null,"phone","phone",-763596057),new cljs.core.Keyword(null,"tower","tower",1202578472),new cljs.core.Keyword(null,"cloud","cloud",-1976521303),new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.Keyword(null,"book","book",-918152214),new cljs.core.Keyword(null,"magnet","magnet",585093324),new cljs.core.Keyword(null,"leaf","leaf",1306118732),new cljs.core.Keyword(null,"glass","glass",1652756718),new cljs.core.Keyword(null,"cog","cog",1782475608),new cljs.core.Keyword(null,"tag","tag",-1290361223)],["tree-conifer","stats","phone-alt","tower","cloud","flag","book","magnet","leaf","glass","cog","tag"]);
clui_om.page_delta.sizes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"small","small",2133478704),0.8,new cljs.core.Keyword(null,"medium","medium",-1864319384),(1),new cljs.core.Keyword(null,"large","large",-196820544),1.5,new cljs.core.Keyword(null,"jumbo","jumbo",-96576959),(2)], null);
/**
* Get a randomly-generated map of icon settings
*/
clui_om.page_delta.random_icon = (function random_icon(){
var rand_color = cljs.core.rand_nth.call(null,cljs.core.keys.call(null,clui_om.page_delta.colors));
var rand_size = cljs.core.rand_nth.call(null,cljs.core.keys.call(null,clui_om.page_delta.sizes));
var rand_glyph = cljs.core.rand_nth.call(null,cljs.core.keys.call(null,clui_om.page_delta.glyphs));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),rand_color,new cljs.core.Keyword(null,"size","size",1098693007),rand_size,new cljs.core.Keyword(null,"glyph","glyph",2119448117),rand_glyph,new cljs.core.Keyword(null,"pinned","pinned",-1216085339),false,new cljs.core.Keyword(null,"entering","entering",-413471949),true], null);
});
clui_om.page_delta.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"greeting","greeting",462222107),"Hello Delta!",new cljs.core.Keyword(null,"sizes","sizes",-273528126),clui_om.page_delta.sizes,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.first.call(null,cljs.core.keys.call(null,clui_om.page_delta.sizes)),new cljs.core.Keyword(null,"colors","colors",1157174732),clui_om.page_delta.colors,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.first.call(null,cljs.core.keys.call(null,clui_om.page_delta.colors)),new cljs.core.Keyword(null,"glyphs","glyphs",-533936706),clui_om.page_delta.glyphs,new cljs.core.Keyword(null,"glyph","glyph",2119448117),cljs.core.first.call(null,cljs.core.keys.call(null,clui_om.page_delta.glyphs)),new cljs.core.Keyword(null,"icons","icons",-297140977),cljs.core.vec.call(null,cljs.core.take.call(null,(20),cljs.core.repeatedly.call(null,clui_om.page_delta.random_icon)))], null));
clui_om.page_delta.ALPHA_ROOT = document.getElementById("alpha-div");
clui_om.page_delta.icon_outer_props = (function icon_outer_props(p__17638,state){
var map__17640 = p__17638;
var map__17640__$1 = ((cljs.core.seq_QMARK_.call(null,map__17640))?cljs.core.apply.call(null,cljs.core.hash_map,map__17640):map__17640);
var exiting = cljs.core.get.call(null,map__17640__$1,new cljs.core.Keyword(null,"exiting","exiting",1968554212));
var entering = cljs.core.get.call(null,map__17640__$1,new cljs.core.Keyword(null,"entering","entering",-413471949));
var enter = (cljs.core.truth_(entering)?" enterLeft":null);
var exit = (cljs.core.truth_(exiting)?" exitLeft":null);
var stable = (((cljs.core.not.call(null,entering)) && (cljs.core.not.call(null,exiting)))?" onStage":null);
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("iconOuter"),cljs.core.str(enter),cljs.core.str(exit),cljs.core.str(stable)].join('')], null));
});
clui_om.page_delta.icon_inner_style = (function icon_inner_style(p__17641,state){
var map__17643 = p__17641;
var map__17643__$1 = ((cljs.core.seq_QMARK_.call(null,map__17643))?cljs.core.apply.call(null,cljs.core.hash_map,map__17643):map__17643);
var pinned = cljs.core.get.call(null,map__17643__$1,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
var color = cljs.core.get.call(null,map__17643__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.call(null,map__17643__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var hovering = state.call(null,new cljs.core.Keyword(null,"hovering","hovering",-571536091));
var htmlcolor = color.call(null,clui_om.page_delta.colors);
var startsize = size.call(null,clui_om.page_delta.sizes);
var final_size = (cljs.core.truth_((function (){var or__3628__auto__ = pinned;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return hovering;
}
})())?((3) * startsize):startsize);
var final_background = (cljs.core.truth_(pinned)?htmlcolor:"transparent");
var final_color = (cljs.core.truth_(pinned)?"#000000":htmlcolor);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),[cljs.core.str(final_size),cljs.core.str("px solid "),cljs.core.str(final_color)].join(''),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),final_background], null);
});
clui_om.page_delta.icon_style = (function icon_style(p__17644,state){
var map__17646 = p__17644;
var map__17646__$1 = ((cljs.core.seq_QMARK_.call(null,map__17646))?cljs.core.apply.call(null,cljs.core.hash_map,map__17646):map__17646);
var pinned = cljs.core.get.call(null,map__17646__$1,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
var color = cljs.core.get.call(null,map__17646__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.call(null,map__17646__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var hovering = state.call(null,new cljs.core.Keyword(null,"hovering","hovering",-571536091));
var htmlcolor = color.call(null,clui_om.page_delta.colors);
var fontsize = size.call(null,clui_om.page_delta.sizes);
var final_color = (cljs.core.truth_(pinned)?"#000000":htmlcolor);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),final_color,new cljs.core.Keyword(null,"fontSize","fontSize",919623033),[cljs.core.str(fontsize),cljs.core.str("em")].join('')], null);
});
clui_om.page_delta.icon_classes = (function icon_classes(p__17647,state){
var map__17649 = p__17647;
var map__17649__$1 = ((cljs.core.seq_QMARK_.call(null,map__17649))?cljs.core.apply.call(null,cljs.core.hash_map,map__17649):map__17649);
var glyph = cljs.core.get.call(null,map__17649__$1,new cljs.core.Keyword(null,"glyph","glyph",2119448117));
var hovering = state.call(null,new cljs.core.Keyword(null,"hovering","hovering",-571536091));
var final_glyph = clui_om.page_delta.glyphs.call(null,glyph);
var final_anim = (cljs.core.truth_(hovering)?"pulse":"bigEntrance");
return [cljs.core.str("glyphicon glyphicon-"),cljs.core.str(final_glyph),cljs.core.str(" "),cljs.core.str(final_anim)].join('');
});
/**
* Generate a map with the appropriate CSS for an object of the given
* x and y coordinates, with the given width (w) and height (h)
*/
clui_om.page_delta.sprite_dims = (function sprite_dims(x,y,w,h){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),h,new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null);
});
/**
* Get the map of settings for a new icon based on the app.
* The app should be deref'd (or not!) before sending it as an argument,
* because only the calling function has any clue whether or not we are
* in the render phase.
*/
clui_om.page_delta.generate_new_icon = (function generate_new_icon(app){
var new_color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(app);
var new_size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(app);
var new_glyph = new cljs.core.Keyword(null,"glyph","glyph",2119448117).cljs$core$IFn$_invoke$arity$1(app);
var msg = [cljs.core.str("(new-icon):: using "),cljs.core.str(new_color),cljs.core.str(", "),cljs.core.str(new_glyph),cljs.core.str(", "),cljs.core.str(new_size)].join('');
console.log(msg);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),new_color,new cljs.core.Keyword(null,"size","size",1098693007),new_size,new cljs.core.Keyword(null,"glyph","glyph",2119448117),new_glyph,new cljs.core.Keyword(null,"pinned","pinned",-1216085339),false,new cljs.core.Keyword(null,"entering","entering",-413471949),true], null);
});
/**
* Given a list of target icons, a keyword and a new value, return an updated
* vector with that kw updated for each icons, but only when :pinned is truthy
*/
clui_om.page_delta.update_pinned = (function update_pinned(icons,kw,new$){
return cljs.core.mapv.call(null,(function (p1__17650_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(p1__17650_SHARP_))){
return cljs.core.assoc.call(null,p1__17650_SHARP_,kw,new$);
} else {
return p1__17650_SHARP_;
}
}),icons);
});
/**
* A component which displays a bootstrap icon at an arbitrary size and color.
* The main initial behavior will be an entry and exit animation. Later on we may
* upgrade it to add the ability to be selected, so that the main DELETE toolbar
* button deletes all of the selected icons.
*/
clui_om.page_delta.icon = (function icon(cursor,owner,opts){
if(typeof clui_om.page_delta.t17722 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_delta.t17722 = (function (opts,owner,cursor,icon,meta17723){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.icon = icon;
this.meta17723 = meta17723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_delta.t17722.prototype.om$core$IRenderState$ = true;

clui_om.page_delta.t17722.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__17725){
var self__ = this;
var map__17726 = p__17725;
var map__17726__$1 = ((cljs.core.seq_QMARK_.call(null,map__17726))?cljs.core.apply.call(null,cljs.core.hash_map,map__17726):map__17726);
var state = map__17726__$1;
var out = cljs.core.get.call(null,map__17726__$1,new cljs.core.Keyword(null,"out","out",-910545517));
var over = cljs.core.get.call(null,map__17726__$1,new cljs.core.Keyword(null,"over","over",192553051));
var clicks = cljs.core.get.call(null,map__17726__$1,new cljs.core.Keyword(null,"clicks","clicks",673274951));
var ___$1 = this;
return React.DOM.div(clui_om.page_delta.icon_outer_props.call(null,self__.cursor,state),React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),"iconInner",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,map__17726,map__17726__$1,state,out,over,clicks){
return (function (p1__17651_SHARP_){
return cljs.core.async.put_BANG_.call(null,clicks,p1__17651_SHARP_);
});})(___$1,map__17726,map__17726__$1,state,out,over,clicks))
,new cljs.core.Keyword(null,"onMouseOver","onMouseOver",1787360977),((function (___$1,map__17726,map__17726__$1,state,out,over,clicks){
return (function (p1__17652_SHARP_){
return cljs.core.async.put_BANG_.call(null,over,p1__17652_SHARP_);
});})(___$1,map__17726,map__17726__$1,state,out,over,clicks))
,new cljs.core.Keyword(null,"onMouseOut","onMouseOut",1953812864),((function (___$1,map__17726,map__17726__$1,state,out,over,clicks){
return (function (p1__17653_SHARP_){
return cljs.core.async.put_BANG_.call(null,out,p1__17653_SHARP_);
});})(___$1,map__17726,map__17726__$1,state,out,over,clicks))
,new cljs.core.Keyword(null,"style","style",-496642736),clui_om.page_delta.icon_inner_style.call(null,self__.cursor,state)], null)),React.DOM.div({"className": "iconCell"},React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),clui_om.page_delta.icon_classes.call(null,self__.cursor,state),new cljs.core.Keyword(null,"style","style",-496642736),clui_om.page_delta.icon_style.call(null,self__.cursor,state)], null))))));
});

clui_om.page_delta.t17722.prototype.om$core$IWillMount$ = true;

clui_om.page_delta.t17722.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var clicks = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"clicks","clicks",673274951));
var over = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"over","over",192553051));
var out = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"out","out",-910545517));
var c__6508__auto___17790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___17790,clicks,over,out,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___17790,clicks,over,out,___$1){
return (function (state_17738){
var state_val_17739 = (state_17738[(1)]);
if((state_val_17739 === (4))){
var inst_17729 = (state_17738[(2)]);
var inst_17730 = cljs.core.deref.call(null,self__.cursor);
var inst_17731 = new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(inst_17730);
var inst_17732 = cljs.core.not.call(null,inst_17731);
var inst_17733 = om.core.update_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"pinned","pinned",-1216085339),inst_17732);
var state_17738__$1 = (function (){var statearr_17740 = state_17738;
(statearr_17740[(7)] = inst_17729);

(statearr_17740[(8)] = inst_17733);

return statearr_17740;
})();
var statearr_17741_17791 = state_17738__$1;
(statearr_17741_17791[(2)] = null);

(statearr_17741_17791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17739 === (3))){
var inst_17736 = (state_17738[(2)]);
var state_17738__$1 = state_17738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17738__$1,inst_17736);
} else {
if((state_val_17739 === (2))){
var state_17738__$1 = state_17738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17738__$1,(4),clicks);
} else {
if((state_val_17739 === (1))){
var state_17738__$1 = state_17738;
var statearr_17742_17792 = state_17738__$1;
(statearr_17742_17792[(2)] = null);

(statearr_17742_17792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6508__auto___17790,clicks,over,out,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto___17790,clicks,over,out,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_17746 = [null,null,null,null,null,null,null,null,null];
(statearr_17746[(0)] = state_machine__6494__auto__);

(statearr_17746[(1)] = (1));

return statearr_17746;
});
var state_machine__6494__auto____1 = (function (state_17738){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_17738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e17747){if((e17747 instanceof Object)){
var ex__6497__auto__ = e17747;
var statearr_17748_17793 = state_17738;
(statearr_17748_17793[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17794 = state_17738;
state_17738 = G__17794;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_17738){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_17738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___17790,clicks,over,out,___$1))
})();
var state__6510__auto__ = (function (){var statearr_17749 = f__6509__auto__.call(null);
(statearr_17749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___17790);

return statearr_17749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___17790,clicks,over,out,___$1))
);


var c__6508__auto___17795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___17795,clicks,over,out,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___17795,clicks,over,out,___$1){
return (function (state_17758){
var state_val_17759 = (state_17758[(1)]);
if((state_val_17759 === (4))){
var inst_17752 = (state_17758[(2)]);
var inst_17753 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hovering","hovering",-571536091),true);
var state_17758__$1 = (function (){var statearr_17760 = state_17758;
(statearr_17760[(7)] = inst_17752);

(statearr_17760[(8)] = inst_17753);

return statearr_17760;
})();
var statearr_17761_17796 = state_17758__$1;
(statearr_17761_17796[(2)] = null);

(statearr_17761_17796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17759 === (3))){
var inst_17756 = (state_17758[(2)]);
var state_17758__$1 = state_17758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17758__$1,inst_17756);
} else {
if((state_val_17759 === (2))){
var state_17758__$1 = state_17758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17758__$1,(4),over);
} else {
if((state_val_17759 === (1))){
var state_17758__$1 = state_17758;
var statearr_17762_17797 = state_17758__$1;
(statearr_17762_17797[(2)] = null);

(statearr_17762_17797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6508__auto___17795,clicks,over,out,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto___17795,clicks,over,out,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_17766 = [null,null,null,null,null,null,null,null,null];
(statearr_17766[(0)] = state_machine__6494__auto__);

(statearr_17766[(1)] = (1));

return statearr_17766;
});
var state_machine__6494__auto____1 = (function (state_17758){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_17758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e17767){if((e17767 instanceof Object)){
var ex__6497__auto__ = e17767;
var statearr_17768_17798 = state_17758;
(statearr_17768_17798[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17799 = state_17758;
state_17758 = G__17799;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_17758){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_17758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___17795,clicks,over,out,___$1))
})();
var state__6510__auto__ = (function (){var statearr_17769 = f__6509__auto__.call(null);
(statearr_17769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___17795);

return statearr_17769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___17795,clicks,over,out,___$1))
);


var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,clicks,over,out,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,clicks,over,out,___$1){
return (function (state_17778){
var state_val_17779 = (state_17778[(1)]);
if((state_val_17779 === (4))){
var inst_17772 = (state_17778[(2)]);
var inst_17773 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hovering","hovering",-571536091),false);
var state_17778__$1 = (function (){var statearr_17780 = state_17778;
(statearr_17780[(7)] = inst_17772);

(statearr_17780[(8)] = inst_17773);

return statearr_17780;
})();
var statearr_17781_17800 = state_17778__$1;
(statearr_17781_17800[(2)] = null);

(statearr_17781_17800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17779 === (3))){
var inst_17776 = (state_17778[(2)]);
var state_17778__$1 = state_17778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17778__$1,inst_17776);
} else {
if((state_val_17779 === (2))){
var state_17778__$1 = state_17778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17778__$1,(4),out);
} else {
if((state_val_17779 === (1))){
var state_17778__$1 = state_17778;
var statearr_17782_17801 = state_17778__$1;
(statearr_17782_17801[(2)] = null);

(statearr_17782_17801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6508__auto__,clicks,over,out,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto__,clicks,over,out,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_17786 = [null,null,null,null,null,null,null,null,null];
(statearr_17786[(0)] = state_machine__6494__auto__);

(statearr_17786[(1)] = (1));

return statearr_17786;
});
var state_machine__6494__auto____1 = (function (state_17778){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_17778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e17787){if((e17787 instanceof Object)){
var ex__6497__auto__ = e17787;
var statearr_17788_17802 = state_17778;
(statearr_17788_17802[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17803 = state_17778;
state_17778 = G__17803;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_17778){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_17778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,clicks,over,out,___$1))
})();
var state__6510__auto__ = (function (){var statearr_17789 = f__6509__auto__.call(null);
(statearr_17789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_17789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,clicks,over,out,___$1))
);

return c__6508__auto__;
});

clui_om.page_delta.t17722.prototype.om$core$IInitState$ = true;

clui_om.page_delta.t17722.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hovering","hovering",-571536091),false,new cljs.core.Keyword(null,"clicks","clicks",673274951),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"over","over",192553051),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.async.chan.call(null)], null);
});

clui_om.page_delta.t17722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17724){
var self__ = this;
var _17724__$1 = this;
return self__.meta17723;
});

clui_om.page_delta.t17722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17724,meta17723__$1){
var self__ = this;
var _17724__$1 = this;
return (new clui_om.page_delta.t17722(self__.opts,self__.owner,self__.cursor,self__.icon,meta17723__$1));
});

clui_om.page_delta.t17722.cljs$lang$type = true;

clui_om.page_delta.t17722.cljs$lang$ctorStr = "clui-om.page-delta/t17722";

clui_om.page_delta.t17722.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-delta/t17722");
});

clui_om.page_delta.__GT_t17722 = (function __GT_t17722(opts__$1,owner__$1,cursor__$1,icon__$1,meta17723){
return (new clui_om.page_delta.t17722(opts__$1,owner__$1,cursor__$1,icon__$1,meta17723));
});

}

return (new clui_om.page_delta.t17722(opts,owner,cursor,icon,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),94,new cljs.core.Keyword(null,"end-line","end-line",1837326455),176,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),138,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_delta.cljs"], null)));
});
clui_om.page_delta.parse_choice = (function parse_choice(e,channel){
var choice = e.target.value;
var kw = cljs.core.keyword.call(null,choice);
console.log([cljs.core.str("(fn parse-choice):: "),cljs.core.str(kw)].join(''));

return cljs.core.async.put_BANG_.call(null,channel,kw);
});
/**
* A component that takes a map of choices as the cursor, along with a
* core.async channel inside the options map. The component shows a
* complete HTML SELECT element with all of the choices. When the user
* makes a selection, the appropriate keyword is placed on the channel.
*/
clui_om.page_delta.chooser = (function chooser(choices,owner,p__17806){
var map__17811 = p__17806;
var map__17811__$1 = ((cljs.core.seq_QMARK_.call(null,map__17811))?cljs.core.apply.call(null,cljs.core.hash_map,map__17811):map__17811);
var channel = cljs.core.get.call(null,map__17811__$1,new cljs.core.Keyword(null,"channel","channel",734187692));
if(typeof clui_om.page_delta.t17812 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_delta.t17812 = (function (channel,map__17811,p__17806,owner,choices,chooser,meta17813){
this.channel = channel;
this.map__17811 = map__17811;
this.p__17806 = p__17806;
this.owner = owner;
this.choices = choices;
this.chooser = chooser;
this.meta17813 = meta17813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_delta.t17812.prototype.om$core$IRender$ = true;

clui_om.page_delta.t17812.prototype.om$core$IRender$render$arity$1 = ((function (map__17811,map__17811__$1,channel){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.select,{"onChange": ((function (___$1,map__17811,map__17811__$1,channel){
return (function (p1__17804_SHARP_){
return clui_om.page_delta.parse_choice.call(null,p1__17804_SHARP_,self__.channel);
});})(___$1,map__17811,map__17811__$1,channel))
},cljs.core.map.call(null,((function (___$1,map__17811,map__17811__$1,channel){
return (function (p1__17805_SHARP_){
return om.dom.option.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,p1__17805_SHARP_)], null)),clojure.string.capitalize.call(null,cljs.core.name.call(null,p1__17805_SHARP_)));
});})(___$1,map__17811,map__17811__$1,channel))
,cljs.core.keys.call(null,self__.choices)));
});})(map__17811,map__17811__$1,channel))
;

clui_om.page_delta.t17812.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17811,map__17811__$1,channel){
return (function (_17814){
var self__ = this;
var _17814__$1 = this;
return self__.meta17813;
});})(map__17811,map__17811__$1,channel))
;

clui_om.page_delta.t17812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17811,map__17811__$1,channel){
return (function (_17814,meta17813__$1){
var self__ = this;
var _17814__$1 = this;
return (new clui_om.page_delta.t17812(self__.channel,self__.map__17811,self__.p__17806,self__.owner,self__.choices,self__.chooser,meta17813__$1));
});})(map__17811,map__17811__$1,channel))
;

clui_om.page_delta.t17812.cljs$lang$type = true;

clui_om.page_delta.t17812.cljs$lang$ctorStr = "clui-om.page-delta/t17812";

clui_om.page_delta.t17812.cljs$lang$ctorPrWriter = ((function (map__17811,map__17811__$1,channel){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-delta/t17812");
});})(map__17811,map__17811__$1,channel))
;

clui_om.page_delta.__GT_t17812 = ((function (map__17811,map__17811__$1,channel){
return (function __GT_t17812(channel__$1,map__17811__$2,p__17806__$1,owner__$1,choices__$1,chooser__$1,meta17813){
return (new clui_om.page_delta.t17812(channel__$1,map__17811__$2,p__17806__$1,owner__$1,choices__$1,chooser__$1,meta17813));
});})(map__17811,map__17811__$1,channel))
;

}

return (new clui_om.page_delta.t17812(channel,map__17811__$1,p__17806,owner,choices,chooser,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),37,new cljs.core.Keyword(null,"end-line","end-line",1837326455),196,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),190,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_delta.cljs"], null)));
});
/**
* A component that displays a set of controls for this demonstration, composed
* of several choosers (one each for color, icon type, and size, plus two
* additional ones for the type of entrance and exit animations), an ADD
* button (which adds an icon of that type to the global app state), and a DELETE
* button (which only appears when the global app state has >0 icons, and which
* always deletes the last icon. Later on we may make the delete button more
* sophisticated (i.e. remaining disabled unless at least one icon is selected,
* and then deleting all of the selected icons at once).
*/
clui_om.page_delta.toolbar = (function toolbar(cursor,owner,opts){
if(typeof clui_om.page_delta.t18026 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_delta.t18026 = (function (opts,owner,cursor,toolbar,meta18027){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.toolbar = toolbar;
this.meta18027 = meta18027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_delta.t18026.prototype.om$core$IRenderState$ = true;

clui_om.page_delta.t18026.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18029){
var self__ = this;
var map__18030 = p__18029;
var map__18030__$1 = ((cljs.core.seq_QMARK_.call(null,map__18030))?cljs.core.apply.call(null,cljs.core.hash_map,map__18030):map__18030);
var none_chan = cljs.core.get.call(null,map__18030__$1,new cljs.core.Keyword(null,"none-chan","none-chan",-1282466006));
var all_chan = cljs.core.get.call(null,map__18030__$1,new cljs.core.Keyword(null,"all-chan","all-chan",-875476141));
var del_chan = cljs.core.get.call(null,map__18030__$1,new cljs.core.Keyword(null,"del-chan","del-chan",-1918627367));
var add_chan = cljs.core.get.call(null,map__18030__$1,new cljs.core.Keyword(null,"add-chan","add-chan",-2024929221));
var rand_chan = cljs.core.get.call(null,map__18030__$1,new cljs.core.Keyword(null,"rand-chan","rand-chan",1192373235));
var size_chan = cljs.core.get.call(null,map__18030__$1,new cljs.core.Keyword(null,"size-chan","size-chan",-406343470));
var color_chan = cljs.core.get.call(null,map__18030__$1,new cljs.core.Keyword(null,"color-chan","color-chan",-232607946));
var glyph_chan = cljs.core.get.call(null,map__18030__$1,new cljs.core.Keyword(null,"glyph-chan","glyph-chan",1397449693));
var ___$1 = this;
return React.DOM.div({"className": "toolbar"},om.core.build.call(null,clui_om.page_delta.chooser,new cljs.core.Keyword(null,"glyphs","glyphs",-533936706).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),glyph_chan], null)], null)),om.core.build.call(null,clui_om.page_delta.chooser,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),color_chan], null)], null)),om.core.build.call(null,clui_om.page_delta.chooser,new cljs.core.Keyword(null,"sizes","sizes",-273528126).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),size_chan], null)], null)),React.DOM.button({"onClick": ((function (___$1,map__18030,map__18030__$1,none_chan,all_chan,del_chan,add_chan,rand_chan,size_chan,color_chan,glyph_chan){
return (function (p1__17824_SHARP_){
return cljs.core.async.put_BANG_.call(null,add_chan,p1__17824_SHARP_);
});})(___$1,map__18030,map__18030__$1,none_chan,all_chan,del_chan,add_chan,rand_chan,size_chan,color_chan,glyph_chan))
},"Add"),React.DOM.button({"onClick": ((function (___$1,map__18030,map__18030__$1,none_chan,all_chan,del_chan,add_chan,rand_chan,size_chan,color_chan,glyph_chan){
return (function (p1__17825_SHARP_){
return cljs.core.async.put_BANG_.call(null,rand_chan,p1__17825_SHARP_);
});})(___$1,map__18030,map__18030__$1,none_chan,all_chan,del_chan,add_chan,rand_chan,size_chan,color_chan,glyph_chan))
},"Rand"),React.DOM.button((function (){var disabled = cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"pinned","pinned",-1216085339),new cljs.core.Keyword(null,"icons","icons",-297140977).cljs$core$IFn$_invoke$arity$1(self__.cursor))));
var base = ((disabled)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#CCCCCC"], null)], null):null);
return cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (disabled,base,___$1,map__18030,map__18030__$1,none_chan,all_chan,del_chan,add_chan,rand_chan,size_chan,color_chan,glyph_chan){
return (function (p1__17826_SHARP_){
return cljs.core.async.put_BANG_.call(null,del_chan,p1__17826_SHARP_);
});})(disabled,base,___$1,map__18030,map__18030__$1,none_chan,all_chan,del_chan,add_chan,rand_chan,size_chan,color_chan,glyph_chan))
], null)));
})(),"Delete"),React.DOM.button({"onClick": ((function (___$1,map__18030,map__18030__$1,none_chan,all_chan,del_chan,add_chan,rand_chan,size_chan,color_chan,glyph_chan){
return (function (p1__17827_SHARP_){
return cljs.core.async.put_BANG_.call(null,all_chan,p1__17827_SHARP_);
});})(___$1,map__18030,map__18030__$1,none_chan,all_chan,del_chan,add_chan,rand_chan,size_chan,color_chan,glyph_chan))
},"All"),React.DOM.button({"onClick": ((function (___$1,map__18030,map__18030__$1,none_chan,all_chan,del_chan,add_chan,rand_chan,size_chan,color_chan,glyph_chan){
return (function (p1__17828_SHARP_){
return cljs.core.async.put_BANG_.call(null,none_chan,p1__17828_SHARP_);
});})(___$1,map__18030,map__18030__$1,none_chan,all_chan,del_chan,add_chan,rand_chan,size_chan,color_chan,glyph_chan))
},"None"));
});

clui_om.page_delta.t18026.prototype.om$core$IWillMount$ = true;

clui_om.page_delta.t18026.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__18031 = om.core.get_state.call(null,self__.owner);
var map__18031__$1 = ((cljs.core.seq_QMARK_.call(null,map__18031))?cljs.core.apply.call(null,cljs.core.hash_map,map__18031):map__18031);
var none_chan = cljs.core.get.call(null,map__18031__$1,new cljs.core.Keyword(null,"none-chan","none-chan",-1282466006));
var all_chan = cljs.core.get.call(null,map__18031__$1,new cljs.core.Keyword(null,"all-chan","all-chan",-875476141));
var del_chan = cljs.core.get.call(null,map__18031__$1,new cljs.core.Keyword(null,"del-chan","del-chan",-1918627367));
var rand_chan = cljs.core.get.call(null,map__18031__$1,new cljs.core.Keyword(null,"rand-chan","rand-chan",1192373235));
var add_chan = cljs.core.get.call(null,map__18031__$1,new cljs.core.Keyword(null,"add-chan","add-chan",-2024929221));
var size_chan = cljs.core.get.call(null,map__18031__$1,new cljs.core.Keyword(null,"size-chan","size-chan",-406343470));
var color_chan = cljs.core.get.call(null,map__18031__$1,new cljs.core.Keyword(null,"color-chan","color-chan",-232607946));
var glyph_chan = cljs.core.get.call(null,map__18031__$1,new cljs.core.Keyword(null,"glyph-chan","glyph-chan",1397449693));
var c__6508__auto___18223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___18223,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___18223,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (state_18044){
var state_val_18045 = (state_18044[(1)]);
if((state_val_18045 === (4))){
var inst_18034 = (state_18044[(2)]);
var inst_18035 = [cljs.core.str(inst_18034)].join('');
var inst_18036 = console.log("(toolbar):: glyph choice: ",inst_18035);
var inst_18037 = om.core.update_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"glyph","glyph",2119448117),inst_18034);
var inst_18038 = (function (){var choice = inst_18034;
return ((function (choice,inst_18034,inst_18035,inst_18036,inst_18037,state_val_18045,c__6508__auto___18223,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (p1__17815_SHARP_){
return clui_om.page_delta.update_pinned.call(null,p1__17815_SHARP_,new cljs.core.Keyword(null,"glyph","glyph",2119448117),choice);
});
;})(choice,inst_18034,inst_18035,inst_18036,inst_18037,state_val_18045,c__6508__auto___18223,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var inst_18039 = om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"icons","icons",-297140977),inst_18038);
var state_18044__$1 = (function (){var statearr_18046 = state_18044;
(statearr_18046[(7)] = inst_18037);

(statearr_18046[(8)] = inst_18039);

(statearr_18046[(9)] = inst_18036);

return statearr_18046;
})();
var statearr_18047_18224 = state_18044__$1;
(statearr_18047_18224[(2)] = null);

(statearr_18047_18224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (3))){
var inst_18042 = (state_18044[(2)]);
var state_18044__$1 = state_18044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18044__$1,inst_18042);
} else {
if((state_val_18045 === (2))){
var state_18044__$1 = state_18044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18044__$1,(4),glyph_chan);
} else {
if((state_val_18045 === (1))){
var state_18044__$1 = state_18044;
var statearr_18048_18225 = state_18044__$1;
(statearr_18048_18225[(2)] = null);

(statearr_18048_18225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6508__auto___18223,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto___18223,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_18052 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18052[(0)] = state_machine__6494__auto__);

(statearr_18052[(1)] = (1));

return statearr_18052;
});
var state_machine__6494__auto____1 = (function (state_18044){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_18044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e18053){if((e18053 instanceof Object)){
var ex__6497__auto__ = e18053;
var statearr_18054_18226 = state_18044;
(statearr_18054_18226[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18227 = state_18044;
state_18044 = G__18227;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_18044){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_18044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___18223,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var state__6510__auto__ = (function (){var statearr_18055 = f__6509__auto__.call(null);
(statearr_18055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___18223);

return statearr_18055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___18223,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
);


var c__6508__auto___18228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___18228,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___18228,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (state_18068){
var state_val_18069 = (state_18068[(1)]);
if((state_val_18069 === (4))){
var inst_18058 = (state_18068[(2)]);
var inst_18059 = [cljs.core.str(inst_18058)].join('');
var inst_18060 = console.log("(toolbar):: color choice: ",inst_18059);
var inst_18061 = om.core.update_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"color","color",1011675173),inst_18058);
var inst_18062 = (function (){var choice = inst_18058;
return ((function (choice,inst_18058,inst_18059,inst_18060,inst_18061,state_val_18069,c__6508__auto___18228,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (p1__17816_SHARP_){
return clui_om.page_delta.update_pinned.call(null,p1__17816_SHARP_,new cljs.core.Keyword(null,"color","color",1011675173),choice);
});
;})(choice,inst_18058,inst_18059,inst_18060,inst_18061,state_val_18069,c__6508__auto___18228,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var inst_18063 = om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"icons","icons",-297140977),inst_18062);
var state_18068__$1 = (function (){var statearr_18070 = state_18068;
(statearr_18070[(7)] = inst_18063);

(statearr_18070[(8)] = inst_18061);

(statearr_18070[(9)] = inst_18060);

return statearr_18070;
})();
var statearr_18071_18229 = state_18068__$1;
(statearr_18071_18229[(2)] = null);

(statearr_18071_18229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18069 === (3))){
var inst_18066 = (state_18068[(2)]);
var state_18068__$1 = state_18068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18068__$1,inst_18066);
} else {
if((state_val_18069 === (2))){
var state_18068__$1 = state_18068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18068__$1,(4),color_chan);
} else {
if((state_val_18069 === (1))){
var state_18068__$1 = state_18068;
var statearr_18072_18230 = state_18068__$1;
(statearr_18072_18230[(2)] = null);

(statearr_18072_18230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6508__auto___18228,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto___18228,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_18076 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18076[(0)] = state_machine__6494__auto__);

(statearr_18076[(1)] = (1));

return statearr_18076;
});
var state_machine__6494__auto____1 = (function (state_18068){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_18068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e18077){if((e18077 instanceof Object)){
var ex__6497__auto__ = e18077;
var statearr_18078_18231 = state_18068;
(statearr_18078_18231[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18232 = state_18068;
state_18068 = G__18232;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_18068){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_18068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___18228,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var state__6510__auto__ = (function (){var statearr_18079 = f__6509__auto__.call(null);
(statearr_18079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___18228);

return statearr_18079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___18228,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
);


var c__6508__auto___18233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___18233,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___18233,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (state_18092){
var state_val_18093 = (state_18092[(1)]);
if((state_val_18093 === (4))){
var inst_18082 = (state_18092[(2)]);
var inst_18083 = [cljs.core.str(inst_18082)].join('');
var inst_18084 = console.log("(toolbar):: size choice: ",inst_18083);
var inst_18085 = om.core.update_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"size","size",1098693007),inst_18082);
var inst_18086 = (function (){var choice = inst_18082;
return ((function (choice,inst_18082,inst_18083,inst_18084,inst_18085,state_val_18093,c__6508__auto___18233,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (p1__17817_SHARP_){
return clui_om.page_delta.update_pinned.call(null,p1__17817_SHARP_,new cljs.core.Keyword(null,"size","size",1098693007),choice);
});
;})(choice,inst_18082,inst_18083,inst_18084,inst_18085,state_val_18093,c__6508__auto___18233,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var inst_18087 = om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"icons","icons",-297140977),inst_18086);
var state_18092__$1 = (function (){var statearr_18094 = state_18092;
(statearr_18094[(7)] = inst_18087);

(statearr_18094[(8)] = inst_18084);

(statearr_18094[(9)] = inst_18085);

return statearr_18094;
})();
var statearr_18095_18234 = state_18092__$1;
(statearr_18095_18234[(2)] = null);

(statearr_18095_18234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18093 === (3))){
var inst_18090 = (state_18092[(2)]);
var state_18092__$1 = state_18092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18092__$1,inst_18090);
} else {
if((state_val_18093 === (2))){
var state_18092__$1 = state_18092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18092__$1,(4),size_chan);
} else {
if((state_val_18093 === (1))){
var state_18092__$1 = state_18092;
var statearr_18096_18235 = state_18092__$1;
(statearr_18096_18235[(2)] = null);

(statearr_18096_18235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6508__auto___18233,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto___18233,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_18100 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18100[(0)] = state_machine__6494__auto__);

(statearr_18100[(1)] = (1));

return statearr_18100;
});
var state_machine__6494__auto____1 = (function (state_18092){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_18092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e18101){if((e18101 instanceof Object)){
var ex__6497__auto__ = e18101;
var statearr_18102_18236 = state_18092;
(statearr_18102_18236[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18237 = state_18092;
state_18092 = G__18237;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_18092){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_18092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___18233,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var state__6510__auto__ = (function (){var statearr_18103 = f__6509__auto__.call(null);
(statearr_18103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___18233);

return statearr_18103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___18233,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
);


var c__6508__auto___18238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___18238,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___18238,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (state_18116){
var state_val_18117 = (state_18116[(1)]);
if((state_val_18117 === (4))){
var inst_18106 = (state_18116[(2)]);
var inst_18107 = cljs.core.deref.call(null,self__.cursor);
var inst_18108 = clui_om.page_delta.generate_new_icon.call(null,inst_18107);
var inst_18109 = console.log("(toolbar):: user clicked add");
var inst_18110 = (function (){var new_icon = inst_18108;
var ___$2 = inst_18106;
return ((function (new_icon,___$2,inst_18106,inst_18107,inst_18108,inst_18109,state_val_18117,c__6508__auto___18238,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (p1__17818_SHARP_){
return cljs.core.conj.call(null,p1__17818_SHARP_,new_icon);
});
;})(new_icon,___$2,inst_18106,inst_18107,inst_18108,inst_18109,state_val_18117,c__6508__auto___18238,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var inst_18111 = om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"icons","icons",-297140977),inst_18110);
var state_18116__$1 = (function (){var statearr_18118 = state_18116;
(statearr_18118[(7)] = inst_18111);

(statearr_18118[(8)] = inst_18109);

return statearr_18118;
})();
var statearr_18119_18239 = state_18116__$1;
(statearr_18119_18239[(2)] = null);

(statearr_18119_18239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18117 === (3))){
var inst_18114 = (state_18116[(2)]);
var state_18116__$1 = state_18116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18116__$1,inst_18114);
} else {
if((state_val_18117 === (2))){
var state_18116__$1 = state_18116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18116__$1,(4),add_chan);
} else {
if((state_val_18117 === (1))){
var state_18116__$1 = state_18116;
var statearr_18120_18240 = state_18116__$1;
(statearr_18120_18240[(2)] = null);

(statearr_18120_18240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6508__auto___18238,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto___18238,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_18124 = [null,null,null,null,null,null,null,null,null];
(statearr_18124[(0)] = state_machine__6494__auto__);

(statearr_18124[(1)] = (1));

return statearr_18124;
});
var state_machine__6494__auto____1 = (function (state_18116){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_18116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e18125){if((e18125 instanceof Object)){
var ex__6497__auto__ = e18125;
var statearr_18126_18241 = state_18116;
(statearr_18126_18241[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18242 = state_18116;
state_18116 = G__18242;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_18116){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_18116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___18238,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var state__6510__auto__ = (function (){var statearr_18127 = f__6509__auto__.call(null);
(statearr_18127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___18238);

return statearr_18127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___18238,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
);


var c__6508__auto___18243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___18243,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___18243,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (state_18139){
var state_val_18140 = (state_18139[(1)]);
if((state_val_18140 === (4))){
var inst_18130 = (state_18139[(2)]);
var inst_18131 = clui_om.page_delta.random_icon.call(null);
var inst_18132 = console.log("(toolbar):: user clicked random");
var inst_18133 = (function (){var new_icon = inst_18131;
var ___$2 = inst_18130;
return ((function (new_icon,___$2,inst_18130,inst_18131,inst_18132,state_val_18140,c__6508__auto___18243,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (p1__17819_SHARP_){
return cljs.core.conj.call(null,p1__17819_SHARP_,new_icon);
});
;})(new_icon,___$2,inst_18130,inst_18131,inst_18132,state_val_18140,c__6508__auto___18243,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var inst_18134 = om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"icons","icons",-297140977),inst_18133);
var state_18139__$1 = (function (){var statearr_18141 = state_18139;
(statearr_18141[(7)] = inst_18134);

(statearr_18141[(8)] = inst_18132);

return statearr_18141;
})();
var statearr_18142_18244 = state_18139__$1;
(statearr_18142_18244[(2)] = null);

(statearr_18142_18244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (3))){
var inst_18137 = (state_18139[(2)]);
var state_18139__$1 = state_18139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18139__$1,inst_18137);
} else {
if((state_val_18140 === (2))){
var state_18139__$1 = state_18139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18139__$1,(4),rand_chan);
} else {
if((state_val_18140 === (1))){
var state_18139__$1 = state_18139;
var statearr_18143_18245 = state_18139__$1;
(statearr_18143_18245[(2)] = null);

(statearr_18143_18245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6508__auto___18243,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto___18243,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_18147 = [null,null,null,null,null,null,null,null,null];
(statearr_18147[(0)] = state_machine__6494__auto__);

(statearr_18147[(1)] = (1));

return statearr_18147;
});
var state_machine__6494__auto____1 = (function (state_18139){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_18139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e18148){if((e18148 instanceof Object)){
var ex__6497__auto__ = e18148;
var statearr_18149_18246 = state_18139;
(statearr_18149_18246[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18247 = state_18139;
state_18139 = G__18247;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_18139){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_18139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___18243,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var state__6510__auto__ = (function (){var statearr_18150 = f__6509__auto__.call(null);
(statearr_18150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___18243);

return statearr_18150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___18243,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
);


var c__6508__auto___18248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___18248,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___18248,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (state_18166){
var state_val_18167 = (state_18166[(1)]);
if((state_val_18167 === (5))){
var inst_18153 = (state_18166[(7)]);
var inst_18159 = (state_18166[(2)]);
var inst_18160 = (function (){var ___$2 = inst_18153;
return ((function (___$2,inst_18153,inst_18159,state_val_18167,c__6508__auto___18248,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (p1__17821_SHARP_){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"pinned","pinned",-1216085339)),p1__17821_SHARP_);
});
;})(___$2,inst_18153,inst_18159,state_val_18167,c__6508__auto___18248,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var inst_18161 = om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"icons","icons",-297140977),inst_18160);
var state_18166__$1 = (function (){var statearr_18168 = state_18166;
(statearr_18168[(8)] = inst_18159);

(statearr_18168[(9)] = inst_18161);

return statearr_18168;
})();
var statearr_18169_18249 = state_18166__$1;
(statearr_18169_18249[(2)] = null);

(statearr_18169_18249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18167 === (4))){
var inst_18153 = (state_18166[(7)]);
var inst_18153__$1 = (state_18166[(2)]);
var inst_18154 = console.log("(toolbar):: user clicked del");
var inst_18155 = (function (){var ___$2 = inst_18153__$1;
return ((function (___$2,inst_18153,inst_18153__$1,inst_18154,state_val_18167,c__6508__auto___18248,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (icons){
return cljs.core.mapv.call(null,((function (___$2,inst_18153,inst_18153__$1,inst_18154,state_val_18167,c__6508__auto___18248,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (p1__17820_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(p1__17820_SHARP_))){
return cljs.core.merge.call(null,p1__17820_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exiting","exiting",1968554212),true,new cljs.core.Keyword(null,"entering","entering",-413471949),false], null));
} else {
return cljs.core.merge.call(null,p1__17820_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exiting","exiting",1968554212),false,new cljs.core.Keyword(null,"entering","entering",-413471949),false], null));
}
});})(___$2,inst_18153,inst_18153__$1,inst_18154,state_val_18167,c__6508__auto___18248,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
,icons);
});
;})(___$2,inst_18153,inst_18153__$1,inst_18154,state_val_18167,c__6508__auto___18248,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var inst_18156 = om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"icons","icons",-297140977),inst_18155);
var inst_18157 = cljs.core.async.timeout.call(null,(900));
var state_18166__$1 = (function (){var statearr_18170 = state_18166;
(statearr_18170[(10)] = inst_18156);

(statearr_18170[(11)] = inst_18154);

(statearr_18170[(7)] = inst_18153__$1);

return statearr_18170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18166__$1,(5),inst_18157);
} else {
if((state_val_18167 === (3))){
var inst_18164 = (state_18166[(2)]);
var state_18166__$1 = state_18166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18166__$1,inst_18164);
} else {
if((state_val_18167 === (2))){
var state_18166__$1 = state_18166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18166__$1,(4),del_chan);
} else {
if((state_val_18167 === (1))){
var state_18166__$1 = state_18166;
var statearr_18171_18250 = state_18166__$1;
(statearr_18171_18250[(2)] = null);

(statearr_18171_18250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__6508__auto___18248,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto___18248,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_18175 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18175[(0)] = state_machine__6494__auto__);

(statearr_18175[(1)] = (1));

return statearr_18175;
});
var state_machine__6494__auto____1 = (function (state_18166){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_18166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e18176){if((e18176 instanceof Object)){
var ex__6497__auto__ = e18176;
var statearr_18177_18251 = state_18166;
(statearr_18177_18251[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18252 = state_18166;
state_18166 = G__18252;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_18166){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_18166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___18248,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var state__6510__auto__ = (function (){var statearr_18178 = f__6509__auto__.call(null);
(statearr_18178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___18248);

return statearr_18178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___18248,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
);


var c__6508__auto___18253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___18253,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___18253,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (state_18189){
var state_val_18190 = (state_18189[(1)]);
if((state_val_18190 === (4))){
var inst_18181 = (state_18189[(2)]);
var inst_18182 = console.log("(toolbar):: user clicked all");
var inst_18183 = (function (){var ___$2 = inst_18181;
return ((function (___$2,inst_18181,inst_18182,state_val_18190,c__6508__auto___18253,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (icons){
return cljs.core.mapv.call(null,((function (___$2,inst_18181,inst_18182,state_val_18190,c__6508__auto___18253,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (p1__17822_SHARP_){
return cljs.core.assoc.call(null,p1__17822_SHARP_,new cljs.core.Keyword(null,"pinned","pinned",-1216085339),true);
});})(___$2,inst_18181,inst_18182,state_val_18190,c__6508__auto___18253,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
,icons);
});
;})(___$2,inst_18181,inst_18182,state_val_18190,c__6508__auto___18253,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var inst_18184 = om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"icons","icons",-297140977),inst_18183);
var state_18189__$1 = (function (){var statearr_18191 = state_18189;
(statearr_18191[(7)] = inst_18182);

(statearr_18191[(8)] = inst_18184);

return statearr_18191;
})();
var statearr_18192_18254 = state_18189__$1;
(statearr_18192_18254[(2)] = null);

(statearr_18192_18254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18190 === (3))){
var inst_18187 = (state_18189[(2)]);
var state_18189__$1 = state_18189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18189__$1,inst_18187);
} else {
if((state_val_18190 === (2))){
var state_18189__$1 = state_18189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18189__$1,(4),all_chan);
} else {
if((state_val_18190 === (1))){
var state_18189__$1 = state_18189;
var statearr_18193_18255 = state_18189__$1;
(statearr_18193_18255[(2)] = null);

(statearr_18193_18255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6508__auto___18253,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto___18253,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_18197 = [null,null,null,null,null,null,null,null,null];
(statearr_18197[(0)] = state_machine__6494__auto__);

(statearr_18197[(1)] = (1));

return statearr_18197;
});
var state_machine__6494__auto____1 = (function (state_18189){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_18189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e18198){if((e18198 instanceof Object)){
var ex__6497__auto__ = e18198;
var statearr_18199_18256 = state_18189;
(statearr_18199_18256[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18257 = state_18189;
state_18189 = G__18257;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_18189){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_18189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___18253,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var state__6510__auto__ = (function (){var statearr_18200 = f__6509__auto__.call(null);
(statearr_18200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___18253);

return statearr_18200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___18253,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
);


var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (state_18211){
var state_val_18212 = (state_18211[(1)]);
if((state_val_18212 === (4))){
var inst_18203 = (state_18211[(2)]);
var inst_18204 = console.log("(toolbar):: user clicked none");
var inst_18205 = (function (){var ___$2 = inst_18203;
return ((function (___$2,inst_18203,inst_18204,state_val_18212,c__6508__auto__,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (icons){
return cljs.core.mapv.call(null,((function (___$2,inst_18203,inst_18204,state_val_18212,c__6508__auto__,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function (p1__17823_SHARP_){
return cljs.core.assoc.call(null,p1__17823_SHARP_,new cljs.core.Keyword(null,"pinned","pinned",-1216085339),false);
});})(___$2,inst_18203,inst_18204,state_val_18212,c__6508__auto__,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
,icons);
});
;})(___$2,inst_18203,inst_18204,state_val_18212,c__6508__auto__,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var inst_18206 = om.core.transact_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"icons","icons",-297140977),inst_18205);
var state_18211__$1 = (function (){var statearr_18213 = state_18211;
(statearr_18213[(7)] = inst_18204);

(statearr_18213[(8)] = inst_18206);

return statearr_18213;
})();
var statearr_18214_18258 = state_18211__$1;
(statearr_18214_18258[(2)] = null);

(statearr_18214_18258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (3))){
var inst_18209 = (state_18211[(2)]);
var state_18211__$1 = state_18211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18211__$1,inst_18209);
} else {
if((state_val_18212 === (2))){
var state_18211__$1 = state_18211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18211__$1,(4),none_chan);
} else {
if((state_val_18212 === (1))){
var state_18211__$1 = state_18211;
var statearr_18215_18259 = state_18211__$1;
(statearr_18215_18259[(2)] = null);

(statearr_18215_18259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6508__auto__,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto__,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_18219 = [null,null,null,null,null,null,null,null,null];
(statearr_18219[(0)] = state_machine__6494__auto__);

(statearr_18219[(1)] = (1));

return statearr_18219;
});
var state_machine__6494__auto____1 = (function (state_18211){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_18211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e18220){if((e18220 instanceof Object)){
var ex__6497__auto__ = e18220;
var statearr_18221_18260 = state_18211;
(statearr_18221_18260[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18261 = state_18211;
state_18211 = G__18261;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_18211){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_18211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
})();
var state__6510__auto__ = (function (){var statearr_18222 = f__6509__auto__.call(null);
(statearr_18222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_18222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,map__18031,map__18031__$1,none_chan,all_chan,del_chan,rand_chan,add_chan,size_chan,color_chan,glyph_chan,___$1))
);

return c__6508__auto__;
});

clui_om.page_delta.t18026.prototype.om$core$IInitState$ = true;

clui_om.page_delta.t18026.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"glyph-chan","glyph-chan",1397449693),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"color-chan","color-chan",-232607946),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"size-chan","size-chan",-406343470),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"add-chan","add-chan",-2024929221),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"del-chan","del-chan",-1918627367),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"all-chan","all-chan",-875476141),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"none-chan","none-chan",-1282466006),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"rand-chan","rand-chan",1192373235),cljs.core.async.chan.call(null)], null);
});

clui_om.page_delta.t18026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18028){
var self__ = this;
var _18028__$1 = this;
return self__.meta18027;
});

clui_om.page_delta.t18026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18028,meta18027__$1){
var self__ = this;
var _18028__$1 = this;
return (new clui_om.page_delta.t18026(self__.opts,self__.owner,self__.cursor,self__.toolbar,meta18027__$1));
});

clui_om.page_delta.t18026.cljs$lang$type = true;

clui_om.page_delta.t18026.cljs$lang$ctorStr = "clui-om.page-delta/t18026";

clui_om.page_delta.t18026.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-delta/t18026");
});

clui_om.page_delta.__GT_t18026 = (function __GT_t18026(opts__$1,owner__$1,cursor__$1,toolbar__$1,meta18027){
return (new clui_om.page_delta.t18026(opts__$1,owner__$1,cursor__$1,toolbar__$1,meta18027));
});

}

return (new clui_om.page_delta.t18026(opts,owner,cursor,toolbar,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),73,new cljs.core.Keyword(null,"end-line","end-line",1837326455),295,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),208,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_delta.cljs"], null)));
});
/**
* A component that displays an arbitrary number of icons.
*/
clui_om.page_delta.iconbox = (function iconbox(cursor,owner,opts){
if(typeof clui_om.page_delta.t18265 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_delta.t18265 = (function (opts,owner,cursor,iconbox,meta18266){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.iconbox = iconbox;
this.meta18266 = meta18266;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_delta.t18265.prototype.om$core$IRender$ = true;

clui_om.page_delta.t18265.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "iconbox"},om.core.build_all.call(null,clui_om.page_delta.icon,new cljs.core.Keyword(null,"icons","icons",-297140977).cljs$core$IFn$_invoke$arity$1(self__.cursor)));
});

clui_om.page_delta.t18265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18267){
var self__ = this;
var _18267__$1 = this;
return self__.meta18266;
});

clui_om.page_delta.t18265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18267,meta18266__$1){
var self__ = this;
var _18267__$1 = this;
return (new clui_om.page_delta.t18265(self__.opts,self__.owner,self__.cursor,self__.iconbox,meta18266__$1));
});

clui_om.page_delta.t18265.cljs$lang$type = true;

clui_om.page_delta.t18265.cljs$lang$ctorStr = "clui-om.page-delta/t18265";

clui_om.page_delta.t18265.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-delta/t18265");
});

clui_om.page_delta.__GT_t18265 = (function __GT_t18265(opts__$1,owner__$1,cursor__$1,iconbox__$1,meta18266){
return (new clui_om.page_delta.t18265(opts__$1,owner__$1,cursor__$1,iconbox__$1,meta18266));
});

}

return (new clui_om.page_delta.t18265(opts,owner,cursor,iconbox,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),54,new cljs.core.Keyword(null,"end-line","end-line",1837326455),304,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),300,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_delta.cljs"], null)));
});
/**
* A component that displays a toolbar up top, and an icon-box down below.
*/
clui_om.page_delta.main_widget = (function main_widget(app,owner,opts){
if(typeof clui_om.page_delta.t18271 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_delta.t18271 = (function (opts,owner,app,main_widget,meta18272){
this.opts = opts;
this.owner = owner;
this.app = app;
this.main_widget = main_widget;
this.meta18272 = meta18272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_delta.t18271.prototype.om$core$IRender$ = true;

clui_om.page_delta.t18271.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "main-widget"},om.core.build.call(null,clui_om.page_delta.toolbar,self__.app),om.core.build.call(null,clui_om.page_delta.iconbox,self__.app));
});

clui_om.page_delta.t18271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18273){
var self__ = this;
var _18273__$1 = this;
return self__.meta18272;
});

clui_om.page_delta.t18271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18273,meta18272__$1){
var self__ = this;
var _18273__$1 = this;
return (new clui_om.page_delta.t18271(self__.opts,self__.owner,self__.app,self__.main_widget,meta18272__$1));
});

clui_om.page_delta.t18271.cljs$lang$type = true;

clui_om.page_delta.t18271.cljs$lang$ctorStr = "clui-om.page-delta/t18271";

clui_om.page_delta.t18271.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-delta/t18271");
});

clui_om.page_delta.__GT_t18271 = (function __GT_t18271(opts__$1,owner__$1,app__$1,main_widget__$1,meta18272){
return (new clui_om.page_delta.t18271(opts__$1,owner__$1,app__$1,main_widget__$1,meta18272));
});

}

return (new clui_om.page_delta.t18271(opts,owner,app,main_widget,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),41,new cljs.core.Keyword(null,"end-line","end-line",1837326455),314,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),309,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_delta.cljs"], null)));
});
/**
* Initialize page delta
*/
clui_om.page_delta.main = (function main(){
var msg = "main():: initializing page-delta.cljs";
console.log(msg);

return om.core.root.call(null,clui_om.page_delta.main_widget,clui_om.page_delta.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),clui_om.page_delta.ALPHA_ROOT], null));
});
goog.exportSymbol('clui_om.page_delta.main', clui_om.page_delta.main);
