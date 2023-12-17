import { useState } from 'react';

const CondicionalRender = () => {
    const [isAdmin] = useState(false)
    const [name, setName] = useState()

    function okClick() {
        return setName("João C. Prestes")
    }

    return (
        <div>
            <h1>{isAdmin ? "É administrador!" : "Não é administrador!"}</h1>
            <h3>If ternário</h3>
            <p>Clique no botão abaixo!</p>
            {name === "João C. Prestes" ? (
                "OK, usuário "
            ) : (
                "Usuário não identificado!"
            )}

            <button onClick={okClick}>Aqui....</button>
        </div>
    );
}

export default CondicionalRender;
