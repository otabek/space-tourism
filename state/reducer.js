const destinations = [
  {
    name: "Moon",
    info: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400",
    tTime: "3 days",
    img: "/images/Destination/image-moon.png",
  },
  {
    name: "Mars",
    info: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil.",
    tTime: "9 months",
    img: "/images/Destination/image-mars.png",
  },
  {
    name: "Europa",
    info: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil.",
    tTime: "3 years",
    img: "/images/Destination/image-europa.png",
  },
  {
    name: "Titan",
    info: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil.",
    tTime: "7 years",
    img: "/images/Destination/image-titan.png",
  },
];

export const initialState = {
  name: destinations[0].name,
  info: destinations[0].info,
  distance: destinations[0].distance,
  tTime: destinations[0].tTime,
  img: destinations[0].img,
};

export const planetsReducer = (state, action) => {
  switch (action.type) {
    case "Moon":
      return destinations[0];
    case "Mars":
      return destinations[1];
    case "Europa":
      return destinations[2];
    case "Titan":
      return destinations[3];
    default:
      throw new Error();
  }
};
