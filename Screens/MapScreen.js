import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { MainStyles } from '../Styles/MainStyles';


const MapScreen = ({ navigation, route }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    let longitudeInt = 0
    let latitudeInt = 0

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission was denied :(')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)

        })();
    }, []);

    if (errorMsg) {
        text = errorMsg
    } else if (location) {
        // Update marker coords, rerenders marker on map
        latitudeInt = location.coords.latitude
        longitudeInt = location.coords.longitude
        console.log("location detected")
    }

    function GetCords() {
        Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Highest,
            maximumAge: 10000,
            timeout: 5000
        })
            .then(res => setLocation(res))
    }

    function loadLocationCoords() {
        if (location == null) {
            console.log("location loading")
        } else {
            return <MapView style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height
            }}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.1922,
                    longitudeDelta: 0.1421
                }}
                mapType='hybrid'
                showsUserLocation
            >
                <Marker coordinate={{
                    latitude: latitudeInt,
                    longitude: longitudeInt,
                }}
                    title={"Hello"}
                    description={"desc"}
                />
            </MapView>
        }
    }

    function loadCoordsButton() {
        if (location == null) {

        } else {

            return <TouchableOpacity
                onPress={() => {
                    GetCords()
                }}
                style={MainStyles.mapButton}
            >
                <Text style={MainStyles.buttonText}>
                    U coordinaten zijn:{"\n"}
                    longitude :{location.coords.longitude}{"\n"}
                    latitude :{location.coords.latitude}
                </Text>
            </TouchableOpacity>
        }
    }

    return (
        <View style={MainStyles.mapContainer}>
            {loadLocationCoords()}
            {loadCoordsButton()}
        </View>
    )
}

export default MapScreen