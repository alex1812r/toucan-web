'use client'

import { Typography } from "@mui/material"
import { Box } from "@mui/system"

export interface BannerParallaxProps {
  imageUrl: string,
  title: string;
}

export const BannerParallax = ({
  imageUrl,
  title
}: BannerParallaxProps) => {

  return (
    <Box
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: 300
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'rgba(50,65,146, 0.7)',
          height: 300,
        }}  
      >
        <Typography align="center" component="h4" variant="h2" sx={{ color: '#ffff', }}>
          {title}
        </Typography>
      </Box>

    </Box>
  )
}