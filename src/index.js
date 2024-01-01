import * as React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

import Counter from "./counter.js"
import './index.css';

import { Button, Container, Input, Stack, ToggleButton, Box, FormControl } from '@mui/material';
import Grid from '@mui/material/Grid';
import SettingsIcon from '@mui/icons-material/Settings';
import VisibilityIcon from '@mui/icons-material/Visibility';

// Variables
const Count = new Counter(50);
const _theme = createTheme({
    background: {
        default: "#1a1a1a",
    },
    palette: {
        primary: { main: "#1a1a1a" },
        secondary: { main: "#303f9f"},
        text: {main: "#ffffff"},
        contrastThreshold: 4.5,
        mode: "dark",
      },
    /* breakpoints: { values: {
        laptop: 1024,
        tablet: 640,
        mobile: 0,
        desktop: 1280,
    }}, */
});

function main() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <ThemeProvider theme={_theme} sx={{backgroundColor: "primary.main"}}>
            <CssBaseline enableColorScheme/>
            <Navbar />
            <Table />
        </ThemeProvider>);
}

function Navbar() {
    const [DisplayMode, setDisplayMode] = React.useState(true); // true=table, false=display
    return (
        <Stack className="NavbarRoot" direction="row" spacing={2} justifyContent="space-evenly" sx={{backgroundColor: "primary.light", borderBottom: 1, borderColor: "secondary.light", padding: "0.5rem", marginBottom: "0.7rem"}}>
            <div id='NavbarTitle'><p>Correct Response</p></div>
            <Stack direction="row" spacing={1}>
            <Button className="NavbarButtons" id="NavbarSettings" value="check" variant='contained'>
                <SettingsIcon />
            </Button>
            <ToggleButton className="NavbarButtons" value="check" selected={DisplayMode} onChange={() => {setDisplayMode(!DisplayMode)}}>
                <VisibilityIcon />
            </ToggleButton>
            </Stack>
        </Stack>
    )
}

function Table() {
    function UpdateTable(e) {
        e.preventDefault()
        Count.Update(e)
    }
    return (
        <Container className='TableRoot'>
            <form className='TableInput' onSubmit={UpdateTable}>
                <Input onChange={Count.inputSanity} sx={{color: "text.main"}}>test</Input>
                <Button type="submit" sx={{color: "text.main"}}>Enter</Button>
            </form>
            <Grid container spacing={0} columns={{xs:2}} className='TableContainer'>
                <Tableitems />
            </Grid>
        </Container>

    )
}
function Tableitems() {
    for (let i=1; i<=Count.items; i++) {
        let [getter, setter] = useState(0)
    }
    let template = []
    if (Count.items % 2 === 0) { // even amt of items
        for (let i=1; i<=Count.displayTable; i++) {
            template.push(<Grid item xs={1}>{i}. {Count.itemsCount[i-1]}</Grid>)
            template.push(<Grid item xs={1}>{i+Count.displayTable}. {Count.itemsCount[i+Count.displayTable-1]}</Grid>)
        }
    }
    else { // odd amt of items
        for (let i=1; i<=Count.displayTable+1; i++) {
            template.push(<Grid item xs={1}>{Count.itemsCount[i-1]}. </Grid>)
            if (i+Count.displayTable+1 <= Count.items) {
                template.push(<Grid item xs={1}>{i+Count.displayTable+1}. {Count.itemsCount[i+Count.displayTable]}</Grid>)
            }
        }
    }
    return <>{template}</>
}
main()