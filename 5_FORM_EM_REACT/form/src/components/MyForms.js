import React, { useState } from "react";

const MyForm = ({ user }) => {
    // 3 - Gerenciamento de dados
    // 6 - Controller
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviado formulário");
        console.log("Nome:", name);
        console.log("Email:", email);
        console.log("Bio:" + bio);
        console.log("Função:" + role);

        // Validação
        // Envio

        // 7 - Limpar Form
        setName("");
        setEmail("");
    };

    return (
        <div>
            {/* 5 - Envio de formulário */}
            {/* 1 - Criação do formulário */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={handleName}
                />
                {/* 2 - label envolvendo o input*/}
                <label htmlFor="email">
                    <span>E-mail:</span>
                    {/* Simplificação de envio de valor */}
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Digite o seu e-mail"
                        value={email}
                        onChange={handleEmail}
                    />
                </label>

                {/* 8 - Textarea */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" id="bio" cols="30" rows="10" placeholder="Descrição do usuário..." onChange={(e) => setBio(e.target.value)}></textarea>
                </label>

                {/* 9 - Select */}
                <label>
                    <span>Função no sistema:</span>
                    <select name="role" id="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Usuário</option>
                        <option value="Admin">Administador</option>
                    </select>
                </label>


                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default MyForm;