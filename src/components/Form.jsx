import {useState, useEffect} from "react";
import ErrorComponent from "./ErrorComponent.jsx";

const Form = ({patient, patients, setPatients, setPatient}) => {
    const [petName, setPetName] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {

        if (Object.keys(patient).length > 0) {
            setPetName(patient.petName)
            setOwnerName(patient.ownerName)
            setEmail(patient.email)
            setDate(patient.date)
            setSymptoms(patient.symptoms)
        }

    },[patient])

    const clearFields = () => {
        setPetName('')
        setOwnerName('')
        setEmail('')
        setDate('')
        setSymptoms('')
        setError(false)
        setPatient({})

    }
    const generateId = () => {
        const random = Math.random().toString(36).substring(2);
        const date = Date.now().toString();
        return random + date;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let inputs = [petName, ownerName, email, date, symptoms];
        if (inputs.includes('')) {
            setError(true)
            return;
        }
        setError(false)

        const patientObject = {
            petName,
            ownerName,
            email,
            date,
            symptoms
        }

        if (patient.id) {
            patientObject.id = patient.id;

            const updatedPatients = patients.map((patientItem) => {
                if (patientItem.id === patient.id) {
                    return patientObject
                }
                return patient
            })
            setPatients(updatedPatients)

        } else {
            patientObject.id = generateId();
            setPatients([...patients, patientObject]);
        }
        clearFields()

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>

            {error && <ErrorComponent message={'Todos los campos son obligatorios'}/>}
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-5" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase" htmlFor="mascota">Nombre Mascota</label>
                    <input id="mascota" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" type="text"
                           placeholder="Nombre de la mascota" value={petName || ''}
                           onChange={(e) => setPetName(e.target.value)}/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase" htmlFor="propietario">Nombre Propietario</label>
                    <input id="propietario"
                           className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                           type="text"
                           placeholder="Nombre del propietario" value={ownerName || ''} onChange={(e) => {
                        setOwnerName(e.target.value)
                    }}/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase" htmlFor="email">Email</label>
                    <input id="email"
                           className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" type="email"
                           value={email || ''} onChange={(e) => setEmail(e.target.value)}
                           placeholder="test@test.com"/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase" htmlFor="alta">Fecha de ingreso</label>
                    <input id="alta"
                           className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                           value={date || ''} onChange={(e) => setDate(e.target.value)}
                           type="date"/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase" htmlFor="symptoms">Síntomas</label>
                    <textarea id="symptoms"
                              className="w-full border-2 p-2"
                              value={symptoms || ''} onChange={(e) => setSymptoms(e.target.value)}
                              placeholder="Describe los síntomas"/>
                </div>

                <input type="submit"
                       className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-lg cursor-pointer transition ease-in-out duration-300"
                       value={ patient.id ? 'Editar paciente' : 'Agregar paciente' }/>
                <button
                    type='button'
                    className="bg-transparent hover:bg-red-500 text-red-500 font-bold uppercase hover:text-white p-3 border border-red-500 hover:border-transparent rounded-lg mt-2 w-full cursor-pointer transition ease-in-out duration-300"
                    onClick={clearFields}>
                    Clear
                </button>
            </form>
        </div>
    )
}

export default Form