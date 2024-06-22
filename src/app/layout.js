import { Inter } from "next/font/google";
import "./globals.css";
import ClientNavbar from "../../components/ClientNavbar/ClientNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jose y Mariano",
  description: "Bienvenidos a la boda de Jose y Mariano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientNavbar>{children}</ClientNavbar>
      </body>
    </html>
  );
}
