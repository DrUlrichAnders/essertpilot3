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

const PageFooter = ({ children }) => {
  return (
    <Box minW="100%" bg={essert.darkBlue} color="white" minH="200px">
      <Flex width="1632px" px={4} py={12} mx="auto" justify="space-between">
        <Flex direction="column" w="25%">
          <Text mb={2}>ESSERT Robotics</Text>
          <Text mb={2}>E-Mail: info@essert.com</Text>
          <Text mb={2}>Telefon: +49 (0) 7251 32 641 00</Text>
          <Text mb={2}>Fax: +49 (0) 7251 32 641 99</Text>
        </Flex>
        <Flex direction="column" w="25%">
          <Text>Beratung & Informationen</Text>
          <Text>E-Mail: sales@essert.com</Text>
        </Flex>
        <Flex direction="column" w="25%">
          <Link href="/credits">Credits</Link>
        </Flex>
        <Flex direction="column" w="25%">
          <Text>ESSERT Newsletter</Text>
          <Text>Auf dem Laufenden bleiben</Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default PageFooter
