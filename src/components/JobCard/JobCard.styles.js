import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:8,
        margin:5,
        padding:5,
        backgroundColor:'white',
        borderColor:'#b2dfdb',
        flex:1,
        
    },
    nametext:{
        fontWeight:'bold',
        color:'black',
        fontSize:17,
        paddingLeft:10
    },
    innercontainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        margin:5,
        
    },
    companycontainer:{
        borderRadius:8,
        paddingHorizontal:8,
        paddingVertical:3,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    companytext:{
        color:'white',
        fontWeight:'bold',
        fontSize:14,
        backgroundColor:'#EF5350',
        borderRadius:10,
        padding:3
    },
    levelsText : {
        justifyContent:'flex-end',
        flex:1,
        color:'red',
        fontWeight:'bold',
    },
    altText: {
        fontSize:15,
        paddingLeft:10
    }
})