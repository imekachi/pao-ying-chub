export const getUserProfile = (userId) => `https://graph.facebook.com/${userId}/picture?type=large`

/**
 * returns userData obj
 */
export const loginFacebook = async () => {
  const userData = await {
    id: 842964855757927,
  }

  console.log('>> fbLogin, userData:', userData)
  return userData
}

const utilFB = {
  getUserProfile,
  loginFacebook,
}

export default utilFB