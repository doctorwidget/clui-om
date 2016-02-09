// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.misc.messages');
goog.require('cljs.core');
clui_om.misc.messages.sanity_msg = "You are not crazy. You are inside clui-om.misc.messages";
clui_om.misc.messages.insanity_msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,clui_om.misc.messages.sanity_msg));
