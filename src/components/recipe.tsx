import Image from 'next/image'

export const Recipe = ({ name }: { name: string }) => {
  return (
    <div>
      <div className={'aspect-w-1 aspect-h-1 w-full'}>
        <Image
          src={
            'https://images.unsplash.com/photo-1490914327627-9fe8d52f4d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80'
          }
          alt={'stockphoto'}
          fill
          objectFit={'cover'}
          sizes={'(max-width: 1024px) 100vw, 33vw '}
        />
      </div>
      <h2 className={'text-2xl font-semibold text-red-600 mt-6'}>{name}</h2>
       <button>læs mere</button>
    </div>
  )
}
