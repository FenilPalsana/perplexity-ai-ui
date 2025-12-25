import { Card } from "./ui/card";

export default function ChatBubble({ message }) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <Card
        className={`px-4 py-3 max-w-[80%] text-sm ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        {message.text}
      </Card>
    </div>
  );
}
