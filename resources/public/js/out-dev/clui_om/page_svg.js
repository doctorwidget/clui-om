// Compiled by ClojureScript 0.0-2496
goog.provide('clui_om.page_svg');
goog.require('cljs.core');
clui_om.page_svg.snap_node = "#snapNode";
clui_om.page_svg.snap_beta = "#snapNodeB";
clui_om.page_svg.snap_gamma = "#snapNodeC";
clui_om.page_svg.snap_heart = "#snapNodeHeart";
clui_om.page_svg.om_node = "#omNode";
/**
* A function for executing some plain JS->CLJS Snap code,
* before we take the more-advanced step of Om integration.
*/
clui_om.page_svg.snap_raw = (function snap_raw(){
console.log([cljs.core.str("Instantiating Snap on node id: "),cljs.core.str(clui_om.page_svg.snap_node)].join(''));

var s = Snap(clui_om.page_svg.snap_node);
var circA = s.circle((150),(150),(100));
var _ = circA.attr({"strokeWidth": (5), "stroke": "#000", "fill": "#bada55"});
var diskA = s.circle((100),(150),(70));
var diskB = s.circle((200),(150),(70));
var disks = s.group(diskA,diskB);
var ___$1 = disks.attr({"fill": "#fff"});
var ___$2 = circA.attr({"mask": disks});
var ___$3 = diskA.animate({"r": (40)},(2000));
var ___$4 = disks.select("circle:nth-child(2)").animate({"r": (40)},(2000));
var path1 = s.path("M10-5-10,15M15,0,0,15M0-5-20,15");
var ___$5 = path1.attr({"strokeWidth": (5), "stroke": "#bada55", "fill": "none"});
var pattern1 = path1.pattern((0),(0),(10),(10));
var ___$6 = circA.attr({"fill": pattern1});
var ___$7 = disks.attr({"fill": Snap("#patternAlpha")});
var ___$8 = disks.attr({"fill": "R(150, 150, 100)#fff-#000"});
return null;
});
/**
* A second *paper* because the first one is irritatingly long.
* Here we load an image into a paper, but then we need to transform it,
* because it starts out itty bitty. Note the string literal transform call.
*/
clui_om.page_svg.snap_raw_beta = (function snap_raw_beta(){
console.log([cljs.core.str("Instantiating Snap Beta block on node id: "),cljs.core.str(clui_om.page_svg.snap_beta)].join(''));

var paper = Snap(clui_om.page_svg.snap_beta);
var handler = ((function (paper){
return (function (frag){
var group = frag.select("g");
var _ = paper.append(group);
var ___$1 = group.attr({"transform": "T50,50s2,2", "fill": "skyblue"});
var ___$2 = group.drag();
return null;
});})(paper))
;
return Snap.load("images/gears3.svg",handler);
});
/**
* A third *paper*, this time attempting to load an external SVG without the
* need for any transformations.
*/
clui_om.page_svg.snap_raw_gamma = (function snap_raw_gamma(){
console.log([cljs.core.str("Instantiated Snap Gamma block on node id: "),cljs.core.str(clui_om.page_svg.snap_gamma)].join(''));

var paper = Snap(clui_om.page_svg.snap_gamma);
var bg = paper.rect((0),(0),(80),(80));
var _ = bg.attr({"fill": "rgba(0,0,0,0)"});
var nested = paper.svg((0),(0),(80),(80),(0),(0),(200),(200));
var wrapper = paper.group(bg,nested);
var handler = ((function (paper,bg,_,nested,wrapper){
return (function (frag){
var group = frag.select("g");
var paths = group.selectAll("path");
nested.append(group);

paths.attr({"fill": "magenta"});

bg.hover(((function (group,paths,paper,bg,_,nested,wrapper){
return (function (){
paths.animate({"fill": "lime"},(500));

return bg.animate({"fill": "#CCCCCC"},(500));
});})(group,paths,paper,bg,_,nested,wrapper))
,((function (group,paths,paper,bg,_,nested,wrapper){
return (function (){
paths.animate({"fill": "magenta"},(500));

return bg.animate({"fill": "#FFFFFF"},(500));
});})(group,paths,paper,bg,_,nested,wrapper))
);

return wrapper.drag();
});})(paper,bg,_,nested,wrapper))
;
return Snap.load("images/bear18.svg",handler);
});
/**
* Various experiments with the heart icon.
*/
clui_om.page_svg.snap_raw_heart_fu = (function snap_raw_heart_fu(){
var paper = Snap(clui_om.page_svg.snap_heart);
var bg = paper.rect((0),(0),(100),(100));
var _ = bg.attr({"fill": "rgba(0,0,0,0)"});
var nested = paper.svg((0),(0),(100),(100),(0),(0),(30),(30));
var wrapper = paper.group(bg,nested);
var handler = ((function (paper,bg,_,nested,wrapper){
return (function (frag){
var path = frag.select("#heart-icon");
var dupe = path.clone();
var ___$1 = dupe.attr({"fill": "#3366FF"});
var nest2 = paper.svg((150),(0),(100),(100),(0),(0),(30),(30));
var ___$2 = nest2.append(dupe);
nested.append(path);

return path.attr({"fill": "#ff3300"});
});})(paper,bg,_,nested,wrapper))
;
return Snap.load("images/heart.svg",handler);
});
/**
* We should automate this as a macro:
* Load first using core.async
* Create the nested SVG only *after* the load
* Parse the XML to find the overall document width and height
* Create the SVG using those dimensions from the viewport
* Append X to the nested, where X defaults to 'g' but can be overridden
* Also allow explicit overriding of the viewport
* End result should just be (smart-load path-to-image)
* And the return value should be the nested SVG
*/
clui_om.page_svg.load_phone = (function load_phone(){
var paper = Snap("#phoneNode");
var nested = paper.svg((0),(0),(100),(100),(0),(0),(272),(272));
var wrapper = paper.group(nested);
var handler = ((function (paper,nested,wrapper){
return (function (frag){
var g = frag.select("g");
nested.append(g);

return wrapper.animate({"transform": "T200,0"},(10000));
});})(paper,nested,wrapper))
;
return Snap.load("images/ringing-phone.svg",handler);
});
/**
* Main entry point for page svg
*/
clui_om.page_svg.main = (function main(){
var msg = "(main):: page_svg (main) function...";
console.log(msg);

clui_om.page_svg.snap_raw.call(null);

clui_om.page_svg.snap_raw_beta.call(null);

clui_om.page_svg.snap_raw_gamma.call(null);

clui_om.page_svg.snap_raw_heart_fu.call(null);

return clui_om.page_svg.load_phone.call(null);
});
goog.exportSymbol('clui_om.page_svg.main', clui_om.page_svg.main);
