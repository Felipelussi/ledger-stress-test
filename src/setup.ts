import axios from 'axios';
import {generateNumscript} from "formance-numscript-generator/src/index.js";
import {fakerPT_BR as faker, ja} from "@faker-js/faker";
import {NumscriptTransaction} from "formance-numscript-generator/src/types.js";

const args = process.argv.slice(2);
const accounts = Number(args[0]);
const previous_tran = Number(args[1]);

const api = axios.create(
    {
        baseURL: 'http://localhost:8080/v2/test'
    }
)
await api.post(`/`)

const transactions = [];

const tenant_current = `tenant:random:current:main`

transactions.push({
    asset: "BANKCOP/2",
    amount: 1000000000000000000,
    sources: [{account: "world"}],
    destinations: [{account: tenant_current}],
})

for (let j = 1; j <= accounts; j++) {
    const sub_account = `tenant:random:holder:holder${j}:account:account${j}:main`

    transactions.push({
        asset: "VIRTCOP/2",
        amount: 1000000000000000000,
        sources: [{account: "world"}],
        destinations: [{account: sub_account}],
    })
}

const payload: NumscriptTransaction = {
    send: transactions,
    txMeta: {
        type: 'V2_ACCOUNT_SEND',
        transactionTypeDescription: 'Envio de pontos',
        description: "description",
    }
}

const parsedPayload = generateNumscript(payload)
const transaction = {
    refreference: `v2:transaction:${faker.string.uuid()}`,
    script: {
        plain: parsedPayload,
    },
}

await createTransaction(transaction)

const transactions2 = [];

for (let i = 1; i <= previous_tran; i++) {
    for (let j = 1; j <= accounts; j++) {
        const transaction_id = `${j}_${i}_${faker.string.uuid()}`

        const subaccount = `tenant:random:holder:holder${j}:account:account${j}:main`
        const subaccount_pending = `tenant:random:holder:holder${j}:account:account${j}:pending:card_transaction:${transaction_id}`

        const tenant_current_pending = `tenant:random:current:pending:card_transaction:${transaction_id}`

        const payload: NumscriptTransaction = {
              send: [
                {
                  asset: "BANKCOP/2",
                  amount: faker.number.int({max: 10000}),
                  sources: [{account: tenant_current}],
                  destinations: [{account: tenant_current_pending}],
                },
                {
                  asset: "VIRTCOP/2",
                  amount: faker.number.int({max: 10000}),
                  sources: [{account: subaccount}],
                  destinations: [{account: subaccount_pending}],
                }
              ],
              txMeta: {
                  type: 'V2_ACCOUNT_SEND',
                  transactionTypeDescription: 'Envio de pontos',
                  description: "description",
              }
          }

        const parsedPayload = generateNumscript(payload)
        const transaction = {
            refreference: `v2:transaction:${transaction_id}`,
            script: {
                plain: parsedPayload,
            },
        }

        transactions2.push(transaction)
    }
}

for (let i = 1; i <= transactions2.length; i += 20) {
    const transactions = transactions2.slice(i, i + 20)

    await runConcurrentJobs(transactions);
}

async function createTransaction(transaction) {
    await api.post(`/transactions`, transaction, {timeout: 200000000})
}

async function runConcurrentJobs(transactions) {
    const promises = transactions.map((transaction) => {
        return createTransaction(transaction);
    })

    await Promise.all(promises);
  }