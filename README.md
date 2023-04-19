<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' b:templateUrl='rockpool.xml' b:templateVersion='1.3.3' expr:dir='data:blog.languageDirection' expr:lang='data:blog.locale' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
  <head>
    <meta content='width=device-width, initial-scale=1' name='viewport'/>
    <title><data:view.title.escaped/></title>
    <b:include data='blog' name='all-head-content'/>

    <b:skin version='1.3.3'><![CDATA[/*! normalize.css v3.0.1 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}
/*
<!-- Constants -->

<Variable name="loraNormal20" description="Item body font" type="font" default="400 20px Lora, serif" hideEditor="true"  value="400 20px Lora, serif"/>
<Variable name="openSansNormal14" description="Small-size normal-weight font (eg: labels, subscribe popup email)" type="font" default="400 14px Open Sans, sans-serif" hideEditor="true"  value="400 14px Open Sans, sans-serif"/>
<Variable name="openSansNormal16" description="Medium-size normal-weight font (eg: sidebar titles)" type="font" default="400 16px Open Sans, sans-serif" hideEditor="true"  value="400 16px Open Sans, sans-serif"/>
<Variable name="openSansNormal20" description="Item body font, OpenSans" type="font" default="400 20px Open Sans, serif" hideEditor="true"  value="400 20px Open Sans, serif"/>
<Variable name="openSansSemibold14" description="Button font" type="font" default="600 14px Open Sans, sans-serif" hideEditor="true"  value="600 14px Open Sans, sans-serif"/>
<Variable name="openSansSemiboldItalic36" description="Open Sans semibold italic 36" type="font" default="italic 600 36px Open Sans, sans-serif" hideEditor="true"  value="italic 600 36px Open Sans, sans-serif"/>
<Variable name="openSansSemiboldItalic44" description="Blockquote font, Open Sans" type="font" default="italic 600 44px Open Sans, sans-serif" hideEditor="true"  value="italic 600 44px Open Sans, sans-serif"/>
<Variable name="openSansSemibold16" description="Subtitle font (eg: author attribution)" type="font" default="600 16px Open Sans, sans-serif" hideEditor="true"  value="600 16px Open Sans, sans-serif"/>
<Variable name="openSansSemibold48" description="Open Sans semibold 48" type="font" default="600 48px Open Sans, sans-serif" hideEditor="true"  value="600 48px Open Sans, sans-serif"/>
<Variable name="openSansBold16" description="Main blog title font" type="font" default="700 16px Open Sans, sans-serif" hideEditor="true"  value="700 16px Open Sans, sans-serif"/>
<Variable name="openSansBold24" description="Medium-size bold font (eg: subscribe popup title)" type="font" default="700 24px Open Sans, sans-serif" hideEditor="true"  value="700 24px Open Sans, sans-serif"/>
<Variable name="openSansBold36" description="Title font (eg: regular post title)" type="font" default="700 36px Open Sans, sans-serif" hideEditor="true"  value="700 36px Open Sans, sans-serif"/>
<Variable name="openSansExtraboldItalic24" description="Open Sans Extrabold italic 24" type="font" default="italic 800 24px Open Sans, sans-serif" hideEditor="true"  value="italic 800 24px Open Sans, sans-serif"/>
<Variable name="openSansExtraboldItalic40" description="Open Sans Extrabold italic 40" type="font" default="italic 800 40px Open Sans, sans-serif" hideEditor="true"  value="italic 800 40px Open Sans, sans-serif"/>
<Variable name="openSansExtraboldItalic48" description="Open Sans Extrabold italic 48" type="font" default="italic 800 48px Open Sans, sans-serif" hideEditor="true"  value="italic 800 48px Open Sans, sans-serif"/>
<Variable name="ebGaramondNormal14" description="Blog Description font, EB Garamond" type="font" default="400 14px EB Garamond, serif" hideEditor="true"  value="400 14px EB Garamond, serif"/>
<Variable name="ebGaramondNormal24" description="EB Garamond Normal 24" type="font" default="400 24px EB Garamond, serif" hideEditor="true"  value="400 24px EB Garamond, serif"/>
<Variable name="ebGaramondNormal44" description="Title font (eg: regular post title), EB Garamond" type="font" default="400 44px EB Garamond, serif" hideEditor="true"  value="400 44px EB Garamond, serif"/>
<Variable name="ebGaramondNormal48" description="EB Garamond Normal 48" type="font" default="400 48px EB Garamond, sans-serif" hideEditor="true"  value="400 48px EB Garamond, sans-serif"/>
<Variable name="ebGaramondSemiboldItalic44" description="Blockquote font, EB Garamond" type="font" default="italic 600 44px EB Garamond, serif" hideEditor="true"  value="italic 600 44px EB Garamond, serif"/>
<Variable name="latoNormal14" description="Lato Normal 14" type="font" default="400 14px Lato, sans-serif" hideEditor="true"  value="400 14px Lato, sans-serif"/>
<Variable name="latoNormal16" description="Lato Normal 16" type="font" default="400 16px Lato, sans-serif" hideEditor="true"  value="400 16px Lato, sans-serif"/>
<Variable name="latoNormal20" description="Lato Normal 20" type="font" default="400 20px Lato, sans-serif" hideEditor="true"  value="400 20px Lato, sans-serif"/>
<Variable name="latoBold14" description="Lato Bold 14" type="font" default="700 14px Lato, sans-serif" hideEditor="true"  value="700 14px Lato, sans-serif"/>
<Variable name="latoBold16" description="Lato Bold 16" type="font" default="700 16px Lato, sans-serif" hideEditor="true"  value="700 16px Lato, sans-serif"/>
<Variable name="latoBold24" description="Lato Bold 24" type="font" default="700 24px Lato, sans-serif" hideEditor="true"  value="700 24px Lato, sans-serif"/>
<Variable name="latoBold36" description="Lato Bold 36" type="font" default="700 36px Lato, sans-serif" hideEditor="true"  value="700 36px Lato, sans-serif"/>
<Variable name="latoBold48" description="Lato Bold 48" type="font" default="700 48px Lato, sans-serif" hideEditor="true"  value="700 48px Lato, sans-serif"/>
<Variable name="latoBoldItalic36" description="Lato Bold italic 36" type="font" default="italic 700 36px Lato, sans-serif" hideEditor="true"  value="italic 700 36px Lato, sans-serif"/>
<Variable name="latoExtrabold24" description="Lato Extrabold 24" type="font" default="900 24px Lato, sans-serif" hideEditor="true"  value="900 24px Lato, sans-serif"/>
<Variable name="dancingScriptNormal36" description="Dancing Script 36" type="font" default="400 36px Dancing Script, cursive" hideEditor="true"  value="400 36px Dancing Script, cursive"/>
<Variable name="dancingScriptNormal44" description="Dancing Script 44" type="font" default="400 44px Dancing Script, cursive" hideEditor="true"  value="400 44px Dancing Script, cursive"/>
<Variable name="dancingScriptNormal48" description="Dancing Script 48" type="font" default="400 48px Dancing Script, cursive" hideEditor="true"  value="400 48px Dancing Script, cursive"/>

<Variable name="keycolor" description="Main Color" type="color" default="#e5f0ee" hideEditor="true"  value="#ff7357"/>
<Variable name="startSide" description="Start side in blog language" type="automatic" default="left" hideEditor="true" />
<Variable name="endSide" description="End side in blog language" type="automatic" default="right" hideEditor="true" />

<!-- Variable definitions -->

<Group description="Body">
  <Variable name="body.background" description="Background" color="$(body.background.color)" type="background" default="$(color) none repeat scroll top left"  value="$(color) none repeat scroll top left"/>
  <Variable name="body.background.color" description="Body background color" type="color" default="#fff"  value="#1a1a1a"/>
  <Variable name="body.text.font" description="Font" type="font" default="$(loraNormal20)"  value="400 20px Lora, serif"/>
  <Variable name="body.text.color" description="Color" type="color" default="#292929"  value="#ffffff"/>
  <Variable name="body.link.color" description="Link color" type="color" default="#25a186"  value="#ff7357"/>
  <Variable name="body.link.visited.color" description="Visited link color" type="color" default="$(body.link.color)"  value="#ff7357"/>
  <Variable name="body.link.hover.color" description="Link Hover Color" type="color" default="$(body.link.color)"  value="#ff7357"/>
  <Variable name="blog.title.font" description="Blog Title Font" type="font" default="$(openSansBold24)"  value="italic 800 24px Open Sans, sans-serif"/>
  <Variable name="blog.title.color" description="Blog Title Color" type="color" default="#000"  value="#ffffff"/>
</Group>

<Group description="Featured post" selector=".heroPost">
  <Variable name="heropost.main.background.color" description="Featured post main background color" type="color" default="#25a186"  value="#ff7357"/>
  <Variable name="heropost.main.title.color" description="Featured post main title color" type="color" default="#fff"  value="#2b2b2b"/>
  <Variable name="heropost.main.text.color" description="Featured post main text color" type="color" default="#fff"  value="#2b2b2b"/>
  <Variable name="heropost.main.button.color" description="Featured post main buttons color" type="color" default="#fff"  value="#2b2b2b"/>
  <Variable name="heropost.main.link.color" description="Featured post main link color" type="color" default="#173752"  value="#3c4885"/>
  <Variable name="heropost.secondary.background.color" description="Featured post background color (secondary)" type="color" default="#e5f0ee"  value="#2b2b2b"/>
  <Variable name="heropost.secondary.text.color" description="Featured post text color (secondary)" type="color" default="#000"  value="#ffffff"/>
  <Variable name="heropost.secondary.button.color" description="Featured post buttons color (secondary)" type="color" default="#25a186"  value="#ff7357"/>
  <Variable name="heropost.secondary.dropcap.color" description="Featured post drop cap color (secondary)" type="color" default="$(heropost.secondary.button.color)"  value="#ff7357"/>
</Group>

<Group description="Header" selector=".centered-top-container">
  <Variable name="header.background" description="Header Background" color="$(header.background.color)" type="background" default="$(color) none repeat scroll top left"  value="$(color) none repeat scroll top left"/>
  <Variable name="header.background.color" description="Background color" type="color" default="#fff"  value="#1a1a1a"/>
  <Variable name="header.description.font" description="Description font" type="font" default="$(openSansNormal14)"  value="400 14px Open Sans, sans-serif"/>
  <Variable name="header.description.color" description="Description Color" type="color" default="rgba(0,0,0,0.54)"  value="#cccccc"/>
  <Variable name="header.pages.color" description="Page list color" type="color" default="#25a186"  value="#ff7357"/>
  <Variable name="header.pages.selected.color" description="Page list color (selected page)" type="color" default="$(header.pages.color)"  value="#ff7357"/>
  <Variable name="header.items.color" description="Text color" type="color" default="#25a186"  value="#ff7357"/>
  <Variable name="header.items.font" description="Text font" type="font" default="$(openSansSemibold14)"  value="600 14px Open Sans, sans-serif"/>
</Group>

<Group description="Search">
  <Variable name="search.input.font" description="Input font" type="font" default="$(openSansSemibold16)"  value="600 16px Open Sans, sans-serif"/>
</Group>

<Group description="Feed" selector=".widget.Blog">
  <Variable name="feed.title.font" description="Post title font" type="font" default="$(openSansBold36)"  value="italic 800 40px Open Sans, sans-serif"/>
  <Variable name="feed.title.color" description="Post title color" type="color" default="#25a186"  value="#ff7357"/>
  <Variable name="feed.subtitle.font" description="Post subtitle font" type="font" default="$(openSansSemibold16)"  value="600 16px Open Sans, sans-serif"/>
  <Variable name="feed.subtitle.color" description="Post subtitle color" type="color" default="rgba(0,0,0,0.54)"  value="#cccccc"/>
  <Variable name="feed.text.font" description="Post text font" type="font" default="$(loraNormal20)"  value="400 20px Lora, serif"/>
  <Variable name="feed.text.color" description="Post text color" type="color" default="rgba(0,0,0,0.84)"  value="#ffffff"/>
  <Variable name="feed.button.font" description="Button font" type="font" default="$(openSansSemibold14)"  value="600 14px Open Sans, sans-serif"/>
  <Variable name="feed.button.color" description="Button color" type="color" default="#25a186"  value="#ff7357"/>
</Group>

<Group description="Sharing" selector=".sharing">
  <Variable name="sharing.background.color"
      description="Sharing background color"
      type="color"
      default="$(body.background.color)"  value="#1a1a1a"/>
  <Variable name="sharing.text.color" description="Sharing text color"
      type="color"
      default="$(feed.button.color)"  value="#ff7357"/>
  <Variable name="sharing.icons.color"
      description="Sharing icons color"
      type="color"
      default="$(sharing.text.color)"  value="#ff7357"/>
</Group>

<Group description="Dialogs" selector=".subscribe-popup">
  <Variable name="dialog.title.font" description="Dialog title font" type="font" default="$(openSansBold24)"  value="700 24px Open Sans, sans-serif"/>
  <Variable name="dialog.title.color" description="Dialog title color" type="color" default="rgba(0,0,0,0.84)"  value="#ffffff"/>
  <Variable name="dialog.input.font" description="Dialog input font" type="font" default="$(openSansNormal14)"  value="400 14px Open Sans, sans-serif"/>
  <Variable name="dialog.input.color" description="Dialog input color" type="color" default="rgba(0,0,0,0.84)"  value="#ffffff"/>
  <Variable name="dialog.action.font" description="Dialog action font" type="font" default="$(openSansSemibold14)"  value="600 14px Open Sans, sans-serif"/>
  <Variable name="dialog.action.color" description="Dialog action color" type="color" default="$(feed.button.color)"  value="#ff7357"/>
</Group>

<Group description="Individual Post or Page" selector="body.item-page .widget.Blog">
  <Variable name="item.title.font" description="Font" type="font" default="$(openSansSemibold48)"  value="italic 800 48px Open Sans, sans-serif"/>
  <Variable name="item.title.color" description="Post title color" type="color" default="#fff"  value="#2b2b2b"/>
  <Variable name="item.title.background.color" description="Post title background color" type="color" default="#25a186"  value="#ff7357"/>
  <Variable name="item.subtitle.font" description="Post subtitle font" type="font" default="$(openSansSemibold16)"  value="600 16px Open Sans, sans-serif"/>
  <Variable name="item.subtitle.color" description="Post subtitle color" type="color" default="rgba(0,0,0,0.54)"  value="#cccccc"/>
  <Variable name="item.byline.color" description="Post byline color" type="color" default="#25a186"  value="#25a186"/>
  <Variable name="item.byline.font" description="Post byline font" type="font" default="$(openSansSemibold14)"  value="600 14px Open Sans, sans-serif"/>
  <Variable name="item.action.color" description="Action color" type="color" default="#25a186"  value="#ff7357"/>
  <Variable name="item.action.font" description="Action font" type="font" default="$(openSansSemibold14)"  value="600 14px Open Sans, sans-serif"/>
  <Variable name="item.label.font" description="Label font" type="font" default="$(openSansNormal14)"  value="400 14px Open Sans, sans-serif"/>
  <Variable name="item.blockquote.font" description="Blockquote font" type="font" default="$(openSansSemiboldItalic44)"  value="italic 600 36px Open Sans, sans-serif"/>
</Group>

<Group description="Sidebar" selector=".sidebar-container">
  <Variable name="sidebar.backgroundColor" description="Background color" type="color" default="$(body.background.color)"  value="#1a1a1a"/>
  <Variable name="sidebar.icon.color" description="Icon color" type="color" default="#000"  value="#ffffff"/>
  <Variable name="sidebar.separator.color" description="Separator color" type="color" default="#000"  value="#000000"/>
  <Variable name="sidebar.widget.title.font" description="Gadget title font" type="font" default="$(openSansNormal16)"  value="400 16px Open Sans, sans-serif"/>
  <Variable name="sidebar.widget.title.color" description="Gadget title color" type="color" default="#000"  value="#ff7357"/>
  <Variable name="sidebar.profile.title.color" description="Profile name color" type="color" default="#000"  value="#ff7357"/>
  <Variable name="sidebar.profile.text.color" description="Profile description color" type="color" default="#000"  value="#ffffff"/>
  <Variable name="sidebar.profile.link.font" description="Profile link font" type="font" default="$(openSansSemibold16)"  value="600 16px Open Sans, sans-serif"/>
  <Variable name="sidebar.profile.link.color" description="Profile link color" type="color" default="$(body.link.color)"  value="#ff7357"/>
</Group>


<Variable name="attribution.text.font" description="Attribution text font" type="font" default="$(openSansSemibold14)" hideEditor="true"  value="600 14px Open Sans, sans-serif"/>
<Variable name="attribution.icon.color" description="Attribution icon color" type="color" default="rgba(0,0,0,0.54)" hideEditor="true"  value="rgba(255, 255, 255, 0.54)"/>

<Group description="Widths">
  <Variable name="sidebar.width" description="Sidebar width" type="length" min="100px" max="1000px" default="320px"  value="320px"/>
  <Variable name="feed.width" description="Content width" type="length" min="860px" max="1440px" default="1280px"  value="1280px"/>
</Group>
 */

body{
overflow-wrap:break-word;
word-break:break-word;
word-wrap:break-word
}
.hidden{
display:none
}
.invisible{
visibility:hidden
}
.container::after,.float-container::after{
clear:both;
content:"";
display:table
}
.clearboth{
clear:both
}
#comments .comment .comment-actions,.subscribe-popup .FollowByEmail .follow-by-email-submit,.widget.Profile .profile-link{
background:0 0;
border:0;
box-shadow:none;
color:$(body.link.color);
cursor:pointer;
font-size:14px;
font-weight:700;
outline:0;
text-decoration:none;
text-transform:uppercase;
width:auto
}
.dim-overlay{
background-color:rgba(0,0,0,.54);
height:100vh;
left:0;
position:fixed;
top:0;
width:100%
}
#sharing-dim-overlay{
background-color:transparent
}
input::-ms-clear{
display:none
}
.blogger-logo,.svg-icon-24.blogger-logo{
fill:#ff9800;
opacity:1
}
.loading-spinner-large{
-webkit-animation:mspin-rotate 1.568s infinite linear;
animation:mspin-rotate 1.568s infinite linear;
height:48px;
overflow:hidden;
position:absolute;
width:48px;
z-index:200
}
.loading-spinner-large>div{
-webkit-animation:mspin-revrot 5332ms infinite steps(4);
animation:mspin-revrot 5332ms infinite steps(4)
}
.loading-spinner-large>div>div{
-webkit-animation:mspin-singlecolor-large-film 1333ms infinite steps(81);
animation:mspin-singlecolor-large-film 1333ms infinite steps(81);
background-size:100%;
height:48px;
width:3888px
}
.mspin-black-large>div>div,.mspin-grey_54-large>div>div{
background-image:url(https://www.blogblog.com/indie/mspin_black_large.svg)
}
.mspin-white-large>div>div{
background-image:url(https://www.blogblog.com/indie/mspin_white_large.svg)
}
.mspin-grey_54-large{
opacity:.54
}
@-webkit-keyframes mspin-singlecolor-large-film{
from{
-webkit-transform:translateX(0);
transform:translateX(0)
}
to{
-webkit-transform:translateX(-3888px);
transform:translateX(-3888px)
}
}
@keyframes mspin-singlecolor-large-film{
from{
-webkit-transform:translateX(0);
transform:translateX(0)
}
to{
-webkit-transform:translateX(-3888px);
transform:translateX(-3888px)
}
}
@-webkit-keyframes mspin-rotate{
from{
-webkit-transform:rotate(0);
transform:rotate(0)
}
to{
-webkit-transform:rotate(360deg);
transform:rotate(360deg)
}
}
@keyframes mspin-rotate{
from{
-webkit-transform:rotate(0);
transform:rotate(0)
}
to{
-webkit-transform:rotate(360deg);
transform:rotate(360deg)
}
}
@-webkit-keyframes mspin-revrot{
from{
-webkit-transform:rotate(0);
transform:rotate(0)
}
to{
-webkit-transform:rotate(-360deg);
transform:rotate(-360deg)
}
}
@keyframes mspin-revrot{
from{
-webkit-transform:rotate(0);
transform:rotate(0)
}
to{
-webkit-transform:rotate(-360deg);
transform:rotate(-360deg)
}
}
.skip-navigation{
background-color:#fff;
box-sizing:border-box;
color:#000;
display:block;
height:0;
left:0;
line-height:50px;
overflow:hidden;
padding-top:0;
position:fixed;
text-align:center;
top:0;
-webkit-transition:box-shadow .3s,height .3s,padding-top .3s;
transition:box-shadow .3s,height .3s,padding-top .3s;
width:100%;
z-index:900
}
.skip-navigation:focus{
box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);
height:50px
}
#main{
outline:0
}
.main-heading{
position:absolute;
clip:rect(1px,1px,1px,1px);
padding:0;
border:0;
height:1px;
width:1px;
overflow:hidden
}
.Attribution{
margin-top:1em;
text-align:center
}
.Attribution .blogger img,.Attribution .blogger svg{
vertical-align:bottom
}
.Attribution .blogger img{
margin-$endSide:.5em
}
.Attribution div{
line-height:24px;
margin-top:.5em
}
.Attribution .copyright,.Attribution .image-attribution{
font-size:.7em;
margin-top:1.5em
}
.BLOG_mobile_video_class{
display:none
}
.bg-photo{
background-attachment:scroll!important
}
body .CSS_LIGHTBOX{
z-index:900
}
.extendable .show-less,.extendable .show-more{
border-color:$(body.link.color);
color:$(body.link.color);
margin-top:8px
}
.extendable .show-less.hidden,.extendable .show-more.hidden{
display:none
}
.inline-ad{
display:none;
max-width:100%;
overflow:hidden
}
.adsbygoogle{
display:block
}
#cookieChoiceInfo{
bottom:0;
top:auto
}
iframe.b-hbp-video{
border:0
}
.post-body img{
max-width:100%
}
.post-body iframe{
max-width:100%
}
.post-body a[imageanchor="1"]{
display:inline-block
}
.byline{
margin-$endSide:1em
}
.byline:last-child{
margin-$endSide:0
}
.link-copied-dialog{
max-width:520px;
outline:0
}
.link-copied-dialog .modal-dialog-buttons{
margin-top:8px
}
.link-copied-dialog .goog-buttonset-default{
background:0 0;
border:0
}
.link-copied-dialog .goog-buttonset-default:focus{
outline:0
}
.paging-control-container{
margin-bottom:16px
}
.paging-control-container .paging-control{
display:inline-block
}
.paging-control-container .comment-range-text::after,.paging-control-container .paging-control{
color:$(body.link.color)
}
.paging-control-container .comment-range-text,.paging-control-container .paging-control{
margin-$endSide:8px
}
.paging-control-container .comment-range-text::after,.paging-control-container .paging-control::after{
content:"\b7";
cursor:default;
padding-$startSide:8px;
pointer-events:none
}
.paging-control-container .comment-range-text:last-child::after,.paging-control-container .paging-control:last-child::after{
content:none
}
.byline.reactions iframe{
height:20px
}
.b-notification{
color:#000;
background-color:#fff;
border-bottom:solid 1px #000;
box-sizing:border-box;
padding:16px 32px;
text-align:center
}
.b-notification.visible{
-webkit-transition:margin-top .3s cubic-bezier(.4,0,.2,1);
transition:margin-top .3s cubic-bezier(.4,0,.2,1)
}
.b-notification.invisible{
position:absolute
}
.b-notification-close{
position:absolute;
right:8px;
top:8px
}
.no-posts-message{
line-height:40px;
text-align:center
}
@media screen and (max-width:968px){
body.item-view .post-body a[imageanchor="1"][style*="float: left;"],body.item-view .post-body a[imageanchor="1"][style*="float: right;"]{
float:none!important;
clear:none!important
}
body.item-view .post-body a[imageanchor="1"] img{
display:block;
height:auto;
margin:0 auto
}
body.item-view .post-body>.separator:first-child>a[imageanchor="1"]:first-child{
margin-top:20px
}
.post-body a[imageanchor]{
display:block
}
body.item-view .post-body a[imageanchor="1"]{
margin-left:0!important;
margin-right:0!important
}
body.item-view .post-body a[imageanchor="1"]+a[imageanchor="1"]{
margin-top:16px
}
}
.item-control{
display:none
}
#comments{
border-top:1px dashed rgba(0,0,0,.54);
margin-top:20px;
padding:20px
}
#comments .comment-thread ol{
margin:0;
padding-left:0;
padding-$startSide:0
}
#comments .comment .comment-replybox-single,#comments .comment-thread .comment-replies{
margin-left:60px
}
#comments .comment-thread .thread-count{
display:none
}
#comments .comment{
list-style-type:none;
padding:0 0 30px;
position:relative
}
#comments .comment .comment{
padding-bottom:8px
}
.comment .avatar-image-container{
position:absolute
}
.comment .avatar-image-container img{
border-radius:50%
}
.avatar-image-container svg,.comment .avatar-image-container .avatar-icon{
border-radius:50%;
border:solid 1px $(item.action.color);
box-sizing:border-box;
fill:$(item.action.color);
height:35px;
margin:0;
padding:7px;
width:35px
}
.comment .comment-block{
margin-top:10px;
margin-$startSide:60px;
padding-bottom:0
}
#comments .comment-author-header-wrapper{
margin-left:40px
}
#comments .comment .thread-expanded .comment-block{
padding-bottom:20px
}
#comments .comment .comment-header .user,#comments .comment .comment-header .user a{
color:$(body.text.color);
font-style:normal;
font-weight:700
}
#comments .comment .comment-actions{
bottom:0;
margin-bottom:15px;
position:absolute
}
#comments .comment .comment-actions>*{
margin-right:8px
}
#comments .comment .comment-header .datetime{
bottom:0;
color:$(item.subtitle.color);
display:inline-block;
font-size:13px;
font-style:italic;
margin-$startSide:8px
}
#comments .comment .comment-footer .comment-timestamp a,#comments .comment .comment-header .datetime a{
color:$(item.subtitle.color)
}
#comments .comment .comment-content,.comment .comment-body{
margin-top:12px;
word-break:break-word
}
.comment-body{
margin-bottom:12px
}
#comments.embed[data-num-comments="0"]{
border:0;
margin-top:0;
padding-top:0
}
#comments.embed[data-num-comments="0"] #comment-post-message,#comments.embed[data-num-comments="0"] div.comment-form>p,#comments.embed[data-num-comments="0"] p.comment-footer{
display:none
}
#comment-editor-src{
display:none
}
.comments .comments-content .loadmore.loaded{
max-height:0;
opacity:0;
overflow:hidden
}
.extendable .remaining-items{
height:0;
overflow:hidden;
-webkit-transition:height .3s cubic-bezier(.4,0,.2,1);
transition:height .3s cubic-bezier(.4,0,.2,1)
}
.extendable .remaining-items.expanded{
height:auto
}
.svg-icon-24,.svg-icon-24-button{
cursor:pointer;
height:24px;
width:24px;
min-width:24px
}
.touch-icon{
margin:-12px;
padding:12px
}
.touch-icon:active,.touch-icon:focus{
background-color:rgba(153,153,153,.4);
border-radius:50%
}
svg:not(:root).touch-icon{
overflow:visible
}
html[dir=rtl] .rtl-reversible-icon{
-webkit-transform:scaleX(-1);
-ms-transform:scaleX(-1);
transform:scaleX(-1)
}
.svg-icon-24-button,.touch-icon-button{
background:0 0;
border:0;
margin:0;
outline:0;
padding:0
}
.touch-icon-button .touch-icon:active,.touch-icon-button .touch-icon:focus{
background-color:transparent
}
.touch-icon-button:active .touch-icon,.touch-icon-button:focus .touch-icon{
background-color:rgba(153,153,153,.4);
border-radius:50%
}
.Profile .default-avatar-wrapper .avatar-icon{
border-radius:50%;
border:solid 1px $(sidebar.icon.color);
box-sizing:border-box;
fill:$(sidebar.icon.color);
margin:0
}
.Profile .individual .default-avatar-wrapper .avatar-icon{
padding:25px
}
.Profile .individual .avatar-icon,.Profile .individual .profile-img{
height:120px;
width:120px
}
.Profile .team .default-avatar-wrapper .avatar-icon{
padding:8px
}
.Profile .team .avatar-icon,.Profile .team .default-avatar-wrapper,.Profile .team .profile-img{
height:40px;
width:40px
}
.snippet-container{
margin:0;
position:relative;
overflow:hidden
}
.snippet-fade{
bottom:0;
box-sizing:border-box;
position:absolute;
width:96px
}
.snippet-fade{
$endSide:0
}
.snippet-fade:after{
content:"\2026"
}
.snippet-fade:after{
float:$endSide
}
.post-bottom{
-webkit-box-align:center;
-webkit-align-items:center;
-ms-flex-align:center;
align-items:center;
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-flex-wrap:wrap;
-ms-flex-wrap:wrap;
flex-wrap:wrap
}
.post-footer{
-webkit-box-flex:1;
-webkit-flex:1 1 auto;
-ms-flex:1 1 auto;
flex:1 1 auto;
-webkit-flex-wrap:wrap;
-ms-flex-wrap:wrap;
flex-wrap:wrap;
-webkit-box-ordinal-group:2;
-webkit-order:1;
-ms-flex-order:1;
order:1
}
.post-footer>*{
-webkit-box-flex:0;
-webkit-flex:0 1 auto;
-ms-flex:0 1 auto;
flex:0 1 auto
}
.post-footer .byline:last-child{
margin-$endSide:1em
}
.jump-link{
-webkit-box-flex:0;
-webkit-flex:0 0 auto;
-ms-flex:0 0 auto;
flex:0 0 auto;
-webkit-box-ordinal-group:3;
-webkit-order:2;
-ms-flex-order:2;
order:2
}
.centered-top-container.sticky{
left:0;
position:fixed;
right:0;
top:0;
width:auto;
z-index:8;
-webkit-transition-property:opacity,-webkit-transform;
transition-property:opacity,-webkit-transform;
transition-property:transform,opacity;
transition-property:transform,opacity,-webkit-transform;
-webkit-transition-duration:.2s;
transition-duration:.2s;
-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);
transition-timing-function:cubic-bezier(.4,0,.2,1)
}
.centered-top-placeholder{
display:none
}
.collapsed-header .centered-top-placeholder{
display:block
}
.centered-top-container .Header .replaced h1,.centered-top-placeholder .Header .replaced h1{
display:none
}
.centered-top-container.sticky .Header .replaced h1{
display:block
}
.centered-top-container.sticky .Header .header-widget{
background:0 0
}
.centered-top-container.sticky .Header .header-image-wrapper{
display:none
}
.centered-top-container img,.centered-top-placeholder img{
max-width:100%
}
.collapsible{
-webkit-transition:height .3s cubic-bezier(.4,0,.2,1);
transition:height .3s cubic-bezier(.4,0,.2,1)
}
.collapsible,.collapsible>summary{
display:block;
overflow:hidden
}
.collapsible>:not(summary){
display:none
}
.collapsible[open]>:not(summary){
display:block
}
.collapsible:focus,.collapsible>summary:focus{
outline:0
}
.collapsible>summary{
cursor:pointer;
display:block;
padding:0
}
.collapsible:focus>summary,.collapsible>summary:focus{
background-color:transparent
}
.collapsible>summary::-webkit-details-marker{
display:none
}
.collapsible-title{
-webkit-box-align:center;
-webkit-align-items:center;
-ms-flex-align:center;
align-items:center;
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex
}
.collapsible-title .title{
-webkit-box-flex:1;
-webkit-flex:1 1 auto;
-ms-flex:1 1 auto;
flex:1 1 auto;
-webkit-box-ordinal-group:1;
-webkit-order:0;
-ms-flex-order:0;
order:0;
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap
}
.collapsible-title .chevron-down,.collapsible[open] .collapsible-title .chevron-up{
display:block
}
.collapsible-title .chevron-up,.collapsible[open] .collapsible-title .chevron-down{
display:none
}
.overflowable-container{
max-height:$(header.items.font.size * 12 / 7 + 24px);
overflow:hidden;
position:relative
}
.overflow-button{
cursor:pointer
}
#overflowable-dim-overlay{
background:0 0
}
.overflow-popup{
box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
background-color:$(body.background.color);
left:0;
max-width:calc(100% - 32px);
position:absolute;
top:0;
visibility:hidden;
z-index:101
}
.overflow-popup ul{
list-style:none
}
.overflow-popup .tabs li,.overflow-popup li{
display:block;
height:auto
}
.overflow-popup .tabs li{
padding-left:0;
padding-right:0
}
.overflow-button.hidden,.overflow-popup .tabs li.hidden,.overflow-popup li.hidden{
display:none
}
.ripple{
position:relative
}
.ripple>*{
z-index:1
}
.splash-wrapper{
bottom:0;
left:0;
overflow:hidden;
pointer-events:none;
position:absolute;
right:0;
top:0;
z-index:0
}
.splash{
background:#ccc;
border-radius:100%;
display:block;
opacity:.6;
position:absolute;
-webkit-transform:scale(0);
-ms-transform:scale(0);
transform:scale(0)
}
.splash.animate{
-webkit-animation:ripple-effect .4s linear;
animation:ripple-effect .4s linear
}
@-webkit-keyframes ripple-effect{
100%{
opacity:0;
-webkit-transform:scale(2.5);
transform:scale(2.5)
}
}
@keyframes ripple-effect{
100%{
opacity:0;
-webkit-transform:scale(2.5);
transform:scale(2.5)
}
}
.search{
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
line-height:24px;
width:24px
}
.search.focused{
width:100%
}
.search.focused .section{
width:100%
}
.search form{
z-index:101
}
.search h3{
display:none
}
.search form{
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-box-flex:1;
-webkit-flex:1 0 0;
-ms-flex:1 0 0px;
flex:1 0 0;
border-bottom:solid 1px transparent;
padding-bottom:8px
}
.search form>*{
display:none
}
.search.focused form>*{
display:block
}
.search .search-input label{
display:none
}
.centered-top-placeholder.cloned .search form{
z-index:30
}
.search.focused form{
border-color:$(body.text.color);
position:relative;
width:auto
}
.collapsed-header .centered-top-container .search.focused form{
border-bottom-color:transparent
}
.search-expand{
-webkit-box-flex:0;
-webkit-flex:0 0 auto;
-ms-flex:0 0 auto;
flex:0 0 auto
}
.search-expand-text{
display:none
}
.search-close{
display:inline;
vertical-align:middle
}
.search-input{
-webkit-box-flex:1;
-webkit-flex:1 0 1px;
-ms-flex:1 0 1px;
flex:1 0 1px
}
.search-input input{
background:0 0;
border:0;
box-sizing:border-box;
color:$(body.text.color);
display:inline-block;
outline:0;
width:calc(100% - 48px)
}
.search-input input.no-cursor{
color:transparent;
text-shadow:0 0 0 $(body.text.color)
}
.collapsed-header .centered-top-container .search-action,.collapsed-header .centered-top-container .search-input input{
color:$(body.text.color)
}
.collapsed-header .centered-top-container .search-input input.no-cursor{
color:transparent;
text-shadow:0 0 0 $(body.text.color)
}
.collapsed-header .centered-top-container .search-input input.no-cursor:focus,.search-input input.no-cursor:focus{
outline:0
}
.search-focused>*{
visibility:hidden
}
.search-focused .search,.search-focused .search-icon{
visibility:visible
}
.search.focused .search-action{
display:block
}
.search.focused .search-action:disabled{
opacity:.3
}
.sidebar-container{
background-color:#f7f7f7;
max-width:$(sidebar.width);
overflow-y:auto;
-webkit-transition-property:-webkit-transform;
transition-property:-webkit-transform;
transition-property:transform;
transition-property:transform,-webkit-transform;
-webkit-transition-duration:.3s;
transition-duration:.3s;
-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);
transition-timing-function:cubic-bezier(0,0,.2,1);
width:$(sidebar.width);
z-index:101;
-webkit-overflow-scrolling:touch
}
.sidebar-container .navigation{
line-height:0;
padding:16px
}
.sidebar-container .sidebar-back{
cursor:pointer
}
.sidebar-container .widget{
background:0 0;
margin:0 16px;
padding:16px 0
}
.sidebar-container .widget .title{
color:$(sidebar.widget.title.color);
margin:0
}
.sidebar-container .widget ul{
list-style:none;
margin:0;
padding:0
}
.sidebar-container .widget ul ul{
margin-$startSide:1em
}
.sidebar-container .widget li{
font-size:16px;
line-height:normal
}
.sidebar-container .widget+.widget{
border-top:1px dashed $(sidebar.separator.color)
}
.BlogArchive li{
margin:16px 0
}
.BlogArchive li:last-child{
margin-bottom:0
}
.Label li a{
display:inline-block
}
.BlogArchive .post-count,.Label .label-count{
float:$endSide;
margin-$startSide:.25em
}
.BlogArchive .post-count::before,.Label .label-count::before{
content:"("
}
.BlogArchive .post-count::after,.Label .label-count::after{
content:")"
}
.widget.Translate .skiptranslate>div{
display:block!important
}
.widget.Profile .profile-link{
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex
}
.widget.Profile .team-member .default-avatar-wrapper,.widget.Profile .team-member .profile-img{
-webkit-box-flex:0;
-webkit-flex:0 0 auto;
-ms-flex:0 0 auto;
flex:0 0 auto;
margin-$endSide:1em
}
.widget.Profile .individual .profile-link{
-webkit-box-orient:vertical;
-webkit-box-direction:normal;
-webkit-flex-direction:column;
-ms-flex-direction:column;
flex-direction:column
}
.widget.Profile .team .profile-link .profile-name{
-webkit-align-self:center;
-ms-flex-item-align:center;
align-self:center;
display:block;
-webkit-box-flex:1;
-webkit-flex:1 1 auto;
-ms-flex:1 1 auto;
flex:1 1 auto
}
.dim-overlay{
background-color:rgba(0,0,0,.54);
z-index:100
}
body.sidebar-visible{
overflow-y:hidden
}
@media screen and (max-width:$(feed.width + sidebar.width + 20px - 1px)){
.sidebar-container{
bottom:0;
position:fixed;
top:0;
left:auto;
right:0
}
.sidebar-container.sidebar-invisible{
-webkit-transition-timing-function:cubic-bezier(.4,0,.6,1);
transition-timing-function:cubic-bezier(.4,0,.6,1);
-webkit-transform:translateX($(sidebar.width));
-ms-transform:translateX($(sidebar.width));
transform:translateX($(sidebar.width))
}
}
.dialog{
box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
background:$(body.background.color);
box-sizing:border-box;
color:$(body.text.color);
padding:30px;
position:fixed;
text-align:center;
width:calc(100% - 24px);
z-index:101
}
.dialog input[type=email],.dialog input[type=text]{
background-color:transparent;
border:0;
border-bottom:solid 1px rgba($(body.text.color.red),$(body.text.color.green),$(body.text.color.blue),.12);
color:$(body.text.color);
display:block;
font-family:$(body.text.font.family);
font-size:16px;
line-height:24px;
margin:auto;
padding-bottom:7px;
outline:0;
text-align:center;
width:100%
}
.dialog input[type=email]::-webkit-input-placeholder,.dialog input[type=text]::-webkit-input-placeholder{
color:$(body.text.color)
}
.dialog input[type=email]::-moz-placeholder,.dialog input[type=text]::-moz-placeholder{
color:$(body.text.color)
}
.dialog input[type=email]:-ms-input-placeholder,.dialog input[type=text]:-ms-input-placeholder{
color:$(body.text.color)
}
.dialog input[type=email]::-ms-input-placeholder,.dialog input[type=text]::-ms-input-placeholder{
color:$(body.text.color)
}
.dialog input[type=email]::placeholder,.dialog input[type=text]::placeholder{
color:$(body.text.color)
}
.dialog input[type=email]:focus,.dialog input[type=text]:focus{
border-bottom:solid 2px $(body.link.color);
padding-bottom:6px
}
.dialog input.no-cursor{
color:transparent;
text-shadow:0 0 0 $(body.text.color)
}
.dialog input.no-cursor:focus{
outline:0
}
.dialog input.no-cursor:focus{
outline:0
}
.dialog input[type=submit]{
font-family:$(body.text.font.family)
}
.dialog .goog-buttonset-default{
color:$(body.link.color)
}
.subscribe-popup{
max-width:364px
}
.subscribe-popup h3{
color:$(item.title.color);
font-size:1.8em;
margin-top:0
}
.subscribe-popup .FollowByEmail h3{
display:none
}
.subscribe-popup .FollowByEmail .follow-by-email-submit{
color:$(body.link.color);
display:inline-block;
margin:0 auto;
margin-top:24px;
width:auto;
white-space:normal
}
.subscribe-popup .FollowByEmail .follow-by-email-submit:disabled{
cursor:default;
opacity:.3
}
@media (max-width:800px){
.blog-name div.widget.Subscribe{
margin-bottom:16px
}
body.item-view .blog-name div.widget.Subscribe{
margin:8px auto 16px auto;
width:100%
}
}
body#layout .bg-photo,body#layout .bg-photo-overlay{
display:none
}
body#layout .page_body{
padding:0;
position:relative;
top:0
}
body#layout .page{
display:inline-block;
left:inherit;
position:relative;
vertical-align:top;
width:540px
}
body#layout .centered{
max-width:954px
}
body#layout .navigation{
display:none
}
body#layout .sidebar-container{
display:inline-block;
width:40%
}
body#layout .hamburger-menu,body#layout .search{
display:none
}
.widget.Sharing .sharing-button{
display:none
}
.widget.Sharing .sharing-buttons li{
padding:0
}
.widget.Sharing .sharing-buttons li span{
display:none
}
.post-share-buttons{
position:relative
}
.centered-bottom .share-buttons .svg-icon-24,.share-buttons .svg-icon-24{
fill:$(sharing.icons.color)
}
.sharing-open.touch-icon-button:active .touch-icon,.sharing-open.touch-icon-button:focus .touch-icon{
background-color:transparent
}
.share-buttons{
background-color:$(sharing.background.color);
border-radius:2px;
box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
color:$(sharing.text.color);
list-style:none;
margin:0;
padding:8px 0;
position:absolute;
top:-11px;
min-width:200px;
z-index:101
}
.share-buttons.hidden{
display:none
}
.sharing-button{
background:0 0;
border:0;
margin:0;
outline:0;
padding:0;
cursor:pointer
}
.share-buttons li{
margin:0;
height:48px
}
.share-buttons li:last-child{
margin-bottom:0
}
.share-buttons li .sharing-platform-button{
box-sizing:border-box;
cursor:pointer;
display:block;
height:100%;
margin-bottom:0;
padding:0 16px;
position:relative;
width:100%
}
.share-buttons li .sharing-platform-button:focus,.share-buttons li .sharing-platform-button:hover{
background-color:rgba(128,128,128,.1);
outline:0
}
.share-buttons li svg[class*=" sharing-"],.share-buttons li svg[class^=sharing-]{
position:absolute;
top:10px
}
.share-buttons li span.sharing-platform-button{
position:relative;
top:0
}
.share-buttons li .platform-sharing-text{
display:block;
font-size:16px;
line-height:48px;
white-space:nowrap
}
.share-buttons li .platform-sharing-text{
margin-$startSide:56px
}
.flat-button{
cursor:pointer;
display:inline-block;
font-weight:700;
text-transform:uppercase;
border-radius:2px;
padding:8px;
margin:-8px
}
.flat-icon-button{
background:0 0;
border:0;
margin:0;
outline:0;
padding:0;
margin:-12px;
padding:12px;
cursor:pointer;
box-sizing:content-box;
display:inline-block;
line-height:0
}
.flat-icon-button,.flat-icon-button .splash-wrapper{
border-radius:50%
}
.flat-icon-button .splash.animate{
-webkit-animation-duration:.3s;
animation-duration:.3s
}
h1,h2,h3,h4,h5,h6{
margin:0
}
.post-body h1,.post-body h2,.post-body h3,.post-body h4,.post-body h5,.post-body h6{
margin:1em 0
}
.action-link,a{
color:$(body.link.color);
cursor:pointer;
text-decoration:none
}
.action-link:visited,a:visited{
color:$(body.link.visited.color)
}
.action-link:hover,a:hover{
color:$(body.link.hover.color)
}
body{
background-color:$(body.background.color);
color:$(body.text.color);
font:$(body.text.font);
margin:0 auto
}
.unused{
background:$(body.background)
}
.dim-overlay{
z-index:100
}
.all-container{
min-height:100vh;
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-box-orient:vertical;
-webkit-box-direction:normal;
-webkit-flex-direction:column;
-ms-flex-direction:column;
flex-direction:column
}
body.sidebar-visible .all-container{
overflow-y:scroll
}
.page{
max-width:$(feed.width);
width:100%
}
.Blog{
padding:0;
padding-$startSide:136px
}
.main_content_container{
-webkit-box-flex:0;
-webkit-flex:0 0 auto;
-ms-flex:0 0 auto;
flex:0 0 auto;
margin:0 auto;
max-width:$(feed.width + sidebar.width);
width:100%
}
.centered-top-container{
-webkit-box-flex:0;
-webkit-flex:0 0 auto;
-ms-flex:0 0 auto;
flex:0 0 auto
}
.centered-top,.centered-top-placeholder{
box-sizing:border-box;
width:100%
}
.centered-top{
box-sizing:border-box;
margin:0 auto;
max-width:$(feed.width);
padding:44px 136px 32px 136px;
width:100%
}
.centered-top h3{
color:$(header.description.color);
font:$(header.items.font)
}
.centered{
width:100%
}
.centered-top-firstline{
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
position:relative;
width:100%
}
.main_header_elements{
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-box-flex:0;
-webkit-flex:0 1 auto;
-ms-flex:0 1 auto;
flex:0 1 auto;
-webkit-box-ordinal-group:2;
-webkit-order:1;
-ms-flex-order:1;
order:1;
overflow-x:hidden;
width:100%
}
html[dir=rtl] .main_header_elements{
-webkit-box-ordinal-group:3;
-webkit-order:2;
-ms-flex-order:2;
order:2
}
body.search-view .centered-top.search-focused .blog-name{
display:none
}
.widget.Header img{
max-width:100%
}
.blog-name{
-webkit-box-flex:1;
-webkit-flex:1 1 auto;
-ms-flex:1 1 auto;
flex:1 1 auto;
min-width:0;
-webkit-box-ordinal-group:2;
-webkit-order:1;
-ms-flex-order:1;
order:1;
-webkit-transition:opacity .2s cubic-bezier(.4,0,.2,1);
transition:opacity .2s cubic-bezier(.4,0,.2,1)
}
.subscribe-section-container{
-webkit-box-flex:0;
-webkit-flex:0 0 auto;
-ms-flex:0 0 auto;
flex:0 0 auto;
-webkit-box-ordinal-group:3;
-webkit-order:2;
-ms-flex-order:2;
order:2
}
.search{
-webkit-box-flex:0;
-webkit-flex:0 0 auto;
-ms-flex:0 0 auto;
flex:0 0 auto;
-webkit-box-ordinal-group:4;
-webkit-order:3;
-ms-flex-order:3;
order:3;
line-height:$(blog.title.font.size)
}
.search svg{
margin-bottom:$(blog.title.font.size / 2 - 12px);
margin-top:$(blog.title.font.size / 2 - 12px);
padding-bottom:0;
padding-top:0
}
.search,.search.focused{
display:block;
width:auto
}
.search .section{
opacity:0;
position:absolute;
right:0;
top:0;
-webkit-transition:opacity .2s cubic-bezier(.4,0,.2,1);
transition:opacity .2s cubic-bezier(.4,0,.2,1)
}
.search-expand{
background:0 0;
border:0;
margin:0;
outline:0;
padding:0;
display:block
}
.search.focused .search-expand{
visibility:hidden
}
.hamburger-menu{
float:right;
height:$(blog.title.font.size)
}
.search-expand,.subscribe-section-container{
margin-$startSide:44px
}
.hamburger-section{
-webkit-box-flex:1;
-webkit-flex:1 0 auto;
-ms-flex:1 0 auto;
flex:1 0 auto;
margin-left:44px;
-webkit-box-ordinal-group:3;
-webkit-order:2;
-ms-flex-order:2;
order:2
}
html[dir=rtl] .hamburger-section{
-webkit-box-ordinal-group:2;
-webkit-order:1;
-ms-flex-order:1;
order:1
}
.search-expand-icon{
display:none
}
.search-expand-text{
display:block
}
.search-input{
width:100%
}
.search-focused .hamburger-section{
visibility:visible
}
.centered-top-secondline .PageList ul{
margin:0;
max-height:$(header.items.font.size * 12 / 7 * 6 + 144px);
overflow-y:hidden
}
.centered-top-secondline .PageList li{
margin-$endSide:30px
}
.centered-top-secondline .PageList li:first-child a{
padding-$startSide:0
}
.centered-top-secondline .PageList .overflow-popup ul{
overflow-y:auto
}
.centered-top-secondline .PageList .overflow-popup li{
display:block
}
.centered-top-secondline .PageList .overflow-popup li.hidden{
display:none
}
.overflowable-contents li{
display:inline-block;
height:$(header.items.font.size * 12 / 7 + 24px)
}
.sticky .blog-name{
overflow:hidden
}
.sticky .blog-name .widget.Header h1{
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap
}
.sticky .blog-name .widget.Header p,.sticky .centered-top-secondline{
display:none
}
.centered-top-container,.centered-top-placeholder{
background:$(header.background)
}
.centered-top .svg-icon-24{
fill:$(header.items.color)
}
.blog-name h1,.blog-name h1 a{
color:$(blog.title.color);
font:$(blog.title.font);
line-height:$(blog.title.font.size);
text-transform:uppercase
}
.widget.Header .header-widget p{
font:$(header.description.font);
font-style:italic;
color:$(header.description.color);
line-height:1.6;
max-width:$(feed.width - 604px)
}
.centered-top .flat-button{
color:$(header.items.color);
cursor:pointer;
font:$(header.items.font);
line-height:$(blog.title.font.size);
text-transform:uppercase;
-webkit-transition:opacity .2s cubic-bezier(.4,0,.2,1);
transition:opacity .2s cubic-bezier(.4,0,.2,1)
}
.subscribe-button{
background:0 0;
border:0;
margin:0;
outline:0;
padding:0;
display:block
}
html[dir=ltr] .search form{
margin-right:12px
}
.search.focused .section{
opacity:1;
margin-right:36px;
width:calc(100% - 36px)
}
.search input{
border:0;
color:$(header.description.color);
font:$(search.input.font);
line-height:$(blog.title.font.size);
outline:0;
width:100%
}
.search form{
padding-bottom:0
}
.search input[type=submit]{
display:none
}
.search input::-webkit-input-placeholder{
text-transform:uppercase
}
.search input::-moz-placeholder{
text-transform:uppercase
}
.search input:-ms-input-placeholder{
text-transform:uppercase
}
.search input::-ms-input-placeholder{
text-transform:uppercase
}
.search input::placeholder{
text-transform:uppercase
}
.centered-top-secondline .dim-overlay,.search .dim-overlay{
background:0 0
}
.centered-top-secondline .PageList .overflow-button a,.centered-top-secondline .PageList li a{
color:$(header.pages.color);
font:$(header.items.font);
line-height:$(header.items.font.size * 12 / 7 + 24px);
padding:12px
}
.centered-top-secondline .PageList li.selected a{
color:$(header.pages.selected.color)
}
.centered-top-secondline .overflow-popup .PageList li a{
color:$(body.text.color)
}
.PageList ul{
padding:0
}
.sticky .search form{
border:0
}
.sticky{
box-shadow:0 0 20px 0 rgba(0,0,0,.7)
}
.sticky .centered-top{
padding-bottom:0;
padding-top:0
}
.sticky .blog-name h1,.sticky .search,.sticky .search-expand,.sticky .subscribe-button{
line-height:$(blog.title.font.size + 16px)
}
.sticky .hamburger-section,.sticky .search-expand,.sticky .search.focused .search-submit{
-webkit-box-align:center;
-webkit-align-items:center;
-ms-flex-align:center;
align-items:center;
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
height:$(blog.title.font.size + 16px)
}
.subscribe-popup h3{
color:$(dialog.title.color);
font:$(dialog.title.font);
margin-bottom:24px
}
.subscribe-popup div.widget.FollowByEmail .follow-by-email-address{
color:$(dialog.input.color);
font:$(dialog.input.font)
}
.subscribe-popup div.widget.FollowByEmail .follow-by-email-submit{
color:$(dialog.action.color);
font:$(dialog.action.font);
margin-top:24px
}
.post-content{
-webkit-box-flex:0;
-webkit-flex:0 1 auto;
-ms-flex:0 1 auto;
flex:0 1 auto;
-webkit-box-ordinal-group:2;
-webkit-order:1;
-ms-flex-order:1;
order:1;
margin-$endSide:76px;
max-width:$(feed.width - 604px);
width:100%
}
.post-filter-message{
background-color:$(body.link.color);
color:$(body.background.color);
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
font:$(feed.subtitle.font);
margin:40px 136px 48px 136px;
padding:10px;
position:relative
}
.post-filter-message>*{
-webkit-box-flex:0;
-webkit-flex:0 0 auto;
-ms-flex:0 0 auto;
flex:0 0 auto
}
.post-filter-message .search-query{
font-style:italic;
quotes:"\201c" "\201d" "\2018" "\2019"
}
.post-filter-message .search-query::before{
content:open-quote
}
.post-filter-message .search-query::after{
content:close-quote
}
.post-filter-message div{
display:inline-block
}
.post-filter-message a{
color:$(body.background.color);
display:inline-block;
text-transform:uppercase
}
.post-filter-description{
-webkit-box-flex:1;
-webkit-flex:1 1 auto;
-ms-flex:1 1 auto;
flex:1 1 auto;
margin-$endSide:16px
}
.post-title{
margin-top:0
}
body.feed-view .post-outer-container{
margin-top:85px
}
body.feed-view .feed-message+.post-outer-container,body.feed-view .post-outer-container:first-child{
margin-top:0
}
.post-outer{
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
position:relative
}
.post-outer .snippet-thumbnail{
-webkit-box-align:center;
-webkit-align-items:center;
-ms-flex-align:center;
align-items:center;
background:#000;
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-box-flex:0;
-webkit-flex:0 0 auto;
-ms-flex:0 0 auto;
flex:0 0 auto;
height:256px;
-webkit-box-pack:center;
-webkit-justify-content:center;
-ms-flex-pack:center;
justify-content:center;
margin-$endSide:136px;
overflow:hidden;
-webkit-box-ordinal-group:3;
-webkit-order:2;
-ms-flex-order:2;
order:2;
position:relative;
width:256px
}
.post-outer .thumbnail-empty{
background:0 0
}
.post-outer .snippet-thumbnail-img{
background-position:center;
background-repeat:no-repeat;
background-size:cover;
width:100%;
height:100%
}
.post-outer .snippet-thumbnail img{
max-height:100%
}
.post-title-container{
margin-bottom:16px
}
.post-bottom{
-webkit-box-align:baseline;
-webkit-align-items:baseline;
-ms-flex-align:baseline;
align-items:baseline;
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-box-pack:justify;
-webkit-justify-content:space-between;
-ms-flex-pack:justify;
justify-content:space-between
}
.post-share-buttons-bottom{
float:left
}
.footer{
-webkit-box-flex:0;
-webkit-flex:0 0 auto;
-ms-flex:0 0 auto;
flex:0 0 auto;
margin:auto auto 0 auto;
padding-bottom:32px;
width:auto
}
.post-header-container{
margin-bottom:12px
}
.post-header-container .post-share-buttons-top{
float:right
}
.post-header-container .post-header{
float:$startSide
}
.byline{
display:inline-block;
margin-bottom:8px
}
.byline,.byline a,.flat-button{
color:$(feed.button.color);
font:$(feed.button.font)
}
.flat-button.ripple .splash{
background-color:rgba($(feed.button.color.red),$(feed.button.color.green),$(feed.button.color.blue),.4)
}
.flat-button.ripple:hover{
background-color:rgba($(feed.button.color.red),$(feed.button.color.green),$(feed.button.color.blue),.12)
}
.post-footer .byline{
text-transform:uppercase
}
.post-comment-link{
line-height:1
}
.blog-pager{
float:$endSide;
margin-$endSide:468px;
margin-top:48px
}
.FeaturedPost{
margin-bottom:56px
}
.FeaturedPost h3{
margin:16px 136px 8px 136px
}
.shown-ad{
margin-bottom:85px;
margin-top:85px
}
.shown-ad .inline-ad{
display:block;
max-width:$(feed.width - 604px)
}
body.feed-view .shown-ad:last-child{
display:none
}
.post-title,.post-title a{
color:$(feed.title.color);
font:$(feed.title.font);
line-height:1.3333333333
}
.feed-message{
color:$(feed.subtitle.color);
font:$(feed.subtitle.font);
margin-bottom:52px
}
.post-header-container .byline,.post-header-container .byline a{
color:$(feed.subtitle.color);
font:$(feed.subtitle.font)
}
.post-header-container .byline.post-author:not(:last-child)::after{
content:"\b7"
}
.post-header-container .byline.post-author:not(:last-child){
margin-$endSide:0
}
.post-snippet-container{
font:$(feed.text.font)
}
.sharing-button{
text-transform:uppercase;
word-break:normal
}
.post-outer-container .svg-icon-24{
fill:$(feed.button.color)
}
.post-body{
color:$(feed.text.color);
font:$(feed.text.font);
line-height:2;
margin-bottom:24px
}
.blog-pager .blog-pager-older-link{
color:$(feed.button.color);
float:right;
font:$(feed.button.font);
text-transform:uppercase
}
.no-posts-message{
margin:32px
}
body.item-view .Blog .post-title-container{
background-color:$(item.title.background.color);
box-sizing:border-box;
margin-bottom:-1px;
padding-bottom:86px;
padding-$endSide:290px;
padding-$startSide:140px;
padding-top:124px;
width:100%
}
body.item-view .Blog .post-title,body.item-view .Blog .post-title a{
color:$(item.title.color);
font:$(item.title.font);
line-height:1.4166666667;
margin-bottom:0
}
body.item-view .Blog{
margin:0;
margin-bottom:85px;
padding:0
}
body.item-view .Blog .post-content{
margin-$endSide:0;
max-width:none
}
body.item-view .comments,body.item-view .shown-ad,body.item-view .widget.Blog .post-bottom{
margin-bottom:0;
margin-$endSide:400px;
margin-$startSide:140px;
margin-top:0
}
body.item-view .widget.Header header p{
max-width:$(feed.width - 540px)
}
body.item-view .shown-ad{
margin-bottom:24px;
margin-top:24px
}
body.item-view .Blog .post-header-container{
padding-$startSide:140px
}
body.item-view .Blog .post-header-container .post-author-profile-pic-container{
background-color:$(item.title.background.color);
border-top:1px solid $(item.title.background.color);
float:$startSide;
height:84px;
margin-$endSide:24px;
margin-$startSide:-140px;
padding-$startSide:140px
}
body.item-view .Blog .post-author-profile-pic{
max-height:100%
}
body.item-view .Blog .post-header{
float:$startSide;
height:84px
}
body.item-view .Blog .post-header>*{
position:relative;
top:50%;
-webkit-transform:translateY(-50%);
-ms-transform:translateY(-50%);
transform:translateY(-50%)
}
body.item-view .post-body{
color:$(body.text.color);
font:$(body.text.font);
line-height:2
}
body.item-view .Blog .post-body-container{
padding-$endSide:290px;
position:relative;
margin-$startSide:140px;
margin-top:20px;
margin-bottom:32px
}
body.item-view .Blog .post-body{
margin-bottom:0;
margin-$endSide:110px
}
body.item-view .Blog .post-body::first-letter{
float:$startSide;
font-size:$(body.text.font.size * 2 * 2);
font-weight:600;
line-height:1;
margin-$endSide:16px
}
body.item-view .Blog .post-body div[style*="text-align: center"]::first-letter{
float:none;
font-size:inherit;
font-weight:inherit;
line-height:inherit;
margin-right:0
}
body.item-view .Blog .post-body::first-line{
color:$(item.action.color)
}
body.item-view .Blog .post-body-container .post-sidebar{
$endSide:0;
position:absolute;
top:0;
width:290px
}
body.item-view .Blog .post-body-container .post-sidebar .sharing-button{
display:inline-block
}
.widget.Attribution{
clear:both;
font:$(attribution.text.font);
padding-top:2em
}
.widget.Attribution .blogger{
margin:12px
}
.widget.Attribution svg{
fill:$(attribution.icon.color)
}
body.item-view .PopularPosts{
margin-$startSide:140px
}
body.item-view .PopularPosts .widget-content>ul{
padding-left:0
}
body.item-view .PopularPosts .widget-content>ul>li{
display:block
}
body.item-view .PopularPosts .post-content{
margin-$endSide:76px;
max-width:664px
}
body.item-view .PopularPosts .post:not(:last-child){
margin-bottom:85px
}
body.item-view .post-body-container img{
height:auto;
max-width:100%
}
body.item-view .PopularPosts>.title{
color:$(item.subtitle.color);
font:$(item.subtitle.font);
margin-bottom:36px
}
body.item-view .post-sidebar .post-labels-sidebar{
margin-top:48px;
min-width:150px
}
body.item-view .post-sidebar .post-labels-sidebar h3{
color:$(body.text.color);
font:$(item.action.font);
margin-bottom:16px
}
body.item-view .post-sidebar .post-labels-sidebar a{
color:$(item.action.color);
display:block;
font:$(item.label.font);
font-style:italic;
line-height:2
}
body.item-view blockquote{
font:$(item.blockquote.font);
font-style:italic;
quotes:"\201c" "\201d" "\2018" "\2019"
}
body.item-view blockquote::before{
content:open-quote
}
body.item-view blockquote::after{
content:close-quote
}
body.item-view .post-bottom{
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
float:none
}
body.item-view .widget.Blog .post-share-buttons-bottom{
-webkit-box-flex:0;
-webkit-flex:0 1 auto;
-ms-flex:0 1 auto;
flex:0 1 auto;
-webkit-box-ordinal-group:3;
-webkit-order:2;
-ms-flex-order:2;
order:2
}
body.item-view .widget.Blog .post-footer{
line-height:1;
margin-$endSide:24px
}
.widget.Blog body.item-view .post-bottom{
margin-$endSide:0;
margin-bottom:80px
}
body.item-view .post-footer .post-labels .byline-label{
color:$(body.text.color);
font:$(item.action.font)
}
body.item-view .post-footer .post-labels a{
color:$(item.action.color);
display:inline-block;
font:$(item.label.font);
line-height:2
}
body.item-view .post-footer .post-labels a:not(:last-child)::after{
content:", "
}
body.item-view #comments{
border-top:0;
padding:0
}
body.item-view #comments h3.title{
color:$(item.subtitle.color);
font:$(item.subtitle.font);
margin-bottom:48px
}
body.item-view #comments .comment-form h4{
position:absolute;
clip:rect(1px,1px,1px,1px);
padding:0;
border:0;
height:1px;
width:1px;
overflow:hidden
}
.heroPost{
display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
position:relative
}
.widget.Blog .heroPost{
margin-$startSide:-136px
}
.heroPost .big-post-title .post-snippet{
color:$(heropost.main.text.color)
}
.heroPost.noimage .post-snippet{
color:$(heropost.secondary.text.color)
}
.heroPost .big-post-image-top{
display:none;
background-size:cover;
background-position:center
}
.heroPost .big-post-title{
background-color:$(heropost.main.background.color);
box-sizing:border-box;
-webkit-box-flex:1;
-webkit-flex:1 1 auto;
-ms-flex:1 1 auto;
flex:1 1 auto;
max-width:$(feed.width - 392px);
min-width:0;
padding-bottom:84px;
padding-$endSide:76px;
padding-$startSide:136px;
padding-top:76px
}
.heroPost.noimage .big-post-title{
-webkit-box-flex:1;
-webkit-flex:1 0 auto;
-ms-flex:1 0 auto;
flex:1 0 auto;
max-width:480px;
width:480px
}
.heroPost .big-post-title h3{
margin:0 0 24px
}
.heroPost .big-post-title h3 a{
color:$(heropost.main.title.color)
}
.heroPost .big-post-title .post-body{
color:$(heropost.main.text.color)
}
.heroPost .big-post-title .item-byline{
color:$(heropost.main.text.color);
margin-bottom:24px
}
.heroPost .big-post-title .item-byline .post-timestamp{
display:block
}
.heroPost .big-post-title .item-byline a{
color:$(heropost.main.text.color)
}
.heroPost .byline,.heroPost .byline a,.heroPost .flat-button{
color:$(heropost.main.button.color)
}
.heroPost .flat-button.ripple .splash{
background-color:rgba($(heropost.main.button.color.red),$(heropost.main.button.color.green),$(heropost.main.button.color.blue),.4)
}
.heroPost .flat-button.ripple:hover{
background-color:rgba($(heropost.main.button.color.red),$(heropost.main.button.color.green),$(heropost.main.button.color.blue),.12)
}
.heroPost .big-post-image{
background-position:center;
background-repeat:no-repeat;
background-size:cover;
-webkit-box-flex:0;
-webkit-flex:0 0 auto;
-ms-flex:0 0 auto;
flex:0 0 auto;
width:392px
}
.heroPost .big-post-text{
background-color:$(heropost.secondary.background.color);
box-sizing:border-box;
color:$(heropost.secondary.text.color);
-webkit-box-flex:1;
-webkit-flex:1 1 auto;
-ms-flex:1 1 auto;
flex:1 1 auto;
min-width:0;
padding:48px
}
.heroPost .big-post-text .post-snippet-fade{
color:$(heropost.secondary.text.color);
background:-webkit-linear-gradient(right,$(heropost.secondary.background.color),$(heropost.secondary.background.color.transparent));
background:linear-gradient(to left,$(heropost.secondary.background.color),$(heropost.secondary.background.color.transparent))
}
.heroPost .big-post-text .byline,.heroPost .big-post-text .byline a,.heroPost .big-post-text .jump-link,.heroPost .big-post-text .sharing-button{
color:$(heropost.secondary.button.color)
}
.heroPost .big-post-text .snippet-item::first-letter{
color:$(heropost.secondary.dropcap.color);
float:left;
font-weight:700;
margin-right:12px
}
.sidebar-container{
background-color:$(sidebar.backgroundColor)
}
body.sidebar-visible .sidebar-container{
box-shadow:0 0 20px 0 rgba(0,0,0,.7)
}
.sidebar-container .svg-icon-24{
fill:$(sidebar.icon.color)
}
.sidebar-container .navigation .sidebar-back{
float:right
}
.sidebar-container .widget{
padding-right:16px;
margin-right:0;
margin-left:38px
}
.sidebar-container .widget+.widget{
border-top:solid 1px #bdbdbd
}
.sidebar-container .widget .title{
font:$(sidebar.widget.title.font)
}
.collapsible{
width:100%
}
.widget.Profile{
border-top:0;
margin:0;
margin-left:38px;
margin-top:24px;
padding-right:0
}
body.sidebar-visible .widget.Profile{
margin-left:0
}
.widget.Profile h2{
display:none
}
.widget.Profile h3.title{
color:$(sidebar.profile.title.color);
margin:16px 32px
}
.widget.Profile .individual{
text-align:center
}
.widget.Profile .individual .default-avatar-wrapper .avatar-icon{
margin:auto
}
.widget.Profile .team{
margin-bottom:32px;
margin-left:32px;
margin-right:32px
}
.widget.Profile ul{
list-style:none;
padding:0
}
.widget.Profile li{
margin:10px 0;
text-align:left
}
.widget.Profile .profile-img{
border-radius:50%;
float:none
}
.widget.Profile .profile-info{
margin-bottom:12px
}
.profile-snippet-fade{
background:-webkit-linear-gradient(right,$(sidebar.backgroundColor) 0,$(sidebar.backgroundColor) 20%,$(sidebar.backgroundColor.transparent) 100%);
background:linear-gradient(to left,$(sidebar.backgroundColor) 0,$(sidebar.backgroundColor) 20%,$(sidebar.backgroundColor.transparent) 100%);
height:1.7em;
position:absolute;
right:16px;
top:11.7em;
width:96px
}
.profile-snippet-fade::after{
content:"\2026";
float:right
}
.widget.Profile .profile-location{
color:$(sidebar.profile.text.color);
font-size:16px;
margin:0;
opacity:.74
}
.widget.Profile .team-member .profile-link::after{
clear:both;
content:"";
display:table
}
.widget.Profile .team-member .profile-name{
word-break:break-word
}
.widget.Profile .profile-datablock .profile-link{
color:$(sidebar.profile.title.color);
font:$(sidebar.profile.link.font);
font-size:24px;
text-transform:none;
word-break:break-word
}
.widget.Profile .profile-datablock .profile-link+div{
margin-top:16px!important
}
.widget.Profile .profile-link{
font:$(sidebar.profile.link.font);
font-size:14px
}
.widget.Profile .profile-textblock{
color:$(sidebar.profile.text.color);
font-size:14px;
line-height:24px;
margin:0 18px;
opacity:.74;
overflow:hidden;
position:relative;
word-break:break-word
}
.widget.Label .list-label-widget-content li a{
width:100%;
word-wrap:break-word
}
.extendable .show-less,.extendable .show-more{
font:$(sidebar.profile.link.font);
font-size:14px;
margin:0 -8px
}
.widget.BlogArchive .post-count{
color:$(body.text.color)
}
.Label li{
margin:16px 0
}
.Label li:last-child{
margin-bottom:0
}
.post-snippet.snippet-container{
max-height:$(body.text.font.size * 4 * 2)
}
.post-snippet .snippet-item{
line-height:$(body.text.font.size * 2)
}
.post-snippet .snippet-fade{
background:-webkit-linear-gradient($startSide,$(body.background.color) 0,$(body.background.color) 20%,$(body.background.color.transparent) 100%);
background:linear-gradient(to $startSide,$(body.background.color) 0,$(body.background.color) 20%,$(body.background.color.transparent) 100%);
color:$(body.text.color);
height:$(body.text.font.size * 2)
}
.hero-post-snippet.snippet-container{
max-height:$(body.text.font.size * 4 * 2)
}
.hero-post-snippet .snippet-item{
line-height:$(body.text.font.size * 2)
}
.hero-post-snippet .snippet-fade{
background:-webkit-linear-gradient($startSide,$(heropost.main.background.color) 0,$(heropost.main.background.color) 20%,$(heropost.main.background.color.transparent) 100%);
background:linear-gradient(to $startSide,$(heropost.main.background.color) 0,$(heropost.main.background.color) 20%,$(heropost.main.background.color.transparent) 100%);
color:$(heropost.main.text.color);
height:$(body.text.font.size * 2)
}
.hero-post-snippet a{
color:$(heropost.main.link.color)
}
.hero-post-noimage-snippet.snippet-container{
max-height:$(body.text.font.size * 8 * 2)
}
.hero-post-noimage-snippet .snippet-item{
line-height:$(body.text.font.size * 2)
}
.hero-post-noimage-snippet .snippet-fade{
background:-webkit-linear-gradient($startSide,$(heropost.secondary.background.color) 0,$(heropost.secondary.background.color) 20%,$(heropost.secondary.background.color.transparent) 100%);
background:linear-gradient(to $startSide,$(heropost.secondary.background.color) 0,$(heropost.secondary.background.color) 20%,$(heropost.secondary.background.color.transparent) 100%);
color:$(heropost.secondary.text.color);
height:$(body.text.font.size * 2)
}
.popular-posts-snippet.snippet-container{
max-height:$(body.text.font.size * 4 * 2)
}
.popular-posts-snippet .snippet-item{
line-height:$(body.text.font.size * 2)
}
.popular-posts-snippet .snippet-fade{
background:-webkit-linear-gradient($startSide,$(body.background.color) 0,$(body.background.color) 20%,$(body.background.color.transparent) 100%);
background:linear-gradient(to $startSide,$(body.background.color) 0,$(body.background.color) 20%,$(body.background.color.transparent) 100%);
color:$(body.text.color);
height:$(body.text.font.size * 2)
}
.profile-snippet.snippet-container{
max-height:192px
}
.profile-snippet .snippet-item{
line-height:24px
}
.profile-snippet .snippet-fade{
background:-webkit-linear-gradient($startSide,$(sidebar.backgroundColor) 0,$(sidebar.backgroundColor) 20%,$(sidebar.backgroundColor.transparent) 100%);
background:linear-gradient(to $startSide,$(sidebar.backgroundColor) 0,$(sidebar.backgroundColor) 20%,$(sidebar.backgroundColor.transparent) 100%);
color:$(sidebar.profile.text.color);
height:24px
}
.hero-post-noimage-snippet .snippet-item::first-letter{
font-size:$(body.text.font.size * 4);
line-height:$(body.text.font.size * 4)
}
#comments a,#comments cite,#comments div{
font-size:16px;
line-height:1.4
}
#comments .comment .comment-header .user,#comments .comment .comment-header .user a{
color:$(body.text.color);
font:$(item.action.font)
}
#comments .comment .comment-header .datetime a{
color:$(item.subtitle.color);
font:$(item.action.font)
}
#comments .comment .comment-header .datetime a::before{
content:"\b7  "
}
#comments .comment .comment-content{
margin-top:6px
}
#comments .comment .comment-actions{
color:$(item.action.color);
font:$(item.action.font)
}
#comments .continue{
display:none
}
#comments .comment-footer{
margin-top:8px
}
.cmt_iframe_holder{
margin-$startSide:140px!important
}
body.variant-rockpool_deep_orange .centered-top-secondline .PageList .overflow-popup li a{
color:#000
}
body.variant-rockpool_pink .blog-name h1,body.variant-rockpool_pink .blog-name h1 a{
text-transform:none
}
body.variant-rockpool_deep_orange .post-filter-message{
background-color:$(header.background.color)
}
@media screen and (max-width:$(feed.width + sidebar.width + 20px - 1px)){
.page{
float:none;
margin:0 auto;
max-width:none!important
}
.page_body{
max-width:$(feed.width);
margin:0 auto
}
}
@media screen and (max-width:1280px){
.heroPost .big-post-image{
display:table-cell;
left:auto;
position:static;
top:auto
}
.heroPost .big-post-title{
display:table-cell
}
}
@media screen and (max-width:1168px){
.centered-top-container,.centered-top-placeholder{
padding:24px 24px 32px 24px
}
.sticky{
padding:0 24px
}
.subscribe-section-container{
margin-$startSide:48px
}
.hamburger-section{
margin-left:48px
}
.big-post-text-inner,.big-post-title-inner{
margin:0 auto;
max-width:920px
}
.centered-top{
padding:0;
max-width:920px
}
.Blog{
padding:0
}
body.item-view .Blog{
padding:0 24px;
margin:0 auto;
max-width:920px
}
.post-filter-description{
margin-$endSide:36px
}
.post-outer{
display:block
}
.post-content{
max-width:none;
margin:0
}
.post-outer .snippet-thumbnail{
width:920px;
height:613.3333333333px;
margin-bottom:16px
}
.post-outer .snippet-thumbnail.thumbnail-empty{
display:none
}
.shown-ad .inline-ad{
max-width:100%
}
body.item-view .Blog{
padding:0;
max-width:none
}
.post-filter-message{
margin:24px calc((100% - 920px)/ 2);
max-width:none
}
.FeaturedPost h3,body.feed-view .blog-posts,body.feed-view .feed-message{
margin-left:calc((100% - 920px)/ 2);
margin-right:calc((100% - 920px)/ 2)
}
body.item-view .Blog .post-title-container{
padding:62px calc((100% - 920px)/ 2) 24px
}
body.item-view .Blog .post-header-container{
padding-$startSide:calc((100% - 920px)/ 2)
}
body.item-view .Blog .post-body-container,body.item-view .comments,body.item-view .post-outer-container>.shown-ad,body.item-view .widget.Blog .post-bottom{
margin:32px calc((100% - 920px)/ 2);
padding:0
}
body.item-view .cmt_iframe_holder{
margin:32px 24px!important
}
.blog-pager{
margin-left:calc((100% - 920px)/ 2);
margin-right:calc((100% - 920px)/ 2)
}
body.item-view .post-bottom{
margin:0 auto;
max-width:968px
}
body.item-view .PopularPosts .post-content{
max-width:100%;
margin-right:0
}
body.item-view .Blog .post-body{
margin-$endSide:0
}
body.item-view .Blog .post-sidebar{
display:none
}
body.item-view .widget.Blog .post-share-buttons-bottom{
margin-$endSide:24px
}
body.item-view .PopularPosts{
margin:0 auto;
max-width:920px
}
body.item-view .comment-thread-title{
margin-$startSide:calc((100% - 920px)/ 2)
}
.heroPost{
display:block
}
.heroPost .big-post-title{
display:block;
max-width:none;
padding:24px
}
.heroPost .big-post-image{
display:none
}
.heroPost .big-post-image-top{
display:block;
height:613.3333333333px;
margin:0 auto;
max-width:920px
}
.heroPost .big-post-image-top-container{
background-color:$(heropost.main.background.color)
}
.heroPost.noimage .big-post-title{
max-width:none;
width:100%
}
.heroPost.noimage .big-post-text{
position:static;
width:100%
}
.heroPost .big-post-text{
padding:24px
}
}
@media screen and (max-width:968px){
body{
font-size:$(body.text.font.size * 14 / 20)
}
.post-header-container .byline,.post-header-container .byline a{
font-size:14px
}
.post-title,.post-title a{
font-size:24px
}
.post-outer .snippet-thumbnail{
width:100%;
height:calc((100vw - 48px) * 2 / 3)
}
body.item-view .Blog .post-title-container{
padding:62px 24px 24px 24px
}
body.item-view .Blog .post-header-container{
padding-$startSide:24px
}
body.item-view .Blog .post-body-container,body.item-view .PopularPosts,body.item-view .comments,body.item-view .post-outer-container>.shown-ad,body.item-view .widget.Blog .post-bottom{
margin:32px 24px;
padding:0
}
.FeaturedPost h3,body.feed-view .blog-posts,body.feed-view .feed-message{
margin-left:24px;
margin-right:24px
}
.post-filter-message{
margin:24px 24px 48px 24px
}
body.item-view blockquote{
font-size:18px
}
body.item-view .Blog .post-title{
font-size:$(item.title.font.size * 24 / 48)
}
body.item-view .Blog .post-body{
font-size:$(body.text.font.size * 14 / 20)
}
body.item-view .Blog .post-body::first-letter{
font-size:$(body.text.font.size * 14 / 20 * 4);
line-height:$(body.text.font.size * 14 / 20 * 4)
}
.main_header_elements{
position:relative;
display:block
}
.search.focused .section{
margin-right:0;
width:100%
}
html[dir=ltr] .search form{
margin-right:0
}
.hamburger-section{
margin-left:24px
}
.search-expand-icon{
display:block;
float:left;
height:24px;
margin-top:-12px
}
.search-expand-text{
display:none
}
.subscribe-section-container{
margin-top:12px
}
.subscribe-section-container{
float:$startSide;
margin-$startSide:0
}
.search-expand{
position:absolute;
$endSide:0;
top:0
}
html[dir=ltr] .search-expand{
margin-left:24px
}
.centered-top.search-focused .subscribe-section-container{
opacity:0
}
.blog-name{
float:none
}
.blog-name{
margin-$endSide:36px
}
.centered-top-secondline .PageList li{
margin-$endSide:24px
}
.centered-top.search-focused .subscribe-button,.centered-top.search-focused .subscribe-section-container{
opacity:1
}
body.item-view .comment-thread-title{
margin-$startSide:24px
}
.blog-pager{
margin-left:24px;
margin-right:24px
}
.heroPost .big-post-image-top{
width:100%;
height:calc(100vw * 2 / 3)
}
.popular-posts-snippet.snippet-container,.post-snippet.snippet-container{
font-size:14px;
max-height:112px
}
.popular-posts-snippet .snippet-item,.post-snippet .snippet-item{
line-height:2
}
.popular-posts-snippet .snippet-fade,.post-snippet .snippet-fade{
height:28px
}
.hero-post-snippet.snippet-container{
font-size:14px;
max-height:112px
}
.hero-post-snippet .snippet-item{
line-height:2
}
.hero-post-snippet .snippet-fade{
height:28px
}
.hero-post-noimage-snippet.snippet-container{
font-size:14px;
line-height:2;
max-height:224px
}
.hero-post-noimage-snippet .snippet-item{
line-height:2
}
.hero-post-noimage-snippet .snippet-fade{
height:28px
}
.hero-post-noimage-snippet .snippet-item::first-letter{
font-size:56px;
line-height:normal
}
body.item-view .post-body-container .separator[style*="text-align: center"] a[imageanchor="1"]{
margin-left:-24px!important;
margin-right:-24px!important
}
body.item-view .post-body-container .separator[style*="text-align: center"] a[imageanchor="1"][style*="float: left;"],body.item-view .post-body-container .separator[style*="text-align: center"] a[imageanchor="1"][style*="float: right;"]{
margin-left:0!important;
margin-right:0!important
}
body.item-view .post-body-container .separator[style*="text-align: center"] a[imageanchor="1"][style*="float: left;"] img,body.item-view .post-body-container .separator[style*="text-align: center"] a[imageanchor="1"][style*="float: right;"] img{
max-width:100%
}
}
@media screen and (min-width:$(feed.width + sidebar.width + 20px)){
.page{
float:left
}
.centered-top{
max-width:$(feed.width + sidebar.width);
padding:44px $(sidebar.width + 136px) 32px 136px
}
.sidebar-container{
box-shadow:none;
float:right;
max-width:$(sidebar.width);
z-index:32
}
.sidebar-container .navigation{
display:none
}
.hamburger-section,.sticky .hamburger-section{
display:none
}
.search.focused .section{
margin-right:0;
width:100%
}
#footer{
padding-right:$(sidebar.width)
}
}
]]></b:skin>

    <b:template-skin>
      <![CDATA[
      body#layout .hidden,
      body#layout .invisible {
        display: inherit;
      }
      body#layout .navigation {
        display: none;
      }
      body#layout .page {
        display: inline-block;
        vertical-align: top;
        width: 55%;
      }
      body#layout .sidebar-container {
        display: inline-block;
        float: right;
        width: 40%;
      }
      body#layout .hamburger-menu,
      body#layout .search {
        display: none;
      }
      ]]>
    </b:template-skin>

    <b:defaultmarkups>
      <b:defaultmarkup type='Common'>
        <b:includable id='heroPost'>
          <b:with expr:value='(data:postDisplay.showFeaturedImage ?: true) and data:post.featuredImage' var='hasImage'>
            <div class='heroPost'>
              <b:class cond='!data:hasImage' name='noimage'/>
              <b:if cond='data:hasImage'>
                <div class='big-post-image-top-container'>
                  <b:include cond='(data:postDisplay.showFeaturedImage ?: true) and data:post.featuredImage' data='{                                      image: data:post.featuredImage,                                      selector: &quot;.big-post-image-top&quot;,                                      imageSizes: [480, 640, 800, 1200],                                      imageRatio: &quot;3:2&quot;                                    }' name='responsiveImageStyle'/>
                  <a class='big-post-image-top' expr:href='data:post.url'/>
                </div>
              </b:if>
              <div class='big-post-title'>
                <div class='big-post-title-inner'>
                  <b:if cond='(data:postDisplay.showTitle ?: true) and data:post.title != &quot;&quot;'>
                    <h3 class='post-title'><a expr:href='data:post.url'><data:post.title/></a></h3>
                  </b:if>
                  <b:include name='headerByline'/>
                  <b:if cond='data:hasImage'>
                    <b:with value='&quot;hero-post&quot;' var='snippetPrefix'>
                      <b:include name='heroPostSnippet'/>
                    </b:with>
                    <b:include data='post' name='postFooter'/>
                  </b:if>
                </div>
              </div>
              <b:if cond='!data:hasImage'>
                <div class='big-post-text'>
                  <div class='big-post-text-inner'>
                    <b:with value='&quot;hero-post-noimage&quot;' var='snippetPrefix'>
                      <b:include name='heroPostSnippet'/>
                    </b:with>
                    <b:include data='post' name='postFooter'/>
                  </div>
                </div>
              </b:if>
              <b:if cond='(data:postDisplay.showFeaturedImage ?: true) and data:post.featuredImage'>
                <a class='big-post-image' expr:href='data:post.url' expr:style='((data:postDisplay.showFeaturedImage ?: true) and data:post.featuredImage)                                ? (&quot;background-image: url(\&quot;&quot; + resizeImage(data:post.featuredImage, 612, &quot;612:1000&quot;) + &quot;\&quot;);&quot;)                                : &quot;&quot;'/>
              </b:if>
            </div>
          </b:with>
        </b:includable>
        <b:includable id='heroPostSnippet'>
          <div class='container post-body entry-content' expr:id='&quot;post-snippet-&quot; + data:post.id'>
            <b:include cond='(data:postDisplay.showSnippet ?: true)' data='post' name='postSnippet'/>
          </div>
        </b:includable>
        <b:includable id='normalPost'>
          <b:if cond='(not data:view.isSingleItem or data:widget.type == &quot;PopularPosts&quot;)'>
            <b:if cond='data:post.featuredImage and (data:widget.type != &quot;PopularPosts&quot; or data:this.postDisplay.showFeaturedImage)'>
              <a class='snippet-thumbnail' expr:href='data:post.url'>
                <b:if cond='data:post.featuredImage.isResizable'>
                  <span class='snippet-thumbnail-img' expr:id='&quot;snippet_thumbnail_id_&quot; + data:post.id'/>
                  <style>
                    @media (min-width: 1168px) {
                      <b:eval expr='&quot;#snippet_thumbnail_id_&quot; + data:post.id'/> {
                        background-image: url(<b:eval expr='resizeImage(data:post.featuredImage, 256, &quot;1:1&quot;).cssEscaped'/>);
                      }
                    }
                    @media (min-width: 969px) and (max-width: 1167px) {
                      <b:eval expr='&quot;#snippet_thumbnail_id_&quot; + data:post.id'/> {
                        background-image: url(<b:eval expr='resizeImage(data:post.featuredImage, 1167, &quot;3:2&quot;).cssEscaped'/>);
                      }
                    }
                    @media (min-width: 601px) and (max-width: 968px) {
                      <b:eval expr='&quot;#snippet_thumbnail_id_&quot; + data:post.id'/> {
                        background-image: url(<b:eval expr='resizeImage(data:post.featuredImage, 968, &quot;3:2&quot;).cssEscaped'/>);
                      }
                    }
                    @media (max-width: 600px) {
                      <b:eval expr='&quot;#snippet_thumbnail_id_&quot; + data:post.id'/> {
                        background-image: url(<b:eval expr='resizeImage(data:post.featuredImage, 600, &quot;3:2&quot;).cssEscaped'/>);
                      }
                    }
                  </style>
                <b:else/>
                  <img expr:src='data:post.featuredImage'/>
                </b:if>

              </a>
            <b:else/>
              <div class='snippet-thumbnail thumbnail-empty'/>
            </b:if>
          </b:if>
          <div class='post-content container'>
            <div class='post-title-container'>
              <b:include data='post' name='postTitle'/>
            </div>
            <div class='post-header-container container'>
              <b:if cond='data:view.isSingleItem                           and data:widgets.Blog.first.allBylineItems.author                           and data:post.author.authorPhoto.image                           and data:widget.type != &quot;PopularPosts&quot;'>
                <div class='post-author-profile-pic-container'>
                  <b:include data='{                                                           image: data:post.author.authorPhoto.image,                                                           imageRatio: &quot;1:1&quot;,                                                           imageSizes: [84, 168],                                                           sourceSizes: &quot;84px&quot;,                                                           imageClass: &quot;post-author-profile-pic&quot;                                                           }' name='responsiveImage'/>
                </div>
              </b:if>
              <b:include data='post' name='headerByline'/>
            </div>
            <b:if cond='data:view.isSingleItem and data:widget.type != &quot;PopularPosts&quot;'>
              <div class='post-body-container'>
                <b:include data='post' name='postBody'/>
                <div class='post-sidebar invisible'>
                  <b:with value='data:widget.instanceId + &quot;-normalpostsidebar-&quot; + data:post.id' var='sharingId'>
                    <b:include cond='data:post.shareUrl' data='{ shareButtonClass: &quot;post-share-buttons-top&quot;, overridden: true }' name='maybeAddShareButtons'/>
                  </b:with>
                  <b:if cond='data:post.labels and !data:post.labels.empty and data:this.allBylineItems.labels'>
                    <div class='post-labels-sidebar'>
                      <h3><data:messages.labels/></h3>
                      <b:include data='post' name='postLabels'/>
                    </div>
                  </b:if>
                </div>
              </div>
            <b:else/>
              <b:include cond='data:this.postDisplay.showSnippet ?: true' data='post' name='postBodySnippet'/>
            </b:if>
            <b:include data='post' name='postFooter'/>
          </div>
        </b:includable>
        <b:includable id='postTitle' var='post'>
          <a expr:name='data:post.id'/>
          <b:if cond='data:post.title != &quot;&quot;'>
            <h3 class='post-title entry-title'>
              <b:if cond='data:post.link or (data:post.url and data:view.url != data:post.url)'>
                <a expr:href='data:post.link ?: data:post.url'><data:post.title/></a>
              <b:else/>
                <data:post.title/>
              </b:if>
            </h3>
          </b:if>
        </b:includable>
        <b:includable id='postBody' var='post'>
          <!-- If metaDescription is empty, use the post body as the schema.org description too, for G+/FB snippeting. -->
          <div class='post-body entry-content container' expr:id='&quot;post-body-&quot; + data:post.id'>
            <data:post.body/>
          </div>
        </b:includable>
        <b:includable id='postBodySnippet' var='post'>
          <b:with value='&quot;post&quot;' var='snippetPrefix'>
            <b:include data='post' name='normalPostBodySnippet'/>
          </b:with>
        </b:includable>
        <b:includable id='normalPostBodySnippet' var='post'>
          <div class='container post-body entry-content' expr:id='&quot;post-snippet-&quot; + data:post.id'>
            <b:include cond='data:post.snippets' data='post' name='postSnippet'/>
          </div>
        </b:includable>
        <b:includable id='widgetNotAvailableInPreview'>
          <b:if cond='data:widget.type == &quot;AdSense&quot;'>
            <div class='vertical-ad-placeholder'>
              <span><b:message name='messages.adsGoHere'/></span>
            </div>
          <b:else/>
            <b:include name='super.widgetNotAvailableInPreview'/>
          </b:if>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='BlogSearch'>
        <b:includable id='searchSubmit'>
          <b:if cond='data:widget.sectionId == &quot;search_top&quot;'>
            <label class='search-submit'>
              <input type='submit'/>
              <div class='flat-icon-button ripple'>
                <b:include data='{ iconClass: &quot;search-icon&quot; }' name='searchIcon'/>
              </div>
            </label>
          <b:else/>
            <b:include name='super.searchSubmit'/>
          </b:if>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='AdSense,Blog'>
        <b:includable id='defaultAdUnit'>
          <!-- Clear out style (need non-empty string) -->
          <b:with value='&quot;/* Done in css. */&quot;' var='style'>
            <b:include name='super.defaultAdUnit'/>
          </b:with>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='PageList'>
        <b:includable id='content'>
          <div class='widget-content'>
            <b:include cond='data:widget.sectionId == &quot;page_list_top&quot;' name='overflowablePageList'/>
            <b:include cond='data:widget.sectionId != &quot;page_list_top&quot;' name='pageList'/>
          </div>
        </b:includable>
        <b:includable id='overflowButton'>
          <a><data:messages.moreEllipsis/></a>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='Blog'>
        <b:includable id='main' var='this'>
          <b:include cond='not data:posts.any' name='noContentPlaceholder'/>

          <b:comment>On the homepage, add a &#39;recent posts&#39; title before the first standard post.</b:comment>
          <b:if cond='data:view.isMultipleItems'>
            <b:with value='(data:widgets.FeaturedPost filter w =&gt; w.sectionId == &quot;page_body&quot;).first.postId' var='featuredPostId'>
              <b:if cond='data:featuredPostId and data:view.isHomepage'>
                <div class='feed-message'><data:messages.recentPosts/></div>
              </b:if>

              <b:comment>Cap the total number of ads (widgets and inline ads).</b:comment>
              <b:with value='3' var='maxNumAds'>
              <b:comment>Filter out the featured post, but only on the homepage.</b:comment>
              <b:with value='data:view.isHomepage                                              ? data:posts filter (post =&gt; post.id != data:featuredPostId)                                              : data:posts' var='posts'>
                <b:include data='this' name='super.main'/>
              </b:with>
              </b:with>
            </b:with>
          <b:else/>
            <b:include data='this' name='super.main'/>
          </b:if>
        </b:includable>
        <b:includable id='feedLinks'>
          <!-- Don't show feed links. -->
        </b:includable>
        <b:includable id='post' var='post'>
          <b:include name='normalPost'/>
        </b:includable>
        <b:includable id='postBodySnippet' var='post'>
          <b:with value='&quot;post&quot;' var='snippetPrefix'>
            <b:include data='post' name='normalPostBodySnippet'/>
          </b:with>
        </b:includable>
        <b:includable id='previousPageLink'><!-- Don't show --></b:includable>
        <b:includable id='homePageLink'><!-- Don't show --></b:includable>
        <b:includable id='nextPageLink'>
          <a class='blog-pager-older-link flat-button ripple' expr:href='data:olderPageUrl' expr:title='data:messages.morePosts'>
            <data:messages.morePosts/>
          </a>
        </b:includable>
        <b:includable id='inlineAd' var='post'>
          <div>
            <b:class cond='not data:maxNumAds or data:post.adNumber lt data:maxNumAds' name='shown-ad'/>
            <b:include data='post' name='super.inlineAd'/>
          </div>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='Blog,FeaturedPost,PopularPosts'>
        <b:includable id='postFooter' var='post'>
          <div class='post-bottom'>
            <div class='post-footer'>
              <!-- Footer bylines -->
              <b:include name='footerBylines'/>
            </div>
            <b:include cond='data:view.isSingleItem and data:widget.type == &quot;Blog&quot;' data='{ shareButtonClass: &quot;post-share-buttons-bottom&quot;, overridden: true }' name='maybeAddShareButtons'/>
            <b:include cond='data:view.isMultipleItems or data:widget.type == &quot;PopularPosts&quot;' data='post' name='postJumpLink'/>
          </div>
        </b:includable>
        <b:includable id='headerByline'>
          <b:if cond='data:view.isSingleItem and data:widget.type == &quot;Blog&quot;'>
            <b:include name='super.headerByline'/>
          <b:else/>
            <b:include data='{ items: [&quot;author&quot;, &quot;timestamp&quot;] }' name='headerBylineOverride'/>
          </b:if>
        </b:includable>
        <b:includable id='footerBylines'>
          <b:if cond='data:view.isSingleItem and data:widget.type == &quot;Blog&quot;'>
            <b:include name='super.footerBylines'/>
          <b:else/>
            <b:include data='{ items: [[&quot;share&quot;, &quot;comments&quot;]] }' name='footerBylinesOverride'/>
          </b:if>
        </b:includable>
        <b:includable id='postShareButtons'>
          <b:include cond='data:view.isMultipleItems or data:widget.type != &quot;Blog&quot;' name='super.postShareButtons'/>
        </b:includable>
        <b:includable id='postJumpLink' var='post'>
          <b:comment>Show a &#39;read more&#39; link if no jump link is present.</b:comment>
          <div class='byline jump-link'>
            <a class='flat-button ripple' expr:href='data:post.hasJumpLink ? data:post.url fragment &quot;more&quot; : data:post.url' expr:title='data:post.title'>
              <b:eval expr='data:blog.jumpLinkMessage'/>
            </a>
          </div>
        </b:includable>
        <b:includable id='sharingButtonContent'>
          <b:comment>Mark parent byline element as a flat-button.</b:comment>
          <b:class name='flat-button ripple'/>
          <b:message name='messages.share'/>
        </b:includable>
        <b:includable id='commentsLink'>
          <a class='comment-link flat-button ripple' expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
            <b:if cond='data:post.numberOfComments &gt; 0'>
              <b:message name='messages.numberOfComments'>
                <b:param expr:value='data:post.numberOfComments' name='numComments'/>
              </b:message>
            <b:else/>
              <data:messages.postAComment/>
            </b:if>
          </a>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='BlogArchive'>
        <b:includable id='main' var='this'>
          <details class='collapsible extendable'>
            <b:attr cond='data:view.isArchive' name='open' value='open'/>
            <b:with value='true' var='renderAsDetails'>
            <b:with value='data:messages.archive' var='defaultTitle'>
              <b:include name='super.main'/>
            </b:with>
            </b:with>
          </details>
        </b:includable>
        <b:includable id='flat'>
          <b:include data='{                               buttonClass: &quot;flat-button&quot;,                               items: data:this.data,                               itemSet: &quot;data&quot;,                               itemsMarkup: &quot;super.flat&quot;                             }' name='extendableItems'/>
        </b:includable>
        <b:includable id='hierarchy'>
          <b:include data='{                               buttonClass: &quot;flat-button&quot;,                               limit: 1,                               items: data:this.data,                               itemSet: &quot;data&quot;,                               itemsMarkup: &quot;super.hierarchy&quot;                             }' name='extendableItems'/>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='Label'>
        <b:includable id='main' var='this'>
          <details class='collapsible extendable'>
            <b:attr cond='data:view.isLabelSearch' name='open' value='open'/>
            <b:with value='true' var='renderAsDetails'>
            <b:with value='data:messages.labels' var='defaultTitle'>
              <b:include name='super.main'/>
            </b:with>
            </b:with>
          </details>
        </b:includable>
        <b:includable id='list'>
          <b:include data='{                               buttonClass: &quot;flat-button&quot;,                               items: data:this.labels,                               itemSet: &quot;labels&quot;,                               itemsMarkup: &quot;super.list&quot;                             }' name='extendableItems'/>
        </b:includable>
        <b:includable id='cloud'>
          <!-- Always display list format. -->
          <b:include name='list'/>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='FeaturedPost'>
        <b:includable id='snippetedPosts'>
            <b:include cond='data:posts.any' data='{                                postDisplay: data:postDisplay,                                post: data:posts.first                              }' name='heroPost'/>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='Header'>
        <b:includable id='image'>
          <b:include name='super.image'/>
          <!-- If we are replacing the title, force it to render anyway, and it'll be hidden in CSS. -->
          <b:include cond='data:this.imagePlacement == &quot;REPLACE&quot;' name='title'/>
        </b:includable>
        <b:includable id='title'>
          <div>
            <b:class cond='data:this.imagePlacement == &quot;REPLACE&quot;' name='replaced'/>
            <b:include name='super.title'/>
          </div>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='PopularPosts'>
        <b:includable id='main' var='this'>
          <!-- Default the title to 'Popular posts from this blog'. -->
          <b:with value='data:messages.popularPostsFromThisBlog' var='defaultTitle'>
            <b:include name='widget-title'/>
          </b:with>
          <b:include name='snippetedPosts'/>
        </b:includable>
        <b:includable id='snippetedPostContent'>
          <div class='post-outer-container'>
            <!-- post title and body -->
            <div class='post-outer'>
              <b:with value='&quot;popular-posts&quot;' var='snippetPrefix'>
                <b:include name='normalPost'/>
              </b:with>
            </div>
          </div>
        </b:includable>
      </b:defaultmarkup>
      <b:defaultmarkup type='Profile'>
        <b:includable id='main' var='widget'>
          <div class='wrapper'>
            <b:class cond='!data:widget.team' name='solo'/>
            <b:comment>No title for single profiles. Default to &#39;Blog authors&#39; for team.</b:comment>
            <b:with value='data:messages.blogAuthors' var='defaultTitle'>
              <b:include name='super.main'/>
            </b:with>
          </div>
        </b:includable>
        <b:includable id='defaultProfileImage'>
          <div class='default-avatar-wrapper'>
            <b:include data='{ iconClass: &quot;avatar-icon&quot; }' name='defaultAvatarIcon'/>
          </div>
        </b:includable>
        <b:includable id='viewProfileLink'>
          <a class='profile-link' expr:href='data:userUrl' rel='author'>
            <data:messages.visitProfile/>
          </a>
        </b:includable>
        <b:includable id='userProfileText'>
          <dd class='profile-textblock profile-snippet snippet-container r-snippet-container'>
            <div class='snippet-item r-snippetized'>
              <data:aboutme/>
            </div>
            <div class='snippet-fade r-snippet-fade hidden'/>
          </dd>
        </b:includable>
        <b:includable id='userLocation'>
          <dd class='profile-data profile-location'><data:location/></dd>
        </b:includable>
      </b:defaultmarkup>
    </b:defaultmarkups>

    <b:if cond='(data:widgets.AdSense.any or data:blog.adsenseClientId) and not data:blog.adsenseAutoAds'>
      <script async='async' src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'/>
    </b:if>
    <b:include data='blog' name='google-analytics'/>

    <script async='async' src='https://www.gstatic.com/external_hosted/clipboardjs/clipboard.min.js'/>
  </head>

  <body class='container'>
    <b:class cond='data:view.isPreview' name='preview'/>
    <b:class cond='data:view.isMultipleItems' name='feed-view'/>
    <b:class cond='data:view.isSingleItem' name='item-view'/>
    <b:class cond='data:view.isArchive' name='archive-view'/>
    <b:class cond='data:view.isLabelSearch' name='label-view'/>
    <b:class cond='data:view.isSearch and !data:view.isLabelSearch' name='search-view'/>
    <b:class name='version-1-3-3'/>

    <b:include name='skipNavigation'/>

    <div class='all-container'>
      <div class='centered-top-placeholder'/>
      <header class='centered-top-container' role='banner'>
        <div class='centered-top'>
          <b:class cond='data:view.isSearch and data:view.search.query' name='search-focused'/>
          <div class='centered-top-firstline container'>
            <div class='main_header_elements container'>
              <!-- Blog name and header -->
              <div class='blog-name'>
                <b:section id='header' name='Header' showaddelement='false'>
                  <b:widget id='Header1' locked='true' title='Bayraktar&apos;s Opinions (Header)' type='Header' visible='true'>
                    <b:widget-settings>
                      <b:widget-setting name='displayUrl'/>
                      <b:widget-setting name='displayHeight'>0</b:widget-setting>
                      <b:widget-setting name='sectionWidth'>-1</b:widget-setting>
                      <b:widget-setting name='useImage'>false</b:widget-setting>
                      <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
                      <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
                      <b:widget-setting name='displayWidth'>0</b:widget-setting>
                    </b:widget-settings>
                    <b:includable id='main' var='this'>
    <div class='header-widget'>
      <b:include cond='data:imagePlacement in {&quot;REPLACE&quot;, &quot;BEFORE_DESCRIPTION&quot;}' name='image'/>
      <b:include cond='data:imagePlacement not in {&quot;REPLACE&quot;, &quot;BEFORE_DESCRIPTION&quot;}' name='title'/>
      <b:include cond='data:imagePlacement != &quot;REPLACE&quot;' name='description'/>
    </div>
    <b:include cond='data:imagePlacement == &quot;BEHIND&quot;' name='behindImageStyle'/>
  </b:includable>
                    <b:includable id='behindImageStyle'>
    <b:if cond='data:sourceUrl'>
      <b:include cond='data:this.image' data='{                    image: data:this.image,                    selector: &quot;.header-widget&quot;                  }' name='responsiveImageStyle'/>
      <style type='text/css'>
        .header-widget {
          background-position: <data:blog.locale.languageAlignment/>;
          background-repeat: no-repeat;
          background-size: cover;
        }
      </style>
    </b:if>
  </b:includable>
                    <b:includable id='description'>
    <p>
      <data:this.description/>
    </p>
  </b:includable>
                    <b:includable id='image'>
          <b:include name='super.image'/>
          <!-- If we are replacing the title, force it to render anyway, and it'll be hidden in CSS. -->
          <b:include cond='data:this.imagePlacement == &quot;REPLACE&quot;' name='title'/>
        </b:includable>
                    <b:includable id='title'>
          <div>
            <b:class cond='data:this.imagePlacement == &quot;REPLACE&quot;' name='replaced'/>
            <b:include name='super.title'/>
          </div>
        </b:includable>
                  </b:widget>
                </b:section>
              </div> <!-- End blog name and header -->

              <!-- Search -->
              <b:if cond='data:view.isLayoutMode or data:widgets any (w =&gt; w.sectionId == &quot;search_top&quot;)'>
                <div class='search'>
                  <b:class cond='data:view.isSearch and data:view.search.query' name='focused'/>
                  <button class='flat-button search-expand touch-icon-button' expr:aria-label='data:messages.search.escaped'>
                    <div class='search-expand-text'><data:messages.search/></div>
                    <div class='search-expand-icon flat-icon-button'>
                      <b:include name='searchIcon'/>
                    </div>
                  </button>
                  <b:section id='search_top' name='Search (Top)' showaddelement='false'>
                    <b:widget id='BlogSearch1' locked='true' title='Search This Blog' type='BlogSearch' visible='true'>
                      <b:includable id='main'>
  <b:include name='widget-title'/>
  <b:include name='content'/>
