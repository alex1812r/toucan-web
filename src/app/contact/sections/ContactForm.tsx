'use client'

import { H4Primary } from "@/components/typography/H4Primary"
import { Box, Button, Container, Grid, TextField } from "@mui/material"

export const ContactForm = () => {
  return (
    <Box component="section">
      <Container sx={{ paddingTop: 13, paddingBottom: 13 }}>
        <H4Primary sx={{ textAlign: 'center', marginBottom: 7 }}>
          Send us a note and tell us about your project
        </H4Primary>
        <Container maxWidth="sm">
          <form>
            <Grid container direction="column" spacing={3}>
              <Grid item xs={12}>
                <TextField  
                  fullWidth
                  name="firstName"
                  label="First Name"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth 
                  name="lastName"
                  label="Last Name"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth 
                  name="email"
                  label="Email"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth 
                  name="subject"
                  label="Subject"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth 
                  name="message"
                  label="Message"
                  multiline
                  rows={5}
                  />
              </Grid>
              <Grid item xs={12}>
                <Button sx={{ minWidth: 150, display: 'block', margin: 'auto' }}>
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Container>
    </Box>
  )
}