import React, {useState} from 'react'
import Search from "./youtube"
import YTSearch from "youtube-api-search"
import AshTube from "./AshTube"
import Loading from "./Loading"

const API_KEY = 'AIzaSyCBzZ2m4zAjvfSry3MgJGbV9R8FJr-FiXg'

const Api = () => {
  const [val, setVal] = useState('')
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(false)

  const onSearchPress = (term) => {
    setLoading(true)
    YTSearch({key: API_KEY, term}, (videos) => {
        const items = videos.map(video => {
          return {
            title: video.snippet.title,
            description: video.snippet.description,
            id: video.id.videoId
          }
        })
        setVideos(items)
        setLoading(false)
      }
    )
  }
  const handleChange = (event) => {
    setVal(event.target.value)
  }
  return (
    <>
      <Search
        onChange={handleChange}
        onSearchPress={() => onSearchPress(val)}
      />
      {loading ? <Loading/> : videos.map(info => {
        return (
          <AshTube
            key={info.title}
            title={info.title}
            id={info.id}
          />
        )
      })}

    </>
  )
}

export default Api