export default function TableView({count, refDef}) {
    return (
        <>
            {count.map((item, index) => {
                return <p key={index} ref={refDef[index]}>{index+1}. {item}</p>;
            })}
        </>
    );
}
