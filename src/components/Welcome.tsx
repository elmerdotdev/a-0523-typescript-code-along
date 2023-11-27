const Welcome = (props: {firstname: string, age: number}) => {
  return (
    <div>Welcome {props.firstname} {props.age}</div>
  )
}

export default Welcome