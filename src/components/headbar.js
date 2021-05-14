import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles';

function Headbar() {

  return (
    <View style={styles.header}>
      <Text>Parrot Party</Text>
    </View>
  )
}
      
export { Headbar };