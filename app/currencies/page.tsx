import {DataTable} from '@/components/data-table/data-table'
import {
  getExchangeRate,
  transformCurrencyData,
} from '@/utilities/getExchangeRate'
import {columns} from '@/app/currencies/columns'

export default async function ExchangeTable() {
  const rawData = await getExchangeRate('USD')
  const data = transformCurrencyData(rawData)

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='mb-6 text-3xl font-bold'>Exchange Table</h1>
        <DataTable columns={columns} data={data!.rates} />
      </div>
    </section>
  )
}
