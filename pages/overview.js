import Head from "next/head"
import { Flex, Box, Link } from "@chakra-ui/react"
import Layout from "../components/Layout"
import { essert } from "../const/colors"

const Dashboard01 = () => {
  return (
    <>
      <Head>
        <title>Overview | Robo Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Flex w="100%" wrap="wrap">
          <Flex w="66%" wrap="wrap" bg="yellow">
            <Box w="50%" minH="100px" mb={4} px={2}>
              <Link href="/dashboard01">Dashboard 01</Link>
              <Box
                w="100%"
                border={`2px solid ${essert.blue}`}
                borderRadius="5px"
                minH="100px"
              >
                {/* <iframe
              src="http://localhost:3000/public/dashboard/3caea938-7728-4f36-9c9d-6a845c41e5f6"
              frameBorder="0"
              width="100%"
              height="auto"
              allowTransparency="true"
            ></iframe> */}
              </Box>
            </Box>
            <Box w="50%" minH="100px" mb={4} px={2}>
              <Link href="/dashboard02">Dashboard 02</Link>
              <Box w="100%" border={`2px solid ${essert.blue}`} minH="100px">
                {/* <iframe
              src="http://localhost:3000/public/dashboard/3caea938-7728-4f36-9c9d-6a845c41e5f6"
              frameBorder="0"
              width="100%"
              height="auto"
              allowTransparency="true"
            ></iframe> */}
              </Box>
            </Box>
            <Box w="50%" minH="100px" mb={4} px={2}>
              <Link href="/dashboard03">Dashboard 03</Link>
              <Box w="100%" border={`2px solid ${essert.blue}`} minH="100px">
                {/* <iframe
              src="http://localhost:3000/public/dashboard/3caea938-7728-4f36-9c9d-6a845c41e5f6"
              frameBorder="0"
              width="100%"
              height="auto"
              allowTransparency="true"
            ></iframe> */}
              </Box>
            </Box>
            <Box w="50%" minH="100px" mb={4} px={2}>
              <Link href="/dashboard04">Dashboard 04</Link>
              <Box w="100%" border={`2px solid ${essert.blue}`} minH="100px">
                {/* <iframe
              src="http://localhost:3000/public/dashboard/3caea938-7728-4f36-9c9d-6a845c41e5f6"
              frameBorder="0"
              width="100%"
              height="auto"
              allowTransparency="true"
            ></iframe> */}
              </Box>
            </Box>
          </Flex>
          <Box w="33%" bg="orange">
            <Box w="100%" minH="100px" mb={4} px={2}>
              <Link href="/dashboard02">Dashboard 05</Link>
              <Box w="100%" border={`2px solid ${essert.blue}`} minH="200px">
                {/* <iframe
              src="http://localhost:3000/public/dashboard/3caea938-7728-4f36-9c9d-6a845c41e5f6"
              frameBorder="0"
              width="100%"
              height="auto"
              allowTransparency="true"
            ></iframe> */}
              </Box>
            </Box>
          </Box>
        </Flex>
      </Layout>
    </>
  )
}

export default Dashboard01
