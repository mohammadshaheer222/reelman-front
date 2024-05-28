
import vid from "/src/assets/images/video/vid.mp4";

const Video = () => {
  const videos = [{ vid: vid }, { vid: vid }];
  return (
    <div className="px-8 py-4 space-y-2">
      <h1 className="heading">Watch Our Latest Videos</h1>
      <div className="flex flex-col justify-center items-center gap-4 sm:flex-row">
        {videos.map((vid, index) => (
          <video className="w-full sm:w-1/2" src={vid.vid} controls key={index}/>
        ))}
      </div>
    </div>
  );
};
export default Video;
