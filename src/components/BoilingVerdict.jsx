function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water will boil.【{props.celsius}】</p>
    } else {
        return <p>The water would not boil.【{props.celsius}】</p>
    }
}

export default BoilingVerdict;