// Compiled by ClojureScript 0.0-2496
goog.provide('om_bootstrap.button');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.mixin');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.button.Button = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"block?","block?",1102479923)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004)),schema.core.Bool], true, false));
om_bootstrap.button.ButtonGroup = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.Bool], true, false));
var ufv___26130 = schema.utils.use_fn_validation;
var output_schema26124_26131 = schema.core.Any;
var input_schema26125_26132 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker26126_26133 = schema.core.checker.call(null,input_schema26125_26132);
var output_checker26127_26134 = schema.core.checker.call(null,output_schema26124_26131);
/**
* Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
*/
om_bootstrap.button.render_anchor = ((function (ufv___26130,output_schema26124_26131,input_schema26125_26132,input_checker26126_26133,output_checker26127_26134){
return (function render_anchor(G__26128,G__26129){
var validate__10827__auto__ = ufv___26130.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26128,G__26129], null);
var temp__4126__auto___26136 = input_checker26126_26133.call(null,args__10828__auto___26135);
if(cljs.core.truth_(temp__4126__auto___26136)){
var error__10829__auto___26137 = temp__4126__auto___26136;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__10829__auto___26137)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26137,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26135,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26125_26132,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var opts = G__26128;
var children = G__26129;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26138 = output_checker26127_26134.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26138)){
var error__10829__auto___26139 = temp__4126__auto___26138;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__10829__auto___26139)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26139,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26124_26131,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26130,output_schema26124_26131,input_schema26125_26132,input_checker26126_26133,output_checker26127_26134))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema26124_26131,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26125_26132], null)));
var ufv___26148 = schema.utils.use_fn_validation;
var output_schema26140_26149 = om_bootstrap.types.Component;
var input_schema26141_26150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,new cljs.core.Symbol(null,"props","props",2093813254,null)),schema.core.Any], null);
var input_checker26142_26151 = schema.core.checker.call(null,input_schema26141_26150);
var output_checker26143_26152 = schema.core.checker.call(null,output_schema26140_26149);
/**
* Inputs: [props :- Button & children]
* Returns: t/Component
* 
* Renders a button.
* @param {...*} var_args
*/
om_bootstrap.button.button = ((function (ufv___26148,output_schema26140_26149,input_schema26141_26150,input_checker26142_26151,output_checker26143_26152){
return (function() { 
var button__delegate = function (G__26144,rest26145){
var validate__10827__auto__ = ufv___26148.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26153 = cljs.core.list_STAR_.call(null,G__26144,rest26145);
var temp__4126__auto___26154 = input_checker26142_26151.call(null,args__10828__auto___26153);
if(cljs.core.truth_(temp__4126__auto___26154)){
var error__10829__auto___26155 = temp__4126__auto___26154;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__10829__auto___26155)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26155,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26153,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26141_26150,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var props = G__26144;
var children = rest26145;
while(true){
var vec__26147 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__26147,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__26147,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__3628__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs);
}
})())){
return om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children);
} else {
return om_tools.dom.element.call(null,React.DOM.button,om_bootstrap.util.merge_props.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses__$1),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26156 = output_checker26143_26152.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26156)){
var error__10829__auto___26157 = temp__4126__auto___26156;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__10829__auto___26157)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26157,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26140_26149,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
};
var button = function (G__26144,var_args){
var rest26145 = null;
if (arguments.length > 1) {
  rest26145 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return button__delegate.call(this,G__26144,rest26145);};
button.cljs$lang$maxFixedArity = 1;
button.cljs$lang$applyTo = (function (arglist__26158){
var G__26144 = cljs.core.first(arglist__26158);
var rest26145 = cljs.core.rest(arglist__26158);
return button__delegate(G__26144,rest26145);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;})(ufv___26148,output_schema26140_26149,input_schema26141_26150,input_checker26142_26151,output_checker26143_26152))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema26140_26149,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26141_26150], null)));
var ufv___26167 = schema.utils.use_fn_validation;
var output_schema26159_26168 = om_bootstrap.types.Component;
var input_schema26160_26169 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker26161_26170 = schema.core.checker.call(null,input_schema26160_26169);
var output_checker26162_26171 = schema.core.checker.call(null,output_schema26159_26168);
/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Renders a button toolbar.
* @param {...*} var_args
*/
om_bootstrap.button.toolbar = ((function (ufv___26167,output_schema26159_26168,input_schema26160_26169,input_checker26161_26170,output_checker26162_26171){
return (function() { 
var toolbar__delegate = function (G__26163,rest26164){
var validate__10827__auto__ = ufv___26167.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26172 = cljs.core.list_STAR_.call(null,G__26163,rest26164);
var temp__4126__auto___26173 = input_checker26161_26170.call(null,args__10828__auto___26172);
if(cljs.core.truth_(temp__4126__auto___26173)){
var error__10829__auto___26174 = temp__4126__auto___26173;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__10829__auto___26174)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26174,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26172,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26160_26169,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var opts = G__26163;
var children = rest26164;
while(true){
var vec__26166 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__26166,(0),null);
var props = cljs.core.nth.call(null,vec__26166,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs))), "role": "toolbar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26175 = output_checker26162_26171.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26175)){
var error__10829__auto___26176 = temp__4126__auto___26175;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__10829__auto___26176)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26176,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26159_26168,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
};
var toolbar = function (G__26163,var_args){
var rest26164 = null;
if (arguments.length > 1) {
  rest26164 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toolbar__delegate.call(this,G__26163,rest26164);};
toolbar.cljs$lang$maxFixedArity = 1;
toolbar.cljs$lang$applyTo = (function (arglist__26177){
var G__26163 = cljs.core.first(arglist__26177);
var rest26164 = cljs.core.rest(arglist__26177);
return toolbar__delegate(G__26163,rest26164);
});
toolbar.cljs$core$IFn$_invoke$arity$variadic = toolbar__delegate;
return toolbar;
})()
;})(ufv___26167,output_schema26159_26168,input_schema26160_26169,input_checker26161_26170,output_checker26162_26171))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema26159_26168,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26160_26169], null)));
var ufv___26186 = schema.utils.use_fn_validation;
var output_schema26178_26187 = om_bootstrap.types.Component;
var input_schema26179_26188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker26180_26189 = schema.core.checker.call(null,input_schema26179_26188);
var output_checker26181_26190 = schema.core.checker.call(null,output_schema26178_26187);
/**
* Inputs: [opts :- ButtonGroup & children]
* Returns: t/Component
* 
* Renders the supplied children in a wrapping button-group div.
* @param {...*} var_args
*/
om_bootstrap.button.button_group = ((function (ufv___26186,output_schema26178_26187,input_schema26179_26188,input_checker26180_26189,output_checker26181_26190){
return (function() { 
var button_group__delegate = function (G__26182,rest26183){
var validate__10827__auto__ = ufv___26186.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26191 = cljs.core.list_STAR_.call(null,G__26182,rest26183);
var temp__4126__auto___26192 = input_checker26180_26189.call(null,args__10828__auto___26191);
if(cljs.core.truth_(temp__4126__auto___26192)){
var error__10829__auto___26193 = temp__4126__auto___26192;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__10829__auto___26193)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26193,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26191,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26179_26188,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var opts = G__26182;
var children = rest26183;
while(true){
var vec__26185 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__26185,(0),null);
var props = cljs.core.nth.call(null,vec__26185,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26194 = output_checker26181_26190.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26194)){
var error__10829__auto___26195 = temp__4126__auto___26194;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__10829__auto___26195)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26195,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26178_26187,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
};
var button_group = function (G__26182,var_args){
var rest26183 = null;
if (arguments.length > 1) {
  rest26183 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return button_group__delegate.call(this,G__26182,rest26183);};
button_group.cljs$lang$maxFixedArity = 1;
button_group.cljs$lang$applyTo = (function (arglist__26196){
var G__26182 = cljs.core.first(arglist__26196);
var rest26183 = cljs.core.rest(arglist__26196);
return button_group__delegate(G__26182,rest26183);
});
button_group.cljs$core$IFn$_invoke$arity$variadic = button_group__delegate;
return button_group;
})()
;})(ufv___26186,output_schema26178_26187,input_schema26179_26188,input_checker26180_26189,output_checker26181_26190))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema26178_26187,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26179_26188], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function render_nav_item(props,open_QMARK_,children){
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function render_button_group(props,open_QMARK_,children){
var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));

