import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  location: string
  imageSrc: string
}

export function TestimonialCard({ quote, author, role, location, imageSrc }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <span className="absolute -top-2 -left-1 text-6xl text-amber-300 opacity-50">"</span>
            <p className="relative text-muted-foreground z-10">{quote}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 border-2 border-background">
            <AvatarImage src={imageSrc || "/placeholder.svg"} alt={author} />
            <AvatarFallback>
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">
              {role}, {location}
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
