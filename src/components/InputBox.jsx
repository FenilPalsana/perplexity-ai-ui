import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useChatStore } from "../store/chatStore";

export default function InputBox() {
  const [text, setText] = useState("");
  const sendMessage = useChatStore((s) => s.sendMessage);

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text);
    setText("");
  };

  return (
    <div className="flex items-center gap-2 border rounded-xl px-4 py-3 shadow-sm bg-white">
      <Input
        value={text}
        placeholder="Ask anything..."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        className="w-80 border-none focus-visible:ring-0"
      />
      <Button onClick={handleSend}>Send</Button>
    </div>
  );
}

