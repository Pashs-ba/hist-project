import {GetQuestDescription} from "../../../api/quests.ts";
import {useEffect, useState} from "react";
import Loading from "../../Loading.tsx";
import QuestCard from "./QuestCard.tsx";

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
                                    <QuestCard el={el}/>
                                </div>
                            )
                        })
                }
            </div>
        </>
    )
}