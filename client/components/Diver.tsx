import { Diver } from '../../common/diver'

interface Props {
  diversData: Diver
}

export default function Diver(props: Props) {
  const { name, age, qualification } = props.diversData

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{qualification}</p>
    </div>
  )
}
