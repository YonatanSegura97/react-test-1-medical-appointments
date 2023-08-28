import PatientListItem from "./PatientListItem.jsx";

const PatientList = ({patients, setPatient, deletePatient}) => {

    return (
        <div className="md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll">

            {patients.length > 0 ? (
                <>
                    <h2 className="font-black text-3xl text-center">Patient List</h2>
                    <p className="text-xl mt-5 text-center mb-10">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>

                    {
                        patients.map((patient) => {
                            return (
                                <PatientListItem
                                    key={patient.id}
                                    patient={patient}
                                    setPatient={setPatient}
                                    deletePatient={deletePatient}
                                />
                            )
                        })
                    }
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 text-center mb-10">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            )}


        </div>
    )
}

export default PatientList