import Image from "next/image"
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
import Banner from "../Banner"
import { FaRobot } from "react-icons/fa"
import roboterArm from "../../img/roboterArm.png"

const Sidebar = ({ children }) => {
  return (
    <Flex
      direction="column"
      minW={200}
      w={200}
      bg="#1c6ebf"
      color="white"
      p={4}
      minH="600px"
    >
      <Link href="/" mb={2}>
        HOME
      </Link>
      <Link href="/overview" mb={2}>
        OVERVIEW
      </Link>
      <Link href="/dashboard01" mb={4}>
        <Flex direction="column" align="center" bg="blue.300">
          <FaRobot size="60px" />
          <Text>DASHBOARD 01</Text>
        </Flex>
      </Link>
      <Link href="/dashboard02" mb={2}>
        <Flex direction="column" align="center" bg="blue.300" pt={2}>
          <Image
            src={roboterArm}
            width="50px"
            height="50px"
            alt="Roboterarm"
          ></Image>
          <Text>DASHBOARD 02</Text>
        </Flex>
      </Link>
      <Link href="/charts" mb={2}>
        CHARTS
      </Link>
    </Flex>
  )
}

export default Sidebar
