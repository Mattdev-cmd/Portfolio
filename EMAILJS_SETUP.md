# EmailJS Setup Guide

Your contact form is ready to send real emails! Follow these steps:

## 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click **Sign Up** and create a free account
3. Verify your email

## 2. Get Your Public Key
1. Log in to EmailJS dashboard
2. Go to **Account** → **API Keys**
3. Copy your **Public Key**
4. Update in `src/components/Contact.tsx` line 17:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY'); // Replace YOUR_PUBLIC_KEY
   ```

## 3. Set Up Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Choose **Gmail** (or your email provider)
4. Follow the instructions to connect your email
5. Copy the **Service ID**
6. Update in `src/components/Contact.tsx` line 32:
   ```javascript
   'YOUR_SERVICE_ID', // Replace this
   ```

## 4. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Name it anything (e.g., "Contact Form")
4. Set the template content to:
   ```
   From: {{from_name}} ({{from_email}})
   
   {{message}}
   ```
5. Copy the **Template ID**
6. Update in `src/components/Contact.tsx` line 33:
   ```javascript
   'YOUR_TEMPLATE_ID', // Replace this
   ```

## 5. Test It
1. Run `npm run dev` locally
2. Fill out the contact form and submit
3. Check your email!

## 6. Deploy
Once working locally, push to GitHub:
```bash
git add .
git commit -m "add emailjs contact form integration"
git push origin main
```

Your portfolio will auto-deploy with the working contact form!

## Troubleshooting
- **Public Key error**: Make sure you copied the full Public Key
- **Not receiving emails**: Check your spam folder
- **Template variables not working**: Make sure the template uses `{{from_name}}`, `{{from_email}}`, and `{{message}}`
