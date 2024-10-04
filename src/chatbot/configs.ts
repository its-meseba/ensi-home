// chatbot/config.ts

import { createChatBotMessage } from 'react-chatbot-kit';
import { Config } from 'react-chatbot-kit';

const config: Config = {
  initialMessages: [createChatBotMessage('Hello! How can I assist you today?')],
  botName: 'AI Assistant',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#4F46E5',
    },
    chatButton: {
      backgroundColor: '#4F46E5',
    },
  },
};

export default config;
