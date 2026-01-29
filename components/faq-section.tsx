import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Jak szybko możecie przyjechać?",
    answer: "W większości przypadków jesteśmy w stanie przyjechać tego samego dnia lub następnego dnia roboczego. W pilnych sprawach możliwy jest dojazd ekspresowy w ciągu 1-2 godzin."
  },
  {
    question: "Ile kosztuje dojazd?",
    answer: "Dojazd w obrębie centrum miasta często jest gratis. Poza centrum cena zaczyna się od 30 zł i zależy od odległości. Dokładną cenę podajemy przy umawianiu wizyty."
  },
  {
    question: "Czy mogę zapłacić kartą?",
    answer: "Tak, akceptujemy płatność gotówką, kartą oraz BLIK. Płatność następuje dopiero po wykonanej naprawie."
  },
  {
    question: "Czy dajecie gwarancję na naprawę?",
    answer: "Tak, na wszystkie naprawy udzielamy gwarancji. Standardowo jest to 3 miesiące, a na wymienione części obowiązuje gwarancja producenta."
  },
  {
    question: "Co jeśli sprzęt nie da się naprawić na miejscu?",
    answer: "W takim przypadku możemy zabrać sprzęt do naszego serwisu i dostarczyć go po naprawie. Transport w obie strony jest wliczony w cenę usługi."
  },
  {
    question: "Czy naprawiacie komputery Apple / Mac?",
    answer: "Tak, naprawiamy również komputery Apple - MacBooki, iMaki oraz Mac Mini. Instalujemy też systemy macOS oraz wykonujemy diagnostykę."
  },
  {
    question: "Czy muszę płacić jeśli naprawa się nie uda?",
    answer: "Nie. Jeśli nie uda się naprawić sprzętu, płacisz tylko za diagnostykę (jeśli była płatna). Wycenę podajemy zawsze przed rozpoczęciem naprawy."
  },
  {
    question: "Czy wystawiacie faktury?",
    answer: "Tak, wystawiamy faktury VAT dla firm oraz paragony dla klientów indywidualnych. Prosimy o informację przy umawianiu wizyty."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Często zadawane pytania
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Odpowiedzi na najczęściej zadawane pytania
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-secondary hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
