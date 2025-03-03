import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
const outfit = Outfit({ subsets: ["latin"], weight :["400" , "500" , "600" , "300"] });
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css"

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
            colorText: "#fff",
            colorPrimary: "#fff",
            colorBackground: "#121063",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
        }}>

      <body className={`${outfit.className} bg-lite-1 `}>
        {children}
        <Toaster />
        </body>
      </ClerkProvider>
  
    </html>
  );
}
