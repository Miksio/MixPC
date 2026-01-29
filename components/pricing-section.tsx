import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const pricingItems = [
  {
    service: "Diagnostyka komputera",
    price: "0 zł",
    note: "bezpłatnie przy naprawie"
  },
  {
    service: "Instalacja systemu Windows",
    price: "od 150 zł",
    note: "wraz z konfiguracją"
  },
  {
    service: "Czyszczenie laptopa",
    price: "od 100 zł",
    note: "termopasty + dmuchanie"
  },
  {
    service: "Usunięcie wirusów",
    price: "od 120 zł",
    note: "pełne czyszczenie"
  },
  {
    service: "Wymiana dysku na SSD",
    price: "od 80 zł",
    note: "bez ceny dysku"
  },
  {
    service: "Naprawa laptopa",
    price: "od 150 zł",
    note: "zależnie od usterki"
  },  
  {
    service: "Dojazd do klienta",
    price: "od 30 zł",
    note: "zależnie od lokalizacji"
  }
]

export function PricingSection() {
  return (
    <section id="cennik" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Cennik usług
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Przejrzyste ceny bez ukrytych kosztów. Ostateczna wycena zawsze przed naprawą.
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="border-b border-border bg-muted/50">
            <CardTitle className="text-center text-secondary">Przykładowe ceny</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {pricingItems.map((item) => (
                <div key={item.service} className="flex items-center justify-between px-6 py-4 hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="font-medium text-secondary">{item.service}</p>
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary text-lg">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Potrzebujesz wyceny indywidualnej? Zadzwoń, chętnie pomożemy!
          </p>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
            <a href="tel:+48123456789">
              Zapytaj o cenę
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
