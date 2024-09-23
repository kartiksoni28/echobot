import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";
import React from "react";

interface CustomTextInputProps {
  fieldValue?: string;
  placeholder?: string;
  handleChangeText: any;
  value?: string;
  otherStyle?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
}
const CustomTextInput = (props: CustomTextInputProps) => {
  return (
    <View
      className={`${props.otherStyle} flex-row items-center px-3 rounded-xl border border-primary`}
    >
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="#9ca3af"
        className="flex-1 text-black font-pmedium "
        value={props.value}
        onChangeText={props.handleChangeText}
        keyboardType={props.keyboardType}
        style={{ height: 50, color: "black" }}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({});
