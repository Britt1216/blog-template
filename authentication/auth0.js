  
<!DOCTYPE html>
<html>
  <head>
    <script src="/auth0.js"></script>
    <script type="text/javascript">
      var auth0 = new auth0.WebAuth({
        domain: 'auth0-tests-auth0js.auth0.com',
        redirectUri: 'https://localhost:3000/example',
        clientID: '3GGMIEuBPZ28lb6NBDNARaEZisqFakAs',
        responseType: 'token'
      });
      auth0.crossOriginVerification();
    </script>
  </head>

  <body></body>
</html>