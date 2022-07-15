import React from 'react'
import { View, Text } from 'react-native'
import styles from './DetailsCard.styles';

function DetailsCard({ item }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header_text}>{item.name}</Text>
            <View style={styles.location}>
                <Text style={styles.location_text} >Location: </Text>
                <Text style={styles.item_text}>{item.locations[0].name}</Text>
            </View>
            <View style={styles.level}>
                <Text style={styles.level_text}>Level: </Text>
                <Text style={styles.item_text}>{item.levels[0].name}</Text>
            </View>
                <Text style={styles.footer_text}>Job Detail</Text>
        </View>
    )
}
export default DetailsCard
