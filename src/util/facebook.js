export const getUserProfile = (userId) => `https://graph.facebook.com/${userId}/picture?type=large`

/**
 * returns userData obj
 */
export const login = (callBack = () => undefined) => {
  if (!window.FB) return false
  window.FB.login((response) => {
    if (!response.authResponse) return false

    window.FB.api('/me', function(response) {
      callBack(response)
    });
  }, {scope: 'email,user_likes,publish_actions'});
}

export const share = (urlToShare) => {
  if (!window.FB) return false
  window.FB.ui({
    method: 'share',
    display: 'popup',
    href: urlToShare,
  }, function (response) {})
}

window.share = share

const utilFB = {
  getUserProfile,
  login,
}

export default utilFB