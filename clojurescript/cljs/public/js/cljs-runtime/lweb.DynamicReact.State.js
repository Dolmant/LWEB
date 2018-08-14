goog.provide('lweb.DynamicReact.State');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('lweb.consts');
goog.require('clojure.string');
if((typeof lweb !== 'undefined') && (typeof lweb.DynamicReact !== 'undefined') && (typeof lweb.DynamicReact.State !== 'undefined') && (typeof lweb.DynamicReact.State.State !== 'undefined')){
} else {
lweb.DynamicReact.State.State = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"overlay_txt","overlay_txt",367960930),new cljs.core.Keyword(null,"introOn","introOn",-187543962),new cljs.core.Keyword(null,"overlay_image_num","overlay_image_num",-1490122515),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"overlay_types","overlay_types",1537285871),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"overlay_vertical_index","overlay_vertical_index",70919444),new cljs.core.Keyword(null,"touchmenu_active","touchmenu_active",1022800982),new cljs.core.Keyword(null,"isTouch","isTouch",-689869991),new cljs.core.Keyword(null,"overlay_image_src","overlay_image_src",-324375268)],["ALL","",false,(0),"home",cljs.core.PersistentVector.EMPTY,(0),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arrows","arrows",-1209622014),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),true,new cljs.core.Keyword(null,"right","right",-452581833),true,new cljs.core.Keyword(null,"up","up",-269712113),false,new cljs.core.Keyword(null,"down","down",1565245570),false], null),new cljs.core.Keyword(null,"state","state",-1988618099),false,new cljs.core.Keyword(null,"image","image",-58725096),false,new cljs.core.Keyword(null,"video","video",156888130),false], null),lweb.consts.HomeInitial,cljs.core.PersistentArrayMap.EMPTY,false,(window.innerWidth < (1000)),""]));
}
lweb.DynamicReact.State.update_vals = (function lweb$DynamicReact$State$update_vals(map,mf){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__3085_SHARP_,p2__3086_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__3085_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__3086_SHARP_], null),(function (_){
return (mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(p2__3086_SHARP_) : mf.call(null,p2__3086_SHARP_));
}));
}),map,cljs.core.keys(mf));
});
lweb.DynamicReact.State.SetAttr = (function lweb$DynamicReact$State$SetAttr(attr,value){
return cljs.core.reset_BANG_(lweb.DynamicReact.State.State,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(lweb.DynamicReact.State.State),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null),(function (_){
return value;
})));
});
lweb.DynamicReact.State.SetAttrs = (function lweb$DynamicReact$State$SetAttrs(attrs){
return cljs.core.reset_BANG_(lweb.DynamicReact.State.State,lweb.DynamicReact.State.update_vals(cljs.core.deref(lweb.DynamicReact.State.State),attrs));
});
/**
 * true if coll contains elm
 */
