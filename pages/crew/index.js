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
        classNames="h-screen w-screen"
      >
        <div className="w-full">
          <div className="mt-[88px] flex flex-col items-center px-6">
            <div className="flex gap-4">
              <NumberText>02</NumberText>
              <Title>Meet your crew</Title>
            </div>
            <div className="relative mt-8 flex items-end">
              <Image
                src={state.img.url}
                width={state.img.widthSM}
                height="222"
                alt={state.name}
                quality="90"
              />
            </div>
            <hr className="w-full text-darkGray" />
            <div className="mt-8">
              <div className="flex justify-center gap-4">
                {crew.map((member) => (
                  <div
                    key={member.rank}
                    className={`h-[10px] w-[10px] rounded-full bg-white/[0.17] ${
                      state.rank === member.rank && "bg-white/100"
                    }`}
                    onClick={() => dispatch({ type: member.rank })}
                  ></div>
                ))}
              </div>
              <div className="mt-8">
                <div className="text-center font-bellefair uppercase">
                  <h3 className="leading-[18px] text-white/50">{state.rank}</h3>
                  <h1 className="mt-2 mb-4 text-[24px] leading-[28px]">
                    {state.name}
                  </h1>
                  <Text>{state.bio}</Text>
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
