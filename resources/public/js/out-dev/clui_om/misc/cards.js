// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.misc.cards');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
clui_om.misc.cards.suits = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hearts","hearts",-701365391),new cljs.core.Keyword(null,"spades","spades",1715303139),new cljs.core.Keyword(null,"clubs","clubs",-1540603567),new cljs.core.Keyword(null,"diamonds","diamonds",-145346074)], null);
clui_om.misc.cards.ranks = cljs.core.range.call(null,(1),(14));
clui_om.misc.cards.english_ranks = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"ace","two","three","four","five","six","seven","eight","nine","ten","jack","queen","king"], null);
clui_om.misc.cards.pretty_rank = (function pretty_rank(rank){
var special = new cljs.core.PersistentArrayMap(null, 4, [(1),"A",(11),"J",(12),"Q",(13),"K"], null);
var pretty = special.call(null,rank);
if(cljs.core.truth_(pretty)){
return pretty;
} else {
return rank;
}
});
clui_om.misc.cards.entity_suits = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"spades","spades",1715303139),"&#9828;",new cljs.core.Keyword(null,"hearts","hearts",-701365391),"&#9825;",new cljs.core.Keyword(null,"diamonds","diamonds",-145346074),"&#9826;",new cljs.core.Keyword(null,"clubs","clubs",-1540603567),"&#9831;"], null);

clui_om.misc.cards.ICardUtils = (function (){var obj17278 = {};
return obj17278;
})();

clui_om.misc.cards.verbose_name = (function verbose_name(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.clui_om$misc$cards$ICardUtils$verbose_name$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.clui_om$misc$cards$ICardUtils$verbose_name$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (clui_om.misc.cards.verbose_name[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (clui_om.misc.cards.verbose_name["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICardUtils.verbose-name",this$);
}
}
})().call(null,this$);
}
});

clui_om.misc.cards.terse_name = (function terse_name(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.clui_om$misc$cards$ICardUtils$terse_name$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.clui_om$misc$cards$ICardUtils$terse_name$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (clui_om.misc.cards.terse_name[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (clui_om.misc.cards.terse_name["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICardUtils.terse-name",this$);
}
}
})().call(null,this$);
}
});

clui_om.misc.cards.entity_name = (function entity_name(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.clui_om$misc$cards$ICardUtils$entity_name$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.clui_om$misc$cards$ICardUtils$entity_name$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (clui_om.misc.cards.entity_name[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (clui_om.misc.cards.entity_name["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICardUtils.entity-name",this$);
}
}
})().call(null,this$);
}
});

clui_om.misc.cards.beats_QMARK_ = (function beats_QMARK_(this$,other){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.clui_om$misc$cards$ICardUtils$beats_QMARK_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return this$.clui_om$misc$cards$ICardUtils$beats_QMARK_$arity$2(this$,other);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (clui_om.misc.cards.beats_QMARK_[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (clui_om.misc.cards.beats_QMARK_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICardUtils.beats?",this$);
}
}
})().call(null,this$,other);
}
});

clui_om.misc.cards.red_black = (function red_black(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.clui_om$misc$cards$ICardUtils$red_black$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.clui_om$misc$cards$ICardUtils$red_black$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (clui_om.misc.cards.red_black[goog.typeOf(x__4272__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (clui_om.misc.cards.red_black["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICardUtils.red-black",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
* @param {*} rank
* @param {*} suit
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
clui_om.misc.cards.Card = (function (rank,suit,__meta,__extmap,__hash){
this.rank = rank;
this.suit = suit;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
clui_om.misc.cards.Card.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4231__auto__,k__4232__auto__){
var self__ = this;
var this__4231__auto____$1 = this;
return cljs.core._lookup.call(null,this__4231__auto____$1,k__4232__auto__,null);
});

clui_om.misc.cards.Card.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4233__auto__,k17280,else__4234__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
var G__17282 = (((k17280 instanceof cljs.core.Keyword))?k17280.fqn:null);
switch (G__17282) {
case "suit":
return self__.suit;

break;
case "rank":
return self__.rank;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17280,else__4234__auto__);

}
});

clui_om.misc.cards.Card.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4245__auto__,writer__4246__auto__,opts__4247__auto__){
var self__ = this;
var this__4245__auto____$1 = this;
var pr_pair__4248__auto__ = ((function (this__4245__auto____$1){
return (function (keyval__4249__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4246__auto__,cljs.core.pr_writer,""," ","",opts__4247__auto__,keyval__4249__auto__);
});})(this__4245__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4246__auto__,pr_pair__4248__auto__,"#clui-om.misc.cards.Card{",", ","}",opts__4247__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rank","rank",-1706728502),self__.rank],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suit","suit",-869827520),self__.suit],null))], null),self__.__extmap));
});

