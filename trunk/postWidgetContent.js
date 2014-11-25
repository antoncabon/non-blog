
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(l,k,b,d,j){return jQuery.easing[jQuery.easing.def](l,k,b,d,j)
},easeInQuad:function(l,k,b,d,j){return d*(k/=j)*k+b
},easeOutQuad:function(l,k,b,d,j){return -d*(k/=j)*(k-2)+b
},easeInOutQuad:function(l,k,b,d,j){if((k/=j/2)<1){return d/2*k*k+b
}return -d/2*((--k)*(k-2)-1)+b
},easeInCubic:function(l,k,b,d,j){return d*(k/=j)*k*k+b
},easeOutCubic:function(l,k,b,d,j){return d*((k=k/j-1)*k*k+1)+b
},easeInOutCubic:function(l,k,b,d,j){if((k/=j/2)<1){return d/2*k*k*k+b
}return d/2*((k-=2)*k*k+2)+b
},easeInQuart:function(l,k,b,d,j){return d*(k/=j)*k*k*k+b
},easeOutQuart:function(l,k,b,d,j){return -d*((k=k/j-1)*k*k*k-1)+b
},easeInOutQuart:function(l,k,b,d,j){if((k/=j/2)<1){return d/2*k*k*k*k+b
}return -d/2*((k-=2)*k*k*k-2)+b
},easeInQuint:function(l,k,b,d,j){return d*(k/=j)*k*k*k*k+b
},easeOutQuint:function(l,k,b,d,j){return d*((k=k/j-1)*k*k*k*k+1)+b
},easeInOutQuint:function(l,k,b,d,j){if((k/=j/2)<1){return d/2*k*k*k*k*k+b
}return d/2*((k-=2)*k*k*k*k+2)+b
},easeInSine:function(l,k,b,d,j){return -d*Math.cos(k/j*(Math.PI/2))+d+b
},easeOutSine:function(l,k,b,d,j){return d*Math.sin(k/j*(Math.PI/2))+b
},easeInOutSine:function(l,k,b,d,j){return -d/2*(Math.cos(Math.PI*k/j)-1)+b
},easeInExpo:function(l,k,b,d,j){return(k==0)?b:d*Math.pow(2,10*(k/j-1))+b
},easeOutExpo:function(l,k,b,d,j){return(k==j)?b+d:d*(-Math.pow(2,-10*k/j)+1)+b
},easeInOutExpo:function(l,k,b,d,j){if(k==0){return b
}if(k==j){return b+d
}if((k/=j/2)<1){return d/2*Math.pow(2,10*(k-1))+b
}return d/2*(-Math.pow(2,-10*--k)+2)+b
},easeInCirc:function(l,k,b,d,j){return -d*(Math.sqrt(1-(k/=j)*k)-1)+b
},easeOutCirc:function(l,k,b,d,j){return d*Math.sqrt(1-(k=k/j-1)*k)+b
},easeInOutCirc:function(l,k,b,d,j){if((k/=j/2)<1){return -d/2*(Math.sqrt(1-k*k)-1)+b
}return d/2*(Math.sqrt(1-(k-=2)*k)+1)+b
},easeInElastic:function(d,p,n,o,q){var m=1.70158;
var a=0;
var b=o;
if(p==0){return n
}if((p/=q)==1){return n+o
}if(!a){a=q*0.3
}if(b<Math.abs(o)){b=o;
var m=a/4
}else{var m=a/(2*Math.PI)*Math.asin(o/b)
}return -(b*Math.pow(2,10*(p-=1))*Math.sin((p*q-m)*(2*Math.PI)/a))+n
},easeOutElastic:function(d,p,n,o,q){var m=1.70158;
var a=0;
var b=o;
if(p==0){return n
}if((p/=q)==1){return n+o
}if(!a){a=q*0.3
}if(b<Math.abs(o)){b=o;
var m=a/4
}else{var m=a/(2*Math.PI)*Math.asin(o/b)
}return b*Math.pow(2,-10*p)*Math.sin((p*q-m)*(2*Math.PI)/a)+o+n
},easeInOutElastic:function(d,p,n,o,q){var m=1.70158;
var a=0;
var b=o;
if(p==0){return n
}if((p/=q/2)==2){return n+o
}if(!a){a=q*(0.3*1.5)
}if(b<Math.abs(o)){b=o;
var m=a/4
}else{var m=a/(2*Math.PI)*Math.asin(o/b)
}if(p<1){return -0.5*(b*Math.pow(2,10*(p-=1))*Math.sin((p*q-m)*(2*Math.PI)/a))+n
}return b*Math.pow(2,-10*(p-=1))*Math.sin((p*q-m)*(2*Math.PI)/a)*0.5+o+n
},easeInBack:function(m,l,b,d,j,k){if(k==undefined){k=1.70158
}return d*(l/=j)*l*((k+1)*l-k)+b
},easeOutBack:function(m,l,b,d,j,k){if(k==undefined){k=1.70158
}return d*((l=l/j-1)*l*((k+1)*l+k)+1)+b
},easeInOutBack:function(m,l,b,d,j,k){if(k==undefined){k=1.70158
}if((l/=j/2)<1){return d/2*(l*l*(((k*=(1.525))+1)*l-k))+b
}return d/2*((l-=2)*l*(((k*=(1.525))+1)*l+k)+2)+b
},easeInBounce:function(l,k,b,d,j){return d-jQuery.easing.easeOutBounce(l,j-k,0,d,j)+b
},easeOutBounce:function(l,k,b,d,j){if((k/=j)<(1/2.75)){return d*(7.5625*k*k)+b
}else{if(k<(2/2.75)){return d*(7.5625*(k-=(1.5/2.75))*k+0.75)+b
}else{if(k<(2.5/2.75)){return d*(7.5625*(k-=(2.25/2.75))*k+0.9375)+b
}else{return d*(7.5625*(k-=(2.625/2.75))*k+0.984375)+b
}}}},easeInOutBounce:function(l,k,b,d,j){if(k<j/2){return jQuery.easing.easeInBounce(l,k*2,0,d,j)*0.5+b
}return jQuery.easing.easeOutBounce(l,k*2-j,0,d,j)*0.5+d*0.5+b
}});
(function(b){b.fn.hoverTimeout=function(h,f,a,g){return this.each(function(){var e=null,d=b(this);
d.hover(function(){clearTimeout(e);
e=setTimeout(function(){f.call(d)
},h)
},function(){clearTimeout(e);
e=setTimeout(function(){g.call(d)
},a)
})
})
}
})(jQuery);
function createTicker(){var a=jQuery(".breaking-news ul").children();
tickerItems=new Array();
a.each(function(b){tickerItems.push(jQuery(this).html())
});
i=0;
rotateTicker()
}function rotateTicker(){if(i==tickerItems.length){i=0
}tickerText=tickerItems[i];
c=0;
typetext();
setTimeout("rotateTicker()",5000);
i++
}var isInTag=false;
function typetext(){var a=tickerText.substr(c,1);
if(a=="<"){isInTag=true
}if(a==">"){isInTag=false
}jQuery(".breaking-news ul").html(tickerText.substr(0,c++));
if(c<tickerText.length+1){if(isInTag){typetext()
}else{setTimeout("typetext()",28)
}}else{c=1;
tickerText=""
}}function actinave(b){var d=window.location.href;
b("#navi a").each(function(){if(this.href===d){var e=b(this).parents("li").children("a").addClass("current")
}});
b("#navi ul").removeClass("hidden");
b("#navi li").hoverTimeout(100,function(){b(this).parent("ul").css("overflow","visible");
b(this).children("ul").filter(":not(:animated)").slideDown()
},500,function(){b(this).parent("ul").css("overflow","visible");
b(this).children("ul").slideUp(800,"easeInExpo")
});
b("#mobilenav").click(function(){b("#navi").slideToggle();
b(this).toggleClass("active");
return false
});
b("#top_mobilenav").click(function(){b("#PageList1 ul").slideToggle();
b(this).toggleClass("active");
return false
});
function a(){if(b(window).width()>767){b("#navi").css("display","block").removeClass("suball")
}else{if(b(window).width()<=767&&b("#mobilenav").attr("class")==="active"){b("#navi").css("display","block").addClass("suball")
}else{if(b(window).width()<=767&&b("#mobilenav").attr("class")!=="active"){b("#navi").css("display","none").addClass("suball")
}}}}function j(){if(b(window).width()>767){b("#PageList1 ul").css("display","block")
}else{if(b(window).width()<=767&&b("#top_mobilenav").attr("class")==="active"){b("#PageList1 ul").css("display","block")
}else{if(b(window).width()<=767&&b("#top_mobilenav").attr("class")!=="active"){b("#PageList1 ul").css("display","none")
}}}}a();
j();
b(window).resize(a);
b(window).resize(j)
}function searching(b){(function(j){var g={blogURL:"",srcBlank:"",findText:"Search results for keyword",NotfindText:"No result!",Showthumb:true,LoadingText:"Searching...",scrthumbSize:50,summaryLength:100};
g=j.extend({},g,b);
var a=j("#ajax-search-form"),h=a.find(":text");
a.append('<div id="search-result"></div>');
var k=j("#search-result");
a.on("submit",function(){var d=h.val();
k.show().html('<div class="load">'+g.LoadingText+"</div>");
j.get((g.blogURL===""?window.location.protocol+"//"+window.location.host:g.blogURL)+"/feeds/posts/summary?alt=json-in-script&q="+d+"&max-results=9999",function(v){var w=v.feed.entry,e,f,x,y,t="";
if(w!==undefined){t="<h4>"+g.findText+" &quot;"+d+"&quot;</h4>";
t+='<a class="close" href="/">&times;</a><ol>';
for(var r=0;
r<w.length;
r++){var u=new RegExp(d,"ig"),x=w[r].title.$t.replace(u,"<mark>"+d+"</mark>");
for(var s=0;
s<w[r].link.length;
s++){if(w[r].link[s].rel=="alternate"){y=w[r].link[s].href
}}if(g.summaryLength>0){if("content" in w[r]){e=w[r].content.$t
}else{if("summary" in w[r]){e=w[r].summary.$t
}else{e=""
}}e=e.replace(/<\S[^>]*>/g,"");
if(e.length>g.summaryLength){e=e.substring(0,g.summaryLength)+"..."
}e=e.replace(u,"<mark>"+d+"</mark>")
}if(g.Showthumb===true){if("media$thumbnail" in w[r]){f=w[r].media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+g.scrthumbSize+"-c")
}else{f=g.srcBlank
}}t+='<li><a href="'+y+'" >'+(g.Showthumb===true?'<img width="'+g.scrthumbSize+'" height="'+g.scrthumbSize+'" src="'+f+'"/>':"")+"<strong>"+x+"</strong></a>"+(g.summaryLength>0?"<p>"+e+"</p>":"")+"</li>"
}t+="</ol>";
k.html(t)
}else{k.html('<a class="close" href="/">&times;</a><strong>'+g.NotfindText+"</strong>")
}},"jsonp");
return false
});
a.on("click",".close",function(){k.fadeOut();
return false
})
})(jQuery)
}

