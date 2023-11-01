export default function Introduction({nextQuestion}: { nextQuestion: () => void }) {
    return (
        <>
            <h1>Let's start!</h1>
            <button type="button" className="btn btn-primary" onClick={()=>{nextQuestion()}}>Начнем</button>
        </>
    )
}