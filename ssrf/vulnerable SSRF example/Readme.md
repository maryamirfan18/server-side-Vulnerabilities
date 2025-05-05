# 🛑 SSRF Vulnerability Example (Node.js)

This is a simple demonstration of a **Server-Side Request Forgery (SSRF)** vulnerability using Node.js and Express.

---
## 🚀 How to Run

### Install dependencies:

```bash
npm install express node-fetch body-parser
```
### Run the server:
```bash
node ssrf-example.js
```
---
### Exploiting the SSRF
You can simulate an SSRF attack by making a POST request like this:

```bash
curl -X POST http://localhost:3000/product/stock \
  -d "stockApi=http://localhost:3000/admin"
```
✅ If the server fetches and returns the /admin content, the SSRF works.

---
### How to Fix
✅ Validate and sanitize user input.

🚫 Block internal IP ranges (e.g., 127.0.0.1, 192.168.*.*).

✅ Use allowlists for safe URLs.

🚫 Never let users directly control full URLs.

---
### Disclaimer
This code is for educational purposes only.
Do not test it on any live or unauthorized systems.

