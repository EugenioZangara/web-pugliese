import type { Metadata } from "next";
import BackToTop from "../components/BackToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Víctor Pugliese",
  description: "Cirugía plástica con resultados naturales y acompañamiento real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-black text-white antialiased">
        <div className="selection:bg-white selection:text-black">
          {children}
          <BackToTop />
        </div>
      </body>
    </html>
  );
}