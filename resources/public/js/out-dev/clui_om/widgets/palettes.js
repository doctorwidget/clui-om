// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.widgets.palettes');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
clui_om.widgets.palettes.PROTOGENIE = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"slate","slate",1394989518),"#BBCCDD",new cljs.core.Keyword(null,"navy","navy",1626342120),"#003366",new cljs.core.Keyword(null,"haze","haze",-1024870708),"#EEEFFF",new cljs.core.Keyword(null,"gold","gold",-806826416),"#FFCC00",new cljs.core.Keyword(null,"tan","tan",1273609893),"#EEBB66"], null);
clui_om.widgets.palettes.CAMPFIRE = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"green","green",-945526839),"#588C73",new cljs.core.Keyword(null,"cream","cream",-934119101),"#F2E394",new cljs.core.Keyword(null,"orange","orange",73816386),"#F2AE72",new cljs.core.Keyword(null,"flame","flame",-813204755),"#D96459",new cljs.core.Keyword(null,"brick","brick",895065736),"#8C4646"], null);
clui_om.widgets.palettes.OSAKI = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"orange","orange",73816386),"#FF9700",new cljs.core.Keyword(null,"umber","umber",-72283588),"#CC6600",new cljs.core.Keyword(null,"green","green",-945526839),"#999900",new cljs.core.Keyword(null,"brown","brown",1414854429),"#333300",new cljs.core.Keyword(null,"purple","purple",-876021126),"#660066"], null);
clui_om.widgets.palettes.NYC = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mauve","mauve",-1586890894),"#753A48",new cljs.core.Keyword(null,"brown","brown",1414854429),"#954F47",new cljs.core.Keyword(null,"rust","rust",-1382432294),"#C05949",new cljs.core.Keyword(null,"sky","sky",1271496862),"#9AADBD",new cljs.core.Keyword(null,"soylent","soylent",-1384549348),"#CBBB58"], null);
clui_om.widgets.palettes.CHEERY = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lime","lime",-1796425088),"#B1EB00",new cljs.core.Keyword(null,"baby","baby",-1305225347),"#53BBF4",new cljs.core.Keyword(null,"pink","pink",393815864),"#FF85CB",new cljs.core.Keyword(null,"red","red",-969428204),"#FF432E",new cljs.core.Keyword(null,"pumpkin","pumpkin",-1097228616),"#FFAC00"], null);
clui_om.widgets.palettes.DEFAULT_PALETTE = clui_om.widgets.palettes.PROTOGENIE;
clui_om.widgets.palettes.palettes = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"protogenie","protogenie",-201610668),clui_om.widgets.palettes.PROTOGENIE,new cljs.core.Keyword(null,"campfire","campfire",-294874362),clui_om.widgets.palettes.CAMPFIRE,new cljs.core.Keyword(null,"osaki","osaki",640887759),clui_om.widgets.palettes.OSAKI,new cljs.core.Keyword(null,"nyc","nyc",-1505421345),clui_om.widgets.palettes.NYC,new cljs.core.Keyword(null,"cheery","cheery",-2047351461),clui_om.widgets.palettes.CHEERY], null);
clui_om.widgets.palettes.parse_choice = (function parse_choice(e,callback){
var target = e.target;
var selected = target.value;
var kw = cljs.core.keyword.call(null,selected);
var palette = clui_om.widgets.palettes.palettes.call(null,kw);
return callback.call(null,palette);
});
clui_om.widgets.palettes.palette_chooser = (function palette_chooser(cursor,owner,p__21040){
var map__21045 = p__21040;
var map__21045__$1 = ((cljs.core.seq_QMARK_.call(null,map__21045))?cljs.core.apply.call(null,cljs.core.hash_map,map__21045):map__21045);
var callback = cljs.core.get.call(null,map__21045__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
if(typeof clui_om.widgets.palettes.t21046 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.widgets.palettes.t21046 = (function (callback,map__21045,p__21040,owner,cursor,palette_chooser,meta21047){
this.callback = callback;
this.map__21045 = map__21045;
this.p__21040 = p__21040;
this.owner = owner;
this.cursor = cursor;
this.palette_chooser = palette_chooser;
this.meta21047 = meta21047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.widgets.palettes.t21046.prototype.om$core$IRender$ = true;

clui_om.widgets.palettes.t21046.prototype.om$core$IRender$render$arity$1 = ((function (map__21045,map__21045__$1,callback){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.select,{"onChange": ((function (___$1,map__21045,map__21045__$1,callback){
return (function (p1__21038_SHARP_){
return clui_om.widgets.palettes.parse_choice.call(null,p1__21038_SHARP_,self__.callback);
});})(___$1,map__21045,map__21045__$1,callback))
},cljs.core.map.call(null,((function (___$1,map__21045,map__21045__$1,callback){
return (function (p1__21039_SHARP_){
return om.dom.option.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,p1__21039_SHARP_)], null)),clojure.string.capitalize.call(null,cljs.core.name.call(null,p1__21039_SHARP_)));
});})(___$1,map__21045,map__21045__$1,callback))
,cljs.core.keys.call(null,clui_om.widgets.palettes.palettes)));
});})(map__21045,map__21045__$1,callback))
;

clui_om.widgets.palettes.t21046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21045,map__21045__$1,callback){
return (function (_21048){
var self__ = this;
var _21048__$1 = this;
return self__.meta21047;
});})(map__21045,map__21045__$1,callback))
;

clui_om.widgets.palettes.t21046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21045,map__21045__$1,callback){
return (function (_21048,meta21047__$1){
var self__ = this;
var _21048__$1 = this;
return (new clui_om.widgets.palettes.t21046(self__.callback,self__.map__21045,self__.p__21040,self__.owner,self__.cursor,self__.palette_chooser,meta21047__$1));
});})(map__21045,map__21045__$1,callback))
;

clui_om.widgets.palettes.t21046.cljs$lang$type = true;

clui_om.widgets.palettes.t21046.cljs$lang$ctorStr = "clui-om.widgets.palettes/t21046";

clui_om.widgets.palettes.t21046.cljs$lang$ctorPrWriter = ((function (map__21045,map__21045__$1,callback){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.widgets.palettes/t21046");
});})(map__21045,map__21045__$1,callback))
;

clui_om.widgets.palettes.__GT_t21046 = ((function (map__21045,map__21045__$1,callback){
return (function __GT_t21046(callback__$1,map__21045__$2,p__21040__$1,owner__$1,cursor__$1,palette_chooser__$1,meta21047){
return (new clui_om.widgets.palettes.t21046(callback__$1,map__21045__$2,p__21040__$1,owner__$1,cursor__$1,palette_chooser__$1,meta21047));
});})(map__21045,map__21045__$1,callback))
;

}

return (new clui_om.widgets.palettes.t21046(callback,map__21045__$1,p__21040,owner,cursor,palette_chooser,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),38,new cljs.core.Keyword(null,"end-line","end-line",1837326455),59,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),53,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/widgets/palettes.cljs"], null)));
});
