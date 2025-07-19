import { View, Text } from 'react-native';
import { QuoteBox } from '@/components/ui/QuoteBox';

export const QuoteDisplay = () => {
  return (
    <View>
    <QuoteBox message="You can do this!" name="Alex"/>
    <QuoteBox message="One step at a time!" name="Al"/>
    </View>
  );
};