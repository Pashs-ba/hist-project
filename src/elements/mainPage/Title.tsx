import "../../style/mainPage/title.css"

export default function () {
    return (
        <>
            <div className={"text-white fw-bold title"}
            >Городские квесты по Санкт-Петербургу
            </div>
            <a
                href={"#quests"}
                className="btn btn-primary button-title"
            >
                Выбрать квест
                <i className="bi bi-arrow-down-right"
                   style={{
                       marginLeft: "4rem",
                   }}
                ></i>
            </a>
        </>
    )
}