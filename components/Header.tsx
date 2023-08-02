import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Little Lemon</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#f4ce14',
        width: '100%',
        paddingTop: 60,
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
    }
})