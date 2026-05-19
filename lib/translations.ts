export type Language = "pl" | "en"

export const translations = {
  pl: {
    header: {
      services: "Usługi",
      howWeWork: "Jak działamy",
      pricing: "Cennik",
      reviews: "Opinie",
      faq: "FAQ",
      callNow: "Zadzwoń teraz",
      openMenu: "Otwórz menu",
      closeMenu: "Zamknij menu",
    },
    nav: {
      services: "Usługi",
      how: "Jak działamy",
      pricing: "Cennik",
      testimonials: "Opinie",
      faq: "FAQ",
    },
    call: {
      callNow: "Zadzwoń teraz",
      phone: "+48 691 321 515",
    },
    contactForm: {
      contactUs: "Skontaktuj się z nami",
      getQuote: "Poproś o wycenę",
      title: "Formularz kontaktowy",
      description: "Wypełnij formularz, a skontaktujemy się z Tobą tak szybko, jak to możliwe.",
      name: "Imię i nazwisko",
      namePlaceholder: "Wpisz swoje imię i nazwisko",
      email: "Adres e-mail",
      emailPlaceholder: "Wpisz swój adres e-mail",
      phone: "Numer telefonu",
      phonePlaceholder: "Wpisz swój numer telefonu",
      message: "Wiadomość",
      messagePlaceholder: "Opisz, w czym możemy pomóc",
      submit: "Wyślij wiadomość",
      sending: "Wysyłanie...",
      success: "Wiadomość została wysłana.",
      error: "Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę lub zadzwoń do nas.",
    },
    hero: {
      arrival: "Kontakt 24/7",
      titlePart1: "Mobilny serwis komputerowy z",
      titleHighlight: "dojazdem do Ciebie",
      subtitle:
        "Naprawiamy komputery i laptopy. Przyjeżdżamy do domu lub biura. Bez stresu, bez kolejek, bez wychodzenia z domu.",
      seePricing: "Zobacz cennik",
      benefits: {
        freeEstimate: "Bezpłatna wycena",
        warranty: "Gwarancja na naprawę",
        payAfter: "Płatność po naprawie",
      },
    },
    services: {
      title: "Nasze usługi",
      description:
        "Oferujemy kompleksowe usługi naprawy i serwisu sprzętu komputerowego. Wszystko z dojazdem do klienta.",
      items: [
        {
          title: "Naprawa laptopów",
          description: "Wymiana matrycy, klawiatury, baterii. Przywracanie ustawień fabrycznych.",
        },
        {
          title: "Naprawa komputerów",
          description: "Diagnostyka, wymiana podzespołów, modernizacja sprzętu.",
        },
        {
          title: "Zdalna pomoc",
          description: "Szybkie wsparcie przez internet: łączę się z Twoim komputerem i rozwiązuję problem bez wizyty.",
        },
        {
          title: "Usuwanie wirusów",
          description:
            "Czyszczenie systemu, instalacja antywirusa, zabezpieczenie danych.",
        },
        {
          title: "Instalacja systemu",
          description: "Instalacja Windows, Linux, macOS. Konfiguracja programów.",
        },
        {
          title: "Składanie komputerów",
          description:
            "Dobór podzespołów, montaż i konfiguracja komputera na zamówienie.",
        },
      ],
    },
    how: {
      title: "Jak to działa?",
      subtitle: "Trzy proste kroki dzielą Cię od sprawnego sprzętu",
      steps: {
        "1": {
          title: "Zadzwoń do nas",
          description:
            "Opisz problem telefonicznie lub przez WhatsApp. Ustalimy termin wizyty - często tego samego dnia!",
        },
        "2": {
          title: "Naprawiamy",
          description:
            "Przyjeżdżamy i diagnozujemy sprzęt. W razie potrzeby odbieramy go do serwisu, a następnie odwozimy sprawny.",
        },
        "3": {
          title: "Gotowe!",
          description:
            "Odbierasz sprawny sprzęt z gwarancją. Płacisz dopiero po wykonanej naprawie - gotówką lub kartą.",
        },
      },
    },
    pricing: {
      title: "Cennik usług",
      description:
        "Przejrzyste ceny bez ukrytych kosztów. Ostateczna wycena zawsze przed naprawą.",
      categories: [
        {
          name: "Komputery stacjonarne",
          items: [
            { service: "Diagnostyka komputera", price: "0 zł", note: "bezpłatnie przy naprawie" },
            { service: "Instalacja systemu Windows/Linux", price: "od 150 zł", note: "wraz z konfiguracją" },
            { service: "Wymiana dysku na SSD", price: "od 80 zł", note: "bez ceny dysku" },
            { service: "Wymiana podzespołów (RAM, GPU itp.)", price: "od 100 zł", note: "bez ceny podzespołów" },
            { service: "Składanie komputera na zamówienie", price: "od 200 zł", note: "bez ceny podzespołów" },
            { service: "Usunięcie wirusów", price: "od 120 zł", note: "pełne czyszczenie systemu" },
          ],
        },
        {
          name: "Laptopy",
          items: [
            { service: "Czyszczenie laptopa", price: "od 100 zł", note: "termopasty + dmuchanie" },
            { service: "Wymiana matrycy / ekranu", price: "od 200 zł", note: "bez ceny matrycy" },
            { service: "Wymiana klawiatury", price: "od 150 zł", note: "bez ceny klawiatury" },
            { service: "Wymiana baterii", price: "od 100 zł", note: "bez ceny baterii" },
            { service: "Naprawa gniazda ładowania", price: "od 150 zł", note: "lutowanie / wymiana" },
            { service: "Reset systemu (stan fabryczny)", price: "od 150 zł", note: "reset systemu + sterowniki + podstawowa konfiguracja" },
          ],
        },
        {
          name: "Inne usługi",
          items: [
            { service: "Zdalna pomoc", price: "od 50 zł", note: "szybkie wsparcie online" },
            { service: "Odzyskiwanie danych z dysku", price: "od 200 zł", note: "wycena indywidualna" },
            { service: "Instalacja pakietu biurowego", price: "od 50 zł", note: "MS Office, LibreOffice" },
            { service: "Dojazd do klienta", price: "od 20 zł", note: "Śródmieście Gdańska — gratis" },
          ],
        },
      ],
      customQuote: "Potrzebujesz wyceny indywidualnej? Zadzwoń, chętnie pomożemy!",
      disclaimer: "*Cena zależy od stanu sprzętu, czasu pracy i modelu urządzenia.",
      askPrice: "Zapytaj o cenę",
    },
    testimonials: {
      title: "Opinie klientów",
      subtitle: "Zobacz, co mówią o nas nasi zadowoleni klienci",
      translatedNote: "",
    },
    cta: {
      title: "Potrzebujesz pomocy?",
      description:
        "Zadzwoń teraz i umów się na wizytę. Jesteśmy dostępni od poniedziałku do niedzieli.",
      whatsapp: "Napisz na WhatsApp",
      hours: "Możesz do nas dzwonić 24/7",
    },
    thankYou: {
      title: "Dziękujemy za wiadomość",
      message: "Otrzymaliśmy Twoje zgłoszenie i skontaktujemy się z Tobą tak szybko, jak to możliwe.",
      backHome: "Wróć na stronę główną",
    },
    faq: {
      title: "Często zadawane pytania",
      description: "Odpowiedzi na najczęściej zadawane pytania",
      items: [
        { question: "Jak szybko możecie przyjechać?", answer: "W większości przypadków jesteśmy w stanie przyjechać tego samego dnia lub następnego dnia roboczego. W pilnych sprawach możliwy jest dojazd ekspresowy w ciągu 1-2 godzin." },
        { question: "Ile kosztuje dojazd?", answer: "Dojazd w obrębie centrum miasta często jest gratis. Poza centrum cena zaczyna się od 30 zł i zależy od odległości. Dokładną cenę podajemy przy umawianiu wizyty." },
        { question: "Czy mogę zapłacić kartą?", answer: "Tak, akceptujemy płatność gotówką, kartą oraz BLIK. Płatność następuje dopiero po wykonanej naprawie." },
        { question: "Czy dajecie gwarancję na naprawę?", answer: "Tak, na wszystkie naprawy udzielamy gwarancji. Standardowo jest to 3 miesięce, a na wymienione części obowiązuje gwarancja producenta." },
        { question: "Co jeśli sprzęt nie da się naprawic na miejscu?", answer: "W takim przypadku możemy zabrać sprzęt do naszego serwisu i dostarczą go po naprawie. Transport w obie strony jest wliczony w cenę usługi." },
        { question: "Czy muszę płacić jeśli naprawa się nie uda?", answer: "Nie. Jeśli nie uda się naprawic sprzętu, płacisz tylko za diagnostykę (jeśli była płatna). Wycemę podajemy zawsze przed rozpoczęciem naprawy." },
      ],
    },
    serviceArea: {
      title: "Obszar działania",
      description:
        "Dojeżdżamy do klientów na terenie trójmiasta. Większość wizyt realizujemy tego samego lub następnego dnia roboczego.",
      items: {
        main: {
          title: "Główne miasto + okolice",
          description: "Gdańsk, Gdynia, Sopot i okolice do 30 km",
        },
        price: {
          title: "Dojazd od 20 zł",
          description: "Cena dojazdu zależna od odległości. Śródmieście Gdańska — gratis!",
        },
        express: {
          title: "Ekspresowy dojazd",
          description: "Pilne sprawy? Możliwy dojazd w ciągu 1-2 godzin od zgłoszenia.",
        },
      },
      map: {
        sopot: "Sopot",
        gdynia: "Gdynia",
        gdansk: "Gdańsk",
      },
    },
    footer: {
      description:
        "Profesjonalny mobilny serwis komputerowy z dojazdem do klienta. Szybko, tanio i skutecznie.",
      contact: "Kontakt",
      phone24_7: "Kontakt telefoniczny: 24/7",
      availability: "Dostępność",
      available247: "Kontakt 24/7",
      available247Desc: "Dostępni cały tydzień, przez całą dobę.",
      whatsappAvailable: "WhatsApp – szybkie odpowiedzi",
      phoneAvailable: "Telefon – zadzwoń o dowolnej porze",
      warrantyInfo: "Gwarancja na każdą naprawę",
      /*hours: "Godziny pracy",*/
      links: "Szybkie linki",
      /*mondayToFriday: "Pn-Pt: 8:00-20:00",*/
      /*saturday: "Sobota: 9:00-16:00",
      sunday: "Niedziela: zamknięte",*/
      copyright: "© {year} MixPC. Wszystkie prawa zastrzeżone.",
      email: "kontakt@MixPC.pl",
      location: "Trójmiasto, Polska",
    },
  },
  en: {
    header: {
      services: "Services",
      howWeWork: "How we work",
      pricing: "Pricing",
      reviews: "Reviews",
      faq: "FAQ",
      callNow: "Call now",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    nav: {
      services: "Services",
      how: "How it works",
      pricing: "Pricing",
      testimonials: "Reviews",
      faq: "FAQ",
    },
    call: {
      callNow: "Call now",
      phone: "+48 691 321 515",
    },
    contactForm: {
      contactUs: "Contact us",
      getQuote: "Get a quote",
      title: "Contact form",
      description: "Fill out the form and we will get back to you as soon as possible.",
      name: "Full name",
      namePlaceholder: "Enter your full name",
      email: "Email address",
      emailPlaceholder: "Enter your email address",
      phone: "Phone number",
      phonePlaceholder: "Enter your phone number",
      message: "Message",
      messagePlaceholder: "Describe how we can help",
      submit: "Send message",
      sending: "Sending...",
      success: "Your message has been sent.",
      error: "We could not send your message. Please try again in a moment or call us.",
    },
    hero: {
      arrival: "24/7 Contact",
      titlePart1: "Mobile computer service with",
      titleHighlight: "on-site visits",
      subtitle:
        "We repair computers and laptops. We come to your home or office. No stress, no queues, no need to leave your home.",
      seePricing: "See pricing",
      benefits: {
        freeEstimate: "Free estimate",
        warranty: "Repair warranty",
        payAfter: "Pay after repair",
      },
    },
    services: {
      title: "Our services",
      description:
        "We offer comprehensive repair and service of computer equipment. Everything with on-site visits.",
      items: [
        {
          title: "Laptop repair",
          description: "Screen, keyboard, battery replacement, factory reset.",
        },
        {
          title: "Computer repair",
          description: "Diagnostics, component replacement, hardware upgrades.",
        },
        {
          title: "Remote support",
          description:
            "Quick support over the internet: We connect to your computer and solve the problem remotely.",
        },
        {
          title: "Virus removal",
          description:
            "System cleaning, antivirus installation, data protection.",
        },
        {
          title: "OS installation",
          description: "Installation of Windows, Linux, macOS. Software setup.",
        },
        {
          title: "PC building",
          description: "Component selection, assembly and setup of custom PC.",
        },
      ],
    },
    how: {
      title: "How it works",
      subtitle: "Three simple steps to a working device",
      steps: {
        "1": {
          title: "Call us",
          description:
            "Describe the problem by phone or via WhatsApp. We will schedule a visit — often the same day!",
        },
        "2": {
          title: "We repair",
          description:
            "We come and diagnose the device. If needed, we take it to the workshop and deliver it back fixed.",
        },
        "3": {
          title: "Done!",
          description:
            "You receive the working device with warranty. You pay only after the repair — cash or card.",
        },
      },
    },
    pricing: {
      title: "Pricing",
      description:
        "Clear prices without hidden costs. Final estimate always before repair.",
      categories: [
        {
          name: "Desktop Computers",
          items: [
            { service: "Computer diagnostics", price: "Free", note: "free with repair" },
            { service: "Windows/Linux installation", price: "from 150 PLN", note: "including configuration" },
            { service: "SSD upgrade", price: "from 80 PLN", note: "without disk price" },
            { service: "Component replacement (RAM, GPU etc.)", price: "from 100 PLN", note: "without component price" },
            { service: "Custom PC assembly", price: "from 200 PLN", note: "without component price" },
            { service: "Virus removal", price: "from 120 PLN", note: "full system cleanup" },
          ],
        },
        {
          name: "Laptops",
          items: [
            { service: "Laptop cleaning", price: "from 100 PLN", note: "thermal paste + cleaning" },
            { service: "Screen replacement", price: "from 200 PLN", note: "without screen price" },
            { service: "Keyboard replacement", price: "from 150 PLN", note: "without keyboard price" },
            { service: "Battery replacement", price: "from 100 PLN", note: "without battery price" },
            { service: "Charging port repair", price: "from 150 PLN", note: "soldering / replacement" },
            { service: "System reset (factory reset)", price: "from 150 PLN", note: "system reset + drivers + basic configuration" },
          ],
        },
        {
          name: "Other services",
          items: [
            { service: "Remote support", price: "from 50 PLN", note: "quick online assistance" },
            { service: "Data recovery", price: "from 200 PLN", note: "individual quote" },
            { service: "Office software installation", price: "from 50 PLN", note: "MS Office, LibreOffice" },
            { service: "On-site visit", price: "from 20 PLN", note: "Downtown Gdańsk — free" },
          ],
        },

      ],
      customQuote: "Need a custom quote? Call us, we will help!",
      disclaimer: "*Price depends on device condition, work time and model.",
      askPrice: "Ask for price",
    },
    testimonials: {
      title: "Reviews",
      subtitle: "See what our satisfied customers say",
      translatedNote: "Note: these reviews were translated from Polish.",
    },
    cta: {
      title: "Need help?",
      description:
        "Call now and schedule a visit. We are available Monday to Sunday.",
      whatsapp: "Message on WhatsApp",
      hours: "You can call us 24/7",
    },
    thankYou: {
      title: "Thank you for your message",
      message: "We have received your inquiry and will get back to you as soon as possible.",
      backHome: "Back to home",
    },
    faq: {
      title: "Frequently asked questions",
      description: "Answers to the most commonly asked questions",
      items: [
        { question: "How quickly can you arrive?", answer: "In most cases, we can arrive the same day or next business day. For urgent matters, an express visit within 1-2 hours is possible." },
        { question: "How much does the travel fee cost?", answer: "Travel within the city center is often free. Outside the center, prices start from 30 PLN depending on the distance. We provide the exact price when scheduling." },
        { question: "Can I pay by card?", answer: "Yes, we accept cash, card, and BLIK payments. Payment is made only after the repair is completed." },
        { question: "Do you provide a warranty?", answer: "Yes, all repairs come with a warranty. The standard is 3 months, and replaced parts carry the manufacturer's warranty." },
        { question: "What if the device can't be fixed on-site?", answer: "In that case, we can take the device to our workshop and deliver it back after repair. Round-trip transport is included in the service price." },
        { question: "Do I have to pay if the repair fails?", answer: "No. If we can't fix the device, you only pay for diagnostics (if applicable). We always provide a quote before starting the repair." },
      ],
    },
    serviceArea: {
      title: "Service area",
      description:
        "We travel to customers across tricity area. Most visits are scheduled the same or next working day.",
      items: {
        main: {
          title: "Main city + surroundings",
          description: "Gdańsk, Gdynia, Sopot and surroundings up to 30 km",
        },
        price: {
          title: "Travel from 20 PLN",
          description: "Travel cost depends on distance. Downtown Gdańsk — free!",
        },
        express: {
          title: "Express arrival",
          description: "Urgent cases? Possible arrival within 1-2 hours of reporting.",
        },
      },
      map: {
        sopot: "Sopot",
        gdynia: "Gdynia",
        gdansk: "Gdańsk",
      },
    },
    footer: {
      description:
        "Professional mobile computer service with on-site visits. Fast, affordable, and effective.",
      contact: "Contact",
      phone24_7: "Phone contact: 24/7",
      availability: "Availability",
      available247: "Contact 24/7",
      available247Desc: "Available all week, 24 hours a day.",
      whatsappAvailable: "WhatsApp – instant replies",
      phoneAvailable: "Phone – call us anytime",
      warrantyInfo: "Warranty on every repair",
      /*hours: "Opening hours",*/
      links: "Quick links",
      /*mondayToFriday: "Mon-Fri: 8:00-20:00",
      saturday: "Saturday: 9:00-16:00",*/
      /*sunday: "Sunday: closed",*/
      copyright: "© {year} MixPC. All rights reserved.",
      email: "kontakt@MixPC.pl",
      location: "Tricity, Poland",
    },
  },
}
