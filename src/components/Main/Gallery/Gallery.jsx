import { useContext } from 'react'
import { GalleryContext } from '../../contexts/GalleryContext'
import Post from './Post/Post'

function Gallery() {
  const { posts } = useContext(GalleryContext)
  return (
    <div className="container w-75 p-10">
      <div className="row row-cols-3 justify-content-around gy-3">
        {
          posts.map((post) => (// наполняем галерею
            <Post
              key={post.id}
              id={post.id}
              name={post.name}// присваиваем каждому посту значения из формы
              description={post.description}
              src={post.src}
              tags={post.tags}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Gallery
