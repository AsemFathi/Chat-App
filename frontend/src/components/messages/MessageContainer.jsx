import MessageInput from "./MessageInput"
import Messages from "./Messages"
import {TiMessages} from "react-icons/ti"

function MessageContainer() {
  
  const noChatSelected= true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
            {/* Header */}
            <div className="bg-slate-500 px-4 py-2 mb-2">
                <span className="label-text">To: </span>
                <span className="text-gray-900 font-bold">John Doe</span>
            </div>

            <Messages />
            <MessageInput />

        </>
      )
      }
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-xl md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 John Doe</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className= "text-3xl md:text-6xl text-center"/>
      </div>
    </div>
  );
}



/* 
STARTER CODE FOR THIS FILE
import MessageInput from "./MessageInput"
import Messages from "./Messages"

function MessageContainer() {
  return (
    <div className="md:min-w-[450px] flex flex-col">
        <>
            
            <div className="bg-slate-500 px-4 py-2 mb-2">
                <span className="label-text">To: </span>
                <span className="text-gray-900 font-bold">John Doe</span>
            </div>

            <Messages />
            <MessageInput />

        </>
    </div>
  )
}

export default MessageContainer */