"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/lib/language-context"
import { AlertCircle, Mail } from "lucide-react"

interface ContactFormModalProps {
  triggerVariant?: "default" | "outline" | "ghost"
  triggerClassName?: string
  triggerLabel?: "contactUs" | "getQuote"
}

export function ContactFormModal({
  triggerVariant = "default",
  triggerClassName = "",
  triggerLabel = "contactUs",
}: ContactFormModalProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const router = useRouter()
  const { t } = useLanguage()
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      if (!accessKey) {
        throw new Error("Missing Web3Forms access key")
      }

      formData.append("access_key", accessKey)
      formData.append("subject", "Nowe zgłoszenie z formularza MixPC")
      formData.append("from_name", "MixPC Landing Page")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null

      if (!response.ok) {
        throw new Error(data?.message || "Failed to submit form")
      }

      if (!data?.success) {
        throw new Error(data?.message || "Failed to submit form")
      }

      form.reset()
      setOpen(false)
      router.push("/dziekujemy")
    } catch (error) {
      const message = error instanceof Error ? error.message : t.contactForm.error
      setSubmitError(message || t.contactForm.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={triggerVariant} className={triggerClassName}>
          <Mail className="mr-2 h-4 w-4" />
          {t.contactForm[triggerLabel]}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t.contactForm.title}</DialogTitle>
          <DialogDescription>{t.contactForm.description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {submitError ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{submitError}</AlertDescription>
            </Alert>
          ) : null}
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">
              {t.contactForm.name} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder={t.contactForm.namePlaceholder}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">
              {t.contactForm.email} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t.contactForm.emailPlaceholder}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">{t.contactForm.phone}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder={t.contactForm.phonePlaceholder}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">
              {t.contactForm.message} <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t.contactForm.messagePlaceholder}
              rows={4}
              required
            />
          </div>
          <Button type="submit" className="w-full mt-2" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                {t.contactForm.sending}
              </span>
            ) : (
              t.contactForm.submit
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
