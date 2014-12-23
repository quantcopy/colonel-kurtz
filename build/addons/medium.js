module.exports=function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){var i=n(36),o=n(37),r=n(1);n(63);var a={defaultContent:function(){return{html:"",text:""}},renderEditor:function(){return r.createElement(i,r.__spread({onBlur:this.setContent},this.state.content))},renderPreviewer:function(){return r.createElement(o,r.__spread({},this.state.content))}};t.exports=a},1:function(t){t.exports=require("react")},36:function(t,e,n){var i=n(38),o=n(1),r=o.PropTypes,a=o.createClass({displayName:"Editor",propTypes:{html:r.string.isRequired,onBlur:r.func.isRequired},getDefaultProps:function(){return{options:{buttons:["header1","header2","bold","italic","underline","anchor","quote","unorderedlist","orderedlist"],firstHeader:"h1",secondHeader:"h2",diffLeft:0,diffTop:-10,disableDoubleReturn:!0}}},shouldComponentUpdate:function(){return!1},componentDidMount:function(){this.setState({editor:new i(this.refs.editor.getDOMNode(),this.props.options)})},componentWillUnmount:function(){this.state.editor.deactivate()},render:function(){return o.createElement("div",{className:"col-block-content"},o.createElement("div",{className:"col-medium",onBlur:this._onBlur,role:"textarea","aria-multiline":"true",ref:"editor",dangerouslySetInnerHTML:{__html:this.props.html}}))},_onBlur:function(){var t=this.refs.editor.getDOMNode();this.props.onBlur({text:t.textContent,html:t.innerHTML})}});t.exports=a},37:function(t,e,n){var i=n(1),o=i.createClass({displayName:"Previewer",render:function(){return i.createElement("div",{className:"col-block-content"},i.createElement("div",{className:"col-medium-preview",dangerouslySetInnerHTML:{__html:this.props.html}}))}});t.exports=o},38:function(t){function e(t,e){"use strict";return this.init(t,e)}t.exports=e,function(t,n){"use strict";function i(t,e){var n;if(void 0===t)return e;for(n in e)e.hasOwnProperty(n)&&t.hasOwnProperty(n)===!1&&(t[n]=e[n]);return t}function o(t,e){for(var n=e.parentNode;null!==n;){if(n===t)return!0;n=n.parentNode}return!1}function r(){var t,e,n,i=this.options.contentWindow.getSelection();if(i.getRangeAt&&i.rangeCount){for(n=[],t=0,e=i.rangeCount;e>t;t+=1)n.push(i.getRangeAt(t));return n}return null}function a(t){var e,n,i=this.options.contentWindow.getSelection();if(t)for(i.removeAllRanges(),e=0,n=t.length;n>e;e+=1)i.addRange(t[e])}function s(){var t=this.options.ownerDocument.getSelection().anchorNode,e=t&&3===t.nodeType?t.parentNode:t;return e}function c(){var t,e,n,i,o="";if(void 0!==this.options.contentWindow.getSelection){if(e=this.options.contentWindow.getSelection(),e.rangeCount){for(i=this.options.ownerDocument.createElement("div"),t=0,n=e.rangeCount;n>t;t+=1)i.appendChild(e.getRangeAt(t).cloneContents());o=i.innerHTML}}else void 0!==this.options.ownerDocument.selection&&"Text"===this.options.ownerDocument.selection.type&&(o=this.options.ownerDocument.selection.createRange().htmlText);return o}function l(t){return!(!t||1!==t.nodeType)}e.prototype={defaults:{allowMultiParagraphSelection:!0,anchorInputPlaceholder:"Paste or type a link",anchorPreviewHideDelay:500,buttons:["bold","italic","underline","anchor","header1","header2","quote"],buttonLabels:!1,checkLinkFormat:!1,cleanPastedHTML:!1,delay:0,diffLeft:0,diffTop:-10,disableReturn:!1,disableDoubleReturn:!1,disableToolbar:!1,disableEditing:!1,elementsContainer:!1,contentWindow:t,ownerDocument:n,firstHeader:"h3",forcePlainText:!0,placeholder:"Type your text",secondHeader:"h4",targetBlank:!1,anchorTarget:!1,anchorButton:!1,anchorButtonClass:"btn",extensions:{},activeButtonClass:"medium-editor-button-active",firstButtonClass:"medium-editor-button-first",lastButtonClass:"medium-editor-button-last"},isIE:"Microsoft Internet Explorer"===navigator.appName||"Netscape"===navigator.appName&&null!==new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent),init:function(t,e){return this.options=i(e,this.defaults),this.setElementSelection(t),0!==this.elements.length?(this.parentElements=["p","h1","h2","h3","h4","h5","h6","blockquote","pre"],this.options.elementsContainer||(this.options.elementsContainer=n.body),this.id=this.options.elementsContainer.querySelectorAll(".medium-editor-toolbar").length+1,this.setup()):void 0},setup:function(){this.events=[],this.isActive=!0,this.initElements().bindSelect().bindPaste().setPlaceholders().bindWindowActions().passInstance()},on:function(t,e,n,i){t.addEventListener(e,n,i),this.events.push([t,e,n,i])},off:function(t,e,n,i){var o,r=this.events.indexOf([t,e,n,i]);-1!==r&&(o=this.events.splice(r,1),o[0].removeEventListener(o[1],o[2],o[3]))},removeAllEvents:function(){for(var t=this.events.pop();t;)t[0].removeEventListener(t[1],t[2],t[3]),t=this.events.pop()},initElements:function(){this.updateElementList();var t,e=!1;for(t=0;t<this.elements.length;t+=1)this.options.disableEditing||this.elements[t].getAttribute("data-disable-editing")||this.elements[t].setAttribute("contentEditable",!0),this.elements[t].getAttribute("data-placeholder")||this.elements[t].setAttribute("data-placeholder",this.options.placeholder),this.elements[t].setAttribute("data-medium-element",!0),this.bindParagraphCreation(t).bindReturn(t).bindTab(t),this.options.disableToolbar||this.elements[t].getAttribute("data-disable-toolbar")||(e=!0);return e&&this.initToolbar().bindButtons().bindAnchorForm().bindAnchorPreview(),this},setElementSelection:function(t){this.elementSelection=t,this.updateElementList()},updateElementList:function(){this.elements="string"==typeof this.elementSelection?this.options.ownerDocument.querySelectorAll(this.elementSelection):this.elementSelection,1===this.elements.nodeType&&(this.elements=[this.elements])},serialize:function(){var t,e,n={};for(t=0;t<this.elements.length;t+=1)e=""!==this.elements[t].id?this.elements[t].id:"element-"+t,n[e]={value:this.elements[t].innerHTML.trim()};return n},callExtensions:function(t){if(!(arguments.length<1)){var e,n,i=Array.prototype.slice.call(arguments,1);for(n in this.options.extensions)this.options.extensions.hasOwnProperty(n)&&(e=this.options.extensions[n],void 0!==e[t]&&e[t].apply(e,i))}},passInstance:function(){var t,e,n=this;for(e in n.options.extensions)n.options.extensions.hasOwnProperty(e)&&(t=n.options.extensions[e],t.parent&&(t.base=n));return n},bindParagraphCreation:function(t){var e=this;return this.on(this.elements[t],"keypress",function(t){var i,o=s.call(e);32===t.which&&(i=o.tagName.toLowerCase(),"a"===i&&n.execCommand("unlink",!1,null))}),this.on(this.elements[t],"keyup",function(t){var i,o,r=s.call(e);r&&r.getAttribute("data-medium-element")&&0===r.children.length&&!e.options.disableReturn&&!r.getAttribute("data-disable-return")&&n.execCommand("formatBlock",!1,"p"),13===t.which&&(r=s.call(e),i=r.tagName.toLowerCase(),o=e.getSelectionElement(),e.options.disableReturn||o.getAttribute("data-disable-return")||"li"===i||e.isListItemChild(r)||(t.shiftKey||n.execCommand("formatBlock",!1,"p"),"a"===i&&n.execCommand("unlink",!1,null)))}),this},isListItemChild:function(t){for(var e=t.parentNode,n=e.tagName.toLowerCase();-1===this.parentElements.indexOf(n)&&"div"!==n;){if("li"===n)return!0;if(e=e.parentNode,!e||!e.tagName)return!1;n=e.tagName.toLowerCase()}return!1},bindReturn:function(t){var e=this;return this.on(this.elements[t],"keypress",function(t){if(13===t.which)if(e.options.disableReturn||this.getAttribute("data-disable-return"))t.preventDefault();else if(e.options.disableDoubleReturn||this.getAttribute("data-disable-double-return")){var n=s.call(e);n&&"\n"===n.innerText&&t.preventDefault()}}),this},bindTab:function(t){var e=this;return this.on(this.elements[t],"keydown",function(t){if(9===t.which){var i=s.call(e).tagName.toLowerCase();"pre"===i&&(t.preventDefault(),n.execCommand("insertHtml",null,"    ")),"li"===i&&(t.preventDefault(),t.shiftKey?n.execCommand("outdent",t):n.execCommand("indent",t))}}),this},buttonTemplate:function(t){var e=this.getButtonLabels(this.options.buttonLabels),n={bold:'<button class="medium-editor-action medium-editor-action-bold" data-action="bold" data-element="b">'+e.bold+"</button>",italic:'<button class="medium-editor-action medium-editor-action-italic" data-action="italic" data-element="i">'+e.italic+"</button>",underline:'<button class="medium-editor-action medium-editor-action-underline" data-action="underline" data-element="u">'+e.underline+"</button>",strikethrough:'<button class="medium-editor-action medium-editor-action-strikethrough" data-action="strikethrough" data-element="strike">'+e.strikethrough+"</button>",superscript:'<button class="medium-editor-action medium-editor-action-superscript" data-action="superscript" data-element="sup">'+e.superscript+"</button>",subscript:'<button class="medium-editor-action medium-editor-action-subscript" data-action="subscript" data-element="sub">'+e.subscript+"</button>",anchor:'<button class="medium-editor-action medium-editor-action-anchor" data-action="anchor" data-element="a">'+e.anchor+"</button>",image:'<button class="medium-editor-action medium-editor-action-image" data-action="image" data-element="img">'+e.image+"</button>",header1:'<button class="medium-editor-action medium-editor-action-header1" data-action="append-'+this.options.firstHeader+'" data-element="'+this.options.firstHeader+'">'+e.header1+"</button>",header2:'<button class="medium-editor-action medium-editor-action-header2" data-action="append-'+this.options.secondHeader+'" data-element="'+this.options.secondHeader+'">'+e.header2+"</button>",quote:'<button class="medium-editor-action medium-editor-action-quote" data-action="append-blockquote" data-element="blockquote">'+e.quote+"</button>",orderedlist:'<button class="medium-editor-action medium-editor-action-orderedlist" data-action="insertorderedlist" data-element="ol">'+e.orderedlist+"</button>",unorderedlist:'<button class="medium-editor-action medium-editor-action-unorderedlist" data-action="insertunorderedlist" data-element="ul">'+e.unorderedlist+"</button>",pre:'<button class="medium-editor-action medium-editor-action-pre" data-action="append-pre" data-element="pre">'+e.pre+"</button>",indent:'<button class="medium-editor-action medium-editor-action-indent" data-action="indent" data-element="ul">'+e.indent+"</button>",outdent:'<button class="medium-editor-action medium-editor-action-outdent" data-action="outdent" data-element="ul">'+e.outdent+"</button>",justifyCenter:'<button class="medium-editor-action medium-editor-action-justifyCenter" data-action="justifyCenter" data-element="">'+e.justifyCenter+"</button>",justifyFull:'<button class="medium-editor-action medium-editor-action-justifyFull" data-action="justifyFull" data-element="">'+e.justifyFull+"</button>",justifyLeft:'<button class="medium-editor-action medium-editor-action-justifyLeft" data-action="justifyLeft" data-element="">'+e.justifyLeft+"</button>",justifyRight:'<button class="medium-editor-action medium-editor-action-justifyRight" data-action="justifyRight" data-element="">'+e.justifyRight+"</button>"};return n[t]||!1},getButtonLabels:function(t){var e,n,i={bold:"<b>B</b>",italic:"<b><i>I</i></b>",underline:"<b><u>U</u></b>",strikethrough:"<s>A</s>",superscript:"<b>x<sup>1</sup></b>",subscript:"<b>x<sub>1</sub></b>",anchor:"<b>#</b>",image:"<b>image</b>",header1:"<b>H1</b>",header2:"<b>H2</b>",quote:"<b>&ldquo;</b>",orderedlist:"<b>1.</b>",unorderedlist:"<b>&bull;</b>",pre:"<b>0101</b>",indent:"<b>&rarr;</b>",outdent:"<b>&larr;</b>",justifyCenter:"<b>C</b>",justifyFull:"<b>J</b>",justifyLeft:"<b>L</b>",justifyRight:"<b>R</b>"};if("fontawesome"===t?e={bold:'<i class="fa fa-bold"></i>',italic:'<i class="fa fa-italic"></i>',underline:'<i class="fa fa-underline"></i>',strikethrough:'<i class="fa fa-strikethrough"></i>',superscript:'<i class="fa fa-superscript"></i>',subscript:'<i class="fa fa-subscript"></i>',anchor:'<i class="fa fa-link"></i>',image:'<i class="fa fa-picture-o"></i>',quote:'<i class="fa fa-quote-right"></i>',orderedlist:'<i class="fa fa-list-ol"></i>',unorderedlist:'<i class="fa fa-list-ul"></i>',pre:'<i class="fa fa-code fa-lg"></i>',indent:'<i class="fa fa-indent"></i>',outdent:'<i class="fa fa-outdent"></i>',justifyCenter:'<i class="fa fa-align-center"></i>',justifyFull:'<i class="fa fa-align-justify"></i>',justifyLeft:'<i class="fa fa-align-left"></i>',justifyRight:'<i class="fa fa-align-right"></i>'}:"object"==typeof t&&(e=t),"object"==typeof e)for(n in e)e.hasOwnProperty(n)&&(i[n]=e[n]);return i},initToolbar:function(){return this.toolbar?this:(this.toolbar=this.createToolbar(),this.keepToolbarAlive=!1,this.anchorForm=this.toolbar.querySelector(".medium-editor-toolbar-form-anchor"),this.anchorInput=this.anchorForm.querySelector("input.medium-editor-toolbar-anchor-input"),this.anchorTarget=this.anchorForm.querySelector("input.medium-editor-toolbar-anchor-target"),this.anchorButton=this.anchorForm.querySelector("input.medium-editor-toolbar-anchor-button"),this.toolbarActions=this.toolbar.querySelector(".medium-editor-toolbar-actions"),this.anchorPreview=this.createAnchorPreview(),this)},createToolbar:function(){var t=n.createElement("div");return t.id="medium-editor-toolbar-"+this.id,t.className="medium-editor-toolbar",t.appendChild(this.toolbarButtons()),t.appendChild(this.toolbarFormAnchor()),this.options.elementsContainer.appendChild(t),t},toolbarButtons:function(){var t,e,i,o,r=this.options.buttons,a=n.createElement("ul");for(a.id="medium-editor-toolbar-actions",a.className="medium-editor-toolbar-actions clearfix",e=0;e<r.length;e+=1)this.options.extensions.hasOwnProperty(r[e])?(o=this.options.extensions[r[e]],i=void 0!==o.getButton?o.getButton():null):i=this.buttonTemplate(r[e]),i&&(t=n.createElement("li"),l(i)?t.appendChild(i):t.innerHTML=i,a.appendChild(t));return a},toolbarFormAnchor:function(){var t=n.createElement("div"),e=n.createElement("input"),i=n.createElement("label"),o=n.createElement("input"),r=n.createElement("label"),a=n.createElement("input"),s=n.createElement("a"),c=n.createElement("a");return s.setAttribute("href","#"),s.className="medium-editor-toobar-anchor-close",s.innerHTML="&times;",c.setAttribute("href","#"),c.className="medium-editor-toobar-anchor-save",c.innerHTML="&#10003;",e.setAttribute("type","text"),e.className="medium-editor-toolbar-anchor-input",e.setAttribute("placeholder",this.options.anchorInputPlaceholder),o.setAttribute("type","checkbox"),o.className="medium-editor-toolbar-anchor-target",i.innerHTML="Open in New Window?",i.insertBefore(o,i.firstChild),a.setAttribute("type","checkbox"),a.className="medium-editor-toolbar-anchor-button",r.innerHTML="Button",r.insertBefore(a,r.firstChild),t.className="medium-editor-toolbar-form-anchor",t.id="medium-editor-toolbar-form-anchor",t.appendChild(e),t.appendChild(c),t.appendChild(s),this.options.anchorTarget&&t.appendChild(i),this.options.anchorButton&&t.appendChild(r),t},bindSelect:function(){var t,e=this,i="";for(this.checkSelectionWrapper=function(t){return t&&e.clickingIntoArchorForm(t)?!1:(clearTimeout(i),void(i=setTimeout(function(){e.checkSelection()},e.options.delay)))},this.on(n.documentElement,"mouseup",this.checkSelectionWrapper),t=0;t<this.elements.length;t+=1)this.on(this.elements[t],"keyup",this.checkSelectionWrapper),this.on(this.elements[t],"blur",this.checkSelectionWrapper);return this},checkSelection:function(){var t,e;return this.keepToolbarAlive===!0||this.options.disableToolbar||(t=this.options.contentWindow.getSelection(),""===t.toString().trim()||this.options.allowMultiParagraphSelection===!1&&this.hasMultiParagraphs()||this.selectionInContentEditableFalse()?this.hideToolbarActions():(e=this.getSelectionElement(),!e||e.getAttribute("data-disable-toolbar")?this.hideToolbarActions():this.checkSelectionElement(t,e))),this},clickingIntoArchorForm:function(t){var e=this;return t.type&&"blur"===t.type.toLowerCase()&&t.relatedTarget&&t.relatedTarget===e.anchorInput?!0:!1},hasMultiParagraphs:function(){var t=c.call(this).replace(/<[\S]+><\/[\S]+>/gim,""),e=t.match(/<(p|h[0-6]|blockquote)>([\s\S]*?)<\/(p|h[0-6]|blockquote)>/g);return e?e.length:0},checkSelectionElement:function(t,e){var n;for(this.selection=t,this.selectionRange=this.selection.getRangeAt(0),n=0;n<this.elements.length;n+=1)if(this.elements[n]===e)return void this.setToolbarButtonStates().setToolbarPosition().showToolbarActions();this.hideToolbarActions()},findMatchingSelectionParent:function(t){var e,n,i=this.options.contentWindow.getSelection();if(0===i.rangeCount)return!1;e=i.getRangeAt(0),n=e.commonAncestorContainer;do{if(1===n.nodeType){if(t(n))return n;if(n.getAttribute("data-medium-element"))return!1}n=n.parentNode}while(n);return!1},getSelectionElement:function(){return this.findMatchingSelectionParent(function(t){return t.getAttribute("data-medium-element")})},selectionInContentEditableFalse:function(){return this.findMatchingSelectionParent(function(t){return t&&"#text"!==t.nodeName&&"false"===t.getAttribute("contenteditable")})},setToolbarPosition:function(){var t=50,e=this.options.contentWindow.getSelection(),n=e.getRangeAt(0),i=n.getBoundingClientRect(),o=this.options.diffLeft-this.toolbar.offsetWidth/2,r=(i.left+i.right)/2,a=this.toolbar.offsetWidth/2;return i.top<t?(this.toolbar.classList.add("medium-toolbar-arrow-over"),this.toolbar.classList.remove("medium-toolbar-arrow-under"),this.toolbar.style.top=t+i.bottom-this.options.diffTop+this.options.contentWindow.pageYOffset-this.toolbar.offsetHeight+"px"):(this.toolbar.classList.add("medium-toolbar-arrow-under"),this.toolbar.classList.remove("medium-toolbar-arrow-over"),this.toolbar.style.top=i.top+this.options.diffTop+this.options.contentWindow.pageYOffset-this.toolbar.offsetHeight+"px"),this.toolbar.style.left=a>r?o+a+"px":this.options.contentWindow.innerWidth-r<a?this.options.contentWindow.innerWidth+o-a+"px":o+r+"px",this.hideAnchorPreview(),this},setToolbarButtonStates:function(){var t,e=this.toolbarActions.querySelectorAll("button");for(t=0;t<e.length;t+=1)e[t].classList.remove(this.options.activeButtonClass);return this.checkActiveButtons(),this},checkActiveButtons:function(){for(var t=Array.prototype.slice.call(this.elements),e=this.getSelectedParentElement();void 0!==e.tagName&&-1===this.parentElements.indexOf(e.tagName.toLowerCase)&&(this.activateButton(e.tagName.toLowerCase()),this.callExtensions("checkState",e),-1===t.indexOf(e));)e=e.parentNode},activateButton:function(t){var e=this.toolbar.querySelector('[data-element="'+t+'"]');null!==e&&-1===e.className.indexOf(this.options.activeButtonClass)&&(e.className+=" "+this.options.activeButtonClass)},bindButtons:function(){var t,e=this.toolbar.querySelectorAll("button"),n=this,i=function(t){t.preventDefault(),t.stopPropagation(),void 0===n.selection&&n.checkSelection(),this.className.indexOf(n.options.activeButtonClass)>-1?this.classList.remove(n.options.activeButtonClass):this.className+=" "+n.options.activeButtonClass,this.hasAttribute("data-action")&&n.execAction(this.getAttribute("data-action"),t)};for(t=0;t<e.length;t+=1)this.on(e[t],"click",i);return this.setFirstAndLastItems(e),this},setFirstAndLastItems:function(t){return t.length>0&&(t[0].className+=" "+this.options.firstButtonClass,t[t.length-1].className+=" "+this.options.lastButtonClass),this},execAction:function(t,e){t.indexOf("append-")>-1?(this.execFormatBlock(t.replace("append-","")),this.setToolbarPosition(),this.setToolbarButtonStates()):"anchor"===t?this.triggerAnchorAction(e):"image"===t?this.options.ownerDocument.execCommand("insertImage",!1,this.options.contentWindow.getSelection()):(this.options.ownerDocument.execCommand(t,!1,null),this.setToolbarPosition())},rangeSelectsSingleNode:function(t){var e=t.startContainer;return e===t.endContainer&&e.hasChildNodes()&&t.endOffset===t.startOffset+1},getSelectedParentElement:function(){var t=null,e=this.selectionRange;return t=this.rangeSelectsSingleNode(e)?e.startContainer.childNodes[e.startOffset]:3===e.startContainer.nodeType?e.startContainer.parentNode:e.startContainer},triggerAnchorAction:function(){var t=this.getSelectedParentElement();return t.tagName&&"a"===t.tagName.toLowerCase()?this.options.ownerDocument.execCommand("unlink",!1,null):"block"===this.anchorForm.style.display?this.showToolbarActions():this.showAnchorForm(),this},execFormatBlock:function(t){var e=this.getSelectionData(this.selection.anchorNode);if("blockquote"===t&&e.el&&"blockquote"===e.el.parentNode.tagName.toLowerCase())return this.options.ownerDocument.execCommand("outdent",!1,null);if(e.tagName===t&&(t="p"),this.isIE){if("blockquote"===t)return this.options.ownerDocument.execCommand("indent",!1,t);t="<"+t+">"}return this.options.ownerDocument.execCommand("formatBlock",!1,t)},getSelectionData:function(t){var e;for(t&&t.tagName&&(e=t.tagName.toLowerCase());t&&-1===this.parentElements.indexOf(e);)t=t.parentNode,t&&t.tagName&&(e=t.tagName.toLowerCase());return{el:t,tagName:e}},getFirstChild:function(t){for(var e=t.firstChild;null!==e&&1!==e.nodeType;)e=e.nextSibling;return e},hideToolbarActions:function(){this.keepToolbarAlive=!1,void 0!==this.toolbar&&this.toolbar.classList.remove("medium-editor-toolbar-active")},showToolbarActions:function(){var t,e=this;this.anchorForm.style.display="none",this.toolbarActions.style.display="block",this.keepToolbarAlive=!1,clearTimeout(t),t=setTimeout(function(){e.toolbar&&!e.toolbar.classList.contains("medium-editor-toolbar-active")&&e.toolbar.classList.add("medium-editor-toolbar-active")},100)},saveSelection:function(){this.savedSelection=r.call(this)},restoreSelection:function(){a.call(this,this.savedSelection)},showAnchorForm:function(t){this.toolbarActions.style.display="none",this.saveSelection(),this.anchorForm.style.display="block",this.setToolbarPosition(),this.keepToolbarAlive=!0,this.anchorInput.focus(),this.anchorInput.value=t||""},bindAnchorForm:function(){var t=this.anchorForm.querySelector("a.medium-editor-toobar-anchor-close"),e=this.anchorForm.querySelector("a.medium-editor-toobar-anchor-save"),n=this;return this.on(this.anchorForm,"click",function(t){t.stopPropagation(),n.keepToolbarAlive=!0}),this.on(this.anchorInput,"keyup",function(t){var e,i=null;13===t.keyCode&&(t.preventDefault(),e=n.options.anchorTarget&&n.anchorTarget.checked?"_blank":"_self",n.options.anchorButton&&n.anchorButton.checked&&(i=n.options.anchorButtonClass),n.createLink(this,e,i))}),this.on(e,"click",function(t){var e,i=null;t.preventDefault(),e=n.options.anchorTarget&&n.anchorTarget.checked?"_blank":"_self",n.options.anchorButton&&n.anchorButton.checked&&(i=n.options.anchorButtonClass),n.createLink(n.anchorInput,e,i)},!0),this.on(this.anchorInput,"click",function(t){t.stopPropagation(),n.keepToolbarAlive=!0}),this.on(this.options.ownerDocument.body,"click",function(t){t.target===n.anchorForm||o(n.anchorForm,t.target)||o(n.toolbarActions,t.target)||(n.keepToolbarAlive=!1,n.checkSelection())},!0),this.on(this.options.ownerDocument.body,"focus",function(t){t.target===n.anchorForm||o(n.anchorForm,t.target)||o(n.toolbarActions,t.target)||(n.keepToolbarAlive=!1,n.checkSelection())},!0),this.on(t,"click",function(t){t.preventDefault(),n.showToolbarActions(),a.call(n,n.savedSelection)}),this},hideAnchorPreview:function(){this.anchorPreview.classList.remove("medium-editor-anchor-preview-active")},showAnchorPreview:function(t){if(this.anchorPreview.classList.contains("medium-editor-anchor-preview-active")||t.getAttribute("data-disable-preview"))return!0;var e,n,i,o=this,r=40,a=t.getBoundingClientRect(),s=(a.left+a.right)/2;return o.anchorPreview.querySelector("i").textContent=t.href,e=o.anchorPreview.offsetWidth/2,n=o.options.diffLeft-e,clearTimeout(i),i=setTimeout(function(){o.anchorPreview&&!o.anchorPreview.classList.contains("medium-editor-anchor-preview-active")&&o.anchorPreview.classList.add("medium-editor-anchor-preview-active")},100),o.observeAnchorPreview(t),o.anchorPreview.classList.add("medium-toolbar-arrow-over"),o.anchorPreview.classList.remove("medium-toolbar-arrow-under"),o.anchorPreview.style.top=Math.round(r+a.bottom-o.options.diffTop+this.options.contentWindow.pageYOffset-o.anchorPreview.offsetHeight)+"px",o.anchorPreview.style.left=e>s?n+e+"px":this.options.contentWindow.innerWidth-s<e?this.options.contentWindow.innerWidth+n-e+"px":n+s+"px",this},observeAnchorPreview:function(t){var e=this,n=(new Date).getTime(),i=!0,o=function(){n=(new Date).getTime(),i=!0},r=function(t){t.relatedTarget&&/anchor-preview/.test(t.relatedTarget.className)||(i=!1)},a=setInterval(function(){if(i)return!0;var s=(new Date).getTime()-n;s>e.options.anchorPreviewHideDelay&&(e.hideAnchorPreview(),clearInterval(a),e.off(e.anchorPreview,"mouseover",o),e.off(e.anchorPreview,"mouseout",r),e.off(t,"mouseover",o),e.off(t,"mouseout",r))},200);this.on(e.anchorPreview,"mouseover",o),this.on(e.anchorPreview,"mouseout",r),this.on(t,"mouseover",o),this.on(t,"mouseout",r)},createAnchorPreview:function(){var t=this,e=this.options.ownerDocument.createElement("div");return e.id="medium-editor-anchor-preview-"+this.id,e.className="medium-editor-anchor-preview",e.innerHTML=this.anchorPreviewTemplate(),this.options.elementsContainer.appendChild(e),this.on(e,"click",function(){t.anchorPreviewClickHandler()}),e},anchorPreviewTemplate:function(){return'<div class="medium-editor-toolbar-anchor-preview" id="medium-editor-toolbar-anchor-preview">    <i class="medium-editor-toolbar-anchor-preview-inner"></i></div>'},anchorPreviewClickHandler:function(){if(this.activeAnchor){var t=this,e=this.options.ownerDocument.createRange(),n=this.options.contentWindow.getSelection();e.selectNodeContents(t.activeAnchor),n.removeAllRanges(),n.addRange(e),setTimeout(function(){t.activeAnchor&&t.showAnchorForm(t.activeAnchor.href),t.keepToolbarAlive=!1},100+t.options.delay)}this.hideAnchorPreview()},editorAnchorObserver:function(t){var e=this,n=!0,i=function(){n=!1,e.off(e.activeAnchor,"mouseout",i)};if(t.target&&"a"===t.target.tagName.toLowerCase()){if(!/href=["']\S+["']/.test(t.target.outerHTML)||/href=["']#\S+["']/.test(t.target.outerHTML))return!0;if(this.toolbar.classList.contains("medium-editor-toolbar-active"))return!0;this.activeAnchor=t.target,this.on(this.activeAnchor,"mouseout",i),setTimeout(function(){n&&e.showAnchorPreview(t.target)},e.options.delay)}},bindAnchorPreview:function(){var t,e=this;for(this.editorAnchorObserverWrapper=function(t){e.editorAnchorObserver(t)},t=0;t<this.elements.length;t+=1)this.on(this.elements[t],"mouseover",this.editorAnchorObserverWrapper);return this},checkLinkFormat:function(t){var e=/^(https?|ftps?|rtmpt?):\/\/|mailto:/;return(e.test(t)?"":"http://")+t},setTargetBlank:function(t){var e;if(t=t||s.call(this),"a"===t.tagName.toLowerCase())t.target="_blank";else for(t=t.getElementsByTagName("a"),e=0;e<t.length;e+=1)t[e].target="_blank"},setButtonClass:function(t){var e,n,i=s.call(this),o=t.split(" ");if("a"===i.tagName.toLowerCase())for(n=0;n<o.length;n+=1)i.classList.add(o[n]);else for(i=i.getElementsByTagName("a"),e=0;e<i.length;e+=1)for(n=0;n<o.length;n+=1)i[e].classList.add(o[n])},createLink:function(t,e,n){var i,o;if(0===t.value.trim().length)return void this.hideToolbarActions();if(a.call(this,this.savedSelection),this.options.checkLinkFormat&&(t.value=this.checkLinkFormat(t.value)),this.options.ownerDocument.execCommand("createLink",!1,t.value),(this.options.targetBlank||"_blank"===e)&&this.setTargetBlank(),n&&this.setButtonClass(n),this.options.targetBlank||"_blank"===e||n)for(o=this.options.ownerDocument.createEvent("HTMLEvents"),o.initEvent("input",!0,!0,this.options.contentWindow),i=0;i<this.elements.length;i+=1)this.elements[i].dispatchEvent(o);this.checkSelection(),this.showToolbarActions(),t.value=""},bindWindowActions:function(){var t,e=this;return this.windowResizeHandler=function(){clearTimeout(t),t=setTimeout(function(){e.toolbar&&e.toolbar.classList.contains("medium-editor-toolbar-active")&&e.setToolbarPosition()},100)},this.on(this.options.contentWindow,"resize",this.windowResizeHandler),this},activate:function(){this.isActive||this.setup()},deactivate:function(){var t;if(this.isActive){for(this.isActive=!1,void 0!==this.toolbar&&(this.options.elementsContainer.removeChild(this.anchorPreview),this.options.elementsContainer.removeChild(this.toolbar),delete this.toolbar,delete this.anchorPreview),t=0;t<this.elements.length;t+=1)this.elements[t].removeAttribute("contentEditable"),this.elements[t].removeAttribute("data-medium-element");this.removeAllEvents()}},htmlEntities:function(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},bindPaste:function(){var t,e=this;for(this.pasteWrapper=function(t){var n,i,o="";if(this.classList.remove("medium-editor-placeholder"),!e.options.forcePlainText&&!e.options.cleanPastedHTML)return this;if(t.clipboardData&&t.clipboardData.getData&&!t.defaultPrevented){if(t.preventDefault(),e.options.cleanPastedHTML&&t.clipboardData.getData("text/html"))return e.cleanPaste(t.clipboardData.getData("text/html"));if(e.options.disableReturn||this.getAttribute("data-disable-return"))o=e.htmlEntities(t.clipboardData.getData("text/plain")),e.options.ownerDocument.execCommand("insertHTML",!1,o);else{for(n=t.clipboardData.getData("text/plain").split(/[\r\n]/g),i=0;i<n.length;i+=1)""!==n[i]&&(o+=navigator.userAgent.match(/firefox/i)&&0===i?e.htmlEntities(n[i]):"<p>"+e.htmlEntities(n[i])+"</p>");e.options.ownerDocument.execCommand("insertHTML",!1,o)}}},t=0;t<this.elements.length;t+=1)this.on(this.elements[t],"paste",this.pasteWrapper);return this},setPlaceholders:function(){var t,e=function(t){t.querySelector("img")||t.querySelector("blockquote")||""!==t.textContent.replace(/^\s+|\s+$/g,"")||t.classList.add("medium-editor-placeholder")},n=function(t){this.classList.remove("medium-editor-placeholder"),"keypress"!==t.type&&e(this)};for(t=0;t<this.elements.length;t+=1)e(this.elements[t]),this.on(this.elements[t],"blur",n),this.on(this.elements[t],"keypress",n);return this},cleanPaste:function(t){var e,n,i,o=this.getSelectionElement(),r=/<p|<br|<div/.test(t),a=[[new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi),""],[new RegExp(/<\/b>(<br[^>]*>)?$/gi),""],[new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g)," "],[new RegExp(/<br class="Apple-interchange-newline">/g),"<br>"],[new RegExp(/<span[^>]*(font-style:italic;font-weight:bold|font-weight:bold;font-style:italic)[^>]*>/gi),'<span class="replace-with italic bold">'],[new RegExp(/<span[^>]*font-style:italic[^>]*>/gi),'<span class="replace-with italic">'],[new RegExp(/<span[^>]*font-weight:bold[^>]*>/gi),'<span class="replace-with bold">'],[new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi),"<$1$2>"],[new RegExp(/&lt;a\s+href=(&quot;|&rdquo;|&ldquo;|“|”)([^&]+)(&quot;|&rdquo;|&ldquo;|“|”)&gt;/gi),'<a href="$2">']];for(e=0;e<a.length;e+=1)t=t.replace(a[e][0],a[e][1]);if(r)for(n=t.split("<br><br>"),this.pasteHTML("<p>"+n.join("</p><p>")+"</p>"),this.options.ownerDocument.execCommand("insertText",!1,"\n"),n=o.querySelectorAll("a,p,div,br"),e=0;e<n.length;e+=1)switch(i=n[e],i.tagName.toLowerCase()){case"a":this.options.targetBlank&&this.setTargetBlank(i);break;case"p":case"div":this.filterCommonBlocks(i);break;case"br":this.filterLineBreak(i)}else this.pasteHTML(t)},pasteHTML:function(t){var e,n,i,o,r=this.options.ownerDocument.createDocumentFragment();for(r.appendChild(this.options.ownerDocument.createElement("body")),o=r.querySelector("body"),o.innerHTML=t,this.cleanupSpans(o),e=o.querySelectorAll("*"),i=0;i<e.length;i+=1)n=e[i],n.removeAttribute("class"),n.removeAttribute("style"),n.removeAttribute("dir"),"meta"===n.tagName.toLowerCase()&&n.parentNode.removeChild(n);this.options.ownerDocument.execCommand("insertHTML",!1,o.innerHTML.replace(/&nbsp;/g," "))},isCommonBlock:function(t){return t&&("p"===t.tagName.toLowerCase()||"div"===t.tagName.toLowerCase())},filterCommonBlocks:function(t){/^\s*$/.test(t.innerText)&&t.parentNode.removeChild(t)},filterLineBreak:function(t){this.isCommonBlock(t.previousElementSibling)?t.parentNode.removeChild(t):!this.isCommonBlock(t.parentNode)||t.parentNode.firstChild!==t&&t.parentNode.lastChild!==t?1===t.parentNode.childElementCount&&this.removeWithParent(t):t.parentNode.removeChild(t)
},removeWithParent:function(t){t&&t.parentNode&&(t.parentNode.parentNode&&1===t.parentNode.childElementCount?t.parentNode.parentNode.removeChild(t.parentNode):t.parentNode.removeChild(t.parentNode))},cleanupSpans:function(t){var e,n,i,o=t.querySelectorAll(".replace-with");for(e=0;e<o.length;e+=1)n=o[e],i=this.options.ownerDocument.createElement(n.classList.contains("bold")?"b":"i"),i.innerHTML=n.classList.contains("bold")&&n.classList.contains("italic")?"<i>"+n.innerHTML+"</i>":n.innerHTML,n.parentNode.replaceChild(i,n);for(o=t.querySelectorAll("span"),e=0;e<o.length;e+=1)n=o[e],/^\s*$/.test()?n.parentNode.removeChild(n):n.parentNode.replaceChild(this.options.ownerDocument.createTextNode(n.innerText),n)}}}(window,document)},63:function(){}});
//# sourceMappingURL=medium.js.map