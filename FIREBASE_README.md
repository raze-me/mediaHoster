# Firebase Configuration

This project is configured with Firebase for the Media Hoster application using **secure environment variables**.

## 🔒 Security Setup

Firebase credentials are stored in a `.env` file (not committed to git) and loaded server-side by Flask. The credentials are then passed to the frontend template, keeping your API keys secure.

## Firebase Configuration Details

The Firebase SDK has been initialized with the following configuration:

- **Project ID**: mediahoster-23e99
- **Auth Domain**: mediahoster-23e99.firebaseapp.com
- **Storage Bucket**: mediahoster-23e99.firebasestorage.app
- **Messaging Sender ID**: 789676520979
- **App ID**: 1:789676520979:web:8d45983176507669fb31e6
- **Measurement ID**: G-MBT3MK36CV

## Files Created

1. **`.env`** - Environment variables file (contains Firebase credentials, **NOT** in git)
2. **`.gitignore`** - Prevents .env from being committed to version control
3. **`requirements.txt`** - Python dependencies (Flask, python-dotenv)
4. **`app.py`** - Updated Flask app that loads .env and passes config to template
5. **`templates/index.html`** - Updated with Jinja2 template variables for Firebase config
6. **`static/js/firebase-config.js`** - Firebase configuration module (alternative approach)

## Installation & Setup

1. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. Import Firebase in your JavaScript files:
   ```javascript
   import { app, analytics } from './static/js/firebase-config.js';
   ```

## Adding Firebase Services

To use additional Firebase services, import them as needed:

### Authentication
```javascript
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth(app);
```

### Firestore Database
```javascript
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = getFirestore(app);
```

### Storage
```javascript
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const storage = getStorage(app);
```

## Testing

To test if Firebase is working:

1. Run your Flask app:
   ```bash
   python app.py
   ```

2. Open your browser and navigate to `http://localhost:5000`

3. Open the browser console (F12) - you should see "Firebase initialized successfully!"

## Security Note

⚠️ **Important**: The API key in this configuration is meant for client-side use and is safe to expose. However, make sure to:

1. Set up Firebase Security Rules for your database and storage
2. Enable only the authentication methods you need
3. Configure authorized domains in Firebase Console
4. Monitor usage in Firebase Console to prevent abuse

## Next Steps

1. Enable the Firebase services you need in the Firebase Console
2. Set up appropriate security rules
3. Implement authentication, database, or storage features as needed
