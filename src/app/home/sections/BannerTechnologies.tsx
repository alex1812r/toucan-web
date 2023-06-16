'use client'

import { Box, Container } from "@mui/material"

export const BannerTechnologies = () => {
  return (
    <Box component="section">
      <Container>
        <Box
          component="img"  
          src="/technologies.png"
          alt="technologies"
          sx={{
            width: '100%',
            height: {
              md: 400
            }
          }}
        />
      </Container>
    </Box>
  )
} 