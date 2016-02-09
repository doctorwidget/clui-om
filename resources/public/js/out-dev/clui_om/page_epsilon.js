// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.page_epsilon');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('joy.music');
goog.require('clojure.browser.event');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clui_om.misc.music_theory');
goog.require('clojure.string');
goog.require('clojure.browser.net');
goog.require('om.core');
clui_om.page_epsilon.make_once = cljs.core.memoize.call(null,(function (audio_api){
return (new audio_api());
}));
/**
* Takes a WebAudio context and a simple note map, and returns an Oscillator
* node from the the WebAudio API. The returned node is already hooked up to a
* compressor to prevent feedback, and to the AudioContext .-destination (i.e.
* to the speakers). All that remains to do is to call (.start) on it.
*/
clui_om.page_epsilon.oscillator_node = (function oscillator_node(p__18589){
var map__18591 = p__18589;
var map__18591__$1 = ((cljs.core.seq_QMARK_.call(null,map__18591))?cljs.core.apply.call(null,cljs.core.hash_map,map__18591):map__18591);
var freq = cljs.core.get.call(null,map__18591__$1,new cljs.core.Keyword(null,"freq","freq",-1855845278));
var temp__4124__auto__ = (function (){var or__3628__auto__ = window.AudioContext;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return window.webkitAudioContext;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var audio_api = temp__4124__auto__;
var ctx = clui_om.page_epsilon.make_once.call(null,audio_api);
var compressor = ctx.createDynamicsCompressor();
var node = ctx.createOscillator();
node.frequency.value = freq;

node.connect(compressor);

compressor.connect(ctx.destination);

return node;
} else {
return null;
}
});
/**
* Get the audio context if it exists, or return nil if it does not
*/
clui_om.page_epsilon.get_audio_context = (function get_audio_context(){
var temp__4124__auto__ = (function (){var or__3628__auto__ = window.AudioContext;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return window.webkitAudioContext;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var audio_api = temp__4124__auto__;
return clui_om.page_epsilon.make_once.call(null,audio_api);
} else {
return null;
}
});
/**
* Takes an audio file as returned by an HTTP request and converts it for use
* with the WebAudio API
*/
clui_om.page_epsilon.decode_file = (function decode_file(audio_file){
var temp__4124__auto__ = clui_om.page_epsilon.get_audio_context.call(null);
if(cljs.core.truth_(temp__4124__auto__)){
var ctx = temp__4124__auto__;
var handler = ((function (ctx,temp__4124__auto__){
return (function (buffer){
var abs_node = ctx.createBufferSource();
abs_node.source = buffer;

return abs_node.connect(ctx.destination);
});})(ctx,temp__4124__auto__))
;
return ctx.decodeAudioData(audio_file,handler);
} else {
return null;
}
});
/**
* Takes an audio file (as returned by an HTTP request), and returns a
* core.async channel. That channel will eventually yield an instance of
* AudioBufferSourceNode, which can be used like any other WebAudio node.
*/
clui_om.page_epsilon.file__GT_channel = (function file__GT_channel(audio_file){
var temp__4124__auto__ = clui_om.page_epsilon.get_audio_context.call(null);
if(cljs.core.truth_(temp__4124__auto__)){
var ctx = temp__4124__auto__;
var buffer_chan = cljs.core.async.chan.call(null);
var node_chan = cljs.core.async.chan.call(null);
ctx.decodeAudioData(audio_file,((function (buffer_chan,node_chan,ctx,temp__4124__auto__){
return (function (p1__18592_SHARP_){
return cljs.core.async.put_BANG_.call(null,buffer_chan,p1__18592_SHARP_);
});})(buffer_chan,node_chan,ctx,temp__4124__auto__))
);

var c__6508__auto___18629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___18629,buffer_chan,node_chan,ctx,temp__4124__auto__){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___18629,buffer_chan,node_chan,ctx,temp__4124__auto__){
return (function (state_18619){
var state_val_18620 = (state_18619[(1)]);
if((state_val_18620 === (2))){
var inst_18612 = (state_18619[(2)]);
var inst_18613 = ctx.createBufferSource();
var inst_18614 = inst_18613.buffer = inst_18612;
var inst_18615 = ctx.destination;
var inst_18616 = inst_18613.connect(inst_18615);
var inst_18617 = cljs.core.async.put_BANG_.call(null,node_chan,inst_18613);
var state_18619__$1 = (function (){var statearr_18621 = state_18619;
(statearr_18621[(7)] = inst_18616);

(statearr_18621[(8)] = inst_18614);

return statearr_18621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18619__$1,inst_18617);
} else {
if((state_val_18620 === (1))){
var state_18619__$1 = state_18619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18619__$1,(2),buffer_chan);
} else {
return null;
}
}
});})(c__6508__auto___18629,buffer_chan,node_chan,ctx,temp__4124__auto__))
;
return ((function (switch__6493__auto__,c__6508__auto___18629,buffer_chan,node_chan,ctx,temp__4124__auto__){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_18625 = [null,null,null,null,null,null,null,null,null];
(statearr_18625[(0)] = state_machine__6494__auto__);

(statearr_18625[(1)] = (1));

return statearr_18625;
});
var state_machine__6494__auto____1 = (function (state_18619){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_18619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e18626){if((e18626 instanceof Object)){
var ex__6497__auto__ = e18626;
var statearr_18627_18630 = state_18619;
(statearr_18627_18630[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18631 = state_18619;
state_18619 = G__18631;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_18619){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_18619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___18629,buffer_chan,node_chan,ctx,temp__4124__auto__))
})();
var state__6510__auto__ = (function (){var statearr_18628 = f__6509__auto__.call(null);
(statearr_18628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___18629);

return statearr_18628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___18629,buffer_chan,node_chan,ctx,temp__4124__auto__))
);


return node_chan;
} else {
return null;
}
});
/**
* Handler for successful XHR calls
*/
clui_om.page_epsilon.handle_success = (function handle_success(ev){
var result = ev.target;
var status = result.getStatus();
var headers = result.getResponseHeaders();
var audio_file = result.getResponse();
console.log("(handle-success):: status code ",status);

console.log("(handle-success):: headers ",headers);

var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,result,status,headers,audio_file){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,result,status,headers,audio_file){
return (function (state_18654){
var state_val_18655 = (state_18654[(1)]);
if((state_val_18655 === (2))){
var inst_18650 = (state_18654[(2)]);
var inst_18651 = console.log("(handle-success):: got an audio node!");
var inst_18652 = inst_18650.start();
var state_18654__$1 = (function (){var statearr_18656 = state_18654;
(statearr_18656[(7)] = inst_18651);

return statearr_18656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18654__$1,inst_18652);
} else {
if((state_val_18655 === (1))){
var inst_18648 = clui_om.page_epsilon.file__GT_channel.call(null,audio_file);
var state_18654__$1 = state_18654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18654__$1,(2),inst_18648);
} else {
return null;
}
}
});})(c__6508__auto__,result,status,headers,audio_file))
;
return ((function (switch__6493__auto__,c__6508__auto__,result,status,headers,audio_file){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_18660 = [null,null,null,null,null,null,null,null];
(statearr_18660[(0)] = state_machine__6494__auto__);

(statearr_18660[(1)] = (1));

return statearr_18660;
});
var state_machine__6494__auto____1 = (function (state_18654){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_18654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e18661){if((e18661 instanceof Object)){
var ex__6497__auto__ = e18661;
var statearr_18662_18664 = state_18654;
(statearr_18662_18664[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18665 = state_18654;
state_18654 = G__18665;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_18654){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_18654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,result,status,headers,audio_file))
})();
var state__6510__auto__ = (function (){var statearr_18663 = f__6509__auto__.call(null);
(statearr_18663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_18663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,result,status,headers,audio_file))
);

return c__6508__auto__;
});
/**
* Fetch a file and then play it
*/
clui_om.page_epsilon.fetch_and_play_BANG_ = (function fetch_and_play_BANG_(url){
var xhr = clojure.browser.net.xhr_connection.call(null);
var G__18667_18668 = xhr;
clojure.browser.event.listen.call(null,G__18667_18668,new cljs.core.Keyword(null,"success","success",1890645906),clui_om.page_epsilon.handle_success);

clojure.browser.event.listen.call(null,G__18667_18668,new cljs.core.Keyword(null,"error","error",-978969032),((function (G__18667_18668,xhr){
return (function (){
return console.log("XHR Request Error");
});})(G__18667_18668,xhr))
);

G__18667_18668.setResponseType("arraybuffer");


return clojure.browser.net.transmit.call(null,xhr,url,"GET");
});
clui_om.page_epsilon.track_names = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"affirmative","affirmative",36305091),new cljs.core.Keyword(null,"beep","beep",-1120313130),new cljs.core.Keyword(null,"intercom","intercom",-1489804996),new cljs.core.Keyword(null,"swoosh","swoosh",642245265),new cljs.core.Keyword(null,"working","working",1699655245)], null);
/**
* Get a vector of the various audio tracks as Om-friendly sub-maps
*/
clui_om.page_epsilon.get_tracks = (function get_tracks(tracks){
return cljs.core.reduce.call(null,(function (v,k){
return cljs.core.conj.call(null,v,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),k,new cljs.core.Keyword(null,"file","file",-1269645878),[cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(".mp3")].join(''),new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false], null));
}),cljs.core.PersistentVector.EMPTY,tracks);
});
clui_om.page_epsilon.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"notes","notes",-1039600523),clui_om.misc.music_theory.chromatic_scale.call(null),new cljs.core.Keyword(null,"tracks","tracks",-326768501),clui_om.page_epsilon.get_tracks.call(null,clui_om.page_epsilon.track_names)], null));
clui_om.page_epsilon.ALPHA_ROOT = document.getElementById("alpha-div");
/**
* Get the list of props for a piano key
*/
clui_om.page_epsilon.piano_key_props = (function piano_key_props(p__18669,p__18670){
var map__18673 = p__18669;
var map__18673__$1 = ((cljs.core.seq_QMARK_.call(null,map__18673))?cljs.core.apply.call(null,cljs.core.hash_map,map__18673):map__18673);
var cursor = map__18673__$1;
var offset = cljs.core.get.call(null,map__18673__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var freq = cljs.core.get.call(null,map__18673__$1,new cljs.core.Keyword(null,"freq","freq",-1855845278));
var cent = cljs.core.get.call(null,map__18673__$1,new cljs.core.Keyword(null,"cent","cent",-673959391));
var note = cljs.core.get.call(null,map__18673__$1,new cljs.core.Keyword(null,"note","note",1426297904));
var map__18674 = p__18670;
var map__18674__$1 = ((cljs.core.seq_QMARK_.call(null,map__18674))?cljs.core.apply.call(null,cljs.core.hash_map,map__18674):map__18674);
var state = map__18674__$1;
var active = cljs.core.get.call(null,map__18674__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var hovering = cljs.core.get.call(null,map__18674__$1,new cljs.core.Keyword(null,"hovering","hovering",-571536091));
var motion = cljs.core.get.call(null,map__18674__$1,new cljs.core.Keyword(null,"motion","motion",36831425));
var pressure = cljs.core.get.call(null,map__18674__$1,new cljs.core.Keyword(null,"pressure","pressure",505343747));
var minor = clui_om.misc.music_theory.minor_QMARK_.call(null,note);
var left = (offset * (6));
var classes = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("pianoKey"),cljs.core.str(((minor)?" minor":null)),cljs.core.str((cljs.core.truth_(hovering)?" glow":null)),cljs.core.str((cljs.core.truth_(active)?" active":null))].join('')], null);
var handlers = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),((function (minor,left,classes,map__18673,map__18673__$1,cursor,offset,freq,cent,note,map__18674,map__18674__$1,state,active,hovering,motion,pressure){
return (function (){
return cljs.core.async.put_BANG_.call(null,pressure,new cljs.core.Keyword(null,"down","down",1565245570));
});})(minor,left,classes,map__18673,map__18673__$1,cursor,offset,freq,cent,note,map__18674,map__18674__$1,state,active,hovering,motion,pressure))
,new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),((function (minor,left,classes,map__18673,map__18673__$1,cursor,offset,freq,cent,note,map__18674,map__18674__$1,state,active,hovering,motion,pressure){
return (function (){
return cljs.core.async.put_BANG_.call(null,pressure,new cljs.core.Keyword(null,"up","up",-269712113));
});})(minor,left,classes,map__18673,map__18673__$1,cursor,offset,freq,cent,note,map__18674,map__18674__$1,state,active,hovering,motion,pressure))
,new cljs.core.Keyword(null,"onMouseOver","onMouseOver",1787360977),((function (minor,left,classes,map__18673,map__18673__$1,cursor,offset,freq,cent,note,map__18674,map__18674__$1,state,active,hovering,motion,pressure){
return (function (){
return cljs.core.async.put_BANG_.call(null,motion,new cljs.core.Keyword(null,"over","over",192553051));
});})(minor,left,classes,map__18673,map__18673__$1,cursor,offset,freq,cent,note,map__18674,map__18674__$1,state,active,hovering,motion,pressure))
,new cljs.core.Keyword(null,"onMouseOut","onMouseOut",1953812864),((function (minor,left,classes,map__18673,map__18673__$1,cursor,offset,freq,cent,note,map__18674,map__18674__$1,state,active,hovering,motion,pressure){
return (function (){
return cljs.core.async.put_BANG_.call(null,motion,new cljs.core.Keyword(null,"out","out",-910545517));
});})(minor,left,classes,map__18673,map__18673__$1,cursor,offset,freq,cent,note,map__18674,map__18674__$1,state,active,hovering,motion,pressure))
], null);
var styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str(left),cljs.core.str("em")].join('')], null);
var final$ = cljs.core.merge.call(null,classes,handlers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null));
return cljs.core.clj__GT_js.call(null,final$);
});
/**
* Om component representing one piano key
*/
clui_om.page_epsilon.piano_key = (function piano_key(cursor,owner,opts){
if(typeof clui_om.page_epsilon.t18770 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_epsilon.t18770 = (function (opts,owner,cursor,piano_key,meta18771){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.piano_key = piano_key;
this.meta18771 = meta18771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_epsilon.t18770.prototype.om$core$IRenderState$ = true;

clui_om.page_epsilon.t18770.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18773){
var self__ = this;
var map__18774 = p__18773;
var map__18774__$1 = ((cljs.core.seq_QMARK_.call(null,map__18774))?cljs.core.apply.call(null,cljs.core.hash_map,map__18774):map__18774);
var state = map__18774__$1;
var hovering = cljs.core.get.call(null,map__18774__$1,new cljs.core.Keyword(null,"hovering","hovering",-571536091));
var ___$1 = this;
return React.DOM.div(clui_om.page_epsilon.piano_key_props.call(null,self__.cursor,state),React.DOM.div({"className": "noteName"},clojure.string.upper_case.call(null,[cljs.core.str(cljs.core.name.call(null,self__.cursor.call(null,new cljs.core.Keyword(null,"note","note",1426297904))))].join(''))));
});

clui_om.page_epsilon.t18770.prototype.om$core$IWillMount$ = true;

clui_om.page_epsilon.t18770.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var pressure = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"pressure","pressure",505343747));
var motion = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"motion","motion",36831425));
var label = new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(self__.cursor);
var c__6508__auto___18865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto___18865,pressure,motion,label,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto___18865,pressure,motion,label,___$1){
return (function (state_18807){
var state_val_18808 = (state_18807[(1)]);
if((state_val_18808 === (7))){
var inst_18802 = (state_18807[(2)]);
var state_18807__$1 = (function (){var statearr_18809 = state_18807;
(statearr_18809[(7)] = inst_18802);

return statearr_18809;
})();
var statearr_18810_18866 = state_18807__$1;
(statearr_18810_18866[(2)] = null);

(statearr_18810_18866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (1))){
var state_18807__$1 = state_18807;
var statearr_18811_18867 = state_18807__$1;
(statearr_18811_18867[(2)] = null);

(statearr_18811_18867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (4))){
var inst_18777 = (state_18807[(2)]);
var inst_18778 = cljs.core._EQ_.call(null,inst_18777,new cljs.core.Keyword(null,"down","down",1565245570));
var state_18807__$1 = state_18807;
if(inst_18778){
var statearr_18812_18868 = state_18807__$1;
(statearr_18812_18868[(1)] = (5));

} else {
var statearr_18813_18869 = state_18807__$1;
(statearr_18813_18869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (13))){
var inst_18800 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18814_18870 = state_18807__$1;
(statearr_18814_18870[(2)] = inst_18800);

(statearr_18814_18870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (6))){
var inst_18793 = (state_18807[(8)]);
var inst_18792 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068),false);
var inst_18793__$1 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"sound","sound",-2127407070));
var inst_18794 = cljs.core.not_EQ_.call(null,inst_18793__$1,new cljs.core.Keyword(null,"silence","silence",1707565736));
var state_18807__$1 = (function (){var statearr_18815 = state_18807;
(statearr_18815[(8)] = inst_18793__$1);

(statearr_18815[(9)] = inst_18792);

return statearr_18815;
})();
if(inst_18794){
var statearr_18816_18871 = state_18807__$1;
(statearr_18816_18871[(1)] = (11));

} else {
var statearr_18817_18872 = state_18807__$1;
(statearr_18817_18872[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (3))){
var inst_18805 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18807__$1,inst_18805);
} else {
if((state_val_18808 === (12))){
var state_18807__$1 = state_18807;
var statearr_18818_18873 = state_18807__$1;
(statearr_18818_18873[(2)] = null);

(statearr_18818_18873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (2))){
var state_18807__$1 = state_18807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18807__$1,(4),pressure);
} else {
if((state_val_18808 === (11))){
var inst_18793 = (state_18807[(8)]);
var inst_18796 = inst_18793.stop();
var inst_18797 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"silence","silence",1707565736));
var state_18807__$1 = (function (){var statearr_18819 = state_18807;
(statearr_18819[(10)] = inst_18796);

return statearr_18819;
})();
var statearr_18820_18874 = state_18807__$1;
(statearr_18820_18874[(2)] = inst_18797);

(statearr_18820_18874[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (9))){
var state_18807__$1 = state_18807;
var statearr_18821_18875 = state_18807__$1;
(statearr_18821_18875[(2)] = null);

(statearr_18821_18875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (5))){
var inst_18780 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"active","active",1895962068),true);
var inst_18781 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"sound","sound",-2127407070));
var inst_18782 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"silence","silence",1707565736),inst_18781);
var state_18807__$1 = (function (){var statearr_18822 = state_18807;
(statearr_18822[(11)] = inst_18780);

return statearr_18822;
})();
if(inst_18782){
var statearr_18823_18876 = state_18807__$1;
(statearr_18823_18876[(1)] = (8));

} else {
var statearr_18824_18877 = state_18807__$1;
(statearr_18824_18877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (10))){
var inst_18790 = (state_18807[(2)]);
var state_18807__$1 = state_18807;
var statearr_18825_18878 = state_18807__$1;
(statearr_18825_18878[(2)] = inst_18790);

(statearr_18825_18878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18808 === (8))){
var inst_18784 = cljs.core.deref.call(null,self__.cursor);
var inst_18785 = clui_om.page_epsilon.oscillator_node.call(null,inst_18784);
var inst_18786 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"sound","sound",-2127407070),inst_18785);
var inst_18787 = inst_18785.start();
var state_18807__$1 = (function (){var statearr_18826 = state_18807;
(statearr_18826[(12)] = inst_18786);

return statearr_18826;
})();
var statearr_18827_18879 = state_18807__$1;
(statearr_18827_18879[(2)] = inst_18787);

