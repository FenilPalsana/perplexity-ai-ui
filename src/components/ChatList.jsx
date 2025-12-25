import ChatBubble from "./ChatBubble";
import Loader from "./Loader";
import { useChatStore } from "../store/chatStore";

export default function ChatList() {
  const { messages, loading } = useChatStore();

  return (
    <div className="space-y-4 py-6">
      {messages.map((msg, i) => (
        <ChatBubble key={i} message={msg} />
      ))}
      {loading && <Loader />}
    </div>
  );
}

