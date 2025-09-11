import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import { userContext } from "../../context/UserContext";
import { cancelDoctorAppointment, completeDoctorAppointment, getDoctorAppointments } from "../../utils/Api.utils";
import { toast } from "react-toastify";

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const { token, slotDateFormat, calculateAge, currency } =
    useContext(userContext);

  const handleFetchDoctorsAppointments = async () => {
    try {
      const { data } = await getDoctorAppointments();
      if (data) {
        setAppointments(data);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleCancelAppointment = async (appointmentId) => {
    try {
      const { data } = await cancelDoctorAppointment(appointmentId);
      if (data) {
        toast.success(data.message);
        handleFetchDoctorsAppointments();
      }
    } catch (error) {
      toast.error(error);
    }
  }

  const handleCompleteAppointment = async (appointmentId) => {
    try {
      const { data } = await completeDoctorAppointment(appointmentId);
      if (data) {
        toast.success(data.message);
        handleFetchDoctorsAppointments();
      }
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    if (token) {
      handleFetchDoctorsAppointments();
    }
  }, [token]);

  return (
    <div className="w-full max-w-6xl m-5 ">
      <p className="mb-3 text-lg font-medium">All Appointments</p>

      <div className="bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll">
        <div className="max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        {appointments.map((item, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50"
            key={index}
          >
            <p className="max-sm:hidden">{index}</p>
            <div className="flex items-center gap-2">
              <img
                src={item.userData.image}
                className="w-8 rounded-full"
                alt=""
              />{" "}
              <p>{item.userData.name}</p>
            </div>
            <div>
              <p className="text-xs inline border border-primary px-2 rounded-full">
                {item.payment ? "Online" : "CASH"}
              </p>
            </div>
            <p className="max-sm:hidden">{calculateAge(item.userData.dob)}</p>
            <p>
              {slotDateFormat(item.slotDate)}, {item.slotTime}
            </p>
            <p>
              {currency}
              {item.amount}
            </p>
            {item.cancelled ? (
              <p className="text-red-400 text-xs font-medium">Cancelled</p>
            ) : item.isCompleted ? (
              <p className="text-green-500 text-xs font-medium">Completed</p>
            ) : (
              <div className="flex">
                <img
                  onClick={() => handleCancelAppointment(item._id)}
                  className="w-10 cursor-pointer"
                  src={assets.cancel_icon}
                  alt=""
                />
                <img
                  onClick={() => handleCompleteAppointment(item._id)}
                  className="w-10 cursor-pointer"
                  src={assets.tick_icon}
                  alt=""
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;
