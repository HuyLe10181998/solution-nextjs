import { getSheetData } from '@/actions/googleSheets';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const range = 'Sheet1!A1:E10'; // Adjust this range according to your needs
    const data = await getSheetData(range);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching data from Google Sheets' });
  }
}