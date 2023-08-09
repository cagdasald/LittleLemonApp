import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Copyright © 2012 - 2023 LittleLemon®. All rights reserved.</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: '#f4ce14',
        width: '100%',
    },
    footerText: {
        textAlign: 'center',
        padding: 10,
    }
})