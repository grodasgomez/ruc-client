import {getPersons} from "../lib/"


async function main(){
  console.log(await getPersons("5313285"));
}

main();