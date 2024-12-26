import axios from 'axios';
import {generateNumscript} from "formance-numscript-generator/src/index.js";
import {fakerPT_BR as faker} from "@faker-js/faker";
import {NumscriptTransaction} from "formance-numscript-generator/src/types.js";
import fs from "fs/promises";
import path from "path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'results.csv')

const args = process.argv.slice(2);
const postingsAmount = Number(args[0]);

const api = axios.create(
    {
        baseURL: 'http://localhost:8080/v2/test'
    }
)
api.post(`/`).then((res) => {
})

const transactions = [];
const destination = `${faker.string.uuid()}:credit:${faker.string.uuid()}`
for (let j = 1; j <= postingsAmount; j++) {
    transactions.push({
        asset: "BRL/2",
        amount: faker.number.int({max: 1000}),
        sources: [{account: "world"}],
        destinations: [{account: destination}],
    })
}
const payload: NumscriptTransaction = {
    send: transactions,
    txMeta: {
        type: 'V2_ACCOUNT_SEND',
        transactionTypeDescription: 'Envio de pontos',
        description: "description",
    },
    accountMeta: {
        [destination]: {
            expirationDate: "2022-11-17T10:20:55Z",
        },
    },
}

const parsedPayload = generateNumscript(payload)
const transaction = {
    refreference: `v2:transaction:${faker.string.uuid()}`,
    timestamp: "2022-11-17T10:20:55Z",
    script: {
        plain: parsedPayload,
    },
}
const startTime = performance.now();
await createTransaction(transaction)
const endTime = performance.now();
await fs.appendFile(filePath, `${postingsAmount},${endTime - startTime}\n`)


async function createTransaction(transaction) {
    await api.post(`/transactions`, transaction)
}