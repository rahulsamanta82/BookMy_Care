import { useReducer } from "react";
import { FaChevronRight } from "react-icons/fa";
import {
  BsTelephone,
  BsEnvelope,
  BsPerson,
  BsCalendar2Week,
  BsClock,
  BsChatDots,
  BsBriefcase,
} from "react-icons/bs";

import {
  SectionTitle,
  Button,
  Section,
  FormSelect,
  FormInput,
  FormTextArea,
} from "../components";
import appointmentBg from "../assets/appointment-bg.jpg";

import { servicesList, doctors } from "../data";
import {
  appointmentReducer,
  INITIAL_STATE,
} from "../reducers/appointmentReducer";

const BookAppointment = () => {
  const doctorsList = doctors.map((doctor) => doctor.name);
  const [state, dispatch] = useReducer(appointmentReducer, INITIAL_STATE);

  const { name, doctor, service, phone, date, time, request } =
    state.appointmentDetails;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.appointmentDetails);
  };

  return (
    <Section bgImg={appointmentBg} padding={true} className="bg-fixed">
      <div className="container flex justify-center">
        <div className="md:max-w-[630px] relative lg:max-w-[700px] w-full bg-white px-6 py-30px md:p-[3.125rem] shadow-appointment md:ml-auto lg:mr-28 before:absolute before:content-[''] before:bg-white before:w-[96%] before:opacity-60 before:h-1/2 before:-bottom-5 before:left-0 before:right-0 before:m-auto before:rounded-[3px]">
          <SectionTitle
            center={false}
            title="Book an Appointment"
            heading="Quick & Easy Doctor Booking"
            className="mb-6 text-center md:text-left md:mb-30px"
          />

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-30px">
              <FormInput
                icon={<BsPerson />}
                label="Patient Name"
                value={name}
                name="name"
                dispatch={dispatch}
                placeholder="Enter patient name"
              />

              <FormSelect
                selectList={doctorsList}
                icon={<BsEnvelope />}
                label="Choose Doctor"
                id="doctor-select"
                name="doctor"
                value={doctor}
                dispatch={dispatch}
              />

              <FormSelect
                selectList={servicesList}
                icon={<BsBriefcase />}
                label="Select Department / Service"
                id="service-select"
                name="service"
                value={service}
                dispatch={dispatch}
              />

              <FormInput
                icon={<BsTelephone />}
                label="Mobile Number"
                value={phone}
                name="phone"
                dispatch={dispatch}
                placeholder="Enter 10-digit mobile number"
              />

              <FormInput
                icon={<BsCalendar2Week />}
                label="Preferred Date"
                value={date}
                name="date"
                dispatch={dispatch}
                placeholder="DD/MM/YYYY"
              />

              <FormInput
                icon={<BsClock />}
                label="Preferred Time"
                value={time}
                name="time"
                dispatch={dispatch}
                placeholder="e.g. 10:30 AM"
              />

              <FormTextArea
                icon={<BsChatDots />}
                label="Health Concern (Optional)"
                value={request}
                name="request"
                dispatch={dispatch}
                placeholder="Briefly describe your problem"
              />
            </div>

            <div className="text-center mt-30px md:mt-[2.25rem]">
              <Button icon={<FaChevronRight />}>
                Book Appointment
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default BookAppointment;
