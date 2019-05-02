# Set Editor preferences
RTE.config.tt_content.bodytext.preset = fetscher_preset


tx_gridelements {
    excludeLayoutIds = slider,tabsSimple,tabs4,tabs6,accordion,slider

    setup {
        col6 {
            title = 6 columns
            description = Inserts a 6-columns grid for content. The width of each column may be set for different screen sizes.
            icon = EXT:bootstrap_grids/Resources/Public/Icons/gridlayout_col4.gif
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
                                        allowed = mask_stageimage,shortcut,mask_carouselitem
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
