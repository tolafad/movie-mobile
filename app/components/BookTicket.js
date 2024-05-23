import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { saveTransaction } from '../redux/movie.slice';
import { v4 as uuidv4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, Image } from "react-native"
import { styles } from './styles';


const BookTicket = () => {
    const navigate = useNavigation();

    const [transaction, setTransaction] = useState({});

    let { movie } = useSelector((state) => state.movie);

    console.log('movie :', movie);


    let dispatch = useDispatch();

    let verifyTransaction = () => {
        let myMovie = movie;

        let _newTransaction = {
            movieId: myMovie.id,
            currency: myMovie.currency,
            duration: "150mins",
            releaseDate: "1st May 2024",

            userId: uuidv4()
        };
        console.log('_newTransaction :', _newTransaction);
        setTransaction(_newTransaction);

        dispatch(saveTransaction(_newTransaction))
        navigate('Ticket', { transaction: _newTransaction });
    }


    if (movie) {
        return (
            <ScrollView >


                <View key={movie.id} style={styles.card}>
                    <Text style={{ width: 40 }}>{movie.id}</Text>
                    <Text >{' | '}</Text>
                    <Text style={{ width: 70 }}>{movie.title}</Text>
                    <Text >{' | '}</Text>
                    <Text style={{ width: 50 }} >150mins</Text>
                    <Text >{' | '}</Text>
                    <Text style={{ width: 50 }} >1st May 2024</Text>
                    <Image
                        source={{ uri: `./img/12a.webp` }}
                        style={{ width: 20, height: 20 }}
                    />
                </View>
            </ScrollView>
        )

    }
}

export default BookTicket;