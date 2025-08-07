# EmailJS Setup Guide for Your Portfolio Contact Form

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account (allows 200 emails/month)

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or your preferred email provider
4. Follow the setup instructions to connect your email
5. **Copy the Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello Prasannaram,

You have a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. **Copy the Template ID** (you'll need this)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. **Copy your Public Key** (you'll need this)

### Step 5: Update Your .env File
Open the `.env` file in your project and replace the placeholder values:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Step 6: Deploy
```bash
npm run build
npm run deploy
```

## ✅ That's it! 

Your contact form will now send real emails to your inbox whenever someone contacts you through your portfolio.

## 🔧 Current Status:
- ✅ EmailJS installed and integrated
- ✅ Form has fallback demo mode if not configured
- ✅ Error handling for failed sends
- ⏳ **Waiting for you to add your EmailJS credentials**

## 📧 What happens when someone contacts you:
1. They fill out the form on your portfolio
2. EmailJS sends the message to your email inbox
3. You get notified and can respond directly

## 🆓 Free Plan Includes:
- 200 emails per month
- No credit card required
- Perfect for portfolio contact forms

Let me know when you've set up your EmailJS account and I can help you test it!
