
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

# Results

### Number of postings Vs Insertion time
![geogebra-export(2)](https://github.com/user-attachments/assets/a684a3f8-1f3d-4029-bbd2-d4a5b69277f0)

### Transactions stored Vs Insertion time
![geogebra-export(3)](https://github.com/user-attachments/assets/c041d0c5-5afc-45cb-a81a-e0445fdd4c64)



