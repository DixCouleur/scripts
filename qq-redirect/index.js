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

$notify('title', 'subtitle', 'content', {
  'open-url': 'https://baidu.com',
})
