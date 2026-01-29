import { Card, CardContent } from "@/components/ui/card"
import { 
  Monitor, 
  Laptop, 
  Smartphone, 
  HardDrive, 
  Wifi, 
  Shield, 
  Cpu, 
  Printer,
  Database,
  Wrench
} from "lucide-react"

const services = [
  {
    icon: Laptop,
    title: "Naprawa laptopów",
    description: "Wymiana matrycy, klawiatury, baterii. Naprawy płyt głównych."
  },
  {
    icon: Monitor,
    title: "Naprawa komputerów",
    description: "Diagnostyka, wymiana podzespołów, modernizacja sprzętu."
  },
  {
    icon: Smartphone,
    title: "Naprawa telefonów",
    description: "Wymiana wyświetlacza, baterii, gniazda ładowania."
  },
  {
    icon: Shield,
    title: "Usuwanie wirusów",
    description: "Czyszczenie systemu, instalacja antywirusa, zabezpieczenie danych."
  },  
  {
    icon: Cpu,
    title: "Instalacja systemu",
    description: "Instalacja Windows, Linux, macOS. Konfiguracja programów."
  },
  {
    icon: Wrench,
    title: "Składanie komputerów",
    description: "Dobór podzespołów, montaż i konfiguracja komputera na zamówienie."
  }
]

export function ServicesSection() {
  return (
    <section id="uslugi" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Nasze usługi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferujemy kompleksowe usługi naprawy i serwisu sprzętu komputerowego. 
            Wszystko z dojazdem do klienta.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
