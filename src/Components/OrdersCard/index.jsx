import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
      <div className='flex justify-between w-full'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-2 mb-1'>
            <CalendarDaysIcon className='h-6 w-6 text-black cursor-pointer' />
            <span className='font-light'>30/11/2023</span>
          </div>
          <div className='flex items-center gap-2 mb-1'>
            <ShoppingCartIcon className='h-6 w-6 text-black cursor-pointer' />
            <span className='font-light'>{totalProducts} articles</span>
          </div>
        </div>
        <div className='flex items-center mb-2 justify-end'>
          <span className='font-medium text-2xl'>${totalPrice}</span>
          <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer ml-2' />
        </div>
      </div>
    </div>
  )
}

export default OrdersCard