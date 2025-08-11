import { mapScore, mapPlayerProfileObj, mapCurrentMathces } from "./mappers.js"
import { logError, showErrorUI } from "../Utils/Exception.js"

// const API_KEY = "ef25db60-2ba9-4013-9baa-379a453f48ec"
const API_KEY = '92155edc-b3f5-4aa7-a479-b1926bb976ed'
export async function fetchLiveMatches() {

    try {

        const API_URL = "https://api.cricapi.com/v1/currentMatches"
        let url = `${API_URL}?apikey=${API_KEY}&offset=0`

        const response = await fetch(url);

        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`)

        const data = await response.json();

        if (data.status == 'failure')
            throw new Error(data.reason)

        //   if (data.status === "failure" && data.reason?.toLowerCase().includes("hits today exceeded hits limit")) {
        //         throw new Error("Quota Exceeded: You have reached your daily API limit.");
        //     }

        if (!data || !data.data) {
            throw new Error("Unexpected API response format Aas");
        }

        let matches = mapCurrentMathces(data.data);

        return matches

    } catch (e) {
        logError(e, 'Excetion in FetchLiveMatches')
        showErrorUI('some thing went wrong please try again', '#matches')
    }

}

export async function fetchScore(match_id) {

    try {
        const API_URL = "https://api.cricapi.com/v1/match_scorecard"

        let url = `${API_URL}?apikey=${API_KEY}&offset=0&id=${match_id}`
        const response = await fetch(url)

        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`)

        const data = await response.json()

        if (data.status == 'failure')
            throw new Error(data.reason)

        if (!data || !data.data) {
            throw new Error("Unexpected API response format Aas");
        }


        let score = mapScore(data.data)
        return score;

    } catch (err) {
        logError(err, 'Excetion in fetchScore')
        showErrorUI('some thing went wrong please try again', '#error')
    }

}


export async function fetchPlayerInfo(player_id) {

    try {
        let BASE_URL = 'https://api.cricapi.com/v1/players_info'
        let URL = `${BASE_URL}?apikey=${API_KEY}&offset=0&id=${player_id}`

        let response = await fetch(URL)
        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`)


        let data = await response.json()
        if (data.status == 'failure')
            throw new Error(data.reason)

        if (!data || !data.data) {
            throw new Error("Unexpected API response format Aas");
        }



        let playerInfo = mapPlayerProfileObj(data.data)

        return playerInfo;

    } catch (err) {
        logError(err, 'Excetion in fetchScore')
        showErrorUI('some thing went wrong please try again', '#error')
    }
}


