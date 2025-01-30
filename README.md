
# Ledger performance test

Used this script to test the influence of the number of posts in a transaction and of the number of transactions already stored in the database over the new transactions insertion time.

# How to use

Modify .env variables to setup an test

Setup ledger, subaccounts and previous transactions with

    task setup

Stress test to generate results_${num_subaccounts}_${num_previous_trans}.csv

    task stress-test


