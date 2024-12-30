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

for (let j = 1; j <= 100000; j++) {

   const parsedPayload= `send [BRL/2 15600] (
  source = {
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0933550f-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093358fb-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:09335ce7-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0933c30e-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0933c6fc-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0933cae9-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0933cece-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0933d32b-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0933d73f-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:09340cc2-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093413e1-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0935d0bf-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0935dc89-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0935ed7d-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:09360b1d-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:09360f23-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0936132e-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0938b2b4-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0938b59e-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0938b888-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0938bb72-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0938bf42-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0938c22f-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0938c519-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:09392065-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:09392448-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:09392833-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:09392c1b-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093c357d-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093cc6e6-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093ccb87-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093ccf75-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093d8c37-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093d9026-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093d9414-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093d9800-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093d9bef-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093d9fda-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093da41f-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093ef276-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093ef67d-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093efb91-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093f021b-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093f0785-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:093f4b84-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:09403680-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:09403cbe-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0940423c-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:094047ae-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:09404d20-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0941b126-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0941b50f-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0941b8fa-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0941bce2-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0941c0d3-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0941c4c1-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0941c8ae-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0941cde8-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0941d539-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0941d925-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:09448cd3-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:094490c8-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0944958d-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0949c262-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0949c7d4-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0949d69a-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0949d98d-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0949dc75-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0949f807-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:0949fc81-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:094a0186-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:094a056a-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:094bb369-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:094bc465-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:094beed6-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:094c5687-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:094c7083-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    max [BRL/2 200] from @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:094c9545-c392-11ef-b7c5-000d3a1290b3 allowing unbounded overdraft
    @90af5ab6-c391-11ef-b7c5-000d3a1290b3:credit:overdraft allowing unbounded overdraft
  }
  destination = @incentive-me:transfeera:ted
)

send [BRL/2 15300] (
  source = @incentive-me:transfeera:ted allowing unbounded overdraft
  destination = @transfeera:ted
)

send [BRL/2 300] (
  source = @incentive-me:transfeera:ted allowing unbounded overdraft
  destination = @incentive-me:profit:exchange:transfeera:ted
)

set_tx_meta("type", "V2_EXCHANGE")
set_tx_meta("transactionTypeDescription", "Troca por prêmio")
set_tx_meta("description", "Pagamento troca 308405")`
    const transaction = {
        refreference: `v2:transaction:${faker.string.uuid()}`,
        timestamp: "2022-11-17T10:20:55Z",
        script: {
            plain: parsedPayload,
        },
    }

    console.log(`Transaction n: ${j}`)
    const startTime = performance.now();
    await createTransaction(transaction)
    const endTime = performance.now();
    await fs.appendFile(filePath, `${j},${endTime - startTime}\n`)

}

async function createTransaction(transaction) {
    await api.post(`/transactions`, transaction)
}