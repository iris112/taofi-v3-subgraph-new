import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x20D0Cdf9004bf56BCa52A25C9288AAd0EbB97D59'

export const REFERENCE_TOKEN = '0x9dc08c6e2bf0f1eed1e00670f80df39145529f81'
export const STABLE_TOKEN_POOL = '0x6647dcbeb030dc8e227d8b1a2cb6a49f3c887e3c'

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('4')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with s
export const WHITELIST_TOKENS: string[] = [
  REFERENCE_TOKEN, // WETH
  '0xb833e8137fedf80de7e908dc6fea43a029142f20', // USDC
]

export const STABLE_COINS: string[] = [
  '0xb833e8137fedf80de7e908dc6fea43a029142f20', // USDC
]

export const SKIP_POOLS: string[] = []

export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []
