import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getAnotacionesFromBD } from "../../pacientesInfo/pacientesAnotaciones.js";
import { useParams } from "react-router-dom";

const CustomCardContent = ({ content, fecha }) => {
  content = content || "No hay anotaciones";
  return (
    <CardContent>
      <Typography
        sx={{ fontFamily: "Gentium Plus", fontSize: "1.5rem" }}
        color="text.primary"
      >
        {content}
      </Typography>
      <Typography sx={{ fontFamily: "Gentium Plus", fontSize: "1.2rem" }}>
        {fecha}
      </Typography>
    </CardContent>
  );
};

export const OutlinedCard = () => {
  const { id } = useParams();
  const [anotaciones, setAnotaciones] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getAnotacionesFromBD(id);
      setAnotaciones(data);
    };
    fetchData();
  }, [id]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "stretch",
        width: "100%",
      }}
    >
      {anotaciones.map((anotacion, index) => (
        <Card
          key={index}
          variant="outlined"
          sx={{ width: "100%", margin: "0" }}
        >
          <CustomCardContent
            content={anotacion.anotacion}
            fecha={anotacion.date}
          />
        </Card>
      ))}
    </div>
  );
};
