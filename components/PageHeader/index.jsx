import Image from "next/image"
import {
  Container,
  Flex,
  Box,
  Link,
  Divider,
  Text,
  Button,
} from "@chakra-ui/react"
import logoEssert from "./essert-logo-web.png"

const PageHeader = () => {
  return (
    <Flex py={8}>
      <Image src={logoEssert} alt="Logo Essert" width="164" height="56" />
    </Flex>
  )
}

export default PageHeader
