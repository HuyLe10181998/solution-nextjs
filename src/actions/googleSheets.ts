import { google } from 'googleapis';

export async function getGoogleSheets() {
    if(!process.env.NEXT_PUBLIC_GOOGLE_APPLICATION_CREDENTIALS) {
        throw new Error('Google application credentials are not set');
    }
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: require(process.env.NEXT_PUBLIC_GOOGLE_APPLICATION_CREDENTIALS),
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    return sheets;
  } catch (error) {
    console.error('Error initializing Google Sheets:', error);
    throw error;
  }
}

export async function getSheetData(range: string) {
  try {
    const sheets = await getGoogleSheets();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: range, // e.g., 'Sheet1!A1:E10'
    });

    return response.data.values;
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    throw error;
  }
}