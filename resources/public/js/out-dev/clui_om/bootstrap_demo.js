// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.bootstrap_demo');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om_bootstrap.button');
goog.require('cljs.core.async');
clui_om.bootstrap_demo.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"most-recent-activity","most-recent-activity",355781334),"Nothing yet"], null));
clui_om.bootstrap_demo.APP_ROOT = document.getElementById("bs-app-div");
clui_om.bootstrap_demo.ALT_ROOT = document.getElementById("bs-alt-div");
clui_om.bootstrap_demo.report_activity = (function report_activity(e,app){
var target = e.target;
var elt = target.nodeName;
var text = target.textContent;
var msg = [cljs.core.str("User interacted with "),cljs.core.str(elt),cljs.core.str(" labeled "),cljs.core.str(text)].join('');
console.log(msg);

return om.core.transact_BANG_.call(null,app,((function (target,elt,text,msg){
return (function (p1__15260_SHARP_){
return cljs.core.assoc.call(null,p1__15260_SHARP_,new cljs.core.Keyword(null,"most-recent-activity","most-recent-activity",355781334),msg);
});})(target,elt,text,msg))
);
});
clui_om.bootstrap_demo.top_level_widget = (function top_level_widget(app,owner,opts){
var echo = (function (p1__15261_SHARP_){
return clui_om.bootstrap_demo.report_activity.call(null,p1__15261_SHARP_,app);
});
if(typeof clui_om.bootstrap_demo.t15265 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.bootstrap_demo.t15265 = (function (echo,opts,owner,app,top_level_widget,meta15266){
this.echo = echo;
this.opts = opts;
this.owner = owner;
this.app = app;
this.top_level_widget = top_level_widget;
this.meta15266 = meta15266;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.bootstrap_demo.t15265.prototype.om$core$IRender$ = true;

clui_om.bootstrap_demo.t15265.prototype.om$core$IRender$render$arity$1 = ((function (echo){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "outerbox"},React.DOM.p({"className": "alert alert-info"},new cljs.core.Keyword(null,"most-recent-activity","most-recent-activity",355781334).cljs$core$IFn$_invoke$arity$1(self__.app)),React.DOM.p({"onClick": self__.echo, "classname": "alert alert-success"},"Click me!"),om_bootstrap.button.toolbar.call(null,cljs.core.PersistentArrayMap.EMPTY,om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.echo], null),"Default"),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.echo], null),"Primary"),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"success",new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.echo], null),"Success"),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info",new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.echo], null),"Info"),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"warning",new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.echo], null),"Warning"),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"danger",new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.echo], null),"Danger"),om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.echo], null),"Link")),om_bootstrap.button.dropdown.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"info",new cljs.core.Keyword(null,"title","title",636505583),"More..."], null),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.echo], null),"Action"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(2),new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.echo], null),"Another action"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(3),new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.echo], null),"Something else here"),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"divider?","divider?",1882560157),true], null)),om_bootstrap.button.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(4),new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.echo], null),"Separated link")));
});})(echo))
;

clui_om.bootstrap_demo.t15265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (echo){
return (function (_15267){
var self__ = this;
var _15267__$1 = this;
return self__.meta15266;
});})(echo))
;

clui_om.bootstrap_demo.t15265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (echo){
return (function (_15267,meta15266__$1){
var self__ = this;
var _15267__$1 = this;
return (new clui_om.bootstrap_demo.t15265(self__.echo,self__.opts,self__.owner,self__.app,self__.top_level_widget,meta15266__$1));
});})(echo))
;

clui_om.bootstrap_demo.t15265.cljs$lang$type = true;

clui_om.bootstrap_demo.t15265.cljs$lang$ctorStr = "clui-om.bootstrap-demo/t15265";

clui_om.bootstrap_demo.t15265.cljs$lang$ctorPrWriter = ((function (echo){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.bootstrap-demo/t15265");
});})(echo))
;

clui_om.bootstrap_demo.__GT_t15265 = ((function (echo){
return (function __GT_t15265(echo__$1,opts__$1,owner__$1,app__$1,top_level_widget__$1,meta15266){
return (new clui_om.bootstrap_demo.t15265(echo__$1,opts__$1,owner__$1,app__$1,top_level_widget__$1,meta15266));
});})(echo))
;

}

return (new clui_om.bootstrap_demo.t15265(echo,opts,owner,app,top_level_widget,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),82,new cljs.core.Keyword(null,"end-line","end-line",1837326455),44,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),25,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/bootstrap-demo.cljs"], null)));
});
/**
* Initialize the bootstrap demo page
*/
clui_om.bootstrap_demo.main = (function main(){
var msg = "main():: initializing bootstrap-demo.cljs";
console.log(msg);

return om.core.root.call(null,clui_om.bootstrap_demo.top_level_widget,clui_om.bootstrap_demo.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),clui_om.bootstrap_demo.APP_ROOT], null));
});
goog.exportSymbol('clui_om.bootstrap_demo.main', clui_om.bootstrap_demo.main);
