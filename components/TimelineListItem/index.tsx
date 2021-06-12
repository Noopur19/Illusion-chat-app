import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom, User, CallRoom } from '../../types';
import moment from "moment";

import { useNavigation } from '@react-navigation/native';

import styles from './style';
import { Feather } from '@expo/vector-icons';

export type TimelineListItemProps = {
    user: CallRoom;
}

const TimelineListItem = (props: TimelineListItemProps) => {
    const { user } = props;

    const navigation = useNavigation();

    const onClick = () => {
        // to do
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <Text>Coming soon</Text>
            </View>
        </TouchableWithoutFeedback >
    )
};

export default TimelineListItem;