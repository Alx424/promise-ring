import { View, Text } from 'react-native';
import { Badge } from '@/components/ui/Badge';

export const BadgeDisplay = () => {
  return (
    <View style={{
      marginHorizontal: "auto",
      marginLeft: -35,
      width: 400,
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "center",
    }}>
    <Badge name="The Journey Awaits" description="Started tracking!" color="blue"/>
    <Badge name="You got this!" description="First day reached"/>
    <Badge name="Three's a party" description="3 days in!"/>
    <Badge name="1, 2, 3, 4, 5!" description="Reached 5 days!"/>
    <Badge name="Weak??? More like *Week!*" description="Reached 7 days"/>
    <Badge name="A fortnight!" description="Reached 14 days"/>
    <Badge name="Once in a full moon" description="Reached 30 days"/>
    <Badge name="" description="Reached 60 days"/>
    <Badge name="" description="Reached 90 days"/>
    <Badge name="" description="Reached 100 days" color="blue"/>
    </View>
  );
};