import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
        height: 1,
        width: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1
  },
  url_wrapper: {
    flex: 1
  }
})
