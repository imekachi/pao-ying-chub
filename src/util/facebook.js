export const getUserProfile = (userId) => `https://graph.facebook.com/${userId}/picture?type=large`

const utilFB = {
  getUserProfile,
}

export default utilFB