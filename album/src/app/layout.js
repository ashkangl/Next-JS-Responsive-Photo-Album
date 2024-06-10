import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next JS Responsive Photo Album",
  description: "This is a simple photo album make by AG. I used Tailwind css for make it...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className={inter.className}>
      {children}
      </body>
    </html>
  );
}
