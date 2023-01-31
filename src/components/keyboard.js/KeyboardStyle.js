import React from "react";
import {StyleSheet,Dimensions} from "react-native";

export default () => StyleSheet.create({
    keyboard:{
        flexDirection: "row",
        flexWrap: "wrap",
    },
    key: {
       fontSize: 40,
        height: Dimensions.get('window').width/4, //Dimensions pega a dimensão da tela
        width: Dimensions.get('window').width/4,
        padding:20,
        backgroundColor:'#f0f0f0',
        textAlign: 'center',
        borderWidth:1,
        borderColor:'#888',
    },
    keyOperation:{
        color:'#fff',
        backgroundColor:'#fa8231'
    },
    keyDouble:{
        width: (Dimensions.get('window').width/4) * 2,
    },
    keyTriple:{
        width: (Dimensions.get('window').width/4) * 3,
    }

});


