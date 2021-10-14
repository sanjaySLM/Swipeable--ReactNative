import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Animated,Text, View, FlatList,TouchableOpacity } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function App() {
  const employees = [
    { Id: 101, Name: "santhosh", Location: "Bangalore", Salary: 12345 },
    { Id: 102, Name: "sathesh", Location: "Chennai", Salary: 23456 },
    { Id: 103, Name: "arun", Location: "Bangalore", Salary: 34567 },
    { Id: 104, Name: "Gowtham", Location: "Chennai", Salary: 200000 },
    { Id: 105, Name: "Vignesh", Location: "Bangalore", Salary: 34567 },
    { Id: 106, Name: "Gokul", Location: "Chennai", Salary: 34567 },
    { Id: 107, Name: "Pragadesh", Location: "Bangalore", Salary: 34567 },
    { Id: 108, Name: "Prisudan", Location: "Chennai", Salary: 34567 },
    { Id: 109, Name: "Ranjith", Location: "Chennai", Salary: 34567 },
    { Id: 110, Name: "Selvaraj", Location: "Chennai", Salary: 34567 },

    
  ];

  const RightActions = (progress, dragX, itemData) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0.7, 0],
    });
    return (
      <>
        <TouchableOpacity>
          <View
            style={{
              flex: 1,
              padding: 5,
              backgroundColor: '#ff6090',
              justifyContent: "center",
            }}
          >
            <Animated.View
              style={{
                color: "white",
                padding: 10,
                fontWeight: "600",
                transform: [{ scale }],
              }}
            >
              <Text>Test03</Text>
            </Animated.View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View
            style={{
              flex: 1,
              padding: 5,
              backgroundColor: '#b0003a',
              justifyContent: "center",
            }}
          >
            <Animated.View
              style={{
                color: "white",
                padding: 10,
                fontWeight: "600",
                transform: [{ scale }],
              }}
            >
              <Text >Test02</Text>
            </Animated.View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const LeftActions = (progress, dragX, itemData) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
    });
    return (
      <TouchableOpacity>
        <View
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: '#ff6090',
            justifyContent: "center",
          }}
        >
          <Animated.View
            style={{
              color: "white",
              padding: 10,
              fontWeight: "600",
              transform: [{ scale }],
            }}
          >
            <Text>Test01</Text>
          </Animated.View>
        </View>
      </TouchableOpacity>
    );
  };

  let row = [];
  let prevOpenedRow;

  const closeRow = (index) => {
    if (prevOpenedRow && prevOpenedRow !== row[index]) {
      prevOpenedRow.close();
    }
    prevOpenedRow = row[index];
  };

  const renderGridItem = (itemData) => {
    return (
      <Swipeable
      ref={(ref) => (row[itemData.index] = ref)}
      renderLeftActions={(progress, dragX) => {
        return LeftActions(progress, dragX, itemData);
      }}
      renderRightActions={(progress, dragX) => {
        return RightActions(progress, dragX, itemData);
      }}
      onSwipeableOpen={() => {
        closeRow(itemData.index);
      }}
    >
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>Employee ID : {itemData.item.Id}</Text>
        <Text style={styles.cardText}>Employee Name : {itemData.item.Name}</Text>
        <Text style={styles.cardText}>Employee Location : {itemData.item.Location}</Text>
        <Text style={styles.cardText}>Employee Salary : {itemData.item.Salary}</Text>
      </View>
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleCointainer}>
        <Text  style={styles.titleText}>EMPLOYEE DETAILS</Text>
      </View>
      <FlatList
        data={employees}
        keyExtractor={(item, index) => {
          return item.Id.toString();
        }}
        renderItem={renderGridItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    flex: 1,
    backgroundColor: "#fff",
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: "#008066",
    margin:'1%',
    alignItems:'center',
    padding:'1%',
    borderRadius:10,
    backgroundColor:'#e91e63'
  },
  titleCointainer:{
    marginVertical:'5%',
    marginHorizontal:'2%',
    alignItems:'center',
    borderWidth: 1,
    borderColor: "red",
    padding:'2%',
    backgroundColor:'#ff6090',
    borderRadius:10,

  },
  titleText:{
    fontSize:20,
    color:'white'
  },
  cardText:{
    fontSize:18,
    color:'white'
  }
});
