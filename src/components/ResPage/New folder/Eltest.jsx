import "./Eltest.scss";
import DeleteIcon from "./../../../Icons/DeleteIcon";

const Eltest = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/glider-js@1.6.0/glider.min.css"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/public/img/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/public/img/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/public/img/favicons/safari-pinned-tab.svg"
        color="#E32207"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#E32207" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link
        href="/public/img/splashscreens/iphone5_splash.png"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/img/splashscreens/iphone6_splash.png"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/img/splashscreens/iphoneplus_splash.png"
        media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/img/splashscreens/iphonex_splash.png"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/img/splashscreens/iphonexr_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/img/splashscreens/iphonexsmax_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/img/splashscreens/ipad_splash.png"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/img/splashscreens/ipadpro1_splash.png"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/img/splashscreens/ipadpro3_splash.png"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/public/img/splashscreens/ipadpro2_splash.png"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      {/* Start SmartBanner configuration */}
      <meta name="smartbanner:title" content="Bon Appetit from elmenus!" />
      <meta name="smartbanner:button" content="Download" />
      <meta
        name="smartbanner:author"
        content="Discover thousands of restaurants and order the food you will love!"
      />
      <meta name="smartbanner:price" content="" />
      <meta name="smartbanner:price-suffix-apple" content=" " />
      <meta name="smartbanner:price-suffix-google" content=" " />
      <meta
        name="smartbanner:icon-apple"
        content="/public/img/app-install-icon.png"
      />
      <meta
        name="smartbanner:icon-google"
        content="/public/img/app-install-icon.png"
      />
      <meta name="smartbanner:button" content="Download" />
      <meta name="smartbanner:disable-positioning" content="true" />
      <meta
        name="smartbanner:button-url-apple"
        content="https://elmenus.page.link/3qgU"
      />
      <meta
        name="smartbanner:button-url-google"
        content="https://elmenus.page.link/3qgU"
      />
      <meta name="smartbanner:enabled-platforms" content="android,ios" />
      <meta name="smartbanner:append-to-selector" content="android,ios" />
      <meta name="smartbanner:icon-apple" content="/public/img/newLogo.svg" />
      <meta name="smartbanner:icon-google" content="/public/img/newLogo.svg" />
      {/* End SmartBanner configuration */}
      {/*------------NEW Relic------------*/}
      {/*  */}
      {/*------------End New Relic--------*/}
      <meta
        name="facebook-domain-verification"
        content="k3dxnpdpxxt4qtgpkh9370ldnoqxy0"
      />
      <link rel="stylesheet" href="/public/css/anno.css" />
      {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
      {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
      {/*[if lt IE 9]>
  
  
<![endif]*/}
      <link rel="stylesheet" href="/public/main.css?v=6.51" />
      <link href="/public/css/fonts/Gilroy.css" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Cairo:700&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  /* The input */\n.tags-input {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\n.tags-input input {\n    flex: 1;\n    background: transparent;\n    border: none;\n}\n\n.tags-input input:focus {\n    outline: none;\n}\n\n.tags-input input[type=\"text\"] {\n    color: #495057;\n}\n\n.tags-input-wrapper-default {\n    padding: .5em .25em;\n\n    background: #fff;\n\n    border: 1px solid transparent;\n    border-radius: .25em;\n    border-color: #dbdbdb;\n}\n\n.tags-input-wrapper-default.active {\n    border: 1px solid #8bbafe;\n    box-shadow: 0 0 0 0.2em rgba(13, 110, 253, 0.25);\n    outline: 0 none;\n}\n\n/* The tag badges & the remove icon */\n.tags-input span {\n    margin-right: 0.3em;\n}\n\n.tags-input-remove {\n    cursor: pointer;\n    position: absolute;\n    display: inline-block;\n    right: 0.3em;\n    top: 0.3em;\n    padding: 0.5em;\n    overflow: hidden;\n}\n\n.tags-input-remove:focus {\n    outline: none;\n}\n\n.tags-input-remove:before, .tags-input-remove:after {\n    content: '';\n    position: absolute;\n    width: 75%;\n    left: 0.15em;\n    background: #5dc282;\n    \n    height: 2px;\n    margin-top: -1px;\n}\n\n.tags-input-remove:before {\n    transform: rotate(45deg);\n}\n.tags-input-remove:after {\n    transform: rotate(-45deg);\n}\n\n/* Tag badge styles */\n.tags-input-badge {\n    position: relative;\n    display: inline-block;\n    padding: 0.25em 0.4em;\n    font-size: 75%;\n    font-weight: 700;\n    line-height: 1;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: baseline;\n    border-radius: 0.25em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.tags-input-badge-pill {\n    padding-right: 1.25em;\n    padding-left: 0.6em;\n    border-radius: 10em;\n}\n.tags-input-badge-pill.disabled {\n    padding-right: 0.6em;\n}\n\n.tags-input-badge-selected-default {\n    color: #212529;\n    background-color: #f0f1f2;\n}\n\n/* Typeahead */\n.typeahead-hide-btn {\n    color: #999 !important;\n    font-style: italic;\n}\n\n/* Typeahead - badges */\n.typeahead-badges > span {\n    cursor: pointer;\n    margin-right: 0.3em;\n}\n\n/* Typeahead - dropdown */\n.typeahead-dropdown {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    position: absolute;\n    width: 100%;\n    z-index: 1000;\n}\n\n.typeahead-dropdown li {\n    padding: .25em 1em;\n    cursor: pointer;\n}\n\n/* Typeahead elements style/theme */\n.tags-input-typeahead-item-default {\n    color: #fff;\n    background-color: #343a40;\n}\n\n.tags-input-typeahead-item-highlighted-default {\n    color: #fff;\n    background-color: #007bff !important;\n}\n\n",
        }}
      />
      {/* google sign in */}
      {/* google one tap sign in */}
      {/*  */}
      {/* Google Tag Manager */}
      {/* End Google Tag Manager */}
      {/* Anti-flicker snippet (recommended)  */}
      <style
        dangerouslySetInnerHTML={{
          __html: "\n  .async-hide {\n    opacity: 0 !important\n  }\n",
        }}
      />
      {/* Global site tag (gtag.js) - Google Analytics */}
      {/* End Google Analytics */}
      {/* Facebook Pixel Code */}
      <noscript>
        &lt;img height="1" width="1"
        src="https://www.facebook.com/tr?id=233677820159281&amp;ev=PageView
        &amp;noscript=1" /&gt;
      </noscript>
      {/* End Facebook Pixel Code */}
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            ".vue-star-rating-star[data-v-34cbeed1]{display:inline-block}.vue-star-rating-pointer[data-v-34cbeed1]{cursor:pointer}.vue-star-rating[data-v-34cbeed1]{display:flex;align-items:center}.vue-star-rating-inline[data-v-34cbeed1]{display:inline-flex}.vue-star-rating-rating-text[data-v-34cbeed1]{margin-top:7px;margin-left:7px}.vue-star-rating-rtl[data-v-34cbeed1]{direction:rtl}.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-34cbeed1]{margin-right:10px;direction:rtl}",
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            ".vue-star-rating-star[data-v-21f5376e]{overflow:visible!important}",
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    @font-face {\n      font-family: 'SegoeUI_online_security'; \n      src: url(chrome-extension://llbcnfanfmjhpedaedhbcnpgeepdnnok/segoe-ui.woff);\n    }\n\n    @font-face {\n      font-family: 'SegoeUI_bold_online_security'; \n      src: url(chrome-extension://llbcnfanfmjhpedaedhbcnpgeepdnnok/segoe-ui-bold.woff);\n    }\n",
        }}
      />
      <link
        href="https://fonts.googleapis.com/css?family=Noto Sans"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".av-extension{--dark-blue-background: #183360;--active-blue-font-color: #183360;--modal-header-darkblue-background: #05153f;--grey-font-color: #93a0b5;--background-color: #f1f4f8;--foreground-color: #ffffff;--tertiary-color: #05153f;--primary-font-color: #183360;--green-font-color: #04d289;--red-font-color: #ff3b30;--purple-font-color: #6726ff;--orange-color: #ff8f11;--default-font-size: 18px;--modal-header-background: #f2f2f2;--hover-orange-color: #d97a0e}.av-extension h1{font-family:'Segoe UI Bold';font-size:50px;font-weight:700;line-height:66.5px}.av-extension h2{font-size:30px;padding:0px;margin:5px 0px;margin-top:0px}.av-extension h3{font-size:20px;font-weight:normal;white-space:pre-line}.av-extension p{padding:0px;margin:5px 0px}.av-extension a{text-decoration:none}.av-extension .flex{display:flex}.av-extension .grid{display:grid}.av-extension .fwrap{flex-wrap:wrap}.av-extension .ait{align-items:top}.av-extension .aic{align-items:center}.av-extension .jcl{justify-content:left}.av-extension .jcc{justify-content:center}.av-extension .jcr{justify-content:right}.av-extension .tac{text-align:center}.av-extension .w100{width:100%}.av-extension .sb{font-weight:600}.av-extension .borderButtonColor{color:var(--orange-color);border:3px solid var(--orange-color)}.av-extension .paddinglr{padding:100px 50px}.av-extension .redColor{color:var(--red-font-color);fill:var(--red-font-color)}.av-extension .greenColor{color:var(--green-font-color);fill:var(--green-font-color)}.av-extension .purpleColor{color:var(--purple-font-color)}.av-extension .orangeColor{color:var(--orange-color)}.av-extension .content{color:var(--primary-font-color);margin:auto;max-width:85%;padding-top:30px;padding-bottom:20px}.av-extension .sectionContent{margin-top:80px;margin-bottom:40px;font-size:22px;color:var(--primary-font-color)}.av-extension .btnAction{min-width:170px;padding:10px 25px;color:var(--orange-color);border:2.5px solid var(--orange-color);border-radius:39px;font-weight:600;background-color:transparent}.av-extension .btnAction:hover{background-color:var(--orange-color);color:white}.av-extension .btnDwm{background:linear-gradient(#fff, #fff) padding-box,linear-gradient(to right, #8526ff, #2a26ff) border-box;border:2.5px solid transparent;color:#7644ff}.av-extension .btnDwm:hover{background:linear-gradient(to right, #8526ff, #2a26ff) padding-box,linear-gradient(to right, #8526ff, #2a26ff) border-box;border:2.5px solid transparent}.av-extension .btnBuy{display:flex;align-items:center;justify-content:center;gap:10px;min-width:170px;padding:15px 40px;color:#fff;border-radius:39px;font-weight:600;background-color:var(--tertiary-color);border:none;cursor:pointer}.av-extension .btnBuy:hover{background-color:#0f3cb0}.av-extension .btnBuy:active{background-color:#0f3391}.av-extension .btnBuyOrange{display:flex;align-items:center;justify-content:center;gap:10px;min-width:170px;padding:15px 40px;color:#fff;border-radius:39px;font-weight:600;background-color:var(--orange-color);border:none;cursor:pointer}.av-extension .btnBuyOrange:hover{background-color:#ffa846}.av-extension .btnBuyOrange:active{background-color:#d97a0e}.av-extension .sectionTitle{font-weight:bold;font-size:20px;margin-bottom:25px}.av-extension .sectionTitle img{margin-left:5px;margin-right:13px}.av-extension .fullHeadContent{height:400px;background:var(--tertiary-color);box-shadow:-3px 0px 3px rgba(0,0,0,0.1);border-radius:0px 0px 22px 22px;color:var(--foreground-color)}.av-extension .fullHeadContent img{width:442px}.av-extension .fullHeadContent p{margin:10px}.av-extension .spinner{width:120px;height:120px}@media screen and (min-width: 1500px){.av-extension .content{max-width:70%}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}\n",
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    @font-face {\n      font-family: 'notosans'; \n      src: url(chrome-extension://llbcnfanfmjhpedaedhbcnpgeepdnnok/noto-sans.woff);\n    }\n\n    @font-face {\n      font-family: 'notosans-bold'; \n      src: url(chrome-extension://llbcnfanfmjhpedaedhbcnpgeepdnnok/noto-sans-bold.woff);\n    }\n",
        }}
      />
      <style
        type="text/css"
        data-fbcssmodules="css:fb.css.base css:fb.css.dialog css:fb.css.iframewidget css:fb.css.customer_chat_plugin_iframe"
        dangerouslySetInnerHTML={{
          __html:
            ".fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:'lucida grande', tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}\n.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:'lucida grande', tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_dialog_advanced{border-radius:8px;padding:10px}.fb_dialog_content{background:#fff;color:#373737}.fb_dialog_close_icon{background:url(https://connect.facebook.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{left:5px;right:auto;top:5px}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://connect.facebook.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://connect.facebook.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://connect.facebook.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}body.fb_hidden{height:100%;left:0;margin:0;overflow:visible;position:absolute;top:-10000px;transform:none;width:100%}.fb_dialog.fb_dialog_mobile.loading{background:url(https://connect.facebook.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{background:none;height:auto;min-height:initial;min-width:initial;width:auto}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100%}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{clear:both;color:#fff;display:block;font-size:18px;padding-top:20px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .4);bottom:0;left:0;min-height:100%;position:absolute;right:0;top:0;width:100%;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:sticky;top:0}.fb_dialog_content .dialog_header{background:linear-gradient(from(#738aba), to(#2c4987));border-bottom:1px solid;border-color:#043b87;box-shadow:white 0 1px 1px -1px inset;color:#fff;font:bold 14px Helvetica, sans-serif;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{height:43px;width:100%}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:linear-gradient(from(#4267B2), to(#2a4887));background-clip:padding-box;border:1px solid #29487d;border-radius:3px;display:inline-block;line-height:18px;margin-top:3px;max-width:85px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{background:none;border:none;color:#fff;font:bold 12px Helvetica, sans-serif;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://connect.facebook.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;border:1px solid #4a4a4a;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #4a4a4a;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://connect.facebook.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-position:50% 50%;background-repeat:no-repeat;height:24px;width:24px}@keyframes rotateSpinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}\n.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100%}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100%}\n.fb_mpn_mobile_landing_page_slide_out{animation-duration:200ms;animation-name:fb_mpn_landing_page_slide_out;transition-timing-function:ease-in}.fb_mpn_mobile_landing_page_slide_out_from_left{animation-duration:200ms;animation-name:fb_mpn_landing_page_slide_out_from_left;transition-timing-function:ease-in}.fb_mpn_mobile_landing_page_slide_up{animation-duration:500ms;animation-name:fb_mpn_landing_page_slide_up;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_in{animation-duration:300ms;animation-name:fb_mpn_bounce_in;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_out{animation-duration:300ms;animation-name:fb_mpn_bounce_out;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_out_v2{animation-duration:300ms;animation-name:fb_mpn_fade_out;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_v2{animation-duration:300ms;animation-name:fb_bounce_in_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_from_left{animation-duration:300ms;animation-name:fb_bounce_in_from_left;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_v2{animation-duration:300ms;animation-name:fb_bounce_out_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_from_left{animation-duration:300ms;animation-name:fb_bounce_out_from_left;transition-timing-function:ease-in}.fb_invisible_flow{display:inherit;height:0;overflow-x:hidden;width:0}@keyframes fb_mpn_landing_page_slide_out{0%{margin:0 12px;width:100% - 24px}60%{border-radius:18px}100%{border-radius:50%;margin:0 24px;width:60px}}@keyframes fb_mpn_landing_page_slide_out_from_left{0%{left:12px;width:100% - 24px}60%{border-radius:18px}100%{border-radius:50%;left:12px;width:60px}}@keyframes fb_mpn_landing_page_slide_up{0%{bottom:0;opacity:0}100%{bottom:24px;opacity:1}}@keyframes fb_mpn_bounce_in{0%{opacity:.5;top:100%}100%{opacity:1;top:0}}@keyframes fb_mpn_fade_out{0%{bottom:30px;opacity:1}100%{bottom:0;opacity:0}}@keyframes fb_mpn_bounce_out{0%{opacity:1;top:0}100%{opacity:.5;top:100%}}@keyframes fb_bounce_in_v2{0%{opacity:0;transform:scale(0, 0);transform-origin:bottom right}50%{transform:scale(1.03, 1.03);transform-origin:bottom right}100%{opacity:1;transform:scale(1, 1);transform-origin:bottom right}}@keyframes fb_bounce_in_from_left{0%{opacity:0;transform:scale(0, 0);transform-origin:bottom left}50%{transform:scale(1.03, 1.03);transform-origin:bottom left}100%{opacity:1;transform:scale(1, 1);transform-origin:bottom left}}@keyframes fb_bounce_out_v2{0%{opacity:1;transform:scale(1, 1);transform-origin:bottom right}100%{opacity:0;transform:scale(0, 0);transform-origin:bottom right}}@keyframes fb_bounce_out_from_left{0%{opacity:1;transform:scale(1, 1);transform-origin:bottom left}100%{opacity:0;transform:scale(0, 0);transform-origin:bottom left}}@keyframes slideInFromBottom{0%{opacity:.1;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}@keyframes slideInFromBottomDelay{0%{opacity:0;transform:translateY(100%)}97%{opacity:0;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}",
        }}
      />
      <link
        href="https://elmenus-team-850690e6007f9f916892002.freshchat.com/widget/css/widget.css?t=1710064031446"
        rel="stylesheet"
      />
      {/* Body goes here */}
      <>
        <div id="app" className="">
          <div id="page-content" className="page-content">
            <div className="container">
              <div className="row">
                <div
                  id="rest-list-col"
                  className="delivery-rest-list col-sm-13 col-xs-16"
                >
                  <div className="col-body">
                    <div className="row">
                      <div className="restaurant-card restaurant-delivery-card col-md-5 col-sm-8 col-xs-16">
                        <div className="card-inner">
                          <img
                            src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/92edf264-8a29-4efb-997a-ca2fdf9b3a92.jpg"
                            alt=""
                            style={{ width: "100%" }}
                          />

                          <div className="card-content clickable-item">
                            <a
                              href="/cairo/popcity--lqxro"
                              className="clickable-anchor"
                            />
                            <div>
                              <div className="pull-right flip">
                                <div
                                  data-v-34cbeed1=""
                                  className="vue-star-rating vue-star-rating-inline"
                                >
                                  <div
                                    data-v-34cbeed1=""
                                    className="vue-star-rating"
                                  >
                                    {/* Star 1 */}
                                    <span
                                      data-v-34cbeed1=""
                                      className="vue-star-rating-star"
                                      style={{ marginRight: 0 }}
                                    >
                                      <svg
                                        data-v-21f5376e=""
                                        data-v-34cbeed1=""
                                        height={14}
                                        width={14}
                                        viewBox="0 0 14 14"
                                        className="vue-star-rating-star"
                                        step={10}
                                      >
                                        <linearGradient
                                          data-v-21f5376e=""
                                          id="c6j5gv"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>
                                        <filter
                                          data-v-21f5376e=""
                                          id="miii5f"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#c6j5gv)"
                                          stroke="#fff"
                                          filter="url(#miii5f)"
                                        />
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#c6j5gv)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#c6j5gv)"
                                        />
                                      </svg>
                                    </span>
                                    {/* Star 2 */}
                                    <span
                                      data-v-34cbeed1=""
                                      className="vue-star-rating-star"
                                      style={{ marginRight: 0 }}
                                    >
                                      <svg
                                        data-v-21f5376e=""
                                        data-v-34cbeed1=""
                                        height={14}
                                        width={14}
                                        viewBox="0 0 14 14"
                                        className="vue-star-rating-star"
                                        step={10}
                                      >
                                        <linearGradient
                                          data-v-21f5376e=""
                                          id="7w5nx"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>
                                        <filter
                                          data-v-21f5376e=""
                                          id="lwez8b"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#7w5nx)"
                                          stroke="#fff"
                                          filter="url(#lwez8b)"
                                        />
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#7w5nx)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#7w5nx)"
                                        />
                                      </svg>
                                    </span>
                                    {/* Star 3 */}
                                    <span
                                      data-v-34cbeed1=""
                                      className="vue-star-rating-star"
                                      style={{ marginRight: 0 }}
                                    >
                                      <svg
                                        data-v-21f5376e=""
                                        data-v-34cbeed1=""
                                        height={14}
                                        width={14}
                                        viewBox="0 0 14 14"
                                        className="vue-star-rating-star"
                                        step={10}
                                      >
                                        <linearGradient
                                          data-v-21f5376e=""
                                          id="ddlxv"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>
                                        <filter
                                          data-v-21f5376e=""
                                          id="jg2jvd"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#ddlxv)"
                                          stroke="#fff"
                                          filter="url(#jg2jvd)"
                                        />
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#ddlxv)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#ddlxv)"
                                        />
                                      </svg>
                                    </span>
                                    {/* Star 4 */}
                                    <span
                                      data-v-34cbeed1=""
                                      className="vue-star-rating-star"
                                      style={{ marginRight: 0 }}
                                    >
                                      <svg
                                        data-v-21f5376e=""
                                        data-v-34cbeed1=""
                                        height={14}
                                        width={14}
                                        viewBox="0 0 14 14"
                                        className="vue-star-rating-star"
                                        step={10}
                                      >
                                        <linearGradient
                                          data-v-21f5376e=""
                                          id="870gag"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>
                                        <filter
                                          data-v-21f5376e=""
                                          id="km1m2a"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#870gag)"
                                          stroke="#fff"
                                          filter="url(#km1m2a)"
                                        />
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#870gag)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#870gag)"
                                        />
                                      </svg>
                                    </span>
                                    {/* Star 5 */}
                                    <span
                                      data-v-34cbeed1=""
                                      className="vue-star-rating-star"
                                      style={{ marginRight: 0 }}
                                    >
                                      <svg
                                        data-v-21f5376e=""
                                        data-v-34cbeed1=""
                                        height={14}
                                        width={14}
                                        viewBox="0 0 14 14"
                                        className="vue-star-rating-star"
                                        step={10}
                                      >
                                        <linearGradient
                                          data-v-21f5376e=""
                                          id="csx8pv"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>
                                        <filter
                                          data-v-21f5376e=""
                                          id="qn4wsm"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#csx8pv)"
                                          stroke="#fff"
                                          filter="url(#qn4wsm)"
                                        />
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#csx8pv)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#csx8pv)"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                                <span className="reviews-count">(119)</span>
                              </div>
                            </div>
                            <div className="rest-logo image-ratio ratio-square radius">
                              <div className="ratio-content image-loading image-loaded">
                                <img
                                  alt="restaurant.data.name"
                                  data-alt="Popcity "
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/9c1140c3-145a-449e-9787-1ff3a51d93d0.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/9c1140c3-145a-449e-9787-1ff3a51d93d0.jpg"
                                  lazy="loaded"
                                />
                              </div>
                            </div>
                            <div className="main-data">
                              <h3 className="card-title">
                                <a
                                  href="/cairo/popcity--lqxro"
                                  style={{ textDecoration: "none" }}
                                >
                                  Popcity
                                </a>
                              </h3>
                            </div>
                          </div>
                          <div className="card-footer clickable-item">
                            <a
                              href="/cairo/popcity--lqxro"
                              className="clickable-anchor"
                            />
                            <span>
                              <span className="icon">
                                <DeleteIcon />
                              </span>
                              60 mins
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Eltest;
