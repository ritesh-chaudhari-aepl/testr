import React, { useState } from "react";
import LoadingSpinner from "../spinner/LoadingSpinner";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  // const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const data = {
      device_number: "radha crowdfund donation",
      name,
      email,
      phone,
      // location,
      message,
    };

    if (!name || !email || !phone || !message) {
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
        // setLocation("");
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
    <section id="contact" className="bg-red-950 border-gray-7 w-full">
      <div className="px-5 pb-4">
        <div className="flex flex-col ">
          <h2 className="capitalize text-xl text-white border-b font-semibold my-4 py-2">
            Inquiry Form
          </h2>
        </div>
        <div className="w-full ">
          <form onSubmit={handleSubmitForm} className="">
            <div className="flex flex-wrap gap-y-3">
              <div className="p-2 w-1/2">
                <div className="relative grid gap-1">
                  <label className="text-sm text-white">Enter Name*</label>
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
                  <label htmlFor="email" className="text-sm text-white">
                    Email Address*
                  </label>
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
                  <label className="text-sm text-white">Mobile Number*</label>
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
              {/* <div className="p-2 w-1/2">
                  <div className="relative grid gap-1">
                    <label className="text-sm text-white">Location for Screening*</label>
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
                </div> */}
              <div className="p-2 w-full">
                <div className="relative grid gap-1">
                  <label className="text-sm text-white">
                    Enter your Question/Suggestion*
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Question/Suggestion"
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
                  {loading ? <LoadingSpinner /> : "Submit"}
                </button>
                {/* <ToastContainer /> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
