import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {thumbnailUrl} = appDetails

  return (
    <li className="app-item">
      <img className="app-image" src={thumbnailUrl} alt="thumbnail" />
    </li>
  )
}

export default AppItem
