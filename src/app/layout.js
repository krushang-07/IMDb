import localFont from "next/font/local";
import "./globals.css";
import Header from "@/Components/Header";
import Providers from "./Providers";
import NavBar from "@/Components/NavBar";
import SearchBox from "@/Components/SearchBox";
import Footer from "@/Components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "IMDb Rating",
  description: "This is movie rating platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <NavBar />
          <SearchBox />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
