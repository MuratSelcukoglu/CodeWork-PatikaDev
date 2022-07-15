import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2'
    },
    header_container: {
        padding: 5
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#EF5350',
        width: deviceWidth / 2.5,
        marginHorizontal: 20,
        borderRadius: 10,
        marginVertical: 20

    },
    button_text: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 5,
        color: 'white',

    },
    content: {
        height: deviceHeight / 1.7,
        backgroundColor: 'white'
    }
})