var component_fnk__15114__auto___26219 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema26201 = schema.core.Any;
var input_schema26202 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map26200","map26200",1181918331,null))], null);
var input_checker26203 = schema.core.checker.call(null,input_schema26202);
var output_checker26204 = schema.core.checker.call(null,output_schema26201);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204){
return (function constructor26198(G__26205){
var validate__10827__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26220 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26205], null);
var temp__4126__auto___26221 = input_checker26203.call(null,args__10828__auto___26220);
if(cljs.core.truth_(temp__4126__auto___26221)){
var error__10829__auto___26222 = temp__4126__auto___26221;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor26198","constructor26198",-1757780535,null),cljs.core.pr_str.call(null,error__10829__auto___26222)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26222,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26220,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26202,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var map26200 = G__26205;
while(true){
if(cljs.core.map_QMARK_.call(null,map26200)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map26200)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map26200,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t26211 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t26211 = (function (output_schema26201,output_checker26204,owner,validate__10827__auto__,constructor26198,input_schema26202,input_checker26203,G__26205,map26200,ufv__,meta26212){
this.output_schema26201 = output_schema26201;
this.output_checker26204 = output_checker26204;
this.owner = owner;
this.validate__10827__auto__ = validate__10827__auto__;
this.constructor26198 = constructor26198;
this.input_schema26202 = input_schema26202;
this.input_checker26203 = input_checker26203;
this.G__26205 = G__26205;
this.map26200 = map26200;
this.ufv__ = ufv__;
this.meta26212 = meta26212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t26211.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t26211.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__10827__auto__,ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__10827__auto__,ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204))
;

om_bootstrap.button.t26211.prototype.om$core$IRender$ = true;

om_bootstrap.button.t26211.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__10827__auto__,ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__26214 = om.core.get_props.call(null,self__.owner);
var map__26214__$1 = ((cljs.core.seq_QMARK_.call(null,map__26214))?cljs.core.apply.call(null,cljs.core.hash_map,map__26214):map__26214);
var children = cljs.core.get.call(null,map__26214__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__26214__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__26215 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__26215,(0),null);
var props = cljs.core.nth.call(null,vec__26215,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__26214,map__26214__$1,children,opts,vec__26215,bs,props,classes,___$1,owner,validate__10827__auto__,ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204){
return (function (e){
var temp__4126__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var on_select = temp__4126__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__26214,map__26214__$1,children,opts,vec__26215,bs,props,classes,___$1,owner,validate__10827__auto__,ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204))
;
var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"tabIndex": "-1", "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "onClick": om_tools.dom.format_opts.call(null,handle_click)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));
var li_attrs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null);
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
});})(owner,validate__10827__auto__,ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204))
;

