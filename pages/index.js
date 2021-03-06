import Head from "next/head";
import { useRouter } from "next/router";
import Text from "../components/Common/Typography/Text";
import BackgroundImage from "../components/Common/BackgroundImage";

const Home = ({ content }) => {
  const router = useRouter();
  return (
    <section>
      <Head>
        <title>Space tourism</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundImage
        mobile="bg-[url('/images/home/background-home-mobile.jpg')]"
        tablet="md:bg-[url('/images/home/background-home-tablet.jpg')]"
        desktop="lg:bg-[url('/images/home/background-home-desktop.jpg')]"
        className="h-screen w-screen"
      >
        <div className="h-full w-full">
          <div
            className="fixed top-28 mx-[6.4%] flex flex-col items-center
            md:top-[20vh] md:mx-[20.7%] lg:bottom-[14.6%] lg:top-auto lg:mx-[11.5%] 
            lg:w-[calc(100%-11.5%*2)] lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="mx-auto text-center uppercase md:max-w-[450px] lg:m-0 lg:text-left">
              <div className="text-sm text-grayBlue md:text-[20px] lg:text-hXl">
                {content.title}
              </div>
              <div className="my-4 font-bellefair text-[80px] md:my-6 md:text-5xl md:leading-[150px] lg:leading-[172px]">
                {content.hero}
              </div>
              <Text>{content.text}</Text>
            </div>
            <button
              className="mt-[min(12vh,81px)] flex h-[150px] w-[150px] items-center justify-center rounded-full border-black bg-white font-bellefair 
              text-[20px] uppercase leading-[23px] tracking-[1.25px] text-black outline outline-[5.7vw] outline-white/0 transition-opacity
              hover:outline-white/10 md:fixed md:bottom-[8vh] md:h-[242px] md:w-[242px] lg:relative lg:bottom-0 lg:h-[274px] lg:w-[274px] lg:text-2xl"
              onClick={() => router.push("/destination")}
            >
              Explore
            </button>
          </div>
        </div>
      </BackgroundImage>
    </section>
  );
};

export const getStaticProps = () => {
  const content = {
    title: "So, you want to travel to",
    hero: "Space",
    text: "Let???s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we???ll give you a truly out of this world experience!",
  };

  return {
    props: {
      content,
    },
  };
};

export default Home;
