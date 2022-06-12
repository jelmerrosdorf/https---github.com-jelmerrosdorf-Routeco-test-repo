import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MainStyles } from '../Styles/MainStyles';
import { blue } from '../Styles/Blue';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={blue.container}>

            <Text style={blue.title}>
                Welkom bij <Text style={blue.titleRed}>RoutEco</Text>
            </Text>
            <Image source={require("../Includes/Images/logo.png")} style={blue.logo}>

            </Image>

            <Text style={blue.text}>
                Heb je nog geen account?
                {"\n"}
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Register')
                    }}
                >
                    <Text style={blue.textButton}>
                        Registreer
                    </Text>
                </TouchableOpacity>
                {" "}jezelf nu.
                {"\n"}

                Heb je al een account?
                {"\n"}
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Login')
                    }}

                >
                    <Text style={blue.textButton}>
                        Login.
                    </Text>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Camera')
                        }}
                    >
                        <Text style={MainStyles.button}>
                            Naar de camera
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Map')
                        }}
                    >
                        <Text style={MainStyles.button}>
                            Naar de map
                        </Text>
                    </TouchableOpacity>

                </TouchableOpacity>
            </Text>
            <Image source={require("../Includes/Images/leafBackground.png")} style={blue.backgroundImage}>

            </Image>

        </View>
    )
}

export default HomeScreen;
