import { Typography, TypographyProps } from "@mui/material"
import { Text20 } from "./Text20"

export interface Text20GreyProps extends Omit<TypographyProps, 'component' | 'variant' | 'color'> {

}

export const Text20Grey = ({
  sx = {},
  children
}: Text20GreyProps) => {
  return (
    <Text20 
      sx={{ color: '#605E5E', ...sx }}>
      {children}
    </Text20>
  )
}