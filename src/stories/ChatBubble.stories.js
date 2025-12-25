import ChatBubble from "@/components/ChatBubble";

export default {
  title: "Chat/ChatBubble",
  component: ChatBubble,
};

export const UserMessage = {
  args: {
    message: {
      sender: "user",
      text: "Hello!",
    },
  },
};

export const AIMessage = {
  args: {
    message: {
      sender: "ai",
      text: "This is a sample AI answer.",
    },
  },
};
