export type Language = 'pl' | 'en';

export const defaultLang: Language = 'pl';
export const languages: Record<Language, string> = {
  pl: 'Polski',
  en: 'English',
};

export interface SafetyTip {
  pl: string;
  en: string;
  image?: string;
  photo?: string;
  imageAlt?: { pl: string; en: string };
  imageCaption?: { pl: string; en: string };
}

export interface DayData {
  slug: string;
  dayNumber: number;
  date: string;
  mapsUrl?: string;
  title: { pl: string; en: string };
  description: { pl: string; en: string };
  distance: string;
  driveTime: string;
  hub: { pl: string; en: string };
  accommodation: { pl: string; en: string; link?: string };
  highlights: { pl: string[]; en: string[] };
  food: { pl: string[]; en: string[] };
  content: { pl: string; en: string };
  safetyTip?: SafetyTip;
  safetyTips?: SafetyTip[];
  images: { url: string; alt: { pl: string; en: string }; caption: { pl: string; en: string } }[];
}

export const daysData: DayData[] = [
  {
    slug: 'day-1',
    dayNumber: 1,
    date: '26.07.2026',
    mapsUrl: 'https://www.google.pl/maps/dir/Lotus+Car+Rental+Iceland,+Flugvellir+10,+230+Keflav%C3%ADk,+Islandia/Arhus+Cottage+-+Camping+%26+Restaurant,+Rang%C3%A1rbakkar+6,+850+Hella,+Islandia/@64.1131144,-22.7302649,154127m/data=!3m1!1e3!4m15!4m14!1m5!1m1!1s0x48d602676bc10577:0xed54faf584dd5a1b!2m2!1d-22.5793205!2d63.9970853!1m5!1m1!1s0x48d6e55b00ded7ef:0x6d6be46b76571ca3!2m2!1d-20.4063613!2d63.8330699!3e0!5i1?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 1: przylot', en: 'Day 1: Arrival' },
    description: { pl: 'Lądowanie w Keflavíku, odbiór samochodu, zakupy i przejazd do bazy Árhús Cottage & Camping, Hella.', en: 'Landing at Keflavík, picking up the rental car, shopping and driving to Árhús Cottage & Camping, Hella.' },
    distance: '144 km',
    driveTime: '2h',
    hub: { pl: 'Árhús Cottage & Camping, Hella', en: 'Árhús Cottage & Camping, Hella' },
    accommodation: { pl: 'Árhús Cottage & Camping, Hella', en: 'Árhús Cottage & Camping, Hella', link: 'https://www.booking.com/hotel/is/arhus-cottage-and-camping.pl.html' },
    highlights: {
      pl: ['Lądowanie o 16:50 czasu lokalnego', 'Odbiór auta w Lotus Car Rental', 'Zakupy w markecie Bónus / Netto', 'Transfer do Árhús Cottage & Camping, Hella'],
      en: ['Landing at 16:50 local time', 'Rental car pickup at Lotus Car Rental', 'Grocery shopping at Bónus / Netto', 'Transfer to Árhús Cottage & Camping, Hella']
    },
    food: {
      pl: ['Zakupy spożywcze w Bónus / Netto w Keflaviku (czynne do 21:30).'],
      en: ['Grocery supplies at Bónus / Netto in Keflavik (usually open until 21:30).']
    },
    safetyTips: [
      {
        pl: 'Niektóre kempingi w kuchniach wspólnych mają na wyposażeniu tylko kuchenkę i czajnik - nie ma garnków, talerzy, kubków, ani sztućców (problem nie dotyka osób podróżującyh kamperami, ale wynajmując domek, można oczekiwać, że sprzęt będzie na miejscu). Warto mieć swoją menażkę i kubki.',
        en: 'Some campsite shared kitchens are only equipped with a stove and a kettle — no pots, plates, mugs, or cutlery (this is not an issue for campervan travelers, but you might expect cookware when renting a cabin). It is a good idea to bring your own mess kit and camping mugs.'
      },
      {
        pl: 'Zanim odjedziesz spod wypożyczalni, rzuć oko na auto, a w szczególności POD auto - nasze miało rozerwaną matę w podwoziu.',
        en: 'Before driving away from the rental company, take a close look at the car, and especially UNDER the car — ours had a torn underbody shield.',
        image: '01-IMG_3633',
        imageAlt: {
          pl: 'Rozerwana mata w podwoziu samochodu z wypożyczalni',
          en: 'Torn underbody shield on the rental car'
        }
      }
    ],
    content: {
      pl: `Samolot wylądował na lotnisku w Keflavíku z półtoragodzinnym opóźnieniem - po 18:00 czasu lokalnego. Dojazd do wypożyczalni Lotus Car Rental i wypożyczenie samochodu przebiegło bardzo sprawnie. Zaraz obok znajduje market Netto - szybkie zakupy i jazda w kierunku Południowego Wybrzeża. Droga prowadziła przez przez surowy krajobraz czarnych pól lawowych, co nas ogromnie zaciekawiło.

Zakwaterowaliśmy się w domkach Árhús Cottage and Camping dopiero około 22:00. Na miejscu okazało się, że jeden domek nie ma łazienki, ani kuchni, a drugi dysponuje jedynie trzema łóżkami. W ogólnodostępnej kuchni kempingowej nie ma w ogóle wyposażenia typu talerze, sztućce, czy garnki - trzeba mieć swoje, by móc gotować. Jest natomiast czajnik i kuchenka.

O 23:00 wciąż jest jasno.`,
      en: `Our flight landed at Keflavík Airport with a hour-and-a-half delay—just after 6:00 PM local time. Transferring to Lotus Car Rental and picking up the car went very smoothly. Right next door is a Netto supermarket, where we grabbed a few quick groceries before setting off toward the South Coast. The drive took us through a rugged landscape of black lava fields, which completely fascinated us.

We checked into our cabins at Árhús Cottage and Camping around 10:00 PM. Upon arrival, we found out that one cabin had neither a bathroom nor a kitchen, while the second one only had three beds. The shared campsite kitchen had no equipment whatsoever—no plates, cutlery, or pots—so you need to bring your own if you plan to cook. There was, however, a kettle and a stovetop.

At 11:00 PM, it was still broad daylight.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Malownicza islandzka droga krajowa przecinająca surowe pola lawowe', en: 'Scenic Icelandic Ring Road highway winding across rugged lava fields' },
        caption: { pl: 'Trasa z Keflavíku w stronę południowych fiordów', en: 'Scenic route heading towards Southern Iceland' }
      }
    ]
  },
  {
    slug: 'day-2',
    dayNumber: 2,
    date: '27.07.2026',
    mapsUrl: 'https://www.google.pl/maps/dir/Arhus+Cottage+-+Camping+%26+Restaurant,+Rang%C3%A1rbakkar+6,+850+Hella,+Islandia/ParkingP2+WC,+7V7J%2BCVF,+Unnamed+Road,+806+Thingvellir,+Islandia/Strokkur+Geyser,+8M7X%2B3PJ,+Hafnart%C3%BAn,+806+Selfoss,+Islandia/Gullfoss+falls+Car+Park,+806,+Islandia/Hrunalaug+Hot+Spring,+S%C3%B3lheimar,+846+Fl%C3%BA%C3%B0ir,+Islandia/Arhus+Cottage+-+Camping+%26+Restaurant,+Rang%C3%A1rbakkar+6,+850+Hella,+Islandia/@64.07913,-20.9534264,167011m/data=!3m1!1e3!4m38!4m37!1m5!1m1!1s0x48d6e55b00ded7ef:0x6d6be46b76571ca3!2m2!1d-20.4063613!2d63.8330699!1m5!1m1!1s0x48d681c3a1b440b1:0x109d26d48f05a081!2m2!1d-21.1178274!2d64.2635569!1m5!1m1!1s0x48d65fcb86a21e43:0x13fe408fd8ae0be3!2m2!1d-20.3007211!2d64.3127094!1m5!1m1!1s0x48d6a50bf5fb8c8f:0x987f8a02ec18b291!2m2!1d-20.129885!2d64.3252353!1m5!1m1!1s0x48d6be3be6a08fdb:0x40791e206b0c2e6b!2m2!1d-20.2551249!2d64.1327657!1m5!1m1!1s0x48d6e55b00ded7ef:0x6d6be46b76571ca3!2m2!1d-20.4063613!2d63.8330699!3e0?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 2: Golden Circle', en: 'Day 2: The Golden Circle' },
    description: { pl: 'Þingvellir, gejzer Strokkur, wodospad Gullfoss i relaks w dzikim źródle Hrunalaug.', en: 'Þingvellir rift valley, geyser Strokkur, Gullfoss waterfall, and Hrunalaug hot spring.' },
    distance: '237 km',
    driveTime: '3h 35m',
    hub: { pl: 'Árhús Cottage & Camping, Hella', en: 'Árhús Cottage & Camping, Hella' },
    accommodation: { pl: 'Árhús Cottage & Camping, Hella', en: 'Árhús Cottage & Camping, Hella' },
    highlights: {
      pl: ['Þingvellir: Spacer w szczelinie między kontynentami (2h)', 'Geysir: Wybuchy gejzera Strokkur (1h)', 'Gullfoss: Potężny wodospad (1h)', 'Hrunalaug Hot Spring: Kąpiel w naturalnym źródle (1h 30m)'],
      en: ['Þingvellir: Walk between continental tectonic plates (2h)', 'Geysir: Erupting Strokkur geyser(1h)', 'Gullfoss: The powerful Gullfoss waterfall (1h)', 'Hrunalaug Hot Spring: Thermal bath in a historic stone tub (1h 30m)']
    },
    food: {
      pl: [
        'Efstidalur II (między Þingvellir a Geysir): Działająca farma krów z genialnymi domowymi lodami i restauracją z widokiem na oborę. Świetna zupa i burgery z własnej wołowiny.',
        'Kaffi Krús (Selfoss): Wyśmienita pizza i lunche w rozsądnych cenach.'
      ],
      en: [
        'Efstidalur II: Working dairy farm serving famous homemade ice cream and farm-to-table beef burgers.',
        'Kaffi Krús (Selfoss): Great pizza and cozy atmosphere at fair local prices.'
      ]
    },
    safetyTip: {
      pl: 'Przy wodospadzie Gullfoss pył wodny moczy do suchej nitki. Przydadzą się kurtki/płaszcze przeciwdeszczowe!',
      en: 'Water mist at Gullfoss will soak you instantly. Waterproof jackets/ponchos are recommended!'
    },
    content: {
      pl: `Dzień poświęcony klasycznej pętli Złotego Kręgu. Pierwszym punktem był Park Narodowy Þingvellir, gdzie przeszliśmy wąwozem Almannagjá, wyznaczającym styk płyt tektonicznych. Warto podjechać na Öxarárfoss Parking P2 - najbliżej wodospadu. Ścieżki widoczne przy Thingvellir National Park Service Centre są wyłączone z ruchu ze względu na ochronę roślinności.

Z Þingvellir skierowaliśmy się do doliny gejzerów Haukadalur, gdzie obserwowaliśmy wyrzuty wody z gejzeru Strokkur, powtarzające się co 5–10 minut. Następnie podjechaliśmy pod wodospad Gullfoss. Dzień zakończyliśmy w gorącym źródle Hrunalaug - wymagana wcześniejsza rezerwacja (wejścia limitowane). Nam szczęśliwie udało się wejść czekając ok. 15 minut.

Tego dnia nie zatrzymywaliśmy się w restauracjach, jedliśmy liofilizaty na całkiem urokliwym parkingu przy Öxarárfoss.`,
      en: `A day dedicated to the classic Golden Circle loop. Our first stop was Þingvellir National Park, where we walked through the Almannagjá gorge marking the boundary between two tectonic plates. It's worth driving up to Öxarárfoss Parking P2, as it's closest to the waterfall. The paths near the Þingvellir National Park Service Centre are closed off to protect the local vegetation.

From Þingvellir, we headed to the Haukadalur geothermal valley to watch Strokkur erupt every 5–10 minutes. Next, we drove over to Gullfoss waterfall. We finished the day with a relaxing soak in the Hrunalaug hot spring—advance booking is required as entry is limited. Luckily, we managed to get in after waiting about 15 minutes.

We didn't stop at any restaurants that day, instead having freeze-dried meals at a quite charming parking area near Öxarárfoss.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Potężny wybuch gejzeru Strokkur w dolinie Haukadalur', en: 'Spectacular eruption of Strokkur geyser in Haukadalur valley' },
        caption: { pl: 'Gejzer Strokkur w dolinie Haukadalur', en: 'Strokkur geyser blasting into the sky' }
      }
    ]
  },
  {
    slug: 'day-3',
    dayNumber: 3,
    date: '28.07.2026',
    mapsUrl: 'https://www.google.pl/maps/dir/Arhus+Cottage+-+Camping+%26+Restaurant,+Rang%C3%A1rbakkar+6,+850+Hella,+Islandia/Keri%C3%B0+Parking,+24R7%2BGW9,+Keri%C3%B0+1,+805+Klausturholar,+Islandia/Reykjadalur+Hot+Spring+Thermal+River,+Reykjadalur+816,+816,+Islandia/%C3%86giss%C3%AD%C3%B0ufoss+Waterfall%E2%80%8C,+RH9M%2BJ7X,+851+Hella,+Islandia/Arhus+Cottage+-+Camping+%26+Restaurant,+Rang%C3%A1rbakkar+6,+850+Hella,+Islandia/@63.9304441,-21.1362111,50263m/data=!3m1!1e3!4m32!4m31!1m5!1m1!1s0x48d6e55b00ded7ef:0x6d6be46b76571ca3!2m2!1d-20.4063613!2d63.8330699!1m5!1m1!1s0x48d68b56bd18898f:0x9623c6a3583131aa!2m2!1d-20.8866553!2d64.0419333!1m5!1m1!1s0x48d664020bede77f:0x7b0353e5e58233ac!2m2!1d-21.211169!2d64.0218948!1m5!1m1!1s0x48d6fac82eb5814f:0x188771a0c1e8a8b9!2m2!1d-20.4167703!2d63.8191183!1m5!1m1!1s0x48d6e55b00ded7ef:0x6d6be46b76571ca3!2m2!1d-20.4063613!2d63.8330699!3e0?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 3: gorąca rzeka', en: 'Day 3: Thermal River' },
    description: { pl: 'Krater Kerið, trekking do naturalnej gorącej rzeki Reykjadalur i ukryty wodospad Ægissíðufoss.', en: 'Kerið volcanic crater, hike to the naturally heated Reykjadalur river, and hidden Ægissíðufoss waterfall.' },
    distance: '136 km',
    driveTime: '2h 05m',
    hub: { pl: 'Árhús Cottage & Camping, Hella', en: 'Árhús Cottage & Camping, Hella' },
    accommodation: { pl: 'Árhús Cottage & Camping, Hella', en: 'Árhús Cottage & Camping, Hella' },
    highlights: {
      pl: ['Krater wulkaniczny Kerið z turkusowym jeziorem (1h)', 'Reykjadalur: Trekking do 40°C gorącej rzeki (3 km w jedną stronę, 4h)', 'Ukryty wodospad Ægissíðufoss blisko Hella'],
      en: ['Kerið volcanic crater with neon turquoise water (1h)', 'Reykjadalur: Hike to a 40°C natural hot spring river (3 km one way, 4h)', 'Hidden Ægissíðufoss waterfall near Hella']
    },
    food: {
      pl: ['Kaffi Krús (Selfoss): Pyszne lunche, tradycyjna zupa i dobra pizza.'],
      en: ['Kaffi Krús (Selfoss): Delicious lunches, traditional soups, and hearty pizzas.']
    },
    safetyTip: {
      pl: 'Przebieralnie nad gorącą rzeką Reykjadalur to tylko proste drewniane parawany. Warto ubrać strój kąpielowy pod spód przed trekkingiem.',
      en: 'Changing areas at Reykjadalur are simple wooden screens. Wear your swimsuit under hiking gear.'
    },
    content: {
      pl: `Jadąc do Reykjadalur uznaliśmy, że odwrócimy kolejność zwiedzania i najpierw podjedziemy na krater Kerið, ponieważ trekking może okazać się dłuższy niż szacowany czas. Wstęp na krater Kerið jest płatny – bilet kupuje się w budce przy wejściu. 

Trekking z parkingu w Hveragerði do ciepłej rzeki Reykjadalur to ok. 3 km podejścia - z dziećmi zajęło 1,5-2h w jedną stronę. Kąpiel w naturalnie podgrzewanej wodzie o temperaturze blisko 40°C zrekompensowała wysiłek. Do jedzenia zupa pomidorowa w termosach.

W drodze powrotnej zatrzymaliśmy się w Selfoss na obiad w restauracji Kaffi Krús i zakupy. Na wodospad Ægissíðufoss zabrakło chęci i sił.`,
      en: `On the way to Reykjadalur, we decided to reverse the order of our itinerary and visit the Kerið crater first, as we anticipated the hike might take longer than estimated. Admission to Kerið crater is paid—you buy tickets at the booth near the entrance.

The hike from the parking lot in Hveragerði up to the warm Reykjadalur river is an uphill walk of about 3 km—with kids, it took us 1.5 to 2 hours one way. Bathing in naturally heated water close to 40°C made the effort completely worthwhile. For food, we had hot tomato soup from our thermoses.

On the way back, we stopped in Selfoss for lunch at Kaffi Krús and picked up some groceries. We simply lacked the energy and motivation to visit the Ægissíðufoss waterfall.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Kąpielisko w gorącej rzece termalnej Reykjadalur pośród zielonych wzgórz', en: 'Bathing area in the naturally heated Reykjadalur thermal river amidst green hills' },
        caption: { pl: 'Kąpiel w gorącej rzece Reykjadalur', en: 'Bathing in the natural warm waters of Reykjadalur' }
      }
    ]
  },
  {
    slug: 'day-4',
    dayNumber: 4,
    date: '29.07.2026',
    mapsUrl: 'https://www.google.pl/maps/dir/Arhus+Cottage+-+Camping+%26+Restaurant,+Rang%C3%A1rbakkar+6,+850+Hella,+Islandia/Seljalandsfoss,+861,+Islandia/Sk%C3%B3gafoss,+G%C3%B6ngulei%C3%B0+um+Fimmv%C3%B6r%C3%B0uh%C3%A1ls,+861,+Islandia/Dyrh%C3%B3laey,+871,+Islandia/Reynisfjara+viewpoint+parking,+CV3V%2BW99,+871,+Islandia/H%C3%A1lsanefshellir+Cave,+CX35%2B697,+871+Vik,+Islandia/Fja%C3%B0r%C3%A1rglj%C3%BAfur+Parking+TOP,+QRHJ%2BRJC,+881+Kirkjub%C3%A6jarklaustur,+Islandia/H%C3%B6fn+Cottages,+48+780,+Hafnarbraut,+780+H%C3%B6fn,+Islandia/@63.8267905,-20.4400328,403593m/data=!3m2!1e3!4b1!4m50!4m49!1m5!1m1!1s0x48d6e55b00ded7ef:0x6d6be46b76571ca3!2m2!1d-20.4063613!2d63.8330699!1m5!1m1!1s0x48d71eade8ef2415:0xae01e6205209178d!2m2!1d-19.9885688!2d63.6156232!1m5!1m1!1s0x48d73b763edc5d8d:0x5b76f8680af00b7b!2m2!1d-19.5112825!2d63.5320209!1m5!1m1!1s0x48d749b2488fd399:0x2725ca255462e772!2m2!1d-19.1185521!2d63.4046799!1m5!1m1!1s0x48d7490040f49ac5:0x6dad2542076989ba!2m2!1d-19.1065296!2d63.4047967!1m5!1m1!1s0x48d74a2a636c8075:0x4177410f191fa085!2m2!1d-19.0415791!2d63.4030376!1m5!1m1!1s0x48d0e5005a0846fb:0x6b7a22045d479400!2m2!1d-18.1684999!2d63.7795518!1m5!1m1!1s0x48cfac5896f16d0d:0x5214165d5d1dce11!2m2!1d-15.2048999!2d64.2574833!3e0?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 4: czarna plaża', en: 'Day 4: Black Sand Beach' },
    description: { pl: 'Seljalandsfoss, Skógafoss, maskonury na Dyrhólaey, Reynisfjara, baśniowy kanion Fjaðrárgljúfur i wodospad Svartifoss.', en: 'Seljalandsfoss, Skógafoss, puffins at Dyrhólaey, Reynisfjara black beach, Fjaðrárgljúfur canyon, and Svartifoss.' },
    distance: '384 km',
    driveTime: '5h 10m',
    hub: { pl: 'Höfn Cottages', en: 'Höfn Cottages' },
    accommodation: { pl: 'Höfn Cottages', en: 'Höfn Cottages', link: 'https://www.booking.com/hotel/is/hofn-cottages.pl.html' },
    highlights: {
      pl: [
        '08:55 – Seljalandsfoss: ten wodospad, za który można wejść (45 min)',
        '10:05 – Skógafoss: potężny 60m wodospad + schody na punkt widokowy (1h)',
        '11:35 – Reynisfjara & Dyrhólaey: maskonury, skalny łuk i czarna plaża (2h)',
        '14:35 – Kanion Fjaðrárgljúfur: bajkowo zielony kanion (1h)',
        '16:35 – Park Skaftafell: wodospad Svartifoss wśród bazaltowych organów (2h)',
        'Transfer do Höfn Cottages'
      ],
      en: [
        '08:55 – Seljalandsfoss: Walk behind the tumbling water waterfall (45 min)',
        '10:05 – Skógafoss: Massive 60m waterfall and staircase lookout (1h)',
        '11:35 – Reynisfjara & Dyrhólaey: Puffins, arch, and black beach (2h)',
        '14:35 – Fjaðrárgljúfur Canyon: Verdant serpentine canyon (1h)',
        '16:35 – Skaftafell National Park: Hike to Svartifoss basalt waterfall (2h)',
        'Transfer to Höfn Cottages'
      ]
    },
    food: {
      pl: [
        'Sveitagrill Míu (Mia’s Country Grill przy Skógafoss): Czerwona budka z najlepszym Fish & Chips na Islandii! Porcja ogromna, spokojnie starcza dla 2 osób.',
        'Black Beach Restaurant (Reynisfjara): Tradcyjna zupa jagnięca (Kjötsúpa) z chlebem.',
        'Sysla Cafe (Vík): Dobre kanapki i kawa.'
      ],
      en: [
        'Sveitagrill Míu (Mia’s Country Grill by Skógafoss): Iconic food truck serving Iceland’s best Fish & Chips!',
        'Black Beach Restaurant (Reynisfjara): Hearty Icelandic lamb soup (Kjötsúpa) with unlimited bread.',
        'Sysla Cafe (Vík): Fresh sandwiches and great coffee.'
      ]
    },
    safetyTip: {
      pl: 'ŚMIERTELNE NIEBEZPIECZEŃSTWO: Plaża Reynisfjara słynie z podstępnych fal. Bezwzględnie zakazane jest zbliżanie się do linii wody i odwracanie plecami do oceanu!',
      en: 'DANGER: Reynisfjara beach is infamous for lethal sneaker waves. Never turn your back to the ocean or step close to the tide!'
    },
    content: {
      pl: `Najbardziej obfity w atrakcje dzień wyprawy wymagał ścisłego trzymania się harmonogramu. Wyjechaliśmy z Helli o 8:30. Pierwszym przystankiem był wodospad Seljalandsfoss, gdzie ścieżka prowadzi za ścianę spadającej wody. Warto podejść jeszcze kawałek dalej pod wodospad Gljúfrabúi, gdzie woda wpada do kanionu szczelinowego. Następnie podjechaliśmy pod Skógafoss, by wspiąć się po metalowych schodach na taras widokowy.

Przed południem dotarliśmy do klifu Dyrhólaey z myślą o obserwacji maskonurów, gdzie okazało się, że można zrobić bardzo fajny spacer klifami aż do plaży. Tam dzieci zgłodniały, więc postanowiliśmy podjechać do Black Beach Restaurant (dużo ludzi, ale dość sprawnie poszło) i zwiedzić czarną plażę od drugiej strony, przy jaskini Hálsanefshellir. To było warte zobaczenia.

Po obiedzie podjechaliśmy zobaczyć kanion Fjaðrárgljúfur, po czym ruszyliśmy bezpośrednio na nocleg do Höfn, przekładając wizytę przy Svartifoss na kolejny dzień. Domki w Höfn Cottages mają aneks kuchenny, więc można śmiało gotować. Prysznice ogólnodostępne, ale czysto i woda ciepła.`,
      en: `The most packed day of our trip required sticking strictly to our schedule. We set off from Hella at 8:30 AM. Our first stop was Seljalandsfoss, where the path takes you right behind the cascading wall of water. It’s well worth walking a bit further to Gljúfrabúi waterfall, where the water plunges into a hidden canyon. Next, we drove up to Skógafoss to climb the metal stairs up to the observation deck.

Before noon, we reached the Dyrhólaey cliff hoping to spot puffins, where we discovered a great walking trail along the cliffs leading down toward the beach. By then, the kids were getting hungry, so we drove over to Black Beach Restaurant (it was crowded, but service was fairly quick) and explored the black sand beach from the other side, near the Hálsanefshellir cave. That was well worth seeing.

After lunch, we went to see Fjaðrárgljúfur canyon before heading straight to Höfn for our overnight stay, pushing our visit to Svartifoss to the following day. The cabins at Höfn Cottages have a kitchenette, so you can easily cook your own meals. The showers are shared, but everything was clean and the water was hot.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Potężna ściana wody wodospadu Skógafoss z tęczą', en: 'Towering Skógafoss waterfall with a vibrant rainbow' },
        caption: { pl: 'Wodospad Skógafoss na południowym wybrzeżu', en: 'Skógafoss waterfall in South Iceland' }
      }
    ]
  },
  {
    slug: 'day-5',
    dayNumber: 5,
    date: '30.07.2026',
    mapsUrl: 'https://www.google.pl/maps/dir/H%C3%B6fn+Cottages,+48+780,+Hafnarbraut,+780+H%C3%B6fn,+Islandia/Skaftafell+Parking,+227J%2BRRM,+Skaftafellsvegur,+998+%C3%96r%C3%A6fi,+Islandia/Sv%C3%ADnafellsj%C3%B6kull+Parking,+X4X4%2BXJ,+785+Sv%C3%ADnafell,+Islandia/Laguna+lodowcowa+J%C3%B6kuls%C3%A1rl%C3%B3n,+J%C3%B6kuls%C3%A1rl%C3%B3n,+781+H%C3%B6fn+%C3%AD+Hornafir%C3%B0i,+Islandia/H%C3%B6fn+Cottages,+48+780,+Hafnarbraut,+780+H%C3%B6fn,+Islandia/@63.8735468,-16.553912,124166m/data=!3m1!1e3!4m32!4m31!1m5!1m1!1s0x48cfac5896f16d0d:0x5214165d5d1dce11!2m2!1d-15.2048999!2d64.2574833!1m5!1m1!1s0x48d035d69efe3a9f:0x3603a374ac8e4789!2m2!1d-16.9679636!2d64.0145915!1m5!1m1!1s0x48d03704697dd485:0x22ce5704ad5a4b2!2m2!1d-16.8934113!2d63.9999897!1m5!1m1!1s0x48cfd71ed732067f:0xfb898f285905475c!2m2!1d-16.1792735!2d64.0485493!1m5!1m1!1s0x48cfac5896f16d0d:0x5214165d5d1dce11!2m2!1d-15.2048999!2d64.2574833!3e0?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 5: królestwo lodu', en: 'Day 5: Kingdom of Ice' },
    description: { pl: 'Wodospad Svartifoss, lodowiec Skaftafellsjökull, Diamentowa Plaża i rejs amfibią wśród gór lodowych Jökulsárlón.', en: 'Svartifoss waterfall, Skaftafellsjökull, Diamond Beach and amphibian boat tour among icebergs at Jökulsárlón.' },
    distance: '243 km',
    driveTime: '3h 10m',
    hub: { pl: 'Höfn Cottages', en: 'Höfn Cottages' },
    accommodation: { pl: 'Höfn Cottages', en: 'Höfn Cottages' },
    highlights: {
      pl: [
        'Park Skaftafell: Wodospad Svartifoss wśród bazaltowych organów (2h)',
        'Skaftafellsjökull: Wejście na lodowiec (1h)',
        'Jökulsárlón & Diamond Beach: Dryfujące bryły lodu na wulkanicznym czarnym piasku',
        'Rejs amfibią wśród gór lodowych (icelagoon.is - konieczna rezerwacja!)'
      ],
      en: [
        'Skaftafell National Park: Hike to Svartifoss basalt waterfall (2h)',
        'Skaftafellsjökull: Glacier tongue (1h)',
        'Jökulsárlón & Diamond Beach: Glistening icebergs stranded on black volcanic sand',
        'Amphibian Boat Tour navigating giant icebergs (icelagoon.is - booking necessary!)'
      ]
    },
    food: {
      pl: [
        'Pakkhús Restaurant (Höfn): Klimatyczny lokal w portowym magazynie słynący z lokalnej langusty.',
        'Hafnarbúðin (Höfn): Budżetowy bar portowy w stylu lat 80. Pyszna bagietka z langustą i burgery za ułamek ceny.'
      ],
      en: [
        'Pakkhús Restaurant (Höfn): Renowned harbor warehouse restaurant specializing in langoustine.',
        'Hafnarbúðin (Höfn): Retro 80s harbor diner serving affordable langoustine baguettes and burgers.'
      ]
    },
    content: {
      pl: `Nie odpuściliśmy wodospadu Svartifoss i całe szczęście, bo jest chyba najbardziej urokliwy ze wszysktich na Islandii. To ten z bazaltowymi kolumnami przypominającymi organy. Przy wejściu na szlak działa spore centrum turystyczne z ławeczkami, tam zjedliśmy na obiad liofilizaty. Niedaleko znajduje się łatwo dostępny szlak na samo czoło lodowca Skaftafellsjökull, więc tym bardziej powrót w tę okolicę był trafioną decyzją. 

Popołudniu mieliśmy zarezerwowany rejs amfibią po lagunie lodowcowej Jökulsárlón, ale wcześniej mieliśmy chwilę, by przespacerować się na Diamentową Plażę.`,
      en: `We didn't skip Svartifoss, and thank goodness, as it is probably the most charming waterfall in all of Iceland. This is the one surrounded by basalt columns resembling church organ pipes. There is a sizable visitor center with benches at the trailhead, where we had freeze-dried meals for lunch. Nearby, there is an easily accessible trail leading right up to the Skaftafellsjökull glacier tongue, making our decision to return to this area even more worthwhile.

In the afternoon, we had booked an amphibian boat tour on the Jökulsárlón glacier lagoon, but beforehand, we had enough time for a stroll along Diamond Beach.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Błękitne góry lodowe dryfujące na tafli laguny lodowcowej Jökulsárlón', en: 'Luminous blue icebergs floating in the Jökulsárlón glacier lagoon' },
        caption: { pl: 'Laguna lodowcowa Jökulsárlón', en: 'Glacier lagoon Jökulsárlón with blue icebergs' }
      }
    ]
  },
  {
    slug: 'day-6',
    dayNumber: 6,
    date: '31.07.2026',
    mapsUrl: 'https://www.google.pl/maps/dir/H%C3%B6fn+Cottages,+48+780,+Hafnarbraut,+780+H%C3%B6fn,+Islandia/Stokksnes+Parking,+Stokksnes+781,+781,+Islandia/Dj%C3%BApivogur,+Islandia/65.2634987,-14.4063101/Grj%C3%B3tagj%C3%A1,+J4G8%2BGQX,+660+Reykjahl%C3%AD%C3%B0,+Islandia/Vogar+Travel+Service,+Vogar,+660+M%C3%BDvatn,+Islandia/@65.0045014,-18.595702,253972m/data=!3m1!1e3!4m33!4m32!1m5!1m1!1s0x48cfac5896f16d0d:0x5214165d5d1dce11!2m2!1d-15.2048999!2d64.2574833!1m5!1m1!1s0x48cfab00671ec9e7:0x2d755c5d763c87de!2m2!1d-14.9715362!2d64.243912!1m5!1m1!1s0x48cec38f02292149:0x3b5e271b6c5b9d8b!2m2!1d-14.2848306!2d64.6567526!1m0!1m5!1m1!1s0x48cd9ef0df2feebd:0x79e8f6d9c5fd9511!2m2!1d-16.8830077!2d65.6263565!1m5!1m1!1s0x48cd9e8f3bb4d50b:0x36df87c2abfdfa26!2m2!1d-16.9161835!2d65.6235241!3e0?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 6: Fiordy Wschodnie', en: 'Day 6: East Fjords' },
    description: { pl: 'Klify Stokksnes (Vestrahorn), uroczy port Djúpivogur i widokowa trasa przez fiordy wschodnie.', en: 'Dramtic Stokksnes (Vestrahorn) mountain, Djúpivogur harbor, and East Fjords panoramic highway.' },
    distance: '365 km',
    driveTime: '5h 15m',
    hub: { pl: 'Vogar Travel Service, Mývatn', en: 'Vogar Travel Service, Mývatn' },
    accommodation: { pl: 'Vogar Travel Service, Mývatn', en: 'Vogar Travel Service, Mývatn', link: 'https://www.booking.com/hotel/is/vogahraun-guesthouse.pl.html' },
    highlights: {
      pl: ['Stokksnes / Vestrahorn: Wioska Wikingów i widok na masyw górski', 'Djúpivogur: Malowniczy port i rzeźby jaj ptaków', 'Transfer przez Fiordy Wschodnie i Egilsstaðir do Vogar Travel Service, Mývatn', 'Grjótagjá: Jaskinia lawowa z gorącym źródłem'],
      en: ['Stokksnes / Vestrahorn: Viking village and jagged black peak towering above tidal beach lagoons', 'Djúpivogur: Fishing village & granite bird egg sculptures', 'Drive winding through East Fjords and Egilsstaðir to Vogar Travel Service, Mývatn', 'Grjótagjá: Volcanic cave housing a geothermal spring']
    },
    food: {
      pl: ['Vogafjós Farm Resort (obok noclegu Vogar): Restauracja wewnątrz obory. Pijesz kawę patrzac na dojenie krów! Słynny podziemny chleb geotermalny Geysir bread z wędzonym pstrągiem.'],
      en: ['Vogafjós Farm Resort (next to Vogar stay): Unique restaurant inside a cowshed. Enjoy Geysir rye bread baked underground with smoked trout.']
    },
    content: {
      pl: `Rano ruszyliśmy na półwysep Stokksnes, położony niedaleko od Höfn, u stóp góry Vestrahorn. Na miejscu okazało się, że można tam zwiedzać wioskę Wikingów, zbudowaną na potrzeby produkcji filmowej. Następnie ruszyliśmy w jedną z najpiękniejszych tras widokowych Europy – przez meandrujące Fiordy Wschodnie.

Zatrzymaliśmy się w wiosce Djúpivogur, gdzie, szukając instalacji artystycznej z kamiennymi jajami (Eggin í Gleðivík), planowaliśmy zjeść zupę z termosów w jakimś ładnym miejscu, jednak porywisty wiatr zmusił nas do szybkiego posiłku na ławce tuż przy samochodzie.

Droga do Mývatn jest dość długa, po drodze fragment szutrowy. W Egilsstaðir zrobiliśmy zakupy i przerwę na podwieczorek (bardzo dużo turystów, na stacjach paliw i w supermarketach tłumy ludzi). Przed samym noclegiem wstąpiliśmy do jaskini lawowej Grjótagjá z gorącym źródłem. Zakwaterowanie w Vogar Travel Service zaskoczyło nas bardzo pozytywnie: obiekt ma dużą, świetnie wyposażoną wspólną kuchnię i czyste, duże ogólnodostępne łazienki.`,
      en: `In the morning, we set off for the Stokksnes peninsula, located near Höfn at the foot of Mount Vestrahorn. Once there, we discovered you can tour a Viking village built as a movie set. After that, we embarked on one of Europe's most beautiful scenic drives—winding through the East Fjords.

We stopped in the village of Djúpivogur, where, while hunting for the Eggin í Gleðivík stone egg art installation, we planned to eat our thermos soup somewhere nice. However, a howling wind forced us to grab a quick bite on a bench right next to the car.

The drive to Mývatn is quite long, featuring a gravel section along the way. In Egilsstaðir, we stopped for groceries and an afternoon snack (it was packed with tourists—huge crowds at both gas stations and supermarkets). Just before reaching our accommodation, we popped into the Grjótagjá lava cave with its geothermal spring. Our stay at Vogar Travel Service was a very pleasant surprise: the property features a large, well-equipped shared kitchen and clean, spacious shared bathrooms.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Czarne wydmy i poszarpany grzbiet góry Vestrahorn na półwyspie Stokksnes', en: 'Black sand dunes and the jagged peaks of Mount Vestrahorn at Stokksnes' },
        caption: { pl: 'Ikoniczny Stokksnes i góra Vestrahorn', en: 'Dramatic black sand lagoon and Vestrahorn peak' }
      }
    ]
  },
  {
    slug: 'day-7',
    dayNumber: 7,
    date: '01.08.2026',
    mapsUrl: 'https://www.google.pl/maps/dir/Vogar+Travel+Service,+Vogar,+660+Mývatn,+Islandia/Dettifoss+West+Parking,+660,+Islandia/Viti+parking,+P69R%2B3X6,+660,+Islandia/Hverir+Parking,+J5VW%2B2P9,+660+Reykjahlíð,+Islandia/Earth+Lagoon+Mývatn,+Jarðbaðshólar,+660+Mývatn,+Islandia/Hverfjall+Volcano+Trail,+J47G%2BC4,+660+Reykjahlíð,+Islandia/Vogar+Travel+Service,+Vogar,+660+Mývatn,+Islandia/@65.6352906,-16.5454371,63900m/data=!3m1!1e3!4m44!4m43!1m5!1m1!1s0x48cd9e8f3bb4d50b:0x36df87c2abfdfa26!2m2!1d-16.9161835!2d65.6235241!1m5!1m1!1s0x48cd065dfeaf43d3:0xf6fef75fc17ab944!2m2!1d-16.4002363!2d65.811504!1m5!1m1!1s0x48cd0b0012eaf7fd:0xfc21959802b79430!2m2!1d-16.7576133!2d65.717675!1m5!1m1!1s0x48cd9f7516d38963:0x21965c85b95173!2m2!1d-16.803131!2d65.6425295!1m5!1m1!1s0x48cd9f011f590387:0x1023994a32c08ded!2m2!1d-16.8476117!2d65.6308946!1m5!1m1!1s0x48cd9fd6ed8acd3f:0x8c289308c80a7d64!2m2!1d-16.874722!2d65.6135133!1m5!1m1!1s0x48cd9e8f3bb4d50b:0x36df87c2abfdfa26!2m2!1d-16.9161835!2d65.6235241!3e0?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 7: rejon Mývatn', en: 'Day 7: Mývatn Region' },
    description: { pl: 'Wodospad Dettifoss, krater Víti, dymiące solfatary Hverir, Earth Lagoon Spa i wulkan Hverfell.', en: 'Dettifoss waterfall, Víti crater, Hverir boiling mud pots, Earth Lagoon Spa and Hverfell volcano.' },
    distance: '131 km',
    driveTime: '2h',
    hub: { pl: 'Vogar Travel Service, Mývatn', en: 'Vogar Travel Service, Mývatn' },
    accommodation: { pl: 'Vogar Travel Service, Mývatn', en: 'Vogar Travel Service, Mývatn' },
    highlights: {
      pl: [
        'Dettifoss: Najpotężniejszy pod względem masy wody wodospad w Europie',
        'Wulkan Krafla & Krater Víti: Turkusowe jezioro w kraterze wulkanu',
        'Hverir (Námafjall): Bulgoczące błota, solfatary i zjawiskowe formacje siarkowe',
        'Earth Lagoon Mývatn: Popołudniowy relaks w nowoczesnym niebieskim spa',
        'Hverfell: Spacer krawędzią krateru'
      ],
      en: [
        'Dettifoss: Europe’s most powerful waterfall by volume',
        'Krafla Volcano & Víti Crater: Stunning turquoise crater lake hike',
        'Hverir (Námafjall): Steam vents, boiling mud cauldrons, and surreal sulfur fields',
        'Earth Lagoon Mývatn: Afternoon relaxation in mineral-rich milky blue waters',
        'Hverfell: Crater rim walk'
      ]
    },
    food: {
      pl: ['Vogafjós Farm Resort (obok noclegu Vogar): Restauracja wewnątrz obory. Pijesz kawę patrzac na dojenie krów! Słynny podziemny chleb geotermalny Geysir bread z wędzonym pstrągiem.'],
      en: ['Vogafjós Farm Resort (next to Vogar stay): Unique restaurant inside a cowshed. Enjoy Geysir rye bread baked underground with smoked trout.']
    },
    safetyTip: {
      pl: 'Wokół jeziora Mývatn w upalne dni latają chmary niegroźnych, ale niezwykle uciążliwych meszek. Warto mieć moskitierę na głowę.',
      en: 'Swarms of non-biting midges hover around Lake Mývatn on calm summer days. Wearing a head mesh net will save your sanity.'
    },
    content: {
      pl: `Dzień pełen wulkanicznej energii. Jadąc przez niesamowity marsjański krajobraz, dotarliśmy Dettifoss. Trafiliśmy na poziomo padający deszcz i porywisty wiatr, przez co sam wodospad był praktycznie niewidoczny, a my w ciągu 15 minut byliśmy przemoczeni do suchej nitki.

Następnie skierowaliśmy się w stronę wulkanu Krafla i krateru Víti. Gęsta mgła również uniemożliwiła nam zobaczenie turkusowego jeziora. Teren ten stanowi własność prywatną i nie oferuje dłuższego szlaku pieszego - generalnie można było to pominąć. Pogoda poprawiła się na polach geotermalnych Hverir, co pozwoliło na spacer pośród dymiących formacji siarkowych. Popołudnie spędziliśmy w luksusowych termach Earth Lagoon Mývatn (drogo, ale warto; mało ludzi).

Kolację zjedliśmy w polecanej restauracji z widokiem na oborę - fajna odmiana, a do obory można wejść i pogłaskać krowy. Korzystając z tego, że dzień się nie kończy, pojechaliśmy jeszcze na krótką wędrówkę na wulkan Hverfell i to był bardzo dobry pomysł, bo widok z góry jest naprawdę atrakcyjny.`,
      en: `A day packed with volcanic energy. Driving through an incredible, Mars-like terrain, we reached Dettifoss. We were met with sideways rain and gusty winds, rendering the waterfall practically invisible and leaving us soaked to the bone within 15 minutes.

Next, we headed toward the Krafla volcano and the Víti crater, but dense fog completely blocked the view of the turquoise crater lake. The site is private property and doesn't offer much in terms of longer hiking trails—honestly, we could have skipped it. The weather improved at the Hverir geothermal fields, allowing for a walk among the steaming sulfur vents. We spent the afternoon unwinding at the luxurious Mývatn Nature Baths / Earth Lagoon (expensive, but worth it; uncrowded).

We had dinner at a recommended restaurant with a view directly into a cowshed—a fun change of pace, and you can actually go inside the barn to pet the cows. Taking advantage of the endless summer daylight, we went on a short hike up the Hverfjall volcano, which turned out to be a fantastic idea—the view from the rim is truly spectacular.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Błękitne baseny termalne i dymiące solfatary w rejonie jeziora Mývatn', en: 'Steaming solfataras and geothermal baths near Lake Mývatn' },
        caption: { pl: 'Dymiące pola siarkowe Hverir pod Mývatn', en: 'Steaming geothermal vents and sulfur hills at Hverir' }
      }
    ]
  },
  {
    slug: 'day-8',
    dayNumber: 8,
    date: '02.08.2026',
    mapsUrl: 'https://www.google.pl/maps/dir/Vogar+Travel+Service,+Vogar,+660+M%C3%BDvatn,+Islandia/Go%C3%B0afoss+East+Bank+Parking,+Go%C3%B0afoss+Sightseeing,+645,+Islandia/Public+parking,+T%C3%B3natr%C3%B6%C3%B0+11,+600+Akureyri,+Islandia/Laekjarkot+Rooms+And+Cottages,+H4VX%2BJJG,+L%C3%A6kjarkot,+311+Borgarnes,+Islandia/@64.6310691,-25.2990549,654773m/data=!3m1!1e3!4m26!4m25!1m5!1m1!1s0x48cd9e8f3bb4d50b:0x36df87c2abfdfa26!2m2!1d-16.9161835!2d65.6235241!1m5!1m1!1s0x48cd7e6bd797eb7b:0x29622a15a54afe2c!2m2!1d-17.5404818!2d65.6839717!1m5!1m1!1s0x48d28f1a09950f9d:0x400883a5c7f5a41f!2m2!1d-18.0920427!2d65.6731624!1m5!1m1!1s0x48d5c9b82a7f68c9:0x8abaec16f91bbfbc!2m2!1d-21.8509331!2d64.5940628!3e0?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 8: Północ i Akureyri', en: 'Day 8: North & Akureyri' },
    description: { pl: 'Wodospad Bogów Goðafoss, stolica północy Akureyri i lody Brynja.', en: 'Goðafoss Waterfall of the Gods, Northern Capital Akureyri, and iconic Brynja ice cream.' },
    distance: '396 km',
    driveTime: '4h 55m',
    hub: { pl: 'Lækjarkot Rooms and Cottages, Borgarnes', en: 'Lækjarkot Rooms and Cottages, Borgarnes' },
    accommodation: { pl: 'Lækjarkot Rooms and Cottages, Borgarnes', en: 'Lækjarkot Rooms and Cottages, Borgarnes', link: 'https://www.booking.com/hotel/is/laekjarkot-mobile-homes-and-rooms.pl.html' },
    highlights: {
      pl: ['Wodospad Goðafoss ("Wodospad Bogów")', 'Akureyri: Ogród Botaniczny, starówka i legendarne lody Brynja (2h)', 'Przejazd przez północną Islandię do Lækjarkot Rooms and Cottages, Borgarnes'],
      en: ['Goðafoss ("Waterfall of the Gods")', 'Akureyri: Botanical Gardens, northern architecture, & famous Brynja ice cream (2h)', 'Drive crossing northern mountain passes to Lækjarkot Rooms and Cottages, Borgarnes']
    },
    food: {
      pl: [
        'Akureyri Hot Dog Stand (Bæjarins Beztu Pylsur / Akureyri): Klasyczny islandzki hot-dog z prażoną cebulką i sosem pylsusinnep.',
        'Lody Brynja (Akureyri): Najstarsza i najsłynniejsza lodziarnia na północy Islandii.',
      ],
      en: [
        'Akureyri Hot Dog Stand: Traditional Icelandic hot dog topped with crispy onions and sweet mustard.',
        'Brynja Ice Cream (Akureyri): The North’s oldest and most beloved soft-serve ice cream shop.',
      ]
    },
    content: {
      pl: `Po spokojnym dniu spędzonym lokalnie, kolejny dzień "tranzytowy". Z Mývatn wyruszyliśmy pod Goðafoss związanego z legendą o wrzuceniu pogańskich posągów bogów w 1000 roku.

Kolejnym przystankiem było Akureyri, klimatyczna stolica Północy. Zwiedziliśmy najdalej na północ wysunięty ogród botaniczny na świecie, a w ramach drugiego śniadania zjedliśmy tradycyjne lody w Brynja. Porcje w Brynja są bardzo obfite, a lody mocno maślane, więc warto wziąć mniejsze.

Po drodze do Lækjarkot zrobiliśmy przerwę na kawę i trampoliny w Blönduós. W Lækjarkot Rooms and Cottages mamy zarezerwowane domki holenderskie - standard bardzo dobry. Z każdym noclegiem było trochę lepiej, więc dobrze, że nie jechaliśmy w przeciwną stronę.`,

      en: `After a quiet day spent exploring locally, we had another "transit" day. From Mývatn, we set off for Goðafoss, a waterfall tied to the legend of pagan idols being cast into its waters in the year 1000.

Our next stop was Akureyri, the charming capital of the North. We visited the world's northernmost botanical garden and grabbed traditional ice cream at Brynja for a mid-morning treat. Portions at Brynja are huge and the ice cream is rich and buttery, so it's wise to order a smaller size.

On the drive to Lækjarkot, we stopped in Blönduós for coffee and a turn on the trampolines. At Lækjarkot Rooms and Cottages, we had booked Dutch-style cabins—the standard was very high. Every accommodation seemed to be a step up from the last, so we were glad we weren't travelling in the opposite direction.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Szeroki łuk kaskad wodospadu Goðafoss w północnej Islandii', en: 'Wide sweeping horseshoe falls of Goðafoss in northern Iceland' },
        caption: { pl: 'Goðafoss – Wodospad Bogów', en: 'Goðafoss Waterfall of the Gods' }
      }
    ]
  },
  {
    slug: 'day-9',
    dayNumber: 9,
    date: '03.08.2026',
    mapsUrl: 'https://www.google.pl/maps/dir/Laekjarkot+Rooms+And+Cottages,+H4VX%2BJJG,+L%C3%A6kjarkot,+311+Borgarnes,+Islandia/Hraunfossar+Parking+Series+of+Waterfalls,+P22C%2BPMC,+320+H%C3%BAsafell,+Islandia/Parking+Deildartunguhver,+Deildartunguvegur,+320,+Islandia/Troll+Garden,+50,+311,+Islandia/Borgarnes+Sport+Complex,+Skallagr%C3%ADmsgata,+310+Borgarnes,+Islandia/Laekjarkot+Rooms+And+Cottages,+H4VX%2BJJG,+L%C3%A6kjarkot,+311+Borgarnes,+Islandia/@64.5501021,-21.944579,19167m/data=!3m1!1e3!4m38!4m37!1m5!1m1!1s0x48d5c9b82a7f68c9:0x8abaec16f91bbfbc!2m2!1d-21.8509331!2d64.5940628!1m5!1m1!1s0x48d43ee24f2b5605:0x114167bc7d011815!2m2!1d-20.9783557!2d64.7018096!1m5!1m1!1s0x48d43760012abf37:0x74b5b37b10b830cb!2m2!1d-21.4094574!2d64.6633993!1m5!1m1!1s0x48d5cb3d0e615ea7:0x237b6fca61ffb936!2m2!1d-21.5770264!2d64.5933615!1m5!1m1!1s0x48d5c89e6acf6cf5:0xf2648e93c15f1126!2m2!1d-21.9222062!2d64.540542!1m5!1m1!1s0x48d5c9b82a7f68c9:0x8abaec16f91bbfbc!2m2!1d-21.8509331!2d64.5940628!3e0?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 9: rejon Borgarnes', en: 'Day 9: Borgarnes Region' },
    description: { pl: 'Hraunfossar i Barnafoss, najsilniejsze źródło w Europie Deildartunguhver, Ogród Trolli i miasteczko Borgarnes.', en: 'Hraunfossar lava falls, Barnafoss, Deildartunguhver 97°C spring, Troll Garden, Krauma baths, & Borgarnes.' },
    distance: '123 km',
    driveTime: '1h 45m',
    hub: { pl: 'Lækjarkot Rooms and Cottages, Borgarnes', en: 'Lækjarkot Rooms and Cottages, Borgarnes' },
    accommodation: { pl: 'Lækjarkot Rooms and Cottages, Borgarnes', en: 'Lækjarkot Rooms and Cottages, Borgarnes' },
    highlights: {
      pl: [
        'Hraunfossar & Barnafoss: lawowe wodospady',
        'Deildartunguhver: najbardziej wydajne gorące źródło w Europie (97°C!)',
        'Troll Garden: spacer ścieżką edukacyjną',
        'Borgarnes: miejski basen'
      ],
      en: [
        'Hraunfossar & Barnafoss: Crystal clear cold rivulets emerging directly from underneath lava fields',
        'Deildartunguhver: Europe’s most powerful geothermal spring (97°C)',
        'Troll Garden: Educational pathway',
        'Borgarnes: swimming pool'
      ]
    },
    food: {
      pl: ['Settlement Center Restaurant (Borgarnes): Niezwykle opłacalny bufet sałatkowo-zupowy w porze lunchu (jesz ile chcesz).'],
      en: ['Settlement Center Restaurant (Borgarnes): Excellent value all-you-can-eat soup & salad lunch buffet.']
    },
    content: {
      pl: `Spokojniejszy dzień poświęcony lokalnym atrakcjom. Najpierw pojechaliśmy do wodospadów Hraunfossar, wypływających wprost spod pola lawy - ciekawe miejsce, króciutki spacer wzdłuż rzeki. Następnie w Krauma obejrzeliśmy gorące źródło Deildartunguhver, pompujące 180 litrów wrzącej wody na sekundę. Nie chcąc wydawać majątku na termy, postanowiliśmy odwiedzić miejski basen w Borgarnes (tak samo zasilany wodą geotermalną). Sam basen był super, choć niestety tymczasowo nie działały zjeżdżalnie, ku rozczarowaniu dzieci. Wcześniej odwiedziliśmy Ogród Trolli Fossatún - ścieżkę edukacyjną wśród skał z elementami zabawowymi. Na obiad liofilizaty w parku koło basenu.`,
      en: `A more relaxed day focused on local sights. First, we drove to Hraunfossar waterfalls, which flow directly out from under a lava field—a fascinating spot for a short walk along the river. Next, at Krauma, we checked out Deildartunguhver, a hot spring pumping 180 liters of boiling water per second. Not wanting to spend a fortune on thermal baths, we opted for the public swimming pool in Borgarnes instead (also heated by geothermal water). The pool itself was great, though the waterslides were temporarily closed, much to the kids' disappointment. Earlier, we visited Fossatún Troll Garden—an educational trail among rocks with interactive play elements. For lunch, we had freeze-dried meals in the park next to the pool.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Kaskady wodospadów Hraunfossar wypływające spod czarnego pola lawowego', en: 'Delicate cascades of Hraunfossar emerging from beneath a black lava field' },
        caption: { pl: 'Wodospady Hraunfossar wypływające z pola lawy', en: 'Hraunfossar waterfalls emerging from porous lava rock' }
      }
    ]
  },
  {
    slug: 'day-10',
    dayNumber: 10,
    date: '04.08.2026',
    mapsUrl: 'https://www.google.pl/maps/dir/Laekjarkot+Rooms+And+Cottages,+H4VX%2BJJG,+L%C3%A6kjarkot,+311+Borgarnes,+Islandia/Kirkjufellsfoss+Parking+Lot,+WMHP%2B3MW,+351+Grundarfj%C3%B6r%C3%B0ur,+Islandia/Pla%C5%BCa+Dj%C3%BApal%C3%B3nssandur+Parking,+Unnamed+Road,+Islandia/Arnarstapi+Cliff+Parking,+Q98C%2BHWM,+356+Arnarstapi,+Islandia/Ytri+Tunga+Beach+Parking,+RW39%2BGF7,+356+Sta%C3%B0arsta%C3%B0ur,+Islandia/Laekjarkot+Rooms+And+Cottages,+H4VX%2BJJG,+L%C3%A6kjarkot,+311+Borgarnes,+Islandia/@64.7657267,-23.5645553,97521m/data=!3m1!1e3!4m43!4m42!1m5!1m1!1s0x48d5c9b82a7f68c9:0x8abaec16f91bbfbc!2m2!1d-21.8509331!2d64.5940628!1m5!1m1!1s0x48d57bb27d582735:0xdd6609a23821bf54!2m2!1d-23.3132997!2d64.9277449!1m10!1m1!1s0x492a88902a3ccd03:0x4c5662da687e292c!2m2!1d-23.8950955!2d64.7535183!3m4!1m2!1d-23.6332322!2d64.7665453!3s0x492a80c5fd1eed69:0x3b59eba0ce8c5a04!1m5!1m1!1s0x492a8100073acf05:0xdb4ed9b09b8d2982!2m2!1d-23.627711!2d64.7664693!1m5!1m1!1s0x48d582b788af6665:0x40091310bc1dfa5!2m2!1d-23.0813367!2d64.803794!1m5!1m1!1s0x48d5c9b82a7f68c9:0x8abaec16f91bbfbc!2m2!1d-21.8509331!2d64.5940628!3e0?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 10: Półwysep Snæfellsnes', en: 'Day 10: Snæfellsnes Peninsula' },
    description: { pl: 'Góra Kirkjufell, czarna plaża Djúpalónssandur, klify Arnarstapi i foki na plaży Ytri Tunga.', en: 'Kirkjufell mountain, Djúpalónssandur pebble beach, Arnarstapi basalt arches and seals on Ytri Tunga beach.' },
    distance: '303 km',
    driveTime: '4h 10m',
    hub: { pl: 'Lækjarkot Rooms and Cottages, Borgarnes', en: 'Lækjarkot Rooms and Cottages, Borgarnes' },
    accommodation: { pl: 'Lækjarkot Rooms and Cottages, Borgarnes', en: 'Lækjarkot Rooms and Cottages, Borgarnes' },
    highlights: {
      pl: [
        'Góra Kirkjufell & wodospad Kirkjufellsfoss: Najczęściej fotografowana góra Islandii',
        'Djúpalónssandur: Czarna plaża z wrakiem statku',
        'Arnarstapi: Klify bazaltowe, naturalny łuk skalny Gatklettur i posąg Bardura',
        'Plaża Ytri Tunga: Obserwacja fok'
      ],
      en: [
        'Kirkjufell Mountain & Kirkjufellsfoss: Iceland’s most iconic arrow-head peak',
        'Djúpalónssandur: Black pebble shore featuring shipwreck remains',
        'Arnarstapi: Cliffside coastal walk overlooking Gatklettur rock arch',
        'Ytri Tunga beach: Seals observation'
      ]
    },
    food: {
      pl: ['FRISTA Food Truck Arnarstapi - doskonała ryba dnia', 'Lokale w centrum Arnarstapi - kawa, ciasta'],
      en: ['FRISTA Food Truck Arnarstapi - fantastic fish of the day', 'Local cafes in Arnarstapi: coffee, homemade cakes.']
    },
    safetyTip: {
      pl: 'Podczas obserwacji fok należy zachować dystans 50 m lub 100 m, gdy mają młode.',
      en: 'When seal watching, keep a safe distance of at least 50 meters (or 100 meters when pups are present).'
    },
    content: {
      pl: `Półwysep Snæfellsnes nazywany jest "Islandią w pigułce" i jest to całkowicie zgodne z prawdą. Była to chyba najlepsza i najbardziej widokowa wycieczka. Pierwszym celem była góra Kirkjufell i wodospad Kirkjufellsfoss. Mieliśmy przez chwilę myśl, czy by nie wyjść na szczyt Kirkufjell, ale opis szlaku w wyższych partiach (trudności, ekspozycja) trochę ostudził nasz zapał.

Kolejnym miejscem była czarna plaża Djúpalónssandur, gdzie relaksowaliśmy się wśród szumu fal. Obiad zjedliśmy w food tracku FRISTA w Arnastarpi (dorsz z frytkami), a następnie zrobiliśmy spacer po malowniczych klifach, gdzie gniazdują mewy. Przed powrotem do domku popołudniowa kawa w lokalnej kawiarni. W trasie powrotnej zahaczyliśmy jeszcze o plażę Ytri Tunga, gdzie z bliska obserwowaliśmy foki wylegujące się na przybrzeżnych skałach.`,
      en: `The Snæfellsnes Peninsula is often called "Iceland in a nutshell," and that couldn't be truer. It was easily the best and most scenic excursion of the trip. Our first destination was Mount Kirkjufell and the Kirkjufellsfoss waterfall. We briefly considered hiking to the top of Kirkjufell, but the description of the upper trail (difficulties, exposure) quickly dampened our enthusiasm.

Our next stop was the black sand beach at Djúpalónssandur, where we relaxed to the sound of crashing waves. For lunch, we grabbed fish and chips (cod) from the FRISTA food truck in Arnarstapi, followed by a walk along the scenic cliffs where gulls nest. Before returning to our cabin, we enjoyed an afternoon coffee at a local café. On the drive back, we made one last stop at Ytri Tunga beach, where we observed seals lazily lounging on the coastal rocks up close.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Góra Kirkjufell o charakterystycznym stożkowym kształcie na półwyspie Snæfellsnes', en: 'Conical peak of Mount Kirkjufell bathed in daylight on Snæfellsnes' },
        caption: { pl: 'Góra Kirkjufell na półwyspie Snæfellsnes', en: 'Iconic Kirkjufell mountain peak' }
      }
    ]
  },
  {
    slug: 'day-11',
    dayNumber: 11,
    date: '05.08.2026',
    mapsUrl: 'https://www.google.pl/maps/dir/Laekjarkot+Rooms+And+Cottages,+H4VX%2BJJG,+L%C3%A6kjarkot,+311+Borgarnes,+Islandia/Volcano+Skali+Parking+P2,+VP5C%2BFG,+241+Grindavik,+Islandia/H%C3%B3tel+%C3%8Dsland+Spa+%26+Wellness,+%C3%81rm%C3%BAli+9+108,+108+Reykjav%C3%ADk,+Islandia/@64.2207078,-22.6388083,166162m/data=!3m2!1e3!4b1!4m20!4m19!1m5!1m1!1s0x48d5c9b82a7f68c9:0x8abaec16f91bbfbc!2m2!1d-21.8509331!2d64.5940628!1m5!1m1!1s0x48d61d2ca3160fbd:0xf7d0de03586eafe!2m2!1d-22.2786669!2d63.8586865!1m5!1m1!1s0x48d674bee49027a3:0x951f7e27652991de!2m2!1d-21.883311!2d64.138727!3e0?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 11: Reykjavík', en: 'Day 11: Reykjavík' },
    description: { pl: 'Pola lawowe w dolinie Nátthagi i centrum Reykjavíku: spacer ulicą Laugavegur, kościół Hallgrímskirkja, port.', en: 'Nátthagadalur lava fields and Reykjavík center: Laugavegur shopping street, Hallgrímskirkja church, harbor.' },
    distance: '182 km',
    driveTime: '2h 45m',
    hub: { pl: 'Hótel Ísland Spa & Wellness, Reykjavík', en: 'Hótel Ísland Spa & Wellness, Reykjavík' },
    accommodation: { pl: 'Hótel Ísland Spa & Wellness, Reykjavík', en: 'Hótel Ísland Spa & Wellness, Reykjavík', link: 'https://www.booking.com/hotel/is/hotel-island.pl.html' },
    highlights: {
      pl: [
        'Dolina Nátthagi: Spacer wzdłuż ostygłych pól lawowych',
        'Reykjavík: Ulica Laugavegur, kościół Hallgrímskirkja, spacer wzdłuż nabrzeża',
        'Transfer do Hótel Ísland Spa & Wellness, Reykjavík'
      ],
      en: [
        'Nátthagi Valley: Walk along the cooled lava fields',
        'Reykjavík: Laugavegur Street, Hallgrímskirkja Church, waterfront stroll',
        'Transfer to Hótel Ísland Spa & Wellness, Reykjavík'
      ]
    },
    food: {
      pl: [
        'Bæjarins Beztu Pylsur (Reykjavík): Najsłynniejszy hot-dog w Europie, jedzony m.in. przez Billa Clintona!',
        'Seabaron (Sægreifinn przy porcie): Słynna zupa z homara / krewetek i szaszłyki rybne.',
        'Reykjavik Fish (Frakkastígur 25): klasyczne fish & chips'
      ],
      en: [
        'Bæjarins Beztu Pylsur (Reykjavík): World-famous hot dog stand enjoyed by presidents & travelers alike.',
        'Seabaron (Sægreifinn at Old Harbor): Legendary lobster soup and grilled fish skewers.',
        'Reykjavik Fish (Frakkastígur 25): fish & chips fast food'
      ]
    },
    safetyTip: {
      pl: 'Nie wolno wchodzić na zastygniętą lawę, ani jej dotykać. Może ona emitować toksyczne gazy.',
      en: 'It is forbidden to walk on or touch solidified lava. It may emit toxic gases.'
    },
    content: {
      pl: `W obliczu zapowiadanych na kolejny dzień opadów zmieniliśmy plany i zdecydowaliśmy, że trzeba spędzić jeszcze jak najwięcej czasu na zewnątrz. Postanowiliśmy zobaczyć z bliska niesamowite pola lawowe, które przywitały nas pierwszego dnia. Tak trafiliśmy do doliny Nátthagi.

Popołudnie zgodnie z pierwotnym planem spędziliśmy w centrum Reykjavíku. Nie jest to duże miasto: spacer głównym deptakiem Laugavegur do kościoła Hallgrímskirkja i powrót nabrzeżem zajął nam ok. 2 godziny. Na obiadokolację fish & chips w Reykjavik Fish.

Hótel Ísland Spa & Wellness zupełnie w porządku i przyzwoity, ale spa tylko dla dorosłych, więc pomięliśmy tę atrakcję.`,
      en: `Facing a rain forecast for the next day, we changed our plans and decided to spend as much time outdoors as possible. We chose to get a close-up look at the incredible lava fields that had greeted us on our very first day, leading us to Nátthagi Valley.

As originally planned, we spent the afternoon exploring central Reykjavík. It isn't a large city: walking down the main pedestrian street Laugavegur to Hallgrímskirkja Church and returning along the waterfront took us about 2 hours. For dinner, we had fish & chips at Reykjavik Fish.

Hótel Ísland Spa & Wellness was completely fine and decent, but since the spa was adults-only, we passed on that feature.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Strzelista wieża kościoła Hallgrímskirkja dominująca nad panoramą Reykjaviku', en: 'Soaring expressionist tower of Hallgrímskirkja church over the Reykjavik skyline' },
        caption: { pl: 'Kościół Hallgrímskirkja w centrum Reykjavíku', en: 'Hallgrímskirkja church landmark in Reykjavík' }
      }
    ]
  },
  {
    slug: 'day-12',
    dayNumber: 12,
    date: '06.08.2026',
    mapsUrl: 'https://www.google.pl/maps/dir/H%C3%B3tel+%C3%8Dsland+Spa+%26+Wellness,+%C3%81rm%C3%BAli+9+108,+108+Reykjav%C3%ADk,+Islandia/Lotus+Car+Rental+Iceland,+Flugvellir+10,+230+Keflav%C3%ADk,+Islandia/@64.0152093,-22.5511904,83697m/data=!3m1!1e3!4m14!4m13!1m5!1m1!1s0x48d674bee49027a3:0x951f7e27652991de!2m2!1d-21.883311!2d64.138727!1m5!1m1!1s0x48d602676bc10577:0xed54faf584dd5a1b!2m2!1d-22.5793205!2d63.9970853!3e0?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 12: wylot', en: 'Day 12: Departure' },
    description: { pl: 'Lava Show, oddanie auta w wypożyczalni Lotus i wylot.', en: 'Lava Show, car return and flight.' },
    distance: '47 km',
    driveTime: '45m',
    hub: { pl: 'Lotnisko Keflavík', en: 'Keflavík Airport' },
    accommodation: { pl: 'Wylot do Polski', en: 'Return Flight' },
    highlights: {
      pl: [
        'Lava Show: pokaz lawy na żywo',
        '15:00 – Oddanie samochodu w wypożyczalni Lotus',
        '18:05 – Wylot z lotniska Keflavík (KEF)'
      ],
      en: [
        'Lava Show: Real lava show',
        '15:00 – Return car to Lotus Car Rental',
        '18:05 – Departure flight from Keflavík Airport (KEF)'
      ]
    },
    food: {
      pl: ['Ostatnie przekąski na lotnisku Keflavík przed odlotem.'],
      en: ['Final snacks at Keflavík Airport prior to boarding.']
    },
    content: {
      pl: `Ostatnie godziny na wyspie. Przed południem padał zapowiadany deszcz, więc udaliśmy się na reklamowany w wielu miejscach Lava Show. Pomimo dość komercyjnego klimatu, było to ciekawe doświadczenie. Pokaz, podczas którego prezentowany jest proces wylewania prawdziwej, rozgrzanej do 1100°C lawy, połączony jest z prelekcją edukacyjną i trwa ok. 1h. Drogo, ale fajnie.

Około 15:00 oddaliśmy auto w Lotus Car Rental i sprawnie zostaliśmy przewiezieni na lotnisko. Wylot bez opóźnień o 18:05.`,
      en: `Our final hours on the island. The forecasted rain arrived in the morning, so we headed to the widely advertised Lava Show. Despite the rather commercial atmosphere, it was a fascinating experience. The show, featuring the pouring of real lava heated to 1,100°C alongside an educational talk, lasts about an hour. Expensive, but cool.

Around 3:00 PM, we returned our car at Lotus Car Rental and were promptly shuttled to the airport. Flight departed without delay at 6:05 PM.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Kładka Most Między Kontynentami łącząca płyty tektoniczne na Reykjanes', en: 'Bridge Between Continents spanning the tectonic rift on Reykjanes peninsula' },
        caption: { pl: 'Most Między Kontynentami na półwyspie Reykjanes', en: 'Bridge Between Continents on Reykjanes Peninsula' }
      }
    ]
  }
];

