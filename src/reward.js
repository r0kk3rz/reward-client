const reward = require('@zippie/zippie-utils/src/reward')

let rewardTokenAddress = ''
const claimBaseUrl = 'https://customer.zippierewards.org/#/'

function init(prefix, privatekey, apikey, uri, rewardtoken) {
    rewardTokenAddress = rewardtoken
    reward.init(prefix, privatekey, apikey, uri)
}

async function rewardUser(user, amount) {
    const userRef = reward.getUserReference(user)

    const response = await reward.rewardTo(userRef,rewardTokenAddress, amount)

    return response
}

async function getUserBalance(user) {
    const userRef = reward.getUserReference(user)

    const response = await reward.getUserBalance(userRef, rewardTokenAddress)

    return response
}

async function getClaimLink(user) {
    const userRef = reward.getUserReference(user)

    return claimBaseUrl + userRef + '/' + rewardTokenAddress
}

async function createReferralCode(user) {
    const userRef = reward.getUserReference(user)

    const response = await reward.createReferralCode(userRef)

    return response
}

async function setUserKeyValue(user, key, value) {
    const userRef = reward.getUserReference(user)

    const response = await reward.setUserKeyValue(userRef, key, value)

    return response
}

module.exports = {
    init,
    rewardUser,
    getUserBalance,
    getClaimLink,
    createReferralCode,
    setUserKeyValue
}