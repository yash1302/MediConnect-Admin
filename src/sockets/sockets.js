// frontend/src/socket.js
import { io } from "socket.io-client";
import { API_URL } from "../utils/Api.config";

export const getSocket = (token) => {
  if (!token) return null;
  return io(API_URL);
};
