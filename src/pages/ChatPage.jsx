import ChatList from "@/components/ChatList";
import InputBox from "@/components/InputBox";
import { useChatStore } from "../store/chatStore";

export default function ChatPage() {
  const { messages } = useChatStore();

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center">
      

    {messages.length > 0 && (
            <div className="w-full flex mt-4">
            <div className="w-full max-w-3xl px-4">
                <ChatList />
            </div>
            </div>
        )}

      <div>
        <h1 className="mt-24 mb-10 text-4xl text-center w-full font-semibold">
            perplexity
        </h1>

        <div className="w-full flex justify-center">
            <div>
            <InputBox />
            </div>
        </div>

        </div>
      </div>
      
      
  );
}
