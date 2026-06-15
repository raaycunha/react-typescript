const RenderCondicional = ({ user }) => {
    return <div>{user && `Bem-vindo ${user} você está logado!`}</div>
}

export default RenderCondicional