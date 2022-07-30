import Proptypes from 'prop-types'

export const GriItem = ({title,url}) => {
  return (
    
    <div className="card">
        <img src={url} alt={title}></img>
        <p>{title}</p>

    </div>
  )
}

GriItem.proptypes = {
  title : Proptypes.string.isRequired,
  url : Proptypes.string.isRequired,

}
