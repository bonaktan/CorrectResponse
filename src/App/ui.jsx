import useInput from "./main.js";
import {
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import {
    Stack,
    Typography,
    Button,
    Input,
    ToggleButton,
    Checkbox,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import SettingsIcon from "@mui/icons-material/Settings";

const theme = createTheme({
    palette: {
        mode: "dark",
    },
});

const CorrectResponser = () => {
    const {
        Mode,
        values,
        toggleMode,
        submitValue,
        sanityCheck,
        error,
        DisplayData,
        DisplayNavigation,
        InputMode,
        setInputMode,
    } = useInput();
    const Navbar = () => {
        return (
            <Paper elevation={1} sx={{ padding: "1rem" }} variant="outlined">
                <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center">
                    <Typography variant="button" fontSize="1.1rem">
                        Correct Responser
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Button style={{display: "none"}}> { /* WARN: hidden until fully implemented */}
                            <SettingsIcon />
                        </Button>
                        <ToggleButton onChange={toggleMode} selected={Mode}>
                            <VisibilityIcon />
                        </ToggleButton>
                    </Stack>
                </Stack>
            </Paper>
        );
    };

    const Table = () => {
        return (
            <Container maxWidth={false}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-evenly">
                    <form onSubmit={submitValue} style={{ align: "center" }}>
                        <Input
                            onChange={sanityCheck}
                            onInvalid={error}
                            inputProps={{ inputMode: "numeric" }}
                            style={{width: "6rem"}}
                            autoFocus
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                    <Stack direction="row" style={{display: "none"}}> { /* WARN: hidden until fully implemented */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={!InputMode}
                                    onChange={() => setInputMode(!InputMode)}
                                />
                            }
                            label="Subtract Mode"
                        />
                        <Input style={{width: "3rem"}} /> { /* TODO: put the adjustable population in */ }
                    </Stack>
                </Stack>
                <Grid
                    direction="row"
                    container
                    sx={{ textAlign: "center" }}
                    columns={{ xs: 5 }}
                    justifyContent="center">
                    {values}
                </Grid>
            </Container>
        );
    };

    const Display = () => {
        return (
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center">
                    <Button
                        onClick={() => DisplayNavigation("PMAX")}
                        disabled={!DisplayData.prev}>
                        &lt;&lt;
                    </Button>
                    <Button
                        onClick={() => DisplayNavigation("PONE")}
                        disabled={!DisplayData.prev}>
                        &lt;
                    </Button>
                    <p>
                        {DisplayData.num}/{DisplayData.max}
                    </p>
                    <Button
                        onClick={() => DisplayNavigation("NONE")}
                        disabled={!DisplayData.next}>
                        &gt;
                    </Button>
                    <Button
                        onClick={() => DisplayNavigation("NMAX")}
                        disabled={!DisplayData.next}>
                        &gt;&gt;
                    </Button>
                </Stack>
                <p
                    style={{
                        fontSize: "40rem",
                        margin: 0,
                        padding: 0,
                        lineHeight: 1,
                        textAlign: "center",
                        overflow: "hidden",
                    }}>
                    {DisplayData.value}
                </p>
            </Container>
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            {Mode ? <Display /> : <Table />}
        </ThemeProvider>
    );
};

export default CorrectResponser;
