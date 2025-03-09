import { Noto_Sans_SC, Zhi_Mang_Xing } from "next/font/google"

export const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-sc",
})

export const zhiMangXing = Zhi_Mang_Xing({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-zhi-mang-xing",
})

