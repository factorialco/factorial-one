import { useMediaQuery } from "usehooks-ts"

export const useIsSmallScreen = () =>
  useMediaQuery("(max-width: 440px)", {
    initializeWithValue: false,
  })
