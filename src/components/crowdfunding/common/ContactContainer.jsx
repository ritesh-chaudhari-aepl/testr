"use client";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ReactGA from "react-ga";
import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../spinner/LoadingSpinner"; // Create a LoadingSpinner component

const ContactContainer = () => {
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
      <section id="contact" className="bg-white">
        <div className="max-w-screen-2xl px-5 pb-10 md:py-8 mx-auto">
          {/* <div className="flex flex-col text-center w-full">
            <span className="gradText text-[19px] text-center uppercase font-Inter font-bold mb-6">
              get in touch
            </span>
            <h2 className="sm:text-[44px] capitalize text-3xl text-[#293452] font-Inter font-bold mb-14">
              Request for Screening
            </h2>
          </div> */}
          <div className="max-w-screen-xl px-8 mx-auto py-12">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-yellow-dark text-center text-4xl md:text-5xl pb-4 font-WhitneySemibold not-italic capitalize leading-[76.8px]">
                Request
                <span className="text-black"> for Screening</span>
              </h1>

              <span className="h-[3px] bg-gradient-to-r from-textDark via-brick to-yellow-dark w-16 mb-4" />
            </div>

            {/* <h2 className="font-bold font-WhitneySemibold capitalize text-2xl">
          Our trustees
        </h2> */}
            <p className="p-2 font-sans text-xl">
              Schools, universities, and other educational institutions are
              encouraged to engage with us by submitting screening requests for
              our thought-provoking films. Through our dedicated form available
              on the trust page, institutions can effortlessly initiate the
              process to host screenings at their premises. This form allows
              them to provide essential contact details and specify their
              preferred location for the screening. We welcome these requests as
              they align with our mission to foster dialogue and enlightenment
              through cinematic experiences within educational communities.
            </p>
            {/* Educational institutions such as schools and universities are invited to request film screenings through our dedicated form on the trust page. This streamlined process enables them to specify their preferred location and provide essential contact details. By facilitating these requests, we aim to foster meaningful cinematic experiences within educational settings, promoting dialogue and enlightenment. */}
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmitForm} className="">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label>Enter Name*</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      type="text"
                      // id="name"
                      name="name"
                      className="w-full rounded-[3px] bg-white border border-[#D7E0EF] focus:border-indigo-500 text-xl outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email">Email Address*</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-[3px] bg-white border border-[#D7E0EF] focus:border-indigo-500 text-xl outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label>Phone/Mobile Number*</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone"
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-[3px] bg-white border border-[#D7E0EF] focus:border-indigo-500 text-xl outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label>Location*</label>
                    <input
                      value={location}
                      onChange={(e) => setlocation(e.target.value)}
                      placeholder="Enter location for screening"
                      type="text"
                      id="location"
                      name="location"
                      className="w-full rounded-[3px] bg-white border border-[#D7E0EF] focus:border-indigo-500 text-xl outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label>Enter your Message*</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                      rows={4}
                      id="message"
                      name="message"
                      className="w-full rounded-[3px] bg-white border border-[#D7E0EF] focus:border-indigo-500 text-xl outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    aria-label="submit"
                    title="Request for Screening"
                    type="submit"
                    className="flex mx-auto font-Inter px-6 lg:px-12 py-4 text-sm font-medium transition bg-yellow-dark text-black rounded-full"
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

export default ContactContainer;
