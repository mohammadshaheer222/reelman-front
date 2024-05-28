import parallax from "/src/assets/images/paral2.jpg";
import image3 from "/src/assets/images/carousel/carousel5.jpg";

const About = () => {
  return (
    // <div className="flex flex-col justify-center items-center lg:flex-row">
    //   <div className="px-8 py-4 flex flex-col items-center justify-center lg:flex-row lg:items-end lg:py-0 lg:px-0 lg:pl-8  w-full md:max-w-3xl lg:max-w-none">
    //     <div className="space-y-2 md:px-4 lg:pr-8 lg:pb-16 lg:w-[50%] ">
    //       <h1 className="heading">Reelman Productions</h1>
    //       <div className="font-spaceMono text-pretty">
    //         <p>
    //           We try to tell each story in a simple,natural and elegant
    //           way,without artifacts and excessive modifications,as we percieve
    //           and live it. We love to think that our story will be a memory
    //           forever in someone's life.
    //         </p>
    //         <p>
    //           We simply let ourselves be carried away by natural emotions and by
    //           the day without it or by the course of events.
    //         </p>
    //         <p>
    //           We love to think that our story will be a memory forever in
    //           someone's life.
    //         </p>
    //       </div>
    //       <div className="hidden lg:flex gap-x-4 border-b border-b-gray-300 pt-6 p-2 font-semibold font-spaceMono ">
    //         <h1 className="cursor-pointer">Contact</h1>
    //         <h1 className="cursor-pointer">Instagram</h1>
    //       </div>
    //     </div>
    //     <div className="pt-4 lg:w-[50%]">
    //       <img
    //         className="object-cover lg:w-full lg:h-screen"
    //         src="https://ashleighhaase.com/wp-content/uploads/sites/12921/2021/09/CLAIREDAVIE_CCW-418_websize-683x1024.jpg"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="flex justify-center">
      <div className="px-8 md:max-w-4xl lg:max-w-7xl h-full space-y-6 py-12 lg:py-0 ">
        <div className="text-4xl lg:relative sm:text-6xl sm:text-center ">
          <h1 className="lg:absolute lg:top-24 lg:z-30 ">
            Reelman Productions
          </h1>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="pt-2 flex relative sm:justify-center gap-x-2 sm:gap-x-14 ">
            <div className=" lg:pt-60">
              <img
                src={parallax}
                className="about-img1 w-28 h-28 object-cover object-center sm:w-80 sm:h-80"
                alt=""
              />
            </div>
            <div className="hidden lg:block lg:max-w-md lg:pt-40 text-balance lg:text-lg">
              <p>
                Considered to be the epitome of Modern Photography and
                Filmmaking, HOTC has transformed the Indian Wedding landscape on
                a regular basis. For almost a decade House On The Clouds has
                been creating photographs and films which are timeless and have
                been etched in memories of thousands of people forever.
              </p>
              <p>
                Awarded as the Wedding Filmmaker of the year for four
                consecutive years at the Weddingsutra awards along with numerous
                other awards HOTC is the only company listed on IMDB for its
                award winning films.
              </p>
            </div>
            <div className="absolute right-0 sm:static sm:pt-10 top-14 lg:static ">
              <img
                src={image3}
                className="about-img2 w-28 h-28 object-cover object- object-center sm:w-80 sm:h-96"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="pt-16 sm:pt-0 block lg:hidden">
          <p>
            Considered to be the epitome of Modern Photography and Filmmaking,
            HOTC has transformed the Indian Wedding landscape on a regular
            basis. For almost a decade House On The Clouds has been creating
            photographs and films which are timeless and have been etched in
            memories of thousands of people forever.
          </p>
          <p>
            Awarded as the Wedding Filmmaker of the year for four consecutive
            years at the Weddingsutra awards along with numerous other awards
            HOTC is the only company listed on IMDB for its award winning films.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
