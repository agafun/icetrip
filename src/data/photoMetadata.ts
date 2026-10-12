export interface LocalizedText {
  pl: string;
  en: string;
}

export interface PhotoMeta {
  alt: LocalizedText;
  caption?: LocalizedText;
}

/**
 * Descriptive alt texts and captions for trip photos.
 * Keyed by "day-XX/filename" or just "filename".
 * 
 * REVIEW LOCATION: You can review and update all photo alt texts directly in this file.
 */
export const photoMetadata: Record<string, PhotoMeta> = {
  // ==========================================
  // DAY 1: Przylot & Transfer do Helli
  // ==========================================
  'day-01/01-IMG_3633.jpeg': {
    alt: {
      pl: 'Rozerwana mata osłony podwozia w wypożyczonym samochodzie po odbiorze z Lotus Car Rental',
      en: 'Torn underbody protective shield beneath the rental car after pickup from Lotus Car Rental'
    },
    caption: {
      pl: 'Uszkodzona mata w podwoziu odebranego samochodu',
      en: 'Damaged underbody shield discovered on the rental car'
    }
  },
  'day-01/02-IMG_5001.jpeg': {
    alt: {
      pl: 'Drewniane domki kempingowe Árhús Cottage w Helli oświetlone wieczornym słońcem',
      en: 'Wooden camping cabins at Árhús Cottage in Hella under the evening midnight sun'
    },
    caption: {
      pl: 'Baza noclegowa Árhús Cottage & Camping w Helli',
      en: 'Our cabins at Árhús Cottage & Camping in Hella'
    }
  },
  'day-01/03-IMG_4918.jpeg': {
    alt: {
      pl: 'Rzeka Ytri-Rangá i zielony brzeg kempingu Árhús Cottage & Camping w Helli',
      en: 'Ytri-Rangá river and the green riverbank of Árhús Cottage & Camping in Hella'
    },
    caption: {
      pl: 'Rzeka Ytri-Rangá przy kempingu w Helli',
      en: 'The Ytri-Rangá river beside the campsite in Hella'
    }
  },

  // ==========================================
  // DAY 2: Złoty Krąg (Golden Circle)
  // ==========================================
  'day-02/01-IMG_3640.jpeg': {
    alt: {
      pl: 'Tablica informacyjna na temat doliny Kaldidalur i wyżyny Kjölur',
      en: 'Information board about Kaldidalur valley and Kjölur plateau'
    },
    caption: {
      pl: 'Tablica informacyjna na temat Kaldidalur i Kjölur',
      en: 'Information board about Kaldidalur and Kjölur'
    }
  },
  'day-02/02-IMG_3645.jpeg': {
    alt: {
      pl: 'Wysokie bazaltowe ściany skalne wąwozu Almannagjá w Þingvellir',
      en: 'Towering basalt rock walls of Almannagjá fault gorge in Þingvellir'
    },
    caption: {
      pl: 'Wąwóz Almannagjá w Parku Narodowym Þingvellir',
      en: 'Almannagjá gorge at Þingvellir National Park'
    }
  },
  'day-02/03-IMG_3652.jpeg': {
    alt: {
      pl: 'Wodospad Öxarárfoss spływający po bazaltowych skałach w Parku Narodowym Þingvellir',
      en: 'Öxarárfoss waterfall cascading over basalt rocks in Þingvellir National Park'
    },
    caption: {
      pl: 'Wodospad Öxarárfoss w Þingvellir',
      en: 'Öxarárfoss waterfall in Þingvellir'
    }
  },
  'day-02/04-DSCF9330.jpeg': {
    alt: {
      pl: 'Panorama doliny Þingvellir z widokiem na jezioro Þingvallavatn',
      en: 'Panoramic view over Þingvellir valley and Lake Þingvallavatn'
    },
    caption: {
      pl: 'Panorama doliny Þingvellir z widokiem na jezioro Þingvallavatn',
      en: 'Panoramic view over Þingvellir valley and Lake Þingvallavatn'
    }
  },
  'day-02/05-IMG_3655.jpeg': {
    alt: {
      pl: 'Surowy krajobraz pól lawowych i wzgórz w drodze do doliny gejzerów - panorama',
      en: 'Rugged landscape of lava fields and hills driving toward the geysers - panorama'
    },
    caption: {
      pl: 'Surowy krajobraz pól lawowych i wzgórz w drodze do doliny gejzerów - panorama',
      en: 'Rugged landscape of lava fields and hills driving toward the geysers - panorama'
    }
  },
  'day-02/06-DSCF9334.jpeg': {
    alt: {
      pl: 'Surowy krajobraz pól lawowych i wzgórz w drodze do doliny gejzerów',
      en: 'Rugged landscape of lava fields and hills driving toward the geysers'
    },
    caption: {
      pl: 'Surowy krajobraz pól lawowych i wzgórz w drodze do doliny gejzerów',
      en: 'Rugged landscape of lava fields and hills driving toward the geysers'
    }
  },
  'day-02/07-IMG_3656.jpeg': {
    alt: {
      pl: 'Tablica informacyjna na temat organizacji ruchu w Geysir',
      en: 'Information board about traffic organization in Geysir area'
    },
    caption: {
      pl: 'Tablica informacyjna na temat organizacji ruchu w Geysir',
      en: 'Information board about traffic organization in Geysir area'
    }
  },
  'day-02/08-IMG_4966.jpeg': {
    alt: {
      pl: 'Wystrzał wrzącej wody i słupa pary z gejzeru Strokkur w dolinie Haukadalur',
      en: 'Eruption of boiling water and steam column from Strokkur geyser in Haukadalur'
    },
    caption: {
      pl: 'Erupcja gejzeru Strokkur',
      en: 'Eruption of Strokkur geyser'
    }
  },
  'day-02/09-DSCF9349.jpeg': {
    alt: {
      pl: 'Bus terenowy na tle lodowca Langjökull',
      en: 'Super jeep against the Langjökull glacier backdrop'
    },
    caption: {
      pl: 'Bus terenowy na tle lodowca Langjökull',
      en: 'Super jeep against the Langjökull glacier backdrop'
    }
  },
  'day-02/10-DSCF9365.jpeg': {
    alt: {
      pl: 'Potężny dwukaskadowy wodospad Gullfoss wpadający z hukiem do głębokiego kanionu rzeki Hvítá - widok z góry',
      en: 'Massive two-tiered Gullfoss waterfall plunging into the deep canyon of the Hvítá River - top view'
    },
    caption: {
      pl: 'Wodospad Gullfoss w kanionie rzeki Hvítá - widok z góry',
      en: 'Gullfoss waterfall roaring in the Hvítá canyon - top view'
    }
  },
  'day-02/11-IMG_4974.jpeg': {
    alt: {
      pl: 'Potężny dwukaskadowy wodospad Gullfoss wpadający z hukiem do głębokiego kanionu rzeki Hvítá - widok z dołu',
      en: 'Massive two-tiered Gullfoss waterfall plunging into the deep canyon of the Hvítá River - bottom view'
    },
    caption: {
      pl: 'Wodospad Gullfoss w kanionie rzeki Hvítá - widok z dołu',
      en: 'Gullfoss waterfall roaring in the Hvítá canyon - bottom view'
    }
  },
  'day-02/12-IMG_4990.jpeg': {
    alt: {
      pl: 'Naturalne gorące źródło Hrunalaug z kamiennym basenem i tradycyjną trawiastą chatką',
      en: 'Natural hot spring of Hrunalaug featuring a stone pool and a traditional turf hut'
    },
    caption: {
      pl: 'Kąpiel w gorącym źródle Hrunalaug',
      en: 'Relaxing soak in the Hrunalaug hot spring'
    }
  },

  // ==========================================
  // DAY 3: Kerið & Gorąca Rzeka Reykjadalur
  // ==========================================
  'day-03/01-IMG_3684.jpeg': {
    alt: {
      pl: 'Wulkaniczny krater Kerið z turkusowym jeziorem kraterowym i czerwonymi zboczami',
      en: 'Kerið volcanic crater with its turquoise lake surrounded by red volcanic slopes'
    },
    caption: {
      pl: 'Jezioro w kraterze wulkanicznym Kerið',
      en: 'Crater lake inside Kerið volcano'
    }
  },
  'day-03/02-DSCF9374.jpeg': {
    alt: {
      pl: 'Dzieci na ścieżce spacerowej wzdłuż korony krateru wulkanicznego Kerið',
      en: 'Children on the walking trail along the rim of the Kerið volcanic crater'
    },
    caption: {
      pl: 'Ścieżka spacerowa wzdłuż korony krateru wulkanicznego Kerið',
      en: 'Walking trail along the rim of the Kerið volcanic crater'
    }
  },
  'day-03/03-IMG_3697.jpeg': {
    alt: {
      pl: 'Zielona dolina Reykjadalur z obłokami pary unoszącymi się nad zboczami',
      en: 'Lush green Reykjadalur valley with clouds of steam drifting over mountain slopes'
    },
    caption: {
      pl: 'Dolina geotermalna Reykjadalur',
      en: 'Reykjadalur geothermal valley'
    }
  },
  'day-03/04-IMG_5016.jpeg': {
    alt: {
      pl: 'Szlak trekkingowy wzdłuż dymiącej rzeki termalnej Reykjadalur',
      en: 'Hiking trail running alongside the steaming Reykjadalur thermal river'
    },
    caption: {
      pl: 'Szlak trekkingowy wzdłuż dymiącej rzeki termalnej Reykjadalur',
      en: 'Hiking trail running alongside the steaming Reykjadalur thermal river'
    }
  },
  'day-03/05-IMG_5019.jpeg': {
    alt: {
      pl: 'Zielona dolina Reykjadalur z obłokami pary unoszącymi się nad zboczami - zbliżenie ',
      en: 'Lush green Reykjadalur valley with clouds of steam drifting over mountain slopes - close-up'
    },
    caption: {
      pl: 'Dolina geotermalna Reykjadalur',
      en: 'Reykjadalur geothermal valley'
    }
  },
  'day-03/06-IMG_5021.jpeg': {
    alt: {
      pl: 'Wycieczka konna w dolinie Reykjadalur',
      en: 'Horse riding trip in Reykjadalur valley'
    },
    caption: {
      pl: 'Wycieczka konna w dolinie Reykjadalur',
      en: 'Horse riding trip in Reykjadalur valley'
    }
  },
  'day-03/07-IMG_5032.jpeg': {
    alt: {
      pl: 'Opakowanie Sun-Maid Sour Raisin Snacks o smaku truskawkowym',
      en: 'Sun-Maid Sour Raisin Snacks strawberry flavor packaging'
    },
    caption: {
      pl: 'Nasza ulubiona przekąska - Sun-Maid Sour Raisin Snacks o smaku truskawkowym',
      en: 'Our favorite snack - Sun-Maid Sour Raisin Snacks strawberry flavor'
    }
  },

  // ==========================================
  // DAY 4: Południowe Wybrzeże (Wodospady & Klify)
  // ==========================================
  'day-04/01-IMG_3705.jpeg': {
    alt: {
      pl: 'Tablica informacyjna na temat wodospadu Seljalandsfoss',
      en: 'Information board about Seljalandsfoss waterfall'
    },
    caption: {
      pl: 'Tablica informacyjna na temat wodospadu Seljalandsfoss',
      en: 'Information board about Seljalandsfoss waterfall'
    }
  },
  'day-04/02-DSCF9383.jpeg': {
    alt: {
      pl: 'Wodospad Seljalandsfoss spadający z wysokiego klifu - widok od frontu',
      en: 'Seljalandsfoss waterfall cascading from a high cliff - front view'
    },
    caption: {
      pl: 'Wodospad Seljalandsfoss',
      en: 'Seljalandsfoss waterfall'
    }
  },
  'day-04/03-IMG_5098.jpeg': {
    alt: {
      pl: 'Wodospad Seljalandsfoss spadający z wysokiego klifu - widok z boku',
      en: 'Seljalandsfoss waterfall cascading from a high cliff - side view'
    },
    caption: {
      pl: 'Wodospad Seljalandsfoss',
      en: 'Seljalandsfoss waterfall'
    }
  },
  'day-04/04-IMG_3722.jpeg': {
    alt: {
      pl: 'Tablica informacyjna na temat wodospadu Gljúfrabúi',
      en: 'Information board about Gljúfrabúi waterfall'
    },
    caption: {
      pl: 'Tablica informacyjna na temat wodospadu Gljúfrabúi',
      en: 'Information board about Gljúfrabúi waterfall'
    }
  },
  'day-04/05-IMG_3720.jpeg': {
    alt: {
      pl: 'Ukryty wodospad Gljúfrabúi spadający wewnątrz omszałej jaskini skalnej',
      en: 'Hidden Gljúfrabúi waterfall plunging inside a mossy rock cavern'
    },
    caption: {
      pl: 'Wodospad Gljúfrabúi w szczelinie skalnej',
      en: 'Gljúfrabúi waterfall tucked inside the rock crevice'
    }
  },
  'day-04/06-IMG_5118.jpeg': {
    alt: {
      pl: 'Potężny wodospad Skógafoss o wysokości 60 metrów z unoszącą się chmurą kropel',
      en: 'Mighty 60-meter Skógafoss waterfall with billows of water spray'
    },
    caption: {
      pl: 'Wodospad Skógafoss',
      en: 'Skógafoss waterfall'
    }
  },
  'day-04/07-IMG_3730.jpeg': {
    alt: {
      pl: 'Widok z klifów Dyrhólaey na niekończącą się czarną plażę i fale oceanu - panorama',
      en: 'Endless black sand beach and ocean surf viewed from the cliffs of Dyrhólaey - panorama'
    },
    caption: {
      pl: 'Widok z klifów Dyrhólaey',
      en: 'View from the cliffs of Dyrhólaey'
    }
  },
  'day-04/08-DSCF9405.jpeg': {
    alt: {
      pl: 'Biała latarnia morska Dyrhólaey na szczycie wulkanicznego przylądka',
      en: 'White Dyrhólaey lighthouse perched atop the dramatic volcanic promontory'
    },
    caption: {
      pl: 'Latarnia morska Dyrhólaey',
      en: 'Dyrhólaey lighthouse'
    }
  },
  'day-04/09-IMG_3732.jpeg': {
    alt: {
      pl: 'Łuk skalny Dyrhólaey z widokiem na Atlantyk',
      en: 'Rock arch of Dyrhólaey with view of the Atlantic Ocean'
    },
    caption: {
      pl: 'Łuk skalny Dyrhólaey',
      en: 'Dyrhólaey rock arch'
    }
  },
  'day-04/10-DSCF9410.jpeg': {
    alt: {
      pl: 'Widok z klifów Dyrhólaey w kierunku czarnej plaży Reynisfjara i formacji bazaltowych',
      en: 'View from the cliffs of Dyrhólaey to the black Reynisfjara beach and basalt formations'
    },
    caption: {
      pl: 'Widok z klifów Dyrhólaey',
      en: 'View from the cliffs of Dyrhólaey'
    }
  },
  'day-04/11-DSCF9440.jpeg': {
    alt: {
      pl: 'Kolorowy maskonur zwyczajny lądujący na trawiastej krawędzi klifu w Dyrhólaey',
      en: 'Atlantic puffin landing on the grassy cliff top at Dyrhólaey'
    },
    caption: {
      pl: 'Maskonur na klifie Dyrhólaey',
      en: 'Atlantic puffin on the cliff'
    }
  },
  'day-04/12-IMG_3742.jpeg': {
    alt: {
      pl: 'Czarne wybrzeże i skalne ostańce w drodze na plażę Reynisfjara',
      en: 'Black coastline and jagged sea stacks viewed on the approach to Reynisfjara'
    },
    caption: {
      pl: 'Czarne wybrzeże i skalne ostańce - widok z plaży Reynisfjara',
      en: 'Black coastline and jagged sea stacks - view from Reynisfjara beach'
    }
  },
  'day-04/13-IMG_3746.jpeg': {
    alt: {
      pl: 'Czarne piaski Reynisfjara z formacjami bazaltowych kolumn i jaskinią Hálsanefshellir',
      en: 'Reynisfjara black sand beach with columnar basalt pillars and Hálsanefshellir cave'
    },
    caption: {
      pl: 'Bazaltowe kolumny na plaży Reynisfjara i jaskinia Hálsanefshellir',
      en: 'Basalt columns at Reynisfjara beach and Hálsanefshellir cave'
    }
  },
  'day-04/14-IMG_3750.jpeg': {
    alt: {
      pl: 'Wąwóz Fjaðrárgljúfur o stromych ścianach porośniętych zielonym mchem',
      en: 'Fjaðrárgljúfur canyon with steep moss-draped cliff walls'
    },
    caption: {
      pl: 'Kanion Fjaðrárgljúfur',
      en: 'Fjaðrárgljúfur canyon'
    }
  },
  'day-04/15-IMG_5137.jpeg': {
    alt: {
      pl: 'Meandry rzeki Fjaðrá płynącej dnem malowniczego kanionu Fjaðrárgljúfur',
      en: 'Meanders of the Fjaðrá river flowing through the floor of Fjaðrárgljúfur canyon'
    },
    caption: {
      pl: 'Kanion Fjaðrárgljúfur',
      en: 'Fjaðrárgljúfur canyon'
    }
  },

  // ==========================================
  // DAY 5: Lodowce & Laguna Jökulsárlón
  // ==========================================
  'day-05/01-IMG_3773.jpeg': {
    alt: {
      pl: 'Wodospad Svartifoss otoczony niezwykłymi czarnymi kolumnami bazaltowymi w Skaftafell - widok z oddali',
      en: 'Svartifoss waterfall framed by striking dark basalt columns in Skaftafell - view from a distance'
    },
    caption: {
      pl: 'Wodospad Svartifoss w Skaftafell',
      en: 'Svartifoss waterfall in Skaftafell'
    }
  },
  'day-05/02-IMG_3774.jpeg': {
    alt: {
      pl: 'Wodospad Svartifoss otoczony niezwykłymi czarnymi kolumnami bazaltowymi w Skaftafell',
      en: 'Svartifoss waterfall framed by striking dark basalt columns in Skaftafell'
    },
    caption: {
      pl: 'Wodospad Svartifoss w Skaftafell',
      en: 'Svartifoss waterfall in Skaftafell'
    }
  },
  'day-05/03-DSCF9479.jpeg': {
    alt: {
      pl: 'Zbliżenie na geometryczne wiszące filary bazaltowe za kaskadą Svartifoss',
      en: 'Close-up of geometric hanging basalt pillars behind the Svartifoss cascade'
    },
    caption: {
      pl: 'Filary bazaltowe wodospadu Svartifoss w Skaftafell',
      en: 'Basalt pillars of Svartifoss waterfall in Skaftafell'
    }
  },
  'day-05/04-IMG_3784.jpeg': {
    alt: {
      pl: 'Czoło lodowca Skaftafellsjökull z widocznymi szczelinami i warstwami popiołu wulkanicznego',
      en: 'Glacier snout of Skaftafellsjökull showing crevasse fields and volcanic ash bands'
    },
    caption: {
      pl: 'Czoło lodowca Skaftafellsjökull',
      en: 'Glacier snout of Skaftafellsjökull'
    }
  },
  'day-05/05-IMG_5274.jpeg': {
    alt: {
      pl: 'Czoło lodowca Skaftafellsjökull z widocznymi szczelinami i warstwami popiołu wulkanicznego',
      en: 'Glacier snout of Skaftafellsjökull showing crevasse fields and volcanic ash bands'
    },
    caption: {
      pl: 'Czoło lodowca Skaftafellsjökull',
      en: 'Glacier snout of Skaftafellsjökull'
    }
  },
  'day-05/06-IMG_3786.jpeg': {
    alt: {
      pl: 'Czoło lodowca Skaftafellsjökull z widocznymi szczelinami i warstwami popiołu wulkanicznego',
      en: 'Glacier snout of Skaftafellsjökull showing crevasse fields and volcanic ash bands'
    },
    caption: {
      pl: 'Czoło lodowca Skaftafellsjökull',
      en: 'Glacier snout of Skaftafellsjökull'
    }
  },
  'day-05/07-IMG_3787.jpeg': {
    alt: {
      pl: 'Skupisko żółtych kwiatów skalnicy nakrapianej w przylodowcowych kamieniach',
      en: 'Yellow flowers of saxifraga aizoides on the glacier stones'
    },
    caption: {
      pl: 'Skalnica nakrapiana',
      en: 'Saxifraga aizoides'
    }
  },
  'day-05/08-IMG_3790.jpeg': {
    alt: {
      pl: 'Fioletowe kwiaty łubinu na tle polodowcowego krajobrazu',
      en: 'Purple lupine flowers against the backdrop of a glacial landscape'
    },
    caption: {
      pl: 'Łubin',
      en: 'Lupinus'
    }
  },
  'day-05/09-IMG_5244.jpeg': {
    alt: {
      pl: 'Czoło lodowca Vatnajökull wpadające do laguny Fjallsárlón',
      en: 'The Vatnajökull glacier tongue falling into the Fjallsárlón lagoon'
    },
    caption: {
      pl: 'Fjallsárlón',
      en: 'Fjallsárlón'
    }
  },
  'day-05/10-IMG_5248.jpeg': {
    alt: {
      pl: 'Czoło lodowca Vatnajökull - zbliżenie na szczeliny',
      en: 'Glacier tongue Vatnajökull – a close-up of the crevasses'
    },
    caption: {
      pl: 'Vatnajökull',
      en: 'Vatnajökull'
    }
  },
  'day-05/11-IMG_3792.jpeg': {
    alt: {
      pl: 'Bryły krystalicznego lodu wyrzucone przez fale na czarny piasek Diamentowej Plaży',
      en: 'Crystal-clear ice blocks washed ashore on the black sand of Diamond Beach'
    },
    caption: {
      pl: 'Kryształy lodu na Diamond Beach',
      en: 'Ice crystals on Diamond Beach'
    }
  },
  'day-05/12-IMG_5283.jpeg': {
    alt: {
      pl: 'Duża góra lodowa o intensywnym błękitnym odcieniu na lagunie Jökulsárlón, w tle płynąca amfibia',
      en: 'Large sculpted iceberg with vivid blue hues floating on Jökulsárlón with an amphibious boat cruising in the background'
    },
    caption: {
      pl: 'Laguna Jökulsárlón',
      en: 'Jökulsárlón'
    }
  },
  'day-05/13-IMG_5284.jpeg': {
    alt: {
      pl: 'Dzieci w pomarańczowych kamizelkach ratunkowych podczas rejsu amfibią po lagunie Jökulsárlón',
      en: 'Children in orange life jackets during an amphibious boat tour on the Jökulsárlón lagoon'
    },
    caption: {
      pl: 'Rejs amfibią po lagunie Jökulsárlón',
      en: 'Jökulsárlón boat cruise'
    }
  },
  'day-05/14-IMG_5306.jpeg': {
    alt: {
      pl: 'Mewa na szczycie góry lodowej o intensywnym błękitnym odcieniu na lagunie Jökulsárlón',
      en: 'A seagull perched on top of a deep-blue iceberg in the Jökulsárlón lagoon'
    },
    caption: {
      pl: 'Laguna Jökulsárlón',
      en: 'Jökulsárlón'
    }
  },
  'day-05/15-IMG_5309.jpeg': {
    alt: {
      pl: 'Amfibia na brzegu',
      en: 'An amphibious vehicle on the shore'
    },
    caption: {
      pl: 'Laguna Jökulsárlón',
      en: 'Jökulsárlón'
    }
  },

  // ==========================================
  // DAY 6: Fiordy Wschodnie & Góra Vestrahorn
  // ==========================================
  'day-06/01-DSCF9495.jpeg': {
    alt: {
      pl: 'Tradycyjna filmowa wioska wikingów u stóp góry Klifatindur na Stokksnes',
      en: 'Reconstructed Viking film village set beneath Mount Klifatindur at Stokksnes'
    },
    caption: {
      pl: 'Wioska Wikingów na Stokksnes',
      en: 'Viking village replica at Stokksnes'
    }
  },
  'day-06/02-DSCF9501.jpeg': {
    alt: {
      pl: 'Chłopiec za sterem okrętu Wikingów na Stokksnes',
      en: 'Boy behind the helm of a Viking ship at Stokksnes'
    },
    caption: {
      pl: 'Wioska Wikingów na Stokksnes',
      en: 'Viking village replica at Stokksnes'
    }
  },
  'day-06/03-IMG_3806.jpeg': {
    alt: {
      pl: 'Ostre szczyty góry Vestrahorn widziane z plaży Stokksnes',
      en: 'Sharp peaks of Vestrahorn seen from Stokksnes beach'
    },
    caption: {
      pl: 'Góra Vestrahorn na półwyspie Stokksnes',
      en: 'Mount Vestrahorn at Stokksnes'
    }
  },
  'day-06/04-DSCF9521.jpeg': {
    alt: {
      pl: 'Ostre szczyty góry Vestrahorn widziane z plaży Stokksnes - zbliżenie',
      en: 'Sharp peaks of Vestrahorn seen from Stokksnes beach - close-up'
    },
    caption: {
      pl: 'Góra Vestrahorn na półwyspie Stokksnes',
      en: 'Mount Vestrahorn at Stokksnes'
    }
  },
  'day-06/05-IMG_3808.jpeg': {
    alt: {
      pl: 'Przystań w miasteczku rybackim Djúpivogur',
      en: 'Fishing harbor of Djúpivogur'
    },
    caption: {
      pl: 'Przystań w Djúpivogur',
      en: 'Harbor in Djúpivogur'
    }
  },
  'day-06/06-IMG_5313.jpeg': {
    alt: {
      pl: 'Kamienne jaja ptaków - instalacja artystyczna',
      en: 'Installation of stone eggs of birds'
    },
    caption: {
      pl: 'Rzeźby jaj w Djúpivogur ',
      en: 'Egg sculptures at Djúpivogur'
    }
  },
  'day-06/07-IMG_3814.jpeg': {
    alt: {
      pl: 'Hodowla łososia w Berufjörður',
      en: 'Atlantic salmon aquaculture pens in Berufjörður'
    },
    caption: {
      pl: 'Hodowla łososia w Berufjörður',
      en: 'Salmon farming in Berufjörður'
    }
  },

  // ==========================================
  // DAY 7: Dettifoss, Hverir & Jezioro Mývatn
  // ==========================================
  'day-07/01-IMG_5384.jpeg': {
    alt: {
      pl: 'Wodospad Dettifoss w deszczowej mgle w kanionie Jökulsárgljúfur',
      en: 'Dettifoss waterfall enveloped in rainy mist in Jökulsárgljúfur canyon'
    },
    caption: {
      pl: 'Wodospad Dettifoss',
      en: 'Dettifoss waterfall'
    }
  },
  'day-07/02-IMG_5386.jpeg': {
    alt: {
      pl: 'Samotna owca na drodze przez wulkaniczne pustkowie',
      en: 'Lone sheep on a road through the volcanic wasteland'
    },
    caption: {
      pl: 'Droga przez wulkaniczne pustkowie',
      en: 'Road through the volcanic wasteland'
    }
  },
  'day-07/03-IMG_5388.jpeg': {
    alt: {
      pl: 'Krater wulkaniczny Víti w rejonie Krafla częściowo spowity gęstą mgłą',
      en: 'Víti volcanic crater lake in Krafla partially covered in dense fog'
    },
    caption: {
      pl: 'Krater Víti',
      en: 'Víti crater lake'
    }
  },
  'day-07/04-IMG_5390.jpeg': {
    alt: {
      pl: 'Rurociągi i instalacje elektrowni geotermalnej Krafla na wulkanicznym płaskowyżu',
      en: 'Pipelines of Krafla geothermal power plant across the volcanic plateau'
    },
    caption: {
      pl: 'Elektrociepłownia geotermalna Krafla',
      en: 'Krafla geothermal power plant'
    }
  },
  'day-07/05-DSCF9526.jpeg': {
    alt: {
      pl: 'Dymiąca solfatara z osadami siarki na polu termalnym Hverir',
      en: 'Steaming solfatara with yellow sulfur encrustations at Hverir'
    },
    caption: {
      pl: 'Pola geotermalne Hverir',
      en: 'Hverir geothermal fields'
    }
  },
  'day-07/06-DSCF9527.jpeg': {
    alt: {
      pl: 'Obszar geotermalny Hverir Namafjall z bulgoczącymi kociołkami błotnymi i siarką',
      en: 'Hverir Namafjall geothermal area with bubbling mud pools and sulfur mounds'
    },
    caption: {
      pl: 'Pola geotermalne Hverir',
      en: 'Hverir geothermal fields'
    }
  },
  'day-07/07-IMG_5394.jpeg': {
    alt: {
      pl: 'Bulgocząca solfatara z osadami siarki na polu termalnym Hverir',
      en: 'Bubbling mud pot with yellow sulfur encrustations at Hverir'
    },
    caption: {
      pl: 'Pola geotermalne Hverir',
      en: 'Hverir geothermal fields'
    }
  },
  'day-07/08-IMG_3847.jpeg': {
    alt: {
      pl: 'Obszar geotermalny Hverir Namafjall z bulgoczącymi kociołkami błotnymi i siarką',
      en: 'Hverir Namafjall geothermal area with bubbling mud pools and sulfur mounds'
    },
    caption: {
      pl: 'Pola geotermalne Hverir',
      en: 'Hverir geothermal fields'
    }
  },
  'day-07/09-DSCF9538.jpeg': {
    alt: {
      pl: 'Obszar geotermalny Hverir Namafjall z bulgoczącymi kociołkami błotnymi i siarką',
      en: 'Hverir Namafjall geothermal area with bubbling mud pools and sulfur mounds'
    },
    caption: {
      pl: 'Pola geotermalne Hverir',
      en: 'Hverir geothermal fields'
    }
  },
  'day-07/10-DSCF9550.jpeg': {
    alt: {
      pl: 'Kłęby siarkowej pary wydobywające się z wnętrza ziemi w Hverir',
      en: 'Sulfurous steam billows rising from fissures in the earth at Hverir'
    },
    caption: {
      pl: 'Pola geotermalne Hverir',
      en: 'Hverir geothermal fields'
    }
  },
  'day-07/11-IMG_5398.jpeg': {
    alt: {
      pl: 'Niebieskie jezioro w Reykjahlíð, w tle elektrownia geotermalna Bjarnarflag',
      en: 'Blue lake in Reykjahlíð with Bjarnarflag Geothermal Power Station in background'
    },
    caption: {
      pl: 'Niebieskie jezioro w Reykjahlíð i elektrownia geotermalna Bjarnarflag',
      en: 'Blue lake in Reykjahlíð and Bjarnarflag Geothermal Power Station'
    }
  },
  'day-07/12-IMG_5404.jpeg': {
    alt: {
      pl: 'Obiadokolacja w Vogafjós',
      en: 'Dinner at Vogafjós Farm Resort'
    },
    caption: {
      pl: 'Farma Vogafjós',
      en: 'Vogafjós Farm Resort'
    }
  },
  'day-07/13-IMG_3854.jpeg': {
    alt: {
      pl: 'Strome podejście po czarnym żwirze na koronę krateru tefry Hverfjall',
      en: 'Steep gravel trail ascending the rim of Hverfjall tephra crater'
    },
    caption: {
      pl: 'Na szlaku na Hverfjall',
      en: 'On the trail to Hverfjall'
    }
  },
  'day-07/14-IMG_3855.jpeg': {
    alt: {
      pl: 'Potężny okrągły krater wulkaniczny Hverfjall',
      en: 'Immense circular volcanic crater of Hverfjall'
    },
    caption: {
      pl: 'Krater wulkanu Hverfjall',
      en: 'Hverfjall volcanic crater'
    }
  },

  // ==========================================
  // DAY 8: Wodospad Goðafoss & Miasto Akureyri
  // ==========================================
  'day-08/01-IMG_5423.jpeg': {
    alt: {
      pl: 'Szeroki półkolisty wodospad Goðafoss z błękitną wodą rzeki Skjálfandafljót - widok z góry',
      en: 'Wide horseshoe falls of Goðafoss with turquoise waters of Skjálfandafljót River - aerial view'
    },
    caption: {
      pl: 'Wodospad Bogów Goðafoss',
      en: 'Goðafoss - Waterfall of the Gods'
    }
  },
  'day-08/02-IMG_3861.jpeg': {
    alt: {
      pl: 'Wodospad Goðafoss - widok z dołu',
      en: 'Goðafoss waterfall viewed from below'
    },
    caption: {
      pl: 'Wodospad Bogów Goðafoss',
      en: 'Goðafoss - Waterfall of the Gods'
    }
  },
  'day-08/03-IMG_5426.jpeg': {
    alt: {
      pl: 'Trzmiel zapylający różowy kwiat w Ogrodzie Botanicznym w Akureyri',
      en: 'Bumblebee pollinating a pink flower in the Botanical Garden in Akureyri'
    },
    caption: {
      pl: 'Ogród Botaniczny w Akureyri',
      en: 'Botanical Garden in Akureyri'
    }
  },
  'day-08/04-IMG_3865.jpeg': {
    alt: {
      pl: 'Naparstnica purpurowa - Ogród Botaniczny w Akureyri',
      en: 'Foxglove - Botanical Garden in Akureyri'
    },
    caption: {
      pl: 'Naparstnica purpurowa - Ogród Botaniczny w Akureyri',
      en: 'Foxglove - Botanical Garden in Akureyri'
    }
  },
  'day-08/05-DSCF9570.jpeg': {
    alt: {
      pl: 'Ostróżka wyniosła - Ogród Botaniczny w Akureyri',
      en: 'Delphinium grandiflorum - Botanical Garden in Akureyri'
    },
    caption: {
      pl: 'Ostróżka wyniosła - Ogród Botaniczny w Akureyri',
      en: 'Delphinium grandiflorum - Botanical Garden in Akureyri'
    }
  },
  'day-08/06-IMG_5428.jpeg': {
    alt: {
      pl: 'Modernistyczny kościół Akureyrarkirkja wznoszący się na wzgórzu w Akureyri',
      en: 'Modernist Akureyrarkirkja church rising above the town hill in Akureyri'
    },
    caption: {
      pl: 'Kościół Akureyrarkirkja',
      en: 'Akureyrarkirkja church'
    }
  },
  'day-08/07-IMG_3889.jpeg': {
    alt: {
      pl: 'Maskotka wykonana z włóczki zawieszona do góry nogami na latarni w Akureyri',
      en: 'Woolen baa-ma-car figurine hanging upside down on a lamppost in Akureyri'
    },
    caption: {
      pl: 'Akureyri',
      en: 'Akureyri'
    }
  },
  'day-08/08-IMG_5434.jpeg': {
    alt: {
      pl: 'Budynek lodziarni Brynja w Akureyri z ławkami przed wejściem',
      en: 'Brynja ice cream shop in Akureyri with benches outside'
    },
    caption: {
      pl: 'Lodziarnia Brynja - Akureyri',
      en: 'Brynja ice cream shop - Akureyri'
    }
  },
  'day-08/09-IMG_3892.jpeg': {
    alt: {
      pl: 'Duża porcja lodów czekoladowych Brynja z posypką',
      en: 'Large portion of Brynja chocolate ice cream with sprinkles'
    },
    caption: {
      pl: 'Lody Brynja w Akureyri',
      en: 'Brynja ice cream in Akureyri'
    }
  },
  'day-08/10-IMG_5441.jpeg': {
    alt: {
      pl: 'Domki holenderskie w Lækjarkot Rooms and Cottages, Borgarnes',
      en: 'Cottages at Lækjarkot Rooms and Cottages, Borgarnes'
    },
    caption: {
      pl: 'Lækjarkot Rooms and Cottages, Borgarnes',
      en: 'Lækjarkot Rooms and Cottages, Borgarnes'
    }
  },

  // ==========================================
  // DAY 9: Hraunfossar, Borgarnes
  // ==========================================
  'day-09/01-IMG_3895.jpeg': {
    alt: {
      pl: 'Wodospady Hraunfossar wypływające strumieniami spod krawędzi czarnego pola lawy',
      en: 'Hraunfossar waterfalls emerging in rivulets from under the lava field edge'
    },
    caption: {
      pl: 'Wodospady Hraunfossar',
      en: 'Hraunfossar waterfalls'
    }
  },
  'day-09/02-IMG_3896.jpeg': {
    alt: {
      pl: 'Wodospady Hraunfossar wypływające strumieniami spod krawędzi czarnego pola lawy',
      en: 'Hraunfossar waterfalls emerging in rivulets from under the lava field edge'
    },
    caption: {
      pl: 'Wodospady Hraunfossar',
      en: 'Hraunfossar waterfalls'
    }
  },
  'day-09/03-IMG_3902.jpeg': {
    alt: {
      pl: 'Tablica z ostrzeżeniem o niebezpieczeństwie poparzenia wodą 100°C przy źródle Deildartunguhver',
      en: 'Deildartunguhver, Europe’s most powerful hot spring, surrounded by steam clouds'
    },
    caption: {
      pl: 'Gorące źródło Deildartunguhver',
      en: 'Deildartunguhver hot spring'
    }
  },
  'day-09/04-IMG_5452.jpeg': {
    alt: {
      pl: 'Wrząca woda tryskająca ze szczeliny w Deildartunguhver w kłębach pary',
      en: 'Boiling geothermal water rushing from the fissure at Deildartunguhver'
    },
    caption: {
      pl: 'Gorące źródło Deildartunguhver',
      en: 'Deildartunguhver hot spring'
    }
  },
  'day-09/05-DSCF9587.jpeg': {
    alt: {
      pl: 'Głowa trolla - Ogród Trolli Fossatún',
      en: 'Troll head - Troll Garden Fossatún'
    },
    caption: {
      pl: 'Ogród Trolli Fossatún',
      en: 'Troll Garden Fossatún'
    }
  },
  'day-09/06-DSCF9590.jpeg': {
    alt: {
      pl: 'Ogromne krzesło - tron trolla - Ogród Trolli Fossatún',
      en: 'Huge troll chair – Fossatún Troll Garden'
    },
    caption: {
      pl: 'Ogród Trolli Fossatún',
      en: 'Troll Garden Fossatún'
    }
  },
  'day-09/07-IMG_5467.jpeg': {
    alt: {
      pl: 'Próba równowagi - Ogród Trolli Fossatún',
      en: 'Balance test - Troll Garden Fossatún'
    },
    caption: {
      pl: 'Ogród Trolli Fossatún',
      en: 'Troll Garden Fossatún'
    }
  },
  'day-09/08-DSCF9592.jpeg': {
    alt: {
      pl: 'Skalne progi i kaskady w Fossatún',
      en: 'Rock ledges and waterfalls in Fossatún'
    },
    caption: {
      pl: 'Skalne progi i kaskady w Fossatún',
      en: 'Rock ledges and waterfalls in Fossatún'
    }
  },
  'day-09/09-IMG_3906.jpeg': {
    alt: {
      pl: 'Skalne progi i kaskady w Fossatún',
      en: 'Rock ledges and waterfalls in Fossatún'
    },
    caption: {
      pl: 'Skalne progi i kaskady w Fossatún',
      en: 'Rock ledges and waterfalls in Fossatún'
    }
  },
  'day-09/10-IMG_3914.jpeg': {
    alt: {
      pl: 'Widok sprzed domku Lækjarkot Rooms and Cottages, Borgarnes w kierunku Langjökull',
      en: 'View from Lækjarkot Rooms and Cottages, Borgarnes towards Langjökull'
    },
    caption: {
      pl: 'Widok sprzed domku Lækjarkot Rooms and Cottages, Borgarnes w kierunku Langjökull',
      en: 'View from Lækjarkot Rooms and Cottages, Borgarnes towards Langjökull'
    }
  },

  // ==========================================
  // DAY 10: Półwysep Snæfellsnes
  // ==========================================
  'day-10/01-IMG_5554.jpeg': {
    alt: {
      pl: 'Góry po drodze na Półwysep Snæfellsnes',
      en: 'Mountains on the way to Snæfellsnes Peninsula'
    },
    caption: {
      pl: 'W drodze na Półwysep Snæfellsnes',
      en: 'On the way to Snæfellsnes Peninsula'
    }
  },
  'day-10/02-IMG_5564.jpeg': {
    alt: {
      pl: 'Wodospad Kirkjufellsfoss wśród omszałych kamieni, w tle ludzie na mostku',
      en: 'Kirkjufellsfoss waterfall flowing over mossy stones with people on a footbridge in the background'
    },
    caption: {
      pl: 'Wodospad Kirkjufellsfoss',
      en: 'Kirkjufellsfoss waterfall'
    }
  },
  'day-10/03-IMG_3917.jpeg': {
    alt: {
      pl: 'Panorama na górę Kirkjufell, fragment fiordu i okoliczne wzniesienia',
      en: 'Panoramic view of Mount Kirkjufell, a fragment of the fjord, and surrounding hills'
    },
    caption: {
      pl: 'Góra Kirkjufell',
      en: 'Mount Kirkjufell'
    }
  },
  'day-10/04-DSCF9601.jpeg': {
    alt: {
      pl: 'Zardzewiałe szczątki brytyjskiego trawlera Epine GY7 spoczywające na plaży Djúpalónssandur',
      en: 'Rusted iron pieces of the historic British trawler Epine GY7 on Djúpalónssandur'
    },
    caption: {
      pl: 'Wrak trawlera na plaży Djúpalónssandur',
      en: 'Shipwreck remains at Djúpalónssandur'
    }
  },
  'day-10/05-IMG_3921.jpeg': {
    alt: {
      pl: 'Czarna żwirowa plaża Djúpalónssandur otoczona czarnymi formacjami skalnymi',
      en: 'Black pebble beach of Djúpalónssandur framed by dramatic volcanic rock spires'
    },
    caption: {
      pl: 'Plaża Djúpalónssandur',
      en: 'Djúpalónssandur beach'
    }
  },
  'day-10/06-IMG_3924.jpeg': {
    alt: {
      pl: 'Dzieci bawiące się na plaży Djúpalónssandur',
      en: 'Children playing on Djúpalónssandur beach'
    },
    caption: {
      pl: 'Plaża Djúpalónssandur',
      en: 'Djúpalónssandur beach'
    }
  },
  'day-10/07-IMG_5586.jpeg': {
    alt: {
      pl: 'Dzieci odpoczywające wśród traw na skarpie w pobliżu Djúpalónssandur',
      en: 'Children resting on the grassy cliff near Djúpalónssandur'
    },
    caption: {
      pl: 'Plaża Djúpalónssandur',
      en: 'Djúpalónssandur beach'
    }
  },
  'day-10/08-IMG_3942.jpeg': {
    alt: {
      pl: 'Czarne formacje skalne przy plaży Djúpalónssandur',
      en: 'Black rock formations near Djúpalónssandur beach'
    },
    caption: {
      pl: 'Plaża Djúpalónssandur',
      en: 'Djúpalónssandur beach'
    }
  },
  'day-10/09-IMG_5588.jpeg': {
    alt: {
      pl: 'Panorama na czarną żwirową plażę Djúpalónssandur otoczoną czarnymi formacjami skalnymi',
      en: 'Panoramic view of black pebble beach of Djúpalónssandur framed by dramatic volcanic rock spires'
    },
    caption: {
      pl: 'Plaża Djúpalónssandur',
      en: 'Djúpalónssandur beach'
    }
  },
  'day-10/10-IMG_3957.jpeg': {
    alt: {
      pl: 'Klify bazaltowe i jaskinie nad morzem w Arnarstapi',
      en: 'Basalt cliffs and sea caves in Arnarstapi'
    },
    caption: {
      pl: 'Wybrzeże Arnarstapi',
      en: 'Arnarstapi coast'
    }
  },
  'day-10/12-IMG_5610.jpeg': {
    alt: {
      pl: 'Klify i formacje skalne w Arnarstapi, gdzie kolonie mają mewy',
      en: 'Cliffs and rock formations in Arnarstapi, home to seagull colonies'
    },
    caption: {
      pl: 'Wybrzeże Arnarstapi',
      en: 'Arnarstapi coast'
    }
  },
  'day-10/13-IMG_3974.jpeg': {
    alt: {
      pl: 'Mewa na klifach w Arnarstapi',
      en: 'Seagull on the cliffs of Arnarstapi'
    },
    caption: {
      pl: 'Wybrzeże Arnarstapi',
      en: 'Arnarstapi coast'
    }
  },
  'day-10/14-DSCF9624.jpeg': {
    alt: {
      pl: 'Foka wylegująca się na brzegu na plaży Ytri Tunga',
      en: 'Seal resting on the shore on the beach of Ytri Tunga'
    },
    caption: {
      pl: 'Plaża Ytri Tunga',
      en: 'Ytri Tunga beach'
    }
  },
  'day-10/15-DSCF9632.jpeg': {
    alt: {
      pl: 'Foka wylegująca się na brzegu na plaży Ytri Tunga',
      en: 'Seal resting on the shore on the beach of Ytri Tunga'
    },
    caption: {
      pl: 'Plaża Ytri Tunga',
      en: 'Ytri Tunga beach'
    }
  },
  'day-10/16-DSCF9662.jpeg': {
    alt: {
      pl: 'Foka wylegująca się na brzegu na plaży Ytri Tunga',
      en: 'Seal resting on the shore on the beach of Ytri Tunga'
    },
    caption: {
      pl: 'Plaża Ytri Tunga',
      en: 'Ytri Tunga beach'
    }
  },
  'day-10/17-DSCF9670.jpeg': {
    alt: {
      pl: 'Foka wylegująca się na brzegu na plaży Ytri Tunga',
      en: 'Seal resting on the shore on the beach of Ytri Tunga'
    },
    caption: {
      pl: 'Plaża Ytri Tunga',
      en: 'Ytri Tunga beach'
    }
  },

  // ==========================================
  // DAY 11: Nátthagi & Reykjavik
  // ==========================================
  'day-11/01-IMG_4011.jpeg': {
    alt: {
      pl: 'Świeże czarne pole lawy po erupcjach wulkanu Fagradalsfjall w dolinie Nátthagi',
      en: 'Fresh black lava field from Fagradalsfjall eruptions filling the Nátthagi valley'
    },
    caption: {
      pl: 'Pole lawowe w dolinie Nátthagi',
      en: 'Volcanic lava field in Nátthagi valley'
    }
  },
  'day-11/02-DSCF9675.jpeg': {
    alt: {
      pl: 'Czarne jęzory bazaltowej lawy spływające ze zbocza do dna doliny Nátthagi',
      en: 'Dark tongues of basalt lava that flowed down the slopes of Nátthagi valley'
    },
    caption: {
      pl: 'Pole lawowe w dolinie Nátthagi',
      en: 'Volcanic lava field in Nátthagi valley'
    }
  },
  'day-11/03-IMG_4010.jpeg': {
    alt: {
      pl: 'Czarne jęzory bazaltowej lawy spływające ze zbocza do dna doliny Nátthagi',
      en: 'Dark tongues of basalt lava that flowed down the slopes of Nátthagi valley'
    },
    caption: {
      pl: 'Pole lawowe w dolinie Nátthagi',
      en: 'Volcanic lava field in Nátthagi valley'
    }
  },
  'day-11/04-IMG_4002.jpeg': {
    alt: {
      pl: 'Struktura zastygłej bazaltowej lawy w dolinie Nátthagi',
      en: 'Intricate lava folds and textures in Nátthagi valley'
    },
    caption: {
      pl: 'Pole lawowe w dolinie Nátthagi',
      en: 'Volcanic lava field in Nátthagi valley'
    }
  },
  'day-11/05-IMG_4014.jpeg': {
    alt: {
      pl: 'Mozaika portowa autorstwa Gerður Helgadóttir w Reykjaviku',
      en: 'Harbor Mosaic by Gerður Helgadóttir in Reykjavik'
    },
    caption: {
      pl: 'Mozaika portowa autorstwa Gerður Helgadóttir w Reykjaviku',
      en: 'Harbor Mosaic by Gerður Helgadóttir in Reykjavik'
    }
  },
  'day-11/06-DSCF9682.jpeg': {
    alt: {
      pl: 'Mozaika portowa autorstwa Gerður Helgadóttir w Reykjaviku',
      en: 'Harbor Mosaic by Gerður Helgadóttir in Reykjavik'
    },
    caption: {
      pl: 'Mozaika portowa autorstwa Gerður Helgadóttir w Reykjaviku',
      en: 'Harbor Mosaic by Gerður Helgadóttir in Reykjavik'
    }
  },
  'day-11/07-DSCF9692.jpeg': {
    alt: {
      pl: 'Ulica Laugavegur z tęczowym chodnikiem prowadząca do kościoła Hallgrímskirkja',
      en: 'Laugavegur street with rainbow sidewalk leading to Hallgrímskirkja church'
    },
    caption: {
      pl: 'Ulica Laugavegur w Reykjaviku',
      en: 'Laugavegur street in Reykjavik'
    }
  },
  'day-11/08-DSCF9696.jpeg': {
    alt: {
      pl: 'Kościół Hallgrímskirkja w Reykjaviku',
      en: 'Hallgrímskirkja church in Reykjavik'
    },
    caption: {
      pl: 'Kościół Hallgrímskirkja w Reykjaviku',
      en: 'Hallgrímskirkja church in Reykjavik'
    }
  },

  // ==========================================
  // DAY 12: Rzeźba Sun Voyager & Pożegnanie
  // ==========================================
  'day-12/01-IMG_5770.jpeg': {
    alt: {
      pl: 'Prelekcja przed Lava Show w Reykjaviku',
      en: 'Presentation before Lava Show in Reykjavik'
    },
    caption: {
      pl: 'Lava Show',
      en: 'Lava Show'
    }
  },
  'day-12/02-IMG_5772.jpeg': {
    alt: {
      pl: 'Strumień gorącej lawy wylewany wprost na lód w Lava Show',
      en: 'Stream of hot lava poured directly onto ice at Lava Show'
    },
    caption: {
      pl: 'Lava Show',
      en: 'Lava Show'
    }
  },
  'day-12/03-IMG_5773.jpeg': {
    alt: {
      pl: 'Powstawanie pęcherzy powietrza w zastygającej lawie w Lava Show',
      en: 'Air bubbles forming in cooling lava at Lava Show'
    },
    caption: {
      pl: 'Lava Show',
      en: 'Lava Show'
    }
  }
};

