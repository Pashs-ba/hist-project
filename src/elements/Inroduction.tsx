import NavigationButtons from "./NavigationButtons.tsx";

export default function Introduction({nextQuestion}: { nextQuestion: () => void }) {
    return (
        <>
            <h1>Let's start!</h1>
            <NavigationButtons left_show={false}
                               rightClick={nextQuestion}/>
        </>
    )
}