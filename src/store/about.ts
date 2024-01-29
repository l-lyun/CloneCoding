import { Store } from '../core/heropy'

interface State {
  photo: string
  name: string
  email: string
  blog: string
  GitHub: string
  repository: string
}

export default new Store<State>({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'Hyun / KimDoHyun',
  email: 'kimdohyun032@gmail.com',
  blog: 'https://github.com/l-lyun',
  GitHub: 'https://github.com/l-lyun',
  repository: 'https://github.com/l-lyun/clone-movie-app'
}