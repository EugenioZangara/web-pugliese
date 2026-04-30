import "./globals.css";

export const metadata = {
  title: "Dr. Víctor Pugliese",
  description: "Cirugía plástica con resultados naturales y acompañamiento real",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white antialiased">
        <div className="selection:bg-white selection:text-black">
          {children}
        </div>
      </body>
    </html>
  );
}