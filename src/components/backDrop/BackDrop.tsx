import './backDrop.css';

export const BackDrop = (props: {drawerHandler:Function}) => {
  return (
    <div onClick={()=> props.drawerHandler(false)}  className="back-drop" />
  )
}