</b:includable>
                      <b:includable id='content'>
  <div class='widget-content' role='search'>
    <b:include name='searchForm'/>
  </div>
</b:includable>
                      <b:includable id='searchForm'>
  <form expr:action='data:blog.searchUrl'>
    <b:attr cond='not data:view.isPreview' name='target' value='_top'/>
    <b:include name='urlParamsAsFormInput'/>
    <div class='search-input'>
      <input autocomplete='off' expr:aria-label='data:messages.searchThisBlog' expr:placeholder='data:messages.searchThisBlog' expr:value='data:view.isSearch ? data:view.search.query.escaped : &quot;&quot;' name='q'/>
    </div>
    <b:include name='searchSubmit'/>
  </form>
</b:includable>
                      <b:includable id='searchSubmit'>
          <b:if cond='data:widget.sectionId == &quot;search_top&quot;'>
            <label class='search-submit'>
              <input type='submit'/>
              <div class='flat-icon-button ripple'>
                <b:include data='{ iconClass: &quot;search-icon&quot; }' name='searchIcon'/>
              </div>
            </label>
          <b:else/>
            <b:include name='super.searchSubmit'/>
          </b:if>
        </b:includable>
                    </b:widget>
                  </b:section>
                </div>
              </b:if>
            </div>
            <!-- Hamburger menu -->
            <div class='hamburger-section container'>
              <b:include data='{ button: true, iconClass: &quot;hamburger-menu flat-icon-button ripple&quot; }' name='menuIcon'/>
            </div>
            <!-- End hamburger menu -->
          </div>
          <nav role='navigation'>
            <b:section class='centered-top-secondline' id='page_list_top' name='Page List (Top)' showaddelement='false'>
              <b:widget id='PageList1' locked='true' title='' type='PageList' visible='false'>
                <b:widget-settings>
                  <b:widget-setting name='pageListJson'><![CDATA[{"home":{"href":"http://www.binan.cf/","position":0,"title":"Home"}}]]></b:widget-setting>
                  <b:widget-setting name='homeTitle'>Home</b:widget-setting>
                </b:widget-settings>
                <b:includable id='main'>
  <b:include name='widget-title'/>
  <b:include name='content'/>
