import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './JobCard.styles';

function JobCard({ job, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container} >
                <Text style={styles.nametext} >{job.name}</Text>
                <Text style={styles.altText}>Sprinklr</Text>
                <View style={styles.innercontainer} >
                    <View style={styles.companycontainer} >
                        <View>
                            <Text style={styles.companytext} >{job.locations[0].name}</Text>
                        </View>
                        <View>
                            <Text style={styles.levelsText} >{job.levels[0].name}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default JobCard