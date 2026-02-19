export default async function handler(req, res) {

    console.log('CLIENT_ID:', process.env.CLIENT_ID)
    console.log('CLIENT_SECRET:', process.env.CLIENT_SECRET)

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`,
    })

    const data = await response.json()
    console.log('Spotify response:', data)

    if(!response.ok) {
        return res.status(response.status).json({ error: data.error })
    }

    res.status(200).json({ access_token: data.access_token })
}