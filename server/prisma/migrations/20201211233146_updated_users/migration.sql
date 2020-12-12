-- CreateTable
CREATE TABLE `bookings` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT,
    `date` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `updated_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
INDEX `bookings_users_id_foreign`(`user_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `knex_migrations` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191),
    `batch` INT,
    `migration_time` DATETIME(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `knex_migrations_lock` (
    `index` INT NOT NULL AUTO_INCREMENT,
    `is_locked` INT,

    PRIMARY KEY (`index`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `companyName` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `regNumber` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `updated_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
UNIQUE INDEX `users.email_unique`(`email`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bookings` ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