clui_om.misc.cards.Card.prototype.om$core$IToCursor$ = true;

clui_om.misc.cards.Card.prototype.om$core$IToCursor$_to_cursor$arity$3 = (function (value,state,path){
var self__ = this;
var value__$1 = this;
return value__$1;
});

clui_om.misc.cards.Card.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4229__auto__){
var self__ = this;
var this__4229__auto____$1 = this;
return self__.__meta;
});

clui_om.misc.cards.Card.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4225__auto__){
var self__ = this;
var this__4225__auto____$1 = this;
return (new clui_om.misc.cards.Card(self__.rank,self__.suit,self__.__meta,self__.__extmap,self__.__hash));
});

clui_om.misc.cards.Card.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4235__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

clui_om.misc.cards.Card.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4226__auto__){
var self__ = this;
var this__4226__auto____$1 = this;
var h__4049__auto__ = self__.__hash;
if(!((h__4049__auto__ == null))){
return h__4049__auto__;
} else {
var h__4049__auto____$1 = cljs.core.hash_imap.call(null,this__4226__auto____$1);
self__.__hash = h__4049__auto____$1;

return h__4049__auto____$1;
}
});

clui_om.misc.cards.Card.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4227__auto__,other__4228__auto__){
var self__ = this;
var this__4227__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3616__auto__ = other__4228__auto__;
if(cljs.core.truth_(and__3616__auto__)){
return ((this__4227__auto____$1.constructor === other__4228__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4227__auto____$1,other__4228__auto__));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
return false;
}
});

clui_om.misc.cards.Card.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4240__auto__,k__4241__auto__){
var self__ = this;
var this__4240__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"suit","suit",-869827520),null,new cljs.core.Keyword(null,"rank","rank",-1706728502),null], null), null),k__4241__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4240__auto____$1),self__.__meta),k__4241__auto__);
} else {
return (new clui_om.misc.cards.Card(self__.rank,self__.suit,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4241__auto__)),null));
}
});

clui_om.misc.cards.Card.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4238__auto__,k__4239__auto__,G__17279){
var self__ = this;
var this__4238__auto____$1 = this;
var pred__17283 = cljs.core.keyword_identical_QMARK_;
var expr__17284 = k__4239__auto__;
if(cljs.core.truth_(pred__17283.call(null,new cljs.core.Keyword(null,"rank","rank",-1706728502),expr__17284))){
return (new clui_om.misc.cards.Card(G__17279,self__.suit,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17283.call(null,new cljs.core.Keyword(null,"suit","suit",-869827520),expr__17284))){
return (new clui_om.misc.cards.Card(self__.rank,G__17279,self__.__meta,self__.__extmap,null));
} else {
return (new clui_om.misc.cards.Card(self__.rank,self__.suit,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4239__auto__,G__17279),null));
}
}
});

clui_om.misc.cards.Card.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rank","rank",-1706728502),self__.rank],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suit","suit",-869827520),self__.suit],null))], null),self__.__extmap));
});

