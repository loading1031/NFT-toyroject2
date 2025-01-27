require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    amoy: {
      url: process.env.REACT_APP_ALCHEMY_API_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY]
    },
  },
};

/*
enabled: true, runs: 200:

대부분의 스마트 계약에서 권장되는 기본 설정.
배포 및 실행 가스 비용의 균형을 맞추는 적절한 값.
enabled: true, runs: 1:

테스트 목적으로 배포 가스 비용을 최소화해야 할 때 유용.
enabled: false:

스마트 계약 디버깅이나 간단한 테스트 실행에 적합.
*/
