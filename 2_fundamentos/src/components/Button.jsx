const Button = () => {
    const buttonClick = () => {
        console.log('Clicou!')
    }
    return <button onClick={buttonClick}>Clique em mim!</button>
}

export default Button