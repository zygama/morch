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
  TouchableHighlight
} from 'react-native';
import Torch from 'react-native-torch';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.torchState = false;
    this.pointDuration = 500; //ms
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async morsePoint() {
    return new Promise( async (resolve) => {
      Torch.switchState(true);
      await this.sleep(this.pointDuration);
      Torch.switchState(false);
      resolve();
    });
  }

  async morseDash() {
    return new Promise( async (resolve) => {
      Torch.switchState(true);
      await this.sleep(this.pointDuration * 3);
      Torch.switchState(false);
      resolve();
    });
  }

// ========================================================================== //
//                      Beginning Morse letters and numbers
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
      if (p_letterToSayInMorse === 'a') {
        await this.morse_A();
        resolve();
      } else if (p_letterToSayInMorse === 'e') {
        await this.morse_E();
        resolve();
      } else if (p_letterToSayInMorse === 's') {
        await this.morse_S();
        resolve();
      } else if (p_letterToSayInMorse === 'o') {
        await this.morse_O();
        resolve();
      } else if (p_letterToSayInMorse === 't') {
        await this.morse_T();
        resolve();
      }
    });
  }

  async sayWordInMorse(p_wordToSayInMorse) {
    for (const i = 0; i < p_wordToSayInMorse.length; i++) {
      console.log(p_wordToSayInMorse.charAt(i));
      await this.sayLetterInMorse(p_wordToSayInMorse.charAt(i));
      if (i < p_wordToSayInMorse.length - 1) {
        await this.sleep(this.pointDuration * 3); // space between 2 letters = 3 pts
      }
    }
  }

  async allume() {
    this.torchState = !this.torchState;

    if (Platform.OS === 'ios') {
    	Torch.switchState(this.torchState);
    } else {
      console.log("android");
    	const cameraAllowed = await Torch.requestCameraPermission(
    		'Camera Permissions', // dialog title
    		'We require camera permissions to use the torch on the back of your phone.' // dialog body
    	);

    	if (cameraAllowed) {
        console.log("allowed");
    		await this.sayWordInMorse("sote");
    	} else {
        console.log("not allowed");
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.allume()}
          style={styles.button}
        >
          <Text>
            lampe
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
