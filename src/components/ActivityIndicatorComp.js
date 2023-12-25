import { useState } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';

export default function ActivityIndicatorComp() {
    const [isIndicator, setIsIndicator] = useState(false)
    return (
        <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
            <ActivityIndicator  />
            <ActivityIndicator size="large" />
            <ActivityIndicator size="large" color="midnightblue" />
            <ActivityIndicator size="large" color="midnightblue" animating={isIndicator} />
            <Button 
                title='Indicator'
                onPress={() => setIsIndicator(!isIndicator)}
            />
        </View>
    )
}