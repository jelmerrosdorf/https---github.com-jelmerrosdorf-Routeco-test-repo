import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { auth } from '../firebase'
import { MainStyles } from '../Styles/MainStyles'
import { blue } from '../Styles/Blue'

const ProfileScreen = ({ navigation }) => {

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Home")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={blue.container}>

      <Text style={blue.title}
      >RoutEco
      </Text>
      <Text style={blue.text}>
        Your profile
      </Text>

      <Text style={blue.text}>
        Email: {auth.currentUser?.email}
      </Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home')
        }}
        style={MainStyles.button}
      >
        <Text style={MainStyles.buttonText}>
          Back to home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Gallery')
        }}
        style={MainStyles.button}
      >
        <Text style={MainStyles.buttonText}>
          Go to the gallery
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSignOut}
        style={MainStyles.button}
      >
        <Text style={MainStyles.buttonText}>Sign out</Text>
      </TouchableOpacity>

      <Image source={require("../Includes/Images/leafBackground.png")} style={blue.backgroundImage}></Image>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})