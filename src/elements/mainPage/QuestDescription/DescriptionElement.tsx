export default function ({title, text}:{title:string, text: string}){
    return (
        <div>
            <div className={"text-center fw-bold mb-1"}
                 style={{
                     fontSize: "0.75rem"
                 }}>
                {title}
            </div>
            <div className={"text-center"}>
                {text}
            </div>
        </div>
    );
}