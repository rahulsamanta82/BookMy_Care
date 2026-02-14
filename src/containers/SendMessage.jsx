import { useReducer } from "react";
import {
  FaChevronRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { SectionTitle, Button, Section } from "../components";

import { contactReducer, INITIAL_STATE } from "../reducers/contactReducer";

import contactMap from "../assets/contact-map.png";

const SendMessage = () => {
  const [state, dispatch] = useReducer(contactReducer, INITIAL_STATE);

  const { name, email, phone, subject, message } = state.contactDetails;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.contactDetails);
  };

  return (
    <Section padding={true} className="relative">
      <div className="container">
        <SectionTitle
          center={true}
          title="Contact Us"
          heading="We're Here to Help You"
          desc="Have a question about appointments, doctors, or services? Reach out to us anytime."
          className="mb-[2.1875rem] md:mb-[3.75rem]"
        />

        <div className="flex flex-col lg:flex-row gap-y-10 gap-x-6">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row md:flex-wrap w-full lg:w-3/5 gap-x-3.5"
          >
            <div className="w-full mb-4 md:w-[calc(50%-7px)]">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_INPUT",
                    payload: {
                      name: "name",
                      value: e.target.value,
                    },
                  })
                }
                className="text-sm h-[3.4375rem] w-full bg-white shadow-input text-secondary px-4 focus:outline-none"
              />
            </div>

            <div className="w-full mb-4 md:w-[calc(50%-7px)]">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_INPUT",
                    payload: {
                      name: "email",
                      value: e.target.value,
                    },
                  })
                }
                className="text-sm h-[3.4375rem] w-full bg-white shadow-input text-secondary px-4 focus:outline-none"
              />
            </div>

            <div className="w-full mb-4 md:w-[calc(50%-7px)]">
              <input
                type="text"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_INPUT",
                    payload: {
                      name: "phone",
                      value: e.target.value,
                    },
                  })
                }
                className="text-sm h-[3.4375rem] w-full bg-white shadow-input text-secondary px-4 focus:outline-none"
              />
            </div>

            <div className="w-full mb-4 md:w-[calc(50%-7px)]">
              <input
                type="text"
                placeholder="Subject / Query Type"
                value={subject}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_INPUT",
                    payload: {
                      name: "subject",
                      value: e.target.value,
                    },
                  })
                }
                className="text-sm h-[3.4375rem] w-full bg-white shadow-input text-secondary px-4 focus:outline-none"
              />
            </div>

            <div className="w-full mb-4">
              <textarea
                placeholder="Write your message here..."
                value={message}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_INPUT",
                    payload: {
                      name: "message",
                      value: e.target.value,
                    },
                  })
                }
                className="text-sm h-[10rem] pt-4 w-full bg-white shadow-input text-secondary px-4 focus:outline-none"
              />
            </div>

            <div className="w-full md:w-1/22 text-center mt-2.5">
              <Button icon={<FaChevronRight />}>Submit Enquiry</Button>
            </div>
          </form>

          <div className="w-full lg:w-2/5 lg:pl-6">
            <ul>
              <li className="mb-9 relative pl-[5.125rem] md:pl-[5.9375rem]">
                <div className="absolute border text-white text-xl md:text-2xl border-dashed border-primary w-[4.0625rem] md:w-[4.6875rem] h-[4.0625rem] md:h-[4.6875rem] rounded-full top-0 left-0 before:absolute before:content-[''] before:inset-0 before:bg-primary before:rounded-full before:m-1.5 before:shadow-contact-icon flex justify-center items-center">
                  <FaMapMarkerAlt className="relative z-[2]" />
                </div>
                <div>
                  <span className="block font-semibold mb-1.5 text-17px text-secondary font-poppins md:mb-2 md:text-20px">
                    Head Office
                  </span>
                  <span className="block text-textPrimary text-13px md:text-15px">
                    3rd Floor, Health Plaza, MG Road
                  </span>
                  <span className="block text-textPrimary text-13px md:text-15px">
                    Bengaluru, Karnataka 560001, India
                  </span>
                </div>
              </li>

              <li className="mb-9 relative pl-[5.125rem] md:pl-[5.9375rem]">
                <div className="absolute border text-white text-xl md:text-2xl border-dashed border-primary w-[4.0625rem] md:w-[4.6875rem] h-[4.0625rem] md:h-[4.6875rem] rounded-full top-0 left-0 before:absolute before:content-[''] before:inset-0 before:bg-primary before:rounded-full before:m-1.5 before:shadow-contact-icon flex justify-center items-center">
                  <FaEnvelope className="relative z-[2]" />
                </div>
                <div>
                  <span className="block font-semibold mb-1.5 text-17px text-secondary font-poppins md:mb-2 md:text-20px">
                    Email Support
                  </span>
                  <a
                    href="mailto:support@bookmycare.in"
                    className="block text-textPrimary text-13px md:text-15px hover:text-primary transition-300"
                  >
                    support@bookmycare.in
                  </a>
                  <a
                    href="mailto:care@bookmycare.in"
                    className="block text-textPrimary text-13px md:text-15px hover:text-primary transition-300"
                  >
                    care@bookmycare.in
                  </a>
                </div>
              </li>

              <li className="mb-9 relative pl-[5.125rem] md:pl-[5.9375rem]">
                <div className="absolute border text-white text-xl md:text-2xl border-dashed border-primary w-[4.0625rem] md:w-[4.6875rem] h-[4.0625rem] md:h-[4.6875rem] rounded-full top-0 left-0 before:absolute before:content-[''] before:inset-0 before:bg-primary before:rounded-full before:m-1.5 before:shadow-contact-icon flex justify-center items-center">
                  <FaPhoneAlt className="relative z-[2]" />
                </div>
                <div>
                  <span className="block font-semibold mb-1.5 text-17px text-secondary font-poppins md:mb-2 md:text-20px">
                    Helpline
                  </span>
                  <a
                    href="tel:+919876543210"
                    className="block text-textPrimary text-13px md:text-15px hover:text-primary transition-300"
                  >
                    +91 98765 43210
                  </a>
                  <a
                    href="tel:+918765432109"
                    className="block text-textPrimary text-13px md:text-15px hover:text-primary transition-300"
                  >
                    +91 87654 32109
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 -translate-y-1/2 top-1/2 -z-[1] opacity-40">
        <img src={contactMap} alt="" />
      </div>
    </Section>
  );
};

export default SendMessage;
