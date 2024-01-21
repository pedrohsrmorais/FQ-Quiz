import React from "react";
import { Text, Button, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Level2() {
  const navigation = useNavigation();

  return (
    <View>
      <Text> Level2 </Text>
    </View>
  );
}
