import {StyleSheet, View, Image, Text} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {Switch} from 'react-native-paper';

export default function LeadCard(props) {
  useEffect(() => {
    if (props.selectAll) {
      setIsSwitchOn(true);
    } else {
      setIsSwitchOn(false);
    }
  }, [props.selectAll]);

  const [isSwitchOn, setIsSwitchOn] = useState(null);
  const [counter, setCounter] = useState(1);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const handleDecrement = () => setCounter(counter - 1);

  async function handleIncrement() {
    console.log('hello');
    setCounter(counter + 1);
  }

  // async function handleDecrement() {
  //   setCounter(counter - 1);
  // }

  return (
    <View style={styles.cardContainer}>
      <Text style={{width: '34%', fontSize: 12}}>{props.PhoneNumber}</Text>
      <Text style={{width: '22%', fontSize: 12}}>{props.lastVisit} Days</Text>
      <Text style={{width: '22%', fontSize: 12}}>Rs. {props.totalSpend}</Text>

      <Switch
        color="#e8fd45"
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        style={{width: '22%'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  InputFieldStyle: {
    backgroundColor: '#FFF',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  counterBtn: {
    fontSize: 18,
    color: '#e8fd45',
  },
  serviceName: {
    width: 100,
    textAlign: 'center',
  },
});