om_bootstrap.button.t26211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__10827__auto__,ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204){
return (function (_26213){
var self__ = this;
var _26213__$1 = this;
return self__.meta26212;
});})(owner,validate__10827__auto__,ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204))
;

om_bootstrap.button.t26211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__10827__auto__,ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204){
return (function (_26213,meta26212__$1){
var self__ = this;
var _26213__$1 = this;
return (new om_bootstrap.button.t26211(self__.output_schema26201,self__.output_checker26204,self__.owner,self__.validate__10827__auto__,self__.constructor26198,self__.input_schema26202,self__.input_checker26203,self__.G__26205,self__.map26200,self__.ufv__,meta26212__$1));
});})(owner,validate__10827__auto__,ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204))
;

om_bootstrap.button.t26211.cljs$lang$type = true;

om_bootstrap.button.t26211.cljs$lang$ctorStr = "om-bootstrap.button/t26211";

om_bootstrap.button.t26211.cljs$lang$ctorPrWriter = ((function (owner,validate__10827__auto__,ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"om-bootstrap.button/t26211");
});})(owner,validate__10827__auto__,ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204))
;

om_bootstrap.button.__GT_t26211 = ((function (owner,validate__10827__auto__,ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204){
return (function __GT_t26211(output_schema26201__$1,output_checker26204__$1,owner__$1,validate__10827__auto____$1,constructor26198__$1,input_schema26202__$1,input_checker26203__$1,G__26205__$1,map26200__$1,ufv____$1,meta26212){
return (new om_bootstrap.button.t26211(output_schema26201__$1,output_checker26204__$1,owner__$1,validate__10827__auto____$1,constructor26198__$1,input_schema26202__$1,input_checker26203__$1,G__26205__$1,map26200__$1,ufv____$1,meta26212));
});})(owner,validate__10827__auto__,ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204))
;

}

return (new om_bootstrap.button.t26211(output_schema26201,output_checker26204,owner,validate__10827__auto__,constructor26198,input_schema26202,input_checker26203,G__26205,map26200,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26223 = output_checker26204.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26223)){
var error__10829__auto___26224 = temp__4126__auto___26223;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor26198","constructor26198",-1757780535,null),cljs.core.pr_str.call(null,error__10829__auto___26224)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26224,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26201,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv__,output_schema26201,input_schema26202,input_checker26203,output_checker26204))
,schema.core.make_fn_schema.call(null,output_schema26201,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26202], null)));
})();
/**
* Generates an Om component of a menu item. Done this way so that
* wrapping dropdowns will have access to the Om state.
* @param {...*} var_args
*/
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__15114__auto___26219){
return (function() { 
var menu_item_STAR___delegate = function (data__15115__auto__,owner26197,p__26216){
var vec__26218 = p__26216;
var opts__15116__auto__ = cljs.core.nth.call(null,vec__26218,(0),null);
return component_fnk__15114__auto___26219.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15116__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner26197,new cljs.core.Keyword(null,"data","data",-232669377),data__15115__auto__], null));
};
var menu_item_STAR_ = function (data__15115__auto__,owner26197,var_args){
var p__26216 = null;
if (arguments.length > 2) {
  p__26216 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return menu_item_STAR___delegate.call(this,data__15115__auto__,owner26197,p__26216);};
menu_item_STAR_.cljs$lang$maxFixedArity = 2;
menu_item_STAR_.cljs$lang$applyTo = (function (arglist__26225){
var data__15115__auto__ = cljs.core.first(arglist__26225);
arglist__26225 = cljs.core.next(arglist__26225);
var owner26197 = cljs.core.first(arglist__26225);
var p__26216 = cljs.core.rest(arglist__26225);
return menu_item_STAR___delegate(data__15115__auto__,owner26197,p__26216);
});
menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = menu_item_STAR___delegate;
return menu_item_STAR_;
})()
;})(component_fnk__15114__auto___26219))
;

