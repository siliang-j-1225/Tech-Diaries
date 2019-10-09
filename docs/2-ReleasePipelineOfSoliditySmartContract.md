
# How to create release a pipeline of solidity smart contracts

*2019/05*

This is an example of how to create an Azure DevOps release pipeline to deploy solidity smart contracts to WestLake, and using the new contract information to update Azure resources.

One of the problems for creating a pipeline for smart contracts is, the address of the contracts get updated every time after migrating. Thus if you have cloud resources based on the address information, those resources will need to be updated too.

In this example, we use Truffle to compile and migrate smart contracts and tool `jq` to analysis json.

## Step 1 install npm

Using the built-in plugs of Azure DevOps Pipelines to install npm, or run the following bash command:  
> `npm install`  

## Step 2 install jq 

Run the following bash command:
> `sudo apt install jq`  

*Find more about [jq, command-line JSON processor](https://stedolan.github.io/jq/).*

## Step 3 compile 

Compile smart contracts with Truffle.

Run the following bash command:
> `npx truffle version`  
> `npx truffle compile`

*Find more about [Truffle](https://www.trufflesuite.com/).*

## Step 4 migrate   

Run the following bash command:
> `npx truffle migrate --reset --network westlake`

## Steps 5 update Azure resources

After compilation and migration, the contracts in format of json file will be updated. That's why we install `jq` in step 3, thus we can analysis the json file and get the updated information (like address of contracts).

Bash code example of obtaining address:
> `addr="$(jq '.networks."NETWORK_ID".address' ../build/contracts/CONTRACT_NAME.json)"`

*Complete example of about how to update Logic Apps with the above sample codes [update-logic-app.sh](https://github.com/siliang-jiao/Tech-Diaries/tree/master/examples/solidity-deploy).*

{% include comments.html %}

