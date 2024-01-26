import useInput from "./main.js";
import {
    Container,
    CssBaseline,
    Grid,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { Stack, Typography, Button, Input, ToggleButton } from "@mui/material";

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
        page,
        pagenav,
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
                        <Button>
                            <SettingsIcon />
                        </Button>
                        <ToggleButton onClick={toggleMode} selected={Mode}>
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
                <Container>
                    <form onSubmit={submitValue} style={{ align: "center" }}>
                        <Input
                            onChange={sanityCheck}
                            onInvalid={error}
                            inputProps={{ inputMode: "numeric" }}
                            autoFocus
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Container>
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
                <Stack direction="row" alignItems="center" justifyContent="center">
                    <Button
                        onClick={() => pagenav("PMAX")}
                        disabled={!page.prev}>
                        &lt;&lt;
                    </Button>
                    <Button
                        onClick={() => pagenav("PONE")}
                        disabled={!page.prev}>
                        &lt;
                    </Button>
                    <p>
                        {page.num}/{page.max}
                    </p>
                    <Button
                        onClick={() => pagenav("NONE")}
                        disabled={!page.next}>
                        &gt;
                    </Button>
                    <Button
                        onClick={() => pagenav("NMAX")}
                        disabled={!page.next}>
                        &gt;&gt;
                    </Button>
                </Stack>
                <p style={{
                    fontSize: "40rem",
                    margin: 0, padding: 0, lineHeight: 1,
                    textAlign: "center",
                    overflow: "hidden"
                }}>{page.value}</p>
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
