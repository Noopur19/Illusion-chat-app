import React, { useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Platform, KeyboardAvoidingView } from 'react-native';
import { ChatRoom } from '../../types';
import styles from '../InputBox/style';
import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const InputBox = () => {
    const [message, setMessage] = useState("");

    const onMicrophonePress = () => {

    }

    const onSendPress = () => {

        setMessage('');

    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress()
        } else {
            onSendPress()
        }
    }

    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={100}
                style={styles.container}
            >
                <View style={styles.container}>
                    <View style={styles.mainContainer}>
                        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                        <TextInput
                            placeholder={"Start Typing..."}
                            style={styles.textInput}
                            multiline
                            value={message}
                            onChangeText={setMessage}
                        />
                        <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
                        {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} />}
                    </View>
                    <TouchableOpacity onPress={onPress}>
                        <View style={styles.buttonContainer}>
                            {!message ?
                                <MaterialCommunityIcons name="microphone" size={24} color="white" />
                                :
                                <MaterialIcons name="send" size={24} color="white" />
                            }
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    )
};

export default InputBox;