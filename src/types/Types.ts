export type PostType = {
  id: number,
  title: string,
  body: string,
  userId: number,
  onDelete: (id: number) => void
}

type ColorType = "light" | "dark"
type BrightnessType = "25%" | "50%" | "75%" | "100%"
export type ColorBrightnessType = {
  color: `${ColorType}-${BrightnessType}`
}