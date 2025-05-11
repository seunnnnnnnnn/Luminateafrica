import Link from "next/link"
import { ArrowRight, ChevronRight, Sun, Zap, Globe, Users, BarChart4, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactForm } from "@/components/contact-form"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Sun className="h-6 w-6 text-amber-500" />
              <span className="font-bold text-xl tracking-tight">LuminateAfrica</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="#vision" className="text-sm font-medium transition-colors hover:text-primary">
                Vision
              </Link>
              <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button variant="outline" size="sm" className="hidden md:flex">
              Partner with us
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Powering Africa's Future with Clean Solar Energy
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Sustainable, affordable solar solutions designed for African communities, businesses, and homes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                    Join the Movement
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Solar panels in an African landscape"
                    className="object-cover w-full h-full"
                    width={1280}
                    height={720}
                  />
                </div>
              </div>
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

        {/* Vision/Mission Section */}
        <section id="vision" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700 dark:bg-amber-800/30 dark:text-amber-500">
                    Our Vision
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Illuminating Africa's Future
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    We envision an Africa where clean, reliable energy is accessible to all, driving economic growth and
                    environmental sustainability.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-amber-500" />
                    <span>100% renewable energy access across Africa by 2040</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-amber-500" />
                    <span>Creating 10,000+ green jobs in local communities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-amber-500" />
                    <span>Reducing carbon emissions by 1 million tons annually</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-amber-500" />
                    <span>Building resilient energy infrastructure for future generations</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Tabs defaultValue="mission" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="mission">Mission</TabsTrigger>
                    <TabsTrigger value="values">Values</TabsTrigger>
                    <TabsTrigger value="impact">Impact</TabsTrigger>
                  </TabsList>
                  <TabsContent value="mission" className="space-y-4 pt-4">
                    <div className="flex items-start space-x-4">
                      <Zap className="mt-1 h-6 w-6 text-amber-500" />
                      <div>
                        <h3 className="font-bold">Empowering Through Energy</h3>
                        <p className="text-muted-foreground">
                          Our mission is to provide affordable, sustainable solar solutions that empower African
                          communities to thrive economically and socially.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="values" className="space-y-4 pt-4">
                    <div className="flex items-start space-x-4">
                      <Globe className="mt-1 h-6 w-6 text-amber-500" />
                      <div>
                        <h3 className="font-bold">Sustainability</h3>
                        <p className="text-muted-foreground">
                          We are committed to environmental stewardship and creating solutions that protect Africa's
                          natural resources.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Users className="mt-1 h-6 w-6 text-amber-500" />
                      <div>
                        <h3 className="font-bold">Community</h3>
                        <p className="text-muted-foreground">
                          We believe in working with local communities, respecting cultural contexts, and creating
                          shared value.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="impact" className="space-y-4 pt-4">
                    <div className="flex items-start space-x-4">
                      <BarChart4 className="mt-1 h-6 w-6 text-amber-500" />
                      <div>
                        <h3 className="font-bold">Measurable Change</h3>
                        <p className="text-muted-foreground">
                          We track and report our social, economic, and environmental impact, ensuring transparency and
                          accountability.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700 dark:bg-amber-800/30 dark:text-amber-500">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Illuminate Together</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or ready to bring solar power to your community? Reach out to our team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and our team will get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-800/30">
                      <Sun className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">Headquarters</h3>
                      <p className="text-muted-foreground">
                        Innovation Hub, Westlands
                        <br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-800/30">
                      <Globe className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">Regional Offices</h3>
                      <p className="text-muted-foreground">
                        Lagos, Nigeria • Accra, Ghana
                        <br />
                        Johannesburg, South Africa • Kigali, Rwanda
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-800/30">
                      <Mail className="h-6 w-6 text-amber-600 dark:text-amber-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">Email Us</h3>
                      <p className="text-muted-foreground">
                        info@luminateafrica.com
                        <br />
                        support@luminateafrica.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-amber-500" />
            <p className="text-sm text-muted-foreground">© 2025 LuminateAfrica. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Sustainability
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
