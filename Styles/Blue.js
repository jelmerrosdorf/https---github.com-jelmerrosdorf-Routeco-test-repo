import { StyleSheet } from "react-native"

const textColor = "#24305e"
const backgroundColor ="#a9d0e7"
const textColorRed = "#f77670"
const inputFieldBackground = "#f8e9a1" 

export const blue = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: backgroundColor,
        
    },

    backgroundImage:{
        width: "100%",
        height: "30%",
        padding: 20,
        paddingVertical: 40,
        position: "absolute",
        bottom:0
    },
    title:{
       padding:50,
       paddingTop:60,
       fontSize:30,
       alignSelf:"center",
       color:textColor
    },
    titleRed:{
        padding:50,
        paddingTop:60,
        fontSize:30,
        alignSelf:"center",
        color:textColorRed
     },
    textButton:{
        fontSize:25,
        color:textColorRed,
        textDecorationLine:"underline"
    },
    text:{
        fontSize:20,
        alignSelf:"center",
        color:textColor
    },
    textRed:{
        fontSize:25,
        color:textColorRed,
        fontWeight:"bold"
    },
    
    logo:{
        width:"50%",
        height:"30%",
        resizeMode:"contain",
        alignSelf:"center"
    },
    TextInput:{
        borderRadius:50,
        height: "8%",
        width:"70%",
        backgroundColor:inputFieldBackground,
        alignSelf:"center",
        justifyContent:"center",
        margin:10,
        textAlign:"center",
        fontStyle:"italic",
        color:textColorRed
    },

})