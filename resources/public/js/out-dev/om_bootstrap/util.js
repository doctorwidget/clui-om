// Compiled by ClojureScript 0.0-2496
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('om.core');
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by looking up the proper merge function and in the
* supplied map of key -> merge-fn and using that for the big merge. If
* a key doesn't have a merge function, the right value wins (as with
* merge).
*/
om_bootstrap.util.merge_with_fns = (function merge_with_fns(k__GT_fn,maps){
var merge_entry = (function merge_entry(m,e){
var k = cljs.core.key.call(null,e);
var v = cljs.core.val.call(null,e);
var temp__4124__auto__ = (function (){var and__3616__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__3616__auto__){
return k__GT_fn.call(null,k);
} else {
return and__3616__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function merge(m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__3628__auto__ = m1;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___26446 = schema.utils.use_fn_validation;
var output_schema26441_26447 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema26442_26448 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);
var input_checker26443_26449 = schema.core.checker.call(null,input_schema26442_26448);
var output_checker26444_26450 = schema.core.checker.call(null,output_schema26441_26447);
/**
* Inputs: [x :- s/Any]
* Returns: [s/Any]
*/
om_bootstrap.util.collectify = ((function (ufv___26446,output_schema26441_26447,input_schema26442_26448,input_checker26443_26449,output_checker26444_26450){
return (function collectify(G__26445){
var validate__10827__auto__ = ufv___26446.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26451 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26445], null);
var temp__4126__auto___26452 = input_checker26443_26449.call(null,args__10828__auto___26451);
if(cljs.core.truth_(temp__4126__auto___26452)){
var error__10829__auto___26453 = temp__4126__auto___26452;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__10829__auto___26453)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26453,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26451,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26442_26448,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var x = G__26445;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26454 = output_checker26444_26450.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26454)){
var error__10829__auto___26455 = temp__4126__auto___26454;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__10829__auto___26455)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26455,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26441_26447,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26446,output_schema26441_26447,input_schema26442_26448,input_checker26443_26449,output_checker26444_26450))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema26441_26447,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26442_26448], null)));
/**
* This is the same as om.core/get-props. We added it to get around
* the new precondition in Om 0.8.0.
*/
om_bootstrap.util.get_props = (function get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___26461 = schema.utils.use_fn_validation;
var output_schema26456_26462 = schema.core.Bool;
var input_schema26457_26463 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);
var input_checker26458_26464 = schema.core.checker.call(null,input_schema26457_26463);
var output_checker26459_26465 = schema.core.checker.call(null,output_schema26456_26462);
/**
* Inputs: [x]
* Returns: s/Bool
*/
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___26461,output_schema26456_26462,input_schema26457_26463,input_checker26458_26464,output_checker26459_26465){
return (function om_component_QMARK_(G__26460){
var validate__10827__auto__ = ufv___26461.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26466 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26460], null);
var temp__4126__auto___26467 = input_checker26458_26464.call(null,args__10828__auto___26466);
if(cljs.core.truth_(temp__4126__auto___26467)){
var error__10829__auto___26468 = temp__4126__auto___26467;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),cljs.core.pr_str.call(null,error__10829__auto___26468)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26468,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26466,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26457_26463,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var x = G__26460;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26469 = output_checker26459_26465.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26469)){
var error__10829__auto___26470 = temp__4126__auto___26469;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),cljs.core.pr_str.call(null,error__10829__auto___26470)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26470,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26456_26462,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26461,output_schema26456_26462,input_schema26457_26463,input_checker26458_26464,output_checker26459_26465))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema26456_26462,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26457_26463], null)));
var ufv___26476 = schema.utils.use_fn_validation;
var output_schema26471_26477 = schema.core.Bool;
var input_schema26472_26478 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker26473_26479 = schema.core.checker.call(null,input_schema26472_26478);
var output_checker26474_26480 = schema.core.checker.call(null,output_schema26471_26477);
/**
* Inputs: [child]
* Returns: s/Bool
* 
* TODO: Once Om updates its externs to include this file, we can
* remove the janky aget call.
*/
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___26476,output_schema26471_26477,input_schema26472_26478,input_checker26473_26479,output_checker26474_26480){
return (function strict_valid_component_QMARK_(G__26475){
var validate__10827__auto__ = ufv___26476.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26481 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26475], null);
var temp__4126__auto___26482 = input_checker26473_26479.call(null,args__10828__auto___26481);
if(cljs.core.truth_(temp__4126__auto___26482)){
var error__10829__auto___26483 = temp__4126__auto___26482;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__10829__auto___26483)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26483,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26481,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26472_26478,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var child = G__26475;
while(true){
return (React["isValidComponent"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26484 = output_checker26474_26480.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26484)){
var error__10829__auto___26485 = temp__4126__auto___26484;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__10829__auto___26485)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26485,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26471_26477,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26476,output_schema26471_26477,input_schema26472_26478,input_checker26473_26479,output_checker26474_26480))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema26471_26477,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26472_26478], null)));
var ufv___26491 = schema.utils.use_fn_validation;
var output_schema26486_26492 = schema.core.Bool;
var input_schema26487_26493 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker26488_26494 = schema.core.checker.call(null,input_schema26487_26493);
var output_checker26489_26495 = schema.core.checker.call(null,output_schema26486_26492);
/**
* Inputs: [child]
* Returns: s/Bool
* 
* Returns true if the supplied argument is a valid React component,
* false otherwise.
*/
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___26491,output_schema26486_26492,input_schema26487_26493,input_checker26488_26494,output_checker26489_26495){
return (function valid_component_QMARK_(G__26490){
var validate__10827__auto__ = ufv___26491.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26496 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26490], null);
var temp__4126__auto___26497 = input_checker26488_26494.call(null,args__10828__auto___26496);
if(cljs.core.truth_(temp__4126__auto___26497)){
var error__10829__auto___26498 = temp__4126__auto___26497;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__10829__auto___26498)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26498,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26496,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26487_26493,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var child = G__26490;
while(true){
var or__3628__auto__ = typeof child === 'string';
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = typeof child === 'number';
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26499 = output_checker26489_26495.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26499)){
var error__10829__auto___26500 = temp__4126__auto___26499;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__10829__auto___26500)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26500,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26486_26492,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26491,output_schema26486_26492,input_schema26487_26493,input_checker26488_26494,output_checker26489_26495))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema26486_26492,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26487_26493], null)));
var ufv___26506 = schema.utils.use_fn_validation;
var output_schema26501_26507 = schema.core.Bool;
var input_schema26502_26508 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker26503_26509 = schema.core.checker.call(null,input_schema26502_26508);
var output_checker26504_26510 = schema.core.checker.call(null,output_schema26501_26507);
/**
* Inputs: [children]
* Returns: s/Bool
* 
* Returns true if the supplied sequence contains some valid React component,
* false otherwise.
*/
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___26506,output_schema26501_26507,input_schema26502_26508,input_checker26503_26509,output_checker26504_26510){
return (function some_valid_component_QMARK_(G__26505){
var validate__10827__auto__ = ufv___26506.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26511 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26505], null);
var temp__4126__auto___26512 = input_checker26503_26509.call(null,args__10828__auto___26511);
if(cljs.core.truth_(temp__4126__auto___26512)){
var error__10829__auto___26513 = temp__4126__auto___26512;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__10829__auto___26513)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26513,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26511,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26502_26508,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var children = G__26505;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26514 = output_checker26504_26510.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26514)){
var error__10829__auto___26515 = temp__4126__auto___26514;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__10829__auto___26515)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26515,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26501_26507,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26506,output_schema26501_26507,input_schema26502_26508,input_checker26503_26509,output_checker26504_26510))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema26501_26507,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26502_26508], null)));
/**
* Generates a new function that calls each supplied side-effecting
* function.
*/
om_bootstrap.util.chain_fns = (function chain_fns(l,r){
if(cljs.core.truth_((function (){var and__3616__auto__ = l;
if(cljs.core.truth_(and__3616__auto__)){
return r;
} else {
return and__3616__auto__;
}
})())){
return (function() { 
var G__26516__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__26516 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__26516__delegate.call(this,args);};
G__26516.cljs$lang$maxFixedArity = 0;
G__26516.cljs$lang$applyTo = (function (arglist__26517){
var args = cljs.core.seq(arglist__26517);
return G__26516__delegate(args);
});
G__26516.cljs$core$IFn$_invoke$arity$variadic = G__26516__delegate;
return G__26516;
})()
;
} else {
var or__3628__auto__ = l;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return r;
}
}
});
/**
* Map of React keyword to a custom function for its merge. Tries to
* do a decent job with event handlers as well; currently only
* handles :on-select :on-click, :on-blur, kebab-cased as om-tools
* prefers.
*/
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){
return [cljs.core.str(l),cljs.core.str(" "),cljs.core.str(r)].join('');
});
var orig_fn = ((function (merge_class){
return (function (l,r){
var or__3628__auto__ = l;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return r;
}
});})(merge_class))
;
var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){
return null;
});})(merge_class,orig_fn))
;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
* Merges two maps that represent React properties. Merges occur
* according to the functions defined in `react-merges`.
* @param {...*} var_args
*/
om_bootstrap.util.merge_props = (function() { 
var merge_props__delegate = function (prop_maps){
var react_merge = (function react_merge(xs){
return om_bootstrap.util.merge_with_fns.call(null,om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function normalize_class(m){
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996))){
return react_merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else {
return m;
}
});
return react_merge.call(null,cljs.core.map.call(null,normalize_class,prop_maps));
};
var merge_props = function (var_args){
var prop_maps = null;
if (arguments.length > 0) {
  prop_maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge_props__delegate.call(this,prop_maps);};
merge_props.cljs$lang$maxFixedArity = 0;
merge_props.cljs$lang$applyTo = (function (arglist__26518){
var prop_maps = cljs.core.seq(arglist__26518);
return merge_props__delegate(prop_maps);
});
merge_props.cljs$core$IFn$_invoke$arity$variadic = merge_props__delegate;
return merge_props;
})()
;
/**
* Returns a basic, shallow copy of the supplied JS object.
*/
om_bootstrap.util.copy_js = (function copy_js(arr){
var ret = (function (){var obj26526 = {};
return obj26526;
})();
var seq__26527_26531 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__26528_26532 = null;
var count__26529_26533 = (0);
var i__26530_26534 = (0);
while(true){
if((i__26530_26534 < count__26529_26533)){
var k_26535 = cljs.core._nth.call(null,chunk__26528_26532,i__26530_26534);
if(cljs.core.truth_(arr.hasOwnProperty(k_26535))){
(ret[k_26535] = (arr[k_26535]));
} else {
}

var G__26536 = seq__26527_26531;
var G__26537 = chunk__26528_26532;
var G__26538 = count__26529_26533;
var G__26539 = (i__26530_26534 + (1));
seq__26527_26531 = G__26536;
chunk__26528_26532 = G__26537;
count__26529_26533 = G__26538;
i__26530_26534 = G__26539;
continue;
} else {
var temp__4126__auto___26540 = cljs.core.seq.call(null,seq__26527_26531);
if(temp__4126__auto___26540){
var seq__26527_26541__$1 = temp__4126__auto___26540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26527_26541__$1)){
var c__4415__auto___26542 = cljs.core.chunk_first.call(null,seq__26527_26541__$1);
var G__26543 = cljs.core.chunk_rest.call(null,seq__26527_26541__$1);
var G__26544 = c__4415__auto___26542;
var G__26545 = cljs.core.count.call(null,c__4415__auto___26542);
var G__26546 = (0);
seq__26527_26531 = G__26543;
chunk__26528_26532 = G__26544;
count__26529_26533 = G__26545;
i__26530_26534 = G__26546;
continue;
} else {
var k_26547 = cljs.core.first.call(null,seq__26527_26541__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_26547))){
(ret[k_26547] = (arr[k_26547]));
} else {
}

var G__26548 = cljs.core.next.call(null,seq__26527_26541__$1);
var G__26549 = null;
var G__26550 = (0);
var G__26551 = (0);
seq__26527_26531 = G__26548;
chunk__26528_26532 = G__26549;
count__26529_26533 = G__26550;
i__26530_26534 = G__26551;
continue;
}
} else {
}
}
break;
}

