import "./globals.css";

export const metadata = {
  title: "Teste TCG Dex",
  description: "Exemplo criado na aula de Front End do Futuro Digital",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
