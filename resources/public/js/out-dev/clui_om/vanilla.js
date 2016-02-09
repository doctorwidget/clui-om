// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.vanilla');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('clojure.browser.repl');
goog.require('goog.events.EventType');
goog.require('goog.events');
clui_om.vanilla.$form = goog.dom.getElement("spamForm");
clui_om.vanilla.$output = goog.dom.getElement("spamOutput");
clui_om.vanilla.$trigger = goog.dom.getElement("spamBtn");
clui_om.vanilla.$agent = goog.dom.getElement("agentBtn");
/**
* Report the current user agent
*/
clui_om.vanilla.report_agent = (function report_agent(){
return alert([cljs.core.str("User Agent is: "),cljs.core.str(goog.userAgent.PLATFORM)].join(''));
});
/**
* Spam the contents of the input field into the output field.
*/
clui_om.vanilla.echo = (function() {
var echo = null;
var echo__0 = (function (){
var stuff = goog.dom.forms.getFormDataMap(clui_om.vanilla.$form);
var input = stuff.get("spamInput");
console.log(input);

console.log([cljs.core.str("echoing..."),cljs.core.str(input),cljs.core.str(input),cljs.core.str(input)].join(''));

return goog.dom.setTextContent(clui_om.vanilla.$output,[cljs.core.str(input),cljs.core.str(input),cljs.core.str(input)].join(''));
});
var echo__1 = (function (evt){
evt.preventDefault();

return echo.call(null);
});
echo = function(evt){
switch(arguments.length){
case 0:
return echo__0.call(this);
case 1:
return echo__1.call(this,evt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
echo.cljs$core$IFn$_invoke$arity$0 = echo__0;
echo.cljs$core$IFn$_invoke$arity$1 = echo__1;
return echo;
})()
;
/**
* Put an arbitrary argument into the output field.
* Suitable for calling via the bREPL
*/
clui_om.vanilla.yo = (function yo(msg){
return goog.dom.setTextContent(clui_om.vanilla.$output,msg);
});
/**
* Synonym for js/alert
*/
clui_om.vanilla.my_alert = (function my_alert(msg){
return alert(msg);
});
clui_om.vanilla.host_msg = "initializing vanilla.main()...";
/**
* Main function for the main vanilla page
*/
clui_om.vanilla.main = (function main(){
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");

console.log(clui_om.vanilla.host_msg);

goog.dom.classes.add(clui_om.vanilla.$output,"vanilla-border");

goog.dom.setTextContent(clui_om.vanilla.$output,[cljs.core.str("Dynamically created by the Google Closure at: "),cljs.core.str((new Date()))].join(''));

goog.events.listen(clui_om.vanilla.$output,goog.events.EventType.CLICK,(function (evt){
return goog.dom.classes.toggle(clui_om.vanilla.$output,"vanilla-border");
}));

goog.events.listen(clui_om.vanilla.$trigger,goog.events.EventType.CLICK,(function (evt){
return clui_om.vanilla.echo.call(null,evt);
}));

return goog.events.listen(clui_om.vanilla.$agent,goog.events.EventType.CLICK,(function (evt){
return clui_om.vanilla.report_agent.call(null);
}));
});
goog.exportSymbol('clui_om.vanilla.main', clui_om.vanilla.main);
