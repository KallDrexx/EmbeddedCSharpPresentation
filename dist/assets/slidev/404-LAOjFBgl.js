import{d as f,M as m,y as h,r as x,o as n,b as v,e as t,a6 as s,x as r,A as g,c as p,k as u,g as d,p as k,a as S}from"../modules/vue-DN_7CjgO.js";import{a as y,_ as N}from"../index-BE4xdenT.js";import"../modules/shiki-DhhFbd1D.js";const w=o=>(k("data-v-2af184e6"),o=o(),S(),o),B={class:"grid justify-center text-center pt-15% gap-5"},C=w(()=>t("h1",{class:"text-9xl font-light"}," 404 ",-1)),I={class:"text-2xl"},R={class:"op-60"},V={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},G=f({__name:"404",setup(o){const{currentRoute:l}=m(),{total:i}=y(),a=h(()=>{const c=l.value.path.match(/\d+/);if(c){const e=+c[0];if(e>0&&e<=i.value)return e}return null});return(_,c)=>{const e=x("RouterLink");return n(),v("div",B,[t("div",null,[C,t("p",I,[s(" Page "),t("code",R,r(g(l).path),1),s(" not found ")])]),t("div",V,[a.value!==1?(n(),p(e,{key:0,to:"/",class:"page-link"},{default:u(()=>[s(" Go Home ")]),_:1})):d("v-if",!0),a.value?(n(),p(e,{key:1,to:`/${a.value}`,class:"page-link"},{default:u(()=>[s(" Go to Slide "+r(a.value),1)]),_:1},8,["to"])):d("v-if",!0)])])}}}),A=N(G,[["__scopeId","data-v-2af184e6"]]);export{A as default};
