export function FutbolCard({ img, name, Parrafo }) {
    return (
        <>
            <h1>{name}</h1>
            <img src={img} alt="" width="150" />
            <p>{Parrafo}</p>
        </>
    )
}