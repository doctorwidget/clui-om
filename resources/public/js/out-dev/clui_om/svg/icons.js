// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.svg.icons');
goog.require('cljs.core');
goog.require('clui_om.svg.utils');
goog.require('om.dom');
goog.require('om.core');
goog.require('cljs.core.async');
clui_om.svg.icons.om_tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"radialgradient","radialgradient",1660921384),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"tspan","tspan",-1557853197),new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"lineargradient","lineargradient",506281886),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"text","text",-1790561697)],[om.dom.path,om.dom.radialGradient,om.dom.circle,om.dom.g,om.dom.stop,om.dom.line,om.dom.tspan,om.dom.defs,om.dom.svg,om.dom.ellipse,om.dom.polyline,om.dom.rect,om.dom.linearGradient,om.dom.polygon,om.dom.text]);
/**
* Takes a single SVG element in map form (i.e. Hickory style). Returns
* that child and all of its children as Om DOM elements (not components!).
* Elements which do not match a known Om element are omitted.
* 
*/
clui_om.svg.icons.reify_children = (function reify_children(p__20902){
var map__20904 = p__20902;
var map__20904__$1 = ((cljs.core.seq_QMARK_.call(null,map__20904))?cljs.core.apply.call(null,cljs.core.hash_map,map__20904):map__20904);
var elt = map__20904__$1;
var content = cljs.core.get.call(null,map__20904__$1,new cljs.core.Keyword(null,"content","content",15833224));
var attrs = cljs.core.get.call(null,map__20904__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tag = cljs.core.get.call(null,map__20904__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var dom_fn = tag.call(null,clui_om.svg.icons.om_tags);
var children = cljs.core.filterv.call(null,cljs.core.map_QMARK_,content);
if(cljs.core.truth_(dom_fn)){
return cljs.core.apply.call(null,dom_fn,cljs.core.clj__GT_js.call(null,attrs),cljs.core.map.call(null,reify_children,children));
} else {
return null;
}
});
/**
* Takes SVG data in map form (i.e. Hickory style, or as returned from the
* ``defsvg`` macro in this library) and returns an Om component function which
* has been dynamically generated based on the SVG data. Any
* hard-coded :style, :width and :height values are removed by default, so that
* the resulting SVG can be styled via CSS. However, the :viewBox attribute is
* left untouched, so that the aspect ratio of the image is correct.
* 
* When you instantiate the Om component at runtime, you can provide an :attrs
* key inside the :opts map in the third (optional) argument. All values in
* that :attrs map will be merged onto the pre-existing attributes map in the
* resulting SVG element. So if (for example) you really did want to use
* hard-coded height and width values for some reason, you can apply them there.
* You can also add standard Om/React event handlers within that :attrs map.
* Finally, you might want to add a :className or :id to the
* :attrs map, to make the resulting component easy to style with CSS.
* 
*/
clui_om.svg.icons.auto_icon = (function auto_icon(svg){
return (function (cursor,owner,p__20910){
var map__20911 = p__20910;
var map__20911__$1 = ((cljs.core.seq_QMARK_.call(null,map__20911))?cljs.core.apply.call(null,cljs.core.hash_map,map__20911):map__20911);
var opts = map__20911__$1;
var attrs = cljs.core.get.call(null,map__20911__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
if(typeof clui_om.svg.icons.t20912 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.svg.icons.t20912 = (function (attrs,opts,map__20911,p__20910,owner,cursor,svg,auto_icon,meta20913){
this.attrs = attrs;
this.opts = opts;
this.map__20911 = map__20911;
this.p__20910 = p__20910;
this.owner = owner;
this.cursor = cursor;
this.svg = svg;
this.auto_icon = auto_icon;
this.meta20913 = meta20913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.svg.icons.t20912.prototype.om$core$IRender$ = true;

clui_om.svg.icons.t20912.prototype.om$core$IRender$render$arity$1 = ((function (map__20911,map__20911__$1,opts,attrs){
return (function (_){
var self__ = this;
var ___$1 = this;
var children = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(self__.svg);
var raw_attrs = cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(self__.svg),new cljs.core.Keyword(null,"height","height",1025178622)),new cljs.core.Keyword(null,"width","width",-384071477)),new cljs.core.Keyword(null,"style","style",-496642736));
var final_attrs = cljs.core.merge.call(null,raw_attrs,self__.attrs);
return cljs.core.apply.call(null,om.dom.svg,cljs.core.clj__GT_js.call(null,final_attrs),cljs.core.map.call(null,clui_om.svg.icons.reify_children,children));
});})(map__20911,map__20911__$1,opts,attrs))
;

clui_om.svg.icons.t20912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20911,map__20911__$1,opts,attrs){
return (function (_20914){
var self__ = this;
var _20914__$1 = this;
return self__.meta20913;
});})(map__20911,map__20911__$1,opts,attrs))
;

clui_om.svg.icons.t20912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20911,map__20911__$1,opts,attrs){
return (function (_20914,meta20913__$1){
var self__ = this;
var _20914__$1 = this;
return (new clui_om.svg.icons.t20912(self__.attrs,self__.opts,self__.map__20911,self__.p__20910,self__.owner,self__.cursor,self__.svg,self__.auto_icon,meta20913__$1));
});})(map__20911,map__20911__$1,opts,attrs))
;

clui_om.svg.icons.t20912.cljs$lang$type = true;

clui_om.svg.icons.t20912.cljs$lang$ctorStr = "clui-om.svg.icons/t20912";

clui_om.svg.icons.t20912.cljs$lang$ctorPrWriter = ((function (map__20911,map__20911__$1,opts,attrs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.svg.icons/t20912");
});})(map__20911,map__20911__$1,opts,attrs))
;

clui_om.svg.icons.__GT_t20912 = ((function (map__20911,map__20911__$1,opts,attrs){
return (function __GT_t20912(attrs__$1,opts__$1,map__20911__$2,p__20910__$1,owner__$1,cursor__$1,svg__$1,auto_icon__$1,meta20913){
return (new clui_om.svg.icons.t20912(attrs__$1,opts__$1,map__20911__$2,p__20910__$1,owner__$1,cursor__$1,svg__$1,auto_icon__$1,meta20913));
});})(map__20911,map__20911__$1,opts,attrs))
;

}

return (new clui_om.svg.icons.t20912(attrs,opts,map__20911__$1,p__20910,owner,cursor,svg,auto_icon,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),51,new cljs.core.Keyword(null,"end-line","end-line",1837326455),65,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),55,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/svg/icons.cljs"], null)));
});
});
