import { View, Text, Pressable, Dimensions } from 'react-native';
import { Image } from 'expo-image';

export function Badge({
  name,
  description,
  color="default",
  ...rest
}: any) {
  let pressed = false;
  let title='\"'+name+'\"';
  let desc='-- '+description;
  return (
    <View style={{
      backgroundColor: color=="blue"?'#b5deffff':'#ffe4b5',
      borderRadius: 15,
      padding: 20,
      margin: 10,
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowRadius: 5,
      flex: 1,
      minWidth: 110,
      maxWidth: 110,
      height: 110,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Pressable hitSlop={{
        bottom:50,
        top:40,
        left:50,
        right:50,
      }} onPress={()=> {
        pressed=!pressed;
        //console.log("pressed");
      }}>
        {() => (
        <View style={{
          
        }}>
          <Image source={pressed?require('@/assets/images/nothing.png'):require('@/assets/images/react-logo.png')} style={{
            width: 60,
            height: 60,
          }}/>
          <View style={{
            marginTop: -60,
          }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333', alignSelf: 'center' }}>
              {pressed ? title : ''}
            </Text>
            <Text style={{ fontSize: 12, fontStyle: 'italic', color: '#666', marginTop: 10, alignSelf: 'center' }}>
              {pressed ? desc : ''}
            </Text>
          </View>
        </View>
        )}
      </Pressable>
      
    </View>
  );
};