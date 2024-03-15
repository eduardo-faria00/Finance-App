import Link from "next/link";
import { usePathname } from "next/navigation";

interface CustomLinkProperties {
  href: string;
  children: React.ReactNode;
}

export default function CustomLink({ href, children }: CustomLinkProperties) {
  const pathName = usePathname();

  return (
    <Link
      className={`flex gap-3 rounded-lg p-3 hover:bg-primary-foreground/10 transition-colors ${
        pathName === href && "bg-primary-foreground/10"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
