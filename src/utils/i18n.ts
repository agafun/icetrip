export type Language = 'pl' | 'en';

export const defaultLang: Language = 'pl';
export const languages: Record<Language, string> = {
  pl: 'Polski',
  en: 'English',
};

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
  safetyTip?: { pl: string; en: string };
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
      pl: ['Lądowanie 16:50 czasu lokalnego', 'Odbiór auta w Lotus Car Rental', 'Zakupy w markecie Bónus / Netto', 'Malownicza trasa do Hella'],
      en: ['Landing at 16:50 local time', 'Rental car pickup at Lotus Car Rental', 'Grocery shopping at Bónus / Netto', 'Scenic drive to Hella']
    },
    food: {
      pl: ['Zakupy spożywcze w Bónus / Netto w Keflaviku (czynne do 21:30).'],
      en: ['Grocery supplies at Bónus / Netto in Keflavik (usually open until 21:30).']
    },
    content: {
      pl: `Samolot opóźniony ok. 1,5h - lądowanie po 18:00 czasu lokalnego na lotnisku w Keflavíku. Odbiór samochodu z wypożyczalni Lotus Car Rental bardzo sprawny. Zaraz obok market Netto - szybkie zakupy i jazda w kierunku Południowego Wybrzeża. Droga prowadzi przez świeże, czarne pola lawowe. 
      
      Zakwaterowanie w domkach Árhús Cottage and Camping około 22:00. Na miejscu okazuje się, że jeden domek nie ma łazienki, ani kuchni, a drugi ma tylko 3 łóżka. We wspólnej kuchni kempingowej nie ma w ogóle sprzętu typu talerze, sztućce, czy garnki - trzeba mieć swoje, by móc gotować. Jest czajnik i kuchenka. 
      
      O 23:00 wciąż jest jasno.`,
      en: `Flight delayed by about 1.5 hours – landing after 6:00 PM local time at Keflavík Airport. Car pick-up at Lotus Car Rental was super quick and smooth. Right next door is a Netto supermarket – quick grocery run, and then we head towards the South Coast. The road goes through fresh and black lava fields.

We checked into our cabins at Árhús Cottage and Camping around 10:00 PM. Upon arrival, we found out that one cabin had neither a bathroom nor a kitchen, and the second one only had 3 beds. The shared campsite kitchen had no equipment whatsoever—no plates, cutlery, or pots—so you need to bring your own if you want to cook. There was only a kettle and a stovetop available.

It's still light outside at 11:00 PM.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Krajobraz drogi na Islandii', en: 'Icelandic highway landscape' },
        caption: { pl: 'Trasa z Keflavíku w stronę południowych fiordów', en: 'Scenic route heading towards Southern Iceland' }
      }
    ]
  },
  {
    slug: 'day-2',
    dayNumber: 2,
    date: '27.07.2026',
    mapsUrl: 'https://www.google.pl/maps/place/%C3%96xar%C3%A1rfoss+Parking+P2/@64.07913,-20.9534264,88111m/data=!3m1!1e3!4m51!1m44!4m43!1m6!1m2!1s0x48d6e55b00ded7ef:0x6d6be46b76571ca3!2sArhus+Cottage+-+Camping+%26+Restaurant,+Rang%C3%A1rbakkar+6,+850+Hella,+Islandia!2m2!1d-20.4063613!2d63.8330699!1m6!1m2!1s0x48d681c3a1b440b1:0x109d26d48f05a081!2sParkingP2+WC,+7V7J%2BCVF,+Unnamed+Road,+806+Thingvellir,+Islandia!2m2!1d-21.1178274!2d64.2635569!1m6!1m2!1s0x48d65fcb86a21e43:0x13fe408fd8ae0be3!2sStrokkur+Geyser,+8M7X%2B3PJ,+Hafnart%C3%BAn,+806+Selfoss,+Islandia!2m2!1d-20.3007211!2d64.3127094!1m6!1m2!1s0x48d6a50bf5fb8c8f:0x987f8a02ec18b291!2sGullfoss+falls+Car+Park,+806,+Islandia!2m2!1d-20.129885!2d64.3252353!1m6!1m2!1s0x48d6be3be6a08fdb:0x40791e206b0c2e6b!2sHrunalaug+Hot+Spring,+S%C3%B3lheimar,+846+Fl%C3%BA%C3%B0ir,+Islandia!2m2!1d-20.2551249!2d64.1327657!1m6!1m2!1s0x48d6e55b00ded7ef:0x6d6be46b76571ca3!2sArhus+Cottage+-+Camping+%26+Restaurant,+Rang%C3%A1rbakkar+6,+850+Hella,+Islandia!2m2!1d-20.4063613!2d63.8330699!3e0!3m5!1s0x48d6811925604fe5:0xcb26706b9cf4c0c9!8m2!3d64.2647462!4d-21.1148465!16s%2Fg%2F11g6wvtkzr?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 2: Golden Circle', en: 'Day 2: The Golden Circle' },
    description: { pl: 'Þingvellir, gejzer Strokkur, wodospad Gullfoss i relaks w dzikim źródle Hrunalaug.', en: 'Þingvellir rift valley, geyser Strokkur, Gullfoss waterfall, and Hrunalaug hot spring.' },
    distance: '237 km',
    driveTime: '3h 35m',
    hub: { pl: 'Árhús Cottage & Camping, Hella', en: 'Árhús Cottage & Camping, Hella' },
    accommodation: { pl: 'Árhús Cottage & Camping, Hella', en: 'Árhús Cottage & Camping, Hella' },
    highlights: {
      pl: ['Þingvellir (2h): Spacer w szczelinie między kontynentami', 'Geysir (1h): Wybuchy gejzera Strokkur co 5-10 minut', 'Gullfoss (1h): Potężny wodospad', 'Hrunalaug Hot Spring: Kąpiel w naturalnym źródle'],
      en: ['Þingvellir (2h): Walk between continental tectonic plates', 'Geysir (1h): Strokkur geyser erupting every 5-10 mins', 'Gullfoss (1h): The powerful Gullfoss waterfall', 'Hrunalaug Hot Spring: Thermal bath in a historic stone tub']
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
      pl: `Dzień poświęcony klasycznej pętli Złotego Kręgu. Zaczęliśmy od Parku Narodowego Þingvellir (70 km z Helli, 1h 10 min jazdy), gdzie przeszliśmy malowniczym wąwozem Almannagjá pomiędzy płytami kontynentalnymi. Warto podjechać na Öxarárfoss Parking P2 - najbliżej wodospadu. Ścieżki widoczne przy Thingvellir National Park Service Centre są zamknięte z racji ochrony przyrody.

Następnie skierowaliśmy się do doliny gejzerów Haukadalur (60 km, 50 min), by podziwiać wybuchy Strokkur co 5-10 minut. Następnie Gullfoss - trzeba podjechać samochodem jeszcze 10 min. Dzień skończyliśmy relaksującą kąpielą w kameralnym źródle Hrunalaug - wymagana wcześniejsza rezerwacja (wejścia limitowane). Nam szczęśliwie udało się wejść czekając ok. 15 minut.

Tego dnia nie zatrzymywaliśmy się w restauracjach, jedliśmy liofilizaty na całkiem urokliwym parkingu przy Öxarárfoss.`,
      en: `A full day exploring the renowned Golden Circle loop. We started at Þingvellir National Park (70 km from Hella), walking through the Almannagjá rift valley between the North American and Eurasian plates. It's recommended to visit the Öxarárfoss waterfall parking lot P2 to be closest to the waterfall. Paths near Thingvellir National Park Service Centre are closed due to conservation.

Next, we drove to Haukadalur geothermal valley to watch Strokkur blast water 30 meters into the air. A short 10-min drive brought us to roaring Gullfoss, followed by a warm soak at Hrunalaug natural hot spring. Booking is required (limited entry), but we managed to get in after a 15-minute wait. 

We skipped restaurants and ate freeze-dried meals at a nice parking lot near Öxarárfoss.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Wybuch Gejzera Strokkur', en: 'Strokkur Geyser Eruption' },
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
    description: { pl: 'Trekking do naturalnej podgrzewanej rzeki Reykjadalur, wulkaniczny krater Kerið i ukryty wodospad Ægissíðufoss.', en: 'Hike to the naturally heated Reykjadalur river, Kerið volcanic crater, and hidden Ægissíðufoss waterfall.' },
    distance: '136 km',
    driveTime: '2h 05m',
    hub: { pl: 'Árhús Cottage & Camping, Hella', en: 'Árhús Cottage & Camping, Hella' },
    accommodation: { pl: 'Árhús Cottage & Camping, Hella', en: 'Árhús Cottage & Camping, Hella' },
    highlights: {
      pl: ['Krater wulkaniczny Kerið z turkusowym jeziorem', 'Reykjadalur (4h): Trekking (3 km w jedną stronę) do gorącej rzeki (woda ok. 40°C)', 'Ukryty wodospad Ægissíðufoss blisko Hella'],
      en: ['Kerið volcanic crater with neon turquoise water', 'Reykjadalur (4h): 3 km hike to a 40°C natural hot spring river', 'Hidden Ægissíðufoss waterfall near Hella']
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
      pl: `Jadąc do Reykjadalur uznaliśmy, że trochę odwrócimy kolejność zwiedzania i najpierw podjedziemy na krater Kerið, ponieważ trekking może okazać się dłuższy niż szacowany czas. Trekking z parkingu Hveragerði do rzeki Reykjadalur to ok. 3 km podejścia - z dziećmi wyszło 1,5-2h w jedną stronę. Kąpiel w całkowicie naturalnej, ciepłej rzece (woda osiąga około 40°C) wynagrodziła trudy wejścia. Do jedzenia zupa pomidorowa w termosach.

W drodze powrotnej zjechaliśmy do Selfoss na obiad w Kaffi Krús i zakupy. Na wodospad Ægissíðufoss zabrakło chęci i sił.`,
      en: `On our way to Reykjadalur, we decided to slightly adjust our itinerary and visit the Kerið crater first, anticipating that the hike might take longer than expected. The trail from the Hveragerði parking lot to the Reykjadalur river is about a 3 km uphill walk—with kids, it took us around 1.5 to 2 hours one way. Bathing in a completely natural, warm river (where the water reaches around 40°C) made every bit of the effort worth it. We had tomato soup from our thermos flasks to eat.

On the way back, we stopped by Selfoss for dinner at Kaffi Krús and to do some shopping. By the time we were done, we simply lacked the energy and motivation to visit the Ægissíðufoss waterfall.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Gorąca rzeka Reykjadalur', en: 'Reykjadalur thermal river' },
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
    description: { pl: 'Seljalandsfoss, Skógafoss, maskonury na Dyrhólaey, Reynisfjara, baśniowy kanion i wodospad Svartifoss.', en: 'Seljalandsfoss, Skógafoss, puffins at Dyrhólaey, Reynisfjara black beach, Fjaðrárgljúfur canyon, and Svartifoss.' },
    distance: '384 km',
    driveTime: '5h 10m',
    hub: { pl: 'Höfn Cottages', en: 'Höfn Cottages' },
    accommodation: { pl: 'Höfn Cottages', en: 'Höfn Cottages', link: 'https://www.booking.com/hotel/is/hofn-cottages.pl.html' },
    highlights: {
      pl: [
        '08:55 – Seljalandsfoss: Słynny wodospad, za który można wejść (45 min)',
        '10:05 – Skógafoss: Potężny 60m wodospad + schody na punkt widokowy (1h)',
        '11:35 – Reynisfjara & Dyrhólaey: Maskonury, skalny łuk i czarny piasek (2h)',
        '14:35 – Kanion Fjaðrárgljúfur: Bajkowo zielony kanion (1h)',
        '16:35 – Park Skaftafell: Wodospad Svartifoss wśród bazaltowych organów (2h)'
      ],
      en: [
        '08:55 – Seljalandsfoss: Walk behind the tumbling water waterfall (45 min)',
        '10:05 – Skógafoss: Massive 60m waterfall and staircase lookout (1h)',
        '11:35 – Reynisfjara & Dyrhólaey: Puffins, arch, and basalt columns (2h)',
        '14:35 – Fjaðrárgljúfur Canyon: Verdant serpentine canyon (1h)',
        '16:35 – Skaftafell National Park: Hike to Svartifoss basalt waterfall (2h)'
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
      pl: `Najbardziej obfity w atrakcje dzień wyprawy, trzeba pilnować harmonogramu. Wystartowaliśmy o o 08:30 z Hella. Pierwszy przystanek to Seljalandsfoss, gdzie przechodzi się za ścianą spadającej wody, warto podejść jeszcze kawałek dalej, gdzie woda wpada do kanionu szczelinowego. Następnie podjechaliśmy pod Skógafoss, by wspiąć się po metalowych schodach na taras widokowy.

Przed południem dotarliśmy do klifu Dyrhólaey wypatrywać maskonurów, gdzie okazało się, że można zrobić bardzo fajny spacer klifami aż do plaży. Tam dzieci zgłodniały, więc postanowiliśmy podjechać do Black Beach Restaurant (dużo ludzi, ale dość sprawnie poszło) i zwiedzić czarną plażę od drugiej strony, przy jaskini Hálsanefshellir. To było warte zobaczenia. 

Po obiedzie podjechaliśmy zobaczyć kanion Fjaðrárgljúfur i stamtąd prosto do Höfn na nocleg. Svartifoss przenosimy na następny dzień.`,
      en: `The most action-packed day of the trip—sticking to the schedule is a must. We set off at 8:30 AM from Hella. Our first stop was Seljalandsfoss, where you can walk right behind the wall of falling water; it's well worth walking a bit further to where the water cascades into a slot canyon. Next, we drove up to Skógafoss and climbed the metal stairs up to the viewing platform.

      Before noon, we reached the Dyrhólaey cliff to look for puffins, where we discovered a really nice cliffside walk leading all the way down to the beach. By then, the kids were getting hungry, so we decided to head over to the Black Beach Restaurant (busy, but service was pretty efficient) and explore the black sand beach from the other side, near the Hálsanefshellir cave. That was definitely worth seeing. 

After lunch, we drove to see the Fjaðrárgljúfur canyon, and from there went straight to Höfn for the night. We pushed Svartifoss to the next day.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Wodospad Skógafoss z tęczą', en: 'Skógafoss Waterfall with Rainbow' },
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
    description: { pl: 'Rejs amfibią wśród gór lodowych Jökulsárlón, Diamentowa Plaża i gorące wanny Hoffell.', en: 'Amphibian boat tour among icebergs at Jökulsárlón, Diamond Beach, and Hoffell geothermal tubs.' },
    distance: '243 km',
    driveTime: '3h 10m',
    hub: { pl: 'Höfn Cottages', en: 'Höfn Cottages' },
    accommodation: { pl: 'Höfn Cottages', en: 'Höfn Cottages' },
    highlights: {
      pl: [
        'Park Skaftafell: Wodospad Svartifoss wśród bazaltowych organów (2h)',
        'Skaftafellsjökull',
        'Jökulsárlón & Diamond Beach: Dryfujące bryły lodu na wulkanicznym czarnym piasku',
        'Rejs amfibią wśród gór lodowych (icelagoon.is - konieczna rezerwacja!)'
      ],
      en: [
        'Skaftafell National Park: Hike to Svartifoss basalt waterfall (2h)',
        'Skaftafellsjökull',
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
      pl: `Nie odpuściliśmy wodospadu Svartifoss i całe szczęście, bo jest chyba najbardziej urokliwy ze wszysktich na Islandii. To ten z bazaltowymi kolumnami przypominającymi organy. Przy wejściu na szlak jest spore centrum turystyczne z ławeczkami, tam zjedliśmy na obiad liofilizaty.
      
      Niedaleko znajduje się łatwo dostępny szlak na czoło lodowca Skaftafellsjökull, więc podjechaliśmy tam po obiedzie. Popołudniu mieliśmy rezerwację na rejs amfibią po lagunie, ale wcześniej mieliśmy chwilę, by przespacerować się na Diamentową Plażę.
      
      Z reszty planu na dziś zrezygnowaliśmy - po rejsie pojechaliśmy do domków, a ojcowie załatwiali szybkie zakupy.`,
      en: `We didn't skip the Svartifoss waterfall, and thank goodness, because it's probably the most charming of all waterfalls in Iceland. This is the one with the basalt columns resembling church organ pipes. There's a sizable visitor center with benches at the trailhead, where we had freeze-dried meals for lunch.

Nearby, there's an easily accessible trail leading to the Skaftafellsjökull glacier tongue, so we drove over there after lunch. In the afternoon, we had an amphibian boat tour reserved on the lagoon, but beforehand, we had a little time to stroll along Diamond Beach.

We decided to drop the rest of today's itinerary—after the boat ride, we went straight to the cabins, while the dads handled a quick grocery run.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Góry lodowe na Jökulsárlón', en: 'Floating icebergs at Jökulsárlón' },
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
      pl: ['Stokksnes / Vestrahorn: Dramatyczna czarna góra wyrastająca wprost z oceanu', 'Djúpivogur (45 min): Malowniczy port i rzeźby jaj ptaków', 'Malownicza trasa przez Fiordy Wschodnie do Egilsstaðir i Mývatn', 'Grjótagjá: Jaskinia lawowa z gorącym źródłem'],
      en: ['Stokksnes / Vestrahorn: Jagged black peak towering above tidal beach lagoons', 'Djúpivogur (45 min): Charming fishing village & granite bird egg sculptures', 'Breathtaking drive winding through East Fjords to Egilsstaðir and Lake Mývatn', 'Grjótagjá: Volcanic cave housing a geothermal spring']
    },
    food: {
      pl: ['Vogafjós Farm Resort (obok noclegu Vogar): Restauracja wewnątrz obory. Pijesz kawę patrzac na dojenie krów! Słynny podziemny chleb geotermalny Geysir bread z wędzonym pstrągiem.'],
      en: ['Vogafjós Farm Resort (next to Vogar stay): Unique restaurant inside a cowshed. Enjoy Geysir rye bread baked underground with smoked trout.']
    },
    content: {
      pl: `Rano udaliśmy się na półwysep Stokksnes pod ikoniczną górę Vestrahorn (15 km od Höfn). Na miejscu okazało się, że można tam zwiedzać wioskę Wikingów (opuszczony plan filmowy). Następnie ruszyliśmy w jedną z najpiękniejszych tras widokowych Europy – przez meandrujące Fiordy Wschodnie.

Zatrzymaliśmy się w urokliwej wiosce Djúpivogur, gdzie, szukając rzeźb jaj, chcieliśmy zjeść zupę z termosów w jakimś ładnym miejscu, ale tego dnia koszmarnie wiało i ostatecznie zjedliśmy szybko na ławce koło samochodu.

Droga do Mývatn jest dość długa, po drodze fragment szutrowy. Zakupy i przerwa na podwieczorek w Egilsstaðir (bardzo dużo turystów, na stacjach paliw i w supermarketach tłumy ludzi). Tuż przed naszym noclegiem zjechaliśmy jeszcze do Grjótagjá (jaskinia lawowa z gorącym źródłem - szczerze, mocno rozczarowujące).`,
      en: `In the morning, we headed to the Stokksnes peninsula, home to the iconic Vestrahorn mountain (15 km from Höfn). Once there, we discovered you can explore a Viking village on-site (an abandoned movie set). After that, we set off along one of the most scenic driving routes in Europe—winding through the breathtaking East Fjords.

We stopped in the charming village of Djúpivogur, where, while hunting for the famous egg sculptures, we hoped to eat our thermos soup somewhere nice. However, the wind was absolutely brutal that day, so we ended up grabbing a quick bite on a bench right next to the car.

The drive to Mývatn is quite long, featuring a gravel section along the way. We stopped in Egilsstaðir for groceries and an afternoon snack break (it was packed with tourists—huge crowds at both the gas stations and supermarkets). Just before reaching our accommodation for the night, we took a quick detour to Grjótagjá (a lava cave with a hot spring inside—honestly, pretty disappointing).`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Góra Vestrahorn na Stokksnes', en: 'Vestrahorn Mountain at Stokksnes' },
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
    description: { pl: 'Wodospad Dettifoss, wulkan Krafla, krater Víti, dymiące solfatary Hverir i Earth Lagoon Spa.', en: 'Potent Dettifoss waterfall, Krafla volcano, Víti crater lake, Hverir boiling mud pots, and Earth Lagoon.' },
    distance: '131 km',
    driveTime: '2h',
    hub: { pl: 'Vogar Travel Service, Mývatn', en: 'Vogar Travel Service, Mývatn' },
    accommodation: { pl: 'Vogar Travel Service, Mývatn', en: 'Vogar Travel Service, Mývatn' },
    highlights: {
      pl: [
        'Dettifoss: Najpotężniejszy pod względem masy wody wodospad w Europie',
        'Wulkan Krafla & Krater Víti: Turkusowe jezioro w kraterze wulkanu',
        'Hverir (Námafjall): Bulgoczące błota, solfatary i zjawiskowe formacje siarkowe',
        'Earth Lagoon Mývatn: Popołudniowy relaks w nowoczesnym niebieskim spa'
      ],
      en: [
        'Dettifoss: Europe’s most powerful waterfall by volume',
        'Krafla Volcano & Víti Crater: Stunning turquoise crater lake hike',
        'Hverir (Námafjall): Steam vents, boiling mud cauldrons, and surreal sulfur fields',
        'Earth Lagoon Mývatn: Afternoon relaxation in mineral-rich milky blue waters'
      ]
    },
    food: {
      pl: ['Vogafjós Farm Resort (obok noclegu Vogar): Restauracja wewnątrz obory. Pijesz kawę patrzac na dojenie krów! Słynny podziemny chleb geotermalny Geysir bread z wędzonym pstrągiem.'],
      en: ['Vogafjós Farm Resort (next to Vogar stay): Unique restaurant inside a cowshed. Enjoy Geysir rye bread baked underground with smoked trout.']
    },
    safetyTip: {
      pl: 'UWAGA NA MESZKI! Wokół jeziora Mývatn w upalne dni latają chmary niegroźnych, ale niezwykle uciążliwych meszek. Warto mieć moskitierę na głowę!',
      en: 'MIDGE WARNING: Swarms of non-biting midges hover around Lake Mývatn on calm summer days. Wearing a head mesh net will save your sanity!'
    },
    content: {
      pl: `Dzień pełen wulkanicznej energii. Jadąc przez 70 km niesamowitego marsjańskiego krajobrazu, dotarliśmy Dettifoss. Niestety, w deszczu padającym poziomo, sam wodospad był praktycznie niewidoczny, a my w ciągu 15 minut byliśmy przemoczeni do suchej nitki. 
      
      Następnie podjechaliśmy na Krafla, żeby zobaczyć kalderę i turkusowe jezioro w kraterze Víti, ale znowu, we mgle nie było nic widać. To jest teren prywatny, nie ma tam za bardzo możliwości dłuższego spaceru - generalnie można było to pominąć.
      
      Zjechaliśmy na dymiące pola geotermalne Hverir i tam pogoda się poprawiła na tyle, że można było pospacerować wśród siarkowych wyziewów. Popołudnie spędziliśmy w luksusowych termach Earth Lagoon Mývatn (drogo, ale warto; mało ludzi).
      
      Kolację zjedliśmy w polecanej restauracji z widokiem na oborę - fajna odmiana, do obory można wejść i pogłaskać krowy. Korzystając z tego, że dzień się nie kończy, pojechaliśmy jeszcze na krótką wędrówkę na wulkan Hverfell i to był bardzo dobry pomysł, bo widok z góry jest wyjątkowo atrakcyjny.`,
      en: `A day packed with volcanic energy. Driving through 70 km of incredible, Mars-like terrain, we reached Dettifoss. Unfortunately, with rain blowing completely sideways, the waterfall itself was practically invisible, and within 15 minutes, we were soaked to the bone.

Next, we drove up to Krafla to see the caldera and the turquoise lake inside the Víti crater, but once again, the heavy fog completely blocked the view. It's private land with limited options for a longer walk—honestly, we could have skipped it.

We then headed down to the steaming geothermal fields of Hverir, where the weather cleared up enough for us to wander among the sulfur vents. We spent the afternoon unwinding at the luxurious Earth Lagoon Mývatn (expensive, but worth it; not crowded).

For dinner, we ate at a restaurant overlooking a cowshed — a fun change of pace, as you can actually go inside the barn to pet the cows. Taking advantage of the endless summer daylight, we ended the day with a short hike up the Hverfjall volcano, which turned out to be a fantastic decision — the view from the rim is absolutely spectacular.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Pola geotermalne Hverir', en: 'Hverir Geothermal Fields' },
        caption: { pl: 'Dymiące pola siarkowe Hverir pod Mývatn', en: 'Steaming geothermal vents and sulfur hills at Hverir' }
      }
    ]
  },
  {
    slug: 'day-8',
    dayNumber: 8,
    date: '02.08.2026',
    mapsUrl: 'https://www.google.pl/maps/place/Public+parking/@64.6310691,-25.2990549,339238m/data=!3m1!1e3!4m37!1m30!4m29!1m6!1m2!1s0x48cd9e8f3bb4d50b:0x36df87c2abfdfa26!2sVogar+Travel+Service,+Vogar,+660+M%C3%BDvatn,+Islandia!2m2!1d-16.9161835!2d65.6235241!1m6!1m2!1s0x48cd7e6bd797eb7b:0x29622a15a54afe2c!2sGo%C3%B0afoss+East+Bank+Parking,+Go%C3%B0afoss+Sightseeing,+645,+Islandia!2m2!1d-17.5404818!2d65.6839717!1m6!1m2!1s0x48d28f1a09950f9d:0x400883a5c7f5a41f!2sPublic+parking,+T%C3%B3natr%C3%B6%C3%B0+11,+600+Akureyri,+Islandia!2m2!1d-18.0920427!2d65.6731624!1m6!1m2!1s0x48d5c9b82a7f68c9:0x8abaec16f91bbfbc!2sLaekjarkot+Rooms+And+Cottages,+H4VX%2BJJG,+L%C3%A6kjarkot,+311+Borgarnes,+Islandia!2m2!1d-21.8509331!2d64.5940628!3e0!3m5!1s0x48d28f1a09950f9d:0x400883a5c7f5a41f!8m2!3d65.6731624!4d-18.0920427!16s%2Fg%2F11hz6ngcsq?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 8: Północ i Akureyri', en: 'Day 8: North & Akureyri' },
    description: { pl: 'Wodospad Bogów Goðafoss, stolica północy Akureyri i lody Brynja.', en: 'Goðafoss Waterfall of the Gods, Northern Capital Akureyri, and iconic Brynja ice cream.' },
    distance: '396 km',
    driveTime: '4h 55m',
    hub: { pl: 'Lækjarkot Rooms and Cottages, Borgarnes', en: 'Lækjarkot Rooms and Cottages, Borgarnes' },
    accommodation: { pl: 'Lækjarkot Rooms and Cottages, Borgarnes', en: 'Lækjarkot Rooms and Cottages, Borgarnes', link: 'https://www.booking.com/hotel/is/laekjarkot-mobile-homes-and-rooms.pl.html' },
    highlights: {
      pl: ['Wodospad Goðafoss ("Wodospad Bogów") leżący tuż przy drodze nr 1', 'Akureyri (2h): Ogród Botaniczny, starówka i legendarne lody Brynja', 'Przejazd przez malowniczą północną Islandię do Lækjarkot'],
      en: ['Goðafoss ("Waterfall of the Gods") accessible right off Ring Road', 'Akureyri (2h): Botanical Gardens, northern architecture, & famous Brynja ice cream', 'Scenic drive crossing northern mountain passes to Lækjarkot']
    },
    food: {
      pl: [
        'Akureyri Hot Dog Stand (Bæjarins Beztu Pylsur / Akureyri): Klasyczny islandzki hot-dog z prażoną cebulką i sosem pylsusinnep.',
        'Lody Brynja (Akureyri): Najstarsza i najsłynniejsza lodziarnia na północy Islandii.'
      ],
      en: [
        'Akureyri Hot Dog Stand: Traditional Icelandic hot dog topped with crispy onions and sweet mustard.',
        'Brynja Ice Cream (Akureyri): The North’s oldest and most beloved soft-serve ice cream shop.'
      ]
    },
    content: {
      pl: `Po spokojnym dniu spędzonym lokalnie, kolejny dzień "tranzytowy". Z Mývatn wyruszyliśmy pod Goðafoss – półokrągły wodospad, w którego wody według legendy w 1000 roku wrzucono pogańskie posągi bogów.

Kolejny przystanek to Akureyri, klimatyczna stolica Północy. Zwiedziliśmy najdalej na północ wysunięty ogród botaniczny na świecie, a w ramach drugiego śniadania zjedliśmy tradycyjne lody w Brynja. Warto wziąć mniejszą porcję. 

Po drodze do Lækjarkot przerwa na kawę i trampoliny w Blönduós. W Lækjarkot mamy zarezerwowane domki holenderskie - okazuje się, że standard bardzo dobry.`,

      en: `After a quiet day spent exploring locally, we had another 'transit' day ahead. We set off from Mývatn for Goðafoss—a spectacular semi-circular waterfall where, according to legend, pagan idols were thrown into the waters in the year 1000.

Our next stop was Akureyri, the charming capital of the North. We visited the world's northernmost botanical garden and stopped by Brynja for traditional Icelandic ice cream as a mid-morning treat. Pro tip: go for a smaller portion.

On the way to Lækjarkot, we took a break in Blönduós for coffee and a turn on the outdoor trampolines. At Lækjarkot, we had booked Dutch-style cabins—which turned out to be of a very high standard.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Wodospad Goðafoss', en: 'Goðafoss Waterfall' },
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
    description: { pl: 'Hraunfossar i Barnafoss, najsilniejsze źródło w Europie Deildartunguhver i miasteczko Borgarnes.', en: 'Hraunfossar lava falls, Barnafoss, Deildartunguhver 97°C spring, Krauma baths, & Borgarnes.' },
    distance: '123 km',
    driveTime: '1h 45m',
    hub: { pl: 'Lækjarkot Rooms and Cottages, Borgarnes', en: 'Lækjarkot Rooms and Cottages, Borgarnes' },
    accommodation: { pl: 'Lækjarkot Rooms and Cottages, Borgarnes', en: 'Lækjarkot Rooms and Cottages, Borgarnes' },
    highlights: {
      pl: [
        'Hraunfossar & Barnafoss: Woda wypływająca prosto zza ściany pola lawy do turkusowej rzeki',
        'Deildartunguhver: Najbardziej wydajne gorące źródło w Europie (97°C!)',
        'Troll Garden',
        'Borgarnes: basen'
      ],
      en: [
        'Hraunfossar & Barnafoss: Crystal clear cold rivulets emerging directly from underneath lava fields',
        'Deildartunguhver: Europe’s most powerful geothermal spring (97°C)',
        'Troll Garden',
        'Borgarnes: swimming pool'
      ]
    },
    food: {
      pl: ['Settlement Center Restaurant (Borgarnes): Niezwykle opłacalny bufet sałatkowo-zupowy w porze lunchu (jesz ile chcesz).'],
      en: ['Settlement Center Restaurant (Borgarnes): Excellent value all-you-can-eat soup & salad lunch buffet.']
    },
    content: {
      pl: `Spokojniejszy dzień poświęcony lokalnym atrakcjom. Najpierw pojechaliśmy do Hraunfossar - ciekawe miejsce, króciutki spacer wzdłuż wodospadów. W Krauma zobaczyliśmy tylko Deildartunguhver – źródło pompujące 180 litrów wrzącej wody na sekundę (97°C). Nie chcąc przepłacać za gorące źródła, postanowiliśmy odzwiedzić miejski basen w Borgarnes - tam też podgrzewają wodę. Sam basen był super, choć niestety tymczasowo nie działały zjeżdżalnie, ku rozczarowaniu dzieci. Wcześniej, jeszcze w drodze do Borgarnes, odwiedziliśmy Ogród Trolli - ścieżkę edukacyjną wśród pól lawowych z elementami zabawowymi. Na obiad liofilizaty w parku koło basenu.`,
      en: `A more relaxed day dedicated to local sights. First, we drove to Hraunfossar—a fascinating spot with a very short walk alongside the waterfalls. At Krauma, we only checked out Deildartunguhver, a hot spring pumping out 180 liters of boiling water per second (97°C). Wanting to avoid overpaying for thermal baths, we decided to visit the public swimming pool in Borgarnes instead, where the water is heated too. The pool complex itself was great, though unfortunately the waterslides were temporarily out of order, much to the kids' disappointment. Earlier, on our way to Borgarnes, we visited Fossatún Troll Garden—an educational trail winding through lava fields with fun interactive elements for children. For lunch, we had freeze-dried meals in the park next to the pool.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Wodospady Hraunfossar', en: 'Hraunfossar Lava Falls' },
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
    description: { pl: 'Góra Kirkjufell, czarna plaża Djúpalónssandur z kamieniami rybaków i klify Arnarstapi.', en: 'Kirkjufell mountain, Djúpalónssandur pebble beach with lifting stones, and Arnarstapi basalt arches.' },
    distance: '303 km',
    driveTime: '4h 10m',
    hub: { pl: 'Lækjarkot Rooms and Cottages, Borgarnes', en: 'Lækjarkot Rooms and Cottages, Borgarnes' },
    accommodation: { pl: 'Lækjarkot Rooms and Cottages, Borgarnes', en: 'Lækjarkot Rooms and Cottages, Borgarnes' },
    highlights: {
      pl: [
        'Góra Kirkjufell & wodospad Kirkjufellsfoss: Najczęściej fotografowana góra Islandii',
        'Plaża Djúpalónssandur: Czarna plaża z kamieniami próby siły rybaków i wrakiem statku',
        'Arnarstapi: Klify bazaltowe, naturalny łuk skalny Gatklettur i posąg Bardura',
        'Plaża Ytri Tunga - obserwacja fok'
      ],
      en: [
        'Kirkjufell Mountain & Kirkjufellsfoss: Iceland’s most iconic arrow-head peak',
        'Djúpalónssandur Beach: Black pebble shore featuring historical lifting stones & shipwreck remains',
        'Arnarstapi: Cliffside coastal walk overlooking Gatklettur rock arch',
        'Ytri Tunga beach - seals observation'
      ]
    },
    food: {
      pl: ['FRISTA Food Truck Arnarstapi - doskonała ryba dnia', 'Lokale w centrum Arnarstapi - kawa, ciasta'],
      en: ['FRISTA Food Truck Arnarstapi - fantastic fish of the day', 'Local cafes in Arnarstapi: coffee, homemade cakes.']
    },
    content: {
      pl: `Półwysep Snæfellsnes nazywany jest "Islandią w pigułce" i jest to całkowicie zgodne z prawdą. Była to chyba najlepsza i najbardziej widokowa wycieczka. Pierwszym celem była słynna góra Kirkjufell oraz odbijający się w rzece wodospad Kirkjufellsfoss. Mieliśmy przez chwilę myśl, czy by nie wyjść na szczyt Kirkufjell, ale opis szlaku w wyższych partiach (trudności, ekspozycja) trochę ostudziły nasz zapał.

Następnie pojechaliśmy na czarną plażę Djúpalónssandur, gdzie relaksowaliśmy się wśród szumu fal. Obiad zjedliśmy w food tracku w Arnastarpi, następnie zrobiliśmy spacer po malowniczych klifach, gdzie gniazdują mewy. Przed powrotem do domku popołudniowa kawa w lokalnej kafejce. W trasie powrotnej zahaczyliśmy jeszcze o plażę Ytri Tunga, na której leniwie wylegują się foki (można je obserwować z bliska).`,
      en: `The Snæfellsnes Peninsula is often called 'Iceland in a nutshell,' and that couldn't be more accurate. It was easily the best and most scenic trip of the whole journey. Our first destination was the famous Mount Kirkjufell and the Kirkjufellsfoss waterfall reflecting in the river. We briefly considered hiking to the top of Kirkjufell, but the trail description for the upper sections (technical difficulty and high exposure) quickly cooled our enthusiasm.

Next, we headed to the black sand beach at Djúpalónssandur, where we relaxed to the sound of crashing waves. We grabbed lunch at a food truck in Arnarstapi, followed by a walk along the dramatic cliffs where nesting gulls reside. Before heading back to our cabin, we stopped for an afternoon coffee at a charming local café. On the drive back, we made one last stop at Ytri Tunga beach, where seals lazily lounge on the rocks (you can observe them from remarkably close up).`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Góra Kirkjufell', en: 'Kirkjufell Mountain' },
        caption: { pl: 'Góra Kirkjufell na półwyspie Snæfellsnes', en: 'Iconic Kirkjufell mountain peak' }
      }
    ]
  },
  {
    slug: 'day-11',
    dayNumber: 11,
    date: '05.08.2026',
    mapsUrl: 'https://www.google.pl/maps/place/Volcano+Skali+Parking+P2/@64.2188905,-22.6374878,99491m/data=!3m1!1e3!4m27!1m20!4m19!1m3!2m2!1d-21.8456665!2d64.5904162!1m6!1m2!1s0x48d61d2ca3160fbd:0xf7d0de03586eafe!2sVolcano+Skali+Parking+P2,+VP5C%2BFG,+241+Grindavik,+Islandia!2m2!1d-22.2786669!2d63.8586865!1m6!1m2!1s0x48d674bee49027a3:0x951f7e27652991de!2zSMOzdGVsIMONc2xhbmQgU3BhICYgV2VsbG5lc3MsIMOBcm3DumxpIDkgMTA4LCAxMDggUmV5a2phdsOtaywgSXNsYW5kaWE!2m2!1d-21.883311!2d64.138727!3e0!3m5!1s0x48d61d2ca3160fbd:0xf7d0de03586eafe!8m2!3d63.8586865!4d-22.2786669!16s%2Fg%2F11t2z79y1c?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 11: Reykjavík', en: 'Day 11: Reykjavík' },
    description: { pl: 'Spacer ulicą Laugavegur, kościół Hallgrímskirkja, interaktywne muzeum Perlan i Stary Port.', en: 'Laugavegur shopping street, Hallgrímskirkja church, interactive Perlan ice cave, & Old Harbor.' },
    distance: '182 km',
    driveTime: '2h 45m',
    hub: { pl: 'Hótel Ísland Spa & Wellness, Reykjavík', en: 'Hótel Ísland Spa & Wellness, Reykjavík' },
    accommodation: { pl: 'Hótel Ísland Spa & Wellness, Reykjavík', en: 'Hótel Ísland Spa & Wellness, Reykjavík', link: 'https://www.booking.com/hotel/is/hotel-island.pl.html' },
    highlights: {
      pl: [
        'Spacer po stolicy: Ulica Laugavegur, słynny kościół Hallgrímskirkja',
        'Muzeum Perlan: Interaktywna jaskinia lodowa z prawdziwego lodu i symulator zorzy (punkt obowiązkowy dla dzieci!)',
        'Stary Port w Reykjavíku: Obiad i spacer wzdłuż nabrzeża',
        'Nocleg i relaks w Spa Hotel Ísland'
      ],
      en: [
        'Capital Highlights: Rainbow Street, Laugavegur, & Hallgrímskirkja cathedral view tower',
        'Perlan Museum: Walk inside a real 100-meter ice cave & northern lights planetarium show (must-see for kids!)',
        'Old Harbor District: Historic docks, seafood bistros, & maritime atmosphere',
        'Check-in & spa relaxation at Hotel Ísland'
      ]
    },
    food: {
      pl: [
        'Bæjarins Beztu Pylsur (Reykjavík): Najsłynniejszy hot-dog w Europie, jedzony m.in. przez Billa Clintona!',
        'Seabaron (Sægreifinn przy porcie): Słynna zupa z homara / krewetek i szaszłyki rybne.'
      ],
      en: [
        'Bæjarins Beztu Pylsur (Reykjavík): World-famous hot dog stand enjoyed by presidents & travelers alike.',
        'Seabaron (Sægreifinn at Old Harbor): Legendary lobster soup and grilled fish skewers.'
      ]
    },
    content: {
      pl: `Wjeżdżamy do stolicy Islandii. Dzień rozpoczynamy od spaceru głównym deptakiem Laugavegur pod imponujący kościół Hallgrímskirkja.

Głównym punktem dnia jest Muzeum Perlan – interaktywne centrum naukowe umieszczone w zbiornikach wodnych na wzgórzu Öskjuhlíð. Dzieci i dorośli zachwycą się 100-metrową jaskinią z prawdziwego lodu. Wieczorny odpoczynek w spa.`,
      en: `Arrive in vibrant Reykjavík! Begin with a stroll up colorful Laugavegur street to iconic Hallgrímskirkja cathedral.

Highlight of the day is Perlan Museum atop Öskjuhlíð hill. Step inside an authentic 100-meter indoor ice cave crafted from real glacial ice and watch a planetarium aurora show. Evening spa relaxation at Hotel Ísland.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Kościół Hallgrímskirkja', en: 'Hallgrímskirkja Church' },
        caption: { pl: 'Kościół Hallgrímskirkja w centrum Reykjavíku', en: 'Hallgrímskirkja church landmark in Reykjavík' }
      }
    ]
  },
  {
    slug: 'day-12',
    dayNumber: 12,
    date: '06.08.2026',
    mapsUrl: 'https://www.google.pl/maps/place/Volcano+Skali+Parking+P2/@64.0152093,-22.5511904,50111m/data=!3m1!1e3!4m23!1m16!4m15!1m6!1m2!1s0x48d674bee49027a3:0x951f7e27652991de!2zSMOzdGVsIMONc2xhbmQgU3BhICYgV2VsbG5lc3MsIMOBcm3DumxpIDkgMTA4LCAxMDggUmV5a2phdsOtaywgSXNsYW5kaWE!2m2!1d-21.883311!2d64.138727!1m6!1m2!1s0x48d602676bc10577:0xed54faf584dd5a1b!2sLotus+Car+Rental+Iceland,+Flugvellir+10,+230+Keflav%C3%ADk,+Islandia!2m2!1d-22.5793205!2d63.9970853!3e0!3m5!1s0x48d61d2ca3160fbd:0xf7d0de03586eafe!8m2!3d63.8586865!4d-22.2786669!16s%2Fg%2F11t2z79y1c?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D',
    title: { pl: 'Dzień 12: wylot', en: 'Day 12: Departure' },
    description: { pl: 'Geotermalne Seltún, Most Między Kontynentami, zdanie auta (16:00) i wylot (18:05).', en: 'Seltún geothermal springs, Bridge Between Continents, car return (16:00), & flight (18:05).' },
    distance: '47 km',
    driveTime: '45m',
    hub: { pl: 'Lotnisko Keflavík', en: 'Keflavík Airport' },
    accommodation: { pl: 'Wylot do Polski', en: 'Return Flight' },
    highlights: {
      pl: [
        'Seltún (Krísuvík): Kolorowe, parujące wzgórza i bulgoczące gorące źródła (40 min z Reykjavíku)',
        'Most Między Kontynentami (Miðlína): Kładka nad szczeliną dzielącą płytę euroazjatycką od północnoamerykańskiej',
        '16:00 – Oddanie samochodu w wypożyczalni Lotus',
        '18:05 – Wylot samolotu z lotniska Keflavík (KEF)'
      ],
      en: [
        'Seltún (Krísuvík): Vibrant steaming clay hills and bubbling mud springs',
        'Bridge Between Continents (Miðlína): Footbridge spanning the rift between Eurasia and North America',
        '16:00 – Return 4x4 rental car to Lotus Car Rental',
        '18:05 – Departure flight from Keflavík Airport (KEF)'
      ]
    },
    food: {
      pl: ['Ostatnie przekąski na lotnisku Keflavík przed odlotem.'],
      en: ['Final snacks at Keflavík Airport prior to boarding.']
    },
    content: {
      pl: `Ostatnie godziny na bajecznej wyspie. Przed wylotem zwiedzamy geotermalny obszar Seltún pełen dymiących kominów siarkowych.

Następnie przejeżdżamy na Most Między Kontynentami, by stanąć jedną nogą w Ameryce Północnej, a drugą w Europie. O 16:00 oddajemy auto w Lotus Car Rental i przygotowujemy się do wylotu o 18:05.`,
      en: `Final unforgettable hours on the island of ice and fire. Explore Seltún geothermal field featuring multi-colored steaming clay hills.

Visit the Bridge Between Continents to stand with one foot in North America and the other in Europe. At 16:00, return the rental car to Lotus Car Rental before catching our 18:05 return flight.`
    },
    images: [
      {
        url: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=1200&q=80',
        alt: { pl: 'Most między kontynentami', en: 'Bridge between continents' },
        caption: { pl: 'Most Między Kontynentami na półwyspie Reykjanes', en: 'Bridge Between Continents on Reykjanes Peninsula' }
      }
    ]
  }
];

export const generalInfo = {
  eclipseNotice: {
    title: { pl: 'Ciekawostka: całkowite zaćmienie słońca 12 sierpnia 2026', en: 'Note: Total Solar Eclipse on August 12, 2026' },
    text: {
      pl: 'Wyprawa w sierpniu 2026 roku zbiega się z historycznym wydarzeniem – całkowitym zaćmieniem słońca (12 sierpnia) widocznym z Islandii, co powoduje, że ceny wystrzeliły w kosmos - hotel w Reykjaviku kosztował jedyne 80.000 zł!',
      en: 'This expedition (July 26 – August 6, 2026) finishes right before August 12, avoiding extreme price spikes caused by the total solar eclipse in Iceland. Hotel in Reykjavik costs 80,000 PLN!'
    }
  },
  logisticsKm: [
    { day: 1, route: 'KEF → Hella', km: '144 km', hours: '2h' },
    { day: 2, route: 'Hella → Þingvellir → Geysir → Gullfoss → Hella', km: '237 km', hours: '3h 35m' },
    { day: 3, route: 'Hella → Kerið → Reykjadalur → Hella', km: '136 km', hours: '2h 05m' },
    { day: 4, route: 'Hella → Seljalandsfoss → Skógafoss → Dyrhólaey → Reynisfjara → Fjaðrárgljúfur → Höfn', km: '384 km', hours: '5h 10m' },
    { day: 5, route: 'Höfn → Skaftafell → Skaftafellsjökull → Jökulsárlón → Höfn', km: '243 km', hours: '3h 10m' },
    { day: 6, route: 'Höfn → Stokksnes → Djúpivogur → Egilsstaðir → Grjótagjá → Mývatn', km: '365 km', hours: '5h 15m' },
    { day: 7, route: 'Mývatn → Dettifoss → Krafla → Hverir → Earth Lagoon → Mývatn', km: '131 km', hours: '2h' },
    { day: 8, route: 'Mývatn → Goðafoss → Akureyri → Blönduós → Borgarnes', km: '396 km', hours: '4h 55m' },
    { day: 9, route: 'Borgarnes → Hraunfossar → Deildartunguhver → Troll Garden → Borgarnes', km: '123 km', hours: '1h 45m' },
    { day: 10, route: 'Borgarnes → Kirkjufell → Djúpalónssandur → Arnarstapi → Ytri Tunga → Borgarnes', km: '303 km', hours: '4h 10m' },
    { day: 11, route: 'Borgarnes → Nátthagi → Reykjavík', km: '182 km', hours: '2h 45m' },
    { day: 12, route: 'Reykjavík → KEF', km: '47 km', hours: '45m' }
  ],
  budgetSummary: {
    flights: {
      title: { pl: 'Loty', en: 'Flights' },
      content: { pl: 'Wizz Air KTW-KEF: 9,352 PLN', en: 'Wizz Air KTW-KEF: 9,352 PLN' }
    },
    carRental: {
      title: { pl: 'Wypożyczenie auta', en: 'Car Rental' },
      content: { pl: 'LOTUS Car Rental: 8,820 PLN', en: 'LOTUS Car Rental: 8,820 PLN' }
    },
    accommodations: {
      title: { pl: 'Noclegi razem', en: 'Accommodations Total' },
      content: {
        pl: '29,433 PLN dla 2 rodzin = ~15,000 PLN na rodzinę',
        en: '29,433 PLN for 2 families = ~15,000 PLN per family'
      }
    },
    oneFamilySummary: {
      title: { pl: 'Podsumowanie kosztów podstawowych dla 1 rodziny', en: 'Basic Cost Summary for 1 Family' },
      total: '32,889 PLN',
      totalApprox: '(~32,889 PLN)',
      totalLabel: { pl: 'Szacowany koszt (1 rodzina)', en: 'Estimated Total (1 family)' },
      items: [
        {
          label: { pl: '1. Loty (Wizz Air)', en: '1. Flights (Wizz Air)' },
          value: '9,352 PLN'
        },
        {
          label: { pl: '2. Samochód (Lotus Car Rental)', en: '2. Car (Lotus Car Rental)' },
          value: '8,820 PLN'
        },
        {
          label: { pl: '3. Noclegi (50% z 29,433 PLN)', en: '3. Accommodations (50% of 29,433 PLN)' },
          value: '14,717 PLN'
        }
      ],
      note: {
        pl: 'Informacja: Są to podstawowe koszty dla 1 rodziny (loty, wynajem auta oraz noclegi). Zestawienie nie uwzględnia kosztów paliwa, wyżywienia, biletów wstępu na atrakcje (np. baseny termalne) oraz bieżących wydatków na miejscu.',
        en: 'Note: These are the basic costs for 1 family (flights, car rental, and accommodations). The summary does not include fuel, groceries/dining, admission to paid attractions (e.g. geothermal spas), or daily on-site expenses.'
      }
    }
  },
  accommodations: [
    { dates: { pl: '26.07 - 29.07 (3 noclegi)', en: '26.07 - 29.07 (3 nights)' }, hub: 'Árhús Cottage & Camping, Hella', price: '7,101 PLN', link: 'https://www.booking.com/hotel/is/arhus-cottage-and-camping.pl.html' },
    { dates: { pl: '29.07 - 31.07 (2 noclegi)', en: '29.07 - 31.07 (2 nights)' }, hub: 'Höfn Cottages', price: '4,919 PLN', link: 'https://www.booking.com/hotel/is/hofn-cottages.pl.html' },
    { dates: { pl: '31.07 - 02.08 (2 noclegi)', en: '31.07 - 02.08 (2 nights)' }, hub: 'Vogar Travel Service, Mývatn', price: '7,500 PLN', link: 'https://www.booking.com/hotel/is/vogahraun-guesthouse.pl.html' },
    { dates: { pl: '02.08 - 05.08 (3 noclegi)', en: '02.08 - 05.08 (3 nights)' }, hub: 'Lækjarkot Rooms and Cottages, Borgarnes', price: '6,091 PLN', link: 'https://www.booking.com/hotel/is/laekjarkot-mobile-homes-and-rooms.pl.html' },
    { dates: { pl: '05.08 - 06.08 (1 nocleg)', en: '05.08 - 06.08 (1 night)' }, hub: 'Hótel Ísland Spa & Wellness, Reykjavík', price: '3,822 PLN', link: 'https://www.booking.com/hotel/is/hotel-island.pl.html' }
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
          'Elektryczna suszarki do butów'

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
          'Kawa, kakao, herbata, kawiarka, kubki metalowe',
          'Sól, cukier, kostki bulionowe',
          'Liofilizaty'
        ],
        en: [
          'Daypack with rain cover',
          'Thermos food flask, spork, pocket knife',
          'Thermos beverage flask',
          'Water bottle',
          'Coffee, cocoa, tea, French press, metal mugs',
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
