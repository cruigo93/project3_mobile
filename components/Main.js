import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';

import { gStyle } from '../styles/style'


export default function Main({ navigation }) {


    // const [news, setNews] = useState([
    //     { name: "News1", anons: "It is news1!!!", full: "Full text of news1", key: 1},
    //     { name: "News2", anons: "It is news2!!!", full: "Full text of news2", key: 2},
    //     { name: "News3", anons: "It is news3!!!", full: "Full text of news3", key: 3},
    //     { name: "News4", anons: "It is news4!!!", full: "Full text of news4", key: 4},
    //     { name: "News5", anons: "It is news5!!!", full: "Full text of news5", key: 5},
    // ])
    const [news, setNews] = useState([])
    // console.log("Hellow")

    axios.get('http://185.97.113.183:5000/lessons')
        .then(res => {
            // console.log("HHHHHH")
            // console.log(res.data)
            setNews(res.data.news);
        })

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>Main page</Text>
            <FlatList data={news} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
                    <Text>{item.name}</Text>
                    <Text>{item.anons}</Text>
                </TouchableOpacity>
            )} ></FlatList>
            <StatusBar style="auto" />
        </View>
    );


}

const styles = StyleSheet.create({

});
