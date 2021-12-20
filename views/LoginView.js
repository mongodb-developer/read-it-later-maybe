import React from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

export function LoginView({ navigation }) {
  return (
    <View>
      <Text>Signup or Signin:</Text>
      <View>
        <TextInput          
          placeholder="email"
          autoCapitalize="none"
        />
      </View>
      <View>
        <TextInput
          placeholder="password"
          secureTextEntry
        />
      </View>
      <Button title="Sign In" />
      <Button title="Sign Up" />
    </View>
  );
}
