import Head from "next/head"
import { Box, Heading } from "@chakra-ui/react"
import Layout from "../components/Layout"
import { essert } from "../const/colors"

const Dashboard01 = () => {
  return (
    <>
      <Head>
        <title>Dashboard 01 | Robo Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Heading>Dashboard 01</Heading>
        <Box border={`2px solid ${essert.blue}`}>
          <iframe
            src="http://localhost:3000/public/dashboard/3caea938-7728-4f36-9c9d-6a845c41e5f6"
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

export default Dashboard01
