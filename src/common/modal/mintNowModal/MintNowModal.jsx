import { useState } from "react";
import { useModal } from "../../../utils/ModalContext";
import { FiX } from "react-icons/fi";
import Button from "../../button";
import MintModalStyleWrapper from "./MintNow.style";
import mintImg from "../../../assets/images/nft/00maru.png";
import hoverShape from "../../../assets/images/icon/hov_shape_L.svg";
import { totalMintCount, mint } from "../../../utils/web3mint";
import { useEffect } from "react";
import Web3 from "web3";
import Abi from "./abi.json";
import { useCallback } from "react";

const Web3EthContract = require("web3-eth-contract");

const ABI_CONTRACT_ADDRESS = "0x588dFd1181d1237D06b94a9A9343Bcdf93a72999";

const web3 = new Web3(window.ethereum);
Web3EthContract.setProvider(window.ethereum);

const smartContract = new Web3EthContract(Abi, ABI_CONTRACT_ADDRESS);

console.log(smartContract);

const MintNowModal = () => {
  const { account } = useModal();

  const [totalSupply, setTotalSupply] = useState(0);
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("");
  const [remaining, setRemaining] = useState(0);
  const { mintModalHandle } = useModal();
  const [price, setPrice] = useState(0);
  const [wei, setWei] = useState(0);

  const TOTAL_ITEMS = 9999;

  const increaseCount = () => {
    if (count >= 10) {
      setMessage("Maximum minting amount exceeding!");
    } else {
      setMessage("");
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    console.log(count);
    if (count <= 1) {
      setMessage("Minimum minting amount 1.");
    } else {
      setMessage("");
      setCount(count - 1);
    }
  };

  const mintNow = async () => {
    if (count >= 10 && count < 1) return;

    await onMinting();

    // if (txn.length) {
    //   setMessage("Minted successfully!");
    // }
  };

  const onChangeQuantity = (e) => {
    const formattedNumber = (value) => {
      const number = parseInt(value.replace(/[^\d]+/g, ""), 10);

      return isNaN(number) ? 0 : number;
    };

    const val = formattedNumber(e.target.value);

    if (val >= 10) {
      setMessage("Maximum minting amount exceeding!");
    } else if (val < 1) {
      setMessage("Minimum minting amount 1.");
    }
    setCount(val);
  };

  const onMinting = async () => {
    // if (amount > 5) {
    //   // return setModals({ ...modals, isSale: true });
    //   return;
    // }

    const sendObj = {
      gasLimit: 500000 * +1,
      from: account[0],
      to: ABI_CONTRACT_ADDRESS,
      value: web3.utils.toBN(wei).mul(web3.utils.toBN(1)),
    };

    // setModals({ ...modals, isBuying: true });

    const successMint = (res) => {
      getInformation();
      // setModals({ ...modals, isBuying: false, isSuccessMint: true });
    };

    async function getRevertReason(txHash) {
      const tx = await web3.eth.getTransaction(txHash);

      return new Promise((resolve) => {
        // 의도된 에러 캐칭을 위해 await가 아닌 콜백 사용
        // @ts-ignore
        web3.eth.call(tx, tx.blockNumber, (err, result) => {
          if (err) {
            try {
              const errorStringArray = err.toString().split('"');
              const message = errorStringArray[errorStringArray.length - 2].split(":")[1].trim();

              // resolve(ERR_MSG[message] || '민팅에 실패했습니다.');
              resolve("민팅에 실패했습니다.");
            } catch (e) {
              resolve("민팅에 실패했습니다.");
            }
          }
          resolve("민팅에 실패했습니다.");
        });
      });
    }

    const failureMint = async (error) => {
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
    console.log("publicMiint", sendObj);
    await smartContract.methods.publicMint(1).send(sendObj).then(successMint).catch(failureMint);

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
  };

  const getInformation = useCallback(async () => {
    console.log("getInfo", smartContract, await smartContract.methods.mintingInformation().call());
    try {
      const [
        ,
        mintIndexForSale,
        mintLimitPerSale,
        mintLimitPerWallet,
        startBlockNum,
        maxSaleAmount,
        mintPrice,
      ] = await smartContract.methods.mintingInformation().call();
      setWei(mintPrice);
      setPrice(+web3.utils.fromWei(mintPrice, "ether"));
    } catch (e) {
      console.error("error:", e);
    }
  }, []);

  // useEffect(() => {
  //   const calculateRemainingItems = async () => {
  //     let totaltMintedItems = await totalMintCount();

  //     setRemaining(TOTAL_ITEMS - totaltMintedItems);
  //   };

  //   calculateRemainingItems();
  // }, [TOTAL_ITEMS]);

  useEffect(() => {
    let timer = null;

    window.ethereum
      .request({
        method: "net_version",
      })
      .then(async (networkId) => {
        if (+networkId === 1 || +networkId === 5) {
          setTotalSupply(await smartContract.methods.totalSupply().call());

          getInformation();

          // timer = setInterval(() => {
          //   // getStatus();
          //   // getBlockNumber();
          //   getInformation();
          // }, 5000);
        }
      });

    return () => clearInterval(timer);
  }, [getInformation]);

  return (
    <>
      <MintModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>Collect YOUR NFT before end</h2>
              <button onClick={() => mintModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="mint_img">
                <img src={mintImg} alt="magic club nft mint" />
              </div>
              <div className="mint_count_list">
                <ul>
                  <li>
                    <h5>Remaining</h5>
                    <h5>
                      {totalSupply}/<span>10000</span>
                    </h5>
                  </li>
                  <li>
                    <h5>Price</h5>
                    <h5>{price} ETH</h5>
                  </li>
                  <li>
                    <h5>Quantity</h5>
                    <div className="mint_quantity_sect">
                      <button onClick={decreaseCount}>-</button>
                      <input type="text" id="quantity" value={count} onChange={onChangeQuantity} />
                      <button onClick={increaseCount}>+</button>
                    </div>
                    <h5>
                      <span>{count * price}</span> ETH
                    </h5>
                  </li>
                </ul>
              </div>
              {message && <p>{message}</p>}
              <div className="modal_mint_btn">
                <Button
                  lg
                  variant="mint"
                  onClick={() => {
                    mintNow();
                  }}
                >
                  Mint Now
                </Button>
              </div>
            </div>

            <div className="modal_bottom_shape_wrap">
              <span className="modal_bottom_shape shape_left">
                <img src={hoverShape} alt="magic club nft hover shape" />
              </span>
              <span className="modal_bottom_shape shape_right">
                <img src={hoverShape} alt="magic club nft hover shape" />
              </span>
            </div>
          </div>
        </div>
      </MintModalStyleWrapper>
    </>
  );
};

export default MintNowModal;
