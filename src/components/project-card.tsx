import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  title: string;
  blurb: string;
  outcome?: string;
  badges?: string[];
  href?: string;
  image?: string; // e.g. "/images/metera.png"
  alt?: string;
};

export default function ProjectCard({
  title, blurb, outcome, badges = [], href = "#", image, alt = "",
}: ProjectCardProps) {
  return (
    <a href={href} className="group">
      <Card className="transition hover:shadow-lg">
        {image ? (
          <div className="relative w-full h-44">
            <Image
              src={image}
              alt={alt || `${title} cover`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover rounded-t-lg transition group-hover:scale-[1.02]"
              priority={false}
            />
          </div>
        ) : null}
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">{blurb}</p>
          {outcome ? <p className="text-sm font-medium">{outcome}</p> : null}
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <Badge key={b} variant="secondary">{b}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
