import { useNavigate, useParams } from 'react-router-dom'

function PostDetail() {
  const { postsId } = useParams() // получаем id нужного поста из параметров запроса
  const navigate = useNavigate() // Для кнопки "назад"
  const LSPostsKey = 'posts'

  const dataFromLS = localStorage.getItem(LSPostsKey) // получаем и преобразуем данные с LS
  const posts = JSON.parse(dataFromLS)

  const content = () => {
    const checkId = (el) => el.id === postsId // ищем элемент с нужным id
    const currentPost = posts.find(checkId)

    return (
      <div name="imgCard" className="card pt-1 pe-2 ps-2" style={{ width: '18rem' }}>
        <img src={currentPost.src} className="card-img-top pt-2" alt="" />
        <div className="card-body">
          <h5 className="card-title text-center">{currentPost.name}</h5>
          <p className="card-text">{currentPost.description}</p>
          <p className="text-primary fst-italic">{currentPost.tags}</p>
        </div>
        <button type="button" onClick={() => { navigate(-1) }} className="btn btn-danger w-50">Назад</button>
      </div>
    )
  }
  return (
    <div>{content()}</div>
  )
}
export default PostDetail
