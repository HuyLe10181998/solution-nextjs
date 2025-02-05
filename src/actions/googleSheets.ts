import { google } from 'googleapis'

export async function getGoogleSheets() {
  const requiredEnvVars = [
    'NEXT_PUBLIC_GOOGLE_TYPE',
    'NEXT_PUBLIC_GOOGLE_PROJECT_ID',
    'NEXT_PUBLIC_GOOGLE_PRIVATE_KEY_ID',
    'NEXT_PUBLIC_GOOGLE_PRIVATE_KEY',
    'NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL',
    'NEXT_PUBLIC_GOOGLE_CLIENT_ID',
    'NEXT_PUBLIC_GOOGLE_UNIVERSE_DOMAIN'
  ]
    // Check if all required environment variables are set
    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        throw new Error(`Missing required environment variable: ${envVar}`)
      }
    }
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: process.env.NEXT_PUBLIC_GOOGLE_TYPE,
        project_id: process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID,
        private_key_id: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
        client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        universe_domain: process.env.NEXT_PUBLIC_GOOGLE_UNIVERSE_DOMAIN
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })

    const sheets = google.sheets({ version: 'v4', auth })
    return sheets
  } catch (error) {
    console.error('Error initializing Google Sheets:', error)
    throw error
  }
}

export async function getSheetData(range: string,sheetId: string) {
  try {
    const sheets = await getGoogleSheets()
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: range, // e.g., 'Sheet1!A1:E10'
    })

    return response.data.values
  } catch (error) {
    console.error('Error fetching sheet data:', error)
    throw error
  }
}
