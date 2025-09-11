import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { userContext } from "../../context/UserContext";
import {
  cancelAppointmentByAdmin,
  getAllAppointmentsForAdmin,
} from "../../utils/Api.utils";
import { toast } from "react-toastify";

const AllAppointments = () => {
  const [appointments, setAppointments] = React.useState([]);
  const { token, slotDateFormat, calculateAge, currency } =
    useContext(userContext);

  const handleCancelAppointment = async (appointmentId) => {
    try {
      const { data } = await cancelAppointmentByAdmin(appointmentId);
      if (data) {
        toast.success(data.message);
        handleGetAllAppointments();
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleGetAllAppointments = async () => {
    try {
      const { data } = await getAllAppointmentsForAdmin();
      if (data) {
        setAppointments(data);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    if (token) {
      handleGetAllAppointments();
    }
  }, [token]);

  return (
    <div className="w-full max-w-6xl m-5 ">
      <p className="mb-3 text-lg font-medium">All Appointments</p>

      <div className="bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll">
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        {appointments.map((item, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50"
            key={index}
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center gap-2">
              <img
                src={item.userData.image}
                className="w-8 rounded-full"
                alt=""
              />{" "}
              <p>{item.userData.name}</p>
            </div>
            <p className="max-sm:hidden">{calculateAge(item.userData.dob)}</p>
            <p>
              {slotDateFormat(item.slotDate)}, {item.slotTime}
            </p>
            <div className="flex items-center gap-2">
              <img
                src={item.docData.image}
                className="w-8 rounded-full bg-gray-200"
                alt=""
              />{" "}
              <p>{item.docData.name}</p>
            </div>
            <p>
              {currency}
              {item.amount}
            </p>
            {item.cancelled ? (
              <p className="text-red-400 text-xs font-medium">Cancelled</p>
            ) : item.isCompleted ? (
              <p className="text-green-500 text-xs font-medium">Completed</p>
            ) : (
              <img
                onClick={() => handleCancelAppointment(item._id)}
                className="w-10 cursor-pointer"
                src={assets.cancel_icon}
                alt=""
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;
