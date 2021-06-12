import React from 'react';

import { Text, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ChatMessage from '../components/ChatMessage';

import chatRoomData from '../data/Chats';
import InputBox from '../components/InputBox';

const ChatRoomScreen = () => {
    const route = useRoute();
    console.log(route.params);
    return (
        <>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />
            <InputBox />
        </>
    );
}

export default ChatRoomScreen;