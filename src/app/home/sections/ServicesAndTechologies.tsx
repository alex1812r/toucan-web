'use client'

import { H4Primary } from "@/components/typography/H4Primary"
import { Text20Grey } from "@/components/typography/Text20Grey"
import { Box, Button, Container, Grid } from "@mui/material"

export const ServicesAndTechologies = () => {
  return (
    <Box component="section">
      <Container sx={{ paddingTop: 13, paddingBottom: 13 }}>
        <H4Primary sx={{ marginBottom: 3 }}>Services & Technology</H4Primary>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5} lg={6}>
            <Text20Grey sx={{ marginBottom: 3 }}>
              We are passionate about software development and thrive on meeting the needs of our clients. We deliver software solutions from vetted and experienced software engineers and project managers. We have experts in:
            </Text20Grey>
            <Text20Grey>
              Whether you need two extra developers to extend your team or 20 developers to complete a project, we&lsquo;ve got you covered. Tell us what you are looking for, and we&lsquo;ll take care of the rest.
            </Text20Grey>
          </Grid>
          <Grid item xs={12} md={7} lg={6}>
            <Box 
              sx={{ 
                textAlign: 'center',
                borderRadius: '20px', 
                padding: 2, 
                border: '0.5px solid #000' 
              }}>
              <Box
                component="img"
                src="/Our-Services-Graphic.png"  
                alt="services" 
                sx={{
                  height: {
                    xs: 180,
                    sm: 250,
                    md: 305
                  }
                }} 
              />
            </Box>
          </Grid>
        </Grid>
        <Button 
          sx={{ 
            marginTop: 3, 
            display: 'block',
            width: {
              xs: '100%',
              md: 'auto'
            }
          }}>
          See All Services
        </Button>
      </Container>
    </Box>
  )
}