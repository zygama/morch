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
import firebase from 'react-native-firebase';

import ModeButton from './components/ModeButton';
// import Morse from './api/Morse';


export default class App extends Component < {} > {

   constructor(props) {
      super(props);
      // Because space between letters equals 3 points and 7 between words, so I have to know if last
      // morse code said was letter or word to put 3 or 7 points between.
      this.lastMorseWasLetter = false;
      this.torchOn = false;
      this.pointDuration = 500; // ms
   }

   state = {
      classicTorchMode: true, // it can only be one of two active and the other inactive
      morseTorchMode: false,
      morseCodeTranslating: false, // true when morse is being translated
      textInput: ''
   };

   sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
   }

   morsePoint = () => {
      console.log('point');
      return new Promise(async(resolve) => {
         Torch.switchState(true);
         await this.sleep(this.pointDuration);
         Torch.switchState(false);
         resolve();
      });
   }

   morseDash = () => {
      console.log('dash');
      return new Promise(async(resolve) => {
         Torch.switchState(true);
         await this.sleep(this.pointDuration * 3);
         Torch.switchState(false);
         resolve();
      });
   }

   // ========================================================================== //
   //                     Declaration Morse letters and numbers
   // ========================================================================== //

   morse_0 = () => {
      return new Promise(async(resolve) => {
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

   morse_1 = () => {
      return new Promise(async(resolve) => {
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

   morse_2 = () => {
      return new Promise(async(resolve) => {
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

   morse_3 = () => {
      return new Promise(async(resolve) => {
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

   morse_4 = () => {
      return new Promise(async(resolve) => {
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

   morse_5 = () => {
      return new Promise(async(resolve) => {
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

   morse_6 = () => {
      return new Promise(async(resolve) => {
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

   morse_7 = () => {
      return new Promise(async(resolve) => {
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

   morse_8 = () => {
      return new Promise(async(resolve) => {
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

   morse_9 = () => {
      return new Promise(async(resolve) => {
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

   morse_A = () => {
      return new Promise(async(resolve) => {
         await this.morsePoint();
         await this.sleep(this.pointDuration);
         await this.morseDash();
         resolve();
      });
   }

   morse_B = () => {
      return new Promise(async(resolve) => {
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

   morse_C = () => {
      return new Promise(async(resolve) => {
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

   morse_D = () => {
      return new Promise(async(resolve) => {
         await this.morseDash();
         await this.sleep(this.pointDuration);
         await this.morsePoint();
         await this.sleep(this.pointDuration);
         await this.morsePoint();
         resolve();
      });
   }

   morse_E = () => {
      return new Promise(async(resolve) => {
         await this.morsePoint();
         resolve();
      });
   }

   morse_F = () => {
      return new Promise(async(resolve) => {
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

   morse_G = () => {
      return new Promise(async(resolve) => {
         await this.morseDash();
         await this.sleep(this.pointDuration);
         await this.morseDash();
         await this.sleep(this.pointDuration);
         await this.morsePoint();
         resolve();
      });
   }

   morse_H = () => {
      return new Promise(async(resolve) => {
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

   morse_I = () => {
      return new Promise(async(resolve) => {
         await this.morsePoint();
         await this.sleep(this.pointDuration);
         await this.morsePoint();
         resolve();
      });
   }

   morse_J = () => {
      return new Promise(async(resolve) => {
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

   morse_K = () => {
      return new Promise(async(resolve) => {
         await this.morseDash();
         await this.sleep(this.pointDuration);
         await this.morsePoint();
         await this.sleep(this.pointDuration);
         await this.morseDash();
         resolve();
      });
   }

   morse_L = () => {
      return new Promise(async(resolve) => {
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

   morse_M = () => {
      return new Promise(async(resolve) => {
         await this.morseDash();
         await this.sleep(this.pointDuration);
         await this.morseDash();
         resolve();
      });
   }

   morse_N = () => {
      return new Promise(async(resolve) => {
         await this.morseDash();
         await this.sleep(this.pointDuration);
         await this.morsePoint();
         resolve();
      });
   }

   morse_O = () => {
      return new Promise(async(resolve) => {
         await this.morseDash();
         await this.sleep(this.pointDuration);
         await this.morseDash();
         await this.sleep(this.pointDuration);
         await this.morseDash();
         resolve();
      });
   }

   morse_P = () => {
      return new Promise(async(resolve) => {
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

   morse_Q = () => {
      return new Promise(async(resolve) => {
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

   morse_R = () => {
      return new Promise(async(resolve) => {
         await this.morsePoint();
         await this.sleep(this.pointDuration);
         await this.morseDash();
         await this.sleep(this.pointDuration);
         await this.morsePoint();
         resolve();
      });
   }

   morse_S = () => {
      return new Promise(async(resolve) => {
         await this.morsePoint();
         await this.sleep(this.pointDuration);
         await this.morsePoint();
         await this.sleep(this.pointDuration);
         await this.morsePoint();
         resolve();
      });
   }

   morse_T = () => {
      return new Promise(async(resolve) => {
         await this.morseDash();
         resolve();
      });
   }

   morse_U = () => {
      return new Promise(async(resolve) => {
         await this.morsePoint();
         await this.sleep(this.pointDuration);
         await this.morsePoint();
         await this.sleep(this.pointDuration);
         await this.morseDash();
         resolve();
      });
   }

   morse_V = () => {
      return new Promise(async(resolve) => {
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

   morse_W = () => {
      return new Promise(async(resolve) => {
         await this.morsePoint();
         await this.sleep(this.pointDuration);
         await this.morseDash();
         await this.sleep(this.pointDuration);
         await this.morseDash();
         resolve();
      });
   }

   morse_X = () => {
      return new Promise(async(resolve) => {
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

   morse_Y = () => {
      return new Promise(async(resolve) => {
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

   morse_Z = () => {
      return new Promise(async(resolve) => {
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

   SOS = async() => {
      await this.morse_S();
      await this.sleep(this.pointDuration);
      await this.morse_O();
      await this.sleep(this.pointDuration);
      await this.morse_S();
   }

   // ========================================================================== //

   sayLetterInMorse = (p_letterToSayInMorse) => {
      p_letterToSayInMorse = p_letterToSayInMorse.toLowerCase();

      return new Promise(async(resolve) => {
         if (p_letterToSayInMorse === '0') {
            await this.morse_0();
            resolve();
         } else if (p_letterToSayInMorse === '1') {
            await this.morse_1();
            resolve();
         } else if (p_letterToSayInMorse === '2') {
            await this.morse_2();
            resolve();
         } else if (p_letterToSayInMorse === '3') {
            await this.morse_3();
            resolve();
         } else if (p_letterToSayInMorse === '4') {
            await this.morse_4();
            resolve();
         } else if(p_letterToSayInMorse === '5') {
            await this.morse_5();
            resolve();
         } else if (p_letterToSayInMorse === '6') {
            await this.morse_6();
            resolve();
         } else if (p_letterToSayInMorse === '7') {
            await this.morse_7();
            resolve();
         } else if (p_letterToSayInMorse === '8') {
            await this.morse_8();
            resolve();
         } else if (p_letterToSayInMorse === '9') {
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

   sayWordInMorse = (p_wordToSayInMorse) => {
      return new Promise(async(resolve) => {
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
      });
   }

   sayPhraseInMorse = (p_phraseToSayInMorse) => {
      return new Promise(async(resolve) => {
         p_phraseToSayInMorse = p_phraseToSayInMorse.split(' ');

         for (const i = 0; i < p_phraseToSayInMorse.length; i++) {
            if (p_phraseToSayInMorse[i].length === 1) { // if letter or number
               console.log("letter/number");
               await this.sayLetterInMorse(p_phraseToSayInMorse[i]);
               this.lastMorseWasLetter = true;
            } else { // if word
               console.log("word");
               await this.sayWordInMorse(p_phraseToSayInMorse[i]);
               this.lastMorseWasLetter = false;
            }

            if (this.lastMorseWasLetter && i < p_phraseToSayInMorse.length - 1) {
               // we will determine if we put 3 or 7 points between last morse translated
               console.log("3 points between letters");
               await this.sleep(this.pointDuration * 3);
            } else if (i < p_phraseToSayInMorse.length - 1) {
               console.log("7 points between words");
               await this.sleep(this.pointDuration * 7);
            }
         }
         resolve();
      });
   }

   translateToMorse = (p_toSayInMorse) => {
      return new Promise( async (resolve) => {
         isStringValid = (str) => {
            // test for only letters, numbers and spaces
            // ^ -> start of string, $ -> end of string
            const regExp = new RegExp(/^([a-zA-Z0-9]| )+$/);
            console.log(str);
            if (regExp.test(str)) {
               return true;
            }
            return false;
         }

         if (p_toSayInMorse.length >= 1 && isStringValid(p_toSayInMorse)) {
            if (p_toSayInMorse.indexOf(' ') >= 0) { // if phrase
               console.log("phrase");
               await this.sayPhraseInMorse(p_toSayInMorse);
            } else if (p_toSayInMorse.length === 1) { // if letter or number
               console.log("letter/number");
               await this.sayLetterInMorse(p_toSayInMorse);
            } else { // if word
               console.log("word");
               await this.sayWordInMorse(p_toSayInMorse);
            }
            resolve();
         }
      });
   }

//============================================================================//

   onChangeTextInput = (text) => {
      this.setState({
         textInput: text
      });
   }

   buttonTorchPressed = () => {
      if (this.state.morseTorchMode && !this.torchOn) {
         this.setState({
            morseTorchMode: false,
            classicTorchMode: true
         });
      }
   }

   buttonMorsePressed = () => {
      if (this.state.classicTorchMode && !this.torchOn) {
         this.setState({
            morseTorchMode: true,
            classicTorchMode: false
         });
      }
   }

   buttonOnOffPressed = async () => {
     if (!this.state.morseCodeTranslating) {
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
               this.setState({ morseCodeTranslating: true });
               await this.translateToMorse(this.state.textInput);
               this.setState({ morseCodeTranslating: false });
             }
          } else {
             console.log("not allowed");
          }
       }
     }
   }

//============================================================================//

  renderTextMorseBeingTranslated() {
    if (this.state.morseCodeTranslating) {
      return (
        <Text>
          Morse code being translated ! :)
        </Text>
      );
    }
  }

  renderAdMobBanner() {
    const Banner = firebase.admob.Banner;
    const AdRequest = firebase.admob.AdRequest;
    const request = new AdRequest();
    request.addKeyword('foobar');

    return (
      <Banner
        unitId="ca-app-pub-9425050327205317/7262307340"
        size="SMART_BANNER"
        request={request.build()}
        onAdLoaded={() => {
          console.log('Advert loaded');
        }}
      />
    );
  }

   render() {
      return (
        <View style={styles.container}>

          <View style={styles.modeButtons}>
            <ModeButton onPress={this.buttonTorchPressed}
             text = "Torch"
             color = {this.state.classicTorchMode ? "purple" : "gray"}
            />
            <ModeButton onPress={this.buttonMorsePressed}
             text = "Morse"
             color={this.state.morseTorchMode ? "purple" : "gray"}
            />
          </View>

          <View style={{ alignItems: "center", paddingTop: height(6) }}>
            <TextInput
              style={styles.textInput}
              onChangeText={this.onChangeTextInput}
              value={this.state.textInput}
              underlineColorAndroid = "transparent"
              editable={this.state.morseTorchMode}
            />
            {this.renderTextMorseBeingTranslated()}
          </View>

          <View style={[styles.buttonOnOff,
            {marginTop: this.state.morseCodeTranslating ? height(21) : height(24)}
          ]}>
            <ModeButton
              onPress={this.buttonOnOffPressed}
              borderRadius={100}
              text = "Clic"
              color = {this.state.morseCodeTranslating ? "gray" : "purple"}
            />

          </View>
          <View>
            {this.renderAdMobBanner()}
          </View>

        </View>
      );
   }
}

//============================================================================//

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      justifyContent: 'space-between'
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
      alignItems: "center"
   }
});
