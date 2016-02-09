// Compiled by ClojureScript 0.0-2496
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('om_tools.mixin');
goog.require('om.core');
goog.require('cljs.core.async');
var ufv___26561 = schema.utils.use_fn_validation;
var output_schema26554_26562 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema26555_26563 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);
var input_checker26556_26564 = schema.core.checker.call(null,input_schema26555_26563);
var output_checker26557_26565 = schema.core.checker.call(null,output_schema26554_26562);
/**
* Inputs: [target :- s/Any event-type :- s/Str callback :- (sm/=> s/Any s/Any)]
* Returns: (sm/=> s/Any)
* 
* Registers the callback on the supplied target for events of type
* `event-type`. Returns a function of no arguments that, when called,
* unregisters the callback.
*/
om_bootstrap.mixins.event_listener = ((function (ufv___26561,output_schema26554_26562,input_schema26555_26563,input_checker26556_26564,output_checker26557_26565){
return (function event_listener(G__26558,G__26559,G__26560){
var validate__10827__auto__ = ufv___26561.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26566 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26558,G__26559,G__26560], null);
var temp__4126__auto___26567 = input_checker26556_26564.call(null,args__10828__auto___26566);
if(cljs.core.truth_(temp__4126__auto___26567)){
var error__10829__auto___26568 = temp__4126__auto___26567;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__10829__auto___26568)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26568,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26566,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26555_26563,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var target = G__26558;
var event_type = G__26559;
var callback = G__26560;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__10827__auto__,ufv___26561,output_schema26554_26562,input_schema26555_26563,input_checker26556_26564,output_checker26557_26565){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__10827__auto__,ufv___26561,output_schema26554_26562,input_schema26555_26563,input_checker26556_26564,output_checker26557_26565))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__10827__auto__,ufv___26561,output_schema26554_26562,input_schema26555_26563,input_checker26556_26564,output_checker26557_26565){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__10827__auto__,ufv___26561,output_schema26554_26562,input_schema26555_26563,input_checker26556_26564,output_checker26557_26565))
} else {
return ((function (validate__10827__auto__,ufv___26561,output_schema26554_26562,input_schema26555_26563,input_checker26556_26564,output_checker26557_26565){
return (function (){
return null;
});
;})(validate__10827__auto__,ufv___26561,output_schema26554_26562,input_schema26555_26563,input_checker26556_26564,output_checker26557_26565))

}
}
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26569 = output_checker26557_26565.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26569)){
var error__10829__auto___26570 = temp__4126__auto___26569;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__10829__auto___26570)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26570,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26554_26562,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26561,output_schema26554_26562,input_schema26555_26563,input_checker26556_26564,output_checker26557_26565))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema26554_26562,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26555_26563], null)));
/**
* Handles a sequence of listeners for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target26575,event_type26576,callback26577){
var this26574 = this;
return ((function (this26574){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this26574))
.call(null,this26574,target26575,event_type26576,callback26577);
}), "componentWillUnmount": (function (){
var this26573 = this;
return ((function (this26573){
return (function (owner){
return owner.listeners.map(((function (this26573){
return (function (p1__26571_SHARP_){
return p1__26571_SHARP_.call(null);
});})(this26573))
);
});})(this26573))
.call(null,this26573);
}), "componentWillMount": (function (){
var this26572 = this;
return ((function (this26572){
return (function (owner){
return owner.listeners = [];
});})(this26572))
.call(null,this26572);
})};
/**
* Handles a sequence of timeouts for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f26582,timeout26583){
var this26581 = this;
return ((function (this26581){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this26581))
.call(null,this26581,f26582,timeout26583);
}), "componentWillUnmount": (function (){
var this26580 = this;
return ((function (this26580){
return (function (owner){
return owner.timeouts.map(((function (this26580){
return (function (p1__26578_SHARP_){
return clearTimeout(p1__26578_SHARP_);
});})(this26580))
);
});})(this26580))
.call(null,this26580);
}), "componentWillMount": (function (){
var this26579 = this;
return ((function (this26579){
return (function (owner){
return owner.timeouts = [];
});})(this26579))
.call(null,this26579);
})};
/**
* Accepts two DOM elements; returns true if the supplied node is
* nested inside the supplied root, false otherwise.
*/
om_bootstrap.mixins.in_root_QMARK_ = (function in_root_QMARK_(node,root){
var node__$1 = node;
while(true){
if((node__$1 == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,root,node__$1)){
return true;
} else {
var G__26584 = node__$1.parentNode;
node__$1 = G__26584;
continue;

}
}
break;
}
});
om_bootstrap.mixins.ESCAPE_KEY = (27);
/**
* For dropdowns, binds a handler for that sets the dropdown-mixin's
* `:open?` state to false if the user clicks outside the owning
* component OR hits the escape key.
*/
om_bootstrap.mixins.bind_root_close_handlers_BANG_ = (function bind_root_close_handlers_BANG_(owner){
var set_state = (owner["setDropdownState"]);
return owner.dropdownListeners = [om_bootstrap.mixins.event_listener.call(null,document,"click",((function (set_state){
return (function (e){
if(om_bootstrap.mixins.in_root_QMARK_.call(null,e.target,om.core.get_node.call(null,owner))){
return null;
} else {
return set_state.call(null,false);
}
});})(set_state))
),om_bootstrap.mixins.event_listener.call(null,document,"keyup",((function (set_state){
return (function (e){
if(cljs.core._EQ_.call(null,om_bootstrap.mixins.ESCAPE_KEY,e.keyCode)){
return set_state.call(null,false);
} else {
return null;
}
});})(set_state))
)];
});
/**
* If they're present on the owning object, removes the listeners
* registered by the dropdown mixin.
*/
om_bootstrap.mixins.unbind_root_close_handlers_BANG_ = (function unbind_root_close_handlers_BANG_(owner){
var temp__4126__auto__ = owner.dropdownListeners;
if(cljs.core.truth_(temp__4126__auto__)){
var listeners = temp__4126__auto__;
cljs.core.map.call(null,((function (listeners,temp__4126__auto__){
return (function (p1__26585_SHARP_){
return p1__26585_SHARP_.call(null);
});})(listeners,temp__4126__auto__))
,listeners);

return owner.dropdownListeners = null;
} else {
return null;
}
});
/**
* Mixin that manages a single piece of state - :open?. If a user
* clicks outside the component's owning dom element OR hits the escape
* key, the state will jump back to false.
* 
* Down the road this may need to register a callback when the state
* changes.
*/
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_26590){
var this26589 = this;
return ((function (this26589){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this26589))
.call(null,this26589,open_QMARK_26590);
}), "isDropdownOpen": (function (){
var this26588 = this;
return ((function (this26588){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this26588))
.call(null,this26588);
}), "componentWillUnmount": (function (){
var this26587 = this;
return ((function (this26587){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this26587))
.call(null,this26587);
}), "getInitialState": (function (){
var this26586 = this;
return ((function (this26586){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this26586))
.call(null,this26586);
})};
