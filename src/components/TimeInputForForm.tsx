import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface timeInputFormInt {
  timeObject: any;
  setTimeObject: React.Dispatch<React.SetStateAction<any>>;
  whichTimeInput: string;
  placeHolderData: any;
}

function TimeInputForForm(props: timeInputFormInt) {
  function onTypeChange(text: string) {
    const cleanedValue = text.replace(/[^0-9]/g, '');
    const parsedValue = parseInt(cleanedValue, 10);
    if (!isNaN(parsedValue)) {
      props.setTimeObject(() => {
        return {
          ...props.timeObject,
          [`${props.whichTimeInput}`]: parsedValue.toString(),
        };
      });
    } else {
      props.setTimeObject(() => {
        return {
          ...props.timeObject,
          [`${props.whichTimeInput}`]: '',
        };
      });
    }
  }

  function placeHolderNameAdjust(name: string) {
    return name
      .charAt(0)
      .toUpperCase()
      .concat(name.slice(1))
      .replace(/([a-z])([A-Z])/g, '$1 $2');
  }

  return (
    <>
      <View style={styles.field_line}>
        <Text style={styles.title_text}>
          {placeHolderNameAdjust(props.whichTimeInput).concat(':')}
        </Text>
        <View style={styles.field_input_view}>
          <TextInput
            style={styles.field_input}
            keyboardType="numeric"
            inputMode="numeric"
            placeholder={props.placeHolderData[props.whichTimeInput]}
            onChangeText={onTypeChange}
            value={props.timeObject[`${props.whichTimeInput}`]}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title_text: {
    textAlign: 'right',
    width: '65%',
    fontSize: 22,
  },
  field_input: {
    width: '30%',
    height: '80%',
    borderStyle: 'solid',
    borderColor: 'lightblue',
    borderRadius: 5,
    borderWidth: 2,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 22,
  },
  field_input_view: {
    width: '35%',
  },
  field_line: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 20,
    alignContent: 'stretch',
    alignItems: 'center',
  },
});

export default TimeInputForForm;
