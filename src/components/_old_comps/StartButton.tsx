// interface StartButtonProps {
//   settingIsStart;
//   isStart;
// }

function StartButton(func: any, initBoo: any) {
  return (
    <>
      <button
        title="Press Me"
        onClick={() => {
          func(!initBoo);
        }}
      />
    </>
  );
}

export default StartButton;
