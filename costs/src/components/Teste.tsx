interface Props {
    name: string;
    email: string;
}
function Teste({ name, email }: Props)
{
    return (
        <>
            <h1>Alterando o tsx</h1>
            <p>Olá, {name}</p>
            <p>{email}</p>
        </>
    )
}

function teste2({name, email} : Props) {
    return (
        <>
            <h1>Alterando o tsx</h1>
            <p>Olá, {name}</p>
            <p>{email}</p>
        </>
    )
}

export default Teste; teste2;