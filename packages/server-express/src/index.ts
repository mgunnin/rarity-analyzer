import express, {Request} from 'express';
import { handleDiscordCommand, DiscordCommandKind, DiscordCommandConfig } from '@crypto-dev-amigos/common-node';

const app = express();
const PORT = 8080;

const config: DiscordCommandConfig = {
    baseDataUrl: 'http://localhost:3000/data/',
};

const logRequest = (endpoint: string, req: Request) => {
    console.log(`REQUEST '${endpoint}''`, {
        path: req.path,
        params: req.params,
        query: req.query,
        body: req.body,
    });
};


app.get('/', (req, res) => {
    logRequest('/', req);

    res.send('Express + TypeScript Server');
});

app.get('/test/discord', async (req, res) => {
    logRequest('/test/discord', req);

    try{
        const result = await handleDiscordCommand({config, command: {
            kind: (req.query['command'] ?? '') as DiscordCommandKind,
            projectKey: req.query['projectKey'] as string,
            tokenId: req.query['tokenId'] as string,
        }});
        res.json(result);
    } catch {
        res.status(500).json({
            message: 'Oops! Something broke!'
        });
    }
});
app.post('/api/v1/discord', async (req, res) => {
    logRequest('/api/v1/discord', req);

    try{
        const result = await handleDiscordCommand({config, command: {
            kind: (req.query['command'] ?? '') as DiscordCommandKind,
            projectKey: req.query['projectKey'] as string,
            tokenId: req.query['tokenId'] as string,
        }});
        res.json(result);
    } catch {
        res.status(500).json({
            message: 'Oops! Something broke!'
        });
    }
});



// app.get('/data/:projects', async (req, res) => {
//     console.log('get rarities');

//     const data = await getTestData();
//     calculateRarity(data).then(
//         (nftRarities) => {
//             res.status(200).send(nftRarities);
//         }
//     );    
// });

//TODO: Create app.get('/api/v1/projects/:contract') and other query parameters

//NOTE: One quick note for all contestants - think about how to make the tool as widely usable as possible... 
// Think of config options like "Project Logo / Name / Contract Address" etc. -jalil

//TODO: Would like a app.post('/projects/add') that we could have someone upload the contract address (unique id) and apiurl https://intermezzo.tools/projects/add
// Where would we store that data?

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