om_bootstrap.button.__GT_menu_item_STAR_ = (function() {
var __GT_menu_item_STAR_ = null;
var __GT_menu_item_STAR___1 = (function (cursor__15083__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__15083__auto__);
});
var __GT_menu_item_STAR___2 = (function (cursor__15083__auto__,m26199){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__15083__auto__,m26199);
});
__GT_menu_item_STAR_ = function(cursor__15083__auto__,m26199){
switch(arguments.length){
case 1:
return __GT_menu_item_STAR___1.call(this,cursor__15083__auto__);
case 2:
return __GT_menu_item_STAR___2.call(this,cursor__15083__auto__,m26199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_menu_item_STAR___1;
__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_menu_item_STAR___2;
return __GT_menu_item_STAR_;
})()
;
var ufv___26232 = schema.utils.use_fn_validation;
var output_schema26226_26233 = om_bootstrap.types.Component;
var input_schema26227_26234 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker26228_26235 = schema.core.checker.call(null,input_schema26227_26234);
var output_checker26229_26236 = schema.core.checker.call(null,output_schema26226_26233);
/**
* Inputs: [opts :- MenuItem & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.button.menu_item = ((function (ufv___26232,output_schema26226_26233,input_schema26227_26234,input_checker26228_26235,output_checker26229_26236){
return (function() { 
var menu_item__delegate = function (G__26230,rest26231){
var validate__10827__auto__ = ufv___26232.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26237 = cljs.core.list_STAR_.call(null,G__26230,rest26231);
var temp__4126__auto___26238 = input_checker26228_26235.call(null,args__10828__auto___26237);
if(cljs.core.truth_(temp__4126__auto___26238)){
var error__10829__auto___26239 = temp__4126__auto___26238;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__10829__auto___26239)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26239,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26237,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26227_26234,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var opts = G__26230;
var children = rest26231;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26240 = output_checker26229_26236.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26240)){
var error__10829__auto___26241 = temp__4126__auto___26240;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__10829__auto___26241)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26241,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26226_26233,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
};
var menu_item = function (G__26230,var_args){
var rest26231 = null;
if (arguments.length > 1) {
  rest26231 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return menu_item__delegate.call(this,G__26230,rest26231);};
menu_item.cljs$lang$maxFixedArity = 1;
menu_item.cljs$lang$applyTo = (function (arglist__26242){
var G__26230 = cljs.core.first(arglist__26242);
var rest26231 = cljs.core.rest(arglist__26242);
return menu_item__delegate(G__26230,rest26231);
});
menu_item.cljs$core$IFn$_invoke$arity$variadic = menu_item__delegate;
return menu_item;
})()
;})(ufv___26232,output_schema26226_26233,input_schema26227_26234,input_checker26228_26235,output_checker26229_26236))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema26226_26233,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26227_26234], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___26252 = schema.utils.use_fn_validation;
var output_schema26244_26253 = om_bootstrap.types.Component;
var input_schema26245_26254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker26246_26255 = schema.core.checker.call(null,input_schema26245_26254);
var output_checker26247_26256 = schema.core.checker.call(null,output_schema26244_26253);
/**
* Inputs: [opts :- DropdownMenu & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.button.dropdown_menu = ((function (ufv___26252,output_schema26244_26253,input_schema26245_26254,input_checker26246_26255,output_checker26247_26256){
return (function() { 
var dropdown_menu__delegate = function (G__26248,rest26249){
var validate__10827__auto__ = ufv___26252.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26257 = cljs.core.list_STAR_.call(null,G__26248,rest26249);
var temp__4126__auto___26258 = input_checker26246_26255.call(null,args__10828__auto___26257);
if(cljs.core.truth_(temp__4126__auto___26258)){
var error__10829__auto___26259 = temp__4126__auto___26258;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__10829__auto___26259)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26259,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26257,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26245_26254,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var opts = G__26248;
var children = rest26249;
while(true){
var vec__26251 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__26251,(0),null);
var props = cljs.core.nth.call(null,vec__26251,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4124__auto__)){
var on_select = temp__4124__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4124__auto__,vec__26251,bs,props,classes,ul_attrs,validate__10827__auto__,ufv___26252,output_schema26244_26253,input_schema26245_26254,input_checker26246_26255,output_checker26247_26256){
return (function (p1__26243_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__26243_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4124__auto__,vec__26251,bs,props,classes,ul_attrs,validate__10827__auto__,ufv___26252,output_schema26244_26253,input_schema26245_26254,input_checker26246_26255,output_checker26247_26256))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26260 = output_checker26247_26256.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26260)){
var error__10829__auto___26261 = temp__4126__auto___26260;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__10829__auto___26261)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26261,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26244_26253,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
};
var dropdown_menu = function (G__26248,var_args){
var rest26249 = null;
if (arguments.length > 1) {
  rest26249 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return dropdown_menu__delegate.call(this,G__26248,rest26249);};
dropdown_menu.cljs$lang$maxFixedArity = 1;
dropdown_menu.cljs$lang$applyTo = (function (arglist__26262){
var G__26248 = cljs.core.first(arglist__26262);
var rest26249 = cljs.core.rest(arglist__26262);
return dropdown_menu__delegate(G__26248,rest26249);
});
dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = dropdown_menu__delegate;
return dropdown_menu;
})()
;})(ufv___26252,output_schema26244_26253,input_schema26245_26254,input_checker26246_26255,output_checker26247_26256))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema26244_26253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26245_26254], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__15085__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__15085__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__15085__auto__;
})();

var component_fnk__15114__auto___26286 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema26268 = schema.core.Any;
var input_schema26269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map26267","map26267",435966844,null))], null);
var input_checker26270 = schema.core.checker.call(null,input_schema26269);
var output_checker26271 = schema.core.checker.call(null,output_schema26268);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271){
return (function constructor26265(G__26272){
var validate__10827__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26287 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26272], null);
var temp__4126__auto___26288 = input_checker26270.call(null,args__10828__auto___26287);
if(cljs.core.truth_(temp__4126__auto___26288)){
var error__10829__auto___26289 = temp__4126__auto___26288;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor26265","constructor26265",14079807,null),cljs.core.pr_str.call(null,error__10829__auto___26289)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26289,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26287,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26269,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var map26267 = G__26272;
while(true){
if(cljs.core.map_QMARK_.call(null,map26267)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map26267)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map26267,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map26267,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t26278 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t26278 = (function (input_checker26270,owner,validate__10827__auto__,output_schema26268,input_schema26269,G__26272,state,output_checker26271,map26267,ufv__,constructor26265,meta26279){
this.input_checker26270 = input_checker26270;
this.owner = owner;
this.validate__10827__auto__ = validate__10827__auto__;
this.output_schema26268 = output_schema26268;
this.input_schema26269 = input_schema26269;
this.G__26272 = G__26272;
this.state = state;
this.output_checker26271 = output_checker26271;
this.map26267 = map26267;
this.ufv__ = ufv__;
this.constructor26265 = constructor26265;
this.meta26279 = meta26279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t26278.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t26278.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271))
;

om_bootstrap.button.t26278.prototype.om$core$IRender$ = true;

om_bootstrap.button.t26278.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__26281 = om.core.get_props.call(null,self__.owner);
var map__26281__$1 = ((cljs.core.seq_QMARK_.call(null,map__26281))?cljs.core.apply.call(null,cljs.core.hash_map,map__26281):map__26281);
var children = cljs.core.get.call(null,map__26281__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__26281__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__26282 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__26282,(0),null);
var props = cljs.core.nth.call(null,vec__26282,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__26281,map__26281__$1,children,opts,vec__26282,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__26281,map__26281__$1,children,opts,vec__26282,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271))
], null);
var update_child_props = ((function (open_QMARK_,map__26281,map__26281__$1,children,opts,vec__26282,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__3628__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__26281,map__26281__$1,children,opts,vec__26282,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271){
return (function (key){
var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4124__auto__)){
var os = temp__4124__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__26281,map__26281__$1,children,opts,vec__26282,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__26281,map__26281__$1,children,opts,vec__26282,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__26281,map__26281__$1,children,opts,vec__26282,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271){
return (function (p1__26263_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__26263_SHARP_,update_child_props);
});})(open_QMARK_,map__26281,map__26281__$1,children,opts,vec__26282,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271))
,children))], null));
});})(state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271))
;

om_bootstrap.button.t26278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271){
return (function (_26280){
var self__ = this;
var _26280__$1 = this;
return self__.meta26279;
});})(state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271))
;

om_bootstrap.button.t26278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271){
return (function (_26280,meta26279__$1){
var self__ = this;
var _26280__$1 = this;
return (new om_bootstrap.button.t26278(self__.input_checker26270,self__.owner,self__.validate__10827__auto__,self__.output_schema26268,self__.input_schema26269,self__.G__26272,self__.state,self__.output_checker26271,self__.map26267,self__.ufv__,self__.constructor26265,meta26279__$1));
});})(state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271))
;

om_bootstrap.button.t26278.cljs$lang$type = true;

om_bootstrap.button.t26278.cljs$lang$ctorStr = "om-bootstrap.button/t26278";

om_bootstrap.button.t26278.cljs$lang$ctorPrWriter = ((function (state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"om-bootstrap.button/t26278");
});})(state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271))
;

om_bootstrap.button.__GT_t26278 = ((function (state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271){
return (function __GT_t26278(input_checker26270__$1,owner__$1,validate__10827__auto____$1,output_schema26268__$1,input_schema26269__$1,G__26272__$1,state__$1,output_checker26271__$1,map26267__$1,ufv____$1,constructor26265__$1,meta26279){
return (new om_bootstrap.button.t26278(input_checker26270__$1,owner__$1,validate__10827__auto____$1,output_schema26268__$1,input_schema26269__$1,G__26272__$1,state__$1,output_checker26271__$1,map26267__$1,ufv____$1,constructor26265__$1,meta26279));
});})(state,owner,validate__10827__auto__,ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271))
;

}

return (new om_bootstrap.button.t26278(input_checker26270,owner,validate__10827__auto__,output_schema26268,input_schema26269,G__26272,state,output_checker26271,map26267,ufv__,constructor26265,null));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26290 = output_checker26271.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26290)){
var error__10829__auto___26291 = temp__4126__auto___26290;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor26265","constructor26265",14079807,null),cljs.core.pr_str.call(null,error__10829__auto___26291)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26291,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26268,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv__,output_schema26268,input_schema26269,input_checker26270,output_checker26271))
,schema.core.make_fn_schema.call(null,output_schema26268,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26269], null)));
})();
/**
* Generates a dropdown button component responsible for its own
* toggled state. The open? toggling is handled through a dropdown
* mixin.
* @param {...*} var_args
*/
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__15114__auto___26286){
return (function() { 
var dropdown_STAR___delegate = function (data__15115__auto__,owner26264,p__26283){
var vec__26285 = p__26283;
var opts__15116__auto__ = cljs.core.nth.call(null,vec__26285,(0),null);
return component_fnk__15114__auto___26286.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner26264),new cljs.core.Keyword(null,"opts","opts",155075701),opts__15116__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner26264,new cljs.core.Keyword(null,"data","data",-232669377),data__15115__auto__], null));
};
var dropdown_STAR_ = function (data__15115__auto__,owner26264,var_args){
var p__26283 = null;
if (arguments.length > 2) {
  p__26283 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return dropdown_STAR___delegate.call(this,data__15115__auto__,owner26264,p__26283);};
dropdown_STAR_.cljs$lang$maxFixedArity = 2;
dropdown_STAR_.cljs$lang$applyTo = (function (arglist__26292){
var data__15115__auto__ = cljs.core.first(arglist__26292);
arglist__26292 = cljs.core.next(arglist__26292);
var owner26264 = cljs.core.first(arglist__26292);
var p__26283 = cljs.core.rest(arglist__26292);
return dropdown_STAR___delegate(data__15115__auto__,owner26264,p__26283);
});
dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = dropdown_STAR___delegate;
return dropdown_STAR_;
})()
;})(component_fnk__15114__auto___26286))
;

