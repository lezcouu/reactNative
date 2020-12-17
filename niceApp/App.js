import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  SafeAreaView,
  Button
 } from 'react-native';
import Chart from "./components/Chart.jsx"


const App = () => {
  
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [total, setTotal] = useState(0)
  const [gigs, setGig] = useState([
    {
      description: "Freelance",
      amount : 499.99,
      timestamp: new Date()
    }
  ])

  useEffect(() => {
    setTotal(gigs.reduce((total, gig) => total + Number(gig.amount), 0))
  }, [gigs])

  const addGig = () => {
    setGig([...gigs, {
      description: description,
      amount: amount,
      timestamp: new Date()
    }])
    setDescription("");
    setAmount("");
  }
 

  return (
    <SafeAreaView>
      <View><Text style={styles.titleText}>Cotización</Text></View>
      <Text>
        Total presupuesto: ${total}
      </Text>
      <Chart gigs={gigs} />   
        <TextInput
         style = {styles.input}
         value = {description}
         placeholder="ingresa una descripción"
         onChangeText = {text => setDescription(text)}
        />
        <TextInput
         style = {styles.input}
         value = {amount}
         placeholder="ingresa un monto $"
         keyboardType = "numeric"
         onChangeText = {text => setAmount(text)}
        />
        <Button 
         disabled={!description || !amount}
         onPress={addGig}
         title="agregar"
         />
      
         {
           gigs.map((gig,i) =>(
             <View key={i}>
               <Text>
                 {gig.description}
               </Text>
               <Text>
                 {gig.amount} 
               </Text>
             </View>
           ))
         }
      
    </SafeAreaView>
  );
}

export default (App)

const styles = StyleSheet.create({
  input: {
    margin:20,
    padding: 20,
    height:60,
    borderColor:"red",
    borderWidth:1
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