function ShowPost1(b){(function(a){var e={blogURL:"",MaxPost:5,idcontaint:"",FirstImageSize:600,ImageSize:600,Summarylength:90,animated:false,loadingClass:"loadingz",pBlank:"",MonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tagName:false};
e=a.extend({},e,b);
var f=a(e.idcontaint);
f.html('<div class="box-content"><ul></ul></div>').addClass(e.loadingClass);
a.get((e.blogURL===""?window.location.protocol+"//"+window.location.host:e.blogURL)+"/feeds/posts/summary"+(e.tagName===false?"":"/-/"+e.tagName)+"?max-results="+e.MaxPost+"&orderby=published&alt=json-in-script",function(I){var d,H,B,E,L,G,A,J,x,j,K,C,F="",y=I.feed.entry;
for(var z=0;
z<y.length;
z++){for(var D=0;
D<y[z].link.length;
D++){if(y[z].link[D].rel=="alternate"){d=y[z].link[D].href;
break
}}for(var C=0;
C<D;
C++){if(y[z].link[C].rel=="replies"&&y[z].link[C].type=="text/html"){E=y[z].link[C].title.split(" ")[0];
break
}}if("media$thumbnail" in y[z]){L=y[z].media$thumbnail.url
}else{L=e.pBlank
}if("content" in y[z]){B=y[z].content.$t
}else{if("summary" in y[z]){B=y[z].summary.$t
}else{B=""
}}B=B.replace(/<\S[^>]*>/g,"");
if(B.length>e.Summarylength){B=B.substring(0,e.Summarylength)+"..."
}if(y[z]===y[0]){L=L.replace(/\/s[0-9]+\-c/g,"/s"+e.FirstImageSize+"-p");
if(L.indexOf("img.youtube.com/vi/")!=-1){L=L.replace("default","0")
}A="<p>"+B+"</p>"
}else{L=L.replace(/\/s[0-9]+\-c/g,"/s"+e.ImageSize+"-p");
A=""
}H=y[z].title.$t;
C=y[z].published.$t.substring(0,10);
J=C.substring(0,4);
x=C.substring(5,7);
j=C.substring(8,10);
K=e.MonthNames[parseInt(x,10)-1];
G='<div class="uj_thumb"><a title="'+H+'" class=" " href="'+d+'"><img src="'+L+'"/></a><div class="overlay"><a class="zoom" href="'+L+'"></a><a class="post-link" href="'+d+'"></a></div></div>';
     F+='<li><div class="inner-content" >'+G+'<h3><a href="'+d+'">'+H+'</a></h3><span class="post-meta"><span class="comt"><i class="icon-comments"></i>'+E+'</span> comment  <span class="dd"> <i class="icon-time"></i> '+j+'</span> <span class="dm">'+K+'</span> <span class="dy">'+J+"</span></span>"+A+"</div></li>"
}a("ul",f).append(F);
if(e.animated){a("ul",f).addClass("scroll-item");
a(e.idcontaint+" a.zoom").fancybox({centerOnScroll:true,hideOnContentClick:true});
a(e.idcontaint+" .box-content").flexslider({animation:"slide",selector:".scroll-item > li",animationLoop:true,itemWidth:240,pauseOnHover:true,move:3,itemMargin:0,minItems:3,mousewheel:false,maxItems:4})
}else{if(e.tagName!=false){f.append('<h2 class="uj-box-title"><a href="/search/label/'+encodeURIComponent(e.tagName)+'?&max-results=7">'+e.tagName+"</a></h2>")
}}f.removeClass(e.loadingClass)
},"jsonp")
})(jQuery)
}

