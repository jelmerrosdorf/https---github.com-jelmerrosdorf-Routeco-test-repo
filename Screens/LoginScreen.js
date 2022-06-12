import { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth"
import { MainStyles } from '../Styles/MainStyles'
import { blue } from '../Styles/Blue'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Automatic login per device
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Profile")
            }
        })

        return unsubscribe
    }, [])

    return (
        <KeyboardAvoidingView
            style={blue.container}
            behavior="padding"
        >
            <Text style={blue.title}>
                RoutEco
            </Text>

            <Text style={blue.text}>
                <Text style={blue.textRed}> Login {" "}
                </Text>
                to your account
            </Text>

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={blue.TextInput}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                style={blue.TextInput}
                secureTextEntry
            />

            <TouchableOpacity
                onPress={() => {
                    signInWithEmailAndPassword(auth, email, password)
                        .then(userCredentials => {
                            const user = userCredentials.user;
                            console.log('Logged in with:', user.email);
                        })
                        .catch(error => alert(error.message))
                }
                }
                style={MainStyles.button}
            >
                <Text style={MainStyles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Register')
                }}
                style={MainStyles.button}
            >
                <Text style={MainStyles.buttonText}>
                    Register new account
                </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})