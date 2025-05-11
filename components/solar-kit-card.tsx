import { Check } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface SolarKitCardProps {
  title: string
  description: string
  capacity: string
  coverage: string
  price: string
  features: string[]
  imageSrc: string
  featured?: boolean
}

export function SolarKitCard({
  title,
  description,
  capacity,
  coverage,
  price,
  features,
  imageSrc,
  featured = false,
}: SolarKitCardProps) {
  return (
    <Card
      className={`flex flex-col overflow-hidden transition-all duration-200 ${featured ? "border-amber-500 dark:border-amber-400 shadow-lg scale-105" : ""}`}
    >
      <div className="relative">
        <img src={imageSrc || "/placeholder.svg"} alt={`${title} Solar Kit`} className="w-full h-48 object-cover" />
        {featured && <Badge className="absolute top-3 right-3 bg-amber-500 hover:bg-amber-600">Most Popular</Badge>}
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Capacity</span>
              <span className="font-medium">{capacity}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Coverage</span>
              <span className="font-medium">{coverage}</span>
            </div>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Features</span>
            <ul className="mt-2 space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-amber-500" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 pt-4">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold">{price}</span>
          <span className="text-sm text-muted-foreground">one-time</span>
        </div>
        <Button className={`w-full ${featured ? "bg-amber-500 hover:bg-amber-600 text-white" : ""}`}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  )
}
