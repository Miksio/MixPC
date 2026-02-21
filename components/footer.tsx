'use client'
import { Headphones, MessageCircle, Phone, Shield, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <a href="/" className="flex items-center">
                <img src="mixpc_logo_f2.png" alt="MixPC" className="h-16 md:h-16 lg:h-16" />
              </a>
            </div>
            <p className="text-secondary-foreground/70 text-sm">
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">{t.footer.contact}</h3>
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
            <h3 className="font-semibold text-secondary-foreground mb-4">{t.footer.availability}</h3>
            <div className="flex items-center gap-3 mb-4 rounded-lg bg-primary/10 p-3">
              <Headphones className="h-8 w-8 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-secondary-foreground">{t.footer.available247}</p>
                <p className="text-xs text-secondary-foreground/60">{t.footer.available247Desc}</p>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>{t.footer.whatsappAvailable}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                <Phone className="h-4 w-4 text-primary" />
                <span>{t.footer.phoneAvailable}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                <Shield className="h-4 w-4 text-primary" />
                <span>{t.footer.warrantyInfo}</span>
              </li>
            </ul>
          </div>
          
          <div className="md:ml-14 lg:ml-16">
            <h3 className="font-semibold text-secondary-foreground mb-4">{t.footer.links}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#uslugi" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#cennik" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <a href="#jak-dzialamy" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  {t.nav.how}
                </a>
              </li>
              <li>
                <a href="#opinie" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  {t.nav.testimonials}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/10 pt-8">
          <p className="text-center text-sm text-secondary-foreground/50">
            {t.footer.copyright.replace("{year}", new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  )
}
