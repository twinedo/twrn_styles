import {StyleSheet, ImageResizeMode} from 'react-native';
import {colors} from './colors';
import fontFamily from './fontFamily';
import { percentageHeight, percentageWidth } from './sizes';

function percentageImage(
  w: string | number | any,
  h: string | number | any,
  resizeMode: ImageResizeMode = 'contain',
) {
  const result = StyleSheet.create({
    style: {
      width: `${w}%`,
      height: `${h}%`,
      resizeMode: resizeMode,
    },
  });
  return result;
}

const createdStyles = StyleSheet.create({
  transparentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  flexGrow: {
    flexGrow: 1,
  },
  displayFlex: {
    flex: 1,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexWrapReverse: {
    flexWrap: 'wrap-reverse',
  },
  w100: {
    width: '100%',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyEven: {
    justifyContent: 'space-evenly',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  relative: {
    position: 'relative',
  },
  title: {
    fontSize: 16,
    lineHeight: percentageHeight(5),
  },
  bodyText1: {
    fontSize: 14,
  },
  bodyText2: {
    fontSize: 16,
  },
  caption: {
    fontSize: 10.5,
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignJustified: {
    textAlign: 'justify',
  },
  horizontalDefaultPadding: {
    paddingHorizontal: percentageWidth(4),
  },
  verticalDefaultPadding: {
    paddingVertical: percentageWidth(3.2),
  },
  topDefaultPadding: {
    paddingTop: percentageHeight(2.7),
  },
  bottomDefaultPadding: {
    paddingBottom: percentageHeight(2.7),
  },
  subtitle: {
    fontSize: 12,
  },
  h5: {
    fontSize: 24,
  },
  h6: {
    fontSize: 18,
  },
  absolute: {
    position: 'absolute',
  },
  bottom: {
    bottom: 0,
  },
  row: {
    flexDirection: 'row',
  },
  rowGap: {
    rowGap: 8,
  },
  columnGap: {
    columnGap: 8,
  },
  gap: {
    gap: 8,
  },
  atBottom: {
    bottom: 0,
    left: 0,
  },
  useWhiteColor: {
    color: colors.WHITE,
  },
  usePrimaryColor: {
    color: colors.PRIMARY,
  },
  useGray2Color: {
    color: colors.GREY7F,
  },
  useGray3Color: {
    color: colors.GREYD9,
  },
  useGray3BgColor: {
    backgroundColor: colors.GREYD9,
  },
  usePrimaryBgColor: {
    backgroundColor: colors.PRIMARY,
  },
  itemListImage: {
    width: percentageWidth(14.5),
    height: percentageWidth(14.5),
    resizeMode: 'contain',
  },
  itemListPaddingVertical: {
    paddingVertical: percentageHeight(1.6),
  },
  itemListContent: {
    width: '60%',
    paddingHorizontal: percentageWidth(4),
  },
  grayRoundedInputContainer: {
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#F4F4F4',
    width: '100%',
  },
  txtError: {
    color: colors.RED,
  },
  useBlueColor: {
    color: colors.SECONDARY,
  },
  paddingTopLg: {
    paddingTop: percentageWidth(12.25),
  },
  floatingButton: {
    bottom: percentageWidth(12),
    position: 'absolute',
    left: percentageWidth(4.2),
    right: percentageWidth(4.2),
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
});

const textStyles = {
  headingBlack: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.black,
      fontSize: 26,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.black,
      fontSize: 20,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.black,
      fontSize: 16,
    },
  }),
  headingBold: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.bold,

      fontSize: 26,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.bold,

      fontSize: 20,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.bold,
      fontSize: 16,
    },
  }),
  headingLight: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.light,
      fontSize: 26,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.light,
      fontSize: 20,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.light,
      fontSize: 16,
    },
  }),
  headingMedium: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 26,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 20,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 16,
    },
  }),
  headingRegular: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 26,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 20,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 16,
    },
  }),
  headingThin: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.thin,
      fontSize: 26,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.thin,
      fontSize: 20,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.thin,
      fontSize: 16,
    },
  }),
  bodyBlack: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.black,
      fontSize: 14,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.black,
      fontSize: 12,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.black,
      fontSize: 10,
    },
  }),
  bodyBold: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.bold,
      fontSize: 14,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.bold,
      fontSize: 12,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.bold,
      fontSize: 10,
    },
  }),
  bodyLight: StyleSheet.create({
    h1: {
      color: colors.BLACK,
      fontFamily: fontFamily.light,
      fontSize: 14,
    },
    h2: {
      color: colors.BLACK,
      fontFamily: fontFamily.light,
      fontSize: 12,
    },
    h3: {
      color: colors.BLACK,
      fontFamily: fontFamily.light,
      fontSize: 10,
    },
  }),
  bodyMedium: StyleSheet.create({
    body1: {
      color: colors.BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 14,
    },
    body2: {
      color: colors.BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 12,
    },
    body3: {
      color: colors.BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 10,
    },
  }),
  bodyRegular: StyleSheet.create({
    body1: {
      color: colors.BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 14,
    },
    body2: {
      color: colors.BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 12,
    },
    body3: {
      color: colors.BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 10,
    },
  }),
  bodyThin: StyleSheet.create({
    body1: {
      color: colors.BLACK,
      fontFamily: fontFamily.thin,
      fontSize: 14,
    },
    body2: {
      color: colors.BLACK,
      fontFamily: fontFamily.thin,
      fontSize: 12,
    },
    body3: {
      color: colors.BLACK,
      fontFamily: fontFamily.thin,
      fontSize: 10,
    },
  }),
} as const;

const mergedStyles = {
  center: StyleSheet.flatten([
    createdStyles.justifyCenter,
    createdStyles.alignCenter,
  ]),
};
const globalStyles: { [key: string]: object } = {
  ...mergedStyles,
  ...createdStyles,
  ...textStyles,
  percentageImage,
} as const;

export default globalStyles;
