import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start); //event indication that the page is changing
Router.events.on("routeChangeComplete", progress.finish); // page change completed
Router.events.on("routeChangeError", progress.finish); //error occured in loading the page

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
