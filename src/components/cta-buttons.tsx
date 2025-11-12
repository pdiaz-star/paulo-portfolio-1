"use client";
import { Button } from "@/components/ui/button";

export function CTAButtons() {
  return (
    <div className="flex gap-3">
      <Button asChild>
        <a href="#cur8">View Cur8 Case</a>
      </Button>
      <Button variant="outline" asChild>
        <a href="#contact">Contact</a>
      </Button>
    </div>
  );
}
