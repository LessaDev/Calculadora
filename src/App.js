import { StatusBar } from 'expo-status-bar';
import React, {Component}from 'react';
import { SafeAreaView, View,} from 'react-native';


import appStyle from "./AppStyle";
import keyboardStyle from "./components/keyboard.js/KeyboardStyle";
import KeyboardKey from "./components/keyboard.js/KeyboardKey";
import Display from "./components/display/display";

const initialState ={
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current:0,
}

export default class App extends Component {
    state ={ ...initialState } //usando para clonar o estado initial

    addDigit = n => {

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay: false})

        if(n !== '.') {
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[this.state.current] = newValue
            this.setState({values})
        }
    }

    clearMemory = () => {
        this.setState({...initialState})
    }

    setOperation = operation => {
        if(this.state.current === 0) {
            this.setState({operation, current: 1, clearDisplay:true})
        } else{
            const equals = operation === '='
            const values = [...this.state.values]
            try {
                values[0] =
                    eval(`${values[0]} ${this.state.operation} ${values[1]}`)
            } catch (e){
                values[0] = this.state.values[0]
            }
            values[1] = 0
            this.setState({
                displayValue: `${values[0]}`,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values,
            })
        }

    }

  render (){
        return(<SafeAreaView style={appStyle().container}>
            <StatusBar style="auto" />
            <Display value={this.state.displayValue}/>
            <View style={keyboardStyle().keyboard} >
                <KeyboardKey label='AC' triple onClick={this.clearMemory}/>
                <KeyboardKey label='/' operation onClick={this.setOperation}/>

                <KeyboardKey label='7' onClick={this.addDigit}/>
                <KeyboardKey label='8' onClick={this.addDigit}/>
                <KeyboardKey label='9' onClick={this.addDigit}/>

                <KeyboardKey label='*' operation onClick={this.setOperation}/>

                <KeyboardKey label='4' onClick={this.addDigit}/>
                <KeyboardKey label='5' onClick={this.addDigit}/>
                <KeyboardKey label='6' onClick={this.addDigit}/>

                <KeyboardKey label='-' operation onClick={this.setOperation}/>

                <KeyboardKey label='1' onClick={this.addDigit}/>
                <KeyboardKey label='2' onClick={this.addDigit}/>
                <KeyboardKey label='3' onClick={this.addDigit}/>

                <KeyboardKey label='+' operation onClick={this.setOperation}/>

                <KeyboardKey label='0' double onClick={this.addDigit} />
                <KeyboardKey label='.' onClick={this.addDigit}/>

                <KeyboardKey label='=' operation onClick={this.setOperation}/>

            </View>
        </SafeAreaView>)
  }
}

