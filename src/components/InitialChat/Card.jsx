import { Box, Typography, Stack, IconButton } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { styled } from '@mui/material/styles';

export default function Card({ heading, subtext, handleClick }) {

    return (
        <Stack
            bgcolor={'primary.light'}
            p={{ xs: 1.2, md: 3 }}
            borderRadius={1}
            boxShadow={'0 0 12px rgba(0,0,0,0.1)'}
            direction={'row'}
            spacing={1}
            alignItems={'center'}
            justifyContent={'space-between'}
            sx={{
                '&:hover .MuiIconButton-root': {
                    opacity: 1
                },
                cursor: 'pointer',
                '&:hover' : {
                    bgcolor:'primary.bglight'
                },
                transition: 'background 200ms ease'
            }}
            onClick={() => handleClick(heading)}
        >
            <Box>
                <Typography
                    variant='heading'
                    fontWeight={700}
                    fontSize={{xs:14,md:20}}
                >
                    {heading}
                </Typography>
                <Typography
                    color={'text.secondary'}
                    fontSize={{xs:10, md:16}}
                >
                    {subtext}
                </Typography>
            </Box>
            <IconButton size='small' sx={{ opacity: 0, bgcolor: 'primary.bglight', transition: 'opacity 400ms ease' }}>
                <ArrowUpwardIcon fontSize='inherit' />
            </IconButton>
        </Stack>
    )
}