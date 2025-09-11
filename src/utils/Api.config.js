export const API_URL = import.meta.env.VITE_BACKEND_URL;

export const ApiConfig = {
  DOCTOR_LOGIN: `${API_URL}/api/doctor/login`,
  DOCTOR_CANCEL_APPOINTMENT: `${API_URL}/api/doctor/cancel-appointment`,
  DOCTOR_APPOINTMENTS: `${API_URL}/api/doctor/appointments`,
  DOCTOR_LIST: `${API_URL}/api/doctor/list`,
  DOCTOR_CHANGE_AVAILABILITY: `${API_URL}/api/doctor/change-availability`,
  DOCTOR_COMPLETE_APPOINTMENT: `${API_URL}/api/doctor/complete-appointment`,
  DOCTOR_DASHBOARD: `${API_URL}/api/doctor/dashboard`,
  DOCTOR_PROFILE: `${API_URL}/api/doctor/profile`,
  DOCTOR_UPDATE_PROFILE: `${API_URL}/api/doctor/update-profile`,
  GET_PATIENTS_FOR_DOCTOR: `${API_URL}/api/doctor/patients`,
  GET_ROOM_ID: "api/user/get-room-id",
  GET_ROOM_MESSAGES: "api/user/get-room-messages",

  ADMIN_LOGIN: `${API_URL}/api/admin/login`,
  ADMIN_ADD_DOCTOR: `${API_URL}/api/admin/add-doctor`,
  ADMIN_APPOINTMENTS: `${API_URL}/api/admin/appointments`,
  ADMIN_CANCEL_APPOINTMENT: `${API_URL}/api/admin/cancel-appointment`,
  ADMIN_ALL_DOCTOR_LIST: `${API_URL}/api/admin/all-doctors`,
  ADMIN_CHANGE_AVAILABILITY: `${API_URL}/api/admin/change-availability`,
  ADMIN_DASHBOARD: `${API_URL}/api/admin/dashboard`,
};
