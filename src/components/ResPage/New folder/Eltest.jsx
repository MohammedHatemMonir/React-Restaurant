import "./Eltest.scss";

const Eltest = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/glider-js@1.6.0/glider.min.css"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/public/img/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/public/img/favicons/favicon-32x32.png"
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


   
      
          {/**/} {/**/}{" "}
          <div id="page-content" className="page-content">
            {/**/} {/**/} {/**/}{" "}
            <div className="container">
              <div className="row">
                <div
                  id="filter-col"
                  className="col-sm-3 col-xs-16 min-height-mobile"
                >

                </div>
                <div
                  id="rest-list-col"
                  className="delivery-rest-list col-sm-13 col-xs-16"
                >
                  <div className="row">
                    <h3 className="col-title">
                      Discover Top Dishes
                      <a
                        href="/cairo/delivery/nasr-city-3/dishes-all"
                        className="see-all"
                      >
                        {" "}
                        See All
                      </a>
                    </h3>{" "}
                    <div id="tags-slider" className="slider tags-slider">
                      <div className="tags glider">
                        {" "}
                        {/**/}{" "}
                        <div className="glider-track" style={{ width: 4200 }}>
                          <div
                            className="item glider-slide active visible left-2"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item active">
                              <div className="tag-image image-ratio">
                                <img
                                  src="/public/img/should-delete/all-dishes.png"
                                  alt="elmenus"
                                />
                              </div>{" "}
                              <h2 className="title">All Dishes</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide visible left-1"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Healthy"
                                  data-alt="Healthy"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/ac315914-7bff-4152-87fe-50c7550d4ccc.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/ac315914-7bff-4152-87fe-50c7550d4ccc.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Healthy</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide visible center"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Koshary"
                                  data-alt="Koshary"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/e7d8a085-3da2-4ca9-99fd-92e30a2671e5.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/e7d8a085-3da2-4ca9-99fd-92e30a2671e5.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Koshary</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide visible right-1"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Grills"
                                  data-alt="Grills"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/95a3f445-8c1c-41ec-9ca1-a0cfa65f57d8.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/95a3f445-8c1c-41ec-9ca1-a0cfa65f57d8.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Grills</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide visible right-2"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Shawerma"
                                  data-alt="Shawerma"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b0f20c5e-9402-477f-8ccd-251188b8b2a9.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b0f20c5e-9402-477f-8ccd-251188b8b2a9.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Shawerma</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-3"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Desserts"
                                  data-alt="Desserts"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/fe53ae7b-e1db-4c52-a873-e8f0a4e2424e.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/fe53ae7b-e1db-4c52-a873-e8f0a4e2424e.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Desserts</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-4"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Fried Chicken"
                                  data-alt="Fried Chicken"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/6678f3d6-f52c-4dcf-925d-3152a8fad93e.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/6678f3d6-f52c-4dcf-925d-3152a8fad93e.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Fried Chicken</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-5"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Pizza"
                                  data-alt="Pizza"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/8ff2f336-896e-4be2-92ff-bcca5d079793.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/8ff2f336-896e-4be2-92ff-bcca5d079793.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Pizza</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-6"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Burgers"
                                  data-alt="Burgers"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b67ede8a-2b46-4fe3-b129-81d1fe61778a.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b67ede8a-2b46-4fe3-b129-81d1fe61778a.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Burgers</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-7"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Crepe"
                                  data-alt="Crepe"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/23204a7b-fdc6-4d01-a30e-8a56a922cc1f.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/23204a7b-fdc6-4d01-a30e-8a56a922cc1f.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Crepe</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-8"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Shareables"
                                  data-alt="Shareables"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/3db9a79e-9c91-426f-b93b-0185d5826548.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/3db9a79e-9c91-426f-b93b-0185d5826548.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Shareables</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-9"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Grilled Chicken"
                                  data-alt="Grilled Chicken"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/a26d55d6-dac1-449c-8f14-326bf9a86f08.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/a26d55d6-dac1-449c-8f14-326bf9a86f08.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Grilled Chicken</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-10"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Chinese"
                                  data-alt="Chinese"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/a1462b16-807e-4eb4-8385-c114b28926fa.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/a1462b16-807e-4eb4-8385-c114b28926fa.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Chinese</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-11"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Tacos"
                                  data-alt="Tacos"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/ad76fd9a-2026-484b-82a7-79f8e7b7961d.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/ad76fd9a-2026-484b-82a7-79f8e7b7961d.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Tacos</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-12"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Pasta"
                                  data-alt="Pasta"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/133e9e23-1972-474f-a3a8-0939f53657d8.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/133e9e23-1972-474f-a3a8-0939f53657d8.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Pasta</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-13"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Sushi"
                                  data-alt="Sushi"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/8795ce3c-5752-4ccb-b561-d9ac5228cde1.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/8795ce3c-5752-4ccb-b561-d9ac5228cde1.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Sushi</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-14"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Sandwiches"
                                  data-alt="Sandwiches"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/caba5feb-360b-4796-9b16-72cc5e03924b.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/caba5feb-360b-4796-9b16-72cc5e03924b.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Sandwiches</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-15"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Seafood"
                                  data-alt="Seafood"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/fe5d327f-dca2-4e76-91ae-49031fa6b607.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/fe5d327f-dca2-4e76-91ae-49031fa6b607.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Seafood</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-16"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading image-loaded">
                                <img
                                  alt="Donuts"
                                  data-alt="Donuts"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/ed5aa4fe-eb0f-4ab4-be04-4a9b0562342a.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/ed5aa4fe-eb0f-4ab4-be04-4a9b0562342a.jpg"
                                  lazy="loaded"
                                />
                              </div>{" "}
                              <h2 className="title">Donuts</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-17"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading">
                                <img
                                  alt="Noodles"
                                  data-alt="Noodles"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/81336410-a831-416e-9c3d-a0b77086534e.jpg"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                  lazy="loading"
                                />
                              </div>{" "}
                              <h2 className="title">Noodles</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-18"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading">
                                <img
                                  alt="Vegetarian"
                                  data-alt="Vegetarian"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b9fa44a8-6570-4e8a-8b45-5ab48f241836.jpg"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                  lazy="loading"
                                />
                              </div>{" "}
                              <h2 className="title">Vegetarian</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-19"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading">
                                <img
                                  alt="Breakfast"
                                  data-alt="Breakfast"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/03cf8ee9-8710-4c7a-aa4b-3c80cbf46182.jpg"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                  lazy="loading"
                                />
                              </div>{" "}
                              <h2 className="title">Breakfast</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-20"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading">
                                <img
                                  alt="Waffles"
                                  data-alt="Waffles"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/db1cfa25-73f7-48ac-abd2-78f27ad622dd.jpg"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                  lazy="loading"
                                />
                              </div>{" "}
                              <h2 className="title">Waffles</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-21"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading">
                                <img
                                  alt="Coffee"
                                  data-alt="Coffee"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/bd50f6de-2af2-4726-b43d-fffb1f11f9f2.jpg"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                  lazy="loading"
                                />
                              </div>{" "}
                              <h2 className="title">Coffee</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-22"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading">
                                <img
                                  alt="Feteer"
                                  data-alt="Feteer"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/7f9b44c0-e4d7-48eb-8d1e-120f2b210d9c.jpg"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                  lazy="loading"
                                />
                              </div>{" "}
                              <h2 className="title">Feteer</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-23"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading">
                                <img
                                  alt="Salads"
                                  data-alt="Salads"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/8b92b444-203c-4873-95a7-1b79acc94fce.jpg"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                  lazy="loading"
                                />
                              </div>{" "}
                              <h2 className="title">Salads</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-24"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading">
                                <img
                                  alt="Bakeries"
                                  data-alt="Bakeries"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/507f3109-c643-4852-a514-3a4bc6b944ed.jpg"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                  lazy="loading"
                                />
                              </div>{" "}
                              <h2 className="title">Bakeries</h2>
                            </div>
                          </div>
                          <div
                            className="item glider-slide right-25"
                            style={{ height: "auto", width: 150 }}
                          >
                            <div className="tag-item">
                              <div className="tag-image image-ratio image-loading">
                                <img
                                  alt="Pancakes"
                                  data-alt="Pancakes"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/199235d9-1db3-422b-9a69-8fafd57f5a8b.jpg"
                                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                  lazy="loading"
                                />
                              </div>{" "}
                              <h2 className="title">Pancakes</h2>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <button
                        type="button"
                        className="slider-arrows prev-btn small disabled"
                      >
                        <svg viewBox="0 0 14 25">
                          <use xlinkHref="#angle-left" />
                        </svg>
                      </button>{" "}
                      <button
                        type="button"
                        className="slider-arrows next-btn small"
                      >
                        <svg viewBox="0 0 14 25">
                          <use xlinkHref="#angle-right" />
                        </svg>
                      </button>
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-header col-xs-16">
                      <h3 className="col-title inline-block">
                        Restaurants
                        <span>( 1073 )</span> {/**/}
                      </h3>{" "}
                      <div className="filter-section pull-right flip mobile-only online-ordering">
                        <div className="toggler-checkbox ">
                          <p className="toggler-title">
                            {/**/} <br />{" "}
                            <span className="sub-title error-message">
                              unavailable in Nasr City 3 <br /> right now
                            </span>
                          </p>{" "}
                          <input
                            type="checkbox"
                            id="toggler-input"
                            className="visuallyhidden"
                          />{" "}
                          <label
                            htmlFor="toggler-input"
                            className="toggler-input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="col-body">
                    <div className="row">
                      <div className="restaurant-card restaurant-delivery-card col-md-5 col-sm-8 col-xs-16">
                        <div className="card-inner">
                          <div className="card-images-slider ">
                            <div className="slider-images glider">
                              {/**/}{" "}
                              <div
                                className="glider-track"
                                style={{ width: 1200 }}
                              >
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide left-4"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/popcity--lqxro"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Strawberry & Mango"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/2d5b6d0d-4ec4-4e9b-a48c-ee1a4b4c7e12.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/2d5b6d0d-4ec4-4e9b-a48c-ee1a4b4c7e12.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Strawberry &amp; Mango
                                      </h4>{" "}
                                      <span className="price">40EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide left-3"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/popcity--lqxro"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Mango"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/da0028f2-824f-4fcd-bf76-a1af4620d870.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/da0028f2-824f-4fcd-bf76-a1af4620d870.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">Mango</h4>{" "}
                                      <span className="price">40EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide left-2"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/popcity--lqxro"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Strawberry & Lemon"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/31c534a1-c1d0-4d60-ab3d-b37dd8f46b1c.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/31c534a1-c1d0-4d60-ab3d-b37dd8f46b1c.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Strawberry &amp; Lemon
                                      </h4>{" "}
                                      <span className="price">40EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide left-1"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/popcity--lqxro"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Fiuesicle"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3797a05a-d89f-4d21-8e7a-bb8a51b00130.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3797a05a-d89f-4d21-8e7a-bb8a51b00130.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">Fiuesicle</h4>{" "}
                                      <span className="price">60EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide active center visible"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/popcity--lqxro"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Zesty Blueberry"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/a59f09cf-dad8-4367-93ca-f4c5e9e3f667.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/a59f09cf-dad8-4367-93ca-f4c5e9e3f667.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Zesty Blueberry
                                      </h4>{" "}
                                      <span className="price">40EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>{" "}
                            <button
                              type="button"
                              id="prev0"
                              className="slider-arrows prev-btn small"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-left" />
                              </svg>
                            </button>{" "}
                            <button
                              type="button"
                              id="next0"
                              className="slider-arrows next-btn small disabled"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-right" />
                              </svg>
                            </button>{" "}
                            <div id="dots0" className="glider-dots">
                              <button
                                data-index={0}
                                aria-label="Page 1"
                                className="glider-dot"
                              />
                              <button
                                data-index={1}
                                aria-label="Page 2"
                                className="glider-dot "
                              />
                              <button
                                data-index={2}
                                aria-label="Page 3"
                                className="glider-dot "
                              />
                              <button
                                data-index={3}
                                aria-label="Page 4"
                                className="glider-dot "
                              />
                              <button
                                data-index={4}
                                aria-label="Page 5"
                                className="glider-dot active"
                              />
                            </div>
                          </div>{" "}
                          <div className="card-content clickable-item">
                            <a
                              href="/cairo/popcity--lqxro"
                              className="clickable-anchor"
                            />{" "}
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
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
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
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#c6j5gv)"
                                          stroke="#fff"
                                          filter="url(#miii5f)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#c6j5gv)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#c6j5gv)"
                                        />
                                      </svg>
                                    </span>
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
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
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
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#7w5nx)"
                                          stroke="#fff"
                                          filter="url(#lwez8b)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#7w5nx)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#7w5nx)"
                                        />
                                      </svg>
                                    </span>
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
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
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
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#ddlxv)"
                                          stroke="#fff"
                                          filter="url(#jg2jvd)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#ddlxv)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#ddlxv)"
                                        />
                                      </svg>
                                    </span>
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
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
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
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#870gag)"
                                          stroke="#fff"
                                          filter="url(#km1m2a)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#870gag)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#870gag)"
                                        />
                                      </svg>
                                    </span>
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
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
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
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#csx8pv)"
                                          stroke="#fff"
                                          filter="url(#qn4wsm)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#csx8pv)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#csx8pv)"
                                        />
                                      </svg>
                                    </span>{" "}
                                    {/**/}
                                  </div>
                                </div>{" "}
                                <span className="reviews-count">(119)</span>
                              </div>
                            </div>{" "}
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
                            </div>{" "}
                            <div className="main-data">
                              <h3 className="card-title">
                                <a href="/cairo/popcity--lqxro">Popcity</a>
                              </h3>{" "}
                              <ul className="cuisines-list h-dots-list truncate">
                                <li className="list-item">
                                  Tarts and chocolates
                                </li>
                                <li className="list-item">Bakeries</li>
                                <li className="list-item">Desserts</li>
                              </ul>{" "}
                              <span title="staticContent.filters.onlinePayment">
                                <span className="icon online-payment-icon">
                                  <svg viewBox="0 0 16 17">
                                    <use xlinkHref="#credit" />
                                  </svg>
                                </span>
                              </span>
                            </div>{" "}
                            {/**/}
                          </div>{" "}
                          <div className="card-footer clickable-item">
                            <a
                              href="/cairo/popcity--lqxro"
                              className="clickable-anchor"
                            />{" "}
                            <span>
                              <span className="icon">
                                <svg viewBox="0 0 25 25">
                                  <use xlinkHref="#delivery-icon" />
                                </svg>
                              </span>
                              60 mins
                            </span>{" "}
                            {/**/} {/**/}
                          </div>
                        </div>{" "}
                        <a
                          rel="noopener"
                          target="_blank"
                          href="https://elmenus.page.link/3qgU"
                          className="get-app"
                        />
                        {/**/}
                      </div>
                      <div className="restaurant-card restaurant-delivery-card col-md-5 col-sm-8 col-xs-16">
                        <div className="card-inner">
                          <div className="card-images-slider ">
                            <div className="slider-images glider">
                              {/**/}{" "}
                              <div
                                className="glider-track"
                                style={{ width: 1200 }}
                              >
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide left-2"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/hunger-station-28gqy"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Capitol Fire Sandwich"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/1c2d2ea1-096d-47f0-b7c1-0d52c56800d0.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/1c2d2ea1-096d-47f0-b7c1-0d52c56800d0.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Capitol Fire Sandwich
                                      </h4>{" "}
                                      <span className="price">
                                        129EGP to 95EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide left-1"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/hunger-station-28gqy"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Capitol Sandwich"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/1b69d6a2-ebe2-44c5-99c5-806603ed0186.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/1b69d6a2-ebe2-44c5-99c5-806603ed0186.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Capitol Sandwich
                                      </h4>{" "}
                                      <span className="price">
                                        129EGP to 95EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide active center visible"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/hunger-station-28gqy"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Rizo"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/d068b9d1-62a7-4f9b-80f6-5fdfbdf91496.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/d068b9d1-62a7-4f9b-80f6-5fdfbdf91496.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">Rizo</h4>{" "}
                                      <span className="price">82.50EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-1"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/hunger-station-28gqy"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Chicken Wrap Sandwich"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3f5a7220-02b6-478a-8589-f9e11c5cfbcd.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3f5a7220-02b6-478a-8589-f9e11c5cfbcd.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Chicken Wrap Sandwich
                                      </h4>{" "}
                                      <span className="price">77EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-2"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/hunger-station-28gqy"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Chicken Buffalo Sandwich"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/0aa028e5-94cf-485c-b992-57bcfde89be4.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/0aa028e5-94cf-485c-b992-57bcfde89be4.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Chicken Buffalo Sandwich
                                      </h4>{" "}
                                      <span className="price">
                                        135EGP to 99EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>{" "}
                            <button
                              type="button"
                              id="prev1"
                              className="slider-arrows prev-btn small"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-left" />
                              </svg>
                            </button>{" "}
                            <button
                              type="button"
                              id="next1"
                              className="slider-arrows next-btn small"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-right" />
                              </svg>
                            </button>{" "}
                            <div id="dots1" className="glider-dots">
                              <button
                                data-index={0}
                                aria-label="Page 1"
                                className="glider-dot"
                              />
                              <button
                                data-index={1}
                                aria-label="Page 2"
                                className="glider-dot "
                              />
                              <button
                                data-index={2}
                                aria-label="Page 3"
                                className="glider-dot active"
                              />
                              <button
                                data-index={3}
                                aria-label="Page 4"
                                className="glider-dot "
                              />
                              <button
                                data-index={4}
                                aria-label="Page 5"
                                className="glider-dot "
                              />
                            </div>
                          </div>{" "}
                          <div className="card-content clickable-item">
                            <a
                              href="/cairo/hunger-station-28gqy"
                              className="clickable-anchor"
                            />{" "}
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
                                          id="ojyz1j"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="vi4xf"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#ojyz1j)"
                                          stroke="#fff"
                                          filter="url(#vi4xf)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#ojyz1j)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#ojyz1j)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="nbptgi"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="x8o7wo"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#nbptgi)"
                                          stroke="#fff"
                                          filter="url(#x8o7wo)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#nbptgi)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#nbptgi)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="qxm0tp"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="5poq4j"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#qxm0tp)"
                                          stroke="#fff"
                                          filter="url(#5poq4j)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#qxm0tp)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#qxm0tp)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="elwf6w"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="pcqisa"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#elwf6w)"
                                          stroke="#fff"
                                          filter="url(#pcqisa)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#elwf6w)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#elwf6w)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="yoamh"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="10%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="10%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="l2n34n"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#yoamh)"
                                          stroke="#fff"
                                          filter="url(#l2n34n)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#yoamh)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#yoamh)"
                                        />
                                      </svg>
                                    </span>{" "}
                                    {/**/}
                                  </div>
                                </div>{" "}
                                <span className="reviews-count">(2938)</span>
                              </div>
                            </div>{" "}
                            <div className="rest-logo image-ratio ratio-square radius">
                              <div className="ratio-content image-loading image-loaded">
                                <img
                                  alt="restaurant.data.name"
                                  data-alt="Hunger Station"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/20510ac5-c86c-4a17-a75f-c967d2424994.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/20510ac5-c86c-4a17-a75f-c967d2424994.jpg"
                                  lazy="loaded"
                                />
                              </div>
                            </div>{" "}
                            <div className="main-data">
                              <h3 className="card-title">
                                <a href="/cairo/hunger-station-28gqy">
                                  Hunger Station
                                </a>
                              </h3>{" "}
                              <ul className="cuisines-list h-dots-list truncate">
                                <li className="list-item">Sandwiches</li>
                              </ul>{" "}
                              <span title="staticContent.filters.onlinePayment">
                                <span className="icon online-payment-icon">
                                  <svg viewBox="0 0 16 17">
                                    <use xlinkHref="#credit" />
                                  </svg>
                                </span>
                              </span>
                            </div>{" "}
                            {/**/}
                          </div>{" "}
                          {/**/}
                        </div>{" "}
                        {/**/}
                      </div>
                      <div className="restaurant-card restaurant-delivery-card col-md-5 col-sm-8 col-xs-16">
                        <div className="card-inner">
                          <div className="card-images-slider ">
                            <div className="slider-images glider">
                              {/**/}{" "}
                              <div
                                className="glider-track"
                                style={{ width: 1200 }}
                              >
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide left-2"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/pizza-time-lq8ao"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Buy Small Pizza & Get Free Margherita Pizza"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/571436c0-70d9-4059-843e-9e5c0e6ecd20.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/571436c0-70d9-4059-843e-9e5c0e6ecd20.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Buy Small Pizza &amp; Get Free
                                        Margherita Pizza
                                      </h4>{" "}
                                      <span className="price">200EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide left-1"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/pizza-time-lq8ao"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Cheese Lovers Pizza"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/07619bba-8c59-4f08-873d-139568f3e600.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/07619bba-8c59-4f08-873d-139568f3e600.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Cheese Lovers Pizza
                                      </h4>{" "}
                                      <span className="price">
                                        195EGP to 95EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide active center visible"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/pizza-time-lq8ao"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Chicken Ranch Pizza"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/bc8853a3-4199-40a8-8286-e653a42a841e.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/bc8853a3-4199-40a8-8286-e653a42a841e.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Chicken Ranch Pizza
                                      </h4>{" "}
                                      <span className="price">
                                        210EGP to 120EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-1"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/pizza-time-lq8ao"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Super Supreme Pizza"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/915a7ca8-6756-4e16-b164-568a990f4e90.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/915a7ca8-6756-4e16-b164-568a990f4e90.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Super Supreme Pizza
                                      </h4>{" "}
                                      <span className="price">
                                        205EGP to 115EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-2"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/pizza-time-lq8ao"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Buy Medium Pizza & Get Free Margherita Pizza"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/571436c0-70d9-4059-843e-9e5c0e6ecd20.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/571436c0-70d9-4059-843e-9e5c0e6ecd20.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Buy Medium Pizza &amp; Get Free
                                        Margherita Pizza
                                      </h4>{" "}
                                      <span className="price">275EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>{" "}
                            <button
                              type="button"
                              id="prev2"
                              className="slider-arrows prev-btn small"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-left" />
                              </svg>
                            </button>{" "}
                            <button
                              type="button"
                              id="next2"
                              className="slider-arrows next-btn small"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-right" />
                              </svg>
                            </button>{" "}
                            <div id="dots2" className="glider-dots">
                              <button
                                data-index={0}
                                aria-label="Page 1"
                                className="glider-dot"
                              />
                              <button
                                data-index={1}
                                aria-label="Page 2"
                                className="glider-dot "
                              />
                              <button
                                data-index={2}
                                aria-label="Page 3"
                                className="glider-dot active"
                              />
                              <button
                                data-index={3}
                                aria-label="Page 4"
                                className="glider-dot "
                              />
                              <button
                                data-index={4}
                                aria-label="Page 5"
                                className="glider-dot "
                              />
                            </div>
                          </div>{" "}
                          <div className="card-content clickable-item">
                            <a
                              href="/cairo/pizza-time-lq8ao"
                              className="clickable-anchor"
                            />{" "}
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
                                          id="6b8qji"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="trl1ek"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#6b8qji)"
                                          stroke="#fff"
                                          filter="url(#trl1ek)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#6b8qji)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#6b8qji)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="zvxyy"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="71q67h"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#zvxyy)"
                                          stroke="#fff"
                                          filter="url(#71q67h)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#zvxyy)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#zvxyy)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="bv54lh"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="nhdtjn"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#bv54lh)"
                                          stroke="#fff"
                                          filter="url(#nhdtjn)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#bv54lh)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#bv54lh)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="l0fl07"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="nfi4hv"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#l0fl07)"
                                          stroke="#fff"
                                          filter="url(#nfi4hv)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#l0fl07)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#l0fl07)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="lzmw9g"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="10%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="10%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="vabyz"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#lzmw9g)"
                                          stroke="#fff"
                                          filter="url(#vabyz)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#lzmw9g)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#lzmw9g)"
                                        />
                                      </svg>
                                    </span>{" "}
                                    {/**/}
                                  </div>
                                </div>{" "}
                                <span className="reviews-count">(2171)</span>
                              </div>
                            </div>{" "}
                            <div className="rest-logo image-ratio ratio-square radius">
                              <div className="ratio-content image-loading image-loaded">
                                <img
                                  alt="restaurant.data.name"
                                  data-alt="Pizza Time"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/e1c3fc86-1794-460f-9ac6-0bcaffcdd1be.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/e1c3fc86-1794-460f-9ac6-0bcaffcdd1be.jpg"
                                  lazy="loaded"
                                />
                              </div>
                            </div>{" "}
                            <div className="main-data">
                              <h3 className="card-title">
                                <a href="/cairo/pizza-time-lq8ao">Pizza Time</a>
                              </h3>{" "}
                              <ul className="cuisines-list h-dots-list truncate">
                                <li className="list-item">Fast Food</li>
                                <li className="list-item">Pizza</li>
                              </ul>{" "}
                              <span title="staticContent.filters.onlinePayment">
                                <span className="icon online-payment-icon">
                                  <svg viewBox="0 0 16 17">
                                    <use xlinkHref="#credit" />
                                  </svg>
                                </span>
                              </span>
                            </div>{" "}
                            {/**/}
                          </div>{" "}
                          <div className="card-footer clickable-item">
                            <a
                              href="/cairo/pizza-time-lq8ao"
                              className="clickable-anchor"
                            />{" "}
                            <span>
                              <span className="icon">
                                <svg viewBox="0 0 25 25">
                                  <use xlinkHref="#delivery-icon" />
                                </svg>
                              </span>
                              75 mins
                            </span>{" "}
                            {/**/} {/**/}
                          </div>
                        </div>{" "}
                        {/**/}
                      </div>
                      <div className="restaurant-card restaurant-delivery-card col-md-5 col-sm-8 col-xs-16">
                        <div className="card-inner">
                          <div className="card-images-slider ">
                            <div className="slider-images glider">
                              {/**/}{" "}
                              <div
                                className="glider-track"
                                style={{ width: 1200 }}
                              >
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide active center visible"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/il-mulino-rdn7"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Chicken Pane Plate"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/080ed658-19c1-4570-9d6d-cb9750903377.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/080ed658-19c1-4570-9d6d-cb9750903377.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Chicken Pane Plate
                                      </h4>{" "}
                                      <span className="price">290EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-1"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/il-mulino-rdn7"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Mushroom Cream Soup"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/876f0afc-ce80-4e71-9e7f-464599bdc318.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/876f0afc-ce80-4e71-9e7f-464599bdc318.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Mushroom Cream Soup
                                      </h4>{" "}
                                      <span className="price">110EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-2"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/il-mulino-rdn7"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Tomato Soup"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/0c0d73b0-5569-4ac3-a8bd-c61b48df5ab4.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/0c0d73b0-5569-4ac3-a8bd-c61b48df5ab4.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Tomato Soup
                                      </h4>{" "}
                                      <span className="price">75EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-3"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/il-mulino-rdn7"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Penne Alfredo Pasta"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/c74fba5c-cf60-4024-879d-05ee6d072608.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/c74fba5c-cf60-4024-879d-05ee6d072608.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Penne Alfredo Pasta
                                      </h4>{" "}
                                      <span className="price">235EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-4"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/il-mulino-rdn7"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Chicken Lemon Plate"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/02b0cc49-bc15-4db7-80e6-8ebcf70d91eb.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/02b0cc49-bc15-4db7-80e6-8ebcf70d91eb.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Chicken Lemon Plate
                                      </h4>{" "}
                                      <span className="price">290EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>{" "}
                            <button
                              type="button"
                              id="prev3"
                              className="slider-arrows prev-btn small disabled"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-left" />
                              </svg>
                            </button>{" "}
                            <button
                              type="button"
                              id="next3"
                              className="slider-arrows next-btn small"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-right" />
                              </svg>
                            </button>{" "}
                            <div id="dots3" className="glider-dots">
                              <button
                                data-index={0}
                                aria-label="Page 1"
                                className="glider-dot active"
                              />
                              <button
                                data-index={1}
                                aria-label="Page 2"
                                className="glider-dot "
                              />
                              <button
                                data-index={2}
                                aria-label="Page 3"
                                className="glider-dot "
                              />
                              <button
                                data-index={3}
                                aria-label="Page 4"
                                className="glider-dot "
                              />
                              <button
                                data-index={4}
                                aria-label="Page 5"
                                className="glider-dot "
                              />
                            </div>
                          </div>{" "}
                          <div className="card-content clickable-item">
                            <a
                              href="/cairo/il-mulino-rdn7"
                              className="clickable-anchor"
                            />{" "}
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
                                          id="xeru7"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="i58fmc"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#xeru7)"
                                          stroke="#fff"
                                          filter="url(#i58fmc)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#xeru7)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#xeru7)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="p3r56j"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="0sia6"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#p3r56j)"
                                          stroke="#fff"
                                          filter="url(#0sia6)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#p3r56j)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#p3r56j)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="p368hm"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="rxkj7n"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#p368hm)"
                                          stroke="#fff"
                                          filter="url(#rxkj7n)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#p368hm)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#p368hm)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="tu5bfl"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="05uvui"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#tu5bfl)"
                                          stroke="#fff"
                                          filter="url(#05uvui)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#tu5bfl)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#tu5bfl)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="6ko7v"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="60%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="60%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="2kjwkh"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#6ko7v)"
                                          stroke="#fff"
                                          filter="url(#2kjwkh)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#6ko7v)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#6ko7v)"
                                        />
                                      </svg>
                                    </span>{" "}
                                    {/**/}
                                  </div>
                                </div>{" "}
                                <span className="reviews-count">(2355)</span>
                              </div>
                            </div>{" "}
                            <div className="rest-logo image-ratio ratio-square radius">
                              <div className="ratio-content image-loading image-loaded">
                                <img
                                  alt="restaurant.data.name"
                                  data-alt="Il Mulino"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b6aead7f-2225-11e8-924e-0242ac110011.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b6aead7f-2225-11e8-924e-0242ac110011.jpg"
                                  lazy="loaded"
                                />
                              </div>
                            </div>{" "}
                            <div className="main-data">
                              <h3 className="card-title">
                                <a href="/cairo/il-mulino-rdn7">Il Mulino</a>
                              </h3>{" "}
                              <ul className="cuisines-list h-dots-list truncate">
                                <li className="list-item">Italian</li>
                                <li className="list-item">Bakeries</li>
                                <li className="list-item">
                                  Coffee &amp; Drinks
                                </li>
                                <li className="list-item">Pizza</li>
                              </ul>{" "}
                              <span title="staticContent.filters.onlinePayment">
                                <span className="icon online-payment-icon">
                                  <svg viewBox="0 0 16 17">
                                    <use xlinkHref="#credit" />
                                  </svg>
                                </span>
                              </span>
                            </div>{" "}
                            {/**/}
                          </div>{" "}
                          <div className="card-footer clickable-item">
                            <a
                              href="/cairo/il-mulino-rdn7"
                              className="clickable-anchor"
                            />{" "}
                            <span>
                              <span className="icon">
                                <svg viewBox="0 0 25 25">
                                  <use xlinkHref="#delivery-icon" />
                                </svg>
                              </span>
                              45 mins
                            </span>{" "}
                            {/**/} {/**/}
                          </div>
                        </div>{" "}
                        {/**/}
                      </div>
                      <div className="restaurant-card restaurant-delivery-card col-md-5 col-sm-8 col-xs-16">
                        <div className="card-inner">
                          <div className="card-images-slider ">
                            <div className="slider-images glider">
                              {/**/}{" "}
                              <div
                                className="glider-track"
                                style={{ width: 1200 }}
                              >
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide active center visible"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/akleh-wx78"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Jebneh Zaatar Man'oucha"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/14eb0e85-eecc-40a4-a608-1d603c042cff.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/14eb0e85-eecc-40a4-a608-1d603c042cff.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Jebneh Zaatar Man'oucha
                                      </h4>{" "}
                                      <span className="price">75EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-1"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/akleh-wx78"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Kashkaval Jebneh Man'oucha"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/cf34829a-f662-48a9-a354-899c4c3b0f4d.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/cf34829a-f662-48a9-a354-899c4c3b0f4d.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Kashkaval Jebneh Man'oucha
                                      </h4>{" "}
                                      <span className="price">81EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-2"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/akleh-wx78"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Jebneh Smoked Turkey  Man'oucha"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/fcca8626-2979-4b7c-9d33-9d13245db7c6.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/fcca8626-2979-4b7c-9d33-9d13245db7c6.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Jebneh Smoked Turkey Man'oucha
                                      </h4>{" "}
                                      <span className="price">86EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-3"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/akleh-wx78"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Basterma Bl Jebneh Man'oucha"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/87a242d4-733b-4581-a60c-b6deaf2409a3.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/87a242d4-733b-4581-a60c-b6deaf2409a3.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Basterma Bl Jebneh Man'oucha
                                      </h4>{" "}
                                      <span className="price">109EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-4"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/akleh-wx78"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Sojok Bl Kiri Man'oucha"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/e02f7870-6300-4627-8dad-efcfc889226f.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/e02f7870-6300-4627-8dad-efcfc889226f.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Sojok Bl Kiri Man'oucha
                                      </h4>{" "}
                                      <span className="price">121EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>{" "}
                            <button
                              type="button"
                              id="prev4"
                              className="slider-arrows prev-btn small disabled"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-left" />
                              </svg>
                            </button>{" "}
                            <button
                              type="button"
                              id="next4"
                              className="slider-arrows next-btn small"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-right" />
                              </svg>
                            </button>{" "}
                            <div id="dots4" className="glider-dots">
                              <button
                                data-index={0}
                                aria-label="Page 1"
                                className="glider-dot active"
                              />
                              <button
                                data-index={1}
                                aria-label="Page 2"
                                className="glider-dot "
                              />
                              <button
                                data-index={2}
                                aria-label="Page 3"
                                className="glider-dot "
                              />
                              <button
                                data-index={3}
                                aria-label="Page 4"
                                className="glider-dot "
                              />
                              <button
                                data-index={4}
                                aria-label="Page 5"
                                className="glider-dot "
                              />
                            </div>
                          </div>{" "}
                          <div className="card-content clickable-item">
                            <a
                              href="/cairo/akleh-wx78"
                              className="clickable-anchor"
                            />{" "}
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
                                          id="7oe1ti"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="yg30lj"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#7oe1ti)"
                                          stroke="#fff"
                                          filter="url(#yg30lj)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#7oe1ti)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#7oe1ti)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="mrehz"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="y49r6"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#mrehz)"
                                          stroke="#fff"
                                          filter="url(#y49r6)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#mrehz)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#mrehz)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="1bkr1g"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="iv2ns"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#1bkr1g)"
                                          stroke="#fff"
                                          filter="url(#iv2ns)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#1bkr1g)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#1bkr1g)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="5b5kaf"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="pyhj4h"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#5b5kaf)"
                                          stroke="#fff"
                                          filter="url(#pyhj4h)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#5b5kaf)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#5b5kaf)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="1y6izg"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="70%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="70%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="5iyrb"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#1y6izg)"
                                          stroke="#fff"
                                          filter="url(#5iyrb)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#1y6izg)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#1y6izg)"
                                        />
                                      </svg>
                                    </span>{" "}
                                    {/**/}
                                  </div>
                                </div>{" "}
                                <span className="reviews-count">(16354)</span>
                              </div>
                            </div>{" "}
                            <div className="rest-logo image-ratio ratio-square radius">
                              <div className="ratio-content image-loading image-loaded">
                                <img
                                  alt="restaurant.data.name"
                                  data-alt="Akleh"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b0ccc096-1d5a-4e55-9524-fb4aac17f67f.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b0ccc096-1d5a-4e55-9524-fb4aac17f67f.jpg"
                                  lazy="loaded"
                                />
                              </div>
                            </div>{" "}
                            <div className="main-data">
                              <h3 className="card-title">
                                <a href="/cairo/akleh-wx78">Akleh</a>
                              </h3>{" "}
                              <ul className="cuisines-list h-dots-list truncate">
                                <li className="list-item">Syrian</li>
                                <li className="list-item">Sandwiches</li>
                              </ul>{" "}
                              <span title="staticContent.filters.onlinePayment">
                                <span className="icon online-payment-icon">
                                  <svg viewBox="0 0 16 17">
                                    <use xlinkHref="#credit" />
                                  </svg>
                                </span>
                              </span>
                            </div>{" "}
                            {/**/}
                          </div>{" "}
                          {/**/}
                        </div>{" "}
                        {/**/}
                      </div>
                      <div className="restaurant-card restaurant-delivery-card col-md-5 col-sm-8 col-xs-16">
                        <div className="card-inner">
                          <div className="card-images-slider ">
                            <div className="slider-images glider">
                              {/**/}{" "}
                              <div
                                className="glider-track"
                                style={{ width: 960 }}
                              >
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide active center visible"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/pizza-station-mypvo"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Pomodori Pasta"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b32a7eae-4d9f-4060-8b92-3cacd063d04e.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b32a7eae-4d9f-4060-8b92-3cacd063d04e.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Pomodori Pasta
                                      </h4>{" "}
                                      <span className="price">60EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-1"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/pizza-station-mypvo"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Negresco Pasta"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/bf3587ce-c399-4727-ae2e-875134359987.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/bf3587ce-c399-4727-ae2e-875134359987.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Negresco Pasta
                                      </h4>{" "}
                                      <span className="price">80EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-2"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/pizza-station-mypvo"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Seafood Forno Pasta"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/ead3c1aa-6f1d-467b-8429-ff840c5fb289.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/ead3c1aa-6f1d-467b-8429-ff840c5fb289.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Seafood Forno Pasta
                                      </h4>{" "}
                                      <span className="price">150EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-3"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/pizza-station-mypvo"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Alfredo Pasta"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/96257ac7-972b-4ce0-8a48-5501e0da2ef2.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/96257ac7-972b-4ce0-8a48-5501e0da2ef2.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Alfredo Pasta
                                      </h4>{" "}
                                      <span className="price">60EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>{" "}
                            <button
                              type="button"
                              id="prev5"
                              className="slider-arrows prev-btn small disabled"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-left" />
                              </svg>
                            </button>{" "}
                            <button
                              type="button"
                              id="next5"
                              className="slider-arrows next-btn small"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-right" />
                              </svg>
                            </button>{" "}
                            <div id="dots5" className="glider-dots">
                              <button
                                data-index={0}
                                aria-label="Page 1"
                                className="glider-dot active"
                              />
                              <button
                                data-index={1}
                                aria-label="Page 2"
                                className="glider-dot "
                              />
                              <button
                                data-index={2}
                                aria-label="Page 3"
                                className="glider-dot "
                              />
                              <button
                                data-index={3}
                                aria-label="Page 4"
                                className="glider-dot "
                              />
                            </div>
                          </div>{" "}
                          <div className="card-content clickable-item">
                            <a
                              href="/cairo/pizza-station-mypvo"
                              className="clickable-anchor"
                            />{" "}
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
                                          id="lw6g8"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="3vzjce"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#lw6g8)"
                                          stroke="#fff"
                                          filter="url(#3vzjce)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#lw6g8)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#lw6g8)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="42e78l"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="k8wvma"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#42e78l)"
                                          stroke="#fff"
                                          filter="url(#k8wvma)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#42e78l)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#42e78l)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="aj88l"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="8fwzvm"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#aj88l)"
                                          stroke="#fff"
                                          filter="url(#8fwzvm)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#aj88l)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#aj88l)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="3ssdsf"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="e1jobq"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#3ssdsf)"
                                          stroke="#fff"
                                          filter="url(#e1jobq)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#3ssdsf)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#3ssdsf)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="sehz"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="30%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="30%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="bycms8"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#sehz)"
                                          stroke="#fff"
                                          filter="url(#bycms8)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#sehz)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#sehz)"
                                        />
                                      </svg>
                                    </span>{" "}
                                    {/**/}
                                  </div>
                                </div>{" "}
                                <span className="reviews-count">(8586)</span>
                              </div>
                            </div>{" "}
                            <div className="rest-logo image-ratio ratio-square radius">
                              <div className="ratio-content image-loading image-loaded">
                                <img
                                  alt="restaurant.data.name"
                                  data-alt="Pizza Station"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/05953d6a-8463-4a4c-81d4-7b6d69b75ea7.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/05953d6a-8463-4a4c-81d4-7b6d69b75ea7.jpg"
                                  lazy="loaded"
                                />
                              </div>
                            </div>{" "}
                            <div className="main-data">
                              <h3 className="card-title">
                                <a href="/cairo/pizza-station-mypvo">
                                  Pizza Station
                                </a>
                              </h3>{" "}
                              <ul className="cuisines-list h-dots-list truncate">
                                <li className="list-item">Fast Food</li>
                                <li className="list-item">Pizza</li>
                              </ul>{" "}
                              <span title="staticContent.filters.onlinePayment">
                                <span className="icon online-payment-icon">
                                  <svg viewBox="0 0 16 17">
                                    <use xlinkHref="#credit" />
                                  </svg>
                                </span>
                              </span>
                            </div>{" "}
                            {/**/}
                          </div>{" "}
                          <div className="card-footer clickable-item">
                            <a
                              href="/cairo/pizza-station-mypvo"
                              className="clickable-anchor"
                            />{" "}
                            <span>
                              <span className="icon">
                                <svg viewBox="0 0 25 25">
                                  <use xlinkHref="#delivery-icon" />
                                </svg>
                              </span>
                              60 mins
                            </span>{" "}
                            {/**/} {/**/}
                          </div>
                        </div>{" "}
                        {/**/}
                      </div>
                      <div className="restaurant-card restaurant-delivery-card col-md-5 col-sm-8 col-xs-16">
                        <div className="card-inner">
                          <div className="card-images-slider ">
                            <div className="slider-images glider">
                              {/**/}{" "}
                              <div
                                className="glider-track"
                                style={{ width: 1200 }}
                              >
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide active center visible"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/diet-house-7rqg"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Cheesecake"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/96dce78d-ec9d-4cfb-b448-09bcc0028db7.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/96dce78d-ec9d-4cfb-b448-09bcc0028db7.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Cheesecake
                                      </h4>{" "}
                                      <span className="price">75EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-1"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/diet-house-7rqg"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Chocolate Ball"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/8e1130e9-72a0-431f-b7a0-6691d2b5d83b.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/8e1130e9-72a0-431f-b7a0-6691d2b5d83b.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Chocolate Ball
                                      </h4>{" "}
                                      <span className="price">70EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-2"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/diet-house-7rqg"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Four Seasons Pizza "
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/4489f523-e6cb-4dea-a5d5-83261a98611f.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/4489f523-e6cb-4dea-a5d5-83261a98611f.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Four Seasons Pizza
                                      </h4>{" "}
                                      <span className="price">225EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-3"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/diet-house-7rqg"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Chicken Pizza "
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/dd6a6147-4ff4-42c8-81ab-84cf6eb80fc4.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/dd6a6147-4ff4-42c8-81ab-84cf6eb80fc4.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Chicken Pizza
                                      </h4>{" "}
                                      <span className="price">195EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-4"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/diet-house-7rqg"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Minced Beef Pizza "
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/ecf9d00a-83ad-4f27-a0c0-ed35f3e968d6.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/ecf9d00a-83ad-4f27-a0c0-ed35f3e968d6.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Minced Beef Pizza
                                      </h4>{" "}
                                      <span className="price">210EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>{" "}
                            <button
                              type="button"
                              id="prev6"
                              className="slider-arrows prev-btn small disabled"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-left" />
                              </svg>
                            </button>{" "}
                            <button
                              type="button"
                              id="next6"
                              className="slider-arrows next-btn small"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-right" />
                              </svg>
                            </button>{" "}
                            <div id="dots6" className="glider-dots">
                              <button
                                data-index={0}
                                aria-label="Page 1"
                                className="glider-dot active"
                              />
                              <button
                                data-index={1}
                                aria-label="Page 2"
                                className="glider-dot "
                              />
                              <button
                                data-index={2}
                                aria-label="Page 3"
                                className="glider-dot "
                              />
                              <button
                                data-index={3}
                                aria-label="Page 4"
                                className="glider-dot "
                              />
                              <button
                                data-index={4}
                                aria-label="Page 5"
                                className="glider-dot "
                              />
                            </div>
                          </div>{" "}
                          <div className="card-content clickable-item">
                            <a
                              href="/cairo/diet-house-7rqg"
                              className="clickable-anchor"
                            />{" "}
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
                                          id="pkkywvr"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="fo0xr"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#pkkywvr)"
                                          stroke="#fff"
                                          filter="url(#fo0xr)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#pkkywvr)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#pkkywvr)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="4n17w8"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="xmf2vd"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#4n17w8)"
                                          stroke="#fff"
                                          filter="url(#xmf2vd)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#4n17w8)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#4n17w8)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="0kvx7e"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="o8p5qs"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#0kvx7e)"
                                          stroke="#fff"
                                          filter="url(#o8p5qs)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#0kvx7e)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#0kvx7e)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="2vewyt"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="bo0t5s"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#2vewyt)"
                                          stroke="#fff"
                                          filter="url(#bo0t5s)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#2vewyt)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#2vewyt)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="4cvjb"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="80%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="80%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="fxifc"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#4cvjb)"
                                          stroke="#fff"
                                          filter="url(#fxifc)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#4cvjb)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#4cvjb)"
                                        />
                                      </svg>
                                    </span>{" "}
                                    {/**/}
                                  </div>
                                </div>{" "}
                                <span className="reviews-count">(2131)</span>
                              </div>
                            </div>{" "}
                            <div className="rest-logo image-ratio ratio-square radius">
                              <div className="ratio-content image-loading image-loaded">
                                <img
                                  alt="restaurant.data.name"
                                  data-alt="Diet House"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b6af9779-2225-11e8-924e-0242ac110011.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b6af9779-2225-11e8-924e-0242ac110011.jpg"
                                  lazy="loaded"
                                />
                              </div>
                            </div>{" "}
                            <div className="main-data">
                              <h3 className="card-title">
                                <a href="/cairo/diet-house-7rqg">Diet House</a>
                              </h3>{" "}
                              <ul className="cuisines-list h-dots-list truncate">
                                <li className="list-item">Vegetarian</li>
                                <li className="list-item">Pizza</li>
                                <li className="list-item">Healthy food</li>
                                <li className="list-item">Sandwiches</li>
                              </ul>{" "}
                              <span title="staticContent.filters.onlinePayment">
                                <span className="icon online-payment-icon">
                                  <svg viewBox="0 0 16 17">
                                    <use xlinkHref="#credit" />
                                  </svg>
                                </span>
                              </span>
                            </div>{" "}
                            {/**/}
                          </div>{" "}
                          <div className="card-footer clickable-item">
                            <a
                              href="/cairo/diet-house-7rqg"
                              className="clickable-anchor"
                            />{" "}
                            <span>
                              <span className="icon">
                                <svg viewBox="0 0 25 25">
                                  <use xlinkHref="#delivery-icon" />
                                </svg>
                              </span>
                              60 mins
                            </span>{" "}
                            {/**/} {/**/}
                          </div>
                        </div>{" "}
                        {/**/}
                      </div>
                      <div className="restaurant-card restaurant-delivery-card col-md-5 col-sm-8 col-xs-16">
                        <div className="card-inner">
                          <div className="card-images-slider ">
                            <div className="slider-images glider">
                              {/**/}{" "}
                              <div
                                className="glider-track"
                                style={{ width: 1200 }}
                              >
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide active center visible"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/eldahan-2x73"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="1/2 Grilled Chicken"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/31a9a163-ed94-4d32-9991-39eedf1f33bf.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/31a9a163-ed94-4d32-9991-39eedf1f33bf.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        1/2 Grilled Chicken
                                      </h4>{" "}
                                      <span className="price">170EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-1"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/eldahan-2x73"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="1/2 Boneless Grilled Chicken"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/f92c490c-56d3-4860-9fc3-219ab7dc6ebf.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/f92c490c-56d3-4860-9fc3-219ab7dc6ebf.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        1/2 Boneless Grilled Chicken
                                      </h4>{" "}
                                      <span className="price">172EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-2"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/eldahan-2x73"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Hawawshi"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/0856d571-4393-439a-bbc3-c3a6e5f64781.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/0856d571-4393-439a-bbc3-c3a6e5f64781.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">Hawawshi</h4>{" "}
                                      <span className="price">111EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-3"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/eldahan-2x73"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="1/4 Kilo Kofta"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/ae890b7b-c8b9-4392-afa9-246cb779f312.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/ae890b7b-c8b9-4392-afa9-246cb779f312.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        1/4 Kilo Kofta
                                      </h4>{" "}
                                      <span className="price">230EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-4"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/eldahan-2x73"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="1/4 Chicken Breast"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/4f568882-b6ed-4ff9-a63b-c8913a96a2cf.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/4f568882-b6ed-4ff9-a63b-c8913a96a2cf.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        1/4 Chicken Breast
                                      </h4>{" "}
                                      <span className="price">104EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>{" "}
                            <button
                              type="button"
                              id="prev7"
                              className="slider-arrows prev-btn small disabled"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-left" />
                              </svg>
                            </button>{" "}
                            <button
                              type="button"
                              id="next7"
                              className="slider-arrows next-btn small"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-right" />
                              </svg>
                            </button>{" "}
                            <div id="dots7" className="glider-dots">
                              <button
                                data-index={0}
                                aria-label="Page 1"
                                className="glider-dot active"
                              />
                              <button
                                data-index={1}
                                aria-label="Page 2"
                                className="glider-dot "
                              />
                              <button
                                data-index={2}
                                aria-label="Page 3"
                                className="glider-dot "
                              />
                              <button
                                data-index={3}
                                aria-label="Page 4"
                                className="glider-dot "
                              />
                              <button
                                data-index={4}
                                aria-label="Page 5"
                                className="glider-dot "
                              />
                            </div>
                          </div>{" "}
                          <div className="card-content clickable-item">
                            <a
                              href="/cairo/eldahan-2x73"
                              className="clickable-anchor"
                            />{" "}
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
                                          id="j8hids"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="tvv2n5"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#j8hids)"
                                          stroke="#fff"
                                          filter="url(#tvv2n5)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#j8hids)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#j8hids)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="0r09be"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="2imfe"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#0r09be)"
                                          stroke="#fff"
                                          filter="url(#2imfe)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#0r09be)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#0r09be)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="7hj5gn"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="wwszq"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#7hj5gn)"
                                          stroke="#fff"
                                          filter="url(#wwszq)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#7hj5gn)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#7hj5gn)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="egx29xc"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="x54rc"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#egx29xc)"
                                          stroke="#fff"
                                          filter="url(#x54rc)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#egx29xc)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#egx29xc)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="r3ojbd"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="70%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="70%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="mb98y9"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#r3ojbd)"
                                          stroke="#fff"
                                          filter="url(#mb98y9)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#r3ojbd)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#r3ojbd)"
                                        />
                                      </svg>
                                    </span>{" "}
                                    {/**/}
                                  </div>
                                </div>{" "}
                                <span className="reviews-count">(106859)</span>
                              </div>
                            </div>{" "}
                            <div className="rest-logo image-ratio ratio-square radius">
                              <div className="ratio-content image-loading image-loaded">
                                <img
                                  alt="restaurant.data.name"
                                  data-alt="ElDahan"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/85d4c081-ba38-45ff-b851-87a0dfbc5f89.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/85d4c081-ba38-45ff-b851-87a0dfbc5f89.jpg"
                                  lazy="loaded"
                                />
                              </div>
                            </div>{" "}
                            <div className="main-data">
                              <h3 className="card-title">
                                <a href="/cairo/eldahan-2x73">ElDahan</a>
                              </h3>{" "}
                              <ul className="cuisines-list h-dots-list truncate">
                                <li className="list-item">Grill</li>
                              </ul>{" "}
                              <span title="staticContent.filters.onlinePayment">
                                <span className="icon online-payment-icon">
                                  <svg viewBox="0 0 16 17">
                                    <use xlinkHref="#credit" />
                                  </svg>
                                </span>
                              </span>
                            </div>{" "}
                            {/**/}
                          </div>{" "}
                          <div className="card-footer clickable-item">
                            <a
                              href="/cairo/eldahan-2x73"
                              className="clickable-anchor"
                            />{" "}
                            <span>
                              <span className="icon">
                                <svg viewBox="0 0 25 25">
                                  <use xlinkHref="#delivery-icon" />
                                </svg>
                              </span>
                              60 mins
                            </span>{" "}
                            {/**/} {/**/}
                          </div>
                        </div>{" "}
                        {/**/}
                      </div>
                      <div className="restaurant-card restaurant-delivery-card col-md-5 col-sm-8 col-xs-16">
                        <div className="card-inner">
                          <div className="card-images-slider ">
                            <div className="slider-images glider">
                              {/**/}{" "}
                              <div
                                className="glider-track"
                                style={{ width: 1200 }}
                              >
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide active center visible"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/desoky-soda-qn5r"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Melted Cheese Crispy Chicken Oven Pasta"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/15f3e18b-cac6-42f5-b232-27745f69bf46.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/15f3e18b-cac6-42f5-b232-27745f69bf46.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Melted Cheese Crispy Chicken Oven Pasta
                                      </h4>{" "}
                                      <span className="price">198.21EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-1"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/desoky-soda-qn5r"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Mix Beef Feteer (Large)"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/6d0cad23-7f52-44a5-9130-f0ad106e96ee.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/6d0cad23-7f52-44a5-9130-f0ad106e96ee.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Mix Beef Feteer (Large)
                                      </h4>{" "}
                                      <span className="price">340.18EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-2"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/desoky-soda-qn5r"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Kiri & Pastrami Feteer (Large)"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/001abf4f-927f-43c7-9359-3ea19bb1ee5b.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/001abf4f-927f-43c7-9359-3ea19bb1ee5b.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Kiri &amp; Pastrami Feteer (Large)
                                      </h4>{" "}
                                      <span className="price">342.86EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-3"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/desoky-soda-qn5r"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Mix Cheese Feteer (Large)"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/4ab6776a-4027-4810-a471-9b588f1d2b96.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/4ab6776a-4027-4810-a471-9b588f1d2b96.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Mix Cheese Feteer (Large)
                                      </h4>{" "}
                                      <span className="price">316.07EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-4"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading">
                                    <a
                                      href="/cairo/desoky-soda-qn5r"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Kebab Halla Oven Pasta"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/80214790-347d-40c4-94a1-7f057e8f59bf.jpg"
                                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                      lazy="loading"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Kebab Halla Oven Pasta
                                      </h4>{" "}
                                      <span className="price">263.39EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>{" "}
                            <button
                              type="button"
                              id="prev8"
                              className="slider-arrows prev-btn small disabled"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-left" />
                              </svg>
                            </button>{" "}
                            <button
                              type="button"
                              id="next8"
                              className="slider-arrows next-btn small"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-right" />
                              </svg>
                            </button>{" "}
                            <div id="dots8" className="glider-dots">
                              <button
                                data-index={0}
                                aria-label="Page 1"
                                className="glider-dot active"
                              />
                              <button
                                data-index={1}
                                aria-label="Page 2"
                                className="glider-dot "
                              />
                              <button
                                data-index={2}
                                aria-label="Page 3"
                                className="glider-dot "
                              />
                              <button
                                data-index={3}
                                aria-label="Page 4"
                                className="glider-dot "
                              />
                              <button
                                data-index={4}
                                aria-label="Page 5"
                                className="glider-dot "
                              />
                            </div>
                          </div>{" "}
                          <div className="card-content clickable-item">
                            <a
                              href="/cairo/desoky-soda-qn5r"
                              className="clickable-anchor"
                            />{" "}
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
                                          id="pn97gl"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="zl6h6f"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#pn97gl)"
                                          stroke="#fff"
                                          filter="url(#zl6h6f)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#pn97gl)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#pn97gl)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="v9x7cf"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="1dhj5h"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#v9x7cf)"
                                          stroke="#fff"
                                          filter="url(#1dhj5h)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#v9x7cf)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#v9x7cf)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="p7m9t"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="o0z9j4"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#p7m9t)"
                                          stroke="#fff"
                                          filter="url(#o0z9j4)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#p7m9t)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#p7m9t)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="hrg4v"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="4u6myd"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#hrg4v)"
                                          stroke="#fff"
                                          filter="url(#4u6myd)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#hrg4v)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#hrg4v)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="1wxuoh"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="30%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="30%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="2697rc"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#1wxuoh)"
                                          stroke="#fff"
                                          filter="url(#2697rc)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#1wxuoh)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#1wxuoh)"
                                        />
                                      </svg>
                                    </span>{" "}
                                    {/**/}
                                  </div>
                                </div>{" "}
                                <span className="reviews-count">(12784)</span>
                              </div>
                            </div>{" "}
                            <div className="rest-logo image-ratio ratio-square radius">
                              <div className="ratio-content image-loading image-loaded">
                                <img
                                  alt="restaurant.data.name"
                                  data-alt="Desoky & Soda"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/6a334eea-2047-4e30-9807-65a643d895a0.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/6a334eea-2047-4e30-9807-65a643d895a0.jpg"
                                  lazy="loaded"
                                />
                              </div>
                            </div>{" "}
                            <div className="main-data">
                              <h3 className="card-title">
                                <a href="/cairo/desoky-soda-qn5r">
                                  Desoky &amp; Soda
                                </a>
                              </h3>{" "}
                              <ul className="cuisines-list h-dots-list truncate">
                                <li className="list-item">Egyptian</li>
                              </ul>{" "}
                              <span title="staticContent.filters.onlinePayment">
                                <span className="icon online-payment-icon">
                                  <svg viewBox="0 0 16 17">
                                    <use xlinkHref="#credit" />
                                  </svg>
                                </span>
                              </span>
                            </div>{" "}
                            {/**/}
                          </div>{" "}
                          <div className="card-footer clickable-item">
                            <a
                              href="/cairo/desoky-soda-qn5r"
                              className="clickable-anchor"
                            />{" "}
                            <span>
                              <span className="icon">
                                <svg viewBox="0 0 25 25">
                                  <use xlinkHref="#delivery-icon" />
                                </svg>
                              </span>
                              60 mins
                            </span>{" "}
                            {/**/} {/**/}
                          </div>
                        </div>{" "}
                        {/**/}
                      </div>
                      <div className="restaurant-card restaurant-delivery-card col-md-5 col-sm-8 col-xs-16">
                        <div className="card-inner">
                          <div className="card-images-slider ">
                            <div className="slider-images glider">
                              {/**/}{" "}
                              <div
                                className="glider-track"
                                style={{ width: 1200 }}
                              >
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide active center visible"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/cook-door-2l8a"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Super Crunchy Chicken Sandwich"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3fc1907c-d006-4d05-8117-4d3487657267.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3fc1907c-d006-4d05-8117-4d3487657267.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Super Crunchy Chicken Sandwich
                                      </h4>{" "}
                                      <span className="price">
                                        145EGP to 110EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-1"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/cook-door-2l8a"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Cordon Bleu Sandwich"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/bb7204e3-eba6-47af-8fb9-fd1e98850bda.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/bb7204e3-eba6-47af-8fb9-fd1e98850bda.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Cordon Bleu Sandwich
                                      </h4>{" "}
                                      <span className="price">
                                        155EGP to 155EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-2"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/cook-door-2l8a"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Super Grilled Viagra Sandwich"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/08361e4c-d8ad-45be-9cee-aaa3b8dd2a27.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/08361e4c-d8ad-45be-9cee-aaa3b8dd2a27.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Super Grilled Viagra Sandwich
                                      </h4>{" "}
                                      <span className="price">
                                        169EGP to 130EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-3"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/cook-door-2l8a"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Friskies Fries"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/ebc84c52-f49e-466f-b98c-54bc5776dffc.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/ebc84c52-f49e-466f-b98c-54bc5776dffc.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Friskies Fries
                                      </h4>{" "}
                                      <span className="price">
                                        75EGP to 60EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-4"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/cook-door-2l8a"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Happiness Offer"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/d7964fc1-7340-421f-bea2-0535f9ec74c0.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/d7964fc1-7340-421f-bea2-0535f9ec74c0.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Happiness Offer
                                      </h4>{" "}
                                      <span className="price">527EGP</span>
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>{" "}
                            <button
                              type="button"
                              id="prev9"
                              className="slider-arrows prev-btn small disabled"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-left" />
                              </svg>
                            </button>{" "}
                            <button
                              type="button"
                              id="next9"
                              className="slider-arrows next-btn small"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-right" />
                              </svg>
                            </button>{" "}
                            <div id="dots9" className="glider-dots">
                              <button
                                data-index={0}
                                aria-label="Page 1"
                                className="glider-dot active"
                              />
                              <button
                                data-index={1}
                                aria-label="Page 2"
                                className="glider-dot "
                              />
                              <button
                                data-index={2}
                                aria-label="Page 3"
                                className="glider-dot "
                              />
                              <button
                                data-index={3}
                                aria-label="Page 4"
                                className="glider-dot "
                              />
                              <button
                                data-index={4}
                                aria-label="Page 5"
                                className="glider-dot "
                              />
                            </div>
                          </div>{" "}
                          <div className="card-content clickable-item">
                            <a
                              href="/cairo/cook-door-2l8a"
                              className="clickable-anchor"
                            />{" "}
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
                                          id="y5cjv"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="c7mbn"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#y5cjv)"
                                          stroke="#fff"
                                          filter="url(#c7mbn)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#y5cjv)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#y5cjv)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="h42c08"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="c6ujpm"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#h42c08)"
                                          stroke="#fff"
                                          filter="url(#c6ujpm)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#h42c08)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#h42c08)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="drxllt"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="quag5"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#drxllt)"
                                          stroke="#fff"
                                          filter="url(#quag5)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#drxllt)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#drxllt)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="3l4bl7"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="azkxw"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#3l4bl7)"
                                          stroke="#fff"
                                          filter="url(#azkxw)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#3l4bl7)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#3l4bl7)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="jvxn2p"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="20%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="20%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="81g1ji"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#jvxn2p)"
                                          stroke="#fff"
                                          filter="url(#81g1ji)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#jvxn2p)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#jvxn2p)"
                                        />
                                      </svg>
                                    </span>{" "}
                                    {/**/}
                                  </div>
                                </div>{" "}
                                <span className="reviews-count">(31558)</span>
                              </div>
                            </div>{" "}
                            <div className="rest-logo image-ratio ratio-square radius">
                              <div className="ratio-content image-loading image-loaded">
                                <img
                                  alt="restaurant.data.name"
                                  data-alt="Cook Door"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b6ae2193-2225-11e8-924e-0242ac110011.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b6ae2193-2225-11e8-924e-0242ac110011.jpg"
                                  lazy="loaded"
                                />
                              </div>
                            </div>{" "}
                            <div className="main-data">
                              <h3 className="card-title">
                                <a href="/cairo/cook-door-2l8a">Cook Door</a>
                              </h3>{" "}
                              <ul className="cuisines-list h-dots-list truncate">
                                <li className="list-item">Fast Food</li>
                              </ul>{" "}
                              <span title="staticContent.filters.onlinePayment">
                                <span className="icon online-payment-icon">
                                  <svg viewBox="0 0 16 17">
                                    <use xlinkHref="#credit" />
                                  </svg>
                                </span>
                              </span>
                            </div>{" "}
                            {/**/}
                          </div>{" "}
                          {/**/}
                        </div>{" "}
                        {/**/}
                      </div>
                      <div className="restaurant-card restaurant-delivery-card col-md-5 col-sm-8 col-xs-16">
                        <div className="card-inner">
                          <div className="card-images-slider ">
                            <div className="slider-images glider">
                              {/**/}{" "}
                              <div
                                className="glider-track"
                                style={{ width: 1200 }}
                              >
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide active center visible"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/pizza-hum-xp4zw"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Chicken Ranch Pizza"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/13f38dd7-8193-4c13-b790-4a56c45d1757.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/13f38dd7-8193-4c13-b790-4a56c45d1757.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Chicken Ranch Pizza
                                      </h4>{" "}
                                      <span className="price">
                                        195EGP to 95EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-1"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/pizza-hum-xp4zw"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Chicken BBQ Pizza"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/feeca702-49f3-4a52-92da-a83ce4e9c270.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/feeca702-49f3-4a52-92da-a83ce4e9c270.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Chicken BBQ Pizza
                                      </h4>{" "}
                                      <span className="price">
                                        195EGP to 95EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-2"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/pizza-hum-xp4zw"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Mix Chocolate  Feteer"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3a5bd409-3e7d-4587-9a7a-b91eecbdceb0.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3a5bd409-3e7d-4587-9a7a-b91eecbdceb0.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Mix Chocolate Feteer
                                      </h4>{" "}
                                      <span className="price">
                                        140EGP to 75EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-3"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/pizza-hum-xp4zw"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Sojouk Oriental Pizza"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/e08b5d95-465b-42cf-8be9-881b9636b882.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/e08b5d95-465b-42cf-8be9-881b9636b882.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Sojouk Oriental Pizza
                                      </h4>{" "}
                                      <span className="price">
                                        180EGP to 90EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide right-4"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/pizza-hum-xp4zw"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Chicken Negresco Pasta"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/832cd7d0-5c6c-4ade-895e-ce4cfa3388c3.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/832cd7d0-5c6c-4ade-895e-ce4cfa3388c3.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Chicken Negresco Pasta
                                      </h4>{" "}
                                      <span className="price">
                                        120EGP to 90EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>{" "}
                            <button
                              type="button"
                              id="prev10"
                              className="slider-arrows prev-btn small disabled"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-left" />
                              </svg>
                            </button>{" "}
                            <button
                              type="button"
                              id="next10"
                              className="slider-arrows next-btn small"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-right" />
                              </svg>
                            </button>{" "}
                            <div id="dots10" className="glider-dots">
                              <button
                                data-index={0}
                                aria-label="Page 1"
                                className="glider-dot active"
                              />
                              <button
                                data-index={1}
                                aria-label="Page 2"
                                className="glider-dot "
                              />
                              <button
                                data-index={2}
                                aria-label="Page 3"
                                className="glider-dot "
                              />
                              <button
                                data-index={3}
                                aria-label="Page 4"
                                className="glider-dot "
                              />
                              <button
                                data-index={4}
                                aria-label="Page 5"
                                className="glider-dot "
                              />
                            </div>
                          </div>{" "}
                          <div className="card-content clickable-item">
                            <a
                              href="/cairo/pizza-hum-xp4zw"
                              className="clickable-anchor"
                            />{" "}
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
                                          id="953dwg"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="4b1dtc"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#953dwg)"
                                          stroke="#fff"
                                          filter="url(#4b1dtc)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#953dwg)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#953dwg)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="frnfpj"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="3rxel9"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#frnfpj)"
                                          stroke="#fff"
                                          filter="url(#3rxel9)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#frnfpj)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#frnfpj)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="ebzjvk"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="58xs7"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#ebzjvk)"
                                          stroke="#fff"
                                          filter="url(#58xs7)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#ebzjvk)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#ebzjvk)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="jj6p7s"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="70%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="70%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="emkzwh"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#jj6p7s)"
                                          stroke="#fff"
                                          filter="url(#emkzwh)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#jj6p7s)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#jj6p7s)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="1atpjwr"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="0%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="0%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="5s0z1"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#1atpjwr)"
                                          stroke="#fff"
                                          filter="url(#5s0z1)"
                                          style={{ display: "none" }}
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#1atpjwr)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#1atpjwr)"
                                        />
                                      </svg>
                                    </span>{" "}
                                    {/**/}
                                  </div>
                                </div>{" "}
                                <span className="reviews-count">(1674)</span>
                              </div>
                            </div>{" "}
                            <div className="rest-logo image-ratio ratio-square radius">
                              <div className="ratio-content image-loading image-loaded">
                                <img
                                  alt="restaurant.data.name"
                                  data-alt="Pizza Hum"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/7915f44b-ac7c-4cf0-9e47-616ec2061882.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/7915f44b-ac7c-4cf0-9e47-616ec2061882.jpg"
                                  lazy="loaded"
                                />
                              </div>
                            </div>{" "}
                            <div className="main-data">
                              <h3 className="card-title">
                                <a href="/cairo/pizza-hum-xp4zw">Pizza Hum</a>
                              </h3>{" "}
                              <ul className="cuisines-list h-dots-list truncate">
                                <li className="list-item">Italian</li>
                                <li className="list-item">Fast Food</li>
                                <li className="list-item">Pizza</li>
                                <li className="list-item">Crepe</li>
                              </ul>{" "}
                              <span title="staticContent.filters.onlinePayment">
                                <span className="icon online-payment-icon">
                                  <svg viewBox="0 0 16 17">
                                    <use xlinkHref="#credit" />
                                  </svg>
                                </span>
                              </span>
                            </div>{" "}
                            {/**/}
                          </div>{" "}
                          <div className="card-footer clickable-item">
                            <a
                              href="/cairo/pizza-hum-xp4zw"
                              className="clickable-anchor"
                            />{" "}
                            <span>
                              <span className="icon">
                                <svg viewBox="0 0 25 25">
                                  <use xlinkHref="#delivery-icon" />
                                </svg>
                              </span>
                              45 mins
                            </span>{" "}
                            {/**/} {/**/}
                          </div>
                        </div>{" "}
                        {/**/}
                      </div>
                      <div className="restaurant-card restaurant-delivery-card col-md-5 col-sm-8 col-xs-16">
                        <div className="card-inner">
                          <div className="card-images-slider ">
                            <div className="slider-images glider">
                              {/**/}{" "}
                              <div
                                className="glider-track"
                                style={{ width: 240 }}
                              >
                                <div
                                  className="item card-image image-ratio ratio-63 glider-slide active center visible"
                                  style={{ height: "auto", width: 240 }}
                                >
                                  {/**/}{" "}
                                  <figure className="image-inner ratio-content clickable-item image-loading image-loaded">
                                    <a
                                      href="/cairo/pizza-zahret-al-banafsaj-6r5rr"
                                      className="clickable-anchor"
                                    />{" "}
                                    <img
                                      alt="item.data.name"
                                      data-alt="Plain Feteer Meshaltet"
                                      className="b-lazy"
                                      data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/fc526e11-defc-4179-9bb0-c218d278d789.jpg"
                                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/fc526e11-defc-4179-9bb0-c218d278d789.jpg"
                                      lazy="loaded"
                                    />{" "}
                                    <figcaption className="image-content">
                                      <h4 className="image-title">
                                        Plain Feteer Meshaltet
                                      </h4>{" "}
                                      <span className="price">
                                        170EGP to 130EGP
                                      </span>
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            </div>{" "}
                            <button
                              type="button"
                              id="prev11"
                              className="slider-arrows prev-btn small disabled"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-left" />
                              </svg>
                            </button>{" "}
                            <button
                              type="button"
                              id="next11"
                              className="slider-arrows next-btn small disabled"
                            >
                              <svg viewBox="0 0 14 25">
                                <use xlinkHref="#angle-right" />
                              </svg>
                            </button>{" "}
                            <div id="dots11" className="glider-dots">
                              <button
                                data-index={0}
                                aria-label="Page 1"
                                className="glider-dot active"
                              />
                            </div>
                          </div>{" "}
                          <div className="card-content clickable-item">
                            <a
                              href="/cairo/pizza-zahret-al-banafsaj-6r5rr"
                              className="clickable-anchor"
                            />{" "}
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
                                          id="yw4jrl"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="rqygsj"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#yw4jrl)"
                                          stroke="#fff"
                                          filter="url(#rqygsj)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#yw4jrl)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#yw4jrl)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="87lom"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="ii88ge"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#87lom)"
                                          stroke="#fff"
                                          filter="url(#ii88ge)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#87lom)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#87lom)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="grsdk"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="it3nln"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#grsdk)"
                                          stroke="#fff"
                                          filter="url(#it3nln)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#grsdk)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#grsdk)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="zoegq5"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="100%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="xm9ddp"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#zoegq5)"
                                          stroke="#fff"
                                          filter="url(#xm9ddp)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#zoegq5)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#zoegq5)"
                                        />
                                      </svg>
                                    </span>
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
                                          id="5wsa5e"
                                          x1={0}
                                          x2="100%"
                                          y1={0}
                                          y2={0}
                                        >
                                          <stop
                                            data-v-21f5376e=""
                                            offset="60%"
                                            stopColor="#faad1d"
                                          />{" "}
                                          <stop
                                            data-v-21f5376e=""
                                            offset="60%"
                                            stopColor="#d8d8d8"
                                          />
                                        </linearGradient>{" "}
                                        <filter
                                          data-v-21f5376e=""
                                          id="8jp57u"
                                          height="130%"
                                          width="130%"
                                          filterUnits="userSpaceOnUse"
                                        >
                                          <feGaussianBlur
                                            data-v-21f5376e=""
                                            stdDeviation={0}
                                            result="coloredBlur"
                                          />{" "}
                                          <feMerge data-v-21f5376e="">
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="coloredBlur"
                                            />{" "}
                                            <feMergeNode
                                              data-v-21f5376e=""
                                              in="SourceGraphic"
                                            />
                                          </feMerge>
                                        </filter>{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#5wsa5e)"
                                          stroke="#fff"
                                          filter="url(#8jp57u)"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#5wsa5e)"
                                          stroke="#999"
                                          strokeWidth={0}
                                          strokeLinejoin="miter"
                                        />{" "}
                                        <polygon
                                          data-v-21f5376e=""
                                          points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14"
                                          fill="url(#5wsa5e)"
                                        />
                                      </svg>
                                    </span>{" "}
                                    {/**/}
                                  </div>
                                </div>{" "}
                                <span className="reviews-count">(7802)</span>
                              </div>
                            </div>{" "}
                            <div className="rest-logo image-ratio ratio-square radius">
                              <div className="ratio-content image-loading image-loaded">
                                <img
                                  alt="restaurant.data.name"
                                  data-alt="Pizza Zahret Al Banafsaj"
                                  className="b-lazy"
                                  data-src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/df7d115d-a27b-4286-a363-287a8cfd6b1c.jpg"
                                  src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/df7d115d-a27b-4286-a363-287a8cfd6b1c.jpg"
                                  lazy="loaded"
                                />
                              </div>
                            </div>{" "}
                            <div className="main-data">
                              <h3 className="card-title">
                                <a href="/cairo/pizza-zahret-al-banafsaj-6r5rr">
                                  Pizza Zahret Al Banafsaj
                                </a>
                              </h3>{" "}
                              <ul className="cuisines-list h-dots-list truncate">
                                <li className="list-item">Pizza</li>
                              </ul>{" "}
                              <span title="staticContent.filters.onlinePayment">
                                <span className="icon online-payment-icon">
                                  <svg viewBox="0 0 16 17">
                                    <use xlinkHref="#credit" />
                                  </svg>
                                </span>
                              </span>
                            </div>{" "}
                            {/**/}
                          </div>{" "}
                          {/**/}
                        </div>{" "}
                        {/**/}
                      </div>{" "}
                      {/**/}
                    </div>
                  </div>{" "}
                  <button className="btn btn-primary load-more-btn">
                    Load more restaurants
                    {/**/}
                  </button>
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
