-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserLeave" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "month" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Annual leave',
    "meta" TEXT NOT NULL DEFAULT 'All Day',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_UserLeave" ("createdAt", "day", "id", "month", "title", "updatedAt") SELECT "createdAt", "day", "id", "month", "title", "updatedAt" FROM "UserLeave";
DROP TABLE "UserLeave";
ALTER TABLE "new_UserLeave" RENAME TO "UserLeave";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
