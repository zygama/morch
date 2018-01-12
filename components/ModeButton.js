import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';
import { height, width } from 'react-native-dimension';


const ModeButton = (props) => {

  return (
    <TouchableWithoutFeedback
      onPress={props.onPress}
    >
      <View style={[styles.container,
        { borderColor: props.color,
          backgroundColor: props.backgroundColor,
          borderRadius: props.borderRadius ? props.borderRadius : 10 }]}>
        <Text style={{ color: props.color, fontSize: 35 }}>
          {props.text}
        </Text>
      </View>
    </TouchableWithoutFeedback>

  );

}

const styles = StyleSheet.create({
  container: {
    height: height(15),
    width: width(35),
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ModeButton;
