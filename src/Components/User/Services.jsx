// import Marquee from "react-fast-marquee";
import { Background, Parallax } from "react-parallax";
import insta1 from "/src/assets/images/carousel/carousel1.jpg";
// import wedding1 from "/src/assets/images/work/gal-1.jpg";
// import wedding2 from "/src/assets/images/work/gal-3.jpg";
import wedding3 from "/src/assets/images/wedding3.jpg";
import wedding4 from "/src/assets/images/wedding4.jpg";
import image2 from "/src/assets/images/carousel/carousel4.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  const videos = [
    {
      video: image2,
      service: "Weddings",
    },
    {
      video: insta1,
      service: "Engagement Shoots",
    },
    {
      video: wedding3,
      service: "Brand Concept Shoots",
    },
    {
      video: wedding4,
      service: "New Born Portraiture",
    },
  ];
  return (
    // <div className="py-4">
    //   <Marquee speed={20} pauseOnHover={true}>
    //     <div className="ml-6">
    //       <div className="flex gap-x-6 text-xl font-medium cursor-pointer md:text-4xl md:gap-x-12 overflow-hidden">
    //         <h3 >Wedding</h3>
    //         <h3>Brand Concept Shoot</h3>
    //         <h3>Engagement Shoot</h3>
    //         <h3>Corporate Events</h3>
    //         <h3>NewBorn Portraiture</h3>
    //       </div>
    //     </div>
    //   </Marquee>
    // </div>

    <div className="py-20 px-8">
      <h1 className="heading pb-4">Our Services</h1>
      {videos.map((video, index) => (
        <Link to="/details" key={index}>
          <div  className="relative">
            <Parallax
              className="md:h-[100vh]"
              strength={200}
              style={{
                minHeight: "90vh",
                maxHeight: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Background className="custom-bg w-screen">
                <img
                  src={video.video}
                  alt=""
                  className="h-[100vh] w-full object-cover object-center"
                  loading="eager"
                />
              </Background>
            </Parallax>

            <div className="absolute top-0 w-full h-full flex justify-center items-center sm:justify-start px-6 ">
              <div className="space-y-4 sm:max-w-2xl">
                <h1 className="text-4xl font-bold text-white">
                  {video.service}
                </h1>
                <p className="text-white">
                  Magic Motion Media Has Created A New Exclusive Idea Of Concept
                  Shoots, Developed And Personalised Only For A Particular
                  Couple Or Brand. The Secret To Its Success? The Special
                  Emotional Bond And Relationship With The Concept, And Our
                  Client Is The Key To Our Concept Shoots.
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Services;
