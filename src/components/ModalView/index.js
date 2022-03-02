import React from "react";

import { Modal, View } from "react-native";
import { Background } from "../Background";

import { styles } from "./styles";

export function ModalView({ children, ...rest }) {
	return (
		<Modal
			transparent
			animationType='slide'
			{...rest}
		>
			<View style={styles.overlay}>
				<View style={styles.container}>
					<Background>
						<View style={styles.bar} />
						{children}
					</Background>
				</View>
			</View>
		</Modal>
	);
}