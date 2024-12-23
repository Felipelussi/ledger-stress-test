import axios from 'axios';
import {generateNumscript} from "formance-numscript-generator/src/index.js";
import {fakerPT_BR as faker} from "@faker-js/faker";
import {NumscriptTransaction} from "./types.js";

const api = axios.create(
    {
        baseURL: 'http://localhost:8080/v2/test'
    }
)
api.post(`/`).then((res) => {
    console.log('Ledger created')
    console.log('Postings        Time')
})


for (let i = 1; i <= 100; i++) {
    const transactions = [];
    const destination = `${faker.string.uuid()}:credit:${faker.string.uuid()}`
    for (let j = 1; j <= i; j++) {
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
    createTransaction(transaction).then(r => console.log(`${i}                ${performance.now() - startTime}`))
}


async function createTransaction(transaction) {
    await api.post(`/transactions`, transaction)
}