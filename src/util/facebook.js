export const getUserProfile = (userId) => `https://graph.facebook.com/${userId}/picture?type=large`

/**
 * returns userData obj
 */
export const login = (callBack = () => undefined) => {
  if (!window.FB) return false
  window.FB.login((response) => {
    if (!response.authResponse) return false

    window.FB.api('/me', function(response) {
      // axios.post('url', {
      //   ...response,
      //   อยากได้อะไรอยากใส่อะไรก็ใส่เลย
      // })
      console.log('>> response: ', response)
      callBack(response)
    });
  }, {scope: 'email,user_likes,publish_actions'});
}

export const share = (urlToShare, callBack) => {
  if (!window.FB) return false
  urlToShare = urlToShare || window.location.href
  window.FB.ui({
    method: 'share',
    href: urlToShare,
  }, callBack)
}

window.share = share

const utilFB = {
  getUserProfile,
  login,
}

export default utilFB