import DOMPurify, { Config } from 'dompurify'
import { marked } from 'marked'

// dangerouslySetInnerHTMLに代入する変数の型.
type InnerHTML = {
  __html: string
}

// 出力されるanchorタグにtarget属性とrel属性を付与.
const renderer = new marked.Renderer()
renderer.link = (href, title, text) => {
  return `<a rel="noopener" target="_blank" href="${href}">${text}</a>`
}

export const convertMarkdownToHTML = (markdownValue: string): InnerHTML => {
  // マークダウン記法のテキストをHTMLの文字列に変換.
  const markedText = marked(markdownValue, {
    silent: true,
    renderer,
  });

  console.log(markedText);

  // DOMPurifyでサニタイズする時のオプションを定義.
  const config: Config = {
    // 許可する属性.
    ALLOWED_ATTR: ['href', 'target', 'rel'],
    // 許可するタグ.
    ALLOWED_TAGS: ['h1', 'p', 'br', 'ul', 'ol', 'li', 'blockquote', 'strong', 'em', 'a', 'hr', 'del', 'pre', 'code'],
  }

  // dangerouslySetInnerHTMLだとstringしか受け付けていないためstring型をアサーション.
  const htmlText = DOMPurify.sanitize(markedText, config) as string

  console.log(htmlText);
  return { __html: htmlText }
}