export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  const upate = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  onMounted(() => window.addEventListener('mousemove', upate));
  onUnmounted(() => window.removeEventListener('mousemove', upate));

  return { x, y };
}
