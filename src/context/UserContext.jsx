import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");
  const [token, setToken] = useState();
  const [role, setRole] = useState();
  const [dashData, setDashData] = useState(null);
  const [userData, setUserData] = useState(null);

  const currency = import.meta.env.VITE_CURRENCY;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_");
    return (
      dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    );
  };

  // Function to calculate the age eg. ( 20_01_2000 => 24 )
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
  };

  useEffect(() => {
    if (accessToken) {
      try {
        setToken(accessToken);
        const decodedToken = jwtDecode(accessToken);
        setUserData(decodedToken);
        setRole(decodedToken.role);
      } catch (error) {
        console.error("Invalid token", error);
        localStorage
          .clear()
          .then(() => {
            window.location.href = "/";
            window.location.reload();
          })
          .catch((error) => {
            console.error("Failed to clear local storage", error);
          });
      }
    }
  }, [accessToken]);

  const value = {
    token,
    setToken,
    role,
    dashData,
    setDashData,
    currency,
    slotDateFormat,
    calculateAge,
    userData,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserContextProvider;