om_bootstrap.button.__GT_dropdown_STAR_ = (function() {
var __GT_dropdown_STAR_ = null;
var __GT_dropdown_STAR___1 = (function (cursor__15083__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__15083__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});
var __GT_dropdown_STAR___2 = (function (cursor__15083__auto__,m26266){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__15083__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m26266));
});
__GT_dropdown_STAR_ = function(cursor__15083__auto__,m26266){
switch(arguments.length){
case 1:
return __GT_dropdown_STAR___1.call(this,cursor__15083__auto__);
case 2:
return __GT_dropdown_STAR___2.call(this,cursor__15083__auto__,m26266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_dropdown_STAR___1;
__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_dropdown_STAR___2;
return __GT_dropdown_STAR_;
})()
;
var ufv___26299 = schema.utils.use_fn_validation;
var output_schema26293_26300 = om_bootstrap.types.Component;
var input_schema26294_26301 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker26295_26302 = schema.core.checker.call(null,input_schema26294_26301);
var output_checker26296_26303 = schema.core.checker.call(null,output_schema26293_26300);
/**
* Inputs: [opts :- DropdownButton & children]
* Returns: t/Component
* 
* Returns a dropdown button component. The component manages its own
* dropdown state.
* @param {...*} var_args
*/
om_bootstrap.button.dropdown = ((function (ufv___26299,output_schema26293_26300,input_schema26294_26301,input_checker26295_26302,output_checker26296_26303){
return (function() { 
var dropdown__delegate = function (G__26297,rest26298){
var validate__10827__auto__ = ufv___26299.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26304 = cljs.core.list_STAR_.call(null,G__26297,rest26298);
var temp__4126__auto___26305 = input_checker26295_26302.call(null,args__10828__auto___26304);
if(cljs.core.truth_(temp__4126__auto___26305)){
var error__10829__auto___26306 = temp__4126__auto___26305;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__10829__auto___26306)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26306,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26304,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26294_26301,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var opts = G__26297;
var children = rest26298;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26307 = output_checker26296_26303.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26307)){
var error__10829__auto___26308 = temp__4126__auto___26307;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__10829__auto___26308)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26308,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26293_26300,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
};
var dropdown = function (G__26297,var_args){
var rest26298 = null;
if (arguments.length > 1) {
  rest26298 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return dropdown__delegate.call(this,G__26297,rest26298);};
dropdown.cljs$lang$maxFixedArity = 1;
dropdown.cljs$lang$applyTo = (function (arglist__26309){
var G__26297 = cljs.core.first(arglist__26309);
var rest26298 = cljs.core.rest(arglist__26309);
return dropdown__delegate(G__26297,rest26298);
});
dropdown.cljs$core$IFn$_invoke$arity$variadic = dropdown__delegate;
return dropdown;
})()
;})(ufv___26299,output_schema26293_26300,input_schema26294_26301,input_checker26295_26302,output_checker26296_26303))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema26293_26300,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26294_26301], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__15085__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__15085__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__15085__auto__;
})();

