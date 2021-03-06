/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ChatRoom: undefined;
  Contacts: undefined;
  Calls: undefined;
};

export type BottomTabParamList = {
  Timeline: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: string;
  name: string;
  imageUri: string;
}

export type Message = {
  id: string;
  content: string;
  createdAt: string;
}

export type Call = {
  id: string;
  status: string;
  calledAt: string;
}

export type ChatRoom = {
  id: string;
  users: User[];
  lastMessage: Message;
}

export type CallRoom = {
  id: string;
  users: User[];
  lastCall: Call;
}