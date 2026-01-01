# Simple Node.js Layered Project

This is a **sample Node.js project** written in TypeScript to demonstrate a **layered architecture** inspired by the **Onion Architecture**.

> ⚠️ Note: This is **not a user management system**. It's a simple example project to showcase clean structure, SOLID principles, and dependency injection.

---

## 🏗️ Architecture

The project follows a **layered architecture** with clear separation of concerns:

```

src/
├── models/ # Entities, DTOs, ViewModels, and Interfaces
│ ├── entities/ # Domain models
│ ├── view-models/ # Response models
│ ├── dtos/ # Request models
│ ├── repositories/ # Repository interfaces
│ └── mappers/ # Mapper classes (Entity ↔ ViewModel)
│
├── repositories/ # Repository implementations (DB or in-memory)
├── services/ # Application / Business Logic layer
├── controllers/ # Express controllers (HTTP layer)
├── routes/ # Express routes
├── config/ # Configuration (e.g., database)
├── container.ts # Composition root / dependency injection
└── index.ts # Entry point

```

### Key Principles

- **Onion Architecture Inspired**: Inner layers (Entities, Interfaces) do not depend on outer layers (Infrastructure, HTTP)
- **Dependency Inversion**: High-level modules depend on abstractions, not concrete implementations
- **SOLID Principles**: Each layer has a clear responsibility
- **Testable**: Interfaces and DI make unit testing easy

---

## ⚡ Technologies

- Node.js & TypeScript
- Express.js
- PostgreSQL (optional)
- Jest (unit testing)

---

## 🛠️ Installation & Setup

1. Install dependencies:

```bash
npm install
```

2. Configure database connection in `src/config/database.ts` (if using PostgreSQL)

3. Run the project:

```bash
npm run dev
```

---

## 🚀 Usage

The project includes example routes to demonstrate **service → repository → mapper flow**:

| Method | Path         | Description                  |
| ------ | ------------ | ---------------------------- |
| GET    | `/items`     | Retrieve all sample items    |
| GET    | `/items/:id` | Retrieve a single item by ID |
| POST   | `/items`     | Create a new sample item     |

> Note: The "items" are just example entities for demonstration purposes.

---

## 🧩 Flow of Data

1. **Controller** receives the HTTP request
2. **Service** handles business logic via repository interface
3. **Mapper** converts internal Entity to ViewModel
4. Response is returned to the client

---

## 🧪 Unit Testing

Thanks to the use of **interfaces and dependency injection**, services and controllers can be tested with mocks:

```ts
const mockService: IItemService = {
  getItems: jest.fn().mockResolvedValue([...]),
  getItemById: jest.fn().mockResolvedValue({...}),
  createItem: jest.fn(),
};

const controller = new ItemController(mockService);
```

---

## ✅ Key Takeaways

- Mapper is **pure and stateless**
- Services depend on **interfaces, not concrete classes**
- Controllers only handle HTTP, not business logic
- Null / error handling is done in the **service layer**
