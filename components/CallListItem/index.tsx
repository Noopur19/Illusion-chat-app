import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom, User, CallRoom } from '../../types';
import moment from "moment";

import { useNavigation } from '@react-navigation/native';

import styles from './style';
import { Feather } from '@expo/vector-icons';

export type CallListItemProps = {
    call: CallRoom;
}

const CallListItem = (props: CallListItemProps) => {
    const { call } = props;
    const user = call.users[1];

    const navigation = useNavigation();

    const onClick = () => {
        // to do
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <View style={styles.subMidContainer}>
                            <Feather name="phone-call" size={20} color="grey" />
                            <Text style={styles.lastMessage}>{call.lastCall.status}</Text>
                        </View>
                        <Text style={styles.time}>
                            {moment(call.lastCall.calledAt).format('DD/MM/YYYY')}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default CallListItem;