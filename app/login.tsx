import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTextInput from "@/components/CustomTextInput";
import CustomButton from "@/components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { useSignIn, useSignUp } from "@clerk/clerk-expo";

const login = () => {
  const { type } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const { isLoaded, signIn, setActive } = useSignIn();
  const {
    isLoaded: isSignUpLoaded,
    signUp,
    setActive: setActiveSignUp,
  } = useSignUp();

  const handleLogin = async () => {
    if (!isLoaded) return;
    setLoading(true);
    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      setActive({
        session: result?.createdSessionId,
      });
    } catch (error: any) {
      console.log("error", error);
      Alert.alert(error.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    if (!isSignUpLoaded) return;
    setLoading(true);
    try {
      const result = await signUp.create({ emailAddress, password });
      console.log(`login-55`, result);

      setActiveSignUp({ session: result?.createdSessionId });
    } catch (error: any) {
      console.log("error", error);
      Alert.alert(error.errors[0].message);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center px-4">
        <TouchableOpacity
          className="self-start mt-6"
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back-circle" size={40} color="#20AB6E" />
        </TouchableOpacity>
        <Image
          source={require("../assets/images/logo-dark.png")}
          style={{ width: 120, height: 120, marginBottom: 30, marginTop: 30 }}
        />
        <Text className="font-pbold text-3xl mt-10">
          {type === "login" ? "Welcome back" : "Create your account"}
        </Text>
        <CustomTextInput
          handleChangeText={setEmailAddress}
          otherStyle="w-[100%] mb-2 mt-8"
          keyboardType="email-address"
          placeholder="Enter your email"
        />
        <CustomTextInput
          handleChangeText={setPassword}
          otherStyle="w-[100%] mt-2 mb-4"
          secureTextEntry
          placeholder="Enter your password"
        />
        <CustomButton
          title={type === "login" ? "Login" : "Sign up"}
          handlePress={type === "login" ? handleLogin : handleSignUp}
          containerStyle="w-[100%] mt-4"
        />
      </View>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({});
