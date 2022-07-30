import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
      height: 50,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomColor: colors.LIGHT,
      borderBottomWidth: 1,
      marginVertical: 20
  },
  input_wrapper: {
    flex: 1,
    marginLeft: 10
  }
})
