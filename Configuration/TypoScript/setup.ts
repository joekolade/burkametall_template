config.contentObjectExceptionHandler = 0


/**
 * Template
 *
 */

page = PAGE

page.10 = FLUIDTEMPLATE
page.10 {
    templateName = Page

    layoutRootPaths {
        10 = EXT:burkametall_template/Resources/Private/Layouts
    }

    templateRootPaths {
        10 = EXT:burkametall_template/Resources/Private/Templates
    }

    partialRootPaths {
        10 = EXT:burkametall_template/Resources/Private/Partials
    }
}

page.meta {
    viewport = width=device-width, initial-scale=1
    # bing webmaster
    msvalidate\.01 = 02FC1675B548F7BD5B15EF669CF55844
    # google site verification
    google-site-verification = 9x4g8j2RqMmROgs0wXzcCpTN6Qrusl9gNYabbr5sdRI
}

config.baseURL = https://{$fetschersite.site.domain}/
config.tx_realurl_enable = 1
config.tx_frontend_editing = 1

# JS Comment in the <head> tag

config.headerComment (
**********************************************************
*/*                                                    */*
*/*      Schäfer - Büro für Webentwicklung             */*
*/*                                                    */*
*/*      Biberach                                      */*
*/*      schaefer-webentwicklung.de                    */*
*/*      mail@schaefer-webentwicklung.de               */*
*/*                                                    */*
**********************************************************
)


/**
* Styles & Scripts
*
*/
page.includeCSS {
    googlefont = https://fonts.googleapis.com/css?family=Signika:300,600
    googlefont.external = 1
    main = EXT:burkametall_template/Resources/Public/Css/main.css
}

page.includeJS.modernizr = EXT:burkametall_template/Resources/Public/JavaScripts/vendor/modernizr.js
page.includeJS {
    vendor = EXT:burkametall_template/Resources/Public/JavaScripts/vendor.js
}

page.includeJSFooter {
    plugins = EXT:burkametall_template/Resources/Public/JavaScripts/plugins.js
    main = EXT:burkametall_template/Resources/Public/JavaScripts/main.js
}

/**
* Content Elements
* & Variables
*
*/
page.10.variables {
    layout = TEXT
    layout.data = levelfield:-2,backend_layout_next_level,slide
    layout.override.field = backend_layout

    logoFile = TEXT
    logoFile.value = {$fetschersite.site.logoFile}

    sitename = TEXT
    sitename.value = {$fetschersite.site.name}

    pageIds_root = TEXT
    pageIds_root.value = {$fetschersite.pageIds.root}

    fetscherLogoFile = TEXT
    fetscherLogoFile.value = {$fetschersite.site.fetscherLogoFile}

    mainNavi = HMENU
    mainNavi {
        special = directory
        special.value = {$fetschersite.pageIds.root}

        1 = TMENU
        1 {
            expAll = 1

            NO = 1
            NO.wrapItemAndSub = <li>|</li>

            ACT < .NO
            ACT.wrapItemAndSub = <li class="active">|</li>

            CUR < .ACT
        }

        2 < .1
        2.wrap = <ul class="subnav">|</ul>

        3 < .2
    }

    metaNavi = COA
    metaNavi {
        10 = TEXT
        10 {
            typolink.parameter = {$fetschersite.pageIds.root}
            typolink.ATagParams = class="btn hidden-xs"
            typolink.ATagBeforeWrap = 1
            typolink.wrap = <i class="fa fa-home"></i><span class="sr-only">|</span>
        }

        20 = HMENU
        20 {
            special = directory
            special.value = {$fetschersite.pageIds.metaNaviRoot}

            1 = TMENU
            1.NO = 1
            1.NO.ATagParams = class="btn"
        }
    }

    metaNaviFooter < .metaNavi
    metaNaviFooter {
        20.1.NO.ATagParams = class="btn" rel="nofollow"
    }

    contentMain < styles.content.get
    contentMain {
        select.where = colPos = 12
        select.languageField = sys_language_uid
    }

    langSwitch = TEXT
    langSwitch.value = 0
}

lib {
    contentStage = COA
    contentStage {
        10 < styles.content.get
        10 {
            select.where = colPos = 11
            slide = -1
        }
    }


    contentFooter = COA
    contentFooter {
        10 < styles.content.get
        10 {
            select.where = colPos = 21
            select.languageField = sys_language_uid
            wrap = <div class="col-sm-3">|</div>
            slide = -1
        }

        20 < .10
        20.select.where = colPos = 22

        30 < .10
        30.select.where = colPos = 23

        40 < .10
        40.select.where = colPos = 24
    }

}

[treeLevel = 1,2,3,4,5,6,7,8,9,10]
    #lib.breadCrumb >
    lib.breadCrumb = COA
    lib.breadCrumb {
        wrap = <div class="container bc"><ol class="breadcrumb hidden-xs">|</ol></div>

#        5 = TEXT
#        5.typolink.parameter = {$fetschersite.pageIds.root}
#        5.value = <i class="fa fa-home"></i>
#        5.wrap = <li>|</li>

        10 = HMENU
        10 {
            special = rootline
            special.range = 0|-1

            1 = TMENU
            1 {
                NO = 1
                NO.wrapItemAndSub = <li>|</li>

                CUR < .NO
                CUR.wrapItemAndSub = <li class="active">|</li>
            }
        }

    }
[global]

