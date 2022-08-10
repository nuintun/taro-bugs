export default defineAppConfig({
  pages: ['pages/home/index'],
  window: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'WeChat',
    navigationBarBackgroundColor: '#f6f6f4',
    backgroundTextStyle: 'light',
    backgroundColorTop: '#f6f6f4',
    backgroundColorBottom: '#f6f6f4'
  },
  lazyCodeLoading: 'requiredComponents'
});
