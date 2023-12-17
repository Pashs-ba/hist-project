import BlueTest from "../assets/blue2.png"
import Eat from "../assets/Food.png"
export async function GetQuestDescription(): Promise<QuestDescription[]> {
    return [
        {
            imageUrl: BlueTest,
            header: "Тайны синей ветки: ключ к загадкам метрополитена",
            time: "60 мин",
            places: "7 станций метро",
            start_point: "станция метро “Электросила”",
            fires: 2
        },
        {
            imageUrl: Eat,
            header: "Гастрономический квест по Санкт-Петербургу",
            time: "60 мин",
            places: "6 ключевых точек",
            start_point: "Дворцовая набережная",
            fires: 1
        },
    ]
}