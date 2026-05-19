"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/lib/language-context"

function ThankYouContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-primary/10 p-4">
            <CheckCircle className="h-16 w-16 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
          {t.thankYou.title}
        </h1>
        <p className="text-muted-foreground mb-8 text-pretty leading-relaxed">
          {t.thankYou.message}
        </p>
        <Button asChild size="lg">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.thankYou.backHome}
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <LanguageProvider>
      <ThankYouContent />
    </LanguageProvider>
  )
}