clui_om.misc.cards.Card.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4230__auto__,G__17279){
var self__ = this;
var this__4230__auto____$1 = this;
return (new clui_om.misc.cards.Card(self__.rank,self__.suit,G__17279,self__.__extmap,self__.__hash));
});

clui_om.misc.cards.Card.prototype.clui_om$misc$cards$ICardUtils$ = true;

clui_om.misc.cards.Card.prototype.clui_om$misc$cards$ICardUtils$verbose_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str(cljs.core.nth.call(null,clui_om.misc.cards.english_ranks,new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(this$__$1))),cljs.core.str(" of "),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"suit","suit",-869827520).cljs$core$IFn$_invoke$arity$1(this$__$1)))].join('');
});

clui_om.misc.cards.Card.prototype.clui_om$misc$cards$ICardUtils$terse_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str(clui_om.misc.cards.pretty_rank.call(null,new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(this$__$1))),cljs.core.str(clojure.string.capitalize.call(null,cljs.core.first.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"suit","suit",-869827520).cljs$core$IFn$_invoke$arity$1(this$__$1)))))].join('');
});

clui_om.misc.cards.Card.prototype.clui_om$misc$cards$ICardUtils$entity_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str(clui_om.misc.cards.pretty_rank.call(null,new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(this$__$1))),cljs.core.str(clui_om.misc.cards.entity_suits.call(null,new cljs.core.Keyword(null,"suit","suit",-869827520).cljs$core$IFn$_invoke$arity$1(this$__$1)))].join('');
});

clui_om.misc.cards.Card.prototype.clui_om$misc$cards$ICardUtils$beats_QMARK_$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(this$__$1) > new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(other));
});

clui_om.misc.cards.Card.prototype.clui_om$misc$cards$ICardUtils$red_black$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"diamonds","diamonds",-145346074),null,new cljs.core.Keyword(null,"hearts","hearts",-701365391),null], null), null).call(null,new cljs.core.Keyword(null,"suit","suit",-869827520).cljs$core$IFn$_invoke$arity$1(this$__$1)))){
return new cljs.core.Keyword(null,"red","red",-969428204);
} else {
return new cljs.core.Keyword(null,"black","black",1294279647);
}
});

clui_om.misc.cards.Card.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4236__auto__,entry__4237__auto__){
var self__ = this;
var this__4236__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4237__auto__)){
return cljs.core._assoc.call(null,this__4236__auto____$1,cljs.core._nth.call(null,entry__4237__auto__,(0)),cljs.core._nth.call(null,entry__4237__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4236__auto____$1,entry__4237__auto__);
}
});

clui_om.misc.cards.Card.cljs$lang$type = true;

clui_om.misc.cards.Card.cljs$lang$ctorPrSeq = (function (this__4265__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clui-om.misc.cards/Card");
});

clui_om.misc.cards.Card.cljs$lang$ctorPrWriter = (function (this__4265__auto__,writer__4266__auto__){
return cljs.core._write.call(null,writer__4266__auto__,"clui-om.misc.cards/Card");
});

clui_om.misc.cards.__GT_Card = (function __GT_Card(rank,suit){
return (new clui_om.misc.cards.Card(rank,suit,null,null,null));
});

clui_om.misc.cards.map__GT_Card = (function map__GT_Card(G__17281){
return (new clui_om.misc.cards.Card(new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(G__17281),new cljs.core.Keyword(null,"suit","suit",-869827520).cljs$core$IFn$_invoke$arity$1(G__17281),null,cljs.core.dissoc.call(null,G__17281,new cljs.core.Keyword(null,"rank","rank",-1706728502),new cljs.core.Keyword(null,"suit","suit",-869827520)),null));
});

