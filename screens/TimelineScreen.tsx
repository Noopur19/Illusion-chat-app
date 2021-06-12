import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { View, Text } from '../components/Themed';
import TimelineListItem from '../components/TimelineListItem';
import users from '../data/Users';

export default function TimelineScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: '100%' }}
                data={users}
                renderItem={({ item }) => <TimelineListItem call={item} />}
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
