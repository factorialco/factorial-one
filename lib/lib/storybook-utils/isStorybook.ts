export const useIsStorybook = () => {
  return !!("IS_STORYBOOK" in window && window.IS_STORYBOOK)
}
