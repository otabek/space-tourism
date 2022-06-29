import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const navItems = [
    { num: "00", name: "Home", route: "/" },
    { num: "01", name: "Destination", route: "/destination" },
    { num: "02", name: "Crew", route: "/crew" },
    { num: "03", name: "Technology", route: "/tech" },
  ];

  return (
    <div className="font-barlowCon">
      <Header navItems={navItems} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
