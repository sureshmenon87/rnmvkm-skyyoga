import DOMPurify from "isomorphic-dompurify";

export function sanitizeHtml(html: string): string {
  if (!html) return "";

  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ["p", "br", "ul", "ol", "li", "strong", "h3", "blockquote"],
    ALLOWED_ATTR: ["class"],
  });
}