(statearr_18827_18879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6508__auto___18865,pressure,motion,label,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto___18865,pressure,motion,label,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_18831 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18831[(0)] = state_machine__6494__auto__);

(statearr_18831[(1)] = (1));

return statearr_18831;
});
var state_machine__6494__auto____1 = (function (state_18807){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_18807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e18832){if((e18832 instanceof Object)){
var ex__6497__auto__ = e18832;
var statearr_18833_18880 = state_18807;
(statearr_18833_18880[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18881 = state_18807;
state_18807 = G__18881;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_18807){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_18807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto___18865,pressure,motion,label,___$1))
})();
var state__6510__auto__ = (function (){var statearr_18834 = f__6509__auto__.call(null);
(statearr_18834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto___18865);

return statearr_18834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto___18865,pressure,motion,label,___$1))
);


var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,pressure,motion,label,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,pressure,motion,label,___$1){
return (function (state_18849){
var state_val_18850 = (state_18849[(1)]);
if((state_val_18850 === (7))){
var inst_18844 = (state_18849[(2)]);
var state_18849__$1 = (function (){var statearr_18851 = state_18849;
(statearr_18851[(7)] = inst_18844);

return statearr_18851;
})();
var statearr_18852_18882 = state_18849__$1;
(statearr_18852_18882[(2)] = null);

(statearr_18852_18882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (6))){
var inst_18842 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hovering","hovering",-571536091),false);
var state_18849__$1 = state_18849;
var statearr_18853_18883 = state_18849__$1;
(statearr_18853_18883[(2)] = inst_18842);

(statearr_18853_18883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (5))){
var inst_18840 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hovering","hovering",-571536091),true);
var state_18849__$1 = state_18849;
var statearr_18854_18884 = state_18849__$1;
(statearr_18854_18884[(2)] = inst_18840);

(statearr_18854_18884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (4))){
var inst_18837 = (state_18849[(2)]);
var inst_18838 = cljs.core._EQ_.call(null,inst_18837,new cljs.core.Keyword(null,"over","over",192553051));
var state_18849__$1 = state_18849;
if(inst_18838){
var statearr_18855_18885 = state_18849__$1;
(statearr_18855_18885[(1)] = (5));

} else {
var statearr_18856_18886 = state_18849__$1;
(statearr_18856_18886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (3))){
var inst_18847 = (state_18849[(2)]);
var state_18849__$1 = state_18849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18849__$1,inst_18847);
} else {
if((state_val_18850 === (2))){
var state_18849__$1 = state_18849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18849__$1,(4),motion);
} else {
if((state_val_18850 === (1))){
var state_18849__$1 = state_18849;
var statearr_18857_18887 = state_18849__$1;
(statearr_18857_18887[(2)] = null);

(statearr_18857_18887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6508__auto__,pressure,motion,label,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto__,pressure,motion,label,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_18861 = [null,null,null,null,null,null,null,null];
(statearr_18861[(0)] = state_machine__6494__auto__);

(statearr_18861[(1)] = (1));

return statearr_18861;
});
var state_machine__6494__auto____1 = (function (state_18849){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_18849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e18862){if((e18862 instanceof Object)){
var ex__6497__auto__ = e18862;
var statearr_18863_18888 = state_18849;
(statearr_18863_18888[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18889 = state_18849;
state_18849 = G__18889;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_18849){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_18849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,pressure,motion,label,___$1))
})();
var state__6510__auto__ = (function (){var statearr_18864 = f__6509__auto__.call(null);
(statearr_18864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_18864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,pressure,motion,label,___$1))
);

return c__6508__auto__;
});

clui_om.page_epsilon.t18770.prototype.om$core$IInitState$ = true;

clui_om.page_epsilon.t18770.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"hovering","hovering",-571536091),false,new cljs.core.Keyword(null,"active","active",1895962068),false,new cljs.core.Keyword(null,"pressure","pressure",505343747),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"motion","motion",36831425),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"silence","silence",1707565736)], null);
});

