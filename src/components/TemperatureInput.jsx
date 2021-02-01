const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export default function TemperatureInput(props) {
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
            <input value={props.temperature} onChange={(e)=>props.onTemperatureChange(e.target.value)} />
        </fieldset>
    )
};