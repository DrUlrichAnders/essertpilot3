import "../styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"
import "@fontsource/montserrat"
import "@fontsource/inconsolata"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
