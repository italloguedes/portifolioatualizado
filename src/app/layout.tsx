import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Itallo Guedes - Desenvolvedor Full Stack",
  description: "Portfólio de desenvolvedor com foco em tecnologia e inovação",
  keywords: ["desenvolvedor", "full stack", "web", "react", "next.js", "typescript"],
  authors: [{ name: "Itallo Guedes" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0f0f0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="fixed inset-0 bg-gradient-to-b from-dark-300/50 via-dark-200/50 to-dark-100/50 backdrop-blur-sm"></div>
        <main className="relative min-h-screen bg-gradient-to-b from-dark-300 via-dark-200 to-dark-100 text-white">
          <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 via-transparent to-transparent opacity-50"></div>
          {children}
        </main>
      </body>
    </html>
  );
}
