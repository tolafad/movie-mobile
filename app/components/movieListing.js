import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { View, Text, ScrollView, Image } from "react-native"
import DisplayMoviesCard from './displayMoviesCard';


const MovieList = () => {

    let { movies } = useSelector((state) => state.movie);

    return (

        <>
            <View>

                <Text style={styles.baseText}>
                    Latest movies
                </Text>
            </View>
            <View>
                <DisplayMoviesCard movielist={movies} />
            </View>
        </>
    )
}

export default MovieList;



