import { Box, Select, MenuItem, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export default function ChatFilter({ allChats, filterChats }) {

    const [option, setOption] = useState('All Ratings')

    const handleChange = (e) => {
        setOption(e.target.value)
    }

    // FILTER CHATS
    useEffect(() => {

        if (option == 'All Ratings') {
            filterChats(allChats)
        }
        else {
            const filtered = allChats.filter(item => {

                let found = false

                item.chat.forEach(ch => {
                    if (ch.rating == option) {
                        found = true
                    }
                })

                return found
            })

            filterChats(filtered)
        }

    }, [option])

    return (
        <Box
            mb={3}
        >
            <Typography fontSize={12} mb={0.5}>
                Filter by rating
            </Typography>
            <Select
                value={option}
                onChange={handleChange}
                size='small'
                sx={{
                    minWidth: { xs: 1, md: 160 },
                }}
            >
                <MenuItem value='All Ratings'>All Ratings</MenuItem>
                <MenuItem value={1}>1 Star</MenuItem>
                <MenuItem value={2}>2 Stars</MenuItem>
                <MenuItem value={3}>3 Stars</MenuItem>
                <MenuItem value={4}>4 Stars</MenuItem>
                <MenuItem value={5}>5 Stars</MenuItem>
            </Select>
        </Box>
    )
}