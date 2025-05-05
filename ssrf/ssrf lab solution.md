These labs are taken from Portswigger Academy
# Lab: Basic SSRF against the local server <br>
### This lab has a stock check feature which fetches data from an internal system.To solve the lab, change the stock check URL to access the admin interface at http://localhost/admin and delete the user carlos. <br>

### Solution:
1. Browse to /admin and observe that you can't directly access the admin page.<br>
2. Visit a product, click "Check stock", intercept the request in Burp Suite, and send it to Burp Repeater.<br>
3. Change the URL in the stockApi parameter to http://localhost/admin. This should display the administration interface.<br>
4. Read the HTML to identify the URL to delete the target user, which is:<br>
http://localhost/admin/delete?username=carlos<br>
5. Submit this URL in the stockApi parameter, to deliver the SSRF attack.<br>

---
# Lab: Basic SSRF against another back-end system 
### This lab has a stock check feature which fetches data from an internal system. To solve the lab, use the stock check functionality to scan the internal 192.168.0.X range for an admin interface on port 8080, then use it to delete the user carlos.

### Solution:
1. Visit a product, click Check stock, intercept the request in Burp Suite, and send it to Burp Intruder.
2. Change the stockApi parameter to http://192.168.0.1:8080/admin then highlight the final octet of the IP address (the number 1) and click Add §.
3. In the Payloads side panel, change the payload type to Numbers, and enter 1, 255, and 1 in the From and To and Step boxes respectively.
4. Click  Start attack.\
5. Click on the Status column to sort it by status code ascending. You should see a single entry with a status of 200, showing an admin interface.
6. Click on this request, send it to Burp Repeater, and change the path in the stockApi to: /http://192.168.0.80:8080/admin/delete?username=carlos"


