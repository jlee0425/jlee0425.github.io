(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9eSz":function(e,t,i){"use strict";var a=i("TqRt");t.__esModule=!0,t.default=void 0;var r,n=a(i("PJYZ")),o=a(i("VbXa")),s=a(i("8OQS")),d=a(i("pVnL")),l=a(i("q1tI")),c=a(i("17x9")),u=function(e){var t=(0,d.default)({},e),i=t.resolutions,a=t.sizes,r=t.critical;return i&&(t.fixed=i,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,i=e.fixed,a=g(t||i||[]);return a&&a.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},h=Object.create({}),m=function(e){var t=u(e),i=p(t);return h[i]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,i=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:n}),l.default.createElement("source",{media:r,srcSet:i,sizes:n}))}))}function x(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function E(e){return e.map((function(e){var t=e.src,i=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:i,srcSet:a})}))}function R(e){return e.map((function(e){var t=e.src,i=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:i,srcSet:a})}))}function I(e,t){var i=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:i)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var z=function(e,t){var i=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return i&&(i.observe(e),S.set(e,t)),function(){i.unobserve(e),S.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+o+s+i+a+t+n+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=l.default.forwardRef((function(e,t){var i=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(C,(0,d.default)({ref:t,src:i},n,{ariaHidden:o}));return a.length>1?l.default.createElement("picture",null,r(a),s):s})),C=l.default.forwardRef((function(e,t){var i=e.sizes,a=e.srcSet,r=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:i,srcSet:a,src:r},g,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=y&&m(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!b&&v&&!i.isCritical&&!i.seenBefore;var a=i.isCritical||y&&(b||!i.useIOSupport);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn},i.imageRef=l.default.createRef(),i.placeholderRef=t.placeholderRef||l.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,n.default)(i)),i.handleRef=i.handleRef.bind((0,n.default)(i)),i}(0,o.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=u(e),(i=p(t))&&(h[i]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=u(this.props),t=e.title,i=e.alt,a=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,x=e.loading,I=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,d.default)({opacity:z?1:0,transition:O?"opacity "+y+"ms":"none"},s),k="boolean"==typeof b?"lightgray":b,P={transitionDelay:y+"ms"},q=(0,d.default)({opacity:this.state.imgLoaded?0:1},O&&P,s,f),N={title:t,alt:this.state.isVisible?"":i,style:q,className:p,itemProp:S};if(h){var T=h,_=g(h);return l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:_.maxWidth?_.maxWidth+"px":null,maxHeight:_.maxHeight?_.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),k&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&P)}),_.base64&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:_.base64,spreadProps:N,imageVariants:T,generateSources:R}),_.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:_.tracedSVG,spreadProps:N,imageVariants:T,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(T),l.default.createElement(C,{alt:i,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:x,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:i,title:t,loading:x},_,{imageVariants:T}))}}))}if(m){var H=m,W=g(m),M=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete M.display,l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},k&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:k,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},O&&P)}),W.base64&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:N,imageVariants:H,generateSources:R}),W.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:N,imageVariants:H,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(H),l.default.createElement(C,{alt:i,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:x,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:i,title:t,loading:x},W,{imageVariants:H}))}}))}return null},t}(l.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),k=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function P(e){return function(t,i,a){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[i]=e,r),t,"prop",a)}}O.propTypes={resolutions:V,sizes:k,fixed:P(c.default.oneOfType([V,c.default.arrayOf(V)])),fluid:P(c.default.oneOfType([k,c.default.arrayOf(k)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var q=O;t.default=q},"qtb/":function(e){e.exports=JSON.parse('[{"title":"jlee0425.github.io","thumbnail":"portfolio.png","desc":"React | Gatsby.js | React-spring | Prismic | Styled-components","to":"/portfolio/portfolio","url":"https://jlee0425.github.io","git":"https://github.com/jlee0425/jlee0425.github.io/tree/source"},{"title":"Sorting Visualizer","thumbnail":"sorting-visualizer.png","desc":"React | React-spring | Semantic-ui","to":"/portfolio/sorting-visualizer","url":"https://quirky-swirles-9080c2.netlify.app","git":"https://github.com/jlee0425/Sorting-Visualizer"},{"title":"COVID-19 Tracker","thumbnail":"covid19-tracker.png","desc":"React | recharts.js | Material-ui","to":"/portfolio/covid19-tracker","url":"https://blissful-saha-fa57eb.netlify.app","git":"https://github.com/jlee0425/covid-19-tracker"},{"title":"Movie Browser","thumbnail":"movie-browser.png","desc":"React Native | Expo | Redux | Redux-thunk","to":"/portfolio/movie-browser","url":"https://youtu.be/wGMgR8q_aRs","git":"https://github.com/jlee0425/Movie_Browser"}]')},rKQ8:function(e,t,i){"use strict";i.d(t,"a",(function(){return y}));var a=i("q1tI"),r=i.n(a),n=i("Wbzz"),o=i("FpBW"),s=i("9eSz"),d=i.n(s),l=i("vOnD"),c=Object(l.b)(o.a).withConfig({displayName:"ProjectCard__CardContainer",componentId:"sc-1prhq6i-0"})(["display:flex;justify-content:center;padding:1rem;width:100%;height:",";object-fit:cover;box-sizing:border-box;@media (min-width:375px){width:100%;}@media (min-width:768px){width:50%;}@media (min-width:1024px){width:33%;}@media (min-width:1440px){width:25%;}"],(function(e){return e.cardSize})),u=l.b.div.withConfig({displayName:"ProjectCard__Content",componentId:"sc-1prhq6i-1"})(["display:flex;flex-direction:column;overflow:hidden;background:white;box-shadow:1px 1px 3px grey;border-radius:0.25rem;flex:1 1 auto;"]),f=Object(l.b)(d.a).withConfig({displayName:"ProjectCard__Thumbnail",componentId:"sc-1prhq6i-2"})(["height:80%;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;filter:contrast(90%);&:hover &{filter:contrast(100%);}"]),p=l.b.div.withConfig({displayName:"ProjectCard__DescriptionBox",componentId:"sc-1prhq6i-3"})(["padding:1rem;"]),g=l.b.p.withConfig({displayName:"ProjectCard__Title",componentId:"sc-1prhq6i-4"})(["margin:0;font-size:1.25rem;font-weight:300;letter-spacing:1.2px;text-transform:uppercase;color:#696969;"]),h=l.b.span.withConfig({displayName:"ProjectCard__Desc",componentId:"sc-1prhq6i-5"})(["flex:1 1 auto;font-size:0.875rem;line-height:1.5;color:#cccccc;margin-bottom:1.25rem;"]),m=function(e){var t=e.data,i=t.title,a=t.desc,n=t.image,o=t.to,s=e.cardSize;return r.a.createElement(c,{to:o,cardSize:s},r.a.createElement(u,null,r.a.createElement(f,{fluid:n,objectFit:"cover",objectPosition:"top right"}),r.a.createElement(p,null,r.a.createElement(g,null,i),"40vh"===s&&r.a.createElement(h,null,a))))},b=i("qtb/"),y=function(e){var t=e.length,i=e.cardSize,a=Object(n.useStaticQuery)("3860358553").projectImages.edges;return b.slice(0,t).map((function(e){var t=a.find((function(t){return t.node.relativePath==="thumbnails/"+e.thumbnail})),i=Object.assign({},e,{url:e.url||null,image:t.node.childImageSharp.fluid});return Object.assign({},i)})).map((function(e){return r.a.createElement(m,{data:e,key:e.title,cardSize:i})}))}}}]);
//# sourceMappingURL=300e51b05a0b4b20aae48962394b29fdd9ce5498-549f7b55c3a6a5f0f72e.js.map