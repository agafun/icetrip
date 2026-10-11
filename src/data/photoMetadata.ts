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
      pl: 'Szlak w wąwozie Almannagjá w Parku Narodowym Þingvellir na styku płyt tektonicznych',
      en: 'Trail through Almannagjá gorge in Þingvellir National Park along the tectonic plate boundary'
    },
    caption: {
      pl: 'Wąwóz Almannagjá w Parku Narodowym Þingvellir',
      en: 'Almannagjá gorge at Þingvellir National Park'
    }
  },
  'day-02/02-IMG_3645.jpeg': {
    alt: {
      pl: 'Wysokie bazaltowe ściany skalne wąwozu Almannagjá w Þingvellir',
      en: 'Towering basalt rock walls of Almannagjá fault gorge in Þingvellir'
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
    }
  },
  'day-02/05-IMG_3655.jpeg': {
    alt: {
      pl: 'Surowy krajobraz pól lawowych i wzgórz w drodze do doliny gejzerów',
      en: 'Rugged landscape of lava fields and hills driving toward the geysers'
    }
  },
  'day-02/06-DSCF9334.jpeg': {
    alt: {
      pl: 'Zabytkowy kościółek Þingvallakirkja z białym dachem w Parku Narodowym Þingvellir',
      en: 'Historic Þingvallakirkja church with white roof in Þingvellir National Park'
    },
    caption: {
      pl: 'Zabytkowy kościół Þingvallakirkja',
      en: 'Historic Þingvallakirkja church'
    }
  },
  'day-02/07-IMG_3656.jpeg': {
    alt: {
      pl: 'Dolina geotermalna Haukadalur z dymiącymi źródłami termalnymi i kolorową ziemią',
      en: 'Haukadalur geothermal valley with steaming thermal springs and mineral soils'
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
      pl: 'Niebieska bańka wodna tworząca się tuż przed wybuchem gejzeru Strokkur',
      en: 'Vibrant blue water bubble forming right before Strokkur geyser explodes'
    }
  },
  'day-02/10-DSCF9365.jpeg': {
    alt: {
      pl: 'Wysoka kolumna pary wodnej gejzeru Strokkur na tle błękitnego nieba',
      en: 'Tall plume of steam from Strokkur geyser set against the sky'
    }
  },
  'day-02/11-IMG_4974.jpeg': {
    alt: {
      pl: 'Potężny dwukaskadowy wodospad Gullfoss wpadający z hukiem do głębokiego kanionu rzeki Hvítá',
      en: 'Massive two-tiered Gullfoss waterfall plunging into the deep canyon of the Hvítá River'
    },
    caption: {
      pl: 'Wodospad Gullfoss w kanionie rzeki Hvítá',
      en: 'Gullfoss waterfall roaring in the Hvítá canyon'
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
      pl: 'Ścieżka spacerowa wzdłuż korony krateru wulkanicznego Kerið',
      en: 'Walking trail along the rim of the Kerið volcanic crater'
    }
  },
  'day-03/03-IMG_3697.jpeg': {
    alt: {
      pl: 'Zielona dolina Reykjadalur z obłokami pary unoszącymi się nad zboczami',
      en: 'Lush green Reykjadalur valley with clouds of steam drifting over mountain slopes'
    }
  },
  'day-03/04-IMG_5016.jpeg': {
    alt: {
      pl: 'Szlak trekkingowy wzdłuż dymiącej rzeki termalnej Reykjadalur',
      en: 'Hiking trail running alongside the steaming Reykjadalur thermal river'
    }
  },
  'day-03/05-IMG_5019.jpeg': {
    alt: {
      pl: 'Drewniane pomosty i kładki do kąpieli w naturalnie ciepłej rzece Reykjadalur',
      en: 'Wooden boardwalks and platforms for bathing in the naturally warm Reykjadalur river'
    },
    caption: {
      pl: 'Strefa kąpielowa w rzece Reykjadalur',
      en: 'Bathing area along the Reykjadalur river'
    }
  },
  'day-03/06-IMG_5021.jpeg': {
    alt: {
      pl: 'Kąpiel w ciepłym nurcie rzeki Reykjadalur pośród górskiego krajobrazu',
      en: 'Bathing in the warm waters of Reykjadalur river surrounded by rolling hills'
    }
  },
  'day-03/07-IMG_5032.jpeg': {
    alt: {
      pl: 'Szeroki wodospad Ægissíðufoss na rzece Ytri-Rangá w pobliżu miejscowości Hella',
      en: 'Wide cascade of Ægissíðufoss waterfall on the Ytri-Rangá river near Hella'
    },
    caption: {
      pl: 'Wodospad Ægissíðufoss niedaleko Helli',
      en: 'Ægissíðufoss waterfall near Hella'
    }
  },

  // ==========================================
  // DAY 4: Południowe Wybrzeże (Wodospady & Klify)
  // ==========================================
  'day-04/01-IMG_3705.jpeg': {
    alt: {
      pl: 'Wodospad Seljalandsfoss spadający z wysokiego klifu na Południowym Wybrzeżu',
      en: 'Seljalandsfoss waterfall cascading from a high cliff on the South Coast'
    },
    caption: {
      pl: 'Wodospad Seljalandsfoss z profilu',
      en: 'Seljalandsfoss waterfall'
    }
  },
  'day-04/02-DSCF9383.jpeg': {
    alt: {
      pl: 'Niezwykły widok na zielone łąki zza spadającej kurtyny wodospadu Seljalandsfoss',
      en: 'Spectacular view of green plains from behind the falling water veil of Seljalandsfoss'
    },
    caption: {
      pl: 'Za kurtyną wodną wodospadu Seljalandsfoss',
      en: 'Behind the water curtain of Seljalandsfoss'
    }
  },
  'day-04/03-IMG_5098.jpeg': {
    alt: {
      pl: 'Kamienista ścieżka prowadząca za ścianę wody wodospadu Seljalandsfoss',
      en: 'Rocky trail running behind the waterfall cascade of Seljalandsfoss'
    }
  },
  'day-04/04-IMG_3722.jpeg': {
    alt: {
      pl: 'Wąski kanion skalny i potok prowadzący do ukrytego wodospadu Gljúfrabúi',
      en: 'Narrow rock canyon and stream leading towards the hidden Gljúfrabúi waterfall'
    }
  },
  'day-04/05-IMG_3720.jpeg': {
    alt: {
      pl: 'Ukryty wodospad Gljúfrabúi spadający wewnątrz omszałej jaskini skalnej',
      en: 'Hidden Gljúfrabúi waterfall plunging inside a mossy rock cavern'
    },
    caption: {
      pl: 'Ukryty wodospad Gljúfrabúi w szczelinie skalnej',
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
      pl: 'Widok z klifów Dyrhólaey na niekończącą się czarną plażę i fale oceanu',
      en: 'Endless black sand beach and ocean surf viewed from the cliffs of Dyrhólaey'
    }
  },
  'day-04/08-DSCF9405.jpeg': {
    alt: {
      pl: 'Monumentalny naturalny łuk skalny Dyrhólaey wystający z wód Atlantyku',
      en: 'Monumental natural sea arch of Dyrhólaey rising out of the Atlantic Ocean'
    },
    caption: {
      pl: 'Łuk skalny Dyrhólaey',
      en: 'Dyrhólaey rock arch'
    }
  },
  'day-04/09-IMG_3732.jpeg': {
    alt: {
      pl: 'Fale Atlantyku rozbijające się o ciemne wulkaniczne piaski pod klifami Dyrhólaey',
      en: 'Atlantic waves crashing against dark volcanic sands below Dyrhólaey cliffs'
    }
  },
  'day-04/10-DSCF9410.jpeg': {
    alt: {
      pl: 'Biała latarnia morska Dyrhólaey na szczycie wulkanicznego przylądka',
      en: 'White Dyrhólaey lighthouse perched atop the dramatic volcanic promontory'
    },
    caption: {
      pl: 'Latarnia morska Dyrhólaey',
      en: 'Dyrhólaey lighthouse'
    }
  },
  'day-04/11-DSCF9440.jpeg': {
    alt: {
      pl: 'Kolorowy maskonur zwyczajny odpoczywający na trawiastej krawędzi klifu w Dyrhólaey',
      en: 'Atlantic puffin resting on the grassy cliff top at Dyrhólaey'
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
    }
  },
  'day-04/13-IMG_3746.jpeg': {
    alt: {
      pl: 'Czarne piaski Reynisfjara z formacjami bazaltowych kolumn i jaskinią Hálsanefshellir',
      en: 'Reynisfjara black sand beach with columnar basalt pillars and Hálsanefshellir cave'
    },
    caption: {
      pl: 'Bazaltowe kolumny na plaży Reynisfjara',
      en: 'Basalt column cliffs at Reynisfjara beach'
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
    }
  },

  // ==========================================
  // DAY 5: Lodowce & Laguna Jökulsárlón
  // ==========================================
  'day-05/01-IMG_3773.jpeg': {
    alt: {
      pl: 'Wodospad Svartifoss otoczony niezwykłymi czarnymi kolumnami bazaltowymi w Skaftafell',
      en: 'Svartifoss waterfall framed by striking dark basalt columns in Skaftafell'
    },
    caption: {
      pl: 'Wodospad Svartifoss w Skaftafell',
      en: 'Svartifoss waterfall in Skaftafell'
    }
  },
  'day-05/02-IMG_3774.jpeg': {
    alt: {
      pl: 'Zbliżenie na geometryczne wiszące filary bazaltowe za kaskadą Svartifoss',
      en: 'Close-up of geometric hanging basalt pillars behind the Svartifoss cascade'
    }
  },
  'day-05/03-DSCF9479.jpeg': {
    alt: {
      pl: 'Zielona roślinność i brzozowy las na szlaku w Parku Narodowym Skaftafell',
      en: 'Lush greenery and arctic birch on the trail in Skaftafell National Park'
    }
  },
  'day-05/04-IMG_3784.jpeg': {
    alt: {
      pl: 'Jęzor lodowca Skaftafellsjökull z widocznymi szczelinami i warstwami popiołu wulkanicznego',
      en: 'Skaftafellsjökull glacier tongue showing crevasse fields and volcanic ash bands'
    },
    caption: {
      pl: 'Czoło lodowca Skaftafellsjökull',
      en: 'Glacier snout of Skaftafellsjökull'
    }
  },
  'day-05/05-IMG_5274.jpeg': {
    alt: {
      pl: 'Jezioro polodowcowe z pływającymi krami u czoła lodowca Skaftafellsjökull',
      en: 'Proglacial lake with floating ice chunks at the terminus of Skaftafellsjökull'
    }
  },
  'day-05/06-IMG_3786.jpeg': {
    alt: {
      pl: 'Błękitny lód i morena czołowa u podnóża lodowca Skaftafellsjökull',
      en: 'Deep blue glacial ice and rocky moraines at the base of Skaftafellsjökull'
    }
  },
  'day-05/07-IMG_3787.jpeg': {
    alt: {
      pl: 'Warstwy sprasowanego przez tysiące lat lodu lodowcowego w Skaftafell',
      en: 'Layers of millennia-old compressed glacier ice in Skaftafell'
    }
  },
  'day-05/08-IMG_3790.jpeg': {
    alt: {
      pl: 'Szlak turystyczny prowadzący do jeziora morenowego lodowca Skaftafellsjökull',
      en: 'Walking trail reaching the terminal moraine lake of Skaftafellsjökull'
    }
  },
  'day-05/09-IMG_5244.jpeg': {
    alt: {
      pl: 'Błękitne góry lodowe dryfujące po spokojnej tafli laguny Jökulsárlón',
      en: 'Luminous blue icebergs drifting peacefully across Jökulsárlón glacier lagoon'
    },
    caption: {
      pl: 'Góry lodowe w lagunie Jökulsárlón',
      en: 'Icebergs drifting in Jökulsárlón lagoon'
    }
  },
  'day-05/10-IMG_5248.jpeg': {
    alt: {
      pl: 'Panorama laguny lodowcowej Jökulsárlón z czapą lodowca Vatnajökull na horyzoncie',
      en: 'Panorama of Jökulsárlón lagoon backed by the Vatnajökull ice cap'
    }
  },
  'day-05/11-IMG_3792.jpeg': {
    alt: {
      pl: 'Bryła krystalicznego lodu wyrzucona przez fale na czarny piasek Diamentowej Plaży',
      en: 'Crystal-clear ice block washed ashore on the black sand of Diamond Beach'
    },
    caption: {
      pl: 'Kryształ lodu na Diamond Beach',
      en: 'Ice crystal on Diamond Beach'
    }
  },
  'day-05/12-IMG_5283.jpeg': {
    alt: {
      pl: 'Duża rzeźbiarska góra lodowa o intensywnym błękitnym odcieniu na lagunie Jökulsárlón',
      en: 'Large sculpted iceberg with vivid blue hues floating on Jökulsárlón'
    }
  },
  'day-05/13-IMG_5284.jpeg': {
    alt: {
      pl: 'Przejrzyste kry lodowe na plaży Diamond Beach kontrastujące z czarnym bazaltem',
      en: 'Transparent ice diamonds resting on black basalt sand at Diamond Beach'
    }
  },
  'day-05/14-IMG_5306.jpeg': {
    alt: {
      pl: 'Wypolerowane przez fale bryły lodowcowe na brzegu Diamentowej Plaży',
      en: 'Wave-polished glacial ice boulders glistening on Diamond Beach'
    }
  },
  'day-05/15-IMG_5309.jpeg': {
    alt: {
      pl: 'Gromada lśniących lodowych diamentów na czarnym wybrzeżu Atlantyku',
      en: 'Collection of sparkling ice chunks on the black Atlantic coastline'
    }
  },

  // ==========================================
  // DAY 6: Fiordy Wschodnie & Góra Vestrahorn
  // ==========================================
  'day-06/01-DSCF9495.jpeg': {
    alt: {
      pl: 'Czarne wydmy piaskowe porośnięte trawami na półwyspie Stokksnes',
      en: 'Black sand dunes dotted with tufts of dune grass on the Stokksnes peninsula'
    }
  },
  'day-06/02-DSCF9501.jpeg': {
    alt: {
      pl: 'Poszarpana sylwetka góry Vestrahorn wyłaniająca się z niskich chmur nad Stokksnes',
      en: 'Jagged silhouette of Vestrahorn mountain emerging through low clouds at Stokksnes'
    }
  },
  'day-06/03-IMG_3806.jpeg': {
    alt: {
      pl: 'Ostre szczyty góry Vestrahorn odbijające się w mokrym piasku czarnej plaży Stokksnes',
      en: 'Sharp peaks of Vestrahorn reflecting on the wet black sands of Stokksnes beach'
    },
    caption: {
      pl: 'Góra Vestrahorn na półwyspie Stokksnes',
      en: 'Mount Vestrahorn at Stokksnes'
    }
  },
  'day-06/04-DSCF9521.jpeg': {
    alt: {
      pl: 'Tradycyjna filmowa wioska wikingów u stóp góry Klifatindur na Stokksnes',
      en: 'Reconstructed Viking film village set beneath Mount Klifatindur at Stokksnes'
    },
    caption: {
      pl: 'Wioska Wikingów na Stokksnes',
      en: 'Viking village replica at Stokksnes'
    }
  },
  'day-06/05-IMG_3808.jpeg': {
    alt: {
      pl: 'Malownicza trasa widokowa wijąca się wzdłuż stromych brzegów Fiordów Wschodnich',
      en: 'Scenic highway winding along the steep coastal inlets of the Eastfjords'
    }
  },
  'day-06/06-IMG_5313.jpeg': {
    alt: {
      pl: 'Miasteczko rybackie Djúpivogur nad spokojnymi wodami fiordu Berufjörður',
      en: 'Fishing harbor town of Djúpivogur on the calm waters of Berufjörður fjord'
    },
    caption: {
      pl: 'Przystań w Djúpivogur',
      en: 'Harbor in Djúpivogur'
    }
  },
  'day-06/07-IMG_3814.jpeg': {
    alt: {
      pl: 'Kręta droga przez przełęcze górskie Fiordów Wschodnich w drodze do Egilsstaðir',
      en: 'Winding mountain pass highway through the Eastfjords toward Egilsstaðir'
    }
  },

  // ==========================================
  // DAY 7: Dettifoss, Hverir & Jezioro Mývatn
  // ==========================================
  'day-07/01-IMG_5384.jpeg': {
    alt: {
      pl: 'Potężny wodospad Dettifoss w deszczowej mgle w kanionie Jökulsárgljúfur',
      en: 'Raging Dettifoss waterfall enveloped in rainy mist in Jökulsárgljúfur canyon'
    },
    caption: {
      pl: 'Wodospad Dettifoss w ulewnym deszczu',
      en: 'Dettifoss waterfall in heavy rain'
    }
  },
  'day-07/02-IMG_5386.jpeg': {
    alt: {
      pl: 'Rurociągi i instalacje elektrowni geotermalnej Krafla na wulkanicznym płaskowyżu',
      en: 'Pipelines of Krafla geothermal power plant across the volcanic plateau'
    }
  },
  'day-07/03-IMG_5388.jpeg': {
    alt: {
      pl: 'Krater wulkaniczny Víti w rejonie Krafla częściowo spowity gęstą mgłą',
      en: 'Víti volcanic crater lake in Krafla partially covered in dense fog'
    }
  },
  'day-07/04-IMG_5390.jpeg': {
    alt: {
      pl: 'Turkusowa woda w kraterze eksplozjnym Víti wulkanu Krafla',
      en: 'Turquoise water inside the Víti explosion crater of Krafla volcano'
    },
    caption: {
      pl: 'Krater Víti w rejonie Krafla',
      en: 'Víti crater lake at Krafla'
    }
  },
  'day-07/05-DSCF9526.jpeg': {
    alt: {
      pl: 'Obszar geotermalny Hverir Namafjall z bulgoczącymi kociołkami błotnymi i siarką',
      en: 'Hverir Namafjall geothermal area with bubbling mud pools and sulfur mounds'
    },
    caption: {
      pl: 'Pola geotermalne Hverir',
      en: 'Hverir geothermal fields'
    }
  },
  'day-07/06-DSCF9527.jpeg': {
    alt: {
      pl: 'Dymiąca solfatara z osadami siarki na polu termalnym Hverir',
      en: 'Steaming solfatara with yellow sulfur encrustations at Hverir'
    }
  },
  'day-07/07-IMG_5394.jpeg': {
    alt: {
      pl: 'Kładki spacerowe pośród gęstych oparów pary w Hverir',
      en: 'Boardwalk trail through dense steam columns at Hverir'
    }
  },
  'day-07/08-IMG_3847.jpeg': {
    alt: {
      pl: 'Ochrowe i rdzawe zbocza góry Námafjall górujące nad dymiącym polem geotermalnym',
      en: 'Rust-colored volcanic ridges of Námafjall overlooking the steaming geothermal flats'
    }
  },
  'day-07/09-DSCF9538.jpeg': {
    alt: {
      pl: 'Bulgoczące szare błoto termalne w naturalnym zbiorniku na polu Hverir',
      en: 'Boiling grey mud pot bubbling continuously at Hverir'
    }
  },
  'day-07/10-DSCF9550.jpeg': {
    alt: {
      pl: 'Kłęby siarkowej pary wydobywające się z wnętrza ziemi w Hverir',
      en: 'Sulfurous steam billows rising from fissures in the earth at Hverir'
    }
  },
  'day-07/11-IMG_5398.jpeg': {
    alt: {
      pl: 'Szeroka panorama pola Hverir z widokiem na dymiące szczeliny geotermalne',
      en: 'Expansive view of the Hverir geothermal plain and steaming vents'
    }
  },
  'day-07/12-IMG_5404.jpeg': {
    alt: {
      pl: 'Gorące źródła i baseny Mývatn Nature Baths z jasnobłękitną wodą',
      en: 'Mývatn Nature Baths geothermal lagoon filled with bright milky-blue water'
    },
    caption: {
      pl: 'Kąpiel w termach Mývatn Nature Baths',
      en: 'Relaxing at Mývatn Nature Baths'
    }
  },
  'day-07/13-IMG_3854.jpeg': {
    alt: {
      pl: 'Strome podejście po czarnym żwirze na koronę krateru tefry Hverfjall',
      en: 'Steep gravel trail ascending the rim of Hverfjall tephra crater'
    }
  },
  'day-07/14-IMG_3855.jpeg': {
    alt: {
      pl: 'Potężny okrągły krater wulkaniczny Hverfjall z panoramą jeziora Mývatn',
      en: 'Immense circular volcanic crater of Hverfjall with views over Lake Mývatn'
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
      pl: 'Szeroki półkolisty wodospad Goðafoss z błękitną wodą rzeki Skjálfandafljót',
      en: 'Wide horseshoe falls of Goðafoss with turquoise waters of Skjálfandafljót River'
    },
    caption: {
      pl: 'Wodospad Bogów Goðafoss',
      en: 'Goðafoss - Waterfall of the Gods'
    }
  },
  'day-08/02-IMG_3861.jpeg': {
    alt: {
      pl: 'Wodospad Goðafoss widziany z kładki i punktu widokowego na wschodnim brzegu',
      en: 'Goðafoss waterfall viewed from the overlook on the eastern bank'
    }
  },
  'day-08/03-IMG_5426.jpeg': {
    alt: {
      pl: 'Zabytkowe kolorowe domy z drewna w centrum Akureyri',
      en: 'Charming colorful wooden houses in downtown Akureyri'
    },
    caption: {
      pl: 'Zabytkowa zabudowa Akureyri',
      en: 'Historic architecture in Akureyri'
    }
  },
  'day-08/04-IMG_3865.jpeg': {
    alt: {
      pl: 'Deptak Hafnarstræti z kawiarniami i sklepami w Akureyri',
      en: 'Hafnarstræti pedestrian avenue with cafes and shops in Akureyri'
    }
  },
  'day-08/05-DSCF9570.jpeg': {
    alt: {
      pl: 'Znane czerwone światło drogowe w kształcie serca na skrzyżowaniu w Akureyri',
      en: 'Famous heart-shaped red traffic light in Akureyri'
    },
    caption: {
      pl: 'Sygnalizacja ze serduszkiem w Akureyri',
      en: 'Heart-shaped traffic signal in Akureyri'
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
      pl: 'Szerokie schody prowadzące na wzgórze kościoła Akureyrarkirkja',
      en: 'Grand staircase leading up to the Akureyrarkirkja church grounds'
    }
  },
  'day-08/08-IMG_5434.jpeg': {
    alt: {
      pl: 'Port i przystań jachtowa w Akureyri nad fiordem Eyjafjörður',
      en: 'Harbor and marina in Akureyri against the backdrop of Eyjafjörður fjord'
    }
  },
  'day-08/09-IMG_3892.jpeg': {
    alt: {
      pl: 'Widok na fiord Eyjafjörður i góry z nabrzeża w Akureyri',
      en: 'View across Eyjafjörður fjord and mountains from the Akureyri waterfront'
    }
  },
  'day-08/10-IMG_5441.jpeg': {
    alt: {
      pl: 'Droga krajowa nr 1 przecinająca zielone pasma górskie w drodze na południe',
      en: 'Route 1 highway passing through green mountain valleys heading south'
    }
  },

  // ==========================================
  // DAY 9: Deildartunguhver, Hraunfossar & Foki
  // ==========================================
  'day-09/01-IMG_3895.jpeg': {
    alt: {
      pl: 'Najwydajniejsze gorące źródło w Europie Deildartunguhver spowite kłębami pary',
      en: 'Deildartunguhver, Europe’s most powerful hot spring, surrounded by steam clouds'
    },
    caption: {
      pl: 'Gorące źródło Deildartunguhver',
      en: 'Deildartunguhver hot spring'
    }
  },
  'day-09/02-IMG_3896.jpeg': {
    alt: {
      pl: 'Wrząca woda o temperaturze 97°C tryskająca ze szczeliny w Deildartunguhver',
      en: 'Boiling 97°C geothermal water rushing from the fissure at Deildartunguhver'
    }
  },
  'day-09/03-IMG_3902.jpeg': {
    alt: {
      pl: 'Wodospady Hraunfossar wypływające setkami strumieni spod krawędzi czarnego pola lawy',
      en: 'Hraunfossar waterfalls emerging in countless rivulets from under the lava field edge'
    },
    caption: {
      pl: 'Wodospady Hraunfossar',
      en: 'Hraunfossar waterfalls'
    }
  },
  'day-09/04-IMG_5452.jpeg': {
    alt: {
      pl: 'Turkusowa rzeka Hvítá i kaskady Hraunfossar pośród złocistych i zielonych krzewów',
      en: 'Turquoise Hvítá River and Hraunfossar cascades framed by arctic foliage'
    }
  },
  'day-09/05-DSCF9587.jpeg': {
    alt: {
      pl: 'Wodospad Kolufossar spadający do głębokiego skalnego kanionu Kolugljúfur',
      en: 'Kolufossar waterfall plunging into the rugged rock canyon of Kolugljúfur'
    },
    caption: {
      pl: 'Kanion Kolugljúfur',
      en: 'Kolugljúfur canyon'
    }
  },
  'day-09/06-DSCF9590.jpeg': {
    alt: {
      pl: 'Głęboki wąwóz kanionu Kolugljúfur z rwącym nurtem rzeki Víðidalsá',
      en: 'Deep chasm of Kolugljúfur gorge with the rushing Víðidalsá river'
    }
  },
  'day-09/07-IMG_5467.jpeg': {
    alt: {
      pl: 'Dzikie foki wylegujące się na przybrzeżnych skałach półwyspu Vatnsnes',
      en: 'Wild harbor seals resting on coastal skerries off the Vatnsnes peninsula'
    },
    caption: {
      pl: 'Obserwacja fok na półwyspie Vatnsnes',
      en: 'Seal watching on Vatnsnes peninsula'
    }
  },
  'day-09/08-DSCF9592.jpeg': {
    alt: {
      pl: 'Skalne progi i kaskady w kanionie Kolugljúfur',
      en: 'Rock ledges and waterfalls in Kolugljúfur canyon'
    }
  },
  'day-09/09-IMG_3906.jpeg': {
    alt: {
      pl: 'Surowe kamieniste wybrzeże fiordu Miðfjörður z widokiem na wody oceanu',
      en: 'Rugged rocky shoreline of Miðfjörður fjord looking out across the sea'
    }
  },
  'day-09/10-IMG_3914.jpeg': {
    alt: {
      pl: 'Panorama miasteczka Borgarnes położonego nad fiordem Borgarfjörður',
      en: 'Scenic view of Borgarnes town situated along Borgarfjörður fjord'
    }
  },

  // ==========================================
  // DAY 10: Półwysep Snæfellsnes
  // ==========================================
  'day-10/01-IMG_5554.jpeg': {
    alt: {
      pl: 'Wysoka skalna ściana symetrycznych bazaltowych kolumn Gerðuberg',
      en: 'Towering geometric cliff wall of hexagonal basalt columns at Gerðuberg'
    },
    caption: {
      pl: 'Bazaltowe kolumny Gerðuberg',
      en: 'Gerðuberg basalt columns'
    }
  },
  'day-10/02-IMG_5564.jpeg': {
    alt: {
      pl: 'Słynna góra Kirkjufell o stożkowatym kształcie widziana zza wodospadu Kirkjufellsfoss',
      en: 'Famous conical Mount Kirkjufell framed by the twin cascades of Kirkjufellsfoss waterfall'
    },
    caption: {
      pl: 'Góra Kirkjufell i wodospad Kirkjufellsfoss',
      en: 'Mount Kirkjufell and Kirkjufellsfoss waterfall'
    }
  },
  'day-10/03-IMG_3917.jpeg': {
    alt: {
      pl: 'Wodospad Kirkjufellsfoss z błękitną wodą na tle majestatycznej góry Kirkjufell',
      en: 'Kirkjufellsfoss waterfall flowing with iconic Mount Kirkjufell in the background'
    }
  },
  'day-10/04-DSCF9601.jpeg': {
    alt: {
      pl: 'Czarne spiralne schody prowadzące na krawędź krateru wulkanicznego Saxhóll',
      en: 'Curving metal stairs ascending the rim of Saxhóll red volcanic crater'
    },
    caption: {
      pl: 'Wejście na krater Saxhóll',
      en: 'Stairs ascending Saxhóll crater'
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
      pl: 'Zardzewiałe szczątki brytyjskiego trawlera Epine GY7 spoczywające na plaży Djúpalónssandur',
      en: 'Rusted iron pieces of the historic British trawler Epine GY7 on Djúpalónssandur'
    },
    caption: {
      pl: 'Wrak trawlera na plaży Djúpalónssandur',
      en: 'Shipwreck remains at Djúpalónssandur'
    }
  },
  'day-10/07-IMG_5586.jpeg': {
    alt: {
      pl: 'Łuk skalny i naturalne okno w lawie nad brzegiem morza w Djúpalónssandur',
      en: 'Natural rock arch and sea window in volcanic lava along the Djúpalónssandur coast'
    }
  },
  'day-10/08-IMG_3942.jpeg': {
    alt: {
      pl: 'Czarne gładkie kamienie plaży Djúpalónssandur obmywane przez morskie fale',
      en: 'Smooth black volcanic pebbles of Djúpalónssandur washed by Atlantic waves'
    }
  },
  'day-10/09-IMG_5588.jpeg': {
    alt: {
      pl: 'Klify z lawy i postrzępione iglice bazaltowe wyłaniające się ze spienionego oceanu',
      en: 'Lava cliffs and jagged basalt sea pillars rising from the foaming ocean'
    }
  },
  'day-10/10-IMG_3957.jpeg': {
    alt: {
      pl: 'Potężne wulkaniczne ostańce bazaltowe Lóndrangar wznoszące się nad brzegiem oceanu',
      en: 'Monumental volcanic basalt plugs of Lóndrangar towering over the Atlantic shore'
    },
    caption: {
      pl: 'Formacje skalne Lóndrangar',
      en: 'Lóndrangar rock pinnacles'
    }
  },
  'day-10/12-IMG_5610.jpeg': {
    alt: {
      pl: 'Biała latarnia morska Malarrif na zielonym przylądku u stóp lodowca Snæfellsjökull',
      en: 'White Malarrif lighthouse on the grassy headland below Snæfellsjökull volcano'
    },
    caption: {
      pl: 'Latarnia morska Malarrif',
      en: 'Malarrif lighthouse'
    }
  },
  'day-10/13-IMG_3974.jpeg': {
    alt: {
      pl: 'Szlak spacerowy pośród traw wzdłuż klifów Malarrif i Lóndrangar',
      en: 'Coastal walking trail among coastal grasses connecting Malarrif and Lóndrangar'
    }
  },
  'day-10/14-DSCF9624.jpeg': {
    alt: {
      pl: 'Słynny naturalny łuk skalny Gatklettur wyżłobiony przez fale morskie w Arnarstapi',
      en: 'Famous Gatklettur circular sea arch sculpted by Atlantic breakers in Arnarstapi'
    },
    caption: {
      pl: 'Łuk skalny Gatklettur w Arnarstapi',
      en: 'Gatklettur sea arch in Arnarstapi'
    }
  },
  'day-10/15-DSCF9632.jpeg': {
    alt: {
      pl: 'Pionowe bazaltowe klify i kolonie ptaków morskich na wybrzeżu Arnarstapi',
      en: 'Sheer basalt sea cliffs and nesting seabird colonies along Arnarstapi coast'
    }
  },
  'day-10/16-DSCF9662.jpeg': {
    alt: {
      pl: 'Zabytkowy czarny drewniany kościółek Búðakirkja na pustkowiu pośród pól lawy w Búðir',
      en: 'Historic black wooden Búðakirkja church standing isolated among the Búðir lava fields'
    },
    caption: {
      pl: 'Czarny kościół Búðakirkja w Búðir',
      en: 'The black church of Búðakirkja'
    }
  },
  'day-10/17-DSCF9670.jpeg': {
    alt: {
      pl: 'Kościółek Búðakirkja z białymi oknami na tle gór półwyspu Snæfellsnes',
      en: 'Black Búðakirkja church with white-trimmed windows framed by Snæfellsnes mountains'
    }
  },

  // ==========================================
  // DAY 11: Świeża Lawa w Dolinie Nátthagi & Reykjavik
  // ==========================================
  'day-11/01-IMG_4011.jpeg': {
    alt: {
      pl: 'Świeże czarne pole lawy po erupcjach wulkanu Fagradalsfjall w dolinie Nátthagi',
      en: 'Fresh black lava field from Fagradalsfjall eruptions filling the Nátthagi valley'
    },
    caption: {
      pl: 'Świeże pole lawowe w dolinie Nátthagi',
      en: 'Fresh volcanic lava field in Nátthagi valley'
    }
  },
  'day-11/02-DSCF9675.jpeg': {
    alt: {
      pl: 'Struktura zastygłej bazaltowej lawy sznurowej pahoehoe w dolinie Nátthagi',
      en: 'Intricate ropy pahoehoe lava folds and textures in Nátthagi valley'
    }
  },
  'day-11/03-IMG_4010.jpeg': {
    alt: {
      pl: 'Czarne jęzory bazaltowej lawy spływające ze zbocza do dna doliny Nátthagi',
      en: 'Dark tongues of basalt lava that flowed down the slopes of Nátthagi valley'
    }
  },
  'day-11/04-IMG_4002.jpeg': {
    alt: {
      pl: 'Szlak turystyczny prowadzący na punkty widokowe nad wulkanicznym polem Nátthagi',
      en: 'Hiking trail heading to scenic lookouts over the Nátthagi volcanic fields'
    }
  },
  'day-11/05-IMG_4014.jpeg': {
    alt: {
      pl: 'Futurystyczna szklana elewacja sali koncertowej Harpa w porcie w Reykjaviku',
      en: 'Futuristic geometric glass facade of Harpa Concert Hall at the Reykjavik harbor'
    },
    caption: {
      pl: 'Budynek sali koncertowej Harpa',
      en: 'Harpa Concert Hall in Reykjavik'
    }
  },
  'day-11/06-DSCF9682.jpeg': {
    alt: {
      pl: 'Sześciokątne szklane pryzmaty elewacji Harpa odbijające islandzkie niebo',
      en: 'Hexagonal glass prism modules of Harpa reflecting northern daylight'
    }
  },
  'day-11/07-DSCF9692.jpeg': {
    alt: {
      pl: 'Stary Port w Reykjaviku z cumującymi statkami rybackimi i gwarną promenadą',
      en: 'Old Harbour in Reykjavik with moored fishing vessels and waterfront promenade'
    },
    caption: {
      pl: 'Stary Port w Reykjaviku',
      en: 'Reykjavik Old Harbour'
    }
  },
  'day-11/08-DSCF9696.jpeg': {
    alt: {
      pl: 'Widok na wody zatoki Faxaflói i góry Esja z nabrzeża w Reykjaviku',
      en: 'View across Faxaflói Bay towards Mount Esja from the Reykjavik shore'
    }
  },

  // ==========================================
  // DAY 12: Rzeźba Sun Voyager & Pożegnanie
  // ==========================================
  'day-12/01-IMG_5770.jpeg': {
    alt: {
      pl: 'Stalowa rzeźba Sun Voyager (Sólfar) w kształcie łodzi wikingów na nabrzeżu Reykjaviku',
      en: 'Stainless steel Sun Voyager (Sólfar) sculpture resembling a Viking ship on Reykjavik waterfront'
    },
    caption: {
      pl: 'Rzeźba Sun Voyager (Sólfar) w Reykjaviku',
      en: 'Sun Voyager (Sólfar) sculpture in Reykjavik'
    }
  },
  'day-12/02-IMG_5772.jpeg': {
    alt: {
      pl: 'Rzeźba Sólfar z panoramą wód Zatoki Faxaflói i góry Esja w tle',
      en: 'Sólfar sculpture with Mount Esja and Faxaflói Bay across the water'
    }
  },
  'day-12/03-IMG_5773.jpeg': {
    alt: {
      pl: 'Zbliżenie na stalową konstrukcję Sun Voyager lśniącą w porannym słońcu',
      en: 'Close-up of the Sun Voyager steel framework gleaming in morning light'
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