export const generalInfo = {
  eclipseNotice: {
    title: { pl: 'Kwestia zaćmienia 12 sierpnia 2026', en: 'Total Solar Eclipse on August 12, 2026' },
    text: {
      pl: 'Wyprawa w sierpniu 2026 roku zbiega się z historycznym wydarzeniem – całkowitym zaćmieniem Słońca widocznym z Europy po raz pierwszy od 1999 roku. W szczególności na zachodnim wybrzeżu Islandii dochodzi absolutny rekord długości trwania zaćmienia - ponad 2 minuty. Już na etapie planowania noclegów w lutym 2026 roku średnie ceny za noc w stolicy przekraczały 1 000 USD (ok. 4 000 PLN), a niektóre apartamenty po prostu odleciały z cenami sięgającymi 20 000–25 000 USD (80 000-100 000 PLN).',
      en: 'The August 2026 trip coincides with a historic event—a total solar eclipse visible from Europe for the first time since 1999. On the west coast of Iceland in particular, the duration of totality reaches an absolute record of over 2 minutes. As early as the accommodation planning stage in February 2026, average nightly rates in the capital exceeded $1 000, with some apartment prices spiraling completely out of control to an insane $20 000–$25 000.'
    }
  },
  logisticsKm: [
    { day: 1, route: 'KEF → Hella', km: '144 km', hours: '2h' },
    { day: 2, route: 'Hella → Þingvellir → Geysir → Gullfoss → Hella', km: '237 km', hours: '3h 35m' },
    { day: 3, route: 'Hella → Kerið → Reykjadalur → Hella', km: '136 km', hours: '2h 05m' },
    { day: 4, route: 'Hella → Seljalandsfoss → Skógafoss → Dyrhólaey → Reynisfjara → Fjaðrárgljúfur → Höfn', km: '384 km', hours: '5h 10m' },
    { day: 5, route: 'Höfn → Skaftafell → Skaftafellsjökull → Jökulsárlón → Höfn', km: '243 km', hours: '3h 10m' },
    { day: 6, route: 'Höfn → Stokksnes → Djúpivogur → Egilsstaðir → Grjótagjá → Mývatn', km: '365 km', hours: '5h 15m' },
    { day: 7, route: 'Mývatn → Dettifoss → Krafla → Hverir → Earth Lagoon → Hverfjell → Mývatn', km: '131 km', hours: '2h' },
    { day: 8, route: 'Mývatn → Goðafoss → Akureyri → Borgarnes', km: '396 km', hours: '4h 55m' },
    { day: 9, route: 'Borgarnes → Hraunfossar → Deildartunguhver → Troll Garden → Borgarnes', km: '123 km', hours: '1h 45m' },
    { day: 10, route: 'Borgarnes → Kirkjufell → Djúpalónssandur → Arnarstapi → Ytri Tunga → Borgarnes', km: '303 km', hours: '4h 10m' },
    { day: 11, route: 'Borgarnes → Nátthagi → Reykjavík', km: '182 km', hours: '2h 45m' },
    { day: 12, route: 'Reykjavík → KEF', km: '47 km', hours: '45m' }
  ],
  budgetSummary: {
    flights: {
      title: { pl: 'Loty', en: 'Flights' },
      content: { pl: 'Wizz Air KTW-KEF: 9 352 PLN', en: 'Wizz Air KTW-KEF: 9 352 PLN' }
    },
    carRental: {
      title: { pl: 'Wypożyczenie auta', en: 'Car Rental' },
      content: { pl: 'LOTUS Car Rental: 8 820 PLN', en: 'LOTUS Car Rental: 8 820 PLN' }
    },
    accommodations: {
      title: { pl: 'Noclegi razem', en: 'Accommodations Total' },
      content: {
        pl: '29 433 PLN dla 2 rodzin = ~15 000 PLN na rodzinę',
        en: '29 433 PLN for 2 families = ~15 000 PLN per family'
      }
    },
    oneFamilySummary: {
      title: { pl: 'Podsumowanie kosztów podstawowych dla 1 rodziny', en: 'Basic Cost Summary for 1 Family' },
      total: '32 889 PLN',
      totalApprox: '(~32 889 PLN)',
      totalLabel: { pl: 'Szacowany koszt (1 rodzina)', en: 'Estimated Total (1 family)' },
      items: [
        {
          label: { pl: '1. Loty (Wizz Air)', en: '1. Flights (Wizz Air)' },
          value: '9 352 PLN'
        },
        {
          label: { pl: '2. Samochód (Lotus Car Rental)', en: '2. Car (Lotus Car Rental)' },
          value: '8 820 PLN'
        },
        {
          label: { pl: '3. Noclegi (50% z 29 433 PLN)', en: '3. Accommodations (50% of 29 433 PLN)' },
          value: '14 717 PLN'
        }
      ],
      note: {
        pl: 'Informacja: Są to podstawowe koszty dla 1 rodziny (loty, wynajem auta oraz noclegi). Zestawienie nie uwzględnia kosztów paliwa, wyżywienia, biletów wstępu na atrakcje (np. baseny termalne) oraz bieżących wydatków na miejscu.',
        en: 'Note: These are the basic costs for 1 family (flights, car rental, and accommodations). The summary does not include fuel, groceries/dining, admission to paid attractions (e.g. geothermal spas), or daily on-site expenses.'
      }
    }
  },
  accommodations: [
    { dates: { pl: '26.07 - 29.07 (3 noclegi)', en: '26.07 - 29.07 (3 nights)' }, hub: 'Árhús Cottage & Camping, Hella', price: '7 101 PLN', link: 'https://www.booking.com/hotel/is/arhus-cottage-and-camping.pl.html' },
    { dates: { pl: '29.07 - 31.07 (2 noclegi)', en: '29.07 - 31.07 (2 nights)' }, hub: 'Höfn Cottages', price: '4 919 PLN', link: 'https://www.booking.com/hotel/is/hofn-cottages.pl.html' },
    { dates: { pl: '31.07 - 02.08 (2 noclegi)', en: '31.07 - 02.08 (2 nights)' }, hub: 'Vogar Travel Service, Mývatn', price: '7 500 PLN', link: 'https://www.booking.com/hotel/is/vogahraun-guesthouse.pl.html' },
    { dates: { pl: '02.08 - 05.08 (3 noclegi)', en: '02.08 - 05.08 (3 nights)' }, hub: 'Lækjarkot Rooms and Cottages, Borgarnes', price: '6 091 PLN', link: 'https://www.booking.com/hotel/is/laekjarkot-mobile-homes-and-rooms.pl.html' },
    { dates: { pl: '05.08 - 06.08 (1 nocleg)', en: '05.08 - 06.08 (1 night)' }, hub: 'Hótel Ísland Spa & Wellness, Reykjavík', price: '3 822 PLN', link: 'https://www.booking.com/hotel/is/hotel-island.pl.html' }
  ],
  packingList: [
    {
      category: { pl: 'Odzież', en: 'Clothing' },
      items: {
        pl: [
          'Kurtka membranowa przeciwdeszczowa',
          'Spodnie przeciwdeszczowe',
          'Spodnie trekkingowe szybkoschnące',
          'Bielizna termoaktywna',
          'Bluza polarowa lub techniczna',
          'Lekka kurtka puchowa lub syntetyczna',
          'Czapka, rękawiczki, chusta typu Buff',
          'Bielizna, skarpetki, dres, piżama'
        ],
        en: [
          'Waterproof hardshell jacket',
          'Waterproof rain pants',
          'Quick-dry trekking trousers',
          'Thermal base layers',
          'Fleece or technical mid-layer',
          'Lightweight down or synthetic jacket',
          'Hat, gloves, buff',
          'Underwear, socks, sweatpants, pyjamas'
        ]
      }
    },
    {
      category: { pl: 'Obuwie', en: 'Footwear' },
      items: {
        pl: [
          'Wysokie buty trekkingowe z membraną',
          'Buty na zmianę do auta i domków',
          'Klapki basenowe',
          'Elektryczne suszarki do butów'

        ],
        en: [
          'Waterproof high-ankle hiking boots',
          'Sneakers for car & cabins',
          'Flip-flops',
          'Electric boot dryer'
        ]
      }
    },
    {
      category: { pl: 'Jedzenie i akcesoria', en: 'Food and Accessories' },
      items: {
        pl: [
          'Plecak dzienny z pokrowcem przeciwdeszczowym',
          'Termos obiadowy, łyżkowidelec, scyzoryk',
          'Termos na herbatę',
          'Butelka na wodę',
          'Kawa, kakao, herbata',
          'Kawiarka, kubki metalowe',
          'Sól, cukier, kostki bulionowe',
          'Liofilizaty'
        ],
        en: [
          'Daypack with rain cover',
          'Thermos food flask, spork, pocket knife',
          'Thermos beverage flask',
          'Water bottle',
          'Coffee, cocoa, tea',
          'French press, metal mugs',
          'Salt, sugar, bouillon cubes',
          'Freeze-dried meals'
        ]
      }
    },
    {
      category: { pl: 'Elektronika i inne', en: 'Electronics & Other' },
      items: {
        pl: [
          'Powerbank',
          'Ładowarka samochodowa multi-USB',
          'Kable do ładowania',
          'Wodoodporne etui na telefon',
          'Apteczka turystyczna',
          'Krem z filtrem UV',
          'Balsam ochronny do ust',
          'Maska zaciemniająca na oczy do spania',
          'Moskitiera na głowę',
          'Okulary przeciwsłoneczne',
          'Strój kąpielowy',
          'Szybkoschnący ręcznik z mikrofibry',
          'Worek na mokre rzeczy'
        ],
        en: [
          'Power bank',
          'Multi-port USB car charger',
          'Charging cables',
          'Waterproof phone pouch',
          'Travel first aid kit',
          'Sunscreen',
          'Protective lip balm',
          'Sleeping eye mask',
          'Head mosquito net',
          'Sunglasses with UV protection',
          'Swimsuit',
          'Quick-dry microfiber towel',
          'Wet bag'
        ]
      }
    }
  ]
};

export function getLocalizedPath(lang: Language, path: string = ''): string {
  const cleanPath = path.replace(/^\/(pl|en)/, '').replace(/^\/+/, '');
  return `/${lang}/${cleanPath}`;
}
