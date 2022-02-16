import { Box, Divider, Heading } from "@chakra-ui/react"
import Head from "next/head"
import Layout from "../components/Layout"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import { essert } from "../const/colors"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Bar Chart mit Beispielwerten",
    },
  },
}

const labels = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli"]

export const data = {
  labels,
  datasets: [
    {
      label: "Datenset 1",
      data: [3, 10, 12, 5, 8, 1, 6],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Datenset 2",
      data: [10, 12, 5, 8, 1, 6, 2],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
}

const OwnCharts = () => {
  return (
    <>
      <Head>
        <title>Own Charts</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=1000 height=800"
        />
      </Head>
      <Layout>
        <Heading>Charts</Heading>
        <Box border={`2px solid ${essert.blue}`} p={2}>
          <Bar options={options} data={data} />
        </Box>
      </Layout>
    </>
  )
}

export default OwnCharts
