import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       name: Thai Hoai Nguyen
       gmail:hoainguyen.05032004@gmail.com
       studenID:220501016
       hobbies:play game
       phone:0944060325
       
      </Text>
      <Image style={styles.logo} source={require('../assets/1.png')} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
