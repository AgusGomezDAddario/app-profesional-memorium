import { ddbDocClient, PutCommand, ScanCommand } from '../dinamodb.js';

const saveAnotacionOnBD = async (id_row, dni, date_row, note) => {
  try {
    const params = {
      TableName: "patient_annotations",
      Item: {
        id: id_row,
        date: date_row,
        anotacion: note,
        paciente_dni: dni,
      },
    };
    await ddbDocClient.send(new PutCommand(params));
    console.log("Anotación guardada con éxito");
  } catch (err) {
    console.error("Error al guardar la anotación: ", err);
  }
};

async function countItemsInTable() {
  try {
    const params = {
      TableName: "patient_annotations",
    };
    const data = await ddbDocClient.send(new ScanCommand(params));
    return data.Count;
  } catch (err) {
    console.error("Error al contar los items:", err);
    return null;
  }
}

async function getAnotacionesFromBD() {
  try {
    const params = {
      TableName: "patient_annotations",
    };
    const data = await ddbDocClient.send(new ScanCommand(params));
    setAnotaciones(data.Items);
  } catch (err) {
    console.error("Error al obtener las anotaciones: ", err);
    return null;
  }
}

export { saveAnotacionOnBD, countItemsInTable, getAnotacionesFromBD };
