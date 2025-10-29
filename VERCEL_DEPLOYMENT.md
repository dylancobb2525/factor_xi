# 🚀 Vercel Deployment Guide

## The Issue You Encountered

The error `No Next.js version detected` happened because Vercel was looking for the Next.js app at the repository root, but your app is in the `AlzDiseaseLC` subdirectory.

## ✅ Solution: Set Root Directory in Vercel

Follow these exact steps:

### Step 1: Access Your Vercel Project
1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. If you already created the project, go to your project settings
   - OR if starting fresh, click "Add New Project"

### Step 2: Configure Root Directory

**If Creating New Project:**
1. Click "Import Project"
2. Connect to GitHub and select: `dylancobb2525/factor_xi`
3. **Before clicking Deploy**, look for "Root Directory" setting
4. Click "Edit" next to Root Directory
5. Type: `AlzDiseaseLC`
6. Click "Continue" then "Deploy"

**If Project Already Exists:**
1. Go to your project dashboard
2. Click "Settings" tab
3. Scroll to "Root Directory" section
4. Click "Edit"
5. Type: `AlzDiseaseLC`
6. Click "Save"
7. Go to "Deployments" tab
8. Click "Redeploy" on the latest deployment

### Step 3: Verify Settings

Once configured, your settings should show:
- **Framework Preset**: Next.js
- **Root Directory**: AlzDiseaseLC
- **Build Command**: (auto-detected) `npm run build`
- **Output Directory**: (auto-detected) `.next`
- **Install Command**: (auto-detected) `npm install`

### Step 4: Deploy

Click "Deploy" and Vercel will:
1. ✅ Clone the repository
2. ✅ Navigate to `AlzDiseaseLC` directory
3. ✅ Find `package.json` with Next.js
4. ✅ Install dependencies
5. ✅ Build the application
6. ✅ Deploy successfully

## 📸 Visual Guide

Look for this in Vercel's interface:

```
Build & Development Settings
├── Framework Preset: Next.js
├── Root Directory: [Edit] ← CLICK HERE
│   Enter: AlzDiseaseLC
├── Build Command: npm run build
├── Output Directory: .next
└── Install Command: npm install
```

## 🆘 Troubleshooting

### If you still see the error:
1. Double-check Root Directory is set to `AlzDiseaseLC` (case-sensitive)
2. Make sure you saved the settings
3. Try redeploying from the Deployments tab

### If build succeeds but page doesn't load:
1. Check the deployment URL logs
2. Verify all environment variables are set (if any)

## 🎉 Expected Result

After successful deployment, you'll see:
- ✅ Build completed successfully
- ✅ Deployment ready at `https://your-project.vercel.app`
- ✅ All pages loading correctly
- ✅ Images displaying properly
- ✅ Animations working

## 📞 Need Help?

If you encounter any issues:
1. Check Vercel deployment logs for specific errors
2. Verify the build works locally: `cd AlzDiseaseLC && npm run build`
3. Ensure all dependencies are listed in `package.json`

---

**Repository**: https://github.com/dylancobb2525/factor_xi.git  
**Main Branch**: main  
**App Directory**: AlzDiseaseLC

