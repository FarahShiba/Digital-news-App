import dynamic from "next/dynamic";
import Script from "next/script";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-icons";
import "aos/dist/aos.css";
import { EB_Garamond } from "next/font/google";
import "../styles/variables.css";
import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { GoogleAnalytics } from "nextjs-google-analytics";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
});

const Header = dynamic(() => import("../components/layout/header/Header"), {
  ssr: false,
});

const Footer = dynamic(() => import("../components/layout/footer/Footer"), {
  ssr: false,
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${ebGaramond.className};
        }
      `}</style>
      <Head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics-script" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </Head>
      <GoogleAnalytics trackPageViews />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
