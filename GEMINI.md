# AmaahPay — Gemini CLI Context

This project is a subscription-based business management platform built with **Flutter**. It is designed for merchants to track customer credit/deposits, manage product sales, and generate reports. The platform supports dual-user roles (Admin/Merchant), bilingual UI (English/Somali), and dual-currency display (USD/SOS).

## Project Overview

- **Framework:** Flutter (Dart ^3.11.4)
- **State Management:** Riverpod (`flutter_riverpod`)
- **Routing:** GoRouter (`go_router`) with role-based redirects.
- **Backend:** Supabase (`supabase_flutter`) for Auth and remote DB.
- **Local Storage:** `sqflite` (SQLite) for offline-first data management and `shared_preferences` for settings.
- **Architecture:** Offline-first. UI reads from local SQLite; writes are committed locally first and then synced to Supabase.

## Directory Structure

- `lib/core/`: Application-wide constants, routing, theme, and utility functions.
- `lib/data/`: Data layer containing models, local/remote service abstractions, and repositories.
- `lib/features/`: Feature-based modules (Auth, Admin, Merchant Home, Customers, Products, Sales, Settings).
- `lib/shared/`: Reusable UI components and widgets across features.
- `supabase/`: Supabase configuration and migration files.

## Building and Running

### Prerequisites
- Flutter SDK (^3.11.4)
- Android Studio / Xcode for emulators
- Supabase project for backend services

### Key Commands
- `flutter pub get`: Get dependencies.
- `flutter run`: Run the application.
- `flutter test`: Run automated tests.
- `flutter analyze`: Check for linting issues.
- `flutter format lib/`: Format source code.

## Development Conventions

- **State Management:** Use Riverpod Notifiers for complex state and Providers for simple data exposure.
- **Routing:** Define all routes in `lib/core/routing/router.dart`. Use `context.go()` for navigation.
- **Data Models:** Use `fromJson` and `toJson` for serialization. Handle numeric types safely: `(json['field'] as num?)?.toDouble() ?? 0.0`.
- **Theming:** Use `NeoTheme` defined in `lib/core/constants/app_theme.dart`. Access colors and spacing via `C`, `S`, `R`, `T`, and `D` helper classes.
- **Dual Currency:** Use `DualCurrencyText` widget for displaying USD and SOS simultaneously.
- **Role-Based Access:** 
    - `admin`: Full control over merchant users and billing.
    - `merchant`: Access to customers, products, and sales (requires active subscription).
- **Offline-First:** All data writes should go through a repository that handles local persistence first, followed by background synchronization to Supabase.

## Key Logic

- **Credit/Deposit Logic:** 
    - Deposits deduct from outstanding credit first; the remainder goes to the deposit balance.
    - Sales deduct from the deposit balance first; the remainder becomes outstanding credit.
- **Billing Lifecycle:**
    - New accounts are disabled by default.
    - Admin activates accounts after payment, setting a 30-day or 12-month cycle.
    - Automatic deactivation occurs at the end of the billing cycle.
    - In-app warnings appear 3 days before expiry.

## TODO / Missing Implementations
- **Local DB:** `lib/data/local` and `lib/data/repositories` need implementation for the offline-first sync logic.
- **Migrations:** Ensure Supabase migrations in `supabase/migrations/` match the local SQLite schema.
