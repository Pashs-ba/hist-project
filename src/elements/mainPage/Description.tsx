import SimpleImage from "../../assets/needToReplace.png";
export default function (){
    return (

            <div className={"row"}
                 style={{
                     marginTop: "28rem"
                 }}>
                <div className={"col-lg-6 text-center"}>
                    <div className="fs-2 mb-3 fw-bold">
                        О нашем проекте
                    </div>
                    <div className={"fw-medium"}>
                        Проект "Городские квесты" - это результат совместных трудов студентов университета ИТМО и
                        преподавателя Центра социальных и гуманитарных наук, Мунжуковой Светланы Игоревны. Наша команда
                        предлагает увлекательные и интерактивные квесты, которые позволят гостям и жителям глубже
                        познакомиться с историей и культурой города. Вместе мы создали уникальные маршруты, чтобы каждый
                        участник ощутил дух приключения и впитал атмосферу Санкт-Петербурга.
                    </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center ">
                    <img alt={"Simple image"} src={SimpleImage} className={"overflow-x-hidden"}/>
                </div>

            </div>
    )
}