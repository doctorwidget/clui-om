// Compiled by ClojureScript 0.0-2496
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function if_pos(v){
if(cljs.core.truth_((function (){var and__3616__auto__ = v;
if(cljs.core.truth_(and__3616__auto__)){
return (v > (0));
} else {
return and__3616__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__27665_SHARP_,p2__27664_SHARP_){
var vec__27667 = clojure.string.split.call(null,p2__27664_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__27667,(0),null);
var v = cljs.core.nth.call(null,vec__27667,(1),null);
return cljs.core.assoc.call(null,p1__27665_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__27668_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__27668_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__27669){
var vec__27671 = p__27669;
var k = cljs.core.nth.call(null,vec__27671,(0),null);
var v = cljs.core.nth.call(null,vec__27671,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__27672_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__27672_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__3616__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__3616__auto__){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3616__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else {
return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
var channel = cljs.core.async.chan.call(null);
var c__6508__auto___27709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___27709,channel){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___27709,channel){
return (function (state_27699){
var state_val_27700 = (state_27699[(1)]);
if((state_val_27700 === (2))){
var inst_27693 = (state_27699[(2)]);
var inst_27694 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);
var inst_27695 = cljs_http.client.decode_body.call(null,inst_27693,cljs.reader.read_string,"application/edn",inst_27694);
var inst_27696 = cljs.core.async.put_BANG_.call(null,channel,inst_27695);
var inst_27697 = cljs.core.async.close_BANG_.call(null,channel);
var state_27699__$1 = (function (){var statearr_27701 = state_27699;
(statearr_27701[(7)] = inst_27696);

return statearr_27701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27699__$1,inst_27697);
} else {
if((state_val_27700 === (1))){
var inst_27691 = client.call(null,request);
var state_27699__$1 = state_27699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27699__$1,(2),inst_27691);
} else {
return null;
}
}
});})(c__6508__auto___27709,channel))
;
return ((function (switch__6493__auto__,c__6508__auto___27709,channel){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_27705 = [null,null,null,null,null,null,null,null];
(statearr_27705[(0)] = state_machine__6494__auto__);

(statearr_27705[(1)] = (1));

return statearr_27705;
});
var state_machine__6494__auto____1 = (function (state_27699){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_27699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e27706){if((e27706 instanceof Object)){
var ex__6497__auto__ = e27706;
var statearr_27707_27710 = state_27699;
(statearr_27707_27710[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27711 = state_27699;
state_27699 = G__27711;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_27699){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_27699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___27709,channel))
})();
var state__6510__auto__ = (function (){var statearr_27708 = f__6509__auto__.call(null);
(statearr_27708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___27709);

return statearr_27708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___27709,channel))
);


return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__27712){
var vec__27714 = p__27712;
var accept = cljs.core.nth.call(null,vec__27714,(0),null);
return ((function (vec__27714,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__3628__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__27714,accept))
};
var wrap_accept = function (client,var_args){
var p__27712 = null;
if (arguments.length > 1) {
  p__27712 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_accept__delegate.call(this,client,p__27712);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__27715){
var client = cljs.core.first(arglist__27715);
var p__27712 = cljs.core.rest(arglist__27715);
return wrap_accept__delegate(client,p__27712);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__27716){
var vec__27718 = p__27716;
var content_type = cljs.core.nth.call(null,vec__27718,(0),null);
return ((function (vec__27718,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__3628__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__27718,content_type))
};
var wrap_content_type = function (client,var_args){
var p__27716 = null;
if (arguments.length > 1) {
  p__27716 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_content_type__delegate.call(this,client,p__27716);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__27719){
var client = cljs.core.first(arglist__27719);
var p__27716 = cljs.core.rest(arglist__27719);
return wrap_content_type__delegate(client,p__27716);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
* Encode :transit-params in the `request` :body and set the appropriate
* Content Type header.
* 
* A :transit-opts map can be optionally provided with the following keys:
* 
* :encoding                #{:json, :json-verbose}
* :decoding                #{:json, :json-verbose}
* :encoding/decoding-opts  appropriate map of options to be passed to
* transit writer/reader, respectively.
*/
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__27721 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__27721__$1 = ((cljs.core.seq_QMARK_.call(null,map__27721))?cljs.core.apply.call(null,cljs.core.hash_map,map__27721):map__27721);
var encoding_opts = cljs.core.get.call(null,map__27721__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var encoding = cljs.core.get.call(null,map__27721__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else {
return client.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var channel = cljs.core.async.chan.call(null);
var map__27743 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__27743__$1 = ((cljs.core.seq_QMARK_.call(null,map__27743))?cljs.core.apply.call(null,cljs.core.hash_map,map__27743):map__27743);
var decoding_opts = cljs.core.get.call(null,map__27743__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var decoding = cljs.core.get.call(null,map__27743__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var c__6508__auto___27763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___27763,channel,map__27743,map__27743__$1,decoding_opts,decoding){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___27763,channel,map__27743,map__27743__$1,decoding_opts,decoding){
return (function (state_27753){
var state_val_27754 = (state_27753[(1)]);
if((state_val_27754 === (2))){
var inst_27746 = (state_27753[(2)]);
var inst_27747 = (function (){var response = inst_27746;
return ((function (response,inst_27746,state_val_27754,c__6508__auto___27763,channel,map__27743,map__27743__$1,decoding_opts,decoding){
return (function (p1__27722_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__27722_SHARP_,decoding,decoding_opts);
});
;})(response,inst_27746,state_val_27754,c__6508__auto___27763,channel,map__27743,map__27743__$1,decoding_opts,decoding))
})();
var inst_27748 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);
var inst_27749 = cljs_http.client.decode_body.call(null,inst_27746,inst_27747,"application/transit+json",inst_27748);
var inst_27750 = cljs.core.async.put_BANG_.call(null,channel,inst_27749);
var inst_27751 = cljs.core.async.close_BANG_.call(null,channel);
var state_27753__$1 = (function (){var statearr_27755 = state_27753;
(statearr_27755[(7)] = inst_27750);

return statearr_27755;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27753__$1,inst_27751);
} else {
if((state_val_27754 === (1))){
var inst_27744 = client.call(null,request);
var state_27753__$1 = state_27753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27753__$1,(2),inst_27744);
} else {
return null;
}
}
});})(c__6508__auto___27763,channel,map__27743,map__27743__$1,decoding_opts,decoding))
;
return ((function (switch__6493__auto__,c__6508__auto___27763,channel,map__27743,map__27743__$1,decoding_opts,decoding){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_27759 = [null,null,null,null,null,null,null,null];
(statearr_27759[(0)] = state_machine__6494__auto__);

(statearr_27759[(1)] = (1));

return statearr_27759;
});
var state_machine__6494__auto____1 = (function (state_27753){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_27753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e27760){if((e27760 instanceof Object)){
var ex__6497__auto__ = e27760;
var statearr_27761_27764 = state_27753;
(statearr_27761_27764[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27765 = state_27753;
state_27753 = G__27765;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_27753){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_27753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___27763,channel,map__27743,map__27743__$1,decoding_opts,decoding))
})();
var state__6510__auto__ = (function (){var statearr_27762 = f__6509__auto__.call(null);
(statearr_27762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___27763);

return statearr_27762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___27763,channel,map__27743,map__27743__$1,decoding_opts,decoding))
);


return channel;
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else {
return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
var channel = cljs.core.async.chan.call(null);
var c__6508__auto___27802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___27802,channel){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___27802,channel){
return (function (state_27792){
var state_val_27793 = (state_27792[(1)]);
if((state_val_27793 === (2))){
var inst_27786 = (state_27792[(2)]);
var inst_27787 = new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request);
var inst_27788 = cljs_http.client.decode_body.call(null,inst_27786,cljs_http.util.json_decode,"application/json",inst_27787);
var inst_27789 = cljs.core.async.put_BANG_.call(null,channel,inst_27788);
var inst_27790 = cljs.core.async.close_BANG_.call(null,channel);
var state_27792__$1 = (function (){var statearr_27794 = state_27792;
(statearr_27794[(7)] = inst_27789);

return statearr_27794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27792__$1,inst_27790);
} else {
if((state_val_27793 === (1))){
var inst_27784 = client.call(null,request);
var state_27792__$1 = state_27792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27792__$1,(2),inst_27784);
} else {
return null;
}
}
});})(c__6508__auto___27802,channel))
;
return ((function (switch__6493__auto__,c__6508__auto___27802,channel){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_27798 = [null,null,null,null,null,null,null,null];
(statearr_27798[(0)] = state_machine__6494__auto__);

(statearr_27798[(1)] = (1));

return statearr_27798;
});
var state_machine__6494__auto____1 = (function (state_27792){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_27792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e27799){if((e27799 instanceof Object)){
var ex__6497__auto__ = e27799;
var statearr_27800_27803 = state_27792;
(statearr_27800_27803[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27804 = state_27792;
state_27792 = G__27804;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_27792){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_27792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___27802,channel))
})();
var state__6510__auto__ = (function (){var statearr_27801 = f__6509__auto__.call(null);
(statearr_27801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___27802);

return statearr_27801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___27802,channel))
);


return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__27807){
var map__27808 = p__27807;
var map__27808__$1 = ((cljs.core.seq_QMARK_.call(null,map__27808))?cljs.core.apply.call(null,cljs.core.hash_map,map__27808):map__27808);
var req = map__27808__$1;
var query_params = cljs.core.get.call(null,map__27808__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__27811){
var map__27812 = p__27811;
var map__27812__$1 = ((cljs.core.seq_QMARK_.call(null,map__27812))?cljs.core.apply.call(null,cljs.core.hash_map,map__27812):map__27812);
var request = map__27812__$1;
var request_method = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var form_params = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
if(cljs.core.truth_((function (){var and__3616__auto__ = form_params;
if(cljs.core.truth_(and__3616__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__3616__auto__;
}
})())){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){
return (function (request){
return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"android","android",-2084094573)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__27813_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__27813_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__27817){
var map__27818 = p__27817;
var map__27818__$1 = ((cljs.core.seq_QMARK_.call(null,map__27818))?cljs.core.apply.call(null,cljs.core.hash_map,map__27818):map__27818);
var req = map__27818__$1;
var query_params = cljs.core.get.call(null,map__27818__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__27818,map__27818__$1,req,query_params){
return (function (p1__27814_SHARP_){
return cljs.core.merge.call(null,p1__27814_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__27818,map__27818__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__27819){
var vec__27821 = p__27819;
var credentials = cljs.core.nth.call(null,vec__27821,(0),null);
return ((function (vec__27821,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3628__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__27821,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__27819 = null;
if (arguments.length > 1) {
  p__27819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return wrap_basic_auth__delegate.call(this,client,p__27819);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__27822){
var client = cljs.core.first(arglist__27822);
var p__27819 = cljs.core.rest(arglist__27822);
return wrap_basic_auth__delegate(client,p__27819);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){
return (function (req){
var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){
return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__27823){
var vec__27825 = p__27823;
var req = cljs.core.nth.call(null,vec__27825,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__27823 = null;
if (arguments.length > 1) {
  p__27823 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return delete$__delegate.call(this,url,p__27823);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__27826){
var url = cljs.core.first(arglist__27826);
var p__27823 = cljs.core.rest(arglist__27826);
return delete$__delegate(url,p__27823);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__27827){
var vec__27829 = p__27827;
var req = cljs.core.nth.call(null,vec__27829,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__27827 = null;
if (arguments.length > 1) {
  p__27827 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return get__delegate.call(this,url,p__27827);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__27830){
var url = cljs.core.first(arglist__27830);
var p__27827 = cljs.core.rest(arglist__27830);
return get__delegate(url,p__27827);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__27831){
var vec__27833 = p__27831;
var req = cljs.core.nth.call(null,vec__27833,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__27831 = null;
if (arguments.length > 1) {
  p__27831 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return head__delegate.call(this,url,p__27831);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__27834){
var url = cljs.core.first(arglist__27834);
var p__27831 = cljs.core.rest(arglist__27834);
return head__delegate(url,p__27831);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__27835){
var vec__27837 = p__27835;
var req = cljs.core.nth.call(null,vec__27837,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__27835 = null;
if (arguments.length > 1) {
  p__27835 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return move__delegate.call(this,url,p__27835);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__27838){
var url = cljs.core.first(arglist__27838);
var p__27835 = cljs.core.rest(arglist__27838);
return move__delegate(url,p__27835);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__27839){
var vec__27841 = p__27839;
var req = cljs.core.nth.call(null,vec__27841,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__27839 = null;
if (arguments.length > 1) {
  p__27839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return options__delegate.call(this,url,p__27839);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__27842){
var url = cljs.core.first(arglist__27842);
var p__27839 = cljs.core.rest(arglist__27842);
return options__delegate(url,p__27839);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__27843){
var vec__27845 = p__27843;
var req = cljs.core.nth.call(null,vec__27845,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__27843 = null;
if (arguments.length > 1) {
  p__27843 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return patch__delegate.call(this,url,p__27843);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__27846){
var url = cljs.core.first(arglist__27846);
var p__27843 = cljs.core.rest(arglist__27846);
return patch__delegate(url,p__27843);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__27847){
var vec__27849 = p__27847;
var req = cljs.core.nth.call(null,vec__27849,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__27847 = null;
if (arguments.length > 1) {
  p__27847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return post__delegate.call(this,url,p__27847);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__27850){
var url = cljs.core.first(arglist__27850);
var p__27847 = cljs.core.rest(arglist__27850);
return post__delegate(url,p__27847);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__27851){
var vec__27853 = p__27851;
var req = cljs.core.nth.call(null,vec__27853,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__27851 = null;
if (arguments.length > 1) {
  p__27851 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return put__delegate.call(this,url,p__27851);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__27854){
var url = cljs.core.first(arglist__27854);
var p__27851 = cljs.core.rest(arglist__27854);
return put__delegate(url,p__27851);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
