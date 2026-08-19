import React from "react";
import { Layout } from "@/components/layout";

function sanitizeHref(url: string): string {
  const trimmed = url.trim();
  const lower = trimmed.toLowerCase();
  if (lower.startsWith("javascript:") || lower.startsWith("vbscript:") || lower.startsWith("data:")) return "#";
  return trimmed;
}

function renderMarkdown(markdown: string): string {
  let s = String(markdown);

  // Preserve literal <img> tags (allow remote images). Escape other angle brackets.
  s = s.replace(/<img[\s\S]*?>/gi, (m) => `@@IMG@@${Buffer.from(m).toString("base64")}`);

  // Escape HTML
  s = s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Restore image tags (trusted remote images)
  s = s.replace(/@@IMG@@([A-Za-z0-9+/=]+?)/g, (_m, b64) => Buffer.from(b64, "base64").toString("utf8"));

  // Code blocks ```
  s = s.replace(/```(?:\w+)?\n([\s\S]*?)```/g, (_m, code) => `<pre class="rounded bg-muted/20 p-3 overflow-auto"><code>${escapeHtml(code)}</code></pre>`);

  // Headings
  s = s.replace(/^######\s+(.+)$/gim, "<h6 class=\"text-sm font-semibold\">$1</h6>");
  s = s.replace(/^#####\s+(.+)$/gim, "<h5 class=\"text-sm font-semibold\">$1</h5>");
  s = s.replace(/^####\s+(.+)$/gim, "<h4 class=\"text-base font-semibold\">$1</h4>");
  s = s.replace(/^###\s+(.+)$/gim, "<h3 class=\"text-lg font-semibold\">$1</h3>");
  s = s.replace(/^##\s+(.+)$/gim, "<h2 class=\"text-xl font-bold\">$1</h2>");
  s = s.replace(/^#\s+(.+)$/gim, "<h1 class=\"text-2xl font-bold\">$1</h1>");

  // Horizontal rules
  s = s.replace(/^[-*_]{3,}\s*$/gim, "<hr class=\"my-4 border-border\" />");

  // Bold/italic/underline/inline code
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/__(.+?)__/g, "<u>$1</u>");
  s = s.replace(/_(.+?)_/g, "<em>$1</em>");
  s = s.replace(/`(.+?)`/g, '<code class="bg-black/10 rounded px-0.5 font-mono text-xs">$1</code>');

  // Links: [label](href)
  s = s.replace(/\[(.+?)\]\((.+?)\)/g, (_m, label, href) => {
    const safe = sanitizeHref(href);
    return `<a href="${safe}" target="_blank" rel="noopener noreferrer" class=\"text-primary underline\">${label}</a>`;
  });

  // Images in markdown: ![alt](url)
  s = s.replace(/!\[(.*?)\]\((.+?)\)/g, (_m, alt, src) => {
    const safe = sanitizeHref(src);
    return `<img src=\"${safe}\" alt=\"${escapeHtml(alt)}\" class=\"max-w-full rounded\"/>`;
  });

  // List items -> <li>
  s = s.replace(/^\s*-\s+(.+)$/gim, "<li>$1</li>");
  // Wrap consecutive <li> into <ul>
  s = s.replace(/(?:<(?:li)[\s\S]*?<\/(?:li)>\s*)+/g, (m) => `<ul class=\"ml-4 list-disc space-y-1\">${m}</ul>`);

  // Paragraphs / line breaks: replace remaining double newlines with paragraphs
  s = s.replace(/\n{2,}/g, "\n\n");
  // Replace single newlines with <br/>
  s = s.replace(/\n/g, "<br/> ");

  return s;
}

function escapeHtml(s: string) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const raw = `# Frequently Asked Questions

## 1. How To Get Points?

You can get points by sharing accounts. You get **15 points** per account, also you can make **paid account**.



----------

## 2. The Account Sent Code To The Email?

If the account ask for **email otp** or **steam authenticator** that mean **the account not work** anymore, **report** the account to delete it.



> **Tip:** same for wrong password.

----------

## 3. The Account Ask For Rockstar/EA/Ubisoft?

1.  Open this website  [Steamfamily.online](https://steamfamily.online/#).
    
2.  Scroll down and select which launcher you want to bypass.
    
3.  install the software and select the game you want.
    
4.  apply the fix and launch the game.
    > **Tip:** Not All Games Are Supported.
<img src="https://i.ibb.co/rRZ8brwK/image.png" alt="Example" width="500" height="300">
----------

## 4. I Have Error When Login in To Steam?

<img src="https://cdn.appuals.com/wp-content/uploads/2025/03/Steam-error-code-e87.jpg" alt="Example" width="500" height="300">

This can be caused by two things: 
1. Too many people attempting to access the same account simultaneously.  
2. Your IP was banned because you attempted too many accounts in a short amount of time.


```
Unfortunately, the first cause cannot be resolved, however you might try changing your IP address with a VPN to address the second.

```


----------

## 5. Where can I get more help?

Join The Community:

-   [Telegram](https://t.me/Steam_Family)
    
-   [Community](https://t.me/Steam_Family)
    
-   Contact Support [contact@steamfamily.xyz](mailto:contact@steamfamily.xyz)
    
`;

export default function FAQPage(): JSX.Element {
  const html = renderMarkdown(raw);
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  );
}
