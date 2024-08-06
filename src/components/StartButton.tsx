import React from 'react';
import {Button} from 'react-native';

// interface StartButton {
//   settingIsStart;
//   isStart;
// }

function StartButton(func: any, initBoo: any) {
  return (
    <>
      <Button
        title="Press Me"
        onPress={() => {
          func(!initBoo);
        }}
      />
    </>
  );
}

export default StartButton;
