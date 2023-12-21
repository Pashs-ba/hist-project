import Fires from "./Fires.tsx";
import CardSecondaryText from "./CardSecondaryText.tsx";
import RedirectButton from "../../RedirectButton.tsx";
import {useNavigate} from "react-router-dom";

export default function ({el}: { el: ShortQuestDescription }) {
    const navigate = useNavigate();
    return (
        <div className="d-flex flex-column h-100">
            <div>
                <img src={el.imageUrl}
                     alt={"image"}
                     className={"mw-100 rounded-top-4"}
                />
            </div>
            <div
                style={{
                    backgroundColor: "#F9F9F9",
                    flexGrow: 1
                }}
                className={"px-5 rounded-bottom-4 pb-2 mb-5 mb-lg-0 d-flex flex-column justify-content-between"}>
                <div>
                    <Fires count={el.fires}/>
                    <div className="fw-bolder fs-5 pt-1 mb-4">{el.header}</div>
                    <CardSecondaryText icon={"bi-clock"}
                                       text={el.time}/>
                    <CardSecondaryText icon={"bi-pin-map-fill"}
                                       text={el.places}/>
                    <CardSecondaryText icon={"bi-geo-alt"}
                                       text={el.startPoint}/>
                </div>
                <div>
                    <RedirectButton text={"Выбрать квест"} onClick={() => {
                        navigate(`/quest/${el.questId}`)
                    }}/>
                </div>

            </div>
        </div>
    )
}