/**
 * Returns descriptive metadata (alt & caption) for a given photo.
 */
export function getPhotoMetadata(dayNumber: number, filename: string): PhotoMeta {
  const folder = `day-${String(dayNumber).padStart(2, '0')}`;
  const keyWithFolder = `${folder}/${filename}`;
  const cleanFilename = filename.trim();

  if (photoMetadata[keyWithFolder]) {
    return photoMetadata[keyWithFolder];
  }

  if (photoMetadata[cleanFilename]) {
    return photoMetadata[cleanFilename];
  }

  // Check without extension
  const baseName = cleanFilename.replace(/\.[^.]+$/, '');
  const keyBaseWithFolder = `${folder}/${baseName}`;
  if (photoMetadata[keyBaseWithFolder]) {
    return photoMetadata[keyBaseWithFolder];
  }
  if (photoMetadata[baseName]) {
    return photoMetadata[baseName];
  }

  // Graceful fallback with clear contextual information
  const seqMatch = filename.match(/^(\d+)/)?.[1];
  const photoIndex = seqMatch ? Number(seqMatch) : 1;

  return {
    alt: {
      pl: `Zdjęcie ${photoIndex} z trasy dnia ${dayNumber} wyprawy dookoła Islandii`,
      en: `Photo ${photoIndex} from day ${dayNumber} of the Iceland road trip itinerary`
    },
    caption: { pl: '', en: '' }
  };
}
