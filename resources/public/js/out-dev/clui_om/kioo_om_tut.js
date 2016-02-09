// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.kioo_om_tut');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('kioo.core');
goog.require('kioo.om');
clui_om.kioo_om_tut.src_doc = "public/html/frags/kioo-om-frag.tpl.html";
clui_om.kioo_om_tut.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"heading","heading",-1312171873),"main",new cljs.core.Keyword(null,"content","content",15833224),"Hello World",new cljs.core.Keyword(null,"navigation","navigation",369417),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["home",(function (p1__17238_SHARP_){
return alert(p1__17238_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["next",(function (p1__17239_SHARP_){
return alert(p1__17239_SHARP_);
})], null)], null)], null));
clui_om.kioo_om_tut.APP_ROOT = document.getElementById("kioo-app-div");
clui_om.kioo_om_tut.my_nav_item = (function my_nav_item(p__17241){
var vec__17243 = p__17241;
var caption = cljs.core.nth.call(null,vec__17243,(0),null);
var func = cljs.core.nth.call(null,vec__17243,(1),null);
var ch17240 = kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.li,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"nav-item",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.do__GT_.call(null,kioo.om.content.call(null,caption),kioo.om.listen.call(null,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__17243,caption,func){
return (function (){
return func.call(null,caption);
});})(vec__17243,caption,func))
)).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Placeholder"], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.a], null)))], null)))], null));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ch17240))){
return cljs.core.first.call(null,ch17240);
} else {
return cljs.core.apply.call(null,om.dom.span,null,ch17240);
}
});
clui_om.kioo_om_tut.my_header = (function my_header(p__17245){
var map__17247 = p__17245;
var map__17247__$1 = ((cljs.core.seq_QMARK_.call(null,map__17247))?cljs.core.apply.call(null,cljs.core.hash_map,map__17247):map__17247);
var navigation = cljs.core.get.call(null,map__17247__$1,new cljs.core.Keyword(null,"navigation","navigation",369417));
var heading = cljs.core.get.call(null,map__17247__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var ch17244 = kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.header,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n        ",kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.content.call(null,heading).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Header placeholder"], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.h1], null))),"\n        ",kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.content.call(null,cljs.core.map.call(null,clui_om.kioo_om_tut.my_nav_item,navigation)).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"id","id",-1388402092),"navigation"], null),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n          ",cljs.core.apply.call(null,om.dom.li,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"nav-item",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.a,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"href","href",-793805698),"#"], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Placeholder"], null)))], null))),"\n        "], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.ul], null))),"\n      "], null)))], null));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ch17244))){
return cljs.core.first.call(null,ch17244);
} else {
return cljs.core.apply.call(null,om.dom.span,null,ch17244);
}
});
clui_om.kioo_om_tut.my_page = (function my_page(data){
var ch17248 = kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"id","id",-1388402092),"kioo-om-frag"], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n      ",kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.substitute.call(null,clui_om.kioo_om_tut.my_header.call(null,data)).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n        ",cljs.core.apply.call(null,om.dom.h1,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Header placeholder"], null))),"\n        ",cljs.core.apply.call(null,om.dom.ul,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"id","id",-1388402092),"navigation"], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n          ",cljs.core.apply.call(null,om.dom.li,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"nav-item",new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.a,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"href","href",-793805698),"#"], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Placeholder"], null)))], null))),"\n        "], null))),"\n      "], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.header], null))),"\n      ",kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.content.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(data)).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"content",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["place holder"], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.div], null))),"\n "], null))),"\n"], null));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ch17248))){
return cljs.core.first.call(null,ch17248);
} else {
return cljs.core.apply.call(null,om.dom.span,null,ch17248);
}
});
clui_om.kioo_om_tut.init = (function init(data){
if(typeof clui_om.kioo_om_tut.t17252 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.kioo_om_tut.t17252 = (function (data,init,meta17253){
this.data = data;
this.init = init;
this.meta17253 = meta17253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.kioo_om_tut.t17252.prototype.om$core$IRender$ = true;

clui_om.kioo_om_tut.t17252.prototype.om$core$IRender$render$arity$1 = (function (this__5270__auto__){
var self__ = this;
var this__5270__auto____$1 = this;
return clui_om.kioo_om_tut.my_page.call(null,self__.data);
});

clui_om.kioo_om_tut.t17252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17254){
var self__ = this;
var _17254__$1 = this;
return self__.meta17253;
});

clui_om.kioo_om_tut.t17252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17254,meta17253__$1){
var self__ = this;
var _17254__$1 = this;
return (new clui_om.kioo_om_tut.t17252(self__.data,self__.init,meta17253__$1));
});

clui_om.kioo_om_tut.t17252.cljs$lang$type = true;

clui_om.kioo_om_tut.t17252.cljs$lang$ctorStr = "clui-om.kioo-om-tut/t17252";

clui_om.kioo_om_tut.t17252.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.kioo-om-tut/t17252");
});

clui_om.kioo_om_tut.__GT_t17252 = (function __GT_t17252(data__$1,init__$1,meta17253){
return (new clui_om.kioo_om_tut.t17252(data__$1,init__$1,meta17253));
});

}

