import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Todo = ({title}) => {
    return (
        <View>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

export default(Todo)
const styles = StyleSheet.create({
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    }
  });

