import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./context/ProtectedRoutes";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import DoctorProfile from "./pages/Doctor/DoctorProfile";
import Unauthorized from "./pages/Unauthorized";
import Chat from "./pages/Chat";

export const doctorRoutes = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes roles={["doctor"]} />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <DoctorDashboard /> },
          { path: "doctor-dashboard", element: <DoctorDashboard /> },
          { path: "doctor-appointments", element: <DoctorAppointments /> },
          { path: "doctor-profile", element: <DoctorProfile /> },
          { path: "chat", element: <Chat /> },
        ],
      },
    ],
  },

  {
    path: "/Unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <Unauthorized />,
  },
]);

export const loginRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "*",
    element: <Unauthorized />,
  },
]);

export const adminRoutes = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes roles={["admin"]} />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "admin-dashboard", element: <Dashboard /> },
          { path: "all-appointments", element: <AllAppointments /> },
          { path: "add-doctor", element: <AddDoctor /> },
          { path: "doctor-list", element: <DoctorsList /> },
        ],
      },
    ],
  },
  {
    path: "/Unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <Unauthorized />,
  },
]);
