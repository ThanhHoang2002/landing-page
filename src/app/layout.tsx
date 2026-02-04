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
            <head>
        {/* Meta Pixel Code - Pixel 1 */}
        <Script
          id="meta-pixel-1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1393743885565731');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1393743885565731&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Meta Pixel Code - Pixel 2 */}
        <Script
          id="meta-pixel-2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              fbq('init', '1407744310211086');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=PIXEL_ID_THU_2&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
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
