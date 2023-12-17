export default function ({text, onClick}:{text: string, onClick: () => void}){
    return (
        <button type="button"
                className="btn btn-primary rounded-4 mb-3 mt-2 fw-bold"
                style={{
                    padding: "1rem 1.5rem"
                }}
                onClick={onClick}
        >
            {text}
            <i className="bi bi-arrow-down-right"
               style={{
                   marginLeft: "4rem",
               }}
            ></i>
        </button>
    )
}