import { Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { MainStyles } from '../Styles/MainStyles';


const windowWidth = Dimensions.get('window').windowWidth;

export const GalleryScreen = ({ navigation }) => {

    let images;
    images = require('../Includes/ImageList')

    const imageView = images.map((item) =>

        <TouchableOpacity
            key={item.id}
            onPress={() => {
                navigation.navigate('Image', { imageId: item.id })
            }}
        >
            <Image
                source={item.source}
                style={{
                    flex: item.id,
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: 100,
                    width: 110,
                    margin: 30
                }}
            />
        </TouchableOpacity>
    );

    return (
        <View>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Camera')
                }}
                style={MainStyles.button}
            >
                <Text
                    style={MainStyles.buttonText}
                >
                    Make a picture
                </Text>
            </TouchableOpacity>

            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                {imageView}
            </View>
        </View>
    )
}

export default GalleryScreen