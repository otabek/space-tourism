import Image from "next/image";
import Title from "components/Common/Typography/Title";
import Text from "components/Common/Typography/Text";
import { initialState, planetsReducer } from "state/Planets/reducer";
import { useReducer } from "react";
import { shimmer, toBase64 } from "utils/shimmer";
import NumberText from "components/Common/Typography/NumberText";
import BackgroundImage from "components/Common/BackgroundImage";

const Destination = ({ planets }) => {
  const [state, dispatch] = useReducer(planetsReducer, initialState);

  return (
    <section>
      <BackgroundImage
        mobile="bg-[url('/images/destination/background-destination-mobile.jpg')]"
        tablet="md:bg-[url('/images/destination/background-destination-tablet.jpg')]"
        desktop="lg:bg-[url('/images/destination/background-destination-desktop.jpg')]"
        classNames="w-full h-full"
      >
        <div className="mt-[88px] pb-[58px] text-center md:mt-[136px] md:px-[38px] xl:mx-[calc(11.4%-38px)] xl:mt-[212px]">
          <div className="flex items-center justify-center gap-[18px] md:justify-start 2xl:ml-[8vw]">
            <NumberText>01</NumberText>
            <Title>Pick your destination</Title>
          </div>
          <div className="xl:mt-16 xl:flex xl:items-end xl:justify-center xl:gap-[10.9vw]">
            <div
              className="relative mx-auto mt-8 h-[170px] w-[170px] min-w-[170px] md:h-[300px]
                        md:w-[300px] md:min-w-[300px] xl:m-0 xl:h-[445px] xl:w-[445px] xl:min-w-[445px]"
            >
              <Image
                src={state.img}
                alt={state.name}
                layout="fill"
                quality="100"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(445, 445)
                )}`}
              />
            </div>
            <div className="md:px-[59px] xl:w-[445px] xl:p-0 xl:text-left">
              <ul className="mt-[26px] flex h-7 flex-row justify-center gap-[26px] text-grayBlue md:mt-[53px] md:h-[34px] xl:mt-0 xl:justify-start xl:gap-[35px]">
                {planets.map((planet) => (
                  <li
                    key={planet.name}
                    className={`cursor-pointer border-b-[3px] border-white/0 transition-colors ${
                      state.name === planet.name && "border-white"
                    }`}
                    onClick={() => dispatch({ type: planet.name })}
                  >
                    <Title size="sm">{planet.name}</Title>
                  </li>
                ))}
              </ul>
              <div className="mx-6 mt-5 uppercase md:mx-0 md:mt-8 xl:mx-0 xl:mt-[37px]">
                <h1 className="mb-px font-bellefair text-3xl md:text-[5rem] md:leading-[5.75rem] lg:mb-3 xl:text-4xl">
                  {state.name}
                </h1>
                <Text>{state.info}</Text>
              </div>
              <hr className="my-8 mx-6 text-darkGray md:mx-0 md:mt-[49px] md:mb-7 xl:mx-0" />
              <div className="space-y-8 md:flex md:justify-evenly md:space-y-0 xl:justify-start xl:gap-[79px]">
                <div className="space-y-3">
                  <Title size="sm" className="md:text-xs" color="grayBlue">
                    Avg. distance
                  </Title>
                  <Title size="xl">{state.distance} km</Title>
                </div>
                <div className="space-y-3">
                  <Title size="sm" className="md:text-xs" color="grayBlue">
                    Est. travel time
                  </Title>
                  <Title size="xl">{state.tTime}</Title>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </section>
  );
};

export const getStaticProps = () => {
  const planets = [
    { name: "Moon" },
    { name: "Mars" },
    { name: "Europa" },
    { name: "Titan" },
  ];

  return {
    props: {
      planets,
    },
  };
};

export default Destination;
