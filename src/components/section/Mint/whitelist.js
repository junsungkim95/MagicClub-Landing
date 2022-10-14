import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';

const whitelist = [
  '0x88cE2eAA119Dd5C30dAa66Ad5a2932691B93C6c3',
  '0x1A971803DFAd2e236B15A53241e5227ffDA304c2',
  '0xa6CcFd1f2bf229ceb6cd5321B838A2b0D4647706',
  '0x5fD271a9bc50f1E210f15318C6B15d8bB79Cf67d',
  '0x02B4EA37Cdb0AE6B60F00a91e3A17dfe2264367A',
];

export const getMerkleProof = (rootHash, address) => {
  const leafNodes = whitelist.map(addr => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

  const addr = keccak256(address);
  const hexProof = merkleTree.getHexProof(addr);

  if (!merkleTree.verify(hexProof, addr, rootHash)) {
    return null;
  }

  return hexProof;
};
