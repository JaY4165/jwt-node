declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: any;
      MONGOOSE_URI: string;
      NODE_ENV: "test" | "dev" | "prod";
    }
  }
}
