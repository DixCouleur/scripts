const isQuanX = typeof $notify != "undefined"
const isSurgeiOS =
    "undefined" !== typeof $environment &&
    $environment["surge-version"] &&
    $environment.system == "iOS"
const isLooniOS = typeof $loon != "undefined" && /iPhone/.test($loon)
const isStashiOS =
    "undefined" !== typeof $environment &&
    $environment["stash-version"] &&
    $environment.system == "iOS"
const isShadowrocket = "undefined" !== typeof $rocket
const isLanceX = "undefined" != typeof $native

function notify(title = '', subtitle = '', content = '', open_url) {
  if (isQuanX && /iOS/.test($environment.version)) {
      let opts = {}
      if (open_url) opts["open-url"] = open_url
      if (JSON.stringify(opts) == "{}") {
          $notify(title, subtitle, content)
      } else {
          $notify(title, subtitle, content, opts);
      }
  } else if (isSurgeiOS || isStashiOS || isLanceX) {
      let opts = {}
      if (open_url) opts["url"] = open_url
      if (JSON.stringify(opts) == "{}") {
          $notification.post(title, subtitle, content)
      } else {
          $notification.post(title, subtitle, content, opts)
      }
  } else if (isLooniOS) {
      let opts = {}
      if (open_url) opts["openUrl"] = open_url
      if (JSON.stringify(opts) == "{}") {
          $notification.post(title, subtitle, content)
      } else {
          $notification.post(title, subtitle, content, opts)
      }
  } else if (isShadowrocket) {
      if (open_url) {
          $notification.post(title, subtitle, content, open_url)
      } else {
          $notification.post(title, subtitle, content)
      }
  }
}

const redirectStatus = isQuanX ? "HTTP/1.1 302 Temporary Redirect" : 302
const trueURL = new URL($request.url).searchParams.pfurl
const redirect = {
    status: redirectStatus,
    headers: {
        Location: trueURL,
    },
}
console.log('trueURL', trueURL)
$notify('title', 'subtitle', trueURL, {
    'open-url': 'https://baidu.com',
  })
  
$done(redirect)
