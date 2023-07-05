(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[947],{530:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/python/xlsxwriter",function(){return t(3006)}])},8167:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var o=t(5893);t(7294);let s="/code-snippet-book",i={logo:(0,o.jsx)(function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:"".concat(s,"/favicon/favicon-16x16.png"),style:{marginBottom:2}}),(0,o.jsx)("span",{style:{marginLeft:8},children:(0,o.jsx)("b",{style:{backgroundImage:"linear-gradient(to right, #cb3f49, purple)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"LK CS Book"})})]})},{}),head:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("meta",{property:"og:title",content:"LK CS Book"}),(0,o.jsx)("link",{rel:"icon",href:"".concat(s,"/favicon/favicon-16x16.png")})]}),project:{link:"https://github.com/likianta/code-snippet-book"},docsRepositoryBase:"https://github.com/likianta/code-snippet-book",footer:{text:"Made by Likiata, powered by Nextra"}};var r=i},3006:function(e,n,t){"use strict";t.r(n);var o=t(5893),s=t(2673),i=t(1712),r=t(8167);t(9966);var l=t(1151);t(5675);let a={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/python/xlsxwriter.mdx",route:"/python/xlsxwriter",headings:[{depth:1,value:"XlsxWriter",id:"xlsxwriter"},{depth:2,value:"Simple",id:"simple"},{depth:2,value:"Create plot",id:"create-plot"}],timestamp:1688571566e3,pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"python",route:"/python",children:[{kind:"MdxPage",name:"get-file-hash",route:"/python/get-file-hash"},{kind:"MdxPage",name:"get-file-size",route:"/python/get-file-size"},{kind:"MdxPage",name:"get-func-source",route:"/python/get-func-source"},{kind:"MdxPage",name:"load-module-by-path",route:"/python/load-module-by-path"},{kind:"MdxPage",name:"pip-commonly-used",route:"/python/pip-commonly-used"},{kind:"MdxPage",name:"poetry-memo",route:"/python/poetry-memo"},{kind:"MdxPage",name:"streamlit",route:"/python/streamlit"},{kind:"MdxPage",name:"watch-file-changes",route:"/python/watch-file-changes"},{kind:"MdxPage",name:"xlsxwriter",route:"/python/xlsxwriter"},{kind:"MdxPage",name:"zipfiles",route:"/python/zipfiles"},{kind:"Meta",data:{"get-file-hash":"Get File Hash","get-file-size":"Get File Size","get-func-source":"Get Func Source","load-module-by-path":"Load Module by Path","pip-commonly-used":"Pip Commonly Used","poetry-memo":"Poetry Memo",streamlit:"Streamlit","watch-file-changes":"Watch File Changes",xlsxwriter:"Xlsxwriter",zipfiles:"Zipfiles"}}]},{kind:"Folder",name:"shell",route:"/shell",children:[{kind:"MdxPage",name:"bore-frp",route:"/shell/bore-frp"},{kind:"MdxPage",name:"chrome-app-mode",route:"/shell/chrome-app-mode"},{kind:"Folder",name:"windows",route:"/shell/windows",children:[{kind:"MdxPage",name:"create-relative-path-lnk-file",route:"/shell/windows/create-relative-path-lnk-file"},{kind:"Meta",data:{"create-relative-path-lnk-file":"Create Relative Path Lnk File"}}]},{kind:"Meta",data:{"bore-frp":"Bore Frp","chrome-app-mode":"Chrome App Mode"}}]},{kind:"Meta",data:{index:{title:"Home",type:"page"},python:{title:"Python",type:"page"},shell:{title:"Shell",type:"page"}}}],flexsearch:{codeblocks:!0},title:"XlsxWriter"},pageNextRoute:"/python/xlsxwriter",nextraLayout:i.ZP,themeConfig:r.Z};function c(e){let n=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",span:"span",p:"p"},(0,l.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{children:"XlsxWriter"}),"\n",(0,o.jsx)(n.h2,{id:"simple",children:"Simple"}),"\n",(0,o.jsx)(n.pre,{"data-language":"py","data-theme":"default",hasCopyCode:!0,children:(0,o.jsxs)(n.code,{"data-language":"py","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" xlsxwriter"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"workbook "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Workbook"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" xlsxwriter"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"workbook "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Worksheet"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"book"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Workbook "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"Workbook"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"    filename"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"...,"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"    options"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"{"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'strings_to_numbers'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:": "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"True"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"}"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"sheet"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Worksheet "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" book"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"add_worksheet"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'sheet-1'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"..."})}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"book"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"close"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()"})]})]})}),"\n",(0,o.jsx)(n.h2,{id:"create-plot",children:"Create plot"}),"\n",(0,o.jsx)(n.p,{children:"..."})]})}n.default=(0,s.j)(a)}},function(e){e.O(0,[774,568,888,179],function(){return e(e.s=530)}),_N_E=e.O()}]);