clui_om.misc.cards.fresh_deck = (function fresh_deck(){
var iter__4384__auto__ = (function iter__17293(s__17294){
return (new cljs.core.LazySeq(null,(function (){
var s__17294__$1 = s__17294;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17294__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var r = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4380__auto__ = ((function (s__17294__$1,r,xs__4624__auto__,temp__4126__auto__){
return (function iter__17295(s__17296){
return (new cljs.core.LazySeq(null,((function (s__17294__$1,r,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__17296__$1 = s__17296;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__17296__$1);
if(temp__4126__auto____$1){
var s__17296__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17296__$2)){
var c__4382__auto__ = cljs.core.chunk_first.call(null,s__17296__$2);
var size__4383__auto__ = cljs.core.count.call(null,c__4382__auto__);
var b__17298 = cljs.core.chunk_buffer.call(null,size__4383__auto__);
if((function (){var i__17297 = (0);
while(true){
if((i__17297 < size__4383__auto__)){
var s = cljs.core._nth.call(null,c__4382__auto__,i__17297);
cljs.core.chunk_append.call(null,b__17298,clui_om.misc.cards.__GT_Card.call(null,r,s));

var G__17299 = (i__17297 + (1));
i__17297 = G__17299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17298),iter__17295.call(null,cljs.core.chunk_rest.call(null,s__17296__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17298),null);
}
} else {
var s = cljs.core.first.call(null,s__17296__$2);
return cljs.core.cons.call(null,clui_om.misc.cards.__GT_Card.call(null,r,s),iter__17295.call(null,cljs.core.rest.call(null,s__17296__$2)));
}
} else {
return null;
}
break;
}
});})(s__17294__$1,r,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__17294__$1,r,xs__4624__auto__,temp__4126__auto__))
;
var fs__4381__auto__ = cljs.core.seq.call(null,iterys__4380__auto__.call(null,clui_om.misc.cards.suits));
if(fs__4381__auto__){
return cljs.core.concat.call(null,fs__4381__auto__,iter__17293.call(null,cljs.core.rest.call(null,s__17294__$1)));
} else {
var G__17300 = cljs.core.rest.call(null,s__17294__$1);
s__17294__$1 = G__17300;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__.call(null,clui_om.misc.cards.ranks);
});
clui_om.misc.cards.shuffled_deck = (function shuffled_deck(){
return cljs.core.shuffle.call(null,clui_om.misc.cards.fresh_deck.call(null));
});
clui_om.misc.cards.card_display_txt = (function card_display_txt(card,owner){

if(typeof clui_om.misc.cards.t17304 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.misc.cards.t17304 = (function (owner,card,card_display_txt,meta17305){
this.owner = owner;
this.card = card;
this.card_display_txt = card_display_txt;
this.meta17305 = meta17305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.misc.cards.t17304.prototype.om$core$IRender$ = true;

clui_om.misc.cards.t17304.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var col = clui_om.misc.cards.red_black.call(null,self__.card);
return React.DOM.span({"dangerouslySetInnerHTML": {"__html": clui_om.misc.cards.entity_name.call(null,self__.card)}, "alt": clui_om.misc.cards.verbose_name.call(null,self__.card), "title": clui_om.misc.cards.verbose_name.call(null,self__.card), "className": [cljs.core.str("cardDisplay "),cljs.core.str(cljs.core.name.call(null,col))].join('')});
});

clui_om.misc.cards.t17304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17306){
var self__ = this;
var _17306__$1 = this;
return self__.meta17305;
});

clui_om.misc.cards.t17304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17306,meta17305__$1){
var self__ = this;
var _17306__$1 = this;
return (new clui_om.misc.cards.t17304(self__.owner,self__.card,self__.card_display_txt,meta17305__$1));
});

clui_om.misc.cards.t17304.cljs$lang$type = true;

clui_om.misc.cards.t17304.cljs$lang$ctorStr = "clui-om.misc.cards/t17304";

clui_om.misc.cards.t17304.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.misc.cards/t17304");
});

clui_om.misc.cards.__GT_t17304 = (function __GT_t17304(owner__$1,card__$1,card_display_txt__$1,meta17305){
return (new clui_om.misc.cards.t17304(owner__$1,card__$1,card_display_txt__$1,meta17305));
});

}

return (new clui_om.misc.cards.t17304(owner,card,card_display_txt,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),61,new cljs.core.Keyword(null,"end-line","end-line",1837326455),87,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),79,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/misc/cards.cljs"], null)));
});
clui_om.misc.cards.deck_images = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["images/deckAlpha.png","images/deckShuffling.png","images/deckShuffling2.png","images/deckShuffling3.png","images/deckShuffling4.png","images/deckBeta.png"], null);
clui_om.misc.cards.shuffled_images = (function shuffled_images(){
return cljs.core.shuffle.call(null,cljs.core.concat.call(null,clui_om.misc.cards.deck_images,clui_om.misc.cards.deck_images,clui_om.misc.cards.deck_images));
});
clui_om.misc.cards.rotate_images = (function rotate_images(owner,images){

var c__6508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6508__auto__){
return (function (){
var f__6509__auto__ = (function (){var switch__6493__auto__ = ((function (c__6508__auto__){
return (function (state_17358){
var state_val_17359 = (state_17358[(1)]);
if((state_val_17359 === (7))){
var inst_17344 = (state_17358[(7)]);
var inst_17349 = (state_17358[(2)]);
var inst_17342 = inst_17344;
var state_17358__$1 = (function (){var statearr_17360 = state_17358;
(statearr_17360[(8)] = inst_17342);

(statearr_17360[(9)] = inst_17349);

return statearr_17360;
})();
var statearr_17361_17377 = state_17358__$1;
(statearr_17361_17377[(2)] = null);

(statearr_17361_17377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (6))){
var inst_17354 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
var statearr_17362_17378 = state_17358__$1;
(statearr_17362_17378[(2)] = inst_17354);

(statearr_17362_17378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (5))){
var inst_17352 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"img-seq","img-seq",-807912262),images);
var state_17358__$1 = state_17358;
var statearr_17363_17379 = state_17358__$1;
(statearr_17363_17379[(2)] = inst_17352);

(statearr_17363_17379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (4))){
var inst_17344 = (state_17358[(7)]);
var inst_17346 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"img-seq","img-seq",-807912262),inst_17344);
var inst_17347 = cljs.core.async.timeout.call(null,(80));
var state_17358__$1 = (function (){var statearr_17364 = state_17358;
(statearr_17364[(10)] = inst_17346);

return statearr_17364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17358__$1,(7),inst_17347);
} else {
if((state_val_17359 === (3))){
var inst_17356 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17358__$1,inst_17356);
} else {
if((state_val_17359 === (2))){
var inst_17342 = (state_17358[(8)]);
var inst_17344 = (state_17358[(7)]);
var inst_17344__$1 = cljs.core.next.call(null,inst_17342);
var state_17358__$1 = (function (){var statearr_17365 = state_17358;
(statearr_17365[(7)] = inst_17344__$1);

return statearr_17365;
})();
if(inst_17344__$1){
var statearr_17366_17380 = state_17358__$1;
(statearr_17366_17380[(1)] = (4));

} else {
var statearr_17367_17381 = state_17358__$1;
(statearr_17367_17381[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (1))){
var inst_17342 = images;
var state_17358__$1 = (function (){var statearr_17368 = state_17358;
(statearr_17368[(8)] = inst_17342);

return statearr_17368;
})();
var statearr_17369_17382 = state_17358__$1;
(statearr_17369_17382[(2)] = null);

(statearr_17369_17382[(1)] = (2));


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
});})(c__6508__auto__))
;
return ((function (switch__6493__auto__,c__6508__auto__){
return (function() {
var state_machine__6494__auto__ = null;
var state_machine__6494__auto____0 = (function (){
var statearr_17373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17373[(0)] = state_machine__6494__auto__);

(statearr_17373[(1)] = (1));

return statearr_17373;
});
var state_machine__6494__auto____1 = (function (state_17358){
while(true){
var ret_value__6495__auto__ = (function (){try{while(true){
var result__6496__auto__ = switch__6493__auto__.call(null,state_17358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6496__auto__;
}
break;
}
}catch (e17374){if((e17374 instanceof Object)){
var ex__6497__auto__ = e17374;
var statearr_17375_17383 = state_17358;
(statearr_17375_17383[(5)] = ex__6497__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6495__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17384 = state_17358;
state_17358 = G__17384;
continue;
} else {
return ret_value__6495__auto__;
}
break;
}
});
state_machine__6494__auto__ = function(state_17358){
switch(arguments.length){
case 0:
return state_machine__6494__auto____0.call(this);
case 1:
return state_machine__6494__auto____1.call(this,state_17358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6494__auto____0;
state_machine__6494__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6494__auto____1;
return state_machine__6494__auto__;
})()
;})(switch__6493__auto__,c__6508__auto__))
})();
var state__6510__auto__ = (function (){var statearr_17376 = f__6509__auto__.call(null);
(statearr_17376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6508__auto__);

return statearr_17376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6510__auto__);
});})(c__6508__auto__))
);

return c__6508__auto__;
});
clui_om.misc.cards.deck_display = (function deck_display(cursor,owner){

if(typeof clui_om.misc.cards.t17390 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.misc.cards.t17390 = (function (owner,cursor,deck_display,meta17391){
this.owner = owner;
this.cursor = cursor;
this.deck_display = deck_display;
this.meta17391 = meta17391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.misc.cards.t17390.prototype.om$core$IRenderState$ = true;

clui_om.misc.cards.t17390.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__17393){
var self__ = this;
var map__17394 = p__17393;
var map__17394__$1 = ((cljs.core.seq_QMARK_.call(null,map__17394))?cljs.core.apply.call(null,cljs.core.hash_map,map__17394):map__17394);
var img_seq = cljs.core.get.call(null,map__17394__$1,new cljs.core.Keyword(null,"img-seq","img-seq",-807912262));
var shuffle = cljs.core.get.call(null,map__17394__$1,new cljs.core.Keyword(null,"shuffle","shuffle",1261412160));
var draw = cljs.core.get.call(null,map__17394__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
var ___$1 = this;
return React.DOM.div({"className": "deckDisplay"},React.DOM.span({"className": "deckIcon"},React.DOM.img({"width": (31), "height": (42), "alt": "Deck of cards (image)", "src": cljs.core.first.call(null,img_seq), "className": "deckImg"}),React.DOM.span({"className": "deckCensus"},cljs.core.count.call(null,new cljs.core.Keyword(null,"deck","deck",1145325705).cljs$core$IFn$_invoke$arity$1(self__.cursor)))),React.DOM.button({"type": "button", "onClick": ((function (___$1,map__17394,map__17394__$1,img_seq,shuffle,draw){
return (function (){
return cljs.core.async.put_BANG_.call(null,draw,"(deck-display):: draw button click!");
});})(___$1,map__17394,map__17394__$1,img_seq,shuffle,draw))
, "className": "btn btn-default"},"Draw A Card"),React.DOM.button(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,map__17394,map__17394__$1,img_seq,shuffle,draw){
return (function (e){
cljs.core.async.put_BANG_.call(null,shuffle,"(deck-display):: shuffle btton click!");

return clui_om.misc.cards.rotate_images.call(null,self__.owner,clui_om.misc.cards.shuffled_images.call(null));
});})(___$1,map__17394,map__17394__$1,img_seq,shuffle,draw))
,new cljs.core.Keyword(null,"type","type",1174270348),"button"], null)),"Shuffle Deck"));
});

clui_om.misc.cards.t17390.prototype.om$core$IInitState$ = true;

clui_om.misc.cards.t17390.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"img-seq","img-seq",-807912262),clui_om.misc.cards.shuffled_images.call(null)], null);
});

clui_om.misc.cards.t17390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17392){
var self__ = this;
var _17392__$1 = this;
return self__.meta17391;
});

