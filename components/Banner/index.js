import {
  Container,
  Flex,
  Box,
  Link,
  Divider,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react"
import { essert } from "../../const/colors"

const Banner = ({ children }) => {
  return (
    <Box minW="100%" bg={essert.blue}>
      <Flex
        justify="space-between"
        align="center"
        width="1632px"
        px={4}
        py={4}
        mx="auto"
      >
        <Text color="white" fontWeight="bold">
          Fragen zu unserem Dashboard? Rufen Sie uns an +49 (0)7251 32641 30
        </Text>
        <Button
          bg="transparent"
          color="white"
          border="1px solid white"
          _hover={{ color: essert.red, border: `1px solid ${essert.red}` }}
        >
          dashboard@essert.com
        </Button>
      </Flex>
    </Box>
  )
}

export default Banner
