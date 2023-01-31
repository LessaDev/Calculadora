import React from "react";

import keyStyle from "./KeyboardStyle";
import {Text, TouchableHighlight} from "react-native";

export default (props) => {
    const styleKey = [keyStyle().key]
    if (props.double) styleKey.push(keyStyle().keyDouble)
    if (props.triple) styleKey.push(keyStyle().keyTriple)
    if (props.operation) styleKey.push(keyStyle().keyOperation)

    return(
            <TouchableHighlight onPress={() => props.onClick(props.label)}>
                <Text style={styleKey}>{props.label}</Text>
            </TouchableHighlight>
    )
}