function ShowPost2(b){(function(a){var e={blogURL:"",MaxPost:5,idcontaint:"",FirstImageSize:600,ImageSize:300,Summarylength:90,animated:false,loadingClass:"loadingz",pBlank:"",MonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tagName:false};
e=a.extend({},e,b);
var f=a(e.idcontaint);
f.html('<div class="box-content"><ul></ul></div>').addClass(e.loadingClass);
a.get((e.blogURL===""?window.location.protocol+"//"+window.location.host:e.blogURL)+"/feeds/posts/summary"+(e.tagName===false?"":"/-/"+e.tagName)+"?max-results="+e.MaxPost+"&orderby=published&alt=json-in-script",function(I){var d,H,B,E,L,G,A,J,x,j,K,C,F="",y=I.feed.entry;
for(var z=0;
z<y.length;
z++){for(var D=0;
D<y[z].link.length;
D++){if(y[z].link[D].rel=="alternate"){d=y[z].link[D].href;
break
}}if("media$thumbnail" in y[z]){L=y[z].media$thumbnail.url
}else{L=e.pBlank
}if("content" in y[z]){B=y[z].content.$t
}else{if("summary" in y[z]){B=y[z].summary.$t
}else{B=""
}}B=B.replace(/<\S[^>]*>/g,"");
if(B.length>e.Summarylength){B=B.substring(0,e.Summarylength)+"..."
}if(y[z]===y[0]){L=L.replace(/\/s[0-9]+\-c/g,"/s"+e.FirstImageSize+"-p");
if(L.indexOf("img.youtube.com/vi/")!=-1){L=L.replace("default","0")
}A="<p>"+B+"</p>"
}else{L=L.replace(/\/s[0-9]+\-c/g,"/s"+e.ImageSize+"-p");
A=""
}H=y[z].title.$t;
C=y[z].published.$t.substring(0,10);
J=C.substring(0,4);
x=C.substring(5,7);
j=C.substring(8,10);
K=e.MonthNames[parseInt(x,10)-1];
G='<div class="uj_thumb"><a title="'+H+'" class="thumblab" href="'+d+'"><img src="'+L+'"/></a></div>';
F+='<li><div class="inner-content" >'+G+'<h3><a href="'+d+'">'+H+'</a></h3><span class="post-meta"><span class="dd">'+j+'</span> <span class="dm">'+K+'</span> <span class="dy">'+J+"</span></span>"+A+"</div></li>"
}a("ul",f).append(F);
if(e.animated){a("ul",f).addClass("scroll-item");
a(e.idcontaint+" .box-content").flexslider({animation:"slide",selector:".scroll-item > li",animationLoop:true,itemWidth:240,pauseOnHover:true,move:3,itemMargin:0,minItems:3,mousewheel:false,maxItems:4})
}else{if(e.tagName!=false){f.append('<h2 class="uj-box-title"><a href="/search/label/'+encodeURIComponent(e.tagName)+'?&max-results=7">'+e.tagName+"</a></h2>")
}}f.removeClass(e.loadingClass)
},"jsonp")
})(jQuery)
}window.labelinc=(function(){var a=function(e){var j=e||{},d=j.url_blog||window.location.host,b=j.id_labelcontent||"#labelbar";
$.get("http://"+d+"/feeds/posts/summary?max-results=0&alt=json-in-script",function(h){var f=h.feed.category,k="";
if(f!==undefined){k="<span>+</span><ul class='sub2-item'>";
for(var g=0;
g<f.length;
g++){k+='<li><a href="/search/label/'+encodeURIComponent(f[g].term)+'?&max-results=7">'+f[g].term+"</a></li>"
}k+="</ul>";
$(b).html(k)
}else{$(b).html("<span>No Label!</span>")
}},"jsonp");
$(".item-1 .lines").click(function(){$("#labelbar").slideToggle("fast");
$(this).toggleClass("active");
return false
})
};
return function(b){a(b)
}
})();
function NewsTicker(b){(function(a){var d={blogURL:"",MaxPost:4,Speed:0.1,direction:"ltr",titleText:"headlines",displayType:"reveal",Container:".breaking-news",MonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]};
d=a.extend({},d,b);
a(d.Container).addClass("loading");
a.get((d.blogURL===""?window.location.protocol+"//"+window.location.host:d.blogURL)+"/feeds/posts/summary?max-results="+d.MaxPost+"&orderby=published&alt=json-in-script",function(j){var w,E,I,x,z,J,B,G,H,v,F,D="",C=j.feed.entry;
if(C!==undefined){for(var y=0;
y<C.length;
y++){for(var A=0;
A<C[y].link.length;
A++){if(C[y].link[A].rel=="alternate"){w=C[y].link[A].href
}}E=C[y].title.$t;
v=C[y].published.$t.substring(0,10);
I=v.substring(0,4);
x=v.substring(5,7);
z=v.substring(8,10);
J=d.MonthNames[parseInt(x,10)-1];
B=C[y].published.$t.substring(11,16);
G=B.substring(0,2);
H=B.substring(2,5);
if(G<12){F="AM"
}else{F="PM"
}if(G===0){G=12
}if(G>12){G=G-12
}D+='<li><span title="'+J+" "+z+", "+I+'" class="date">'+G+""+H+" "+F+'</span> <a class="title" href="'+w+'">'+E+"</a></li>"
}a(d.Container).html('<h4>headlines</h4><ul id="newstick">'+D+"</ul>").removeClass("loading");
a("#newstick").ticker({speed:d.Speed,direction:d.direction,titleText:d.titleText,displayType:d.displayType})
}else{a(d.Container).html("<span>No result!</span>").removeClass("loading")
}},"jsonp")
})(jQuery)
}function RelatedPost(a){(function(d){var e={blogURL:"",maxPosts:5,maxTags:5,maxPostsPerTag:5,containerSelector:"#related_posts",tags:null,loadingText:"",loadingClass:"loadingz",relevantTip:"",rlt_summary:100,relatedTitle:"Related Posts",readMoretext:"Read more &#187;",rlpBlank:"",rlt_thumb:70,recentTitle:"Related Post",MonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],postScoreClass:"",onLoad:false};
e=d.extend({},e,a);
var k=0,u=null,f=null;
if(!e.containerSelector){document.write('<div id="related_posts"></div>');
e.containerSelector="#related_posts"
}var v=function(q,t){k++;
if(q.feed.entry){for(var w=0;
w<q.feed.entry.length;
w++){var m=q.feed.entry[w];
var y="";
for(var s=0;
s<m.link.length;
s++){if(m.link[s].rel=="alternate"){y=m.link[s].href;
break
}}if("content" in m){var r=m.content.$t
}else{if("summary" in m){var r=m.summary.$t
}else{var r=""
}}var r=r.replace(/<\S[^>]*>/g,"");
if(r.length>e.rlt_summary){var r=r.substring(0,e.rlt_summary)+"..."
}var l=m.title.$t;
if("media$thumbnail" in m){var o=m.media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+e.rlt_thumb+"-c")
}else{var o=e.rlpBlank
}var F=m.published.$t.substring(0,10);
var p=F.substring(0,4);
var x=F.substring(5,7);
var n=F.substring(8,10);
var E=e.MonthNames[parseInt(x,10)-1];
if(location.href.toLowerCase()!=y.toLowerCase()){h(y,l,o,r,p,n,E)
}}}if(k>=e.tags.length){f.attr("class","");
d("#related-posts-loadingtext",u).remove();
if(e.maxPosts>0){d("li:gt("+(e.maxPosts-1)+")",f).remove()
}}};
var h=function(t,m,D,p,o,C,n){var w=d("li",f);
for(var s=0;
s<w.length;
s++){var l=d("a",w.eq(s));
var x=j(l);
if(l.attr("href")==t){g(l,++x);
for(var r=s-1;
r>=0;
r--){var q=d("a",w.eq(r));
if(j(q)>x){if(s-r>1){w.eq(r).after(w.eq(s))
}return
}}if(s>0){w.eq(0).before(w.eq(s))
}return
}}f.append('<li><a class="" href="'+t+'" title="'+(e.relevantTip?e.relevantTip.replace("\d",1):"")+'"><span class="imgrp"><img style="width:'+e.rlt_thumb+"px;height:"+e.rlt_thumb+'px;display: block" alt="'+m+'" src="'+D+'"/></span><h3>'+m+"</h3></a><p>"+p+'<a  title="'+m+'" href="'+t+'">'+e.readMoretext+'</a></p><span class="date"><span class="dd">'+C+'</span><span class="dm">'+n+'</span><span class="dy">'+o+"</span></span></li>")
};
var j=function(l){var m=parseInt(l.attr("score"));
return m>0?m:1
};
var g=function(l,m){l.attr("score",m);
if(e.relevantTip){l.attr("title",e.relevantTip.replace("\d",m))
}if(e.postScoreClass){l.attr("class",e.postScoreClass+m)
}};
var b=function(){if(e.containerSelector!="#related_posts"){var l=d(e.containerSelector);
if(l.length!=1){return
}u=d('<div id="related_posts"></div>').appendTo(l)
}else{u=d(e.containerSelector)
}if(!e.tags){e.tags=[];
d('a[rel="tag"]:lt('+e.maxTags+")").each(function(){var n=d.trim(d(this).text().replace(/\n/g,""));
if(d.inArray(n,e.tags)==-1){e.tags[e.tags.length]=n
}})
}if(e.tags.length==0&&!e.recentTitle){return
}if(e.tags.length==0){d("<h4><span>"+e.recentTitle+"</span></h4>").appendTo(u)
}else{if(e.relatedTitle){d("<h4><span>"+e.relatedTitle+"</span></h4>").appendTo(u)
}}if(e.loadingText){d('<div id="related-posts-loadingtext">'+e.loadingText+"</div>").appendTo(u)
}f=d("<ul "+(e.loadingClass?'class="'+e.loadingClass+'"':"")+"></ul>").appendTo(u);
if(e.tags.length==0){d.get((e.blogURL===""?window.location.protocol+"//"+window.location.host:e.blogURL)+"/feeds/posts/summary?max-results="+e.maxPostsPerTag+"&orderby=published&alt=json-in-script",v,"jsonp")
}else{for(var m=0;
m<e.tags.length;
m++){d.get((e.blogURL===""?window.location.protocol+"//"+window.location.host:e.blogURL)+"/feeds/posts/summary/-/"+e.tags[m]+"?max-results="+e.maxPostsPerTag+"&orderby=published&alt=json-in-script",v,"jsonp")
}}};
if(e.onLoad){d(window).load(b)
}else{d(document).ready(b)
}})(jQuery)
}(function(b){b(window).scroll(function(){if(b(this).scrollTop()>250){b("#top").removeAttr("href");
b("#top").stop().animate({height:50,opacity:1},{duration:500,queue:false})
}else{b("#top").stop().animate({height:50,opacity:0},{duration:500,queue:false})
}});
b(function(){b("#top").click(function(){b("html, body").animate({scrollTop:0},"slow");
return false
})
})
})(jQuery);
function PostSlide(a){(function(b){var j={blogURL:"",MaxPost:4,idcontaint:"",ImageSize:500,Summarylength:150,RandompostActive:true,loadingClass:"loadingz",pBlank:"",MonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tagName:false};
j=b.extend({},j,a);
var e=b(j.idcontaint);
e.html('<div class="uj_slider_wrap"><ul class="slides"></ul></div>').addClass(j.loadingClass);
var d=function(f){var l,h,n,q,u,g,t,p,v,m,k="",o=f.feed.entry;
for(var s=0;
s<o.length;
s++){for(var r=0;
r<o[s].link.length;
r++){if(o[s].link[r].rel=="alternate"){l=o[s].link[r].href;
break
}}if("media$thumbnail" in o[s]){u=o[s].media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+j.ImageSize);
if(o[s].media$thumbnail.url.indexOf("img.youtube.com")!=-1){u=o[s].media$thumbnail.url.replace("default","0")
}}else{u=j.pBlank.replace(/\/s[0-9]+\-c/g,"/s"+j.ImageSize)
}if("content" in o[s]){n=o[s].content.$t
}else{if("summary" in o[s]){n=o[s].summary.$t
}else{n=""
}}n=n.replace(/<\S[^>]*>/g,"");
if(n.length>j.Summarylength){n=n.substring(0,j.Summarylength)+"..."
}h=o[s].title.$t;
m=o[s].published.$t.substring(0,10);
g=m.substring(0,4);
t=m.substring(5,7);
p=m.substring(8,10);
v=j.MonthNames[parseInt(t,10)-1];
k+='<li class="uj_slider_item"><a title="'+h+'" class="" href="'+l+'"><img src="'+u+'"/></a><div class="slider_caption"><h3><a href="'+l+'">'+h+'</a></h3></div><p class="caption"><span class="post-meta"><span class="dd">'+p+'</span> <span class="dm">'+v+'</span> <span class="dy">'+g+"</span></span>"+n+"</p></li>"
}e.find("ul.slides").append(k);
if(!j.RandompostActive){b(j.idcontaint+" .uj_slider_wrap").flexslider({animation:"fade",selector:".slides > li",animationLoop:true,smoothHeight:true,pauseOnHover:true,mousewheel:false,before:function(){b(j.idcontaint).find(".slider_caption").stop().animate({left:100,opacity:0},2000);
b(j.idcontaint).find(".caption").stop().animate({left:0,opacity:0},2000)
},after:function(){b(j.idcontaint).find(".slider_caption").stop().animate({left:10,opacity:1},2000);
b(j.idcontaint).find(".caption").stop().animate({left:50,opacity:1},2000)
}});
e.removeClass(j.loadingClass)
}};
b.get((j.blogURL===""?window.location.protocol+"//"+window.location.host:j.blogURL)+"/feeds/posts/summary"+(j.tagName===false?"":"/-/"+j.tagName)+"?max-results=0&orderby=published&alt=json-in-script",function(l){Total_Posts_Number=l.feed.openSearch$totalResults.$t;
if(Total_Posts_Number<=j.MaxPost){j.MaxPost=Total_Posts_Number
}var n=[];
while(n.length<j.MaxPost){var q=Math.ceil(Math.random()*Total_Posts_Number);
var m=false;
for(var g=0;
g<n.length;
g++){if(n[g]==q){m=true;
break
}}if(!m){n[n.length]=q
}}if(j.RandompostActive==true){var h;
for(var f=0;
f<j.MaxPost;
f++){h=b.get((j.blogURL===""?window.location.protocol+"//"+window.location.host:j.blogURL)+"/feeds/posts/default"+(j.tagName===false?"":"/-/"+j.tagName)+"?start-index="+n[f]+"&max-results=1&orderby=published&alt=json-in-script",d,"jsonp")
}b.when(h).done(function(){b(j.idcontaint+" .uj_slider_wrap").flexslider({animation:"fade",selector:".slides > li",animationLoop:true,smoothHeight:true,pauseOnHover:true,mousewheel:false,initDelay:j.MaxPost*700,before:function(){b(j.idcontaint).find(".slider_caption").stop().animate({left:100,opacity:0},2000);
b(j.idcontaint).find(".caption").stop().animate({left:0,opacity:0},2000)
},after:function(){b(j.idcontaint).find(".slider_caption").stop().animate({left:10,opacity:1},2000);
b(j.idcontaint).find(".caption").stop().animate({left:50,opacity:1},2000)
}});
e.removeClass(j.loadingClass)
})
}else{b.get((j.blogURL===""?window.location.protocol+"//"+window.location.host:j.blogURL)+"/feeds/posts/default"+(j.tagName===false?"":"/-/"+j.tagName)+"?max-results="+j.MaxPost+"&orderby=published&alt=json-in-script",d,"jsonp")
}},"jsonp")
})(jQuery)
};
