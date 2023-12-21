import {useEffect, useState} from "react";
import {GetReviews} from "../../../api/quests.ts";
import Loading from "../../Loading.tsx";
import Stars from "./Stars.tsx";

export default function () {
    const [reviews, setReviews] = useState<Review[]>([])
    useEffect(() => {
        GetReviews().then(res => {
            setReviews(res)
        })
    }, [])
    return (
        <div className="mb-5 rounded-4 px-4 pb-5"
             style={{
                 marginTop: "7.5rem",
                 backgroundColor: "#CFE2FF"
             }}
             id={"reviews"}
        >
            <div className={"py-4 fs-2 fw-bold text-center "}>
                Впечатления наших участников
            </div>
            {
                reviews.length == 0 ? <Loading/> :
                    (<div className="row">
                        {
                            reviews.map((review, index) => {
                                return (
                                    <div className="col-lg-4 h-100 mb-3 mb-lg-0"
                                         key={index}>
                                        <div className={"bg-white p-4 rounded-4 h-100"}>
                                            <div className="row">
                                                <div className="col-5">
                                                    <img src={review.image} alt={"some"}
                                                         className={"rounded-4 mw-100"}/>
                                                </div>
                                                <div className={"col-7 d-flex flex-column justify-content-between"}>
                                                    <div className={"fw-medium"}>{review.author}</div>
                                                    <Stars rating={review.rating}/>
                                                    <div><a className={"text-secondary"}
                                                            style={{
                                                                fontSize: "0.75rem"
                                                            }}
                                                            href={review.quest}>Ссылка на квест</a></div>
                                                </div>
                                            </div>
                                            <div className={"mt-3"}>
                                                {review.comment}
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>)
            }


        </div>
    )
}