var component_fnk__15114__auto___26332 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema26314 = schema.core.Any;
var input_schema26315 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map26313","map26313",-323438,null))], null);
var input_checker26316 = schema.core.checker.call(null,input_schema26315);
var output_checker26317 = schema.core.checker.call(null,output_schema26314);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317){
return (function constructor26311(G__26318){
var validate__10827__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26333 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26318], null);
var temp__4126__auto___26334 = input_checker26316.call(null,args__10828__auto___26333);
if(cljs.core.truth_(temp__4126__auto___26334)){
var error__10829__auto___26335 = temp__4126__auto___26334;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor26311","constructor26311",1868449868,null),cljs.core.pr_str.call(null,error__10829__auto___26335)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26335,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26333,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26315,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var map26313 = G__26318;
while(true){
if(cljs.core.map_QMARK_.call(null,map26313)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map26313)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map26313,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map26313,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t26324 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t26324 = (function (owner,validate__10827__auto__,constructor26311,input_schema26315,input_checker26316,output_checker26317,map26313,G__26318,state,output_schema26314,ufv__,meta26325){
this.owner = owner;
this.validate__10827__auto__ = validate__10827__auto__;
this.constructor26311 = constructor26311;
this.input_schema26315 = input_schema26315;
this.input_checker26316 = input_checker26316;
this.output_checker26317 = output_checker26317;
this.map26313 = map26313;
this.G__26318 = G__26318;
this.state = state;
this.output_schema26314 = output_schema26314;
this.ufv__ = ufv__;
this.meta26325 = meta26325;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t26324.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t26324.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317))
;

om_bootstrap.button.t26324.prototype.om$core$IRender$ = true;

om_bootstrap.button.t26324.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__26327 = om.core.get_props.call(null,self__.owner);
var map__26327__$1 = ((cljs.core.seq_QMARK_.call(null,map__26327))?cljs.core.apply.call(null,cljs.core.hash_map,map__26327):map__26327);
var children = cljs.core.get.call(null,map__26327__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__26327__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__26328 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__26328,(0),null);
var props = cljs.core.nth.call(null,vec__26328,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__26327,map__26327__$1,children,opts,vec__26328,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317){
return (function (e){
if(cljs.core.truth_(open_QMARK_)){
set_dropdown.call(null,false);
} else {
}

var temp__4126__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return f.call(null,e);
} else {
return null;
}
});})(open_QMARK_,map__26327,map__26327__$1,children,opts,vec__26328,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__26327,map__26327__$1,children,opts,vec__26328,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__26327,map__26327__$1,children,opts,vec__26328,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__26327,map__26327__$1,children,opts,vec__26328,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317){
return (function (k){
var temp__4126__auto___26336 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto___26336)){
var f_26337 = temp__4126__auto___26336;
f_26337.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__26327,map__26327__$1,children,opts,vec__26328,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317))
;

om_bootstrap.button.t26324.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317){
return (function (_26326){
var self__ = this;
var _26326__$1 = this;
return self__.meta26325;
});})(state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317))
;

