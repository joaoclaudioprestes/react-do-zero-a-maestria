const Events = () => {

    const handleMyEvent = () => {
        console.log("Ativou o botão!")
    }

    return (
        <div>
            <button onClick={handleMyEvent}>
                Clique aqui!!
            </button>
        </div>
    )
}
export default Events