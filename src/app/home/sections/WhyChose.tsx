'use client'
import { Box, Container, Grid, Typography, useTheme } from "@mui/material"
import { H4 } from "@/components/typography/H4"
import { Text20 } from "@/components/typography/Text20"

export interface ReasonContentProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

const ReasonContent = ({
  number,
  title,
  children,
}: ReasonContentProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <H4>{number}.</H4>
      <Box sx={{ paddingLeft: { xs: 1, md: 3 } }}>
        <Typography component="h6" variant="h5" sx={{  fontWeight: 600, marginBottom: 1 }}>
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  )
}

const Reason1 = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Grid container spacing={2} sx={{
        flexDirection: {
          md: 'row',
          xs: 'column-reverse'
        }
      }}>
        <Grid item xs={12} md={7} lg={8}>
          <Box sx={{
            position: {
              xs: 'absolute',
              md: 'initial'
            },
            top: 100
          }}>
            <ReasonContent 
              number={1}
              title="We only hire A+ developers."
            >
              <Text20>
                Most of our developers live and work in Venezuela. They are some of the best and most experienced developers on the planet. They are wonderful people with an amazing work ethic and are excited to have the opportunity to work with U.S. companies! 
              </Text20>
            </ReasonContent>

          </Box>
        </Grid>
        <Grid xs={12} item md={5} lg={4}>
          <Box sx={{ textAlign: 'center', marginBottom: { xs: 20, sm: 10, md: 0 } }}>
            <Box
              component="img"
              sx={{
                marginTop: {
                  md: -10
                },
                height: 300,
              }}
              src="/light-bulb.svg"
              alt="light-bulb"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const Reason2 = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Grid container spacing={2} sx={{
        flexDirection: {
          md: 'row',
          xs: 'column-reverse'
        }
      }}>
        <Grid item xs={12} md={5} lg={4}>
          <Box sx={{ textAlign: 'center', marginBottom: { xs: 15, sm: 5, md: 0 } }}>
            <Box 
            component="img"
              height="200"
              src="/piece-map.svg"
              alt="piece-map"
            
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <Box sx={{
            position: {
              xs: 'absolute',
              md: 'initial'
            },
            top: 80
          }}>
            <ReasonContent
              number={2}
              title="All projects are U.S.-managed.">
              <Text20>
                Unlike most of our competitors, all our near-shore developers and projects are managed exclusively from the U.S.
              </Text20>
            </ReasonContent>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const Reason3 = () => {

  return (
    <Box sx={{ position: 'relative' }}>
      <Grid container spacing={2} sx={{
        flexDirection: {
          md: 'row',
          xs: 'column-reverse'
        }
      }}>
        <Grid item xs={12} md={7} lg={8}>
          <Box sx={{
            position: {
              xs: 'absolute',
              md: 'initial'
            },
            top: 80
          }}>
            <ReasonContent
              number={3}
              title="Same time zone as the U.S.">
              <Text20>
              It may not seem like a big deal but when it comes to scheduling meetings that include our development teams it makes communication so much easier and the project runs much smoother.
              </Text20>
            </ReasonContent>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
        <Box sx={{ textAlign: 'center', marginBottom: { xs: 20, sm: 10, md: 0 } }}>
          <Box
            component="img"
            height="200"
            src="/piece-map.svg"
            alt="piece-map"
          />
        </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const Reason4 = () => {

  return (
    <Box sx={{ position: 'relative' }}>
      <Grid container spacing={2} sx={{
        flexDirection: {
          md: 'row',
          xs: 'column-reverse'
        }
      }}>
        <Grid item xs={12} md={5} lg={4}>
          <Box sx={{ textAlign: 'center', marginBottom: { xs: 15, sm: 5, md: 0 } }}>
            <Box
              component="img"
              height="300"
              src="/person-gear.svg"
              alt="person-gear"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <Box sx={{
            position: {
              xs: 'absolute',
              md: 'initial'
            },
            top: 80
          }}>
            <ReasonContent
              number={4}
              title="Bi-lingual developers.">
              <Text20>
              When it comes to software, development communication is a key element. Without a clear understanding on both sides, a project can run off the rails quickly. No &quot;lost in translation&quot; with us.
              </Text20>
            </ReasonContent>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const Reason5 = () => {

  return (
    <Box sx={{ position: 'relative' }}>
      <Grid container spacing={2} sx={{
        flexDirection: {
          md: 'row',
          xs: 'column-reverse'
        }
      }}>
        <Grid item xs={12} md={7} lg={8}>
          <Box sx={{
            position: {
              xs: 'absolute',
              md: 'initial'
            },
            top: 80
          }}>
            <ReasonContent
              number={5}
              title="Safety and Security!">
              <ul>
                <li>
                  <Text20>
                    Background checks on all associates
                  </Text20>
                </li>
                <li>
                  <Text20>
                    Data security guarantee
                  </Text20>
                </li>
                <li>
                  <Text20>
                    Secure U.S. based hosting
                  </Text20>
                </li>
                <li>
                  <Text20>
                    Practice compliance, both technological and legal
                  </Text20>
                </li>
                <li>
                  <Text20>
                    Ongoing QA quality checks
                  </Text20>
                </li>
              </ul>
            </ReasonContent>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
        <Box sx={{ textAlign: 'center', marginBottom: { xs: 15, sm: 5, md: 0 } }}>
          <Box
            component="img"
            height="300"
            src="/shield.svg"
            alt="shield"
          />
        </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const Reason6 = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Grid container spacing={2} sx={{
        flexDirection: {
          md: 'row',
          xs: 'column-reverse'
        }
      }}>
        <Grid item xs={12} md={5} lg={4}>
          <Box sx={{ textAlign: 'center', marginBottom: { xs: 10, sm: 5, md: 0 } }}>
            <Box
              component="img"
              height="300"
              src="/person-gear.svg"
              alt="person-gear"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <Box sx={{
            position: {
              xs: 'absolute',
              md: 'initial'
            },
            top: 80
          }}>
            <ReasonContent
              number={6}
              title="Better value!">
              <Text20>
                Since our developer&lsquo;s cost of living is much lower than the U.S., we can offer the best quality development at a much better value!
              </Text20>
            </ReasonContent>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export const WhyChose = () => {
  const theme = useTheme()

  return (
    <Box 
      component="section" 
      sx={{ 
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      }}>
      <Container sx={{ paddingTop: 13, paddingBottom: 13 }}>
        <H4 sx={{ marginBottom: 5 }}>Why Chose Toucan?</H4>
        
        <Reason1 />

        <br />

        <Reason2 />

        <br />

        <Reason3 />

        <br />

        <Reason4 />

        <br />

        <Reason5 />

        <br />

        <Reason6 />

      </Container>
    </Box>
  )
}