import { Box, Container, Grid } from "@mui/material"
import { Text20 } from "../typography/Text20"
import Image from "next/image"

export const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: 'secondary.dark', 
        color: 'common.white'
      }}>
      <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
        <Grid container>
          <Grid item xs={12} lg={4}>
            <Box sx={{ textAlign: { xs: 'center', md: 'start' } }}>
              <Text20 sx={{ fontWeight: 600, marginBottom: 2 }}>Contact</Text20>
              <Text20>
                Email: info@toucan-talent.com 
              </Text20>
              <Text20>
                Phone: +1.913.735.6202
              </Text20>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box sx={{ textAlign: { xs: 'center', md: 'start' }, marginTop: { xs: 5, md: 0 } }}>
              <Text20 sx={{ fontWeight: 600, marginBottom: 2 }}>Address</Text20>
              <Text20>
                5440 W. 110th St, Suite 300 
              </Text20>
              <Text20>
                Overland Park, KS 66211
              </Text20>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box sx={{ textAlign: { xs: 'center', md: 'start' }, marginTop: { xs: 5, md: 0 } }}>
              <Text20 sx={{ fontWeight: 600, marginBottom: 2 }}>Social</Text20>
              <Image 
                src="/facebook.png" 
                width="30"
                height="30"
                alt="fb" 
              />
              <Image 
                src="/twitter.png" 
                width="30"
                height="30"
                alt="tw" 
              />
              <Image 
                src="/instagram.png" 
                width="30"
                height="30"
                alt="in" 
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}