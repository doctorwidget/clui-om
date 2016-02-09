// Compiled by ClojureScript 0.0-2496
goog.provide('joy.music');
goog.require('cljs.core');
/**
* Takes two arguments: a WebAudio AudioContext object (a native JavaScript
* object which is part of the official JavaScript WebAudio API), plus a map of
* settings. Returns a gain node (another WebAudio native JavaScript artifact)
* that goes from silent from T=0 to T=<delay>, up to <volume> 50 milliseconds
* later, followed by a ramp back down to silence after <duration>.
*/
joy.music.soft_attack = (function soft_attack(ctx,p__21294){
var map__21297 = p__21294;
var map__21297__$1 = ((cljs.core.seq_QMARK_.call(null,map__21297))?cljs.core.apply.call(null,cljs.core.hash_map,map__21297):map__21297);
var volume = cljs.core.get.call(null,map__21297__$1,new cljs.core.Keyword(null,"volume","volume",1900330799));
var duration = cljs.core.get.call(null,map__21297__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var delay = cljs.core.get.call(null,map__21297__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var node = ctx.createGain();
var ap = node.gain;
var G__21298_21299 = ap;
G__21298_21299.linearRampToValueAtTime((0),delay);

G__21298_21299.linearRampToValueAtTime(volume,(delay + 0.05));

G__21298_21299.linearRampToValueAtTime((0),(delay + duration));


return node;
});
/**
* Takes a WebAudio AudioContext object plus a map of settings.
* Returns an *oscillator* node that plays a steady note starting at <delay>
* seconds and continuing for <duration> seconds. Agnostic vis-a-vis volume.
* Note that <cent> is a term of art in the WebAudio API: it is the pitch
* of the note on the chromatic scale, where each full note is 100 cents
* away from the next full note (A, B, C etc).
* Oscillator nodes behave differently from gain nodes!
*/
joy.music.sine_tone = (function sine_tone(ctx,p__21300){
var map__21302 = p__21300;
var map__21302__$1 = ((cljs.core.seq_QMARK_.call(null,map__21302))?cljs.core.apply.call(null,cljs.core.hash_map,map__21302):map__21302);
var duration = cljs.core.get.call(null,map__21302__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var delay = cljs.core.get.call(null,map__21302__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var cent = cljs.core.get.call(null,map__21302__$1,new cljs.core.Keyword(null,"cent","cent",-673959391));
var node = ctx.createOscillator();
node.frequency.value = (440);

node.detune.value = (cent - (900));

node.start(delay);

node.stop((delay + duration));

return node;
});
/**
* Connects the output of node1 to the input of node2, returning node2.
* This lets nodes cooperate seamlessly!
*/
joy.music.connect_to = (function connect_to(node1,node2){
node1.connect(node2);

return node2;
});
/**
* Takes a WebAudio AudioContext object and a map of settings, and then plays a
* single note based on those settings. Results in a 'woo' sound, which is a bit
* like a glass harp. IMPORTANT NOTE: we're seeing the first function that will
* actually result in a single playable output. That output will be based on the
* input note map (which will have a musical key and duration etc), but the
* actual output will be filtered through the two synthesizers above: a gain node
* and an oscillator node. The final note can thus sound very different from
* another note of the same duration and key that passed through other types of
* synthesizer nodes, or through no synthesizer nodes at all.
*/
joy.music.woo = (function woo(ctx,note){
var linger = 1.5;
var note__$1 = cljs.core.update_in.call(null,note,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration","duration",1444101068)], null),cljs.core._STAR_,linger);
return joy.music.connect_to.call(null,joy.music.sine_tone.call(null,ctx,note__$1),joy.music.soft_attack.call(null,ctx,note__$1));
});
/**
* Returns a note map when given a 2-tuple of tone and duration
*/
joy.music.pair_to_note = (function pair_to_note(p__21303){
var vec__21305 = p__21303;
var tone = cljs.core.nth.call(null,vec__21305,(0),null);
var duration = cljs.core.nth.call(null,vec__21305,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cent","cent",-673959391),((100) * tone),new cljs.core.Keyword(null,"duration","duration",1444101068),duration,new cljs.core.Keyword(null,"volume","volume",1900330799),0.4], null);
});
/**
* Takes a sequence of note maps that have no :delay, and return them with
* the correct delays so that they plain the order given.
*/
joy.music.consecutive_notes = (function consecutive_notes(notes){
return cljs.core.reductions.call(null,(function (p__21308,note2){
var map__21309 = p__21308;
var map__21309__$1 = ((cljs.core.seq_QMARK_.call(null,map__21309))?cljs.core.apply.call(null,cljs.core.hash_map,map__21309):map__21309);
var note1 = map__21309__$1;
var duration = cljs.core.get.call(null,map__21309__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var delay = cljs.core.get.call(null,map__21309__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
return cljs.core.assoc.call(null,note2,new cljs.core.Keyword(null,"delay","delay",-574225219),(delay + duration));
}),notes);
});
joy.music.BPS = (6);
/**
* Returns a sequence of note maps at a moderate tempo when given an
* input sequence of tone pair tuples
*/
joy.music.notes = (function notes(tone_pairs){
return cljs.core.map.call(null,(function (p1__21311_SHARP_){
return cljs.core.update_in.call(null,p1__21311_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration","duration",1444101068)], null),cljs.core._SLASH_,joy.music.BPS);
}),cljs.core.map.call(null,(function (p1__21310_SHARP_){
return cljs.core.update_in.call(null,p1__21310_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delay","delay",-574225219)], null),cljs.core._SLASH_,joy.music.BPS);
}),joy.music.consecutive_notes.call(null,cljs.core.map.call(null,joy.music.pair_to_note,tone_pairs))));
});
/**
* A sequence of notes for a magical theme
*/
joy.music.magical_theme = (function magical_theme(){
cljs.core.List.EMPTY;

return joy.music.notes.call(null,(new cljs.core.PersistentVector(null,30,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(23),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(17),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(23),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(23),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(22),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(10)], null)],null)));
});
joy.music.make_once = cljs.core.memoize.call(null,(function (audio_api){
return (new audio_api());
}));
/**
* Kick off playing a sequence of notes. Takes a note-fn and a series of notes
* to play. The notes-fn must be a function of two arguments (an AudioContext
* object, and a map representing one note to play). The note-fn must return an
* AudioNode object that plays that one (now-altered) note.
*/
joy.music.play_BANG_ = (function play_BANG_(note_fn,notes){
var temp__4124__auto__ = (function (){var or__3628__auto__ = window.AudioContext;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return window.webkitAudioContext;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var audio_api = temp__4124__auto__;
var ctx = joy.music.make_once.call(null,audio_api);
var compressor = ctx.createDynamicsCompressor();
var now_21320 = ctx.currentTime;
var seq__21316_21321 = cljs.core.seq.call(null,notes);
var chunk__21317_21322 = null;
var count__21318_21323 = (0);
var i__21319_21324 = (0);
while(true){
if((i__21319_21324 < count__21318_21323)){
var note_21325 = cljs.core._nth.call(null,chunk__21317_21322,i__21319_21324);
joy.music.connect_to.call(null,note_fn.call(null,ctx,cljs.core.update_in.call(null,note_21325,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delay","delay",-574225219)], null),cljs.core._PLUS_,now_21320)),compressor);

var G__21326 = seq__21316_21321;
var G__21327 = chunk__21317_21322;
var G__21328 = count__21318_21323;
var G__21329 = (i__21319_21324 + (1));
seq__21316_21321 = G__21326;
chunk__21317_21322 = G__21327;
count__21318_21323 = G__21328;
i__21319_21324 = G__21329;
continue;
} else {
var temp__4126__auto___21330 = cljs.core.seq.call(null,seq__21316_21321);
if(temp__4126__auto___21330){
var seq__21316_21331__$1 = temp__4126__auto___21330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21316_21331__$1)){
var c__4415__auto___21332 = cljs.core.chunk_first.call(null,seq__21316_21331__$1);
var G__21333 = cljs.core.chunk_rest.call(null,seq__21316_21331__$1);
var G__21334 = c__4415__auto___21332;
var G__21335 = cljs.core.count.call(null,c__4415__auto___21332);
var G__21336 = (0);
seq__21316_21321 = G__21333;
chunk__21317_21322 = G__21334;
count__21318_21323 = G__21335;
i__21319_21324 = G__21336;
continue;
} else {
var note_21337 = cljs.core.first.call(null,seq__21316_21331__$1);
joy.music.connect_to.call(null,note_fn.call(null,ctx,cljs.core.update_in.call(null,note_21337,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delay","delay",-574225219)], null),cljs.core._PLUS_,now_21320)),compressor);

var G__21338 = cljs.core.next.call(null,seq__21316_21331__$1);
var G__21339 = null;
var G__21340 = (0);
var G__21341 = (0);
seq__21316_21321 = G__21338;
chunk__21317_21322 = G__21339;
count__21318_21323 = G__21340;
i__21319_21324 = G__21341;
continue;
}
} else {
}
}
break;
}

return joy.music.connect_to.call(null,compressor,ctx.destination);
} else {
return console.log("(play!):: This browser does not support the WebAudio API");
}
});
/**
* Main function for the joy.music namespace.
*/
joy.music.main = (function main(){
var msg = "(main):: inside joy.music namespace...";
console.log(msg);

return joy.music.play_BANG_.call(null,joy.music.woo,joy.music.magical_theme.call(null));
});
goog.exportSymbol('joy.music.main', joy.music.main);
