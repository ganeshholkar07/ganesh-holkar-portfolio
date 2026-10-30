import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Ganesh Holkar | Freelance Web Development & Technical Consulting",
  description: "Freelance web development and technical delivery support across React, Next.js, Node.js, Python, Django, PHP and headless CMS platforms.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
