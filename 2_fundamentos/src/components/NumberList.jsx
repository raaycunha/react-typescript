const NumberList = ({ numbers }) => {
    return (
        <div>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>
    )
}

export default NumberList