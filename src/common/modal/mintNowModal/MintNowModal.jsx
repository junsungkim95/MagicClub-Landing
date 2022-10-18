import { useState } from "react";
import { useModal } from "../../../utils/ModalContext";
import { FiX } from "react-icons/fi";
import Button from "../../button";
import MintModalStyleWrapper from "./MintNow.style";
import mintImg from "../../../assets/images/nft/00maru.png";
import hoverShape from "../../../assets/images/icon/hov_shape_L.svg";
import { useEffect } from "react";
import Web3 from "web3";
import Abi from "./abi.json";
import { useCallback } from "react";

const Web3EthContract = require("web3-eth-contract");

const ABI_CONTRACT_ADDRESS = "0x8e5e575AA13fe81D256a7607a92A479c406E863c";

const ERR_MSG = {
  "The public sale is not enabled!":
    "아직 퍼블릭 민팅이 활성화되지 않았습니다.\n잠시만 기다려주세요.",
  "Bot is not allowed": "봇 구매는 허용되지 않습니다.",
  "Not yet started": "민팅 가능한 블록 높이에 도달하지 못했습니다.",
  "Too many requests or zero request": "허용되지 않은 민팅 개수를 요청했습니다.",
  "Not enough ETH": "금액이 정확하지 않습니다",
  "Exceed max amount": "최대 판매 개수를 초과했습니다.",
  "Exceed max amount per person": "구매 가능 개수를 초과했습니다.",
  "The whitelist sale is not enabled!":
    "아직 화이트리스트 민팅이 활성화되지 않았습니다.\n잠시만 기다려주세요.",
  "Invalid proof": "허용되지 않은 지갑 주소입니다.",
  "Fail with error 'Address already claimed!'": "이미 구매한 지갑 주소입니다.",
};

const web3 = new Web3(window.ethereum);
Web3EthContract.setProvider(window.ethereum);

const smartContract = new Web3EthContract(Abi, ABI_CONTRACT_ADDRESS);

const MintNowModal = ({ totalSupply, getTotalSupply }) => {
  const { account } = useModal();

  const [loading, setLoading] = useState(false);
  const [maxAmount, setMaxAmount] = useState(0);
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("");
  const { mintModalHandle } = useModal();
  const [price, setPrice] = useState(0);
  const [wei, setWei] = useState(0);

  const increaseCount = () => {
    if (count >= maxAmount) {
      setMessage("Maximum minting amount exceeding!");
    } else {
      setMessage("");
    }
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count <= 1) {
      setMessage("Minimum minting amount 1.");
    } else {
      setMessage("");
    }
    setCount(count - 1);
  };

  const mintNow = async () => {
    setLoading(true);
    if (count >= maxAmount || count < 1) return;

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

    if (val >= maxAmount) {
      setMessage("Maximum minting amount exceeding!");
    } else if (val < 1) {
      setMessage("Minimum minting amount 1.");
    } else {
      setMessage("");
    }
    setCount(val);
  };

  const onMinting = async () => {
    // if (amount > 5) {
    //   // return setModals({ ...modals, isSale: true });
    //   return;
    // }

    const sendObj = {
      gasLimit: 500000 * count,
      from: account[0],
      to: ABI_CONTRACT_ADDRESS,
      value: web3.utils.toBN(wei).mul(web3.utils.toBN(count)),
    };

    const successMint = async (res) => {
      getInformation();
      mintModalHandle();
      await getTotalSupply();
      setLoading(false);
      alert("민팅에 성공했습니다.");
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

              resolve(ERR_MSG[message] || "민팅에 실패했습니다.");
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

        alert(reason);
      } catch (e) {
        console.log(e);
        alert("민팅에 실패하였습니다.");
      }
      setLoading(false);
    };
    await smartContract.methods
      .publicMint(count)
      .send(sendObj)
      .then(successMint)
      .catch(failureMint);

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

      setMaxAmount(mintLimitPerSale);

      setWei(mintPrice);
      setPrice(web3.utils.fromWei(mintPrice, "ether"));
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
                      {totalSupply}/<span>9000</span>
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
                <Button lg variant="mint" onClick={loading ? () => {} : mintNow}>
                  {loading ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="load"
                    >
                      <path
                        d="M20 10C20 12.1118 19.3314 14.1694 18.0902 15.8779C16.8489 17.5863 15.0986 18.858 13.0902 19.5106C11.0817 20.1631 8.91826 20.1631 6.90983 19.5106C4.9014 18.858 3.15111 17.5863 1.90983 15.8779C0.668549 14.1694 -1.84619e-07 12.1118 0 10C1.84619e-07 7.88821 0.66855 5.83062 1.90983 4.12215C3.15111 2.41367 4.9014 1.14201 6.90983 0.489434C8.91827 -0.163145 11.0817 -0.163145 13.0902 0.489435L12.1631 3.3426C10.7572 2.8858 9.24279 2.8858 7.83688 3.3426C6.43098 3.79941 5.20578 4.68957 4.33688 5.8855C3.46798 7.08144 3 8.52174 3 10C3 11.4783 3.46798 12.9186 4.33688 14.1145C5.20578 15.3104 6.43098 16.2006 7.83688 16.6574C9.24278 17.1142 10.7572 17.1142 12.1631 16.6574C13.569 16.2006 14.7942 15.3104 15.6631 14.1145C16.532 12.9186 17 11.4783 17 10H20Z"
                        fill="#111"
                      />
                    </svg>
                  ) : (
                    "Mint now"
                  )}
                </Button>
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
        </div>
      </MintModalStyleWrapper>
    </>
  );
};

export default MintNowModal;
