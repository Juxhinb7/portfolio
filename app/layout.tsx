import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import { Footer } from "./components/footer";
import ThemeProvider from "./components/theme-provider";
import ThemeToggle from "./components/theme-toggle";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juxhin | Personal Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider enableSystem={false}>
            <div className="container mx-auto min-h-screen">
              <NavBar />
              <main className="flex mx-auto w-[80vw] 2xl:w-[30vw]">
                <div className="mt-32 mx-auto">
                  {children} 
                </div>
                <ThemeToggle />
              </main>

              <Footer />        

            </div>
          </ThemeProvider>
        </body>


    </html>
  );
}
