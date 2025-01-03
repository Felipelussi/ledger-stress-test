
# Ledger performance test

Used this script to test the influence of the number of posts in a transaction and of the number of transactions already stored in the database over the new transactions insertion time.

# How to use

1° Option

Install taskfile to manage the entire project and use

    task stress-test

Each one of the two branches makes a differnt test.

2° Option

- Run docker-compose
- Compile the typescript file
- Run it using the desired params
