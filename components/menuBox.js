import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const MenuBox = props => {
  return (
    <View
      style={{
        width: '100%',
        maxWidth: (props.PAGE_WIDTH - 58) / 3 - 10,
        // height: (props.PAGE_WIDTH - 58) / 4 - 10,
        marginHorizontal: 5,
      }}>
      <View
        style={{
          backgroundColor: '#000',
          borderRadius: 16,
          width: (props.PAGE_WIDTH - 58) / 3 - 10,
          height: (props.PAGE_WIDTH - 58) / 3 - 10,
          justifyContent: 'center',
          alignItems: 'center',

          shadowColor: '#fff',
          shadowOffset: {width: 0.5, height: 1},
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
        }}>
        <Image
          style={{
            width: (props.PAGE_WIDTH - 58) / 3 - 50,
            height: (props.PAGE_WIDTH - 58) / 3 - 50,
          }}
          source={props.image}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '600',
          textAlign: 'center',
          paddingTop: 5,
          color: '#fff',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default MenuBox;

const styles = StyleSheet.create({});
