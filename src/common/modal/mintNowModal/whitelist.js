import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

export const getMerkleProof = (rootHash, address, whitelist) => {
  const leafNodes = whitelist.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

  const addr = keccak256(address);
  const hexProof = merkleTree.getHexProof(addr);

  if (!merkleTree.verify(hexProof, addr, rootHash)) {
    return null;
  }

  return hexProof;
};
