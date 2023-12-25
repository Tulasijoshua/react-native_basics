import { useState } from 'react';
import { View, Button, Text, Modal } from 'react-native';

export default function NativeModal() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
            <Button
                title='Press'
                onPress={() => setIsModalVisible(true)}
                color='midnightblue'
            />
            <Modal 
                visible={isModalVisible} 
                onRequestClose={() => setIsModalVisible(false)}
                // animationType='fade'    
                animationType="slide"
                // presentationstyle applies to only iOS
                // presentationStyle='fullscreen'
                // presentationStyle='formSheet'
                presentationStyle='pageSheet'
            >
                <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
                    <Text>Modal content</Text>
                    <Button onPress={() => setIsModalVisible(false)} title='Close' color="midnightblue" />
                </View>
            </Modal>
        </View>
    )
}