clui_om.page_epsilon.t18770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18772){
var self__ = this;
var _18772__$1 = this;
return self__.meta18771;
});

clui_om.page_epsilon.t18770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18772,meta18771__$1){
var self__ = this;
var _18772__$1 = this;
return (new clui_om.page_epsilon.t18770(self__.opts,self__.owner,self__.cursor,self__.piano_key,meta18771__$1));
});

clui_om.page_epsilon.t18770.cljs$lang$type = true;

clui_om.page_epsilon.t18770.cljs$lang$ctorStr = "clui-om.page-epsilon/t18770";

clui_om.page_epsilon.t18770.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-epsilon/t18770");
});

clui_om.page_epsilon.__GT_t18770 = (function __GT_t18770(opts__$1,owner__$1,cursor__$1,piano_key__$1,meta18771){
return (new clui_om.page_epsilon.t18770(opts__$1,owner__$1,cursor__$1,piano_key__$1,meta18771));
});

}

return (new clui_om.page_epsilon.t18770(opts,owner,cursor,piano_key,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),71,new cljs.core.Keyword(null,"end-line","end-line",1837326455),219,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),173,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_epsilon.cljs"], null)));
});
/**
* A container for a bunch of piano keys
*/
clui_om.page_epsilon.piano_bar = (function piano_bar(app,owner,opts){
if(typeof clui_om.page_epsilon.t18893 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_epsilon.t18893 = (function (opts,owner,app,piano_bar,meta18894){
this.opts = opts;
this.owner = owner;
this.app = app;
this.piano_bar = piano_bar;
this.meta18894 = meta18894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_epsilon.t18893.prototype.om$core$IRender$ = true;

clui_om.page_epsilon.t18893.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "pianoBar"},React.DOM.div({"className": "pianoOuter"},cljs.core.apply.call(null,om.dom.div,{"className": "pianoInner"},om.core.build_all.call(null,clui_om.page_epsilon.piano_key,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(self__.app)))));
});

clui_om.page_epsilon.t18893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18895){
var self__ = this;
var _18895__$1 = this;
return self__.meta18894;
});

