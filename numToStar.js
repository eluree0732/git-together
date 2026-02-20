function numToStar(x) {
    Array.from(x).map((el, idx)=>(idx > 0 && idx < 12 ? "*":el))
}