import BlueTest from "../assets/blue2.png"
import Eat from "../assets/Food.png"
import ReviewImg from "../assets/Image quest.png"
import BlueBig from "../assets/blueBigImage.png"
import NevskyBig from "../assets/BigNevsky.png"
import {LongQuestDescription} from "../types/LongQuestDescription.ts";

export async function GetQuestDescription(): Promise<ShortQuestDescription[]> {
    return [
        {
            questId: 1,
            imageUrl: BlueTest,
            header: "Тайны синей ветки: ключ к загадкам метрополитена",
            time: "60 мин",
            places: "7 станций метро",
            startPoint: "станция метро “Электросила”",
            fires: 2
        },
        {
            questId: 2,
            imageUrl: Eat,
            header: "Гастрономический квест по Санкт-Петербургу",
            time: "60 мин",
            places: "6 ключевых точек",
            startPoint: "Дворцовая набережная",
            fires: 1
        },
    ]
}

export async function GetReviews(): Promise<Review[]> {
    return [
        {
            rating: 4.5,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            author: "A. Hvost",
            quest: "#quest",
            image: ReviewImg
        },
        {
            rating: 3.2,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            author: "A. Zabashta",
            quest: "#quest",
            image: ReviewImg
        },
        {
            rating: 5.0,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            author: "G. Kruglov",
            quest: "#quest",
            image: ReviewImg
        }
    ]
}

export async function GetQuestLongDescription(id: string): Promise<LongQuestDescription>{
    if (id == "1") return {
        header: "Тайны синей ветки: ключ к загадкам метрополитенан",
        time: "60 мин",
        imageUrl: BlueBig,
        keyPoints: "11",
        startingPoint: "ст. Озерки",
        difficult: "Средняя",
        formats: "Онлайн/Офлайн",
        description: "Добро пожаловать на борт нашего нового квеста – “Тайна Синей ветки”! Вас ждёт увлекательное приключение по Московско-Петроградской линии Петербургского метрополитена. В ходе него вы узнаете много интересного о станциях метро синей ветки. Будьте внимательны, и тогда вы успешно справитесь с квестом. Удачи!",
        link: "#",
        authors: "Черняев Максим, Данил Рожин, Савин Денис, Лапшина Юлия"
    }
    else return {
        header: "Невский район: история городских окраин",
        time: "2-2.5 часа",
        imageUrl: NevskyBig,
        keyPoints: "11",
        startingPoint: "Мемориал Журавли",
        difficult: "Средняя",
        formats: "Онлайн/Офлайн",
        description: "Добро пожаловать на борт нашего нового квеста – “Тайна Синей ветки”! Вас ждёт увлекательное приключение по Московско-Петроградской линии Петербургского метрополитена. В ходе него вы узнаете много интересного о станциях метро синей ветки. Будьте внимательны, и тогда вы успешно справитесь с квестом. Удачи!",
        link: "#",
        authors: "Амузинский Артем и Алексеев Павел"
    }
}