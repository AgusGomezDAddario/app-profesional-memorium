import React, { useState, useEffect } from "react";
import { Users, FileText } from "lucide-react";


const AnnotationsTab = ({ patientId }) => {
  const [annotations, setAnnotations] = useState([]);
  const [newAnnotationText, setNewAnnotationText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnotations = async () => {
      setLoading(true);
      setError(null);
      try {
        const storedAnnotations =
          JSON.parse(
            localStorage.getItem(`patient_annotations_${patientId}`)
          ) || [];
        const sortedData = storedAnnotations.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setAnnotations(sortedData);
      } catch (err) {
        setError("Error al cargar anotaciones: " + err.message);
        // Aquí podrías llamar a un showMessage global si lo tienes configurado a nivel de App.js
        console.error("Error al cargar anotaciones:", err);
      } finally {
        setLoading(false);
      }
    };

    if (patientId) {
      fetchAnnotations();
    }
  }, [patientId]); 

  const handleSaveAnnotation = () => {
    if (newAnnotationText.trim() === "") {
      // Usar un modal personalizado en apps reales, o un feedback visual temporal.
      console.warn("La anotación no puede estar vacía.");
      return;
    }

    try {
      const currentProfessional = "Dr. Laura Torres"; // Esto vendría del estado de autenticación en una app real

      const newSavedAnnotation = {
        id: Date.now(), // Usar un ID único del backend en una app real
        professional: currentProfessional,
        date: new Date().toISOString(),
        text: newAnnotationText.trim(),
      };

      const updatedAnnotations = [newSavedAnnotation, ...annotations];
      setAnnotations(updatedAnnotations);
      localStorage.setItem(
        `patient_annotations_${patientId}`,
        JSON.stringify(updatedAnnotations)
      ); // Simula persistencia local

      setNewAnnotationText(""); // Limpiar el textarea
      // Aquí podrías llamar a un showMessage global si lo tienes configurado a nivel de App.js
      console.log("Anotación guardada con éxito.");
    } catch (err) {
      setError("Error al guardar la anotación: " + err.message);
      console.error("Error al guardar la anotación:", err);
    }
  };

  if (loading) {
    return (
      <p style={{ color: "white", fontSize: "1.2rem" }}>
        Cargando anotaciones...
      </p>
    );
  }

  if (error) {
    return <p style={{ color: "red", fontSize: "1.2rem" }}>Error: {error}</p>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-4">
      {" "}
      <h3 className="text-2xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
        Anotaciones del Paciente
      </h3>
      {/* Sección para añadir nueva anotación */}
      <div className="mb-8 p-6 border-2 border-blue-300 rounded-xl bg-blue-50 shadow-md">
        <h4 className="text-xl font-semibold text-memorium mb-4" style={{ fontFamily: "'Gentium Plus', sans-serif" }}>
          Añadir Nueva Anotación
        </h4>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-lg resize-y min-h-[120px] shadow-sm font-inter"
          placeholder="Escriba aquí sus observaciones, progresos o notas relevantes..."
          value={newAnnotationText}
          onChange={(e) => setNewAnnotationText(e.target.value)}
          rows="5"
        ></textarea>
        <button
          onClick={handleSaveAnnotation}
          className="mt-4 bg-memorium text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300 shadow-lg hover:shadow-xl font-inter text-base flex items-center gap-2"
        >
          <FileText size={20} /> Guardar Anotación
        </button>
      </div>
      {/* Historial de anotaciones */}
      <h4 className="text-2xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2" style={{ fontFamily: "'Gentium Plus', sans-serif" }}>
        Historial de Anotaciones ({annotations.length})
      </h4>
      {annotations.length === 0 ? (
        <p className="text-gray-600 italic p-4 bg-gray-100 rounded-lg text-center">
          No hay anotaciones previas para este paciente. ¡Sé el primero en
          añadir una!
        </p>
      ) : (
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {" "}
          {/* Scrollable area */}
          {annotations.map((annotation) => (
            <div
              key={annotation.id}
              className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-500">
                  {new Date(annotation.date).toLocaleString("es-AR", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </span>
                <span className="text-sm font-semibold text-gray-600 flex items-center gap-1">
                  <Users size={16} className="text-gray-400" /> Por:{" "}
                  {annotation.professional}
                </span>
              </div>
              <p className="text-gray-800 leading-relaxed text-base whitespace-pre-wrap">
                {annotation.text}
              </p>
            </div>
          ))}
        </div>
      )}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #a8b9e6; /* Un tono de azul más claro */
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #899ed4; /* Un tono de azul ligeramente más oscuro al hover */
        }
      `}</style>
    </div>
  );
};

export default AnnotationsTab;
