import React from "react";
import {Text, View} from "react-native";
import displayStyle from "./displayStyle";
export default (props) => {
    return (
        <View style={displayStyle().displayBox}>
            <Text style={displayStyle().displayValue} numberOfLines={1}>
                {props.value}
            </Text>
        </View>
    )
}