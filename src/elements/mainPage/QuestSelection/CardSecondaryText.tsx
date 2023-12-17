export default function ({icon, text}: { icon: string, text: string }) {
    return (
        <div className={"d-flex"}
             style={{
                 color: "#5227CC"
             }}
        >
            <i className={`bi ${icon} me-3 mb-1`}></i>
            <div>{text}</div>
        </div>
    )
}