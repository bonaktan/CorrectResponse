export function Tablecells(values) {
    let template = (num) => { return (<p>{num}. {values[num-1]}</p>)}
    let cache = []
    for (let i = 1; i<=values.length; i++) { cache.push(template(i)) }
    return <>{cache}</>
}