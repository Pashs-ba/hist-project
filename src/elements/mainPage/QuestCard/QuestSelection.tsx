import {GetQuestDescription} from "../../../api/quests.ts";
import {useEffect, useState} from "react";
import Loading from "../../Loading.tsx";
import CardSecondaryText from "./CardSecondaryText.tsx";
import Fires from "./Fires.tsx";

export default function () {
    const [questList, setQuestList] = useState([] as QuestDescription[]);
    useEffect(() => {
        GetQuestDescription().then((result) => {
            setQuestList(result)
        })
    }, [])
    return (
        <>
            <div className="fs-2 fw-bold text-center mb-5"
                 style={{
                     marginTop: "7.5rem",
                 }}
                 id={"quests"}>
                Квесты
            </div>
            <div className="row">
                {
                    questList.length == 0 ? <Loading/> :
                        questList.map((el, index) => {
                            return (
                                <div className={"col-lg-4"}
                                     key={index}>
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
                                            <button type="button"
                                                    className="btn btn-primary rounded-4 mb-3 mt-2 fw-bold"
                                                    style={{
                                                        padding: "1rem 1.5rem"
                                                    }}
                                            >
                                                Выбрать квест
                                                <i className="bi bi-arrow-down-right"
                                                   style={{
                                                       marginLeft: "4rem",
                                                   }}
                                                ></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </>
    )
}