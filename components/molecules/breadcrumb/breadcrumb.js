export default()=>{const e=$("#breadcrumb-wrapper");if($(e).length>0){const o=e[0],t=e.find(".breadcrumb");if($(window).width()>1199&&$(t).length>0&&e.width()<t[0].scrollWidth){let t,s,n=!1;e.on("mousedown",(l=>{n=!0,e.addClass("moving"),t=l.pageX-o.offsetLeft,s=o.scrollLeft})),e.on("mouseleave",(()=>{n=!1,e.removeClass("moving")})),e.on("mouseup",(()=>{n=!1,e.removeClass("moving")})),e.on("mousemove",(e=>{if(!n)return;e.preventDefault();const l=3*(e.pageX-o.offsetLeft-t);o.scrollLeft=s-l})),e.mousewheel(((e,t)=>{e.preventDefault(),o.scrollLeft-=40*t})),e.find("*").on("dragstart",(()=>!1))}}};