import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Secondline from "./components/Secondline.js";
import Name from "./components/Name.js";

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: "lightcyan",
		alignItems: "center",
		justifyContent: "space-around",
	},
	input: {
		height: "40px",
		margin: "2rem 0",
		padding: "5px",
	},
});
const { main, text, input } = styles;

export default function App() {
	const [name, setName] = React.useState("");
	return (
		<View style={main}>
			<Text style={text}>Hello, {name || "world!"}</Text>
			<StatusBar style="auto" />
			<Secondline />
			<Name style={input} setName={setName} />
		</View>
	);
}
