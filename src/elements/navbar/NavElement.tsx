export default function ({text}: { text: string }) {
    return (
        <div style={
            {
                height: "24px",
                color: "white"
            }
        }
             className={"mx-5"}
        >
            {text}
        </div>
    )
}