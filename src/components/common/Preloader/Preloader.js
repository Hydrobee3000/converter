import preloader from '../../../assets/preloader.svg'

const style = {
  position: 'absolute',
  left: '0',
  right: '0',
  top: '20%',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100px',
  zIndex: '999',
}
let Preloader = (props) => {
  return (
    <div style={style}>
      <img src={preloader} alt='preloader' />
    </div>
  )
}

export default Preloader
