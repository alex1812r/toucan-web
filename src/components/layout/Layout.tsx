'use client'
import { useMemo } from 'react';
import theme from "@/theme"
import { ThemeProvider } from "@emotion/react"
import { Box, CssBaseline, Typography } from "@mui/material"
import { TopBar } from "./TopBar"
import { Footer } from "./Footer"
import { useUser } from "@auth0/nextjs-auth0/client"
import { redirect } from 'next/navigation';

export const Layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  const { isLoading, user } = useUser()

  if(!isLoading && !user) return redirect('/api/auth/login');

  console.log('user', user);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoading ? (
        <Box sx={{ 
          height: '100vh', 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center' 
        }}>
          <Typography>
            Loading...
          </Typography>
        </Box>
      )
      : (
         <>
            <TopBar />
            {children}
            <Footer />
          </>
      )}
    </ThemeProvider>
  )
}