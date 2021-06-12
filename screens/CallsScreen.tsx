import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { View } from '../components/Themed';

import calls from '../data/CallRooms';
import CallListItem from '../components/CallListItem';

import callRooms from '../data/ChatRooms';

export default function CallsScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: '100%' }}
                data={calls}
                renderItem={({ item }) => <CallListItem call={item} />}
                keyExtractor={(item) => item.id}
            />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
