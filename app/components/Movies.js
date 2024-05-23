import React from 'react';
import { View, Text, ScrollView, Image } from "react-native"
import MovieList from './movieListing';
import { styles } from './styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveMovies } from '../redux/movie.slice';

export default function Movies() {

    const url = "http://192.168.1.164:3004/movies"

    let dispatch = useDispatch();

    const getData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => dispatch(saveMovies(result)))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getData();
    }, []);


    return (

        <View style={styles.container} >
            <MovieList />
        </View>
    )
}
