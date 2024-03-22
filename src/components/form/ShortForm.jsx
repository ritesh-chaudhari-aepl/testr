"use client";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ReactGA from "react-ga";
import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import LoadingSpinner from "@/components/spinner/LoadingSpinner"; // Create a LoadingSpinner component

const ShortForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  // const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    // ReactGA.event({
    //   action: "button_click",
    //   category: "Contact",
    //   label: "Test Label",
    // });

    const data = {
      device_number: "radha crowdfund donation",
      name,
      email,
      phone,
      location,
      message,
    };

    if (!name || !email || !phone || !location || !message) {
      toast.warning("Please fill all required data.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      setLoading(true); // Set loading to true during form submission

      // const sendData = await axios.post(
      //   "https://dev6apis.el.r.appspot.com/api/deviceWeb/saveDeviceWebData",
      //   data
      // );

      if (sendData.data.success) {
        navigate("/success");
        setName("");
        setEmail("");
        setPhone("");
        setLocation("");
        setMessage("");
      } else {
        toast.error("Something went wrong.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error("Error during form submission. Please Try Again", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setLoading(false); // Set loading back to false after form submission
    }
  };

  return (
    <>
      {/* <SEO
        title="Contact Genius Tutors for Academic Help Related Queries"
        description="Get in touch with Genius Tutors for personalized academic assistance. Our expert tutors are dedicated to helping students excel. Contact us today."
      /> */}

      <section id="contact" className="bg-red-950 border-gray-7">
        <div className="px-5 pb-4">
          <div className="flex flex-col w-full">
            {/* <span className="gradText text-sm text-center uppercase font-Inter font-medium mb-2">
              get in touch
            </span> */}
            <h2 className="capitalize text-xl text-white border-b font-semibold my-4 py-2">
              Request for Screening
            </h2>
          </div>
          <div className="w-full ">
            <form onSubmit={handleSubmitForm} className="">
              <div className="flex flex-wrap">
                <div className="p-2 w-1/2">
                  <div className="relative grid gap-1">
                    <label className="text-sm">Enter Name*</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      type="text"
                      // id="name"
                      name="name"
                      className="w-full rounded-[3px] bg-white border border-[#D7E0EF] focus:border-indigo-500 text-xl outline-none text-black px-2 py-0.5 leading-normal transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative grid gap-1">
                    <label htmlFor="email">Email Address*</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-[3px] bg-white border border-[#D7E0EF] focus:border-indigo-500 text-xl outline-none text-black px-2 py-0.5 leading-normal transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative grid gap-1">
                    <label className="text-sm">Phone / Mobile Number*</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone"
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-[3px] bg-white border border-[#D7E0EF] focus:border-indigo-500 text-xl outline-none text-black px-2 py-0.5 leading-normal transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative grid gap-1">
                    <label className="text-sm">Location for Screening*</label>
                    <input
                      value={location}
                      onChange={(e) => setlocation(e.target.value)}
                      placeholder="Enter location "
                      type="text"
                      id="location"
                      name="location"
                      className="w-full rounded-[3px] bg-white border border-[#D7E0EF] focus:border-indigo-500 text-xl outline-none text-black px-2 py-0.5 leading-normal transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative grid gap-1">
                    <label className="text-sm">Enter your Message*</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                      rows={4}
                      id="message"
                      name="message"
                      className="w-full rounded-[3px] bg-white border border-[#D7E0EF] focus:border-indigo-500 text-xl outline-none text-black px-2 py-0.5 leading-normal transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    aria-label="submit"
                    title="Request for Screening"
                    type="submit"
                    className="flex mx-auto font-Inter w-full justify-center py-2 text-sm font-medium transition bg-yellow-dark text-black rounded-md"
                  >
                    {loading ? <LoadingSpinner /> : "Request for Screening"}
                  </button>
                  {/* <ToastContainer /> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShortForm;
