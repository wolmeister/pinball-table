import 'expo-dev-client';
import { StatusBar } from 'expo-status-bar';
import { ResizeMode, Video } from 'expo-av';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { useCallback, useRef } from 'react';

export default function App() {
  const launchBall = useCallback(() => {}, []);
  const pressLeft = useCallback(() => {}, []);
  const pressRight = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Video
        source={{
          uri: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4',
        }}
        shouldPlay
        isLooping
        style={{ flex: 1, width: '100%' }}
        resizeMode={ResizeMode.COVER}
      />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Left</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Launch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Right</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    position: 'absolute',
    bottom: 32,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#242038',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 16,
  },
  leftButton: {},
  rightButton: {},
  buttonText: {
    color: 'white',
  },
});
