import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
// import * as DocumentPicker from "expo-document-picker";
// import * as ImagePicker from "expo-image-picker";
import Colors from "@/constants/Colors";

export type MessageInputProps = {
  onShouldSendMessage: (message: string) => void;
};

const ATouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const MessageInput = ({ onShouldSendMessage }: MessageInputProps) => {
  const [message, setMessage] = useState("");
  const expanded = useSharedValue(0);

  const expandItems = () => {
    console.log(`MessageInput-26`);
    expanded.value = withTiming(1, { duration: 400 });
  };

  const collapseItems = () => {
    expanded.value = withTiming(0, { duration: 400 });
  };

  const expandButtonStyle = useAnimatedStyle(() => {
    const opacityInterpolation = interpolate(
      expanded.value,
      [0, 1],
      [1, 0],
      Extrapolation.CLAMP
    );
    const widthInterpolation = interpolate(
      expanded.value,
      [0, 1],
      [30, 0],
      Extrapolation.CLAMP
    );

    return {
      opacity: opacityInterpolation,
      width: widthInterpolation,
    };
  });

  const buttonViewStyle = useAnimatedStyle(() => {
    const widthInterpolation = interpolate(
      expanded.value,
      [0, 1],
      [0, 80],
      Extrapolation.CLAMP
    );
    return {
      width: widthInterpolation,
      opacity: expanded.value,
    };
  });

  const onChangeText = (text: string) => {
    collapseItems();
    setMessage(text);
  };

  const onSend = () => {
    onShouldSendMessage(message);
    setMessage("");
  };

  const onListen = () => {};
  return (
    <View
      className="flex-row justify-center items-center space-x-1 px-2"
      style={{ marginBottom: 5 }}
    >
      <ATouchableOpacity
        style={expandButtonStyle}
        onPress={expandItems}
        className="bg-lightGrey rounded-full"
      >
        <Ionicons name="add" size={28} color="white" />
      </ATouchableOpacity>

      <Animated.View style={buttonViewStyle} className="flex-row space-x-1">
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="camera-outline" size={24} color={Colors.grey} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="image-outline" size={24} color={Colors.grey} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="folder-outline" size={24} color={Colors.grey} />
        </TouchableOpacity>
      </Animated.View>
      <TextInput
        value={message}
        autoFocus
        placeholder="Message"
        multiline
        onChangeText={onChangeText}
        onFocus={collapseItems}
        className="flex-1 border border-grey rounded-lg p-2 font-pmedium"
      />

      {!message?.length ? (
        <TouchableOpacity onPress={onListen}>
          <FontAwesome6 name="headphones-simple" size={28} color="grey" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onSend}>
          <Feather name="arrow-up-circle" size={28} color="grey" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MessageInput;

const styles = StyleSheet.create({});
