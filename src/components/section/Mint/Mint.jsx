import Button from '../../../common/button';

import MintStyleWrapper from './Mint.style';
import Web3 from 'web3';
import Abi from './abi.json';
import { useCallback, useEffect, useState } from 'react';
import { getMerkleProof } from './whitelist';

const Contract = require('web3-eth-contract');

const account = '0x5fD271a9bc50f1E210f15318C6B15d8bB79Cf67d';
const ABI_CONTRACT_ADDRESS = '0xC3b3C0a9d110ac20d756a8d6f280408C73B4AdE7';

const web3 = new Web3(window.ethereum);
const smartContract = new Contract(Abi, ABI_CONTRACT_ADDRESS);

export default function Mint() {
  const [amount, setAmount] = useState(1);
  const [wei, setWei] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [price, setPrice] = useState(0);

  const checkCompetitionWhitelist = () => {
    return new Promise((resolve, reject) => {
      smartContract.methods
        .competitionMerkleRoot()
        .call()
        .then(rootHash => {
          console.log(rootHash);
          const proof = getMerkleProof(rootHash, account);
          if (!proof) {
            // setModals({
            //   ...modals,
            //   errMsg: "화이트리스트 대상자가 아닙니다.",
            //   isBuying: false,
            //   isFailure: true,
            // });
            reject();
          }
          resolve(proof);
        })
        .catch(error => {
          console.log(error);
          throw new Error('화이트리스트 대상자 정보를 불러오지 못했습니다.');
        });
    });
  };

  const getInformation = useCallback(async () => {
    try {
      const [
        mintIndexForSale,
        mintLimitPerSale,
        mintLimitPerWallet,
        startBlockNum,
        maxSaleAmount,
        mintPrice,
      ] = await smartContract.methods.mintingInformation().call();
      setTotalSupply(3);
      setWei(0.003);
      setPrice(+web3.utils.fromWei(mintPrice, 'ether'));
    } catch (e) {
      console.error('error:', e);
    }
  }, []);

  const onMinting = async () => {
    if (amount > 5) {
      // return setModals({ ...modals, isSale: true });
      return;
    }

    const sendObj = {
      gasLimit: 500000 * +amount,
      from: account,
      to: ABI_CONTRACT_ADDRESS,
      value: web3.utils.toBN(wei).mul(web3.utils.toBN(amount)),
    };

    // setModals({ ...modals, isBuying: true });

    const successMint = res => {
      getInformation();
      // setModals({ ...modals, isBuying: false, isSuccessMint: true });
    };

    async function getRevertReason(txHash) {
      const tx = await web3.eth.getTransaction(txHash);

      return new Promise(resolve => {
        // 의도된 에러 캐칭을 위해 await가 아닌 콜백 사용
        // @ts-ignore
        web3.eth.call(tx, tx.blockNumber, (err, result) => {
          if (err) {
            try {
              const errorStringArray = err.toString().split('"');
              const message = errorStringArray[errorStringArray.length - 2].split(':')[1].trim();

              // resolve(ERR_MSG[message] || '민팅에 실패했습니다.');
              resolve('민팅에 실패했습니다.');
            } catch (e) {
              resolve('민팅에 실패했습니다.');
            }
          }
          resolve('민팅에 실패했습니다.');
        });
      });
    }

    async function getRevertReason(txHash) {
      const tx = await web3.eth.getTransaction(txHash);

      return new Promise(resolve => {
        // 의도된 에러 캐칭을 위해 await가 아닌 콜백 사용
        // @ts-ignore
        web3.eth.call(tx, tx.blockNumber, (err, result) => {
          if (err) {
            try {
              const errorStringArray = err.toString().split('"');
              // const message = errorStringArray[errorStringArray.length - 2].split(":")[1].trim();

              resolve('민팅에 실패했습니다.');
            } catch (e) {
              resolve('민팅에 실패했습니다.');
            }
          }
          resolve('민팅에 실패했습니다.');
        });
      });
    }

    const failureMint = async error => {
      try {
        const reason = await getRevertReason(error.receipt.transactionHash);

        // setModals({
        //   ...modals,
        //   errMsg: reason,
        //   isBuying: false,
        //   isFailure: true,
        // });
      } catch (e) {
        console.log(e);
        // setModals({
        //   ...modals,
        //   errMsg: '민팅에 실패하였습니다.',
        //   isBuying: false,
        //   isFailure: true,
        // });
      }
    };
    switch ('WHITELIST') {
      case 'WHITELIST':
        const competitionMerkleProof = await checkCompetitionWhitelist();
        await smartContract.methods
          .competitionWhitelistMint(amount, competitionMerkleProof)
          .send(sendObj)
          .then(successMint)
          .catch(failureMint);
        break;
      // case 'PUBLIC':
      //   await smartContract.methods
      //     .publicMint(amount)
      //     .send(sendObj)
      //     .then(successMint)
      //     .catch(failureMint);
      //   break;
      // case '2ND PUBLIC':
      //   await smartContract.methods
      //     .publicMint(amount)
      //     .send(sendObj)
      //     .then(successMint)
      //     .catch(failureMint);
      //   break;
      // case 'CONFIRMED':
      //   const fixedMerkleProof = await checkFixedWhitelist();
      //   await smartContract.methods
      //     .fixedWhitelistMint(amount, fixedMerkleProof)
      //     .send(sendObj)
      //     .then(successMint)
      //     .catch(failureMint);
      //   break;

      default:
        // setModals({
        //   ...modals,
        //   isMinting: false,
        //   mintMsg:
        //     step === 0
        //       ? `민팅 기간이 아닙니다.\n기간에 맞춰 민팅을 진행해주세요.`
        //       : step > 3
        //       ? '민팅이 모두 종료되었습니다.'
        //       : `${step}차 민팅이 완료되었습니다.\n${step + 1}차 민팅을 이용해주세요.`,
        // });

        break;
    }
  };

  useEffect(() => {
    const { ethereum } = window;

    ethereum &&
      ethereum.on('chainChanged', chainId => {
        const networkId = parseInt(chainId, 16);

        if (networkId !== 1 && networkId !== 4) {
          // setModals({
          //   ...modals,
          //   isMainnet: true,
          //   errMsg: "메타마스크 네트워크를 메인넷으로 바꿔주세요.",
          // });
        } else {
          // setModals({
          //   ...modals,
          //   isMainnet: false,
          //   errMsg: "",
          // });
        }
      });
  });

  useEffect(() => {
    let timer = null;
    // if (!account) return setModals((prevState) => ({ ...prevState, isMetaMask: true }));

    // setModals(prevState => ({ ...prevState, isMetaMask: false }));

    window.ethereum
      .request({
        method: 'net_version',
      })
      .then(async networkId => {
        if (+networkId === 1 || +networkId === 4) {
          timer = setInterval(() => {
            // getStatus();
            // getBlockNumber();
            getInformation();
          }, 5000);
        }
      });

    return () => clearInterval(timer);
  }, [getInformation]);

  return (
    <MintStyleWrapper>
      <div className="mint_card">
        <div className="mint_amount">
          <div>민팅 수량</div>
          <div>가격: 0.03eth</div>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
          <div className="sale_amount">0 / 9999</div>
        </div>
        <Button sm variant="mint" className="mint_btn" onClick={onMinting}>
          <span>MINTING</span>
        </Button>
      </div>
    </MintStyleWrapper>
  );
}
