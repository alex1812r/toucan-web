'use client'
import { 
  AppBar,
  Box,
  Container,
  Toolbar,
  Grid,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from "@mui/system";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Services',
    path: '#',
  },
  {
    name: 'Our Processes',
    path: '#',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

const drawerWidth = 300;

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.secondary.light,
  paddingLeft: 30,
  paddingRight: 30,
  '&:hover': {
    color: theme.palette.primary.main,
  }
}))


export const TopBar = ({
  window
}: {
  window?: () => Window;
}) => {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2 }}>
        <Image width="175" height="52" src="/toucan-logo.png" alt="toucan-logo" />
      </Box>
      <Divider />
      <List>
        {routes.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              href={item.path} 
              sx={{ 
                textAlign: 'center', 
                color: item.path === pathname ? 'inherit' : 'secondary.main',
                '&:hover': {
                  color: 'primary.main'
                }
              }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box component="a" href="/api/auth/logout">
        <Button>
          Logout
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
    <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters
          sx={{
            height: 140,
            backgroundColor: '#ffff',
          }}
        >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item >
            <Image width="175" height="52" src="/toucan-logo.png" alt="toucan-logo" />
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              {routes.map((route) => {
                const matchRoute = route.path === pathname;
                return (
                  <StyledLink 
                    key={route.name} 
                    href={route.path}
                    sx={{
                      color: matchRoute ? '#000' : undefined
                    }}
                    >
                    {route.name}
                  </StyledLink>
                );
              })}
              <Box component="a" href="/api/auth/logout">
                <Button sx={{ marginLeft: 3 }}>
                  Logout
                </Button>
              </Box>
            </Box>
            <Box sx={{
              display: {
                xs: 'block',
                md: 'none',
              }
            }}>
              <IconButton size="large" onClick={() => setMobileOpen(true)}>
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        </Toolbar>
      </Container>
    </AppBar>
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
    </>
  );
}