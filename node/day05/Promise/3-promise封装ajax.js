function get(url, callabak) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
  xhr.onreadystatechange(() => {
    if (xhr.readyState === 4 && ev.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log("请求失败");
    }
  });
}
// promise封装
function get(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange(() => {
      if (xhr.readyState === 4 && ev.status === 200) {
        console.log(xhr.responseText);
        resolve(xhr.responseText)
      } else {
        console.log("请求失败");
        reject('失败')
      }
    });
  })
}