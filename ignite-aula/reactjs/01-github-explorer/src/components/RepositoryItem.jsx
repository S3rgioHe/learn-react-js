export function RepositoryItem(props) {

    console.log(props)
    return (
        <li>
            <strong>{props.repository?.name ?? 'Less name...'}</strong>
            <p>{props.repository?.description ?? 'Less description...'}</p>

            {props.repository?.link && <a href={props.repository.link}>Acessar</a>}
        </li>
    );
}