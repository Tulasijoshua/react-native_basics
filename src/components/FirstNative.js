import { View, Text, Image, ImageBackground, ScrollView, Pressable } from 'react-native';
const logoImage = require("../../assets/adaptive-icon.png")

export default function FirstNative() {
    return (
        <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
            <ScrollView>
                <Pressable 
                    onPress={() => console.log("Image pressed")}
                    onPressIn={() => console.log("Image PressedIn")}
                    onPressOut={() => console.log("Imagme pressed out")}
                    onLongPress={() => console.log("Image long press")}
                    >
                    <Image source={logoImage} style={{ width: 300, height: 300 }} />
                </Pressable>
                {/* <ImageBackground style={{flex: 1}} source={logoImage}>
      <Text>IMAGE TEXT</Text>
    </ImageBackground> */}
                <Pressable onPress={() => console.log("Text pressed")}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tristique nisl. Curabitur porta
                        lobortis enim id fringilla. Proin sed turpis ac tellus fermentum egestas et eu velit. Praesent
                        sem purus, malesuada ut semper sit amet, semper non ipsum. Donec ultrices at neque in fermentum.
                        Sed sed mi condimentum, ultrices sapien sit amet, varius lorem. Sed nunc turpis, feugiat nec eros
                        nec, tincidunt semper nisl. Phasellus feugiat quis nulla id ornare. Phasellus aliquam ullamcorper
                        mauris non ornare. Proin felis erat, posuere ac malesuada eget, efficitur quis odio.
                        Praesent consectetur dui ut ipsum imperdiet, quis pulvinar arcu volutpat. Maecenas accumsan non elit
                        ultrices semper. Suspendisse vitae dolor ac nisi blandit efficitur ac ornare justo. Donec condimentum
                        ornare augue porttitor laoreet. Quisque at nisi tincidunt, luctus tellus nec, accumsan eros. Cras
                        Praesent consectetur dui ut ipsum imperdiet, quis pulvinar arcu volutpat. Maecenas accumsan non elit
                        ultrices semper. Suspendisse vitae dolor ac nisi blandit efficitur ac ornare justo. Donec condimentum
                        ornare augue porttitor laoreet. Quisque at nisi tincidunt, luctus tellus nec, accumsan eros. Cras
                        convallis.
                    </Text>
                </Pressable>
                <Image source={logoImage} style={{ width: 300, height: 300 }} />
                <Text>
                    Praesent consectetur dui ut ipsum imperdiet, quis pulvinar arcu volutpat. Maecenas accumsan non elit
                    ultrices semper. Suspendisse vitae dolor ac nisi blandit efficitur ac ornare justo. Donec condimentum
                    ornare augue porttitor laoreet. Quisque at nisi tincidunt, luctus tellus nec, accumsan eros. Cras
                    Praesent consectetur dui ut ipsum imperdiet, quis pulvinar arcu volutpat. Maecenas accumsan non elit
                    ultrices semper. Suspendisse vitae dolor ac nisi blandit efficitur ac ornare justo. Donec condimentum
                    ornare augue porttitor laoreet. Quisque at nisi tincidunt, luctus tellus nec, accumsan eros. Cras
                    convallis.
                </Text>
            </ScrollView>
        </View>
    )
}