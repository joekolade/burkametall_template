/**
* TS Includes
*/

// FSC
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/Static/constants.txt">
// Gridelements
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/constants.ts">
// powermail
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:powermail/Configuration/TypoScript/Main/constants.txt">
// powermail bootstrap
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:powermail/Configuration/TypoScript/BootstrapClassesAndLayout/constants.txt">
// cs_seo
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:cs_seo/Configuration/TypoScript/constants.txt">
// jh_magnifiq
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:jh_magnificpopup/Configuration/TypoScript/Default/constants.txt">
// scriptmerger
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:scriptmerger/Configuration/constants.txt">
// sourceopt
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sourceopt/Configuration/TypoScript/constants.txt">
// go_maps_ext
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:go_maps_ext/Configuration/TypoScript/constants.txt">
// frontend_editing
#<INCLUDE_TYPOSCRIPT: source="FILE:EXT:frontend_editing/Configuration/TypoScript/constants.ts">

fetschersite {
    site {
        #domain = fetscher.local
        #domain = relaunch.seybold-burka.com
        domain = www.burka-metallbau.de

        logoFile = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 537.9 106.4" enable-background="new 0 0 537.9 106.4"><style type="text/css">.st0{fill:#004DA1;}</style><path class="st0" d="M4.7 4h21v61.1h-21v-61.1zM45.7 3.7c7.7 0 14.1 8.8 14.1 15.6 0 5.5-3.8 12.4-10.6 14.6 8.2.2 13 9.5 13 15.7 0 6.3-6.3 15.5-13.7 15.4h-18.1v-61.3h15.3zM164.7 3.8h20.9v27.1l6.6-12.1h25.5l-14.7 23.2 16.3 23.1h-25.9l-7.8-12.7v12.7h-20.9v-61.3zM64.3 18.8h21v26.2c.1 1 1.1 1.9 2.1 1.9s1.3-.8 2.3-1.5v-26.6h20.9v27.8c.1 13.6-15 18.6-23.1 18.6-10 0-23.2-6.3-23.1-18.9v-27.5h-.1zM151.1 18.8c5.6 0 9.6 6.4 9.6 10.8v12.5h-21.1v-8.1c0-1-1.3-1.8-2.3-1.8-2.4 0-1.8 2-1.9 3.1v29.8h-20.8v-46.3h36.5zM236.4 18.8v46.2h-3c-12.1 0-20.6-13-20.6-23.1 0-9.8 8-23.1 20.6-23.1h3zM241.2 18.8h20.8v46.2h-20.8v-46.2z"/><path d="M4.7 102.3v-20.4h4.1l4.8 14.4c.4 1.3.8 2.4 1 3 .2-.7.6-1.8 1.1-3.3l4.9-14.2h3.6v20.4h-2.6v-17l-5.9 17.1h-2.4l-6-17.4v17.4h-2.6zM28.3 102.3v-20.4h14.7v2.4h-12v6.2h11.3v2.4h-11.3v6.9h12.5v2.4h-15.2zM52.1 102.3v-18h-6.7v-2.4h16.2v2.4h-6.7v18h-2.8zM59.7 102.3l7.8-20.4h2.9l8.4 20.4h-3.1l-2.4-6.2h-8.5l-2.2 6.2h-2.9zm5.9-8.4h6.9l-2.1-5.7c-.6-1.7-1.1-3.1-1.4-4.2-.3 1.3-.6 2.6-1.1 3.9l-2.3 6zM80.6 102.3v-20.4h2.7v18h10v2.4h-12.7zM96.1 102.3v-20.4h2.7v18h10v2.4h-12.7zM111.7 102.3v-20.4h7.7c1.6 0 2.8.2 3.8.6.9.4 1.7 1 2.2 1.9.5.9.8 1.8.8 2.7 0 .9-.2 1.7-.7 2.5-.5.8-1.2 1.4-2.1 1.9 1.2.4 2.2 1 2.8 1.9.7.9 1 1.9 1 3.1 0 1-.2 1.8-.6 2.7-.4.8-.9 1.5-1.5 1.9-.6.4-1.3.8-2.2 1-.9.2-2 .3-3.3.3h-7.9zm2.7-11.9h4.4c1.2 0 2.1-.1 2.6-.2.7-.2 1.2-.5 1.6-1 .3-.5.5-1.1.5-1.8s-.2-1.3-.5-1.8-.8-.9-1.4-1.1c-.6-.2-1.6-.3-3.1-.3h-4.1v6.2zm0 9.5h5.1c.9 0 1.5 0 1.8-.1.6-.1 1.1-.3 1.6-.6.4-.3.8-.6 1-1.1.3-.5.4-1.1.4-1.7 0-.8-.2-1.4-.6-2-.4-.6-.9-1-1.6-1.2-.7-.2-1.7-.3-3-.3h-4.7v7zM128.3 102.3l7.8-20.4h2.9l8.4 20.4h-3.1l-2.4-6.2h-8.5l-2.2 6.2h-2.9zm5.9-8.4h6.9l-2.1-5.7c-.6-1.7-1.1-3.1-1.4-4.2-.3 1.3-.6 2.6-1.1 3.9l-2.3 6zM162.7 81.9h2.7v11.8c0 2.1-.2 3.7-.7 4.9-.5 1.2-1.3 2.2-2.5 2.9-1.2.8-2.8 1.1-4.8 1.1-1.9 0-3.5-.3-4.7-1-1.2-.7-2.1-1.6-2.6-2.9-.5-1.2-.8-3-.8-5.1v-11.7h2.7v11.8c0 1.8.2 3.1.5 3.9.3.8.9 1.5 1.7 1.9s1.8.7 2.9.7c2 0 3.4-.4 4.2-1.3.8-.9 1.3-2.6 1.3-5.2v-11.8zM191.4 94.3v-2.4h8.6v7.6c-1.3 1.1-2.7 1.9-4.1 2.4-1.4.5-2.9.8-4.3.8-2 0-3.8-.4-5.5-1.3-1.6-.9-2.9-2.1-3.7-3.7-.8-1.6-1.3-3.4-1.3-5.4 0-2 .4-3.8 1.2-5.6.8-1.7 2-3 3.6-3.8s3.4-1.3 5.4-1.3c1.5 0 2.8.2 4 .7 1.2.5 2.1 1.1 2.8 2 .7.9 1.2 2 1.5 3.3l-2.4.7c-.3-1-.7-1.9-1.1-2.4-.5-.6-1.1-1.1-1.9-1.4-.8-.4-1.8-.5-2.8-.5-1.2 0-2.3.2-3.2.6-.9.4-1.6.9-2.2 1.5-.6.6-1 1.3-1.3 2-.5 1.3-.8 2.6-.8 4.1 0 1.8.3 3.3.9 4.6.6 1.2 1.5 2.1 2.7 2.7 1.2.6 2.5.9 3.8.9 1.2 0 2.3-.2 3.4-.7 1.1-.5 2-.9 2.5-1.4v-3.8h-5.8zM203.7 102.3v-20.4h4.1l4.8 14.4c.4 1.3.8 2.4 1 3 .2-.7.6-1.8 1.1-3.3l4.9-14.2h3.6v20.4h-2.6v-17l-5.9 17.1h-2.4l-5.9-17.4v17.4h-2.7zM227.1 102.3v-20.4h7.7c1.6 0 2.8.2 3.8.6.9.4 1.7 1 2.2 1.9.5.9.8 1.8.8 2.7 0 .9-.2 1.7-.7 2.5s-1.2 1.4-2.1 1.9c1.2.4 2.2 1 2.8 1.9.7.9 1 1.9 1 3.1 0 1-.2 1.8-.6 2.7-.4.8-.9 1.5-1.5 1.9-.6.4-1.3.8-2.2 1-.9.2-2 .3-3.3.3h-7.9zm2.7-11.9h4.4c1.2 0 2.1-.1 2.6-.2.7-.2 1.2-.5 1.6-1 .3-.5.5-1.1.5-1.8s-.2-1.3-.5-1.8-.8-.9-1.4-1.1c-.6-.2-1.6-.3-3.1-.3h-4.1v6.2zm0 9.5h5.1c.9 0 1.5 0 1.8-.1.6-.1 1.1-.3 1.6-.6.4-.3.8-.6 1-1.1.3-.5.4-1.1.4-1.7 0-.8-.2-1.4-.6-2-.4-.6-.9-1-1.6-1.2-.7-.2-1.7-.3-3-.3h-4.7v7zM246 102.3v-20.4h2.7v8.4h10.6v-8.4h2.7v20.4h-2.7v-9.6h-10.6v9.6h-2.7z"/><path class="st0" d="M274.6 81.9h257.3v20.4h-257.3z"/></svg>
        name = Burka Metallbau
    }

    pageIds {
        root = 1

        rootDE = 1
        rootEN = 31
        rootFR = 53

        metaNaviRoot = 7

        quickform = 22
        contact = 6
    }

    quickformUid = 33

    basics {
        claimWrap = <i>|</i>
    }
}
# DEV Domains
[hostname = burkametall.local] || [globalString = IENV:HTTP_HOST = burkametall.local]
    fetschersite.site.domain = burkametall.local
[global]
[hostname = dev.burka-metallbau.de] || [globalString = IENV:HTTP_HOST = dev.burka-metallbau.de]
    fetschersite.site.domain = dev.burka-metallbau.de
[global]


/**
* Activate lightbox
*
*/
styles.content.textmedia.linkWrap.lightboxEnabled = 1

/**
* Fluid Styled Content
*
*/
styles.templates.layoutRootPath = EXT:burkametall_template/Resources/Extensions/fsc/Layouts
styles.templates.templateRootPath = EXT:burkametall_template/Resources/Extensions/fsc/Templates
styles.templates.partialRootPath = EXT:burkametall_template/Resources/Extensions/fsc/Partials

<INCLUDE_TYPOSCRIPT: source="DIR:EXT:burkametall_template/Configuration/TypoScript/Constants/" extension="ts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:burkametall_template/Configuration/TypoScript/Extensions/" extension="tsconst">


/**
* Cs_sea
* https://docs.typo3.org/typo3cms/extensions/cs_seo/Developer/ExtendSitemap/Index.html#extend-sitemap
*/
plugin.tx_csseo.sitemap.pages.rootPid = 27