const HobbyItem = (props: {id: number, hobby: string}) => {
  return (
    <div>
      <span>{props.hobby}</span>
    </div>
  )
}

export default HobbyItem