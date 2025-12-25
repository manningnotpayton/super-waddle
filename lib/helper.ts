interface Config {
    apiKey: string;
    timeout: number;
}

function initialize(config: Config): void {
    console.log('Initializing...', config);
}

export { initialize, Config };
