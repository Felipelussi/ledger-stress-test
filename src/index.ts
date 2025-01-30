import axios from 'axios';
import {generateNumscript} from "formance-numscript-generator/src/index.js";
import {fakerPT_BR as faker} from "@faker-js/faker";
import {NumscriptTransaction} from "formance-numscript-generator/src/types.js";
import fs from "fs/promises";
import path from "path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const ledger_version = args[0];
const type = args[1];
const accounts = Number(args[2]);
const previous_tran = Number(args[3]);
const directory = path.join(__dirname, ledger_version, type)
const filePath = path.join(directory, `results_${accounts}_${previous_tran}.csv`)

// fs.mkdir(directory);

const api = axios.create(
    {
        baseURL: 'http://localhost:8080/v2/test'
    }
)

const transactions = [];

const tenant_current = `tenant:random:current:main`

for (let j = 1; j <= accounts; j++) {
  const transaction_id = faker.string.uuid()

  const subaccount = `tenant:random:holder:holder${j}:account:account${j}:main`
  const subaccount_pending = `tenant:random:holder:holder${j}:account:account${j}:pending:card_transaction:${transaction_id}`

  const tenant_current_pending = `tenant:random:current:pending:card_transaction:${transaction_id}`

  const send = [];

  send.push({
    asset: "VIRTCOP/2",
    amount: faker.number.int({max: 10000}),
    sources: [{account: subaccount}],
    destinations: [{account: subaccount_pending}],
  })

  switch (type) {
    case 'normal':
      send.unshift({
        asset: "BANKCOP/2",
        amount: faker.number.int({max: 10000}),
        sources: [{account: tenant_current}],
        destinations: [{account: tenant_current_pending}],
      })

      break;

    case 'tenant_unbounded':
      send.unshift({
        asset: "BANKCOP/2",
        amount: faker.number.int({max: 10000}),
        sources: [{account: tenant_current, overdraftLimit: 'UNBOUNDED'}],
        destinations: [{account: tenant_current_pending}],
      })

      break;

    case 'no_tenant_current':
      break;
  }

  const payload: NumscriptTransaction = {
      send: send,
      txMeta: {
          type: 'V2_ACCOUNT_SEND',
          transactionTypeDescription: 'Envio de pontos',
          description: "description",
      }
  }

  const parsedPayload = generateNumscript(payload)
  const transaction = {
      refreference: `v2:transaction:${transaction_id}`,
      timestamp: "2025-01-29T10:20:55Z",
      script: {
          plain: parsedPayload,
      },
  }

  transactions.push(transaction)
}
runConcurrentJobs(transactions);

async function createTransaction(account_number, transaction) {
    const startTime = performance.now();
    await api.post(`/transactions`, transaction)
    const endTime = performance.now();
    await fs.appendFile(filePath, `${account_number},${endTime - startTime}\n`)
}

async function runConcurrentJobs(transactions) {
  for (const [index, transaction] of transactions.entries()) {
    createTransaction(index, transaction); 
  }
}