return (new clui_om.kioo_om_tut.t17252(data,init,null));
});
clui_om.kioo_om_tut.other_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Greetings, Terra!",new cljs.core.Keyword(null,"spam","spam",166033737),"Spam spam spam",new cljs.core.Keyword(null,"hovering","hovering",-571536091),false,new cljs.core.Keyword(null,"hover-on-class","hover-on-class",-1937762798),"gold vanilla-border",new cljs.core.Keyword(null,"hover-off-class","hover-off-class",2120614683),""], null));
clui_om.kioo_om_tut.OTHER_ROOT = document.getElementById("kioo-other-div");
clui_om.kioo_om_tut.hover_set = (function hover_set(b){
cljs.core.swap_BANG_.call(null,clui_om.kioo_om_tut.other_state,cljs.core.assoc,new cljs.core.Keyword(null,"hovering","hovering",-571536091),b);

return console.log([cljs.core.str("Other-state hover status: "),cljs.core.str(new cljs.core.Keyword(null,"hovering","hovering",-571536091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clui_om.kioo_om_tut.other_state)))].join(''));
});
clui_om.kioo_om_tut.hover_class = (function hover_class(){
var class_picker = (cljs.core.truth_(new cljs.core.Keyword(null,"hovering","hovering",-571536091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clui_om.kioo_om_tut.other_state)))?new cljs.core.Keyword(null,"hover-on-class","hover-on-class",-1937762798):new cljs.core.Keyword(null,"hover-off-class","hover-off-class",2120614683));
return class_picker.call(null,cljs.core.deref.call(null,clui_om.kioo_om_tut.other_state));
});
clui_om.kioo_om_tut.my_greeter = (function my_greeter(p__17256){
var map__17258 = p__17256;
var map__17258__$1 = ((cljs.core.seq_QMARK_.call(null,map__17258))?cljs.core.apply.call(null,cljs.core.hash_map,map__17258):map__17258);
var msg = cljs.core.get.call(null,map__17258__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var ch17255 = kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.do__GT_.call(null,kioo.om.listen.call(null,new cljs.core.Keyword(null,"onMouseOver","onMouseOver",1787360977),((function (map__17258,map__17258__$1,msg){
return (function (){
return clui_om.kioo_om_tut.hover_set.call(null,true);
});})(map__17258,map__17258__$1,msg))
),kioo.om.listen.call(null,new cljs.core.Keyword(null,"onMouseOut","onMouseOut",1953812864),((function (map__17258,map__17258__$1,msg){
return (function (){
return clui_om.kioo_om_tut.hover_set.call(null,false);
});})(map__17258,map__17258__$1,msg))
),kioo.om.set_attr.call(null,new cljs.core.Keyword(null,"className","className",-1983287057),clui_om.kioo_om_tut.hover_class.call(null))).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"id","id",-1388402092),"kioo-other-frag"], null),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n      ",kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.do__GT_.call(null,kioo.om.content.call(null,msg),kioo.om.listen.call(null,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__17258,map__17258__$1,msg){
return (function (){
return alert(msg);
});})(map__17258,map__17258__$1,msg))
)).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"greeting",new cljs.core.Keyword(null,"style","style",-496642736),null], null),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["placeholder text"], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.div], null))),"\n "], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.div], null)))], null));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ch17255))){
return cljs.core.first.call(null,ch17255);
} else {
return cljs.core.apply.call(null,om.dom.span,null,ch17255);
}
});
clui_om.kioo_om_tut.other_init = (function other_init(data){
if(typeof clui_om.kioo_om_tut.t17262 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.kioo_om_tut.t17262 = (function (data,other_init,meta17263){
this.data = data;
this.other_init = other_init;
this.meta17263 = meta17263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.kioo_om_tut.t17262.prototype.om$core$IRender$ = true;

clui_om.kioo_om_tut.t17262.prototype.om$core$IRender$render$arity$1 = (function (this__5270__auto__){
var self__ = this;
var this__5270__auto____$1 = this;
return clui_om.kioo_om_tut.my_greeter.call(null,self__.data);
});

clui_om.kioo_om_tut.t17262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17264){
var self__ = this;
var _17264__$1 = this;
return self__.meta17263;
});

clui_om.kioo_om_tut.t17262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17264,meta17263__$1){
var self__ = this;
var _17264__$1 = this;
return (new clui_om.kioo_om_tut.t17262(self__.data,self__.other_init,meta17263__$1));
});

clui_om.kioo_om_tut.t17262.cljs$lang$type = true;

clui_om.kioo_om_tut.t17262.cljs$lang$ctorStr = "clui-om.kioo-om-tut/t17262";

clui_om.kioo_om_tut.t17262.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.kioo-om-tut/t17262");
});

clui_om.kioo_om_tut.__GT_t17262 = (function __GT_t17262(data__$1,other_init__$1,meta17263){
return (new clui_om.kioo_om_tut.t17262(data__$1,other_init__$1,meta17263));
});

}

