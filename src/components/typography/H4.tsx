import { Typography, TypographyProps } from "@mui/material"

export interface H4Props extends Omit<TypographyProps, 'component' | 'variant' > {

}

export const H4 = ({
  children,
  sx,
  color
}: H4Props) => {
  return (
    <Typography 
      component="h4" 
      variant="h3" 
      sx={sx}
      color={color}>
      {children}
    </Typography>
  )
}