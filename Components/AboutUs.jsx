import React from 'react'
import { Button, Text, View,SafeAreaView,SectionList,StatusBar,StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




const DATA_New = [
  {
    title: "Snacks & Starters",
    data: [
      { name: "French Fries", price: "60" },
      { name: "Garlic Bread(4 piece)", price: "40" },
      { name: "Maggie", price: "40" },
      { name: "Vada Pav", price: "30" },
      { name: "Pav Bhaji", price: "45" },
      { name: "Extra Pav(2)", price: "15" },
    ],
  },

  {
    title: "Snacks & Starters",
    data: [
      { name: "French Fries", price: "60" },
      { name: "Garlic Bread(4 piece)", price: "40" },
      { name: "Maggie", price: "40" },
      { name: "Vada Pav", price: "30" },
      { name: "Pav Bhaji", price: "45" },
      { name: "Extra Pav(2)", price: "15" },
    ],
  },
];
const DATA = [
  {
    title: 'Snacks & Starters',
    data: ['French Fries                                60', 
           'Garlic Bread(4 piece)                 99', 
          'Maggie                                         40',
          'Vada Pav                                      30',
          'Pav Bhaji                                     45',
          'Extra Pav(2)                                 15',
        ],
  },
  {
    title: 'Breakfast',
    data: ['Aloo Paratha                               40',
           'Poha                                             30',
           'Bread Pakoda                              20',
           'Samosa                                         15',
           'Mirchibada                                  18',
           'Pyaaj Kachori                              20',
           'Mogar Kachori                             15',
           'Kadi Kachori                                30',
    ],
  },

  {
    title: 'Burger & Sandwiches',
    data: ['Veg Burger                                  50',
      'Cheese Burger                             60', 
      'Panner Burger                            60',
      'Chocolate Sandwich                   70',
      'Grill Sandwich                             60'
    ],
  },
  { 
    
    title: 'Pizza & Pasta',
    data: ['Plain Pizza                                   89',
      'Capsicum Pizza                           99',
      'Cheese Pizza                                99',
      'Corn Pizza                                  109',
      'Red Pasta                                    69',
      'White pasta                                 69',
    ],
  },
  {
    title: 'Chinese',
    data: ['Manchurian Dry                          50',
           'Manchurian Gravy                      60',
           'Manchurian Rice                         69',
           'Manchurian Paneer                   109',
           'Chowmien                                    60',
           'Noodles                                        60',
           'Noodles Rice                               60',
           'Fried Rice                                    60',
    ],
  },

  {
    title: 'South Indian',
    data: ['Plain Dosa                                   30',
           'Masala Dosa                                40',
           'Idli Sambhar                               40',
           'Sambhar Vada                             40',
    ],
  },
  {
    title: 'Desserts',
    data: ['Ice Cream                                MRP.',
           'Marwadi Kulfi                             20'
    ],
  },
  {
    title: 'Drinks',
    data: [' Tea                                               10',
           'Black Tea                                      15',
           'Green Tea                                     20',
           'Ice Tea                                          30',
           'Coffee                                          15',
           'Black Coffee                                20',
           'Cold Coffee                                 50',
           'ThumsUp                                  MRP.',
           'Pepsi                                        MRP.',
           '7Up                                           MRP.',
           'Limca                                       MRP.',
           'Sprite                                       MRP.',
           'Plain Soda(150ml)                       15',
           'Masala Soda(150ml)                   20',
           'Lemon Soda(150ml)                    25',
           'Flavoured Soda(150ml)               20',
           'Butter Milk                                  20',
           'Lemon Water                               15'
    ],
  },
  {
    title: 'Thali & Confectionary',
    data: ['Breakfast Thali                           60',
           'Lunch Thali                                 60',
           'Hari Sabzi Plate(200gm)            40',
           'Special Sabzi Plate(200gm)       80',
           'Roti                                                 7',
           'Dahi(100gm)                                15',
           'Biscuit                                      MRP.',
           'Chocolate                                 MRP.'
    ],
  },
  
];




const AboutUs = () => {
  return (
    

    
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
      }}
    >
      <SectionList
        sections={DATA_New}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#f9c2ff",
              padding: 20,
              flexDirection: "row",
              marginVertical: 8,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <Text style={{ fontSize: 20 }}>{item.price}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontSize: 25, backgroundColor: "#fff" }}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );


}
export default AboutUs