import { useState } from 'react';
import { View, StatusBar, Button } from 'react-native';

export default function StatusComp() {
    const [isHidden, setIsHidden] = useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
            <StatusBar backgroundColor="lightgreen" barStyle="dark-content" hidden={isHidden} />
            <Button 
                title='Status Bar'
                onPress={() => setIsHidden(!isHidden)}
            />
        </View>
    )
}