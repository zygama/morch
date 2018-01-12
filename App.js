/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native';
import Torch from 'react-native-torch';
import { height, width } from 'react-native-dimension';

import ModeButton from './components/ModeButton';
// import Morse from './api/Morse';



export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.torchOn = false;
    this.pointDuration = 500; // ms
  }

  state = {
    classicTorchMode: true, // it can only be one of two active and the other inactive
    morseTorchMode: false,
    textInput: ''
  };

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async morsePoint() {
    console.log('point');
    return new Promise( async (resolve) => {
      Torch.switchState(true);
      await this.sleep(this.pointDuration);
      Torch.switchState(false);
      resolve();
    });
  }

  async morseDash() {
    console.log('dash');
    return new Promise( async (resolve) => {
      Torch.switchState(true);
      await this.sleep(this.pointDuration * 3);
      Torch.switchState(false);
      resolve();
    });
  }

  // ========================================================================== //
  //                     Declaration Morse letters and numbers
  // ========================================================================== //

  async morse_0() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_1() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_2() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_3() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_4() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_5() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_6() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_7() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_8() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_9() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_A() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_B() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_C() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_D() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_E() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      resolve();
    });
  }

  async morse_F() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_G() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_H() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_I() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_J() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_K() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_L() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
    await this.morsePoint();
      resolve();
    });
  }

  async morse_M() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_N() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_O() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_P() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_Q() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_R() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_S() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  async morse_T() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      resolve();
    });
  }

  async morse_U() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_V() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_W() {
    return new Promise( async (resolve) => {
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_X() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_Y() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      resolve();
    });
  }

  async morse_Z() {
    return new Promise( async (resolve) => {
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morseDash();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      await this.sleep(this.pointDuration);
      await this.morsePoint();
      resolve();
    });
  }

  // ========================================================================== //
  //                         End Morse letters and numbers
  // ========================================================================== //

  async SOS() {
    await this.morse_S();
    await this.sleep(this.pointDuration);
    await this.morse_O();
    await this.sleep(this.pointDuration);
    await this.morse_S();
  }

  // ========================================================================== //

  async sayLetterInMorse(p_letterToSayInMorse) {
    return new Promise( async (resolve) => {
      if (p_letterToSayInMorse === '0') {
        await this.morse_0();
        resolve();
      } else if (p_letterToSayInMorse === '1') {
        await this.morse_1();
        resolve();
      } if (p_letterToSayInMorse === '2') {
        await this.morse_2();
        resolve();
      } if (p_letterToSayInMorse === '3') {
        await this.morse_3();
        resolve();
      } if (p_letterToSayInMorse === '4') {
        await this.morse_4();
        resolve();
      } if (p_letterToSayInMorse === '5') {
        await this.morse_5();
        resolve();
      } if (p_letterToSayInMorse === '6') {
        await this.morse_6();
        resolve();
      } if (p_letterToSayInMorse === '7') {
        await this.morse_7();
        resolve();
      } if (p_letterToSayInMorse === '8') {
        await this.morse_8();
        resolve();
      } if (p_letterToSayInMorse === '9') {
        await this.morse_9();
        resolve();
      } else if (p_letterToSayInMorse === 'a') {
        await this.morse_A();
        resolve();
      } else if (p_letterToSayInMorse === 'b') {
        await this.morse_B();
        resolve();
      } else if (p_letterToSayInMorse === 'c') {
        await this.morse_C();
        resolve();
      } else if (p_letterToSayInMorse === 'd') {
        await this.morse_D();
        resolve();
      } else if (p_letterToSayInMorse === 'e') {
        await this.morse_E();
        resolve();
      } else if (p_letterToSayInMorse === 'f') {
        await this.morse_F();
        resolve();
      } else if (p_letterToSayInMorse === 'g') {
        await this.morse_G();
        resolve();
      } else if (p_letterToSayInMorse === 'h') {
        await this.morse_H();
        resolve();
      } else if (p_letterToSayInMorse === 'i') {
        await this.morse_I();
        resolve();
      } else if (p_letterToSayInMorse === 'j') {
        await this.morse_J();
        resolve();
      } else if (p_letterToSayInMorse === 'k') {
        await this.morse_K();
        resolve();
      } else if (p_letterToSayInMorse === 'l') {
        await this.morse_L();
        resolve();
      } else if (p_letterToSayInMorse === 'm') {
        await this.morse_M();
        resolve();
      } else if (p_letterToSayInMorse === 'n') {
        await this.morse_N();
        resolve();
      } else if (p_letterToSayInMorse === 'o') {
        await this.morse_O();
        resolve();
      } else if (p_letterToSayInMorse === 'p') {
        await this.morse_P();
        resolve();
      } else if (p_letterToSayInMorse === 'q') {
        await this.morse_Q();
        resolve();
      } else if (p_letterToSayInMorse === 'r') {
        await this.morse_R();
        resolve();
      } else if (p_letterToSayInMorse === 's') {
        await this.morse_S();
        resolve();
      } else if (p_letterToSayInMorse === 't') {
        await this.morse_T();
        resolve();
      } else if (p_letterToSayInMorse === 'u') {
        await this.morse_U();
        resolve();
      } else if (p_letterToSayInMorse === 'v') {
        await this.morse_V();
        resolve();
      } else if (p_letterToSayInMorse === 'w') {
        await this.morse_W();
        resolve();
      } else if (p_letterToSayInMorse === 'x') {
        await this.morse_X();
        resolve();
      } else if (p_letterToSayInMorse === 'y') {
        await this.morse_Y();
        resolve();
      } else if (p_letterToSayInMorse === 'z') {
        await this.morse_Z();
        resolve();
      }
    });
  }

  sayWordInMorse = async (p_wordToSayInMorse) => {

    return new Promise( async (resolve) => {
      const currentString = p_wordToSayInMorse.toLowerCase();

      for (const i = 0; i < currentString.length; i++) {
        console.log(currentString.charAt(i));
        await this.sayLetterInMorse(currentString.charAt(i));
        if (i < currentString.length - 1) {
          await this.sleep(this.pointDuration * 3); // space between 2 letters = 3 pts
        }
      }
      console.log('word in morse entirely said');
      resolve();
    } );
  }

   translateToMorse = (p_wordToSayInMorse) => {
    // return new Promise ( async (resolve) => {
    //
    //   resolve();
    // });
    isStringValid = (str) => {
      const regExp = /^\w +$+/;
      console.log(str);
      if (regExp.test(str)) {
        if (str.indexOf('_') === -1 ) {
          return true;
        }
      }
      return false;
    }

    if (p_wordToSayInMorse.length >= 1 && isStringValid(p_wordToSayInMorse)) {
      console.log("c ok");
    }
  }

