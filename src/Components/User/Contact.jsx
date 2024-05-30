import { useState } from "react";
import { server } from "../../../Server";
import axios from "axios";
import { toast } from "react-toastify";
import { Background, Parallax } from "react-parallax";
import contact from "/src/assets/images/contact.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [selection, setSelection] = useState({
    photography: false,
    videography: false,
    both: false,
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setSelection({
      photography: value === "photography",
      videography: value === "videography",
      both: value === "both",
    });
  };

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
        selection,
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
        setSelection("");
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  return (
    <div>
      <div>
        <Parallax
          strength={500}
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
                type="date"
                name="date"
                id="date"
                value={date}
                placeholder="Event Date"
                onChange={(event) => setDate(event.target.value)}
                required
              />
            </div>
            <div className="flex justify-start gap-4 text-gray-500">
              <div className="space-x-2">
                <input
                  type="radio"
                  name="service"
                  id="photography"
                  value="photography"
                  checked={selection.photography}
                  onChange={handleChange}
                />
                <label htmlFor="photography">Photography</label>
              </div>
              <div className="space-x-2">
                <input
                  type="radio"
                  name="service"
                  id="videography"
                  value="videography"
                  checked={selection.videography}
                  onChange={handleChange}
                />
                <label htmlFor="videography">Videography</label>
              </div>
              <div className="space-x-2">
                <input
                  type="radio"
                  name="service"
                  id="both"
                  value="both"
                  checked={selection.both}
                  onChange={handleChange}
                />
                <label htmlFor="both">Both</label>
              </div>
            </div>

            <button
              type="submit"
              className="bg-black w-full text-white py-2 cursor-pointer active:scale-95 active:shadow-lg duration-100"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
