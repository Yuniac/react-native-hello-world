import React from "react";
import { TextInput, View } from "react-native";

function Name({ input, setName }) {
	function handleChange(e) {
		setName(e);
	}

	return (
		<View>
			<TextInput style={input} placeholder="Enter your name here" onChangeText={handleChange}></TextInput>
		</View>
	);
}

export default Name;
