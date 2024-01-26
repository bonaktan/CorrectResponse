import { Grid, Stack, Paper, Container } from "@mui/material";

export function Tablecells(values) {
    let length = 10; // TODO: shall be calculated instead
    let rows = 5; // TODO: shall be calculated instead
    let cache = Array.from({ length: rows }, () => new Array(length));
    let template = (num) => (
        <Grid item key={num}>
            {num}. {values[num - 1]}
        </Grid>
    );
    let rowCount = 0;
    let itemCount = 0;

    for (let i = 1; i <= values.length; i++) {
        cache[rowCount][itemCount] = template(i);
        if (itemCount >= length - 1) {
            rowCount += 1;
            itemCount = 0;
        } else {
            itemCount += 1;
        }
    }
    return (
        <>
            {cache.map((rowArray) => {
                return (
                    <Grid item container direction="column" xs={2}>
                        {rowArray}
                    </Grid>
                );
            })}
        </>
    );
}