</b:includable>
                <b:includable id='content'>
          <div class='widget-content'>
            <b:include cond='data:widget.sectionId == &quot;page_list_top&quot;' name='overflowablePageList'/>
            <b:include cond='data:widget.sectionId != &quot;page_list_top&quot;' name='pageList'/>
          </div>
        </b:includable>
                <b:includable id='overflowButton'>
          <a><data:messages.moreEllipsis/></a>
        </b:includable>
                <b:includable id='overflowablePageList'>
  <div class='overflowable-container'>
    <div class='overflowable-contents'>
      <div class='container'>
        <b:with value='true' var='overflow'>
        <b:with value='&quot;tabs&quot;' var='pageListClass'>
          <b:include name='pageList'/>
        </b:with>
        </b:with>
      </div>
    </div>
    <div class='overflow-button hidden'>
      <b:include name='overflowButton'/>
    </div>
  </div>
</b:includable>
                <b:includable id='pageLink'>
  <li>
    <b:class cond='data:overflow' name='overflowable-item'/>
    <b:class cond='data:link.isCurrentPage' name='selected'/>

    <a expr:href='data:link.href'><data:link.title/></a>
  </li>
</b:includable>
                <b:includable id='pageList'>
  <ul>
    <b:class cond='data:pageListClass' expr:name='data:pageListClass'/>
    <b:loop values='data:links' var='link'>
      <b:include name='pageLink'/>
    </b:loop>
  </ul>