//==================================================================================//

  onChangeTextInput = (text) => {
    this.setState({ textInput: text });
  }

  buttonTorchPressed = () => { // arrow function for performance
    if (this.state.morseTorchMode && !this.torchOn) {
      this.setState({
        morseTorchMode: false,
        classicTorchMode: true
      });
    }
  }

  buttonMorsePressed = () => { // arrow function for performance
    if (this.state.classicTorchMode && !this.torchOn) {
      this.setState({
        morseTorchMode: true,
        classicTorchMode: false
      });
    }
  }

  buttonOnOffPressed = async () => {
    if (Platform.OS === 'ios') {
      Torch.switchState(this.torchOn);
    } else {
      console.log("android");
      const cameraAllowed = await Torch.requestCameraPermission(
        'Camera Permissions', // dialog title
        'We require camera permissions to use the torch on the back of your phone.' // dialog body
      );

      if (cameraAllowed) {
        if (this.state.classicTorchMode) {
          this.torchOn = !this.torchOn;
          Torch.switchState(this.torchOn);
        } else { // if this.state.morseTorchMode
          /*await*/ this.translateToMorse(this.state.textInput);
        }
      } else {
        console.log("not allowed");
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.modeButtons}>
          <ModeButton
            onPress={this.buttonTorchPressed}
            text="Torch"
            color={this.state.classicTorchMode ? "purple" : "gray"}
          />
          <ModeButton
            onPress={this.buttonMorsePressed}
            text="Morse"
            color={this.state.morseTorchMode ? "purple" : "gray"}
          />
        </View>

        <View style={{ alignItems: "center", paddingTop: height(6) }}>
          <TextInput
            style={styles.textInput}
            onChangeText={this.onChangeTextInput}
            value={this.state.textInput}
            underlineColorAndroid='transparent'
            editable={this.state.morseTorchMode}
          />
        </View>

        <View style={styles.buttonOnOff}>
          <ModeButton
            onPress={this.buttonOnOffPressed}
            borderRadius={100}
            text="Clic"
            color="purple"
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  modeButtons: {
    justifyContent: 'space-around',
    flexDirection: "row",
    marginTop: height(15)
  },
  textInput: {
    height: height(6),
    width: width(80),
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10
  },
  buttonOnOff: {
    alignItems: "center",
    marginTop: height(25)
  }
});

// <TouchableHighlight
//   onPress={this.buttonPressed}
//   style={styles.button}
// >
//   <Text>
//     lampee
//   </Text>
// </TouchableHighlight>
