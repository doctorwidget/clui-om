// Compiled by ClojureScript 0.0-2496
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___26363 = schema.utils.use_fn_validation;
var output_schema26358_26364 = schema.core.Any;
var input_schema26359_26365 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);
var input_checker26360_26366 = schema.core.checker.call(null,input_schema26359_26365);
var output_checker26361_26367 = schema.core.checker.call(null,output_schema26358_26364);
/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___26363,output_schema26358_26364,input_schema26359_26365,input_checker26360_26366,output_checker26361_26367){
return (function schema_keys(G__26362){
var validate__10827__auto__ = ufv___26363.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26368 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26362], null);
var temp__4126__auto___26369 = input_checker26360_26366.call(null,args__10828__auto___26368);
if(cljs.core.truth_(temp__4126__auto___26369)){
var error__10829__auto___26370 = temp__4126__auto___26369;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__10829__auto___26370)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26370,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26368,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26359_26365,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var schema__$1 = G__26362;
while(true){
return cljs.core.map.call(null,((function (validate__10827__auto__,ufv___26363,output_schema26358_26364,input_schema26359_26365,input_checker26360_26366,output_checker26361_26367){
return (function (k){
if(schema.core.optional_key_QMARK_.call(null,k)){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__10827__auto__,ufv___26363,output_schema26358_26364,input_schema26359_26365,input_checker26360_26366,output_checker26361_26367))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26371 = output_checker26361_26367.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26371)){
var error__10829__auto___26372 = temp__4126__auto___26371;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__10829__auto___26372)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26372,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26358_26364,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26363,output_schema26358_26364,input_schema26359_26365,input_checker26360_26366,output_checker26361_26367))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema26358_26364,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26359_26365], null)));
var ufv___26378 = schema.utils.use_fn_validation;
var output_schema26373_26379 = schema.core.Any;
var input_schema26374_26380 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);
var input_checker26375_26381 = schema.core.checker.call(null,input_schema26374_26380);
var output_checker26376_26382 = schema.core.checker.call(null,output_schema26373_26379);
/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___26378,output_schema26373_26379,input_schema26374_26380,input_checker26375_26381,output_checker26376_26382){
return (function at_least(G__26377){
var validate__10827__auto__ = ufv___26378.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26383 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26377], null);
var temp__4126__auto___26384 = input_checker26375_26381.call(null,args__10828__auto___26383);
if(cljs.core.truth_(temp__4126__auto___26384)){
var error__10829__auto___26385 = temp__4126__auto___26384;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__10829__auto___26385)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26385,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26383,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26374_26380,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var schema__$1 = G__26377;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26386 = output_checker26376_26382.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26386)){
var error__10829__auto___26387 = temp__4126__auto___26386;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__10829__auto___26387)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26387,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26373_26379,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26378,output_schema26373_26379,input_schema26374_26380,input_checker26375_26381,output_checker26376_26382))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema26373_26379,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26374_26380], null)));
om_bootstrap.types.Component = schema.core.named.call(null,schema.core.Any,"Alias for an om component, since I don't know what type to put here.");
om_bootstrap.types.Renderable = schema.core.named.call(null,schema.core.Any,"Anything that can get rendered.");
/**
* Map of keyword to the proper bootstrap class name.
*/
om_bootstrap.types.class_map = cljs.core.PersistentHashMap.fromArrays(["alert","label","form","progress-bar","modal","navbar","button-toolbar","panel-group","nav","column","row","input-group","panel","well","button-group","button","glyphicon"],["alert","label","form","progress-bar","modal","navbar","btn-toolbar","panel-group","nav","col","row","input-group","panel","well","btn-group","btn","glyphicon"]);
/**
* Map of style keywords -> styles.
*/
om_bootstrap.types.style_map = cljs.core.PersistentHashMap.fromArrays(["success","warning","inline","pills","info","tabs","primary","danger","link","default"],["success","warning","inline","pills","info","tabs","primary","danger","link","default"]);
om_bootstrap.types.size_map = new cljs.core.PersistentArrayMap(null, 4, ["large","lg","medium","md","small","sm","xsmall","xs"], null);
om_bootstrap.types.BSClass = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.class_map));
om_bootstrap.types.BSStyle = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.style_map));
om_bootstrap.types.BSSize = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.size_map));
om_bootstrap.types.BootstrapClass = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590)),om_bootstrap.types.BSClass,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),om_bootstrap.types.BSStyle,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)),om_bootstrap.types.BSSize], true, false);
/**
* Applies all default bootstrap options to the supplied schema. If
* the incoming schema has one of the the keys from BootstrapClass,
* that wins (even if it's required).
*/
om_bootstrap.types.bootstrap = (function bootstrap(schema__$1){
var bootstrap_schema = cljs.core.apply.call(null,cljs.core.dissoc,om_bootstrap.types.BootstrapClass,cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,cljs.core.select_keys.call(null,schema__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)], null)))));
return om_bootstrap.types.at_least.call(null,cljs.core.merge.call(null,bootstrap_schema,schema__$1));
});
var ufv___26400 = schema.utils.use_fn_validation;
var output_schema26388_26401 = schema.core.pair.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema26389_26402 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_schema26394_26403 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);
var input_checker26390_26404 = schema.core.checker.call(null,input_schema26389_26402);
var output_checker26391_26405 = schema.core.checker.call(null,output_schema26388_26401);
var input_checker26395_26406 = schema.core.checker.call(null,input_schema26394_26403);
var output_checker26396_26407 = schema.core.checker.call(null,output_schema26388_26401);
/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___26400,output_schema26388_26401,input_schema26389_26402,input_schema26394_26403,input_checker26390_26404,output_checker26391_26405,input_checker26395_26406,output_checker26396_26407){
return (function() {
var separate = null;
var separate__2 = (function (G__26392,G__26393){
var validate__10827__auto__ = ufv___26400.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26408 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26392,G__26393], null);
var temp__4126__auto___26409 = input_checker26390_26404.call(null,args__10828__auto___26408);
if(cljs.core.truth_(temp__4126__auto___26409)){
var error__10829__auto___26410 = temp__4126__auto___26409;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__10829__auto___26410)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26410,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26408,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26389_26402,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var schema__$1 = G__26392;
var opts = G__26393;
while(true){
return separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26411 = output_checker26391_26405.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26411)){
var error__10829__auto___26412 = temp__4126__auto___26411;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__10829__auto___26412)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26412,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26388_26401,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});
var separate__3 = (function (G__26397,G__26398,G__26399){
var validate__10827__auto__ = ufv___26400.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26413 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26397,G__26398,G__26399], null);
var temp__4126__auto___26414 = input_checker26395_26406.call(null,args__10828__auto___26413);
if(cljs.core.truth_(temp__4126__auto___26414)){
var error__10829__auto___26415 = temp__4126__auto___26414;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__10829__auto___26415)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26415,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26413,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26394_26403,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var schema__$1 = G__26397;
var opts = G__26398;
var defaults = G__26399;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26416 = output_checker26396_26407.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26416)){
var error__10829__auto___26417 = temp__4126__auto___26416;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__10829__auto___26417)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26417,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26388_26401,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});
separate = function(G__26397,G__26398,G__26399){
switch(arguments.length){
case 2:
return separate__2.call(this,G__26397,G__26398);
case 3:
return separate__3.call(this,G__26397,G__26398,G__26399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___26400,output_schema26388_26401,input_schema26389_26402,input_schema26394_26403,input_checker26390_26404,output_checker26391_26405,input_checker26395_26406,output_checker26396_26407))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema26388_26401,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26389_26402,input_schema26394_26403], null)));
var ufv___26431 = schema.utils.use_fn_validation;
var output_schema26418_26432 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema26419_26433 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker26420_26434 = schema.core.checker.call(null,input_schema26419_26433);
var output_checker26421_26435 = schema.core.checker.call(null,output_schema26418_26432);
/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___26431,output_schema26418_26432,input_schema26419_26433,input_checker26420_26434,output_checker26421_26435){
return (function bs_class_set(G__26422){
var validate__10827__auto__ = ufv___26431.get_cell();
if(cljs.core.truth_(validate__10827__auto__)){
var args__10828__auto___26436 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26422], null);
var temp__4126__auto___26437 = input_checker26420_26434.call(null,args__10828__auto___26436);
if(cljs.core.truth_(temp__4126__auto___26437)){
var error__10829__auto___26438 = temp__4126__auto___26437;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__10829__auto___26438)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26438,new cljs.core.Keyword(null,"value","value",305978217),args__10828__auto___26436,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26419_26433,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__10830__auto__ = (function (){var G__26428 = G__26422;
var map__26429 = G__26428;
var map__26429__$1 = ((cljs.core.seq_QMARK_.call(null,map__26429))?cljs.core.apply.call(null,cljs.core.hash_map,map__26429):map__26429);
var bs_size = cljs.core.get.call(null,map__26429__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var bs_style = cljs.core.get.call(null,map__26429__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_class = cljs.core.get.call(null,map__26429__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var G__26428__$1 = G__26428;
while(true){
var map__26430 = G__26428__$1;
var map__26430__$1 = ((cljs.core.seq_QMARK_.call(null,map__26430))?cljs.core.apply.call(null,cljs.core.hash_map,map__26430):map__26430);
var bs_size__$1 = cljs.core.get.call(null,map__26430__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var bs_style__$1 = cljs.core.get.call(null,map__26430__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_class__$1 = cljs.core.get.call(null,map__26430__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var temp__4124__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var klass = temp__4124__auto__;
var prefix = [cljs.core.str(cljs.core.name.call(null,klass)),cljs.core.str("-")].join('');
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4126__auto__ = om_bootstrap.types.size_map.call(null,bs_size__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var size = temp__4126__auto__;
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,size))].join(''),true], true, false);
} else {
return null;
}
})(),(function (){var temp__4126__auto__ = om_bootstrap.types.style_map.call(null,bs_style__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var style = temp__4126__auto__;
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,style))].join(''),true], true, false);
} else {
return null;
}
})());
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
break;
}
})();
if(cljs.core.truth_(validate__10827__auto__)){
var temp__4126__auto___26439 = output_checker26421_26435.call(null,o__10830__auto__);
if(cljs.core.truth_(temp__4126__auto___26439)){
var error__10829__auto___26440 = temp__4126__auto___26439;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__10829__auto___26440)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__10829__auto___26440,new cljs.core.Keyword(null,"value","value",305978217),o__10830__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26418_26432,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__10830__auto__;
});})(ufv___26431,output_schema26418_26432,input_schema26419_26433,input_checker26420_26434,output_checker26421_26435))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema26418_26432,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26419_26433], null)));
