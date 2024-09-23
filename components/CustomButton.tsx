import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
interface CustomButtonProps {
  title: string;
  textStyle?: string;
  containerStyle?: string;
  isLoading?: boolean;
  handlePress: any;
}
const CustomButton = (props: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.handlePress}
      activeOpacity={0.7}
      disabled={props.isLoading}
      style={{ height: 50 }}
      className={`bg-primary rounded-xl items-center justify-center ${
        props?.containerStyle
      } ${props.isLoading ? "opacity-50" : ""}`}
    >
      <Text className={`text-white font-psemibold ${props.textStyle}`}>
        {props?.title ?? props?.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
