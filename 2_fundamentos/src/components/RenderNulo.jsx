const RenderNulo = ({ warning }) => {
    if (!warning) return null
    return <div>{warning}</div>
}

export default RenderNulo