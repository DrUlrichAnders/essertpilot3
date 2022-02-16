import Head from "next/head"
import Layout from "../components/Layout"
import { Box, Heading } from "@chakra-ui/react"

const Dashboard02 = () => {
  return (
    <>
      <Head>
        <title>Dashboard 02 | Robo Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Heading>Dashboard 02</Heading>
        <Box border="2px solid blue">
          <iframe
            src="http://localhost:3000/public/dashboard/f79180ed-dfc4-4a03-bf3b-fb3405d617cb"
            frameBorder="0"
            width="100%"
            height="auto"
            allowTransparency="true"
          ></iframe>
        </Box>
      </Layout>
    </>
  )
}

export default Dashboard02
