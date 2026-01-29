import { MapPin, Car, Clock } from "lucide-react"

export function ServiceAreaSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
                Obszar działania
              </h2>
              <p className="text-secondary-foreground/80 mb-8 text-pretty">
                Dojeżdżamy do klientów na terenie całego województwa. 
                Większość wizyt realizujemy tego samego lub następnego dnia roboczego.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary-foreground/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-foreground">Główne miasto + okolice</h3>
                    <p className="text-sm text-secondary-foreground/70">
                      Gdańsk, Gdynia, Sopot i okolice do 30 km
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary-foreground/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Car className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-foreground">Dojazd w cenie od 30 zł</h3>
                    <p className="text-sm text-secondary-foreground/70">
                      Cena dojazdu zależna od odległości. W centrum często gratis!
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary-foreground/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-foreground">Ekspresowy dojazd</h3>
                    <p className="text-sm text-secondary-foreground/70">
                      Pilne sprawy? Możliwy dojazd w ciągu 1-2 godzin od zgłoszenia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full p-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-2 border-dashed border-primary/30 animate-pulse" />
                    <div className="absolute w-32 h-32 rounded-full border-2 border-dashed border-primary/50" />
                    <div className="absolute w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-1/4 left-1/4 px-3 py-1 bg-card rounded-full text-xs font-medium text-secondary shadow-md">
                    Sopot
                  </div>
                  <div className="absolute top-1/3 right-1/4 px-3 py-1 bg-card rounded-full text-xs font-medium text-secondary shadow-md">
                    Gdynia
                  </div>
                  <div className="absolute bottom-1/3 left-1/3 px-3 py-1 bg-card rounded-full text-xs font-medium text-secondary shadow-md">
                    Gdańsk
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
