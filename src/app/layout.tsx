import type { Metadata } from "next";
import { Splash, Saira_Stencil_One, Barlow, Cormorant_Garamond, Baloo_2, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const splash = Splash({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-splash",
});

const sairaStencilOne = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-saira-stencil",
});

const barlow = Barlow({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const baloo = Baloo_2({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-baloo",
});

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Linh Sâm Sơn Tửu",
  description: "Rượu sâm cao cấp",
  icons: '/logo/logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${splash.variable} ${sairaStencilOne.variable} ${barlow.variable} ${cormorantGaramond.variable} ${baloo.variable} ${montserrat.variable} ${roboto.variable}`}>
        {children}
        <Script
          id="facebook-sdk"
          strategy="afterInteractive"
          src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v19.0"
        />
      </body>
    </html>
  );
}
