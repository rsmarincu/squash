'use server'

import { Config } from "sst/node/config";
import { google } from "googleapis";

export async function register(name: string, email: string, phone: string) {
  const RAW = Config.PRIVATE_KEY.replaceAll("\\n", "\n")
  const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\n" + RAW + "\n-----END PRIVATE KEY-----\n"
  const auth = await google.auth.getClient({
    projectId: Config.PROJECT_ID,
    credentials: {
      type: "service_account",
      private_key: PRIVATE_KEY,
      client_email: Config.CLIENT_EMAIL,
      client_id: Config.CLIENT_ID,
      token_url: "https://oauth2.googleapis.com/token",
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: Config.SHEET_ID,
    range: 'Sheet1!A2:D',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[name, email, phone]],
    },
  });

  return
}