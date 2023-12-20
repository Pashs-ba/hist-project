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

export async function GetQuestLongDescription(id: string): Promise<LongQuestDescription> {
    if (id == "1") return {
        header: "Тайны синей ветки: ключ к загадкам метрополитена",
        time: "60 мин",
        imageUrl: BlueBig,
        keyPoints: "11",
        startingPoint: "ст. Озерки",
        difficult: "Средняя",
        formats: "Онлайн/Офлайн",
        description: "Добро пожаловать на борт нашего нового квеста – “Тайна Синей ветки”! Вас ждёт увлекательное приключение по Московско-Петроградской линии Петербургского метрополитена. В ходе него вы узнаете много интересного о станциях метро синей ветки. Будьте внимательны, и тогда вы успешно справитесь с квестом. Удачи!",
        link: "/quest/self/1",
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
        link: "https://google.com",
        authors: "Амузинский Артем и Алексеев Павел"
    }
}

export async function GetQuestById(id: string): Promise<Quest> {
    if (id == "1") return {
        name: "Тайны синей ветки: ключ к загадкам метрополитена",
        questions: [
            {
                header: "Станция метро «Озерки»",
                text: "Lorem ipsum ",
                question: "Внимательно рассмотрите масштабное панно на стене в конце зала. Что оно символизирует?",
                trueAnswer: ["aboba"],
                hints: "Обратите внимание на число деревьев",
                historicalText: "Станция была открыта в 1988 году. Её название обусловлено находящимися рядом Суздальскими озёрами. Это единственная станция, на которой можно наблюдать напольные мозаичные панно, сделанные в мозаичной мастерской Академии Художеств СССР. Напольная мозаика показала себя непрактичной в местах массового скопления людей. Панно стало довольно быстро портиться из-за воздействия на него в том числе каблуков от женской обуви. Кусочки смальты стали раскалываться и крошиться.",
                nextText: "Отправляйтесь на место легендарной дуэли самого известного поэта Золотого века русской литературы."

            }
        ],
        startInstructions: "Стартовая точка - станция метро Озерки",
        id: "1",
        finalText: "Поздравляем, вы раскрыли все тайны синей ветки! Тем не менее, метрополитен таит в себе ещё много загадок. Будьте внимательны во время ваших подземных путешествий и тогда откроете для себя немало нового. До встречи на других квестах!"

    }
    else return {
        name: "Тайны синей ветки: ключ к загадкам метрополитена",
        questions: [
            {
                header: "Станция метро «Озерки»",
                question: "Внимательно рассмотрите масштабное панно на стене в конце зала. Что оно символизирует?",
                trueAnswer: ["aboba"],
                hints: "Обратите внимание на число деревьев",
                historicalText: "Станция была открыта в 1988 году. Её название обусловлено находящимися рядом Суздальскими озёрами. Это единственная станция, на которой можно наблюдать напольные мозаичные панно, сделанные в мозаичной мастерской Академии Художеств СССР. Напольная мозаика показала себя непрактичной в местах массового скопления людей. Панно стало довольно быстро портиться из-за воздействия на него в том числе каблуков от женской обуви. Кусочки смальты стали раскалываться и крошиться.",
                nextText: "Отправляйтесь на место легендарной дуэли самого известного поэта Золотого века русской литературы."

            }
        ],
        startInstructions: "Стартовая точка - станция метро Озерки",
        id: "2"

    }
}