import BigNumber from "../libraries/bignumber.mjs"
import { globalConstant } from "./mainScript.mjs"

export var libraries = {
    decodeProgress: new BigNumber('0.0'),
    decodeGoal: new BigNumber('0.0'),
    fetchProgress: new BigNumber('0.0'),
    fetchGoal: new BigNumber('0.0'),
    booksDecoded: new BigNumber('0'),
    state: "idle",
    decodingState: false,
    fetchingState: false,
    decodeBase: new BigNumber('1.0'),
    decodeModifier: new BigNumber('0.0'),
    decodeMultiplier: new BigNumber('1.0'),
    fetchBase: new BigNumber('1.0'),
    fetchModifier: new BigNumber('0.0'),
    fetchMultiplier: new BigNumber('1.0')
}

export function libraryUpdate()
{
    if(libraries.fetchingState)
    {
        libraries.fetchProgress = libraries.fetchProgress.plus(libraries.fetchBase.plus(libraries.fetchModifier).multipliedBy(libraries.fetchMultiplier).dividedBy(globalConstant.gameTicksPerSecond))
        if (libraries.fetchProgress.isGreaterThanOrEqualTo(libraries.fetchGoal))
        {
            libraries.fetchingState = false
            libraries.state = "ready"
        }
    }

    if(decodingState)
    {
        libraries.decodeProgress = libraries.decodeProgress.plus(libraries.decodeBase.plus(libraries.decodeModifier).multipliedBy(libraries.decodeMultiplier).dividedBy(globalConstant.gameTicksPerSecond))
        if(libraries.decodeProgress.isGreaterThanOrEqualTo(libraries.decodeGoal))
        {
            libraries.decodingState = false
            libraries.state = "idle"
            bookDecodeFinish()
        }
    }
}

export function goFetchABook()
{
    if(libraries.state == "idle")
    {
        libraries.fetchingState = true
    }
}

export function goDecodeABook()
{
    if(libraries.state == "ready")
    {
        libraries.decodingState = true
    }
}

function bookDecodeFinish() 
{
    libraries.booksDecoded = libraries.booksDecoded.plus(new BigNumber('1'))
}