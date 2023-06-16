'use client'
import { H4Primary } from "@/components/typography/H4Primary"
import { Box, Button, Container } from "@mui/material"

export const LetsStart = () => {
  return (
    <Box component="section">
      <Container sx={{ paddingTop: 13, paddingBottom: 13 }}>
        <H4Primary sx={{ textAlign: 'center', marginBottom: 3 }}>
          Let&lsquo;s start a conversation. Contact us today!
        </H4Primary>
        <Button sx={{ minWidth: 250, margin: 'auto', display: 'block' }}>
          Click Here Or See Below
        </Button>
      </Container>
    </Box>
  )
}