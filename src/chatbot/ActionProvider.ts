// chatbot/ActionProvider.ts

import {
  createChatBotMessage,
  createClientMessage,
  ChatbotMessage,
  ChatbotMessageOptions,
} from 'react-chatbot-kit';

export type ActionProviderType = {
  handleDefault: (message: string) => void;
  handleMessage: (message: string) => void;
};

type CreateMessageFunction = (
  text: string,
  options?: ChatbotMessageOptions,
  stateToSet?: any
) => ChatbotMessage;

class ActionProvider implements ActionProviderType {
  createChatBotMessage: CreateMessageFunction;
  createClientMessage: CreateMessageFunction;
  setState: React.Dispatch<React.SetStateAction<any>>;

  constructor(
    createChatBotMessage: CreateMessageFunction,
    setStateFunc: React.Dispatch<React.SetStateAction<any>>,
    createClientMessage: CreateMessageFunction
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleDefault(message: string) {
    const botMessage = this.createChatBotMessage(
      "I'm here to assist you with any questions about our products."
    );

    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, botMessage],
    }));
  }

  async handleMessage(message: string) {
    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (response.ok) {
        const botMessage = this.createChatBotMessage(data.response);

        this.setState((prevState: any) => ({
          ...prevState,
          messages: [...prevState.messages, botMessage],
        }));
      } else {
        const botMessage = this.createChatBotMessage(
          data.error || 'Sorry, something went wrong.'
        );

        this.setState((prevState: any) => ({
          ...prevState,
          messages: [...prevState.messages, botMessage],
        }));
      }
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      const botMessage = this.createChatBotMessage(
        'Sorry, something went wrong.'
      );

      this.setState((prevState: any) => ({
        ...prevState,
        messages: [...prevState.messages, botMessage],
      }));
    }
  }
}

export default ActionProvider;
