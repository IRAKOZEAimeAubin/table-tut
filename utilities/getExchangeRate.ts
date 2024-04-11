import {Currency, CurrencyData} from '@/types/currencyApi.type'
import axios from 'axios'

export const getExchangeRate = async (baseCode?: string) => {
  const data = await axios.get(`https://open.er-api.com/v6/latest/${baseCode}`)

  return data.data
}

export const transformCurrencyData = (data: any): CurrencyData | null => {
  const {time_last_update_utc, time_next_update_utc, base_code, rates} = data

  if (typeof rates !== 'object' || rates === null) {
    return null
  }

  const currencyRates: Currency[] = Object.entries(rates).map(
    ([symbol, value]) => ({
      symbol,
      rate: value as number,
    }),
  )

  return {
    time_last_update_utc,
    time_next_update_utc,
    base_code,
    rates: currencyRates,
  }
}
