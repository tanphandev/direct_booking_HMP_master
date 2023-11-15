interface IEnvConfig {
  ENV: string;
  BASE_URL: string;
  GOOGLE_API_KEY: string;
}

const NEXT_PUBLIC_APP_ENV = process.env.NEXT_PUBLIC_APP_ENV;
const config: IEnvConfig = require(`./${NEXT_PUBLIC_APP_ENV}.env.json`);
export default config;
