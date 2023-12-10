import Description from "./Description.tsx";
import PlusCard from "./PlusCard.tsx";

export default function (){
    return (
        <div className="container">
            <Description/>
            <div className={""}
                 style={{
                     marginTop: "7.5rem",
                 }}
            >
                <div className="fs-2 fw-bold text-center mb-5">
                    Наши преимущества
                </div>
                <div className="row gx-lg-5 gy-lg-3">
                    <PlusCard
                        title={"Уникальность"}
                        text={"Наш сайт предлагает широкий выбор уникальных и захватывающих тематических квестов. Мы стремимся предложить нестандартные сценарии для вашей прогулки, чтобы она превратилась в яркое приключение и подарила вам много положительных эмоций"}
                        icon={"bi-magic"}
                        isDark/>
                    <PlusCard
                        title={"Гибкость"}
                        text={"Мы предоставляем возможность проходить квесты как оффлайн, так и онлайн. Вы можете выбрать наиболее удобный формат для вас - от прогулки по городу до виртуального приключения через интернет. Мы хотим, чтобы каждый мог насладиться нашими квестами, независимо от местоположения или доступности"}
                        icon={"bi-phone-flip"}
                    />
                    <PlusCard
                        title={"Разнообразие тематик"}
                        text={"На нашем сайте вы найдете разнообразные и увлекательные тематические квесты. Мы стремимся предложить нестандартные сценарии и приключения, которые подарят вам незабываемые эмоции и уникальный опыт"}
                        icon={"bi-layout-text-window"}
                        isDark
                    />
                    <PlusCard
                        title={"Интеллектуальное развитие"}
                        text={"Наши квесты не только развлекают, но и стимулируют интеллектуальное мышление. Загадки, головоломки и задания помогут вам развить навыки логического мышления, способности к анализу и творческим решениям"}
                        icon={"bi-trophy-fill"}
                    />
                    <PlusCard
                        title={"Доступны для всех"}
                        text={"Наши квесты подходят для всех, вне зависимости от возраста, опыта или способностей. Мы предоставляем подсказки и поддержку, чтобы каждый участник мог наслаждаться игрой, даже если они сталкиваются с трудностями"}
                        icon={"bi-people-fill"}
                        isDark
                    />
                    <PlusCard
                        title={"Веселое времяпрепровождение"}
                        text={"Наши квесты - это отличный способ провести время с друзьями, семьей или коллегами. Погрузитесь в захватывающие истории и развлекайтесь, решая задачи вместе, создавая незабываемые воспоминания и укрепляя командный дух"}
                        icon={"bi-puzzle"}
                    />
                </div>

            </div>
        </div>
    )
}