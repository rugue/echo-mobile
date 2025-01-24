import axios from "axios";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

import { NavigationProp } from '@react-navigation/native';

const SignUpScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/signup", {
        username,
        email,
        password,
        role,
      });
      // Handle successful sign-up
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        placeholder="Role (user/artist)"
        value={role}
        onChangeText={setRole}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
