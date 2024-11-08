import { Inter } from "next/font/google";
import "./globals.css";
import CustomThemeProvider from "./component/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next JS Responsive Photo Album",
  description: "This is a simple photo album make by AG. I used Tailwind css for make it...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <CustomThemeProvider>
      {children}
      </CustomThemeProvider>
      </body>
    </html>
  );
}
