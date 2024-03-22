import SEO from "../../components/Seo";
import { BsWhatsapp, BsFacebook } from "react-icons/bs";

const Success = () => {
  return (
    <div className=" bg-white">
      <SEO title="success" />
      <div className="flex items-center justify-center py-16">
        {/* <div className="p-0.5 rounded shadow-lg bg-gradient-to-r from-violet-dark via-green-garden to-blue-blue"> */}
        <div className="p-1 rounded shadow-lg">
          <div className="flex flex-col items-center py-4 px-6 space-y-2 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-blue w-20 h-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-4xl pt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-blue to-violet-dark">
              Thank You !
            </h1>
            <div className="py-6">
              <p className="text-xl font-medium font-QuickSand text-center mb-1">
                Your Submission has been received
              </p>
              <p className="text-xl font-medium font-QuickSand text-center">
                We will be in touch and contact you soon.
              </p>
            </div>
            {/* <a
              className="inline-block cursor-pointer rounded-full bg-gradient-to-r from-pink-darkPink to-blue-light px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
              href="/"
              target="_blank"
            >
              Back to Home
            </a> */}

            <div className="py-6">
              <a
                title="Back to Home"
                name="Back to Home"
                aria-label="Back to Home"
                href="/"
                className="cursor-pointer hover:no-underline bg-gradient-to-r from-slate-900 to-slate-700 text-white w-full px-16 py-4 rounded-full font-bold font-Nunito"
              >
                Back to Home
              </a>
            </div>
            <div className="py-4 flex flex-col items-center gap-6">
              <span className="text-xl font-bold font-QuickSand">
                Follow us
              </span>
              <div className="flex gap-10 items-center">
                <a
                  title="Connect us on Facebook"
                  name="Connect us on Facebook"
                  aria-label="Connect us on Facebook"
                  // href="https://www.facebook.com/profile.php?id=100091588713018&is_tour_completed=true"
                  // target="_blank"
                  // rel="noreferrer"
                  className="cursor-pointer hover:no-underline"
                >
                  <div className="social-btn color-telegram">
                    <BsFacebook className="icons8-telegram-app" />
                  </div>
                </a>
                <a
                  title="Connect us on Instagram"
                  name="Connect us on Instagram"
                  aria-label="Connect us on Instagram"
                  // href="https://instagram.com/genius_tutor01"
                  // target="_blank"
                  // rel="noreferrer"
                  className="cursor-pointer hover:no-underline"
                >
                  <div className="social-btn color-instagram">
                    <div className="icons8-instagram"></div>
                  </div>
                </a>
                <a
                  title="Connect us on WhatsApp"
                  name="Connect us on WhatsApp"
                  aria-label="Connect us on WhatsApp"
                  // href="https://api.whatsapp.com/send/?phone=918210403033&text&type=phone_number&app_absent=0"
                  // target="_blank"
                  className="cursor-pointer hover:no-underline"
                  rel="noreferrer"
                >
                  <div className="social-btn color-whatsapp">
                    <BsWhatsapp className="icons8-whatsapp" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
