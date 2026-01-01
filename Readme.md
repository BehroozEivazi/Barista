# Node.js User Management API

این پروژه یک **API مدیریت کاربران** ساده با Node.js و TypeScript است که بر اساس اصول **Clean Architecture** و **SOLID** طراحی شده است.  
تمرکز اصلی پروژه روی **قابل تست بودن، تزریق وابستگی (DI)، و جداسازی لایه‌ها** است.

---

## 🔹 ویژگی‌ها

- ساختار **3 لایه‌ای**:
  1. **Domain / Models**: Entity ها، Interface ها و قوانین کسب‌وکار
  2. **Application / Services**: منطق و Use Case ها
  3. **Infrastructure**: Repository های دیتابیس، Mapper
- استفاده از **Mapper** برای تبدیل Entity → ViewModel
- **Dependency Injection** با استفاده از Interface ها
- **SOLID Principles**:
  - S: Single Responsibility
  - O: Open/Closed
  - L: Liskov Substitution
  - I: Interface Segregation
  - D: Dependency Inversion
- آماده برای Unit Testing با Mock کردن Interface ها

---

## 📂 ساختار پروژه
