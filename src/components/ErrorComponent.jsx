const ErrorComponent = ({message}) => {
    return (
        <div>
            <p className="bg-red-500 text-white p-3 text-center my-5 rounded">{message}</p>
        </div>
    )
}

export default ErrorComponent