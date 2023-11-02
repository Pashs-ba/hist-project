export default function ({left_show = true, right_show = true, disabled = false, leftClick=()=>{}, rightClick = ()=>{}}: {
    left_show?: boolean,
    right_show?: boolean,
    disabled?: boolean,
    leftClick?: ()=>void,
    rightClick?: ()=>void
}) {
    return (
        <div className={"d-flex justify-content-between"}>
            {
                left_show ? (<button type="button"
                                     className={`btn btn-primary ${disabled ? 'disabled' : null}`}
                                     onClick={leftClick}
                >Назад</button>) : null
            }
            {right_show ? (<button type="button"
                                   className={`btn btn-primary  ${disabled ? 'disabled' : null}`}
                                   onClick={rightClick}
            >Вперед</button>) : null}
        </div>
    )
}