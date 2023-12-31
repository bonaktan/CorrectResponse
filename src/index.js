import * as React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

import Counter from "./counter.js"
import './index.css';

import { Button, Container, Grid, Stack, ToggleButton } from '@mui/material';
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
    const theme = useTheme()
    const [DisplayMode, setDisplayMode] = React.useState(true); // true=table, false=display
    return (
        <Stack className="NavbarRoot" direction="row" spacing={2} justifyContent="space-evenly" sx={{backgroundColor: "primary.light", borderBottom: 1, borderColor: "secondary.light", padding: "0.5rem"}}>
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
    return (
        <Container>
            <Grid container spacing={2}>
                
            </Grid>
        </Container>
    )
}
main()