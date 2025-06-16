import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DenseTable from "../DenseTable";
import { BasicTable } from "./BasicTable";
import { BasicLineChart } from "./LineChart";
import { useParams } from "react-router-dom";
import { usePacientes } from "../../pacientesInfo/usePacientes.js";

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
  const { pacientesDataFirebase, loading, error } = usePacientes();
  const [pacienteProfile, setPacienteProfile] = React.useState(null);

  React.useEffect(() => {
    if (Array.isArray(pacientesDataFirebase)) {
      const pacienteEncontrado = pacientesDataFirebase.find(
        (paciente) => paciente.id === id
      );
      if (pacienteEncontrado) {
        setPacienteProfile(pacienteEncontrado);
      }
    }
  }, [id, pacientesDataFirebase]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (loading || !pacienteProfile) {
    return <p style={{ color: "white" }}>Cargando...</p>;
  }

  if (error) {
    return <p style={{ color: "white" }}>Error: {error.message}</p>;
  }

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
        <DenseTable pacienteProfile={pacienteProfile} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <BasicTable game={1} pacienteProfile={pacienteProfile} />
        <BasicLineChart juego={1} pacienteProfile={pacienteProfile} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <BasicTable game={2} pacienteProfile={pacienteProfile} />
        <BasicLineChart juego={2} pacienteProfile={pacienteProfile} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <BasicTable game={3} pacienteProfile={pacienteProfile} />
        <BasicLineChart juego={3} pacienteProfile={pacienteProfile} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <BasicTable game={4} pacienteProfile={pacienteProfile} />
        <BasicLineChart juego={4} pacienteProfile={pacienteProfile} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <BasicTable game={5} pacienteProfile={pacienteProfile} />
        <BasicLineChart juego={5} pacienteProfile={pacienteProfile} />
      </CustomTabPanel>
    </Box>
  );
};