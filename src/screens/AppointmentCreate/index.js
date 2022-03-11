import React, { useState, useEffect } from "react";

import {
	TouchableOpacity,
	Text,
	View,
	ScrollView,
	Platform,
	KeyboardAvoidingView,
} from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { SmallInput } from "../../components/SmallInput";
import { Background } from "../../components/Background";
import { ModalView } from "../../components/ModalView";
import { GuildIcon } from "../../components/GuildIcon";
import { TextArea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Guilds } from "../Guilds";

import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function AppointmentCreate() {
	const [category, setCategory] = useState("");
	const [openGuildsModal, setOpenGuildsModal] =
		useState(false);
	const [guilds, setGuilds] = useState([]);
	const [loading, setLoading] = useState(true);

	const { user } = useAuth();

	async function fetchGuilds() {
		const response = await api.get("/users/@me/guilds", {
			headers: {
				authorization: `Bearer ${user.tokens}`,
			},
		});
		setGuilds(response.data);
		setLoading(false);
	}

	useEffect(() => {
		fetchGuilds();
	}, []);

	function handleOpenGuilds() {
		setOpenGuildsModal(true);
	}

	function handleCloseGuilds() {
		setOpenGuildsModal(false);
	}

	function handleGuildSelect(guildSelect) {
		setGuilds(guildSelect);
		setOpenGuildsModal(false);
	}

	function handleCategorySelect(categoryId) {
		categoryId === category
			? setCategory("")
			: setCategory(categoryId);
	}

	return (
		<Background>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={
					Platform.OS === "ios" ? "padding" : "height"
				}
			>
				<ScrollView>
					<Header title='Agendar partida' />

					<Text
						style={[
							styles.label,
							{
								marginTop: 36,
								marginLeft: 24,
								marginBottom: 18,
							},
						]}
					>
						Categoria
					</Text>

					<View>
						<CategorySelect
							categorySelected={category}
							setCategory={handleCategorySelect}
							hasChecked={true}
						/>
					</View>

					<View style={styles.form}>
						<TouchableOpacity
							activeOpacity={1}
							onPress={handleOpenGuilds}
						>
							<View style={styles.select}>
								{guilds.icon ? (
									<GuildIcon />
								) : (
									<View style={styles.image} />
								)}

								<View style={styles.selectBody}>
									<Text style={styles.label}>
										{guilds.name
											? guilds.name
											: "Selecione um servidor"}
									</Text>
								</View>

								<Feather
									name='chevron-right'
									color={theme.colors.heading}
									size={18}
								/>
							</View>
						</TouchableOpacity>

						<View style={styles.field}>
							<View>
								<Text
									style={[
										styles.label,
										{ marginBottom: 12 },
									]}
								>
									Dia e mês
								</Text>
								<View style={styles.column}>
									<SmallInput maxLength={2} />
									<Text style={styles.divider}>/</Text>
									<SmallInput maxLength={2} />
								</View>
							</View>

							<View>
								<Text
									style={[
										styles.label,
										{ marginBottom: 12 },
									]}
								>
									Horário
								</Text>
								<View style={styles.column}>
									<SmallInput maxLength={2} />
									<Text style={styles.divider}>:</Text>
									<SmallInput maxLength={2} />
								</View>
							</View>
						</View>

						<View
							style={[styles.field, { marginBottom: 12 }]}
						>
							<Text style={styles.label}>Descrição</Text>

							<Text style={styles.caracteresLimit}>
								Max 60
							</Text>
						</View>

						<TextArea
							multiline
							maxLength={60}
							numberOfLines={4}
							autoCorrect={false}
						/>
					</View>

					<View style={styles.footer}>
						<Button
							title='Agendar'
							activeOpacity={0.8}
							// onPress={handleCreateAppointment}
						/>
					</View>
				</ScrollView>

				<ModalView
					visible={openGuildsModal}
					closeModal={handleCloseGuilds}
				>
					<Guilds
						handleGuildSelect={handleGuildSelect}
						loading={loading}
						guilds={guilds}
					/>
				</ModalView>
			</KeyboardAvoidingView>
		</Background>
	);
}