om_bootstrap.button.t26324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317){
return (function (_26326,meta26325__$1){
var self__ = this;
var _26326__$1 = this;
return (new om_bootstrap.button.t26324(self__.owner,self__.validate__10827__auto__,self__.constructor26311,self__.input_schema26315,self__.input_checker26316,self__.output_checker26317,self__.map26313,self__.G__26318,self__.state,self__.output_schema26314,self__.ufv__,meta26325__$1));
});})(state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317))
;

om_bootstrap.button.t26324.cljs$lang$type = true;

om_bootstrap.button.t26324.cljs$lang$ctorStr = "om-bootstrap.button/t26324";

om_bootstrap.button.t26324.cljs$lang$ctorPrWriter = ((function (state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"om-bootstrap.button/t26324");
});})(state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317))
;

om_bootstrap.button.__GT_t26324 = ((function (state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317){
return (function __GT_t26324(owner__$1,validate__10827__auto____$1,constructor26311__$1,input_schema26315__$1,input_checker26316__$1,output_checker26317__$1,map26313__$1,G__26318__$1,state__$1,output_schema26314__$1,ufv____$1,meta26325){
return (new om_bootstrap.button.t26324(owner__$1,validate__10827__auto____$1,constructor26311__$1,input_schema26315__$1,input_checker26316__$1,output_checker26317__$1,map26313__$1,G__26318__$1,state__$1,output_schema26314__$1,ufv____$1,meta26325));
});})(state,owner,validate__10827__auto__,ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317))
;

}

