import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-icons";
import "aos/dist/aos.css";
import { EB_Garamond } from "next/font/google";
import "../styles/variables.css";
import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
});

const Header = dynamic(() => import("../components/layout/header/Header"), {
  ssr: false,
});

const Footer = dynamic(() => import("../components/layout/footer/Footer"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: ${ebGaramond.className};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
