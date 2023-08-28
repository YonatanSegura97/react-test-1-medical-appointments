const PatientListItem = ({patient, setPatient, deletePatient}) => {

    const handleDelete = () => {
        const dialogResult = confirm(`¿Estás seguro de eliminar a ${patient.petName}?`)
        if (dialogResult) {
            deletePatient(patient.id)
        }
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{patient.petName}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{patient.ownerName}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{patient.email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">{patient.symptoms}</span>
            </p>

            <div className='flex justify-between mt-10'>
                <button type='button'
                        onClick={() => setPatient(patient)}
                        className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded font-bold'>
                    Editar
                </button>
                <button type='button'
                        className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded font-bold'
                        onClick={handleDelete}
                >Eliminar
                </button>
            </div>
        </div>
    )
}

export default PatientListItem