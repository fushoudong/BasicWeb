export default {
  timeDone(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('increase', payload)
        resolve(payload)
      }, 1000)
    })
  }
}