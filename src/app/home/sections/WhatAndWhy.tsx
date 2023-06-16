'use client'

import { Box, Container, Grid, Typography } from "@mui/material"
import { H4Primary } from "@/components/typography/H4Primary"
import { Text20Grey } from "@/components/typography/Text20Grey"

export const WhatAndWhy = () => {
  return (
    <section>
      <Container sx={{
        paddingTop: {
          xs: 7,
          lg: 0
        },
        paddingBottom: {
          xs: 7,
          lg: 0
        },
      }}>
        <Box sx={{ position: 'relative' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={12}>
              <Box sx={{ 
                marginLeft: { lg: 'auto' },
                maxWidth: { lg: 300 }, 
                position: {
                  top: 50,
                  right: 0,
                  lg: 'absolute'
                }
              }}>
                <H4Primary 
                  sx={{ marginBottom: 3 }}>
                  What We Do
                </H4Primary>
                <Text20Grey>
                  Toucan is a U.S.-based company using on-shore and near-shore software developers. We engineer world-class software to meet the real-world needs of our clients. All our teams and projects are managed in the U.S., and we never compromise quality.
                </Text20Grey>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={12}>
              <Box 
                component="img"
                src="/America.png"
                sx={{
                  maxWidth: {
                    xs: 400,
                    md: 'auto',
                    lg: 1200
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={12}>
              <Box sx={{ 
                maxWidth: { lg: 400 }, 
                position: {
                  left: 0,
                  bottom: 0,
                  lg: 'absolute'
                }
              }}>
                <H4Primary 
                  sx={{ marginBottom: 3 }}>
                  Our &quot;Why&quot;
                </H4Primary>
                <Text20Grey sx={{ marginBottom: 5 }}>
                  Our &quot;why&quot; can be summed up in one word, <strong>empowerment</strong>. We build extraordinary software that empowers our clients to achieve their business objectives. And, at the same time make a profound, positive difference that empowers the lives of our employees and their families.
                </Text20Grey>
                <Text20Grey>
                  We hire amazingly talented developers that don&lsquo;t have the opportunity to find employment in their home countries of Latin America. Governments and other influences beyond their control have taken that from them, making it almost impossible to earn a living doing what they love to do most – build software. We provide them with that opportunity.
                </Text20Grey>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  )
}