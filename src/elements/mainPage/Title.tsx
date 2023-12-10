export default function () {
    return (
        <>
            <div className={"text-white fw-bold"}
                 style={{
                     fontSize: "64px",
                     width: "37vw",
                     marginLeft: "16vw",
                     paddingTop: "26vh",
                     marginBottom: "8vh",
                 }}
            >Городские квесты по Санкт-Петербургу
            </div>
            <button type="button"
                    className="btn btn-primary"
                    style={{
                        borderRadius: "0.94rem",
                        marginLeft: "16vw",
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        paddingLeft: "1.5rem",
                        paddingRight: "1.5rem",
                    }}
            >
                Выбрать квест
                <i className="bi bi-arrow-down-right"
                   style={{
                       marginLeft: "4rem",
                   }}
                ></i>
            </button>
        </>
    )
}