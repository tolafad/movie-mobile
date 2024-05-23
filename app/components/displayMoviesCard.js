import React from 'react';
import { useDispatch } from 'react-redux';
import { saveMovie } from '../redux/movie.slice';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function DisplayMoviesCard({ movielist }) {


    let dispatch = useDispatch();
    const navigate = useNavigation();

    let updateMovie = (movie) => {
        let myMovie = movie.item;

        console.log(myMovie.title);
        dispatch(saveMovie(myMovie));
        navigate.navigate("BookTicket");
    }

    const [selectedId, setSelectedId] = useState(null);

    const Item = ({ item, onPress }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item]}>
            <View style={styles.card}>
                <View /*style={{ flexDirection: 'row', flex: 1 }}*/>
                    <View>
                        <Text style={[styles.title]}>{item.title}</Text>
                    </View>
                    <View>
                        <Text>Genre:{item.genre}</Text>
                        <Text>Stars:{item.stars}</Text>
                        <Text>Director: {item.director}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity >
    );

    if (movielist) {

        const renderItem = ({ item }) => (

            <Item
                item={item}
                onPress={() => { updateMovie({ item }); }}
            />


        );

        return (
            <View style={styles.container}>
                <FlatList
                    data={movielist}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={1}
                    extraData={selectedId}
                />
            </View>
        );


    }

}