clui_om.page_epsilon.t18893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18895,meta18894__$1){
var self__ = this;
var _18895__$1 = this;
return (new clui_om.page_epsilon.t18893(self__.opts,self__.owner,self__.app,self__.piano_bar,meta18894__$1));
});

clui_om.page_epsilon.t18893.cljs$lang$type = true;

clui_om.page_epsilon.t18893.cljs$lang$ctorStr = "clui-om.page-epsilon/t18893";

clui_om.page_epsilon.t18893.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-epsilon/t18893");
});

clui_om.page_epsilon.__GT_t18893 = (function __GT_t18893(opts__$1,owner__$1,app__$1,piano_bar__$1,meta18894){
return (new clui_om.page_epsilon.t18893(opts__$1,owner__$1,app__$1,piano_bar__$1,meta18894));
});

}

return (new clui_om.page_epsilon.t18893(opts,owner,app,piano_bar,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),74,new cljs.core.Keyword(null,"end-line","end-line",1837326455),230,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),224,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_epsilon.cljs"], null)));
});
/**
* A component that provides a button to play a single audio file
*/
clui_om.page_epsilon.juke_button = (function juke_button(cursor,owner,opts){
if(typeof clui_om.page_epsilon.t18926 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_epsilon.t18926 = (function (opts,owner,cursor,juke_button,meta18927){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.juke_button = juke_button;
this.meta18927 = meta18927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_epsilon.t18926.prototype.om$core$IRenderState$ = true;

clui_om.page_epsilon.t18926.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18929){
var self__ = this;
var map__18930 = p__18929;
var map__18930__$1 = ((cljs.core.seq_QMARK_.call(null,map__18930))?cljs.core.apply.call(null,cljs.core.hash_map,map__18930):map__18930);
var state = map__18930__$1;
var clicks = cljs.core.get.call(null,map__18930__$1,new cljs.core.Keyword(null,"clicks","clicks",673274951));
var ___$1 = this;
return React.DOM.div({"className": "trackButton"},React.DOM.button({"onClick": ((function (___$1,map__18930,map__18930__$1,state,clicks){
return (function (){
return cljs.core.async.put_BANG_.call(null,clicks,new cljs.core.Keyword(null,"play","play",-580418022));
});})(___$1,map__18930,map__18930__$1,state,clicks))
},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.cursor))].join('')));
});

