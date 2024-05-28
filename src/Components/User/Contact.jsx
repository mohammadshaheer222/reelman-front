import { useState } from "react";
import { server } from "../../../Server";
import axios from "axios";
import { toast } from "react-toastify";
import { Background, Parallax } from "react-parallax";
import contact from "/src/assets/images/contact.jpg"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [photography, setPhotography] = useState(false);
  const [videography, setVideography] = useState(false);
  const [both, setBoth] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await axios
      .post(`${server}/user/contact-form`, {
        name,
        email,
        phone,
        message,
        location,
        date,
        photography,
        videography,
        both,
      })
      .then((res) => {
        setLoading(false);
        toast.success("Thank you for your response!!!");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setLocation("");
        setDate("");
        setPhotography("");
        setVideography("");
        setBoth("");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Parallax
        strength={200}
        style={{
          minHeight: "100vh",
          height: "auto",
          width: "100%",
        }}
      >
        <Background className="custom-bg w-screen h-screen">
          <img
            src={contact}
            alt="Hero images"
            className="object-cover object-center w-full h-full"
            loading="lazy"
          />
        </Background>
      </Parallax>

      <div className="h-full w-full flex justify-center items-center px-4  ">
        <form
          className="space-y-6 text-sm md:text-lg p-6"
          onSubmit={handleSubmit}
        >
          <h1 className="heading">Get in Touch</h1>
          <div className="flex flex-col gap-y-2">
            <input
              className=" px-3 py-2 outline-none"
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <input
              className=" py-2 px-3 outline-none"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <input
              className=" px-3 py-2 outline-none appearance-none"
              type="number"
              name="phone"
              id="phone"
              autoComplete="phone"
              placeholder="Phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <textarea
              className=" px-2 py-2 resize-none outline-none w-full"
              id="message"
              name="message"
              rows="6"
              cols="50"
              placeholder=" Tell us more about your wedding - event flow, venues."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <input
              className=" px-3 py-2 outline-none"
              type="text"
              name="location"
              id="location"
              placeholder="Location of the wedding"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <input
              className=" px-3 py-2 outline-none"
              type="text"
              name="date"
              id="date"
              value={date}
              placeholder="Event Dates"
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-y-4 text-gray-500">
            <label htmlFor="">What services are you looking for?</label>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                name="photography"
                id="photography"
                checked={photography}
                onChange={(event) => setPhotography(event.target.checked)}
              />
              <label htmlFor="">Photography</label>
            </div>
            <div className="flex juc items-center gap-4">
              <input
                type="checkbox"
                name="videography"
                id="videography"
                checked={videography}
                onChange={(event) => setVideography(event.target.checked)}
              />
              <label htmlFor="videography">Videography</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                name="both"
                id="both"
                checked={both}
                onChange={(event) => setBoth(event.target.checked)}
              />
              <label htmlFor="both">Both Photography and Videography</label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-black hover:bg-gray-900 active:bg-gray-800 w-full text-white py-2 cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