</b:includable>
              </b:widget>
            </b:section>
          </nav>
        </div>
      </header>
      <div class='main_content_container clearfix'>
        <div class='page'>
            <div class='page_body'>
              <b:class cond='data:hasVerticalAds' name='has-vertical-ads'/>
              <div class='centered'>
                <main class='centered-bottom' id='main' role='main' tabindex='-1'>
                  <b:if cond='data:view.isMultipleItems'>
                    <h2 class='main-heading'><data:messages.posts/></h2>
                  </b:if>
                  <b:if cond='data:view.isArchive or (data:view.isSearch and data:view.search.resultsMessageHtml)'>
                    <div class='post-filter-message'>
                      <div class='post-filter-description'>
                        <b:if cond='data:view.isArchive'>
                          <data:view.archive.rangeMessage/>
                        <b:elseif cond='data:view.isSearch and data:view.search.resultsMessageHtml'/>
                          <data:view.search.resultsMessageHtml/>
                        </b:if>
                      </div>
                      <div>
                        <a expr:href='data:blog.homepageUrl'><data:messages.showAll/></a>
                      </div>
                    </div>
                  </b:if>
                  <b:section class='main' id='page_body' name='Page Body' showaddelement='false'>
                    <b:widget cond='data:view.isHomepage' id='FeaturedPost1' locked='true' title='' type='FeaturedPost' visible='true'>
                      <b:widget-settings>
                        <b:widget-setting name='showSnippet'>true</b:widget-setting>
                        <b:widget-setting name='showPostTitle'>true</b:widget-setting>
                        <b:widget-setting name='showFirstImage'>true</b:widget-setting>
                        <b:widget-setting name='useMostRecentPost'>true</b:widget-setting>
                      </b:widget-settings>
                      <b:includable id='main' var='this'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <b:include name='snippetedPosts'/>
  </div>
