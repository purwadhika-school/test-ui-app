import React, { Component } from "react"
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native"

// Component:
// 1. Class based component
// 2. Functional component

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <Image source={require("./assets/owl.png")} />
          <Text style={styles.tagline}>Whoo Whoo!</Text>
          <Text style={styles.subtagline}>
            Welcome to our awesome App. Please signup and login before you
            browse into our beautiful App!
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.txtButton}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#709bab" },
  icon: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "white",
    width: "70%",
    marginTop: 35,
    borderRadius: 17
  },
  tagline: { marginTop: 20, fontSize: 20, color: "white", fontWeight: "500" },
  subtagline: {
    marginTop: 20,
    fontSize: 16,
    color: "white",
    textAlign: "center",
    margin: 10
  },
  txtButton: {
    color: "#709bab",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    margin: 10
  }
})

export default App
