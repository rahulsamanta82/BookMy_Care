import { Section, SectionTitle } from "../components";

const Calendar = () => {
  return (
    <Section padding={true}>
      <div className="container">
        <SectionTitle
          center={true}
          title="Doctor Schedule"
          heading="Select Your Appointment Slot"
          desc="Check doctor availability and choose a convenient time for your consultation. Book easily and avoid long waiting hours at the clinic."
          className="mb-[2.1875rem] md:mb-[3.75rem]"
        />

        <div className="overflow-x-auto shadow-table">
          <table className="w-full text-center">
            <thead>
              <tr>
                <th className="py-4 font-medium text-white uppercase border-b bg-primary border-b-white">
                  Time
                </th>
                <th className="py-4 font-medium text-white uppercase border-b bg-primary border-b-white">
                  Monday
                </th>
                <th className="py-4 font-medium text-white uppercase border-b bg-primary border-b-white">
                  Tuesday
                </th>
                <th className="py-4 font-medium text-white uppercase border-b bg-primary border-b-white">
                  Wednesday
                </th>
                <th className="py-4 font-medium text-white uppercase border-b bg-primary border-b-white">
                  Thursday
                </th>
                <th className="py-4 font-medium text-white uppercase border-b bg-primary border-b-white">
                  Friday
                </th>
                <th className="py-4 font-medium text-white uppercase border-b bg-primary border-b-white">
                  Saturday
                </th>
              </tr>
            </thead>

            <tbody>
              {/* 9:00 AM */}
              <tr>
                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <span className="inline-block bg-[#dff5e8] text-primary rounded-full font-medium px-4 py-2">
                    9:00 AM
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Rakesh Sharma
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    Dermatologist
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Priya Nair
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    ENT Specialist
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Amit Verma
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    Neurologist
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0"></td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Sneha Kulkarni
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    Oncologist
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Arjun Patel
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    General Physician
                  </span>
                </td>
              </tr>

              {/* 12:00 PM */}
              <tr>
                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <span className="inline-block bg-[#dff5e8] text-primary rounded-full font-medium px-4 py-2">
                    12:00 PM
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0"></td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Karan Singh
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    Orthopaedic Surgeon
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Meena Iyer
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    Pain Management
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Rahul Deshmukh
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    Radiologist
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0"></td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Neha Choudhary
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    General Surgeon
                  </span>
                </td>
              </tr>

              {/* 3:00 PM */}
              <tr>
                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <span className="inline-block bg-[#dff5e8] text-primary rounded-full font-medium px-4 py-2">
                    3:00 PM
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Rakesh Sharma
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    Dermatologist
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Priya Nair
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    ENT Specialist
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0"></td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Amit Verma
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    Neurologist
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Sneha Kulkarni
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    Oncologist
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0"></td>
              </tr>

              {/* 6:00 PM */}
              <tr>
                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <span className="inline-block bg-[#dff5e8] text-primary rounded-full font-medium px-4 py-2">
                    6:00 PM
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Amit Verma
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    Neurologist
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Karan Singh
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    Orthopaedic Surgeon
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Meena Iyer
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    Pain Management
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Rahul Deshmukh
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    Radiologist
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Priya Nair
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    ENT Specialist
                  </span>
                </td>

                <td className="p-6 border border-[#eeeeee] border-t-0">
                  <h3 className="font-semibold text-secondary">
                    Dr. Neha Choudhary
                  </h3>
                  <span className="block mt-1 text-textPrimary">
                    {/* <span className="" */}
                    General Surgeon
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

export default Calendar;
