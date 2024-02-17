import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {settings} from "../settings";

const initialState = {
    id: 0,
    name: "Bogenliga.de",
    shortKey: "",
    desc: '<h1>Herzlich Willkommen</h1>\n' +
        '<p>Auf der Seite von Bogenliga DE, hier finden Sie alle Informationen der Deutschen Ligen im Bogenschie&szlig;en.</p>\n' +
        '<p>St&ouml;bern Sie durch die Ligen und lassen Sie sich in die Faszination des Mannschafts Bogensport ziehen.</p>\n' +
        '<p>&nbsp;</p>\n' +
        '<p style="text-align: center;"><a href="ligen.php"><img src="images/logo.png" alt="" width="38" height="38" />&nbsp;</a><a href="ligen.php">Zur Liga &Uuml;bersicht&nbsp;</a><a href="ligen.php"><img src="images/logo.png" alt="" width="38" height="38" /></a></p>',
    wkdays: [
        {
            id: 1,
            number: 1,
            date: "05.11.2023",
            street: "Franz-Baum-Halle",
            plz: "73642",
            city: "Welzheim",
            startTraining: "13:30",
            startShooting: "14:00",
            desc: '<a href="https://upload.gras-it.de/index.php/s/HFWKdGJ7kijNtya" target="_blank" rel="noopener">Schuszettel - Download</a>',
        },
        {
            id: 2,
            number: 2,
            date: "05.11.2023",
            street: "Franz-Baum-Halle",
            plz: "73642",
            city: "Welzheim",
            startTraining: "13:30",
            startShooting: "14:00",
            desc: '<a href="https://upload.gras-it.de/index.php/s/HFWKdGJ7kijNtya" target="_blank" rel="noopener">Schuszettel - Download</a>',
        },
        {
            id: 3,
            number: 3,
            date: "05.11.2023",
            street: "Franz-Baum-Halle",
            plz: "73642",
            city: "Welzheim",
            startTraining: "13:30",
            startShooting: "14:00",
            desc: '<a href="https://upload.gras-it.de/index.php/s/HFWKdGJ7kijNtya" target="_blank" rel="noopener">Schuszettel - Download</a>',
        },
        {
            id: 4,
            number: 4,
            date: "05.11.2023",
            street: "Franz-Baum-Halle",
            plz: "73642",
            city: "Welzheim",
            startTraining: "13:30",
            startShooting: "14:00",
            desc: '<a href="https://upload.gras-it.de/index.php/s/HFWKdGJ7kijNtya" target="_blank" rel="noopener">Schuszettel - Download</a>',
        },
    ],
}

//Load Ligadetails from Api by shortKey
export const getLiga = createAsyncThunk("liga/getLiga", async (shortKey, {dispatch}) => {
    try {
        const response = await axios.get(`${settings.APIPath}/liga/${shortKey}`);
        dispatch(setLiga(response.data))
    } catch (error) {
        console.log(error)
    }
})

export const ligaSlice = createSlice({
    name: 'liga',
    initialState,
    reducers: {
        setLiga: (state, action) => {
            //TODO: update initial State with data
        }
    },
})

export const {setLiga} = ligaSlice.actions
export default ligaSlice.reducer