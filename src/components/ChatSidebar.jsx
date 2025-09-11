// src/components/ChatSidebar.jsx
import React from "react";

const ChatSidebar = ({ doctors, selectedPatient, setSelectedPatient }) => {
  return (
    <div className="w-1/3 bg-gray-100 p-4 border-r">
      <h2 className="text-lg font-semibold mb-4">Your Doctors</h2>
      <ul>
        {doctors.slice(0, 5).map((doc) => (
          <li
            key={doc._id}
            className={`flex items-center gap-3 p-2 mb-2 rounded-lg cursor-pointer hover:bg-gray-200 ${
              selectedPatient.id === doc.id ? "bg-blue-100" : ""
            }`}
            onClick={() => setSelectedPatient(doc)}
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-medium">{doc.name}</div>
              <div className="text-xs text-gray-500">
                {doc.specialty}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
