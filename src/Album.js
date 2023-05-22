import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Bolt, AttachMoney, Check }  from '@mui/icons-material';
import { Link } from '@mui/material';
import Popup from './Popup'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  const [dialogIsOpen, setDialogIsOpen] = React.useState(false)
  
  const openDialog = () => setDialogIsOpen(true)

  const closeDialog = () => setDialogIsOpen(false)

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Button variant='outlined' color="inherit" onClick={openDialog}>Оставить заявку</Button>
          <Popup open={dialogIsOpen} onClose={closeDialog} />
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Веб-студия
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Разработка веб-сайтов для различных CMS, сопровождение сайтов, копирайтинг, портфолио.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Stack
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                    spacing={4}
                  >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
                  <Stack
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={4}
                  >
                  <Box>
                    <Bolt sx={{ ml: 4 }} fontSize='large'></Bolt>
                  </Box>
                  <Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Быстро
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium luctus imperdiet. 
                      Ut et iaculis turpis, vel pulvinar elit. Fusce.
                    </Typography>
                  </CardContent>
                  </Box>
                  </Stack>
                </Card>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
                  <Stack
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={4}
                  >
                  <Box sx={{ alignSelf: 'center' }}>
                    <AttachMoney sx={{ ml: 4 }} fontSize='large'></AttachMoney>
                  </Box>
                  <Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Дешево
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium luctus imperdiet. 
                      Ut et iaculis turpis, vel pulvinar elit. Fusce.
                    </Typography>
                  </CardContent>
                  </Box>
                  </Stack>
                </Card>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
                  <Stack
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={4}
                  >
                  <Box sx={{ alignSelf: 'center' }}>
                    <Check sx={{ ml: 4 }} fontSize='large'></Check>
                  </Box>
                  <Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Качественно
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium luctus imperdiet. 
                      Ut et iaculis turpis, vel pulvinar elit. Fusce.
                    </Typography>
                  </CardContent>
                  </Box>
                  </Stack>
                </Card>
          </Stack>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
