## Discription

Implenetd ERC -20 TOKEN using openzepping contract
after deploying airdropping some 10 token to airdrop addresses
write Testcase to check if airdrop is working as expected

# Steps :

npm install
create the .env file and add SAPOLIA_URL, PRIVATE_KEY.

# compile

npx harhat compile

# test

npx hardhat test

# deploy on Sapolia

npx hardhat run scripts/deploy.js --network sapoliac
