import { Box, Stack, Typography, IconButton, Rating } from '@mui/material'
import ai from '../../assets/bot.png'
import human from '../../assets/person.png'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default function ChattingCard({ details, showFeedbackModal, updateChat, setSelectedChatId, readOnly = false }) {

    const [isRating, setIsRating] = useState(false)
    const [rating, setRating] = useState(0)

    useEffect(() => {

        if (isRating) {
            updateChat(prev => (
                prev.map(item => {
                    if (item.id == details.id) {
                        return { ...item, rating: rating || 0 }
                    }
                    else {
                        return { ...item }
                    }
                })
            ))
        }

    }, [rating])

    return (
        <Stack
            p={{ xs: 1, md: 2 }}
            boxShadow={'0 0 4px rgba(0,0,0,0.1)'}
            borderRadius={1}
            direction={'row'}
            spacing={{ xs: 1, md: 3 }}
            sx={{
                '&:hover .feedback-btns': {
                    visibility: 'visible',
                    opacity: 1
                }
            }}
            bgcolor={readOnly ? 'primary.main' : 'primary.light'}
        >
            <Box
                component={'img'}
                src={details.type == "AI" ? ai : human}
                height={{ xs: 30, md: 68 }}
                width={{ xs: 30, md: 68 }}
                borderRadius={'50%'}
                sx={{ objectFit: 'cover' }}
                flexShrink={0}
            />
            <Box>
                <Typography
                    variant='heading'
                    fontWeight={700}
                    fontSize={{ xs: 14, md: 16 }}
                >
                    {details.type == "AI" ? 'Soul AI' : 'You'}
                </Typography>
                <Typography
                    fontSize={{ xs: 12, md: 16 }}
                >
                    {details.text}
                </Typography>
                <Stack
                    direction={'row'}
                    gap={2}
                    alignItems={'center'}
                    mt={1}
                >
                    <Typography
                        fontSize={{ xs: 8, md: 12 }}
                        color={'text.secondary'}
                    >
                        {format(details.time, 'hh:mm a')}
                    </Typography>

                    {(details.type == "AI" && !readOnly) && (
                        <Stack
                            direction={'row'}
                            visibility={{ xs: 'visible', md: 'hidden' }}
                            sx={{ opacity: { xs: 1, md: 0 }, transition: 'opacity 400ms ease' }}
                            className='feedback-btns'
                        >
                            <IconButton
                                size='small'
                                onClick={() => setIsRating(prev => !prev)}
                            >
                                {!isRating && <ThumbUpOffAltIcon fontSize='inherit' />}
                                {isRating && <ThumbUpAltIcon fontSize='inherit' />}
                            </IconButton>
                            <IconButton
                                size='small'
                                onClick={() => {
                                    setSelectedChatId(details.id)
                                    showFeedbackModal()
                                }}
                            >
                                <ThumbDownOffAltIcon fontSize='inherit' />
                            </IconButton>
                        </Stack>
                    )}

                </Stack>

                {((isRating || details.rating > 0) && details.type == "AI") && (
                    <Box pt={{ xs: 1, md: 2 }}>
                        <Typography
                            component={'legend'}
                            fontSize={{ xs: 10, md: 12 }}
                            mb={.5}
                        >
                            {readOnly ? 'Rating:' : 'Rate this reponse:'}
                        </Typography>
                        <Rating
                            name="simple-controlled"
                            value={details.rating > 0 ? details.rating : rating}
                            onChange={(event, newValue) => {
                                setRating(newValue)
                            }}
                            sx={{
                                width: 'auto'
                            }}
                            readOnly={readOnly}
                        />
                    </Box>
                )}

                {details.feedback && (
                    <Typography
                        pt={1}
                        fontSize={{ xs: 10, md: 16 }}
                    >
                        <Box component={'span'} fontWeight={600}>
                            Feedback:
                        </Box>
                        <Box component={'span'}>
                            {` ${details.feedback}`}
                        </Box>
                    </Typography>
                )}

            </Box>
        </Stack>
    )
}