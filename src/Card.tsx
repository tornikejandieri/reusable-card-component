interface Props {
  image: string
}

const Card: React.FC<Props> = ({ image }) => {
  return (
    <div className='flex mx-auto m-auto flex-col sm:flex-row'>
      <div className='rounded-lg flex justify-evenly flex-row p-6 mb-11 mt-8  transition ease-in-out delay-150 w-48 h-auto bg-slate-200 hover:-translate-y-1 hover:scale-150 hover:bg-slate-100 duration-200 mx-auto'>
        <div className=''>
          <h3 className='mx-auto justify-self-auto'>Card title</h3>
          <p className='justify-self-auto text-slate-500'>*le text</p>
        </div>

        <div className='mx-auto'>
          <img className='w-14 h-auto flex-row' src={image} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Card
