import React from "react";
import { TextInput, View } from "react-native";

function Name({ input, setName }) {
	function handleChange(e) {
		console.log(e);
		setName(e.target.value);
	}

	return (
		<View>
			<TextInput style={input} placeholder="Enter your name here" onChange={handleChange}></TextInput>
		</View>
	);
}

export default Name;