</b:includable>
                      <b:includable id='commentsLink'>
          <a class='comment-link flat-button ripple' expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
            <b:if cond='data:post.numberOfComments &gt; 0'>
              <b:message name='messages.numberOfComments'>
                <b:param expr:value='data:post.numberOfComments' name='numComments'/>
              </b:message>
            <b:else/>
              <data:messages.postAComment/>
            </b:if>
          </a>
        </b:includable>
                      <b:includable id='footerBylines'>
          <b:if cond='data:view.isSingleItem and data:widget.type == &quot;Blog&quot;'>
            <b:include name='super.footerBylines'/>
          <b:else/>
            <b:include data='{ items: [[&quot;share&quot;, &quot;comments&quot;]] }' name='footerBylinesOverride'/>
          </b:if>
        </b:includable>
                      <b:includable id='headerByline'>
          <b:if cond='data:view.isSingleItem and data:widget.type == &quot;Blog&quot;'>
            <b:include name='super.headerByline'/>
          <b:else/>
            <b:include data='{ items: [&quot;author&quot;, &quot;timestamp&quot;] }' name='headerBylineOverride'/>
          </b:if>
        </b:includable>
                      <b:includable id='postFooter' var='post'>
          <div class='post-bottom'>
            <div class='post-footer'>
              <!-- Footer bylines -->
              <b:include name='footerBylines'/>
            </div>
            <b:include cond='data:view.isSingleItem and data:widget.type == &quot;Blog&quot;' data='{ shareButtonClass: &quot;post-share-buttons-bottom&quot;, overridden: true }' name='maybeAddShareButtons'/>
            <b:include cond='data:view.isMultipleItems or data:widget.type == &quot;PopularPosts&quot;' data='post' name='postJumpLink'/>
          </div>
        </b:includable>
                      <b:includable id='postJumpLink' var='post'>
          <b:comment>Show a &#39;read more&#39; link if no jump link is present.</b:comment>
          <div class='byline jump-link'>
            <a class='flat-button ripple' expr:href='data:post.hasJumpLink ? data:post.url fragment &quot;more&quot; : data:post.url' expr:title='data:post.title'>
              <b:eval expr='data:blog.jumpLinkMessage'/>
            </a>
          </div>
        </b:includable>
                      <b:includable id='postShareButtons'>
          <b:include cond='data:view.isMultipleItems or data:widget.type != &quot;Blog&quot;' name='super.postShareButtons'/>
        </b:includable>
                      <b:includable id='sharingButtonContent'>
          <b:comment>Mark parent byline element as a flat-button.</b:comment>
          <b:class name='flat-button ripple'/>
          <b:message name='messages.share'/>
        </b:includable>
                      <b:includable id='snippetedPosts'>
            <b:include cond='data:posts.any' data='{                                postDisplay: data:postDisplay,                                post: data:posts.first                              }' name='heroPost'/>
        </b:includable>
                    </b:widget>
                    <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' visible='true'>
                      <b:widget-settings>
                        <b:widget-setting name='showDateHeader'>false</b:widget-setting>
                        <b:widget-setting name='style.textcolor'>#ffffff</b:widget-setting>
                        <b:widget-setting name='showShareButtons'>true</b:widget-setting>
                        <b:widget-setting name='showCommentLink'>true</b:widget-setting>
                        <b:widget-setting name='style.urlcolor'>#ffffff</b:widget-setting>
                        <b:widget-setting name='showAuthor'>false</b:widget-setting>
                        <b:widget-setting name='style.linkcolor'>#ffffff</b:widget-setting>
                        <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
                        <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
                        <b:widget-setting name='timestampLabel'/>
                        <b:widget-setting name='reactionsLabel'/>
                        <b:widget-setting name='showAuthorProfile'>false</b:widget-setting>
                        <b:widget-setting name='style.layout'>1x1</b:widget-setting>
                        <b:widget-setting name='showLabels'>true</b:widget-setting>
                        <b:widget-setting name='showLocation'>true</b:widget-setting>
                        <b:widget-setting name='showTimestamp'>true</b:widget-setting>
                        <b:widget-setting name='postsPerAd'>2</b:widget-setting>
                        <b:widget-setting name='showBacklinks'>false</b:widget-setting>
                        <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
                        <b:widget-setting name='showInlineAds'>true</b:widget-setting>
                        <b:widget-setting name='showReactions'>false</b:widget-setting>
                      </b:widget-settings>
                      <b:includable id='main' var='this'>
          <b:include cond='not data:posts.any' name='noContentPlaceholder'/>

          <b:comment>On the homepage, add a &#39;recent posts&#39; title before the first standard post.</b:comment>
          <b:if cond='data:view.isMultipleItems'>
            <b:with value='(data:widgets.FeaturedPost filter w =&gt; w.sectionId == &quot;page_body&quot;).first.postId' var='featuredPostId'>
              <b:if cond='data:featuredPostId and data:view.isHomepage'>
                <div class='feed-message'><data:messages.recentPosts/></div>
              </b:if>

              <b:comment>Cap the total number of ads (widgets and inline ads).</b:comment>
              <b:with value='3' var='maxNumAds'>
              <b:comment>Filter out the featured post, but only on the homepage.</b:comment>
              <b:with value='data:view.isHomepage                                              ? data:posts filter (post =&gt; post.id != data:featuredPostId)                                              : data:posts' var='posts'>
                <b:include data='this' name='super.main'/>
              </b:with>
              </b:with>
            </b:with>
          <b:else/>
            <b:include data='this' name='super.main'/>
          </b:if>
        </b:includable>
                      <b:includable id='aboutPostAuthor'>
  <div class='author-name'>
    <a class='g-profile' expr:href='data:post.author.profileUrl' rel='author' title='author profile'>
      <span>
        <data:post.author.name/>
      </span>
    </a>
  </div>
  <div>
    <span class='author-desc'>
      <data:post.author.aboutMe/>
    </span>
  </div>
