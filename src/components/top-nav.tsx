import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function TopNav() {
  const items = [
    { href: "#work", label: "Work" },
    { href: "#cur8", label: "Cur8" },
    { href: "#metera", label: "Metera" },
    { href: "#visiplay", label: "Visiplay" },
    { href: "#figma", label: "Figma" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b">
      <div className="container h-14 flex items-center justify-between">
        <a href="#home" className="font-semibold">Paulo Díaz</a>
        <NavigationMenu>
          <NavigationMenuList>
            {items.map((it) => (
              <NavigationMenuItem key={it.href}>
                <NavigationMenuLink asChild>
                  <a href={it.href} className="px-3 py-1 text-sm hover:underline">{it.label}</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
