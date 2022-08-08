import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        brand: {
            default: '#a16235',
            light: '#d29461',
            dark: '#703702',
            contrast: '#fff'
        },
        secondary: {
            default: '#1a202c',
            light: '#1a202c',
            dark: '#1a202c',
            contrast: '#fff'
        }
    }
})

export default theme