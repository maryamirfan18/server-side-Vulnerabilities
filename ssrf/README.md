# What is SSRF?
SSRF (Server-Side Request Forgery) is a security flaw that lets a hacker trick a website's server into making a request either to itself, to another internal system, or to an outside system the hacker controls.

## Why is that bad?
-The hacker uses the server like a puppet.<br>
-The server may access internal systems that are not meant to be public.<br>
-It can leak sensitive data, like passwords or cloud keys.<br>
-Sometimes, SSRF can even help attackers bypass firewalls or scan internal networks.<br>

### Example:
A website lets you enter a URL to "fetch" an image:

https://example.com/fetch?url=http://example.org/image.jpg <br>
A hacker changes the URL to:<br>

https://example.com/fetch?url=http://localhost:8080/admin <br>
Now the server tries to open its own admin page, which the hacker normally couldn’t reach from the outside. <br> 

## What can happen with SSRF?
-Access to internal IPs and services (e.g., 127.0.0.1 or cloud metadata URLs).<br>
-Read sensitive files or internal APIs.<br>
-Sometimes escalate to Remote Code Execution (RCE).<br>

