import Head from "next/head"
import Layout from "../components/Layout"
import { Box, Heading, Text, Flex } from "@chakra-ui/react"

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Robo Dashboard | Essert Robotics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Heading fontSize="32px" mb={4}>
        Robo Dashboard von Essert Robotics
      </Heading>
      <Text>Dashboards:</Text>
      <Flex justify="space-between">
        <Box w="25%" px={2} minH="10px">
          Operational Measures
        </Box>
        <Box w="25%" px={2} minH="10px">
          Quality
        </Box>
        <Box w="25%" px={2} minH="10px">
          Efficiency
        </Box>
        <Box w="25%" px={2} minH="10px">
          Output
        </Box>
      </Flex>
    </Layout>
  )
}

export default Home