</b:includable>
                      <b:includable id='addComments'>
  <a expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
    <b:message name='messages.postAComment'/>
  </a>
</b:includable>
                      <b:includable id='commentAuthorAvatar'>
  <div class='avatar-image-container'>
    <img class='author-avatar' expr:src='data:comment.authorAvatarSrc' height='35' width='35'/>
  </div>
</b:includable>
                      <b:includable id='commentDeleteIcon' var='comment'>
  <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
    <b:if cond='data:showCmtPopup'>
      <div class='goog-toggle-button'>
        <div class='goog-inline-block comment-action-icon'/>
      </div>
    <b:else/>
      <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:messages.deleteComment'>
        <img src='https://resources.blogblog.com/img/icon_delete13.gif'/>
      </a>
    </b:if>
  </span>
</b:includable>
                      <b:includable id='commentForm' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <h4 id='comment-post-message'><data:messages.postAComment/></h4>
    <b:if cond='data:this.messages.blogComment != &quot;&quot;'>
      <p><data:this.messages.blogComment/></p>
    </b:if>
    <b:include data='post' name='commentFormIframeSrc'/>
    <iframe allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight ?: &quot;90px&quot;' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
                      <b:includable id='commentFormIframeSrc' var='post'>
  <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
</b:includable>
                      <b:includable id='commentItem' var='comment'>
  <div class='comment' expr:id='&quot;c&quot; + data:comment.id'>
    <b:include cond='data:blog.enabledCommentProfileImages' name='commentAuthorAvatar'/>

    <div class='comment-block'>
      <div class='comment-author'>
        <b:if cond='data:comment.authorUrl'>
          <b:message name='messages.authorSaidWithLink'>
            <b:param expr:value='data:comment.author' name='authorName'/>
            <b:param expr:value='data:comment.authorUrl' name='authorUrl'/>
          </b:message>
        <b:else/>
          <b:message name='messages.authorSaid'>
            <b:param expr:value='data:comment.author' name='authorName'/>
          </b:message>
        </b:if>
      </div>
      <div expr:class='&quot;comment-body&quot; + (data:comment.isDeleted ? &quot; deleted&quot; : &quot;&quot;)'>
        <data:comment.body/>
      </div>
      <div class='comment-footer'>
        <span class='comment-timestamp'>
          <a expr:href='data:comment.url' title='comment permalink'>
            <data:comment.timestamp/>
          </a>
          <b:include data='comment' name='commentDeleteIcon'/>
        </span>
      </div>
    </div>
  </div>
