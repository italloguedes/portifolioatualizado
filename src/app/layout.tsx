import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Itallo Guedes - Encontro soluções para o seu negócio",
  description: "Portfólio de desenvolvedor com foco em tecnologia e inovação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white`}>
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:opacity-50 opacity-20"></div>
        <main className="relative min-h-screen">
          <ThemeToggle />
          {children}
          <Chatbot />
          <Footer />
        </main>
      </body>
    </html>
  );
}