clui_om.misc.cards.t17390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17392,meta17391__$1){
var self__ = this;
var _17392__$1 = this;
return (new clui_om.misc.cards.t17390(self__.owner,self__.cursor,self__.deck_display,meta17391__$1));
});

clui_om.misc.cards.t17390.cljs$lang$type = true;

clui_om.misc.cards.t17390.cljs$lang$ctorStr = "clui-om.misc.cards/t17390";

clui_om.misc.cards.t17390.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.misc.cards/t17390");
});

clui_om.misc.cards.__GT_t17390 = (function __GT_t17390(owner__$1,cursor__$1,deck_display__$1,meta17391){
return (new clui_om.misc.cards.t17390(owner__$1,cursor__$1,deck_display__$1,meta17391));
});

}

return (new clui_om.misc.cards.t17390(owner,cursor,deck_display,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),139,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),116,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/misc/cards.cljs"], null)));
});
clui_om.misc.cards.hand_display = (function hand_display(cursor,owner){

if(typeof clui_om.misc.cards.t17400 !== 'undefined'){
} else {

/**
* @constructor
*/
clui_om.misc.cards.t17400 = (function (owner,cursor,hand_display,meta17401){
this.owner = owner;
this.cursor = cursor;
this.hand_display = hand_display;
this.meta17401 = meta17401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clui_om.misc.cards.t17400.prototype.om$core$IRenderState$ = true;

clui_om.misc.cards.t17400.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__17403){
var self__ = this;
var map__17404 = p__17403;
var map__17404__$1 = ((cljs.core.seq_QMARK_.call(null,map__17404))?cljs.core.apply.call(null,cljs.core.hash_map,map__17404):map__17404);
var showing = cljs.core.get.call(null,map__17404__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var ___$1 = this;
var hand = new cljs.core.Keyword(null,"hand","hand",791601933).cljs$core$IFn$_invoke$arity$1(self__.cursor);
console.log("hand-display rendering:: ",cljs.core.count.call(null,hand)," cards in hand: ",hand);

return React.DOM.div({"className": "cardDisplay"},React.DOM.div({"className": "cardStatus"},React.DOM.span({"className": "numCards"},cljs.core.count.call(null,hand)),React.DOM.span({"className": "showing"},(cljs.core.truth_(showing)?"Face up":"Face down"))),cljs.core.apply.call(null,om.dom.div,{"className": "cards"},om.core.build_all.call(null,clui_om.misc.cards.card_display_txt,hand)));
});

clui_om.misc.cards.t17400.prototype.om$core$IInitState$ = true;

clui_om.misc.cards.t17400.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showing","showing",798009604),true], null);
});

clui_om.misc.cards.t17400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17402){
var self__ = this;
var _17402__$1 = this;
return self__.meta17401;
});

clui_om.misc.cards.t17400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17402,meta17401__$1){
var self__ = this;
var _17402__$1 = this;
return (new clui_om.misc.cards.t17400(self__.owner,self__.cursor,self__.hand_display,meta17401__$1));
});

clui_om.misc.cards.t17400.cljs$lang$type = true;

clui_om.misc.cards.t17400.cljs$lang$ctorStr = "clui-om.misc.cards/t17400";

clui_om.misc.cards.t17400.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write.call(null,writer__4216__auto__,"clui-om.misc.cards/t17400");
});

clui_om.misc.cards.__GT_t17400 = (function __GT_t17400(owner__$1,cursor__$1,hand_display__$1,meta17401){
return (new clui_om.misc.cards.t17400(owner__$1,cursor__$1,hand_display__$1,meta17401));
});

}

return (new clui_om.misc.cards.t17400(owner,cursor,hand_display,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),68,new cljs.core.Keyword(null,"end-line","end-line",1837326455),160,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),144,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/scottfitz/code/clj/lab/clui-om/src/cljs/clui_om/misc/cards.cljs"], null)));
});
