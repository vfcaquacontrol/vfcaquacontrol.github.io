!function(I){I.fn.gaugeMeter=function(e){var G=I.extend({id:"",percent:0,used:null,total:null,size:100,prepend:"",append:"",theme:"Red-Gold-Green",color:"",back:"RGBa(0,0,0,.06)",width:3,style:"Full",stripe:"0",animationstep:1,animate_gauge_colors:!1,animate_text_colors:!1,label:"",label_color:"Black",text:"",text_size:.22,fill:"",showvalue:!1},e);return this.each(function(){function e(e){var t="#2C94E0";return e||(e=1e-14),"Red-Gold-Green"===n.theme&&(0<e&&(t="#d90000"),10<e&&(t="#e32100"),20<e&&(t="#f35100"),30<e&&(t="#ff8700"),40<e&&(t="#ffb800"),50<e&&(t="#ffd900"),60<e&&(t="#dcd800"),70<e&&(t="#a6d900"),80<e&&(t="#69d900"),90<e&&(t="#32d900")),"Green-Gold-Red"===n.theme&&(0<e&&(t="#32d900"),10<e&&(t="#69d900"),20<e&&(t="#a6d900"),30<e&&(t="#dcd800"),40<e&&(t="#ffd900"),50<e&&(t="#ffb800"),60<e&&(t="#ff8700"),70<e&&(t="#f35100"),80<e&&(t="#e32100"),90<e&&(t="#d90000")),"Green-Red"===n.theme&&(0<e&&(t="#32d900"),10<e&&(t="#41c900"),20<e&&(t="#56b300"),30<e&&(t="#6f9900"),40<e&&(t="#8a7b00"),50<e&&(t="#a75e00"),60<e&&(t="#c24000"),70<e&&(t="#db2600"),80<e&&(t="#f01000"),90<e&&(t="#ff0000")),"Red-Green"===n.theme&&(0<e&&(t="#ff0000"),10<e&&(t="#f01000"),20<e&&(t="#db2600"),30<e&&(t="#c24000"),40<e&&(t="#a75e00"),50<e&&(t="#8a7b00"),60<e&&(t="#6f9900"),70<e&&(t="#56b300"),80<e&&(t="#41c900"),90<e&&(t="#32d900")),"DarkBlue-LightBlue"===n.theme&&(0<e&&(t="#2c94e0"),10<e&&(t="#2b96e1"),20<e&&(t="#2b99e4"),30<e&&(t="#2a9ce7"),40<e&&(t="#28a0e9"),50<e&&(t="#26a4ed"),60<e&&(t="#25a8f0"),70<e&&(t="#24acf3"),80<e&&(t="#23aff5"),90<e&&(t="#21b2f7")),"LightBlue-DarkBlue"===n.theme&&(0<e&&(t="#21b2f7"),10<e&&(t="#23aff5"),20<e&&(t="#24acf3"),30<e&&(t="#25a8f0"),40<e&&(t="#26a4ed"),50<e&&(t="#28a0e9"),60<e&&(t="#2a9ce7"),70<e&&(t="#2b99e4"),80<e&&(t="#2b96e1"),90<e&&(t="#2c94e0")),"DarkRed-LightRed"===n.theme&&(0<e&&(t="#d90000"),10<e&&(t="#dc0000"),20<e&&(t="#e00000"),30<e&&(t="#e40000"),40<e&&(t="#ea0000"),50<e&&(t="#ee0000"),60<e&&(t="#f30000"),70<e&&(t="#f90000"),80<e&&(t="#fc0000"),90<e&&(t="#ff0000")),"LightRed-DarkRed"===n.theme&&(0<e&&(t="#ff0000"),10<e&&(t="#fc0000"),20<e&&(t="#f90000"),30<e&&(t="#f30000"),40<e&&(t="#ee0000"),50<e&&(t="#ea0000"),60<e&&(t="#e40000"),70<e&&(t="#e00000"),80<e&&(t="#dc0000"),90<e&&(t="#d90000")),"DarkGreen-LightGreen"===n.theme&&(0<e&&(t="#32d900"),10<e&&(t="#33db00"),20<e&&(t="#34df00"),30<e&&(t="#34e200"),40<e&&(t="#36e700"),50<e&&(t="#37ec00"),60<e&&(t="#38f100"),70<e&&(t="#38f600"),80<e&&(t="#39f900"),90<e&&(t="#3afc00")),"LightGreen-DarkGreen"===n.theme&&(0<e&&(t="#3afc00"),10<e&&(t="#39f900"),20<e&&(t="#38f600"),30<e&&(t="#38f100"),40<e&&(t="#37ec00"),50<e&&(t="#36e700"),60<e&&(t="#34e200"),70<e&&(t="#34df00"),80<e&&(t="#33db00"),90<e&&(t="#32d900")),"DarkGold-LightGold"===n.theme&&(0<e&&(t="#ffb800"),10<e&&(t="#ffba00"),20<e&&(t="#ffbd00"),30<e&&(t="#ffc200"),40<e&&(t="#ffc600"),50<e&&(t="#ffcb00"),60<e&&(t="#ffcf00"),70<e&&(t="#ffd400"),80<e&&(t="#ffd600"),90<e&&(t="#ffd900")),"LightGold-DarkGold"===n.theme&&(0<e&&(t="#ffd900"),10<e&&(t="#ffd600"),20<e&&(t="#ffd400"),30<e&&(t="#ffcf00"),40<e&&(t="#ffcb00"),50<e&&(t="#ffc600"),60<e&&(t="#ffc200"),70<e&&(t="#ffbd00"),80<e&&(t="#ffba00"),90<e&&(t="#ffb800")),"White"===n.theme&&(t="#fff"),"Black"===n.theme&&(t="#000"),t}I(this).attr("data-id",I(this).attr("id"));var i,a,t,d,f=["percent","used","total","size","prepend","append","theme","color","back","width","style","stripe","animationstep","animate_gauge_colors","animate_text_colors","label","label_color","text","text_size","fill","showvalue"],n={},l=0,r=I(this),o=!1;r.addClass("gaugeMeter"),a=r,I.each(f,function(e,t){void 0!==a.data(t)&&null!==a.data(t)?n[t]=a.data(t):n[t]=I(G).attr(t),"fill"===t&&(o=n[t]),"size"!==t&&"width"!==t&&"animationstep"!==t&&"stripe"!==t||Number.isInteger(n[t])||(n[t]=parseInt(n[t])),"text_size"===t&&(n[t]=parseFloat(n[t]))}),(l=Number.isInteger(n.used)&&Number.isInteger(n.total)?n.used/(n.total/100):Number.isInteger(n.percent)?n.percent:parseInt(G.percent))<0&&(l=0),100<l&&(l=100),""!==n.text&&null!==n.text&&void 0!==n.text?(i=""!==n.append&&null!==n.append&&void 0!==n.append?n.text+"<u>"+n.append+"</u>":n.text,""!==n.prepend&&null!==n.prepend&&void 0!==n.prepend&&(i="<s>"+n.prepend+"</s>"+i)):(i=!0===G.showvalue||!0===n.showvalue?n.used:l.toString(),""!==n.prepend&&null!==n.prepend&&void 0!==n.prepend&&(i="<s>"+n.prepend+"</s>"+i),""!==n.append&&null!==n.append&&void 0!==n.append&&(i=i+"<u>"+n.append+"</u>")),n.fgcolor=e(l),""!==n.color&&null!==n.color&&void 0!==n.color&&(n.fgcolor=n.color),!0===n.animate_gauge_colors&&(n.fgcolor=e(l)),function(e){var t="";!0===n.animate_text_colors&&(t=n.fgcolor);var a=e.children("span");0===a.length?((n.text_size<=0||Number.isNaN(n.text_size))&&(n.text_size=.22),.5<n.text_size&&(n.text_size=.5),I("<span></span>").appendTo(e).html(i).css({"line-height":n.size+"px","font-size":n.text_size*n.size+"px",color:t})):a.html(i).css({color:t})}(r),""!==n.style&&null!==n.style&&void 0!==n.style&&(t=r,d=n.size/13,0===t.children("b").length&&I("<b></b>").appendTo(t).html(n.label).css({"line-height":n.size+5*d+"px",color:n.label_color})),I(this).width(n.size+"px");var s=I("<canvas></canvas>").attr({width:n.size,height:n.size}).get(0),c=s.getContext("2d"),h=s.width/2,p=s.height/2,u=(n.percent,Math.PI,s.width/2.5),b=2.3*Math.PI,g=0,m=0===n.animationstep?l:0,x=Math.max(n.animationstep,0),_=2*Math.PI,v=Math.PI/2,z=n.style,k=I(this).children("canvas");0!==k.length?k.replaceWith(s):I(s).appendTo(I(this)),"Semi"===z&&(b=2*Math.PI,g=3.13,_=1*Math.PI,v=Math.PI/.996),"Arch"===z&&(b=2.195*Math.PI,g=1,g=655.99999,_=1.4*Math.PI,v=Math.PI/.8335),function e(t){m<0&&(m=0),100<m&&(m=100);var a=n.width<1||isNaN(n.width)?n.size/20:n.width;c.clearRect(0,0,s.width,s.height),c.beginPath(),c.arc(h,p,u,g,b,!1),o&&(c.fillStyle=n.fill,c.fill()),c.lineWidth=a,c.strokeStyle=n.back,n.stripe>parseInt(0)?c.setLineDash([n.stripe],1):c.lineCap="round",c.stroke(),c.beginPath(),c.arc(h,p,u,-v,_*t-v,!1),c.lineWidth=a,c.strokeStyle=n.fgcolor,c.stroke(),m<l&&(m+=x,requestAnimationFrame(function(){e(Math.min(m,l)/100)},r))}(m/100)})}}(jQuery);