lweb.DynamicReact.State.in_QMARK_ = (function lweb$DynamicReact$State$in_QMARK_(coll,elm){
return cljs.core.some((function (p1__3091_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elm,p1__3091_SHARP_);
}),coll);
});
lweb.DynamicReact.State.computeArrows = (function lweb$DynamicReact$State$computeArrows(overlay_image_num,current_category,overlay_vertical_index,NumberofVertical){
lweb.DynamicReact.State.limits = lweb.consts.ArrayLimitsCalc(current_category);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.not(lweb.DynamicReact.State.in_QMARK_((function (){var G__3093 = new cljs.core.Keyword(null,"left","left",-399115937);
return (lweb.DynamicReact.State.limits.cljs$core$IFn$_invoke$arity$1 ? lweb.DynamicReact.State.limits.cljs$core$IFn$_invoke$arity$1(G__3093) : lweb.DynamicReact.State.limits.call(null,G__3093));
})(),overlay_image_num)),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.not(lweb.DynamicReact.State.in_QMARK_((function (){var G__3094 = new cljs.core.Keyword(null,"right","right",-452581833);
return (lweb.DynamicReact.State.limits.cljs$core$IFn$_invoke$arity$1 ? lweb.DynamicReact.State.limits.cljs$core$IFn$_invoke$arity$1(G__3094) : lweb.DynamicReact.State.limits.call(null,G__3094));
})(),overlay_image_num)),new cljs.core.Keyword(null,"up","up",-269712113),((function (){var G__3095 = new cljs.core.Keyword(null,"overlay_image_num","overlay_image_num",-1490122515);
return (overlay_vertical_index.cljs$core$IFn$_invoke$arity$1 ? overlay_vertical_index.cljs$core$IFn$_invoke$arity$1(G__3095) : overlay_vertical_index.call(null,G__3095));
})() < (NumberofVertical - (1))),new cljs.core.Keyword(null,"down","down",1565245570),((function (){var G__3096 = new cljs.core.Keyword(null,"overlay_image_num","overlay_image_num",-1490122515);
return (overlay_vertical_index.cljs$core$IFn$_invoke$arity$1 ? overlay_vertical_index.cljs$core$IFn$_invoke$arity$1(G__3096) : overlay_vertical_index.call(null,G__3096));
})() > (0))], null);
});
lweb.DynamicReact.State.selectedOverlayImageNum = (function lweb$DynamicReact$State$selectedOverlayImageNum(overlay_image_num,current_category,overlay_vertical_index,overlay){
if(cljs.core.not(current_category)){
return lweb.DynamicReact.State.SetAttrs(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overlay","overlay",-139131598),overlay,new cljs.core.Keyword(null,"overlay_vertical_index","overlay_vertical_index",70919444),overlay_vertical_index,new cljs.core.Keyword(null,"overlay_image","overlay_image",-1535286955),overlay_image_num], null));
} else {
lweb.DynamicReact.State.tempImage = lweb.consts.getImageById(overlay_image_num);

if(cljs.core.vector_QMARK_((function (){var G__3105 = new cljs.core.Keyword(null,"img_src","img_src",1744906133);
return (lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1 ? lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1(G__3105) : lweb.DynamicReact.State.tempImage.call(null,G__3105));
})())){
return lweb.DynamicReact.State.SetAttrs(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"overlay_vertical_index","overlay_vertical_index",70919444),overlay_vertical_index,new cljs.core.Keyword(null,"overlay_image_num","overlay_image_num",-1490122515),overlay_image_num,new cljs.core.Keyword(null,"overlay_image_src","overlay_image_src",-324375268),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(lweb.DynamicReact.State.tempImage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img_src","img_src",1744906133),(overlay_vertical_index.cljs$core$IFn$_invoke$arity$1 ? overlay_vertical_index.cljs$core$IFn$_invoke$arity$1(overlay_image_num) : overlay_vertical_index.call(null,overlay_image_num))], null)),new cljs.core.Keyword(null,"overlay_thumb_src","overlay_thumb_src",1827883558),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(lweb.DynamicReact.State.tempImage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay_thumbs_src","overlay_thumbs_src",-1755827043),(overlay_vertical_index.cljs$core$IFn$_invoke$arity$1 ? overlay_vertical_index.cljs$core$IFn$_invoke$arity$1(overlay_image_num) : overlay_vertical_index.call(null,overlay_image_num))], null)),new cljs.core.Keyword(null,"overlay_types","overlay_types",1537285871),(function (){var G__3106 = new cljs.core.Keyword(null,"types","types",590030639);
return (lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1 ? lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1(G__3106) : lweb.DynamicReact.State.tempImage.call(null,G__3106));
})(),new cljs.core.Keyword(null,"overlay_txt","overlay_txt",367960930),(function (){var G__3107 = new cljs.core.Keyword(null,"img_txt","img_txt",130282049);
return (lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1 ? lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1(G__3107) : lweb.DynamicReact.State.tempImage.call(null,G__3107));
})(),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),(function (){var G__3108 = new cljs.core.Keyword(null,"state","state",-1988618099);
return (overlay.cljs$core$IFn$_invoke$arity$1 ? overlay.cljs$core$IFn$_invoke$arity$1(G__3108) : overlay.call(null,G__3108));
})(),new cljs.core.Keyword(null,"image","image",-58725096),(function (){var G__3109 = new cljs.core.Keyword(null,"image","image",-58725096);
return (overlay.cljs$core$IFn$_invoke$arity$1 ? overlay.cljs$core$IFn$_invoke$arity$1(G__3109) : overlay.call(null,G__3109));
})(),new cljs.core.Keyword(null,"is_video","is_video",-1178543870),(function (){var G__3110 = new cljs.core.Keyword(null,"is_video","is_video",-1178543870);
return (lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1 ? lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1(G__3110) : lweb.DynamicReact.State.tempImage.call(null,G__3110));
})(),new cljs.core.Keyword(null,"arrows","arrows",-1209622014),lweb.DynamicReact.State.computeArrows(overlay_image_num,current_category,overlay_vertical_index,cljs.core.count((function (){var G__3111 = new cljs.core.Keyword(null,"img_src","img_src",1744906133);
return (lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1 ? lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1(G__3111) : lweb.DynamicReact.State.tempImage.call(null,G__3111));
})()))], null)], null));
} else {
return lweb.DynamicReact.State.SetAttrs(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"overlay_vertical_index","overlay_vertical_index",70919444),overlay_vertical_index,new cljs.core.Keyword(null,"overlay_image_num","overlay_image_num",-1490122515),overlay_image_num,new cljs.core.Keyword(null,"overlay_image_src","overlay_image_src",-324375268),(function (){var G__3113 = new cljs.core.Keyword(null,"img_src","img_src",1744906133);
return (lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1 ? lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1(G__3113) : lweb.DynamicReact.State.tempImage.call(null,G__3113));
})(),new cljs.core.Keyword(null,"overlay_thumb_src","overlay_thumb_src",1827883558),(function (){var G__3115 = new cljs.core.Keyword(null,"thumbs_src","thumbs_src",-84857473);
return (lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1 ? lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1(G__3115) : lweb.DynamicReact.State.tempImage.call(null,G__3115));
})(),new cljs.core.Keyword(null,"overlay_types","overlay_types",1537285871),(function (){var G__3117 = new cljs.core.Keyword(null,"types","types",590030639);
return (lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1 ? lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1(G__3117) : lweb.DynamicReact.State.tempImage.call(null,G__3117));
})(),new cljs.core.Keyword(null,"overlay_txt","overlay_txt",367960930),(function (){var G__3118 = new cljs.core.Keyword(null,"img_txt","img_txt",130282049);
return (lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1 ? lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1(G__3118) : lweb.DynamicReact.State.tempImage.call(null,G__3118));
})(),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),(function (){var G__3119 = new cljs.core.Keyword(null,"state","state",-1988618099);
return (overlay.cljs$core$IFn$_invoke$arity$1 ? overlay.cljs$core$IFn$_invoke$arity$1(G__3119) : overlay.call(null,G__3119));
})(),new cljs.core.Keyword(null,"image","image",-58725096),(function (){var G__3120 = new cljs.core.Keyword(null,"image","image",-58725096);
return (overlay.cljs$core$IFn$_invoke$arity$1 ? overlay.cljs$core$IFn$_invoke$arity$1(G__3120) : overlay.call(null,G__3120));
})(),new cljs.core.Keyword(null,"is_video","is_video",-1178543870),(function (){var G__3121 = new cljs.core.Keyword(null,"is_video","is_video",-1178543870);
return (lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1 ? lweb.DynamicReact.State.tempImage.cljs$core$IFn$_invoke$arity$1(G__3121) : lweb.DynamicReact.State.tempImage.call(null,G__3121));
})(),new cljs.core.Keyword(null,"arrows","arrows",-1209622014),lweb.DynamicReact.State.computeArrows(overlay_image_num,current_category,overlay_vertical_index,(0))], null)], null));
}
}
});
lweb.DynamicReact.State.NavOverlayImage = (function lweb$DynamicReact$State$NavOverlayImage(direction){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,"left")){
return lweb.DynamicReact.State.selectedOverlayImageNum(((function (){var G__3128 = new cljs.core.Keyword(null,"overlay_image_num","overlay_image_num",-1490122515);
var fexpr__3127 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3127.cljs$core$IFn$_invoke$arity$1 ? fexpr__3127.cljs$core$IFn$_invoke$arity$1(G__3128) : fexpr__3127.call(null,G__3128));
})() - (1)),(function (){var G__3133 = new cljs.core.Keyword(null,"category","category",-593092832);
var fexpr__3132 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3132.cljs$core$IFn$_invoke$arity$1 ? fexpr__3132.cljs$core$IFn$_invoke$arity$1(G__3133) : fexpr__3132.call(null,G__3133));
})(),(function (){var G__3135 = new cljs.core.Keyword(null,"overlay_vertical_index","overlay_vertical_index",70919444);
var fexpr__3134 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3134.cljs$core$IFn$_invoke$arity$1 ? fexpr__3134.cljs$core$IFn$_invoke$arity$1(G__3135) : fexpr__3134.call(null,G__3135));
})(),(function (){var G__3137 = new cljs.core.Keyword(null,"overlay","overlay",-139131598);
var fexpr__3136 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3136.cljs$core$IFn$_invoke$arity$1 ? fexpr__3136.cljs$core$IFn$_invoke$arity$1(G__3137) : fexpr__3136.call(null,G__3137));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,"right")){
return lweb.DynamicReact.State.selectedOverlayImageNum(((function (){var G__3140 = new cljs.core.Keyword(null,"overlay_image_num","overlay_image_num",-1490122515);
var fexpr__3139 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3139.cljs$core$IFn$_invoke$arity$1 ? fexpr__3139.cljs$core$IFn$_invoke$arity$1(G__3140) : fexpr__3139.call(null,G__3140));
})() + (1)),(function (){var G__3142 = new cljs.core.Keyword(null,"category","category",-593092832);
var fexpr__3141 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3141.cljs$core$IFn$_invoke$arity$1 ? fexpr__3141.cljs$core$IFn$_invoke$arity$1(G__3142) : fexpr__3141.call(null,G__3142));
})(),(function (){var G__3144 = new cljs.core.Keyword(null,"overlay_vertical_index","overlay_vertical_index",70919444);
var fexpr__3143 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3143.cljs$core$IFn$_invoke$arity$1 ? fexpr__3143.cljs$core$IFn$_invoke$arity$1(G__3144) : fexpr__3143.call(null,G__3144));
})(),(function (){var G__3146 = new cljs.core.Keyword(null,"overlay","overlay",-139131598);
var fexpr__3145 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3145.cljs$core$IFn$_invoke$arity$1 ? fexpr__3145.cljs$core$IFn$_invoke$arity$1(G__3146) : fexpr__3145.call(null,G__3146));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,"up")){
return lweb.DynamicReact.State.selectedOverlayImageNum((function (){var G__3148 = new cljs.core.Keyword(null,"overlay_image_num","overlay_image_num",-1490122515);
var fexpr__3147 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3147.cljs$core$IFn$_invoke$arity$1 ? fexpr__3147.cljs$core$IFn$_invoke$arity$1(G__3148) : fexpr__3147.call(null,G__3148));
})(),(function (){var G__3150 = new cljs.core.Keyword(null,"category","category",-593092832);
var fexpr__3149 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3149.cljs$core$IFn$_invoke$arity$1 ? fexpr__3149.cljs$core$IFn$_invoke$arity$1(G__3150) : fexpr__3149.call(null,G__3150));
})(),(function (){var G__3152 = new cljs.core.Keyword(null,"overlay_vertical_index","overlay_vertical_index",70919444);
var fexpr__3151 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(lweb.DynamicReact.State.State),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay_vertical_index","overlay_vertical_index",70919444),new cljs.core.Keyword(null,"overlay_image_num","overlay_image_num",-1490122515)], null),cljs.core.inc);
return (fexpr__3151.cljs$core$IFn$_invoke$arity$1 ? fexpr__3151.cljs$core$IFn$_invoke$arity$1(G__3152) : fexpr__3151.call(null,G__3152));
})(),(function (){var G__3154 = new cljs.core.Keyword(null,"overlay","overlay",-139131598);
var fexpr__3153 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3153.cljs$core$IFn$_invoke$arity$1 ? fexpr__3153.cljs$core$IFn$_invoke$arity$1(G__3154) : fexpr__3153.call(null,G__3154));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,"down")){
return lweb.DynamicReact.State.selectedOverlayImageNum((function (){var G__3156 = new cljs.core.Keyword(null,"overlay_image_num","overlay_image_num",-1490122515);
var fexpr__3155 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3155.cljs$core$IFn$_invoke$arity$1 ? fexpr__3155.cljs$core$IFn$_invoke$arity$1(G__3156) : fexpr__3155.call(null,G__3156));
})(),(function (){var G__3158 = new cljs.core.Keyword(null,"category","category",-593092832);
var fexpr__3157 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3157.cljs$core$IFn$_invoke$arity$1 ? fexpr__3157.cljs$core$IFn$_invoke$arity$1(G__3158) : fexpr__3157.call(null,G__3158));
})(),(function (){var G__3160 = new cljs.core.Keyword(null,"overlay_vertical_index","overlay_vertical_index",70919444);
var fexpr__3159 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(lweb.DynamicReact.State.State),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay_vertical_index","overlay_vertical_index",70919444),new cljs.core.Keyword(null,"overlay_image_num","overlay_image_num",-1490122515)], null),cljs.core.dec);
return (fexpr__3159.cljs$core$IFn$_invoke$arity$1 ? fexpr__3159.cljs$core$IFn$_invoke$arity$1(G__3160) : fexpr__3159.call(null,G__3160));
})(),(function (){var G__3162 = new cljs.core.Keyword(null,"overlay","overlay",-139131598);
var fexpr__3161 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3161.cljs$core$IFn$_invoke$arity$1 ? fexpr__3161.cljs$core$IFn$_invoke$arity$1(G__3162) : fexpr__3161.call(null,G__3162));
})());
} else {
return "Incorrect nav call";

}
}
}
}
});
lweb.DynamicReact.State.UpdateOverlayImage = (function lweb$DynamicReact$State$UpdateOverlayImage(overlay_image_num){
return lweb.DynamicReact.State.selectedOverlayImageNum(overlay_image_num,(function (){var G__3171 = new cljs.core.Keyword(null,"category","category",-593092832);
var fexpr__3170 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3170.cljs$core$IFn$_invoke$arity$1 ? fexpr__3170.cljs$core$IFn$_invoke$arity$1(G__3171) : fexpr__3170.call(null,G__3171));
})(),(function (){var G__3173 = new cljs.core.Keyword(null,"overlay_vertical_index","overlay_vertical_index",70919444);
var fexpr__3172 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3172.cljs$core$IFn$_invoke$arity$1 ? fexpr__3172.cljs$core$IFn$_invoke$arity$1(G__3173) : fexpr__3172.call(null,G__3173));
})(),(function (){var G__3175 = new cljs.core.Keyword(null,"overlay","overlay",-139131598);
var fexpr__3174 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3174.cljs$core$IFn$_invoke$arity$1 ? fexpr__3174.cljs$core$IFn$_invoke$arity$1(G__3175) : fexpr__3174.call(null,G__3175));
})());
});
lweb.DynamicReact.State.ToggleOverlay = (function lweb$DynamicReact$State$ToggleOverlay(state1,image){
return lweb.DynamicReact.State.selectedOverlayImageNum((function (){var G__3177 = new cljs.core.Keyword(null,"overlay_image_num","overlay_image_num",-1490122515);
var fexpr__3176 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3176.cljs$core$IFn$_invoke$arity$1 ? fexpr__3176.cljs$core$IFn$_invoke$arity$1(G__3177) : fexpr__3176.call(null,G__3177));
})(),(function (){var G__3179 = new cljs.core.Keyword(null,"category","category",-593092832);
var fexpr__3178 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3178.cljs$core$IFn$_invoke$arity$1 ? fexpr__3178.cljs$core$IFn$_invoke$arity$1(G__3179) : fexpr__3178.call(null,G__3179));
})(),(function (){var G__3181 = new cljs.core.Keyword(null,"overlay_vertical_index","overlay_vertical_index",70919444);
var fexpr__3180 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3180.cljs$core$IFn$_invoke$arity$1 ? fexpr__3180.cljs$core$IFn$_invoke$arity$1(G__3181) : fexpr__3180.call(null,G__3181));
})(),lweb.DynamicReact.State.update_vals((function (){var G__3183 = new cljs.core.Keyword(null,"overlay","overlay",-139131598);
var fexpr__3182 = cljs.core.deref(lweb.DynamicReact.State.State);
return (fexpr__3182.cljs$core$IFn$_invoke$arity$1 ? fexpr__3182.cljs$core$IFn$_invoke$arity$1(G__3183) : fexpr__3182.call(null,G__3183));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state1,new cljs.core.Keyword(null,"image","image",-58725096),image], null)));
});
lweb.DynamicReact.State.SetCategory = (function lweb$DynamicReact$State$SetCategory(category){
return lweb.DynamicReact.State.SetAttrs(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"page","page",849072397),"portfolio",new cljs.core.Keyword(null,"list","list",765357683),(cljs.core.truth_(lweb.DynamicReact.State.in_QMARK_(cljs.core.keys(lweb.consts.projectList),category))?(lweb.consts.projectList.cljs$core$IFn$_invoke$arity$1 ? lweb.consts.projectList.cljs$core$IFn$_invoke$arity$1(category) : lweb.consts.projectList.call(null,category)):lweb.consts.HomeInitial)], null));
});
lweb.DynamicReact.State.SetPage = (function lweb$DynamicReact$State$SetPage(page){
return lweb.DynamicReact.State.SetAttrs(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),"",new cljs.core.Keyword(null,"page","page",849072397),page], null));
});

//# sourceMappingURL=lweb.DynamicReact.State.js.map
