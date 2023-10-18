export default function InputForm() {
  return (
    <div className='flex flex-col gap-3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-gray-700 '>
      <form action='post' className=''>
        <h2 className='text-2xl'>Budget Input</h2>
        <div className='mt-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Monthly Income
          </label>
          <input
            type='text'
            disabled
            className='shadow appearance-none border rounded bg-green-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mt-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Rent
          </label>
          <input
            type='text'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mt-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Rental Insurance
          </label>
          <input
            type='text'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mt-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Internet
          </label>
          <input
            type='text'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mt-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Food
          </label>
          <input
            type='text'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mt-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Phone
          </label>
          <input
            type='text'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mt-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Transportation
          </label>
          <input
            type='text'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mt-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Gym
          </label>
          <input
            type='text'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mt-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Discretionary
          </label>
          <input
            type='text'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mt-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Savings
          </label>
          <input
            type='text'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mt-2'>
          <label className='block  text-gray-700 text-sm font-bold mb-2'>
            Net
          </label>
          <input
            type='text'
            disabled
            className='shadow appearance-none border rounded bg-green-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <button
          type='submit'
          disabled
          className='mt-4  bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Calculate
        </button>
      </form>
    </div>
  );
}
