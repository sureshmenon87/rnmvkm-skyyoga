import DOMPurify from "dompurify";

export function sanitizeHtml(html: string) {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ["p", "br", "ul", "ol", "li", "strong", "h3"],
    ALLOWED_ATTR: [],
  });
}
