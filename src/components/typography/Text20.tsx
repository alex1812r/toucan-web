import { Typography, TypographyProps } from "@mui/material"

export interface Text20Props extends Omit<TypographyProps, 'component' | 'variant'> {

}

export const Text20 = ({
  sx = {},
  children
}: Text20Props) => {
  return (
    <Typography 
      component="p" 
      sx={{ fontSize: 20, ...sx }}>
      {children}
    </Typography>
  )
}