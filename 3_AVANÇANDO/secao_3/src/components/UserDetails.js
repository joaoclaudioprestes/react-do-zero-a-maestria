import React from 'react'

function UserDetails({ name, age, profession }) {
    return (
        <div>
            <p>_______________________________________________________________________________</p>
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            <p>Profissão: {profession}</p>
            {age >= 18 ? <p>Pode tirar a habilitação!</p> : <p>Não pode tirar a Habilitação!</p>}
        </div>
    )
}

export default UserDetails