// typings/react-chatbot-kit.d.ts

declare module 'react-chatbot-kit' {
  import { ComponentType, CSSProperties } from 'react';

  export interface ChatbotMessage {
    id: number;
    type: 'bot' | 'user';
    message: string;
    widget?: string;
    loading?: boolean;
    delay?: number;
    unread?: boolean;
  }

  export interface Config {
    initialMessages: ChatbotMessage[];
    botName?: string;
    customComponents?: CustomComponents;
    customStyles?: CustomStyles;
    state?: any;
    widgets?: Widget[];
    customMessages?: CustomMessages;
  }

  export interface CustomComponents {
    header?: ComponentType<any>;
    botAvatar?: ComponentType<any>;
    userAvatar?: ComponentType<any>;
    botChatMessage?: ComponentType<any>;
    userChatMessage?: ComponentType<any>;
  }

  export interface CustomStyles {
    botMessageBox?: CSSProperties;
    chatButton?: CSSProperties;
    chatContainer?: CSSProperties;
    userMessageBox?: CSSProperties;
  }

  export interface Widget {
    widgetName: string;
    widgetFunc: (props: any) => JSX.Element;
    mapStateToProps?: string[];
    props?: any;
  }

  export interface CustomMessages {}

  export interface ChatbotMessageOptions {
    delay?: number;
    widget?: string;
    loading?: boolean;
    withAvatar?: boolean;
  }

  type CreateMessageFunction = (
    text: string,
    options?: ChatbotMessageOptions,
    stateToSet?: any
  ) => ChatbotMessage;

  const Chatbot: ComponentType<{
    config: Config;
    actionProvider: new (
      createChatBotMessage: CreateMessageFunction,
      setStateFunc: React.Dispatch<React.SetStateAction<any>>,
      createClientMessage: CreateMessageFunction
    ) => any;
    messageParser: new (actionProvider: any) => any;
    headerText?: string;
    placeholderText?: string;
    validator?: (message: string) => boolean;
    messageHistory?: ChatbotMessage[];
    runInitialMessagesWithHistory?: boolean;
    disableScrollToBottom?: boolean;
    messageParserProps?: any;
    actionProviderProps?: any;
  }>;

  export function createChatBotMessage(
    text: string,
    options?: ChatbotMessageOptions,
    stateToSet?: any
  ): ChatbotMessage;

  export function createClientMessage(
    text: string,
    options?: ChatbotMessageOptions
  ): ChatbotMessage;

  export default Chatbot;
}
