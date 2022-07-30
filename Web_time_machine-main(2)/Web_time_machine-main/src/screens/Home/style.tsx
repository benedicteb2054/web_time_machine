import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    padding: 20
  },
  empty_search_image: {
    height: 200,
    width: 200
  },
  empty_wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
