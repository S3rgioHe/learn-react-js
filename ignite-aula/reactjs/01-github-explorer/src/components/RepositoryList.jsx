import { RepositoryItem } from "./RepositoryItem";
import React, { useState, useEffect } from "react";

import '../style/repositories.scss';

const urlApi = 'https://api.github.com/orgs/rocketseat/repos';

function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch(urlApi)
        .then(response => response.json())
        .then(data => setRepositories(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                { repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                }) }

            </ul>
        </section>
    );
}

export default RepositoryList;