import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import logo from './assets/logo.png'


const ListItems = styled(Typography)({
    margin: '0.5rem 0',
    lineHeight: "27px",
    color: '#646874',
})
const ListHeading = styled(Typography)({
    color: '#0E2368',
    fontWeight: 400
})


const Footer = () => {
    return (
        <Box sx={{ display: { md: 'flex' }, justifyContent: 'space-around', p: '6%', background: '#F8F8F8', position: 'relative' }}>
            <Box sx={{ textAlign: { xs: 'center' } }}>
                <Box
                    component="img"
                    sx={{
                        // maxHeight: { xs: 100, md: 160 },
                        maxWidth: { xs: 80, md: 160 },
                    }}
                    alt="vector."
                    src={logo}
                />
                {/* <img width='160px' src={logo} alt="" /> */}
            </Box>
            <Box sx={{ width: { md: 250 }, p: { xs: '10%', md: 0 } }}>
                <ListHeading variant='h4'>
                    Contact Us
                </ListHeading>
                <ListItems >
                    Lorem Ipsum Pvt Ltd.5/1, Magalton Road,
                    Phartosh Gate near YTM Market, XYZ-343434
                </ListItems>
                <ListItems>
                    example2020@gmail.com
                </ListItems>
                <ListItems>
                    (904) 443-0343
                </ListItems>
            </Box>
            <Box sx={{ p: { xs: '10%', md: 0 } }}>
                <ListHeading
                    variant='h4'>
                    More
                </ListHeading>
                <ListItems>
                    About Us
                </ListItems>
                <ListItems>
                    Product
                </ListItems>
                <ListItems>
                    Carrer
                </ListItems>
                <ListItems>
                    Contact Us
                </ListItems>
            </Box>
            <Box sx={{ textAlign: { xs: 'center' } }}>
                <ListHeading variant='h4' sx={{ display: { xs: 'none', md: 'block' } }}>Social Links</ListHeading>
                <Typography sx={{ position: { md: 'absolute' }, bottom: { md: 100 } }}>© 2022 Food Truck Example</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 1, color: '#0E2368' }}>
                    <Instagram />
                    <Twitter />
                    <Facebook />
                </Box>
            </Box>
        </Box >
    )
}

export default Footer