clui_om.page_epsilon.t18926.prototype.om$core$IWillMount$ = true;

clui_om.page_epsilon.t18926.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var clicks = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"clicks","clicks",673274951));
var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__,clicks,___$1){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__,clicks,___$1){
return (function (state_18944){
var state_val_18945 = (state_18944[(1)]);
if((state_val_18945 === (4))){
var inst_18933 = (state_18944[(2)]);
var inst_18934 = cljs.core.deref.call(null,self__.cursor);
var inst_18935 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_18934);
var inst_18936 = [cljs.core.str("/audio/"),cljs.core.str(inst_18935)].join('');
var inst_18937 = [cljs.core.str("Requesting track: "),cljs.core.str(inst_18936)].join('');
var inst_18938 = console.log(inst_18937);
var inst_18939 = clui_om.page_epsilon.fetch_and_play_BANG_.call(null,inst_18936);
var state_18944__$1 = (function (){var statearr_18946 = state_18944;
(statearr_18946[(7)] = inst_18939);

(statearr_18946[(8)] = inst_18933);

(statearr_18946[(9)] = inst_18938);

return statearr_18946;
})();
var statearr_18947_18956 = state_18944__$1;
(statearr_18947_18956[(2)] = null);

(statearr_18947_18956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18945 === (3))){
var inst_18942 = (state_18944[(2)]);
var state_18944__$1 = state_18944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18944__$1,inst_18942);
} else {
if((state_val_18945 === (2))){
var state_18944__$1 = state_18944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18944__$1,(4),clicks);
} else {
if((state_val_18945 === (1))){
var state_18944__$1 = state_18944;
var statearr_18948_18957 = state_18944__$1;
(statearr_18948_18957[(2)] = null);

(statearr_18948_18957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6508__auto__,clicks,___$1))
;
return ((function (switch__6493__auto__,c__6508__auto__,clicks,___$1){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_18952 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18952[(0)] = state_machine__6494__auto__);

(statearr_18952[(1)] = (1));

return statearr_18952;
});
var state_machine__6494__auto____1 = (function (state_18944){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_18944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e18953){if((e18953 instanceof Object)){
var ex__6497__auto__ = e18953;
var statearr_18954_18958 = state_18944;
(statearr_18954_18958[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18959 = state_18944;
state_18944 = G__18959;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_18944){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_18944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__,clicks,___$1))
})();
var state__6510__auto__ = (function (){var statearr_18955 = f__6509__auto__.call(null);
(statearr_18955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_18955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__,clicks,___$1))
);

return c__6508__auto__;
});

clui_om.page_epsilon.t18926.prototype.om$core$IInitState$ = true;

clui_om.page_epsilon.t18926.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clicks","clicks",673274951),cljs.core.async.chan.call(null)], null);
});

