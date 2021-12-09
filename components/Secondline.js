import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Secondline() {
	return (
		<View>
			<Text style={style.text}>This is my first react-native app!</Text>
		</View>
	);
}

const style = StyleSheet.create({
	text: {
		color: "cyan",
	},
});

export default Secondline;
