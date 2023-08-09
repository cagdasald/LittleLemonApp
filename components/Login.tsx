import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";

interface IProps {
  navigation: any;
}

const Login: React.FC<IProps>  = ({navigation}) => {
  // const [firstName, onChangeFirstName] = useState("");
  const [password, onChangePassword] = useState("");
  const [email, onChangeEmail] = useState("");
  const colorScheme = useColorScheme();
  // const { width, height, fontScale } = useWindowDimensions();

    // onPress olayında tetiklenecek doğru işlevi tanımlayalım
    const handleLoginPress = () => {
      // Burada giriş doğrulaması ve diğer kontrolleri yapabilirsiniz.
      // Ardından navigasyonu tetiklemek için aşağıdaki satırı kullanabilirsiniz.
      navigation.navigate('PriceSectionList');
    };

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
      ]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* <Text style={styles.headingSection}>Color Scheme: {colorScheme}</Text>
      <Text style={styles.headingSection}>Width: {width}</Text>
      <Text style={styles.headingSection}>Height: {height}</Text>
      <Text style={styles.headingSection}>Font Scale: {fontScale}</Text> */}
      <Text style={styles.headingSection}>
        Welcome to Little Lemon login to continue
      </Text>

      <ScrollView>
        {/* <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={onChangeFirstName}
                placeholder="First Name"
                onFocus={() => Alert.alert("Focus", "First Name")}
                onBlur={() => Alert.alert("Blur", "First Name")}
                clearButtonMode="always"
              /> */}
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onChangeEmail}
          placeholder={"Email"}
          keyboardType="email-address"
          clearButtonMode="always"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={onChangePassword}
          placeholder="Password"
          secureTextEntry={true}
          clearButtonMode="always"
        />
        <Pressable style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>View Menu</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#F4CE14",
  },
  messageInput: {
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14",
  },
  infoSection: {
    padding: 10,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  headingSection: {
    fontSize: 24,
    padding: 10,
    color: "#000",
    textAlign: "center",
  },
  button: {
    backgroundColor: "black",
    padding: 5,
    borderRadius: 6,
    marginBottom: 10,
    width: 150,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
