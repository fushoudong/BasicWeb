/**
 * 使用字符串模板引擎进行动态替换template
 * 字符串的替换方法
 */
let http = require('http')
let fs = require('fs')
let server = http.createServer()
let wwwPath = './www'
let content = ''
fs.readdir(wwwPath, (error, files) => {
  if(error) {
    console.log('文件夹路径错误')
  }else {
    console.log(files)
    files.forEach(item => {
      let tr
      if(item.indexOf('.') !== -1) {
        tr = `
        <tr>
        <td data-value="a.txt">
          <a
            class="icon file"
            draggable="true"
            href="${wwwPath}/${item}"
            >>_<</a
          >
        </td>
        <td class="detailsColumn" data-value="0">0 B</td>
        <td class="detailsColumn" data-value="1595927117">
          2020/7/28 下午5:05:17
        </td>
      </tr>
        `
      }else {
        tr = `
          <tr>
            <td data-value="login/">
              <a class="icon dir" href="${wwwPath}/${item}"
                >>_</</a
              >
            </td>
            <td class="detailsColumn" data-value="0"></td>
            <td class="detailsColumn" data-value="1595927133">
              2020/7/28 下午5:05:33
            </td>
          </tr>`
      }
      content += tr.replace('>_<',item)
    })
  }
})
server.on('request', (Request, Response) => {
  fs.readFile('./template.html', (error, data) => {
    if(error) {
      Response.setHeader('content-type', 'text/plain; charset=utf-8;')
      return Response.end('页面访问出错')
    }else {
      data = data.toString()
      data = data.replace('替换字符', content)
      console.log(data)
      return Response.end(data)
    }
  })
})

server.listen(3000, (error) => {
  console.log('server running...')
})