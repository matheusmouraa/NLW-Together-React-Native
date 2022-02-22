import React from "react";
import {
  View,
  TouchableOpacity,
  Text
} from "react-native";

import { GuildIcon } from "../../components/GuildIcon";
import { categories } from "../../utils/categories";

import { styles } from "./styles";
import PlayerSvg from "../../img/player.svg";
import CalendarSvg from "../../img/calendar.svg";
import { theme } from "../../global/styles/theme";

export function Appointment({ data, ...rest }){
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  return (
    <TouchableOpacity {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              { data.guild.name }
            </Text>

            <Text style={styles.category}>
              { category.title }
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>
                { data.date }
              </Text>
            </View>


            <View style={styles.playersInfo}>
              <PlayerSvg fill={ owner ? primary : on } />

              <Text style={[
                styles.player,
                { color: owner ? primary : on }
              ]}>
                { owner ? 'Anfitrião' : 'Visitante' }
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}