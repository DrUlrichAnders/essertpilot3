import Head from "next/head"
import Layout from "../components/Layout"
import {
  Box,
  Heading,
  Text,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"

const Credits = () => {
  return (
    <Layout>
      <Head>
        <title>Credits | Essert Robotics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Heading fontSize="32px" mb={4}>
        Credits
      </Heading>
      <UnorderedList>
        <ListItem>
          <a
            href="https://www.flaticon.com/de/kostenlose-icons/roboter"
            title="roboter Icons"
          >
            Roboter Icons erstellt von smalllikeart - Flaticon
          </a>
        </ListItem>
      </UnorderedList>
    </Layout>
  )
}

export default Credits
