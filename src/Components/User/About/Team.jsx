import team1 from "/src/assets/images/about.jpg";

const Team = () => {
  const team = [
    { img: team1, name: "Muhammed Safeer cp", position: "Photographer" },
    { img: team1, name: "Muhammed Safeer cp", position: "Photographer" },
    { img: team1, name: "Muhammed Safeer cp", position: "Photographer" },
    { img: team1, name: "Muhammed Safeer cp", position: "Photographer" },
  ];
  return (
    <div className="px-8 space-y-2 pb-4 md:py-10">
      <h1 className="heading ">Our Perfect Team</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        saepe, aspernatur necessitatibus quas ut recusandae perferendis in ipsam
        inventore nisi dolores voluptatibus beatae impedit excepturi?
        Reprehenderit distinctio libero fuga, in ipsum ducimus accusantium nam
        officia rem minima a, asperiores similique quam unde debitis quos
        deserunt amet veniam repellendus et! Iste.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {team.map((team) => (
          <div>
            <img
              src={team.img}
              alt="team photo"
              className="w-full h-96 xl:h-[400px] object-cover"
            />
            <h1>{team.name}</h1>
            <h1>{team.position}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