return ret;
});
/**
* Merges the supplied extra properties into the underlying Om cursor
* and calls the constructor to clone the React component.
* 
* Requires that the supplied child has an Om cursor attached to it!
*/
om_bootstrap.util.clone_om = (function clone_om(child,extra_props){
var om_props = om_bootstrap.util.get_props.call(null,child);
return child.constructor((function (){var G__26553 = om_bootstrap.util.copy_js.call(null,child.props);
(G__26553["__om_cursor"] = ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props)));

return G__26553;
})());
});
/**
* This function is called if the React component child was NOT
* generated by Om. Merges the supplied properties into the -props
* field of the supplied React component and creates a shallow copy.
*/
om_bootstrap.util.clone_basic_react = (function clone_basic_react(child,extra_props){
var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4126__auto__)){
var children = temp__4126__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
return null;
}
})());
return child.constructor(cljs.core.clj__GT_js.call(null,new_props));
});
/**
* Returns a shallow copy of the supplied component (child); the copy
* will have any props provided by extra-props merged in. Props are
* merged in the same manner as merge-props, so props like :class will
* be merged intelligently.
* 
* extra-props can be a function of the old props that returns new
* props, OR it can be a map of props.
* 
* If the supplied child is an Om component, any supplied extra
* properties will be merged into the underlying cursor and accessible
* in the Om constructor.
*/
om_bootstrap.util.clone_with_props = (function() {
var clone_with_props = null;
var clone_with_props__1 = (function (child){
return clone_with_props.call(null,child,cljs.core.PersistentArrayMap.EMPTY);
});
var clone_with_props__2 = (function (child,extra_props){
if(cljs.core.not.call(null,om_bootstrap.util.strict_valid_component_QMARK_.call(null,child))){
return child;
} else {
if((cljs.core.map_QMARK_.call(null,extra_props)) && (cljs.core.empty_QMARK_.call(null,extra_props))){
return child.constructor(child.props);
} else {
if(om_bootstrap.util.om_component_QMARK_.call(null,child)){
return om_bootstrap.util.clone_om.call(null,child,extra_props);
} else {
return om_bootstrap.util.clone_basic_react.call(null,child,extra_props);

}
}
}
});
clone_with_props = function(child,extra_props){
switch(arguments.length){
case 1:
return clone_with_props__1.call(this,child);
case 2:
return clone_with_props__2.call(this,child,extra_props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_with_props.cljs$core$IFn$_invoke$arity$1 = clone_with_props__1;
clone_with_props.cljs$core$IFn$_invoke$arity$2 = clone_with_props__2;
return clone_with_props;
})()
;
