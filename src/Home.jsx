import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import logo from './assets/logo.png'
import pizza from './assets/pizza.jpg'
import vector from './assets/vector1.svg'
const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column-reverse', md: 'row' }
      }}
    >
      <Box
        sx={{
          padding: '2% 15% 10% 10%',
        }}>
        <Box
          component="img"
          sx={{
            display: { xs: 'none' },
            width: 107
          }}
          alt="logo."
          src={logo}
        />
        <Box sx={{ mt: { md: '25%' }, textAlign: { xs: 'center', md: 'start' } }}>
          <Typography
            variant='h1'
            sx={{
              textAlign: { xs: 'center', md: 'start' },
              fontWeight: 700,
              color: '#0E2368',
              my: 2,
              fontSize: { xs: 35, md: 62 }
            }}
          >Discover the <span style={{ color: '#E23744' }}>Best</span> Food and Drinks</Typography>

          <Typography my={4} variant='h5' lineHeight='27px' fontWeight={400} color={'#444957'}>Naturally made Healthcare Products for the better care & support of your body.</Typography>

          <Button variant={'contained'} sx={{
            borderRadius: 10,
            background: '#E23744',
            fontSize: { xs: 10, md: 13 },
            fontWeight: '600',
            px: 3,
            py: 1.5
          }}>Explore Now!</Button>
        </Box>
      </Box>
      <Box >
        <Box sx={{
          position: 'relative',
        }}  >
          <Box
            component="img"
            sx={{
              width: '650',
              maxHeight: { xs: 420, md: 750 },
              maxWidth: { xs: 500, md: 650 },
              borderBottomLeftRadius: '30%'
            }}
            alt="pizza."
            src={pizza}
          />
        </Box>
        <Box sx={{
          position: 'absolute',
          top: -1,
          right: 0
        }}>
          <Box
            component="img"
            sx={{
              maxHeight: { xs: 450, md: 800 },
              maxWidth: { xs: 390, md: 700 },
              borderBottomLeftRadius: '200px'
            }}
            alt="vector."
            src={vector}
          />
        </Box>
        <Box sx={{
          position: 'absolute',
          top: { md: 20, xs: 10 },
          right: { md: 40, xs: 20 }
        }}>
          <Button variant={'outlined'} sx={{
            borderRadius: 10,
            color: '#FFFFFF',
            borderColor: '#FFFFFF',
            fontSize: { xs: 10, md: 13 },
            px: 2,
            py: 1
          }}>Get in Touch</Button>
        </Box>
      </Box>
    </Box >
  )
}

export default Home