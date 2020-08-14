module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        primary: '#18A0FB',
        dblue: '#52A6DE',
      },
      borderRadius: {
        xl: '0.625rem',
      },
      margin: {
        '9.8rem': '9.8rem',
        '0.35rem': '0.35rem',
      },
    },
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '128': '28rem',
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      halfscreen: '50vh',
      screen: '100vh',
    }),
  },
  variants: {},
  plugins: [],
};
