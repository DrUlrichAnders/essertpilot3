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
import PageHeader from "../PageHeader"
import PageFooter from "../PageFooter"
import Banner from "../Banner"
import Sidebar from "../Sidebar"

const Layout = ({ children }) => {
  return (
    <Container minW="100%" p={0}>
      <Banner />
      <Container minW={"1632px"}>
        <PageHeader />
        <Flex w="100%" mb={8}>
          <Sidebar />
          <Box pl={4} w="100%">
            {children}
          </Box>
        </Flex>
      </Container>
      <PageFooter />
    </Container>
  )
}

export default Layout
