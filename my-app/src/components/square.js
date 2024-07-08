export default function Square({value,updateSquareValue}) {
    return <button className="square" onClick={updateSquareValue}>{value}</button>
}
