const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const coffeeContractFactory = await hre.ethers.getContractFactory("CoffeePortal");
  const waveContract = await waveContractFactory.deploy();
  const coffeeContract = await coffeeContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed to:", coffeeContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount, coffeeCount;
  waveCount = await waveContract.getTotalWaves();
  coffeeCount = await coffeeContract.getTotalCoffees();

  let waveTxn = await waveContract.wave();
  let coffeeTxn = await coffeeContract.coffee();
  await waveTxn.wait();
  await coffeeTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();
  waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
};
  
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();