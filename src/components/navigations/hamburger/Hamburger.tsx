
import './hamburger.css';
export const Hamburger = (props: {drawerHandler:Function}) => {
  return (
    <button onClick={()=> props.drawerHandler(true)} className="toggle-button">
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  )
}
