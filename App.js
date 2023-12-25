import { View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import FirstNative from './src/components/FirstNative';
import ButtonComp from './src/components/ButtonComp';
import NativeModal from './src/components/NativeModal';
import StatusComp from './src/components/Statuscomp';
import ActivityIndicatorComp from './src/components/ActivityIndicatorComp';
import AlertComp from './src/components/AlertComp';
import Greet from './src/mainComponents/Greet';
import NativeStyling from './src/stylings/NativeStyling';
const logoImage = require("./assets/adaptive-icon.png")

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        {/* <FirstNative /> */}
        {/* <ButtonComp /> */}
        {/* <NativeModal /> */}
        {/* <StatusComp /> */}
        {/* <ActivityIndicatorComp /> */}
        {/* <AlertComp /> */}
        <Greet name="Joshua" />
        <Greet name="Ali Mohammed" />
    </View>
  )
}