// Compiled by ClojureScript 0.0-2496
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__10857__10858__auto__){
var G__26597 = p1__10857__10858__auto__;
if(G__26597){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__26597.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__26597.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__26597);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__26597);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__26598_SHARP_){
return (cljs.core.val.call(null,p1__26598_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__26600 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__26600,(0),null);
var v = cljs.core.nth.call(null,vec__26600,(1),null);
var p = vec__26600;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___26606 = schema.utils.use_fn_validation;
var output_schema26601_26607 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema26602_26608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker26603_26609 = schema.core.checker.call(null,input_schema26602_26608);
var output_checker26604_26610 = schema.core.checker.call(null,output_schema26601_26607);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___26606,output_schema26601_26607,input_schema26602_26608,input_checker26603_26609,output_checker26604_26610){
return (function unwrap_schema_form_key(G__26605){
var validate__10827__auto__ = ufv___26606.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26605], null);
var temp__4126__auto___26612 = input_checker26603_26609.call(null,args__10828__auto___26611);
if(cljs.core.truth_(temp__4126__auto___26612)){
var error__10829__auto___26613 = temp__4126__auto___26612;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10829__auto___26613)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26613,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26611,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26602_26608,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var k = G__26605;
while(true){
if(schema.core.specific_key_QMARK_.call(null,k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26614 = output_checker26604_26610.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26614)){
var error__10829__auto___26615 = temp__4126__auto___26614;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__10829__auto___26615)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26615,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26601_26607,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26606,output_schema26601_26607,input_schema26602_26608,input_checker26603_26609,output_checker26604_26610))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema26601_26607,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26602_26608], null)));
var ufv___26621 = schema.utils.use_fn_validation;
var output_schema26616_26622 = schema.core.Any;
var input_schema26617_26623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker26618_26624 = schema.core.checker.call(null,input_schema26617_26623);
var output_checker26619_26625 = schema.core.checker.call(null,output_schema26616_26622);
/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___26621,output_schema26616_26622,input_schema26617_26623,input_checker26618_26624,output_checker26619_26625){
return (function explicit_schema_key_map(G__26620){
var validate__10827__auto__ = ufv___26621.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26626 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26620], null);
var temp__4126__auto___26627 = input_checker26618_26624.call(null,args__10828__auto___26626);
if(cljs.core.truth_(temp__4126__auto___26627)){
var error__10829__auto___26628 = temp__4126__auto___26627;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10829__auto___26628)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26628,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26626,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26617_26623,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var s = G__26620;
while(true){

new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26629 = output_checker26619_26625.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26629)){
var error__10829__auto___26630 = temp__4126__auto___26629;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__10829__auto___26630)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26630,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26616_26622,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26621,output_schema26616_26622,input_schema26617_26623,input_checker26618_26624,output_checker26619_26625))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema26616_26622,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26617_26623], null)));
var ufv___26636 = schema.utils.use_fn_validation;
var output_schema26631_26637 = schema.core.Any;
var input_schema26632_26638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker26633_26639 = schema.core.checker.call(null,input_schema26632_26638);
var output_checker26634_26640 = schema.core.checker.call(null,output_schema26631_26637);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___26636,output_schema26631_26637,input_schema26632_26638,input_checker26633_26639,output_checker26634_26640){
return (function split_schema_keys(G__26635){
var validate__10827__auto__ = ufv___26636.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26641 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26635], null);
var temp__4126__auto___26642 = input_checker26633_26639.call(null,args__10828__auto___26641);
if(cljs.core.truth_(temp__4126__auto___26642)){
var error__10829__auto___26643 = temp__4126__auto___26642;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10829__auto___26643)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26643,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26641,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26632_26638,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var s = G__26635;
while(true){

new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);

return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26644 = output_checker26634_26640.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26644)){
var error__10829__auto___26645 = temp__4126__auto___26644;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__10829__auto___26645)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26645,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26631_26637,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26636,output_schema26631_26637,input_schema26632_26638,input_checker26633_26639,output_checker26634_26640))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema26631_26637,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26632_26638], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__26649){
var vec__26650 = p__26649;
var k = cljs.core.nth.call(null,vec__26650,(0),null);
var v = cljs.core.nth.call(null,vec__26650,(1),null);
var pk = key_project.call(null,k);
var temp__4124__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__26651 = temp__4124__auto__;
var ok = cljs.core.nth.call(null,vec__26651,(0),null);
var ov = cljs.core.nth.call(null,vec__26651,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__26652){
var key_project = cljs.core.first(arglist__26652);
arglist__26652 = cljs.core.next(arglist__26652);
var key_combine = cljs.core.first(arglist__26652);
arglist__26652 = cljs.core.next(arglist__26652);
var val_combine = cljs.core.first(arglist__26652);
var maps = cljs.core.rest(arglist__26652);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___26660 = schema.utils.use_fn_validation;
var output_schema26654_26661 = plumbing.fnk.schema.InputSchema;
var input_schema26655_26662 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker26656_26663 = schema.core.checker.call(null,input_schema26655_26662);
var output_checker26657_26664 = schema.core.checker.call(null,output_schema26654_26661);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___26660,output_schema26654_26661,input_schema26655_26662,input_checker26656_26663,output_checker26657_26664){
return (function union_input_schemata(G__26658,G__26659){
var validate__10827__auto__ = ufv___26660.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26665 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26658,G__26659], null);
var temp__4126__auto___26666 = input_checker26656_26663.call(null,args__10828__auto___26665);
if(cljs.core.truth_(temp__4126__auto___26666)){
var error__10829__auto___26667 = temp__4126__auto___26666;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10829__auto___26667)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26667,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26665,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26655_26662,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var i1 = G__26658;
var i2 = G__26659;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__10827__auto__,ufv___26660,output_schema26654_26661,input_schema26655_26662,input_checker26656_26663,output_checker26657_26664){
return (function (p1__26653_SHARP_){
if(schema.core.specific_key_QMARK_.call(null,p1__26653_SHARP_)){
return schema.core.explicit_schema_key.call(null,p1__26653_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__10827__auto__,ufv___26660,output_schema26654_26661,input_schema26655_26662,input_checker26656_26663,output_checker26657_26664))
,((function (validate__10827__auto__,ufv___26660,output_schema26654_26661,input_schema26655_26662,input_checker26656_26663,output_checker26657_26664){
return (function (k1,k2){
if(schema.core.required_key_QMARK_.call(null,k1)){
return k1;
} else {
if(schema.core.required_key_QMARK_.call(null,k2)){
return k2;
} else {
if(schema.core.optional_key_QMARK_.call(null,k1)){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__10827__auto__,ufv___26660,output_schema26654_26661,input_schema26655_26662,input_checker26656_26663,output_checker26657_26664))
,((function (validate__10827__auto__,ufv___26660,output_schema26654_26661,input_schema26655_26662,input_checker26656_26663,output_checker26657_26664){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2))){
return union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__10827__auto__,ufv___26660,output_schema26654_26661,input_schema26655_26662,input_checker26656_26663,output_checker26657_26664))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26668 = output_checker26657_26664.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26668)){
var error__10829__auto___26669 = temp__4126__auto___26668;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__10829__auto___26669)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26669,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26654_26661,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26660,output_schema26654_26661,input_schema26655_26662,input_checker26656_26663,output_checker26657_26664))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema26654_26661,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26655_26662], null)));
var ufv___26675 = schema.utils.use_fn_validation;
var output_schema26670_26676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema26671_26677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker26672_26678 = schema.core.checker.call(null,input_schema26671_26677);
var output_checker26673_26679 = schema.core.checker.call(null,output_schema26670_26676);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___26675,output_schema26670_26676,input_schema26671_26677,input_checker26672_26678,output_checker26673_26679){
return (function required_toplevel_keys(G__26674){
var validate__10827__auto__ = ufv___26675.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26674], null);
var temp__4126__auto___26681 = input_checker26672_26678.call(null,args__10828__auto___26680);
if(cljs.core.truth_(temp__4126__auto___26681)){
var error__10829__auto___26682 = temp__4126__auto___26681;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10829__auto___26682)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26682,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26680,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26671_26677,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var input_schema = G__26674;
while(true){
return cljs.core.keep.call(null,((function (validate__10827__auto__,ufv___26675,output_schema26670_26676,input_schema26671_26677,input_checker26672_26678,output_checker26673_26679){
return (function (k){
if(schema.core.required_key_QMARK_.call(null,k)){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__10827__auto__,ufv___26675,output_schema26670_26676,input_schema26671_26677,input_checker26672_26678,output_checker26673_26679))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26683 = output_checker26673_26679.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26683)){
var error__10829__auto___26684 = temp__4126__auto___26683;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__10829__auto___26684)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26684,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26670_26676,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26675,output_schema26670_26676,input_schema26671_26677,input_checker26672_26678,output_checker26673_26679))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema26670_26676,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26671_26677], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4384__auto__ = (function iter__26693(s__26694){
return (new cljs.core.LazySeq(null,(function (){
var s__26694__$1 = s__26694;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26694__$1);
if(temp__4126__auto__){
var s__26694__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26694__$2)){
var c__4382__auto__ = cljs.core.chunk_first.call(null,s__26694__$2);
var size__4383__auto__ = cljs.core.count.call(null,c__4382__auto__);
var b__26696 = cljs.core.chunk_buffer.call(null,size__4383__auto__);
if((function (){var i__26695 = (0);
while(true){
if((i__26695 < size__4383__auto__)){
var vec__26699 = cljs.core._nth.call(null,c__4382__auto__,i__26695);
var k = cljs.core.nth.call(null,vec__26699,(0),null);
var v = cljs.core.nth.call(null,vec__26699,(1),null);
cljs.core.chunk_append.call(null,b__26696,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));

var G__26701 = (i__26695 + (1));
i__26695 = G__26701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26696),iter__26693.call(null,cljs.core.chunk_rest.call(null,s__26694__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26696),null);
}
} else {
var vec__26700 = cljs.core.first.call(null,s__26694__$2);
var k = cljs.core.nth.call(null,vec__26700,(0),null);
var v = cljs.core.nth.call(null,vec__26700,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__26693.call(null,cljs.core.rest.call(null,s__26694__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4384__auto__ = (function iter__26710(s__26711){
return (new cljs.core.LazySeq(null,(function (){
var s__26711__$1 = s__26711;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26711__$1);
if(temp__4126__auto__){
var s__26711__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26711__$2)){
var c__4382__auto__ = cljs.core.chunk_first.call(null,s__26711__$2);
var size__4383__auto__ = cljs.core.count.call(null,c__4382__auto__);
var b__26713 = cljs.core.chunk_buffer.call(null,size__4383__auto__);
if((function (){var i__26712 = (0);
while(true){
if((i__26712 < size__4383__auto__)){
var vec__26716 = cljs.core._nth.call(null,c__4382__auto__,i__26712);
var k = cljs.core.nth.call(null,vec__26716,(0),null);
var v = cljs.core.nth.call(null,vec__26716,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__26713,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__26718 = (i__26712 + (1));
i__26712 = G__26718;
continue;
} else {
var G__26719 = (i__26712 + (1));
i__26712 = G__26719;
continue;
}
} else {
var G__26720 = (i__26712 + (1));
i__26712 = G__26720;
continue;
}
} else {
var G__26721 = (i__26712 + (1));
i__26712 = G__26721;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26713),iter__26710.call(null,cljs.core.chunk_rest.call(null,s__26711__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26713),null);
}
} else {
var vec__26717 = cljs.core.first.call(null,s__26711__$2);
var k = cljs.core.nth.call(null,vec__26717,(0),null);
var v = cljs.core.nth.call(null,vec__26717,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__26710.call(null,cljs.core.rest.call(null,s__26711__$2)));
} else {
var G__26722 = cljs.core.rest.call(null,s__26711__$2);
s__26711__$1 = G__26722;
continue;
}
} else {
var G__26723 = cljs.core.rest.call(null,s__26711__$2);
s__26711__$1 = G__26723;
continue;
}
} else {
var G__26724 = cljs.core.rest.call(null,s__26711__$2);
s__26711__$1 = G__26724;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___26747 = schema.utils.use_fn_validation;
var output_schema26725_26748 = schema.core.Any;
var input_schema26726_26749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker26727_26750 = schema.core.checker.call(null,input_schema26726_26749);
var output_checker26728_26751 = schema.core.checker.call(null,output_schema26725_26748);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___26747,output_schema26725_26748,input_schema26726_26749,input_checker26727_26750,output_checker26728_26751){
return (function compose_schemata(G__26729,G__26730){
var validate__10827__auto__ = true;
if(validate__10827__auto__){
var args__10828__auto___26752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26729,G__26730], null);
var temp__4126__auto___26753 = input_checker26727_26750.call(null,args__10828__auto___26752);
if(cljs.core.truth_(temp__4126__auto___26753)){
var error__10829__auto___26754 = temp__4126__auto___26753;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10829__auto___26754)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26754,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26752,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26726_26749,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var G__26741 = G__26729;
var vec__26743 = G__26741;
var i2 = cljs.core.nth.call(null,vec__26743,(0),null);
var o2 = cljs.core.nth.call(null,vec__26743,(1),null);
var G__26742 = G__26730;
var vec__26744 = G__26742;
var i1 = cljs.core.nth.call(null,vec__26744,(0),null);
var o1 = cljs.core.nth.call(null,vec__26744,(1),null);
var G__26741__$1 = G__26741;
var G__26742__$1 = G__26742;
while(true){
var vec__26745 = G__26741__$1;
var i2__$1 = cljs.core.nth.call(null,vec__26745,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__26745,(1),null);
var vec__26746 = G__26742__$1;
var i1__$1 = cljs.core.nth.call(null,vec__26746,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__26746,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__10827__auto__){
var temp__4126__auto___26755 = output_checker26728_26751.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26755)){
var error__10829__auto___26756 = temp__4126__auto___26755;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__10829__auto___26756)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26756,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26725_26748,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26747,output_schema26725_26748,input_schema26726_26749,input_checker26727_26750,output_checker26728_26751))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema26725_26748,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26726_26749], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___26835 = schema.utils.use_fn_validation;
var output_schema26757_26836 = schema.core.Any;
var input_schema26758_26837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker26759_26838 = schema.core.checker.call(null,input_schema26758_26837);
var output_checker26760_26839 = schema.core.checker.call(null,output_schema26757_26836);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___26835,output_schema26757_26836,input_schema26758_26837,input_checker26759_26838,output_checker26760_26839){
return (function split_schema(G__26761,G__26762){
var validate__10827__auto__ = ufv___26835.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26840 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26761,G__26762], null);
var temp__4126__auto___26841 = input_checker26759_26838.call(null,args__10828__auto___26840);
if(cljs.core.truth_(temp__4126__auto___26841)){
var error__10829__auto___26842 = temp__4126__auto___26841;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10829__auto___26842)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26842,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26840,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26758_26837,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var s = G__26761;
var ks = G__26762;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__4384__auto__ = ((function (ks__$1,validate__10827__auto__,ufv___26835,output_schema26757_26836,input_schema26758_26837,input_checker26759_26838,output_checker26760_26839){
return (function iter__26799(s__26800){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__10827__auto__,ufv___26835,output_schema26757_26836,input_schema26758_26837,input_checker26759_26838,output_checker26760_26839){
return (function (){
var s__26800__$1 = s__26800;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26800__$1);
if(temp__4126__auto__){
var s__26800__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26800__$2)){
var c__4382__auto__ = cljs.core.chunk_first.call(null,s__26800__$2);
var size__4383__auto__ = cljs.core.count.call(null,c__4382__auto__);
var b__26802 = cljs.core.chunk_buffer.call(null,size__4383__auto__);
if((function (){var i__26801 = (0);
while(true){
if((i__26801 < size__4383__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__4382__auto__,i__26801);
cljs.core.chunk_append.call(null,b__26802,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4384__auto__ = ((function (i__26801,in_QMARK_,c__4382__auto__,size__4383__auto__,b__26802,s__26800__$2,temp__4126__auto__,ks__$1,validate__10827__auto__,ufv___26835,output_schema26757_26836,input_schema26758_26837,input_checker26759_26838,output_checker26760_26839){
return (function iter__26819(s__26820){
return (new cljs.core.LazySeq(null,((function (i__26801,in_QMARK_,c__4382__auto__,size__4383__auto__,b__26802,s__26800__$2,temp__4126__auto__,ks__$1,validate__10827__auto__,ufv___26835,output_schema26757_26836,input_schema26758_26837,input_checker26759_26838,output_checker26760_26839){
return (function (){
var s__26820__$1 = s__26820;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__26820__$1);
if(temp__4126__auto____$1){
var s__26820__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26820__$2)){
var c__4382__auto____$1 = cljs.core.chunk_first.call(null,s__26820__$2);
var size__4383__auto____$1 = cljs.core.count.call(null,c__4382__auto____$1);
var b__26822 = cljs.core.chunk_buffer.call(null,size__4383__auto____$1);
if((function (){var i__26821 = (0);
while(true){
if((i__26821 < size__4383__auto____$1)){
var vec__26825 = cljs.core._nth.call(null,c__4382__auto____$1,i__26821);
var k = cljs.core.nth.call(null,vec__26825,(0),null);
var v = cljs.core.nth.call(null,vec__26825,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__26822,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__26843 = (i__26821 + (1));
i__26821 = G__26843;
continue;
} else {
var G__26844 = (i__26821 + (1));
i__26821 = G__26844;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26822),iter__26819.call(null,cljs.core.chunk_rest.call(null,s__26820__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26822),null);
}
} else {
var vec__26826 = cljs.core.first.call(null,s__26820__$2);
var k = cljs.core.nth.call(null,vec__26826,(0),null);
var v = cljs.core.nth.call(null,vec__26826,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__26819.call(null,cljs.core.rest.call(null,s__26820__$2)));
} else {
var G__26845 = cljs.core.rest.call(null,s__26820__$2);
s__26820__$1 = G__26845;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__26801,in_QMARK_,c__4382__auto__,size__4383__auto__,b__26802,s__26800__$2,temp__4126__auto__,ks__$1,validate__10827__auto__,ufv___26835,output_schema26757_26836,input_schema26758_26837,input_checker26759_26838,output_checker26760_26839))
,null,null));
});})(i__26801,in_QMARK_,c__4382__auto__,size__4383__auto__,b__26802,s__26800__$2,temp__4126__auto__,ks__$1,validate__10827__auto__,ufv___26835,output_schema26757_26836,input_schema26758_26837,input_checker26759_26838,output_checker26760_26839))
;
return iter__4384__auto__.call(null,s);
})()));

var G__26846 = (i__26801 + (1));
i__26801 = G__26846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26802),iter__26799.call(null,cljs.core.chunk_rest.call(null,s__26800__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26802),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__26800__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4384__auto__ = ((function (in_QMARK_,s__26800__$2,temp__4126__auto__,ks__$1,validate__10827__auto__,ufv___26835,output_schema26757_26836,input_schema26758_26837,input_checker26759_26838,output_checker26760_26839){
return (function iter__26827(s__26828){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__26800__$2,temp__4126__auto__,ks__$1,validate__10827__auto__,ufv___26835,output_schema26757_26836,input_schema26758_26837,input_checker26759_26838,output_checker26760_26839){
return (function (){
var s__26828__$1 = s__26828;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__26828__$1);
if(temp__4126__auto____$1){
var s__26828__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26828__$2)){
var c__4382__auto__ = cljs.core.chunk_first.call(null,s__26828__$2);
var size__4383__auto__ = cljs.core.count.call(null,c__4382__auto__);
var b__26830 = cljs.core.chunk_buffer.call(null,size__4383__auto__);
if((function (){var i__26829 = (0);
while(true){
if((i__26829 < size__4383__auto__)){
var vec__26833 = cljs.core._nth.call(null,c__4382__auto__,i__26829);
var k = cljs.core.nth.call(null,vec__26833,(0),null);
var v = cljs.core.nth.call(null,vec__26833,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__26830,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__26847 = (i__26829 + (1));
i__26829 = G__26847;
continue;
} else {
var G__26848 = (i__26829 + (1));
i__26829 = G__26848;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26830),iter__26827.call(null,cljs.core.chunk_rest.call(null,s__26828__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26830),null);
}
} else {
var vec__26834 = cljs.core.first.call(null,s__26828__$2);
var k = cljs.core.nth.call(null,vec__26834,(0),null);
var v = cljs.core.nth.call(null,vec__26834,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__26827.call(null,cljs.core.rest.call(null,s__26828__$2)));
} else {
var G__26849 = cljs.core.rest.call(null,s__26828__$2);
s__26828__$1 = G__26849;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__26800__$2,temp__4126__auto__,ks__$1,validate__10827__auto__,ufv___26835,output_schema26757_26836,input_schema26758_26837,input_checker26759_26838,output_checker26760_26839))
,null,null));
});})(in_QMARK_,s__26800__$2,temp__4126__auto__,ks__$1,validate__10827__auto__,ufv___26835,output_schema26757_26836,input_schema26758_26837,input_checker26759_26838,output_checker26760_26839))
;
return iter__4384__auto__.call(null,s);
})()),iter__26799.call(null,cljs.core.rest.call(null,s__26800__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__10827__auto__,ufv___26835,output_schema26757_26836,input_schema26758_26837,input_checker26759_26838,output_checker26760_26839))
,null,null));
});})(ks__$1,validate__10827__auto__,ufv___26835,output_schema26757_26836,input_schema26758_26837,input_checker26759_26838,output_checker26760_26839))
;
return iter__4384__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26850 = output_checker26760_26839.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26850)){
var error__10829__auto___26851 = temp__4126__auto___26850;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__10829__auto___26851)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26851,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26757_26836,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26835,output_schema26757_26836,input_schema26758_26837,input_checker26759_26838,output_checker26760_26839))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema26757_26836,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26758_26837], null)));
var ufv___26882 = schema.utils.use_fn_validation;
var output_schema26852_26883 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema26853_26884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker26854_26885 = schema.core.checker.call(null,input_schema26853_26884);
var output_checker26855_26886 = schema.core.checker.call(null,output_schema26852_26883);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___26882,output_schema26852_26883,input_schema26853_26884,input_checker26854_26885,output_checker26855_26886){
return (function sequence_schemata(G__26856,G__26857){
var validate__10827__auto__ = ufv___26882.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26887 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26856,G__26857], null);
var temp__4126__auto___26888 = input_checker26854_26885.call(null,args__10828__auto___26887);
if(cljs.core.truth_(temp__4126__auto___26888)){
var error__10829__auto___26889 = temp__4126__auto___26888;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10829__auto___26889)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26889,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26887,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26853_26884,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var G__26873 = G__26856;
var vec__26875 = G__26873;
var i1 = cljs.core.nth.call(null,vec__26875,(0),null);
var o1 = cljs.core.nth.call(null,vec__26875,(1),null);
var G__26874 = G__26857;
var vec__26876 = G__26874;
var k = cljs.core.nth.call(null,vec__26876,(0),null);
var vec__26877 = cljs.core.nth.call(null,vec__26876,(1),null);
var i2 = cljs.core.nth.call(null,vec__26877,(0),null);
var o2 = cljs.core.nth.call(null,vec__26877,(1),null);
var G__26873__$1 = G__26873;
var G__26874__$1 = G__26874;
while(true){
var vec__26878 = G__26873__$1;
var i1__$1 = cljs.core.nth.call(null,vec__26878,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__26878,(1),null);
var vec__26879 = G__26874__$1;
var k__$1 = cljs.core.nth.call(null,vec__26879,(0),null);
var vec__26880 = cljs.core.nth.call(null,vec__26879,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__26880,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__26880,(1),null);
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__26881 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__26881,(0),null);
var unused = cljs.core.nth.call(null,vec__26881,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26890 = output_checker26855_26886.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26890)){
var error__10829__auto___26891 = temp__4126__auto___26890;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__10829__auto___26891)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26891,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26852_26883,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26882,output_schema26852_26883,input_schema26853_26884,input_checker26854_26885,output_checker26855_26886))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema26852_26883,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26853_26884], null)));
