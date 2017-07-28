tx_gridelements {
    excludeLayoutIds = slider,tabsSimple,tabs4,tabs6,accordion,slider

    setup {
        col6 {
            title = 6 columns
            description = Inserts a 6-columns grid for content. The width of each column may be set for different screen sizes.
            icon = EXT:bootstrap_grids/Resources/Public/Icons/grid_col4.png
            frame = 2
            topLevelLayout = 0
            config {
                colCount = 6
                rowCount = 1
                rows.1.columns {
                    1 {
                        name = Spalte 1
                        colPos = 101
                    }
                    2 {
                        name = Spalte 2
                        colPos = 102
                    }
                    3 {
                        name = Spalte 3
                        colPos = 103
                    }
                    4 {
                        name = Spalte 4
                        colPos = 104
                    }
                    5 {
                        name = Spalte 5
                        colPos = 105
                    }
                    6 {
                        name = Spalte 6
                        colPos = 106
                    }
                }
            }

            flexformDS = FILE:EXT:burkametall_template/Configuration/FlexForm/flexform_6col.xml
        }
    }
}

TCEFORM.tt_content.layout.altLabels.1 = runde Bilder
TCEFORM.tt_content.layout.removeItems = 2,3

# Image orientation setup
TCEFORM.tt_content.imageorient {
    removeItems = 1,2,9,10,17,18,25,26
    altLabels.0 = oben
    altLabels.8 = unten
}

# Image columns setup
TCEFORM.tt_content.imagecols {
    removeItems = 5,6,7,8
}

TCAdefaults.tt_content.imagecols = 1

# add pastetoggle button to RTE toolbar
RTE.default.showButtons := addToList (pastetoggle,left,right,center)
RTE.default.buttons.pastetoggle.setActiveOnRteOpen = 1

RTE.default {
    #angepasste CSS Datei in fileadmin speichern
    contentCSS = EXT:burkametall_template/Resources/Public/Css/rte.css
    showTagFreeClasses = 1
}

## Klassen hinzufuegen
RTE.default.proc.allowedClasses := addToList(button-link)
RTE.default.buttons {
    # blockstyle.tags.div.allowedClasses := addToList(error, small)
    # textstyle.tags.span.allowedClasses := addToList(small)
    link.properties.class.allowedClasses := addToList(button-link)
}

## nicht benoetigte Klassen entfernen
RTE.default.proc.allowedClasses := removeFromList(csc-frame-frame1, csc-frame-frame2, important, name-of-person, detail)
RTE.default.buttons {
    blockstyle.tags.div.allowedClasses := removeFromList(csc-frame-frame1, csc-frame-frame2)
}

RTE.classes := removeFromList(csc-frame-frame1, csc-frame-frame2, important, name-of-person, detail)
## Klassen fuer die RTE Auswahlfelder definieren

RTE.classesAnchor.button-link {
    name = Linkbutton
    #value = background: url(fileadmin/../arrow1.gif) no-repeat 100% 0%;
    class = btn btn-warning
}

##Button Textfarbe einblenden
RTE.default.showButtons := addToList (textcolor)

##Farbpicker ausblenden
#RTE.default.disableColorPicker = 1

RTE.default.colors = color1, color2
RTE.colors {
    color1 {
        name = Inhalte fehlen noch
        value = #FF69B4
    }

    color2 {
        name = Inhalte überprüfen
        value = #FF7D00
    }
}

// Backendlayouts
mod {
    web_layout {
        BackendLayouts {
            start {
                title = Start-Seite
                description = Startseite mit speziellen Eigenschaften wie Fetscher-Logo und Fetscher-Claim...
                config {
                    backend_layout {
                        colCount = 4
                        rowCount = 3
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Stage
                                        colspan = 4
                                        colPos = 11
                                        allowed = mask_stageimage,shortcut
                                    }
                                }
                            }

                            2 {
                                columns {
                                    1 {
                                        name = Inhalt
                                        colspan = 4
                                        colPos = 12
                                        allowed = header,textmedia,shortcut,list,div,html,gridelements_pi1,mask_spacer
                                    }
                                }
                            }

                            3 {
                                columns {
                                    1 {
                                        name = Footer links (vererbt)
                                        colPos = 21
                                        allowed = header,textmedia,shortcut,html
                                    }

                                    2 {
                                        name = Footer mitte links (vererbt)
                                        colPos = 22
                                        allowed = header,textmedia,shortcut,html
                                    }

                                    3 {
                                        name = Footer mitte rechts (vererbt)
                                        colPos = 23
                                        allowed = header,textmedia,shortcut,html
                                    }

                                    4 {
                                        name = Footer rechts (vererbt)
                                        colPos = 24
                                        allowed = header,textmedia,shortcut,html
                                    }
                                }
                            }
                        }
                    }
                }

                # icon = EXT:extension_name/Resources/Public/Icons/be_2_columns.png
            }

            default {
                title = Standard-Seite
                config {
                    backend_layout {
                        colCount = 4
                        rowCount = 3
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Stage
                                        colspan = 4
                                        colPos = 11
                                        allowed = list,mask_stageimage,shortcut
                                    }
                                }
                            }

                            2 {
                                columns {
                                    1 {
                                        name = Inhalt
                                        colspan = 4
                                        colPos = 12
                                        allowed = header,textmedia,shortcut,list,div,html,gridelements_pi1,mask_spacer
                                    }
                                }
                            }

                            3 {
                                columns {
                                    1 {
                                        name = Footer links (vererbt)
                                        colPos = 21
                                        allowed = header,textmedia,shortcut,html
                                    }

                                    2 {
                                        name = Footer mitte links (vererbt)
                                        colPos = 22
                                        allowed = header,textmedia,shortcut,html
                                    }

                                    3 {
                                        name = Footer mitte rechts (vererbt)
                                        colPos = 23
                                        allowed = header,textmedia,shortcut,html
                                    }

                                    4 {
                                        name = Footer rechts (vererbt)
                                        colPos = 24
                                        allowed = header,textmedia,shortcut,html
                                    }
                                }
                            }
                        }
                    }
                }

                icon = EXT:extension_name/Resources/Public/Icons/be_2_columns.png
            }
        }
    }
}