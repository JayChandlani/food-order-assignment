import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';



export default function Cards({ title, description, Image }) {

    return (
        <Card sx={{
            maxWidth: 345
            , padding: '7%',
            border: '1px solid #93A2D3',
            borderRadius: '20px'
        }}>

            <CardMedia
                component="img"
                height="194"
                image={Image}
                alt="Paella dish"
                sx={{ borderRadius: '20px' }}
            />
            <Typography variant='h4' sx={{
                my: 2,
                fontWeight: 700,
                color: '#0E2368',
                textAlign: { xs: 'center', md: 'start' }
            }} >
                {title}
            </Typography>
            <Typography my={2} py={'10px'} color="#444957" lineHeight={'27px'} fontSize={'15px'}>
               {description}
            </Typography>
            <CardActions sx={{
                justifyContent: { xs: 'center', md: 'start' }
            }}>
                <Button
                    variant={'outlined'} sx={{
                        fontWeight: 600,
                        borderRadius: 10,
                        color: '#424961',
                        px: 2,
                        py: 1,
                        borderColor: '#424961'
                    }}> Reade More</Button>
            </CardActions>

        </Card>
    );
}

// const Cards = () => {
//     return (
//         <Box >
//             <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
//                 <img src={tomato} alt=""/>
//                 <Typography variant='h4' fontWeight={700} color="#0E2368" p='20px'>
//                     Grilled Tomatoes at Home
//                 </Typography>

//                 <Typography >
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab temporibus officia rerum, consequuntur dignissimos facere repellat, sit vitae eum quod
//                 </Typography>
//             </Box>
//             <Button
//                 variant={'outlined'} sx={{
//                     borderRadius: 10,
//                     color: '#424961',
//                     px: 2,
//                     py: 1,
//                     borderColor: '#424961'
//                 }}> Reade More</Button>
//         </Box>
//     )
// }
