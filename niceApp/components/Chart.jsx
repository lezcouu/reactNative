import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { LineChart } from "react-native-chart-kit";

const Chart = (gigs) => {
  const description = gigs.gigs.map((elem,i) => {
    return elem.description
  })
  const amount = gigs.gigs.map((elem,i) => {
    return elem.amount
  })
  
    return (
        <View>
  <LineChart
    data={{
      labels: description,
      datasets: [
        {
          data: 
                  amount
          
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "blue",
      backgroundGradientTo: "yellow",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "yellow"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
    )
}

export default (Chart)

const styles = StyleSheet.create({})
