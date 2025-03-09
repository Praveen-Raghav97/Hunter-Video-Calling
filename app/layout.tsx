import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
const outfit = Outfit({ subsets: ["latin"], weight :["400" , "500" , "600" , "300"] });
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css"
import { Inter, Roboto_Mono } from "next/font/google";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Hunter",
  description: "A Video Calling App",
  icons:{
     icon: '/icons.logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/logo.svg",
            
          },
          variables: {
            colorText:"#252A41",
            colorPrimary:"#252A41",
            colorBackground: "#fff",
            colorInputBackground:"#E5E7EB",
            colorInputText: "#161925",
            colorWarning: "#FF742E",
            colorSuccess: "#05CD99",
            
          
          },
        }}>

      <body className={`${geistSans.variable} ${geistMono.variable}  bg-purple-1`}>
        {children}
        <Toaster />
        </body>
      </ClerkProvider>
  
    </html>
  );
}
