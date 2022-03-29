import { createContext } from 'react'
import usePosts from '../../hooks/usePosts'

const GalleryContext = createContext()

function GalleryProvider({ children }) {
  const { posts, addNewPost, deletePost } = usePosts()// импорт кастомного хука с логикой для постов
  return (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GalleryContext.Provider value={{
      posts, addNewPost, deletePost,
    }}
    >
      {children}
    </GalleryContext.Provider>
  )
}
export default GalleryProvider
export { GalleryContext }
