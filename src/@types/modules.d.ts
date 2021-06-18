declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    MAPBOX_ACCESS_TOKEN: string;
  }
}
