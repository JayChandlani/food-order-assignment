import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'
import data from './constants/data'
// import tomato from './assets/articles/tomato.png'
const Articles = () => {
    const [articleData, setArticleData] = useState([]);
    const [page, setPage] = useState('1');
    const limit = (arg) => {
        if (arg === 0) {
            setPage('2')
            setArticleData(data.slice(3, 6))
        } else {
            setPage('1')
            setArticleData(data.slice(0, 3))
        }
    }
    useEffect(() => {
        limit()
    }, []);

    return (
        <Box sx={{ m: '5%' }}>
            <Box>
                <Typography
                    variant='h2'
                    sx={{
                        textAlign: { xs: 'center', md: 'start' },
                        fontWeight: 700,
                        color: '#0E2368',
                        my: 10,
                        fontSize: { xs: 35, md: 45 }
                    }}>Latest Articles</Typography>
            </Box>
            <Grid sx={{ justifyContent: 'center' }} container spacing={4} >
                {articleData.map(({ title, description, Image }) =>
                    <Grid item sx={{ xs: 8, md: 4 }}>
                        <Cards title={title} description={description} Image={Image} />
                    </Grid>
                )}
            </Grid>
            <Box sx={{
                mt: '5%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <IconButton onClick={() => limit()}>
                    <ChevronLeftOutlined sx={{
                        color: '#AFAFAF',
                        border: '1px solid #AFAFAF',
                        fontSize: 35,
                        borderRadius: 1,
                        "&:hover": {
                            color: '#424961',
                            borderColor: '#424961'
                        },
                        "&:active": {
                            color: '#424961',
                            borderColor: '#424961'
                        }
                    }} />
                </IconButton>
                <Typography variant='h4' color={'#424961'}>{page}/2</Typography>
                <IconButton onClick={() => limit(0)}>

                    <ChevronRightOutlined
                        sx={{
                            color: '#AFAFAF',
                            border: '1px solid #AFAFAF',
                            fontSize: 35,
                            borderRadius: 1,
                            "&:hover": {
                                color: '#424961',
                                borderColor: '#424961'
                            },
                            "&:active": {
                                color: '#424961',
                                borderColor: '#424961'
                            }
                        }} />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Articles