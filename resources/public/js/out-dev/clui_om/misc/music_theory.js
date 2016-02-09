// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.misc.music_theory');
goog.require('cljs.core');
clui_om.misc.music_theory.note_frequencies = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"d#","d#",-97310400),new cljs.core.Keyword(null,"g#","g#",604660353),new cljs.core.Keyword(null,"a#","a#",-1635132371),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"f#","f#",-734555085),new cljs.core.Keyword(null,"c#","c#",1780831315),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c5","c5",-615073545),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"a","a",-2123407586)],[311.13,415.31,466.16,329.63,391.99,261.6,369.99,277.18,493.88,523.2,293.66,349.23,(440)]);
clui_om.misc.music_theory.note_cents = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"d#","d#",-97310400),new cljs.core.Keyword(null,"g#","g#",604660353),new cljs.core.Keyword(null,"a#","a#",-1635132371),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"f#","f#",-734555085),new cljs.core.Keyword(null,"c#","c#",1780831315),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c5","c5",-615073545),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"a","a",-2123407586)],[(300),(800),(1000),(400),(700),(0),(600),(100),(1100),(1200),(200),(500),(900)]));
clui_om.misc.music_theory.sorted_frequencies = cljs.core.into.call(null,cljs.core.sorted_map_by.call(null,(function (k1,k2){
return cljs.core.compare.call(null,clui_om.misc.music_theory.note_frequencies.call(null,k1),clui_om.misc.music_theory.note_frequencies.call(null,k2));
})),clui_om.misc.music_theory.note_frequencies);
/**
* Takes a musical note (in keyword form) and returns true if it represents a
* minor key. A `#` suffix indicates sharp, and a `b` suffix indicates flat.
* For example, :C# and :Bb should return true, whereas :C or :B should both
* return false.
*/
clui_om.misc.music_theory.minor_QMARK_ = (function minor_QMARK_(note){
if(cljs.core.truth_(cljs.core.re_seq.call(null,/.+[#b]+/,cljs.core.name.call(null,note)))){
return true;
} else {
return false;
}
});
/**
* The black and white sequencing of piano keys appears to be completely
* arbitrary. Wtf!
*/
clui_om.misc.music_theory.piano_offsets = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,(1),1.5,(2),(3),3.5,(4),4.5,(5),5.5,(6),(7)], null);
/**
* Takes a simple input map of note names and frequencies and returns a vector
* of sub-maps, where each sub-map has its own :note, :freq and :cent keys and
* values. The returned format is much more useful in an Om context than a map
* of primitives would be.y
*/
clui_om.misc.music_theory.build_notes = (function build_notes(note_freqs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,(function (i,p__17407){
var vec__17408 = p__17407;
var n = cljs.core.nth.call(null,vec__17408,(0),null);
var f = cljs.core.nth.call(null,vec__17408,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"note","note",1426297904),n,new cljs.core.Keyword(null,"freq","freq",-1855845278),f,new cljs.core.Keyword(null,"cent","cent",-673959391),i,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.nth.call(null,clui_om.misc.music_theory.piano_offsets,i)], null);
}),cljs.core.seq.call(null,note_freqs)));
});
/**
* Get a single octave in the form of a vector of maps. Each map represents
* the name, frequency and cent for one note. The cents start at zero for
* middle C and go up from there. That's worth keeping in mind: this octave
* starts at middle C, not concert A!
*/
clui_om.misc.music_theory.chromatic_scale = (function chromatic_scale(){
return clui_om.misc.music_theory.build_notes.call(null,clui_om.misc.music_theory.sorted_frequencies);
});
