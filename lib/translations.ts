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
      phone: "+48 123 456 789",
    },
    hero: {
      arrival: "Dojazd w ciągu 60 minut",
      titlePart1: "Mobilny serwis komputerowy z",
      titleHighlight: "dojazdem do Ciebie",
      subtitle:
        "Naprawiamy komputery, laptopy i telefony. Przyjeżdżamy do domu lub biura. Bez stresu, bez kolejek, bez wychodzenia z domu.",
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
          description: "Wymiana matrycy, klawiatury, baterii. Naprawy płyt głównych.",
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
            "Przyjeżdżamy pod wskazany adres. Diagnozujemy i naprawiamy sprzęt na miejscu lub zabieramy do serwisu.",
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
      cardTitle: "Przykładowe ceny",
      items: {
        diagnostics: { service: "Diagnostyka komputera", price: "0 zł", note: "bezpłatnie przy naprawie" },
        install: { service: "Instalacja systemu Windows", price: "od 150 zł", note: "wraz z konfiguracją" },
        clean: { service: "Czyszczenie laptopa", price: "od 100 zł", note: "termopasty + dmuchanie" },
        virus: { service: "Usunięcie wirusów", price: "od 120 zł", note: "pełne czyszczenie" },
        ssd: { service: "Wymiana dysku na SSD", price: "od 80 zł", note: "bez ceny dysku" },
        remote: { service: "Zdalna pomoc", price: "od 100 zł", note: "szybkie wsparcie online" },
        repair: { service: "Naprawa laptopa", price: "od 150 zł", note: "zależnie od usterki" },
        travel: { service: "Dojazd do klienta", price: "od 30 zł", note: "zależnie od lokalizacji" },
      },
      askPrice: "Potrzebujesz wyceny indywidualnej? Zadzwoń, chętnie pomożemy!",
      askButton: "Zapytaj o cenę",
    },
    testimonials: {
      title: "Opinie klientów",
      subtitle: "Zobacz, co mówią o nas nasi zadowoleni klienci",
    },
    cta: {
      title: "Potrzebujesz pomocy?",
      description:
        "Zadzwoń teraz i umów się na wizytę. Jesteśmy dostępni od poniedziałku do soboty.",
      whatsapp: "Napisz na WhatsApp",
      hours: "Pn-Pt: 8:00-20:00 | Sb: 9:00-16:00",
    },
    faq: {
      title: "Często zadawane pytania",
      description: "Odpowiedzi na najczęściej zadawane pytania",
      items: [
        { question: "Jak szybko możecie przyjęchać?", answer: "W większości przypadków jesteśmy w stanie przyjęchać tego samego dnia lub następnego dnia roboczego. W pilnych sprawach możliwy jest dojazd ekspresowy w ciągu 1-2 godzin." },
        { question: "Ile kosztuje dojazd?", answer: "Dojazd w obrębie centrum miasta często jest gratis. Poza centrum cena zaczyna się od 30 zł i zależy od odległości. Dokładną cenę podajemy przy umawianiu wizyty." },
        { question: "Czy mogę zapłacić kartą?", answer: "Tak, akceptujemy płatność gotówką, kartą oraz BLIK. Płatność następuje dopiero po wykonanej naprawie." },
        { question: "Czy dajecie gwarancję na naprawę?", answer: "Tak, na wszystkie naprawy udzielamy gwarancji. Standardowo jest to 3 miesięce, a na wymienione części obowiązuje gwarancja producenta." },
        { question: "Co jeśli sprzęt nie da się naprawic na miejscu?", answer: "W takim przypadku możemy zabrać sprzęt do naszego serwisu i dostarczą go po naprawie. Transport w obie strony jest wliczony w cenę usługi." },
        { question: "Czy naprawiacie komputery Apple / Mac?", answer: "Tak, naprawiamy również komputery Apple - MacBooki, iMaki oraz Mac Mini. Instalujemy też systemy macOS oraz wykonujemy diagnostykę." },
        { question: "Czy muszę płacić jeśli naprawa się nie uda?", answer: "Nie. Jeśli nie uda się naprawic sprzętu, płacisz tylko za diagnostykę (jeśli była płatna). Wycemę podajemy zawsze przed rozpoczęciem naprawy." },
        { question: "Czy wystawiacie faktury?", answer: "Tak, wystawiamy faktury VAT dla firm oraz paragony dla klientów indywidualnych. Prosimy o informację przy umawianiu wizyty." },
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
          title: "Dojazd od 30 zł",
          description: "Cena dojazdu zależna od odległości. W centrum często gratis!",
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
      hours: "Godziny pracy",
      links: "Szybkie linki",
      mondayToFriday: "Pn-Pt: 8:00-20:00",
      saturday: "Sobota: 9:00-16:00",
      sunday: "Niedziela: zamknięte",
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
      testimonials: "Testimonials",
      faq: "FAQ",
    },
    call: {
      callNow: "Call now",
      phone: "+48 123 456 789",
    },
    hero: {
      arrival: "Arrival within 60 minutes",
      titlePart1: "Mobile computer service with",
      titleHighlight: "on-site visits",
      subtitle:
        "We repair computers, laptops and phones. We come to your home or office. No stress, no queues, no need to leave your home.",
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
          description: "Screen, keyboard, battery replacement. Motherboard repairs.",
        },
        {
          title: "Computer repair",
          description: "Diagnostics, component replacement, hardware upgrades.",
        },
        {
          title: "Remote support",
          description:
            "Quick support over the internet: I connect to your computer and solve the problem remotely.",
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
            "We come to the address provided. We diagnose and repair on-site or take the device to the service.",
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
      cardTitle: "Sample prices",
      items: {
        diagnostics: { service: "Computer diagnostics", price: "0 PLN", note: "free with repair" },
        install: { service: "Windows installation", price: "from 150 PLN", note: "including configuration" },
        clean: { service: "Laptop cleaning", price: "from 100 PLN", note: "thermal paste + cleaning" },
        virus: { service: "Virus removal", price: "from 120 PLN", note: "full cleanup" },
        ssd: { service: "SSD upgrade", price: "from 80 PLN", note: "without disk price" },
        remote: { service: "Remote support", price: "from 100 PLN", note: "quick online support" },
        repair: { service: "Laptop repair", price: "from 150 PLN", note: "depending on fault" },
        travel: { service: "On-site visit", price: "from 30 PLN", note: "depending on location" },
      },
      askPrice: "Need a custom quote? Call us, we will help!",
      askButton: "Ask for price",
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "See what our satisfied customers say",
    },
    cta: {
      title: "Need help?",
      description:
        "Call now and schedule a visit. We are available Monday to Saturday.",
      whatsapp: "Message on WhatsApp",
      hours: "Mon-Fri: 8:00-20:00 | Sat: 9:00-16:00",
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
        { question: "Do you repair Apple / Mac computers?", answer: "Yes, we also repair Apple devices - MacBooks, iMacs, and Mac Minis. We also install macOS and perform diagnostics." },
        { question: "Do I have to pay if the repair fails?", answer: "No. If we can't fix the device, you only pay for diagnostics (if applicable). We always provide a quote before starting the repair." },
        { question: "Do you issue invoices?", answer: "Yes, we issue VAT invoices for businesses and receipts for individual customers. Please let us know when scheduling your visit." },
      ],
    },
    serviceArea: {
      title: "Service area",
      description:
        "We travel to customers across the tricity. Most visits are scheduled the same or next working day.",
      items: {
        main: {
          title: "Main city + surroundings",
          description: "Gdańsk, Gdynia, Sopot and surroundings up to 30 km",
        },
        price: {
          title: "Travel from 30 PLN",
          description: "Travel cost depends on distance. Often free in the city center!",
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
      hours: "Opening hours",
      links: "Quick links",
      mondayToFriday: "Mon-Fri: 8:00-20:00",
      saturday: "Saturday: 9:00-16:00",
      sunday: "Sunday: closed",
      copyright: "© {year} MixPC. All rights reserved.",
      email: "kontakt@MixPC.pl",
      location: "Tricity, Poland",
    },
  },
}
