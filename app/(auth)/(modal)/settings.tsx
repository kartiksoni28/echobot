import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useMMKVString } from "react-native-mmkv";
import { Storage } from "@/utils/Storage";
import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomTextInput";
import { useAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";

const settings = () => {
  const [apiKey, setApiKey] = useState("");
  const [org, setOrg] = useState("");

  const [key, setKey] = useMMKVString("apiKey", Storage);
  const [organization, setOrganization] = useMMKVString("org", Storage);

  console.log(`settings-17`, key);

  const { signOut } = useAuth();

  const handleRemoveAPI = () => {
    setKey("");
    setOrganization("");
  };
  const handleSetKey = () => {
    if (apiKey?.length === 0 || org?.length === 0) {
      Alert.alert("Please fill the required fields");
      return;
    }
    setKey(apiKey);
    setOrganization(org);
    router.replace("/(auth)/(drawer)/(chat)/new");
  };

  return (
    <View className="flex-1 items-center">
      {key && key !== "" && (
        <View className="flex-1 justify-center items-center w-full ">
          <Text className="font-pmedium text-black text-2xl">
            You are all set
          </Text>
          <CustomButton
            title="Remove API Key"
            handlePress={handleRemoveAPI}
            containerStyle="w-[90%] mt-6 "
          />
        </View>
      )}

      {(!key || key === "") && (
        <View className="flex-1 mt-10 items-center w-full ">
          <Text className="font-pmedium text-black text-xl text-center mb-6">
            Add your API key {"\n"} and organization name
          </Text>
          <CustomTextInput
            value={apiKey}
            handleChangeText={setApiKey}
            placeholder="API key"
            otherStyle="w-[90%] mb-2"
          />
          <CustomTextInput
            value={org}
            handleChangeText={setOrg}
            placeholder="Organization name"
            otherStyle="w-[90%] mt-2"
          />
          <CustomButton
            title="Save API Key"
            handlePress={handleSetKey}
            containerStyle="w-[90%] mt-6 "
          />
        </View>
      )}
      <CustomButton
        title="Sign Out"
        handlePress={() => signOut()}
        containerStyle="w-[90%] mb-10 border border-primary bg-light"
        textStyle="text-primary"
      />
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({});
