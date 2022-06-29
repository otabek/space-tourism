import Image from "next/image";
import Title from "components/Typography/Title";
import Text from "components/Typography/Text";
import { initialState, planetsReducer } from "state/reducer";
import { useReducer } from "react";

const Destination = ({ planets }) => {
  const [state, dispatch] = useReducer(planetsReducer, initialState);

  return (
    <section>
      <div
        className="absolute h-full w-full bg-[url('/images/Destination/background-destination-mobile.jpg')]
                  bg-cover bg-center bg-no-repeat
                  md:bg-[url('/images/Destination/background-destination-tablet.jpg')]
                  lg:bg-[url('/images/Destination/background-destination-desktop.jpg')]
      "
      >
        <div className="mt-[88px] pb-[58px] text-center md:mt-[136px] md:px-[38px] xl:mx-[calc(11.4%-38px)] xl:mt-[212px]">
          <div className="flex items-center justify-center gap-[18px] md:justify-start 2xl:ml-[8vw]">
            <Title className="font-bold text-white/25">01</Title>
            <Title>Pick your destination</Title>
          </div>
          <div className="xl:mt-16 xl:flex 2xl:justify-center">
            <div
              className="relative mx-auto mt-8 h-[170px] w-[170px] md:mt-[60px] 
                        md:h-[300px] md:w-[300px] xl:ml-0 xl:h-[445px] xl:w-[445px] 2xl:mr-[8vw] 2xl:mb-0"
            >
              <Image src={state.img} alt={state.name} layout="fill" />
            </div>
            <div className="md:px-[59px] xl:ml-[7.9vw] xl:w-[445px] xl:p-0 xl:text-left 2xl:ml-[8vw]">
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
              <hr className="my-8 mx-6 text-[#979797] md:mx-0 md:mt-[49px] md:mb-7 xl:mx-0" />
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
      </div>
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
