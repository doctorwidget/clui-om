// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.page_svg_om');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.browser.repl');
goog.require('clui_om.svg.brittle_icons');
goog.require('cljs.core.async');
goog.require('clui_om.svg.icons');
goog.require('om.core');
clui_om.page_svg_om.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
clui_om.page_svg_om.ALPHA_ROOT = document.getElementById("alphaRoot");
clui_om.page_svg_om.main_widget = (function main_widget(app,owner,opts){
if(typeof clui_om.page_svg_om.t20263 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_svg_om.t20263 = (function (opts,owner,app,main_widget,meta20264){
this.opts = opts;
this.owner = owner;
this.app = app;
this.main_widget = main_widget;
this.meta20264 = meta20264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_svg_om.t20263.prototype.om$core$IRender$ = true;

clui_om.page_svg_om.t20263.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "mainWidgetOuter"},React.DOM.div({"className": "mainWidgetInner"},React.DOM.p(null,"Page-SVG-Om Stuff Will Go Here."),om.core.build.call(null,clui_om.svg.brittle_icons.brittle_gear_icon,self__.app),om.core.build.call(null,clui_om.svg.brittle_icons.brittle_disc_icon,self__.app),om.core.build.call(null,clui_om.svg.brittle_icons.brittle_medal_icon,self__.app),om.core.build.call(null,clui_om.svg.brittle_icons.robust_heart_icon,self__.app),React.DOM.div({"className": "iconOuter bear"},om.core.build.call(null,clui_om.svg.brittle_icons.auto_bear_icon,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"myBear"], null)], null)], null))),React.DOM.div({"className": "iconOuter ant"},om.core.build.call(null,clui_om.svg.brittle_icons.auto_ant_icon,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"myAnt"], null)], null)], null))),React.DOM.div({"className": "iconOuter flipper"},om.core.build.call(null,clui_om.svg.brittle_icons.seahorse,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"flipper"], null)], null)], null))),React.DOM.div({"className": "iconOuter kitty"},React.DOM.svg({"viewBox": "0 0 120 120"},React.DOM.circle({"r": (60), "cy": (60), "cx": (60)}),om.core.build.call(null,clui_om.svg.brittle_icons.kitty_icon,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),(-5),new cljs.core.Keyword(null,"id","id",-1388402092),"kitty"], null)], null)], null))))));
});

clui_om.page_svg_om.t20263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20265){
var self__ = this;
var _20265__$1 = this;
return self__.meta20264;
});

clui_om.page_svg_om.t20263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20265,meta20264__$1){
var self__ = this;
var _20265__$1 = this;
return (new clui_om.page_svg_om.t20263(self__.opts,self__.owner,self__.app,self__.main_widget,meta20264__$1));
});

clui_om.page_svg_om.t20263.cljs$lang$type = true;

clui_om.page_svg_om.t20263.cljs$lang$ctorStr = "clui-om.page-svg-om/t20263";

clui_om.page_svg_om.t20263.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-svg-om/t20263");
});

clui_om.page_svg_om.__GT_t20263 = (function __GT_t20263(opts__$1,owner__$1,app__$1,main_widget__$1,meta20264){
return (new clui_om.page_svg_om.t20263(opts__$1,owner__$1,app__$1,main_widget__$1,meta20264));
});

}

return (new clui_om.page_svg_om.t20263(opts,owner,app,main_widget,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),92,new cljs.core.Keyword(null,"end-line","end-line",1837326455),43,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_svg_om.cljs"], null)));
});
/**
* Main entry point for page-svg-om
*/
clui_om.page_svg_om.main = (function main(){
var msg = "(main):: page_svg_om (main) function...";
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");

console.log(msg);

console.log([cljs.core.str("Brittle-Icons Heart Constant: "),cljs.core.str(clui_om.svg.brittle_icons.heart_svg)].join(''));

return om.core.root.call(null,clui_om.page_svg_om.main_widget,clui_om.page_svg_om.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),clui_om.page_svg_om.ALPHA_ROOT], null));
});
goog.exportSymbol('clui_om.page_svg_om.main', clui_om.page_svg_om.main);
