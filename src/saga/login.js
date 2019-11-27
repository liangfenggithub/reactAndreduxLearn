

export function* userLoginAsync() {
  const json = yield call(login.bind(this, user), login)

}