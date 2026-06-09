import axios from 'axios'

const API_URL = "https://jmrfwwcfljmagnwqearg.supabase.co/rest/v1/aidil-pfl"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptcmZ3d2NmbGptYWdud3FlYXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NDQ4OTgsImV4cCI6MjA5NjUyMDg5OH0.GGe61ZddVEw0d0sH0j1lgus6ZP3Cn8xrPzohAbVba1s"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}