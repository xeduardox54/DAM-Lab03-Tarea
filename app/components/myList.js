import React, { Component } from 'react';
import {View, Text, StatusBar, FlatList, StyleSheet, Image} from 'react-native';

const data = [
    {
      id: 1,
      image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
      name: '03-April 2020 (myphotopack.com).jpg',
      device: 'iPhone X',
      state: 'delete',
    },
    {
      id: 2,
      image: 'https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg',
      name: '12-November 2020 (myphotopack.com).jpg',
      device: 'iPhone X',
      state: 'delete',
    },
    {
      id: 3,
      image: 'https://pbs.twimg.com/profile_images/1098225250469326848/2KN00JjZ_400x400.png',
      name: '07-January 2020 (myphotopack.com).jpg',
      device: 'iPhone X',
      state: 'delete',
    }
];

const Item = ({ image,name,device,state }) => (
    <View style={styles.item}>
        <Image style={styles.image} source={{uri:image}}/>
        <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.device}>{device}</Text>
            <Text style={styles.state}>{state}</Text>
        </View>
    </View>
  );

const renderItem = ({ item }) => (
    <Item image={item.image} name={item.name} device={item.device} state={item.state} />
);

const MyList = () => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'skyblue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:'row',
        paddingTop:15,
        paddingLeft: 15,
    },
    image: {
        width: 100, 
        height: 100,
    },
    name: {
        fontSize: 18,
        paddingLeft: 15,
    },
    device: {
        color: 'gray',
        paddingLeft: 15,
    },
    state: {
        color: 'gray',
        paddingLeft: 15,
    },
});

export default MyList;