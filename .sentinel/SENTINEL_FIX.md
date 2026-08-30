# Sentinel proposed fix

Automated fix proposed by Sentinel for incident inc-checkout-svc-ce522b.

Root cause: See investigation logs

## Patch

```diff
--- a/api_monitoring_kestra.yaml
+++ b/api_monitoring_kestra.yaml
@@ -37,10 +37,11 @@
               response_time = -1
               http_status = -1
 
           hit = api['hits']
           totalRequests = api['totalRequests']
 
-          if http_status == 200 :
+          if http_status != -1:
+            totalRequests = totalRequests + 1
+            if http_status == 200 :
             hit = hit+1
-            totalRequests = totalRequests + 1
-          else :
-            totalRequests = totalRequests + 1
 
           query = {"_id": ObjectId(user['_id'])}
           new_values = {"$set": {"scheduledAPIs.$[elem].hits": hit, "scheduledAPIs.$[elem].totalRequests":totalRequests,"scheduledAPIs.$[elem].responseTime":response_time}}
```
