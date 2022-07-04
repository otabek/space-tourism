const crewMembers = [
  {
    rank: "Commander",
    name: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: { url: "/images/crew/image-douglas-hurley.png", widthSM: "177" },
  },
  {
    rank: "Mission Specialist",
    name: "MARK SHUTTLEWORTH",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: {
      url: "/images/crew/image-mark-shuttleworth.png",
      widthSM: "154px",
    },
  },
  {
    rank: "Pilot",
    name: "Victor Glover",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    img: { url: "/images/crew/image-victor-glover.png", widthSM: "181px" },
  },
  {
    rank: "Flight Engineer",
    name: "Anousheh Ansari",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    img: { url: "/images/crew/image-anousheh-ansari.png", widthSM: "226px" },
  },
];

export const initialState = {
  rank: crewMembers[0].rank,
  name: crewMembers[0].name,
  bio: crewMembers[0].bio,
  img: crewMembers[0].img,
};

export const crewReducer = (state, action) => {
  switch (action.type) {
    case "Commander":
      return crewMembers[0];
    case "Mission Specialist":
      return crewMembers[1];
    case "Pilot":
      return crewMembers[2];
    case "Flight Engineer":
      return crewMembers[3];
    default:
      throw new Error();
  }
};
