module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  mode: 'jit',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px'
        }
      },
      colors: {
        black: '#1c1c1c',
        primary: {
          DEFAULT: '#00FFB3',
          50: '#10effff',
          100: '#f0fffe',
          200: '#b3fff7',
          300: '#7affe9',
          400: '#3dffd2',
          500: '#00ffb3',
          600: '#00c798',
          700: '#00947b',
          800: '#005c53',
          900: '#002423'
        },
        secondary: {
          50: '#9CAEE9',
          100: '#8BA1E5',
          200: '#6986DE',
          300: '#486BD7',
          400: '#2C53C9',
          500: '#2545A8',
          600: '#1B327A',
          700: '#111F4C',
          800: '#070C1E',
          900: '#020308'
        },
        yellow: '#FFC845',
        lightGray: '#d3d3d3'
        // purple: {
        //   200: '#1a15517d',
        //   400: '#1a1551bd',
        //   900: '#1a1551'
        // }
      },
      spacing: {
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
        80: '20rem',
        96: '24rem',
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        176: '44rem',
        192: '48rem',
        208: '52rem',
        224: '56rem',
        240: '60rem'
      },
      height: (theme) => ({
        auto: 'auto',
        ...theme('spacing'),
        full: '100%',
        screen: '100vh'
      }),

      minHeight: (theme) => ({
        ...theme('height')
      }),
      maxHeight: (theme) => ({
        ...theme('height')
      }),
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%'
      },
      maxWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        '90vw': '90vw'
      },
      objectPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top'
      },
      borderWidth: {
        1: '1px'
      }
    },
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
      serif: ['BioRhyme', 'serif'],
      sans: ['Montserrat', 'sans-serif'],
      bebas: ['Bebas Neue', 'sans-serif'],

    },
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      60: '60',
      70: '70',
      80: '80',
      90: '90',
      100: '100',
      neg: '-1',
      max: '2147483647'
    }
    // fontSize: {
    //   xxs: '0.65rem',
    //   //   xs: '0.75rem',
    //   //   sm: '0.875rem',
    //   //   base: '1rem',
    //   //   lg: '1.125rem',
    //   //   xl: '1.25rem',
    //   //   '2xl': '1.5rem',
    //   //   '3xl': '1.875rem',
    //   //   '4xl': '2.25rem',
    //   //   '5xl': '3rem',
    //   //   '6xl': '4rem',
    // },
  },
  variants: {
    extend: {
      borderStyle: ['responsive', 'hover', 'focus', 'first'],
      alignContent: ['responsive', 'first'],
      alignItems: ['responsive', 'first'],
      alignSelf: ['responsive', 'first'],
      appearance: ['responsive', 'first'],
      backgroundAttachment: ['responsive', 'first'],
      backgroundColor: ['responsive', 'hover', 'focus', 'first'],
      backgroundPosition: ['responsive', 'first'],
      backgroundRepeat: ['responsive', 'first'],
      backgroundSize: ['responsive', 'first'],
      borderCollapse: ['responsive', 'first'],
      borderColor: ['responsive', 'hover', 'focus', 'first'],
      borderRadius: ['responsive', 'first'],
      borderWidth: ['responsive', 'odd', 'first'],
      boxShadow: ['responsive', 'hover', 'focus', 'first'],
      cursor: ['responsive', 'first'],
      display: ['responsive', 'first'],
      fill: ['responsive', 'first'],
      first: ['responsive', 'first'],
      flex: ['responsive', 'first'],
      flexDirection: ['responsive', 'first'],
      flexGrow: ['responsive', 'first'],
      flexShrink: ['responsive', 'first'],
      flexWrap: ['responsive', 'first'],
      float: ['responsive', 'first'],
      fontFamily: ['responsive', 'first'],
      fontSize: ['responsive', 'first'],
      fontSmoothing: ['responsive', 'first'],
      fontStyle: ['responsive', 'first'],
      fontWeight: ['responsive', 'hover', 'focus', 'first'],
      gridTemplateColumn: ['hover', 'focus', 'first'],
      gridTemplateRows: ['hover', 'focus', 'first'],
      height: ['responsive', 'hover', 'focus', 'first'],
      inset: ['responsive', 'first'],
      justifyContent: ['responsive', 'first'],
      letterSpacing: ['responsive', 'first'],
      lineHeight: ['responsive', 'first'],
      listStylePosition: ['responsive', 'first'],
      listStyleType: ['responsive', 'first'],
      margin: ['responsive', 'first'],
      maxHeight: ['responsive', 'first'],
      maxWidth: ['responsive', 'first'],
      minHeight: ['responsive', 'first'],
      minWidth: ['responsive', 'first'],
      objectFit: ['responsive', 'hover', 'focus', 'first'],
      objectPosition: ['responsive', 'first'],
      opacity: ['responsive', 'first'],
      order: ['responsive', 'first'],
      outline: ['responsive', 'focus', 'first'],
      overflow: ['responsive', 'first'],
      padding: ['responsive', 'first'],
      pointerEvents: ['responsive', 'first'],
      position: ['responsive', 'first'],
      resize: ['responsive', 'first'],
      stroke: ['responsive', 'first'],
      tableLayout: ['responsive', 'first'],
      textAlign: ['responsive', 'first'],
      textColor: ['responsive', 'hover', 'focus', 'first'],
      textDecoration: ['responsive', 'hover', 'focus', 'first'],
      textTransform: ['responsive', 'first'],
      userSelect: ['responsive', 'first'],
      verticalAlign: ['responsive', 'first'],
      visibility: ['responsive', 'first'],
      whitespace: ['responsive', 'first'],
      width: ['responsive', 'first'],
      wordBreak: ['responsive', 'first'],
      zIndex: ['responsive', 'first']
    }
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('@tailwindcss/typography'),
    require('tailwindcss/nesting')
  ]
}
