import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/UserContext";
import {
  changeDoctorAvailabilityByAdmin,
  getAllDoctorsForAdmin,
} from "../../utils/Api.utils";
import { toast } from "react-toastify";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const { token } = useContext(userContext);

  const handleFetchAllDoctors = async () => {
    try {
      const { data } = await getAllDoctorsForAdmin();
      if (data) {
        setDoctors(data);
      }
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  const handleChangeAvailability = async (doctorId) => {
    try {
      const { data } = await changeDoctorAvailabilityByAdmin(doctorId);
      if (data) {
        toast.success(data.message);
        handleFetchAllDoctors();
      }
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    if (token) {
      handleFetchAllDoctors();
    }
  }, [token]);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">All Doctors</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {doctors.map((item, index) => (
          <div
            className="border border-[#C9D8FF] rounded-xl max-w-56 overflow-hidden cursor-pointer group"
            key={index}
          >
            <img
              className="bg-[#EAEFFF] group-hover:bg-primary transition-all duration-500"
              src={item.image}
              alt=""
            />
            <div className="p-4">
              <p className="text-[#262626] text-lg font-medium">{item.name}</p>
              <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
              <div className="mt-2 flex items-center gap-1 text-sm">
                <input
                  onChange={() => handleChangeAvailability(item._id)}
                  type="checkbox"
                  checked={item.available}
                />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
