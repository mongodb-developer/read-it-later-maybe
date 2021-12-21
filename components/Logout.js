import * as React from "react";
import { Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../providers/AuthProvider";

export function Logout( {closeRealm} ) {
  const navigation = useNavigation();
  const { signOut } = useAuth();

  return (
    <Button
      title="Logout"
      onPress={() => {
        Alert.alert("Log Out?", null, [
          {
            text: "Yes, Log Out",
            style: "destructive",
            onPress: () => {
              navigation.popToTop();
              closeRealm();
              signOut();
            },
          },
          { text: "Cancel", style: "cancel" },
        ]);
      }}
    />
  );
}