</b:includable>
                      <b:includable id='commentList' var='comments'>
  <div id='comments-block'>
    <b:loop values='data:comments' var='comment'>
      <b:include data='comment' name='commentItem'/>
    </b:loop>
  </div>
</b:includable>
                      <b:includable id='commentPicker' var='post'>
  <b:if cond='data:post.showThreadedComments'>
    <b:include data='post' name='threadedComments'/>
  <b:else/>
    <b:include data='post' name='comments'/>
  </b:if>
</b:includable>
                      <b:includable id='comments' var='post'>
  <section expr:class='&quot;comments&quot; + (data:post.embedCommentForm ? &quot; embed&quot; : &quot;&quot;)' expr:data-num-comments='data:post.numberOfComments' id='comments'>
    <a name='comments'/>
    <b:if cond='data:post.allowComments'>

      <b:include name='commentsTitle'/>

      <div expr:id='data:widget.instanceId + &quot;_comments-block-wrapper&quot;'>
        <b:include cond='data:post.comments' data='post.comments' name='commentList'/>
      </div>

      <b:if cond='data:post.commentPagingRequired'>
        <div class='paging-control-container'>
          <b:if cond='data:post.hasOlderLinks'>
            <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
              <data:messages.oldest/>
            </a>
            <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
              <data:messages.older/>
            </a>
          </b:if>

          <span class='comment-range-text'>
            <data:post.commentRangeText/>
          </span>

          <b:if cond='data:post.hasNewerLinks'>
            <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
              <data:messages.newer/>
            </a>
            <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
              <data:messages.newest/>
            </a>
          </b:if>
        </div>
      </b:if>

      <div class='footer'>
        <b:if cond='data:post.embedCommentForm'>
          <b:if cond='data:post.allowNewComments'>
            <b:include data='post' name='commentForm'/>
          <b:else/>
            <data:post.noNewCommentsText/>
          </b:if>
        <b:else/>
          <b:if cond='data:post.allowComments'>
            <b:include data='post' name='addComments'/>
          </b:if>
        </b:if>
      </div>
    </b:if>
    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='allowtransparency' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>
  </section>
</b:includable>
                      <b:includable id='commentsLink'>
          <a class='comment-link flat-button ripple' expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
            <b:if cond='data:post.numberOfComments &gt; 0'>
              <b:message name='messages.numberOfComments'>
                <b:param expr:value='data:post.numberOfComments' name='numComments'/>
              </b:message>
            <b:else/>
              <data:messages.postAComment/>
            </b:if>
          </a>
        </b:includable>
                      <b:includable id='commentsTitle'>
  <h3 class='title'><data:messages.comments/></h3>
</b:includable>
                      <b:includable id='defaultAdUnit'>
          <!-- Clear out style (need non-empty string) -->
          <b:with value='&quot;/* Done in css. */&quot;' var='style'>
            <b:include name='super.defaultAdUnit'/>
          </b:with>
        </b:includable>
                      <b:includable id='feedLinks'>
          <!-- Don't show feed links. -->
        </b:includable>
                      <b:includable id='feedLinksBody' var='links'>
  <div class='feed-links'>
  <data:messages.subscribeTo/>
  <b:loop values='data:links' var='f'>
     <a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'><data:f.name/> (<data:f.feedType/>)</a>
  </b:loop>
  </div>
</b:includable>
                      <b:includable id='footerBylines'>
          <b:if cond='data:view.isSingleItem and data:widget.type == &quot;Blog&quot;'>
            <b:include name='super.footerBylines'/>
          <b:else/>
            <b:include data='{ items: [[&quot;share&quot;, &quot;comments&quot;]] }' name='footerBylinesOverride'/>
          </b:if>
        </b:includable>
                      <b:includable id='headerByline'>
          <b:if cond='data:view.isSingleItem and data:widget.type == &quot;Blog&quot;'>
            <b:include name='super.headerByline'/>
          <b:else/>
            <b:include data='{ items: [&quot;author&quot;, &quot;timestamp&quot;] }' name='headerBylineOverride'/>
          </b:if>
        </b:includable>
                      <b:includable id='homePageLink'><!-- Don't show --></b:includable>
                      <b:includable id='iframeComments' var='post'>
  <!-- G+ comments, no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
                      <b:includable id='inlineAd' var='post'>
          <div>
            <b:class cond='not data:maxNumAds or data:post.adNumber lt data:maxNumAds' name='shown-ad'/>
            <b:include data='post' name='super.inlineAd'/>
          </div>
        </b:includable>
                      <b:includable id='nextPageLink'>
          <a class='blog-pager-older-link flat-button ripple' expr:href='data:olderPageUrl' expr:title='data:messages.morePosts'>
            <data:messages.morePosts/>
          </a>
        </b:includable>
                      <b:includable id='post' var='post'>
          <b:include name='normalPost'/>
        </b:includable>
                      <b:includable id='postBody' var='post'>
  <!-- If metaDescription is empty, use the post body as the schema.org description too, for G+/FB snippeting. -->
  <div class='post-body entry-content float-container' expr:id='&quot;post-body-&quot; + data:post.id'>
    <data:post.body/>
  </div>
</b:includable>
                      <b:includable id='postBodySnippet' var='post'>
          <b:with value='&quot;post&quot;' var='snippetPrefix'>
            <b:include data='post' name='normalPostBodySnippet'/>
          </b:with>
        </b:includable>
                      <b:includable id='postCommentsAndAd' var='post'>
  <article class='post-outer-container'>
    <!-- Post title and body -->
    <div class='post-outer'>
      <b:include data='post' name='post'/>
    </div>

    <!-- Comments -->
    <b:include cond='data:view.isSingleItem' data='post' name='commentPicker'/>

    <!-- Show ad inside post container, after comments, if single item. -->
    <b:include cond='data:view.isSingleItem and data:post.includeAd' data='post' name='inlineAd'/>
  </article>

  <!-- Show ad outside post container (between posts) for feed pages. -->
  <b:include cond='data:view.isMultipleItems and data:post.includeAd' data='post' name='inlineAd'/>
</b:includable>
                      <b:includable id='postCommentsLink'>
  <b:if cond='data:view.isMultipleItems'>
    <span class='byline post-comment-link container'>
      <b:include cond='data:post.commentSource != 1' name='commentsLink'/>
    </span>
  </b:if>
</b:includable>
                      <b:includable id='postFooter' var='post'>
          <div class='post-bottom'>
            <div class='post-footer'>
              <!-- Footer bylines -->
              <b:include name='footerBylines'/>
            </div>
            <b:include cond='data:view.isSingleItem and data:widget.type == &quot;Blog&quot;' data='{ shareButtonClass: &quot;post-share-buttons-bottom&quot;, overridden: true }' name='maybeAddShareButtons'/>
            <b:include cond='data:view.isMultipleItems or data:widget.type == &quot;PopularPosts&quot;' data='post' name='postJumpLink'/>
          </div>
        </b:includable>
                      <b:includable id='postFooterAuthorProfile' var='post'>
  <b:if cond='data:post.author.aboutMe and data:view.isPost'>
    <div class='author-profile'>
      <b:if cond='data:post.author.authorPhoto.url'>
        <img class='author-image' expr:src='data:post.author.authorPhoto.url' width='50px'/>
        <div class='author-about'>
          <b:include data='post' name='aboutPostAuthor'/>
        </div>
      <b:else/>
        <b:include data='post' name='aboutPostAuthor'/>
      </b:if>
    </div>
  </b:if>
</b:includable>
                      <b:includable id='postHeader' var='post'>
  <b:include name='headerByline'/>
</b:includable>
                      <b:includable id='postJumpLink' var='post'>
          <b:comment>Show a &#39;read more&#39; link if no jump link is present.</b:comment>
          <div class='byline jump-link'>
            <a class='flat-button ripple' expr:href='data:post.hasJumpLink ? data:post.url fragment &quot;more&quot; : data:post.url' expr:title='data:post.title'>
              <b:eval expr='data:blog.jumpLinkMessage'/>
            </a>
          </div>
        </b:includable>
                      <b:includable id='postMeta' var='post'>
  <b:include data='post' name='postMetadataJSON'/>
</b:includable>
                      <b:includable id='postPagination'>
  <div class='blog-pager container' id='blog-pager'>
    <b:include cond='data:newerPageUrl' name='previousPageLink'/>
    <b:include cond='data:olderPageUrl' name='nextPageLink'/>
    <b:include cond='data:view.url != data:blog.homepageUrl' name='homePageLink'/>
  </div>
</b:includable>
                      <b:includable id='postShareButtons'>
          <b:include cond='data:view.isMultipleItems or data:widget.type != &quot;Blog&quot;' name='super.postShareButtons'/>
        </b:includable>
                      <b:includable id='postTitle' var='post'>
  <a expr:name='data:post.id'/>
  <b:if cond='data:post.title != &quot;&quot;'>
    <h3 class='post-title entry-title'>
      <b:if cond='data:post.link or (data:post.url and data:view.url != data:post.url)'>
        <a expr:href='data:post.link ?: data:post.url'><data:post.title/></a>
      <b:else/>
        <data:post.title/>
      </b:if>
    </h3>
  </b:if>
</b:includable>
                      <b:includable id='previousPageLink'><!-- Don't show --></b:includable>
                      <b:includable id='sharingButtonContent'>
          <b:comment>Mark parent byline element as a flat-button.</b:comment>
          <b:class name='flat-button ripple'/>
          <b:message name='messages.share'/>
        </b:includable>
                      <b:includable id='threadedCommentForm' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <h4 id='comment-post-message'><data:messages.postAComment/></h4>
    <b:if cond='data:this.messages.blogComment != &quot;&quot;'>
      <p><data:this.messages.blogComment/></p>
    </b:if>
    <b:include data='post' name='commentFormIframeSrc'/>
    <iframe allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight ?: &quot;90px&quot;' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
                      <b:includable id='threadedCommentJs' var='post'>
  <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>
  <b:template-script inline='true' name='threaded_comments'/>
  <script type='text/javascript'>
    blogger.widgets.blog.initThreadedComments(
        <data:post.commentJso/>,
        <data:post.commentMsgs/>,
        <data:post.commentConfig/>);
  </script>
</b:includable>
                      <b:includable id='threadedComments' var='post'>
  <section class='comments threaded' expr:data-embed='data:post.embedCommentForm' expr:data-num-comments='data:post.numberOfComments' id='comments'>
    <a name='comments'/>

    <b:include name='commentsTitle'/>

    <div class='comments-content'>
      <b:if cond='data:post.embedCommentForm'>
        <b:include data='post' name='threadedCommentJs'/>
      </b:if>
      <div id='comment-holder'>
         <data:post.commentHtml/>
      </div>
    </div>

    <p class='comment-footer'>
      <b:if cond='data:post.allowNewComments'>
        <b:include data='post' name='threadedCommentForm'/>
      <b:else/>
        <data:post.noNewCommentsText/>
      </b:if>
      <b:if cond='data:post.showManageComments'>
        <b:include data='post' name='manageComments'/>
      </b:if>
    </p>

    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='allowtransparency' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>
  </section>
</b:includable>
                    </b:widget>
                    <b:widget cond='data:view.isSingleItem and data:posts any (p =&gt; p.id != data:view.postId)' id='PopularPosts1' locked='true' title='' type='PopularPosts' visible='true'>
                      <b:widget-settings>
                        <b:widget-setting name='numItemsToShow'>3</b:widget-setting>
                        <b:widget-setting name='showThumbnails'>true</b:widget-setting>
                        <b:widget-setting name='showSnippets'>true</b:widget-setting>
                        <b:widget-setting name='timeRange'>LAST_YEAR</b:widget-setting>
                      </b:widget-settings>
                      <b:includable id='main' var='this'>
          <!-- Default the title to 'Popular posts from this blog'. -->
          <b:with value='data:messages.popularPostsFromThisBlog' var='defaultTitle'>
            <b:include name='widget-title'/>
          </b:with>
          <b:include name='snippetedPosts'/>
        </b:includable>
                      <b:includable id='commentsLink'>
          <a class='comment-link flat-button ripple' expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
            <b:if cond='data:post.numberOfComments &gt; 0'>
              <b:message name='messages.numberOfComments'>
                <b:param expr:value='data:post.numberOfComments' name='numComments'/>
              </b:message>
            <b:else/>
              <data:messages.postAComment/>
            </b:if>
          </a>
        </b:includable>
                      <b:includable id='footerBylines'>
          <b:if cond='data:view.isSingleItem and data:widget.type == &quot;Blog&quot;'>
            <b:include name='super.footerBylines'/>
          <b:else/>
            <b:include data='{ items: [[&quot;share&quot;, &quot;comments&quot;]] }' name='footerBylinesOverride'/>
          </b:if>
        </b:includable>
                      <b:includable id='headerByline'>
          <b:if cond='data:view.isSingleItem and data:widget.type == &quot;Blog&quot;'>
            <b:include name='super.headerByline'/>
          <b:else/>
            <b:include data='{ items: [&quot;author&quot;, &quot;timestamp&quot;] }' name='headerBylineOverride'/>
          </b:if>
        </b:includable>
                      <b:includable id='postFooter' var='post'>
          <div class='post-bottom'>
            <div class='post-footer'>
              <!-- Footer bylines -->
              <b:include name='footerBylines'/>
            </div>
            <b:include cond='data:view.isSingleItem and data:widget.type == &quot;Blog&quot;' data='{ shareButtonClass: &quot;post-share-buttons-bottom&quot;, overridden: true }' name='maybeAddShareButtons'/>
            <b:include cond='data:view.isMultipleItems or data:widget.type == &quot;PopularPosts&quot;' data='post' name='postJumpLink'/>
          </div>
        </b:includable>
                      <b:includable id='postJumpLink' var='post'>
          <b:comment>Show a &#39;read more&#39; link if no jump link is present.</b:comment>
          <div class='byline jump-link'>
            <a class='flat-button ripple' expr:href='data:post.hasJumpLink ? data:post.url fragment &quot;more&quot; : data:post.url' expr:title='data:post.title'>
              <b:eval expr='data:blog.jumpLinkMessage'/>
            </a>
          </div>
        </b:includable>
                      <b:includable id='postShareButtons'>
          <b:include cond='data:view.isMultipleItems or data:widget.type != &quot;Blog&quot;' name='super.postShareButtons'/>
        </b:includable>
                      <b:includable id='sharingButtonContent'>
          <b:comment>Mark parent byline element as a flat-button.</b:comment>
          <b:class name='flat-button ripple'/>
          <b:message name='messages.share'/>
        </b:includable>
                      <b:includable id='snippetedPostContent'>
          <div class='post-outer-container'>
            <!-- post title and body -->
            <div class='post-outer'>
              <b:with value='&quot;popular-posts&quot;' var='snippetPrefix'>
                <b:include name='normalPost'/>
              </b:with>
            </div>
          </div>
        </b:includable>
                    </b:widget>
                  </b:section>
                </main>
              </div>
            </div>
        </div>
        <aside class='sidebar-container sidebar-invisible' role='complementary'>
          <div class='navigation container'>
            <b:include data='{ button: true, iconClass: &quot;sidebar-back flat-icon-button ripple&quot; }' name='forwardArrowIcon'/>
          </div>
          <b:section class='sidebar' id='sidebar' name='Sidebar' preferred='yes'>
            <b:widget id='Profile1' locked='false' title='من أنا' type='Profile' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='showaboutme'>true</b:widget-setting>
                <b:widget-setting name='showlocation'>false</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main' var='widget'>
          <div class='wrapper'>
            <b:class cond='!data:widget.team' name='solo'/>
            <b:comment>No title for single profiles. Default to &#39;Blog authors&#39; for team.</b:comment>
            <b:with value='data:messages.blogAuthors' var='defaultTitle'>
              <b:include name='super.main'/>
            </b:with>
          </div>
        </b:includable>
              <b:includable id='authorProfileImage'>
  <img class='profile-img' expr:alt='data:messages.myPhoto' expr:height='data:authorPhoto.height' expr:src='data:authorPhoto.image' expr:width='data:authorPhoto.width'/>
</b:includable>
              <b:includable id='content'>
  <b:if cond='data:team'>
    <div class='widget-content team'>
      <b:include name='teamProfile'/>
    </div>
  <b:else/>
    <div class='widget-content individual'>
      <b:include name='userProfile'/>
    </div>
  </b:if>
</b:includable>
              <b:includable id='defaultProfileImage'>
          <div class='default-avatar-wrapper'>
            <b:include data='{ iconClass: &quot;avatar-icon&quot; }' name='defaultAvatarIcon'/>
          </div>
        </b:includable>
              <b:includable id='profileImage'>
  <b:if cond='data:authorPhoto.image'>
    <b:include name='authorProfileImage'/>
  <b:else/>
    <b:include name='defaultProfileImage'/>
  </b:if>
