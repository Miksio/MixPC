import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <a href="/" className="flex items-center">
                <img src="mixpc_logo.png" alt="MixPC" className="h-16 md:h-18 lg:h-20 object-contain" />
              </a>
            </div>
            <p className="text-secondary-foreground/70 text-sm">
              Profesjonalny mobilny serwis komputerowy z dojazdem do klienta. 
              Szybko, tanio i skutecznie.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+48123456789" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  +48 123 456 789
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@techpomoc.pl" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  kontakt@MixPC.pl
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                  <MapPin className="h-4 w-4" />
                  Trójmiasto, Polska
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Godziny pracy</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                <Clock className="h-4 w-4" />
                <span>Pn-Pt: 8:00-20:00</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                <Clock className="h-4 w-4" />
                <span>Sobota: 9:00-16:00</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                <Clock className="h-4 w-4" />
                <span>Niedziela: zamknięte</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <a href="#uslugi" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Usługi
                </a>
              </li>
              <li>
                <a href="#cennik" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Cennik
                </a>
              </li>
              <li>
                <a href="#jak-dzialamy" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Jak działamy
                </a>
              </li>
              <li>
                <a href="#opinie" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Opinie
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/10 pt-8">
          <p className="text-center text-sm text-secondary-foreground/50">
            © {new Date().getFullYear()} MixPC. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
