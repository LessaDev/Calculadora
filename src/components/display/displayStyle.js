import React from "react";
import { StyleSheet} from "react-native";

export default () => StyleSheet.create({
    displayBox:{
        flex:1,
        padding:20,
        justifyContent: "center",
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.6)'

    },
    displayValue:{
        fontSize:60,
        color:'white'
    }
});