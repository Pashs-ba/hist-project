import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {GetQuestById} from "../../api/quests.ts";

export default function () {
    const {id} = useParams();
    const [quest, setQuest] = useState({} as Quest)
    const navigate = useNavigate();
    useEffect(() => {
        GetQuestById(id ? id : "").then(quest => setQuest(quest))
    }, [])

    return (
        <div className={"full-height d-flex flex-column justify-content-center align-items-center"}>
            <div className={"fw-bold fs-2 mb-3 text-center"}>{quest.name}</div>
            {
                quest.startInstructions ?
                    <div>{quest.startInstructions}</div> :
                    null
            }
            <button className={"btn btn-primary mt-3 btn-lg"}
                    onClick={()=>{
                        navigate(`/quest/self/${id}/0/question`)
                    }}
            >Начать</button>
        </div>
    )
}