return (new om_bootstrap.button.t26324(owner,validate__10827__auto__,constructor26311,input_schema26315,input_checker26316,output_checker26317,map26313,G__26318,state,output_schema26314,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26338 = output_checker26317.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26338)){
var error__10829__auto___26339 = temp__4126__auto___26338;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor26311","constructor26311",1868449868,null),cljs.core.pr_str.call(null,error__10829__auto___26339)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26339,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26314,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv__,output_schema26314,input_schema26315,input_checker26316,output_checker26317))
,schema.core.make_fn_schema.call(null,output_schema26314,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26315], null)));
})();
/**
* Generates a split button component responsible for its own
* toggled state. The open? toggling is handled through a dropdown
* mixin.
* @param {...*} var_args
*/
om_bootstrap.button.split_STAR_ = ((function (component_fnk__15114__auto___26332){
return (function() { 
var split_STAR___delegate = function (data__15115__auto__,owner26310,p__26329){
var vec__26331 = p__26329;
var opts__15116__auto__ = cljs.core.nth.call(null,vec__26331,(0),null);
return component_fnk__15114__auto___26332.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner26310),new cljs.core.Keyword(null,"opts","opts",155075701),opts__15116__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner26310,new cljs.core.Keyword(null,"data","data",-232669377),data__15115__auto__], null));
};
var split_STAR_ = function (data__15115__auto__,owner26310,var_args){
var p__26329 = null;
if (arguments.length > 2) {
  p__26329 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return split_STAR___delegate.call(this,data__15115__auto__,owner26310,p__26329);};
split_STAR_.cljs$lang$maxFixedArity = 2;
split_STAR_.cljs$lang$applyTo = (function (arglist__26340){
var data__15115__auto__ = cljs.core.first(arglist__26340);
arglist__26340 = cljs.core.next(arglist__26340);
var owner26310 = cljs.core.first(arglist__26340);
var p__26329 = cljs.core.rest(arglist__26340);
return split_STAR___delegate(data__15115__auto__,owner26310,p__26329);
});
split_STAR_.cljs$core$IFn$_invoke$arity$variadic = split_STAR___delegate;
return split_STAR_;
})()
;})(component_fnk__15114__auto___26332))
;

om_bootstrap.button.__GT_split_STAR_ = (function() {
var __GT_split_STAR_ = null;
var __GT_split_STAR___1 = (function (cursor__15083__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__15083__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});
var __GT_split_STAR___2 = (function (cursor__15083__auto__,m26312){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__15083__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m26312));
});
__GT_split_STAR_ = function(cursor__15083__auto__,m26312){
switch(arguments.length){
case 1:
return __GT_split_STAR___1.call(this,cursor__15083__auto__);
case 2:
return __GT_split_STAR___2.call(this,cursor__15083__auto__,m26312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_split_STAR___1;
__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_split_STAR___2;
return __GT_split_STAR_;
})()
;
var ufv___26347 = schema.utils.use_fn_validation;
var output_schema26341_26348 = schema.core.Any;
var input_schema26342_26349 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker26343_26350 = schema.core.checker.call(null,input_schema26342_26349);
var output_checker26344_26351 = schema.core.checker.call(null,output_schema26341_26348);
/**
* Inputs: [opts :- SplitButton & children]
* @param {...*} var_args
*/
om_bootstrap.button.split = ((function (ufv___26347,output_schema26341_26348,input_schema26342_26349,input_checker26343_26350,output_checker26344_26351){
return (function() { 
var split__delegate = function (G__26345,rest26346){
var validate__10827__auto__ = ufv___26347.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26352 = cljs.core.list_STAR_.call(null,G__26345,rest26346);
var temp__4126__auto___26353 = input_checker26343_26350.call(null,args__10828__auto___26352);
if(cljs.core.truth_(temp__4126__auto___26353)){
var error__10829__auto___26354 = temp__4126__auto___26353;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__10829__auto___26354)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26354,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26352,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26342_26349,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var opts = G__26345;
var children = rest26346;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26355 = output_checker26344_26351.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26355)){
var error__10829__auto___26356 = temp__4126__auto___26355;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__10829__auto___26356)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26356,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26341_26348,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
};
var split = function (G__26345,var_args){
var rest26346 = null;
if (arguments.length > 1) {
  rest26346 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return split__delegate.call(this,G__26345,rest26346);};
split.cljs$lang$maxFixedArity = 1;
split.cljs$lang$applyTo = (function (arglist__26357){
var G__26345 = cljs.core.first(arglist__26357);
var rest26346 = cljs.core.rest(arglist__26357);
return split__delegate(G__26345,rest26346);
});
split.cljs$core$IFn$_invoke$arity$variadic = split__delegate;
return split;
})()
;})(ufv___26347,output_schema26341_26348,input_schema26342_26349,input_checker26343_26350,output_checker26344_26351))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema26341_26348,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26342_26349], null)));
