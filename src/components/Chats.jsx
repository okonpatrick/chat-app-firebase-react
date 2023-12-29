import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log(Object.entries.photoURL)

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
    
  };

  return (
    <div className="chats" >
   <p className="p-2 color-black-500">All Chats</p>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
        
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>
  {chat[1].lastMessage?.text}{' '}
  <span className="inline-flex items-center justify-center h-5 w-5 bg-blue-500 text-white rounded-full">
    {chat[1].lastMessage.text.length}
  </span>
</p>

{/* {console.log(chat[1].lastMessage.text.length)} */}
          </div>
        </div>
      ))}
    
    </div>
  );
};

export default Chats;
