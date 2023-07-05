(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[259],{3676:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/python/get-func-source",function(){return n(9182)}])},8167:function(s,e,n){"use strict";n.d(e,{Z:function(){return l}});var o=n(5893);n(7294);let r="/code-snippet-book",i={logo:(0,o.jsx)(function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:"".concat(r,"/favicon/favicon-16x16.png"),style:{marginBottom:2}}),(0,o.jsx)("span",{style:{marginLeft:8},children:(0,o.jsx)("b",{style:{backgroundImage:"linear-gradient(to right, #cb3f49, purple)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"LK CS Book"})})]})},{}),head:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("meta",{property:"og:title",content:"LK CS Book"}),(0,o.jsx)("link",{rel:"icon",href:"".concat(r,"/favicon/favicon-16x16.png")})]}),project:{link:"https://github.com/likianta/code-snippet-book"},docsRepositoryBase:"https://github.com/likianta/code-snippet-book",footer:{text:"Made by Likiata, powered by Nextra"}};var l=i},9182:function(s,e,n){"use strict";n.r(e),n.d(e,{default:function(){return k}});var o=n(5893),r=n(2673),i=n(1712),l=n(8167);n(9966);var t=n(1151),a=n(5675),c=n.n(a),h={src:"/code-snippet-book/_next/static/media/120721.17fc3d14.png",height:433,width:657,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAGFBMVEUpKzcvMTwsLTkvMTs7O0Y5O0Y5OkUtLzt2vQcuAAAACHRSTlP+/u/qzfzi2DCIFJMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAkSURBVHicFcbBEQAACMIwUMD9N/bIp4W2RohRh7DlISbZkaf0CVIAaM2wUgMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5};let p={MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,t.ah)(),s.components);return e?(0,o.jsx)(e,{...s,children:(0,o.jsx)(d,{...s})}):d(s)},pageOpts:{filePath:"pages/python/get-func-source.mdx",route:"/python/get-func-source",headings:[{depth:1,value:"Get Function Source",id:"get-function-source"},{depth:2,value:"Requirements",id:"requirements"},{depth:2,value:"Code",id:"code"},{depth:2,value:"Test",id:"test"}],timestamp:1688571566e3,pageMap:[{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"python",route:"/python",children:[{kind:"MdxPage",name:"get-file-hash",route:"/python/get-file-hash"},{kind:"MdxPage",name:"get-file-size",route:"/python/get-file-size"},{kind:"MdxPage",name:"get-func-source",route:"/python/get-func-source"},{kind:"MdxPage",name:"load-module-by-path",route:"/python/load-module-by-path"},{kind:"MdxPage",name:"pip-commonly-used",route:"/python/pip-commonly-used"},{kind:"MdxPage",name:"poetry-memo",route:"/python/poetry-memo"},{kind:"MdxPage",name:"streamlit",route:"/python/streamlit"},{kind:"MdxPage",name:"watch-file-changes",route:"/python/watch-file-changes"},{kind:"MdxPage",name:"xlsxwriter",route:"/python/xlsxwriter"},{kind:"MdxPage",name:"zipfiles",route:"/python/zipfiles"},{kind:"Meta",data:{"get-file-hash":"Get File Hash","get-file-size":"Get File Size","get-func-source":"Get Func Source","load-module-by-path":"Load Module by Path","pip-commonly-used":"Pip Commonly Used","poetry-memo":"Poetry Memo",streamlit:"Streamlit","watch-file-changes":"Watch File Changes",xlsxwriter:"Xlsxwriter",zipfiles:"Zipfiles"}}]},{kind:"Folder",name:"shell",route:"/shell",children:[{kind:"MdxPage",name:"bore-frp",route:"/shell/bore-frp"},{kind:"MdxPage",name:"chrome-app-mode",route:"/shell/chrome-app-mode"},{kind:"Folder",name:"windows",route:"/shell/windows",children:[{kind:"MdxPage",name:"create-relative-path-lnk-file",route:"/shell/windows/create-relative-path-lnk-file"},{kind:"Meta",data:{"create-relative-path-lnk-file":"Create Relative Path Lnk File"}}]},{kind:"Meta",data:{"bore-frp":"Bore Frp","chrome-app-mode":"Chrome App Mode"}}]},{kind:"Meta",data:{index:{title:"Home",type:"page"},python:{title:"Python",type:"page"},shell:{title:"Shell",type:"page"}}}],flexsearch:{codeblocks:!0},title:"Get Function Source"},pageNextRoute:"/python/get-func-source",nextraLayout:i.ZP,themeConfig:l.Z};function d(s){let e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",code:"code",pre:"pre",span:"span"},(0,t.ah)(),s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{children:"Get Function Source"}),"\n",(0,o.jsx)(e.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"astunparse"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"optional (for test):"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"astpretty"}),"\n",(0,o.jsx)(e.li,{children:"lk-logger"}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"code",children:"Code"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"get_func_source.py"}),":"]}),"\n",(0,o.jsx)(e.pre,{"data-language":"py","data-theme":"default",hasCopyCode:!0,children:(0,o.jsxs)(e.code,{"data-language":"py","data-theme":"default",children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ast"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" inspect"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" astunparse "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" unparse"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"def"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"get_source"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"func"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"strip_decorators"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"True"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"strip_signature"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"False"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# aka. body_only"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"strip_return"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"False"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"->"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"str"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:'"""'})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"    https://stackoverflow.com/a/57040815"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"    notice: if either `strip_decorators` or `strip_signature` is True, the "})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"        output code may slightly changed by removing *unnecessary* line breaks."})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:'    """'})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    code"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"str"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" inspect"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"getsource"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(func)"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" strip_decorators "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"or"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" strip_signature"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        module "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ast"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"parse"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(code)"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        target_func "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" module"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"body"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" strip_decorators"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            target_func"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"decorator_list"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"clear"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" strip_return"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"FIXME"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:": support only stripping final-line return"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" target_func"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"body "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"and"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"isinstance"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"                target_func.body["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"], "})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"                ast.Return"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"            ):"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                target_func"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"body"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"pop"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" strip_signature"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            body "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" target_func"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"body"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            out "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"unparse"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(body)"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            out "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"unparse"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(target_func)"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        out "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" code"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" out"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"strip"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()"})]})]})}),"\n",(0,o.jsx)(e.h2,{id:"test",children:"Test"}),"\n",(0,o.jsx)(e.pre,{"data-language":"py","data-theme":"default",hasCopyCode:!0,children:(0,o.jsxs)(e.code,{"data-language":"py","data-theme":"default",children:[(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lk_logger"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" get_func_source "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" get_source"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lk_logger"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"setup"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"    show_source"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"False"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"    show_funcname"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"False"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"def"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"decor"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"func"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"):"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" func"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"@decor"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"def"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"aaa"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"bbb"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"int"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"ccc"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"bool"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"False"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"->"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"tuple"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(bbb)"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(ccc)"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        bbb"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        ccc"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    )"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"__name__"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'__main__'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"':di'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:", "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'source code'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"get_source"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(aaa, strip_decorators"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"False"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"))"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"':di'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:", "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'strip decorators'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"get_source"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(aaa, strip_decorators"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"True"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"))"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"':di'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:", "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'body only'"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"get_source"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(aaa, strip_decorators"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"True"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:", body_only"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"True"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"))"})]})]})}),"\n",(0,o.jsx)(e.p,{children:"the output:"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(c(),{placeholder:"blur",src:h})})]})}var k=(0,r.j)(p)}},function(s){s.O(0,[774,568,888,179],function(){return s(s.s=3676)}),_N_E=s.O()}]);