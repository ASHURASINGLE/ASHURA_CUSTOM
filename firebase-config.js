<!-- firebase-config.js -->
<script type="module">
  // Import Firebase SDK modules
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCQRhzJWx2XYIdM30681Zoc6QI_t-IhzNw",
    authDomain: "ashurastore.firebaseapp.com",
    databaseURL: "https://ashurastore-default-rtdb.firebaseio.com",
    projectId: "ashurastore",
    storageBucket: "ashurastore.firebasestorage.app",
    messagingSenderId: "860052192821",
    appId: "1:860052192821:android:3b6739051a144ed25cbb7c"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase(app);

  window.auth = auth;
  window.db = db;
</script>
