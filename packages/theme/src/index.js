const colors = {
  primary: '#D64A36',
  primaryAccent: '#EBA399',
  secondary: '#848484',
  success: '#6fb824',
  successAccent: '#F1F8E9',
  warning: '#f49c1a',
  warningAccent: '#FDF0DD',
  danger: '#ee3322',
  dangerAccent: '#FEEBE9',
  neutral: [
    '#FFF',
    '#F5F5F5',
    '#E7E7E6',
    '#C2C0C0',
    '#848484',
    '#50504B',
    '#14140A',
  ],
}

const space = [0, 4, 6, 8, 12, 16, 24, 32, 64, 128, 256]
space.small = space[2]
space.medium = space[6]
space.large = space[8]

const fontSize = [10, 12, 14, 16, 18, 21, 34]

const radius = {
  default: 4,
  circle: 99999,
}

const shadows = {
  active: '0px 0px 4px rgba(0, 0, 0, 0.12)',
}

const forms = {
  input: {
    backgroundColor: colors.neutral[0],
    borderRadius: radius.default,
    '&:focus': {
      boxShadow: shadows.active,
      border: '1px solid #C2C0C0',
    },
  },
  label: {
    color: colors.neutral[4],
    fontSize: fontSize[1],
    fontWeight: 'bold',
  },
}

const theme = {
  fontSizes: fontSize,
  fonts: {
    heading: 'sans-serif',
    body: 'sans-serif',
  },
  letterSpacings: {
    heading: -0.9,
  },
  text: {
    heading: [
      {
        fontSize: fontSize[6],
      },
      {
        fontSize: fontSize[5],
      },
      {
        fontSize: fontSize[4],
      },
      {
        fontSize: fontSize[3],
      },
    ],
    subtitle: {
      fontSize: fontSize[5],
      letterSpacing: -0.9,
    },
    label: {
      color: colors.neutral[4],
      fontSize: fontSize[1],
      fontWeight: 'bold',
    },
    button: [
      {
        fontSize: fontSize[3],
        textTransform: 'uppercase',
      },
      {
        fontSize: fontSize[2],
        textTransform: 'uppercase',
      },
    ],
    caption: [
      {
        textTransform: 'uppercase',
        fontSize: fontSize[1],
      },
      {
        textTransform: 'uppercase',
        fontSize: fontSize[0],
      },
    ],
    body: [{ fontSize: fontSize[2] }, { fontSize: fontSize[1] }],
    small: { fontSize: fontSize[0] },
  },
  colors: colors,
  space: space,
  buttons: {
    primary: {
      backgroundColor: colors.primary,
      color: colors.neutral[0],
    },
    secondary: {
      color: colors.neutral[0],
      backgroundColor: colors.secondary,
    },
    success: {
      color: colors.neutral[0],
      backgroundColor: colors.success,
    },
    warning: {
      color: colors.neutral[0],
      backgroundColor: colors.warning,
    },
    danger: {
      color: colors.neutral[0],
      backgroundColor: colors.danger,
    },
    default: {
      color: colors.neutral[5],
      backgroundColor: colors.neutral[0],
      border: '1px solid #C2C2C2',
    },
    sizes: {
      small: {
        paddingTop: space.small,
        paddingBottom: space.small,
        paddingLeft: space.small,
        paddingRight: space.small,
        fontSize: fontSize[2],
        width: 24,
        height: 24,
        lineHeight: 0,
      },
      medium: {
        paddingTop: space[4],
        paddingBottom: space[4],
        paddingLeft: space.medium,
        paddingRight: space.medium,
        fontSize: fontSize[2],
      },
      large: {
        paddingTop: space[4],
        paddingBottom: space[4],
        paddingLeft: space.large,
        paddingRight: space.large,
        fontSize: fontSize[3],
      },
    },
  },
  borders: {
    light: { border: '1px solid rgba(255, 255, 255, 0.5)' },
    dark: { border: '1px solid rgba(0, 0, 0, 0.24)' },
  },
  forms: forms,
  radii: radius,
  shadows: shadows,
  loader: {
    primary: {
      backgroundColor: colors.primary,
    },
    secondary: {
      backgroundColor: colors.secondary,
    },
  },
}

export default theme
