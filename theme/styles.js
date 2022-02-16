import { essert } from "../const/colors"

const styles = {
  global: () => ({
    "*": {
      boxSizing: "border-box",
      fontWeight: "bold",
      fontSize: "md",
    },
    body: {},
    a: {
      color: "inherit",
      _hover: { color: essert.red },
    },
    ".react-icons": {
      position: "relative",
      top: "5px",
    },
  }),
}

export default styles
