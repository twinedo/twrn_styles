import {Dimensions} from 'react-native';

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

export const height = screenHeight < screenWidth ? screenWidth : screenHeight;
export const width = screenWidth < screenHeight ? screenWidth : screenHeight;

export const guidelineBaseWidth = 360;
export const guidelineBaseHeight = 680;

export function percentageWidth(percent: number): number {
  return width * (percent / 100);
}

export function percentageHeight(percent: number): number {
  return height * (percent / 100);
}

export const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

export const moderateScale = ({size, factor = 0.5}: {size: number; factor?: number}) =>
  size + (horizontalScale(size) - size) * factor;

const sizes = {
  percentageHeight,
  percentageWidth,
  horizontalScale,
  verticalScale,
  moderateScale,
};

export default sizes;