</b:includable>
              <b:includable id='teamProfile'>
  <ul>
    <b:loop values='data:authors' var='author'>
      <li>
        <div class='team-member'>
          <b:include data='author' name='teamProfileLink'/>
        </div>
      </li>
    </b:loop>
  </ul>
</b:includable>
              <b:includable id='teamProfileLink'>
  <a class='profile-link g-profile' expr:href='data:userUrl' rel='nofollow'>
    <b:include name='profileImage'/>
    <span class='profile-name'><data:display-name/></span>
  </a>
</b:includable>
              <b:includable id='userLocation'>
          <dd class='profile-data profile-location'><data:location/></dd>
        </b:includable>
              <b:includable id='userProfile'>
  <b:include name='userProfileImage'/>
  <b:include name='userProfileInfo'/>
</b:includable>
              <b:includable id='userProfileData'>
  <dt class='profile-data'>
    <a class='profile-link g-profile' expr:href='data:userUrl' rel='author nofollow'>
      <data:displayname/>
    </a>
  </dt>
</b:includable>
              <b:includable id='userProfileImage'>
  <a expr:href='data:userUrl' rel='nofollow'>
    <b:include name='profileImage'/>
  </a>
</b:includable>
              <b:includable id='userProfileInfo'>
  <div class='profile-info'>
    <dl class='profile-datablock'>
      <b:class cond='data:showlocation and data:location != &quot;&quot;' name='has-location'/>

      <b:include name='userProfileData'/>
      <b:include cond='data:showlocation and data:location != &quot;&quot;' name='userLocation'/>
      <b:include cond='data:aboutme != &quot;&quot;' name='userProfileText'/>
    </dl>
    <b:include name='viewProfileLink'/>
  </div>
</b:includable>
              <b:includable id='userProfileText'>
          <dd class='profile-textblock profile-snippet snippet-container r-snippet-container'>
            <div class='snippet-item r-snippetized'>
              <data:aboutme/>
            </div>
            <div class='snippet-fade r-snippet-fade hidden'/>
          </dd>
        </b:includable>
              <b:includable id='viewProfileLink'>
          <a class='profile-link' expr:href='data:userUrl' rel='author'>
            <data:messages.visitProfile/>
          </a>
        </b:includable>
            </b:widget>
            <b:widget id='BlogArchive1' locked='false' title='' type='BlogArchive' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='showStyle'>FLAT</b:widget-setting>
                <b:widget-setting name='yearPattern'>yyyy</b:widget-setting>
                <b:widget-setting name='showWeekEnd'>true</b:widget-setting>
                <b:widget-setting name='monthPattern'>MMMM yyyy</b:widget-setting>
                <b:widget-setting name='dayPattern'>MMM dd</b:widget-setting>
                <b:widget-setting name='weekPattern'>MM/dd</b:widget-setting>
                <b:widget-setting name='chronological'>false</b:widget-setting>
                <b:widget-setting name='showPosts'>true</b:widget-setting>
                <b:widget-setting name='frequency'>MONTHLY</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main' var='this'>
          <details class='collapsible extendable'>
            <b:attr cond='data:view.isArchive' name='open' value='open'/>
            <b:with value='true' var='renderAsDetails'>
            <b:with value='data:messages.archive' var='defaultTitle'>
              <b:include name='super.main'/>
            </b:with>
            </b:with>
          </details>
        </b:includable>
              <b:includable id='content'>
  <div class='widget-content'>
    <div id='ArchiveList'>
      <div expr:id='data:widget.instanceId + &quot;_ArchiveList&quot;'>
        <b:include cond='data:this.style == &quot;HIERARCHY&quot;' name='hierarchy'/>
        <b:include cond='data:this.style in {&quot;FLAT&quot;, &quot;MENU&quot;}' name='flat'/>
      </div>
    </div>
  </div>
</b:includable>
              <b:includable id='flat'>
          <b:include data='{                               buttonClass: &quot;flat-button&quot;,                               items: data:this.data,                               itemSet: &quot;data&quot;,                               itemsMarkup: &quot;super.flat&quot;                             }' name='extendableItems'/>
        </b:includable>
              <b:includable id='hierarchy'>
          <b:include data='{                               buttonClass: &quot;flat-button&quot;,                               limit: 1,                               items: data:this.data,                               itemSet: &quot;data&quot;,                               itemsMarkup: &quot;super.hierarchy&quot;                             }' name='extendableItems'/>
        </b:includable>
              <b:includable id='interval' var='intervals'>
  <ul class='hierarchy'>
    <b:loop values='data:intervals' var='interval'>
      <li class='archivedate'>
        <div class='hierarchy-title'>
          <a class='post-count-link' expr:href='data:interval.url'>
            <data:interval.name/>
            <span class='post-count'><data:interval.post-count/></span>
          </a>
        </div>
        <div class='hierarchy-content'>
          <b:include cond='data:interval.data' data='interval.data' name='interval'/>
          <b:include cond='data:interval.posts' data='interval.posts' name='posts'/>
        </div>
      </li>
    </b:loop>
  </ul>
</b:includable>
              <b:includable id='posts' var='posts'>
  <ul class='posts hierarchy'>
    <b:loop values='data:posts' var='post'>
      <li>
        <a expr:href='data:post.url'><data:post.title/></a>
      </li>
    </b:loop>
  </ul>
</b:includable>
            </b:widget>
            <b:widget id='Label1' locked='false' title='Labels' type='Label' visible='true'>
              <b:widget-settings>
                <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
                <b:widget-setting name='display'>LIST</b:widget-setting>
                <b:widget-setting name='selectedLabelsList'/>
                <b:widget-setting name='showType'>ALL</b:widget-setting>
                <b:widget-setting name='showFreqNumbers'>false</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main' var='this'>
          <details class='collapsible extendable'>
            <b:attr cond='data:view.isLabelSearch' name='open' value='open'/>
            <b:with value='true' var='renderAsDetails'>
            <b:with value='data:messages.labels' var='defaultTitle'>
              <b:include name='super.main'/>
            </b:with>
            </b:with>
          </details>
        </b:includable>
              <b:includable id='cloud'>
          <!-- Always display list format. -->
          <b:include name='list'/>
        </b:includable>
              <b:includable id='content'>
  <div class='widget-content'>
    <b:class expr:name='data:this.display + &quot;-label-widget-content&quot;'/>
    <b:include cond='data:this.display == &quot;list&quot;' name='list'/>
    <b:include cond='data:this.display == &quot;cloud&quot;' name='cloud'/>
  </div>
</b:includable>
              <b:includable id='list'>
          <b:include data='{                               buttonClass: &quot;flat-button&quot;,                               items: data:this.labels,                               itemSet: &quot;labels&quot;,                               itemsMarkup: &quot;super.list&quot;                             }' name='extendableItems'/>
        </b:includable>
            </b:widget>
            <b:widget id='ReportAbuse1' locked='true' title='' type='ReportAbuse' visible='true'>
              <b:includable id='main'>
  <b:include name='reportAbuse'/>
</b:includable>
            </b:widget>
            <b:widget id='AdSense1' locked='false' title='' type='AdSense' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='style.textcolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='style.layout'>1x1</b:widget-setting>
                <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='style.urlcolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='style.linkcolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <div class='widget-content'>
    <b:if cond='data:adCode'>
      <data:adCode/>
    <b:else/>
      <b:include name='defaultAdUnit'/>
    </b:if>
  </div>
</b:includable>
              <b:includable id='defaultAdUnit'>
          <!-- Clear out style (need non-empty string) -->
          <b:with value='&quot;/* Done in css. */&quot;' var='style'>
            <b:include name='super.defaultAdUnit'/>
          </b:with>
        </b:includable>
            </b:widget>
            <b:widget id='AdSense2' locked='false' title='' type='AdSense' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='style.textcolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='style.layout'>1x1</b:widget-setting>
                <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='style.urlcolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='style.linkcolor'>#ffffff</b:widget-setting>
                <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <div class='widget-content'>
    <b:if cond='data:adCode'>
      <data:adCode/>
    <b:else/>
      <b:include name='defaultAdUnit'/>
    </b:if>
  </div>
</b:includable>
              <b:includable id='defaultAdUnit'>
          <!-- Clear out style (need non-empty string) -->
          <b:with value='&quot;/* Done in css. */&quot;' var='style'>
            <b:include name='super.defaultAdUnit'/>
          </b:with>
        </b:includable>
            </b:widget>
            <b:widget id='HTML1' locked='false' title='adsense' type='HTML' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='content'/>
              </b:widget-settings>
              <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
            </b:widget>
            <b:widget id='HTML2' locked='false' title='ما هو لونك المفضل؟' type='HTML' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='content'>&lt;script type=&quot;text/javascript&quot;&gt;
function bgChange(bg)
{
document.body.style.background=bg;
}
&lt;/script&gt;
&lt;table border=&quot;1&quot; width=&quot;100%&quot; height=&quot;20&quot;&gt;
&lt;tbody&gt;&lt;tr&gt;
&lt;td onclick=&quot;bgChange(&#39;#8B008B&#39;)&quot; bgcolor=&quot;#8B008B&quot;&gt;
&lt;/td&gt;
&lt;td onclick=&quot;bgChange(&#39;#9400D3&#39;)&quot; bgcolor=&quot;#9400D3&quot;&gt;
&lt;/td&gt;
&lt;td onclick=&quot;bgChange(&#39;#008080&#39;)&quot; bgcolor=&quot;#008080&quot;&gt;
&lt;/td&gt;
&lt;td onclick=&quot;bgChange(&#39;#808080&#39;)&quot; bgcolor=&quot;#808080&quot;&gt;
&lt;/td&gt;
&lt;td onclick=&quot;bgChange(&#39;#CD853F&#39;)&quot; bgcolor=&quot;#CD853F&quot;&gt;
&lt;/td&gt;
&lt;td onclick=&quot;bgChange(&#39;#2F4F4F&#39;)&quot; bgcolor=&quot;#2F4F4F&quot;&gt;
&lt;/td&gt;
&lt;td onclick=&quot;bgChange(&#39;#DC143C&#39;)&quot; bgcolor=&quot;#DC143C&quot;&gt;
&lt;/td&gt;
&lt;td onclick=&quot;bgChange(&#39;#4B0082&#39;)&quot; bgcolor=&quot;#4B0082&quot;&gt;
&lt;/td&gt;
&lt;td onclick=&quot;bgChange(&#39;#0000&#39;)&quot; bgcolor=&quot;#0000&quot;&gt;
&lt;/td&gt;
&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
            </b:widget>
            <b:widget id='HTML3' locked='false' title='دينك دينك لحمك دمك' type='HTML' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='content'>&lt;center&gt;&lt;iframe align=&quot;center&quot; id=&quot;IW_frame_1438&quot; src=&quot;http://www.tvquran.com/add/index.htm&quot; frameborder=&quot;0&quot; allowtransparency=&quot;1&quot; scrolling=&quot;no&quot; width=&quot;302&quot; height=&quot;334&quot;&gt;&lt;/iframe&gt;&lt;/center&gt;

اخواني القصد من هذه الاضافة ان التطور والتكنولوجيا لا تلهينا عن ديننا</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
            </b:widget>
            <b:widget id='HTML4' locked='false' title='دينك دينك لحمك دمك' type='HTML' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='content'>&lt;iframe src=&quot;http://prayer-time.com/graphical-widget/?width=260&amp;locid=24766&amp;method=3&quot; style=&quot;overflow:hidden;height:650px;width:100%;&quot; &gt;
&lt;/iframe&gt;</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
            </b:widget>
            <b:widget id='Text1' locked='false' title='انضم  لنا الان' type='Text' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='content'><![CDATA[<span style="font-family: Georgia, serif, 'Segoe UI Emoji', 'Segoe UI Symbol', Symbola, EmojiSymbols !important; font-size: 100%; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal;font-family:Georgia, serif, Segoe UI Emoji, Segoe UI Symbol, Symbola, EmojiSymbols;font-size:100%;">اهلا اصدقائي متابعي مدونة بنان المحترف اذا اردت الانضمام لفريق مدونة يوما وفكرت بأن يكون الانضمام سهلا ؟؟ اهنأك الان وجدت ماتبحث عنه والسبب المدونة ليس فيها مدونون حتى الان من مميزاتنا الانضمام بدون شروط لاول 4 مدونين اذا اردت الانضمام ليس عليك ان تفعل شيئ سوا ان تضمني الى دوائرك في جوجل بلاس او مراسلتي على bnan776@gmail.com</span><div style="font-family: Georgia, serif, 'Segoe UI Emoji', 'Segoe UI Symbol', Symbola, EmojiSymbols !important; font-size: 100%; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal;">او </div><div style="font-family: Georgia, serif, 'Segoe UI Emoji', 'Segoe UI Symbol', Symbola, EmojiSymbols !important; font-size: 100%; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal;">hakimhakim41@hotmail.com</div><div style="font-family: Georgia, serif, 'Segoe UI Emoji', 'Segoe UI Symbol', Symbola, EmojiSymbols !important; font-size: 100%; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal;">او سكايب</div><div style="font-family: Georgia, serif, 'Segoe UI Emoji', 'Segoe UI Symbol', Symbola, EmojiSymbols !important; font-size: 100%; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal;">المحترف بنان</div><div style="font-family: Georgia, serif, 'Segoe UI Emoji', 'Segoe UI Symbol', Symbola, EmojiSymbols !important; font-size: 100%; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal;"><br /></div><div style="font-family: Georgia, serif, 'Segoe UI Emoji', 'Segoe UI Symbol', Symbola, EmojiSymbols !important; font-size: 100%; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal;">او <u>فيس بوك</u></div><div style="font-family: Georgia, serif, 'Segoe UI Emoji', 'Segoe UI Symbol', Symbola, EmojiSymbols !important; font-size: 100%; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal;"><u><br /></u></div><div><u style="font-family: Georgia, serif, 'Segoe UI Emoji', 'Segoe UI Symbol', Symbola, EmojiSymbols !important; font-size: 100%; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal;">fb.com/</u><span style="font-family:Georgia, serif, Segoe UI Emoji, Segoe UI Symbol, Symbola, EmojiSymbols;"><u>jero.mero.39</u></span></div><div style="font-family: Georgia, serif, 'Segoe UI Emoji', 'Segoe UI Symbol', Symbola, EmojiSymbols !important; font-size: 100%; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal;"><u><br /></u></div><div style="font-family: Georgia, serif, 'Segoe UI Emoji', 'Segoe UI Symbol', Symbola, EmojiSymbols !important; font-size: 100%; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal;"><u>مدير المدونة بنان عبد الحكيم</u></div><div style="font-family: Georgia, serif, 'Segoe UI Emoji', 'Segoe UI Symbol', Symbola, EmojiSymbols !important; font-size: 100%; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal;"><br /></div>]]></b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
            </b:widget>
            <b:widget id='HTML5' locked='false' title='تابعنا عبر الفيسبوك' type='HTML' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='content'>&lt;div style=&quot;position: fixed; z-index: 65535; left: 0px; bottom: -3px; width:100%;&quot;&gt;
&lt;marquee&gt;&lt;a href=&quot;https://www.facebook.com/man.dark.bnu&quot; target=&quot;blank&quot;&gt; &lt;abbr title=&quot;Follow us at Facebook&quot;&gt;&lt;img src=&quot;https://lh6.googleusercontent.com/-GkiFhqMMfJE/T9GGUsW6daI/AAAAAAAAADE/dTDsfOdWrJM/s69/I1.png&quot;/&gt; &lt;/abbr&gt; &lt;/a&gt; &lt;/marquee&gt; &lt;/div&gt;</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
            </b:widget>
            <b:widget id='HTML6' locked='false' title='تابعني على الفيسبوك' type='HTML' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='content'><![CDATA[<iframe src="//www.facebook.com/plugins/follow?href=https%3A%2F%2Fwww.facebook.com%2Fman.dark.bnu&amp;layout=standard&amp;show_faces=true&amp;colorscheme=light&amp;width=450&amp;height=80" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:80px;" allowtransparency="true"></iframe>]]></b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
            </b:widget>
            <b:widget id='HTML7' locked='false' title='تابعني انستا' type='HTML' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='content'>&lt;blockquote class=&quot;instagram-media&quot; data-instgrm-captioned data-instgrm-version=&quot;7&quot; style=&quot; background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);&quot;&gt;&lt;div style=&quot;padding:8px;&quot;&gt; &lt;div style=&quot; background:#F8F8F8; line-height:0; margin-top:40px; padding:37.4537037037037% 0; text-align:center; width:100%;&quot;&gt; &lt;div style=&quot; background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;&quot;&gt;&lt;/div&gt;&lt;/div&gt; &lt;p style=&quot; margin:8px 0 0 0; padding:0 4px;&quot;&gt; &lt;a href=&quot;https://www.instagram.com/p/BPGIfLKgxXL/&quot; style=&quot; color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;&quot; target=&quot;_blank&quot;&gt;#صدام&lt;/a&gt;&lt;/p&gt; &lt;p style=&quot; color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;&quot;&gt;A video posted by 🇮🇶 🇮🇶🇮🇶🇮🇶🇮🇶🇮🇶🇮🇶🇮🇶BURASI IRAK🇮🇶 (@i.3ashig) on &lt;time style=&quot; font-family:Arial,sans-serif; font-size:14px; line-height:17px;&quot; datetime=&quot;2017-01-10T19:36:46+00:00&quot;&gt;Jan 10, 2017 at 11:36am PST&lt;/time&gt;&lt;/p&gt;&lt;/div&gt;&lt;/blockquote&gt;
&lt;script async defer src=&quot;//platform.instagram.com/en_US/embeds.js&quot;&gt;&lt;/script&gt;</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
            </b:widget>
            <b:widget id='HTML8' locked='false' title='' type='HTML' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='content'><![CDATA[السلام عليكم كيفك اتمنى تتابعني انستاقرام وتعرف اخر الاخبار من الاضافة الموجودة فوق.<style type="text/css">body, a, a:hover {cursor: url(http://cur.cursors-4u.net/toons/too-5/too430.cur), progress;}</style>]]></b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
            </b:widget>
          </b:section>
        </aside>
      </div>
      <b:section class='footer' id='footer' name='Footer' showaddelement='false' tag='footer'>
        <b:widget id='Attribution1' locked='true' title='' type='Attribution' visible='true'>
          <b:widget-settings>
            <b:widget-setting name='copyright'/>
          </b:widget-settings>
          <b:includable id='main' var='this'>
  <div class='widget-content'>
    <div class='blogger'>
      <a expr:href='data:bloggerUrl' rel='nofollow'>
        <b:include name='flatBloggerIcon'/>
        <b:message name='messages.poweredByBlogger'/>
      </a>
    </div>

    <b:if cond='data:imageAuthor'>
      <div class='image-attribution'>
        <b:if cond='data:imageAuthor.url'>
          <b:message name='messages.templateImagesByLink'>
            <b:param expr:value='data:imageAuthor.url'/>
            <b:param expr:value='data:imageAuthor.name'/>
          </b:message>
        <b:else/>
          <b:message name='messages.templateImagesBy'>
            <b:param expr:value='data:imageAuthor.name'/>
          </b:message>
        </b:if>
      </div>
    </b:if>

    <b:if cond='data:copyright != &quot;&quot;'>
      <div class='copyright'><data:copyright/></div>
    </b:if>
  </div>
</b:includable>
        </b:widget>
      </b:section>
    </div>

    <b:template-script async='true' name='rockpool' version='1.0.0'/>
  </body>
</html>
