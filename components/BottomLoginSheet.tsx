import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const BottomLoginSheet = () => {
  const handleUserLogin = () => {};
  return (
    <View className="bg-black w-full rounded-tl-3xl rounded-tr-3xl p-5 absolute bottom-0 justify-center items-center space-y-5">
      <TouchableOpacity
        onPress={handleUserLogin}
        className="bg-white p-3 w-[80%] justify-center items-center rounded-lg flex-row space-x-3"
      >
        <AntDesign name="apple1" size={24} color="black" />
        <Text className="text-black font-psemibold">Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleUserLogin}
        className="bg-grey p-3 w-[80%] justify-center items-center rounded-lg flex-row space-x-3"
      >
        <AntDesign name="google" size={24} color="white" />
        <Text className="text-white font-psemibold">Continue with Google</Text>
      </TouchableOpacity>
      <Link href={{ pathname: "/login", params: { type: "register" } }} asChild>
        <TouchableOpacity className="bg-grey p-3 w-[80%] justify-center items-center rounded-lg flex-row space-x-3">
          <MaterialIcons name="email" size={24} color="white" />
          <Text className="text-white font-psemibold">Sign up with Email</Text>
        </TouchableOpacity>
      </Link>
      <Link href={{ pathname: "/login", params: { type: "login" } }} asChild>
        <TouchableOpacity className="p-3 w-[80%] justify-center items-center rounded-lg border border-lightGrey">
          <Text className="text-white font-psemibold">Log in</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default BottomLoginSheet;

const styles = StyleSheet.create({});
