const BASE_URL = "https://api.openf1.org/v1" //put the openF1 base URL here

export async function getLaps(sessionKey) {
    try{
        const response = await fetch(
            `${BASE_URL}/laps?session_key=${sessionKey}`
        )
        const data = await response.json()



        return data


    } catch(error){
        console.log(error)
        throw error
    }
}