import{w as re,B as j,r as f,_ as oe,c as H,a as L,b as ie,d as he,R as E,g as me,u as A,e as q,j as e,D as w,f as I,h as z,F as je,i as ge,k as W,l as Ae,m as Oe,C as De,n as _e,s as N,o as $,T as S,p as Fe,q as be,t as ve,v as Ce,L as X,x as _,y as Pe,I as B,z as J,A as Ee,E as ee,G as Te,H as Ne,J as Ie,K as $e,M as we,N as se,O as C,P as ze,Q as We,S as Le,U as Be,V as F,W as P,X as y,Y as te,Z as Me,$ as Ve,a0 as qe,a1 as Ue,a2 as Ye,a3 as G,a4 as pe,a5 as Ge,a6 as He,a7 as Xe,a8 as Je,a9 as Ke,aa as Qe,ab as Ze}from"./index-2cfaf9c1.js";j.styles;var et=function(t){return{root:{display:"inline-flex",borderRadius:t.shape.borderRadius},contained:{boxShadow:t.shadows[2]},disableElevation:{boxShadow:"none"},disabled:{},fullWidth:{width:"100%"},vertical:{flexDirection:"column"},grouped:{minWidth:40},groupedHorizontal:{"&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{borderTopRightRadius:0,borderTopLeftRadius:0},"&:not(:last-child)":{borderBottomRightRadius:0,borderBottomLeftRadius:0}},groupedText:{},groupedTextHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(t.palette.type==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(t.palette.type==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextPrimary:{"&:not(:last-child)":{borderColor:he(t.palette.primary.main,.5)}},groupedTextSecondary:{"&:not(:last-child)":{borderColor:he(t.palette.secondary.main,.5)}},groupedOutlined:{},groupedOutlinedHorizontal:{"&:not(:first-child)":{marginLeft:-1},"&:not(:last-child)":{borderRightColor:"transparent"}},groupedOutlinedVertical:{"&:not(:first-child)":{marginTop:-1},"&:not(:last-child)":{borderBottomColor:"transparent"}},groupedOutlinedPrimary:{"&:hover":{borderColor:t.palette.primary.main}},groupedOutlinedSecondary:{"&:hover":{borderColor:t.palette.secondary.main}},groupedContained:{boxShadow:"none"},groupedContainedHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(t.palette.grey[400]),"&$disabled":{borderRight:"1px solid ".concat(t.palette.action.disabled)}}},groupedContainedVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(t.palette.grey[400]),"&$disabled":{borderBottom:"1px solid ".concat(t.palette.action.disabled)}}},groupedContainedPrimary:{"&:not(:last-child)":{borderColor:t.palette.primary.dark}},groupedContainedSecondary:{"&:not(:last-child)":{borderColor:t.palette.secondary.dark}}}},tt=f.forwardRef(function(t,i){var s=t.children,n=t.classes,u=t.className,c=t.color,r=c===void 0?"default":c,l=t.component,h=l===void 0?"div":l,x=t.disabled,v=x===void 0?!1:x,g=t.disableElevation,m=g===void 0?!1:g,k=t.disableFocusRipple,R=k===void 0?!1:k,O=t.disableRipple,o=O===void 0?!1:O,a=t.fullWidth,b=a===void 0?!1:a,Q=t.orientation,U=Q===void 0?"horizontal":Q,p=t.size,ne=p===void 0?"medium":p,ue=t.variant,Y=ue===void 0?"outlined":ue,ke=oe(t,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),Re=H(n.grouped,n["grouped".concat(L(U))],n["grouped".concat(L(Y))],n["grouped".concat(L(Y)).concat(L(U))],n["grouped".concat(L(Y)).concat(r!=="default"?L(r):"")],v&&n.disabled);return f.createElement(h,ie({role:"group",className:H(n.root,u,b&&n.fullWidth,m&&n.disableElevation,Y==="contained"&&n.contained,U==="vertical"&&n.vertical),ref:i},ke),f.Children.map(s,function(T){return f.isValidElement(T)?f.cloneElement(T,{className:H(Re,T.props.className),color:T.props.color||r,disabled:T.props.disabled||v,disableElevation:T.props.disableElevation||m,disableFocusRipple:R,disableRipple:o,fullWidth:b,size:T.props.size||ne,variant:T.props.variant||Y}):null}))});const Se=re(et,{name:"MuiButtonGroup"})(tt);var at={root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},st=f.forwardRef(function(t,i){var s=t.classes,n=t.className,u=t.row,c=u===void 0?!1:u,r=oe(t,["classes","className","row"]);return f.createElement("div",ie({className:H(s.root,n,c&&s.row),ref:i},r))});const lt=re(at,{name:"MuiFormGroup"})(st);var nt={root:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"}},ye=f.forwardRef(function(t,i){var s=t.classes,n=t.className,u=oe(t,["classes","className"]);return f.createElement("div",ie({className:H(s.root,n),ref:i},u))});ye.muiName="ListItemSecondaryAction";const K=re(nt,{name:"MuiListItemSecondaryAction"})(ye),Z=({data:d,setData:t,customData:i,label:s,type:n})=>{const u=c=>r=>{r.target.checked?t($(d,l=>{l[c][r.target.name]=i[c][r.target.name]})):t($(d,l=>{delete l[c][r.target.name]}))};return e.jsx(e.Fragment,{children:Object.keys(i[n]).length!==0&&e.jsxs(e.Fragment,{children:[e.jsx(Ae,{children:s}),e.jsx(lt,{children:Object.keys(i[n]).map(c=>e.jsx(Oe,{control:e.jsx(De,{checked:d[n][c]!==void 0,onChange:u(n),name:c}),label:c},c))})]})})},rt=({open:d,handleClose:t})=>{const[i,s]=E.useState(me()),n=A(g=>g.data.customData),u=q(),c=()=>s(n),r=()=>s(me()),l=Object.values(i).every(g=>Object.keys(g).length===0),h=Object.values(n).some(g=>Object.keys(g).length!==0),x=()=>{try{const g=JSON.stringify(i);_e(g),u(N("Custom data copied to clipboard!","success")),t()}catch{u(N("Could not export the custom data!","error"))}},v={data:i,setData:s,customData:n};return e.jsxs(w,{onClose:t,open:d,children:[e.jsx(I,{children:"Export custom data"}),e.jsx(z,{children:e.jsxs(je,{children:[h&&e.jsx(ge,{mb:1,children:e.jsxs(Se,{size:"small",color:"primary",variant:"text",children:[e.jsx(j,{onClick:c,children:"Select all"}),e.jsx(j,{onClick:r,children:"Select none"})]})}),e.jsx(Z,{label:"Units",type:"unitData",...v}),e.jsx(Z,{label:"Rules",type:"rulesData",...v}),e.jsx(Z,{label:"Xenos Rules",type:"xenosRulesData",...v}),e.jsx(Z,{label:"Psychic Powers",type:"psychicPowers",...v})]})}),e.jsxs(W,{children:[e.jsx(j,{onClick:t,color:"primary",children:"Cancel"}),e.jsx(j,{onClick:x,disabled:l,color:"primary",children:"Export"})]})]})},ot=({open:d,handleClose:t})=>{const i=q(),[s,n]=E.useState(""),u=()=>{if(!s){i(N("You have to input some data!","error"));return}try{const l=JSON.parse(s);i(Fe(l)),i(N("Custom data imported!","success"))}catch{i(N("Could not import the custom data!","error"))}},c=l=>{l==="Enter"?r():l==="ESC"&&t()},r=()=>{u(),t()};return e.jsxs(w,{onClose:t,open:d,children:[e.jsx(I,{children:"Enter the import string"}),e.jsx(z,{children:e.jsx(S,{autoFocus:!0,margin:"normal",label:"Import String",type:"text",fullWidth:!0,onChange:l=>n(l.target.value),onKeyPress:l=>c(l.key)})}),e.jsxs(W,{children:[e.jsx(j,{onClick:t,color:"primary",children:"Cancel"}),e.jsx(j,{onClick:r,disabled:!s,color:"primary",children:"Import"})]})]})},it=E.memo(ot);var ce={},ct=ve,dt=Ce;Object.defineProperty(ce,"__esModule",{value:!0});var M=ce.default=void 0,ut=dt(f),ht=ct(be()),mt=(0,ht.default)(ut.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddCircle");M=ce.default=mt;var de={},pt=ve,xt=Ce;Object.defineProperty(de,"__esModule",{value:!0});var V=de.default=void 0,jt=xt(f),gt=pt(be()),bt=(0,gt.default)(jt.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");V=de.default=bt;const fe=({data:d,actionOneName:t="Edit",ActionOneIcon:i=Ee,handleClickActionOne:s,actionTwoName:n="Delete",ActionTwoIcon:u=V,handleClickActionTwo:c,actionSpecialName:r="Add new",ActionSpecialIcon:l=M,handleClickSpecialAction:h})=>e.jsxs(X,{children:[Object.keys(d).map(x=>e.jsxs(_,{id:x,children:[e.jsx(Pe,{children:e.jsx(B,{"aria-label":t,onClick:()=>s(x),children:e.jsx(i,{color:"primary"})})}),e.jsx(J,{children:x}),e.jsx(K,{children:e.jsx(B,{size:"small","aria-label":n,onClick:()=>c(x),children:e.jsx(u,{color:"action"})})})]},x)),e.jsx(_,{id:"add_fr",children:e.jsx(j,{"aria-label":r,startIcon:e.jsx(l,{color:"secondary"}),onClick:h,children:r})},"add_fr")]});function vt(d){const{data:t,CustomForm:i,emptyState:s,removeFunc:n,addFunc:u}=d,[c,r,l]=ee(!1),[h,x]=f.useState(s),[v,g]=f.useState(""),m=()=>h.name!==""&&Object.keys(t).every(o=>o===v||o!==h.name),k=()=>{h.name!==v&&n(v),m()&&(u(h),l())},R=o=>{x(t[o]),g(o),r()},O=()=>{x(s),g(""),r()};return e.jsxs(e.Fragment,{children:[e.jsx(fe,{data:t,handleClickActionOne:R,handleClickActionTwo:n,handleClickSpecialAction:O}),e.jsx(i,{open:c,handleClose:l,handleAction:k,initialState:h,changeState:x,validateName:m})]})}function le(d){const{name:t,id:i,expanded:s,handleChange:n,data:u,CustomForm:c,emptyState:r,removeFunc:l,addFunc:h}=d;return e.jsxs(Te,{expanded:s===t,onChange:n(t),children:[e.jsx(Ne,{expandIcon:e.jsx(Ie,{}),"aria-controls":i+"-content",id:i+"-header",children:e.jsxs($e,{children:["Manage ",t]})}),e.jsx(we,{children:e.jsx(vt,{data:u,CustomForm:c,emptyState:r,removeFunc:l,addFunc:h})})]})}function Ct(d){const{open:t,handleClose:i,initialState:s,changeState:n,handleAction:u,validateName:c}=d,r=s;return e.jsxs(w,{onClose:i,open:t,children:[e.jsx(I,{children:"Spell"}),e.jsxs(z,{children:[e.jsx(S,{label:"Name",type:"text",margin:"normal",fullWidth:!0,value:r.name,onChange:l=>n({...r,name:l.target.value}),error:!c(),helperText:"You have to choose a unique name!"}),e.jsx(S,{label:"Difficulty",type:"number",margin:"normal",select:!0,SelectProps:{value:r.difficulty,onChange:l=>n({...r,difficulty:l.target.value})},children:se(2,12).map(l=>e.jsx(C,{value:l,children:l},l))}),e.jsx(S,{label:"Target",type:"text",margin:"normal",fullWidth:!0,value:r.target,onChange:l=>n({...r,target:l.target.value})}),e.jsx(S,{label:"Duration",type:"text",margin:"normal",fullWidth:!0,value:r.duration,onChange:l=>n({...r,duration:l.target.value})}),e.jsx(S,{label:"Effekt",type:"text",margin:"normal",fullWidth:!0,multiline:!0,value:r.effect,onChange:l=>n({...r,effect:l.target.value})})]}),e.jsxs(W,{children:[e.jsx(j,{onClick:i,color:"primary",children:"Cancel"}),e.jsx(j,{onClick:u,color:"primary",disabled:!c(),children:"Okay"})]})]})}function St(d){const{expanded:t,handleChange:i}=d,s=q(),n=A(r=>r.data.customData.psychicPowers),u=r=>s(ze(r)),c=r=>s(We(r));return e.jsx(le,{name:"Psychic Powers",id:"spells",expanded:t,handleChange:i,data:n,CustomForm:Ct,emptyState:{name:"Name",difficulty:7,target:"Target",duration:"Duration",effect:"Effekt"},removeFunc:u,addFunc:c})}const yt=E.memo(St);function ft(d){const{open:t,handleClose:i,initialState:s,changeState:n,handleAction:u,validateName:c}=d,r=s;return e.jsxs(w,{onClose:i,open:t,children:[e.jsx(I,{children:"Rule"}),e.jsxs(z,{children:[e.jsx(S,{label:"Name",type:"text",margin:"normal",fullWidth:!0,value:r.name,onChange:l=>n({...r,name:l.target.value}),error:!c(),helperText:"You have to choose a unique name!"}),e.jsx(S,{label:"Description",type:"text",margin:"normal",fullWidth:!0,multiline:!0,value:r.description,onChange:l=>n({...r,description:l.target.value})})]}),e.jsxs(W,{children:[e.jsx(j,{onClick:i,color:"primary",children:"Cancel"}),e.jsx(j,{onClick:u,color:"primary",disabled:!c(),children:"Okay"})]})]})}function kt(d){const{expanded:t,handleChange:i}=d,s=q(),n=A(l=>l.data.customData),u=A(l=>l.roster.units),c=l=>{Object.values(u).some(h=>h.rules.includes(l))||Object.values(n.unitData).some(h=>h.rules.includes(l))?s(N("You can't delete a rule currently in use!","error")):s(Le(l))},r=l=>s(Be(l));return e.jsx(le,{name:"Rules",id:"rules",expanded:t,handleChange:i,data:n.rulesData,CustomForm:ft,emptyState:{name:"Name",description:"Description"},removeFunc:c,addFunc:r})}const Rt=E.memo(kt),ae=()=>{const[d,t]=E.useState(null);return[d,n=>{t(n.currentTarget)},()=>{t(null)}]},At=({open:d,handleClose:t,name:i,option:s,unit:n,changeState:u,changeName:c,changeOption:r})=>{const l=A(a=>a.data.rulesData),[h,x,v]=ae(),[g,m,k]=ae(),R=a=>()=>{r({...s,setStats:{...s.setStats,[a]:4}}),v()},O=a=>()=>{r({...s,adjustStats:{...s.adjustStats,[a]:0}}),k()},o=()=>{u({...n,options:{...n.options,[i]:s}}),t()};return e.jsxs(w,{onClose:t,open:d,children:[e.jsx(I,{children:"Option"}),e.jsxs(z,{children:[e.jsx(S,{label:"Name",type:"text",margin:"normal",fullWidth:!0,value:i,onChange:a=>c(a.target.value),error:i==="",helperText:"You have to choose a name!"}),e.jsx(S,{label:"Points",margin:"normal",type:"number",select:!0,SelectProps:{value:s.points,onChange:a=>r({...s,points:a.target.value})},children:se(-4,6).map(a=>e.jsx(C,{value:a,children:a},a))}),e.jsx(S,{label:"Description",type:"text",margin:"normal",fullWidth:!0,multiline:!0,value:s.description||"",onChange:a=>r({...s,description:a.target.value})}),e.jsx(F,{id:"remove-rules-label",style:{marginTop:15},children:"Remove Rules"}),e.jsx(P,{multiple:!0,id:"remove-rules",labelId:"remove-rules-label",value:s.remove||[],onChange:a=>r({...s,remove:a.target.value}),children:n.rules.map(a=>e.jsx(C,{value:a,children:a},a))}),e.jsx(F,{id:"add-rules-label",style:{marginTop:15},children:"Add Rules"}),e.jsx(P,{multiple:!0,id:"add-rules",labelId:"add-rules-label",value:s.add||[],onChange:a=>r({...s,add:a.target.value}),children:Object.keys(l).map(a=>e.jsx(C,{value:a,children:a},a))}),e.jsx(F,{id:"options-label",style:{marginTop:15},children:"Set Stats"}),e.jsxs(X,{children:[s.setStats&&Object.keys(s.setStats).map(a=>e.jsxs(_,{id:a,children:[e.jsx(J,{children:y[a].name}),e.jsx(P,{value:s.setStats?s.setStats[a]:0,type:"number",onChange:b=>r({...s,setStats:{...s.setStats,[a]:b.target.value}}),children:y[a].range.map(b=>e.jsx(C,{value:b,children:b},b))}),e.jsx(K,{children:e.jsx(B,{size:"small","aria-label":"Delete",onClick:()=>r($(s,b=>{b.setStats&&delete b.setStats[a]})),children:e.jsx(V,{color:"action"})})})]},a)),e.jsxs(_,{id:"add_opt",children:[e.jsx(j,{onClick:x,startIcon:e.jsx(M,{}),children:"Add Stat"}),e.jsx(te,{id:"add-stat-menu",anchorEl:h,keepMounted:!0,open:!!h,onClose:v,children:Object.keys(y).filter(a=>!Object.keys(s.setStats||{}).includes(a)).map(a=>e.jsx(C,{onClick:R(a),children:y[a].name},a))})]},"add_opt")]}),e.jsx(F,{id:"adjust-options-label",style:{marginTop:15},children:"Adjust Stats"}),e.jsxs(X,{children:[s.adjustStats&&Object.keys(s.adjustStats).map(a=>e.jsxs(_,{id:a,children:[e.jsx(J,{children:y[a].name}),e.jsx(P,{value:s.adjustStats?s.adjustStats[a]:0,type:"number",onChange:b=>r({...s,adjustStats:{...s.adjustStats,[a]:(s.adjustStats&&s.adjustStats[a]||0)+b.target.value}}),children:y[a].adjustRange.map(b=>e.jsx(C,{value:b,children:b},b))}),e.jsx(K,{children:e.jsx(B,{size:"small","aria-label":"Delete",onClick:()=>r($(s,b=>{b.adjustStats&&delete b.adjustStats[a]})),children:e.jsx(V,{color:"action"})})})]},a)),e.jsxs(_,{id:"add_opt_adj",children:[e.jsx(j,{onClick:m,startIcon:e.jsx(M,{}),children:"Add Stat"}),e.jsx(te,{id:"adjust-stat-menu",anchorEl:g,keepMounted:!0,open:!!g,onClose:k,children:Object.keys(y).filter(a=>!Object.keys(s.adjustStats||{}).includes(a)).map(a=>e.jsx(C,{onClick:O(a),children:y[a].name},a))})]},"add_opt_adj")]})]}),e.jsxs(W,{children:[e.jsx(j,{onClick:t,color:"primary",children:"Cancel"}),e.jsx(j,{onClick:o,color:"primary",disabled:i==="",children:"Okay"})]})]})},xe={name:"",points:0,description:""},Ot=["attack","move","shoot"],D=({stat:d,unit:t,changeState:i,isPhone:s})=>{const n=y[d];return e.jsxs(e.Fragment,{children:[e.jsx(pe,{children:s?n.shortName:n.name}),e.jsx(pe,{children:e.jsx(P,{value:t.stats[d],type:"number",onChange:u=>i({...t,stats:{...t.stats,[d]:u.target.value}}),children:n.range.map(u=>e.jsx(C,{value:u,children:u},u))})})]})};function Dt(d){const{open:t,handleClose:i,initialState:s,changeState:n,handleAction:u,validateName:c}=d,r=Me(),l=Ve(r.breakpoints.down("xs")),h=s,x=A(p=>p.data.rulesData),[v,g,m]=ee(),[k,R]=f.useState({...xe}),[O,o]=f.useState("Name"),a={unit:h,changeState:n,isPhone:l},b=p=>{R(h.options[p]),o(p),g()},Q=p=>{n($(h,ne=>{delete ne.options[p]}))},U=()=>{R(xe),o("Name"),g()};return e.jsxs(w,{onClose:i,open:t,children:[e.jsx(I,{children:"Unit"}),e.jsxs(z,{children:[e.jsxs(je,{children:[e.jsx(S,{label:"Name",type:"text",margin:"normal",fullWidth:!0,value:h.name,onChange:p=>n({...h,name:p.target.value}),error:!c(),helperText:"You have to choose a unique name!"}),e.jsx(S,{label:"Points",margin:"normal",type:"number",select:!0,SelectProps:{value:h.points,onChange:p=>n({...h,points:p.target.value})},children:se(1,10).map(p=>e.jsx(C,{value:p,children:p},p))}),e.jsx(S,{label:"Strength Points",margin:"normal",type:"number",select:!0,SelectProps:{value:h.stats.strengthPoints,onChange:p=>n({...h,stats:{...h.stats,strengthPoints:p.target.value}})},children:[6,12].map(p=>e.jsx(C,{value:p,children:p},p))})]}),e.jsx(F,{id:"stats-label",style:{marginTop:15},children:"Stats"}),e.jsx(qe,{style:{marginBottom:20},children:e.jsx(Ue,{size:"small",children:e.jsxs(Ye,{children:[e.jsxs(G,{children:[e.jsx(D,{stat:"attack",...a}),e.jsx(D,{stat:"attackValue",...a})]}),e.jsxs(G,{children:[e.jsx(D,{stat:"move",...a}),e.jsx(D,{stat:"defenceValue",...a})]}),e.jsxs(G,{children:[e.jsx(D,{stat:"shoot",...a}),e.jsx(D,{stat:"shootValue",...a})]}),e.jsxs(G,{children:[e.jsx(D,{stat:"courage",...a}),e.jsx(D,{stat:"shootRange",...a})]}),e.jsxs(G,{children:[e.jsx(D,{stat:"armor",...a}),e.jsx(D,{stat:"movement",...a})]})]})})}),e.jsx(F,{id:"activations-label",style:{marginTop:15},children:"Free Activations"}),e.jsx(P,{multiple:!0,id:"activations",labelId:"activations-label",value:h.freeActivations,onChange:p=>n({...h,freeActivations:p.target.value}),children:Ot.map(p=>e.jsx(C,{value:p,children:p},p))}),e.jsx(F,{id:"rules-label",style:{marginTop:15},children:"Rules"}),e.jsx(P,{multiple:!0,id:"rules",labelId:"rules-label",value:h.rules,onChange:p=>n({...h,rules:p.target.value}),children:Object.keys(x).map(p=>e.jsx(C,{value:p,children:p},p))}),e.jsx(F,{id:"options-label",style:{marginTop:15},children:"Options"}),e.jsx(fe,{data:h.options,handleClickActionOne:b,handleClickActionTwo:Q,handleClickSpecialAction:U}),e.jsx(At,{open:v,handleClose:m,name:O,option:k,unit:h,changeOption:R,changeName:o,changeState:n})]}),e.jsxs(W,{children:[e.jsx(j,{onClick:i,color:"primary",children:"Cancel"}),e.jsx(j,{onClick:u,color:"primary",disabled:!c(),children:"Okay"})]})]})}function _t(d){const{expanded:t,handleChange:i}=d,s=q(),n=A(l=>l.data.customData.unitData),u=A(l=>l.roster.units),c=l=>{Object.values(u).some(h=>h.name===l)?s(N("You can't delete a unit currently in use!","error")):s(Ge(l))},r=l=>s(He(l));return e.jsx(le,{name:"Units",id:"units",expanded:t,handleChange:i,data:n,CustomForm:Dt,emptyState:{name:"Name",type:"foot",points:2,stats:{attack:5,move:6,shoot:0,courage:4,armor:0,attackValue:5,defenceValue:5,shootValue:0,shootRange:0,movement:6,strengthPoints:6},freeActivations:[],rules:[],options:{},xenosRules:[]},removeFunc:c,addFunc:r})}const Ft=E.memo(_t);function Pt(d){const[t,i,s]=ae(),[n,u,c]=ae(),{open:r,handleClose:l,initialState:h,changeState:x,handleAction:v,validateName:g}=d,m=h,k=A(o=>Xe(o)),R=o=>()=>{x({...m,setStats:{...m.setStats,[o]:4}}),s()},O=o=>()=>{x({...m,adjustStats:{...m.adjustStats,[o]:0}}),c()};return e.jsxs(w,{onClose:l,open:r,children:[e.jsx(I,{children:"Xenos Rule"}),e.jsxs(z,{children:[e.jsx(S,{label:"Name",type:"text",margin:"normal",fullWidth:!0,value:m.name,onChange:o=>x({...m,name:o.target.value}),error:!g(),helperText:"You have to choose a unique name!"}),e.jsx(S,{label:"Points",margin:"normal",type:"number",select:!0,SelectProps:{value:m.points,onChange:o=>x({...m,points:o.target.value})},children:se(-4,6).map(o=>e.jsx(C,{value:o,children:o},o))}),e.jsx(S,{label:"Description",type:"text",margin:"normal",fullWidth:!0,multiline:!0,value:m.description,onChange:o=>x({...m,description:o.target.value})}),e.jsx(S,{label:"Exclude Units",margin:"normal",select:!0,SelectProps:{multiple:!0,value:m.exclude_units,onChange:o=>x({...m,exclude_units:o.target.value})},children:k.map(o=>e.jsx(C,{value:o,children:o},o))}),e.jsx(F,{id:"rules-label",style:{marginTop:15},children:"Set Stats"}),e.jsxs(X,{children:[m.setStats&&Object.keys(m.setStats).map(o=>e.jsxs(_,{id:o,children:[e.jsx(J,{children:y[o].name}),e.jsx(P,{value:m.setStats?m.setStats[o]:0,type:"number",onChange:a=>x({...m,setStats:{...m.setStats,[o]:a.target.value}}),children:y[o].range.map(a=>e.jsx(C,{value:a,children:a},a))}),e.jsx(K,{children:e.jsx(B,{size:"small","aria-label":"Delete",onClick:()=>x($(m,a=>{a.setStats&&delete a.setStats[o]})),children:e.jsx(V,{color:"action"})})})]},o)),e.jsxs(_,{id:"add_rules",children:[e.jsx(j,{onClick:i,startIcon:e.jsx(M,{}),children:"Add Stat"}),e.jsx(te,{id:"add-stat-menu",anchorEl:t,keepMounted:!0,open:!!t,onClose:s,children:Object.keys(y).filter(o=>!Object.keys(m.setStats||{}).includes(o)).map(o=>e.jsx(C,{onClick:R(o),children:y[o].name},o))})]},"add_rules")]}),e.jsx(F,{id:"adjust-rules-label",style:{marginTop:15},children:"Adjust Stats"}),e.jsxs(X,{children:[m.adjustStats&&Object.keys(m.adjustStats).map(o=>e.jsxs(_,{id:o,children:[e.jsx(J,{children:y[o].name}),e.jsx(P,{value:m.adjustStats?m.adjustStats[o]:0,type:"number",onChange:a=>x({...m,adjustStats:{...m.adjustStats,[o]:(m.adjustStats&&m.adjustStats[o]||0)+a.target.value}}),children:y[o].adjustRange.map(a=>e.jsx(C,{value:a,children:a},a))}),e.jsx(K,{children:e.jsx(B,{size:"small","aria-label":"Delete",onClick:()=>x($(m,a=>{a.adjustStats&&delete a.adjustStats[o]})),children:e.jsx(V,{color:"action"})})})]},o)),e.jsxs(_,{id:"add_rules_adj",children:[e.jsx(j,{onClick:u,startIcon:e.jsx(M,{}),children:"Add Stat"}),e.jsx(te,{id:"adjust-stat-menu",anchorEl:n,keepMounted:!0,open:!!n,onClose:c,children:Object.keys(y).filter(o=>!Object.keys(m.adjustStats||{}).includes(o)).map(o=>e.jsx(C,{onClick:O(o),children:y[o].name},o))})]},"add_rules_adj")]})]}),e.jsxs(W,{children:[e.jsx(j,{onClick:l,color:"primary",children:"Cancel"}),e.jsx(j,{onClick:v,color:"primary",disabled:!g(),children:"Okay"})]})]})}function Et(d){const{expanded:t,handleChange:i}=d,s=q(),n=A(l=>l.data.customData.xenosRulesData),u=A(l=>l.roster.units),c=l=>{Object.values(u).some(h=>h.xenosRules.includes(l))?s(N("You can't delete a rule currently in use!","error")):s(Je(l))},r=l=>s(Ke(l));return e.jsx(le,{name:"Xenos Rules",id:"xenos-rules",expanded:t,handleChange:i,data:n,CustomForm:Pt,emptyState:{name:"Name",points:0,exclude_units:["Ravenous Hordes"],description:"Description"},removeFunc:c,addFunc:r})}const Tt=E.memo(Et),Nt=()=>{const[d,t]=f.useState(""),[i,s,n]=ee(),[u,c,r]=ee(),l=f.useCallback(h=>(x,v)=>{t(v?h:"")},[]);return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:"Customize"}),e.jsx(Ft,{expanded:d,handleChange:l}),e.jsx(Tt,{expanded:d,handleChange:l}),e.jsx(Rt,{expanded:d,handleChange:l}),e.jsx(yt,{expanded:d,handleChange:l}),e.jsx(ge,{m:2,mx:"auto",children:e.jsxs(Se,{color:"primary",variant:"outlined",children:[e.jsx(j,{"aria-label":"Import custom data",startIcon:e.jsx(Qe,{}),onClick:()=>s(),children:"Import"}),e.jsx(j,{"aria-label":"Export custom data",startIcon:e.jsx(Ze,{}),onClick:()=>c(),children:"Export"})]})}),e.jsx(it,{open:i,handleClose:n}),e.jsx(rt,{open:u,handleClose:r})]})},$t=E.memo(Nt);export{$t as default};