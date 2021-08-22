import BigNumber from '../libraries/bignumber.mjs'

export var libraries = {
    decodeProgress: new BigNumber('0.0'),
    decodeGoal: new BigNumber('0.0'),
    fetchProgress: new BigNumber('0.0'),
    fetchGoal: new BigNumber('0.0'),
    bookDecoded: new BigNumber('0'),
    decodingState: false,
    fetchingState: false
}

