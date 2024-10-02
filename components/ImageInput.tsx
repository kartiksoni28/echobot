import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { sendImageToServer } from "@/utils/helpers";

export type ImageInputProps = {
  onShouldSendMessage: (message: string) => void;
  textLoading?: boolean;
};

const ImageInput = ({ onShouldSendMessage }: ImageInputProps) => {
  const handleOpenGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(`ImageInput-17`, result?.assets[0].uri);
      onShouldSendMessage(result?.assets[0]?.uri);
    }
  };

  const requestCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "Camera access is required to take a photo."
      );
      return false;
    }
    return true;
  };

  const handleOpenCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(`ImageInput-46`, result?.assets[0]?.uri);
      onShouldSendMessage(result?.assets[0]?.uri);
    }
  };
  return (
    <View className="h-[30%] px-3 bg-[#a5eaea] rounded-tl-2xl rounded-tr-2xl">
      <Text className="font-pbold text-xl text-grey mb-6 mt-3">
        Choose image via :
      </Text>
      <View className="flex-row h-[90%] justify-evenly mt-6">
        <TouchableOpacity
          onPress={handleOpenGallery}
          className="bg-white h-[35%] w-[20%] justify-center items-center rounded-lg"
        >
          <Entypo name="images" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleOpenCamera}
          className="bg-white h-[35%] w-[20%] justify-center items-center rounded-lg"
        >
          <FontAwesome name="camera-retro" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageInput;

const styles = StyleSheet.create({});
