import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { QuoteDisplay } from '@/components/ui/QuoteDisplay';
import { MaterialIcons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ff6fd6ff', dark: '#ff6fd6ff' }}
      headerImage={
        <MaterialIcons
          size={310}
          color="#808080"
          name="auto-awesome"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">The Motivation Corner 🎉</ThemedText>
      </ThemedView>
      <ThemedText>Feeling overwhelmed or scared to start your journey?</ThemedText>
      <ThemedText>Here are some words of encouragement from people who have been in your shoes!</ThemedText>
      <QuoteDisplay/>
      <ThemedText>Feel free to submit your words of encouragement for everyone to see!
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link"> Google Form</ThemedText>
        </ExternalLink>
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#daf940ff',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
