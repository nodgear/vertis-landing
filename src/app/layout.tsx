import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Vertis Incorporadora",
  description:
    "Incorporadora com governança, disciplina financeira e execução comprovada.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://vertisincorporadora.com.br/",
    title:
      "Incorporadora com governança, disciplina financeira e execução comprovada.",
    description:
      "Planejamento financeiro por etapa, controle rigoroso e acompanhamento próximo da execução — foco em preservação de valor e retorno.",
    images: [
      {
        url: "https://vertisincorporadora.com.br/og/vertis-og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Incorporadora com governança, disciplina financeira e execução comprovada.",
    description:
      "Planejamento financeiro por etapa, controle rigoroso e acompanhamento próximo da execução — foco em preservação de valor e retorno.",
    images: ["https://vertisincorporadora.com.br/og/vertis-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} ${dancingScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
