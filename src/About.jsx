import { Typography, Box, Button } from '@mui/material'
import about from './assets/about.png'

const About = () => {
    return (
        <Box sx={{
            mt: '10%',
            px: '10%',
            background: 'linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: { xs: 'column-reverse', md: 'row' }
        }}>
            <Box >
                <Box
                    component="img"
                    sx={{
                       display:{xs:'none'}
                    }}
                    alt="vector."
                    src={about}
                />
            </Box>
            <Box sx={{ m:'8%', px: {md:'10%'},textAlign:{md:'start',xs:'center'} }}>
                <Typography
                    variant='h2'
                    sx={{
                        fontSize:{xs:35,md:45},
                        fontWeight: 700,
                        color: '#0E2368',
                        my: 2
                    }}
                > About Us</Typography>
                <Typography variant='h5' sx={{ color: '#444957', my: 2, lineHeight: '27px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, voluptatum delectus voluptatibus cum velit recusandae officia beatae perspiciatis tenetur, laborum quas nisi illum rerum quos, dolorum animi exercitationem distinctio pariatur.</Typography>
                <Button
                    variant={'contained'} sx={{
                        borderRadius: 10,
                        background: '#E23744',
                        px: 2,
                        py: 1,
                        fontWeight:600,
                        fontSize:{xs:10,md:13}
                    }}>Read More</Button>
            </Box>
        </Box >
    )
}

export default About