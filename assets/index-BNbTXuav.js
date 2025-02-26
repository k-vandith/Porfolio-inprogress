import{r as o,j as e}from"./react-CywZ_8YR.js";import{c as d}from"./react-dom-Cuyh9ptC.js";import{C as p}from"./@splinetool-RkOJZLaD.js";import{u as m}from"./react-intersection-observer-DmoKY2yL.js";import{u as h,m as u}from"./framer-motion-DlWmNsgN.js";import"./scheduler-BNqrtbQi.js";import"./lodash.debounce-w-2ii7I1.js";import"./react-merge-refs-Bf2qc8Rt.js";import"./motion-utils-DBsP9okC.js";import"./motion-dom-KRR9Wqx8.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const l=({children:t,id:i})=>{const n=h(),[a,s]=m({threshold:.5});o.useEffect(()=>{s?n.start("visible"):n.start("hidden")},[n,s]);const r={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8}}};return e.jsx(u.section,{id:i,className:"section section-gradient",ref:a,variants:r,initial:"hidden",animate:n,children:t})},j=()=>e.jsx("header",{className:"header",children:e.jsxs("div",{className:"header-content",children:[e.jsx("h1",{className:"logo",children:"Vandith Manohar"}),e.jsx("nav",{className:"nav",children:["about","projects","contact"].map(t=>e.jsx("a",{href:`#${t}`,className:"nav-link",children:t.charAt(0).toUpperCase()+t.slice(1)},t))})]})}),x=()=>e.jsxs("div",{className:"section-content about-content",children:[e.jsxs("div",{className:"about-text",children:[e.jsx("h2",{children:"About Me"}),e.jsx("p",{children:"Motivated second-year Computer Science and Engineering student at KL University with a passion for new tech. Actively preparing for certifications, eager to gain hands-on experience. Full-stack developer passionate about creating modern web experiences."}),e.jsx("div",{className:"slider",children:e.jsx("div",{className:"skills",children:["React","Node.js","TypeScript","Genai","HTML","CSS","JAVA","C++","Spline","Figma"].map(t=>e.jsx("span",{className:"skill-chip",children:t},t))})})]}),e.jsx("div",{className:"profile-image",children:e.jsx("img",{src:"images\\pic.jpg",alt:"Profile",className:"profile-img"})})]}),f=()=>{const t=[{name:"Aero Hive",description:"Contributed to the website for a startup in my college called Aero Hive."},{name:"AI Visual Quiz",description:"Created during a 4-hour hackathon by Igebra.ai to help users learn through images."},{name:"Pill Pack",description:"Interactive e-commerce site for medicines with prescription management."}];return e.jsxs("div",{className:"section-content",children:[e.jsx("h2",{children:"Projects"}),e.jsx("div",{className:"projects-flex",children:t.map((i,n)=>e.jsxs("div",{className:"project-card",children:[e.jsx("div",{className:"project-image",children:e.jsx("img",{src:`images/y${n+1}.jpg`,alt:`Project ${i.name}`,className:"project-img"})}),e.jsx("h3",{children:i.name}),e.jsx("p",{children:i.description})]},n))})]})},g=()=>e.jsxs("div",{className:"section-content",children:[e.jsx("h2",{children:"Contact"}),e.jsxs("form",{id:"contact",className:"contact-flex",children:[e.jsx("div",{className:"input-group",children:e.jsx("input",{type:"text",placeholder:"Name",required:!0})}),e.jsx("div",{className:"input-group",children:e.jsx("input",{type:"email",placeholder:"Email",required:!0})}),e.jsx("div",{className:"input-group",children:e.jsx("textarea",{placeholder:"Message",rows:"5",required:!0})}),e.jsx("button",{type:"submit",children:"Send Message"})]})]}),N=()=>e.jsx("footer",{className:"footer",children:e.jsxs("div",{className:"footer-flex",children:[e.jsx("a",{href:"https://github.com/yourusername",target:"_blank",rel:"noopener noreferrer",className:"social-link",children:"GitHub"}),e.jsx("a",{href:"https://www.linkedin.com/in/yourprofile",target:"_blank",rel:"noopener noreferrer",className:"social-link",children:"LinkedIn"}),e.jsx("a",{href:"https://twitter.com/yourhandle",target:"_blank",rel:"noopener noreferrer",className:"social-link",children:"Twitter"})]})}),v=()=>{const[t,i]=o.useState(!1),[n,a]=o.useState(!1),s=()=>{i(!0)};return t?e.jsxs("div",{className:"app",children:[e.jsx(j,{}),e.jsxs("main",{className:"main-container",children:[e.jsx(l,{id:"about",children:e.jsx(x,{})}),e.jsx(l,{id:"projects",children:e.jsx(f,{})}),e.jsx(l,{id:"contact",children:e.jsx(g,{})})]}),e.jsx(N,{})]}):e.jsxs("div",{className:"splash",children:[e.jsx("div",{className:"spline-container",children:e.jsx(p,{scene:"https://prod.spline.design/SzDHK3EQKMXNsMtG/scene.splinecode",onLoad:()=>a(!0)})}),e.jsx("button",{id:"enterButton",onClick:s,style:{opacity:n?1:0},children:"Want to Enter?"})]})};d.createRoot(document.getElementById("root")).render(e.jsx(o.StrictMode,{children:e.jsx(v,{})}));