return (new clui_om.kioo_om_tut.t17262(data,other_init,null));
});
clui_om.kioo_om_tut.gamma_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),"waiting"], null));
clui_om.kioo_om_tut.GAMMA_ROOT = document.getElementById("kioo-gamma-div");
clui_om.kioo_om_tut.gamma_handler = (function gamma_handler(e,owner){
console.log("gamma-handler called");

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"toggled","toggled",1679391819),cljs.core.not.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"toggled","toggled",1679391819))));
});
clui_om.kioo_om_tut.gamma_snippet = (function gamma_snippet(toggled,owner){
var ch17266 = kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"id","id",-1388402092),"gamma"], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n   ",kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.content.call(null,(cljs.core.truth_(toggled)?"ATHENS":"SPARTA")).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"id","id",-1388402092),"output"], null),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["placeholder text"], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.p], null))),"\n   ",cljs.core.apply.call(null,om.dom.p,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n      ",kioo.core.handle_wrapper.call(null,kioo.om.make_dom).call(null,kioo.om.listen.call(null,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__17265_SHARP_){
return clui_om.kioo_om_tut.gamma_handler.call(null,p1__17265_SHARP_,owner);
})).call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"value","value",305978217),"Toggle",new cljs.core.Keyword(null,"id","id",-1388402092),"toggle",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),new cljs.core.Keyword(null,"content","content",15833224),kioo.util.flatten_nodes.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"sym","sym",-1444860305),om.dom.input], null))),"\n   "], null))),"\n",cljs.core.apply.call(null,om.dom.div,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),null,new cljs.core.Keyword(null,"style","style",-496642736),null], null)),kioo.util.flatten_nodes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n\n"], null)))], null)))], null));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,ch17266))){
return cljs.core.first.call(null,ch17266);
} else {
return cljs.core.apply.call(null,om.dom.span,null,ch17266);
}
});
clui_om.kioo_om_tut.gamma_component = (function gamma_component(app,owner,opts){
if(typeof clui_om.kioo_om_tut.t17272 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.kioo_om_tut.t17272 = (function (opts,owner,app,gamma_component,meta17273){
this.opts = opts;
this.owner = owner;
this.app = app;
this.gamma_component = gamma_component;
this.meta17273 = meta17273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.kioo_om_tut.t17272.prototype.om$core$IRenderState$ = true;

clui_om.kioo_om_tut.t17272.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__17275){
var self__ = this;
var map__17276 = p__17275;
var map__17276__$1 = ((cljs.core.seq_QMARK_.call(null,map__17276))?cljs.core.apply.call(null,cljs.core.hash_map,map__17276):map__17276);
var toggled = cljs.core.get.call(null,map__17276__$1,new cljs.core.Keyword(null,"toggled","toggled",1679391819));
var ___$1 = this;
return clui_om.kioo_om_tut.gamma_snippet.call(null,toggled,self__.owner);
});

clui_om.kioo_om_tut.t17272.prototype.om$core$IInitState$ = true;

clui_om.kioo_om_tut.t17272.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggled","toggled",1679391819),false], null);
});

clui_om.kioo_om_tut.t17272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17274){
var self__ = this;
var _17274__$1 = this;
return self__.meta17273;
});

clui_om.kioo_om_tut.t17272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17274,meta17273__$1){
var self__ = this;
var _17274__$1 = this;
return (new clui_om.kioo_om_tut.t17272(self__.opts,self__.owner,self__.app,self__.gamma_component,meta17273__$1));
});

clui_om.kioo_om_tut.t17272.cljs$lang$type = true;

clui_om.kioo_om_tut.t17272.cljs$lang$ctorStr = "clui-om.kioo-om-tut/t17272";

clui_om.kioo_om_tut.t17272.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.kioo-om-tut/t17272");
});

clui_om.kioo_om_tut.__GT_t17272 = (function __GT_t17272(opts__$1,owner__$1,app__$1,gamma_component__$1,meta17273){
return (new clui_om.kioo_om_tut.t17272(opts__$1,owner__$1,app__$1,gamma_component__$1,meta17273));
});

}

return (new clui_om.kioo_om_tut.t17272(opts,owner,app,gamma_component,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),42,new cljs.core.Keyword(null,"end-line","end-line",1837326455),95,new cljs.core.Keyword(null,"column","column",2078222095),4,new cljs.core.Keyword(null,"line","line",212345235),89,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/kioo_om_tut.cljs"], null)));
});
/**
* Initialize the kioo-om-tut page
*/
clui_om.kioo_om_tut.main = (function main(){
console.log("Hello from kioo-om-tut!");

om.core.root.call(null,clui_om.kioo_om_tut.init,clui_om.kioo_om_tut.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),clui_om.kioo_om_tut.APP_ROOT], null));

om.core.root.call(null,clui_om.kioo_om_tut.other_init,clui_om.kioo_om_tut.other_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),clui_om.kioo_om_tut.OTHER_ROOT], null));

return om.core.root.call(null,clui_om.kioo_om_tut.gamma_component,clui_om.kioo_om_tut.gamma_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),clui_om.kioo_om_tut.GAMMA_ROOT], null));
});
goog.exportSymbol('clui_om.kioo_om_tut.main', clui_om.kioo_om_tut.main);
