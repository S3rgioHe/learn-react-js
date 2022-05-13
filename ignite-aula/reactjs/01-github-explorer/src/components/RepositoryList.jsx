const repositoryName = 'Lista de repositórios';
import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
            </ul>
                <RepositoryItem repository="unform 2"/>
                <RepositoryItem repository="teste" />
                <RepositoryItem repository="aqui"/>
                <RepositoryItem />
        </section>
    );
}