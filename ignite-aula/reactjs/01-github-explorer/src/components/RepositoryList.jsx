import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: "Github Explorer",
    description: "Um app para explorar repositórios no Github",
    link: "https://www.youtube.com/watch?v=DYed5whEf4g"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}