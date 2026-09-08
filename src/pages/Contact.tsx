import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({
        title: t("contact.errorTitle"),
        description: result.error.issues[0]?.message ?? "Invalid form",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      toast({
        title: t("contact.successTitle"),
        description: t("contact.successDesc"),
      });
    }, 700);
  };

  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-20 md:py-28">
        <div className="container max-w-3xl text-center animate-fade-up">
          <span className="mb-4 inline-block rounded-full border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {t("contact.badge")}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t("contact.title")}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-foreground">{t("contact.getInTouch")}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {t("contact.reachUs")}
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t("contact.email")}</p>
                  <a href="mailto:contact@xaitechnology.com" className="text-sm text-muted-foreground transition-smooth hover:text-foreground">
                    contact@xaitechnology.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t("contact.phone")}</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 010-2024</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t("contact.office")}</p>
                  <p className="text-sm text-muted-foreground">{t("contact.officeValue")}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-foreground">{t("contact.followUs")}</p>
              <div className="mt-3 flex gap-3">
                {[Linkedin, Twitter, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="rounded-full border border-border p-2 text-muted-foreground transition-smooth hover:border-foreground hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-8 shadow-soft lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">{t("contact.nameLabel")}</Label>
                <Input
                  id="name"
                  value={form.name}
                  maxLength={100}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t("contact.namePlaceholder")}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("contact.emailLabel")}</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  maxLength={255}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t("contact.emailPlaceholder")}
                  required
                />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">{t("contact.messageLabel")}</Label>
              <Textarea
                id="message"
                rows={6}
                value={form.message}
                maxLength={1000}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t("contact.messagePlaceholder")}
                required
              />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={submitting}>
              {submitting ? t("contact.sending") : (<>{t("contact.sendMessage")} <Send className="ms-1.5 h-4 w-4" /></>)}
            </Button>
          </form>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="Office location"
              src="https://www.google.com/maps?q=San+Francisco&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;