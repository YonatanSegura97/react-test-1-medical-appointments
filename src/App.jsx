import Header from "./components/Header.jsx";
import PatientList from "./components/PatientList.jsx";
import Form from "./components/Form.jsx";
import {useState, useEffect} from "react";

function App() {
    const [patients, setPatients] = useState(JSON.parse(localStorage.getItem("patients")) ?? []);
    const [patient, setPatient] = useState({});


    useEffect(() => {
        localStorage.setItem("patients", JSON.stringify(patients));
    }, [patients])

    const deletePatient = (id) => {
        const updatedPatients = patients.filter((patientItem) => patientItem.id !== id);
        setPatients(updatedPatients);
    }

    return (
        <div className="container mx-auto">
            <Header numbers={1}/>
            <div className="md:flex mt-12">
                <Form
                    patient={patient}
                    patients={patients}
                    setPatients={setPatients}
                    setPatient={setPatient}
                />
                <PatientList patients={patients}
                             setPatient={setPatient}
                             deletePatient={deletePatient}
                />
            </div>
        </div>
    )
}

export default App
