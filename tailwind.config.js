module.exports = {
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  theme: {
    extend: {
      colors: {
        'white-2': 'rgba(255, 255, 255, 0.2)',
        'white-4': 'rgba(255, 255, 255, 0.4)',
        'white-6': 'rgba(255, 255, 255, 0.6)',
        'white-8': 'rgba(255, 255, 255, 0.8)',
        'gray-200-2': 'rgba(237, 242, 247, .2)',
        'gray-200-4': 'rgba(237, 242, 247, .4)',
        'gray-200-6': 'rgba(237, 242, 247, .6)',
        'gray-200-8': 'rgba(237, 242, 247, .8)',
      },
    },
  },
};