clui_om.page_epsilon.t18926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18928){
var self__ = this;
var _18928__$1 = this;
return self__.meta18927;
});

clui_om.page_epsilon.t18926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18928,meta18927__$1){
var self__ = this;
var _18928__$1 = this;
return (new clui_om.page_epsilon.t18926(self__.opts,self__.owner,self__.cursor,self__.juke_button,meta18927__$1));
});

clui_om.page_epsilon.t18926.cljs$lang$type = true;

clui_om.page_epsilon.t18926.cljs$lang$ctorStr = "clui-om.page-epsilon/t18926";

clui_om.page_epsilon.t18926.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-epsilon/t18926");
});

clui_om.page_epsilon.__GT_t18926 = (function __GT_t18926(opts__$1,owner__$1,cursor__$1,juke_button__$1,meta18927){
return (new clui_om.page_epsilon.t18926(opts__$1,owner__$1,cursor__$1,juke_button__$1,meta18927));
});

}

return (new clui_om.page_epsilon.t18926(opts,owner,cursor,juke_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),53,new cljs.core.Keyword(null,"end-line","end-line",1837326455),255,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),237,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_epsilon.cljs"], null)));
});
clui_om.page_epsilon.main_widget = (function main_widget(app,owner,opts){
if(typeof clui_om.page_epsilon.t18963 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.page_epsilon.t18963 = (function (opts,owner,app,main_widget,meta18964){
this.opts = opts;
this.owner = owner;
this.app = app;
this.main_widget = main_widget;
this.meta18964 = meta18964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.page_epsilon.t18963.prototype.om$core$IRender$ = true;

clui_om.page_epsilon.t18963.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "mainWidget"},React.DOM.div({"className": "mainInner"},om.core.build.call(null,clui_om.page_epsilon.piano_bar,self__.app)),React.DOM.hr(null),React.DOM.div({"className": "joyDemo"},React.DOM.div(null,React.DOM.p(null,"From: 'Joy of Clojure':"),React.DOM.button({"onClick": ((function (___$1){
return (function (){
return joy.music.main.call(null);
});})(___$1))
},"A Magical Theme"))),React.DOM.hr(null),cljs.core.apply.call(null,om.dom.div,{"className": "trackBar"},React.DOM.p(null,"Individual MP3 tracks:"),om.core.build_all.call(null,clui_om.page_epsilon.juke_button,new cljs.core.Keyword(null,"tracks","tracks",-326768501).cljs$core$IFn$_invoke$arity$1(self__.app))));
});

clui_om.page_epsilon.t18963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18965){
var self__ = this;
var _18965__$1 = this;
return self__.meta18964;
});

