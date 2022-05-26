export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name}</strong>
            <p>{props.repository?.description ?? 'Less description...'}</p>

            {props.repository?.html_url && <a href={props.repository.html_url}>Acessar</a>}
        </li>
    );
}