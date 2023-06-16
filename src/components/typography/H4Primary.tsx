import { H4, H4Props } from "./H4"

export interface H4PrimaryProps extends Omit<H4Props, 'color'> {

}

export const H4Primary = ({
  children,
  sx,
  align
}: H4PrimaryProps) => {
  return (
    <H4 
      color="secondary"
      sx={sx}
      align={align}>
      {children}
    </H4>
  )
}