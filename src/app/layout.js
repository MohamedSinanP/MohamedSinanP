import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Mohamed Sinan P | Portfolio",
  description: "Mohamed Sinan P - Fullstack Developer - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased overflow-x-hidden`}      >
        {children}
      </body>
    </html>
  );
}
