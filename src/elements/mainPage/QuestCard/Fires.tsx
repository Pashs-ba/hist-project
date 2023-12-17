export default function ({count}: { count: number }) {
    return (
        <div className={"d-flex pt-1"}>
            {
                [...Array(3)].map((_, index) => {
                    return (
                        <i key={index} className={`bi bi-fire fs-3 ${count > index ? "text-purple" : "text-secondary"}`}></i>
                    )
                })
            }
        </div>
    )
}