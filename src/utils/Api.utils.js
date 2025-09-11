import { ApiConfig } from "./Api.config";
import axiosclient from "./Axios-client";

const {
  DOCTOR_LOGIN,
  DOCTOR_APPOINTMENTS,
  DOCTOR_CANCEL_APPOINTMENT,
  DOCTOR_CHANGE_AVAILABILITY,
  DOCTOR_COMPLETE_APPOINTMENT,
  DOCTOR_DASHBOARD,
  DOCTOR_LIST,
  DOCTOR_PROFILE,
  DOCTOR_UPDATE_PROFILE,
  ADMIN_LOGIN,
  ADMIN_ADD_DOCTOR,
  ADMIN_APPOINTMENTS,
  ADMIN_CANCEL_APPOINTMENT,
  ADMIN_ALL_DOCTOR_LIST,
  ADMIN_CHANGE_AVAILABILITY,
  ADMIN_DASHBOARD,
  GET_PATIENTS_FOR_DOCTOR,
  GET_ROOM_ID,
  GET_ROOM_MESSAGES
} = ApiConfig;

export const doctorLogin = async (email, password) => {
  try {
    const result = await axiosclient.post(DOCTOR_LOGIN, { email, password });
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const doctorDashboardData = async () => {
  try {
    const result = await axiosclient.get(DOCTOR_DASHBOARD);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const getDoctorAppointments = async () => {
  try {
    const result = await axiosclient.get(DOCTOR_APPOINTMENTS);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const cancelDoctorAppointment = async (appointmentId) => {
  try {
    const result = await axiosclient.post(DOCTOR_CANCEL_APPOINTMENT, {
      appointmentId,
    });
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const doctorList = async () => {
  try {
    const result = await axiosclient.get(DOCTOR_LIST);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const changeDoctorAvailability = async () => {
  try {
    const result = await axiosclient.post(DOCTOR_CHANGE_AVAILABILITY);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const completeDoctorAppointment = async (appointmentId) => {
  try {
    const result = await axiosclient.post(DOCTOR_COMPLETE_APPOINTMENT, {
      appointmentId,
    });
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const getDoctorProfile = async () => {
  try {
    const result = await axiosclient.get(DOCTOR_PROFILE);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const updateDoctorProfile = async (formData) => {
  try {
    const result = await axiosclient.post(DOCTOR_UPDATE_PROFILE, formData);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const adminLogin = async (email, password) => {
  try {
    const result = await axiosclient.post(ADMIN_LOGIN, { email, password });
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const getAllDoctorsForAdmin = async () => {
  try {
    const result = await axiosclient.get(ADMIN_ALL_DOCTOR_LIST);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const changeDoctorAvailabilityByAdmin = async (docId) => {
  try {
    const result = await axiosclient.post(ADMIN_CHANGE_AVAILABILITY, {
      docId,
    });
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const getAllAppointmentsForAdmin = async () => {
  try {
    const result = await axiosclient.get(ADMIN_APPOINTMENTS);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const cancelAppointmentByAdmin = async (appointmentId) => {
  try {
    const result = await axiosclient.post(ADMIN_CANCEL_APPOINTMENT, {
      appointmentId,
    });
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const adminDashboardData = async () => {
  try {
    const result = await axiosclient.get(ADMIN_DASHBOARD);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const addDoctorByAdmin = async (formData) => {
  try {
    const result = await axiosclient.post(ADMIN_ADD_DOCTOR, formData);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const getPatientsForChat = async () => {
  try {
    const result = await axiosclient.get(GET_PATIENTS_FOR_DOCTOR);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const getRoomId = async (receiverId) => {
  try {
    const result = await axiosclient.get(`${GET_ROOM_ID}/${receiverId}`);
    return result.data;
  } catch (error) {
    throw error;
  }
};


export const getRoomMessages = async (receiverId) => {
  try {
    const result = await axiosclient.get(`${GET_ROOM_MESSAGES}/${receiverId}`);
    return result.data;
  } catch (error) {
    throw error;
  }
};
