import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.BLACK,
      marginVertical: 20
  },
  text_btn: {
    color: colors.WHITE,
    fontSize: 17
  }
})
