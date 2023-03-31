import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'
import { fetchDiver } from '../actions/divers'
import Diver from './Diver'

export default function Divers() {
  const divers = useAppSelector((state) => state.divers)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchDiver())
  })

  return (
    <section>
      <div>
        {divers.map((divers) => (
          <Diver key={divers.id} diversData={divers} />
        ))}
      </div>
    </section>
  )
}