clui_om.page_epsilon.t18963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18965,meta18964__$1){
var self__ = this;
var _18965__$1 = this;
return (new clui_om.page_epsilon.t18963(self__.opts,self__.owner,self__.app,self__.main_widget,meta18964__$1));
});

clui_om.page_epsilon.t18963.cljs$lang$type = true;

clui_om.page_epsilon.t18963.cljs$lang$ctorStr = "clui-om.page-epsilon/t18963";

clui_om.page_epsilon.t18963.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.page-epsilon/t18963");
});

clui_om.page_epsilon.__GT_t18963 = (function __GT_t18963(opts__$1,owner__$1,app__$1,main_widget__$1,meta18964){
return (new clui_om.page_epsilon.t18963(opts__$1,owner__$1,app__$1,main_widget__$1,meta18964));
});

}

return (new clui_om.page_epsilon.t18963(opts,owner,app,main_widget,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),67,new cljs.core.Keyword(null,"end-line","end-line",1837326455),274,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),259,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/page_epsilon.cljs"], null)));
});
/**
* Main entry point for page epsilon
*/
clui_om.page_epsilon.main = (function main(){
var msg = "(main):: page_epsilon (main) function...";
console.log(msg);

return om.core.root.call(null,clui_om.page_epsilon.main_widget,clui_om.page_epsilon.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),clui_om.page_epsilon.ALPHA_ROOT], null));
});
goog.exportSymbol('clui_om.page_epsilon.main', clui_om.page_epsilon.main);
