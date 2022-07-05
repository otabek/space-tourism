import BackgroundImage from "components/Common/BackgroundImage";
import NumberText from "components/Common/Typography/NumberText";
import Text from "components/Common/Typography/Text";
import Title from "components/Common/Typography/Title";
import Image from "next/image";
import { useReducer } from "react";
import { crewReducer, initialState } from "state/Crew/reducer";

const Crew = ({ crew }) => {
  const [state, dispatch] = useReducer(crewReducer, initialState);

  return (
    <section>
      <BackgroundImage
        mobile="bg-[url('/images/crew/background-crew-mobile.jpg')]"
        tablet="md:bg-[url('/images/crew/background-crew-tablet.jpg')]"
        desktop="lg:bg-[url('/images/crew/background-crew-desktop.jpg')]"
        className="h-screen w-full"
      >
        <div className="w-full">
          <div className="mt-[88px] flex flex-col items-center px-6 pb-6 md:mt-[136px] md:px-[39px] md:pb-0">
            <div className="flex gap-4 md:w-full md:justify-start">
              <NumberText>02</NumberText>
              <Title>Meet your crew</Title>
            </div>
            <div className="md:flex md:w-[60vw] md:flex-col-reverse">
              <div
                className={`relative m-auto mt-8 flex h-[222px] ${state.img.widthSM} items-end md:mt-10 md:h-[532px]`}
              >
                <Image
                  src={state.img.url}
                  layout="fill"
                  alt={state.name}
                  quality="90"
                />
              </div>
              <hr className="w-full text-darkGray md:hidden" />
              <div className="mt-8 md:mt-[60px] md:flex md:flex-col-reverse">
                <div className="flex justify-center gap-4 md:mt-10">
                  {crew.map((member) => (
                    <div
                      key={member.rank}
                      className={`h-[10px] w-[10px] cursor-pointer rounded-full bg-white/[0.17] hover:bg-white/50 
                      ${state.rank === member.rank && "bg-white/100"}`}
                      onClick={() => dispatch({ type: member.rank })}
                    ></div>
                  ))}
                </div>
                <div className="mt-8 md:mt-0">
                  <div className="text-center font-bellefair uppercase">
                    <h3 className="leading-[18px] text-white/50">
                      {state.rank}
                    </h3>
                    <h1 className="mt-2 mb-4 text-[24px] leading-[28px]">
                      {state.name}
                    </h1>
                    <Text>{state.bio}</Text>
                  </div>
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
  const crew = [
    { rank: "Commander" },
    { rank: "Mission Specialist" },
    { rank: "Pilot" },
    { rank: "Flight Engineer" },
  ];

  return {
    props: {
      crew,
    },
  };
};

export default Crew;
