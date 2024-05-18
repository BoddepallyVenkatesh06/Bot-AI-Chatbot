import { BorderColor } from "@mui/icons-material";

export const getThemePallete = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: '#D7C7F4',
                    light: '#fff',
                    dark: '#AF9FCD',
                    bglight: '#fafafa',
                    bgtheme: '#FAF7FF',
                    bg: '#AF9FCD'
                },
                text: {
                    primary: '#000000',
                    secondary: 'rgba(0,0,0,0.5)',
                }
            }
            : {
                primary: {
                    main: '#34303d',
                    light: '#3d3b41',
                    dark: '#2a2730',
                    bglight: '#212025',
                    bgtheme: '#212025',
                    bg: '#2a2730'
                },
                text: {
                    primary: '#ffffff',
                    secondary: 'rgba(255,255,255,0.7)',
                }
            }
        )
    },
    typography: {
        body1: {
            fontFamily: 'Open Sans, sans-serif'
        },
        h1: {
            fontFamily: 'Ubuntu, sans-serif',
            color: mode == 'light' ? '#9785BA' : '#D7C7F4',
            fontSize: 28,
            fontWeight: 700,
        },
        h2: {
            fontFamily: 'Ubuntu, sans-serif',
            color: 'text.primary',
            fontSize: 28,
            fontWeight: 500,
            '@media (max-width:600px)': {
                fontSize: 22,
            },
        },
        heading: {
            fontFamily: 'Ubuntu, sans-serif',
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                size: 'large'
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontFamily: 'Open Sans, sans-serif'
                },
                contained: {
                    fontFamily: 'Ubuntu, sans-serif',
                    border: 1,
                },
                outlined: {
                    fontFamily: 'Ubuntu, sans-serif',
                    color: mode == 'light' ? '#000' : '#fff',
                    borderColor: mode == 'light' ? '#9785BA' : '#3d3b41',
                    '&:hover': {
                        background: mode == 'light' ? '#AF9FCD' : '#2a2730',
                    }
                }
            }
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
})