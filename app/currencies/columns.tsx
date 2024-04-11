'use client'

import {Currency} from '@/types/currencyApi.type'
import {ColumnDef} from '@tanstack/react-table'
import {DotsHorizontalIcon, CaretSortIcon} from '@radix-ui/react-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {Button} from '@/components/ui/button'

export const columns: ColumnDef<Currency>[] = [
  {
    accessorKey: 'symbol',
    header: ({column}) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Currency Symbol
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      )
    },
  },
  {
    accessorKey: 'rate',
    header: "Today's Rate",
  },
  {
    id: 'actions',
    cell: ({row}) => {
      const currency = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <DotsHorizontalIcon className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(currency.symbol)}
            >
              Copy currency symbol
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View currency</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
