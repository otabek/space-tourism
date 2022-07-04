import Layout from "components/Layouts";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-barlowCon">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
