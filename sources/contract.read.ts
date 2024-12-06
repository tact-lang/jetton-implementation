import { beginCell, Cell, Dictionary } from '@ton/core';
import { sha256_sync } from '@ton/crypto';
import base64url from 'base64url';

export function toSha256(s: string): bigint {
    return BigInt('0x' + sha256_sync(s).toString('hex'))
}

export function toTextCell(s: string): Cell {
    return beginCell().storeUint(0, 8).storeStringTail(s).endCell()
}

export type collectionContent = {
    name: string,
    description: string,
    image: string
}

export function buildCollectionContentCell(content: collectionContent): Cell {
    const collectionContentDict = Dictionary.empty(Dictionary.Keys.BigUint(256), Dictionary.Values.Cell());

    collectionContentDict.set(toSha256("name"), toTextCell(content.name))
    collectionContentDict.set(toSha256("description"), toTextCell(content.description))
    collectionContentDict.set(toSha256("image"), toTextCell(content.image));

    return beginCell()
        .storeUint(0,8)
        .storeDict(collectionContentDict)
        .endCell();
}
(async () => {
    let cell = buildCollectionContentCell({name: "Example content", image: "https://ipfs.io/ipfs/QmSgP7ENtDe6xY6DZUz73ydeYmoopJYu3BywZJPSJ338zT", description: "Example description"});
    console.log(cell.toBoc().toString('hex'));
    console.log("Read script is not yet implemented, but you can always use tonviewer / tonscan to check your contract state.");
    return;
})();
