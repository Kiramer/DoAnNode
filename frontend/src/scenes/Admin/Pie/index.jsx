import { Box } from "@mui/material";
import Header from "../../../components/Header/Header";
import PieChart from "../../../components/Chart/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;