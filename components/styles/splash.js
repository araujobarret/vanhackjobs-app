import { Dimensions } from 'react-native';

let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

let blurColor = "lightblue";

export const blurContainer = {
  backgroundColor: blurColor,
  height: deviceHeight,
  opacity: 0.6,
  position: "absolute",
  width: deviceWidth,
  zIndex: 2
}

export const imageOverlapped = {
  height: 128,
  left: (deviceWidth/2) - 98,
  position: "absolute",
  top: (deviceHeight/2) - 64,
  width: 196,
  zIndex: 3
}
