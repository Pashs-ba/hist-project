import ("../style/mainPage/redirectButton.css")

export default function ({text, onClick}: { text: string, onClick: () => void }) {
    return (
        <button type="button"
                className="btn btn-primary rounded-4 mb-3 mt-2 redirect-button d-flex align-items-center"
                onClick={onClick}
        >
            <div className={"fw-bold"}>
                {text}
            </div>

            <i className="bi bi-arrow-down-right icon-button fs-4"
            ></i>
        </button>
    )
}