# Angular 21 – Recommended Scalable Project Structure (Hindi Guide)

Ye structure **enterprise / production level** Angular apps ke liye best practice hai – jisme layouts, shared components, services, static files sab clean tarike se manage hote hain.

---

## 📁 Final Folder Structure (Overview)

```
src/
 ├── app/
 │   ├── core/
 │   ├── shared/
 │   ├── layouts/
 │   ├── features/
 │   ├── app.routes.ts
 │   ├── app.config.ts
 │   └── app.component.ts
 │
 ├── assets/
 ├── environments/
 ├── styles/
 └── main.ts
```

---

# 1️⃣ Core Folder (App ka Engine Room)

📁 `app/core/`

Yahan wo cheezein hoti hain jo **poori app me ek hi baar use hoti hain**.

```
core/
 ├── services/
 │    ├── auth.service.ts
 │    ├── api.service.ts
 │    └── storage.service.ts
 │
 ├── guards/
 ├── interceptors/
 ├── resolvers/
 ├── models/
 └── core.module.ts (optional)
```

✅ Use for:

* Global services
* HTTP interceptors
* Auth guards
* App level models

❌ Feature specific services yahan mat rakho

---

# 2️⃣ Shared Folder (Reusable Cheezein)

📁 `app/shared/`

Jo cheezein **multiple modules / features me reuse hoti hain**.

```
shared/
 ├── components/
 │    ├── button/
 │    ├── modal/
 │    └── loader/
 │
 ├── directives/
 ├── pipes/
 ├── services/
 │    └── notification.service.ts
 │
 ├── ui/
 └── shared.module.ts
```

✅ Use for:

* Common UI components
* Pipes (date, currency etc)
* Directives
* Utility services

---

# 3️⃣ Layouts Folder (Main Layout System)

📁 `app/layouts/`

Yahan app ke **main page structures** hote hain.

```
layouts/
 ├── main-layout/
 │    ├── header/
 │    ├── sidebar/
 │    ├── footer/
 │    └── main-layout.component.ts
 │
 ├── auth-layout/
 │    └── auth-layout.component.ts
```

Examples:

* Dashboard layout
* Auth pages layout (login/register)

Routing me use hota hai:

```
/main → MainLayout
/login → AuthLayout
```

---

# 4️⃣ Features Folder (Real Business Logic)

📁 `app/features/`

Har **module / page / business feature** ka apna folder.

```
features/
 ├── dashboard/
 │    ├── components/
 │    ├── pages/
 │    ├── services/
 │    ├── dashboard.routes.ts
 │    └── dashboard.component.ts
 │
 ├── users/
 ├── products/
 └── orders/
```

## Feature Services kaha jayenge?

👉 Feature ke andar hi:

```
features/users/services/user.service.ts
```

✅ Isse lazy loading clean rehta hai

---

# 5️⃣ Assets Folder (Static Files)

📁 `src/assets/`

```
assets/
 ├── images/
 ├── icons/
 ├── fonts/
 ├── json/
 └── i18n/
```

Store here:

* Images
* Logos
* Language files
* Static JSON

---

# 6️⃣ Environments Folder

📁 `src/environments/`

```
environments/
 ├── environment.ts
 └── environment.prod.ts
```

API URLs, keys, flags yahan hoti hain.

---

# 7️⃣ Styles Folder (Optional but Professional)

📁 `src/styles/`

```
styles/
 ├── _variables.scss
 ├── _mixins.scss
 ├── theme.scss
 └── global.scss
```

---

# 8️⃣ Routing Structure (Angular 21 style)

Use **standalone routing + lazy loading**

```
app.routes.ts
```

Example:

```ts
{
  path: '',
  component: MainLayoutComponent,
  loadChildren: () => import('./features/dashboard/dashboard.routes')
}
```

---

# 🧠 Service Placement Summary

| Type               | Location            |
| ------------------ | ------------------- |
| Global API/Auth    | core/services       |
| Reusable utilities | shared/services     |
| Feature logic      | features/*/services |

---

# ✅ Best Practices

✔ Use standalone components
✔ Lazy load features
✔ Avoid huge shared module
✔ One feature = one folder
✔ No business logic in shared
✔ Keep core minimal

---

# 🚀 Recommended for You (Startup Project)

Tumhare case me:

```
features/
  ├── home
  ├── services
  ├── company
  ├── contact
  └── blog
```

Layouts:

* MainLayout
* AuthLayout

---

Agar chaho to main:

✅ Real project folder tree bana deta hoon
✅ GitHub style structure
✅ Sample repo layout
✅ Diagram

Bas bolo 👍
