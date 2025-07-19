import { View, Text, Pressable, Dimensions } from 'react-native';

export function Badge({
  name,
  description,
  color="default",
  ...rest
}: any) {
  let hovered = false;
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
        hovered=!hovered;
        console.log("ya");
      }}>
        {() => (
        <>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>
        {hovered ? title : '?'}
        </Text>
        <Text style={{ fontSize: 12, fontStyle: 'italic', color: '#666', marginTop: 10 }}>
        {hovered ? desc : ''}
        </Text>
        </>
        )}
      </Pressable>
      
    </View>
  );
};