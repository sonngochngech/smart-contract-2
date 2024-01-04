

// Replace this with the actual transaction hash
// const transactionHash = "0x123...";

async function getRevertReason() {
    // const receipt = await ethers.provider.getTransactionReceipt(transactionHash);
    //
    // if (receipt.status === 0) {
        const reason = ethers.utils.parseRevertReason(0xe2517d3f0000000000000000000000002279b7a0a67db372996a5fab50d91eaa73d2ebe6b737b436e6cc542520cb79ec04245c720c38eebfa56d9e2d99b043979db20e4c);
        console.error("Revert Reason:", reason);
    // } else {
    //     console.log("Transaction succeeded");
    // }
}

getRevertReason();