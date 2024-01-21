// Globals
import { createTheme, ThemeProvider, ToggleButton, Button, FormControl, FormLabel, TextField } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline";
import Stack from '@mui/material/Stack';
import { grey } from "@mui/material/colors";

import SettingsIcon from '@mui/icons-material/Settings';
import VisibilityIcon from '@mui/icons-material/Visibility';
// Locals
import useInput from "./main.js"

const CorrectResponser = () => {
    const { Mode, values,
            toggleMode,
            submitValue, sanityCheck,
            page, pagenav,} = useInput()
    const theme = createTheme({
        palette: {
            background: { default: grey[900]},
            primary: grey,
            text: { primary: "#fff" }
        }
    })

    const Navbar = () => { return (
        <Stack direction="row" alignItems="baseline" justifyContent="space-around" sx={{borderBottom: 1, borderColor: "primary"}}>
            <p>Correct Responser</p>
            <Stack direction="row" justifyContent="space-evenly" >
                <Button><SettingsIcon/></Button>
                <ToggleButton value="ModeChange" selected={Mode} onChange={toggleMode} sx={{color: "primary"}}><VisibilityIcon/></ToggleButton>
            </Stack>
        </Stack>
    )}

    const Table = () => { return (
        <>
            <form onSubmit={submitValue}>
                <TextField variant="standard" label="Input" size="small" onChange={sanityCheck}></TextField> {/* TODO: Error Display */}
                <Button type="submit">Submit</Button>
                {/* <input onChange={sanityCheck} onInvalid={error}></input>
                <button type="submit">Submit</button> */ }
            </form>
            <div>{values}</div>
        </>

    )}

    const Display = () => { 
        return (
        <>
            <span>
                <button onClick={() => pagenav("PMAX")} disabled={!page.prev}>&lt;&lt;</button>
                <button onClick={() => pagenav("PONE")} disabled={!page.prev}>&lt;</button>
                <p>{page.num}/{page.max}</p>
                <button onClick={() => pagenav("NONE")} disabled={!page.next}>&gt;</button>
                <button onClick={() => pagenav("NMAX")} disabled={!page.next}>&gt;&gt;</button>
            </span>
            <p>{page.value}</p>
        </>
    )}

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Navbar/>
            { ( Mode ) ? <Display/> : <Table/> }
        </ThemeProvider>
    )
}

export default CorrectResponser;
