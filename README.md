# Server-Side Vulnerabilities

This project explores common server-side vulnerabilities and their mitigations. It also contains solutions for challenges from **PortSwigger Labs**, providing a hands-on approach to web application security.

## Table of Contents
- [Vulnerabilities Covered](#vulnerabilities-covered)
  - [Path Traversal](#1-path-traversal)
  - [Access Control](#2-access-control)
  - [Authentication](#3-authentication)
  - [Server-Side Request Forgery (SSRF)](#4-server-side-request-forgery-ssrf)
  - [File Upload Vulnerabilities](#5-file-upload-vulnerabilities)
  - [OS Command Injection](#6-os-command-injection)
  - [SQL Injection](#7-sql-injection)
- [PortSwigger Labs Solutions](#portswigger-labs-solutions)

## Vulnerabilities Covered

### 1. **Path Traversal**
An attacker can manipulate file paths to access files outside the intended directory.

**Mitigation:** Sanitize file paths using built-in methods.

### 2. **Access Control**
Flawed permissions allow unauthorized access to restricted resources.

**Mitigation:** Implement strong role-based access control (RBAC).

### 3. **Authentication**
Weak authentication mechanisms expose sensitive areas of an application.

**Mitigation:** Use multi-factor authentication and secure session management.

### 4. **Server-Side Request Forgery (SSRF)**
An attacker sends malicious requests from the server to internal services.

**Mitigation:** Whitelist internal destinations and sanitize inputs.

### 5. **File Upload Vulnerabilities**
Improper file upload handling can lead to arbitrary file execution or denial of service.

**Mitigation:** Validate file types, and scan for malware.

### 6. **OS Command Injection**
An attacker injects commands that the server executes.

**Mitigation:** Avoid using user input in system commands.

### 7. **SQL Injection**
An attacker injects malicious SQL queries into an application.

**Mitigation:** Use parameterized queries to prevent SQL injection.

## PortSwigger Labs Solutions

This repo includes solutions for various **PortSwigger Labs** challenges, offering practical examples of exploiting and mitigating the above vulnerabilities.


