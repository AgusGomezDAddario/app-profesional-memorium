import * as React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DenseTable from "../DenseTable";
import { BasicTable } from "./BasicTable";
import { BasicLineChart } from "./LineChart";
import { obtenerTiemposDePaciente } from "../../pacientesInfo/usePacientes";
import { useParams } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const BasicTabs = () => {
  const { id } = useParams();
  const [value, setValue] = React.useState(0);
  const [tiempos, setTiempos] = React.useState([]);

  useEffect(() => {
    const tiemposObtenidos = obtenerTiemposDePaciente(id, 'juego1');
    setTiempos(tiemposObtenidos);
  }, [id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "white",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            label="General"
            {...a11yProps(0)}
            sx={{ fontSize: "1.2rem", fontFamily: "Gentium Plus" }}
          />
          <Tab
            label="1"
            {...a11yProps(1)}
            sx={{ fontSize: "1.2rem", fontFamily: "Gentium Plus" }}
          />
          <Tab
            label="2"
            {...a11yProps(2)}
            sx={{ fontSize: "1.2rem", fontFamily: "Gentium Plus" }}
          />
          <Tab
            label="3"
            {...a11yProps(3)}
            sx={{ fontSize: "1.2rem", fontFamily: "Gentium Plus" }}
          />
          <Tab
            label="4"
            {...a11yProps(4)}
            sx={{ fontSize: "1.2rem", fontFamily: "Gentium Plus" }}
          />
          <Tab
            label="5"
            {...a11yProps(5)}
            sx={{ fontSize: "1.2rem", fontFamily: "Gentium Plus" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DenseTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <BasicTable game={1}/>
        {/* <BasicLineChart tiempos={tiempos[1] || []} /> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <BasicTable game={2}/>
        {/* <BasicLineChart tiempos={tiempos[2] || []} /> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <BasicTable game={3}/>
        {/* <BasicLineChart tiempos={tiempos[3] || []} /> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <BasicTable game={4}/>
        {/* <BasicLineChart tiempos={tiempos[4] || []} /> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <BasicTable game={5}/>
        {/* <BasicLineChart tiempos={tiempos[5] || []} /> */}
      </CustomTabPanel>
    </Box>
  );
};