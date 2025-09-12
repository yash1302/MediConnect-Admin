import React, { useState, useEffect, useRef, useContext } from "react";

import {
  getPatientsForChat,
  getRoomId,
  getRoomMessages,
} from "../utils/Api.utils";
import { toast } from "react-toastify";
import ChatSidebar from "../components/ChatSidebar";
import ChatWindow from "../components/ChatWindow";
import { userContext } from "../context/UserContext";
import { getSocket } from "../sockets/sockets";

export default function Chat() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [roomId, setRoomId] = useState("");

  const socketRef = useRef(null);
  const { token, userData } = useContext(userContext);

  const handleGetPatientsToChat = async () => {
    try {
      const { data } = await getPatientsForChat();
      if (data) {
        setPatients(data);
        setSelectedPatient(data[0]);
      }
    } catch (error) {
      toast.error("failed to fetch doctors");
    }
  };

  useEffect(() => {
    const init = async () => {
      if (token) {
        socketRef.current = getSocket(token);
      }
      await handleGetPatientsToChat();
    };
    init();
    return () => {
      if (socketRef.current) {
        socketRef.current.off("private_message");
        socketRef.current.disconnect();
      }
    };
  }, [token]);

  const handleSend = () => {
    if (input.trim() && socketRef.current && selectedPatient) {
      const message = {
        senderId: userData?.userId,
        message: input,
        receiverId: selectedPatient._id,
        roomId: roomId,
      };
      //   setMessages([...messages, message]);
      socketRef.current.emit("private_message", message);
      setInput("");
    }
  };

  const joinRoom = () => {
    console.log(roomId, "roomid admin");
    if (socketRef.current) {
      socketRef.current.emit("join_room", roomId);
    }
  };

  const handleFetchRoomId = async () => {
    try {
      const { data } = await getRoomId(selectedPatient._id);
      if (data?._id) {
        setRoomId(data._id);
      } else {
        setRoomId(selectedPatient._id + userData.userId);
      }
    } catch (error) {
      toast.error("failed to fetch room id");
    }
  };

  const handleFetchRoomMessages = async () => {
    try {
      const { data } = await getRoomMessages(selectedPatient._id);
      if (data) {
        setMessages(data);
      }
    } catch (error) {
      toast.error("failed to fetch room messages");
    }
  };

  useEffect(() => {
    const fetchAndJoinRoom = async () => {
      if (selectedPatient) {
        await handleFetchRoomId();
        await handleFetchRoomMessages();
      }
    };
    fetchAndJoinRoom();
  }, [selectedPatient]);

  useEffect(() => {
    if (roomId) {
      joinRoom();
    }
  }, [roomId]);

  useEffect(() => {
    if (!socketRef.current || !roomId) return;
    const handleMessage = (msg) => {
        console.log(roomId, "roomid in handle message");
        console.log(msg.roomId, "msg in handle message");
      if (msg.roomId === roomId) {
        setMessages((prev) => [...prev, msg]);
      }
    };
    socketRef.current.on("private_message", handleMessage);
    return () => {
      socketRef.current.off("private_message", handleMessage);
    };
  }, [roomId]);

  return (
    <div className=" m-8 flex h-[80vh] w-[80vw] bg-white rounded-lg shadow-lg overflow-hidden">
      {patients && selectedPatient && (
        <>
          <ChatSidebar
            doctors={patients}
            selectedPatient={selectedPatient}
            setSelectedPatient={setSelectedPatient}
          />
          <ChatWindow
            selectedPatient={selectedPatient}
            messages={messages}
            input={input}
            setInput={setInput}
            handleSend={handleSend}
            userId={userData?.userId}
          />
        </>
      )}
    </div>
  );
}
