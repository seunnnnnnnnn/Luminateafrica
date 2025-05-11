import Link from "next/link"
import { Menu, Sun, Mail } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

return (
<div className="flex min-h-screen flex-col">
{/* Header */}
<header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
<div className="container flex h-16 items-center justify-between">
<div className="flex items-center gap-4">
<Link href="/" className="flex items-center space-x-2">
<Sun className="h-6 w-6 text-amber-500" />
<span className="font-bold text-xl tracking-tight">LuminateAfrica</span>
</Link>
</div>
        {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-4">
        <Link href="#vision" className="text-sm font-medium hover:text-primary">Vision</Link>
        <Link href="#contact" className="text-sm font-medium hover:text-primary">Contact</Link>
        <ModeToggle />
        <Button
          variant="outline"
          size="sm"
          onClick={() => (window.location.href = "mailto:info@luminateafrica.com")}
        >
          Partner with us
        </Button>
        <Button size="sm" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
          Get Started
        </Button>
      </nav>

      {/* Mobile Hamburger */}
      <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <Menu className="h-6 w-6" />
      </button>
    </div>

    {/* Mobile Dropdown */}
    {mobileMenuOpen && (
      <div className="md:hidden bg-background border-t">
        <div className="flex flex-col p-4 space-y-2">
          <Link href="#vision" onClick={() => setMobileMenuOpen(false)}>Vision</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              window.location.href = "mailto:info@luminateafrica.com"
            }}
          >
            Partner with us
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    )}
  </header>

  {/* Hero Section */}
  <main className="flex-1">
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/hero-solar-africa.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Powering Africa's Future with Clean Solar Energy
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Sustainable, affordable solar solutions designed for African communities, businesses, and homes.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white"
            onClick={() => window.location.href = "mailto:info@luminateafrica.com"}
          >
            Partner with us
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>

    {/* Coming Soon Banner */}
    <section className="w-full py-16 text-center bg-yellow-50 dark:bg-yellow-900">
      <h2 className="text-3xl font-bold text-amber-600">We’re Launching Soon</h2>
      <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
        LuminateAfrica is preparing to transform energy access across the continent. Be part of the journey.
      </p>
    </section>

    {/* Vision Section */}
    <section id="vision" className="w-full py-20 bg-muted text-center px-6">
      <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        We envision an Africa where clean, reliable energy is accessible to all—driving growth, opportunity,
        and sustainability across the continent.
      </p>
    </section>

    {/* Contact Section */}
    <section id="contact" className="w-full py-24 bg-white dark:bg-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let’s Illuminate Together</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 text-lg">
            Get in touch with our team. We’ll respond within 24 hours.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Use the form below or email us directly at <strong>info@luminateafrica.com</strong>.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </main>

  {/* Footer */}
  <footer className="w-full border-t py-6 bg-background">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Sun className="h-5 w-5 text-amber-500" />
        <p className="text-sm">© 2025 LuminateAfrica. All rights reserved.</p>
      </div>
      <div className="flex gap-4 text-sm text-muted-foreground">
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of Service</Link>
        <Link href="#">Sustainability</Link>
      </div>
    </div>
  </footer>
</div>
)
}
