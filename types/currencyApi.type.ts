export interface Currency {
  symbol: string
  rate: number
}

export interface CurrencyData {
  time_last_update_utc: string
  time_next_update_utc: string
  base_code: string
  rates: Currency[]
}
