import { useEthers } from "@usedapp/core";
import helperConfig from "../helper-config.json";
import networkMapping from "../chain-info/deployments/map.json";
import { constants } from "ethers";
import brownieConfig from "../brownie-config.json";
import dapp from "../static/dapp.png";
import eth from "../static/eth.png";
import dai from "../static/dai.png";
import { YourWallet } from "./yourWallet";
import { makeStyles } from "@mui/styles";

export type Token = {
  image: string;
  address: string;
  name: string;
};

const useStyles = makeStyles({
  title: {
    color: "white",
    textAlign: "center",
    padding: "4px",
  },
});

export const Main = () => {
  const classes = useStyles();
  // Show token values from wallet
  // Get address of different tokens
  // Get the balance of the user's wallet

  // Send brownie-config to src folder
  // send the build folder
  const { chainId, error } = useEthers();
  const networkName = chainId ? helperConfig[chainId] : "dev";

  // constants.AddressZero maps a zero address to the tokens if we are no dev/ganache network

  let stringChainId = String(chainId);
  const dappTokenAddress = chainId
    ? networkMapping[stringChainId]["DappToken"][0]
    : constants.AddressZero; // get our dapp token address
  const wethTokenAddress = chainId
    ? brownieConfig["networks"][networkName]["weth_token"]
    : constants.AddressZero; // get weth token address
  const fauTokenAddress = chainId
    ? brownieConfig["networks"][networkName]["fau_token"]
    : constants.AddressZero; // get fau token address

  const supportedTokens: Array<Token> = [
    { image: dapp, address: dappTokenAddress, name: "DAPP" },
    { image: eth, address: wethTokenAddress, name: "WETH" },
    { image: dai, address: fauTokenAddress, name: "DAI" },
  ];

  return (
    <>
      <h2 className={classes.title}>Dapp Token App</h2>
      <YourWallet supportedTokens={supportedTokens} />
    </>
  );
};