lib.superFooterText = COA
lib.superFooterText {
    10 = CONTENT
    10 {
        table = pages
        select {
            pidInList = 0
            uidInList = 1
        }

        renderObj = COA
        renderObj {
            10 = TEXT
            10 {
                field = tx_mask_agencyfootertext
                parseFunc =< lib.parseFunc_RTE
            }
        }
    }
}

lib.superFooterLogo < lib.superFooterText
lib.superFooterLogo {
    10.renderObj {
        10 >
        10 = FILES
        10 {
            references {
                table = pages
                fieldName = tx_mask_agencylogo
                uid.data = uid
            }

            renderObj = IMAGE
            renderObj {
                file.import.data = file:current:originalUid // file:current:uid
                altText.field = tx_mask_agencyname
                titleText.field = tx_mask_agencyname

                stdWrap.typolink.parameter.field = tx_mask_agencyhomepage
                stdWrap.typolink.extTarget = _blank
            }
        }
    }
}

lib.quickform = COA
lib.quickform {
    wrap = <div class="quick"><div class="quickInner">|</div></div>

    10 = TEXT
    10 {
        wrap = <a class="btn btn-primary" role="button" data-toggle="collapse" href="#quickFormCollapse" aria-expanded="false" aria-controls="collapseExample">| <i class="fa fa-chevron-down pull-right"></i></a>
        value = {$fetschersite.text.quickform.toggle}
    }

    20 = CONTENT
    20 {
        table = tt_content
        select {
            pidInList = 22
            uidInList = 33
        }

        wrap = <div class="ollapse collapse" id="quickFormCollapse" aria-expanded="true">|<div class="footer"><a href="tel:+49735194090"><i class="fa fa-phone"></i> +49 (0)7351 9409-0</a></div></div>
    }
}

lib.langSwitch = COA
lib.langSwitch {
    wrap = <ul class="list-inline">|</ul>

    10 = TEXT
    10 {
        wrap = <li>|</li>
        typolink.parameter = {$fetschersite.pageIds.rootDE}
        value = <span class="sr-only">de</span><img src="typo3conf/ext/fetschersite/Resources/Public/Images/Flags/lang_de.png" class="img-responsive" alt="de">
    }

    20 < .10
    20 {
        typolink.parameter = {$fetschersite.pageIds.rootEN}
        value = <span class="sr-only">en</span><img src="typo3conf/ext/fetschersite/Resources/Public/Images/Flags/lang_en.png" class="img-responsive" alt="en">
    }

    30 < .10
    30 {
        typolink.parameter = {$fetschersite.pageIds.rootFR}
        value = <span class="sr-only">fr</span><img src="typo3conf/ext/fetschersite/Resources/Public/Images/Flags/lang_fr.png" class="img-responsive" alt="fr">
    }
}

lib.langSwitch.10.wrap = <li class="active">|</li>
lib.langSwitch.20.wrap = <li class="">|</li>
lib.langSwitch.30.wrap = <li class="">|</li>

[PIDinRootline = {$fetschersite.pageIds.rootEN}]
    lib.langSwitch.10.wrap = <li class="">|</li>
    lib.langSwitch.20.wrap = <li class="active">|</li>
    lib.langSwitch.30.wrap = <li class="">|</li>
[global]

[PIDinRootline = {$fetschersite.pageIds.rootFR}]
    lib.langSwitch.10.wrap = <li class="">|</li>
    lib.langSwitch.20.wrap = <li class="">|</li>
    lib.langSwitch.30.wrap = <li class="active">|</li>
[global]

/**
* Lightbox und Title
*
*/
lib.fluidContent.settings.media.popup.linkParams.ATagParams.dataWrap = class="{$styles.content.textmedia.linkWrap.lightboxCssClass}" rel="{$styles.content.textmedia.linkWrap.lightboxRelAttribute}" title="{file:current:title}"


/**
* TS Includes
*/

// FSC
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/setup.txt">
// FSC LAyout wrap
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/Styling/setup.txt">
// Gridelements
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/setup.ts">
// bootstrap_grids
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bootstrap_grids/Configuration/TypoScript/setup.txt">
// powermail
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:powermail/Configuration/TypoScript/Main/setup.txt">
// powermail bootstrap
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:powermail/Configuration/TypoScript/BootstrapClassesAndLayout/setup.txt">
// cs_seo
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:cs_seo/Configuration/TypoScript/setup.txt">
// jh_magnifiq
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:jh_magnificpopup/Configuration/TypoScript/Default/setup.txt">
// mask
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:mask/Configuration/TypoScript/setup.txt">
// scriptmerger
#<INCLUDE_TYPOSCRIPT: source="FILE:EXT:scriptmerger/Configuration/setup.txt">
// sourceopt
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sourceopt/Configuration/TypoScript/setup.txt">
// go_maps_ext
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:go_maps_ext/Configuration/TypoScript/setup.txt">
// frontend_editing
#<INCLUDE_TYPOSCRIPT: source="FILE:EXT:frontend_editing/Configuration/TypoScript/setup.ts">
// pxa_cookie_bar
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:pxa_cookie_bar/Configuration/TypoScript/setup.txt">
#

/**
* Includes
*
*/
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:burkametall_template/Configuration/TypoScript/Setup/" extension="ts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:burkametall_template/Configuration/TypoScript/Extensions/" extension="tssetup">

// styles


page {
    cssInline {
        20 = TEXT
        20.value = div[class*=col-]>:first-child>header>h1, div[class*=col-]>:first-child>header>h2, div[class*=col-]>:first-child>header>h3 { margin-top: 0; }

    }
}