import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vertis Incorporadora | Governança, Disciplina Financeira e Execução Comprovada",
  description: "Incorporadora com governança, disciplina financeira e execução comprovada. Projetos com VGV estimado superior a R$ 1 bilhão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
