'use client'

import { H4Primary } from "@/components/typography/H4Primary"
import { Text20 } from "@/components/typography/Text20"
import { Text20Grey } from "@/components/typography/Text20Grey"
import { Box, Button, Container, Grid } from "@mui/material"

export const OurProcess = () => {
  return (
    <Box component="section">
      <Container sx={{ paddingTop: 13, paddingBottom: 13 }}>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <Box sx={{ position: 'relative', textAlign: {
              xs: 'center', md: 'start'
            } }}>
              <Box
                component="img"
                src="/Engagement-Process-Graphic.png"
                alt="our-process"
                sx={{
                  height: {
                    xs: 300,
                    md: 500,
                  }
                }}
              />
              <Box sx={{ 
                position: 'absolute', 
                top: 0, 
                left: 270,
                display: {
                  xs: 'none',
                  md: 'block'
                }
              }}>
                <Text20 sx={{ fontWeight: 600 }}>Step-1</Text20>
                <Text20>Initial Discussion {'–'} Phone or Zoo</Text20>
              </Box>
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: 90, 
                  left: 370, 
                  display: {
                    xs: 'none',
                    md: 'block'
                  }
                }}>
                <Text20 sx={{ fontWeight: 600 }}>Step-2</Text20>
                <Text20>Discovery Meeting</Text20>
              </Box>
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: 212, 
                  left: 410,
                  display: {
                    xs: 'none',
                    md: 'block'
                  } 
                }}>
                <Text20 sx={{ fontWeight: 600 }}>Step-3</Text20>
                <Text20>Project Estimate</Text20>
              </Box>
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: 330, 
                  left: 375,
                  display: {
                    xs: 'none',
                    md: 'block'
                  } 
                }}>
                <Text20 sx={{ fontWeight: 600 }}>Step-4</Text20>
                <Text20>
                  Collect resources and <br /> identify the team
                </Text20>
              </Box>
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: 450, 
                  left: 270,
                  display: {
                    xs: 'none',
                    md: 'block'
                  }
                }}>
                <Text20 sx={{ fontWeight: 600 }}>Step-5</Text20>
                <Text20>Begin Development</Text20>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
            <H4Primary sx={{ marginBottom: 4 }}>Our<br /> Engagement <br />Process</H4Primary>
            <Text20Grey sx={{ marginBottom: 4 }}>
            Starting an engagement with us is a simple, stress-free process. We&lsquo;ve broken the process into 5 steps so you know what you can expect. The graphic on the left illustrates the steps, Click &quot;Read More&quot; to show the details involved in each step.
            </Text20Grey>
            <Button sx={{ width: 150 }}>
              Read More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}