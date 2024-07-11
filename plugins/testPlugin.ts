export default defineNuxtPlugin((nuxtApp) => {
  const testPlugin = () => 'Hi! 我是一个测试插件插件👼';

  return {
    provide: {
      testPlugin,
    },
  };
});
