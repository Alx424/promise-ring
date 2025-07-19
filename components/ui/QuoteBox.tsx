import { View, Text } from 'react-native';

export function QuoteBox({
  message,
  name,
  ...rest
}: any) {
  return (
    <View style={{
      backgroundColor: '#ffe4b5',
      borderRadius: 15,
      padding: 20,
      margin: 10,
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowRadius: 5,
    }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>
        "{message}"
      </Text>
      <Text style={{ fontSize: 14, fontStyle: 'italic', color: '#666', marginTop: 10 }}>
        -- {name}
      </Text>
    </View>
  );
};