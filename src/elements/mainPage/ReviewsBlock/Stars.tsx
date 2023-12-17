export default function ({rating}: { rating: number }) {
    function getEnding(currentRating: number, border: number){
        if (currentRating>=border) return '-fill'
        if (currentRating+0.5>=border) return '-half'
        return ''
    }
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <i className={`me-1 bi bi-star${getEnding(rating, i+1)}`} key={i}/>
            ))}
        </div>
    )
}