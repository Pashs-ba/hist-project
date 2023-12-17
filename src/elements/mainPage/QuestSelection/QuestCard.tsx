import Fires from "./Fires.tsx";
import CardSecondaryText from "./CardSecondaryText.tsx";
import RedirectButton from "../../RedirectButton.tsx";

export default function ({el}: { el: QuestDescription }) {
    return (
        <div className="">
            <div>
                <img src={el.imageUrl}
                     alt={"image"}
                     className={"mw-100 rounded-top-4"}
                />
            </div>
            <div
                style={{
                    backgroundColor: "#F9F9F9"
                }}
                className={"mb-5 px-5 rounded-bottom-4"}>
                <Fires count={el.fires}/>
                <div className="fw-bolder fs-5 pt-1 mb-4">{el.header}</div>
                <CardSecondaryText icon={"bi-clock"}
                                   text={el.time}/>
                <CardSecondaryText icon={"bi-pin-map-fill"}
                                   text={el.places}/>
                <CardSecondaryText icon={"bi-geo-alt"}
                                   text={el.start_point}/>
                <RedirectButton text={"Выбрать квест"} onClick={() => {
                }}/>
            </div>
        </div>
    )
}