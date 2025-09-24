// src/components/ChatWindow.jsx
import React, { useEffect, useRef } from "react";

const ChatWindow = ({
  selectedPatient,
  messages,
  input,
  setInput,
  handleSend,
  userId,
}) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div className="w-full flex-1 flex flex-col">
      {/* Doctor Header */}
      <div className="flex items-center gap-3 p-4 border-b bg-gray-50">
        <img
          src={selectedPatient.image}
          alt={selectedPatient.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold">{selectedPatient.name}</div>
          <div className="text-xs text-gray-500">
            {selectedPatient.specialty}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-white">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-3 flex ${
              msg?.senderId === userId ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg?.senderId === userId
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg?.message}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-gray-50 flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
