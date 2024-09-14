export interface ITimeObject {
  //PO - why i need this for template literals - props.placeHolderData[`${props.whichTimeInput}`] wouldnt work without it
  [key: string]: number;
  hangTime: number;
  offTime: number;
  restTime: number;
  repCount: number;
  setCount: number;
  delayStartTime: number;
}

export interface TimerDetailsProps {
  currentAct: string;
  actionTime: number;
  repsCounter: number;
  setsCounter: number;
  timerState: ITimeObject;
  nextAction: string;
  totalWorkout: number;
}
